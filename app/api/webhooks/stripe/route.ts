import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { sendVoucherEmails } from '../../../lib/email'

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
      await sendVoucherEmails({
        buyerName: buyerName || 'A friend',
        buyerEmail,
        recipientName: recipientName || 'there',
        recipientEmail,
        amount: parseInt(amount),
        code: voucherCode,
        message: message || undefined,
      })
    }
  }

  return NextResponse.json({ received: true })
}
