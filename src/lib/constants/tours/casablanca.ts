import { Tour } from "@/lib/interfaces/services/tours";
export const casablancaTours: Tour[] = [
  {
    title: "Hassan II Mosque & Islamic Architecture",
    description:
      "Explore the magnificence of one of the world's largest mosques with an architecture expert, gaining special access to ornate details and design elements typically overlooked, followed by a tour of Casablanca's stunning Art Deco district.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/hassan-ii-mosque.jpg",
      "/images/tours/casablanca/art-deco-district.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Religious", "Cultural"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the mosque?",
        answer:
          "Modest dress is required for mosque visits. Women should cover their hair, arms, and legs (headscarves and appropriate coverings are provided if needed). Men should wear long pants and shirts with sleeves. All visitors must remove shoes before entering prayer areas, so slip-on footwear is recommended.",
      },
      {
        question: "Is the mosque accessible for those with mobility issues?",
        answer:
          "Yes, the mosque is wheelchair accessible, with ramps and elevators to all main areas. Our guide can assist with any specific mobility needs during the tour.",
      },
      {
        question: "Can we take photos inside the mosque?",
        answer:
          "Yes, photography is allowed in most areas of the mosque, but please be respectful and avoid taking photos of people praying. Our guide will inform you of any specific restrictions during the tour.",
      },
    ],
  },
  {
    title: "Moroccan Culinary Journey & Spice Markets",
    description:
      "Immerse yourself in Morocco's legendary cuisine with a chef-led exploration of vibrant markets, followed by a hands-on cooking class in a traditional riad where you'll master authentic tagine, couscous, and pastry techniques.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/spice-market.jpg",
      "/images/tours/casablanca/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The cooking class typically includes preparing a traditional Moroccan tagine (chicken with preserved lemon and olives or vegetable option), fresh Moroccan salads, authentic couscous using hand-rolling techniques, and sweet pastries such as gazelle horns or almond briouats. All recipes are provided to take home, along with recommendations for ingredient substitutions available in your home country.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is required. Our classes are designed for all skill levels, from beginners to advanced cooks. Chef Fatima Zahra will guide you through each step, explaining techniques and cultural significance behind the dishes. The focus is on having fun while learning authentic Moroccan cooking methods.",
      },
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions with advance notice. Vegetarian and vegan options are available, and we can modify recipes to avoid allergens like nuts or gluten. Please inform us of any dietary needs when booking so we can prepare accordingly.",
      },
    ],
  },
  {
    title: "Coastal Paradise: Ain Diab Beach Day & Water Sports",
    description:
      "Escape the city bustle for a day of sun and sea at Casablanca's premier beach district, with optional water sports, beachfront lunch at an exclusive club, and guided exploration of the scenic Corniche area.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/ain-diab-beach.jpg",
      "/images/tours/casablanca/corniche.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.6,
    tags: ["Beach", "Water Sports", "Relaxation"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What water activities are available?",
        answer:
          "Our beach day includes options for jet skiing, paddleboarding, kayaking, or surfing lessons with professional instructors (each activity has an additional fee payable directly to operators). Equipment rental and basic instruction are included for all beach activities. The Atlantic waters along Casablanca can be cool year-round, so we provide wetsuits when needed for water sports.",
      },
      {
        question: "Is there a beach club we will visit?",
        answer:
          "Yes, we spend the day at a private beach club that offers sun loungers, umbrellas, and access to clean restrooms and showers. The club has a beachfront restaurant serving fresh seafood, Moroccan salads, and international cuisine. You can order food and drinks directly from your sunbed or at the bar.",
      },
      {
        question: "What should I bring for the beach day?",
        answer:
          "Please bring swimwear, sunscreen, a hat, sunglasses, and a towel. We recommend wearing comfortable beach attire and sandals. If you plan to participate in water sports, please wear appropriate clothing that can get wet. We provide lockers for your belongings while you enjoy the beach.",
      },
    ],
  },
  {
    title: "Moroccan Hammam & Spa Ritual",
    description:
      "Indulge in the centuries-old tradition of the Moroccan hammam with a private spa experience featuring traditional black soap scrub, rhassoul clay treatment, argan oil massage, and mint tea relaxation.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/hammam.jpg",
      "/images/tours/casablanca/spa-treatment.jpg",
    ],
    duration: "3 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Wellness", "Spa", "Traditional"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What exactly is a hammam?",
        answer:
          "A hammam is a traditional North African steam bath and cleansing ritual that has been central to Moroccan culture for centuries. The experience typically involves relaxing in a steam room, followed by exfoliation with black soap made from olives and eucalyptus, a scrub with a special mitt called a 'kessa', application of purifying rhassoul clay from the Atlas Mountains, and finally a moisturizing treatment with argan oil. It's both a cleansing ritual and social tradition that leaves skin remarkably soft and the body deeply relaxed.",
      },
    ],
  },
  {
    title: "Hidden Medina Food & Craft Tour",
    description:
      "Navigate the labyrinthine old medina of Casablanca with a local guide, discovering hidden food stalls, artisan workshops, and authentic markets far from tourist paths, with tastings of street food specialties throughout the journey.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/medina-alley.jpg",
      "/images/tours/casablanca/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Local", "Shopping"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "local",
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer:
          "We carefully select all food vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the safest and most delicious street food options, frequented by locals rather than tourists. All food is freshly prepared, often right before your eyes. We provide hand sanitizer throughout the tour and can accommodate dietary restrictions with advance notice.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of Moroccan street food specialties such as grilled meats (kebabs), fresh seafood, traditional pastries, olives, local cheeses, and seasonal fruits. We also visit spice shops where you can sample unique blends and learn about their culinary uses. Vegetarian and vegan options are available upon request.",
      },
      {
        question: "Will we have time to shop for crafts?",
        answer:
          "Yes, the tour includes visits to artisan workshops where you can see traditional crafts being made, such as pottery, leatherwork, and textiles. You'll have opportunities to purchase unique handmade souvenirs directly from the artisans. Our guide can help with bargaining and ensure you get fair prices.",
      },
    ],
  },
  {
    title: "Day Trip: Rabat Royal City Tour",
    description:
      "Explore Morocco's elegant capital city with a day trip to Rabat featuring the royal palace, ancient Kasbah des Oudaias, historic Chellah necropolis, and the magnificent Hassan Tower, with round-trip transportation from your Casablanca hotel.",
    city: "Rabat",
    country: "Morocco",
    region: "Rabat-Salé-Kénitra",
    images: [
      "/images/tours/casablanca/rabat-kasbah.jpg",
      "/images/tours/casablanca/hassan-tower.jpg",
    ],
    duration: "9 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Day Trip", "History", "Architecture"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far is Rabat from Casablanca?",
        answer:
          "Rabat is approximately 87 kilometers (54 miles) northeast of Casablanca. The drive takes about 1 hour and 15 minutes each way along a modern highway. We travel in comfortable, air-conditioned vehicles with a mid-morning departure from Casablanca, giving us ample time to explore Rabat's highlights before returning in the early evening.",
      },
      {
        question: "What will we see in Rabat?",
        answer:
          "The tour includes visits to the Royal Palace (exterior only), the Kasbah des Oudaias with its stunning ocean views, the ancient Chellah necropolis with Roman ruins and gardens, and the iconic Hassan Tower and Mausoleum of Mohammed V. We also have time to explore the medina and enjoy a traditional Moroccan lunch at a local restaurant.",
      },
    ],
  },
  {
    title: "Moroccan Photography Masterclass",
    description:
      "Perfect your photography skills with a professional photographer who guides you through Casablanca's most photogenic locations, from hidden courtyards and bustling markets to architectural marvels in optimal lighting conditions.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/photo-workshop.jpg",
      "/images/tours/casablanca/mosque-photography.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Photography", "Art", "Architecture"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This tour is suitable for photographers of all levels using any type of camera, including smartphones, point-and-shoot, or DSLRs. If using a DSLR, we recommend bringing a standard zoom lens (24-70mm or similar) and perhaps a wide-angle lens for architectural shots. Tripods are welcome but not essential. Our guide can tailor instruction to your specific equipment and skill level, focusing on composition, lighting, and capturing the unique character of Moroccan scenes.",
      },
      {
        question: "Will we visit specific photography hotspots?",
        answer:
          "Yes, the tour includes carefully selected locations that offer diverse photographic opportunities, such as the Hassan II Mosque, hidden medina alleys, bustling souks, and scenic viewpoints. We also time the tour to take advantage of the best natural light for photography, including golden hour sessions at key spots. Our guide will provide tips on capturing the essence of each location and composing striking images.",
      },
      {
        question: "Can I get feedback on my photos?",
        answer:
          "Absolutely! The tour includes a post-session review where you can share your favorite shots with our guide for constructive feedback and tips on improvement. This personalized critique helps you refine your skills and gain confidence in your photography.",
      },
    ],
  },
  {
    title: "Luxury Casablanca: Private Tour & Fine Dining",
    description:
      "Indulge in the finest Casablanca has to offer with private chauffeur-driven exploration, exclusive access to luxury locations, rooftop champagne, and dinner at Morocco's most acclaimed restaurant with a customized tasting menu.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/luxury-transportation.jpg",
      "/images/tours/casablanca/fine-dining.jpg",
    ],
    duration: "8 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Luxury", "Exclusive", "Gourmet"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What makes this experience luxurious?",
        answer:
          "This VIP experience features transportation in a premium vehicle (Mercedes or equivalent) with professional chauffeur, a dedicated personal guide, champagne reception at an exclusive rooftop venue overlooking the Hassan II Mosque, private shopping experiences at high-end boutiques and artisan studios, and dinner at a Michelin-quality restaurant where the chef will create a custom tasting menu paired with Moroccan and international wines. Every detail is customized to your preferences.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can tailor the tasting menu to accommodate any dietary restrictions or preferences, including vegetarian, vegan, gluten-free, and allergies. Please inform us of any specific needs when booking so our chef can prepare accordingly.",
      },
      {
        question: "Is this tour suitable for special occasions?",
        answer:
          "Absolutely! This luxury experience is perfect for celebrating anniversaries, honeymoons, birthdays, or other special occasions. We can arrange additional surprises such as personalized gifts, floral arrangements, or special decorations upon request. Just let us know how we can make your experience unforgettable.",
      },
    ],
  },
  {
    title: "Moroccan Artisanry Workshop: Zellige Tile Making",
    description:
      "Learn the intricate art of traditional Moroccan zellige tile mosaic from master craftsmen, creating your own geometric pattern using ancient techniques passed down through generations, with your finished piece shipped to your home.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/zellige-workshop.jpg",
      "/images/tours/casablanca/tile-crafting.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Craft", "Workshop", "Traditional"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is artistic experience required?",
        answer:
          "No prior artistic experience is needed. Our master craftsmen will guide you through each step, from selecting your geometric pattern to cutting tiles and setting them in plaster using traditional methods. While zellige is an intricate art form that takes years to master, we've designed the workshop so beginners can successfully create a beautiful small piece (approximately 8x8 inches) to take home. More experienced participants can attempt more complex designs.",
      },
      {
        question: "What materials are provided?",
        answer:
          "All materials are included in the workshop fee: pre-cut clay tiles in various colors, plaster, tools for cutting and setting tiles, and protective gear. You'll also receive a brief history of zellige tilework and its significance in Moroccan architecture. At the end of the workshop, your finished piece will be carefully packaged and shipped to your home address within 2-3 weeks.",
      },
      {
        question: "Can children participate?",
        answer:
          "Yes, this workshop is suitable for children ages 8 and up when accompanied by an adult. We provide child-sized tools and simplified patterns for younger participants. It's a fun, hands-on way for families to bond while learning about Moroccan culture together.",
      },
    ],
  },
  {
    title: "Modern Casablanca Urban Experience",
    description:
      "Discover contemporary Casablanca beyond the tourist sites with visits to cutting-edge art galleries, trendy cafés, modern architecture, and vibrant neighborhoods where young Moroccans are creating new expressions of their cultural heritage.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/modern-architecture.jpg",
      "/images/tours/casablanca/art-gallery.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Contemporary", "Art", "Urban"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address:
        "Twin Center, Boulevard Al Massira Al Khadra, Casablanca, Morocco",
      coordinates: {
        latitude: 33.5731,
        longitude: -7.6326,
      },
      instructions:
        "Meet your contemporary culture guide at the ground floor entrance to the Twin Center towers in the Maarif district. Your guide will be wearing casual modern attire and holding a tablet with digital art. We recommend taking the tram to reach this central location easily.",
      contactNumber: "+212 631 40 51 62",
      contactEmail: "contemporary@paragontrails.com",
    },
    faqs: [
      {
        question: "How is this different from standard Casablanca tours?",
        answer:
          "While most tours focus on historical or traditional aspects of Moroccan culture, this experience highlights the dynamic, evolving side of Casablanca as North Africa's business hub and cultural trendsetter. We'll visit contemporary art galleries featuring emerging Moroccan artists, see innovative architecture blending modern and traditional elements, explore neighborhoods where young entrepreneurs are opening design studios and concept stores, and discuss current social and cultural movements reshaping Morocco's largest city.",
      },
      {
        question: "Will we visit any specific neighborhoods?",
        answer:
          "Yes, the tour includes stops in neighborhoods like Maarif, Gauthier, and Anfa, known for their modern architecture, trendy cafés, and vibrant street art. We'll also explore the new Casablanca Marina area with its waterfront developments and luxury shops. Our guide will introduce you to local artists and entrepreneurs who are shaping the city's contemporary scene.",
      },
      {
        question: "Is this tour suitable for all ages?",
        answer:
          "Yes, this tour is designed to be engaging for all ages, with a focus on visual arts, architecture, and cultural discussions that appeal to both adults and children. Families are welcome, and we can adapt the content based on the interests of younger participants.",
      },
      {
        question: "Will we meet local artists or designers?",
        answer:
          "When available, we arrange meetings with local artists, designers, or gallery owners who can share their perspectives on Casablanca's evolving creative scene. These encounters provide authentic insights into the challenges and opportunities facing Morocco's contemporary creators and how they're bridging traditional craftsmanship with modern innovation.",
      },
      {
        question:
          "Are there opportunities to purchase contemporary Moroccan art?",
        answer:
          "Yes, we visit galleries and concept stores where you can purchase works by emerging Moroccan artists and designers. From paintings and photography to fashion and home decor with a modern Moroccan aesthetic, there are options at various price points. Our guide can provide context about the artists and their work, helping you make informed purchases that support the local creative economy.",
      },
    ],
  },
  {
    title: "Casablanca Stargazing Desert Retreat",
    description:
      "Escape the city lights for an unforgettable evening in the desert outside Casablanca. Experience traditional Moroccan hospitality in a luxury desert camp, enjoy dinner under the stars, and observe celestial wonders through professional telescopes with an astronomy expert.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/desert-camp.jpg",
      "/images/tours/casablanca/stargazing.jpg",
    ],
    duration: "8 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Astronomy", "Desert", "Evening"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: true,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address:
        "Sofitel Casablanca Tour Blanche, Rue Sidi Belyout, Casablanca, Morocco",
      coordinates: {
        latitude: 33.5931,
        longitude: -7.6186,
      },
      instructions:
        "Meet in the lobby of the Sofitel Casablanca Tour Blanche hotel. Your guide will be holding a sign with 'Desert Stargazing Experience'. Please arrive 15 minutes before departure time. Transportation to the desert camp (approximately 1.5 hours) is provided in comfortable 4x4 vehicles.",
      contactNumber: "+212 661 87 65 43",
      contactEmail: "stargazing@paragontrails.com",
    },
    faqs: [
      {
        question: "What will we see through the telescopes?",
        answer:
          "Depending on the season and sky conditions, you might observe planets like Saturn with its rings, Jupiter and its moons, distant galaxies, nebulae, and star clusters. Our astronomy expert will help you identify constellations and explain the mythology and science behind them. We use professional-grade telescopes that reveal details invisible to the naked eye.",
      },
      {
        question: "What should I wear for the desert evening?",
        answer:
          "Desert temperatures drop significantly at night, even in summer. We recommend wearing comfortable, layered clothing with closed shoes. During winter months (November-March), bring a warm jacket, hat, and gloves. We provide traditional Moroccan djellabas (warm robes) and blankets for additional comfort during stargazing sessions.",
      },
      {
        question: "What's included in the dinner?",
        answer:
          "You'll enjoy an authentic Moroccan feast served in a beautifully decorated Bedouin-style tent. The meal typically includes traditional mezze starters, tagine (slow-cooked stew), couscous with seasonal vegetables, grilled meats, fresh bread, and Moroccan pastries for dessert. Mint tea and water are included, with other beverages available for purchase.",
      },
      {
        question: "Is photography allowed during stargazing?",
        answer:
          "Yes, photography is encouraged! Our astronomy expert will provide tips for capturing the night sky with your camera. For best results, bring a camera with manual settings and a tripod. We also have a professional astrophotographer who takes high-quality images during the evening that you can purchase as souvenirs.",
      },
      {
        question: "What if it's cloudy or the weather is bad?",
        answer:
          "If weather conditions make stargazing impossible, we offer two options: reschedule for another night during your stay, or proceed with the desert experience (dinner, music, and cultural activities) with an indoor astronomy presentation instead. If both options are unsuitable, we provide a partial refund for the astronomy portion of the experience.",
      },
    ],
  },
  {
    title: "Moroccan Surfing Adventure",
    description:
      "Experience the Atlantic waves near Casablanca with a surfing lesson tailored to your skill level. Learn from professional instructors, enjoy beach relaxation time, and conclude with a traditional beach barbecue as the sun sets over the ocean.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/surfing.jpg",
      "/images/tours/casablanca/beach-barbecue.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Surfing", "Beach", "Active"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Dar al Beida Surf Club, Ain Diab Beach, Casablanca, Morocco",
      coordinates: {
        latitude: 33.6013,
        longitude: -7.6731,
      },
      instructions:
        "Meet at the Dar al Beida Surf Club entrance on Ain Diab Beach. Look for instructors wearing blue rashguards with the surf club logo. Please arrive 15 minutes early to complete registration forms. Come wearing your swimwear under your clothes for quick changing.",
      contactNumber: "+212 661 22 33 44",
      contactEmail: "surfing@paragontrails.com",
    },
    faqs: [
      {
        question: "Do I need previous surfing experience?",
        answer:
          "No prior experience is needed! Our lessons are tailored to all skill levels, from complete beginners to advanced surfers looking to improve their technique. Beginners start with safety instructions and basic techniques on the beach before entering the water with close instructor supervision. More experienced surfers receive coaching to refine their skills and tackle more challenging waves.",
      },
      {
        question: "What equipment is provided?",
        answer:
          "We provide all necessary equipment including surfboards appropriate for your height, weight, and skill level, wetsuits (the Atlantic can be cool even in summer), rash guards, and wax. You only need to bring your swimwear, towel, sunscreen, and a change of dry clothes for after your session.",
      },
      {
        question: "Is this activity safe for children?",
        answer:
          "Yes, children aged 8 and above can participate. We maintain a strict instructor-to-student ratio (1:4 for adults, 1:2 for children) to ensure safety. Our instructors are trained in water rescue and first aid. For younger children or those not interested in surfing, we offer supervised beach activities while family members surf.",
      },
      {
        question: "What are the wave conditions like near Casablanca?",
        answer:
          "Casablanca's beaches offer consistent waves suitable for all levels year-round. Morning sessions typically have cleaner conditions with gentler waves ideal for beginners, while afternoon sessions often feature stronger winds and waves better suited for intermediate surfers. Our instructors select the best spots based on daily conditions and your skill level.",
      },
      {
        question: "What's included in the beach barbecue?",
        answer:
          "The post-surfing barbecue features freshly grilled fish, seafood, and meats prepared in Moroccan style with aromatic spices, served with salads, grilled vegetables, and fresh bread. Vegetarian options are available upon request. The meal is enjoyed at sunset on the beach, providing a perfect end to your surfing adventure. Soft drinks and mint tea are included.",
      },
    ],
  },
  {
    title: "Moroccan Musical Heritage Experience",
    description:
      "Immerse yourself in Morocco's rich musical traditions with visits to instrument workshops, private performances of Andalusian classical music and Gnawa spiritual sounds, and participation in a percussion workshop to learn traditional rhythms.",
    city: "Casablanca",
    country: "Morocco",
    region: "Casablanca-Settat",
    images: [
      "/images/tours/casablanca/music-performance.jpg",
      "/images/tours/casablanca/instrument-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Music", "Cultural", "Interactive"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address:
        "Conservatoire de Musique, 18 Boulevard Rachidi, Casablanca, Morocco",
      coordinates: {
        latitude: 33.589,
        longitude: -7.6203,
      },
      instructions:
        "Meet at the entrance to the Casablanca Conservatory of Music on Boulevard Rachidi. Your guide will be holding a traditional Moroccan instrument (oud). Please arrive 10 minutes before the scheduled start time. The venue is easily accessible by taxi or tram.",
      contactNumber: "+212 522 26 41 95",
      contactEmail: "music@paragontrails.com",
    },
    faqs: [
      {
        question: "What musical traditions will we experience?",
        answer:
          "This tour explores several distinct Moroccan musical traditions including Andalusian classical music (brought to Morocco from Spain during the Moorish period), Gnawa (spiritual trance music with sub-Saharan African origins), Chaabi (popular folk music), and traditional Berber music. Each tradition has its own unique instruments, rhythms, scales, and cultural significance which your guide will explain in detail.",
      },
      {
        question: "Do I need musical experience to enjoy this tour?",
        answer:
          "No musical experience is required. This tour is designed for music lovers of all backgrounds. The percussion workshop is accessible to beginners, and our professional musicians are skilled at teaching simple rhythms to participants with no prior experience. Those with musical backgrounds will also appreciate the technical aspects and complexity of the traditions presented.",
      },
      {
        question: "What instruments will we see and learn about?",
        answer:
          "You'll discover a variety of traditional Moroccan instruments including the oud (lute), qanun (zither), rbab (fiddle), darbouka (ceramic drum), bendir (frame drum), and the distinctive metal castanets used in Gnawa music. At the instrument workshop, you'll observe master craftsmen creating these instruments using techniques passed down through generations.",
      },
      {
        question: "Will there be opportunities to purchase instruments?",
        answer:
          "Yes, the instrument workshop we visit offers authentic, handcrafted instruments for sale at fair prices. These range from professional-quality ouds and drums to smaller, travel-friendly percussion instruments suitable as souvenirs. Our guide can provide advice on instrument quality and appropriate pricing, and the workshop can arrange international shipping for larger purchases.",
      },
      {
        question: "What happens during the percussion workshop?",
        answer:
          "During the interactive workshop, professional percussionists will teach you fundamental Moroccan rhythms on traditional drums. You'll learn basic hand techniques, simple rhythmic patterns, and how these patterns combine in traditional music. The session concludes with a group performance where participants play together with professional musicians, creating an authentic Moroccan jam session.",
      },
    ],
  },
];
export default casablancaTours;
