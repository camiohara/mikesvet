const PLACE_URL = 'https://maps.app.goo.gl/niYAN4UqH1f5WAYw6'
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=Mike%27s+Vet+Dubai+Hessa+Street`
const EMBED_URL = 'https://maps.google.com/maps?q=Mike%27s+Vet+Dubai+Hessa+Street&z=17&output=embed'

export default function LocationMap() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-white border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
            Find Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            We&apos;re on Hessa Street, Dubai
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">

          {/* Info card */}
          <div className="flex flex-col gap-5 p-6 rounded-2xl border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
            <div>
              <p className="font-bold text-[var(--color-navy)] mb-1">Mike&apos;s Vet Dubai</p>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">
                Hessa Street<br />Dubai, UAE
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)] mb-1.5">Opening Hours</p>
              <p className="text-sm font-medium text-[var(--color-navy)]">Monday – Sunday</p>
              <p className="text-sm text-[var(--color-gray-mid)]">9:00 AM – 9:30 PM</p>
              <p className="text-xs text-[var(--color-gray-mid)] mt-1">Open every day including public holidays</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/97142837744"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+97142837744"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.88 9.5 19.79 19.79 0 01.21 4.72 2 2 0 012.22 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.94a16 16 0 006.29 6.29l1.5-1.5a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Call +971 4 283 7744
              </a>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions
              </a>
              <a
                href={PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[var(--color-border)] min-h-[280px] sm:min-h-[400px]">
            <iframe
              src={EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '280px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mike's Vet Dubai - Hessa Street location"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
