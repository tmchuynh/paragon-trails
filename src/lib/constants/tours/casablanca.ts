import { Tour } from "@/lib/interfaces/services/tours";
export const casablancaTours: Tour[] = [
  {
    title: "Hassan II Mosque & Islamic Architecture",
    description:
      "Explore the magnificence of one of the world's largest mosques with an architecture expert, gaining special access to ornate details and design elements typically overlooked, followed by a tour of Casablanca's stunning Art Deco district.",
    images: [
      "/images/tours/casablanca/hassan-ii-mosque.jpg",
      "/images/tours/casablanca/art-deco-district.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Religious", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Omar Benzakour",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the mosque?",
        answer:
          "Modest dress is required for mosque visits. Women should cover their hair, arms, and legs (headscarves and appropriate coverings are provided if needed). Men should wear long pants and shirts with sleeves. All visitors must remove shoes before entering prayer areas, so slip-on footwear is recommended.",
      },
    ],
  },
  {
    title: "Moroccan Culinary Journey & Spice Markets",
    description:
      "Immerse yourself in Morocco's legendary cuisine with a chef-led exploration of vibrant markets, followed by a hands-on cooking class in a traditional riad where you'll master authentic tagine, couscous, and pastry techniques.",
    images: [
      "/images/tours/casablanca/spice-market.jpg",
      "/images/tours/casablanca/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Fatima Zahra",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The cooking class typically includes preparing a traditional Moroccan tagine (chicken with preserved lemon and olives or vegetable option), fresh Moroccan salads, authentic couscous using hand-rolling techniques, and sweet pastries such as gazelle horns or almond briouats. All recipes are provided to take home, along with recommendations for ingredient substitutions available in your home country.",
      },
    ],
  },
  {
    title: "Casablanca Cinematic History Walking Tour",
    description:
      "Journey through the cinematic legacy of Casablanca, visiting filming locations and historic spots that inspired the legendary film, while learning about Morocco's complex role during World War II and the colonial period.",
    images: [
      "/images/tours/casablanca/rick-cafe.jpg",
      "/images/tours/casablanca/old-medina.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Film", "History", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Younes Benali",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we visit Rick's Café from the movie?",
        answer:
          "Yes, we visit Rick's Café, though it's important to note this is a recreation inspired by the film rather than an original filming location (the movie was actually filmed in Hollywood studios). The café was created in 2004 by an American diplomat to capture the ambiance of the film, complete with piano, curved arches, and period details. It's now a popular restaurant and bar where we'll stop for refreshments during our tour.",
      },
    ],
  },
  {
    title: "Art Deco Architectural Heritage Tour",
    description:
      "Discover Casablanca's unique status as North Africa's Art Deco capital with an expert-led exploration of the city's stunning 1930s buildings, featuring private access to normally closed interiors and rooftop viewpoints.",
    images: [
      "/images/tours/casablanca/art-deco-buildings.jpg",
      "/images/tours/casablanca/villa-interiors.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Architecture", "Art Deco", "Photography"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Laila Alaoui",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes Casablanca's Art Deco architecture unique?",
        answer:
          "Casablanca features a distinctive fusion of European Art Deco with traditional Moroccan elements known as 'Mauresque' architecture. During French colonial rule in the 1920s-30s, architects created buildings with classic Art Deco geometric patterns and streamlined forms, but incorporated local motifs like zellige tilework, carved stucco, and traditional Islamic patterns. This unique blend created one of the world's most distinctive architectural landscapes, which has fortunately been preserved in many neighborhoods.",
      },
    ],
  },
  {
    title: "Coastal Paradise: Ain Diab Beach Day & Water Sports",
    description:
      "Escape the city bustle for a day of sun and sea at Casablanca's premier beach district, with optional water sports, beachfront lunch at an exclusive club, and guided exploration of the scenic Corniche area.",
    images: [
      "/images/tours/casablanca/ain-diab-beach.jpg",
      "/images/tours/casablanca/corniche.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.6,
    tags: ["Beach", "Water Sports", "Relaxation"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Karim Berrada",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What water activities are available?",
        answer:
          "Our beach day includes options for jet skiing, paddleboarding, kayaking, or surfing lessons with professional instructors (each activity has an additional fee payable directly to operators). Equipment rental and basic instruction are included for all beach activities. The Atlantic waters along Casablanca can be cool year-round, so we provide wetsuits when needed for water sports.",
      },
    ],
  },
  {
    title: "Moroccan Hammam & Spa Ritual",
    description:
      "Indulge in the centuries-old tradition of the Moroccan hammam with a private spa experience featuring traditional black soap scrub, rhassoul clay treatment, argan oil massage, and mint tea relaxation.",
    images: [
      "/images/tours/casablanca/hammam.jpg",
      "/images/tours/casablanca/spa-treatment.jpg",
    ],
    duration: "3 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Wellness", "Spa", "Traditional"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Amina El Haddad, Spa Director",
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
    images: [
      "/images/tours/casablanca/medina-alley.jpg",
      "/images/tours/casablanca/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Local", "Shopping"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Hassan Benjelloun",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer:
          "We carefully select all food vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the safest and most delicious street food options, frequented by locals rather than tourists. All food is freshly prepared, often right before your eyes. We provide hand sanitizer throughout the tour and can accommodate dietary restrictions with advance notice.",
      },
    ],
  },
  {
    title: "Day Trip: Rabat Royal City Tour",
    description:
      "Explore Morocco's elegant capital city with a day trip to Rabat featuring the royal palace, ancient Kasbah des Oudaias, historic Chellah necropolis, and the magnificent Hassan Tower, with round-trip transportation from your Casablanca hotel.",
    images: [
      "/images/tours/casablanca/rabat-kasbah.jpg",
      "/images/tours/casablanca/hassan-tower.jpg",
    ],
    duration: "9 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Day Trip", "History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mohammed Cherkaoui",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far is Rabat from Casablanca?",
        answer:
          "Rabat is approximately 87 kilometers (54 miles) northeast of Casablanca. The drive takes about 1 hour and 15 minutes each way along a modern highway. We travel in comfortable, air-conditioned vehicles with a mid-morning departure from Casablanca, giving us ample time to explore Rabat's highlights before returning in the early evening.",
      },
    ],
  },
  {
    title: "Moroccan Photography Masterclass",
    description:
      "Perfect your photography skills with a professional photographer who guides you through Casablanca's most photogenic locations, from hidden courtyards and bustling markets to architectural marvels in optimal lighting conditions.",
    images: [
      "/images/tours/casablanca/photo-workshop.jpg",
      "/images/tours/casablanca/mosque-photography.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Photography", "Art", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Nadia Sebti",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This tour is suitable for photographers of all levels using any type of camera, including smartphones, point-and-shoot, or DSLRs. If using a DSLR, we recommend bringing a standard zoom lens (24-70mm or similar) and perhaps a wide-angle lens for architectural shots. Tripods are welcome but not essential. Our guide can tailor instruction to your specific equipment and skill level, focusing on composition, lighting, and capturing the unique character of Moroccan scenes.",
      },
    ],
  },
  {
    title: "Family Adventure: Moroccan Crafts & Culture for Kids",
    description:
      "An interactive family experience designed specifically for children and parents, featuring kid-friendly workshops in pottery making, Moroccan storytelling, traditional music, and a treasure hunt through safe areas of the old medina.",
    images: [
      "/images/tours/casablanca/kids-pottery.jpg",
      "/images/tours/casablanca/family-activities.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Family", "Kids", "Interactive"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Samira & Jamal",
    tourCategoryId: "family",
    faqs: [
      {
        question: "What ages is this tour appropriate for?",
        answer:
          "This tour is specially designed for families with children ages 5-12, though older and younger siblings are always welcome. Activities are adaptable based on the ages of children in the group. Our guides are experienced educators who know how to engage children with Moroccan culture in age-appropriate, hands-on ways. Parents participate in all activities alongside their children, creating shared family memories.",
      },
    ],
  },
  {
    title: "Sunset Desert Beach Dinner & Arabian Nights",
    description:
      "Experience a magical evening beginning with a sunset camel ride along the Atlantic shore, followed by an intimate Moroccan feast in a private beach tent adorned with lanterns, cushions, and carpets, accompanied by traditional music.",
    images: [
      "/images/tours/casablanca/beach-sunset.jpg",
      "/images/tours/casablanca/romantic-dinner.jpg",
    ],
    duration: "6 hours",
    price: "$185",
    rating: 4.9,
    tags: ["Romantic", "Dinner", "Sunset"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Youssef & Leila",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can modify the menu for vegetarians, vegans, gluten-free, and most other dietary needs. The standard feast includes a variety of traditional Moroccan specialties: multiple salads and mezze, tagine (slow-cooked stew with meat or vegetarian options), couscous with seasonal vegetables, fresh seafood, and pastries with honey and nuts for dessert. All dietary modifications maintain the authentic Moroccan flavors and presentation.",
      },
    ],
  },
  {
    title: "Luxury Casablanca: Private Tour & Fine Dining",
    description:
      "Indulge in the finest Casablanca has to offer with private chauffeur-driven exploration, exclusive access to luxury locations, rooftop champagne, and dinner at Morocco's most acclaimed restaurant with a customized tasting menu.",
    images: [
      "/images/tours/casablanca/luxury-transportation.jpg",
      "/images/tours/casablanca/fine-dining.jpg",
    ],
    duration: "8 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Luxury", "Exclusive", "Gourmet"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mehdi Benkirane",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What makes this experience luxurious?",
        answer:
          "This VIP experience features transportation in a premium vehicle (Mercedes or equivalent) with professional chauffeur, a dedicated personal guide, champagne reception at an exclusive rooftop venue overlooking the Hassan II Mosque, private shopping experiences at high-end boutiques and artisan studios, and dinner at a Michelin-quality restaurant where the chef will create a custom tasting menu paired with Moroccan and international wines. Every detail is customized to your preferences.",
      },
    ],
  },
  {
    title: "Day Trip: Coastal Retreat to El Jadida & Azemmour",
    description:
      "Escape to the charming coastal towns near Casablanca, exploring the UNESCO-listed Portuguese fortress of El Jadida and the artist haven of Azemmour with its whitewashed medina, including a seafood lunch by the harbor.",
    images: [
      "/images/tours/casablanca/el-jadida-cistern.jpg",
      "/images/tours/casablanca/azemmour-walls.jpg",
    ],
    duration: "9 hours",
    price: "$125",
    rating: 4.7,
    tags: ["Day Trip", "Coastal", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Rachid Douiri",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What will we see in El Jadida?",
        answer:
          "El Jadida's highlight is the Portuguese Citadel, a UNESCO World Heritage site built in the early 16th century. We'll explore its massive star-shaped fortifications, walk along the ramparts with ocean views, and visit the atmospheric underground cistern with its forest of columns reflected in the shallow pool of water—a location featured in several films. We'll also see the unique fusion of Portuguese, Moroccan and Jewish architectural influences in the old city.",
      },
    ],
  },
  {
    title: "Casablanca Jewish Heritage Tour",
    description:
      "Discover the rich history and cultural contributions of Morocco's Jewish community through visits to historic synagogues, the Jewish cemetery, Museum of Moroccan Judaism, and neighborhoods that once thrived with Jewish life.",
    images: [
      "/images/tours/casablanca/synagogue.jpg",
      "/images/tours/casablanca/jewish-museum.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Jewish Heritage", "History", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Simon Levy",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is the significance of Jewish heritage in Morocco?",
        answer:
          "Morocco once had the largest Jewish community in the Muslim world, with a presence dating back over 2,000 years. Unlike many other Arab countries, Morocco has officially preserved its Jewish heritage sites and maintains positive relationships with its Jewish diaspora. Casablanca is home to the only Jewish Museum in the Arab world and still has active synagogues serving the remaining Jewish population. Our tour explores this unique history of coexistence and cultural exchange between Muslim and Jewish Moroccans throughout centuries.",
      },
    ],
  },
  {
    title: "Moroccan Artisanry Workshop: Zellige Tile Making",
    description:
      "Learn the intricate art of traditional Moroccan zellige tile mosaic from master craftsmen, creating your own geometric pattern using ancient techniques passed down through generations, with your finished piece shipped to your home.",
    images: [
      "/images/tours/casablanca/zellige-workshop.jpg",
      "/images/tours/casablanca/tile-crafting.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Craft", "Workshop", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Master Craftsman Hamid",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is artistic experience required?",
        answer:
          "No prior artistic experience is needed. Our master craftsmen will guide you through each step, from selecting your geometric pattern to cutting tiles and setting them in plaster using traditional methods. While zellige is an intricate art form that takes years to master, we've designed the workshop so beginners can successfully create a beautiful small piece (approximately 8x8 inches) to take home. More experienced participants can attempt more complex designs.",
      },
    ],
  },
  {
    title: "Modern Casablanca Urban Experience",
    description:
      "Discover contemporary Casablanca beyond the tourist sites with visits to cutting-edge art galleries, trendy cafés, modern architecture, and vibrant neighborhoods where young Moroccans are creating new expressions of their cultural heritage.",
    images: [
      "/images/tours/casablanca/modern-architecture.jpg",
      "/images/tours/casablanca/art-gallery.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Contemporary", "Art", "Urban"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Zineb El Rhazoui",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How is this different from standard Casablanca tours?",
        answer:
          "While most tours focus on historical or traditional aspects of Moroccan culture, this experience highlights the dynamic, evolving side of Casablanca as North Africa's business hub and cultural trendsetter. We'll visit contemporary art galleries featuring emerging Moroccan artists, see innovative architecture blending modern and traditional elements, explore neighborhoods where young entrepreneurs are opening design studios and concept stores, and discuss current social and cultural movements reshaping Morocco's largest city.",
      },
    ],
  },
];

export default casablancaTours;
