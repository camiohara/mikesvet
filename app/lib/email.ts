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
  const clinicName = "Mike's Vet"
  const clinicPhone = '+971 4 283 7744'
  const clinicAddress = 'Hessa Street, Dubai'
  const website = 'https://www.mikesvet.com'

  // Email to buyer (confirmation)
  await transporter.sendMail({
    from: `"${clinicName}" <${process.env.GMAIL_USER}>`,
    to: buyerEmail,
    subject: `Your gift voucher is confirmed - ${clinicName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #1B998B; padding: 32px 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">${clinicName}</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">${clinicAddress}</p>
        </div>
        <div style="padding: 32px 24px;">
          <h2 style="color: #1B2B4B; margin: 0 0 16px;">Gift Voucher Confirmed</h2>
          <p>Hi ${buyerName},</p>
          <p>Your gift voucher of <strong>AED ${amount}</strong> has been purchased successfully. A voucher email is on its way to ${recipientName} at ${recipientEmail}.</p>
          <div style="background: #f5fbfa; border: 1px solid #d0ede9; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0 0 8px; font-size: 13px; color: #666;">Order summary</p>
            <p style="margin: 4px 0;"><strong>Amount:</strong> AED ${amount}</p>
            <p style="margin: 4px 0;"><strong>Recipient:</strong> ${recipientName} (${recipientEmail})</p>
            <p style="margin: 4px 0 0;"><strong>Voucher code:</strong> ${code}</p>
          </div>
          <p style="font-size: 14px; color: #666;">The recipient can redeem this voucher by calling or visiting us and quoting the code above. Vouchers have no expiry date and can be used for any service.</p>
          <p style="margin-top: 32px;">Thank you for choosing ${clinicName}!</p>
          <p style="color: #666; font-size: 14px;">${clinicPhone} &bull; <a href="${website}" style="color: #1B998B;">${website}</a></p>
        </div>
      </div>
    `,
  })

  // Email to recipient (gift voucher)
  const personalMsg = message
    ? `<div style="background: #fffbf0; border-left: 4px solid #f59e0b; padding: 16px 20px; margin: 24px 0; border-radius: 0 8px 8px 0;">
        <p style="margin: 0; font-style: italic; color: #555;">"${message}"</p>
        <p style="margin: 8px 0 0; font-size: 13px; color: #888;">- ${buyerName}</p>
       </div>`
    : ''

  await transporter.sendMail({
    from: `"${clinicName}" <${process.env.GMAIL_USER}>`,
    to: recipientEmail,
    subject: `You've received a gift from ${buyerName} - ${clinicName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #1B998B; padding: 32px 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">${clinicName}</h1>
          <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">${clinicAddress}</p>
        </div>
        <div style="padding: 32px 24px;">
          <h2 style="color: #1B2B4B; margin: 0 0 16px;">You have a gift!</h2>
          <p>Hi ${recipientName},</p>
          <p><strong>${buyerName}</strong> has sent you a gift voucher of <strong>AED ${amount}</strong> to use at ${clinicName} on Hessa Street, Dubai.</p>
          ${personalMsg}
          <div style="background: #1B998B; border-radius: 12px; padding: 28px; text-align: center; margin: 28px 0;">
            <p style="color: rgba(255,255,255,0.8); margin: 0 0 8px; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;">Your Voucher Code</p>
            <p style="color: white; font-size: 32px; font-weight: bold; letter-spacing: 0.15em; margin: 0;">${code}</p>
            <p style="color: rgba(255,255,255,0.8); margin: 12px 0 0; font-size: 14px;">Value: AED ${amount}</p>
          </div>
          <p style="font-size: 14px; color: #555;"><strong>How to redeem:</strong> Call or visit us and quote your voucher code. Valid for any service - consultations, surgery, vaccinations, dental care, and more. No expiry date.</p>
          <div style="border-top: 1px solid #eee; margin-top: 32px; padding-top: 24px;">
            <p style="font-size: 14px; margin: 4px 0;"><strong>${clinicName}</strong></p>
            <p style="font-size: 14px; color: #666; margin: 4px 0;">${clinicAddress}</p>
            <p style="font-size: 14px; margin: 4px 0;"><a href="tel:${clinicPhone.replace(/\s/g, '')}" style="color: #1B998B;">${clinicPhone}</a></p>
            <p style="font-size: 14px; margin: 4px 0;"><a href="${website}" style="color: #1B998B;">${website}</a></p>
          </div>
        </div>
      </div>
    `,
  })
}
