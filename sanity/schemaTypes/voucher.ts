import { defineField, defineType } from 'sanity'

export const voucher = defineType({
  name: 'voucher',
  title: 'Gift Vouchers',
  type: 'document',
  orderings: [
    {
      title: 'Purchase date (newest first)',
      name: 'purchasedAtDesc',
      by: [{ field: 'purchasedAt', direction: 'desc' }],
    },
  ],
  fields: [
    defineField({
      name: 'code',
      title: 'Voucher Code',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'amount',
      title: 'Amount (AED)',
      type: 'number',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: '🟢 Active', value: 'active' },
          { title: '✅ Redeemed', value: 'redeemed' },
          { title: '❌ Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'purchasedAt',
      title: 'Purchased At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'redeemedAt',
      title: 'Redeemed At',
      type: 'datetime',
      description: 'Set this when the voucher is used',
    }),
    defineField({
      name: 'buyerName',
      title: 'Buyer Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'buyerEmail',
      title: 'Buyer Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'recipientName',
      title: 'Recipient Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'recipientEmail',
      title: 'Recipient Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Personal Message',
      type: 'text',
      rows: 3,
      readOnly: true,
    }),
    defineField({
      name: 'stripeSessionId',
      title: 'Stripe Session ID',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'notes',
      title: 'Staff Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes — not visible to customers',
    }),
  ],
  preview: {
    select: {
      code: 'code',
      amount: 'amount',
      recipientName: 'recipientName',
      status: 'status',
      purchasedAt: 'purchasedAt',
    },
    prepare({ code, amount, recipientName, status, purchasedAt }) {
      const emoji = status === 'redeemed' ? '✅' : status === 'cancelled' ? '❌' : '🟢'
      const date = purchasedAt ? new Date(purchasedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : ''
      return {
        title: `${emoji} ${code} — AED ${amount}`,
        subtitle: `${recipientName} · ${date}`,
      }
    },
  },
})
