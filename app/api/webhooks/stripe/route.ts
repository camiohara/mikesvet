import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendVoucherEmails } from '../../../lib/email'
import { writeClient } from '../../../../sanity/lib/writeClient'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const { buyerName, buyerEmail, recipientName, recipientEmail, amount, voucherCode, message } =
      session.metadata || {}

    if (buyerEmail && recipientEmail && voucherCode) {
      const parsedAmount = parseInt(amount)
      await Promise.all([
        sendVoucherEmails({
          buyerName: buyerName || 'A friend',
          buyerEmail,
          recipientName: recipientName || 'there',
          recipientEmail,
          amount: parsedAmount,
          code: voucherCode,
          message: message || undefined,
        }),
        writeClient.create({
          _type: 'voucher',
          code: voucherCode,
          amount: parsedAmount,
          status: 'active',
          purchasedAt: new Date().toISOString(),
          buyerName: buyerName || '',
          buyerEmail,
          recipientName: recipientName || '',
          recipientEmail,
          message: message || '',
          stripeSessionId: session.id,
        }),
      ])
    }
  }

  return NextResponse.json({ received: true })
}
