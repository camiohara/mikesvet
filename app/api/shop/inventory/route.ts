import { NextResponse } from 'next/server'

const WORKER_URL = process.env.SHOP_WORKER_URL ?? 'https://mikesvet-ai-proxy.cami-cbc.workers.dev'

// Cache for 5 minutes — ezyVet stock doesn't change by the second
export const revalidate = 300

export async function GET() {
  try {
    const res = await fetch(`${WORKER_URL}/shop/inventory`, {
      signal: AbortSignal.timeout(15000),
    })
    if (!res.ok) throw new Error(`Worker responded ${res.status}`)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'inventory_unavailable'
    console.error('[shop/inventory]', message)
    return NextResponse.json({ ok: false, error: message }, { status: 502 })
  }
}
