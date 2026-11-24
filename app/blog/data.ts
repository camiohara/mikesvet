export interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  heroImage?: { url: string; alt: string; credit?: string }
  author?: { name: string; role: string; photo: string; profileHref?: string }
  relatedService?: { name: string; href: string }
  sections: { heading?: string; paragraphs: string[] }[]
  faqs?: { q: string; a: string }[]
  references?: string[]
}

export const posts: BlogPost[] = [
  {
    slug: 'feeding-indoor-cats-dubai',
    title: "Feeding Indoor Cats in Dubai: What the Heat and Apartment Life Actually Mean for Your Cat's Diet",
    date: '2026-10-02',
    readTime: '5 min read',
    excerpt: "Most indoor cats in Dubai are overfed, under-watered, and not moving enough. The climate makes all three problems worse. Here's what we actually see at the clinic and what to do about it.",
    metaTitle: "Feeding Indoor Cats in Dubai: Diet, Hydration & Common Mistakes | Mike's Vet",
    metaDescription: "Indoor cats in Dubai face specific challenges - heat, low activity, and dry air. Here's what to feed them, how much water they actually need, and the mistakes we see most often at the clinic.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1200&q=80&auto=format&fit=crop&crop=faces',
      alt: 'A cat eating from a bowl indoors',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Jana Khazaal',
      role: 'DVM',
      photo: '/vets/jana.jpg',
      profileHref: '/team/jana-khazaal',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    sections: [
      {
        heading: 'The Weight Problem Nobody Talks About',
        paragraphs: [
          "Dubai apartment cats don't hunt, don't roam, and spend most of the day on a sofa in an air-conditioned room. That's not a criticism of the lifestyle - it's just reality, and it has a direct effect on how much they should be eating.",
          "We regularly see cats coming in at 6, 7, 8 kilograms that should be around 4.5. Their owners are often surprised because the cat seems happy and is eating well. But excess weight in cats isn't just a cosmetic issue - it accelerates joint disease, strains the kidneys, and significantly increases the risk of diabetes.",
          "The fix is usually simple: measure food by weight, not by eye or by how much the cat asks for. Cats are very good at convincing people they're starving. Most aren't.",
        ],
      },
      {
        heading: 'Water: The Real Problem with Dry Food in Dubai',
        paragraphs: [
          "Cats evolved in desert environments and have a low thirst drive. They're designed to get most of their water from prey. A mouse is about 70% water. A bowl of dry kibble is around 10%.",
          "In Dubai's climate, with air conditioning pulling moisture from the air, this gap matters more than it would in a more temperate country. Cats on dry-only diets can exist in a state of mild chronic dehydration for years, which quietly damages kidney function over time.",
          "A water fountain helps - running water triggers the drinking instinct better than a static bowl. But the most effective thing is adding wet food. Even one wet meal a day makes a meaningful difference to hydration.",
        ],
      },
      {
        heading: 'Wet vs Dry: We Will Give You a Straight Answer',
        paragraphs: [
          "Wet food is better for most adult cats in Dubai. It delivers hydration, is higher in protein, and is lower in carbohydrates than most dry foods. The argument against it is cost and convenience, which are real considerations - not every household can manage twice-daily wet meals.",
          "If dry food is what works for your life, choose a high-quality one with meat as the first ingredient, not a grain or by-product. And add wet food at least once a day if you can. A 50/50 split is a reasonable target.",
          "Free-feeding dry food - leaving a bowl out all day - is the biggest contributor to feline obesity we see. Cats don't self-regulate well when food is constantly available. Two measured meals a day is better.",
        ],
      },
      {
        heading: 'Mistakes We See at the Clinic',
        paragraphs: [
          "Feeding kittens on adult food, or adults on kitten food. The calorie and nutrient profiles are different. Kitten food fed to an adult cat for years will cause weight gain and can affect kidney health.",
          "Giving a lot of treats on top of full meals. Treats should come out of the daily food allowance, not be added on top of it. We see cats whose treat intake alone exceeds their calorie needs.",
          "Switching foods too abruptly when a cat goes off their food. Cats can develop food aversions quickly, especially when they've been unwell. If your cat stops eating, that's a vet visit, not a food experiment.",
        ],
      },
    ],
    faqs: [
      { q: 'How much should I feed my indoor cat in Dubai?', a: "It depends on their weight, age, and the food you're using. Most adult cats need around 200-250 calories per day, but check the feeding guide on your specific food and weigh it out rather than estimating. If your cat is overweight, speak to your vet about a target weight and feeding plan." },
      { q: 'Should I leave dry food out all day for my cat?', a: "We don't recommend it. Free-feeding is the most common cause of feline obesity we see in Dubai. Two measured meals a day - morning and evening - works better for weight management and also means you notice quickly if your cat stops eating, which is a useful health signal." },
      { q: 'My cat barely drinks water. Should I be worried?', a: "Cats have a low thirst drive by nature. If your cat is on wet food they may barely touch their water bowl and that's fine - they're getting hydration from their food. If they're on dry food only and rarely drink, that's worth addressing. Try a water fountain and consider adding wet food to their diet." },
      { q: 'What is the best cat food brand in Dubai?', a: "We recommend looking at the ingredients rather than the brand. Meat should be the first ingredient. Avoid foods where the first ingredient is a grain, corn, or a by-product meal. Royal Canin, Hills, and Purina Pro Plan are widely available in Dubai and have good quality control. For cats with specific health issues, your vet may recommend a prescription diet." },
    ],
  },
  {
    slug: 'senior-pet-care-dubai',
    title: 'Senior Dogs and Cats in Dubai: What Changes at 7, and What Your Vet Should Be Checking',
    date: '2026-10-02',
    readTime: '6 min read',
    excerpt: "'They're just slowing down' is something we hear a lot about older pets. Sometimes that's true. But often it's pain, kidney disease, or a thyroid problem - things that are treatable once you find them.",
    metaTitle: "Senior Pet Care Dubai: What to Expect as Your Dog or Cat Ages | Mike's Vet",
    metaDescription: "Dogs and cats age faster than we think. Here's what changes at 7, what blood tests actually show, and why 'they're just slowing down' is not always the right answer.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'An older golden retriever resting comfortably',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM, BVSc',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: "Consultations at Mike's Vet", href: '/services/consultations' },
    sections: [
      {
        heading: "When Does 'Senior' Actually Start?",
        paragraphs: [
          "For cats and small dogs, around 10-11 years. For medium dogs, closer to 8-9. For large breeds like German Shepherds and Labradors, we start thinking about senior health checks at 6-7. Giant breeds like Great Danes can be considered senior at 5.",
          "The reason breed size matters so much for dogs is that larger bodies age faster physiologically. A 7-year-old Labrador's kidneys and joints are at a different point in their lifespan than a 7-year-old Shih Tzu's.",
          "Cats often get forgotten in this conversation because they age gracefully and hide illness well. A 10-year-old cat that seems fine can have significant kidney disease or hyperthyroidism that hasn't yet crossed the threshold where clinical signs are obvious.",
        ],
      },
      {
        heading: "What's Changing Inside That You Can't See",
        paragraphs: [
          "Kidney function declines gradually in both cats and dogs as they age. The kidneys have a large functional reserve, which means they can lose 50-60% of their capacity before blood tests show abnormal results and before the animal shows any symptoms. This is why regular monitoring matters - catching the decline early changes what you can do about it.",
          "Hyperthyroidism is the most common hormonal disease in cats over 10. It causes weight loss despite a good appetite, increased thirst, restlessness, and a fast heart rate. Many owners assume weight loss in an older cat is just ageing. It often isn't.",
          "Joint disease is universal in older animals to some degree. Dogs tend to show it more obviously - stiffness after rest, reluctance to jump into the car. Cats are much better at hiding pain. A cat that has stopped jumping onto the sofa isn't necessarily being lazy.",
        ],
      },
      {
        heading: 'What the Blood Panel Is Actually Checking',
        paragraphs: [
          "A senior blood panel typically covers kidney markers (creatinine, BUN, SDMA), liver enzymes, blood glucose, thyroid hormone in cats, a full blood count, and electrolytes. Run together, they give a picture of organ function that a physical exam alone cannot provide.",
          "SDMA is worth mentioning specifically - it's a kidney marker that detects decline earlier than traditional markers, often before clinical signs appear. It's included in our IDEXX in-house panels and can identify kidney disease when there's still meaningful time to slow its progression.",
          "We recommend a senior blood panel once a year from age 7 (earlier for giant breeds), and every 6 months once an abnormality has been detected. The cost of finding something early is almost always lower than managing a crisis.",
        ],
      },
      {
        heading: 'Signs That Owners Often Put Down to Ageing',
        paragraphs: [
          "Drinking more water. This is one of the most significant clinical signs in older pets and is often dismissed. Increased thirst in a senior dog or cat points toward kidney disease, diabetes, hyperthyroidism, or Cushing's disease - all of which are diagnosable and manageable.",
          "Sleeping more and being less interested in things they used to enjoy. This can be pain, anaemia, or early organ disease. It's worth investigating rather than accepting as inevitable.",
          "Changes in coat quality - dull, dry, or a cat that has stopped self-grooming properly. In older cats especially, this often means they're not feeling well or they have mobility issues that make grooming uncomfortable.",
        ],
      },
    ],
    faqs: [
      { q: 'How often should I bring my senior dog or cat to the vet?', a: "Once a year for a healthy senior pet, with a blood panel included. If there's an existing condition being monitored, every 6 months. The goal is to catch changes before they become crises - senior pets can decline more quickly than younger ones once a problem gets ahead of you." },
      { q: 'My 10-year-old cat has lost weight but is eating well. Should I be worried?', a: "Yes, this warrants a vet visit soon rather than waiting. Weight loss with a good appetite in an older cat is a classic presentation of hyperthyroidism, which is very treatable. It can also indicate diabetes or early kidney disease. Don't wait for other symptoms to develop." },
      { q: 'Is joint pain in older dogs treatable?', a: "Yes, meaningfully so. We have good options for managing osteoarthritis in dogs - prescription anti-inflammatory medications, joint supplements, weight management, and in some cases rehabilitation. The first step is confirming the diagnosis and ruling out other causes of mobility changes. Many owners see a significant improvement in their dog's quality of life once pain is properly managed." },
      { q: 'What age should I switch my dog or cat to senior food?', a: "There's no universal answer - it depends on the animal's health status more than their age. Some pets do well on their adult food well into old age; others benefit from a senior or prescription diet earlier, particularly if they have kidney issues or weight problems. Speak to your vet rather than switching based purely on the number on the packet." },
    ],
  },
  {
    slug: 'cat-grooming-dubai',
    title: "Cat Grooming in Dubai: What Your Cat Actually Needs and When to Be Worried",
    date: '2026-10-01',
    readTime: '5 min read',
    excerpt: "Cats are self-sufficient groomers - until they're not. In Dubai's heat, long-haired cats especially can run into problems that look cosmetic but are sometimes medical. Here's how to tell the difference.",
    metaTitle: "Cat Grooming Dubai: What's Normal, What Isn't, and When to See a Vet | Mike's Vet",
    metaDescription: "Most cats groom themselves fine. But in Dubai's climate, some don't - and the signs are easy to miss. Here's what normal grooming looks like and when it becomes a health signal.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A cat grooming itself',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Jana Khazaal',
      role: 'DVM',
      photo: '/vets/jana.jpg',
      profileHref: '/team/jana-khazaal',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    sections: [
      {
        heading: 'What Normal Actually Looks Like',
        paragraphs: [
          "Cats spend roughly 30-50% of their waking hours grooming. That sounds like a lot, but for most healthy cats it's normal - it regulates body temperature, keeps the coat clean, and is a self-soothing behaviour.",
          "Normal grooming is systematic and unhurried. The cat works through sections of their body, pausing and continuing. It's not frantic, not focused on one spot, and doesn't result in bald patches or skin irritation.",
          "Short-haired cats in good health generally manage fine on their own. Regular brushing helps with shedding and gives you a chance to check the skin underneath, but it's not medically necessary for the coat itself.",
        ],
      },
      {
        heading: 'When Grooming Behaviour Is a Medical Signal',
        paragraphs: [
          "Over-grooming - where a cat licks or chews one area repeatedly until the hair thins or disappears - is almost always stress or a skin condition. Common causes include allergies (food or environmental), flea bite hypersensitivity, or anxiety. In Dubai we see a lot of cats with environmental allergies, particularly during dust season.",
          "Under-grooming is the one that gets missed more often. A cat that has stopped maintaining their coat - dull fur, matting starting, a greasy or unkempt look - is usually not feeling well. Pain is a common reason, especially in older cats who find certain positions uncomfortable. Obesity can also make it physically difficult to reach parts of the body.",
          "Any sudden change in grooming habits, either direction, is worth a vet visit if it persists for more than a week or two.",
        ],
      },
      {
        heading: 'Long-Haired Cats in Dubai',
        paragraphs: [
          "Persians, Maine Coons, Ragdolls, and similar breeds are popular in Dubai and all of them need regular human help with grooming. Their coats don't self-maintain the way a short-haired cat's does, and in Dubai's humidity swings between summer and winter, matting can develop quickly.",
          "Mats are not just unsightly - they pull the skin, cause pain, and can hide wounds or skin infections underneath. Once a mat is tight against the skin, it needs to come off with clippers, not a brush. Trying to pull or cut out a tight mat with scissors is how cats (and owners) get hurt.",
          "A professional groom every 6-8 weeks is a reasonable baseline for most long-haired cats in Dubai. Between appointments, a daily brush of the areas that mat fastest - behind the ears, under the armpits, around the collar area - prevents problems from building up.",
        ],
      },
      {
        heading: 'When You Need a Vet Rather Than a Groomer',
        paragraphs: [
          "If the cat is in pain, aggressive when touched, or the skin under a mat looks red, broken, or infected - that's a vet visit, not a grooming appointment. Groomers are not equipped to assess or treat skin conditions.",
          "Cats that are too anxious or fractious to be groomed safely sometimes need sedation for a full clip-out. This is a medical procedure. We do this periodically for cats whose owners can't maintain the coat between visits, or for cats that have been neglected and come in with severe matting across the body.",
          "If your cat is suddenly resistant to being touched in an area they were previously fine with, the first question is whether something hurts. A skin check and brief exam is usually faster and more useful than assuming it's a temperament issue.",
        ],
      },
    ],
    faqs: [
      { q: 'Do cats need to be bathed?', a: "Healthy short-haired cats don't need baths and most actively dislike them. Long-haired cats occasionally benefit from a bath if they've gotten into something, or as part of managing a skin condition - but this should be with a vet-recommended shampoo, not a human product. If your vet has recommended bathing for a specific skin issue, they'll guide you on frequency and product." },
      { q: 'My cat has a bald patch where they keep licking. What should I do?', a: "Book a vet appointment. A single bald patch from repeated licking is almost always either a skin problem (allergy, infection, parasites) or a stress response. The cause matters because the treatment is different. Don't wait to see if it resolves - it usually won't without intervention." },
      { q: 'How do I brush a cat that hates being brushed?', a: "Start very short - 30 seconds maximum, in an area they're comfortable with (usually the head and neck), then stop before they get agitated. Build up gradually over weeks. If they associate brushing with the session ending before they get stressed, most cats become more tolerant over time. For cats that won't tolerate it at all, a professional groomer experienced with cats is a better option than a fight at home." },
      { q: 'Can I shave my long-haired cat in summer to keep them cool?', a: "You can, but it's not necessary for temperature regulation and it has some downsides. A cat's coat actually provides insulation against heat as well as cold, and shaved cats can sunburn. What does help is keeping them indoors during the hottest part of the day, ensuring water is always available, and regular brushing to remove dead undercoat. If matting is the issue, a partial clip of the problem areas is more targeted than a full shave." },
    ],
  },
  {
    slug: 'dog-vaccinations-dubai',
    title: 'Dog Vaccinations in Dubai: Complete Schedule, UAE Requirements & What Every Owner Needs to Know',
    date: '2026-10-22',
    readTime: '9 min read',
    excerpt: 'Dubai has specific vaccination and licensing requirements for dogs - and the schedule differs from what you may be used to at home. Here is exactly what your dog needs, when, and why - including Dubai Municipality registration requirements updated for 2026.',
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM, BVSc',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: 'Vaccinations at Mike\'s Vet', href: '/services/vaccinations' },
    metaTitle: "Dog Vaccinations Dubai: Full Schedule & UAE Requirements | Mike's Vet",
    metaDescription: "Complete guide to dog vaccinations in Dubai - DHPPi, rabies, Leptospirosis, Bordetella schedules, UAE import requirements, and puppy timelines. From Mike's Vet on Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A yellow Labrador retriever looking up attentively',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'Core Vaccines Every Dog in Dubai Needs',
        paragraphs: [
          "Regardless of breed, size, or lifestyle, every dog in Dubai should receive two core vaccines: DHPPi (which covers distemper, hepatitis, parvovirus, and parainfluenza in a single injection) and rabies. These are not optional - they protect against diseases that are either present in the UAE or pose a risk through travel and contact with unvaccinated animals.",
          "Parvovirus is the most significant immediate risk for unvaccinated puppies. It is highly contagious, can survive in the environment for months, and has a high fatality rate in puppies who are not vaccinated. The Dubai heat does not kill it. Any puppy that has not completed their primary vaccine course should not be in contact with unknown dogs or areas frequented by other dogs.",
          "Rabies vaccination is a legal requirement for dogs in Dubai and essential for any international travel. While some rabies vaccines carry a 3-year label, Dubai Municipality requires annual rabies documentation for dog licensing renewal. In practice, annual boosters are the standard for all Dubai-based dogs. If you plan to travel with your dog to the UK, EU, Australia, or most other countries, a rabies vaccination with documented proof is also the starting point for all export health requirements.",
        ],
      },
      {
        heading: 'Non-Core Vaccines: Leptospirosis and Kennel Cough',
        paragraphs: [
          "Leptospirosis is a bacterial disease spread through contaminated water and the urine of infected animals, including rodents. Dogs that go to parks, swim in water, or have outdoor access in Dubai are considered at risk. Leptospirosis can also be transmitted to humans, which makes vaccination an important public health measure as well as a pet health one. We include it in our standard adult dog recommendations for most Dubai lifestyles.",
          "Bordetella (kennel cough) vaccination is required by virtually all reputable boarding facilities in Dubai and recommended for any dog that attends dog parks, training classes, grooming appointments, or has contact with other dogs. Kennel cough is extremely contagious and spreads rapidly wherever dogs gather. It is rarely fatal in healthy adult dogs but causes significant discomfort and can be serious in puppies, older dogs, or immunocompromised dogs.",
          "One UAE-specific note worth raising alongside vaccines: the brown dog tick (Rhipicephalus sanguineus) is endemic in Dubai and active year-round. Tick-borne diseases including Ehrlichia canis and Babesia canis are diagnosed regularly in Dubai dogs, particularly those with outdoor access to parks, desert walks, or dog runs. There is no vaccine currently available in the UAE for these diseases, but they are a strong reason to keep year-round tick prevention in place alongside the core vaccination programme. Monthly topical or oral treatments are the standard of care for Dubai dogs.",
        ],
      },
      {
        heading: 'Puppy Vaccination Schedule in Dubai',
        paragraphs: [
          "Puppies receive maternal antibodies from their mother that gradually wane from around 6–8 weeks of age. The puppy vaccination series is designed to provide protection as maternal immunity fades, without yet knowing exactly when that transition happens for each individual puppy.",
          "A standard puppy schedule at Mike's Vet: first DHPPi at 8 weeks, second DHPPi at 12 weeks, third DHPPi and rabies at 16 weeks, then a booster at 12–15 months (the timing of this booster is important and is what establishes the adult annual cycle). Until the series is complete, puppies should avoid contact with unvaccinated dogs and areas with high dog traffic.",
          "After the primary series, adult dogs receive annual DHPPi and Leptospirosis boosters, with rabies given every one to three years depending on the vaccine used and UAE requirements. We keep a digital vaccination record for every patient and send reminders when boosters are due.",
        ],
      },
      {
        heading: 'Dubai Municipality Dog Licensing',
        paragraphs: [
          "All dogs kept as pets in Dubai must be registered with Dubai Municipality. As of 2026, this requires a valid ISO-compliant microchip, current rabies vaccination, and an annual health certificate issued by a Dubai Municipality-approved veterinary clinic. The annual licensing fee applies and renewal is required each year.",
          "Registration can be completed through approved veterinary clinics directly or at a Dubai Municipality animal licensing centre. At Mike's Vet we are an approved clinic and can handle the health certificate and documentation at your annual booster appointment.",
          "The most important practical point: Dubai Municipality expects annual rabies vaccination documentation at each renewal, regardless of whether the vaccine you received carries a 3-year label. If your dog's records show a rabies vaccine given more than 12 months ago, Dubai licensing renewal will require a new booster.",
          "Dogs in Dubai without a valid municipal licence are in breach of regulations and can incur fines. This matters particularly for owners who have recently relocated from another country and assume their home-country registration is valid here - it is not. UAE registration must be completed independently, and your home-country health history is useful background but does not substitute for Dubai Municipality records.",
        ],
      },
      {
        heading: 'Vaccinations for Dogs Coming Into Dubai',
        paragraphs: [
          "If you are bringing a dog into Dubai from another country, the UAE requires proof of current rabies vaccination, microchipping, and an import permit from the UAE Ministry of Climate Change and Environment (MOCCAE). Import permits are applied for online through the MOCCAE portal before travel. Requirements vary by country of origin, and some dogs coming from certain countries require additional testing or documentation. Your vet in the origin country should prepare a certified health certificate typically within 10 days of travel.",
          "If you have recently arrived in Dubai with a dog, we recommend scheduling a full health check to establish a baseline record, update any vaccines that may be due, and register your pet with Dubai Municipality. This also gives you the opportunity to address any health issues that may have been missed or undocumented before import.",
        ],
      },
      {
        heading: 'Vaccinations and Travel: Leaving Dubai with Your Dog',
        paragraphs: [
          "Each destination country has different import requirements, but the common elements for most developed countries include: current rabies vaccination (documented with a valid certificate), microchipping in ISO standard format, and an official health certificate issued by an accredited vet within 10 days of travel.",
          "For travel to the EU or UK, dogs additionally require a rabies neutralising antibody titre test done at least 30 days after the last rabies vaccine, with results above the accepted threshold. This test must be done at an EU-approved laboratory, and the waiting period begins from the date of the test - meaning you may need to plan 3–6 months ahead for these destinations. At Mike's Vet we are accredited to issue export health certificates and can help you plan your travel timeline well in advance.",
        ],
      },
    ],
    faqs: [
      { q: 'What vaccines does my dog need in Dubai?', a: "Core vaccines are DHPPi (distemper, hepatitis, parvovirus, parainfluenza) and rabies. Leptospirosis is recommended for most Dubai dogs with outdoor access. Bordetella (kennel cough) is required by most boarding facilities and recommended for dogs that interact with other dogs." },
      { q: 'How often does my dog need vaccines in Dubai?', a: "After the puppy primary series (at 8, 12, and 16 weeks), dogs receive a booster at 12–15 months, then annual boosters for DHPPi and Leptospirosis. Rabies is given every 1–3 years depending on the vaccine used. We send reminders when boosters are due." },
      { q: 'Do dogs need vaccines to enter boarding in Dubai?', a: "Yes. All reputable boarding facilities in Dubai require up-to-date vaccinations - at minimum DHPPi, rabies, and Bordetella (kennel cough). You will typically need to provide a vaccination certificate issued by a vet." },
      { q: 'Can I travel to the UK or EU with my dog from Dubai?', a: "Yes, but it requires advance planning. You will need a microchip, rabies vaccination, a rabies antibody titre test (done at least 30 days after vaccination at an approved lab), and an official health certificate. The titre test result determines when travel is permitted - plan at least 3–6 months ahead for these destinations. We issue export health certificates at Mike's Vet." },
      { q: 'What age can puppies start going to the park in Dubai?', a: "We recommend keeping puppies away from public spaces frequented by unknown dogs until at least one week after their third DHPPi vaccine (given at 16 weeks). Until that point, the puppy primary series is not complete and immunity to parvovirus, in particular, may not be fully established." },
      { q: 'Do I need to register my dog with Dubai Municipality?', a: "Yes. All dogs kept in Dubai must be registered with Dubai Municipality annually. Registration requires a valid microchip, current rabies vaccination (annual for licensing purposes), and a health certificate from an approved veterinary clinic. Approved clinics like Mike's Vet can complete the documentation at your dog's annual booster appointment. Unregistered dogs are in breach of Dubai Municipality regulations." },
      { q: 'Are tick-borne diseases a risk for dogs in Dubai?', a: "Yes. The brown dog tick (Rhipicephalus sanguineus) is endemic in Dubai year-round. Ehrlichia canis and Babesia canis are diagnosed regularly in Dubai dogs with outdoor access. There is no vaccine for these diseases in the UAE, so year-round tick prevention with a monthly topical or oral treatment is essential alongside the core vaccination programme." },
    ],
  },
  {
    slug: 'spaying-neutering-dog-dubai',
    title: 'Spaying and Neutering Dogs in Dubai: Age, Benefits, Cost, and Recovery',
    date: '2026-09-23',
    author: {
      name: 'Dr. Debora Ferraris',
      role: 'DVM, Improve International - Small Animal Surgery',
      photo: '/vets/debora.jpg',
      profileHref: '/team/debora-ferraris',
    },
    relatedService: { name: 'Spay & Neuter at Mike\'s Vet', href: '/services/spay-neuter' },
    readTime: '6 min read',
    excerpt: 'When should you neuter or spay your dog in Dubai, and what should you expect? Here is what the current evidence says - including why timing matters more for large breeds.',
    metaTitle: "Spaying & Neutering Dogs in Dubai: Age, Cost & Recovery | Mike's Vet",
    metaDescription: "When to spay or neuter your dog in Dubai, the health benefits, what to expect from surgery, and recovery at home. Evidence-based guide from Mike's Vet, Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'Two dogs running together outdoors in the sunshine',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'Why Spay or Neuter Your Dog?',
        paragraphs: [
          "Spaying (removing the ovaries and uterus in females) and neutering (removing the testes in males) are among the most impactful health decisions you can make for your dog. Beyond preventing unwanted pregnancies, these procedures offer significant long-term health benefits that are well-documented across veterinary medicine.",
          "In female dogs, spaying before the first or second heat cycle dramatically reduces the risk of mammary tumours - the risk is less than 0.5% if spayed before the first heat, rising to 8% after the first heat and 26% after the second. It also eliminates the risk of pyometra, a life-threatening uterine infection that affects roughly 25% of unspayed females before the age of 10 and requires emergency surgery when it occurs.",
          "In male dogs, neutering eliminates the risk of testicular cancer and reduces the risk of prostate disease, perianal tumours, and perineal hernias. It also tends to reduce testosterone-driven behaviours like roaming, marking, and inter-male aggression - though the extent of behaviour change varies by individual dog and the age at which neutering is done.",
        ],
      },
      {
        heading: 'When Should You Spay or Neuter - and Does Timing Matter?',
        paragraphs: [
          "For small and medium breeds (under approximately 20 kg), the traditional recommendation of 6 months holds up well. At this age, the primary vaccine course is complete, the puppy is old enough for safe anaesthesia, and the health benefits of early neutering are significant.",
          "For large and giant breeds, the picture has become more nuanced in recent years. Several studies - particularly in Labrador Retrievers, Golden Retrievers, and German Shepherds - suggest that early neutering (before 12 months) may increase the risk of certain orthopaedic conditions, including cruciate ligament rupture, hip dysplasia, and joint disease. The sex hormones appear to play a role in musculoskeletal development, and removing them too early may affect how bones and joints mature.",
          "The current guidance for large breeds is generally to wait until 12–18 months, allowing the growth plates to close and musculoskeletal development to complete. This is a nuanced decision that depends on your dog's breed, sex, lifestyle, and individual circumstances. Our vets will advise you on the most appropriate timing for your specific dog.",
        ],
      },
      {
        heading: 'What to Expect from the Surgery',
        paragraphs: [
          "Both spay and neuter procedures are performed under general anaesthesia. A pre-anaesthetic blood panel is recommended - particularly for older dogs or those with known health conditions - to check organ function before surgery. Your dog will be fasted from midnight the night before their procedure.",
          "Spay surgery involves a single incision into the abdomen to remove the ovaries and uterus. Neuter surgery involves one or two small scrotal incisions to remove the testes. Both procedures use modern suture materials and our surgical team uses multimodal pain management - before, during, and after surgery - so your dog is comfortable throughout.",
          "Recovery time is typically 10–14 days. During this period, your dog should be kept calm and restricted from running, jumping, or swimming. The incision site should be checked daily for signs of swelling, redness, or discharge. Your dog will likely go home with pain medication and, in some cases, an e-collar (Elizabethan collar) to prevent licking the wound.",
        ],
      },
      {
        heading: 'Recovery at Home',
        paragraphs: [
          "Most dogs are back to their normal selves within a few days of surgery, but internal healing takes longer. The 10–14 day rest period is not just about the external wound - it is about giving the internal sutures and tissues time to heal properly. Off-lead exercise, rough play, and climbing stairs should be avoided during this period.",
          "At Mike's Vet, we schedule a post-operative check at 10–14 days to assess healing, remove any external sutures if present, and confirm your dog is recovering well. If you notice anything concerning before that appointment - discharge, swelling, your dog not eating, or signs of pain - call us on +971 4 283 7744 and we will advise you.",
        ],
      },
    ],
    faqs: [
      { q: 'What age should I spay or neuter my dog in Dubai?', a: "For small and medium breeds: around 6 months. For large and giant breeds: 12–18 months is increasingly recommended to allow full musculoskeletal development. The right timing depends on your dog's breed, sex, and lifestyle - book a consultation for personalised advice." },
      { q: 'How much does it cost to spay or neuter a dog in Dubai?', a: "The cost varies depending on your dog's size and sex - spay surgery is more complex than neutering as it involves opening the abdomen. Contact us on +971 4 283 7744 or WhatsApp for a specific quote for your dog." },
      { q: 'Is spaying or neutering painful for dogs?', a: "We use modern multimodal pain management protocols - before, during, and after surgery - to ensure your dog is comfortable throughout. Most dogs show minimal signs of discomfort after the first 24–48 hours. You will go home with appropriate pain medication." },
      { q: 'Can I spay my dog while she is in heat?', a: "It is technically possible but not ideal. The uterus is more vascular during a heat cycle, which increases surgical complexity and bleeding risk. We generally recommend waiting 8–12 weeks after the end of a heat cycle before spaying if possible." },
      { q: "Will neutering change my dog's personality?", a: "Neutering often reduces testosterone-driven behaviours - roaming, urine marking, and some forms of aggression - but does not change your dog's fundamental personality. Learned behaviours that are not hormone-driven are unlikely to change with neutering alone." },
    ],
  },
  {
    slug: 'how-to-choose-vet-dubai',
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM, BVSc',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: "Consultations at Mike's Vet", href: '/services/consultations' },
    title: 'How to Choose a Vet in Dubai: What to Look For, What to Ask, and Red Flags to Avoid',
    date: '2026-09-22',
    readTime: '5 min read',
    excerpt: 'Choosing the right vet in Dubai is one of the most important decisions you will make as a pet owner. Here is a practical guide to finding a clinic you can trust - before you actually need one.',
    metaTitle: "How to Choose a Vet in Dubai: A Practical Guide | Mike's Vet",
    metaDescription: "Choosing a vet in Dubai? Here's what to look for - in-house diagnostics, emergency capability, experienced vets, transparent pricing, and how to spot the red flags. From Mike's Vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A veterinarian examining a dog on a consultation table',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'Why It Matters to Choose Before You Need One',
        paragraphs: [
          "Most people register with a vet when their pet is already sick or injured - when they are stressed, time-pressed, and in no position to make a careful choice. The result is that they end up at whatever clinic is closest or has availability, which may not be the right fit for their pet's long-term needs.",
          "Choosing a vet when your pet is healthy gives you time to visit the clinic, meet the team, check the facilities, and assess whether you feel confident and heard. It also means your vet has a baseline health record for your pet - so that when something does go wrong, they have context, not just a stranger in front of them.",
        ],
      },
      {
        heading: 'What to Look For in a Dubai Vet Clinic',
        paragraphs: [
          "In-house diagnostics are the single biggest practical differentiator. A clinic with on-site blood testing, urinalysis, X-ray, and ultrasound can diagnose most conditions in a single visit. A clinic that sends everything to an external lab will ask you to come back for results - which means more stress for your pet, more time, and sometimes delayed treatment in urgent situations.",
          "Surgical capability matters more than most owners realise. Many conditions - from a suspected foreign body in the intestine to an orthopaedic injury - require surgery within hours or days. A clinic that can perform surgery in-house means your pet gets treated faster, without the stress of transfer to a different facility with a different team. Ask specifically: do you have a surgical suite? What procedures do you perform in-house? Do your vets have any postgraduate surgical training?",
          "Emergency capability and hours are the third pillar. Dubai has relatively few true 24-hour emergency vet facilities. Knowing whether your regular clinic has genuine emergency capability during opening hours - oxygen therapy, IV fluids, the ability to stabilise a critical patient - is important. A clinic that can stabilise your pet while you arrange a transfer is far better than one that simply redirects you elsewhere.",
        ],
      },
      {
        heading: 'Questions Worth Asking a Vet Clinic',
        paragraphs: [
          "Before registering your pet, ask these directly: How many vets work at this clinic? What are their backgrounds and training? Do you have in-house blood testing, X-ray, and ultrasound? What surgical procedures can you perform in-house? What happens if my pet has an emergency outside your opening hours? How do you handle pain management during and after procedures?",
          "The quality of the answers tells you a great deal. Specific, confident answers about equipment, credentials, and protocols indicate a clinic that has thought carefully about how it operates. Vague answers about 'caring for your pet' without specifics are not reassuring. You are looking for evidence of clinical rigour, not just warmth.",
        ],
      },
      {
        heading: 'Red Flags to Watch For',
        paragraphs: [
          "Be cautious of clinics that offer anaesthesia-free dental cleaning - it cannot be done safely or effectively without general anaesthesia, and any clinic promoting it is prioritising marketing over evidence-based medicine. Similarly, a clinic that diagnoses and prescribes without a thorough physical examination, or that relies entirely on external labs for basic diagnostics, may not have the clinical infrastructure to properly support your pet.",
          "Pressure to purchase unnecessary products or supplements at every visit, very high staff turnover, or a clinic where you never see the same vet twice are also worth noting. Continuity of care matters in veterinary medicine - your pet's history, their normal baseline, and the relationship between vet and patient all contribute to better outcomes over time.",
        ],
      },
      {
        heading: "What Makes Mike's Vet Different",
        paragraphs: [
          "Mike's Vet on Hessa Street is a full-service veterinary clinic rated 4.8 stars on Google by over 500 pet owners in Dubai. Our team includes vets from 6 countries with a range of specialist training - including postgraduate certification in small animal surgery, ultrasound, and internal medicine. We have full in-house diagnostics (IDEXX blood analysers, Zoetis Vetscan Imagyst AI parasite testing, digital X-ray, and a Mindray Vetus9 ultrasound), a dedicated surgical suite, and a fully equipped ICU.",
          "We are open 7 days a week from 9:00 AM to 9:30 PM including public holidays, and we offer home visits for pets who are stressed by the clinic environment. Most diagnostic workups are completed in a single visit. If you would like to meet the team or see the clinic before registering your pet, you are welcome to visit us on Hessa Street or call +971 4 283 7744.",
        ],
      },
    ],
    faqs: [
      { q: 'What should I look for in a vet clinic in Dubai?', a: "The most important factors are: in-house diagnostics (blood tests, X-ray, ultrasound), surgical capability, experienced vets with documented training, transparent pricing, and genuine emergency capability during opening hours. Choose before you need one - not in a crisis." },
      { q: 'How do I know if a vet clinic in Dubai is good?', a: "Look for: Google reviews with substantive feedback (not just star ratings), a clear description of their diagnostic and surgical equipment, vets whose qualifications and backgrounds are listed, and a clinic that answers your questions with specifics rather than generalities. A visit before you register is worthwhile." },
      { q: 'Is there a 24-hour vet in Dubai?', a: "A small number of clinics offer 24-hour emergency cover. Mike's Vet is open 7 days a week from 9:00 AM to 9:30 PM including public holidays. For after-hours emergencies, call us on +971 4 283 7744 and we will advise on the most appropriate option." },
      { q: 'How much does a vet visit cost in Dubai?', a: "Consultation fees in Dubai vary by clinic. At Mike's Vet, we offer transparent pricing - call or WhatsApp +971 4 283 7744 for specific costs. Home visits are AED 400 + VAT." },
    ],
  },
  {
    slug: 'travelling-with-pet-from-dubai',
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: "Wellness Checks at Mike's Vet", href: '/services/wellness-checks' },
    title: 'Travelling with Your Pet from Dubai: Export Health Certificates, Rabies Titres, and Country Requirements',
    date: '2026-09-22',
    readTime: '8 min read',
    excerpt: 'Moving or travelling abroad with your pet from Dubai involves more planning than most owners expect. Here is what you need, how far in advance, and what happens if you miss a step.',
    metaTitle: "Travelling with Pets from Dubai: Health Certificates & Requirements | Mike's Vet",
    metaDescription: "Complete guide to pet export from Dubai - health certificates, rabies titre tests, microchip requirements, UK and EU pet travel rules, and timing. From Mike's Vet, Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A dog sitting near a travel bag, looking ready for a journey',
      credit: 'Unsplash',
    },
    sections: [
      {
        heading: 'Why Pet Travel from Dubai Requires Advance Planning',
        paragraphs: [
          "Pet travel from Dubai to most developed countries involves a sequence of steps that must be done in the right order and within specific timeframes. Missing one step - or doing them out of order - can result in your pet being refused entry, quarantined, or returned to the country of origin. Unlike booking a flight, you cannot solve this at the last minute.",
          "The most common mistake is underestimating the timeline. For travel to the UK, EU, Australia, and New Zealand in particular, certain requirements must be met months before your travel date. Understanding what is needed, and when, is the first step to a smooth journey for your pet.",
        ],
      },
      {
        heading: 'The Universal Requirements: Microchip and Rabies Vaccination',
        paragraphs: [
          "Almost every country requires that your pet be microchipped with an ISO 11784/11785 compliant chip (15-digit, 134.2 kHz) before any other health steps are taken. This is because the microchip is the unique identifier that links your pet to their health records. If your pet is microchipped after their rabies vaccination, the vaccination may not count for entry purposes - the chip must come first.",
          "Rabies vaccination is the other universal requirement. The vaccination must be administered to a microchipped animal, and the documentation must record both the microchip number and the vaccine details (brand, batch number, expiry date, date given, and next due date). At Mike's Vet, our vaccination certificates are issued in a format that meets international documentation standards.",
        ],
      },
      {
        heading: 'UK and EU Pet Travel: The Rabies Titre Test',
        paragraphs: [
          "The UK and EU require a rabies neutralising antibody titre test in addition to vaccination. This blood test checks that your pet's immune system has responded adequately to the rabies vaccine - producing enough antibodies to meet the accepted threshold of 0.5 IU/mL or above.",
          "The test must be done at an EU-approved laboratory. In Dubai, blood samples for titre testing are sent to approved labs in Europe or elsewhere. The critical timing rules are: the titre test cannot be done until at least 30 days after the rabies vaccination; and the waiting period before travel to the UK or EU begins from the date of the blood sample, not the date of the result. The minimum waiting period is 3 months after the titre blood draw (for the EU) or varies for the UK - check current APHA guidance.",
          "This means that if you plan to travel to the UK or EU, you should begin the process at least 4–6 months before your intended travel date - sooner if your pet is not yet vaccinated. At Mike's Vet, we can advise you on the exact timeline based on your destination and current vaccine status.",
        ],
      },
      {
        heading: 'Australia and New Zealand',
        paragraphs: [
          "Australia and New Zealand have among the strictest pet import rules in the world, reflecting their status as rabies-free countries with unique native ecosystems. Requirements include: microchipping, rabies vaccination and titre testing, treatment for parasites and ticks, mandatory quarantine (which can be months), and an import permit obtained before travel.",
          "Dogs coming from the UAE are typically classified as Category 3 countries, meaning they face the full quarantine protocol. Given the complexity and cost, we strongly recommend consulting a specialist pet relocation service and a vet accredited for export documentation well in advance - ideally 12 months or more before your intended travel date.",
        ],
      },
      {
        heading: 'The Export Health Certificate',
        paragraphs: [
          "Most countries require an official export health certificate - a government-approved document signed by an accredited vet, certifying that your pet meets all entry requirements for the destination country. This certificate typically has a very short validity window: for the UK and EU, it must be issued within 10 days of travel.",
          "At Mike's Vet, we are accredited to issue export health certificates for a wide range of destinations. We recommend booking a health certificate appointment well in advance of your travel date, and bringing all your pet's documentation - vaccination records, microchip certificate, and titre test results if required. We will check everything is in order, complete the clinical examination, and issue the certificate.",
          "Airline requirements vary - most airlines require pets to travel in an IATA-approved carrier, and many restrict travel during summer months due to Dubai heat. Check with your airline directly for their specific pet travel policies.",
        ],
      },
    ],
    faqs: [
      { q: 'What do I need to travel from Dubai with my dog or cat?', a: "At minimum: ISO-compliant microchip (before rabies vaccination), current rabies vaccination with documentation, and an official export health certificate issued within 10 days of travel by an accredited vet. The UK, EU, Australia, and NZ have additional requirements including titre tests and/or quarantine." },
      { q: 'How far in advance should I plan pet travel from Dubai?', a: "For the UK and EU: at least 4–6 months before travel, to allow time for rabies vaccination (if not current), titre testing, the waiting period, and the health certificate. For Australia and New Zealand: 12 months or more is realistic. For most other countries: 4–8 weeks is usually sufficient but check destination-specific rules." },
      { q: "Does Mike's Vet issue pet export health certificates in Dubai?", a: "Yes. We are accredited to issue export health certificates for a wide range of destinations. Book an appointment by calling or WhatsApp on +971 4 283 7744. Bring all your pet's documentation to the appointment." },
      { q: 'What is a rabies titre test and do I need one?', a: "A rabies titre test (RNATT) is a blood test that checks your pet has sufficient rabies antibodies. It is required for travel to the UK, EU, Australia, New Zealand, and some other destinations. The test must be done at an approved laboratory at least 30 days after rabies vaccination, with a waiting period after the test before travel is permitted." },
      { q: 'Can I take my pet on a plane from Dubai in summer?', a: "Many airlines restrict or prohibit pets travelling as checked baggage or in the hold during Dubai's summer months (typically June–September) due to extreme heat at airports. Some airlines permit pets in-cabin year-round for small animals. Check directly with your airline for their specific pet travel policy." },
    ],
  },
  {
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    slug: 'how-to-choose-cat-vet-dubai',
    title: 'How to Choose a Cat Vet in Dubai: What Every Cat Owner Should Know',
    date: '2026-09-23',
    readTime: '6 min read',
    excerpt: 'Not all vet clinics are equal when it comes to cats. Here is what to look for, which questions to ask, and the signs a clinic genuinely understands feline care - from a team that treats cats every day.',
    metaTitle: "How to Choose a Cat Vet in Dubai | Mike's Vet",
    metaDescription: "Looking for a cat vet in Dubai? Here's exactly what to look for - low-stress handling, feline expertise, in-house diagnostics, and emergency capability. A practical guide from Mike's Vet on Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A tabby cat looking directly at the camera with bright eyes',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Jana Khazaal',
      role: 'DVM',
      photo: '/vets/jana.jpg',
      profileHref: '/team/jana-khazaal',
    },
    sections: [
      {
        heading: 'Why Cats Need a Different Kind of Vet',
        paragraphs: [
          "Cats are physiologically and behaviourally different from dogs in ways that matter a great deal in a clinical setting. They metabolise certain medications differently - some drugs that are safe for dogs are toxic to cats. They respond differently to pain and stress, and because they evolved as both predator and prey, they are hardwired to hide signs of illness until they feel safe to show them. A cat that 'seems fine' may have been quietly managing kidney disease, hyperthyroidism, or dental pain for months.",
          "A vet who understands cats adjusts their entire approach - how they handle the animal, how they interpret clinical signs, which drugs they use, and how they read the subtleties that cats give you when they can't vocalise what hurts. A clinic that treats cats and dogs identically is not giving your cat the care they deserve.",
        ],
      },
      {
        heading: 'What to Look For in a Cat Vet Clinic',
        paragraphs: [
          "The most important thing is hands-on feline experience. Ask how many cat patients the clinic sees regularly, whether the vets have additional feline training, and how they handle anxious or fractious cats. Low-stress handling - minimal restraint, quiet approach, letting the cat set the pace - is not just kinder; it produces better clinical outcomes. A cat that is less stressed allows a more accurate examination.",
          "Separation from dogs is another key marker. A waiting room where cats and dogs share the same space elevates feline stress immediately and measurably. Some clinics have separate waiting areas or will take cats directly into a consultation room on arrival. In-house diagnostics also matter: a clinic with on-site blood testing, urinalysis, X-ray, and ultrasound can complete most workups in a single visit - meaning your cat spends less time in an unfamiliar environment and you get answers the same day.",
          "For emergencies, check whether the clinic has real critical care capability - IV fluids, oxygen therapy, and a vet experienced with common feline emergencies like urinary blockages, respiratory distress, and toxin ingestion. The nearest 24-hour clinic matters less than having a clinic with genuine in-house emergency capability during normal operating hours.",
        ],
      },
      {
        heading: 'Dubai-Specific Considerations for Cat Owners',
        paragraphs: [
          "Dubai's climate and lifestyle create some specific risks for cats. Heat-related illness is a real danger for any cat with outdoor access or in a poorly ventilated space - and even indoor cats can be affected if air conditioning fails. Indoor cats in Dubai apartments are at higher risk of obesity and the conditions that follow: diabetes, fatty liver disease, and joint problems. Regular wellness checks and an honest conversation about diet and enrichment are particularly valuable here.",
          "If you plan to travel internationally with your cat, Dubai has specific export requirements - and destination countries have their own import rules that typically involve rabies vaccination, microchipping, blood titre tests (for the EU and UK), and an official health certificate signed by an accredited vet within a short window of departure. A good vet clinic will know these requirements and help you plan the timeline well in advance, because some tests - particularly rabies neutralising antibody titres - need to be done months ahead of travel.",
          "Stray and rescue cats are common in Dubai, and many residents adopt one. If you have recently brought home a stray or rescue cat, a full health screen is essential: FIV (feline immunodeficiency virus) and FeLV (feline leukaemia) testing, parasite treatment, vaccination, and dental assessment. Stray cats often carry hidden health issues that are manageable when caught early.",
        ],
      },
      {
        heading: 'Questions to Ask Before You Choose a Cat Vet',
        paragraphs: [
          "Before registering your cat at a clinic, it is worth asking a few direct questions. Do you see many feline patients? How do you handle cats that are anxious or uncooperative - do you use minimal restraint techniques? Is there somewhere cats wait that is separate from dogs? Do you have in-house blood testing, urinalysis, X-ray, and ultrasound? What happens if my cat has an emergency outside your operating hours?",
          "The answers tell you a great deal. A clinic that gives vague answers to these questions, or that has no real policy on low-stress handling, is likely not cat-specialist in any meaningful sense. A clinic that answers with specifics - particular handling protocols, names of equipment, a clear emergency plan - is one that has thought seriously about feline care.",
        ],
      },
      {
        heading: 'Signs Your Cat Needs to See a Vet Urgently',
        paragraphs: [
          "Because cats hide illness so effectively, it is worth knowing the signs that should prompt an urgent vet visit. Straining to urinate or producing little to no urine - particularly in male cats - is a life-threatening emergency that requires immediate attention. Difficulty breathing, open-mouth breathing, or pale or blue-tinged gums are also emergencies. Sudden hind leg weakness or paralysis, an inability to stand, seizures, suspected toxin ingestion, or a swollen distended abdomen all require urgent care.",
          "Less dramatic but still important: unexplained weight loss, changes in water intake or urination, hiding more than usual, loss of appetite lasting more than 24–48 hours, or vomiting more than once or twice a week. These signs rarely resolve on their own in cats, and early diagnosis makes treatment significantly more effective.",
          "At Mike's Vet on Hessa Street, we see cats every day - from routine kitten appointments to complex surgical and emergency cases. If you are not sure whether your cat's symptoms warrant a visit, call us on +971 4 283 7744 or WhatsApp us and we will help you decide.",
        ],
      },
    ],
    faqs: [
      { q: 'How often should I take my cat to the vet in Dubai?', a: "Kittens need several visits in their first year for vaccines, parasite treatment, and health checks. Adult cats (1–7 years) should be seen at least once a year. Senior cats (7+) benefit from twice-yearly check-ups to catch kidney disease, hyperthyroidism, dental disease, and other age-related conditions early." },
      { q: 'What vaccinations does my cat need in Dubai?', a: "Core vaccines for cats in Dubai are FVRCP (cat flu and feline panleucopenia) and rabies. FeLV vaccination is recommended for cats with outdoor access or contact with unknown cats. Kittens receive their first vaccines from 8 weeks, followed by boosters at 12 and 16 weeks, then annual or triennial adult boosters." },
      { q: 'How much does a cat vet visit cost in Dubai?', a: "Cat vet consultation fees in Dubai vary by clinic and the services required. At Mike's Vet on Hessa Street, we offer transparent pricing - call or WhatsApp +971 4 283 7744 for specific costs. Our home visit fee for cat owners who prefer it is AED 400 + VAT." },
      { q: 'What are the signs my cat needs emergency vet care?', a: "See a vet immediately if your cat is straining to urinate without producing urine (especially male cats), breathing with their mouth open, showing sudden hind leg weakness, has suspected toxin ingestion, is unresponsive, or has a distended abdomen. Call us on +971 4 283 7744." },
      { q: 'Can a general vet treat my cat, or do I need a cat specialist?', a: "A good general vet with feline experience handles the vast majority of cat health needs well - vaccinations, dental care, spay/neuter, diagnostics, soft tissue surgery, and emergency care. A specialist (feline-only clinic or a board-certified internist) adds value for complex or rare conditions, but most Dubai cat owners will receive excellent care from an experienced general practice that takes feline medicine seriously." },
    ],
  },
  {
    slug: 'stray-cat-quarantine-dubai',
    author: {
      name: 'Dr. Jana Khazaal',
      role: 'DVM',
      photo: '/vets/jana.jpg',
      profileHref: '/team/jana-khazaal',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    title: 'How Long to Quarantine a Stray Cat: A Dubai Guide to Bringing Home a Street Cat',
    date: '2026-09-27',
    readTime: '7 min read',
    excerpt: 'Found a stray cat in Dubai and want to bring it home? Quarantine is essential - both to protect your resident pets and to give the newcomer time to decompress. Here is exactly what to do and for how long.',
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
          "Dubai's climate creates year-round flea pressure that is more intense than in cooler countries. Street cats here commonly carry higher flea and parasite burdens than their counterparts in Europe or North America. Year-round flea prevention is not optional - it is the standard of care for Dubai cats, indoor or not.",
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
    author: {
      name: 'Dr. Nick Stokes',
      role: 'DVM GPCert SAS',
      photo: '/vets/nick.jpg',
      profileHref: '/team/nick-stokes',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
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
    author: {
      name: 'Dr. Jana Khazaal',
      role: 'DVM',
      photo: '/vets/jana.jpg',
      profileHref: '/team/jana-khazaal',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
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
    author: {
      name: 'Dr. Nick Stokes',
      role: 'DVM GPCert SAS',
      photo: '/vets/nick.jpg',
      profileHref: '/team/nick-stokes',
    },
    relatedService: { name: "Vaccinations at Mike's Vet", href: '/services/vaccinations' },
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
    author: {
      name: 'Dr. Nick Stokes',
      role: 'DVM GPCert SAS',
      photo: '/vets/nick.jpg',
      profileHref: '/team/nick-stokes',
    },
    relatedService: { name: "In-House Laboratory at Mike's Vet", href: '/services/in-house-laboratory' },
    title: "Feline Mycoplasma: The Blood Parasite Your Cat's Blood Test Can Detect",
    date: '2026-09-19',
    readTime: '7 min read',
    excerpt: 'Mycoplasma haemofelis is a flea-transmitted blood parasite that destroys red blood cells in cats, often causing severe anaemia before owners notice anything is wrong. Here is what every cat owner in Dubai should know.',
    metaTitle: "Feline Mycoplasma Dubai: Signs & Treatment | Mike's Vet",
    metaDescription: "Mycoplasma haemofelis causes haemolytic anaemia in cats and is transmitted by fleas. Learn the signs, how a blood smear diagnoses it, and treatment options from Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80&auto=format&fit=crop&crop=faces',
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
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: 'Vaccinations at Mike\'s Vet', href: '/services/vaccinations' },
    title: 'Vaccinations for Cats and Dogs in Dubai: The Complete Guide',
    date: '2025-08-15',
    readTime: '6 min read',
    excerpt: "Rabies is required by UAE law, but your cat and dog need more than that. Here's the complete vaccination guide for pet owners in Dubai - what vaccines are used, when to start, and what's different about the UAE.",
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
          "Dubai's warm climate, year-round humidity, and large population of rescue and community animals create conditions where infectious diseases spread more easily than in cooler climates. Many cats and dogs in Dubai are adopted from rescue organisations with incomplete histories - making it all the more important to start a proper vaccine programme from day one.",
          "Under UAE law, rabies vaccination is compulsory for all cats and dogs. Beyond that, core vaccines protect your pet from diseases that are genuinely common in this region and can be fatal without protection.",
        ],
      },
      {
        heading: 'Core Vaccines for Cats in Dubai',
        paragraphs: [
          "For cats in the UAE, the core vaccine is the PCH - which protects against three of the most serious infectious diseases in cats:",
          "Panleukopenia (feline distemper) - a highly contagious and often fatal viral disease that attacks the immune system and gut.",
          "Calicivirus - causes upper respiratory infections, mouth ulcers, and can lead to serious complications in kittens.",
          "Herpesvirus (viral rhinotracheitis) - the most common cause of cat 'flu in Dubai, spreading rapidly between cats and causing chronic lifelong flare-ups once infected.",
          "Rabies - required by UAE law for all cats. The certificate is essential for boarding, registration with Dubai Municipality, and any international travel.",
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
          "For dogs, the core vaccine is the DHPP - a combination vaccine protecting against four serious diseases:",
          "Distemper - a severe viral disease affecting the respiratory, gastrointestinal, and nervous systems.",
          "Hepatitis (Adenovirus) - causes liver disease and can be fatal in unvaccinated dogs.",
          "Parvovirus - one of the most dangerous diseases for dogs in Dubai, particularly for puppies. Parvo spreads through contact with infected faeces and can survive in the environment for months.",
          "Parainfluenza - a key contributor to kennel cough, which is common in Dubai due to the density of dogs in boarding and grooming facilities.",
          "Rabies - required by UAE law for all dogs. Without a current rabies certificate your dog cannot be registered with Dubai Municipality, boarded, or exported.",
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
          "Vaccine costs in Dubai vary between clinics. At Mike's Vet, every vaccine appointment includes a thorough wellness examination - we use it as an opportunity to check your pet's weight, teeth, heart, and overall condition, not just administer an injection.",
          "Contact us for current pricing or book online. We'll give you a clear breakdown before your appointment.",
        ],
      },
    ],
    faqs: [
      { q: 'What is the PCH vaccine for cats in Dubai?', a: "PCH stands for Panleukopenia, Calicivirus, and Herpesvirus - the three core infectious diseases we vaccinate cats against in the UAE. It is the standard feline core vaccine used at Mike's Vet and across veterinary clinics in Dubai." },
      { q: 'Is it compulsory to vaccinate cats and dogs in Dubai?', a: 'Rabies vaccination is required by UAE law for all cats and dogs. It is also required for boarding, international travel, and registration with Dubai Municipality. Core vaccines (PCH for cats, DHPP for dogs) are strongly recommended.' },
      { q: 'At what age should I start vaccinating my kitten or puppy?', a: 'Both kittens and puppies can start their vaccine programme from 6–8 weeks of age. The full primary course takes 8–10 weeks to complete. Starting early means your pet is protected sooner.' },
      { q: 'Can I get my cat or dog vaccinated at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet on Hessa Street offers full vaccination programmes for cats, kittens, dogs, and puppies. We are open 7 days a week, 9am–9:30pm. Book online or call +971 4 283 7744." },
    ],
  },
  {
    slug: 'cat-spaying-dubai-guide',
    author: {
      name: 'Dr. Debora Ferraris',
      role: 'DVM, Improve International - Small Animal Surgery',
      photo: '/vets/debora.jpg',
      profileHref: '/team/debora-ferraris',
    },
    relatedService: { name: 'Spay & Neuter at Mike\'s Vet', href: '/services/spay-neuter' },
    title: 'Cat Spaying in Dubai: What to Expect and How Much It Costs',
    date: '2025-08-28',
    readTime: '6 min read',
    excerpt: "Spaying your cat is one of the most important health decisions you'll make. This guide covers everything Dubai cat owners need to know - timing, the procedure, recovery, and what to look for in a vet.",
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
          "Dubai has a significant feral cat population, and many rescue organisations are stretched caring for kittens born to unspayed cats. Spaying your female cat is one of the most impactful things you can do - for her health and for the wider community.",
          "Beyond population control, spaying has direct health benefits for your cat: it eliminates the risk of uterine infections (pyometra), reduces the risk of mammary tumours significantly, and prevents the stress and discomfort of repeated heat cycles.",
        ],
      },
      {
        heading: 'When Should You Spay Your Cat in Dubai?',
        paragraphs: [
          "The standard recommendation is to spay cats at around 4–6 months of age, before their first heat cycle. Cats can come into heat as early as 4 months, so we advise booking your spay appointment before this point.",
          "Adult cats can also be safely spayed at any age, including older cats. There is no 'too late' when it comes to spaying - the benefits to health remain significant throughout a cat's life.",
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
          "Spay costs in Dubai vary depending on the clinic, the cat's size, and whether additional services like pre-surgical bloodwork are included. At Mike's Vet, we include a thorough pre-operative assessment and all standard monitoring - we don't cut corners to lower a headline price.",
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
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM, BVSc',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: 'Emergency Vet Care at Mike\'s Vet', href: '/services/emergency-care' },
    title: 'Emergency Vet Dubai: What to Do When Your Pet Has an Accident',
    date: '2025-09-02',
    readTime: '5 min read',
    excerpt: "When a pet emergency strikes, every second counts. This guide tells you exactly what to do - and what not to do - if your cat or dog has an accident or sudden illness in Dubai.",
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
          "• Inability to urinate (especially in male cats - this is a life-threatening emergency)",
          "• Prolonged vomiting or diarrhoea with blood",
          "If your pet is showing any of these signs, call a vet immediately. At Mike's Vet, you can reach us on +971 4 283 7744 or WhatsApp us.",
        ],
      },
      {
        heading: 'What to Do While Getting Your Pet to the Vet',
        paragraphs: [
          "Stay calm - your pet can sense your anxiety, and a calm owner means a calmer patient. Here's what to do while you prepare to leave for the clinic:",
          "**For injured pets:** Handle them carefully and minimise movement. A painful animal may bite even if they have never done so before - use a towel to wrap and support them. Do not attempt to splint fractures yourself.",
          "**For poisoning:** Do not induce vomiting unless specifically instructed to by a vet. Call us and tell us exactly what your pet ingested, including the product name and how much they may have eaten.",
          "**For cats:** Transport in a secure carrier. If injured, line the carrier with a soft towel and keep it flat in the car.",
          "**For dogs:** Keep them as still as possible. If they're too large to carry safely, call us - we can advise on how to move them safely.",
        ],
      },
      {
        heading: 'Common Pet Emergencies in Dubai',
        paragraphs: [
          "Dubai's environment presents some specific emergency risks for pets:",
          "**Heatstroke** - Temperatures in Dubai can exceed 45°C. Never leave a pet in a car, and watch for heavy panting, drooling, and collapse in the heat. Move your pet to a cool area and apply cool (not cold) water before driving to the vet.",
          "**Toxin ingestion** - Common household toxins include xylitol (in sugar-free products), grapes and raisins, certain plants, cleaning products, and human medications.",
          "**Road accidents** - With Dubai's high traffic density, road accidents are a significant risk for pets that escape outdoors.",
          "**Urinary blockage in male cats** - A blocked bladder is one of the most common life-threatening emergencies in cats. Signs include straining to urinate, crying out, and a hunched posture. This requires immediate treatment.",
        ],
      },
    ],
    faqs: [
      { q: 'Is there a 24-hour emergency vet in Dubai?', a: "Mike's Vet on Hessa Street is open until 9:30 PM every day. For late-night emergencies outside our hours, we recommend calling your nearest 24-hour veterinary facility. During our hours, call +971 4 283 7744." },
      { q: 'What should I do if my cat or dog is hit by a car in Dubai?', a: "Keep calm and handle carefully - injured animals may bite. Call Mike's Vet on +971 4 283 7744 immediately. Support the animal's body, keep them warm, and drive directly to us on Hessa Street." },
      { q: 'What is the emergency vet number in Dubai?', a: "Mike's Vet emergency number is +971 4 283 7744. You can also WhatsApp us. We are open 7 days, 9am–9:30pm on Hessa Street, Dubai." },
      { q: 'Is heatstroke an emergency for pets in Dubai?', a: "Yes. Heatstroke is a life-threatening emergency. Move your pet to a cool area, apply cool water to their body, and bring them to a vet immediately. Do not use ice-cold water - this can cause shock." },
    ],
  },
  {
    slug: 'pet-microchipping-dubai',
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: "Wellness Checks at Mike's Vet", href: '/services/wellness-checks' },
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
    metaDescription: "Is microchipping required for pets in Dubai? Yes - all dogs must be microchipped by law. Learn how it works, how much it costs, and how to register your pet. From Mike's Vet, Hessa Street.",
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
          "A microchip is a tiny electronic device - about the size of a grain of rice - inserted under the skin between your pet's shoulder blades using a sterile needle. The process takes seconds and causes minimal discomfort, similar to a standard vaccination.",
          "Each microchip has a unique 15-digit ISO number that is registered on a database alongside your contact details. If your pet is ever lost and taken to a vet or shelter, they can be scanned and reunited with you.",
          "The microchip itself is passive - it has no battery and never needs replacing. It only activates when scanned by a compatible reader.",
        ],
      },
      {
        heading: 'Microchipping and International Travel from Dubai',
        paragraphs: [
          "If you plan to travel internationally with your pet, microchipping is a prerequisite for obtaining a Pet Passport or UAE health certificate. Your pet must be chipped before any vaccinations can be officially recorded against the chip number - so it's important to do this early.",
          "Ensure your chip is ISO 15-digit standard (15 digits), as this is internationally recognised. Some older or US-standard chips (9 or 10 digits) may not be readable by overseas scanners.",
        ],
      },
      {
        heading: 'How Much Does Microchipping Cost in Dubai?',
        paragraphs: [
          "Microchipping is one of the most affordable procedures available at a vet clinic. At Mike's Vet, we offer microchipping for cats and dogs at a straightforward price - contact us for current rates. We can often fit microchipping into an existing appointment without the need for a separate visit.",
        ],
      },
    ],
    faqs: [
      { q: 'Is microchipping compulsory for dogs in Dubai?', a: 'Yes. Dubai Municipality requires all dogs to be microchipped and registered. Failure to do so can result in fines. Cats are not currently legally required to be chipped but it is strongly recommended.' },
      { q: 'Does microchipping hurt my cat or dog?', a: 'The procedure involves a quick injection under the skin - most pets barely react. It is no more uncomfortable than a standard vaccination and takes only a few seconds.' },
      { q: 'Can I get my pet microchipped at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet on Hessa Street offers microchipping for cats and dogs. We use ISO-standard chips and can assist with registration. Book online or call +971 4 283 7744." },
      { q: 'Does my pet need a microchip to travel from Dubai?', a: 'Yes. An ISO-standard microchip is required for any international pet travel from the UAE, and must be in place before vaccinations are officially recorded. Arrange this early if you plan to travel with your pet.' },
    ],
  },
  {
    slug: 'dental-care-cats-dogs-dubai',
    author: {
      name: 'Dr. Feth Mazari',
      role: 'DVM, GP Cert in Ultrasound',
      photo: '/vets/feth.jpg',
      profileHref: '/team/feth-mazari',
    },
    relatedService: { name: 'Dental Care at Mike\'s Vet', href: '/services/dental-care' },
    title: 'Dental Care for Cats and Dogs in Dubai: Why It Matters',
    date: '2025-09-09',
    readTime: '5 min read',
    excerpt: "Dental disease is the most common health problem in adult cats and dogs - and most owners don't realise there's a problem until it's advanced. Here's what Dubai pet owners need to know.",
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
          "By age 3, over 70% of cats and dogs show signs of periodontal disease. Unlike in humans, pets cannot tell us when their teeth hurt - many animals continue eating normally despite significant dental pain, which means problems are often missed until they're severe.",
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
          "Professional dental cleaning (scale and polish) for pets is performed under general anaesthetic. This is necessary because a full oral examination - probing for pockets, checking roots, taking dental X-rays - cannot be done safely or thoroughly in a conscious animal.",
          "At Mike's Vet, a dental procedure includes a pre-anaesthetic health assessment and blood panel, ultrasonic scaling to remove tartar above and below the gumline, polishing of all tooth surfaces, a full oral examination including dental X-rays where indicated, and extraction of any teeth that are beyond saving.",
          "Your pet goes home the same day, usually bright and comfortable. Most owners are amazed at the transformation - whiter teeth, fresher breath, and a happier animal.",
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
      { q: 'Does my pet need to be anaesthetised for a dental cleaning?', a: "Yes. Safe and thorough dental cleaning - including below the gumline where disease develops - requires general anaesthetic. So-called 'anaesthetic-free dentals' only clean visible surfaces and are not endorsed by veterinary dental associations." },
      { q: 'Can I get my pet\'s teeth cleaned at Mike\'s Vet in Dubai?', a: "Yes. Mike's Vet offers professional dental cleaning for cats and dogs on Hessa Street, Dubai. Book a dental assessment online or call +971 4 283 7744." },
    ],
  },
  {
    slug: 'dog-limping-back-leg-cruciate-dubai',
    author: {
      name: 'Dr. Debora Ferraris',
      role: 'DVM, Improve International - Small Animal Surgery',
      photo: '/vets/debora.jpg',
      profileHref: '/team/debora-ferraris',
    },
    relatedService: { name: 'Orthopaedic Surgery at Mike\'s Vet', href: '/services/orthopaedic-surgery' },
    title: 'My Dog Is Limping on Their Back Leg: Could It Be a Cruciate Ligament Tear?',
    date: '2026-09-15',
    readTime: '7 min read',
    excerpt: "Hind leg lameness is one of the most common reasons dogs come to us for orthopaedic assessment. The cranial cruciate ligament is involved in the majority of cases - and the sooner it is diagnosed, the better the outcome.",
    metaTitle: "Dog Limping on Back Leg: CCL Signs & Treatment Dubai | Mike's Vet",
    metaDescription: "Is your dog limping on their back leg in Dubai? It could be a cruciate ligament (CCL) tear. Learn the signs, the simple home sit test, how it is diagnosed, and what treatment involves. From Mike's Vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1562317305-58a17fe2c09e?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A chocolate Labrador retriever - one of the breeds most commonly affected by cruciate ligament tears',
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
          "For dogs under 10-15 kg with a partial tear, strict rest combined with physiotherapy and anti-inflammatory medication can sometimes allow sufficient scar tissue to form for the dog to regain acceptable function. This is not a cure - the joint remains arthritic - but in small dogs the outcome can be acceptable without surgery.",
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
    author: {
      name: 'Dr. Debora Ferraris',
      role: 'DVM, Improve International - Small Animal Surgery',
      photo: '/vets/debora.jpg',
      profileHref: '/team/debora-ferraris',
    },
    relatedService: { name: 'Orthopaedic Surgery at Mike\'s Vet', href: '/services/orthopaedic-surgery' },
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
          "TPLO does not cure arthritis that has already developed - it stops it from progressing rapidly. Dogs with established joint disease before surgery will still have some degree of arthritis in the long term, and weight management, appropriate exercise, and joint supplements can all help manage this.",
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
    author: {
      name: 'Dr. Debora Ferraris',
      role: 'DVM, Improve International - Small Animal Surgery',
      photo: '/vets/debora.jpg',
      profileHref: '/team/debora-ferraris',
    },
    relatedService: { name: 'Orthopaedic Surgery at Mike\'s Vet', href: '/services/orthopaedic-surgery' },
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
          "For older dogs with established arthritis, medical management - weight management, anti-inflammatories, physiotherapy, joint supplements - can provide good quality of life for many years. For dogs who are not responding adequately to medical management, total hip replacement is the definitive surgical solution, typically requiring referral to a specialist centre.",
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
  {
    slug: 'dog-nutrition-dubai',
    title: "Feeding Your Dog at Every Life Stage: What Actually Matters and What Doesn't",
    date: '2026-10-29',
    readTime: '8 min read',
    excerpt: "Most dogs are fed the same food from puppyhood to old age. What a 3-month-old Labrador needs and what a 9-year-old Labrador needs are very different things - and getting it wrong quietly accumulates over years.",
    metaTitle: "Dog Nutrition Dubai: Life Stage Feeding & Avoiding Fad Diets | Mike's Vet",
    metaDescription: "What to feed your dog at each life stage - puppy, adult, senior - and why fad diets like grain-free and raw aren't as straightforward as they sound. From Mike's Vet, Hessa Street, Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A dog eating from a bowl',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: "Consultations at Mike's Vet", href: '/services/consultations' },
    sections: [
      {
        heading: 'Life Stage Feeding Is Not a Marketing Gimmick',
        paragraphs: [
          "Most dog owners pick a food their dog eats, decide it works, and stick with it for years. That approach holds up to a point. But a dog's nutritional requirements change significantly between puppyhood, adulthood, and the senior years - in calorie density, protein levels, calcium-to-phosphorus ratios, and in how certain nutrients affect joints, kidneys, and cognitive function as the animal ages.",
          "This isn't pet food marketing. It's physiology. A large-breed puppy eating adult food risks developmental bone problems. A senior dog on high-phosphorus food with early kidney disease is accumulating damage quietly. A middle-aged dog still on high-calorie puppy food will be overweight within months.",
          "Getting it right isn't complicated. It mostly requires knowing what life stage your dog is in and choosing food formulated for it.",
        ],
      },
      {
        heading: 'Puppies: Getting the Foundation Right',
        paragraphs: [
          "Puppy food isn't adult food with a different label. It's higher in protein, higher in fat, higher in certain minerals, and calibrated to support rapid tissue development, immune system maturation, and bone growth.",
          "For small and medium breeds, the puppy period runs from weaning to roughly 12 months. For large breeds - Labradors, German Shepherds, Golden Retrievers - it extends to 15–18 months. For giant breeds like Great Danes, sometimes to 24 months. This matters because large-breed puppies are particularly sensitive to calcium and phosphorus levels during growth. A diet too high in these minerals relative to requirements can cause developmental orthopaedic disease - bone and joint problems that only become visible later.",
          "This is why large-breed puppy formulations exist and why they're worth using. They're calibrated specifically for that growth rate. A Great Dane puppy eating an all-breed puppy food, or worse, adult food, is not getting what its skeleton actually needs.",
          "Transition to adult food at the end of the puppy period. Not earlier because they seem grown, and not later because you haven't finished the bag.",
        ],
      },
      {
        heading: 'Adult Dogs: The Part Most People Get Wrong',
        paragraphs: [
          "Adult maintenance is the longest phase of a dog's life and the one where the most long-term damage accumulates quietly. The most common problem we see is overfeeding - not dramatically, but steadily.",
          "Food packaging gives feeding guides based on ideal body weight, not the weight your dog happens to be. If your dog is already overweight, feeding according to their current weight maintains the problem. Feeding guides are also estimates calibrated for an average dog. Activity level, metabolic rate, and whether your dog is desexed all affect actual needs.",
          "The easiest check is the body condition score. You should be able to feel your dog's ribs without pressing hard. Looking from above, there should be a visible waist tuck. Looking from the side, a slight abdominal tuck. Most dogs we see in Dubai are carrying more than they should - and excess weight affects joint health, cardiac function, and life expectancy more than most owners realise.",
          "Adult food should carry a complete and balanced statement for adult maintenance. That label means it has been formulated to meet nutritional standards. It doesn't tell you everything, but it tells you the basics are covered.",
        ],
      },
      {
        heading: 'When to Switch to Senior Food - and What It Actually Does',
        paragraphs: [
          "Senior food is not magic. It won't reverse ageing or prevent disease. But it can support an older dog's changing physiology in ways adult maintenance food doesn't.",
          "Most dogs benefit from transitioning to a senior formulation somewhere between 7–9 years, depending on size. The adjustments typically include lower calorie density, higher fibre content, antioxidants to support cognitive function, and adjusted mineral profiles.",
          "The kidney question is the most important one. Phosphorus restriction is recommended for dogs with confirmed kidney disease, but there's no good evidence that pre-emptively restricting phosphorus in a healthy senior dog is useful. The decision to use a kidney-support diet should follow bloodwork showing elevated renal markers - not just the dog turning 8.",
          "One adjustment we do recommend proactively for larger seniors: joint support. Foods containing glucosamine and omega-3 fatty acids from fish oil have reasonable evidence behind them for slowing cartilage deterioration. These can also be added as supplements if the food doesn't contain them.",
          "If your senior dog is losing weight, don't change the food without speaking to a vet first. Weight loss in older dogs is often a clinical sign - hypothyroidism, diabetes, kidney or liver disease, cancer - not a reason to switch proteins.",
        ],
      },
      {
        heading: 'Fad Diets: What the Evidence Actually Says',
        paragraphs: [
          "Grain-free diets: the enthusiasm has outrun the evidence. Grains in dog food are not inherently harmful. Dogs have evolved alongside humans for thousands of years and are well-adapted to digesting carbohydrates. More importantly, the FDA in the US identified a potential link between certain grain-free diets - particularly those using legumes, lentils, or potatoes as the primary carbohydrate source - and dilated cardiomyopathy, a serious heart condition. The investigation is ongoing, but it's enough that we don't routinely recommend grain-free unless there's a specific diagnosed reason for it.",
          "Raw diets: the appeal is understandable - you're feeding something that looks like food rather than processed pellets. But raw meat can carry Salmonella, Campylobacter, E. coli, and Listeria. While your dog's gut may handle these better than yours, they can shed the bacteria in their faeces, creating a real risk for people in the household - particularly children, the elderly, and immunocompromised individuals. Nutritional balance in home-prepared raw diets is also very difficult to achieve without professional formulation. Many raw-fed dogs we see are deficient in calcium, zinc, or vitamin D - deficiencies that don't show up until they cause real damage. If you want to feed raw, use a commercially prepared complete raw diet and discuss the hygiene protocol with your vet.",
          "Breed-specific foods: largely marketing. A Labrador does not need food specifically formulated for Labradors in any meaningful nutritional sense. The kibble shape is different. Save your money.",
        ],
      },
      {
        heading: 'Reading a Label: What to Actually Look At',
        paragraphs: [
          "Ingredient lists are organised by weight before cooking. Meat being the first ingredient sounds reassuring, but fresh meat is around 70% water - once cooked, the actual protein content may be lower than a named meat meal listed further down. Chicken meal or salmon meal means the water has already been removed, making it a denser protein source by weight.",
          "What to look for: a named protein source (chicken, beef, salmon - not just 'meat' or 'poultry by-product') in the first few ingredients. A complete and balanced statement compliant with AAFCO or FEDIAF standards. A manufacturer with a track record of feeding trials, not a boutique brand launched in the last few years with no published research.",
          "What not to stress about: whether the food contains grains, by-products, or preservatives. These are not inherently harmful. The overall nutritional profile and your dog's response to the food matters more than any single ingredient on the list.",
        ],
      },
    ],
    faqs: [
      { q: 'When should I switch my puppy to adult dog food?', a: "For small and medium breeds, at 12 months. For large breeds (Labrador, German Shepherd, Golden Retriever), at 15–18 months. For giant breeds (Great Dane, Saint Bernard), closer to 18–24 months. Transition gradually over 7–10 days by mixing increasing amounts of adult food into their puppy food." },
      { q: 'Is grain-free dog food safer or healthier?', a: "Not for most dogs. Grains are not harmful to dogs, and there is a potential link between certain grain-free diets high in legumes or lentils and dilated cardiomyopathy. Unless your dog has a confirmed grain allergy - which is rare - there is no strong nutritional reason to avoid grains in their food." },
      { q: 'Can I feed my dog a raw diet in Dubai?', a: "It is possible, but there are real considerations: hygiene risks from raw meat (Salmonella, Campylobacter), and significant difficulty achieving nutritional balance with home-prepared diets. If you want to feed raw, use a commercially prepared and complete raw diet, and discuss the hygiene protocol with your vet, particularly if there are children or immunocompromised people in the household." },
      { q: 'How do I know if my dog is a healthy weight?', a: "You should be able to feel their ribs easily without pressing. From above, there should be a visible waist behind the ribcage. From the side, a slight abdominal tuck. If you cannot feel ribs without pressing, your dog is likely overweight. Your vet can give you a body condition score and a target weight at any consultation." },
      { q: 'My dog has gone off their food. Should I switch to something else?', a: "Not immediately. Dogs sometimes refuse food for behavioural reasons and learn that holding out leads to something tastier. If your dog misses one or two meals but seems otherwise well, don't immediately switch. If they are genuinely unwell, off food for more than 24–48 hours, or losing weight, that is a vet visit, not a food experiment." },
    ],
    references: [
      "Case LP, Daristotle L, Hayek MG, Raasch MF. Canine and Feline Nutrition. 3rd ed. Mosby Elsevier; 2011.",
      "Freeman LM, Stern JA, Fries R, Adin DB, Rush JE. Diet-associated dilated cardiomyopathy in dogs: what do we know? Journal of the American Veterinary Medical Association. 2018;253(11):1390-1394.",
      "Hand MS, Thatcher CD, Remillard RL, Roudebush P, Novotny BJ. Small Animal Clinical Nutrition. 5th ed. Mark Morris Institute; 2010.",
      "Laflamme DP. Development and validation of a body condition score system for dogs. Canine Practice. 1997;22(4):10-15.",
    ],
  },
  {
    slug: 'cat-nutrition-dubai',
    title: "Cat Nutrition Through Every Life Stage: What to Feed, When to Change, and What to Ignore",
    date: '2026-10-29',
    readTime: '7 min read',
    excerpt: "Cats have specific nutritional requirements that change from kittenhood through to old age. Getting life stage feeding right matters more than the brand you choose - and some popular dietary trends do cats more harm than good.",
    metaTitle: "Cat Nutrition Dubai: Life Stage Feeding & What Vets Actually Recommend | Mike's Vet",
    metaDescription: "What to feed your cat at each life stage - kitten, adult, senior - and what the evidence says about raw diets, grain-free food, and popular trends. From Mike's Vet, Hessa Street, Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=1200&q=80&auto=format&fit=crop&crop=entropy',
      alt: 'A cat eating from a bowl',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Jana Khazaal',
      role: 'DVM',
      photo: '/vets/jana.jpg',
      profileHref: '/team/jana-khazaal',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    sections: [
      {
        heading: 'Cats Are Obligate Carnivores - and That Matters More Than You Think',
        paragraphs: [
          "Unlike dogs, cats cannot adapt their metabolism to a low-protein, plant-heavy diet. They are obligate carnivores - their bodies require nutrients that are only found in animal tissue, and they cannot synthesise several of them from plant precursors the way dogs and humans can.",
          "Taurine is the clearest example. Cats cannot produce enough taurine from other amino acids. If their diet is deficient - which happens in improperly formulated home-cooked or vegetarian diets - they develop dilated cardiomyopathy and retinal degeneration. Both are irreversible by the time they become obvious. Arachidonic acid, vitamin A, and niacin follow the same pattern: dietary requirements that cannot be met by plants.",
          "Commercial cat foods from reputable manufacturers account for all of this. Home-prepared diets very often do not. This is the foundational reason we are cautious about unformulated natural diets for cats - the margin for error is smaller than for almost any other species we see.",
        ],
      },
      {
        heading: 'Kittens: High Energy, Very Specific Requirements',
        paragraphs: [
          "From weaning to 12 months, kittens need roughly double the calories of an adult cat per kilogram of body weight, alongside higher protein, higher fat, and specific micronutrients - particularly DHA for brain and visual development, and calcium and phosphorus in the right ratios for bone growth. Kitten food is formulated for all of this. Adult cat food is not.",
          "Feeding a kitten on adult food for convenience can result in deficiencies that are not visible during kittenhood but compound over time. The reverse is also true: keeping an adult cat on kitten food for too long contributes to obesity, because kitten food is calorie-dense by design.",
          "If you adopted a kitten without knowing its birth date: kittens under 6 months still have all their deciduous teeth and are visibly growing fast. By 6–9 months they are approaching adult size but still filling out. Most cats can transition to adult food at 12 months. Cats desexed early may benefit from transitioning slightly sooner, as desexing reduces metabolic rate and caloric needs. Transition over 7–10 days by mixing increasing proportions of adult food into the kitten food.",
        ],
      },
      {
        heading: 'Adult Cats: Where Most of the Mistakes Happen',
        paragraphs: [
          "Adult maintenance covers roughly 1–10 years for most cats and is where gradual problems accumulate without obvious symptoms.",
          "The most consistent issue we see is overfeeding, particularly with dry food. Free-feeding dry kibble - leaving a bowl topped up all day - is the single biggest contributor to feline obesity in our clinic population. Cats, despite the popular image of being indifferent, are food-motivated and will eat beyond their energy needs when food is constantly available. Two measured meals a day is better. It also means you notice immediately when your cat stops eating, which is a significant clinical sign.",
          "The hydration question matters more in Dubai than in many other climates. Cats evolved in arid environments and have a low thirst drive - they are designed to get most of their water from prey. A mouse is around 70% water. Dry kibble is around 10%. In a city where air conditioning removes moisture from the air and cats spend most of the day indoors, chronic subclinical dehydration is common in cats on dry-only diets, and it quietly strains kidney function over years. We are not saying dry food is bad. Many cats do well on it. But if hydration is going to be borderline, it is more likely to cause problems in Dubai than in a cooler, more humid climate.",
        ],
      },
      {
        heading: 'Senior Cats (10 and Above): When Diet Becomes Clinical',
        paragraphs: [
          "Senior nutrition in cats is the area most commonly misunderstood, and where well-intentioned advice sometimes causes harm.",
          "The protein myth is the most important to address. For many years, senior cat food meant lower protein - the assumption being that kidneys would be spared by processing less of it. We now know this is wrong. Older cats actually need more protein than younger adults, because their ability to utilise dietary protein decreases with age. A senior cat on a low-protein food will lose muscle mass and body condition. The thin, bony elderly cat that many owners assume is 'just old' is often a cat that has been protein-deficient for years.",
          "The exception is confirmed chronic kidney disease (CKD). Cats with CKD do benefit from reduced protein and, more importantly, reduced phosphorus - but this should be prescribed after bloodwork confirms the diagnosis, not assumed because the cat is 11. Putting a healthy senior cat on a kidney diet is unnecessary and potentially counterproductive.",
          "Weight loss in a senior cat is a clinical sign, not an ageing inevitability. Hyperthyroidism is the most common cause - it produces weight loss despite a normal or increased appetite, and responds well to treatment. Diabetes, dental pain, gastrointestinal disease, and cancer are also on the list. If your cat over 10 is losing weight, book a vet appointment rather than switching foods and hoping for the best.",
        ],
      },
      {
        heading: 'Fad Diets and What Cat Food Marketing Wants You to Think',
        paragraphs: [
          "Raw feeding: the biological rationale is sound - cats evolved eating whole prey - but the practical execution is where problems arise. Raw meat in a domestic setting can carry Salmonella, Campylobacter, Listeria, and Toxoplasma gondii. Cats can shed these in their faeces, creating transmission risks for people in the household. Nutritionally balanced home-prepared raw diets are genuinely difficult to formulate - errors in supplementation cause problems that take months to become visible.",
          "Commercially prepared raw diets that carry a complete and balanced claim are a different proposition: they have been formulated to avoid nutritional imbalances, and many are high-pressure pasteurised to reduce pathogen load. If you want to feed raw, this is the route worth considering - and discuss hygiene protocols with your vet.",
          "Grain-free for cats: less of a concern than for dogs (the cardiac link identified in dogs has not been replicated in cats, who have very different carbohydrate metabolism). But grain-free is not inherently better either. Most carbohydrates in cat food serve as binders for the kibble. Whether those carbohydrates come from grains or legumes makes very little nutritional difference for a healthy cat.",
          "Novel protein diets - duck, kangaroo, venison - have genuine utility for cats with confirmed food allergies or intolerances. They are also heavily marketed to cats without any food sensitivity, which inflates cost without providing benefit. If your vet has not identified a food allergy, there is no nutritional reason to pay a premium for exotic proteins.",
        ],
      },
      {
        heading: 'Wet vs Dry: The Honest Answer',
        paragraphs: [
          "Wet food is generally better for adult cats than dry food, primarily for hydration reasons. It also tends to be higher in protein and lower in carbohydrates, which aligns better with feline metabolism. If you can feed wet food for at least one meal a day, that is a meaningful improvement over dry-only, even if it is not a full switch.",
          "Transitioning a dry-food cat to wet food requires patience. Start by placing a small amount of wet food alongside their usual dry rather than removing the dry abruptly. Some cats take weeks to accept wet food, and forcing the transition too quickly can cause food aversion - where the cat associates the new food with stress and refuses it long-term. If your cat has been on dry food for years and is healthy, don't force the change. A water fountain alongside their dry food is a lower-stress way to improve hydration.",
          "The cats that benefit most from switching to wet food are those showing early signs of kidney issues on bloodwork, cats with recurrent urinary tract problems, and overweight cats - since wet food tends to be more satiating per calorie than dry.",
        ],
      },
    ],
    faqs: [
      { q: 'When should I switch my kitten to adult cat food?', a: "At 12 months for most cats. Make the transition gradually over 7–10 days by mixing increasing amounts of adult food into their kitten food. If your kitten was desexed early, you can begin the transition slightly sooner, as desexing reduces metabolic rate and caloric needs." },
      { q: 'My senior cat is losing weight. Should I change their food?', a: "Start with a vet visit rather than a food change. Weight loss in cats over 10 is a clinical sign - hyperthyroidism, dental pain, kidney disease, and cancer are all common causes. Switching foods can mask the problem and delay diagnosis." },
      { q: 'Is raw feeding safe for cats in Dubai?', a: "Home-prepared raw diets carry real risks - pathogen exposure (Salmonella, Toxoplasma) and difficulty achieving nutritional balance. Commercially prepared and complete raw diets reduce both risks considerably. If you want to feed raw, choose a product with a complete and balanced claim and discuss hygiene protocols with your vet." },
      { q: 'How much should I feed my cat?', a: "This depends on their weight, age, and the specific food. Use the feeding guide on the packaging as a starting point, measure by weight using a kitchen scale rather than by eye, and aim for two meals a day rather than free-feeding. Your vet can confirm whether your cat is at a healthy weight at any consultation." },
      { q: 'My cat will only eat one brand of food and refuses everything else. Is that a problem?', a: "It is worth addressing gradually. If that food is ever unavailable, a sudden change will be very difficult. Try introducing a small amount of a second food alongside their usual food - the goal is not to replace it, just to build tolerance for variation. Cats that are ill sometimes stop eating, and a cat with a very narrow diet is harder to manage through illness or hospitalisation." },
    ],
    references: [
      "Case LP, Daristotle L, Hayek MG, Raasch MF. Canine and Feline Nutrition. 3rd ed. Mosby Elsevier; 2011.",
      "Hand MS, Thatcher CD, Remillard RL, Roudebush P, Novotny BJ. Small Animal Clinical Nutrition. 5th ed. Mark Morris Institute; 2010.",
      "Laflamme DP. Nutrition for aging cats and dogs and the importance of body condition. Veterinary Clinics of North America: Small Animal Practice. 2005;35(3):713-742.",
      "Zoran DL. The carnivore connection to nutrition in cats. Journal of the American Veterinary Medical Association. 2002;221(11):1559-1567.",
      "Elliott J, Rawlings JM, Markwell PJ, Barber PJ. Survival of cats with naturally occurring chronic renal failure: effect of dietary management. Journal of Small Animal Practice. 2000;41(6):235-242.",
    ],
  },
  {
    slug: 'puppy-vaccination-schedule-uae',
    title: 'Puppy Vaccination Schedule in the UAE: What Jabs, When, and Why It Matters',
    date: '2026-11-05',
    readTime: '7 min read',
    excerpt: "New puppy? The vaccine schedule in the UAE is slightly different from what you might know from home. Here's exactly what your puppy needs, when, and why getting the timing right matters more than most people realise.",
    metaTitle: "Puppy Vaccination Schedule UAE: What Jabs & When | Mike's Vet Dubai",
    metaDescription: "Complete puppy vaccination schedule for the UAE - core vaccines (DHPPi, rabies), kennel cough, timing of boosters, Dubai Municipality requirements, and costs. From Mike's Vet, Hessa Street.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop',
      alt: 'A yellow Labrador puppy at a veterinary clinic',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: 'Dog Vaccinations Dubai', href: '/services/dog-care' },
    sections: [
      {
        heading: 'Why the Schedule Matters More Than You Think',
        paragraphs: [
          "Puppies are born with some maternal antibodies from their mother, but these fade. The vaccine series is timed to provide protection as that maternal immunity wanes - not too early (when maternal antibodies would block the vaccine from working) and not too late (leaving a window of vulnerability).",
          "The tricky part is that we cannot know exactly when each individual puppy's maternal immunity drops. That is why puppies receive a series of injections spaced a few weeks apart, rather than a single shot. Each dose catches the puppy at the right moment.",
          "Until the series is complete, parvovirus in particular is a serious risk. It spreads in the environment, survives for months in Dubai's heat, and can be fatal in unvaccinated puppies. Keep your puppy away from unknown dogs and high-traffic areas until the full course is done.",
        ],
      },
      {
        heading: 'Core Vaccines: What Every UAE Puppy Needs',
        paragraphs: [
          "The DHPPi covers four diseases in one injection: Distemper, Hepatitis, Parvovirus, and Parainfluenza. All four are relevant in the UAE - parvovirus and distemper especially. This is given three times in the puppy series.",
          "Leptospirosis is a bacterial disease spread through contaminated water and rodent urine. Dogs in Dubai that visit parks, swim, or spend time outdoors are at real risk. We recommend it as part of the standard course, combined with the DHPPi injection.",
          "Rabies is a legal requirement in the UAE for all dogs and is essential for Dubai Municipality registration. It is given once at 16 weeks and then renewed annually (the UAE requires annual documentation regardless of the vaccine's label duration). Without a valid rabies certificate, your dog cannot be boarded, licensed, or exported.",
        ],
      },
      {
        heading: "Mike's Vet Puppy Vaccination Schedule",
        paragraphs: [
          "8 weeks: First DHPPi + Leptospirosis. This is the earliest we can start. If your puppy was vaccinated before coming to you (by a breeder or rescue), bring those records - we will work out where you are in the series.",
          "12 weeks: Second DHPPi + Leptospirosis. The gap between doses must be at least 3–4 weeks. Do not shorten it.",
          "16 weeks: Third DHPPi + Leptospirosis + Rabies. This is the first time we give rabies, as it must follow the DHPPi primary course. After this final dose, wait at least one week before allowing contact with unknown dogs at parks.",
          "12–15 months: First adult booster. Timing this correctly is important - it sets the rhythm for your dog's annual booster cycle for life. After this, annual boosters cover DHPPi, Leptospirosis, and Rabies.",
        ],
      },
      {
        heading: 'Kennel Cough (Bordetella)',
        paragraphs: [
          "Kennel cough is not in the core series but we strongly recommend it for any puppy that will go to puppy classes, dog parks, groomers, or boarding. It is required by virtually all reputable boarding facilities in Dubai.",
          "The Bordetella vaccine is given as a single intranasal dose and takes effect within a week. It can be given from 3–4 weeks before first exposure - so if you are planning puppy class or a boarding stay, book it in well ahead.",
          "Kennel cough is not dangerous for healthy adult dogs but causes significant discomfort: a harsh, persistent cough that lasts 2–3 weeks. In young puppies, it can be more serious.",
        ],
      },
      {
        heading: 'Dubai Municipality Registration',
        paragraphs: [
          "All dogs in Dubai must be registered with Dubai Municipality annually. The requirements are: a valid ISO-compliant microchip (must be in place before rabies vaccination), current rabies vaccination, and a health certificate from an approved clinic.",
          "Mike's Vet is an approved clinic and can complete registration documentation at your puppy's annual booster appointment. Bring your puppy's full vaccination record.",
          "Our Dog Starter Bundle (AED 550) covers the full primary course including all three DHPPi injections, Leptospirosis, and Rabies - with consultations included at each visit. It is the most cost-effective way to complete your puppy's primary series.",
        ],
      },
    ],
    faqs: [
      { q: 'When can my puppy go to the park in Dubai?', a: "One week after their third and final DHPPi injection, given at 16 weeks. Until then, keep your puppy away from unknown dogs and areas with high dog traffic - parvovirus can survive in the environment for months and is a serious risk for unvaccinated puppies." },
      { q: 'My puppy had vaccines before I got them. Do I need to start again?', a: "Not necessarily. Bring whatever documentation you have. If the previous vaccines were given correctly and the intervals were right, we can continue the series from where it left off. If the records are unclear or the timing was wrong, we may recommend restarting for certainty." },
      { q: 'How much does it cost to vaccinate a puppy in Dubai?', a: "Mike's Vet Dog Starter Bundle is AED 550 and covers the full puppy primary course - three DHPPi + Leptospirosis visits plus the Rabies injection, with consultations included. Individual vaccine appointments are also available." },
      { q: 'Does my puppy need a rabies vaccine in Dubai?', a: "Yes. Rabies vaccination is required by UAE law for all dogs and is essential for Dubai Municipality registration. It is given at 16 weeks, after the DHPPi primary course, and renewed annually." },
      { q: 'Is kennel cough vaccination compulsory in Dubai?', a: "It is not legally required, but it is required by most boarding facilities, grooming salons, and dog training schools in Dubai. We recommend it for any puppy that will interact with other dogs. It is a single intranasal dose and works within a week." },
      { q: 'How long after the last vaccine is my puppy fully protected?', a: "Allow at least one week after the final DHPPi injection at 16 weeks before exposing your puppy to unknown dogs at parks or social settings. Full immune response builds over that week. The 12–15 month booster is also important - it establishes long-term protection and starts the annual cycle." },
    ],
  },
  {
    slug: 'cat-dental-cleaning-dubai',
    title: "Cat Dental Cleaning in Dubai: What It Involves, What It Costs, and When Your Cat Actually Needs It",
    date: '2026-11-05',
    readTime: '6 min read',
    excerpt: "Dental disease is the most commonly under-treated condition we see in cats. By age three, most cats already have significant tartar. Here is what cat dental cleaning actually involves and when it cannot wait.",
    metaTitle: "Cat Dental Cleaning Dubai: Cost, Procedure & When You Need It | Mike's Vet",
    metaDescription: "Cat dental cleaning in Dubai requires general anaesthesia and is done very differently to human dentistry. Learn what's involved, the cost at Mike's Vet (AED 2,025 all-inclusive), and the signs your cat needs it.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=1200&q=80&auto=format&fit=crop',
      alt: 'A cat being examined by a vet',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Feth Mazari',
      role: 'DVM, GP Cert in Ultrasound',
      photo: '/vets/feth.jpg',
      profileHref: '/team/feth-mazari',
    },
    relatedService: { name: 'Cat Dental Care Dubai', href: '/services/cat-care' },
    sections: [
      {
        heading: "How Bad Is Your Cat's Mouth, Really?",
        paragraphs: [
          "Studies consistently show that 50–90% of cats over age three have some form of periodontal disease. Most owners have no idea, because cats hide pain very effectively - a cat with a painful mouth will often continue eating until the situation is severe.",
          "By the time you notice signs - bad breath, pawing at the mouth, dropping food, or reduced appetite - dental disease is usually well established. The absence of obvious symptoms is not the same as dental health.",
          "Annual dental checks at a vet appointment, including probing under the gum line, are the only reliable way to assess what is happening. You cannot assess your cat's dental health by looking in their mouth at home.",
        ],
      },
      {
        heading: 'Why Cats Need General Anaesthesia for Dental Work',
        paragraphs: [
          "This is the question we get most often. Human dentists work on conscious patients who can communicate, hold still, and cooperate. Cats cannot. Thorough dental cleaning requires the vet to work under and around the gum line, probe each tooth, take dental X-rays, and potentially extract teeth - none of which is possible in a cat that is awake.",
          "Anaesthesia-free dental cleaning (sometimes offered as a 'gentle dental' or 'awake dental') removes visible surface tartar from the crown but cannot treat the disease below the gum line where it actually progresses. It is not a substitute for a proper dental. Worse, it can create a false impression that the problem has been addressed when it has not.",
          "Modern anaesthetic protocols for healthy cats carry very low risk. A pre-anaesthetic blood panel, IV fluids during the procedure, careful monitoring, and appropriate pain management make cat dentals a routine and well-managed procedure at a well-equipped clinic.",
        ],
      },
      {
        heading: 'What Happens During a Cat Dental at Mike\'s Vet',
        paragraphs: [
          "Your cat comes in fasted from midnight. We start with a pre-anaesthetic blood panel to check kidney and liver function before giving any anaesthetic drugs - this is not optional and it is included in the bundle price.",
          "Once your cat is under anaesthesia, we take full-mouth dental X-rays. This is important: approximately 40% of significant dental disease in cats is found below the gum line and not visible to the eye. Without X-rays, we are treating only part of the problem.",
          "We then perform a full-mouth periodontal probing, ultrasonic scaling (above and below the gum line), and polishing. If extractions are needed - which is common, particularly for tooth resorption lesions - these are done at the same appointment. Your cat goes home with appropriate pain relief.",
        ],
      },
      {
        heading: "Signs Your Cat's Teeth Need Attention",
        paragraphs: [
          "Bad breath is the most reliable early warning sign. A healthy cat's mouth should not smell. Persistent bad breath indicates bacterial overgrowth from tartar and gum disease.",
          "Dropping food, chewing on one side only, or reduced interest in hard food suggests oral pain. Drooling, especially with blood-tinged saliva, pawing at the mouth, or chattering when eating are more advanced signs.",
          "Weight loss in an older cat sometimes traces back to dental pain making eating uncomfortable. This is frequently missed. If your senior cat has lost weight without an obvious explanation, their mouth is worth checking.",
        ],
      },
      {
        heading: 'Cost and How Often',
        paragraphs: [
          "Mike's Vet Cat Dental Bundle is AED 2,025 - all-inclusive. This covers the pre-anaesthetic blood panel, IV fluids, full anaesthesia, full-mouth dental X-rays, ultrasonic scaling, and polishing. Extractions, if needed, are quoted separately at the time of the procedure.",
          "Most cats with good dental hygiene need a professional clean every 1–2 years. Cats prone to tartar build-up, or those with crowded teeth (common in Persians and Exotics), may need annual cleans. After each dental, your vet will give you a realistic picture of how frequently your cat is likely to need future work.",
          "Home dental care between cleans - daily toothbrushing with cat-safe toothpaste or dental chews - can meaningfully slow tartar accumulation. We will show you how to do it at your next visit.",
        ],
      },
    ],
    faqs: [
      { q: 'How much does cat dental cleaning cost in Dubai?', a: "Mike's Vet Cat Dental Bundle is AED 2,025 all-inclusive - this covers the pre-anaesthetic blood panel, full anaesthesia, IV fluids, dental X-rays, ultrasonic scaling and polishing. Extractions, if needed, are quoted separately at the time of the dental." },
      { q: 'Is general anaesthesia safe for cats?', a: "Yes, with appropriate screening and monitoring. We require a pre-anaesthetic blood panel before every dental to check organ function. Modern protocols with IV fluids, temperature management, and continuous monitoring make cat dentals a routine, well-managed procedure. The risk of untreated dental disease over time is significantly greater than the risk of a well-managed anaesthetic." },
      { q: 'How do I know if my cat needs a dental?', a: "Bad breath is the clearest early sign. Other indicators include visible brown tartar on the back teeth, dropping food, reduced appetite, drooling, or pawing at the mouth. A vet check with a dental assessment will confirm whether a clean is needed and how urgently." },
      { q: 'Can I brush my cat\'s teeth at home?', a: "Yes, and it makes a real difference if done consistently - daily is ideal. Use a finger toothbrush or a soft cat toothbrush with cat-safe enzymatic toothpaste (never human toothpaste). Start slowly: let your cat lick the toothpaste first, then gradually introduce the brush. It is easier to establish with kittens, but adult cats can learn to tolerate it with patience." },
      { q: 'How often does a cat need a professional dental clean?', a: "Every 1–2 years for most cats. Some breeds (Persians, Exotics) with crowded teeth need annual cleans. Your vet will advise on the right frequency after your cat's first dental, based on how quickly tartar accumulates." },
    ],
  },
  {
    slug: 'pet-travel-certificate-uae',
    title: 'Pet Travel Certificate UAE: What You Actually Need and What Takes Longer Than You Expect',
    date: '2026-11-05',
    readTime: '7 min read',
    excerpt: "Leaving Dubai with your pet? The two things owners consistently underestimate are the rabies titer test timeline and the health certificate window. Miss either and you do not travel. Here is exactly what you need and when to start.",
    metaTitle: "Pet Travel Certificate UAE: Health Certs, Titer Tests & Timing | Mike's Vet Dubai",
    metaDescription: "Exporting your pet from the UAE? Learn about health certificates, rabies titer tests, microchip requirements, and the specific timelines for the UK, EU, and Australia. From Mike's Vet, Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop',
      alt: 'Two dogs on a walk, ready to travel',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: 'Pet Travel & Export Dubai', href: '/pricing#travel' },
    sections: [
      {
        heading: 'The Two Things That Catch People Out',
        paragraphs: [
          "Most owners planning to travel with a pet from Dubai focus on the health certificate. The health certificate matters, but it has a very short validity window - for the UK and EU, it must be issued within 10 days of travel. That part is straightforward.",
          "What catches people out is the rabies titer test. For the UK, EU, Australia, and several other destinations, a blood test must confirm your pet has sufficient rabies antibodies. That test cannot be done until at least 30 days after the last rabies vaccination. Results take 2–4 weeks to come back from the approved laboratory. And then there is a further waiting period before travel is permitted.",
          "The total timeline from starting the process to being cleared to travel is typically 3–6 months for the UK and EU, and 12 months or more for Australia. If you are planning to leave Dubai and take your pet with you, start this process long before you book the flight.",
        ],
      },
      {
        heading: 'The Universal Requirements: Microchip First',
        paragraphs: [
          "Every country requires an ISO-compliant microchip (15-digit, 134.2 kHz) as the unique identifier linking your pet to their health records. The microchip must be implanted before the rabies vaccination - if the chip comes after the vaccine, the vaccination may not count for export purposes.",
          "Check your pet's microchip number against their vaccination certificate. The number recorded in the cert must match what the scanner reads. Discrepancies cause problems at the border. If you are unsure, bring your pet in and we will scan them.",
          "Dubai Municipality registration and microchipping are required for all pets in the UAE regardless of travel plans, so if your pet is properly registered here, the microchip requirement is likely already met.",
        ],
      },
      {
        heading: 'The Rabies Titer Test: What It Is and Why It Takes So Long',
        paragraphs: [
          "The rabies titer test (officially: Rabies Neutralising Antibody Titre Test, or RNATT) is a blood test that checks whether your pet's immune system has responded adequately to their rabies vaccine - producing at least 0.5 IU/mL of antibodies, the threshold set by destination countries.",
          "The test cannot be performed until at least 30 days after the most recent rabies vaccination. The blood sample is then sent to an EU-approved laboratory (we use the Onderstepoort Veterinary Institute in South Africa or similar accredited labs). Results take 2–4 weeks to come back.",
          "For the EU, travel is permitted 3 months after the date the blood sample was taken - not the date you get the results. For the UK, the rules have specific current requirements you should check against APHA guidance at the time of travel. At Mike's Vet, we can walk you through exactly what applies to your specific destination.",
        ],
      },
      {
        heading: 'Country-Specific Requirements',
        paragraphs: [
          "UK and EU: microchip, current rabies vaccination, RNATT above 0.5 IU/mL with the required waiting period observed, official export health certificate (issued within 10 days of travel by an APHA-accredited or equivalent vet). We issue these at Mike's Vet.",
          "Australia and New Zealand: the most demanding destination from Dubai. Requirements include microchip, full vaccination history, RNATT, parasite treatments, mandatory quarantine (often 10–30 days), and an import permit obtained months in advance. Plan 12 months ahead minimum. We recommend engaging a specialist pet relocation company alongside your vet.",
          "Most other destinations (India, Canada, USA, GCC countries): typically require microchip, current rabies vaccination, and a health certificate issued close to travel. Destination-specific requirements vary. Always check the official government portal for your destination and confirm with us - requirements change.",
        ],
      },
      {
        heading: "What Mike's Vet Offers",
        paragraphs: [
          "APHA Rabies Titer Test: AED 1,575 - includes blood draw, processing, and submission to an approved laboratory. We will advise on timing relative to your pet's vaccination history.",
          "UK/GB Health Certificate: AED 289 - issued by our APHA-accredited vets within the required 10-day window. Bring all your pet's documentation to the appointment.",
          "We also issue health certificates for a wide range of other destinations. Book an appointment with enough lead time to review your documentation and confirm everything is in order before the certificate is due. Call or WhatsApp +971 4 283 7744.",
        ],
      },
    ],
    faqs: [
      { q: 'How far in advance do I need to start the pet export process from Dubai?', a: "For the UK or EU: at least 4–6 months. For Australia or New Zealand: 12 months minimum, ideally longer. For most other countries: 4–8 weeks is usually sufficient but confirm destination-specific requirements. The critical time sink is the rabies titer test timeline - do not leave it until the last month." },
      { q: 'What is a rabies titer test and do I need one?', a: "A RNATT is a blood test confirming your pet has sufficient rabies antibodies (0.5 IU/mL or above). It is required for travel to the UK, EU, Australia, New Zealand, and some other destinations. It must be done at least 30 days after vaccination, results take 2–4 weeks, and there is a further waiting period before travel. We arrange these at Mike's Vet." },
      { q: 'How much does a pet travel health certificate cost in Dubai?', a: "At Mike's Vet, a UK/GB Health Certificate is AED 289. APHA Rabies Titer Test is AED 1,575 (includes blood draw and laboratory submission). Health certificates for other destinations are also available - call or WhatsApp us for a quote based on your destination." },
      { q: 'Can Mike\'s Vet issue export health certificates?', a: "Yes. We are accredited to issue health certificates for the UK and a wide range of other destinations. Book an appointment at least 2 weeks before you need the certificate - not in the final days before travel. Bring all your pet's vaccination records, microchip documentation, and titer test results if required." },
      { q: 'What if my pet fails the rabies titer test?', a: "A failing result (below 0.5 IU/mL) means your pet needs a booster rabies vaccination, followed by a waiting period before the test can be repeated. This adds months to the process. It is relatively uncommon in pets with up-to-date vaccination histories, but it does happen - another reason to start early rather than close to your travel date." },
    ],
  },
  {
    slug: 'heart-disease-dogs-cats-dubai',
    title: 'Heart Disease in Dogs and Cats: Signs, Susceptible Breeds, and What an Echocardiogram Reveals',
    date: '2026-11-08',
    readTime: '9 min read',
    excerpt: "Cardiac disease is one of the most underdiagnosed conditions in pets - partly because the early signs are easy to miss, and partly because many owners don't know their breed is at risk. Here's what I see at the clinic, and what an echocardiogram can show long before a pet is visibly unwell.",
    metaTitle: "Heart Disease in Dogs and Cats Dubai: Signs, Breeds & Echocardiogram | Mike's Vet",
    metaDescription: "Which dog and cat breeds are most at risk of heart disease? What signs should you watch for? And what does an echocardiogram actually show? Written by Dr. Feth Mazari, GP Cert Ultrasound, at Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&q=80&auto=format&fit=crop',
      alt: 'Veterinarian listening to a dog\'s heart with a stethoscope',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Feth Mazari',
      role: 'DVM · GP Cert in Ultrasound',
      photo: '/vets/feth.jpg',
      profileHref: '/team/feth-mazari',
    },
    relatedService: { name: 'X-Ray & Ultrasound Dubai', href: '/services/x-ray-ultrasound' },
    sections: [
      {
        heading: 'More Common Than You Think',
        paragraphs: [
          "One in ten dogs will develop some form of heart disease during their lifetime. In Cavalier King Charles Spaniels, that number climbs to virtually 100% by age ten. In cats, hypertrophic cardiomyopathy is the most common cardiac disease overall - and it can strike apparently healthy animals at any age, sometimes with no warning signs at all until the animal is in crisis.",
          "As a vet with a postgraduate certificate in ultrasound, I perform echocardiograms regularly at Mike's Vet. What consistently surprises owners is how much we can find - and how much can be managed - when cardiac disease is caught early. This article covers what to watch for, which breeds carry the highest risk, how age factors in, and what an echocardiogram actually tells us.",
          "The most important message: by the time heart failure is obvious from the outside - laboured breathing, exercise intolerance, collapse - significant structural damage has often already occurred. Diagnosis before that point gives us far more treatment options and far more time.",
        ],
      },
      {
        heading: 'Signs to Watch For',
        paragraphs: [
          "Early signs are often subtle and easy to dismiss. A cough first thing in the morning. Slightly reduced tolerance on walks. A pet that seems a little quieter than usual. These can go unnoticed - or be attributed to 'just getting older' - for months.",
          "More specific signs to take seriously: a persistent cough (especially at night or after lying down), faster or harder breathing at rest, reduced stamina, weight loss without a clear cause, abdominal distension (fluid accumulation), fainting or brief episodes of collapse, weakness in the hindquarters.",
          "In cats, the picture is often even less obvious. Cats hide illness well. Some cats present in acute congestive heart failure - literally struggling to breathe - with no prior warning the owner could have detected. This is one reason why breed-based proactive screening matters so much in cats.",
          "One of the most reliable early findings is a heart murmur detected on a routine physical examination. If your vet hears a murmur at a check-up, the recommendation to investigate further is not over-caution - it is early intervention at exactly the right time.",
        ],
      },
      {
        heading: 'Dog Breeds Most at Risk',
        paragraphs: [
          "Cavalier King Charles Spaniel: the highest-risk dog breed by some margin. Myxomatous mitral valve disease (MMVD) affects virtually all Cavaliers to some degree by age ten [1]. ACVIM consensus guidelines now recommend annual cardiac auscultation from age one, with echocardiography when a murmur is detected. Many cardiologists recommend a baseline echo at three to four years even before a murmur develops, so there is a reference point when disease progresses.",
          "Boxer: prone to arrhythmogenic right ventricular cardiomyopathy (ARVC), also known as Boxer cardiomyopathy [4]. This causes ventricular arrhythmias that can lead to sudden collapse or death - sometimes as the first sign. A Boxer showing episodes of weakness, syncope, or unusual behaviour during exercise warrants prompt evaluation. Holter monitoring over 24 hours is the gold standard for arrhythmia assessment in this breed.",
          "Dobermann Pinscher: dilated cardiomyopathy (DCM) is so prevalent that screening is now recommended even in apparently healthy Dobermanns [2]. DCM in this breed can progress silently for months or years before clinical signs appear. By the time an owner notices anything wrong, the heart may already be significantly enlarged. Echo combined with Holter monitoring is the best screening approach.",
          "Great Dane and other giant breeds: also at significant DCM risk. The sheer size of the heart in giant breeds means that when function declines, it declines fast. Baseline echocardiography from around five to six years of age is advisable in Great Danes, Irish Wolfhounds, and Newfoundlands.",
          "Cocker Spaniel: English and American Cockers share the Cavalier's predisposition to mitral valve disease, though typically with a later age of onset. German Shepherd: DCM and subaortic stenosis (SAS) both occur at higher rates; SAS in particular can cause sudden death in young dogs if severe and undetected.",
          "Other breeds worth noting: Labrador Retriever, Portuguese Water Dog, and Dachshund (mitral valve disease). Smaller crossbreeds with Cavalier heritage - common in Dubai - also carry elevated MMVD risk.",
        ],
      },
      {
        heading: 'Cat Breeds Most at Risk',
        paragraphs: [
          "Maine Coon: hypertrophic cardiomyopathy (HCM) is the most common cardiac disease in cats overall, and Maine Coons carry a specific genetic mutation (MYBPC3-A31P) that dramatically increases their risk [6]. Genetic testing is available and recommended. Even Maine Coons that test negative for this mutation can still develop HCM through other mechanisms, so negative genetic test results do not eliminate the need for periodic echocardiographic screening.",
          "Ragdoll: another breed with a known HCM-associated mutation (MYBPC3-R820W) [5]. Screening echocardiography from two to three years of age is now considered best practice. Many responsible breeders screen their breeding stock - if you have a Ragdoll and don't know whether the parents were screened, it is worth arranging your own baseline.",
          "British Shorthair: HCM prevalence studies have consistently found British Shorthairs to be over-represented. The breed is popular in Dubai and the UAE generally, and many owners here are unaware of this risk. A routine check-up is not sufficient to rule out early HCM - only an echocardiogram can assess structural changes in the myocardium.",
          "Persian and Exotic Shorthair: moderate to high HCM risk. The brachycephalic conformation in these breeds can mask respiratory symptoms of cardiac disease, making careful echo assessment important - a Persian breathing harder than usual may have cardiac disease, respiratory disease, or both.",
          "Sphynx: HCM and restrictive cardiomyopathy (RCM) both occur at elevated rates in Sphynx compared to the general cat population. Mixed-breed cats: not immune. HCM occurs across all feline breeds and in domestic shorthairs [3]. Any cat with a murmur, respiratory signs, or a breed predisposition warrants cardiac evaluation regardless of pedigree.",
        ],
      },
      {
        heading: 'Age Matters: When Does Cardiac Disease Typically Develop?',
        paragraphs: [
          "In dogs, most acquired cardiac disease presents in middle age or later. Cavalier King Charles Spaniels typically develop their first murmur between three and five years, with disease progression through the later years. DCM in Dobermanns most commonly manifests between six and ten years. Giant breeds like Great Danes may show cardiac changes from five to six years onward.",
          "Congenital defects - pulmonic stenosis, aortic stenosis, patent ductus arteriosus (PDA), ventricular septal defects - are present from birth and are typically detected during a puppy's first examination. If a murmur is heard in a puppy under six months, it is usually investigated to determine whether it is a congenital defect or an innocent flow murmur that will resolve on its own.",
          "In cats, HCM is less age-predictable. It can occur in cats as young as one to two years, particularly in Maine Coons and Ragdolls. In mixed-breed cats it most commonly presents between six and twelve years. What makes feline cardiac disease particularly challenging is that many cats carry significant structural abnormalities for years without detectable clinical signs - then present in acute respiratory distress.",
          "The practical implication for at-risk breeds: establishing a baseline echocardiogram before the typical age of disease onset gives you a reference point for comparison as your pet ages. For Cavaliers, I recommend this by age three to four. For Maine Coons and Ragdolls, two to three years. For Dobermanns, annually from age five. For other at-risk breeds, discuss timing with your vet based on breed-specific guidance.",
        ],
      },
      {
        heading: 'What an Echocardiogram Actually Shows',
        paragraphs: [
          "An echocardiogram is an ultrasound of the heart. It allows us to look at the heart's structure and function in real time - watching it beat, measuring chamber sizes, assessing valve movement, and mapping blood flow with Doppler. It is non-invasive, requires no anaesthesia in most cases, and gives us information no physical examination or chest X-ray can provide.",
          "At Mike's Vet, we use the Mindray Vetus9 - one of the most advanced veterinary ultrasound platforms available. Its Zone Sonography Technology (ZST+) delivers exceptional image clarity even in animals with deep chests, and its Tissue Doppler Imaging (TDI) capability lets us detect subtle changes in myocardial function that wouldn't be visible on a standard echo. The dedicated cardiology suite includes pulsed and colour-flow Doppler, continuous-wave Doppler, and automated ejection fraction (Auto EF) measurement.",
          "Specifically, an echocardiogram allows us to assess: the size of each cardiac chamber and whether they are within normal limits; whether chamber walls are thickened as in HCM or thinned and dilated as in DCM; how well the heart muscle is contracting and relaxing; the presence and severity of valve abnormalities; whether blood is regurgitating through a leaking valve and how significant the leak is; the presence of pericardial effusion (fluid around the heart); and signs of elevated filling pressures that indicate impending or early heart failure.",
          "For a Cavalier with a known murmur, the echo tells us which ACVIM stage they are in - which directly determines whether and when to start medication. For a Ragdoll with no symptoms at all, it may reveal significant left atrial enlargement that changes management entirely. For a dog presenting with a cough, it distinguishes cardiac from respiratory causes - a distinction that determines the entire treatment approach.",
          "Most pets tolerate echocardiography well without sedation. The scan takes around 20 to 40 minutes. We clip a small area of fur on the chest, usually just below the elbow joint, to allow the probe to make good contact with the skin. We provide a written report with measurements, images, and - where disease is found - a staged management plan.",
        ],
      },
      {
        heading: 'Treatment and What It Can Achieve',
        paragraphs: [
          "The most significant advance in small animal cardiology over the past decade has been the evidence from the EPIC trial, which showed that starting pimobendan in dogs with pre-clinical MMVD - specifically those with cardiac enlargement but before symptoms appear - significantly delays the onset of heart failure [1]. This changed the standard of care for Cavaliers and other dogs with mitral valve disease. We now actively look for the echocardiographic thresholds that determine whether a dog qualifies for this intervention.",
          "For cats with HCM, management depends on the stage and presentation. Cats in congestive heart failure require diuretics; some with elevated risk of aortic thromboembolism receive antiplatelet therapy; additional agents may be used in specific cases [3]. The honest reality is that feline HCM management remains more challenging than canine MMVD - but early detection consistently improves outcomes by giving us more time and more options before a crisis develops.",
          "For DCM, management addresses both the myocardial dysfunction and any arrhythmias present. Holter monitoring gives us the full picture of arrhythmia burden over 24 hours - essential for Dobermanns and Boxers where arrhythmia management is a central part of care.",
          "Lifestyle adjustments complement medication in all cardiac cases: restricting intense exercise in certain conditions, managing weight, reducing dietary sodium where appropriate. The goal is always to extend the period before heart failure, reduce symptoms when they develop, and maintain quality of life. With early detection and appropriate management, many cardiac patients live comfortably for years after diagnosis.",
        ],
      },
      {
        heading: "Cardiac Assessment at Mike's Vet",
        paragraphs: [
          "If you have a Cavalier King Charles Spaniel, Maine Coon, Ragdoll, Dobermann, Boxer, or British Shorthair - or any breed mentioned in this article - I would encourage you not to wait for symptoms. Book a cardiac check and get a baseline.",
          "Cardiac evaluation at Mike's Vet begins with a thorough auscultation. If we detect a murmur, or if you want a proactive baseline for an at-risk breed, the next step is an echocardiogram on the same day in most cases. We use our Mindray Vetus9 platform, provide a written report with measurements and images, and walk you through what we found and what it means.",
          "Pre-anaesthetic cardiac screening is also advisable before surgery in any at-risk breed or any animal over eight years - we routinely incorporate cardiac assessment into our pre-operative workup for older patients. For Dobermanns and Boxers where arrhythmia evaluation is part of the picture, we can arrange Holter monitoring.",
          "Cardiac workups are available at our Hessa Street clinic, 7 days a week. Book via WhatsApp at +971 4 283 7744 or online at the link below.",
        ],
      },
    ],
    faqs: [
      { q: 'How do I know if my dog or cat has a heart problem?', a: "Early signs are often subtle: a persistent cough (especially at night), reduced exercise tolerance, faster breathing at rest, or weight loss without an obvious cause. In cats, signs can be even less obvious - some cats present in acute respiratory distress with no prior warning. If your vet hears a heart murmur on a routine examination, that is the most reliable early finding. For at-risk breeds, proactive echocardiographic screening is recommended even in apparently healthy animals." },
      { q: 'What is HCM in cats and which breeds are affected?', a: "Hypertrophic cardiomyopathy (HCM) is the most common cardiac disease in cats. It causes the walls of the heart muscle to thicken, reducing the heart's ability to fill and pump properly. Maine Coons and Ragdolls carry known genetic mutations that increase their risk significantly. British Shorthairs, Persians, and Sphynx are also over-represented. It can occur in mixed-breed cats too, particularly in middle age and older. Early diagnosis with echocardiography allows for monitoring and timely intervention." },
      { q: 'My vet heard a heart murmur in my dog - what happens next?', a: "A murmur is a sound caused by turbulent blood flow through the heart. It is graded on a scale of 1 to 6. A low-grade murmur in an older Cavalier may represent early mitral valve disease; the same murmur in a young puppy may be an innocent flow murmur that resolves on its own. The next step is usually an echocardiogram to assess the underlying cause, the severity of any valve abnormality, whether the heart chambers are enlarged, and what ACVIM stage the disease is at. That staging determines whether and when medication is appropriate." },
      { q: 'How much does a pet echocardiogram cost in Dubai?', a: "At Mike's Vet, a full abdominal ultrasound is AED 886 and a chest ultrasound is AED 561. Cardiac echocardiography pricing is discussed at the time of booking depending on the scope of assessment needed. Call or WhatsApp +971 4 283 7744 for a quote. We provide a written report with all measurements and images." },
      { q: 'Is echocardiography safe for my pet? Do they need to be sedated?', a: "Echocardiography is completely safe - it uses the same ultrasound technology as human cardiac imaging. The vast majority of dogs and cats tolerate the procedure well without any sedation. We clip a small area of fur on the chest to allow the probe to make good skin contact. The scan takes 20 to 40 minutes depending on what we are assessing." },
      { q: 'Can heart disease in pets be cured?', a: "Most cardiac diseases in pets are managed rather than cured. Mitral valve disease progresses over time, but medications like pimobendan can significantly delay the onset of heart failure when started at the right stage. HCM in cats is managed with medications that reduce symptoms and risk of complications. Congenital defects like patent ductus arteriosus (PDA) can often be corrected surgically. The goal of management is always to extend comfortable, good-quality life - many cardiac patients do very well for years after diagnosis." },
    ],
    references: [
      "Keene BW, Atkins CE, Bonagura JD, et al. ACVIM consensus guidelines for the diagnosis and treatment of myxomatous mitral valve disease in dogs. J Vet Intern Med. 2019;33(3):1127–1140.",
      "Keene BW, Atkins CE, Bonagura JD, et al. ACVIM consensus guidelines for the diagnosis and treatment of dilated cardiomyopathy in dogs. J Vet Intern Med. 2019;33(3):1141–1163.",
      "Luis Fuentes V, Abbott J, Chetboul V, et al. ACVIM consensus statement guidelines for the classification, diagnosis, and management of cardiomyopathies in cats. J Vet Intern Med. 2020;34(3):1062–1077.",
      "Meurs KM, Spier AW, Miller MW, Lehmkuhl LB, Towbin JA. Familial ventricular arrhythmias in Boxers. J Vet Intern Med. 2001;15(5):437–439.",
      "Meurs KM, Norgard MM, Ederer MM, Hendrix SM, Kittleson MD. A substitution mutation in the myosin binding protein C gene in Ragdoll hypertrophic cardiomyopathy. Genomics. 2007;90(2):261–264.",
      "Meurs KM, Sanchez X, David RM, et al. A cardiac myosin binding protein C mutation in the Maine Coon cat with familial hypertrophic cardiomyopathy. Hum Mol Genet. 2005;14(23):3587–3593.",
    ],
  },
  {
    slug: 'walking-dog-dubai-summer',
    title: "Walking Your Dog in Dubai Summer: Heat, Hot Pavements, and What Can Actually Kill Them",
    date: '2026-11-15',
    readTime: '6 min read',
    excerpt: "Dubai's summer pavement can reach 70°C. That will burn through paw pads in under a minute. Here's what the heat actually does to dogs, which breeds are most at risk, and the rules we give every dog owner for May through October.",
    metaTitle: "Walking Dogs in Dubai Summer: Heat Safety Guide | Mike's Vet",
    metaDescription: "Dubai summer heat can kill dogs quickly. Learn the pavement test, safe walk times, heat stroke signs, and which breeds need extra care. Advice from Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80&auto=format&fit=crop',
      alt: 'A dog being walked outdoors in warm weather',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM, BVSc',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: 'Dog Vet Clinic Dubai', href: '/services/dog-care' },
    sections: [
      {
        heading: "What Dubai Summer Actually Does to a Dog",
        paragraphs: [
          "Dogs regulate body temperature almost entirely through panting. Unlike people, they cannot sweat through their skin in any meaningful way. In a 42°C environment with high humidity - standard for Dubai between June and September - a dog loses the ability to cool itself efficiently within minutes of vigorous exercise.",
          "A dog's core temperature in serious heat stroke can reach 41–42°C. At that point, proteins in the blood begin to denature, the brain swells, the kidneys shut down, and the clotting system fails. Death or permanent neurological damage can follow within an hour of collapse if treatment is not immediate.",
          "This is not a rare event in Dubai. We treat heat stroke cases every summer. Most of them happen to dogs who seemed fine ten minutes before they collapsed.",
        ],
      },
      {
        heading: "The Pavement Problem",
        paragraphs: [
          "Air temperature gives you an incomplete picture of the risk. The ground is what matters for paw pads, and asphalt absorbs and radiates heat far beyond air temperature. In Dubai, pavement surface temperatures of 60–70°C have been recorded during peak afternoon hours. At those temperatures, paw pad burns can occur within 60 seconds of contact.",
          "The seven-second test: place the back of your hand firmly on the pavement. If you cannot hold it there for seven seconds without discomfort, it is too hot for your dog's feet. This is not approximate - it is a reasonable proxy for paw pad tolerance.",
          "Paw pad burns are not always obvious immediately. The dog may not limp during the walk, but will show soreness and redness in the hours that follow. In severe cases, the pads blister and the outer layer separates. Treatment requires wound dressings, antibiotics, pain relief, and several weeks of reduced activity.",
          "Grass provides meaningful protection - if your walking route is entirely on grass, the risk is substantially lower than on asphalt or concrete. Paved areas, particularly south-facing surfaces and parking areas, are the highest-risk surfaces.",
        ],
      },
      {
        heading: "When to Walk",
        paragraphs: [
          "During the Dubai summer months (May through September), the only safe windows are before 7:30am and after 8:30pm. Even those times carry risk on days when overnight temperatures stay above 30°C. If in doubt, shorten the walk.",
          "Early morning is better than late evening because pavement has had the entire night to cool. Evening pavement retains heat accumulated through the day and may still be dangerously warm at 9pm. Check it with your hand before you let your dog step on it.",
          "Duration matters as much as timing. A 15-minute walk at 6:30am is far safer than a 45-minute walk at the same time. Work within your dog's tolerance, watch them continuously, and do not push through signs of fatigue.",
          "On days when the overnight low stays above 32°C, reconsider walking entirely. Indoor exercise - training sessions, fetch down a hallway, mental enrichment with puzzle feeders - can substitute for outdoor activity without putting your dog at risk.",
        ],
      },
      {
        heading: "Breeds That Need Extra Care",
        paragraphs: [
          "Brachycephalic (flat-faced) breeds are significantly more vulnerable to heat. Bulldogs, Pugs, French Bulldogs, Shih Tzus, and Boxers have an anatomically compromised upper airway that limits their ability to pant efficiently. The same cooling mechanism that is already marginal in a normal dog is further restricted in these breeds. During Dubai summer, brachycephalic dogs should not be exercised outdoors at all between sunrise and sunset unless the ambient temperature is below 25°C.",
          "Heavily coated breeds - Huskies, Malamutes, Chow Chows, Samoyeds - are also high-risk. Despite the insulating properties of a double coat in cold climates, these breeds can overheat rapidly and do not thermoregulate well in sustained heat. Their dense undercoat traps heat rather than wicks it away.",
          "Large breeds and overweight dogs are additionally at risk because of their greater body mass and the increased muscular effort required for movement. Obese dogs should be considered high-risk regardless of breed.",
          "Puppies and older dogs have less efficient thermoregulation than healthy adults. Apply extra caution at both extremes of age.",
        ],
      },
      {
        heading: "Water and Hydration",
        paragraphs: [
          "Carry water on every walk from April through October. Not as a precaution - as a requirement. A dog's fluid needs increase dramatically in heat, and offering water mid-walk can help them manage temperature before they begin to show signs of distress.",
          "Collapsible silicone bowls are practical and easily clipped to a lead or bag. Offer water every 10–15 minutes during activity in warm weather, not just at the end of the walk.",
          "Do not give a heavily panting dog a large amount of ice-cold water rapidly. Offer cool (not freezing) water in moderate amounts and let the dog drink at their own pace.",
        ],
      },
      {
        heading: "Signs of Heat Stroke - Act Immediately",
        paragraphs: [
          "Heavy panting that does not stop, excessive drooling, bright red gums, staggering or weakness, vomiting, disorientation, collapse. These are the warning signs and progression of heat stroke. Any of these signs during or after outdoor activity in heat should be treated as an emergency.",
          "Move the dog to a cool, shaded or air-conditioned environment immediately. Apply cool (not cold) water to the neck, armpits, groin, and paw pads - areas with surface blood vessels. Use a wet cloth rather than ice packs, which can cause peripheral vasoconstriction and trap heat in the core. Fan the dog to accelerate evaporative cooling.",
          "Do not delay veterinary care by attempting to cool the dog completely at home. Cool them while in transit and get to a vet as soon as possible. IV fluids, supportive care for organ damage, and monitoring are required for moderate to severe cases. Heat stroke kills, but dogs who reach a vet quickly can make full recoveries.",
        ],
      },
    ],
    faqs: [
      { q: "What time is safe to walk a dog in Dubai summer?", a: "Before 7:30am and after 8:30pm are the safest windows. Morning is preferable to evening because pavement has had the full night to cool. During June to September, even those times carry risk on very hot nights. Always check the pavement with the back of your hand first - if you cannot hold it there for seven seconds, it is too hot for your dog." },
      { q: "Is it safe to walk a French Bulldog or Pug in Dubai summer?", a: "French Bulldogs, Pugs, Bulldogs, and other brachycephalic breeds should not be exercised outdoors during summer daylight hours. Their restricted airway limits their ability to cool through panting, making them far more vulnerable to heat stroke than other breeds. Keep outdoor activity to a strict minimum and always in the coolest part of the day." },
      { q: "My dog seemed fine on the walk but is limping now. Could it be from the pavement?", a: "Yes. Paw pad burns from hot pavement are not always immediately painful - the dog may walk normally during the incident and show soreness hours later. Check the pads for redness, blistering, or areas where the skin looks worn or raw. If the pads are damaged, see a vet: burns need wound care, are painful, and secondary infection can develop." },
      { q: "How do I cool a dog down safely after a walk in Dubai?", a: "Move them to a cool, air-conditioned room, offer cool (not ice-cold) water in small amounts, and apply a damp cloth to the neck, groin, armpits, and paw pads. A fan accelerates cooling. If your dog is panting excessively and cannot settle, or shows any signs of disorientation or vomiting, treat it as an emergency and go to a vet." },
      { q: "Can dog booties protect paw pads in Dubai summer?", a: "Booties provide real protection against hot pavement if your dog will tolerate them. They need to be introduced gradually - most dogs need several weeks of training to walk comfortably in them. They do not eliminate the systemic heat risk but do protect the pads directly. If your dog finds them too distressing, avoid hot pavement rather than forcing the issue." },
    ],
    references: [
      "Bruchim Y, et al. Heat stroke in dogs: A retrospective study of 54 cases (1999–2004) and analysis of risk factors for death. Journal of Veterinary Internal Medicine. 2006;20(1):38–46.",
      "Bruchim Y. Pathophysiology and management of heat stroke in dogs. The Veterinary Journal. 2017;222:43–47.",
      "Johnson SI, et al. Heatstroke in small animal medicine: a clinical practice review. Journal of Veterinary Emergency and Critical Care. 2006;16(2):112–119.",
    ],
  },
  {
    slug: 'ringworm-dogs-dubai',
    title: "Ringworm in Dogs: Signs, Treatment, and What Dubai Owners Need to Know",
    date: '2026-11-15',
    readTime: '5 min read',
    excerpt: "Ringworm in dogs is less common than in cats but just as contagious - to other animals and to people. Here's how to recognise it, how treatment works, and why the UAE climate matters.",
    metaTitle: "Ringworm in Dogs Dubai: Signs, Treatment & Zoonotic Risk | Mike's Vet",
    metaDescription: "Ringworm in dogs is a fungal skin infection that spreads between pets and to people. Learn the signs, diagnosis, treatment, and how to handle multi-pet households in Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?w=1200&q=80&auto=format&fit=crop',
      alt: 'A dog being examined at a veterinary clinic',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM, BVSc',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: 'Dog Vet Clinic Dubai', href: '/services/dog-care' },
    sections: [
      {
        heading: "What is Ringworm?",
        paragraphs: [
          "Ringworm is a fungal infection of the skin and hair - not a parasitic worm, despite the name. The technical term is dermatophytosis. In dogs, the most common causative organism is Microsporum canis, the same fungus responsible for the majority of feline cases. Microsporum gypseum (a soil organism) and Trichophyton mentagrophytes are less frequently identified but occur in dogs exposed to contaminated soil or small rodents respectively.",
          "Dermatophyte fungi infect dead keratinised tissue - hair shafts, the surface layer of skin, and claws. They do not invade living tissue, but the immune response to fungal presence causes the skin inflammation and hair loss that characterise the condition.",
          "Ringworm is less common in dogs than in cats in clinical practice, but it does occur - particularly in young puppies, immunosuppressed animals, and dogs recently stressed by kennelling or rescue.",
        ],
      },
      {
        heading: "Signs in Dogs",
        paragraphs: [
          "The classic presentation is one or more roughly circular patches of hair loss with broken hairs at the margins, fine grey scaling, and a reddened or mildly inflamed skin surface. Lesions most commonly appear on the face, around the muzzle and eyes, the ears, the forelimbs, and the paws. Claw infection (onychomycosis) can also occur, causing abnormal, brittle, or distorted nail growth.",
          "Unlike cats, dogs with ringworm more reliably show visible lesions - asymptomatic carriage is less common in dogs than in long-haired cats. However, mild or early cases can be subtle, particularly on dogs with thick or dark coats where hair loss is not immediately obvious.",
          "Itching (pruritus) is variable. Some dogs scratch or rub affected areas; others do not appear bothered. The differential diagnosis for patchy hair loss in dogs includes bacterial folliculitis, demodicosis (Demodex mites), allergy, and hormonal conditions - a vet examination and diagnostic testing are needed to confirm ringworm rather than assume it.",
        ],
      },
      {
        heading: "Diagnosis",
        paragraphs: [
          "Wood's lamp (UV) examination is a quick screening tool. Around 50% of Microsporum canis strains fluoresce an apple-green colour under UV light. It is useful for a rapid initial assessment but cannot rule the condition in or out - a negative result does not mean ringworm is absent.",
          "Fungal culture is the diagnostic gold standard. Hair samples plucked from the edges of lesions are cultured on dermatophyte test medium (DTM). A positive culture is confirmed by colour change of the medium and microscopic examination of the fungal colony. Culture takes 10 to 14 days for a reliable result.",
          "Trichogram (microscopic examination of plucked hairs) can identify fungal arthrospores more rapidly but is less sensitive. PCR testing offers fast and sensitive detection and is increasingly available in veterinary diagnostic laboratories. For claw infections, samples must include clippings from several claws, not just the most obviously affected.",
        ],
      },
      {
        heading: "Zoonotic Risk",
        paragraphs: [
          "Microsporum canis is highly contagious to people. Infected dogs are a significant source of human ringworm, particularly for children and adults who handle them frequently. Human infection presents as one or more itchy, red, ring-shaped lesions on exposed skin areas. The expanding ring and central clearing that give the condition its common name are often more reliably visible in human infections than in animals.",
          "Immunocompromised individuals, elderly people, and young children are at highest risk of persistent or more extensive infection. If a dog in the household is confirmed or suspected to have ringworm, all household members should be informed. High-risk individuals should minimise contact with the animal until treatment is established and confirmed to be working.",
          "Wear disposable gloves when applying topical treatments. Wash hands thoroughly after any contact with an infected dog or their bedding. Notify your doctor if you or another household member develops any skin lesions - human ringworm from pets is very treatable but requires early antifungal treatment.",
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Treatment in dogs requires a combination of topical antifungal therapy, systemic antifungal medication (in most cases), and environmental decontamination. Treating only one element is a common cause of relapse.",
          "Topical therapy: twice-weekly whole-body application of miconazole/chlorhexidine shampoo or lime sulphur dip (diluted 1:16) is the most evidence-based topical approach. Spot treatment of only visible lesions is not adequate - the entire haircoat must be treated because fungal spores are present on hairs that appear unaffected.",
          "Systemic therapy: oral itraconazole at 5mg/kg every other day is the first-line systemic treatment. Terbinafine is an alternative. Treatment duration is a minimum of 6 to 8 weeks and continues until two consecutive negative fungal cultures taken 2 to 4 weeks apart confirm clearance. Stopping treatment when the skin looks normal without culture confirmation is a common cause of recurrence.",
          "Environmental decontamination: vacuum daily during treatment, disposing of the vacuum bag after each use. Wash the dog's bedding, soft toys, and any fabric items they contact at high temperature. Wipe hard surfaces with diluted bleach (1:10 ratio). Ringworm spores survive in the environment for months - without treating the environment, the dog will reinfect.",
        ],
      },
      {
        heading: "Ringworm in Dubai's Climate",
        paragraphs: [
          "Dubai's warm temperatures and humid summer months allow ringworm spores to survive on environmental surfaces longer than in cooler climates. This makes environmental decontamination more important and re-exposure after apparent clearance a genuine risk.",
          "Rescue dogs are at elevated risk. The stress of rehoming, shared kennelling environments, and the prevalence of M. canis in community dog populations in the UAE all contribute. If you have recently adopted a dog, particularly from a shelter environment, ask your vet about a ringworm screen at the initial health check.",
        ],
      },
    ],
    faqs: [
      { q: "Is ringworm in dogs contagious to other dogs?", a: "Yes. Ringworm spreads through direct contact with an infected animal or through contact with contaminated surfaces, bedding, or grooming equipment. In multi-dog households, all dogs should be examined and tested if one is confirmed positive." },
      { q: "How long does ringworm take to clear up in dogs?", a: "Treatment typically takes 6 to 12 weeks. Response varies by the extent of infection, the dog's immune status, and how consistently treatment is applied. Treatment must continue until two consecutive negative fungal cultures taken 2 to 4 weeks apart - not until the lesions look better visually, as the fungus can still be present without obvious signs." },
      { q: "My dog has circular patches of hair loss. Does that mean it has ringworm?", a: "Circular hair loss is suggestive but not diagnostic. The differential diagnoses include bacterial folliculitis, Demodex mange, allergy, and hormonal conditions such as hypothyroidism. Your vet will perform a Wood's lamp examination and likely take fungal culture samples to confirm or exclude ringworm. Don't treat for ringworm without a diagnosis - the treatment is very different depending on the cause." },
      { q: "Can I use human antifungal cream on my dog for ringworm?", a: "Human topical antifungal products (miconazole, clotrimazole) can be used on dogs but should be used as directed by your vet as part of a full treatment plan. Topical treatment alone is insufficient for most cases - systemic medication is usually needed. Using topical treatment while missing systemic therapy or environmental decontamination is a common cause of treatment failure." },
    ],
    references: [
      "Moriello KA, et al. Diagnosis and treatment of dermatophytosis in dogs and cats: Clinical Consensus Guidelines of the World Association for Veterinary Dermatology. Veterinary Dermatology. 2017;28(3):266-e68.",
      "Moriello KA. Treatment of dermatophytosis in dogs and cats: review of published studies. Veterinary Dermatology. 2004;15(2):99–107.",
    ],
  },
  {
    slug: 'toxic-plants-foods-cats',
    title: "Toxic Plants and Foods for Cats: What's in Your Dubai Home That Could Kill Your Cat",
    date: '2026-11-15',
    readTime: '7 min read',
    excerpt: "Lilies will kill a cat. All parts, any amount, that is not an exaggeration. This post covers the genuinely dangerous plants and foods in Dubai homes - not a padded-out list of everything that causes mild nausea.",
    metaTitle: "Toxic Plants and Foods for Cats Dubai | Mike's Vet Emergency Guide",
    metaDescription: "A practical guide to genuinely toxic plants and foods for cats in Dubai - including lilies, onions, grapes, common houseplants, essential oils, and what to do in an emergency.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80&auto=format&fit=crop',
      alt: 'A cat near indoor plants',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Feth Mazari',
      role: 'DVM, GP Cert in Ultrasound',
      photo: '/vets/feth.jpg',
      profileHref: '/team/feth-mazari',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    sections: [
      {
        heading: "The Most Important Thing to Know: Lilies Will Kill Your Cat",
        paragraphs: [
          "True lilies - Lilium species including Easter lily, tiger lily, Asiatic lily, and daylily - are acutely nephrotoxic to cats. All parts of the plant are toxic: the pollen, petals, leaves, stem, and the water in a vase of cut lilies. Even small exposures - a cat brushing past a flower and licking pollen from their fur - can cause acute kidney failure.",
          "There is no antidote for lily toxicosis in cats. The only effective intervention is decontamination (inducing vomiting, activated charcoal) and aggressive IV fluid diuresis started within 6 hours of exposure. After that window, kidney failure progresses and the prognosis becomes poor. Cats who present 24–48 hours after exposure with elevated creatinine and BUN values have a guarded to grave prognosis.",
          "If your cat has been near lilies - even if they look well - this is an emergency. Do not wait for symptoms. By the time a cat shows signs of kidney failure, the window for effective treatment has often closed.",
          "Lily of the Valley (Convallaria majalis) is a separate species and not a true lily, but is also highly toxic to cats and dogs. It contains cardiac glycosides that cause severe heart arrhythmias and is unrelated to the renal toxicity of true lilies.",
        ],
      },
      {
        heading: "Onions, Garlic, and the Allium Family",
        paragraphs: [
          "Onions, garlic, leeks, shallots, and chives - collectively the Allium family - are toxic to cats and dogs. They contain compounds (N-propyl disulphide and thiosulphates) that damage red blood cells, causing a form of anaemia called Heinz body anaemia.",
          "In cats, the toxic dose is lower than in dogs and the red blood cells are more susceptible to oxidative damage. All forms are toxic: raw, cooked, dried, powdered, and in sauces. Garlic is roughly five times more toxic per unit weight than onion. Baby food, meat gravies, and processed foods can contain onion or garlic powder in amounts that harm a cat if ingested regularly.",
          "Signs of Allium toxicosis include lethargy, pale or yellowed gums, weakness, reduced appetite, and dark-coloured urine. These may appear days after exposure as the red blood cell population is depleted. If you know your cat has eaten a significant amount, contact your vet promptly.",
        ],
      },
      {
        heading: "Common Houseplants That Are Toxic to Cats",
        paragraphs: [
          "Sago Palm (Cycas revoluta) is widely used in Dubai landscaping and sold in garden centres and malls as an ornamental plant. All parts are toxic, with the seeds containing the highest concentration of cycasin. Even a small ingestion can cause severe liver failure, and the prognosis for cats (and dogs) who eat the seeds is poor even with aggressive treatment. Fatality rates in published studies exceed 50%. If you have a sago palm, reconsider whether it belongs in a home with cats.",
          "Dieffenbachia (Dumb Cane) is an extremely common indoor plant in Dubai. It contains insoluble calcium oxalate crystals that cause intense oral irritation, drooling, pawing at the mouth, difficulty swallowing, and vomiting. While rarely life-threatening, the oral pain is severe and cats require vet treatment for comfort.",
          "Pothos (Epipremnum aureum) and Philodendron species - both popular, easy-care indoor plants widely sold in Dubai - also contain calcium oxalate crystals. Similar to Dieffenbachia: intense oral and GI irritation, drooling, vomiting. Not generally life-threatening but requires monitoring.",
          "Oleander (Nerium oleander) is ubiquitous in Dubai's landscaping - along roadsides, in building gardens, and in public spaces. It contains oleandrin, a cardiac glycoside that causes severe cardiac arrhythmias. Toxicosis can be fatal. Cats who access oleander plants or ingested leaves should be seen immediately.",
          "Peace lily (Spathiphyllum) is another common houseplant containing calcium oxalate crystals. Despite the word 'lily' in the name, it is not a true lily and does not cause kidney failure - but it does cause significant oral irritation. Much less dangerous than a true lily, but still worth monitoring.",
          "Aloe vera is a household staple in Dubai, but the latex component of the plant (the yellow juice just below the outer leaf) is toxic to cats and can cause vomiting, diarrhoea, and lethargy. The gel is less toxic but not without risk.",
        ],
      },
      {
        heading: "Foods That Are Toxic to Cats",
        paragraphs: [
          "Grapes and raisins: the mechanism of toxicity is unknown, but grapes and raisins can cause acute kidney failure in cats. Not all cats are affected every time, which creates a false sense of safety. The unpredictable nature of the toxicity makes any exposure worth reporting to a vet.",
          "Chocolate: contains theobromine and caffeine, both methylxanthines that cause vomiting, diarrhoea, rapid heart rate, tremors, and seizures. Dark chocolate and baking chocolate contain higher concentrations than milk chocolate. Cats are less likely to eat chocolate than dogs, but those that do require prompt treatment.",
          "Xylitol: an artificial sweetener used in sugar-free products including chewing gum, some peanut butters, vitamin supplements, and oral care products. In cats, the toxic mechanism is less well-documented than in dogs, but xylitol ingestion should still be treated as an emergency.",
          "Raw yeast dough: rising dough expands in the warm stomach environment and can cause gastric dilatation. The fermentation process also produces ethanol, which is toxic to cats. Do not leave proving dough accessible.",
          "Alcohol: even small amounts are toxic to cats. Ethanol causes depression of the central nervous system, low blood sugar, and in sufficient amounts, respiratory failure. Alcoholic desserts or unattended drinks represent realistic exposures.",
          "Caffeine: in sufficient quantities (coffee beans, strong coffee, tea, energy drinks), caffeine causes rapid heart rate, restlessness, tremors, and can be fatal. Ground coffee, coffee capsules, and energy drink spillage represent realistic exposures.",
        ],
      },
      {
        heading: "Essential Oils",
        paragraphs: [
          "Many essential oils are hepatotoxic to cats. Cats lack the liver enzyme (glucuronyl transferase) needed to metabolise certain aromatic compounds. Tea tree oil, eucalyptus, pennyroyal, clove, and citrus oils are particularly dangerous - not just if ingested but through skin application and potentially through sustained diffuser use in a small, unventilated space.",
          "Do not apply essential oils to cats directly. If using an oil diffuser in a room your cat spends time in, ensure the room is well-ventilated and that the cat can leave. If your cat develops sudden tremors, incoordination, lethargy, drooling, or vomiting after exposure to any essential oil product, contact your vet immediately.",
        ],
      },
      {
        heading: "What to Do If Your Cat Is Exposed",
        paragraphs: [
          "Call your vet immediately. Do not wait for symptoms for lily exposure, Allium ingestion, or any high-risk plant. For many toxins, the window for effective decontamination is short - particularly lilies, where treatment must start within 6 hours.",
          "Be ready to describe: what was eaten, how much (estimate), and how long ago. If you can safely bring a sample or photo of the plant, that helps with identification. Do not attempt to induce vomiting at home unless explicitly instructed by a vet - in cats, home-induced emesis is difficult and can cause additional harm.",
          "Mike's Vet: +971 4 283 7744. For the ASPCA Animal Poison Control Center (useful for toxicity guidance if a local vet is unavailable): +1-888-426-4435.",
        ],
      },
    ],
    faqs: [
      { q: "Are lilies really that dangerous to cats?", a: "Yes. True lilies (Easter lily, tiger lily, Asiatic lily, daylily) cause acute kidney failure in cats from minimal exposure - even pollen landing on fur can be toxic when groomed off. There is no antidote. Treatment must start within hours of exposure. If your cat has been near a lily at all, treat it as an emergency and go to the vet immediately, even if they look well." },
      { q: "Is sago palm dangerous to cats?", a: "Extremely. Sago palm (Cycas revoluta) is very common in Dubai's landscaping and gardens. All parts are toxic, particularly the seeds. Even a small ingestion causes liver failure with a fatality rate exceeding 50% in published studies. If you have a sago palm accessible to your cat, consider removing it." },
      { q: "Can cats eat a small amount of onion or garlic?", a: "No amount is safe. Even small repeated exposures to Allium species (onion, garlic, leek, chives) can accumulate and cause haemolytic anaemia in cats. Cooked onion is not safer than raw. Garlic powder in sauces and baby food represents a hidden source. If your cat has ingested any significant amount, contact your vet." },
      { q: "Is Peace Lily dangerous to cats?", a: "Peace lily is not a true lily and does not cause kidney failure. It does contain calcium oxalate crystals that cause oral irritation, drooling, and vomiting. Painful and unpleasant but not life-threatening in most cases. If your cat has chewed a peace lily and shows signs of oral pain or persistent vomiting, a vet visit is appropriate." },
      { q: "Are essential oils in a diffuser safe around cats?", a: "They carry risk, particularly tea tree oil, eucalyptus, citrus, and clove. Cats lack the liver enzyme needed to metabolise certain aromatic compounds efficiently. Sustained exposure in a small, closed room is higher-risk. Use diffusers in well-ventilated spaces, ensure your cat can leave the room, and avoid any topical application of essential oils to cats." },
    ],
    references: [
      "Hall JO. Lily nephrotoxicosis. In: Plumlee KH (ed). Clinical Veterinary Toxicology. St Louis: Mosby, 2004:432–434.",
      "Langston CE. Acute renal failure caused by lily ingestion in six cats. Journal of the American Veterinary Medical Association. 1999;214(10):1578–1583.",
      "Cortinovis C, Caloni F. Household food items toxic to dogs and cats. Frontiers in Veterinary Science. 2016;3:26.",
      "Khan SA. Allium species toxicosis. In: Plumlee KH (ed). Clinical Veterinary Toxicology. 2004.",
    ],
  },
  {
    slug: 'toxic-plants-foods-dogs',
    title: "Toxic Plants and Foods for Dogs: What's Dangerous in Dubai Homes and Gardens",
    date: '2026-11-15',
    readTime: '7 min read',
    excerpt: "Grapes, xylitol, chocolate, and sago palm are the ones we see cause serious harm in Dubai dogs. Here's a practical breakdown of what actually matters and what to do if your dog eats something it shouldn't.",
    metaTitle: "Toxic Plants and Foods for Dogs Dubai | What to Avoid | Mike's Vet",
    metaDescription: "A practical guide to genuinely toxic plants and foods for dogs in Dubai - grapes, xylitol, chocolate, sago palm, oleander, and more. What to do in an emergency.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop',
      alt: 'A dog sitting in a garden',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Nick Stokes',
      role: 'DVM GPCert SAS',
      photo: '/vets/nick.jpg',
      profileHref: '/team/nick-stokes',
    },
    relatedService: { name: 'Dog Vet Clinic Dubai', href: '/services/dog-care' },
    sections: [
      {
        heading: "Grapes and Raisins: The One That Catches People Out",
        paragraphs: [
          "Grapes and raisins cause acute kidney failure in dogs. The toxic mechanism remains unknown, which makes it more dangerous: there is no dose threshold below which we can say grapes are safe, and not every dog is affected every time. We have seen dogs eat a single grape with no apparent effect and others develop acute renal failure from a small handful.",
          "This unpredictability is the real risk. Owners whose dog ate grapes before without incident assume the dog is safe. It is not. The inconsistency in reported responses may reflect individual genetic variation, the specific grape variety, or other concurrent factors - none of which you can assess in the moment.",
          "Raisins are significantly more concentrated than fresh grapes and represent a higher risk per unit weight. Products containing raisins - fruit cake, cereal bars, bread - are common in Dubai households and represent a realistic exposure route. If your dog eats grapes or any raisin-containing product, call your vet immediately. Early decontamination and IV fluid support can be life-saving.",
        ],
      },
      {
        heading: "Xylitol: Hidden in Products You Would Not Expect",
        paragraphs: [
          "Xylitol is a sugar alcohol used as a sweetener in a wide range of products: sugar-free chewing gum, some brands of peanut butter, oral hygiene products (toothpaste, mouthwash), vitamin supplements, and certain baked goods. In dogs, xylitol causes rapid and severe hypoglycaemia (blood sugar crash) through abnormal insulin release, and in larger doses, acute liver failure.",
          "The hypoglycaemia can occur within 15 to 30 minutes of ingestion. Signs include sudden weakness, unsteady gait, collapse, seizures, and in severe cases, coma. This is a genuine emergency that requires urgent veterinary treatment with IV dextrose.",
          "Before giving your dog peanut butter - in a lick mat, Kong toy, or as a treat - check the ingredients list for xylitol. Some popular low-sugar peanut butter brands sold in UAE supermarkets contain it. Brands marketed as 'natural' or 'no sugar added' are where xylitol is most commonly substituted. If in doubt, do not give it.",
        ],
      },
      {
        heading: "Chocolate",
        paragraphs: [
          "Chocolate contains two methylxanthines - theobromine and caffeine - both of which dogs metabolise far more slowly than people. Theobromine stimulates the central nervous system and cardiovascular system; in sufficient doses it causes vomiting, diarrhoea, rapid heart rate, muscle tremors, and seizures.",
          "The concentration of theobromine varies by chocolate type. Dark chocolate and baker's chocolate contain the highest amounts. Milk chocolate is less concentrated but still toxic in sufficient quantity. White chocolate contains very little theobromine. A small dog eating a large bar of dark chocolate is a potentially fatal emergency; the same dog eating a few squares of milk chocolate is cause for concern and monitoring.",
          "If your dog eats chocolate, call your vet with the dog's weight and an estimate of how much was eaten and what type. They will help you calculate whether the exposure is clinically significant. For moderate and larger exposures, induced emesis and activated charcoal are standard initial management.",
        ],
      },
      {
        heading: "Onions, Garlic, and the Allium Family",
        paragraphs: [
          "Onions, garlic, leeks, shallots, and chives contain thiosulphates and N-propyl disulphide compounds that oxidise red blood cells, causing Heinz body haemolytic anaemia. Dogs are more tolerant than cats but are not immune.",
          "All forms are toxic: raw, cooked, dehydrated, powdered. Garlic is roughly 5 times more toxic per gram than onion. A single large dose is more likely to cause acute illness; small repeated doses over time can deplete red blood cells cumulatively.",
          "Practical exposures in Dubai homes include leftover rice dishes or curries containing onion, meat gravies and sauces, baby food (which sometimes contains onion powder), and table scraps generally. Signs of anaemia - pale gums, weakness, lethargy, rapid breathing - may take several days to appear after exposure.",
        ],
      },
      {
        heading: "Sago Palm and Other Toxic Plants Common in Dubai",
        paragraphs: [
          "Sago Palm (Cycas revoluta) is the most dangerous plant in Dubai for dogs. It is widely planted as a landscape feature - in villa gardens, residential compounds, hotel grounds, and public spaces throughout the UAE. All parts of the plant are toxic, with the seeds (the round nuts at the base of mature plants) containing the highest concentration of cycasin, a potent liver toxin.",
          "Ingestion of one or two seeds can be fatal. Cycasin causes acute liver failure, neurological signs, haemorrhage, and coagulopathy. Even with aggressive intensive care treatment, fatality rates in published literature exceed 50%. Dogs that survive often have permanent liver damage. If you have a sago palm accessible to your dog, treat this as a serious safety hazard.",
          "Oleander (Nerium oleander) is everywhere in Dubai - roadside planting, compound boundaries, garden borders. It contains cardiac glycosides (oleandrin) that cause severe arrhythmias, vomiting, and neurological signs. Even smoke from burning oleander branches is toxic. Dogs should not have access to oleander plants.",
          "Adenium (Desert Rose) is sold in garden centres and grows widely in UAE gardens. All parts are toxic, containing cardiac glycosides similar to oleander. The sap is particularly concentrated and dangerous.",
          "Lantana is used as decorative flowering ground cover throughout Dubai and the wider UAE. Unripe berries and foliage contain lantadene, which causes liver damage (hepatogenous photosensitisation) and GI signs. It is particularly dangerous if large amounts are consumed.",
        ],
      },
      {
        heading: "Other Foods Worth Knowing About",
        paragraphs: [
          "Macadamia nuts cause weakness, hyperthermia, vomiting, and tremors in dogs within 12 hours of ingestion. The mechanism is unknown. The condition is rarely fatal but causes significant distress and requires supportive treatment. Macadamia nuts appear in baked goods - cookies, chocolate-covered nuts, trail mixes.",
          "Avocado contains persin, which is toxic to many animals including birds and rabbits. Dogs and cats are considered more resistant, but high doses (particularly of the skin, stone, and leaves) can cause vomiting and diarrhoea. The more significant practical risk in dogs is obstruction from swallowing the large stone.",
          "Alcohol is toxic to dogs at much lower doses than to people. Ethanol depresses the central nervous system, causes hypoglycaemia, and in sufficient amounts, respiratory failure. Alcoholic desserts, unattended drinks, and raw yeast dough (which produces alcohol as it ferments) all represent realistic exposures.",
          "Raw yeast dough rises in the warm environment of the stomach, causing physical distension and producing alcohol as a fermentation by-product. Both the mechanical expansion and the ethanol are genuinely dangerous. Keep proving dough inaccessible.",
          "Cooked bones (chicken, lamb, fish) splinter into sharp fragments that can perforate the intestine or stomach. This is a genuine clinical risk we see regularly. Raw meaty bones are generally safer, but no cooked bone should be given.",
        ],
      },
      {
        heading: "What to Do If Your Dog Eats Something Toxic",
        paragraphs: [
          "Call your vet immediately. For serious toxins - grapes, xylitol, sago palm seeds, significant chocolate - time matters. The decontamination window (inducing vomiting, activated charcoal) is typically 1 to 2 hours after ingestion. After that window, the focus shifts to supportive care.",
          "Be ready to say: what was eaten, how much, and when. If you have the packaging of a food product, bring it or take a photo - it helps the vet quickly identify whether xylitol or other toxins are present.",
          "Do not induce vomiting at home with hydrogen peroxide or salt unless your vet explicitly instructs you to. These methods carry their own risks and are not reliably effective in dogs.",
          "Mike's Vet: +971 4 283 7744. ASPCA Animal Poison Control Center (for toxicity guidance): +1-888-426-4435 (a consultation fee applies).",
        ],
      },
    ],
    faqs: [
      { q: "My dog ate one grape. Should I be worried?", a: "Yes. There is no established safe dose for grapes in dogs, and the idiosyncratic nature of grape toxicosis means some dogs develop kidney failure from small exposures while others appear unaffected. Call your vet. If ingestion was recent (within 1–2 hours), induced vomiting may be recommended. Even if it was hours ago, blood and kidney values should be monitored." },
      { q: "Is sago palm really that dangerous? It's everywhere in Dubai.", a: "Yes. It is the most dangerous commonly encountered plant in Dubai for dogs. The seeds are the most toxic part, but all parts can cause liver failure. Fatality rates exceed 50% even with aggressive treatment. Dogs in UAE garden settings are genuinely at risk. If you have a sago palm on your property that a dog can access, seriously consider removing it." },
      { q: "How much chocolate is dangerous for a dog?", a: "It depends on the dog's weight and the type of chocolate. Dark chocolate is significantly more toxic than milk chocolate per gram. As a rough guide, 1g of dark chocolate per kilogram of body weight can cause clinical signs in some dogs. For a 5kg dog, a single row of dark chocolate is a reason to call a vet. Contact your vet with the dog's weight and amount eaten for a quick assessment." },
      { q: "Is peanut butter safe for dogs?", a: "Natural peanut butter without xylitol is safe and a popular treat. The critical issue is xylitol - an artificial sweetener found in some brands of peanut butter sold as sugar-free or low-calorie. Always check the ingredients before giving peanut butter to a dog. If the ingredients include xylitol, birch sugar, or E967, do not give it." },
      { q: "My dog ate an oleander leaf. What should I do?", a: "Go to a vet immediately. Oleander contains cardiac glycosides that can cause life-threatening heart arrhythmias. This is not a 'wait and see' situation. Even one or two leaves represent a significant exposure. Bring the plant or a photo to help with identification and treatment decisions." },
      { q: "Are cooked bones safe for dogs?", a: "No. Cooked bones from chicken, lamb, fish, and beef splinter into sharp fragments that can lacerate the mouth, throat, stomach, and intestines. Raw meaty bones given under supervision are generally safer, but cooked bones should never be given to a dog." },
    ],
    references: [
      "Gwaltney-Brant S. Grape and raisin toxicosis. In: Peterson ME, Talcott PA (eds). Small Animal Toxicology. 3rd ed. Elsevier, 2013.",
      "Dunayer EK. Hypoglycemia following canine ingestion of xylitol-containing gum. Veterinary and Human Toxicology. 2004;46(2):87–88.",
      "Cortinovis C, Caloni F. Household food items toxic to dogs and cats. Frontiers in Veterinary Science. 2016;3:26.",
      "Cope RB. Allium species poisoning in dogs and cats. Veterinary Medicine. 2005;100:562–566.",
      "Langford SD, Boor PJ. Oleander toxicity: an examination of human and animal toxic exposures. Toxicology. 1996;109(1):1–13.",
    ],
  },
  {
    slug: 'cat-diet-by-age',
    title: "How a Cat's Nutritional Needs Change With Age - and How to Know You're Feeding the Right Amount",
    date: '2026-11-15',
    readTime: '6 min read',
    excerpt: "What a kitten needs from food is almost the opposite of what a senior cat needs. And 'follow the bag' is not a reliable way to measure portions - most cats are either underfed or quietly becoming obese. Here's how to get it right at every life stage.",
    metaTitle: "Cat Diet by Age: Kitten to Senior Feeding Guide | Mike's Vet Dubai",
    metaDescription: "How a cat's nutritional needs change from kitten to senior, how to calculate the right portion size, and what signs tell you the diet isn't working. From Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1200&q=80&auto=format&fit=crop',
      alt: 'A cat eating from a bowl',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Feth Mazari',
      role: 'DVM, GP Cert in Ultrasound',
      photo: '/vets/feth.jpg',
      profileHref: '/team/feth-mazari',
    },
    relatedService: { name: 'Cat Vet Clinic Dubai', href: '/services/cat-care' },
    sections: [
      {
        heading: "Why Life Stage Matters",
        paragraphs: [
          "A cat's nutritional requirements change substantially across four broad life stages: kittenhood (0–12 months), young adult (1–6 years), mature adult (7–10 years), and senior (11+ years). Feeding the same food in the same amounts throughout a cat's life is one of the most common mistakes we see - it leads to obesity in adults and undernutrition in growing kittens.",
          "Cats are obligate carnivores. Unlike dogs or people, they have no metabolic pathway to synthesise certain essential nutrients - taurine, arachidonic acid, vitamin A in its active form - from plant precursors. These must come from animal-source protein in the diet. A cat fed a low-quality, plant-heavy diet at any life stage will eventually show deficiency.",
        ],
      },
      {
        heading: "Kittens: 0–12 Months",
        paragraphs: [
          "Kittens require roughly twice the caloric density per kilogram of body weight compared to adult cats. They need higher levels of protein, fat, calcium, phosphorus, and certain amino acids to support rapid bone, muscle, and organ development. A kitten fed adult cat food may appear to eat adequately but can develop slowly and show coat or immune deficiencies over time.",
          "Feed a food labelled 'complete and balanced for growth' or 'all life stages' - AAFCO or FEDIAF nutritional adequacy statements on the packaging confirm this. Wet food is preferable at this stage: it supports hydration from the start and establishes a positive relationship with moisture-rich food, which pays dividends later in preventing urinary and kidney disease.",
          "Meal frequency: 3–4 small meals a day until 6 months, then 2–3 meals daily until 12 months. Free-feeding (food always available) is acceptable only if the kitten is very active and lean - most will overeat if food is permanently accessible.",
        ],
      },
      {
        heading: "Young Adults: 1–6 Years",
        paragraphs: [
          "By 12 months, most cats have reached their adult body weight. Caloric needs drop significantly from the kitten phase, and this is where obesity most commonly begins - owners continue feeding kitten-sized portions, or the cat transitions to free-feeding without restriction.",
          "Indoor cats in Dubai are at particular risk of weight gain. Limited exercise in a climate that discourages outdoor activity, combined with a palatability-engineered dry food diet, creates the conditions for progressive weight gain that most owners attribute to the cat simply 'filling out'.",
          "Target body condition score (BCS) for a healthy adult cat is 4–5 on a 9-point scale: ribs easily felt but not visible, a visible waist when viewed from above, and a slight abdominal tuck. At BCS 6–7 the cat is overweight; at 8–9 it is obese.",
          "Two meals daily is appropriate for most adults. Wet food as the primary diet (or a significant wet component) is preferable to exclusive dry feeding for urinary health. Cats evolved as desert animals that obtained most of their moisture from prey; a dry food-only diet chronically underprovides water intake.",
        ],
      },
      {
        heading: "Mature Adults: 7–10 Years",
        paragraphs: [
          "From around 7 years, cats begin to show early changes in digestive efficiency and organ function that may not yet be clinically apparent. Protein digestibility decreases gradually, which means that at the same protein intake, less is absorbed - older cats often need more dietary protein, not less, to maintain lean muscle mass.",
          "This runs counter to the intuition that an older cat needs a 'lighter' diet. Protein restriction in cats is only appropriate if kidney disease is present and confirmed - feeding a protein-restricted senior food to a healthy 8-year-old cat can accelerate muscle loss.",
          "Annual blood and urine screening from age 7 allows early detection of kidney disease, hyperthyroidism, and diabetes - all of which require dietary changes once diagnosed. Without this baseline, diet adjustments are made blind.",
          "Dental disease, which affects the majority of cats over 7, can make eating painful and lead to a subtle reduction in intake. If a previously good eater becomes picky or starts leaving food, a dental examination should be on the list of explanations.",
        ],
      },
      {
        heading: "Seniors: 11+ Years",
        paragraphs: [
          "Senior cats have markedly different nutritional needs. Hyperthyroidism (the most common endocrine disease in older cats) increases metabolic rate and can cause dramatic weight loss despite a good appetite - a senior cat that is eating well but losing weight needs a thyroid check, not just more food.",
          "Kidney disease affects a significant proportion of cats over 12. Once diagnosed, a phosphorus-restricted diet with moderate, high-quality protein slows disease progression. This is one of the best-evidenced dietary interventions in small animal medicine. Wet food is particularly important in cats with kidney disease because hydration directly affects how hard the kidneys have to work.",
          "Arthritis is common in older cats and is frequently missed because cats hide pain well. A cat that stops jumping to its usual feeding location, eats less, or becomes reluctant to crouch over a floor bowl may be showing pain. Bowl height and location adjustments can make a real difference.",
          "Many senior cats lose weight even on appropriate diets - their caloric needs may actually increase as absorption efficiency declines. A senior cat that is lean or underweight should be fed more, not managed on a 'light' formula.",
        ],
      },
      {
        heading: "How to Calculate the Right Portion Size",
        paragraphs: [
          "Feeding guidelines on pet food packaging are starting points, not prescriptions. They are calculated for the average cat, not yours - and they are almost always generous, because the manufacturer's interest aligns with feeding more.",
          "A more reliable method uses resting energy requirement (RER) as the base. RER in kcal/day = 70 × (body weight in kg)^0.75. For an adult neutered indoor cat at ideal weight, multiply RER by 1.2 to get the daily maintenance energy requirement (MER). For a cat that needs to lose weight, use the target weight, not the current weight.",
          "Most wet cat food contains approximately 90–100 kcal per 100g. Most dry food contains 350–400 kcal per 100g (check the specific product - it varies significantly). Divide the daily MER by the food's caloric density to get the daily amount. Weigh portions with a kitchen scale rather than using the cup included in the packaging, which is imprecise.",
          "Example: a 5kg neutered indoor adult cat. RER = 70 × (5)^0.75 ≈ 234 kcal. MER at 1.2× = 281 kcal/day. If feeding wet food at 95 kcal/100g: 281 ÷ 0.95 ≈ 296g wet food per day, split across two meals.",
          "Treats count. If your cat is eating training treats, dental chews, or toppers in meaningful quantities, subtract those calories from the daily portion. A cat receiving 50 kcal in treats is being overfed if the main meal is calculated to 100% of MER.",
        ],
      },
      {
        heading: "Signs the Diet Isn't Working",
        paragraphs: [
          "Weight gain or loss over successive months is the clearest signal. Weigh your cat monthly - most people are surprised by how much gradual change is missed between annual vet visits. A bathroom scale works: weigh yourself holding the cat, then alone.",
          "Poor coat quality (dull, dry, or flaky) often indicates inadequate essential fatty acids or protein. Soft stools, intermittent vomiting, or excessive shedding can point to a food that doesn't suit the individual cat. A trial with a different protein source or food format (more wet, less dry) is often worth trying before investigating further.",
          "Excessive water intake in a cat that eats primarily dry food may simply reflect inadequate moisture in the diet - switching to wet food often normalises drinking. Genuinely polydipsic cats (drinking far more than expected even on a wet diet) need a veterinary check for diabetes, kidney disease, or hyperthyroidism.",
        ],
      },
    ],
    faqs: [
      { q: "When should I switch from kitten food to adult cat food?", a: "At around 12 months for most breeds. Large or slow-maturing cats (Maine Coons, for example) can stay on kitten food until 18 months. The transition should be gradual over 7–10 days - mix increasing proportions of the new food into the old to avoid digestive upset." },
      { q: "Should I feed wet food, dry food, or both?", a: "Wet food as the primary diet is preferable for most cats, particularly because cats have a low thirst drive and a dry food-only diet chronically underprovides water. Wet food supports urinary and kidney health. Dry food is not harmful in a well-hydrated cat and can have dental benefits if specifically formulated for dental health, but it should not be the sole food long-term." },
      { q: "My senior cat has lost weight but is still eating. What's wrong?", a: "Weight loss despite a maintained or increased appetite in a senior cat is a classic presentation of hyperthyroidism, the most common endocrine disease in older cats. Diabetes, intestinal disease, and in some cases cancer can present similarly. A blood test, urine test, and thyroid panel will usually identify the cause. Don't increase portions as the first response - get a diagnosis." },
      { q: "How do I know if my cat is overweight?", a: "Feel the ribs: in a cat at ideal weight, you should be able to feel each rib easily without pressing hard, but they should not be visibly prominent. From above, there should be a visible waist behind the ribcage. From the side, the abdomen should not hang low. If you cannot feel the ribs without pressing, the cat is overweight. Your vet can give a formal body condition score at the next visit." },
      { q: "Is grain-free cat food better?", a: "No evidence supports grain-free diets as beneficial for cats unless there is a confirmed grain sensitivity (uncommon). Cats do not have a metabolic need for grains, but they also do not have an inherent intolerance to them. The important question is protein source and overall nutritional profile, not whether grains are present. Some grain-free foods substitute legumes (peas, lentils), which may carry their own concerns in certain formulations." },
    ],
    references: [
      "Laflamme DP. Development and validation of a body condition score system for cats. Feline Practice. 1997;25(5–6):13–18.",
      "Fascetti AJ, Delaney SJ. Applied Veterinary Clinical Nutrition. Wiley-Blackwell, 2012.",
      "Elliott DA. Nutritional management of chronic renal disease in dogs and cats. Veterinary Clinics of North America: Small Animal Practice. 2006;36(6):1377–1384.",
      "Perez-Camargo G. Cat nutrition: what's new in the old? Compendium on Continuing Education for the Practicing Veterinarian. 2004;26(2A):5–10.",
    ],
  },
  {
    slug: 'dog-diet-by-age',
    title: "How a Dog's Nutritional Needs Change With Age - and How to Know You're Feeding the Right Amount",
    date: '2026-11-15',
    readTime: '6 min read',
    excerpt: "What a puppy needs from food is not what an adult dog needs, and not what a senior dog needs either. 'Feeding the recommended amount on the bag' is how most dogs end up obese. Here's how to calculate portions and adjust diet through each life stage.",
    metaTitle: "Dog Diet by Age: Puppy to Senior Feeding Guide | Mike's Vet Dubai",
    metaDescription: "How a dog's nutritional needs change from puppy to senior, how to calculate the right daily food portion, and what warning signs tell you the diet needs changing. Mike's Vet Dubai.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop',
      alt: 'A dog with a food bowl',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Nick Stokes',
      role: 'DVM GPCert SAS',
      photo: '/vets/nick.jpg',
      profileHref: '/team/nick-stokes',
    },
    relatedService: { name: 'Dog Vet Clinic Dubai', href: '/services/dog-care' },
    sections: [
      {
        heading: "Life Stages and Why They Matter",
        paragraphs: [
          "Dogs are classified into four broad nutritional life stages: puppy (from weaning to completion of growth), adult, mature adult (typically from around 7 years, or earlier in large breeds), and senior. The timing of transitions varies significantly by breed size - a Chihuahua is still functionally a puppy at 10 months; a Great Dane is approaching early adulthood at the same age.",
          "Feeding the wrong life stage food - most commonly, keeping a dog on adult food through puppyhood, or continuing puppy food into adulthood - has real consequences. Puppies fed adult food may not receive enough calcium and phosphorus for skeletal development; adult dogs fed puppy food accumulate excess calories and may develop bone and joint problems if large-breed puppies are fed a calcium excess.",
        ],
      },
      {
        heading: "Puppies: Weaning to Adulthood",
        paragraphs: [
          "Puppies need a food labelled 'complete and balanced for growth' or 'all life stages' per AAFCO or FEDIAF standards. Protein and fat requirements are higher than for adults; calcium and phosphorus must be present in a correct ratio for bone development.",
          "Large and giant breed puppies (expected adult weight above 25kg) have specific requirements that differ from small breed puppies. Excess calcium and caloric density in large breed puppies promotes excessively rapid growth, which is a significant risk factor for developmental orthopaedic diseases including hip dysplasia, osteochondrosis, and elbow dysplasia. Use a food specifically formulated for large breed puppies - do not simply feed adult large breed food, and do not supplement calcium in a puppy already eating a balanced diet.",
          "Meal frequency: 3–4 meals daily until 12 weeks, 3 meals daily until 6 months, then twice daily. Free-feeding dry food to puppies is not recommended - structured meals allow you to monitor intake and appetite, which is an important early health signal.",
          "Puppies finish growth at different ages: small breeds (under 10kg) around 9–12 months; medium breeds around 12–15 months; large breeds 15–18 months; giant breeds up to 24 months. Transition to adult food after the growth phase, not before.",
        ],
      },
      {
        heading: "Adults: Completion of Growth to 6–7 Years",
        paragraphs: [
          "Adult dogs have lower caloric needs per kilogram than puppies. This is the life stage where obesity most commonly develops, particularly in neutered animals - neutering reduces metabolic rate by 20–30%, but most owners do not adjust portions after the procedure.",
          "Twice-daily feeding is the standard recommendation for adult dogs. It distributes caloric intake more evenly, reduces gastric acid build-up between meals (which can cause the characteristic morning vomiting of bile seen in dogs fed once daily), and reduces the risk of gastric dilatation-volvulus (bloat) in large deep-chested breeds.",
          "Body condition scoring is the most practical ongoing measure of whether the diet is appropriate. A dog at ideal body condition (BCS 4–5 on a 9-point scale) has ribs that are easily felt under a thin layer of fat, a visible waist from above, and an abdominal tuck from the side. If the ribs require firm pressure to feel, the dog is overweight. Many owners have no reference point for what a healthy dog weight actually looks like - in Dubai, as in most urban settings, overweight dogs are so common they read as normal.",
          "Activity level matters more than the bag suggests. Working dogs, dogs that run daily, and dogs that spend significant time outdoors have meaningfully higher energy requirements than sedentary apartment dogs fed the same food. The bag's recommendations are based on average activity - adjust up or down based on your dog's actual lifestyle and body condition.",
        ],
      },
      {
        heading: "Mature Adults: 7+ Years (Earlier in Large Breeds)",
        paragraphs: [
          "Large and giant breeds age faster than small breeds. A 7-year-old Labrador is a different physiological proposition to a 7-year-old Poodle. Many veterinarians consider large breeds mature from around 5–6 years; small breeds may not need dietary adjustment until 8–9.",
          "Caloric needs often decrease further in mature adults as activity levels reduce. This can be counteracted if the dog is unwell - unexplained weight loss in a middle-aged dog needs investigation, not just a food upgrade.",
          "Joints become a priority. Diets formulated for mature or senior dogs often include higher levels of omega-3 fatty acids (EPA and DHA from fish oil), which have anti-inflammatory effects relevant to osteoarthritis. Joint supplements (glucosamine, chondroitin) have mixed evidence but reasonable safety profiles, and some dogs show clear functional improvement on them. If your dog is stiffening on walks, discuss joint-supportive nutrition at the next vet visit.",
          "Annual blood screening from 7 years - liver and kidney function, blood count, thyroid - provides the data needed to adjust the diet proactively. Hypothyroidism in dogs (more common in certain breeds including Labrador Retrievers, Golden Retrievers, Dobermanns, and Cocker Spaniels) causes weight gain, lethargy, and poor coat quality, and responds to medication - not food changes.",
        ],
      },
      {
        heading: "Seniors: 10+ Years",
        paragraphs: [
          "Senior dogs may need more calories, not fewer. Decreased gut absorption, reduced muscle mass maintenance, and concurrent disease can all mean that an older dog needs more food to maintain the same weight - the instinct to 'cut back' on a thinner senior dog often makes the problem worse.",
          "Protein needs remain high or increase in healthy senior dogs. Protein restriction should only be implemented if kidney disease is present and at an appropriate stage - feeding a low-protein diet to a healthy older dog accelerates muscle loss without benefit.",
          "Kidney disease in dogs does require dietary management once confirmed: phosphorus restriction, adequate high-quality protein, and good hydration are the main levers. A prescription renal diet is usually indicated once kidney values become significantly elevated.",
          "Dental disease is near-universal in senior dogs and commonly goes untreated. A dog that eats slowly, drops food, chews on one side, or has visibly discoloured teeth likely has significant dental pain. Dental disease affects appetite, food selection, and overall caloric intake in ways that can look like digestive or systemic illness.",
        ],
      },
      {
        heading: "How to Calculate the Right Daily Portion",
        paragraphs: [
          "The feeding guidelines on dog food packaging are based on the average dog at the stated life stage. They do not account for neuter status, activity level, or individual metabolic variation - all of which significantly affect actual caloric need. Use the bag as a starting point, then adjust based on body condition.",
          "For a more precise calculation, start with resting energy requirement (RER): 70 × (body weight in kg)^0.75. Then apply a life stage multiplier to get maintenance energy requirement (MER). Common multipliers: intact adult 1.8×; neutered adult 1.6×; inactive/obese-prone 1.4×; weight loss 1.0×; puppy under 4 months 3.0×; puppy 4 months to adult 2.0×; senior 1.4×.",
          "Example: a 25kg neutered adult Labrador. RER = 70 × (25)^0.75 ≈ 877 kcal. MER at 1.6× = 1,403 kcal/day. If feeding a dry food with 360 kcal/100g: 1,403 ÷ 3.6 ≈ 390g per day, split into two meals of 195g each.",
          "Weigh food with a kitchen scale. Measuring cups are inconsistent - the same cup filled loosely versus firmly can differ by 20–30%. For a dog eating 400g/day, that discrepancy is 80–120g, which is a meaningful caloric difference over time.",
          "Adjust every 2–4 weeks based on body condition. If the dog is gaining weight on the calculated amount, reduce by 10%. If losing weight unintentionally, increase by 10% and rule out medical causes. The goal is a dog whose ribs you can feel without pressing, with a visible waist and tuck.",
        ],
      },
      {
        heading: "Common Feeding Mistakes",
        paragraphs: [
          "Free-feeding dry food: works only for dogs with self-regulating appetites, which are the minority. Most dogs will eat whatever is available. Free-feeding also removes appetite as a health signal - a dog that stops eating is showing you something important, and you will miss it if the bowl is never empty.",
          "Not adjusting after neutering: neutering reduces energy requirement by an estimated 20–30%. Dogs neutered at 6 months that continue on puppy-sized portions will gain weight steadily through their first year. Reduce portions by 20% after neutering and monitor body condition monthly.",
          "Supplementing a complete diet: a diet labelled 'complete and balanced' meets all nutritional requirements. Adding supplements - calcium, cod liver oil, raw meat - to a complete commercial diet creates imbalances. The exception is omega-3 fish oil at appropriate doses, which provides anti-inflammatory benefit beyond what most commercial diets include.",
          "Trusting the bag: the recommended feeding amount on pet food packaging is based on an unneutered average dog at moderate activity. For most of the neutered, moderately-active Dubai apartment dogs we see, the actual requirement is 20–30% less. Start at the lower end of the bag's range and increase only if body condition scores indicate the dog is too lean.",
        ],
      },
    ],
    faqs: [
      { q: "When should I switch from puppy food to adult food?", a: "When the dog has completed the majority of its growth. For small breeds, that's around 9–12 months; medium breeds 12–15 months; large breeds 15–18 months; giant breeds up to 24 months. Transition gradually over 7–10 days by mixing increasing proportions of adult food into the puppy food." },
      { q: "How do I know if my dog is overweight?", a: "Feel the ribs: they should be easy to feel under a thin layer of fat, without pressing hard. From above, there should be a clear waist. From the side, the abdomen should tuck up. If you can't feel the ribs without firm pressure, the dog is overweight. Your vet can formally body condition score your dog - many owners are surprised at the result. Overweight dogs in Dubai are common enough to look normal." },
      { q: "My dog has gained weight since being neutered. What should I do?", a: "Reduce daily portions by 15–20% and reassess after 4–6 weeks. Neutering reduces resting energy requirement significantly - many owners don't adjust portions and the weight creeps on over the first year. If the dog is significantly overweight, ask your vet for a formal weight loss plan - crash-dieting a dog is not safe." },
      { q: "Should I feed once or twice a day?", a: "Twice daily for most adult dogs. It distributes caloric intake more evenly, reduces the bile vomiting some dogs show when fasted for more than 12 hours, and decreases the risk of bloat in large breeds. For dogs prone to bloat (deep-chested large breeds like Great Danes, German Shepherds, Dobermanns), twice daily with a rest period after meals is a standard recommendation." },
      { q: "Is raw feeding better for dogs?", a: "The evidence is mixed. Raw diets can be nutritionally complete if properly formulated, and some dogs do well on them. The main concerns are microbiological risk (Salmonella, Listeria, E. coli - relevant both to the dog and the humans handling the food), nutritional imbalance in home-prepared diets, and bone fragments causing GI perforations. If you want to feed raw, use a commercially prepared complete raw diet rather than a home-made one, and discuss it with your vet." },
      { q: "My senior dog is losing weight but eating normally. What should I do?", a: "See a vet promptly. Weight loss with normal or increased appetite in a senior dog has a differential that includes hypothyroidism, diabetes, exocrine pancreatic insufficiency, intestinal malabsorption, dental disease, and cancer. Blood work, urine, and a physical exam will usually point to the cause. Don't simply increase food before you have a diagnosis." },
    ],
    references: [
      "Laflamme DP. Development and validation of a body condition score system for dogs. Canine Practice. 1997;22(3):10–15.",
      "Fascetti AJ, Delaney SJ. Applied Veterinary Clinical Nutrition. Wiley-Blackwell, 2012.",
      "German AJ. The growing problem of obesity in dogs and cats. Journal of Nutrition. 2006;136(7):1940S–1946S.",
      "Kealy RD, et al. Effects of diet restriction on life span and age-related changes in dogs. Journal of the American Veterinary Medical Association. 2002;220(9):1315–1320.",
    ],
  },
  {
    slug: 'signs-cat-is-in-pain',
    title: '5 Signs Your Cat Is in Pain (And Why They Hide It So Well)',
    date: '2026-11-24',
    readTime: '5 min read',
    excerpt: "Cats are experts at hiding pain. By the time an owner notices something is wrong, the cat has often been uncomfortable for days or longer. These are the five signs our vets look for -- and what to do when you spot them.",
    metaTitle: "5 Signs Your Cat Is in Pain | Mike's Vet Dubai",
    metaDescription: "Cats hide pain instinctively. Here are 5 signs your cat is hurting that owners often miss -- changes in posture, grooming, behaviour, facial expression, and appetite. Know when to call a vet.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&q=80&auto=format&fit=crop',
      alt: 'A cat resting quietly at home',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Eslam Asran',
      role: 'DVM',
      photo: '/vets/eslam.jpg',
      profileHref: '/team/eslam-asran',
    },
    relatedService: { name: 'Consultations', href: '/services/consultations' },
    sections: [
      {
        paragraphs: [
          "Cats evolved as both predator and prey. Showing weakness in the wild is dangerous, so hiding pain is instinctive and deeply hardwired -- even in a pampered Dubai apartment cat. This means by the time most owners notice something is wrong, the cat has often been uncomfortable for days, sometimes longer.",
          "The result is that pain in cats gets missed or dismissed until it becomes severe. Knowing what to look for is one of the most valuable things an owner can do.",
        ],
      },
      {
        heading: 'Sign 1 -- Changes in Posture and Movement',
        paragraphs: [
          "A cat in pain often adopts a hunched or tucked posture -- back arched, head lowered, all four feet close together. This is different from a cat curled up asleep; a painful cat holds the position with tension, doesn't shift or stretch out, and may resist being moved.",
          "Reluctance to jump -- onto furniture they normally use, or down from a height -- is one of the most common things owners miss because they assume the cat is 'just getting lazy.' Pain in the joints, abdomen, spine, or chest can all make jumping uncomfortable.",
          "Other movement signs: stiffness after rest, a subtle change in gait, favouring one limb, or sitting with one leg held at an odd angle.",
        ],
      },
      {
        heading: 'Sign 2 -- Changes in Grooming',
        paragraphs: [
          "Cats in pain often groom obsessively at the painful area. If you notice your cat repeatedly licking one spot on their abdomen, back, or a limb -- especially if the fur is thinning -- that area is worth examining. Skin problems are one cause, but localised pain is another.",
          "The opposite also happens. Cats in significant discomfort may stop grooming entirely. A coat that suddenly looks dull, matted, or greasy is not normal and usually means the cat is not well, either physically or in terms of pain.",
          "Dental pain -- which is extremely common in cats over three -- often causes a cat to stop grooming their face. Owners may notice their cat avoiding the left or right side when eating, or food dropping from their mouth.",
        ],
      },
      {
        heading: 'Sign 3 -- Behaviour Changes',
        paragraphs: [
          "Hiding is one of the clearest signs that a cat is unwell or in pain. A cat that suddenly spends most of their time under the bed, in a cupboard, or in a corner they never used before is telling you something important. This is not sulking -- it is a protective instinct.",
          "Increased aggression when touched, picked up, or approached can mean the cat is guarding a painful area. A cat that has never bitten or hissed and suddenly does so when you touch their abdomen or back should be examined -- they are communicating pain in the only way available to them.",
          "Withdrawal from interactions they normally enjoy -- sitting with you, playing, responding to their name -- is worth noting. It is not always pain, but it is never nothing.",
        ],
      },
      {
        heading: 'Sign 4 -- The Facial Grimace Scale',
        paragraphs: [
          "Veterinary researchers have developed a validated feline grimace scale based on observable facial changes in cats experiencing pain. The five features assessed are: orbital tightening (squinting or partially closed eyes), ear position (flattened or rotated back), muzzle tension (tightened, whiskers pulled back or stiff), whisker change, and head position (lowered, with the chin near the chest).",
          "You do not need to know the scale formally to use it. Simply observe: does your cat look different around the eyes and mouth? Are the ears flattened? Is the face tense in a way that is hard to define but clearly not relaxed? Trust what you see. Owners often describe a subtle look that 'wasn\'t there before' -- that instinct is worth acting on.",
        ],
      },
      {
        heading: 'Sign 5 -- Changes in Eating, Drinking or Litter Box Use',
        paragraphs: [
          "A cat that is eating less or not at all, drinking more than usual, or avoiding their litter box may be in pain -- or may have an underlying condition causing pain. These changes are rarely behavioural; they almost always reflect a physical problem.",
          "Litter box avoidance in cats is a clinical sign that warrants attention. It can indicate urinary pain, constipation, joint pain making it hard to get in and out of the box, or a previous negative experience in the box during illness. Cats do not 'protest' by avoiding the litter tray. Something is wrong.",
          "Weight loss that is not intentional -- especially in a cat who is still eating -- should always be investigated. Dental disease, hyperthyroidism, kidney disease, cancer, and inflammatory bowel disease can all cause pain that suppresses appetite or affects absorption.",
        ],
      },
      {
        heading: 'What to Do',
        paragraphs: [
          "If you notice one or more of these signs, book a vet appointment rather than waiting to see if it resolves. Pain in cats does not usually go away on its own -- and if it does, it often means the cat has simply adapted to it.",
          "Never give your cat human pain medication. Paracetamol (acetaminophen) is fatal in cats. Ibuprofen and aspirin are also toxic. The only safe option is a vet-prescribed medication.",
          "At the consultation, describe what you have observed and when it started. The more specific you can be -- 'she stopped jumping onto the sofa five days ago' or 'he has been grooming his left flank obsessively' -- the more useful the information is to the vet.",
        ],
      },
    ],
    faqs: [
      { q: "How do I know if my cat is in pain?", a: "The most reliable signs are changes from their normal behaviour: hiding more than usual, resisting being touched, changes in grooming, reluctance to jump, and a tense or grimacing facial expression. Cats instinctively hide pain, so any unexplained change in behaviour or routine is worth investigating." },
      { q: "Do cats cry or vocalise when they are in pain?", a: "Some cats vocalise -- particularly if touched in a painful area or during urination if they have a urinary problem. But many cats in significant pain make no sound at all. Silence is not reassurance. Behavioural and postural changes are more reliable indicators than vocalisation." },
      { q: "My cat seems fine but is grooming one spot constantly -- should I be concerned?", a: "Yes. Repetitive grooming of a single area is a pain signal. It can indicate skin disease, a wound, a foreign object, or localised internal pain. Have the area examined rather than waiting for the behaviour to escalate." },
      { q: "Can I give my cat paracetamol or ibuprofen for pain?", a: "No. Both are toxic to cats. Paracetamol is fatal in cats even in small doses. Never give a cat any human pain medication. If your cat is in pain, call your vet for safe, appropriate options." },
      { q: "How quickly should I take my cat to the vet if I think they are in pain?", a: "Same day if the cat is in obvious distress, not eating, or showing signs of a urinary blockage (straining to urinate without producing urine). For more subtle signs -- hiding, reluctance to jump, behaviour changes -- book the soonest available appointment rather than waiting weeks." },
    ],
  },
  {
    slug: 'dog-skin-allergies-dubai',
    title: 'Dog Skin Allergies in Dubai: Causes, Signs and What Actually Works',
    date: '2026-11-20',
    readTime: '6 min read',
    excerpt: "Skin allergies are one of the most common reasons dogs come to us at Mike's Vet. Dubai's climate makes them worse. Here's what causes them, how to tell the type, and what actually helps.",
    metaTitle: "Dog Skin Allergies Dubai: Causes, Signs and Treatment | Mike's Vet",
    metaDescription: "Skin allergies are one of the most common dog problems in Dubai. Learn about atopy, food allergies and flea allergy dermatitis -- signs to watch for, how they're diagnosed, and what treatment actually works.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop',
      alt: 'A dog sitting outdoors',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Mohamad Hassan',
      role: 'DVM',
      photo: '/vets/hassan.jpg',
      profileHref: '/team/mohamad-hassan',
    },
    relatedService: { name: 'Consultations', href: '/services/consultations' },
    sections: [
      {
        paragraphs: [
          "Skin problems are one of the top reasons dogs come to our clinic on Hessa Street. The itch, the scratching, the red skin, the recurring ear infections -- for many Dubai dog owners it feels like a constant battle that never quite resolves. That is often because the underlying cause has not been properly identified.",
          "Dubai's environment creates specific challenges: year-round heat, low humidity from air conditioning, dusty outdoor spaces, and a limited range of grass species that are common allergen triggers. Add a food protein the dog is reacting to, and you have multiple overlapping causes that are hard to unpick without a methodical approach.",
        ],
      },
      {
        heading: 'The Three Main Types of Skin Allergy in Dogs',
        paragraphs: [
          "Environmental allergy (atopic dermatitis) is the most common type. The dog's immune system overreacts to airborne particles -- dust mites, mould spores, pollen, grass -- causing inflammation. In Dubai, house dust mites are present year-round (they thrive in air-conditioned environments), and certain grasses like kikuyu and buffalo grass are significant triggers. Signs include itching at the paws, face, armpits, and groin -- areas where allergens make skin contact.",
          "Food allergy is less common than owners assume, but real. A true food allergy is an immune response to a protein the dog has been exposed to previously -- usually chicken, beef, dairy, or wheat. It does not develop immediately after introducing a food; it typically appears after months or years of exposure to the same protein. Signs often overlap with environmental allergy but may include gastrointestinal symptoms alongside skin changes.",
          "Flea allergy dermatitis (FAD) is an intense allergic reaction to flea saliva. Even a single flea bite can trigger a significant response in a sensitised dog. The pattern is usually intense itching at the base of the tail, hindquarters, and inner thighs. In Dubai, fleas are present year-round and can survive in sand, carpet, and outdoor areas. Regular flea prevention is essential for allergic dogs.",
        ],
      },
      {
        heading: 'Signs of Skin Allergies in Dogs',
        paragraphs: [
          "Itching (pruritus) is the defining sign -- scratching, rubbing the face on the floor or furniture, biting at the paws or flanks, dragging the bottom along the ground. The intensity and location of itching give the vet useful clues about the type.",
          "Paw licking and chewing is one of the most common presentations. Dogs with environmental allergies often have red-stained fur between the toes from chronic saliva contact. The paws may also be swollen or warm.",
          "Ear infections that recur despite treatment are a classic sign of an underlying allergy. The inflammation changes the skin environment inside the ear, making it hospitable to yeast and bacteria. Treating the infection without treating the allergy leads to a cycle of resolution and recurrence.",
          "Secondary skin changes from chronic scratching include hot spots (acute moist dermatitis), thickened or darkened skin (lichenification), hair loss, and skin that is broken and prone to bacterial infection. These secondary changes can obscure the original allergy, making diagnosis harder if treatment is delayed.",
        ],
      },
      {
        heading: 'How We Diagnose Skin Allergies',
        paragraphs: [
          "There is no single test that diagnoses atopic dermatitis -- it is a clinical diagnosis based on history, pattern of signs, ruling out other causes (parasites, infections, food), and response to treatment. Blood tests and intradermal skin tests can support the diagnosis but are not always required initially.",
          "Food allergy requires a strict dietary elimination trial -- usually 8 to 12 weeks on a novel protein (a meat the dog has never eaten: kangaroo, rabbit, venison) or a hydrolysed protein diet. This is the only way to confirm or exclude food allergy. Over-the-counter 'sensitive' foods do not constitute a proper elimination trial.",
          "Skin scrapes, cytology, and culture help identify secondary infections (bacterial and yeast) that need treating alongside the allergy itself. Treating only the infection without the allergy leads to recurrence.",
        ],
      },
      {
        heading: 'What Actually Works',
        paragraphs: [
          "Flea prevention, all year round, every dog in the household. Non-negotiable for any allergic dog, regardless of whether fleas are seen -- by the time you see one flea, the dog has been bitten many times.",
          "Regular bathing with a veterinary-prescribed shampoo (not human shampoo) reduces the allergen load on the skin and relieves symptoms. Twice weekly is a reasonable starting point for actively itchy dogs.",
          "For environmental allergies, newer medications (Apoquel, Cytopoint) are effective and much safer for long-term use than traditional steroids. They target the specific pathways driving the itch without broad immune suppression. We use these at Mike's Vet as first-line treatment for moderate to severe atopic dermatitis.",
          "Allergen-specific immunotherapy (desensitisation) is the only treatment that modifies the underlying allergy rather than managing symptoms. It involves a custom injection or oral programme based on what the dog is reacting to. It takes months to reach full effect but can significantly reduce the severity of the allergy long term.",
          "Omega-3 fatty acid supplementation and a high-quality diet support skin barrier function and reduce inflammation. These are supportive, not curative, but they make a meaningful difference as part of a broader management plan.",
        ],
      },
      {
        heading: 'Managing Skin Allergies Long-Term in Dubai',
        paragraphs: [
          "Allergies in dogs are managed, not cured. The goal is to identify the triggers, reduce exposure where possible, and keep the itch at a level that does not affect the dog's quality of life.",
          "Air conditioning reduces airborne allergens indoors but also dries the skin. Maintaining indoor humidity around 50% and regular bathing can offset this.",
          "Keeping the dog off grass during peak allergen times (usually early morning and evening in Dubai's cooler months when grasses are more active), wiping paws after outdoor walks, and regular vacuuming all reduce allergen load.",
          "Work with your vet to establish a maintenance plan that keeps symptoms controlled without relying on steroids long-term. The first step is getting an accurate diagnosis -- if your dog has been itching for months and treatments have only provided temporary relief, a thorough dermatology workup is worth doing properly.",
        ],
      },
    ],
    faqs: [
      { q: "Why does my dog keep getting ear infections in Dubai?", a: "Recurring ear infections in dogs are almost always a sign of an underlying allergy -- environmental, food, or both. The allergy inflames the ear canal, creating conditions where yeast and bacteria multiply. Treating the infection without addressing the allergy leads to a cycle of recurrence. If your dog has had more than two ear infections in a year, the allergy should be investigated." },
      { q: "What food should I feed my dog with skin allergies?", a: "If a food allergy is suspected, a strict elimination trial is needed -- 8 to 12 weeks on a novel protein your dog has never eaten (such as kangaroo, venison, or rabbit), or a veterinary hydrolysed protein diet. Standard commercial 'sensitive' foods are not sufficient for a proper elimination trial as they often contain multiple proteins. Your vet can guide you through this." },
      { q: "Is Apoquel safe for dogs?", a: "Apoquel (oclacitinib) is a targeted medication that reduces itch and inflammation by blocking specific pathways involved in allergic response. It is considered safe for long-term use in dogs over 12 months and is significantly safer than long-term steroid use. Like any medication, it has potential side effects that your vet will discuss with you." },
      { q: "Can dogs grow out of skin allergies?", a: "No -- atopic dermatitis in dogs tends to worsen over time as the immune system becomes sensitised to more allergens. Early, appropriate management reduces the progression. Some dogs on allergen-specific immunotherapy show significant long-term improvement, but most require ongoing management." },
      { q: "My dog is constantly licking their paws -- is this allergies?", a: "Paw licking is one of the most common signs of environmental allergy in dogs. The feet and face are primary contact points for allergens. If the fur between the toes is red-stained from saliva, the skin is inflamed, or the paws are itchy after outdoor walks, allergic dermatitis is likely. Book a consultation so we can examine the paws and take a full history." },
    ],
  },
  {
    slug: 'kennel-cough-dogs-dubai',
    title: 'Kennel Cough in Dogs: What Dubai Pet Owners Need to Know',
    date: '2026-11-18',
    readTime: '5 min read',
    excerpt: "Kennel cough is one of the most contagious dog infections we see in Dubai -- and dog parks, boarding facilities, and groomers are where it spreads. Here's how to recognise it, treat it, and prevent it.",
    metaTitle: "Kennel Cough Dogs Dubai: Symptoms, Treatment and Vaccine | Mike's Vet",
    metaDescription: "Kennel cough is common in Dubai's dog-dense environment. Learn the signs, how it spreads, treatment options, and why the Bordetella vaccine is recommended for most Dubai dogs.",
    heroImage: {
      url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop&crop=top',
      alt: 'A dog at a park',
      credit: 'Unsplash',
    },
    author: {
      name: 'Dr. Feth Mazari',
      role: 'DVM',
      photo: '/vets/feth.jpg',
      profileHref: '/team/feth-mazari',
    },
    relatedService: { name: 'Vaccinations', href: '/services/vaccinations' },
    sections: [
      {
        paragraphs: [
          "Kennel cough -- infectious tracheobronchitis -- is one of the most contagious respiratory infections in dogs, and Dubai's dog-friendly environment creates ideal conditions for it to spread. Dog parks like Zabeel, Safa, and the community parks across JVC and Arabian Ranches, plus the growing number of dog cafes, boarding facilities, and grooming salons, mean many Dubai dogs have regular close contact with other dogs.",
          "The good news is that kennel cough is rarely serious in healthy adult dogs. Most recover without complications. The concern is secondary pneumonia in puppies, senior dogs, and immunocompromised animals -- and the rapid spread through any group of dogs that share a space.",
        ],
      },
      {
        heading: 'What Causes Kennel Cough?',
        paragraphs: [
          "Kennel cough is not caused by a single pathogen -- it is typically a combination of viral and bacterial agents. The most significant are Bordetella bronchiseptica (bacteria), canine parainfluenza virus (included in the standard DHPPi vaccine), and canine adenovirus-2. In practice, infections are often mixed, which is why kennel cough can vary in severity from a mild cough that lasts a week to a more prolonged illness.",
          "Bordetella is the most common bacterial cause and the one the specific kennel cough vaccine targets. It attaches to the cilia of the respiratory tract, disrupting the normal clearance mechanism and allowing secondary infection to take hold.",
        ],
      },
      {
        heading: 'How It Spreads',
        paragraphs: [
          "Kennel cough is airborne and spreads through respiratory droplets -- a coughing or sneezing dog disperses the pathogen into the air and onto surfaces. Direct nose-to-nose contact, shared water bowls, and shared spaces all facilitate transmission.",
          "The incubation period is 3 to 10 days, meaning a dog can be infected and spreading the illness before any symptoms appear. This is why outbreaks move quickly through boarding facilities, dog parks, and training classes.",
          "In Dubai's climate, air-conditioned indoor spaces -- groomers, boarding facilities, dog cafes -- can concentrate respiratory pathogens more than outdoor settings.",
        ],
      },
      {
        heading: 'Signs of Kennel Cough',
        paragraphs: [
          "The hallmark sign is a harsh, dry, honking cough -- often described as sounding like something is stuck in the throat. It may be followed by gagging or bringing up white foam. Many owners initially think the dog has swallowed something.",
          "The cough is often triggered by exercise, excitement, or pressure on the throat -- pulling on the lead, being picked up. Applying gentle pressure to the trachea during examination typically produces the cough.",
          "In uncomplicated kennel cough, the dog usually remains bright, eating normally, and without fever. If the dog is lethargic, has a reduced appetite, or develops a productive (wet) cough with nasal discharge and fever, this may indicate secondary pneumonia and requires prompt veterinary attention.",
          "Symptoms typically develop 3 to 10 days after exposure and last 1 to 3 weeks in otherwise healthy adult dogs.",
        ],
      },
      {
        heading: 'Treatment',
        paragraphs: [
          "Uncomplicated kennel cough in a healthy adult dog often resolves without treatment beyond rest and reduced exercise for 1 to 2 weeks. Avoid lead walks that cause pulling on the trachea -- use a harness rather than a collar. Avoid mixing with other dogs during the infectious period.",
          "In cases where Bordetella is confirmed or strongly suspected, a course of antibiotics is typically prescribed. This reduces the duration of illness and lowers the risk of secondary bacterial pneumonia.",
          "Cough suppressants may be recommended for dogs with a severe cough that is disrupting sleep or causing significant distress.",
          "If secondary pneumonia develops -- indicated by fever, lethargy, reduced appetite, and a productive cough -- prompt veterinary attention, chest X-rays, and more intensive antibiotic therapy are needed. This is the scenario to watch for in puppies, senior dogs, and dogs with underlying health conditions.",
        ],
      },
      {
        heading: 'The Bordetella Vaccine',
        paragraphs: [
          "The Bordetella intranasal or injectable vaccine provides protection against Bordetella bronchiseptica, the most common bacterial cause of kennel cough. It does not prevent all causes -- parainfluenza and adenovirus are covered by the standard DHPPi vaccine -- but significantly reduces the risk of severe disease.",
          "In Dubai, Bordetella vaccination is required by most boarding facilities and many doggy daycares. We recommend it for any dog with regular contact with other dogs: dog parks, grooming, boarding, training classes, or dog cafes.",
          "The vaccine is given annually. For dogs going into boarding or attending a training programme, it should ideally be given at least 1 to 2 weeks before exposure to allow immunity to develop.",
          "Vaccinated dogs can still contract kennel cough -- particularly from non-Bordetella causes -- but typically show milder symptoms and recover more quickly.",
        ],
      },
      {
        heading: 'Keeping Your Dog Safe in Dubai',
        paragraphs: [
          "Do not take your dog to a dog park, boarding facility, or grooming salon if they are showing respiratory symptoms. This protects other dogs.",
          "Carry your own water and use it rather than shared water stations where possible.",
          "Ensure kennel cough vaccination is current before any boarding stay or intensive social period (such as over Eid or Christmas holidays when many owners board their dogs).",
          "If your dog develops a cough within 10 days of contact with other dogs, call us. Most cases are straightforward, but it is always better to confirm than to risk missing a secondary infection.",
        ],
      },
    ],
    faqs: [
      { q: "How do I know if my dog has kennel cough?", a: "The characteristic sign is a harsh, dry, honking cough -- often triggered by excitement or lead pressure on the throat. The dog usually remains otherwise well. If you are unsure, call us: we can often make an initial assessment by phone based on the description of the cough." },
      { q: "Is kennel cough contagious to other dogs?", a: "Yes, highly. Kennel cough spreads through respiratory droplets and is contagious before symptoms appear. Keep your dog away from other dogs and public dog areas until they have been cough-free for at least a week, or until your vet advises it is safe." },
      { q: "Is kennel cough contagious to humans or cats?", a: "In healthy humans, kennel cough does not pose a risk. In severely immunocompromised people, there is a theoretical low risk from Bordetella -- discuss this with your doctor if relevant. Cats can contract Bordetella but it is uncommon. The main concern is spread between dogs." },
      { q: "How long does kennel cough last?", a: "In healthy adult dogs, 1 to 3 weeks. Puppies, senior dogs, and dogs with underlying conditions may take longer to recover and are at higher risk of secondary pneumonia. If symptoms persist beyond 3 weeks or the dog develops fever and lethargy, see your vet." },
      { q: "My dog was vaccinated against kennel cough -- can they still get it?", a: "Yes, but vaccination significantly reduces the severity and duration of illness. The Bordetella vaccine covers the most common bacterial cause. Other agents (parainfluenza, adenovirus) are covered by the standard DHPPi vaccine, but there are additional viruses that can cause kennel cough-like illness that no current vaccine covers." },
      { q: "Does my dog need the Bordetella vaccine if they don't go to kennels?", a: "If your dog visits dog parks, groomers, training classes, or dog-friendly cafes in Dubai, they have regular contact with other dogs and we recommend the vaccine. It's not just kennels -- any situation where dogs share air or surfaces is a transmission risk." },
    ],
  },
]
