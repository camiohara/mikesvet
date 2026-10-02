import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

function generateVoucherCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = 'MV-'
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)]
  }
  return code
}

export async function POST(request: Request) {
  const { amount, buyerName, buyerEmail, recipientName, recipientEmail, message } = await request.json()

  if (!amount || isNaN(amount) || amount < 50 || amount > 50000) {
    return NextResponse.json({ error: 'Amount must be between AED 50 and AED 50,000' }, { status: 400 })
  }

  if (!buyerName || !buyerEmail || !recipientName || !recipientEmail) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const voucherCode = generateVoucherCode()

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: buyerEmail,
    line_items: [
      {
        price_data: {
          currency: 'aed',
          product_data: {
            name: `Gift Voucher - AED ${amount}`,
            description: `For ${recipientName} at Mike's Vet, Hessa Street, Dubai`,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    metadata: {
      buyerName,
      buyerEmail,
      recipientName,
      recipientEmail,
      message: message || '',
      amount: String(amount),
      voucherCode,
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.mikesvet.com'}/vouchers/success?code=${voucherCode}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.mikesvet.com'}/vouchers`,
  })

  return NextResponse.json({ url: session.url })
}
