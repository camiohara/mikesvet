'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function GTMRouteTracker() {
  const pathname = usePathname()
  const isFirst = useRef(true)

  useEffect(() => {
    // Skip the initial mount — GTM fires page_view on its own init
    if (isFirst.current) { isFirst.current = false; return }
    if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({ event: 'page_view', page_path: pathname })
    }
  }, [pathname])

  return null
}
