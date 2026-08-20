import { NextResponse } from 'next/server'
import { appendFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Lead intake for QR / landing-page quote forms.
 *
 * Primary delivery: Resend (same path as /api/quote, which already works in prod).
 * Optional extras: Web3Forms, Google Sheet webhook, local CSV.
 */

const FROM = 'Wave Window Cleaning <onboarding@resend.dev>'
const INBOXES = ['teancumpax@gmail.com', 'teancum@cleanwavewindows.com']

interface LeadPayload {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  address?: string
  services?: string[] | string
  notes?: string
  variant?: string
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

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
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

  if (!firstName) return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 422 })
  if (!isValidPhone(phone)) return NextResponse.json({ ok: false, error: 'A valid phone number is required.' }, { status: 422 })
  if (email && !isValidEmail(email)) return NextResponse.json({ ok: false, error: 'That email doesn\u2019t look right.' }, { status: 422 })

  const timestamp = new Date().toISOString()
  const fullName = [firstName, lastName].filter(Boolean).join(' ')
  const source = utm.utm_source === 'aframe' ? 'A-frame QR' : utm.utm_source === 'doorhanger' ? 'Door hanger QR' : 'Landing page'

  const results = { email: false, sheet: false, csv: false }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #1A3D54; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h1>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Wave Window Cleaning · ${escapeHtml(source)}</p>
      </div>
      <div style="background: #f8f9fb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; font-size: 15px;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;"><a href="tel:${escapeHtml(phone)}" style="color: #1A3D54; font-weight: bold;">${escapeHtml(phone)}</a></td></tr>
          ${email ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${escapeHtml(email)}</td></tr>` : ''}
          ${address ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Address</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${escapeHtml(address)}</td></tr>` : ''}
          ${services ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Services</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${escapeHtml(services)}</td></tr>` : ''}
          ${notes ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Notes</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${escapeHtml(notes)}</td></tr>` : ''}
          ${offer ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Offer</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${escapeHtml(offer)}</td></tr>` : ''}
          <tr><td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Source</td><td style="padding: 10px 0; font-size: 15px;">${escapeHtml(source)}${utmStr ? ` · ${escapeHtml(utmStr)}` : ''}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; text-align: center;">
          <a href="tel:${escapeHtml(phone)}" style="display: inline-block; background: #1A3D54; color: white; padding: 12px 28px; border-radius: 24px; text-decoration: none; font-weight: bold; font-size: 15px;">Call ${escapeHtml(firstName)} Back</a>
        </div>
      </div>
    </div>
  `

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    for (const to of INBOXES) {
      try {
        const { error } = await resend.emails.send({
          from: FROM,
          to,
          replyTo: email || undefined,
          subject: `New Quote Request — ${fullName}`,
          html,
        })
        if (!error) results.email = true
        else console.error('Resend error', to, error)
      } catch (err) {
        console.error('Resend throw', to, err)
      }
    }
  }

  const web3Key =
    process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  if (web3Key) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `New Lead (${source}) — ${fullName || 'No name'}`,
          from_name: 'Wave Window Cleaning Landing Page',
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
      if (res.ok) results.email = true
    } catch {
      // Resend is the primary path; Web3Forms is best-effort.
    }
  }

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

  try {
    const dir = join(process.cwd(), 'data')
    await mkdir(dir, { recursive: true })
    const file = join(dir, 'leads.csv')
    const row =
      [
        timestamp, firstName, lastName, phone, email, address,
        services, notes, variant, offer, utmStr,
      ].map(csvCell).join(',') + '\n'
    await appendFile(file, row, 'utf8')
    results.csv = true
  } catch {
    results.csv = false
  }

  if (!results.email) {
    return NextResponse.json(
      { ok: false, error: 'Could not deliver this quote request. Please call (435) 229-5674.', results },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true, results })
}
