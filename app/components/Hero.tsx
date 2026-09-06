export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background video — place your MP4 at public/hero.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Neutral dark scrim for text readability — no colour tint */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, backgroundColor: 'rgba(0,0,0,0.45)' }}
      />

      {/* Brand colour fallback shown when no video is present */}
      <div
        className="absolute inset-0"
        style={{ zIndex: -1, backgroundColor: 'var(--color-brand)' }}
      />

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-4xl mx-auto" style={{ zIndex: 2 }}>
        <p className="text-sm uppercase tracking-[0.3em] font-medium mb-6 opacity-80">
          Hessa Street, Dubai
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Pawsitively the Best Care for Your Furry Friends
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
          Comprehensive veterinary hospital run by animal lovers — equipped with the latest technology for diagnostics, surgery, and emergency care.
        </p>
        <p className="text-sm opacity-70 mb-10">
          Open 7 days &bull; 09:00 AM – 09:30 PM &bull; International team from 6 countries
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#booking"
            className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--color-brand)', color: 'white' }}
          >
            Book an Appointment
          </a>
          <a
            href="tel:+97142837744"
            className="hero-outline-btn px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base shadow-lg"
          >
            Call Us
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white opacity-50" style={{ zIndex: 2 }}>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-white" />
      </div>
    </section>
  )
}
