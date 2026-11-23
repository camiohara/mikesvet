'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function GTMRouteTracker() {
  const pathname = usePathname()
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    if (typeof window === 'undefined') return
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'page_view', { page_path: pathname, page_title: document.title })
    } else if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({ event: 'page_view', page_path: pathname })
    }
  }, [pathname])

  return null
}
