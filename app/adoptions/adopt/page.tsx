'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ADOPT

function AdoptForm() {
  const searchParams = useSearchParams()
  const prefilledAnimal = searchParams.get('animal') ?? ''

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    fullName: '', dob: '', nationality: '', country: '', address: '',
    email: '', mobile: '', whatsapp: '', occupation: '', emiratesId: '',
    housingType: '', ownerOrTenant: '', landlordPermission: '',
    hasOutdoorSpace: '', outdoorDetails: '',
    resident1Name: '', resident1Age: '', resident2Name: '', resident2Age: '',
    resident3Name: '', resident3Age: '', resident4Name: '', resident4Age: '',
    currentPets: '', pastPets: '',
    vetName: '', vetContact: '',
    animalName: prefilledAnimal, adoptionType: 'local',
    reasonForAdopting: '', petExperience: '', hoursAlone: '',
    travelPlans: '',
    allergic: '', fearAnimals: '', indoorOnly: '',
    agreeTerms: false, agreeDeclaration: false, agreeReturn: false,
  })

  useEffect(() => {
    if (prefilledAnimal) setForm(f => ({ ...f, animalName: prefilledAnimal }))
  }, [prefilledAnimal])

  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!FORMSPREE_ID) { setStatus('error'); return }
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-6xl mb-6">🏠</p>
          <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Application received!
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-8 leading-relaxed">
            Thank you for taking this step. Our team will review your application and reach out within 24–48 hours to arrange a meet and greet.
          </p>
          <a href="https://wa.me/97142837744" className="inline-block px-6 py-3 rounded-full font-semibold text-white" style={{ backgroundColor: '#25D366' }}>
            WhatsApp Us
          </a>
        </div>
      </div>
    )
  }

  const inputClass = "w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
  const labelClass = "block text-sm font-medium text-[var(--color-navy)] mb-1"
  const radioClass = "accent-[var(--color-brand)] w-4 h-4"
  const sectionHead = "text-lg font-bold text-[var(--color-navy)] mb-4 pb-2 border-b border-[var(--color-border)]"
  const yesNo = (key: string) => (
    <div className="flex gap-6">
      {['yes', 'no'].map(v => (
        <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
          <input type="radio" name={key} value={v} checked={form[key as keyof typeof form] === v} onChange={() => set(key, v)} className={radioClass} />
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </label>
      ))}
    </div>
  )

  return (
    <main className="pt-20 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>Rescue &amp; Rehoming</p>
          <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Adoption Application</h1>
          <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed max-w-md mx-auto">
            Completing this application is the first step towards giving an animal their forever home. Our team reviews every application and will contact you within 48 hours.
          </p>
        </div>

        {!FORMSPREE_ID && (
          <div className="mb-8 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
            Form submission is not yet configured. Please contact us directly at <a href="mailto:reception@mikesvet.com" className="underline font-medium">reception@mikesvet.com</a> or <a href="https://wa.me/97142837744" className="underline font-medium">WhatsApp</a>.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Section 1: Personal Details */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Your Details</h2>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input required className={inputClass} value={form.fullName} onChange={e => set('fullName', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <input type="date" required className={inputClass} value={form.dob} onChange={e => set('dob', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Nationality *</label>
                  <input required className={inputClass} value={form.nationality} onChange={e => set('nationality', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Country of Residence *</label>
                <input required className={inputClass} value={form.country} onChange={e => set('country', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Full Address *</label>
                <input required className={inputClass} value={form.address} onChange={e => set('address', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input type="email" required className={inputClass} value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Mobile Number *</label>
                  <input type="tel" required className={inputClass} value={form.mobile} onChange={e => set('mobile', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>WhatsApp Number</label>
                  <input type="tel" className={inputClass} value={form.whatsapp} onChange={e => set('whatsapp', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Occupation *</label>
                  <input required className={inputClass} value={form.occupation} onChange={e => set('occupation', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Emirates ID No.</label>
                  <input className={inputClass} value={form.emiratesId} onChange={e => set('emiratesId', e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Living Situation */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Living Situation</h2>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Type of accommodation *</label>
                <input required placeholder="e.g. Villa, apartment, townhouse…" className={inputClass} value={form.housingType} onChange={e => set('housingType', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Do you own or rent?</label>
                <div className="flex gap-6 pt-1">
                  {['Own', 'Rent'].map(v => (
                    <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="ownerOrTenant" value={v.toLowerCase()} checked={form.ownerOrTenant === v.toLowerCase()} onChange={() => set('ownerOrTenant', v.toLowerCase())} className={radioClass} />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
              {form.ownerOrTenant === 'rent' && (
                <div className="flex items-center justify-between gap-4 py-2">
                  <label className="text-sm text-[var(--color-navy)] flex-1">Do you have landlord permission to keep a pet?</label>
                  {yesNo('landlordPermission')}
                </div>
              )}
              <div className="flex items-center justify-between gap-4 py-2">
                <label className="text-sm text-[var(--color-navy)] flex-1">Do you have a garden or outdoor space?</label>
                {yesNo('hasOutdoorSpace')}
              </div>

              <p className="text-sm text-[var(--color-gray-mid)] mt-2">Household members (name and age):</p>
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <input placeholder={`Resident ${n} name`} className={inputClass} value={form[`resident${n}Name` as keyof typeof form] as string} onChange={e => set(`resident${n}Name`, e.target.value)} />
                  </div>
                  <input placeholder="Age" className={inputClass} value={form[`resident${n}Age` as keyof typeof form] as string} onChange={e => set(`resident${n}Age`, e.target.value)} />
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Pets & Experience */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Pets &amp; Experience</h2>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Current pets (kind &amp; breed, or none):</label>
                <textarea className={inputClass} rows={2} value={form.currentPets} onChange={e => set('currentPets', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Previous pets (kind &amp; breed, or none):</label>
                <textarea className={inputClass} rows={2} value={form.pastPets} onChange={e => set('pastPets', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Vet name (for reference)</label>
                  <input className={inputClass} value={form.vetName} onChange={e => set('vetName', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Vet contact number</label>
                  <input type="tel" className={inputClass} value={form.vetContact} onChange={e => set('vetContact', e.target.value)} />
                </div>
              </div>
              {[
                ['allergic', 'Is anyone in your home allergic to pets?'],
                ['fearAnimals', 'Does anyone in your home fear animals?'],
                ['indoorOnly', 'Will the pet be kept strictly indoors?'],
              ].map(([key, label]) => (
                <div key={key} className="flex items-center justify-between gap-4 py-2">
                  <label className="text-sm text-[var(--color-navy)] flex-1">{label}</label>
                  {yesNo(key)}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: About Your Adoption */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>About Your Adoption</h2>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Animal you&apos;re interested in (name, or leave blank for any)</label>
                <input className={inputClass} value={form.animalName} onChange={e => set('animalName', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Is this a local or overseas adoption?</label>
                <div className="flex gap-6 pt-1">
                  {[['local', 'Local (UAE)'], ['overseas', 'Overseas']].map(([v, l]) => (
                    <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="adoptionType" value={v} checked={form.adoptionType === v} onChange={() => set('adoptionType', v)} className={radioClass} />
                      {l}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Why do you want to adopt? *</label>
                <textarea required className={inputClass} rows={3} value={form.reasonForAdopting} onChange={e => set('reasonForAdopting', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Describe your experience with cats/dogs:</label>
                <textarea className={inputClass} rows={3} value={form.petExperience} onChange={e => set('petExperience', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>How many hours per day will the pet be alone?</label>
                <input className={inputClass} value={form.hoursAlone} onChange={e => set('hoursAlone', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Do you have travel plans in the next 12 months? Please describe:</label>
                <textarea className={inputClass} rows={2} value={form.travelPlans} onChange={e => set('travelPlans', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Section 5: Agreement */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Agreement</h2>
            <div className="space-y-3">
              {[
                ['agreeTerms', 'I understand that the welfare of the animal is the primary consideration and Mike\'s Vet reserves the right to decline any application'],
                ['agreeReturn', 'I understand that no pet can be handed over to a third party — if I can no longer care for the animal, they must be returned to Mike\'s Vet'],
                ['agreeDeclaration', 'I certify that all information provided on this form is true and correct'],
              ].map(([key, label]) => (
                <label key={key} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form[key as keyof typeof form] as boolean}
                    onChange={e => set(key, e.target.checked)}
                    className="accent-[var(--color-brand)] w-4 h-4 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-[var(--color-navy)]">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting' || !FORMSPREE_ID}
            className="w-full py-4 rounded-full font-semibold text-white text-base hover:opacity-90 transition-opacity disabled:opacity-50"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            {status === 'submitting' ? 'Submitting…' : 'Submit Adoption Application'}
          </button>

          {status === 'error' && (
            <p className="text-center text-red-600 text-sm">Something went wrong. Please email us at <a href="mailto:reception@mikesvet.com" className="underline">reception@mikesvet.com</a></p>
          )}
        </form>
      </div>
    </main>
  )
}

export default function AdoptPage() {
  return (
    <Suspense>
      <AdoptForm />
    </Suspense>
  )
}
