/**
 * Renders the A-frame HTML into:
 *   - Print-ready PDF   (out/aframe.pdf)  — 24.25 x 36.25in, full bleed, 1 page
 *   - Preview PNG       (out/aframe.png)  for visual QA
 *
 * The print PDF is FLATTENED: the sign is rendered to a high-resolution image
 * and placed onto the page, so the PDF contains NO fonts. This guarantees it
 * passes VistaPrint preflight ("unembedded fonts") and, for large-format read
 * from a distance, ~150 DPI is plenty sharp.
 *
 * Run: node campaign/a-frame/generate-pdf.mjs
 */
import puppeteer from 'puppeteer'
import { mkdir, readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'out')

const PAGE_W_IN = 24.25
const PAGE_H_IN = 36.25
const CSS_W = Math.round(PAGE_W_IN * 96) // 2328
const CSS_H = Math.round(PAGE_H_IN * 96) // 3480
const DPI = 150
const SCALE = DPI / 96 // 1.5625 => ~150 DPI raster

async function run() {
  await mkdir(OUT, { recursive: true })
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })

  const page = await browser.newPage()
  await page.setViewport({ width: CSS_W, height: CSS_H, deviceScaleFactor: SCALE })
  await page.goto(pathToFileURL(join(__dirname, 'aframe.html')).href, { waitUntil: 'networkidle0' })
  await page.evaluate(async () => { if (document.fonts) await document.fonts.ready })

  // High-res raster of the sign (also serves as the QA preview).
  const sign = await page.$('.sign')
  const pngPath = join(OUT, 'aframe.png')
  await sign.screenshot({ path: pngPath })
  await page.close()

  // Build a flattened, font-free PDF from the rasterized sign.
  const img = `data:image/png;base64,${(await readFile(pngPath)).toString('base64')}`
  const flatHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    @page { size: ${PAGE_W_IN}in ${PAGE_H_IN}in; margin: 0; }
    * { margin: 0; padding: 0; }
    .pg { width: ${PAGE_W_IN}in; height: ${PAGE_H_IN}in; overflow: hidden; }
    .pg img { width: ${PAGE_W_IN}in; height: ${PAGE_H_IN}in; display: block; }
  </style></head><body>
    <div class="pg"><img src="${img}"></div>
  </body></html>`

  const flat = await browser.newPage()
  await flat.setContent(flatHtml, { waitUntil: 'networkidle0' })
  await flat.pdf({
    path: join(OUT, 'aframe.pdf'),
    width: `${PAGE_W_IN}in`,
    height: `${PAGE_H_IN}in`,
    printBackground: true,
    preferCSSPageSize: true,
  })
  await flat.close()

  await browser.close()
  console.log('\u2713 aframe: flattened PDF (no fonts) + preview PNG')
  console.log('\nDone \u2192', OUT)
}

run().catch((e) => { console.error(e); process.exit(1) })
