/**
 * Renders the door-hanger HTML into:
 *   - Print-ready PDF   (out/<file>.pdf)  — 4.5 x 11.25in, full bleed, 2 pages
 *   - Preview PNGs      (out/<file>-front.png / -back.png) for visual QA
 *
 * The print PDF is FLATTENED: each side is rendered to a high-resolution (384 DPI)
 * image and placed onto the page, so the PDF contains NO fonts. This guarantees it
 * passes print-shop preflight (e.g. VistaPrint's "unembedded fonts" check) while
 * staying crisp for print.
 *
 * Run: node campaign/door-hangers/generate-pdf.mjs
 */
import puppeteer from 'puppeteer'
import { mkdir, readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'out')

const FILES = ['version-a.html']

// 4.5in x 11.25in full-bleed page. deviceScaleFactor 4 => ~384 DPI raster.
const PAGE_W_IN = 4.5
const PAGE_H_IN = 11.25
const CSS_W = PAGE_W_IN * 96 // 432
const CSS_H = PAGE_H_IN * 96 // 1080
const SCALE = 4

async function run() {
  await mkdir(OUT, { recursive: true })
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })

  for (const file of FILES) {
    const base = file.replace('.html', '')
    const page = await browser.newPage()
    await page.setViewport({ width: CSS_W, height: CSS_H, deviceScaleFactor: SCALE })
    await page.goto(pathToFileURL(join(__dirname, file)).href, { waitUntil: 'networkidle0' })
    // Ensure webfonts are fully ready before capturing.
    await page.evaluate(async () => { if (document.fonts) await document.fonts.ready })

    // High-res raster of each sheet (also serves as the QA preview).
    const sheets = await page.$$('.sheet')
    const labels = ['front', 'back']
    const pngPaths = []
    for (let i = 0; i < sheets.length; i++) {
      const p = join(OUT, `${base}-${labels[i] || i}.png`)
      await sheets[i].screenshot({ path: p })
      pngPaths.push(p)
    }
    await page.close()

    // Build a flattened, font-free PDF from the rasterized sides.
    const imgs = await Promise.all(
      pngPaths.map(async (p) => `data:image/png;base64,${(await readFile(p)).toString('base64')}`)
    )
    const flatHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      @page { size: ${PAGE_W_IN}in ${PAGE_H_IN}in; margin: 0; }
      * { margin: 0; padding: 0; }
      .pg { width: ${PAGE_W_IN}in; height: ${PAGE_H_IN}in; overflow: hidden; page-break-after: always; }
      .pg:last-child { page-break-after: auto; }
      .pg img { width: ${PAGE_W_IN}in; height: ${PAGE_H_IN}in; display: block; }
    </style></head><body>
      ${imgs.map((src) => `<div class="pg"><img src="${src}"></div>`).join('')}
    </body></html>`

    const flat = await browser.newPage()
    await flat.setContent(flatHtml, { waitUntil: 'networkidle0' })
    await flat.pdf({
      path: join(OUT, `${base}.pdf`),
      width: `${PAGE_W_IN}in`,
      height: `${PAGE_H_IN}in`,
      printBackground: true,
      preferCSSPageSize: true,
    })
    await flat.close()

    console.log(`\u2713 ${base}: flattened PDF (no fonts) + ${sheets.length} preview PNG(s)`)
  }

  await browser.close()
  console.log('\nDone \u2192', OUT)
}

run().catch((e) => { console.error(e); process.exit(1) })
