export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  heroImage?: { url: string; alt: string; credit?: string }
  sections: { heading?: string; paragraphs: string[] }[]
  faqs?: { q: string; a: string }[]
  references?: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'stray-cat-quarantine-dubai',
    title: 'How Long to Quarantine a Stray Cat: A Dubai Guide to Bringing Home a Street Cat',
    date: '2026-09-27',
    readTime: '7 min read',
    excerpt: 'Found a stray cat in Dubai and want to bring it home? Quarantine is essential — both to protect your resident pets and to give the newcomer time to decompress. Here is exactly what to do and for how long.',
    metaTitle: "Stray Cat Quarantine Dubai: How Long & What to Do | Mike's Vet",
    metaDescription: "Bringing a stray cat home in Dubai? Learn how long to quarantine, which vet tests to run, vaccination and microchip requirements, and how to introduce them safely. From Mike's Vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A stray cat sitting outdoors in an urban setting',
    },
    sections: [
      {
        heading: 'Why Quarantine Matters When You Bring Home a Stray',
        paragraphs: [
          'Bringing a street cat indoors is a generous act, but skipping quarantine puts both the newcomer and any resident pets at risk. Street cats in Dubai are often unvaccinated and may be carrying infections that show no obvious outward signs: upper respiratory viruses (feline herpesvirus, calicivirus), ringworm, fleas, ear mites, intestinal parasites, FIV, FeLV, and Mycoplasma haemofelis.',
          'Even a cat that looks healthy and active can shed respiratory viruses for weeks after exposure. A quarantine period creates a protective buffer: the new cat is kept separate until vet checks are complete and any active infection has had time to declare itself.',
          'Beyond disease prevention, quarantine benefits the stray itself. Street life is stressful. A quiet, low-stimulation room gives the cat time to decompress, build trust with humans, and adjust to indoor living before the additional stress of meeting other animals.',
        ],
      },
      {
        heading: 'How Long Should the Quarantine Period Be?',
        paragraphs: [
          'The standard recommendation is a minimum of 2 weeks, with 4 weeks being strongly preferred.',
          'Two weeks covers the incubation period of most common feline respiratory viruses. If a cat is going to show signs of calicivirus or herpesvirus, they will usually appear within 14 days of exposure. However, 2 weeks is the bare minimum: it does not give enough time to get all vet results back, start a full vaccination course, or be confident the cat is truly well.',
          'Four weeks allows time to complete FIV and FeLV testing, start the PCH vaccination schedule, run a faecal parasite screen, treat any identified infections fully, and confirm the cat is eating well and behaving normally before any introduction to resident pets.',
          'Kittens under 16 weeks, very thin cats, and cats showing any signs of illness on arrival should be given the full 4 weeks as a minimum. There is no benefit to rushing.',
        ],
      },
      {
        heading: 'Setting Up the Quarantine Space',
        paragraphs: [
          'Choose a room with a door that closes fully: a spare bedroom, bathroom, or utility room works well. The space does not need to be large, but it needs to be genuinely separate from resident pets.',
          'Equip the room with: a litter tray (scooped daily), fresh water (separate from any resident pet bowls), food bowls, a hiding spot such as a cardboard box with a cut-out entrance and a soft blanket inside, and a small scratching surface. Cats that feel they have somewhere to hide settle faster than those with nowhere to retreat.',
          'Keep a dedicated set of items for the quarantine room: a separate litter scoop, separate food and water bowls, and a towel or blanket used only in that space. Wash hands thoroughly before and after entering. Removing shoes at the door before entering prevents you from tracking material between spaces on the soles of your feet.',
        ],
      },
      {
        heading: 'The Vet Checks to Book During Quarantine',
        paragraphs: [
          'Book a vet appointment within the first 48 to 72 hours of bringing the cat home. Do not wait until the end of the quarantine period: early diagnosis of parasites or infections means treatment can begin sooner and the cat will be comfortable faster.',
          'At the initial appointment your vet will carry out a full physical examination, checking weight, temperature, lymph nodes, ears, eyes, mouth, skin, and coat condition. They will look for fleas and flea dirt, ear mites, and signs of ringworm (circular patches of hair loss or scaling). A faecal sample will be tested for intestinal parasites including roundworms, hookworms, Giardia, and Tritrichomonas.',
          'Blood tests recommended for Dubai stray cats include FIV and FeLV screening (both are more prevalent in unvaccinated community cat populations in warm climates), and a full haematology panel if the cat appears pale, lethargic, or underweight (to screen for anaemia and Mycoplasma haemofelis infection).',
          'The vet will start a deworming and parasite treatment programme, begin or catch up on vaccinations (PCH plus rabies, both required in the UAE), and check for a microchip. If the cat is not microchipped, microchipping is required by Dubai Municipality for registration.',
        ],
      },
      {
        heading: 'Understanding FIV and FeLV Results',
        paragraphs: [
          'FIV (Feline Immunodeficiency Virus) and FeLV (Feline Leukaemia Virus) are two of the most clinically significant results to wait for during quarantine.',
          'FIV affects the immune system in a way similar to HIV in humans: infected cats can live for many years with good quality of life, particularly when kept indoors and managed carefully. FIV is transmitted primarily through deep bite wounds, so the risk of transmission to other cats in a household with no fighting is relatively low. FIV-positive cats can often be integrated with FIV-negative cats in calm households, though this should be discussed with your vet.',
          'FeLV is a more serious diagnosis. The virus is shed in saliva, nasal secretions, urine, and milk, and spreads through close social contact: mutual grooming, shared feeding bowls, and prolonged close proximity. FeLV-positive cats should not have contact with unvaccinated FeLV-negative cats. FeLV vaccination is available and is strongly recommended for any resident cat before integration with an unknown-status stray.',
          'Both results significantly shape how you approach integration and ongoing management. A positive result for either virus is not a reason to abandon the cat, but it does require an informed plan.',
        ],
      },
      {
        heading: 'Dubai-Specific Considerations for Stray Cats',
        paragraphs: [
          'Dubai has a large and well-documented community cat population, and many cats found on the street are part of managed TNR (trap-neuter-return) programmes rather than truly abandoned strays. TNR cats are typically identified by an ear tip: the very tip of one ear is removed at a straight angle during the neuter procedure as a permanent marker. If the cat you have found has an ear tip, it has already been sterilised and is part of a managed colony.',
          'Check for a microchip before assuming the cat is unowned. A vet clinic can scan for a chip within seconds. Some community cats in Dubai are registered, vaccinated, and have a designated carer.',
          "Dubai Municipality requires all cats and dogs kept as pets to be registered, vaccinated against rabies, and microchipped. If you are keeping the cat, these steps need to be completed regardless of whether the cat came from the street or a rescue organisation. Your vet can assist with registration documentation.",
          "Dubai's climate creates year-round flea pressure that is more intense than in cooler countries. Street cats here commonly carry higher flea and parasite burdens than their counterparts in Europe or North America. Year-round flea prevention is not optional — it is the standard of care for Dubai cats, indoor or not.",
        ],
      },
      {
        heading: 'Introducing the New Cat to Resident Pets',
        paragraphs: [
          'Once the quarantine period is complete and the vet has confirmed the cat is healthy and parasite-free, introduction to resident pets can begin. The process should be gradual and should not be rushed.',
          'Start with scent introduction: swap bedding between the new cat and your resident cat so each can investigate the other\'s smell without direct contact. Do this for several days. You can also feed both cats on either side of the closed quarantine room door so they associate each other\'s scent with something positive.',
          'Next, allow brief visual contact through a cracked door, a baby gate, or a mesh barrier. Monitor both cats\' body language. Hissing and retreating is normal at this stage; direct lunging or screaming is a signal to slow down.',
          'Supervised face-to-face meetings come last. Keep them short (5 to 10 minutes) and end on a calm note before tension escalates. Gradually increase the duration over days to weeks. Some cats accept each other within a few days; others take 2 to 6 weeks of graduated introductions before they tolerate sharing space comfortably.',
          'Do not force interaction and do not punish hissing or growling. These are normal feline communication signals. The goal is neutral coexistence first: full friendship, if it comes, develops on its own timeline.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long should I quarantine a stray cat before introducing it to my other cat?',
        a: 'A minimum of 2 weeks, with 4 weeks strongly preferred. This covers the incubation period of common feline infections and allows time to complete vet checks, vaccinations, and parasite treatment before any contact with resident pets.',
      },
      {
        q: 'Do I need to take a stray cat to the vet straight away?',
        a: 'Yes, ideally within 48 to 72 hours of bringing them home. Early checks for parasites, respiratory infection, and diseases like FIV and FeLV allow treatment to start sooner and help you make informed decisions about integration.',
      },
      {
        q: 'Can my indoor cats catch something from a stray through a closed door?',
        a: 'Respiratory viruses can travel on air currents through gaps under doors. Keep the quarantine space genuinely separate, particularly if your resident cat develops sneezing or eye discharge after the stray arrives.',
      },
      {
        q: 'What diseases should I test a stray cat for in Dubai?',
        a: 'FIV, FeLV, intestinal parasites (faecal screen), ear mites, ringworm, and a full physical examination are the priority. If the cat appears pale, lethargic, or underweight, a blood smear or PCR test for Mycoplasma haemofelis is also recommended given the high flea burden in Dubai.',
      },
      {
        q: 'Is it safe to keep a cat with FIV alongside my other cats?',
        a: 'In many households, yes. FIV is primarily transmitted through deep bite wounds, so the risk in a calm, non-fighting household is relatively low. The decision depends on the individual cats and their temperaments. Discuss the specific situation with your vet before proceeding with integration.',
      },
    ],
    references: [
      "Thiry E, et al. 'Feline herpesvirus infection: ABCD guidelines on prevention and management.' Journal of Feline Medicine and Surgery. 2009;11(7):547-555.",
      "Levy JK, et al. 'Seroprevalence of feline leukemia virus and feline immunodeficiency virus infection among cats in North America and risk factor for seropositivity.' Journal of the American Veterinary Medical Association. 2006;228(3):371-376.",
      "Moriello KA, et al. 'Diagnosis and treatment of dermatophytosis in dogs and cats.' Veterinary Dermatology. 2017;28(3):266-e68.",
      "Plumb DC. Plumb's Veterinary Drug Handbook. 9th ed. Wiley-Blackwell; 2018.",
      "Litster AL, et al. 'Prevalence of FIV infection in cats presented for adoption from Australian shelters.' Australian Veterinary Journal. 2014;92(1-2):20-25.",
    ],
  },
  {
    slug: 'cat-scratch-disease-dubai',
    title: 'Cat Scratch Disease: Should You Worry About Being Scratched by a Cat?',
    date: '2026-09-25',
    readTime: '6 min read',
    excerpt: 'Most cat scratches are nothing to worry about, but cat scratch disease, caused by the bacterium Bartonella henselae, is a real condition that can cause swollen lymph nodes and fever lasting weeks. Here is what to know.',
    metaTitle: "Cat Scratch Disease Dubai: Symptoms & Treatment | Mike's Vet",
    metaDescription: "Cat scratch disease (Bartonella henselae) can cause swollen lymph nodes and fever after a cat scratch or bite. Learn the signs, risk factors, and prevention tips from Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A domestic cat showing its paw',
    },
    sections: [
      {
        heading: 'What is Cat Scratch Disease?',
        paragraphs: [
          "Cat scratch disease (CSD) is caused by Bartonella henselae, a gram-negative intracellular bacterium found in cats worldwide, with higher prevalence in warm climates. Cats act as reservoir hosts and almost never show illness themselves. The infection is transmitted to humans primarily through scratches that inoculate flea dirt (flea faeces containing Bartonella) into the wound, or via flea-contaminated claws. Bites can also transmit it. Direct flea-to-human transmission does not typically occur.",
          "It is not a rare condition. Studies estimate that CSD affects approximately 12,000 people per year in the United States alone, with higher incidence in tropical and subtropical regions including the Gulf states.",
        ],
      },
      {
        heading: 'The Flea Connection',
        paragraphs: [
          "Understanding the transmission route helps explain why flea control is so central to prevention. Cats do not carry Bartonella in a form easily transmitted by scratching alone. The route works like this: a flea infected with B. henselae feeds on a cat; the cat develops bacteraemia; infected fleas feeding on that cat produce contaminated faeces (flea dirt); flea dirt accumulates under the cat's claws during grooming; when the cat scratches a person, flea dirt is inoculated into the wound.",
          "This means that cats with active flea infestations are the main source of risk. Cats without fleas carry very little risk of transmitting Bartonella, even if they scratch. Keeping your cat flea-free is the single most effective prevention strategy.",
        ],
      },
      {
        heading: 'Symptoms in Humans',
        paragraphs: [
          "The classic presentation follows a predictable timeline. Within 3 to 10 days of the scratch, a small papule or pustule appears at the inoculation site. This is often overlooked or mistaken for a minor wound infection. One to four weeks later, swollen and tender regional lymph nodes develop, usually in the armpit if the scratch was on the arm, in the neck if on the face, or in the groin if on the lower limb.",
          "Accompanying symptoms include low-grade fever, headache, fatigue, and general malaise. In most healthy adults, the condition is self-limiting and resolves fully over 2 to 4 months, even without antibiotic treatment.",
        ],
      },
      {
        heading: 'Atypical and Severe Forms',
        paragraphs: [
          "In immunocompromised individuals (including those with HIV, transplant recipients, or people undergoing chemotherapy), Bartonella can cause much more serious disease. Bacillary angiomatosis produces raised vascular skin lesions that can be mistaken for tumours. Peliosis hepatis involves blood-filled cysts in the liver and spleen. Both are potentially life-threatening in immunosuppressed patients.",
          "Parinaud's oculoglandular syndrome occurs when B. henselae is inoculated into the eye, causing granulomatous conjunctivitis and a swollen preauricular lymph node on the same side. Bartonella encephalopathy is rare but has been reported, presenting as seizures or altered consciousness.",
          "Immunocompromised individuals should take extra precautions when handling cats, particularly those with known flea exposure.",
        ],
      },
      {
        heading: 'When to See a Doctor',
        paragraphs: [
          "Most healthy adults do not need antibiotic treatment. You should see a GP if: swollen lymph nodes do not begin to improve after 2 weeks; you develop a high fever (above 38.5 degrees C); the lymph node becomes very painful or begins to fluctuate (suggesting abscess formation); or you are immunocompromised.",
          "For severe or persistent cases, azithromycin (5 days) or doxycycline (2 to 4 weeks) are the most commonly prescribed antibiotics. For immunocompromised patients, longer courses are typically needed and specialist input is recommended.",
          "Wash any cat scratch or bite thoroughly with soap and water immediately. Do not allow cats to lick open wounds.",
        ],
      },
      {
        heading: 'Prevention: Practical Steps',
        paragraphs: [
          "Year-round flea prevention on your cat is the most important measure. Monthly topical or oral flea treatments (such as selamectin, fipronil, or fluralaner) are highly effective. In Dubai's warm climate, fleas are active all year, so flea prevention should never be seasonal.",
          "Keep your cat's nails trimmed to reduce the depth of any accidental scratch. Avoid rough play that encourages scratching and biting. Teach children not to handle cats roughly.",
          "After any scratch or bite, wash the area immediately with soap and water for at least 30 seconds. Do not apply saliva to the wound, and avoid allowing cats to lick open cuts or sores.",
        ],
      },
      {
        heading: 'Cat Scratch Disease in Dubai',
        paragraphs: [
          "Dubai's year-round warm climate creates ideal conditions for flea survival and reproduction. Rescue and community cats, which are common in Dubai, tend to carry higher Bartonella bacteraemia and flea burdens than indoor cats with regular preventive care.",
          "If you have recently adopted a cat from a shelter or from the street, starting monthly flea prevention immediately is strongly recommended, both for your cat's welfare and to reduce the small but real risk of Bartonella transmission.",
          "For the vast majority of healthy adults in Dubai, cat ownership carries very low risk. The wellbeing and companionship of living with a cat far outweighs the small risk of a scratch-related illness, provided basic flea control is in place.",
        ],
      },
    ],
    faqs: [
      {
        q: "What are the first signs of cat scratch disease?",
        a: "A small red bump or blister at the scratch site appears within 3 to 10 days. This is followed 1 to 4 weeks later by swollen lymph nodes near the scratch area (armpit, neck, or groin depending on where you were scratched).",
      },
      {
        q: "Can I get cat scratch disease from a cat that appears healthy?",
        a: "Yes. Cats carrying Bartonella henselae typically show no symptoms. The risk is highest from cats with active flea infestations, since fleas are the vector that carries the bacterium.",
      },
      {
        q: "How long does cat scratch disease last?",
        a: "In healthy adults, lymph node swelling resolves over 2 to 4 months without treatment. Most people recover fully with no lasting complications. Severe cases in immunocompromised individuals can be more prolonged.",
      },
      {
        q: "Should I get rid of my cat if I develop cat scratch disease?",
        a: "No. The risk is low and manageable. Effective flea prevention, keeping nails trimmed, and washing scratches immediately are sufficient to minimise risk in most households.",
      },
      {
        q: "Are some people more at risk from cat scratches?",
        a: "Yes. Immunocompromised individuals, including those with HIV, transplant recipients, and people on chemotherapy or long-term immunosuppressants, are at significantly higher risk of severe Bartonella disease and should take extra precautions.",
      },
    ],
    references: [
      "Rolain JM, et al. Recommendations for treatment of human infections caused by Bartonella species. Antimicrobial Agents and Chemotherapy. 2004;48(6):1921-1933.",
      "Brunt J, et al. American Association of Feline Practitioners 2006 Panel report on diagnosis, treatment, and prevention of Bartonella species infections. Journal of Feline Medicine and Surgery. 2006;8(4):213-226.",
      "Chomel BB, et al. Ecological fitness and strategies of adaptation of Bartonella species to their hosts and vectors. Veterinary Research. 2009;40(2):29.",
      "Klotz SA, et al. Cat-scratch disease. American Family Physician. 2011;83(2):152-155.",
      "Giladi M, et al. Cat-scratch disease in elderly patients. Clinical Infectious Diseases. 2005;41(7):969-974.",
    ],
  },
  {
    slug: 'ringworm-cats-dubai',
    title: 'Ringworm in Cats: Causes, Signs, Treatment and How to Stop It Spreading',
    date: '2026-09-23',
    readTime: '6 min read',
    excerpt: 'Despite its name, ringworm has nothing to do with worms. It is a fungal infection that causes hair loss in cats and can spread to people. Here is everything Dubai cat owners need to know about recognising and treating it.',
    metaTitle: "Ringworm in Cats Dubai: Signs & Treatment | Mike's Vet",
    metaDescription: "Ringworm is a contagious fungal infection causing hair loss in cats that can spread to humans. Learn the signs, diagnosis, and treatment options in Dubai from Mike's Vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'An orange tabby cat resting at home',
    },
    sections: [
      {
        heading: 'What is Ringworm?',
        paragraphs: [
          "Ringworm (dermatophytosis) is a fungal skin infection, not caused by any worm despite the name. In cats, the most common causative organism is Microsporum canis, responsible for approximately 95% of feline cases. Less commonly, Microsporum gypseum (a soil organism) or Trichophyton mentagrophytes are implicated.",
          "The dermatophyte fungi infect dead keratinised tissue: hair shafts, the outer layer of skin, and claws. They do not invade living tissue, but the host immune response to the fungus causes the inflammation and hair loss that characterise the condition.",
          "Ringworm is one of the most common dermatological conditions seen in cats in the UAE, particularly in recently rescued or shelter-housed animals.",
        ],
      },
      {
        heading: 'Signs in Cats',
        paragraphs: [
          "The classic presentation is one or more roughly circular patches of hair loss (alopecia), with broken hairs at the margins, scaling, and mild redness. Lesions most commonly appear on the face, around the ears, and on the forelimbs. The skin may appear grey and flaky, and the hair in affected areas breaks off near the skin surface rather than being pulled out at the root.",
          "Importantly, some cats (particularly long-haired breeds such as Persians) are asymptomatic carriers. These cats carry and shed infective spores in their coat without any visible lesions. This makes ringworm challenging to control in multi-cat environments, because a clinically normal cat can be the ongoing source of infection.",
          "Pruritus (itching) is variable. Some cats scratch affected areas; others do not appear bothered at all.",
        ],
      },
      {
        heading: 'Diagnosis',
        paragraphs: [
          "Wood's lamp examination (UV light) is a quick screening tool. Approximately 50% of M. canis strains fluoresce a distinctive apple-green colour under UV light. However, a negative Wood's lamp does not rule out ringworm, and false positives occur with topical medications and scale. It is a screening aid, not a diagnostic test.",
          "Fungal culture on dermatophyte test medium (DTM) is the gold standard. Affected hairs are plucked from the margins of lesions and placed on culture medium, which changes colour (from amber to red) as the fungus grows. Results take 10 to 14 days, but this is the most reliable method for confirmation and species identification.",
          "Trichogram, which involves microscopic examination of plucked hairs, can identify fungal spores faster but is less sensitive. PCR-based testing is emerging as a rapid, sensitive diagnostic option and is available in some referral laboratories.",
        ],
      },
      {
        heading: 'Zoonotic Risk',
        paragraphs: [
          "M. canis is highly contagious to people. Human infection presents as itchy, circular, red and scaly plaques most commonly on exposed skin areas such as the arms, face, and neck. The lesions expand outward as the fungus spreads, creating the classic ring appearance.",
          "Children, elderly individuals, and immunocompromised people are at highest risk of infection and may develop more extensive or persistent disease. Anyone handling a cat with suspected or confirmed ringworm should wear disposable gloves and wash hands thoroughly after contact.",
          "Infected cats should be isolated from other animals and from vulnerable people in the household until treatment is underway and the infection is confirmed to be responding.",
        ],
      },
      {
        heading: 'Treatment',
        paragraphs: [
          "Treatment requires both topical and, in most cases, systemic antifungal therapy, as well as thorough environmental decontamination. Stopping one element of treatment while continuing others risks treatment failure.",
          "Topical therapy: twice-weekly lime sulphur dips (diluted 1:16 with water) or twice-weekly miconazole/chlorhexidine shampoo are the most evidence-supported topical treatments. Dips must cover the entire body. Spot treatments alone are not adequate.",
          "Systemic therapy: oral itraconazole at 5 mg/kg every other day is the preferred systemic treatment for widespread or multi-cat infections. Terbinafine is an alternative. Griseofulvin is used less commonly now due to its side effect profile. Treatment duration is a minimum of 6 to 8 weeks and continues until two consecutive negative fungal cultures taken 2 to 4 weeks apart.",
          "Environmental decontamination: vacuum daily (disposing of the vacuum bag after each session), wash bedding and soft furnishings frequently at high temperature, and wipe hard surfaces with diluted bleach (1:10). Diluted bleach kills ringworm spores effectively. HEPA vacuuming removes infected hairs from surfaces.",
        ],
      },
      {
        heading: 'Multi-Cat Households',
        paragraphs: [
          "Ringworm control in multi-cat households is significantly more complex. All cats in the household must be tested and treated simultaneously, including cats that appear clinically normal. A single untreated carrier cat will reinfect treated cats.",
          "Fungal culture of all in-contact cats, including those without lesions, is strongly recommended before starting treatment. This identifies carriers and ensures all sources of infection are addressed from the outset.",
        ],
      },
      {
        heading: 'Ringworm in Dubai',
        paragraphs: [
          "Dubai's warm and humid climate allows ringworm spores to survive longer on surfaces and in the environment compared to cooler climates. Rescue and shelter cats are at particularly high risk due to the stress of rehoming and shared living conditions, which can suppress immunity and promote spread.",
          "If you have recently adopted a cat or are fostering, it is worth discussing a ringworm screen with your vet, particularly if the cat came from a multi-cat shelter environment. Early identification and treatment reduces the risk of infection spreading to people and other pets in your home.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I catch ringworm from my cat?",
        a: "Yes. Microsporum canis is highly contagious to people, causing itchy circular red lesions. Wear gloves when handling infected cats, wash hands thoroughly after any contact, and avoid touching your face.",
      },
      {
        q: "How long does ringworm treatment take in cats?",
        a: "Treatment typically takes 6 to 12 weeks. It must continue until two consecutive negative fungal cultures, taken 2 to 4 weeks apart, confirm clearance. Stopping early because lesions look better is a common cause of relapse.",
      },
      {
        q: "Does ringworm always cause circular hair loss in cats?",
        a: "No. Some cats (particularly long-haired breeds such as Persians) carry the fungus without visible lesions and act as silent reservoirs, shedding infective spores while appearing completely normal.",
      },
      {
        q: "What kills ringworm spores in the home environment?",
        a: "Diluted household bleach (1:10 ratio with water) kills ringworm spores on hard surfaces. Accelerated hydrogen peroxide and enilconazole sprays are also effective. Vacuum carpets and soft furnishings daily during treatment to remove contaminated hairs.",
      },
      {
        q: "Is ringworm common in Dubai?",
        a: "Yes. The warm climate, prevalence of rescue and community cats, and shared shelter environments create favourable conditions for fungal spread. Cats recently adopted from shelters should be assessed for ringworm early.",
      },
    ],
    references: [
      "Moriello KA. Treatment of dermatophytosis in dogs and cats: review of published studies. Veterinary Dermatology. 2004;15(2):99-107.",
      "Moriello KA, et al. Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Veterinary Dermatology. 2017;28(3):266-e68.",
      "Sparkes AH, et al. Microsporum canis: inapparent carriage by cats and the viability of arthrospores. Journal of Small Animal Practice. 1994;35(8):397-401.",
      "Cafarchia C, et al. The epidemiology and pathogenicity of Malassezia. Medical Mycology. 2012;50(6):553-565.",
      "Nardoni S, et al. Prevalence, body distribution and population structure of Malassezia yeasts in healthy pet cats. Medical Mycology. 2007;45(8):757-762.",
    ],
  },
  {
    slug: 'feline-parvovirus-panleukopenia-cats-dubai',
    title: 'Feline Parvovirus in Cats: Symptoms, Treatment and Why Vaccination Saves Lives',
    date: '2026-09-21',
    readTime: '7 min read',
    excerpt: 'Feline panleukopenia is one of the most dangerous and contagious diseases a cat can get, and it kills quickly. Here is what every Dubai cat owner needs to know about the virus, its symptoms, and how to protect your cat.',
    metaTitle: "Feline Parvovirus Dubai: Symptoms & Treatment | Mike's Vet",
    metaDescription: "Feline panleukopenia (cat parvo) is a deadly viral disease in Dubai. Learn the signs, how it spreads, treatment options, and why vaccination is essential from Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A small white kitten',
    },
    sections: [
      {
        heading: 'What is Feline Parvovirus?',
        paragraphs: [
          "Feline parvovirus (FPV) is the cause of feline panleukopenia, also known (inaccurately) as feline distemper. It is closely related to canine parvovirus type 2 (CPV-2) and belongs to the same Parvoviridae family. The name panleukopenia reflects the disease's central mechanism: destruction of all white blood cell lineages, leaving the cat profoundly immunosuppressed.",
          "FPV targets rapidly dividing cells. In the bone marrow, it destroys precursor cells, causing the characteristic severe leukopenia. In the intestines, it attacks the crypts of Lieberkuhn, the rapidly proliferating cells that regenerate the intestinal lining. This causes the severe gastrointestinal signs of disease. In pregnant queens, FPV can cross the placenta and infect the developing fetal cerebellum, causing cerebellar hypoplasia in kittens that survive to birth.",
        ],
      },
      {
        heading: 'How It Spreads',
        paragraphs: [
          "Feline parvovirus is among the most environmentally stable viruses known in veterinary medicine. It is shed in all body secretions and excretions of infected cats, including faeces, urine, saliva, and vomit. Infected cats can shed virus for up to 6 weeks after clinical recovery.",
          "The virus can survive in the environment for 12 months or longer under normal conditions, resisting many common disinfectants, temperature extremes, and desiccation. This persistence means that direct cat-to-cat contact is not required for transmission. Virus can be carried into a home on shoes, clothing, or hands.",
          "In Dubai, shelters, grooming facilities, and multi-cat households carry the highest risk. Community cats with no vaccination history represent a substantial reservoir of virus in the region.",
        ],
      },
      {
        heading: 'Symptoms',
        paragraphs: [
          "The clinical presentation of feline panleukopenia can be peracute (the cat dies before notable symptoms are observed), acute, or subacute.",
          "In the acute form, the most common presentation is sudden onset vomiting and diarrhoea (often bloody), severe lethargy, complete anorexia, and high fever that may transition to subnormal temperature as the disease progresses. A classic clinical sign is a cat that hunches over its food or water bowl without eating or drinking, appearing drawn to the smell but too nauseated to consume anything.",
          "In kittens under 5 weeks, the disease is almost universally fatal and rapidly progressive. In older unvaccinated cats, the course is typically 5 to 7 days from onset to either recovery (with treatment) or death.",
        ],
      },
      {
        heading: 'Who is Most at Risk',
        paragraphs: [
          "Unvaccinated kittens under 6 months of age are at the highest risk of severe disease and death. Maternal antibodies from vaccinated queens can protect kittens for the first 6 to 14 weeks of life, but once maternal immunity wanes and before vaccination is complete, there is a susceptibility window.",
          "Adult cats with no vaccination history (or unknown vaccine status) are also at risk. Cats from shelters, community colonies, or recently imported from other countries often fall into this category. Immunocompromised cats (FIV-positive or FeLV-positive) are at higher risk of severe disease even if previously vaccinated.",
        ],
      },
      {
        heading: 'Diagnosis',
        paragraphs: [
          "Clinical diagnosis is supported by the combination of severe leukopenia on a complete blood count, the characteristic clinical signs, and vaccination history. A total white blood cell count below 2000 cells per microlitre is strongly suggestive in an unvaccinated cat with appropriate clinical signs.",
          "Rapid in-clinic canine parvovirus antigen tests (faecal ELISA) have been shown to have reasonable sensitivity and specificity for FPV, allowing a same-day presumptive diagnosis. PCR confirmation from faecal samples or tissue is available and is highly sensitive.",
          "Note: recently vaccinated cats may test weakly positive on rapid antigen tests due to vaccine shedding. Context and clinical signs must be considered in interpretation.",
        ],
      },
      {
        heading: 'Treatment',
        paragraphs: [
          "No antiviral drug is available for FPV. Treatment is entirely supportive and must be intensive to be effective. Hospitalisation with intravenous fluid therapy is essential to correct dehydration and electrolyte imbalances caused by vomiting and diarrhoea.",
          "Antiemetics (maropitant is preferred) reduce nausea and allow earlier nutritional support. Broad-spectrum antibiotics (typically a combination covering gram-negative and anaerobic bacteria) are given to prevent bacterial translocation across the damaged intestinal barrier. Nutritional support, either by nasogastric tube or parenteral nutrition in severe cases, is important for recovery.",
          "Body temperature management, blood transfusion for severely anaemic cats, and intensive nursing care (warmth, hygiene, gentle handling) are all part of comprehensive management. With aggressive in-hospital treatment, survival rates of 50 to 80% are achievable in cats that reach veterinary care quickly. Without treatment, mortality exceeds 90%.",
        ],
      },
      {
        heading: 'Prevention: Vaccination is Essential',
        paragraphs: [
          "The FPV component of the PCH vaccine (Panleukopenia, Calicivirus, Herpesvirus) is one of the most effective vaccines in feline medicine. It induces robust, long-lasting immunity and is considered a core vaccine for all cats.",
          "The primary course consists of two doses 3 to 4 weeks apart, starting at 6 to 8 weeks of age, with a booster at 12 months and then every 1 to 3 years depending on the vaccine product and individual risk assessment. Adult cats with unknown vaccine history should receive a primary course of two doses.",
          "In Dubai, where community cats provide a continuous reservoir and the virus can persist in the warm environment, keeping cats up to date with vaccination is particularly important, even for indoor cats.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can dogs catch feline parvovirus?",
        a: "Feline parvovirus (FPV) can infect dogs, and canine parvovirus (CPV-2) can infect cats. However, dogs vaccinated with the standard DHPP vaccine are generally protected against FPV as well. The two viruses are closely related but distinct.",
      },
      {
        q: "How do I know if my cat has parvovirus?",
        a: "Sudden vomiting, bloody diarrhoea, extreme lethargy, anorexia, and a very low white blood cell count are the key signs. An in-clinic rapid antigen test can give a presumptive result within minutes. Seek veterinary care immediately if you suspect panleukopenia.",
      },
      {
        q: "Can an indoor cat get parvovirus?",
        a: "Yes. The virus is extraordinarily hardy and can be carried in on shoes, clothing, or hands. Even strictly indoor cats require vaccination. The vaccine is highly effective and the risk of not vaccinating far outweighs any risk from the vaccine itself.",
      },
      {
        q: "How long does feline parvovirus survive in the environment?",
        a: "FPV can survive in a contaminated environment for 12 months or longer. It resists many standard disinfectants. Bleach diluted 1:32 with water is effective. Accelerated hydrogen peroxide and potassium peroxymonosulphate products are also effective.",
      },
      {
        q: "What is the survival rate for cats with parvovirus?",
        a: "With aggressive in-hospital supportive treatment (IV fluids, antiemetics, antibiotics, nutritional support), survival rates of 50 to 80% have been reported in cats that receive prompt care. Without treatment, mortality typically exceeds 90%, particularly in kittens.",
      },
    ],
    references: [
      "Barrs VR. Feline panleukopenia: a re-emergent disease. Veterinary Clinics of North America: Small Animal Practice. 2019;49(4):651-670.",
      "Truyen U, et al. ABCD guidelines on prevention and management of feline panleukopenia. Journal of Feline Medicine and Surgery. 2009;11(7):538-546.",
      "Kruse BD, et al. Prognostic factors in cats with feline panleukopenia. Journal of Veterinary Internal Medicine. 2010;24(6):1271-1276.",
      "Neuerer FF, et al. Comparison of different in-house test systems to detect parvovirus in faeces of cats. Journal of Feline Medicine and Surgery. 2008;10(3):247-251.",
      "Greene CE, Addie DD. Feline parvovirus infections. In: Greene CE, ed. Infectious Diseases of the Dog and Cat. 4th ed. Elsevier; 2012:80-88.",
    ],
  },
  {
    slug: 'feline-mycoplasma-haemofelis-cats-dubai',
    title: "Feline Mycoplasma: The Blood Parasite Your Cat's Blood Test Can Detect",
    date: '2026-09-19',
    readTime: '7 min read',
    excerpt: 'Mycoplasma haemofelis is a flea-transmitted blood parasite that destroys red blood cells in cats, often causing severe anaemia before owners notice anything is wrong. Here is what every cat owner in Dubai should know.',
    metaTitle: "Feline Mycoplasma Dubai: Signs & Treatment | Mike's Vet",
    metaDescription: "Mycoplasma haemofelis causes haemolytic anaemia in cats and is transmitted by fleas. Learn the signs, how a blood smear diagnoses it, and treatment options from Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A ginger cat resting quietly indoors',
    },
    sections: [
      {
        heading: 'What is Mycoplasma haemofelis?',
        paragraphs: [
          "Mycoplasma haemofelis is an obligate intraerythrocytic parasite: it lives on and within red blood cells, causing immune-mediated haemolytic anaemia. It was formerly known as Haemobartonella felis and was reclassified in 2001 based on genetic analysis. Despite the name, it is not closely related to the respiratory Mycoplasma organisms responsible for mycoplasma pneumonia in other species.",
          "Three haemotropic Mycoplasma species infect cats: Mycoplasma haemofelis (the most pathogenic), Candidatus Mycoplasma haemominutum (usually causes mild or subclinical disease), and Candidatus Mycoplasma turicensis (intermediate pathogenicity). Co-infections with more than one species are possible and may result in more severe disease.",
          "The parasite is globally distributed but is significantly more common in warm climates where the flea vector thrives year-round, making Dubai and the wider Gulf region higher-risk environments.",
        ],
      },
      {
        heading: 'How Cats Get Infected',
        paragraphs: [
          "Flea transmission is the most important and best-documented route. The cat flea, Ctenocephalides felis, is the primary vector. Fleas acquire the organism from infected cats and transmit it to new hosts through their bites. In Dubai's climate, where fleas are active throughout the year, exposure risk is continuous for cats without flea prevention.",
          "Cat bites and fighting can also transmit the organism, as haemotropic mycoplasmas are found in the saliva of infected cats. This is particularly relevant for outdoor cats in areas with high densities of feral and community cats. Blood transfusions from infected donor cats are another potential route, which is why blood screening is important in veterinary transfusion medicine.",
          "In-utero transmission from infected queens to kittens is suspected but not definitively established. Some studies have also implicated ticks as a potential secondary vector.",
        ],
      },
      {
        heading: 'Clinical Signs',
        paragraphs: [
          "The cardinal sign of Mycoplasma haemofelis infection is pale or white gums, indicating anaemia. Other signs include lethargy, weakness, rapid or laboured breathing (as the body tries to compensate for reduced oxygen-carrying capacity), inappetence, and weight loss. Affected cats may feel cold, particularly in their extremities, due to reduced circulation.",
          "Acute haemofelis can progress to life-threatening levels of anaemia within days. In the acute phase, the packed cell volume (PCV, a measure of red blood cell mass) can drop below 10%, compared to a normal range of 25 to 45%. Cats with PCV below 15% often require emergency blood transfusion.",
          "Chronic or subclinical infection with Candidatus M. haemominutum is common in apparently healthy cats. Many cats test positive on PCR without visible illness. These cats may have mildly low PCV on routine blood work, which can be the only finding.",
        ],
      },
      {
        heading: 'Diagnosis',
        paragraphs: [
          "Blood smear examination remains the classic diagnostic test. A thin smear of peripheral blood is examined under a microscope; the organisms appear as small basophilic dots, rings, or short rod-shaped structures on the surface of red blood cells. Parasitaemia can be cyclic, however, meaning the organisms may not always be visible on smear even in infected cats.",
          "PCR (polymerase chain reaction) testing is significantly more sensitive than blood smear and can detect low levels of infection and identify which species is present. It is the recommended diagnostic approach when haemotropic mycoplasma is suspected.",
          "Complete blood count (CBC) typically shows a regenerative anaemia (with increased reticulocytes as the bone marrow responds) though a non-regenerative pattern occurs in some cases, particularly with chronic infection. A Coombs test (direct antiglobulin test) is often positive, confirming an immune-mediated component to the red blood cell destruction.",
        ],
      },
      {
        heading: 'Treatment',
        paragraphs: [
          "Doxycycline at 10 mg/kg/day orally for 28 to 42 days is the traditional first-line antibiotic. It reduces parasitaemia and resolves clinical signs in most cats but does not fully eliminate the organism; cats may remain subclinical carriers after treatment.",
          "Pradofloxacin (a veterinary fluoroquinolone) has demonstrated high efficacy against Mycoplasma haemofelis in clinical studies and is increasingly preferred as a first-line treatment, particularly in cats that cannot tolerate doxycycline.",
          "In cats with evidence of significant immune-mediated haemolysis (a positive Coombs test and rapidly falling PCV), immunosuppressive doses of prednisolone are added to reduce immune-mediated red blood cell destruction. Cats with PCV below 12 to 15% are candidates for blood transfusion to stabilise them while antibiotic therapy takes effect.",
          "Concurrent flea prevention must be implemented as part of treatment to break the transmission cycle and prevent reinfection.",
        ],
      },
      {
        heading: 'Flea Control: The Central Prevention Strategy',
        paragraphs: [
          "Year-round flea prevention is the most important step in preventing Mycoplasma haemofelis in Dubai's climate. Monthly topical treatments (such as selamectin or fipronil) or oral isoxazoline products (such as fluralaner) are highly effective when administered consistently.",
          "All cats in a household should be treated, not just the affected cat. Flea prevention in multi-cat environments requires treating all animals and addressing the environment (washing bedding, vacuuming, treating soft furnishings). Given year-round flea risk in Dubai, there is no seasonal break during which prevention can lapse.",
        ],
      },
      {
        heading: 'Dubai: Why This Matters Here',
        paragraphs: [
          "Community and rescue cats in Dubai represent a significant reservoir for haemotropic mycoplasmas. Studies from similar warm climates have documented seroprevalence rates of 15 to 30% in cat populations. Cats that have been living outdoors, are FIV or FeLV positive, or have had frequent contact with feral populations are at greatest risk.",
          "Many cats adopted from shelters or directly from the street in Dubai come with incomplete medical histories. If a newly adopted cat shows any signs of lethargy or pale gums, a blood test including CBC, blood smear, and PCR should be considered as an early priority.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can cats die from Mycoplasma haemofelis?",
        a: "Yes. Severe infection can cause life-threatening anaemia within days, particularly in immunocompromised cats, FIV or FeLV-positive cats, and young kittens. Pale gums and sudden weakness are emergency signs requiring immediate veterinary assessment.",
      },
      {
        q: "Can I catch Mycoplasma haemofelis from my cat?",
        a: "No. Mycoplasma haemofelis is cat-specific and is not known to infect humans. It is not a zoonotic disease.",
      },
      {
        q: "How is feline Mycoplasma diagnosed in Dubai?",
        a: "A blood smear can reveal the organism on red blood cells, but PCR testing is more sensitive. A full blood count showing anaemia is usually the first indicator that prompts further investigation.",
      },
      {
        q: "Does doxycycline cure Mycoplasma in cats?",
        a: "Doxycycline reduces parasitaemia and resolves clinical signs in most cats but does not fully eliminate the organism. Cats can remain subclinical carriers after a full course of treatment.",
      },
      {
        q: "How can I prevent Mycoplasma haemofelis in my cat?",
        a: "Year-round flea prevention is the most important step, as fleas are the primary transmission vector. Keeping cats indoors reduces exposure to infected cats and their fleas. Treat all pets in the household.",
      },
    ],
    references: [
      "Tasker S. Haemotropic mycoplasmas: what's their real significance in cats? Journal of Feline Medicine and Surgery. 2010;12(5):369-381.",
      "Sykes JE, et al. Feline hemotropic mycoplasmas. Veterinary Clinics of North America: Small Animal Practice. 2010;40(6):1157-1170.",
      "Roura X, et al. Prevalence of hemotropic mycoplasmas in healthy cats and cats with anaemia in Spain. Journal of Feline Medicine and Surgery. 2010;12(4):318-322.",
      "Beugnet F, Marie JL. Emerging arthropod-borne diseases of companion animals in Europe. Veterinary Parasitology. 2009;163(4):298-305.",
      "Tasker S, et al. Effect of chronic FIV infection, and efficacy of marbofloxacin treatment, on Mycoplasma haemofelis infection. Veterinary Microbiology. 2006;117(2-4):169-179.",
    ],
  },
  {
    slug: 'when-to-vaccinate-cat-dubai',
    title: 'Vaccinations for Cats and Dogs in Dubai: The Complete Guide',
    date: '2025-08-15',
    readTime: '6 min read',
    excerpt: "Rabies is required by UAE law, but your cat and dog need more than that. Here's the complete vaccination guide for pet owners in Dubai — what vaccines are used, when to start, and what's different about the UAE.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A puppy being examined at a veterinary clinic',
      credit: 'Unsplash',
    },
    metaTitle: "Cat & Dog Vaccinations Dubai: Schedule & Requirements | Mike's Vet",
    metaDescription: "Complete guide to cat and dog vaccinations in Dubai. Learn which vaccines are required by UAE law, the PCH schedule for cats, DHPP for dogs, costs, and kitten/puppy timelines. From Mike's Vet.",
    sections: [
      {
        heading: 'Why Vaccinations Matter More in Dubai',
        paragraphs: [
          "Dubai's warm climate, year-round humidity, and large population of rescue and community animals create conditions where infectious diseases spread more easily than in cooler climates. Many cats and dogs in Dubai are adopted from rescue organisations with incomplete histories — making it all the more important to start a proper vaccine programme from day one.",
          "Under UAE law, rabies vaccination is compulsory for all cats and dogs. Beyond that, core vaccines protect your pet from diseases that are genuinely common in this region and can be fatal without protection.",
        ],
      },
      {
        heading: 'Core Vaccines for Cats in Dubai',
        paragraphs: [
          "For cats in the UAE, the core vaccine is the PCH — which protects against three of the most serious infectious diseases in cats:",
          "Panleukopenia (feline distemper) — a highly contagious and often fatal viral disease that attacks the immune system and gut.",
          "Calicivirus — causes upper respiratory infections, mouth ulcers, and can lead to serious complications in kittens.",
          "Herpesvirus (viral rhinotracheitis) — the most common cause of cat 'flu in Dubai, spreading rapidly between cats and causing chronic lifelong flare-ups once infected.",
          "Rabies — required by UAE law for all cats. The certificate is essential for boarding, registration with Dubai Municipality, and any international travel.",
          "FeLV (Feline Leukaemia Virus) is also strongly recommended for cats that go outdoors or live with other cats. It is transmitted through close contact and can be fatal.",
        ],
      },
      {
        heading: 'Kitten Vaccination Schedule (UAE)',
        paragraphs: [
          "For kittens, we recommend the following schedule:",
          "6–8 weeks: First PCH vaccination",
          "10–12 weeks: Second PCH + first rabies vaccination",
          "14–16 weeks: Third PCH booster + FeLV if indicated",
          "12 months: Annual PCH and rabies boosters",
          "If you have adopted an adult cat with an unknown vaccine history, we recommend starting a fresh primary course. A blood titre test can sometimes be used to check existing immunity levels.",
        ],
      },
      {
        heading: 'Core Vaccines for Dogs in Dubai',
        paragraphs: [
          "For dogs, the core vaccine is the DHPP — a combination vaccine protecting against four serious diseases:",
          "Distemper — a severe viral disease affecting the respiratory, gastrointestinal, and nervous systems.",
          "Hepatitis (Adenovirus) — causes liver disease and can be fatal in unvaccinated dogs.",
          "Parvovirus — one of the most dangerous diseases for dogs in Dubai, particularly for puppies. Parvo spreads through contact with infected faeces and can survive in the environment for months.",
          "Parainfluenza — a key contributor to kennel cough, which is common in Dubai due to the density of dogs in boarding and grooming facilities.",
          "Rabies — required by UAE law for all dogs. Without a current rabies certificate your dog cannot be registered with Dubai Municipality, boarded, or exported.",
          "Bordetella (kennel cough) is also strongly recommended for dogs that visit parks, groomers, or boarding kennels.",
        ],
      },
      {
        heading: 'Puppy Vaccination Schedule (UAE)',
        paragraphs: [
          "For puppies, we recommend the following schedule:",
          "6–8 weeks: First DHPP vaccination",
          "10–12 weeks: Second DHPP + first rabies vaccination",
          "14–16 weeks: Third DHPP booster + Bordetella if indicated",
          "12 months: Annual boosters + rabies renewal",
          "Puppies are not fully protected until 1–2 weeks after their final primary vaccination. We advise keeping puppies away from dog parks and unknown dogs until this point.",
        ],
      },
      {
        heading: 'How Much Do Vaccinations Cost in Dubai?',
        paragraphs: [
          "Vaccine costs in Dubai vary between clinics. At Mike's Vet, every vaccine appointment includes a thorough wellness examination — we use it as an opportunity to check your pet's weight, teeth, heart, and overall condition, not just administer an injection.",
          "Contact us for current pricing or book online. We'll give you a clear breakdown before your appointment.",
        ],
      },
    ],
    faqs: [
      { q: 'What is the PCH vaccine for cats in Dubai?', a: "PCH stands for Panleukopenia, Calicivirus, and Herpesvirus — the three core infectious diseases we vaccinate cats against in the UAE. It is the standard feline core vaccine used at Mike's Vet and across veterinary clinics in Dubai." },
      { q: 'Is it compulsory to vaccinate cats and dogs in Dubai?', a: 'Rabies vaccination is required by UAE law for all cats and dogs. It is also required for boarding, international travel, and registration with Dubai Municipality. Core vaccines (PCH for cats, DHPP for dogs) are strongly recommended.' },
      { q: 'At what age should I start vaccinating my kitten or puppy?', a: 'Both kittens and puppies can start their vaccine programme from 6–8 weeks of age. The full primary course takes 8–10 weeks to complete. Starting early means your pet is protected sooner.' },
      { q: 'Can I get my cat or dog vaccinated at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet on Hessa Street offers full vaccination programmes for cats, kittens, dogs, and puppies. We are open 7 days a week, 9am–9:30pm. Book online or call +971 4 283 7744." },
    ],
  },
  {
    slug: 'cat-spaying-dubai-guide',
    title: 'Cat Spaying in Dubai: What to Expect and How Much It Costs',
    date: '2025-08-28',
    readTime: '6 min read',
    excerpt: "Spaying your cat is one of the most important health decisions you'll make. This guide covers everything Dubai cat owners need to know — timing, the procedure, recovery, and what to look for in a vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A cat resting after surgery at a veterinary clinic',
      credit: 'Unsplash',
    },
    metaTitle: "Cat Spaying Dubai: Cost, Age & Recovery | Mike's Vet",
    metaDescription: "Thinking of spaying your cat in Dubai? Learn the best age, what the procedure involves, recovery timeline, and how much cat spaying costs in Dubai. From Mike's Vet on Hessa Street.",
    sections: [
      {
        heading: 'Why Spaying Your Cat Is So Important in Dubai',
        paragraphs: [
          "Dubai has a significant feral cat population, and many rescue organisations are stretched caring for kittens born to unspayed cats. Spaying your female cat is one of the most impactful things you can do — for her health and for the wider community.",
          "Beyond population control, spaying has direct health benefits for your cat: it eliminates the risk of uterine infections (pyometra), reduces the risk of mammary tumours significantly, and prevents the stress and discomfort of repeated heat cycles.",
        ],
      },
      {
        heading: 'When Should You Spay Your Cat in Dubai?',
        paragraphs: [
          "The standard recommendation is to spay cats at around 4–6 months of age, before their first heat cycle. Cats can come into heat as early as 4 months, so we advise booking your spay appointment before this point.",
          "Adult cats can also be safely spayed at any age, including older cats. There is no 'too late' when it comes to spaying — the benefits to health remain significant throughout a cat's life.",
          "We do not recommend spaying during an active heat cycle or pregnancy unless there are medical reasons. Your vet will advise on timing based on your cat's individual status.",
        ],
      },
      {
        heading: 'What Happens During the Spay Procedure?',
        paragraphs: [
          "Spaying (ovariohysterectomy) involves removing the ovaries and uterus under general anaesthetic. At Mike's Vet, all surgical patients receive a pre-anaesthetic health check and bloodwork to ensure they are fit for surgery.",
          "The procedure itself takes around 20–40 minutes. We use modern anaesthetic protocols, monitor your cat's vital signs throughout, and provide pain relief before, during, and after surgery. You will typically be able to collect your cat the same day.",
          "Post-operative care includes pain medication to take home, an e-collar to prevent licking the incision, and a recheck appointment after 7–10 days. We are available by phone and WhatsApp if you have any concerns during recovery.",
        ],
      },
      {
        heading: 'How Much Does Cat Spaying Cost in Dubai?',
        paragraphs: [
          "Spay costs in Dubai vary depending on the clinic, the cat's size, and whether additional services like pre-surgical bloodwork are included. At Mike's Vet, we include a thorough pre-operative assessment and all standard monitoring — we don't cut corners to lower a headline price.",
          "Contact us for a current quote. We'll explain exactly what's included so you can make an informed decision for your cat.",
        ],
      },
    ],
    faqs: [
      { q: 'At what age should I spay my cat in Dubai?', a: "We recommend spaying between 4–6 months, before the first heat cycle. Adult cats can be safely spayed at any age. Contact Mike's Vet to book a pre-surgical consultation." },
      { q: 'How long does recovery take after cat spaying?', a: 'Most cats are back to normal activity within 7–10 days. The incision site should be kept clean and dry, and your cat should wear an e-collar to prevent licking. A recheck at 10 days is standard.' },
      { q: 'Is cat spaying safe in Dubai?', a: "Yes. Spaying is one of the most commonly performed veterinary procedures. At Mike's Vet, we follow strict anaesthetic protocols and provide full monitoring throughout the procedure, making it as safe as possible." },
      { q: 'Can I get my cat spayed at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet on Hessa Street offers spay surgery for cats. Book a pre-surgical consultation online or call us on +971 4 283 7744. We are open 7 days, 9am–9:30pm." },
    ],
  },
  {
    slug: 'emergency-vet-dubai-what-to-do',
    title: 'Emergency Vet Dubai: What to Do When Your Pet Has an Accident',
    date: '2025-09-02',
    readTime: '5 min read',
    excerpt: "When a pet emergency strikes, every second counts. This guide tells you exactly what to do — and what not to do — if your cat or dog has an accident or sudden illness in Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'Two dogs outdoors in Dubai',
      credit: 'Unsplash',
    },
    metaTitle: "Emergency Vet Dubai: What to Do in a Pet Emergency | Mike's Vet",
    metaDescription: "Pet emergency in Dubai? Learn what to do if your cat or dog is injured or suddenly ill. Signs that need urgent vet care, how to safely transport your pet, and where to go. Mike's Vet, Hessa Street.",
    sections: [
      {
        heading: 'Signs Your Pet Needs Emergency Veterinary Care',
        paragraphs: [
          "Not every health concern requires an emergency visit, but the following signs should prompt you to call a vet immediately:",
          "• Difficulty breathing, gasping, or choking",
          "• Collapse or inability to stand",
          "• Seizures or uncontrolled trembling",
          "• Suspected poisoning or ingestion of a toxic substance",
          "• Severe bleeding that doesn't stop with pressure",
          "• Suspected broken bones or trauma after an accident",
          "• Swollen, hard, or painful abdomen",
          "• Inability to urinate (especially in male cats — this is a life-threatening emergency)",
          "• Prolonged vomiting or diarrhoea with blood",
          "If your pet is showing any of these signs, call a vet immediately. At Mike's Vet, you can reach us on +971 4 283 7744 or WhatsApp us.",
        ],
      },
      {
        heading: 'What to Do While Getting Your Pet to the Vet',
        paragraphs: [
          "Stay calm — your pet can sense your anxiety, and a calm owner means a calmer patient. Here's what to do while you prepare to leave for the clinic:",
          "**For injured pets:** Handle them carefully and minimise movement. A painful animal may bite even if they have never done so before — use a towel to wrap and support them. Do not attempt to splint fractures yourself.",
          "**For poisoning:** Do not induce vomiting unless specifically instructed to by a vet. Call us and tell us exactly what your pet ingested, including the product name and how much they may have eaten.",
          "**For cats:** Transport in a secure carrier. If injured, line the carrier with a soft towel and keep it flat in the car.",
          "**For dogs:** Keep them as still as possible. If they're too large to carry safely, call us — we can advise on how to move them safely.",
        ],
      },
      {
        heading: 'Common Pet Emergencies in Dubai',
        paragraphs: [
          "Dubai's environment presents some specific emergency risks for pets:",
          "**Heatstroke** — Temperatures in Dubai can exceed 45°C. Never leave a pet in a car, and watch for heavy panting, drooling, and collapse in the heat. Move your pet to a cool area and apply cool (not cold) water before driving to the vet.",
          "**Toxin ingestion** — Common household toxins include xylitol (in sugar-free products), grapes and raisins, certain plants, cleaning products, and human medications.",
          "**Road accidents** — With Dubai's high traffic density, road accidents are a significant risk for pets that escape outdoors.",
          "**Urinary blockage in male cats** — A blocked bladder is one of the most common life-threatening emergencies in cats. Signs include straining to urinate, crying out, and a hunched posture. This requires immediate treatment.",
        ],
      },
    ],
    faqs: [
      { q: 'Is there a 24-hour emergency vet in Dubai?', a: "Mike's Vet on Hessa Street is open until 9:30 PM every day. For late-night emergencies outside our hours, we recommend calling your nearest 24-hour veterinary facility. During our hours, call +971 4 283 7744." },
      { q: 'What should I do if my cat or dog is hit by a car in Dubai?', a: "Keep calm and handle carefully — injured animals may bite. Call Mike's Vet on +971 4 283 7744 immediately. Support the animal's body, keep them warm, and drive directly to us on Hessa Street." },
      { q: 'What is the emergency vet number in Dubai?', a: "Mike's Vet emergency number is +971 4 283 7744. You can also WhatsApp us. We are open 7 days, 9am–9:30pm on Hessa Street, Dubai." },
      { q: 'Is heatstroke an emergency for pets in Dubai?', a: "Yes. Heatstroke is a life-threatening emergency. Move your pet to a cool area, apply cool water to their body, and bring them to a vet immediately. Do not use ice-cold water — this can cause shock." },
    ],
  },
  {
    slug: 'pet-microchipping-dubai',
    title: 'Pet Microchipping in Dubai: What You Need to Know',
    date: '2025-09-08',
    readTime: '4 min read',
    excerpt: "Microchipping is required by law for all dogs in Dubai and strongly recommended for cats. Here's everything you need to know about the process, the cost, and how it works.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A yellow Labrador Retriever looking up at the camera',
      credit: 'Unsplash',
    },
    metaTitle: "Pet Microchipping Dubai: Law, Cost & What to Expect | Mike's Vet",
    metaDescription: "Is microchipping required for pets in Dubai? Yes — all dogs must be microchipped by law. Learn how it works, how much it costs, and how to register your pet. From Mike's Vet, Hessa Street.",
    sections: [
      {
        heading: 'Is Microchipping Required for Pets in Dubai?',
        paragraphs: [
          "Under Dubai Municipality regulations, all dogs must be microchipped and registered. While microchipping is not yet legally mandated for cats, it is strongly recommended by veterinarians and required by most reputable adoption programmes and catteries.",
          "If you've recently adopted a dog in Dubai or moved to the UAE with a pet, check whether your animal is already chipped. We can scan your pet at the clinic to confirm.",
        ],
      },
      {
        heading: 'How Does Microchipping Work?',
        paragraphs: [
          "A microchip is a tiny electronic device — about the size of a grain of rice — inserted under the skin between your pet's shoulder blades using a sterile needle. The process takes seconds and causes minimal discomfort, similar to a standard vaccination.",
          "Each microchip has a unique 15-digit ISO number that is registered on a database alongside your contact details. If your pet is ever lost and taken to a vet or shelter, they can be scanned and reunited with you.",
          "The microchip itself is passive — it has no battery and never needs replacing. It only activates when scanned by a compatible reader.",
        ],
      },
      {
        heading: 'Microchipping and International Travel from Dubai',
        paragraphs: [
          "If you plan to travel internationally with your pet, microchipping is a prerequisite for obtaining a Pet Passport or UAE health certificate. Your pet must be chipped before any vaccinations can be officially recorded against the chip number — so it's important to do this early.",
          "Ensure your chip is ISO 15-digit standard (15 digits), as this is internationally recognised. Some older or US-standard chips (9 or 10 digits) may not be readable by overseas scanners.",
        ],
      },
      {
        heading: 'How Much Does Microchipping Cost in Dubai?',
        paragraphs: [
          "Microchipping is one of the most affordable procedures available at a vet clinic. At Mike's Vet, we offer microchipping for cats and dogs at a straightforward price — contact us for current rates. We can often fit microchipping into an existing appointment without the need for a separate visit.",
        ],
      },
    ],
    faqs: [
      { q: 'Is microchipping compulsory for dogs in Dubai?', a: 'Yes. Dubai Municipality requires all dogs to be microchipped and registered. Failure to do so can result in fines. Cats are not currently legally required to be chipped but it is strongly recommended.' },
      { q: 'Does microchipping hurt my cat or dog?', a: 'The procedure involves a quick injection under the skin — most pets barely react. It is no more uncomfortable than a standard vaccination and takes only a few seconds.' },
      { q: 'Can I get my pet microchipped at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet on Hessa Street offers microchipping for cats and dogs. We use ISO-standard chips and can assist with registration. Book online or call +971 4 283 7744." },
      { q: 'Does my pet need a microchip to travel from Dubai?', a: 'Yes. An ISO-standard microchip is required for any international pet travel from the UAE, and must be in place before vaccinations are officially recorded. Arrange this early if you plan to travel with your pet.' },
    ],
  },
  {
    slug: 'dental-care-cats-dogs-dubai',
    title: 'Dental Care for Cats and Dogs in Dubai: Why It Matters',
    date: '2025-09-09',
    readTime: '5 min read',
    excerpt: "Dental disease is the most common health problem in adult cats and dogs — and most owners don't realise there's a problem until it's advanced. Here's what Dubai pet owners need to know.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A golden retriever with a happy expression',
      credit: 'Unsplash',
    },
    metaTitle: "Pet Dental Care Dubai: Cat & Dog Cleaning Guide | Mike's Vet",
    metaDescription: "Does your cat or dog need a dental? Learn the signs of dental disease in pets, how professional cleaning works, and how to maintain your pet's teeth at home. From Mike's Vet Dubai.",
    sections: [
      {
        heading: 'Why Dental Health Is Critical for Pets',
        paragraphs: [
          "By age 3, over 70% of cats and dogs show signs of periodontal disease. Unlike in humans, pets cannot tell us when their teeth hurt — many animals continue eating normally despite significant dental pain, which means problems are often missed until they're severe.",
          "Untreated dental disease doesn't just cause mouth pain. Bacteria from infected gums can enter the bloodstream and damage the kidneys, heart, and liver over time. Good dental care genuinely extends the quality and length of your pet's life.",
        ],
      },
      {
        heading: 'Signs of Dental Problems in Cats and Dogs',
        paragraphs: [
          "Watch for these signs that your pet may have a dental problem:",
          "• Bad breath (more than usual 'pet breath')",
          "• Yellow or brown tartar build-up on teeth",
          "• Red, swollen, or bleeding gums",
          "• Pawing at the mouth or reluctance to be touched around the face",
          "• Dropping food, chewing on one side, or sudden food aversion",
          "• Excessive drooling",
          "If you notice any of these signs, book a dental check with your vet. Many dental problems are manageable when caught early.",
        ],
      },
      {
        heading: 'What Does a Professional Dental Cleaning Involve?',
        paragraphs: [
          "Professional dental cleaning (scale and polish) for pets is performed under general anaesthetic. This is necessary because a full oral examination — probing for pockets, checking roots, taking dental X-rays — cannot be done safely or thoroughly in a conscious animal.",
          "At Mike's Vet, a dental procedure includes a pre-anaesthetic health assessment and blood panel, ultrasonic scaling to remove tartar above and below the gumline, polishing of all tooth surfaces, a full oral examination including dental X-rays where indicated, and extraction of any teeth that are beyond saving.",
          "Your pet goes home the same day, usually bright and comfortable. Most owners are amazed at the transformation — whiter teeth, fresher breath, and a happier animal.",
        ],
      },
      {
        heading: 'Keeping Your Pet\'s Teeth Healthy at Home',
        paragraphs: [
          "The gold standard for home dental care is daily tooth brushing using a pet-specific toothpaste (never human toothpaste, which is toxic to pets). Even 30 seconds of brushing per day dramatically reduces tartar build-up.",
          "If brushing isn't possible, dental chews, water additives, and prescription dental diets can help maintain dental health between professional cleans. Ask our team which products are appropriate for your pet.",
        ],
      },
    ],
    faqs: [
      { q: 'How often should I get my dog or cat\'s teeth cleaned in Dubai?', a: "Most pets benefit from an annual professional dental check and cleaning as needed. Small breeds and cats are often more prone to rapid tartar build-up and may need more frequent cleanings." },
      { q: 'Is dental cleaning safe for pets?', a: "Yes. Modern anaesthetic protocols make dental procedures very safe. At Mike's Vet, we run pre-anaesthetic blood tests and monitor your pet throughout. The risks of untreated dental disease far outweigh the risks of a routine cleaning." },
      { q: 'Does my pet need to be anaesthetised for a dental cleaning?', a: "Yes. Safe and thorough dental cleaning — including below the gumline where disease develops — requires general anaesthetic. So-called 'anaesthetic-free dentals' only clean visible surfaces and are not endorsed by veterinary dental associations." },
      { q: 'Can I get my pet\'s teeth cleaned at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet offers professional dental cleaning for cats and dogs on Hessa Street, Dubai. Book a dental assessment online or call +971 4 283 7744." },
    ],
  },
  {
    slug: 'dog-limping-back-leg-cruciate-dubai',
    title: 'My Dog Is Limping on Their Back Leg: Could It Be a Cruciate Ligament Tear?',
    date: '2026-09-15',
    readTime: '7 min read',
    excerpt: "Hind leg lameness is one of the most common reasons dogs come to us for orthopaedic assessment. The cranial cruciate ligament is involved in the majority of cases — and the sooner it is diagnosed, the better the outcome.",
    metaTitle: "Dog Limping on Back Leg: CCL Signs & Treatment Dubai | Mike's Vet",
    metaDescription: "Is your dog limping on their back leg in Dubai? It could be a cruciate ligament (CCL) tear. Learn the signs, the simple home sit test, how it is diagnosed, and what treatment involves. From Mike's Vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1562317305-58a17fe2c09e?w=1200&q=80&auto=format&fit=crop',
      alt: 'A chocolate Labrador retriever — one of the breeds most commonly affected by cruciate ligament tears',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'The Most Common Cause of Hind Leg Lameness in Dogs',
        paragraphs: [
          "If your dog has suddenly started limping on one of their back legs, the most likely orthopaedic cause is a cranial cruciate ligament (CCL) injury. The CCL is the equivalent of the anterior cruciate ligament (ACL) in humans, and rupture of this ligament is the single most common orthopaedic condition seen in dogs worldwide.",
          "Unlike in humans, where ACL tears are almost always caused by a single traumatic event, CCL rupture in dogs is usually a degenerative process. The ligament weakens gradually over months or years before it eventually gives way, often during something as ordinary as jumping off the sofa or playing in the garden. This is why some owners are surprised when their dog starts limping with no obvious accident.",
          "Certain breeds are significantly overrepresented: Labrador Retrievers, Rottweilers, Golden Retrievers, Staffordshire Bull Terriers, and West Highland White Terriers. Overweight dogs are also at substantially higher risk. A 2008 study published in the Journal of the American Veterinary Medical Association found that overweight body condition was one of the strongest predictors of CCL disease.",
        ],
      },
      {
        heading: 'What the Cranial Cruciate Ligament Actually Does',
        paragraphs: [
          "The cranial cruciate ligament sits inside the stifle joint (the dog's knee) and has two main functions: it prevents the tibia from sliding forward relative to the femur, and it stops the stifle from overextending or rotating excessively.",
          "When it ruptures, even partially, the joint becomes unstable. The tibia shifts forward under the femur with each step, causing pain, progressive joint damage, and inflammation. Over time, this instability leads to osteoarthritis within the stifle joint. The sooner the instability is corrected, the less arthritis develops.",
        ],
      },
      {
        heading: 'Signs Your Dog May Have a CCL Injury',
        paragraphs: [
          "The following signs suggest your dog may have a CCL injury and should be examined by a vet:",
          "• Sudden lameness in a hind leg, especially after exercise",
          "• Toe-touching lameness that persists beyond 48 hours",
          "• Intermittent lameness over several weeks that worsens with activity",
          "• Reluctance to exercise, jump, or climb stairs",
          "• Swelling on the inside of the stifle joint",
          "• Muscle loss in the affected hind limb over time",
          "• A clicking sound from the knee when the leg is moved",
          "Some dogs with a partial CCL tear show mild, intermittent lameness for weeks before a full rupture occurs. If your dog is showing any of these signs, it is worth having them assessed before the situation worsens.",
        ],
      },
      {
        heading: 'The Sit Test: A Simple Check You Can Do at Home',
        paragraphs: [
          "One useful indicator is called the sit test. Ask your dog to sit and observe the position of their legs. A healthy dog sits with both hind legs tucked symmetrically underneath their body. A dog with a CCL injury will often sit with the affected leg stuck out to the side, avoiding bending the knee fully because of pain or instability.",
          "This is a useful observation, but it is not a definitive test. Many conditions can cause a dog to sit awkwardly, including hip problems. A proper clinical examination is always needed to confirm the cause.",
        ],
      },
      {
        heading: 'How Vets Diagnose a CCL Injury',
        paragraphs: [
          "At the clinic, your vet will perform a physical examination of the stifle joint. The most important diagnostic manoeuvre is the cranial drawer test and the tibial compression test, both of which detect abnormal forward movement of the tibia relative to the femur. In an awake, tense dog this can sometimes be difficult to feel, and sedation may be recommended for a more reliable assessment.",
          "X-rays of the stifle are an important part of the workup even though the ligament itself is not visible on X-ray. Radiographs show the degree of joint effusion (fluid), any bone remodelling from chronic instability, the tibial plateau angle (relevant for surgical planning), and whether there is any concurrent bone pathology.",
        ],
      },
      {
        heading: 'Treatment Options: Surgery vs Conservative Management',
        paragraphs: [
          "For dogs under 10-15 kg with a partial tear, strict rest combined with physiotherapy and anti-inflammatory medication can sometimes allow sufficient scar tissue to form for the dog to regain acceptable function. This is not a cure — the joint remains arthritic — but in small dogs the outcome can be acceptable without surgery.",
          "For medium and large dogs, conservative management rarely provides lasting relief. The joint instability continues, arthritis progresses, and many dogs go on to rupture the ligament fully even if they initially appear to improve with rest. Surgery is strongly recommended for most dogs over 15 kg.",
          "There is also a significant risk of injuring the other leg. Studies have found that up to 60% of dogs with a unilateral CCL rupture will rupture the contralateral ligament within two years. This makes prompt treatment of the first leg particularly important.",
        ],
      },
      {
        heading: 'What to Do If You Suspect a CCL Injury',
        paragraphs: [
          "If your dog has been limping for more than 48 hours, or if the lameness is severe, book a veterinary assessment rather than waiting to see if it improves on its own. Giving anti-inflammatories without a diagnosis can mask the pain and lead to a dog using an unstable joint, which accelerates joint damage.",
          "At Mike's Vet, our surgical team assesses orthopaedic cases including CCL injuries regularly. We will perform a full clinical examination, take X-rays, and give you a clear picture of what is happening and what your options are. No referral is needed.",
        ],
      },
    ],
    faqs: [
      { q: 'Can a dog recover from a cruciate ligament tear without surgery?', a: "Small dogs (under 10-15 kg) with a partial tear sometimes recover with strict rest and physiotherapy, though the joint remains arthritic. For medium and large dogs, conservative management rarely gives lasting results and surgery is strongly recommended to restore joint stability and limit arthritis." },
      { q: 'How do I know if my dog has a cruciate ligament injury?', a: "Common signs include sudden or intermittent hind leg lameness, swelling inside the knee, and the dog sitting with one leg stuck out to the side. A vet examination including the cranial drawer test and X-rays is needed to confirm the diagnosis." },
      { q: 'What happens if I leave a cruciate ligament tear untreated in my dog?', a: "Untreated CCL rupture leads to progressive osteoarthritis within the stifle joint, chronic pain, and muscle loss. Most medium-large dogs will not regain comfortable function without surgery. There is also a significant risk of rupturing the ligament in the opposite leg over time." },
      { q: 'Can I get my dog\'s cruciate ligament assessed at Mike\'s Vet in Dubai?', a: "Yes. Our surgical team at Mike's Vet on Hessa Street assesses and treats CCL injuries including TPLO surgery. No referral is needed. Call or WhatsApp +971 4 283 7744 to arrange an appointment." },
    ],
    references: [
      "Whitehair JG, Vasseur PB, Willits NH. Epidemiology of cranial cruciate ligament rupture in dogs. Journal of the American Veterinary Medical Association. 1993;203(7):1016-1019.",
      "Witsberger TH, Villamil JA, Schultz LG, Hahn AW, Cook JL. Prevalence of and risk factors for hip dysplasia and cranial cruciate ligament deficiency in dogs. Journal of the American Veterinary Medical Association. 2008;232(12):1818-1824.",
      "Doverspike M, Vasseur PB, Harb MF, Walls CM. Contralateral cranial cruciate ligament rupture: incidence in 114 dogs. Journal of the American Animal Hospital Association. 1993;29(2):167-170.",
      "Wucherer KL, Conzemius MG, Evans R, Wilke VL. Short-term and long-term outcomes for overweight dogs with cranial cruciate ligament rupture treated surgically or nonsurgically. Journal of the American Veterinary Medical Association. 2013;242(10):1364-1372.",
      "Muir P (ed). Advances in the Canine Cranial Cruciate Ligament. 2nd ed. Wiley-Blackwell; 2018.",
    ],
  },
  {
    slug: 'tplo-surgery-dogs-dubai',
    title: 'TPLO Surgery for Dogs in Dubai: How It Works, What to Expect, and Recovery',
    date: '2026-09-17',
    readTime: '8 min read',
    excerpt: "TPLO is the gold-standard surgical treatment for cruciate ligament rupture in dogs. Here is a thorough, honest guide to what the surgery involves, how long recovery takes, and what outcomes to expect.",
    metaTitle: "TPLO Surgery for Dogs Dubai: Recovery & Outcomes | Mike's Vet",
    metaDescription: "Considering TPLO surgery for your dog's cruciate ligament injury in Dubai? This guide explains how TPLO works, the recovery timeline week by week, risks, and long-term outcomes. From Mike's Vet, Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A veterinarian carefully examining a dog on a consultation table',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'What TPLO Stands For and Why It Was Developed',
        paragraphs: [
          "TPLO stands for Tibial Plateau Levelling Osteotomy. It was developed in the early 1990s by American veterinary surgeon Barclay Slocum as an alternative to earlier techniques that attempted to replace or replicate the cruciate ligament directly.",
          "The core insight behind TPLO is biomechanical. In a dog's stifle (knee) joint, the top surface of the tibia (the tibial plateau) sits at a forward-slanting angle, typically between 18 and 30 degrees relative to the long axis of the bone. With each step, this slope causes the tibia to slide forward under the femur, a force that the cranial cruciate ligament normally resists. When the CCL ruptures, this forward thrust continues unchecked with every stride, causing pain and progressive joint damage.",
          "Rather than replacing the ligament, TPLO changes the geometry of the joint so the forward thrust no longer occurs. The result is a mechanically stable stifle that does not depend on an intact CCL to function properly.",
        ],
      },
      {
        heading: 'How the Surgery Works',
        paragraphs: [
          "Under general anaesthesia, the surgeon makes a curved (semicircular) cut through the top of the tibia. This cut, the osteotomy, allows the tibial plateau to be rotated to reduce its angle, typically to around 5 degrees. Once in the correct position, the rotated segment is stabilised with a bone plate and screws.",
          "Before closing, the surgeon will also inspect the meniscus. The menisci are two cartilage pads inside the stifle that act as shock absorbers. CCL rupture frequently causes concurrent meniscal tears, particularly of the medial (inner) meniscus. A torn meniscus is painful and must be addressed at the time of surgery. Studies suggest meniscal damage is present in 30-60% of dogs with CCL rupture, depending on how chronic the injury is.",
          "The entire procedure typically takes 60-90 minutes. Most patients go home the same day, though some stay overnight for monitoring depending on the individual case.",
        ],
      },
      {
        heading: 'Is TPLO the Right Surgery for My Dog?',
        paragraphs: [
          "TPLO is currently considered the gold-standard repair for medium and large-breed dogs with CCL rupture. Studies consistently show return-to-normal or near-normal function in over 90% of cases.",
          "For very small dogs (under 10-15 kg), other techniques such as lateral suture stabilisation may be appropriate and are less invasive. Your surgeon will assess your dog's size, tibial plateau angle, degree of arthritis, and overall health to recommend the right approach.",
          "A thorough pre-surgical assessment including orthopaedic examination, X-rays, and blood work is standard before any decision is made.",
        ],
      },
      {
        heading: 'What Happens on the Day of Surgery',
        paragraphs: [
          "Your dog will need to be fasted from midnight the night before surgery (water is fine until morning). On arrival, a pre-operative examination and blood panel are performed to confirm fitness for anaesthesia.",
          "Pain management is multimodal, meaning we use a combination of local nerve blocks, intravenous analgesics, and post-operative oral pain relief rather than relying on a single drug. This approach produces significantly better pain control and a smoother recovery.",
          "After surgery, your dog recovers in our ward until they are awake, stable, and comfortable. You will receive detailed written discharge instructions covering medication, activity restriction, wound care, and the physiotherapy exercises to start at home.",
        ],
      },
      {
        heading: 'Recovery: What to Expect Week by Week',
        paragraphs: [
          "TPLO recovery is structured and requires commitment from the owner. The bone osteotomy takes approximately 8-12 weeks to heal fully, and the soft tissues around the joint need time to remodel.",
          "Weeks 1-2: strict rest. Short, leash-only toilet trips. No jumping, stairs, running, or off-lead activity. Swelling and bruising around the leg are normal.",
          "Weeks 2-6: gradual, controlled leash walking. Duration increases slowly. Physiotherapy exercises begin: gentle passive range-of-motion movements, icing, and massage. A follow-up X-ray at 6-8 weeks confirms bone healing.",
          "Weeks 6-12: increasing leash walks. Uphill walking is introduced to build muscle. Swimming is excellent at this stage if available.",
          "Weeks 12-16: return to off-lead activity begins gradually. Most dogs are fully functional by 4 months, though muscle strength continues to develop for 6 months or more.",
          "It is normal for dogs to seem better than they actually are at 4-6 weeks, when the pain has reduced but healing is not complete. This is the period when owner discipline matters most.",
        ],
      },
      {
        heading: 'Risks and Complication Rates',
        paragraphs: [
          "TPLO has a strong safety record. The largest published series, a 2010 study of 1000 consecutive TPLO cases by Fitzpatrick and Solano, reported an overall complication rate of approximately 20%, though most were minor (infection, implant irritation, seroma). Major complications requiring re-operation were present in around 4% of cases.",
          "The most clinically significant risk is a late meniscal tear in the operated joint, where an intact meniscus at the time of surgery subsequently tears during recovery. This occurs in roughly 2-5% of cases and presents as a return of lameness. It is addressed surgically and does not affect the long-term outcome when managed promptly.",
        ],
      },
      {
        heading: 'Long-Term Outcomes',
        paragraphs: [
          "The majority of dogs that undergo TPLO return to full or near-full athletic function. Long-term studies show that most owners rate their dog's post-operative function as excellent or good, with progressive osteoarthritis slowed compared to dogs managed without surgery.",
          "TPLO does not cure arthritis that has already developed — it stops it from progressing rapidly. Dogs with established joint disease before surgery will still have some degree of arthritis in the long term, and weight management, appropriate exercise, and joint supplements can all help manage this.",
          "At Mike's Vet, our surgical team will walk you through what is realistic for your dog specifically, based on their age, weight, breed, and the degree of existing joint changes.",
        ],
      },
    ],
    faqs: [
      { q: 'How long does TPLO surgery take in dogs?', a: "The surgery itself typically takes 60-90 minutes. Most dogs are discharged the same day, though some stay overnight for monitoring. The full recovery period is 12-16 weeks." },
      { q: 'What is the success rate of TPLO surgery in dogs?', a: "Over 90% of dogs return to normal or near-normal function following TPLO. It is widely considered the gold-standard repair for medium and large-breed dogs with cranial cruciate ligament rupture." },
      { q: 'How much does TPLO surgery cost in Dubai?', a: "TPLO surgery costs vary depending on the dog's size, the degree of joint damage, and whether concurrent issues such as a meniscal tear need to be addressed. Contact Mike's Vet on +971 4 283 7744 for a consultation and detailed cost estimate." },
      { q: 'Does Mike\'s Vet perform TPLO surgery in Dubai?', a: "Yes. Our surgical team at Mike's Vet on Hessa Street, Dubai performs TPLO surgery. No specialist referral is required. Call or WhatsApp us on +971 4 283 7744 to arrange an orthopaedic consultation." },
      { q: 'Can my dog walk after TPLO surgery?', a: "Yes, but only on short leash walks for the first 6 weeks. Controlled leash walking is actually encouraged early in recovery to maintain muscle mass and joint mobility. Off-lead activity resumes gradually from around 12 weeks, guided by follow-up X-rays." },
    ],
    references: [
      "Slocum B, Slocum TD. Tibial plateau leveling osteotomy for repair of cranial cruciate ligament rupture in the canine. Veterinary Clinics of North America: Small Animal Practice. 1993;23(4):777-795.",
      "Fitzpatrick N, Solano MA. Predictive variables for complications after TPLO with stifle inspection by arthrotomy in 1000 consecutive dogs. Veterinary Surgery. 2010;39(4):460-474.",
      "Jandi AS, Schulman AJ. Incidence of motion of the concomitant meniscal tear in dogs with cranial cruciate ligament rupture: a retrospective study. Veterinary Surgery. 2007;36(5):437-440.",
      "Conkling AL, Fagin B, Daye RM. Comparison of tibial plateau angle changes after tibial plateau leveling osteotomy fixation with conventional or locking screw technology. Veterinary Surgery. 2010;39(4):475-481.",
      "Muir P (ed). Advances in the Canine Cranial Cruciate Ligament. 2nd ed. Wiley-Blackwell; 2018.",
    ],
  },
  {
    slug: 'orthopaedic-surgery-dogs-cats-dubai',
    title: 'Orthopaedic Surgery for Dogs and Cats in Dubai: When Is It the Right Call?',
    date: '2026-09-19',
    readTime: '7 min read',
    excerpt: "Broken bones, slipping kneecaps, ligament tears, hip dysplasia: orthopaedic problems in pets cover a wide range. Here is a practical guide to the most common conditions, what surgery involves, and how to make the right decision for your pet.",
    metaTitle: "Orthopaedic Surgery for Dogs & Cats Dubai | Mike's Vet",
    metaDescription: "Which orthopaedic conditions in dogs and cats need surgery in Dubai? Fracture repair, luxating patella, TPLO, and hip dysplasia explained. Performed by our surgical team at Mike's Vet, Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A veterinarian performing a careful physical examination of a dog',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'What Orthopaedic Surgery Covers in Pets',
        paragraphs: [
          "Orthopaedic surgery is the branch of veterinary medicine dealing with bones, joints, ligaments, and tendons. In practice, this covers a wide range of conditions: a puppy born with legs that are not developing correctly, an older Labrador whose cruciate ligament has given out, a cat that has been hit by a car and has a fractured pelvis, or a small terrier whose kneecap keeps slipping out of place.",
          "The conditions we see most commonly fall into a few distinct categories: fractures from trauma, ligament injuries (particularly cruciate), developmental joint conditions like hip dysplasia or luxating patella, and bone infections or tumours. Each requires a different surgical approach and a different recovery plan.",
        ],
      },
      {
        heading: 'Fracture Repair: What It Involves and When Surgery Is Needed',
        paragraphs: [
          "Not every fracture requires surgery. Stable, non-displaced fractures, particularly in young animals whose bones heal quickly, can sometimes be managed with splinting or casting alone. However, most fractures in cats and dogs have better outcomes with surgical stabilisation.",
          "The main methods of fracture fixation are: bone plates and screws (the most common for long bones like the femur, tibia, and radius), intramedullary (IM) pins inserted into the centre of the bone, and external skeletal fixation, where pins in the bone are connected to an external frame. The choice depends on the fracture type, location, the patient's size, and the surgeon's assessment of the most stable construct.",
          "After surgical fixation, most fractures heal within 6-12 weeks depending on the bone involved and the patient's age. Young animals heal significantly faster than older ones. Restricted activity, wound monitoring, and keeping the repair site dry are essential during this period.",
        ],
      },
      {
        heading: 'Cruciate Ligament Rupture: The Most Common Orthopaedic Injury',
        paragraphs: [
          "Cranial cruciate ligament (CCL) rupture is the single most common orthopaedic condition in dogs, causing hind leg lameness ranging from a subtle toe-touch to complete non-weight bearing, depending on whether the rupture is partial or complete.",
          "For medium and large-breed dogs, surgery is almost always recommended. The gold-standard technique is the Tibial Plateau Levelling Osteotomy (TPLO), which stabilises the joint by changing its geometry rather than replacing the ligament. Return-to-function rates exceed 90% with TPLO.",
          "CCL injuries in cats are less common and are usually caused by acute trauma rather than degeneration. Surgical options are similar in principle but adapted for smaller anatomy.",
        ],
      },
      {
        heading: 'Luxating Patella: Grades and When Surgery Is the Right Choice',
        paragraphs: [
          "Luxating patella (slipping kneecap) is a common developmental condition in dogs, particularly small breeds. The patella normally sits in a groove at the bottom of the femur. In luxation, it slips out of this groove, either inward (medial, most common) or outward (lateral).",
          "The condition is graded 1-4 based on severity. Grade 1 and 2 luxations are often managed medically with physiotherapy and weight management if the dog is not significantly lame. Grade 3 and 4 are generally treated surgically, as the patella is displaced most or all of the time, causing pain and progressive arthritis.",
          "Surgery typically involves deepening the trochlear groove, repositioning the tibial crest, and in some cases tightening the joint capsule. Recovery is around 6-8 weeks of restricted activity. Most dogs do very well after surgery.",
        ],
      },
      {
        heading: 'Hip Dysplasia: Medical vs Surgical Management',
        paragraphs: [
          "Hip dysplasia is a developmental condition where the hip joint does not form correctly, leading to joint laxity, abnormal wear, pain, and eventually severe arthritis. It is most common in large breeds: German Shepherds, Labradors, Golden Retrievers, and Rottweilers are particularly predisposed.",
          "Management depends strongly on the dog's age, severity of dysplasia, degree of arthritis, and the owner's circumstances. Young dogs with significant laxity but limited arthritis are candidates for procedures like triple pelvic osteotomy (TPO), which improves joint coverage before arthritis becomes established.",
          "For older dogs with established arthritis, medical management — weight management, anti-inflammatories, physiotherapy, joint supplements — can provide good quality of life for many years. For dogs who are not responding adequately to medical management, total hip replacement is the definitive surgical solution, typically requiring referral to a specialist centre.",
        ],
      },
      {
        heading: 'Questions to Ask Before Your Pet Has Orthopaedic Surgery',
        paragraphs: [
          "Before committing to any orthopaedic procedure, these are the right questions to ask your surgeon:",
          "What is the expected outcome, and what does success look like for this specific patient?",
          "What are the complication rates for this procedure, and what are the most common complications?",
          "What does the recovery involve, and what will be required of me as an owner?",
          "Is there a non-surgical alternative, and what would happen if I chose it?",
          "A surgeon who takes time to answer these questions clearly, and who does not minimise the difficulty of recovery, is one you can trust. Orthopaedic surgery is effective, but demanding for both the patient and the owner.",
        ],
      },
      {
        heading: 'Our Surgical Team at Mike\'s Vet',
        paragraphs: [
          "Orthopaedic outcomes are strongly linked to surgeon experience and the quality of pre-surgical assessment. X-rays must be taken correctly and interpreted carefully. Implant selection matters. Post-operative care and owner education make the difference between a smooth recovery and a complicated one.",
          "At Mike's Vet, orthopaedic cases are handled by 🇮🇪 Dr. Nick Stokes DVM GPCert SAS, 🇮🇹 Dr. Debora Ferraris DVM (Improve International Small Animal Surgery), and 🇩🇿 Dr. Feth Mazari DVM (GP Cert in Ultrasound). We have a dedicated surgical suite, in-house digital X-ray, and pre-operative laboratory testing available on the same day. No specialist referral is required for the majority of orthopaedic cases we see.",
        ],
      },
    ],
    faqs: [
      { q: 'What orthopaedic surgeries does Mike\'s Vet perform in Dubai?', a: "We perform fracture repair (plates, pins, external fixation), TPLO for cruciate ligament rupture, luxating patella correction, and management of hip dysplasia, among other procedures. Contact us to discuss your pet's specific case." },
      { q: 'Does my dog need a referral for orthopaedic surgery in Dubai?', a: "No. Mike's Vet accepts direct bookings for orthopaedic consultations and surgery. Call or WhatsApp +971 4 283 7744." },
      { q: 'How long is recovery after orthopaedic surgery for dogs?', a: "Recovery varies by procedure. Fractures typically take 6-12 weeks. TPLO requires 12-16 weeks of structured rehabilitation. Luxating patella correction is usually 6-8 weeks. We provide a detailed written recovery plan for every surgical patient." },
      { q: 'Is orthopaedic surgery for cats different from dogs?', a: "The principles are the same, but the approach is adapted for smaller anatomy. Fracture fixation, CCL repair, and luxating patella correction are all performed in cats, usually with smaller, specially designed implants." },
      { q: 'What breeds are most prone to orthopaedic problems?', a: "Large breeds (Labradors, Rottweilers, German Shepherds, Golden Retrievers) are predisposed to cruciate ligament disease and hip dysplasia. Small breeds (French Bulldogs, Chihuahuas, Pomeranians) are more prone to luxating patella." },
    ],
    references: [
      "Fossum TW (ed). Small Animal Surgery. 4th ed. Elsevier Mosby; 2013.",
      "Piermattei D, Flo G, DeCamp C. Handbook of Small Animal Orthopedics and Fracture Repair. 4th ed. Saunders Elsevier; 2006.",
      "Roush JK. Canine patellar luxation. Veterinary Clinics of North America: Small Animal Practice. 1993;23(4):855-868.",
      "Smith GK, Paster ER, Powers MY, et al. Lifelong diet restriction and radiographic evidence of osteoarthritis of the hip joint in dogs. Journal of the American Veterinary Medical Association. 2006;229(5):690-693.",
      "Tomlinson J, McLaughlin R. Medically managing canine hip dysplasia. Veterinary Medicine. 1996;91(1):48-54.",
    ],
  },
]
