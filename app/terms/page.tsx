import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service | Mike's Vet Dubai",
  description: "Terms of service for Mike's Vet, a veterinary clinic on Hessa Street, Dubai. Read our booking, payment, and liability policies.",
  alternates: { canonical: 'https://www.mikesvet.com/terms' },
}

const sections = [
  {
    heading: '1. About Mike\'s Vet',
    body: [
      "Mike's Vet is a veterinary clinic registered and operating in Dubai, United Arab Emirates. We provide veterinary services for cats and dogs, including consultations, diagnostics, surgery, dental care, vaccination, and emergency treatment.",
      "These Terms of Service govern your use of our website (mikesvet.com) and your engagement with our veterinary services. By booking an appointment or using our services, you agree to these terms.",
    ],
  },
  {
    heading: '2. Appointments and Bookings',
    body: [
      "Appointments can be made online, by phone, or via WhatsApp. We will do our best to accommodate your preferred time, but appointment slots are subject to availability.",
      "We ask that you arrive on time for your scheduled appointment. If you arrive more than 15 minutes late, we may need to reschedule. Walk-in appointments are welcome, but waiting times may apply.",
      "Please call or WhatsApp us as soon as possible if you need to cancel or reschedule. We ask for at least 2 hours' notice where possible, so that we can offer the slot to another patient.",
    ],
  },
  {
    heading: '3. Veterinary Services',
    body: [
      "Our veterinary team will provide care based on clinical assessment of your pet. Treatment recommendations are made in the best interest of your pet's health and welfare.",
      "All medical procedures carry inherent risk. Our veterinarians will explain the risks and benefits of any procedure before proceeding. You are responsible for giving informed consent before treatment.",
      "In a life-threatening emergency where you cannot be reached immediately, our team will take reasonable steps to stabilise your pet. We will contact you as soon as practicable.",
      "We do not guarantee specific outcomes. Veterinary medicine, like human medicine, cannot guarantee results. We will always act with reasonable skill and care.",
    ],
  },
  {
    heading: '4. Payment',
    body: [
      "Payment is due at the time of service. We accept cash and major credit and debit cards. Prices are in UAE Dirhams (AED) and include VAT where applicable.",
      "An estimate will be provided for significant procedures. Final costs may vary if additional treatment is required based on clinical findings during the procedure.",
      "We do not currently offer payment plans or instalment arrangements. If you have concerns about costs, please speak to our team before treatment.",
    ],
  },
  {
    heading: '5. Pet Owner Responsibilities',
    body: [
      "You are responsible for providing accurate information about your pet's health history, current medications, and any known conditions. Incomplete or inaccurate information may affect the quality of care we can provide.",
      "Animals must be safely transported to and from the clinic. We recommend appropriate carriers for cats and leads or harnesses for dogs. You are responsible for your pet's behaviour on our premises.",
      "You must ensure your pet is up to date with core vaccinations. We reserve the right to decline services where there is a risk to the health of other animals in the clinic.",
    ],
  },
  {
    heading: '6. Limitation of Liability',
    body: [
      "Our liability to you is limited to the amount you paid for the services provided. We are not liable for any consequential, indirect, or special damages.",
      "This limitation does not apply in cases of gross negligence or fraud on our part.",
      "Nothing in these terms affects your rights as a consumer under UAE law.",
    ],
  },
  {
    heading: '7. Website Use',
    body: [
      "The content on mikesvet.com is provided for general informational purposes and does not constitute veterinary advice. Always consult a qualified veterinarian for advice specific to your pet.",
      "We make reasonable efforts to keep information on our website accurate and up to date, but we do not warrant that all content is error-free.",
      "You may not reproduce, distribute, or use content from our website for commercial purposes without our written permission.",
    ],
  },
  {
    heading: '8. Governing Law',
    body: [
      "These terms are governed by the laws of the United Arab Emirates. Any disputes will be subject to the jurisdiction of the courts of Dubai.",
    ],
  },
  {
    heading: '9. Changes to These Terms',
    body: [
      "We may update these terms from time to time. The current version will always be published at mikesvet.com/terms. Continued use of our services after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: '10. Contact Us',
    body: [
      "If you have any questions about these terms, please contact us at reception@mikesvet.com or call +971 4 283 7744.",
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="pt-16">
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
            Legal
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Terms of Service
          </h1>
          <p className="mt-4 text-[var(--color-gray-mid)]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="text-lg font-bold text-[var(--color-navy)] mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.body.map((para, i) => (
                  <p key={i} className="text-[var(--color-gray-mid)] leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-xl font-bold text-[var(--color-navy)] mb-3"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Questions about these terms?
          </h2>
          <p className="text-[var(--color-gray-mid)] text-sm mb-6">
            Contact our team and we will be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:reception@mikesvet.com"
              className="px-7 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Email Us
            </a>
            <a
              href="tel:+97142837744"
              className="px-7 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              +971 4 283 7744
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
