import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_EMAIL_TO ?? 'mcardonahomes@gmail.com';

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'MCFlHomes Contact <onboarding@resend.dev>',
    to: TO,
    replyTo: email,
    subject: `New inquiry from ${name} — mcflhomes.com`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F5F0E8; padding: 40px;">
        <div style="border-bottom: 1px solid #C9A84C; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="font-size: 24px; font-weight: 300; color: #C9A84C; margin: 0;">
            New Contact Form Submission
          </h1>
          <p style="font-size: 12px; color: rgba(245,240,232,0.4); margin: 8px 0 0; letter-spacing: 0.1em; text-transform: uppercase;">
            mcflhomes.com
          </p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,76,0.1); width: 120px;">
              <span style="font-family: Montserrat, sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #C9A84C;">Name</span>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,76,0.1);">
              <span style="font-size: 14px;">${name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,76,0.1);">
              <span style="font-family: Montserrat, sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #C9A84C;">Email</span>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,76,0.1);">
              <a href="mailto:${email}" style="color: #C9A84C; font-size: 14px;">${email}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,76,0.1);">
              <span style="font-family: Montserrat, sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #C9A84C;">Phone</span>
            </td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,76,0.1);">
              <a href="tel:${phone}" style="color: #C9A84C; font-size: 14px;">${phone}</a>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 16px 0; vertical-align: top;">
              <span style="font-family: Montserrat, sans-serif; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #C9A84C;">Message</span>
            </td>
            <td style="padding: 16px 0;">
              <p style="font-size: 14px; line-height: 1.7; color: rgba(245,240,232,0.7); margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
            </td>
          </tr>
        </table>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.15); text-align: center;">
          <a href="mailto:${email}" style="display: inline-block; background: #C9A84C; color: #0A0A0A; font-family: Montserrat, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; padding: 12px 28px; text-decoration: none;">
            Reply to ${name}
          </a>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
