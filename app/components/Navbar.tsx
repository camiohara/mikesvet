'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.avif"
            alt="Mike's Vet Dubai"
            width={160}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[var(--color-navy)]">
          <Link href="#services" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Services</Link>
          <Link href="#team" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Our Team</Link>
          <Link href="#about" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Our Story</Link>
          <Link href="/adoptions" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Adoptions</Link>
          <Link href="#press" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Press</Link>
          <Link href="#contact" className="hover:text-[var(--color-brand)] transition-colors whitespace-nowrap">Find Us</Link>
        </nav>

        {/* Book Now CTA — desktop only */}
        <div className="hidden md:flex items-center shrink-0">
          <a href="#booking" className="nav-cta-btn px-4 py-2 rounded-full text-sm font-semibold text-white whitespace-nowrap">
            Book Appointment
          </a>
        </div>

        {/* Mobile: Book button + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#booking"
            className="nav-cta-btn px-3 py-1.5 rounded-full text-xs font-semibold text-white whitespace-nowrap"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)] px-6 py-5 flex flex-col gap-4 text-sm font-medium shadow-lg">
          {[
            { href: '#services', label: 'Services' },
            { href: '#team', label: 'Our Team' },
            { href: '#about', label: 'Our Story' },
            { href: '/adoptions', label: 'Adoptions' },
            { href: '#press', label: 'Press' },
            { href: '#contact', label: 'Find Us' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
