export interface Area {
  slug: string
  name: string
  shortName: string
  driveTime: string
  metaTitle: string
  metaDescription: string
  intro: string
  body: string[]
  faqs: { q: string; a: string }[]
}

export const areas: Area[] = [
  {
    slug: 'vet-near-jvc',
    name: 'Jumeirah Village Circle',
    shortName: 'JVC',
    driveTime: '7 min',
    metaTitle: "Vet Near JVC Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Looking for a vet near JVC? Mike's Vet is 7 minutes from Jumeirah Village Circle on Hessa Street. Open 7 days, 9am–9:30pm. Expert care for cats & dogs.",
    intro: "Mike's Vet on Hessa Street is the closest full-service veterinary clinic to Jumeirah Village Circle - just 7 minutes from JVC via Al Khail Road.",
    body: [
      "Jumeirah Village Circle is one of Dubai's most popular residential communities, and our clinic sits just off the Al Khail interchange on Hessa Street - a short, direct drive for JVC residents. Whether you're coming from the Circle Mall side or the Al Khail Road entrance, you'll reach us in minutes.",
      "We provide everything your cat or dog needs in one place: routine consultations, vaccinations, dental care, in-house blood tests, soft tissue and orthopaedic surgery, ophthalmology, and emergency treatment. There's no need for referrals for most procedures - our fully equipped facility handles it all.",
      "We're open 7 days a week, 9:00 AM to 9:30 PM - including Fridays and all public holidays. Many JVC pet owners book appointments after work, meaning you rarely need to take time off. You can book online, call, or WhatsApp us for same-day appointments.",
    ],
    faqs: [
      { q: 'Is there a vet near JVC Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 7 minutes from Jumeirah Village Circle. We provide full veterinary care for cats and dogs including consultations, vaccinations, surgery, dentals, and emergency treatment, open 7 days from 9am–9:30pm." },
      { q: 'What is the closest vet to JVC?', a: "Mike's Vet on Hessa Street is one of the nearest full-service vet clinics to JVC. From JVC's main entrance, it's approximately a 7-minute drive along Hessa Street." },
      { q: 'Which vet near JVC is open on Friday and weekends?', a: "Mike's Vet is open every day of the week - including Fridays, Saturdays, Sundays, and public holidays - from 9:00 AM to 9:30 PM." },
      { q: 'Does the vet near JVC offer emergency care for cats and dogs?', a: "Yes. Mike's Vet provides emergency veterinary care. For urgent cases, call +971 4 283 7744 or WhatsApp us and our team will advise you immediately." },
    ],
  },
  {
    slug: 'vet-near-jvt',
    name: 'Jumeirah Village Triangle',
    shortName: 'JVT',
    driveTime: '5 min',
    metaTitle: "Vet Near JVT Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Vet near JVT? Mike's Vet is just 5 minutes from Jumeirah Village Triangle on Hessa Street. Open 7 days, 9am–9:30pm. Rated 4.8★ by Dubai pet owners.",
    intro: "Mike's Vet is practically on JVT's doorstep - Hessa Street borders the community directly, putting our clinic just 5 minutes from most parts of Jumeirah Village Triangle.",
    body: [
      "Jumeirah Village Triangle residents enjoy one of the shortest commutes to a full-service vet clinic in Dubai. Our Hessa Street location is directly adjacent to JVT, and many of our regular clients cycle or even walk to us for routine appointments.",
      "From puppy and kitten vaccines to complex orthopaedic surgery, we offer a comprehensive range of veterinary services under one roof. Our in-house laboratory means blood results in minutes rather than days, and our digital X-ray suite supports rapid diagnosis for emergencies and pre-surgical workups alike.",
      "We are open 7 days a week from 9:00 AM to 9:30 PM. You can book online in minutes, WhatsApp us at +971 4 283 7744, or call us - we do our best to accommodate same-day appointments for JVT patients.",
    ],
    faqs: [
      { q: 'Is there a vet near JVT Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 5 minutes from Jumeirah Village Triangle. We offer full veterinary services for cats and dogs, open 7 days from 9am–9:30pm." },
      { q: 'Can I walk to a vet from JVT?', a: "Parts of JVT are within walking or cycling distance of Mike's Vet on Hessa Street, which runs directly along the edge of the community. Most JVT residents reach us in under 5 minutes by car." },
      { q: 'Does the vet near JVT do cat vaccinations?', a: "Yes. Mike's Vet provides a full vaccination programme for cats and dogs, including core vaccines, rabies, kennel cough, and bordetella. We'll advise on the right schedule for your pet's age and lifestyle." },
      { q: 'Is there an emergency vet near JVT?', a: "Yes. Mike's Vet offers emergency care for cats and dogs and is just 5 minutes from JVT. Call +971 4 283 7744 or WhatsApp for urgent assistance." },
    ],
  },
  {
    slug: 'vet-near-al-barsha',
    name: 'Al Barsha',
    shortName: 'Al Barsha',
    driveTime: '10 min',
    metaTitle: "Vet Near Al Barsha Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Vet near Al Barsha? Mike's Vet is 10 minutes from Al Barsha on Hessa Street. Open 7 days, 9am–9:30pm. Expert vet care for cats & dogs. Book online.",
    intro: "Mike's Vet on Hessa Street is 10 minutes from Al Barsha - one of Dubai's most established residential neighbourhoods and home to thousands of pet owners.",
    body: [
      "Al Barsha residents are well served by our Hessa Street location, which is easily reached via Al Barsha Road or Sheikh Mohammed Bin Zayed Road. The drive takes around 10 minutes from Al Barsha 1, Al Barsha 2, or Al Barsha South.",
      "Our clinic is rated 4.8 stars by Dubai pet owners and founded by Mike and Camelia O'Hara, who built Mike's Vet around the belief that veterinary care should be both clinically excellent and genuinely personal. We offer the full range of services - from annual health checks and dental cleanings to advanced soft tissue surgery - and treat every patient like a family member.",
      "Whether you have a long-term resident cat or a recently adopted dog, we're here every day of the week from 9:00 AM to 9:30 PM. Al Barsha clients appreciate our extended evening hours, which make it easy to fit vet visits around busy family and work schedules.",
    ],
    faqs: [
      { q: 'Is there a vet near Al Barsha Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 10 minutes from Al Barsha. We provide full veterinary services for cats and dogs and are open 7 days, 9am–9:30pm." },
      { q: 'What vet in Dubai is close to Mall of the Emirates?', a: "Mike's Vet on Hessa Street is approximately 12 minutes from Mall of the Emirates. From the mall, head along Sheikh Zayed Road south and then onto Hessa Street." },
      { q: 'Does the vet near Al Barsha offer dental care for pets?', a: "Yes. Mike's Vet provides full dental care for cats and dogs, including dental exams, scale and polish, and extractions under general anaesthetic." },
      { q: 'Which vet near Al Barsha is open late?', a: "Mike's Vet is open until 9:30 PM every day of the week, including Fridays and public holidays - later than most vet clinics in Dubai." },
    ],
  },
  {
    slug: 'vet-near-barsha-heights',
    name: 'Barsha Heights',
    shortName: 'Barsha Heights',
    driveTime: '12 min',
    metaTitle: "Vet Near Barsha Heights Dubai | Mike's Vet, Hessa Street",
    metaDescription: "Vet near Barsha Heights (TECOM)? Mike's Vet is 12 minutes away on Hessa Street. Open 7 days, 9am–9:30pm. Rated 4.8★. Book online.",
    intro: "Mike's Vet is 12 minutes from Barsha Heights (TECOM) via Sheikh Zayed Road and Hessa Street - making us a convenient choice for pet owners in this busy Dubai community.",
    body: [
      "Barsha Heights, known to many as TECOM, has a large population of professionals and families living in its apartments and hotels. Despite busy schedules, many Barsha Heights residents choose Mike's Vet because our 9:30 PM closing time means you can visit us after a full working day.",
      "Our clinic offers comprehensive veterinary care including wellness exams, vaccinations, microchipping, parasite prevention, nutrition counselling, dental procedures, and surgical services. We have in-house diagnostics - blood tests, urinalysis, X-ray, and ultrasound - so we can often have results and a treatment plan ready during the same appointment.",
      "Getting to us from Barsha Heights is straightforward: take Sheikh Zayed Road southbound, exit at Hessa Street, and we're a short distance along the road. Parking is readily available outside the clinic.",
    ],
    faqs: [
      { q: 'Is there a vet near Barsha Heights or TECOM Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 12 minutes from Barsha Heights/TECOM via Sheikh Zayed Road. We are open 7 days a week, 9am–9:30pm." },
      { q: 'Can I get my cat microchipped near Barsha Heights?', a: "Yes. Mike's Vet offers microchipping for cats and dogs. Microchipping is required by Dubai law and takes just a few minutes at our clinic." },
      { q: 'Does the vet near Barsha Heights offer same-day appointments?', a: "We do our best to accommodate same-day appointments. Book online, call +971 4 283 7744, or WhatsApp us and we'll find the earliest available slot." },
      { q: 'Is there parking at the vet near Barsha Heights?', a: "Yes. Mike's Vet on Hessa Street has parking directly outside the clinic, making it easy to visit with your pet." },
    ],
  },
  {
    slug: 'vet-near-the-springs',
    name: 'The Springs',
    shortName: 'The Springs',
    driveTime: '12 min',
    metaTitle: "Vet Near The Springs Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Vet near The Springs? Mike's Vet is 12 minutes from The Springs community on Hessa Street. Open 7 days, 9am–9:30pm. Expert care for cats & dogs.",
    intro: "Mike's Vet on Hessa Street is 12 minutes from The Springs - a popular villa community with a large and growing community of dog and cat owners.",
    body: [
      "The Springs is one of Dubai's best-loved villa communities, known for its parks, lakes, and large population of cats and dogs. Many of our most loyal clients live in The Springs and The Meadows, bringing their pets to us for everything from annual vaccines to specialist surgeries.",
      "From The Springs, Mike's Vet is a straightforward 12-minute drive via the Emirates Road and Hessa Street exit. We're easy to find and have ample parking, making even stressful emergency visits as manageable as possible.",
      "Our team is experienced in treating the full range of conditions affecting cats and dogs in Dubai - from seasonal skin issues and ear infections to tick removal, orthopaedic injuries, and complex internal medicine cases. We take time to explain every diagnosis and treatment option clearly, so you always understand what's happening with your pet.",
    ],
    faqs: [
      { q: 'Is there a vet near The Springs Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 12 minutes from The Springs via Emirates Road. We offer full veterinary care for cats and dogs, open 7 days, 9am–9:30pm." },
      { q: 'Can I get my dog vaccinated near The Springs?', a: "Yes. Mike's Vet offers a full vaccination programme for dogs and cats, including core vaccines, rabies, kennel cough, and more. We'll tailor a schedule to your dog's needs." },
      { q: 'Does the vet near The Springs treat emergencies?', a: "Yes. Mike's Vet provides emergency treatment for cats and dogs. If your pet has an accident or sudden illness, call +971 4 283 7744 or WhatsApp us straight away." },
      { q: 'How do I get to Mike\'s Vet from The Springs?', a: "From The Springs, take Emirates Road (E611) northbound, exit onto Hessa Street heading towards Al Barsha, and we are located on Hessa Street. The drive takes approximately 12 minutes." },
    ],
  },
  {
    slug: 'vet-near-motor-city',
    name: 'Motor City',
    shortName: 'Motor City',
    driveTime: '15 min',
    metaTitle: "Vet Near Motor City Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Vet near Motor City Dubai? Mike's Vet is 15 minutes away on Hessa Street. Open 7 days, 9am–9:30pm. 4.8★ rated vet clinic for cats & dogs.",
    intro: "Mike's Vet on Hessa Street serves Motor City and Damac Hills residents - a 15-minute drive that's well worth the trip for expert, compassionate vet care.",
    body: [
      "Motor City is a well-established community known for its spacious villas, green spaces, and active dog-walking culture. Many Motor City residents own dogs and cats, and we see a number of them regularly at our Hessa Street clinic - just 15 minutes away via Sheikh Mohammed Bin Zayed Road.",
      "At Mike's Vet, we treat your pet as an individual, not just a case number. Our clinic is built for the kind of personalised care that large multi-location practices struggle to provide. Our vets take time with every consultation, explain diagnoses clearly, and follow up on cases that need monitoring.",
      "Services include full wellness programmes, advanced diagnostics, dental care under anaesthetic, in-house surgery, physiotherapy referrals, nutrition plans, and more. We also run an active adoption programme - if you're thinking of adding a furry family member, visit our adoptions page to meet the animals in our care.",
    ],
    faqs: [
      { q: 'Is there a vet near Motor City Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 15 minutes from Motor City. We offer full veterinary care for cats and dogs, open 7 days from 9am–9:30pm." },
      { q: 'Does the vet near Motor City treat large breeds?', a: "Yes. Mike's Vet treats dogs of all sizes, including large and giant breeds. Our surgical suite and in-house diagnostic equipment are equipped for larger patients." },
      { q: 'Is there a vet near Damac Hills?', a: "Yes. Mike's Vet on Hessa Street is the nearest full-service vet clinic to Damac Hills and Motor City, approximately 15 minutes away. We are open 7 days including Fridays and public holidays." },
      { q: 'Can I book an emergency vet appointment near Motor City?', a: "Yes. For emergencies, call Mike's Vet on +971 4 283 7744 or WhatsApp us. We will see urgent cases as quickly as possible." },
    ],
  },
  {
    slug: 'vet-near-arabian-ranches',
    name: 'Arabian Ranches',
    shortName: 'Arabian Ranches',
    driveTime: '18 min',
    metaTitle: "Vet Near Arabian Ranches Dubai | Mike's Vet, Hessa Street",
    metaDescription: "Vet near Arabian Ranches? Mike's Vet is 18 minutes away on Hessa Street. Open 7 days, 9am–9:30pm. Expert care for cats, dogs & all breeds. Book online.",
    intro: "Mike's Vet on Hessa Street is 18 minutes from Arabian Ranches - a premium villa community known for its large gardens, dog-friendly parks, and love of animals.",
    body: [
      "Arabian Ranches is one of Dubai's most desirable family communities, and it's also one of Dubai's most pet-populated. We see dogs and cats from across Arabian Ranches 1, 2, and 3 at our Hessa Street clinic - and many clients tell us that the drive is worth it for the standard of care they receive.",
      "Whether you have a golden retriever who swam in the pool and picked up an ear infection, a cat who needs a dental, or a dog who requires orthopaedic surgery after an injury on the golf course - our team is equipped to handle it. Our clinic has in-house X-ray, ultrasound, and a full laboratory, meaning faster answers and faster treatment for your pet.",
      "We are rated 4.8 stars by Dubai pet owners and founded with a clear philosophy: exceptional medicine delivered with genuine warmth. Every pet that comes through our doors is treated with the same care we'd give our own animals.",
    ],
    faqs: [
      { q: 'Is there a vet near Arabian Ranches Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 18 minutes from Arabian Ranches via Sheikh Mohammed Bin Zayed Road. We are open 7 days, 9am–9:30pm." },
      { q: 'Does the vet near Arabian Ranches offer orthopaedic surgery for dogs?', a: "Yes. Mike's Vet offers orthopaedic surgery for dogs including cruciate ligament repair, fracture management, and joint procedures. Our surgical team is experienced in treating large and active breeds." },
      { q: 'Is there a vet near Arabian Ranches 2 or 3?', a: "Yes. Mike's Vet on Hessa Street serves all parts of Arabian Ranches including Ranches 2 and 3. The drive takes 18–22 minutes depending on your exact location within the community." },
      { q: 'Does the vet near Arabian Ranches see large dog breeds?', a: "Absolutely. We regularly treat large and giant breeds from Arabian Ranches. Our facilities and team are well equipped for big dogs." },
    ],
  },
  {
    slug: 'vet-near-jumeirah',
    name: 'Jumeirah',
    shortName: 'Jumeirah',
    driveTime: '20 min',
    metaTitle: "Vet Near Jumeirah Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Vet near Jumeirah? Mike's Vet is 20 minutes from Jumeirah on Hessa Street. Open 7 days, 9am–9:30pm. Rated 4.8★. Expert care for cats & dogs. Book online.",
    intro: "Mike's Vet on Hessa Street is 20 minutes from Jumeirah - a short drive for one of Dubai's most established, pet-loving communities.",
    body: [
      "Jumeirah is one of Dubai's most iconic residential areas, home to long-term expats, families, and some of the city's most pampered pets. Our Hessa Street clinic is easily accessible from Jumeirah 1, 2, and 3 via Umm Suqeim Road or Sheikh Zayed Road - typically a 20-minute drive.",
      "We provide the kind of attentive, personalised care that Jumeirah pet owners expect. Our clinic is small enough to remember your pet by name and large enough to handle complex medical and surgical cases in-house. We invest in the latest diagnostic equipment so that answers come quickly and treatment begins without delay.",
      "Our team includes experienced small animal clinicians who are passionate about what they do. We offer full wellness care, advanced diagnostics, dental procedures, elective and emergency surgery, and nutrition counselling - all under one roof on Hessa Street.",
    ],
    faqs: [
      { q: 'Is there a vet near Jumeirah Dubai?', a: "Yes. Mike's Vet on Hessa Street is approximately 20 minutes from Jumeirah. We are open 7 days, 9am–9:30pm, and provide full veterinary care for cats and dogs." },
      { q: 'Does the vet near Jumeirah offer specialist care?', a: "Mike's Vet offers advanced in-house services including orthopaedic surgery, ophthalmology, dental care under anaesthetic, in-house blood testing, X-ray, and ultrasound. We handle most cases without external referral." },
      { q: 'Which vet in Dubai is near Jumeirah and open late?', a: "Mike's Vet on Hessa Street is open until 9:30 PM every day including Fridays and public holidays, making us one of the few full-service vet clinics in Dubai with genuine late-evening hours." },
      { q: 'How do I book a vet appointment near Jumeirah?', a: "You can book online at mikesvet.com, WhatsApp us at +971 4 283 7744, or call +971 4 283 7744. We aim to accommodate same-day appointments where possible." },
    ],
  },
  {
    slug: 'vet-near-damac-hills',
    name: 'DAMAC Hills',
    shortName: 'DAMAC Hills',
    driveTime: '12 min',
    metaTitle: "Vet Near DAMAC Hills Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Looking for a vet near DAMAC Hills? Mike's Vet is approximately 12 minutes from DAMAC Hills on Hessa Street. Expert care for cats & dogs, open 7 days 9am–9:30pm. Home visits available.",
    intro: "DAMAC Hills residents are approximately 12 minutes from Mike's Vet on Hessa Street - one of Dubai's highest-rated veterinary clinics, with a 4.8-star Google rating. Whether you need a routine check-up, emergency care, dental procedure, or complex surgery, our full-service clinic has everything in-house. We also offer vet home visits to DAMAC Hills for cats and dogs who find the clinic environment stressful.",
    body: [
      "DAMAC Hills is a large, leafy residential community popular with families and pet owners. Dogs and cats are a fixture of daily life there - and with parks, walking paths, and open green spaces, dogs especially get a lot of outdoor exposure. That means regular parasite prevention (ticks, fleas, heartworm), annual vaccinations, and wellness checks are particularly important for DAMAC Hills pets.",
      "Our clinic on Hessa Street covers the full range of veterinary services: from puppy and kitten first appointments through to complex orthopaedic surgery, in-house diagnostics, dental care, and ICU-level emergency care. Most diagnostic workups - blood tests, urinalysis, X-ray, and ultrasound - are completed in a single visit, so you are not making multiple trips.",
      "We offer vet home visits to DAMAC Hills for AED 400 + VAT. Many cats in particular do much better in their own environment than in a clinic waiting room. Our home visit vets are the same experienced team who work in our clinic - not agency locums - so follow-up care is seamless.",
    ],
    faqs: [
      { q: 'How far is Mike\'s Vet from DAMAC Hills?', a: "Mike's Vet on Hessa Street is approximately 12 minutes from DAMAC Hills, depending on traffic. We are easily accessible via Hessa Street and Sheikh Mohammed Bin Zayed Road." },
      { q: 'Do you offer home visits to DAMAC Hills?', a: "Yes. Our vet home visit service covers DAMAC Hills and surrounding areas. The fee is AED 400 + VAT. Book by calling or WhatsApp on +971 4 283 7744." },
      { q: 'Is Mike\'s Vet open on weekends and public holidays?', a: "Yes. We are open 7 days a week from 9:00 AM to 9:30 PM, including Fridays, Saturdays, and public holidays." },
      { q: 'What services does Mike\'s Vet offer for dogs and cats near DAMAC Hills?', a: "We offer the full range of veterinary services: vaccinations, wellness checks, consultations, dental care, spay/neuter, in-house blood tests and diagnostics, X-ray, ultrasound, soft tissue surgery, orthopaedic surgery including TPLO, emergency care, and ICU. No referrals needed for most procedures." },
    ],
  },
  {
    slug: 'vet-near-mudon',
    name: 'Mudon',
    shortName: 'Mudon',
    driveTime: '15 min',
    metaTitle: "Vet Near Mudon Dubai | Mike's Vet on Hessa Street",
    metaDescription: "Looking for a vet near Mudon? Mike's Vet is approximately 15 minutes from Mudon on Hessa Street. Comprehensive vet care for cats & dogs, open 7 days 9am–9:30pm. Home visits to Mudon available.",
    intro: "Mudon residents are approximately 15 minutes from Mike's Vet on Hessa Street - a full-service veterinary clinic rated 4.8 stars on Google. We offer everything from routine vaccinations and wellness checks to advanced surgery, emergency care, and ICU-level critical care. Home visits to Mudon are also available for pets who prefer to be seen in their own home.",
    body: [
      "Mudon is a family-oriented villa community with good access via Hessa Street and Al Qudra Road. It is a community of active pet owners, with dogs regularly seen in the parks and walking areas around the neighbourhood. With outdoor access comes increased exposure to parasites - ticks and fleas are common across Dubai's residential communities - making regular parasite prevention and annual wellness checks particularly important.",
      "At Mike's Vet, we handle everything from first puppy and kitten appointments to the most complex surgical cases. Our in-house diagnostic suite includes IDEXX blood analysers, AI-powered fecal parasite testing (results in 9 minutes), digital X-ray, and a Mindray Vetus9 ultrasound with full cardiac and abdominal capability. Most workups are completed in a single visit.",
      "For Mudon residents whose pets find the journey or clinic environment stressful, our home visit service provides the same quality of vet care in your own home for AED 400 + VAT. We cover Mudon, DAMAC Hills, Arabian Ranches, and surrounding areas.",
    ],
    faqs: [
      { q: 'How far is Mike\'s Vet from Mudon?', a: "Mike's Vet on Hessa Street is approximately 15 minutes from Mudon, depending on traffic. The clinic is accessible via Hessa Street and Al Qudra Road." },
      { q: 'Do you do home visits to Mudon?', a: "Yes. We offer vet home visits to Mudon for AED 400 + VAT. Book by calling or WhatsApp on +971 4 283 7744." },
      { q: 'Are you open on Fridays and public holidays?', a: "Yes. Mike's Vet is open 7 days a week including Fridays and public holidays, from 9:00 AM to 9:30 PM." },
      { q: 'Can I get X-rays and blood tests done at your clinic near Mudon?', a: "Yes. We have full in-house diagnostics including IDEXX blood analysis, digital X-ray, and Mindray Vetus9 ultrasound. Most diagnostic workups are completed in a single visit with same-day results." },
    ],
  },
]
