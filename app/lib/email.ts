import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

const BRAND = '#64a7c2'
const NAVY = '#1B2B4B'
const LOGO_URL = 'https://www.mikesvet.com/icon-mark.png'
const SITE_URL = 'https://www.mikesvet.com'
const PHONE = '+971 4 283 7744'
const ADDRESS = 'Hessa Street, Dubai, UAE'

function emailHeader(headline: string, subline: string) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND};">
      <tr>
        <td style="padding:32px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="middle" width="64">
                <img src="${LOGO_URL}" alt="Mike's Vet" width="56" height="56" style="border-radius:50%;display:block;" />
              </td>
              <td valign="middle" style="padding-left:16px;">
                <p style="margin:0;font-size:22px;font-weight:bold;color:white;font-family:Georgia,serif;">Mike's Vet</p>
                <p style="margin:4px 0 0;font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:0.12em;text-transform:uppercase;font-family:Arial,sans-serif;">Pawsitively the best care for your furry friends</p>
              </td>
              <td valign="middle" align="right" style="padding-left:24px;">
                <p style="margin:0;font-size:26px;font-weight:bold;color:white;font-family:Georgia,serif;line-height:1.2;">${headline}</p>
                <p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,0.85);font-family:Arial,sans-serif;font-style:italic;">${subline}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `
}

function emailWrapper(content: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
    <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:24px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
            <tr><td>${content}</td></tr>
            <tr>
              <td style="padding:24px 40px;background:#f8fafb;border-top:1px solid #e8ecef;text-align:center;">
                <p style="margin:0;font-size:12px;color:#8a9ab0;">
                  <a href="${SITE_URL}" style="color:${BRAND};text-decoration:none;font-weight:bold;">mikesvet.com</a>
                  &nbsp;&bull;&nbsp;
                  <a href="tel:${PHONE.replace(/\s/g,'')}" style="color:${BRAND};text-decoration:none;">${PHONE}</a>
                  &nbsp;&bull;&nbsp;
                  ${ADDRESS}
                </p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

export async function sendVoucherEmails({
  buyerName,
  buyerEmail,
  recipientName,
  recipientEmail,
  amount,
  code,
  message,
}: {
  buyerName: string
  buyerEmail: string
  recipientName: string
  recipientEmail: string
  amount: number
  code: string
  message?: string
}) {
  const from = `"Mike's Vet" <${process.env.GMAIL_USER}>`

  // --- Buyer confirmation ---
  const buyerHtml = emailWrapper(`
    ${emailHeader('Gift Voucher', 'Purchase confirmed')}
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:36px 40px 0;">
        <h2 style="margin:0 0 16px;font-size:26px;color:${NAVY};font-family:Georgia,serif;">Gift Voucher Confirmed</h2>
        <p style="margin:0 0 16px;font-size:16px;color:${NAVY};line-height:1.6;">Hi ${buyerName},</p>
        <p style="margin:0 0 24px;font-size:16px;color:#444;line-height:1.6;">
          Your gift voucher of <strong>AED ${amount}</strong> has been purchased. We're sending the voucher to <strong>${recipientName}</strong> at ${recipientEmail}.
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0faf8;border:1px solid #c8e8e2;border-radius:10px;margin-bottom:24px;">
          <tr><td style="padding:24px;">
            <p style="margin:0 0 12px;font-size:12px;color:#7a9a94;letter-spacing:0.1em;text-transform:uppercase;font-family:Arial,sans-serif;">Order summary</p>
            <table cellpadding="4">
              <tr><td style="font-size:15px;color:#444;padding-right:12px;">Amount</td><td style="font-size:15px;color:${NAVY};font-weight:bold;">AED ${amount}</td></tr>
              <tr><td style="font-size:15px;color:#444;padding-right:12px;">Recipient</td><td style="font-size:15px;color:${NAVY};font-weight:bold;">${recipientName}</td></tr>
              <tr><td style="font-size:15px;color:#444;padding-right:12px;">Voucher code</td><td style="font-size:15px;color:${NAVY};font-weight:bold;letter-spacing:0.08em;">${code}</td></tr>
            </table>
          </td></tr>
        </table>
        <p style="margin:0 0 32px;font-size:14px;color:#666;line-height:1.6;">
          The voucher has no expiry date and can be used for any service - consultations, surgery, vaccinations, dental care, and more.
        </p>
        <p style="margin:0 0 32px;font-size:16px;color:${NAVY};line-height:1.6;">Thank you for choosing Mike's Vet!</p>
      </td></tr>
    </table>
  `)

  // --- Recipient voucher ---
  const personalMsg = message
    ? `<table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbf0;border-left:4px solid #f59e0b;border-radius:0 8px 8px 0;margin-bottom:24px;">
        <tr><td style="padding:18px 20px;">
          <p style="margin:0 0 8px;font-size:15px;color:#555;font-style:italic;line-height:1.6;">"${message}"</p>
          <p style="margin:0;font-size:13px;color:#999;">- ${buyerName}</p>
        </td></tr>
       </table>`
    : ''

  const recipientHtml = emailWrapper(`
    ${emailHeader('A Gift for You', `From ${buyerName}`)}
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:36px 40px 0;">
        <h2 style="margin:0 0 16px;font-size:26px;color:${NAVY};font-family:Georgia,serif;">You have a gift!</h2>
        <p style="margin:0 0 16px;font-size:16px;color:${NAVY};line-height:1.6;">Hi ${recipientName},</p>
        <p style="margin:0 0 24px;font-size:16px;color:#444;line-height:1.6;">
          <strong>${buyerName}</strong> has sent you a gift voucher of <strong>AED ${amount}</strong> to use at Mike's Vet on Hessa Street, Dubai.
        </p>
        ${personalMsg}
        <table width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND};border-radius:12px;margin-bottom:28px;text-align:center;">
          <tr><td style="padding:32px 24px;">
            <p style="margin:0 0 8px;font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:0.15em;text-transform:uppercase;font-family:Arial,sans-serif;">Your Voucher Code</p>
            <p style="margin:0 0 12px;font-size:36px;font-weight:bold;color:white;letter-spacing:0.15em;font-family:Georgia,serif;">${code}</p>
            <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.85);">Value: AED ${amount}</p>
          </td></tr>
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafb;border-radius:10px;margin-bottom:32px;">
          <tr><td style="padding:20px 24px;">
            <p style="margin:0 0 8px;font-size:14px;color:${NAVY};font-weight:bold;">How to redeem</p>
            <p style="margin:0;font-size:14px;color:#555;line-height:1.6;">
              Call or visit us and quote your voucher code above. Valid for any service - no expiry date.
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  `)

  // --- Reception notification ---
  const receptionHtml = emailWrapper(`
    ${emailHeader('New Voucher Sale', `AED ${amount} gift voucher`)}
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="padding:36px 40px 0;">
        <h2 style="margin:0 0 24px;font-size:22px;color:${NAVY};font-family:Georgia,serif;">Gift Voucher Purchased</h2>
        <table cellpadding="8" style="font-size:15px;">
          <tr><td style="color:#666;padding-right:16px;">Amount</td><td style="color:${NAVY};font-weight:bold;">AED ${amount}</td></tr>
          <tr><td style="color:#666;padding-right:16px;">Voucher code</td><td style="color:${NAVY};font-weight:bold;letter-spacing:0.08em;">${code}</td></tr>
          <tr><td style="color:#666;padding-right:16px;">Buyer</td><td style="color:${NAVY};">${buyerName} (${buyerEmail})</td></tr>
          <tr><td style="color:#666;padding-right:16px;">Recipient</td><td style="color:${NAVY};">${recipientName} (${recipientEmail})</td></tr>
          ${message ? `<tr><td style="color:#666;padding-right:16px;vertical-align:top;">Message</td><td style="color:${NAVY};font-style:italic;">"${message}"</td></tr>` : ''}
        </table>
        <p style="margin:24px 0 32px;font-size:13px;color:#888;line-height:1.6;">
          Both emails have been sent automatically. When the recipient redeems, look up this code in Stripe to verify.
        </p>
      </td></tr>
    </table>
  `)

  await Promise.all([
    transporter.sendMail({ from, to: buyerEmail, subject: `Your gift voucher is confirmed - Mike's Vet`, html: buyerHtml }),
    transporter.sendMail({ from, to: recipientEmail, subject: `You've received a gift from ${buyerName} - Mike's Vet`, html: recipientHtml }),
    transporter.sendMail({ from, to: process.env.GMAIL_USER, subject: `New voucher sale: AED ${amount} - code ${code}`, html: receptionHtml }),
  ])
}
