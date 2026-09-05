'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_FOSTER

function FosterForm() {
  const searchParams = useSearchParams()
  const prefilledAnimal = searchParams.get('animal') ?? ''

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    fosterName: '', dob: '', country: '', occupation: '', address: '',
    email: '', mobile: '', whatsapp: '', otherContact: '', emiratesId: '',
    petName: prefilledAnimal, species: '', breed: '', gender: '',
    resident1Name: '', resident1Age: '', resident2Name: '', resident2Age: '',
    resident3Name: '', resident3Age: '', resident4Name: '', resident4Age: '',
    accommodation: '', currentPets: '',
    petsNeutered: '', allergic: '', fearAnimals: '', indoorOnly: '',
    familyAlwaysHome: '', workOutside: '', hoursAway: '', hoursAlone: '',
    awareManagement: '',
    fosterDuration: 'until_homed', fosterUntilDate: '',
    agreeNotice: false, agreeDiscussed: false, agreeLandlord: false,
    agreeSafe: false, agreeVaccinated: false, agreeDeclaration: false,
  })

  useEffect(() => {
    if (prefilledAnimal) setForm(f => ({ ...f, petName: prefilledAnimal }))
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
          <p className="text-6xl mb-6">🐾</p>
          <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Thank you for applying!
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-8 leading-relaxed">
            We&apos;ve received your foster application and will be in touch within 24 hours. In the meantime, feel free to WhatsApp us if you have any questions.
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
          <h1 className="text-4xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Foster Application</h1>
          <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed max-w-md mx-auto">
            As a foster you provide temporary care — litter, food, and love — while we find the animal a permanent home. Foster parents are always first in line to adopt.
          </p>
        </div>

        {!FORMSPREE_ID && (
          <div className="mb-8 p-4 rounded-xl border border-amber-200 bg-amber-50 text-amber-800 text-sm">
            Form submission is not yet configured. Please contact us directly at <a href="mailto:reception@mikesvet.com" className="underline font-medium">reception@mikesvet.com</a> or <a href="https://wa.me/97142837744" className="underline font-medium">WhatsApp</a>.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Section 1: Your Details */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Your Details</h2>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input required className={inputClass} value={form.fosterName} onChange={e => set('fosterName', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <input type="date" required className={inputClass} value={form.dob} onChange={e => set('dob', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Country of Origin *</label>
                  <input required className={inputClass} value={form.country} onChange={e => set('country', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Occupation *</label>
                <input required className={inputClass} value={form.occupation} onChange={e => set('occupation', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Address *</label>
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
                  <label className={labelClass}>Other Contact No.</label>
                  <input type="tel" className={inputClass} value={form.otherContact} onChange={e => set('otherContact', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Emirates ID No. *</label>
                  <input required className={inputClass} value={form.emiratesId} onChange={e => set('emiratesId', e.target.value)} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Pet */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Pet Information</h2>
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Pet&apos;s Name (if you have one in mind)</label>
                <input className={inputClass} value={form.petName} onChange={e => set('petName', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Species</label>
                  <div className="flex gap-6 pt-1">
                    {['Cat', 'Dog'].map(v => (
                      <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="species" value={v.toLowerCase()} checked={form.species === v.toLowerCase()} onChange={() => set('species', v.toLowerCase())} className={radioClass} />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Gender</label>
                  <div className="flex gap-6 pt-1">
                    {['Male', 'Female'].map(v => (
                      <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="gender" value={v.toLowerCase()} checked={form.gender === v.toLowerCase()} onChange={() => set('gender', v.toLowerCase())} className={radioClass} />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label className={labelClass}>Breed</label>
                <input className={inputClass} value={form.breed} onChange={e => set('breed', e.target.value)} />
              </div>
            </div>
          </div>

          {/* Section 3: Household */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Your Household</h2>
            <div className="space-y-4">
              <p className="text-sm text-[var(--color-gray-mid)]">Name and age of all permanent residents:</p>
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <input placeholder={`Resident ${n} name`} className={inputClass} value={form[`resident${n}Name` as keyof typeof form] as string} onChange={e => set(`resident${n}Name`, e.target.value)} />
                  </div>
                  <input placeholder="Age" className={inputClass} value={form[`resident${n}Age` as keyof typeof form] as string} onChange={e => set(`resident${n}Age`, e.target.value)} />
                </div>
              ))}
              <div>
                <label className={labelClass}>What kind of accommodation do you live in?</label>
                <textarea className={inputClass} rows={2} value={form.accommodation} onChange={e => set('accommodation', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Do you currently have any pets? If so, please list (kind &amp; breed):</label>
                <textarea className={inputClass} rows={2} value={form.currentPets} onChange={e => set('currentPets', e.target.value)} />
              </div>

              {[
                ['petsNeutered', 'Are your current pets neutered/spayed?'],
                ['allergic', 'Is anyone in your home allergic to pets?'],
                ['fearAnimals', 'Does anyone in your home fear animals?'],
                ['indoorOnly', 'Pets are strictly indoor?'],
                ['familyAlwaysHome', 'One family member will always be there?'],
                ['workOutside', 'Do you work outside of your home?'],
              ].map(([key, label]) => (
                <div key={key} className="flex items-center justify-between gap-4 py-2">
                  <label className="text-sm text-[var(--color-navy)] flex-1">{label}</label>
                  {yesNo(key)}
                </div>
              ))}

              {form.workOutside === 'yes' && (
                <div>
                  <label className={labelClass}>How many hours per day are you away?</label>
                  <input className={inputClass} value={form.hoursAway} onChange={e => set('hoursAway', e.target.value)} />
                </div>
              )}
              <div>
                <label className={labelClass}>How many hours per day will the pet be alone? Please explain:</label>
                <textarea className={inputClass} rows={2} value={form.hoursAlone} onChange={e => set('hoursAlone', e.target.value)} />
              </div>
              <div className="flex items-center justify-between gap-4 py-2">
                <label className="text-sm text-[var(--color-navy)] flex-1">Are you aware about managing pet&apos;s activity/litter/food etc.?</label>
                {yesNo('awareManagement')}
              </div>
            </div>
          </div>

          {/* Section 4: Duration */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>Fostering Duration</h2>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="radio" name="fosterDuration" value="until_homed" checked={form.fosterDuration === 'until_homed'} onChange={() => set('fosterDuration', 'until_homed')} className={`${radioClass} mt-0.5`} />
                <span className="text-sm text-[var(--color-navy)]">Until the pet is homed</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="radio" name="fosterDuration" value="until_date" checked={form.fosterDuration === 'until_date'} onChange={() => set('fosterDuration', 'until_date')} className={`${radioClass} mt-0.5`} />
                <span className="text-sm text-[var(--color-navy)]">Until a specific date</span>
              </label>
              {form.fosterDuration === 'until_date' && (
                <input type="date" className={`${inputClass} ml-7`} value={form.fosterUntilDate} onChange={e => set('fosterUntilDate', e.target.value)} />
              )}
            </div>
          </div>

          {/* Section 5: Agreement */}
          <div>
            <h2 className={sectionHead} style={{ fontFamily: 'var(--font-playfair)' }}>By submitting this application you agree...</h2>
            <div className="space-y-3">
              {[
                ['agreeNotice', 'To give 7 days notice before moving a pet in foster care'],
                ['agreeDiscussed', 'That you have discussed this fostering with all members of your household'],
                ['agreeLandlord', 'You have permission to keep animals from your landlord (if applicable)'],
                ['agreeSafe', 'That you will ensure the foster pet is safe in your accommodation'],
                ['agreeVaccinated', 'That you will make sure your pets are fully vaccinated and up to date'],
                ['agreeDeclaration', 'I certify that all information provided is true and correct, and understand that this application does not guarantee approval'],
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
            {status === 'submitting' ? 'Submitting…' : 'Submit Foster Application'}
          </button>

          {status === 'error' && (
            <p className="text-center text-red-600 text-sm">Something went wrong. Please email us at <a href="mailto:reception@mikesvet.com" className="underline">reception@mikesvet.com</a></p>
          )}
        </form>
      </div>
    </main>
  )
}

export default function FosterPage() {
  return (
    <Suspense>
      <FosterForm />
    </Suspense>
  )
}
