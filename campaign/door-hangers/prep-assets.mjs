/**
 * Prepares all imagery used by the door-hanger print files.
 *
 *  1. logo-white.png  — transparent-background, pure-white version of the Wave
 *     lockup (for placing on the navy header). Derived from the brand logo by
 *     mapping luminance → alpha, then trimming.
 *  2. teancum.jpg     — the high-quality "owner with pole" trust photo, copied
 *     into /public and /campaign assets.
 *  3. proof-before/after.jpg — hard-water removal proof shots.
 *  4. qr-a.png / qr-b.png — copied from /public/qr.
 *
 * Run: node campaign/door-hangers/prep-assets.mjs
 */
import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import os from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..', '..')
const ASSETS_OUT = join(__dirname, 'assets')
const PUBLIC = join(ROOT, 'public')

const PROJECT_ASSETS = join(
  os.homedir(),
  '.cursor', 'projects', 'c-Users-teanc-Cleanwavewindows-com', 'assets'
)

const SRC = {
  logo: join(PROJECT_ASSETS, 'c__Users_teanc_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Wave_logo-011799d7-2c93-4ddf-b194-374766b46e5d.png'),
  pole: join(PROJECT_ASSETS, 'c__Users_teanc_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_ChatGPT_Image_of_me_with_pole-1d7d9d01-95fe-4e83-9583-91e8ef0f3bb2.png'),
  before: join(PUBLIC, 'hardwater-before.png'),
  after: join(PUBLIC, 'hardwater-after.png'),
  qrA: join(PUBLIC, 'qr', 'lp-a-free-screens.png'),
  qrB: join(PUBLIC, 'qr', 'lp-b-25-off.png'),
}

async function makeWhiteLogo() {
  const img = sharp(SRC.logo).ensureAlpha()
  const meta = await img.metadata()
  const W = meta.width, H = meta.height
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
  const ch = info.channels // 4 (ensureAlpha above)

  const LOW = 75, HIGH = 160
  // Kill the small decorative diamond in the bottom-right corner so the
  // extracted lockup is clean (no floating glyph inflating the bounding box).
  const cornerX = Math.floor(W * 0.74)
  const cornerY = Math.floor(H * 0.80)

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * ch
      const r = data[i], g = data[i + 1], b = data[i + 2]
      const L = 0.299 * r + 0.587 * g + 0.114 * b
      let a = Math.round(((L - LOW) / (HIGH - LOW)) * 255)
      if (a < 0) a = 0
      if (a > 255) a = 255
      if (x > cornerX && y > cornerY) a = 0
      // force pure white artwork
      data[i] = 255; data[i + 1] = 255; data[i + 2] = 255; data[i + 3] = a
    }
  }

  const out = join(ASSETS_OUT, 'logo-white.png')
  await sharp(data, { raw: { width: W, height: H, channels: 4 } })
    .png()
    .trim({ threshold: 1 })
    .toFile(out)
  console.log('✓ logo-white.png')
}

async function run() {
  await mkdir(ASSETS_OUT, { recursive: true })

  await makeWhiteLogo()

  // ── Trust photo — reframe so the FULL water-fed pole + brush head show ──────
  // The raw studio shot is ~square with the brush at top-left and the owner
  // centre-right. A tight portrait crop clips the brush, so instead we keep the
  // top + left fully intact (brush + pole) and trim only the right-side
  // background and below-the-belt area. No distortion, no upscaling.
  const poleMeta = await sharp(SRC.pole).metadata()
  const cropW = Math.round(poleMeta.width * 0.86)   // trim ~14% of right background
  const cropH = Math.round(poleMeta.height * 0.80)  // trim below the waist
  // The source is a modest ~1024px image, so at print size it prints soft.
  // Upscale 2x with a high-quality filter + a gentle sharpen to maximize
  // perceived crispness (won't invent detail, but noticeably cleaner for print).
  const UPSCALE = 2
  const framed = () =>
    sharp(SRC.pole)
      .extract({ left: 0, top: 0, width: cropW, height: cropH })
      .resize({ width: cropW * UPSCALE, kernel: 'lanczos3' })
      .sharpen({ sigma: 1.1 })
      .jpeg({ quality: 96 })
  await framed().toFile(join(PUBLIC, 'teancum.jpg'))
  await framed().toFile(join(ASSETS_OUT, 'teancum.jpg'))
  console.log(`✓ teancum.jpg reframed + upscaled to ${cropW * UPSCALE}x${cropH * UPSCALE} (sharpened for print)`)

  await copyFile(SRC.before, join(ASSETS_OUT, 'proof-before.png'))
  await copyFile(SRC.after, join(ASSETS_OUT, 'proof-after.png'))
  console.log('✓ proof-before/after.png')

  await copyFile(SRC.qrA, join(ASSETS_OUT, 'qr-a.png'))
  console.log('✓ qr-a.png')

  // Also stash the white logo into /public for potential on-site use.
  await copyFile(join(ASSETS_OUT, 'logo-white.png'), join(PUBLIC, 'logo-white.png'))
  console.log('✓ logo-white.png copied to /public')

  console.log('\nAsset prep complete →', ASSETS_OUT)
}

run().catch((e) => { console.error(e); process.exit(1) })
