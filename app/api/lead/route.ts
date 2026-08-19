import { NextResponse } from 'next/server'
import { appendFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

// Node runtime required for filesystem CSV backup.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Lead intake endpoint for the door-hanger landing pages (Version A & B).
 *
 * On submit it does THREE things so no lead is ever lost:
 *   1. Emails the full lead to teancum@cleanwavewindows.com (via Web3Forms).
 *   2. Appends the lead to a Google Sheet (via an Apps Script webhook) — this is
 *      the "spreadsheet for future follow-up".
 *   3. Writes a local CSV backup (data/leads.csv) when running on a writable
 *      filesystem (local dev / VPS). No-ops silently on read-only serverless FS.
 *
 * Setup (see docs/LEAD-SETUP.md):
 *   WEB3FORMS_ACCESS_KEY        — server key (falls back to the public one)
 *   LEADS_SHEET_WEBHOOK_URL     — Google Apps Script web-app URL
 */

const OWNER_EMAIL = 'teancum@cleanwavewindows.com'

interface LeadPayload {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  address?: string
  services?: string[] | string
  notes?: string
  variant?: string // 'A' | 'B'
  offer?: string
  utm?: Record<string, string>
}

function clean(v: unknown): string {
  return String(v ?? '').replace(/[\r\n]+/g, ' ').trim()
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, '').length >= 10
}

function csvCell(v: string): string {
  const s = v.replace(/"/g, '""')
  return `"${s}"`
}

export async function POST(req: Request) {
  let body: LeadPayload
  try {
    body = (await req.json()) as LeadPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON.' }, { status: 400 })
  }

  const firstName = clean(body.firstName)
  const lastName = clean(body.lastName)
  const phone = clean(body.phone)
  const email = clean(body.email)
  const address = clean(body.address)
  const services = Array.isArray(body.services)
    ? body.services.map(clean).filter(Boolean).join(', ')
    : clean(body.services)
  const notes = clean(body.notes)
  const variant = clean(body.variant) || 'unknown'
  const offer = clean(body.offer)
  const utm = body.utm && typeof body.utm === 'object' ? body.utm : {}
  const utmStr = Object.entries(utm)
    .map(([k, v]) => `${k}=${clean(v)}`)
    .join('&')

  // ── Validation (frictionless: name + phone only; email optional) ───────────
  if (!firstName) return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 422 })
  if (!isValidPhone(phone)) return NextResponse.json({ ok: false, error: 'A valid phone number is required.' }, { status: 422 })
  if (email && !isValidEmail(email)) return NextResponse.json({ ok: false, error: 'That email doesn\u2019t look right.' }, { status: 422 })

  const timestamp = new Date().toISOString()
  const fullName = [firstName, lastName].filter(Boolean).join(' ')

  const results = { email: false, sheet: false, csv: false }

  // ── 1. Email to owner via Web3Forms ───────────────────────────────────────
  const web3Key =
    process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (web3Key) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `New Lead (Door Hanger ${variant}) — ${fullName || 'No name'}`,
          from_name: 'Wave Window Cleaning Landing Page',
          to: OWNER_EMAIL,
          replyto: email,
          first_name: firstName,
          last_name: lastName,
          phone,
          email,
          address,
          services,
          additional_notes: notes,
          door_hanger_version: variant,
          offer,
          utm: utmStr,
          submitted_at: timestamp,
        }),
      })
      results.email = res.ok
    } catch {
      results.email = false
    }
  }

  // ── 2. Google Sheet webhook (the "spreadsheet") ───────────────────────────
  const sheetUrl = process.env.LEADS_SHEET_WEBHOOK_URL
  if (sheetUrl) {
    try {
      const res = await fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp,
          firstName,
          lastName,
          phone,
          email,
          address,
          services,
          notes,
          variant,
          offer,
          utm: utmStr,
        }),
      })
      results.sheet = res.ok
    } catch {
      results.sheet = false
    }
  }

  // ── 3. Local CSV backup (best effort) ─────────────────────────────────────
  try {
    const dir = join(process.cwd(), 'data')
    await mkdir(dir, { recursive: true })
    const file = join(dir, 'leads.csv')
    const row =
      [
        timestamp, firstName, lastName, phone, email, address,
        services, notes, variant, offer, utmStr,
      ].map(csvCell).join(',') + '\n'
    // Note: header is written by scripts/init-leads-csv if the file is new;
    // appending raw rows keeps this endpoint dependency-free.
    await appendFile(file, row, 'utf8')
    results.csv = true
  } catch {
    results.csv = false
  }

  // As long as we attempted delivery, treat as success for the visitor.
  return NextResponse.json({ ok: true, results })
}
