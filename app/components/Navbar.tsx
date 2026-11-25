'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const servicesItems = [
  { href: '/services', label: 'All Services' },
  { href: '/second-opinion', label: 'Second Opinion' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/home-visit', label: 'Home Visit' },
  { href: '/services/pet-ultrasound', label: 'Ultrasound & X-Ray' },
  { href: '/services/soft-tissue-surgery', label: 'Soft Tissue Surgery' },
  { href: '/services/orthopaedic-surgery', label: 'Orthopaedic Surgery' },
  { href: '/senior-pets', label: 'Senior Pets' },
  { href: '/end-of-life-care', label: 'End of Life Care' },
]

const aboutItems = [
  { href: '/team', label: 'Our Team' },
  { href: '/#about', label: 'Our Story' },
  { href: '/#press', label: 'Press' },
]

const chevron = (
  <svg className="w-3 h-3 ml-0.5 mt-px shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/icon-mark.png" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" priority />
          <Image src="/logo.avif" alt="Mike's Vet Dubai" width={160} height={44} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-[var(--color-navy)]">

          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-0.5 hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">
              Services {chevron}
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="w-52 bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-1.5">
                {servicesItems.map(({ href, label }) => (
                  <Link key={href} href={href} className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:text-[var(--color-brand)] hover:bg-[var(--color-brand-light)] transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-0.5 hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">
              About {chevron}
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="w-44 bg-white rounded-xl shadow-lg border border-[var(--color-border)] py-1.5">
                {aboutItems.map(({ href, label }) => (
                  <Link key={href} href={href} className="block px-4 py-2 text-sm text-[var(--color-navy)] hover:text-[var(--color-brand)] hover:bg-[var(--color-brand-light)] transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/adoptions" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Adoptions</Link>
          <Link href="/blog" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Blog</Link>
          <Link href="/#contact" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Find Us</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link href="/vouchers" className="voucher-pill px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border-2 transition-colors">
            Gift Vouchers
          </Link>
          <a href="/#booking" className="nav-cta-btn px-4 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap">
            Book Appointment
          </a>
        </div>

        {/* Mobile: Book + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a href="/#booking" className="nav-cta-btn px-3 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
          <button className="flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-5 flex flex-col gap-1 text-sm font-medium shadow-lg">
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1 mt-1" style={{ color: 'var(--color-brand)' }}>Services</p>
          {servicesItems.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors py-1.5" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}

          <div className="border-t border-[var(--color-border)] my-2" />

          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: 'var(--color-brand)' }}>About</p>
          {aboutItems.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors py-1.5" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}

          <div className="border-t border-[var(--color-border)] my-2" />

          {[
            { href: '/adoptions', label: 'Adoptions' },
            { href: '/blog', label: 'Blog' },
            { href: '/#contact', label: 'Find Us' },
            { href: '/vouchers', label: 'Gift Vouchers' },
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
