/**
 * Renders the door-hanger HTML into:
 *   - Print-ready PDF   (out/<file>.pdf)  — 4.5 x 11.25in, full bleed, 2 pages
 *   - Preview PNGs      (out/<file>-front.png / -back.png) for visual QA
 *
 * Run: node campaign/door-hangers/generate-pdf.mjs
 */
import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'out')

const FILES = ['version-a.html']

async function run() {
  await mkdir(OUT, { recursive: true })
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] })

  for (const file of FILES) {
    const base = file.replace('.html', '')
    const page = await browser.newPage()
    await page.setViewport({ width: 432, height: 1080, deviceScaleFactor: 3 })
    await page.goto(pathToFileURL(join(__dirname, file)).href, { waitUntil: 'networkidle0' })
    // Ensure webfonts are fully ready before capturing.
    await page.evaluate(async () => { if (document.fonts) await document.fonts.ready })

    // PDF — exact full-bleed page size, backgrounds on.
    await page.pdf({
      path: join(OUT, `${base}.pdf`),
      width: '4.5in',
      height: '11.25in',
      printBackground: true,
      pageRanges: '1-2',
      preferCSSPageSize: true,
    })

    // PNG previews (one per sheet).
    const sheets = await page.$$('.sheet')
    const labels = ['front', 'back']
    for (let i = 0; i < sheets.length; i++) {
      await sheets[i].screenshot({ path: join(OUT, `${base}-${labels[i] || i}.png`) })
    }

    console.log(`\u2713 ${base}: PDF + ${sheets.length} preview PNG(s)`)
    await page.close()
  }

  await browser.close()
  console.log('\nDone \u2192', OUT)
}

run().catch((e) => { console.error(e); process.exit(1) })
