import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'teancumpax@gmail.com'
const FROM = 'Wave Window Cleaning <onboarding@resend.dev>'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, email, address, service, notes, source } = body

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ ok: false, error: 'Name and phone are required.' }, { status: 422 })
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A3D54; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Quote Request</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Wave Window Cleaning · ${source || 'Website'}</p>
        </div>
        <div style="background: #f8f9fb; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; font-size: 15px;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;"><a href="tel:${phone}" style="color: #1A3D54; font-weight: bold;">${phone}</a></td></tr>
            ${email ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${email}</td></tr>` : ''}
            ${address ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Address</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${address}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 15px;">${service}</td></tr>` : ''}
            ${notes ? `<tr><td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Notes</td><td style="padding: 10px 0; font-size: 15px;">${notes}</td></tr>` : ''}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background: #1A3D54; color: white; padding: 12px 28px; border-radius: 24px; text-decoration: none; font-weight: bold; font-size: 15px;">Call ${name.split(' ')[0]} Back</a>
          </div>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New Quote Request — ${name}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Quote route error:', err)
    return NextResponse.json({ ok: false, error: 'Server error.' }, { status: 500 })
  }
}
