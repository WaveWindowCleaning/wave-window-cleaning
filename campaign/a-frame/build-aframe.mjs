/**
 * Wave Window Cleaning — 24" x 36" A-frame (sidewalk sign) builder
 * -----------------------------------------------------------------------------
 * Curbside, phone-forward sign read from a passing car while Teancum works a job.
 *   Top 1/3    → SOCIAL PROOF headline ("cleaning your neighbors' windows")
 *   Middle 1/3 → Brand: COMMERCIAL icon · WAVE logo · RESIDENTIAL icon
 *   Bottom 1/3 → CTA callout + HUGE phone + large scannable QR
 * Same artwork prints on both sides. Strict palette: navy + high-contrast white.
 *
 * Print spec (VistaPrint 24" x 36" A-frame):
 *   Trim ......... 24 x 36 in
 *   Bleed ........ 0.125 in each edge  ->  full page 24.25 x 36.25 in
 *   Safety ....... ~1.0 in inside trim (frame lip covers the outer band)
 *
 * Convert to PDF/PNG with: node campaign/a-frame/generate-pdf.mjs
 */
import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Real, working business number (NOT the 555 placeholder from the template).
const PHONE = '(435) 229-5674'
const SITE = 'cleanwavewindows.com'
const STARS = '\u2605\u2605\u2605\u2605\u2605'

// Clean, thin-line icons that echo the wave logo's stroke aesthetic.
const ICON_COMMERCIAL = `
  <svg viewBox="0 0 64 64" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="13" y="8" width="38" height="50"/>
    <line x1="8" y1="58" x2="56" y2="58"/>
    <rect x="20" y="15" width="7" height="7"/><rect x="37" y="15" width="7" height="7"/>
    <rect x="20" y="27" width="7" height="7"/><rect x="37" y="27" width="7" height="7"/>
    <rect x="27" y="43" width="10" height="15"/>
  </svg>`
const ICON_RESIDENTIAL = `
  <svg viewBox="0 0 64 64" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 31 L32 10 L56 31"/>
    <path d="M15 27 V57 H49 V27"/>
    <rect x="28" y="42" width="8" height="15"/>
    <rect x="20" y="34" width="7" height="7"/><rect x="37" y="34" width="7" height="7"/>
  </svg>`

function page() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
<title>Wave Window Cleaning — A-frame</title>
<style>
  :root{
    --navy:#1A3D54;
    --navy-dark:#0F2535;
    --navy-mid:#1E4F6B;
  }
  *{ margin:0; padding:0; box-sizing:border-box; -webkit-print-color-adjust:exact; print-color-adjust:exact; }
  html,body{ font-family:'Inter',system-ui,-apple-system,sans-serif; }
  @page{ size:24.25in 36.25in; margin:0; }

  .sign{
    width:24.25in; height:36.25in; position:relative; overflow:hidden;
    background:linear-gradient(168deg,#0F2535 0%,#1A3D54 55%,#1E4F6B 100%);
    color:#fff; text-align:center;
    display:flex; flex-direction:column; align-items:center; justify-content:space-between;
    /* 0.125in bleed + ~1.0in safe = 1.125in; use 1.5in for comfortable negative space */
    padding:1.6in 1.5in 1.5in;
  }
  /* Faint texture for depth (prints clean) */
  .sign::before{
    content:""; position:absolute; inset:0; opacity:.05; pointer-events:none;
    background-image:radial-gradient(circle, #fff 2px, transparent 2px);
    background-size:0.6in 0.6in;
  }
  .sign > *{ position:relative; z-index:1; }

  /* Proof guides — only with <body class="proof"> */
  .trim,.safe{ display:none; }
  body.proof .trim{ display:block; position:absolute; inset:0.125in; border:2px dashed rgba(255,80,80,.7); z-index:99; }
  body.proof .safe{ display:block; position:absolute; inset:1.125in; border:2px dashed rgba(90,180,255,.7); z-index:99; }

  /* ── TOP: banner + rule + logo ─────────────────────────────────────── */
  .head{ width:100%; }
  .header{
    width:100%; text-align:center; font-size:60pt; font-weight:900;
    letter-spacing:.03em; text-transform:uppercase; color:#fff; line-height:1.0;
  }
  .rule{ width:100%; height:0.05in; background:rgba(255,255,255,.9); margin-top:0.45in; border-radius:2px; }
  .brandmark img{ width:14in; height:auto; display:block; margin:0 auto; }

  /* ── BOTTOM: phone (left) + QR (right of centerline) ───────────────── */
  .row{ width:100%; display:flex; align-items:center; justify-content:space-between; gap:0.7in; }
  .phoneblock{ flex:1 1 auto; text-align:center; }
  .phoneblock .lbl{ font-size:30pt; font-weight:800; letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.8); }
  .phoneblock .phone{ margin-top:0.2in; font-size:74pt; font-weight:900; letter-spacing:-.03em; line-height:1.0; color:#fff; white-space:nowrap; }
  .qrblock{ flex:0 0 auto; display:flex; flex-direction:column; align-items:center; }
  .qrbox{ background:#fff; border-radius:0.32in; padding:0.36in; box-shadow:0 22px 55px rgba(0,0,0,.4); }
  .qrbox img{ width:9in; height:9in; display:block; }
  .qrblock .qrlbl{ margin-top:0.3in; font-size:28pt; font-weight:700; color:#fff; }
</style>
</head>
<body class="{{BODYCLASS}}">
  <div class="sign">
    <div class="trim"></div><div class="safe"></div>

    <div class="head">
      <div class="header">Window Cleaning in Progress</div>
      <div class="rule"></div>
    </div>

    <div class="brandmark"><img src="assets/logo-white.png" alt="Wave Window Cleaning" /></div>

    <div class="row">
      <div class="phoneblock">
        <div class="lbl">Call or text</div>
        <div class="phone">${PHONE}</div>
      </div>
      <div class="qrblock">
        <div class="qrbox"><img src="assets/qr-aframe.png" alt="Scan for a free quote" /></div>
        <div class="qrlbl">Scan for a free quote</div>
      </div>
    </div>
  </div>
</body>
</html>`
}

async function run() {
  const proof = process.env.PROOF === '1'
  const html = page().replace('{{BODYCLASS}}', proof ? 'proof' : '')
  await writeFile(join(__dirname, 'aframe.html'), html, 'utf8')
  console.log(`\u2713 aframe.html${proof ? ' (proof guides ON)' : ''}`)
  console.log('\nA-frame built. Next: node campaign/a-frame/generate-pdf.mjs')
}

run().catch((e) => { console.error(e); process.exit(1) })
