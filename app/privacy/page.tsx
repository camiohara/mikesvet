import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | Mike's Vet Dubai",
  description: "Mike's Vet privacy policy — how we collect, use, and protect your personal data and your pet's records. Compliant with UAE data protection law.",
  alternates: { canonical: 'https://www.mikesvet.com/privacy' },
}

const sections = [
  {
    heading: '1. Who We Are',
    body: [
      "Mike's Vet is a veterinary clinic located on Hessa Street, Dubai, UAE. We are committed to protecting your privacy and handling your personal data with care and transparency.",
      "This Privacy Policy explains what personal information we collect, how we use it, and your rights regarding your data. It applies to our website (mikesvet.com) and to the veterinary services we provide.",
      "If you have any questions about this policy, please contact us at reception@mikesvet.com.",
    ],
  },
  {
    heading: '2. What Information We Collect',
    body: [
      "When you book an appointment, register with us, or contact us, we may collect: your name, phone number, email address, and home address.",
      "For your pet, we collect: name, species, breed, age, weight, vaccination history, medical records, and treatment history. This information is essential for providing safe veterinary care.",
      "When you visit our website, we may collect basic technical data such as your IP address, browser type, and pages visited. This is collected via standard web analytics tools and cookies.",
      "We do not collect payment card details directly. Payments are processed through secure payment terminals and third-party payment processors.",
    ],
  },
  {
    heading: '3. How We Use Your Information',
    body: [
      "Appointments and care: We use your contact details and your pet's medical records to schedule appointments, provide treatment, and follow up on your pet's health.",
      "Communications: With your consent, we may send appointment reminders, vaccination due dates, and general health information via WhatsApp, SMS, or email.",
      "Legal and regulatory obligations: We may be required to retain certain records under UAE veterinary regulations and Dubai Municipality requirements.",
      "Website improvements: Anonymised website analytics help us understand how visitors use our site so we can improve it.",
    ],
  },
  {
    heading: '4. Legal Basis for Processing',
    body: [
      "We process your personal data on the following lawful bases:",
      "Contract: Processing is necessary to provide the veterinary services you have requested.",
      "Legitimate interests: We have a legitimate interest in maintaining accurate medical records and following up on your pet's care.",
      "Consent: For marketing communications, we rely on your consent, which you can withdraw at any time.",
      "Legal obligation: Some data is retained to comply with UAE law and regulatory requirements.",
    ],
  },
  {
    heading: '5. Who We Share Your Information With',
    body: [
      "We do not sell your personal data to third parties.",
      "We may share information with: referral specialists or laboratories when required for your pet's care; our practice management software provider (data processor); and regulatory bodies such as Dubai Municipality when legally required.",
      "Any third parties we share data with are required to handle it securely and only for the purposes we specify.",
    ],
  },
  {
    heading: '6. Data Retention',
    body: [
      "We retain veterinary medical records for a minimum of 5 years from your pet's last visit, in line with standard veterinary practice and UAE regulatory requirements.",
      "Contact information and appointment records are retained for as long as you remain an active client, and for up to 2 years after your last visit.",
      "You may request deletion of your personal data at any time, subject to our legal obligations to retain certain records.",
    ],
  },
  {
    heading: '7. Cookies',
    body: [
      "Our website uses essential cookies to ensure the site functions correctly. We may also use analytics cookies (such as Google Analytics) to understand how visitors use our site. These collect anonymised data and do not identify you personally.",
      "You can control cookie settings through your browser. Disabling cookies may affect some website functionality.",
    ],
  },
  {
    heading: '8. Your Rights',
    body: [
      "Under UAE data protection law (Federal Decree-Law No. 45 of 2021 on Personal Data Protection), you have the right to: access the personal data we hold about you; correct inaccurate data; request deletion of your data (subject to legal retention requirements); withdraw consent for marketing at any time.",
      "To exercise any of these rights, contact us at reception@mikesvet.com or call +971 4 283 7744.",
    ],
  },
  {
    heading: '9. Data Security',
    body: [
      "We take the security of your personal data seriously. Our practice management system is password-protected and access is limited to authorised staff. We use secure connections (HTTPS) on our website.",
      "No data transmission over the internet is completely secure, and we cannot guarantee absolute security. However, we apply reasonable technical and organisational measures to protect your information.",
    ],
  },
  {
    heading: '10. Changes to This Policy',
    body: [
      "We may update this Privacy Policy from time to time. The current version is always available at mikesvet.com/privacy. We will notify you of significant changes where required.",
    ],
  },
  {
    heading: '11. Contact',
    body: [
      "For any questions, requests, or concerns about your privacy or personal data, please contact us:",
      "Email: reception@mikesvet.com",
      "Phone: +971 4 283 7744",
      "Address: Hessa Street, Dubai, UAE",
    ],
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
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
            Data questions or access requests?
          </h2>
          <p className="text-[var(--color-gray-mid)] text-sm mb-6">
            Contact us directly and we will respond within 5 business days.
          </p>
          <a
            href="mailto:reception@mikesvet.com"
            className="inline-block px-7 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            reception@mikesvet.com
          </a>
        </div>
      </section>
    </main>
  )
}
