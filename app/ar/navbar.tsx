'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function toEnglish(path: string): string {
  if (path === '/ar') return '/'
  if (path === '/ar/pricing') return '/pricing'
  if (path === '/ar/team') return '/team'
  if (path === '/ar/home-visit') return '/home-visit'
  if (path === '/ar/second-opinion') return '/second-opinion'
  if (path === '/ar/microchipping') return '/microchipping'
  if (path === '/ar/pet-insurance') return '/pet-insurance-dubai'
  if (path === '/ar/pet-travel') return '/dubai-pet-travel'
  if (path === '/ar/services') return '/services'
  if (path.startsWith('/ar/services/')) return path.replace('/ar', '')
  if (path.startsWith('/ar/team/')) return path.replace('/ar', '')
  return '/'
}

const servicesItems = [
  { href: '/ar/services', label: 'جميع الخدمات' },
  { href: '/ar/home-visit', label: 'الزيارات المنزلية' },
  { href: '/ar/second-opinion', label: 'رأي ثانٍ' },
  { href: '/ar/microchipping', label: 'الشريحة الإلكترونية' },
  { href: '/ar/pet-insurance', label: 'تأمين الحيوانات' },
  { href: '/ar/pet-travel', label: 'سفر الحيوانات' },
  { href: '/ar/services/pet-ultrasound', label: 'الموجات فوق الصوتية' },
  { href: '/ar/services/orthopaedic-surgery', label: 'جراحة العظام' },
  { href: '/ar/services/soft-tissue-surgery', label: 'جراحة الأنسجة الرخوة' },
]

const chevron = (
  <svg className="w-3 h-3 mr-0.5 mt-px shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export default function ArNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const enHref = toEnglish(pathname)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/ar" className="flex items-center gap-2 shrink-0">
          <Image src="/icon-mark.png" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" priority />
          <span className="font-bold text-[var(--color-navy)] text-sm hidden sm:block">عيادة مايك للبيطرة</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-[var(--color-navy)]">

          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-0.5 hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">
              الخدمات {chevron}
            </button>
            <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="w-56 bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-1.5">
                {servicesItems.map(({ href, label }) => (
                  <Link key={href} href={href} className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:text-[var(--color-brand)] hover:bg-[var(--color-brand-light)] transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/ar/pricing" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">الأسعار</Link>
          <Link href="/ar/team" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">فريقنا</Link>
          <Link href="/ar#location" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">موقعنا</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href={enHref}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--color-border)] text-[var(--color-navy)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors whitespace-nowrap"
            title="Switch to English"
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </Link>
          <a
            href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%81%D9%8A%20%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%85%D8%A7%D9%8A%D9%83"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap flex items-center gap-1.5"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            واتساب
          </a>
          <a href="tel:+97142837744" className="nav-cta-btn px-4 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap">
            احجز موعداً
          </a>
        </div>

        {/* Mobile: Book + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap"
            style={{ backgroundColor: '#25D366' }}
            onClick={() => setMenuOpen(false)}
          >
            واتساب
          </a>
          <button className="flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-5 flex flex-col gap-1 text-sm font-medium shadow-lg">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1 mt-1" style={{ color: 'var(--color-brand)' }}>الخدمات</p>
          {servicesItems.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors py-1.5" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}

          <div className="border-t border-[var(--color-border)] my-2" />

          {[
            { href: '/ar/pricing', label: 'الأسعار' },
            { href: '/ar/team', label: 'فريقنا' },
            { href: '/ar#location', label: 'موقعنا' },
            { href: enHref, label: '🇬🇧 English' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} className="text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors py-1.5" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
