'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'mv_award_dismissed_v2'
const DISMISS_DAYS = 7
const DELAY_MS = 3500

// Award badge: 12-point gold starburst + purple face + paw print + curved text
function AwardBadge() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-44 h-44 mx-auto"
      style={{ filter: 'drop-shadow(0 6px 18px rgba(245,197,24,0.45))' }}
      aria-hidden="true"
    >
      <defs>
        {/* Top arc for "NOMINATED" - r=56, inside the inner dashed ring */}
        <path id="pia-top" d="M 44,100 A 56,56 0 0,1 156,100" />
        {/* Bottom arc for "UAE · 2026" */}
        <path id="pia-bot" d="M 46,100 A 54,54 0 0,0 154,100" />
      </defs>

      {/* 12-point gold starburst */}
      <polygon
        fill="#F5C518"
        points="
          100,10   118.6,30.5  145,22.1  150.9,49.1
          177.9,55  169.6,81.4  190,100   169.6,118.6
          177.9,145 150.9,150.9 145,177.9 118.6,169.5
          100,190   81.4,169.6  55,177.9  49.1,150.9
          22.1,145  30.5,118.6  10,100    30.4,81.4
          22.1,55   49.1,49.1   55,22.1   81.4,30.5
        "
      />

      {/* Outer gold ring glow */}
      <circle cx="100" cy="100" r="73" fill="#302278" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#F5C518" strokeWidth="1.5" />

      {/* Inner dashed ring */}
      <circle cx="100" cy="100" r="63" fill="none" stroke="#F5C518" strokeWidth="1" strokeDasharray="3.5 3" />

      {/* Curved text - NOMINATED (top arc) */}
      <text
        fontSize="8"
        fill="#F5C518"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        letterSpacing="3.5"
      >
        <textPath href="#pia-top" startOffset="50%" textAnchor="middle">
          NOMINATED
        </textPath>
      </text>

      {/* Curved text - UAE · 2026 (bottom arc) */}
      <text
        fontSize="7.5"
        fill="#F5C518"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        letterSpacing="3"
      >
        <textPath href="#pia-bot" startOffset="50%" textAnchor="middle">
          UAE · 2026
        </textPath>
      </text>

      {/* Paw print centrepiece in gold */}
      {/* Main pad */}
      <ellipse cx="100" cy="112" rx="13" ry="11" fill="#F5C518" />
      {/* Four toe pads */}
      <circle cx="83"  cy="97"  r="6"   fill="#F5C518" />
      <circle cx="93"  cy="89"  r="6"   fill="#F5C518" />
      <circle cx="107" cy="89"  r="6"   fill="#F5C518" />
      <circle cx="117" cy="97"  r="6"   fill="#F5C518" />

      {/* Subtle dark detail on paw */}
      <ellipse cx="100" cy="112" rx="13" ry="11" fill="#302278" fillOpacity="0.18" />
      <circle cx="83"  cy="97"  r="6"   fill="#302278" fillOpacity="0.15" />
      <circle cx="93"  cy="89"  r="6"   fill="#302278" fillOpacity="0.15" />
      <circle cx="107" cy="89"  r="6"   fill="#302278" fillOpacity="0.15" />
      <circle cx="117" cy="97"  r="6"   fill="#302278" fillOpacity="0.15" />
    </svg>
  )
}

export default function AwardPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw && Date.now() < parseInt(raw, 10)) return
    } catch {}
    const t = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + DISMISS_DAYS * 86_400_000))
    } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes pia-in {
          from { opacity: 0; transform: scale(0.86) translateY(24px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .pia-card { animation: pia-in 0.4s cubic-bezier(0.34,1.5,0.64,1) both; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(10,8,30,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
      >
        <div className="pia-card w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl">

          {/* ── Top: Pet Industry Awards branding ── */}
          <div
            className="relative px-8 pt-8 pb-5 text-center"
            style={{ backgroundColor: '#302278' }}
          >
            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:bg-white/20"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Wordmark */}
            <div className="mb-1">
              <p className="text-white font-black text-lg leading-tight tracking-widest uppercase">
                Pet Industry
              </p>
              <p
                className="font-black text-lg leading-tight tracking-widest uppercase"
                style={{ color: '#F5C518' }}
              >
                Awards
              </p>
            </div>

            {/* Badge */}
            <AwardBadge />
          </div>

          {/* ── Bottom: Mike's Vet message ── */}
          <div className="bg-white px-8 py-7 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: 'var(--color-brand)' }}
            >
              Mike&apos;s Vet Dubai
            </p>
            <h2
              className="text-xl font-bold text-[var(--color-navy)] mb-3 leading-snug"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Nominated - UAE&apos;s<br />Favourite Vet Clinic
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-gray-mid)' }}>
              If we&apos;ve cared for your pet, your vote means everything to us and our whole team.
            </p>

            {/* Gold vote button - matches awards brand */}
            <a
              href="https://www.petindustryawards.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="block w-full py-3.5 rounded-full font-black text-sm shadow hover:opacity-90 transition-opacity mb-3"
              style={{ backgroundColor: '#F5C518', color: '#302278', letterSpacing: '0.05em' }}
            >
              Vote for Us ✦
            </a>

            <button
              onClick={dismiss}
              className="text-xs font-medium hover:opacity-60 transition-opacity"
              style={{ color: 'var(--color-gray-mid)' }}
            >
              Maybe another time
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
