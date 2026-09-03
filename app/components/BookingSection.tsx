'use client'

export default function BookingSection() {
  return (
    <section id="booking" className="py-24" style={{ backgroundColor: 'var(--color-brand-light)' }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header + contact pills */}
        <div className="text-center mb-12">
          <p
            className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
            style={{ color: 'var(--color-brand)' }}
          >
            Get in Touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Book in Minutes
          </h2>
          <p className="text-[var(--color-gray-mid)] text-lg mb-8">
            Book online below, or reach us instantly on WhatsApp or by phone.
          </p>

          {/* Contact pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>

            <a
              href="tel:+97142837744"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 shrink-0">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call +971 4 283 7744
            </a>
          </div>

          <div className="flex items-center gap-4 mt-10 mb-2">
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
            <p className="text-sm text-[var(--color-gray-mid)] font-medium uppercase tracking-wider">or book online</p>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
          </div>
        </div>

        {/* ezyVet iframe */}
        <div className="flex justify-center w-full overflow-x-auto">
          <iframe
            allow="clipboard-write; fullscreen; payment *"
            src="https://app.cw.vet/booking/ae/mikesvet"
            title="Book an Appointment"
            style={{
              width: '100%',
              minWidth: '320px',
              maxWidth: '800px',
              height: '800px',
              border: 'none',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              borderRadius: '0.5rem',
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </section>
  )
}
