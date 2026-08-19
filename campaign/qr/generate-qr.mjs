/**
 * Wave Window Cleaning — QR code generator
 *
 * Generates high-resolution, print-ready QR codes for the two door-hanger
 * A/B variants. Each code points to a dedicated, UTM-tagged landing page so
 * scans are fully attributable in Google Analytics / any analytics tool.
 *
 * Output (written to /public/qr and /campaign/qr/out):
 *   - lp-a-free-screens.png  (2000px, high error-correction, print-ready)
 *   - lp-a-free-screens.svg  (vector, infinitely scalable)
 *   - lp-b-25-off.png
 *   - lp-b-25-off.svg
 *
 * Run:  node campaign/qr/generate-qr.mjs
 */
import QRCode from 'qrcode'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..', '..')

// Brand navy so the code is on-brand rather than generic black.
// (Kept dark enough to preserve high scan-contrast against white.)
const NAVY = '#1A3D54'
const WHITE = '#FFFFFF'

/**
 * Landing-page destinations. UTM params let you see exactly which door-hanger
 * version drove each scan, lead, and booked job.
 */
const TARGETS = [
  {
    // Points at the LIVE, deployed quote form so scans work immediately.
    // (The dedicated /lp/free-screens landing page isn't deployed yet.)
    slug: 'lp-a-free-screens',
    url:
      'https://cleanwavewindows.com/quote' +
      '?utm_source=doorhanger&utm_medium=print&utm_campaign=eddm-stgeorge-2026&utm_content=version-a-free-screens',
  },
]

// High error correction ('H') = up to 30% of the code can be damaged/dirty
// (a real concern for a hanger left on a door) and still scan reliably.
const OPTS = {
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: NAVY, light: WHITE },
}

async function run() {
  const outDirs = [join(ROOT, 'public', 'qr'), join(__dirname, 'out')]
  for (const d of outDirs) await mkdir(d, { recursive: true })

  for (const { slug, url } of TARGETS) {
    // PNG — 2000px is comfortably print-ready even at large sizes.
    const pngBuf = await QRCode.toBuffer(url, { ...OPTS, type: 'png', width: 2000 })
    // SVG — vector source for designers / infinite scaling.
    const svg = await QRCode.toString(url, { ...OPTS, type: 'svg', width: 2000 })

    for (const d of outDirs) {
      await writeFile(join(d, `${slug}.png`), pngBuf)
      await writeFile(join(d, `${slug}.svg`), svg)
    }
    console.log(`✓ ${slug}\n    → ${url}`)
  }
  console.log('\nAll QR codes generated (PNG + SVG) in /public/qr and /campaign/qr/out')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
