import { Tour } from "@/lib/interfaces/services/tours";

export const punoTours: Tour[] = [
  {
    title: "Lake Titicaca Floating Islands Experience",
    description:
      "Discover the unique floating islands of the Uros people on Lake Titicaca, learn their reed-weaving techniques, and visit the culturally rich island of Taquile, renowned for its textile traditions and pristine landscapes.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/floating-islands.jpg",
      "/images/tours/puno/taquile-island.jpg",
    ],
    duration: "8 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cultural", "Lake", "Indigenous"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Puno Port, Av. Costanera, Puno",
      coordinates: {
        latitude: -15.8402,
        longitude: -70.0219,
      },
      instructions:
        "Meet at the main entrance to Puno Port. Your guide will be holding a sign with 'Titicaca Experience' written on it.",
      contactNumber: "+51 951 234 567",
      contactEmail: "titicaca@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-18",
      "2023-12-19",
      "2023-12-20",
      "2023-12-21",
      "2023-12-22",
      "2023-12-23",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
      "2024-02-16",
      "2024-02-17",
      "2024-02-18",
      "2024-02-23",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "Cruise across the highest navigable lake in the world to the famous Uros floating islands",
      "Learn how the islands are constructed using totora reeds and maintained over generations",
      "Experience a traditional reed boat ride piloted by an Uros islander",
      "Visit Taquile Island, known for its UNESCO-recognized textile traditions",
      "Enjoy breathtaking 360° views of Lake Titicaca from Taquile's highest points",
    ],

    inclusions: [
      "Round-trip boat transportation from Puno",
      "Bilingual guide (English/Spanish)",
      "Traditional reed boat ride at Uros",
      "Lunch on Taquile Island",
      "All entrance fees and tourist taxes",
      "Life jackets and safety equipment",
      "Bottled water",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Additional drinks beyond water provided",
      "Optional tips for local communities",
      "Souvenirs and handicrafts",
      "Additional activities beyond those mentioned",
      "Travel insurance",
    ],

    itinerary: [
      "07:30 - Meet at Puno Port for boarding",
      "07:45 - Depart by motorboat toward the Uros floating islands",
      "08:30 - Arrive at the main Uros Island for guided tour",
      "09:00 - Demonstration of island construction techniques",
      "09:30 - Traditional reed boat ride between islands",
      "10:00 - Continue journey to Taquile Island (2-hour boat ride)",
      "12:00 - Arrive at Taquile Island and begin walking tour",
      "12:45 - Traditional lunch at local restaurant with lake views",
      "14:00 - Visit the central plaza and textile cooperative",
      "14:30 - Demonstration of traditional textile techniques",
      "15:00 - Begin descent to the boat dock with panoramic views",
      "15:30 - Depart Taquile Island for return journey",
      "17:30 - Arrive back at Puno Port where tour concludes",
    ],

    faqs: [
      {
        question: "Will I experience altitude sickness on this tour?",
        answer:
          "Lake Titicaca sits at 3,812 meters (12,507 feet) above sea level, so altitude sickness is possible for those not acclimatized. We recommend spending at least one full day in Puno before the tour to adjust to the altitude. Stay hydrated, avoid alcohol, and consider altitude medication if you're sensitive to high elevations.",
      },
      {
        question: "How physically demanding is the walking portion on Taquile Island?",
        answer:
          "The walk on Taquile involves climbing approximately 500 stone steps from the boat dock up to the main plaza, followed by a gentler descent on the other side of the island. The high altitude makes this moderately challenging. We take a slow pace with plenty of stops, but you should be in reasonable physical condition. Comfortable walking shoes are essential.",
      },
      {
        question: "Should I bring cash for the islands?",
        answer:
          "Yes, bringing some cash in Peruvian Soles is recommended. While the tour includes all necessary fees, you may want to purchase handicrafts directly from artisans or tip your local hosts. Most importantly, the communities on both Uros and Taquile rely on tourism for their livelihood, and purchasing their handcrafted items directly supports these traditional ways of life.",
      },
    ],
  },
  {
    title: "Sillustani Pre-Inca Tombs & Umayo Lagoon",
    description:
      "Journey to the mysterious Sillustani funerary towers overlooking Lake Umayo, exploring ancient burial practices of pre-Inca civilizations while enjoying the serene natural beauty and traditional farms of the Altiplano.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/sillustani-towers.jpg",
      "/images/tours/puno/lake-umayo.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Archaeological", "Historical", "Nature"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "archaeology",

    meetingPoint: {
      address: "Plaza de Armas, Central Puno",
      coordinates: {
        latitude: -15.8402,
        longitude: -70.0277,
      },
      instructions:
        "Meet in front of the Cathedral on the main plaza. Look for our guide with a blue 'Paragon Trails' flag.",
      contactNumber: "+51 951 234 568",
      contactEmail: "sillustani@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
    ],

    highlights: [
      "Explore the impressive cylindrical funerary towers (chullpas) of the Kolla civilization",
      "Learn about ancient burial practices and astronomical alignments of pre-Inca cultures",
      "Enjoy panoramic views of Lake Umayo and the surrounding Altiplano landscape",
      "Visit a traditional Quechua family home and participate in local customs",
      "Encounter native Andean wildlife including vizcachas (similar to chinchillas)",
    ],

    inclusions: [
      "Transportation in comfortable vehicle",
      "Professional English-speaking archaeological guide",
      "Entrance fees to Sillustani archaeological site",
      "Traditional hot beverage at local family home",
      "Bottled water",
      "Binoculars for wildlife viewing",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for additional $10)",
      "Additional food beyond included beverage",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional activities not mentioned in itinerary",
    ],

    itinerary: [
      "13:30 - Meet at Plaza de Armas",
      "13:45 - Scenic drive to Sillustani (approximately 45 minutes)",
      "14:30 - Guided tour of the archaeological site with historical context",
      "15:00 - Explore the main chullpa towers with detailed explanations",
      "15:30 - Free time for photography and exploration of the peninsula",
      "16:00 - Visit to traditional local family home with cultural demonstration",
      "16:30 - Hot coca or muña tea tasting with local family",
      "17:00 - Begin return journey to Puno with sunset views",
      "17:45 - Arrive back in central Puno where tour concludes",
    ],

    faqs: [
      {
        question: "What's the significance of the Sillustani tombs?",
        answer:
          "The Sillustani funerary towers (chullpas) were built by the Kolla civilization, which predated the Incas. Unlike ordinary graves, these impressive cylindrical structures housed the remains of entire noble families and were filled with offerings including food, jewelry, and ceramics. The sophisticated engineering involved in their construction – with precisely fitted stones weighing up to 6 tons – demonstrates the advanced architectural knowledge of these pre-Inca people.",
      },
      {
        question: "Is there much walking involved at the site?",
        answer:
          "The site involves a moderate walking route of about 1km (0.6 miles) on uneven terrain with gentle inclines. The high altitude (3,840m/12,600ft above sea level) makes the walk more challenging than the distance suggests. We maintain a slow pace with frequent stops for explanations, but good walking shoes and a reasonable level of fitness are recommended.",
      },
      {
        question: "What should I bring for this tour?",
        answer:
          "We recommend bringing sun protection (hat, sunglasses, sunscreen) as the sun is intense at high altitude, a windbreaker or warm layer as temperatures can drop quickly, comfortable walking shoes, and a camera. Money for optional souvenirs is useful if you'd like to purchase handcrafts from the local family we visit.",
      },
    ],
  },
  {
    title: "Amantaní Island Homestay Experience",
    description:
      "Immerse yourself in traditional Andean life with an overnight homestay on Amantaní Island, sharing meals and customs with a local family, hiking to ancient ceremonial sites, and experiencing authentic cultural celebrations.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/amantani-island.jpg",
      "/images/tours/puno/homestay-family.jpg",
    ],
    duration: "2 days",
    price: "$120",
    rating: 4.9,
    tags: ["Cultural Immersion", "Homestay", "Indigenous"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Puno Port, Av. Costanera, Puno",
      coordinates: {
        latitude: -15.8402,
        longitude: -70.0219,
      },
      instructions:
        "Meet at the main entrance to Puno Port at 7:30 AM. Your guide will be holding a sign with 'Amantaní Homestay' written on it.",
      contactNumber: "+51 951 234 569",
      contactEmail: "amantani@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Live with a local Quechua family and experience their traditional way of life",
      "Hike to Pachatata and Pachamama ceremonial sites for incredible sunset views",
      "Participate in a traditional music and dance celebration with your host family",
      "Learn about traditional farming techniques, textile weaving, and local customs",
      "Experience stunning stargazing from one of the world's highest lakes",
    ],

    inclusions: [
      "Round-trip boat transportation from Puno",
      "Bilingual guide (English/Spanish)",
      "Homestay accommodation with local family (basic, authentic conditions)",
      "All meals from lunch on day 1 through lunch on day 2",
      "Traditional cultural activities with host family",
      "Entrance fees to all sites",
      "Small gift for host family",
    ],

    exclusions: [
      "Hotel pickup and drop-off in Puno",
      "Sleeping bag (recommended; rentals available for $5)",
      "Additional snacks and beverages",
      "Optional donations to community projects",
      "Souvenirs and handicrafts",
      "Travel insurance",
    ],

    itinerary: [
      "Day 1: 07:30 - Meet at Puno Port for boarding",
      "Day 1: 08:00 - Depart by motorboat toward Amantaní Island (3-hour journey)",
      "Day 1: 08:45 - Brief stop at Uros floating islands en route",
      "Day 1: 11:00 - Arrive at Amantaní Island and meet host families",
      "Day 1: 12:00 - Welcome lunch with host family",
      "Day 1: 13:30 - Settle into family home and orientation to island life",
      "Day 1: 14:30 - Guided hike to Pachatata ceremonial site (1-hour uphill walk)",
      "Day 1: 16:00 - Sunset views and traditional blessing ceremony",
      "Day 1: 17:30 - Return to family home",
      "Day 1: 19:00 - Dinner with family",
      "Day 1: 20:00 - Traditional music and dance celebration with locals",

      "Day 2: 07:00 - Breakfast with family",
      "Day 2: 08:00 - Participate in morning farming or craft activities",
      "Day 2: 09:30 - Visit local school or community project",
      "Day 2: 11:00 - Help prepare traditional lunch with family",
      "Day 2: 12:00 - Farewell lunch",
      "Day 2: 13:30 - Depart Amantaní Island",
      "Day 2: 16:30 - Arrive back at Puno Port where tour concludes",
    ],

    faqs: [
      {
        question: "What are the accommodations like?",
        answer:
          "The homestay accommodations are basic but clean and authentic. Expect simple adobe rooms with comfortable beds and plenty of blankets (nights are cold at this elevation). Bathrooms are typically outhouses or very simple facilities with limited or no hot water. This authentic experience provides insight into real Andean life, which means leaving certain comforts behind in exchange for genuine cultural immersion.",
      },
      {
        question: "What should I bring for the overnight stay?",
        answer:
          "Essential items include a sleeping bag (or rent one from us), flashlight (electricity is limited), toilet paper, hand sanitizer, warm clothing for evening (temperatures drop significantly at night), hat and sunscreen for daytime, comfortable walking shoes, basic toiletries, a small gift for your host family (school supplies, fruit, or chocolate are appreciated), and any necessary medications.",
      },
      {
        question: "Will we be able to communicate with the local family?",
        answer:
          "The local families primarily speak Quechua and basic Spanish. Your guide will translate during group activities, but during time alone with your family, communication will be more basic. Families hosting visitors are accustomed to using gestures, simple Spanish words, and visual cues to communicate. This language barrier often leads to memorable and heartwarming exchanges that transcend verbal communication.",
      },
    ],
  },
  {
    title: "Lampa Colonial Town & Andean Countryside",
    description:
      "Visit the 'Pink City' of Lampa with its architectural treasures including a European-inspired church housing a Michelangelo replica, then explore the traditional countryside with its stone bridges, pastoral landscapes, and authentic rural communities.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/lampa-church.jpg",
      "/images/tours/puno/andean-countryside.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.6,
    tags: ["Colonial", "Off-the-beaten-path", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Hotel Libertador, Jr. Sesquicentenario 610, Puno",
      coordinates: {
        latitude: -15.8269,
        longitude: -70.0200,
      },
      instructions:
        "Meet in the lobby of Hotel Libertador. Your guide will meet you at the reception area.",
      contactNumber: "+51 951 234 570",
      contactEmail: "lampa@paragontrails.com",
    },

    availableDates: [
      "2023-12-18",
      "2023-12-25",
      "2024-01-01",
      "2024-01-08",
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
    ],

    highlights: [
      "Visit the stunning Santiago Apóstol Church with its replica of Michelangelo's Pietà",
      "Explore the unique catacombs and skull room beneath the church",
      "Walk through Lampa's historic center with its distinctive pink stone buildings",
      "Cross ancient stone bridges and learn about their Spanish colonial history",
      "Visit a traditional Andean village and interact with local craftspeople",
    ],

    inclusions: [
      "Transportation in comfortable vehicle",
      "Professional English-speaking guide",
      "Entrance fees to all sites",
      "Traditional lunch at local restaurant",
      "Bottled water",
      "Snacks during the journey",
    ],

    exclusions: [
      "Hotel pickup and drop-off (outside meeting point)",
      "Additional food and beverages beyond those included",
      "Optional donations at church",
      "Gratuities (recommended but at your discretion)",
      "Souvenirs and personal expenses",
    ],

    itinerary: [
      "09:00 - Meet at Hotel Libertador for departure",
      "09:15 - Scenic drive to Lampa through the Altiplano (1 hour)",
      "10:15 - Arrive in Lampa and begin walking tour of historic center",
      "10:45 - Visit the Santiago Apóstol Church and its remarkable interior",
      "11:30 - Explore the underground catacombs and skull room",
      "12:15 - Visit the main plaza and colonial buildings",
      "13:00 - Traditional lunch at a local restaurant",
      "14:00 - Drive to nearby Andean village",
      "14:30 - Visit traditional craftspeople and ancient stone bridges",
      "15:15 - Begin return journey to Puno with photo stops",
      "16:00 - Arrive back in Puno where tour concludes",
    ],

    faqs: [
      {
        question: "Why is Lampa called the 'Pink City'?",
        answer:
          "Lampa earned its nickname 'Ciudad Rosada' (Pink City) because many of its buildings were constructed using distinctive pink-colored volcanic stone from nearby quarries. This unique architectural characteristic dates back to the Spanish colonial period when the town was an important mining center. The soft pink hue is particularly striking during sunset when the entire town seems to glow in rose-colored light.",
      },
      {
        question: "What makes the church in Lampa special?",
        answer:
          "The Santiago Apóstol Church contains several remarkable features that make it unique. Most notably, it houses a full-scale replica of Michelangelo's Pietà, one of only two authorized copies in the world. The church also features a fascinating crypt lined with hundreds of skulls and bones arranged in geometric patterns, combining European Catholic traditions with indigenous Andean death rituals in a unique cultural fusion.",
      },
      {
        question: "Is Lampa frequently visited by tourists?",
        answer:
          "No, Lampa remains relatively unknown to mass tourism despite its significant cultural and architectural importance. This makes it an excellent off-the-beaten-path destination where you can explore colonial heritage without the crowds found at more popular sites. The town offers an authentic glimpse into provincial Peruvian life rarely experienced by visitors focused only on the main tourist circuit.",
      },
    ],
  },
  {
    title: "Llachón Peninsula: Kayaking & Traditional Textiles",
    description:
      "Paddle along the pristine shores of Lake Titicaca at Llachón Peninsula, then visit a local textile cooperative to learn ancestral weaving techniques, experiencing authentic rural life on the shores of the world's highest navigable lake.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/llachon-kayaking.jpg",
      "/images/tours/puno/textile-weaving.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Adventure", "Crafts", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Casa Andina Standard Puno, Jr. Sesquicentenario 1970, Puno",
      coordinates: {
        latitude: -15.8280,
        longitude: -70.0217,
      },
      instructions:
        "Meet in the lobby of Casa Andina Standard hotel. Look for your guide wearing a blue vest with the Paragon Trails logo.",
      contactNumber: "+51 951 234 571",
      contactEmail: "llachon@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-24",
      "2023-12-31",
      "2024-01-07",
      "2024-01-14",
      "2024-01-21",
      "2024-01-28",
      "2024-02-04",
      "2024-02-11",
      "2024-02-18",
      "2024-02-25",
    ],

    highlights: [
      "Kayak along the pristine shores of Lake Titicaca with stunning mountain views",
      "Visit a community-run textile cooperative preserving ancient weaving techniques",
      "Learn about natural dyeing processes using local plants and minerals",
      "Participate in a hands-on weaving workshop with master artisans",
      "Enjoy a farm-to-table lunch prepared with traditional Andean ingredients",
    ],

    inclusions: [
      "Transportation to and from Llachón Peninsula",
      "Professional bilingual guide",
      "Quality kayaking equipment and safety gear",
      "Kayaking instruction and guided paddle",
      "Textile workshop participation",
      "Traditional Andean lunch",
      "Bottled water and snacks",
    ],

    exclusions: [
      "Hotel pickup and drop-off (outside meeting point hotel)",
      "Additional textile materials beyond basic workshop supplies",
      "Optional gratuities for local artisans and guide",
      "Personal expenses and souvenirs",
      "Alcoholic beverages",
    ],

    itinerary: [
      "08:00 - Meet at Casa Andina hotel for departure",
      "08:15 - Scenic drive to Llachón Peninsula (1.5 hours)",
      "09:45 - Arrival and introduction to kayaking equipment",
      "10:15 - Safety briefing and basic paddling instruction",
      "10:30 - Begin kayaking along the shores of Lake Titicaca",
      "12:00 - Return to shore and short walk to local community",
      "12:30 - Visit textile cooperative and meet local artisans",
      "13:00 - Traditional Andean lunch with local family",
      "14:00 - Participate in textile workshop learning ancient techniques",
      "15:30 - Free time to purchase handicrafts directly from artisans",
      "16:00 - Begin return journey to Puno",
      "17:30 - Arrive back in Puno where tour concludes",
    ],

    faqs: [
      {
        question: "Do I need kayaking experience for this tour?",
        answer:
          "No prior kayaking experience is necessary. We use stable, user-friendly double kayaks, and your guide provides basic instruction before setting out. The waters of Lake Titicaca in this area are typically calm, making it perfect for beginners. Life jackets and safety equipment are provided for all participants, and your guide stays with the group at all times.",
      },
      {
        question: "What is special about the textiles in this region?",
        answer:
          "The Llachón Peninsula is known for preserving ancient Andean textile traditions that date back thousands of years. Local artisans continue to use natural dyeing techniques derived from plants, minerals, and insects to create vibrant colors. The intricate patterns each tell stories of the community's history, cosmology, and daily life. Unlike mass-produced souvenirs, each textile is unique, reflecting the individual artisan's creativity while maintaining traditional motifs.",
      },
      {
        question: "Is there a lot of walking on this tour?",
        answer:
          "This tour involves moderate walking, primarily flat terrain with some gentle slopes in the village. The highest amount of physical activity comes during the kayaking portion (approximately 1.5 hours of paddling). The village and textile cooperative are accessible with minimal walking, making this suitable for most fitness levels.",
      },
    ],
  },
  {
    title: "Aymara Shamanic Ritual & Healing Ceremony",
    description:
      "Participate in an authentic Andean spiritual ceremony led by an Aymara shaman, learning about ancient belief systems centered around Pachamama (Mother Earth) and experiencing traditional energy cleansing rituals in a sacred lakeside setting.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/aymara-shaman.jpg",
      "/images/tours/puno/andean-ceremony.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.8,
    tags: ["Spiritual", "Indigenous", "Wellness"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness",

    meetingPoint: {
      address: "Kuntur Wasi Hotel, Jr. Independencia 185, Puno",
      coordinates: {
        latitude: -15.8397,
        longitude: -70.0280,
      },
      instructions:
        "Meet in the lobby of Kuntur Wasi Hotel. Your spiritual guide will greet you wearing traditional Andean clothing.",
      contactNumber: "+51 951 234 572",
      contactEmail: "ceremony@paragontrails.com",
    },

    availableDates: [
      "2023-12-21",
      "2024-01-05",
      "2024-01-19",
      "2024-02-02",
      "2024-02-16",
    ],

    highlights: [
      "Participate in an authentic payment to Pachamama (Mother Earth) ceremony",
      "Experience energy cleansing with traditional herbs and rituals",
      "Learn about Andean cosmology and spiritual beliefs from an Aymara shaman",
      "Create your own despacho (offering bundle) with sacred items",
      "Connect with ancient traditions in a sacred lakeside location",
    ],

    inclusions: [
      "Transportation to ceremonial site",
      "Authentic Aymara spiritual guide",
      "All ceremonial materials and offerings",
      "Traditional cocoa leaf reading",
      "Sacred herb bundle to take home",
      "Hot coca or muña tea",
      "Protective stone from Lake Titicaca",
    ],

    exclusions: [
      "Hotel pickup and drop-off (outside meeting point)",
      "Additional personal offerings beyond those provided",
      "Meals and additional beverages",
      "Personal ritual items (available for purchase)",
      "Gratuities for spiritual guide",
    ],

    itinerary: [
      "14:00 - Meet at Kuntur Wasi Hotel",
      "14:15 - Introduction to Andean spirituality and ceremony overview",
      "14:45 - Drive to sacred ceremonial site outside Puno",
      "15:15 - Arrival and preparation of the sacred space",
      "15:30 - Coca leaf reading and personal intention setting",
      "16:00 - Creation of personal despacho (offering bundle)",
      "16:30 - Traditional cleansing ritual with herbs and incense",
      "17:00 - Main offering ceremony to Pachamama and Apus (mountain spirits)",
      "17:45 - Meditation and connection with natural elements",
      "18:00 - Closing circle and sharing of experiences",
      "18:30 - Return to Puno where ceremony concludes",
    ],

    faqs: [
      {
        question: "Is this an authentic spiritual experience?",
        answer:
          "Yes, this ceremony is led by genuine Aymara spiritual practitioners who were trained through ancestral lineages. The rituals conducted are the same ones performed by local communities for centuries, not theatrical demonstrations for tourists. The shaman takes these ceremonies seriously as real spiritual practices and expects participants to approach them with appropriate respect and openness.",
      },
      {
        question: "Do I need to prepare for the ceremony?",
        answer:
          "To fully benefit from the experience, it's recommended to refrain from alcohol for 24 hours before the ceremony and come with an open mind. Wear comfortable clothing appropriate for sitting on the ground, and bring a warm layer as ceremonies often take place outdoors. You may wish to consider an intention or question to focus on during the ceremony, though this is not required.",
      },
      {
        question: "Is this ceremony suitable for everyone?",
        answer:
          "The ceremony is respectful and accessible to people of all backgrounds and beliefs. You don't need prior knowledge of Andean spirituality to participate. However, those uncomfortable with indigenous spiritual practices or the ceremonial use of coca leaves (which are legal and sacred in Peru) may prefer a different experience. The ceremony does not involve hallucinogens or other consciousness-altering substances.",
      },
    ],
  },
  {
    title: "Pukara Archaeological Site & Pottery Museum",
    description:
      "Discover the ancient civilization of Pukara, predating the Incas by over 1,500 years, exploring temple ruins, carved stone monoliths, and a specialized museum housing remarkable pottery and stone sculptures from this sophisticated pre-Columbian culture.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/pukara-ruins.jpg",
      "/images/tours/puno/pottery-museum.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.6,
    tags: ["Archaeological", "Museum", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "archaeology",

    meetingPoint: {
      address: "Xima Puno Hotel, Jr. Sesquicentenario 1970, Puno",
      coordinates: {
        latitude: -15.8401,
        longitude: -70.0259,
      },
      instructions:
        "Meet in the lobby of Xima Puno Hotel. Your guide will be waiting with a sign featuring the Pukara stone monolith image.",
      contactNumber: "+51 951 234 573",
      contactEmail: "pukara@paragontrails.com",
    },

    availableDates: [
      "2023-12-19",
      "2023-12-26",
      "2024-01-02",
      "2024-01-09",
      "2024-01-16",
      "2024-01-23",
      "2024-01-30",
      "2024-02-06",
      "2024-02-13",
      "2024-02-20",
      "2024-02-27",
    ],

    highlights: [
      "Explore the ancient temple complex of Pukara dating from 1600 BCE",
      "See remarkable carved stone monoliths depicting anthropomorphic figures",
      "Visit the specialized archaeological museum housing unique Pukara ceramic artifacts",
      "Learn about this sophisticated pre-Inca civilization that influenced Andean culture",
      "Understand the significance of the iconic Pukara Bull still created by local artisans",
    ],

    inclusions: [
      "Transportation in comfortable vehicle",
      "Professional archaeological guide",
      "Entrance fees to archaeological site and museum",
      "Traditional lunch in Pukara town",
      "Bottled water and snacks",
      "Informative booklet about Pukara civilization",
    ],

    exclusions: [
      "Hotel pickup and drop-off (outside meeting point)",
      "Additional food and drinks beyond those included",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs",
      "Optional ceramic workshop participation ($10 extra)",
    ],

    itinerary: [
      "09:00 - Meet at Xima Puno Hotel for departure",
      "09:15 - Scenic drive north through the Altiplano to Pukara (1.5 hours)",
      "10:45 - Arrive at Pukara archaeological site",
      "11:00 - Guided tour of the temple complex and sunken courtyard",
      "12:00 - View the stone monoliths with expert interpretation",
      "12:45 - Visit to the Pukara Museum with its remarkable collection",
      "13:30 - Traditional lunch in Pukara town",
      "14:30 - Optional visit to ceramic workshops continuing ancient traditions",
      "15:15 - Begin return journey to Puno",
      "16:30 - Arrive back in Puno where tour concludes",
    ],

    faqs: [
      {
        question: "How significant is Pukara in Andean archaeology?",
        answer:
          "Pukara represents one of the earliest complex civilizations in the Andean highlands, flourishing between 1600 BCE and 400 CE, making it significantly older than the Inca Empire. This culture developed sophisticated ceramic techniques, monumental stone carving, and complex agricultural systems that influenced later Andean civilizations. Despite its importance, Pukara remains largely unknown to most visitors, offering archaeology enthusiasts an opportunity to explore a significant site without crowds.",
      },
      {
        question: "What is the Pukara Bull and why is it significant?",
        answer:
          "The Pukara Bull (Torito de Pukara) is a ceramic figure still produced today throughout the region as a good luck charm, particularly for homes. Traditionally placed in pairs on rooftops, these colorful ceramic bulls are believed to bring prosperity and protection. Their origin dates back to the ancient Pukara civilization, demonstrating how pre-Columbian symbols have endured and evolved through colonial times into modern folk art traditions.",
      },
      {
        question: "How physically demanding is this tour?",
        answer:
          "This tour involves moderate walking on uneven archaeological terrain. The site is at high elevation (3,900m/12,795ft), which can make walking more strenuous for those unacclimatized to altitude. The archaeological site covers approximately 4 hectares, requiring about 1-1.5 hours of walking with frequent stops for explanation. The museum portion is less physically demanding. Comfortable walking shoes and sun protection are essential.",
      },
    ],
  },
  {
    title: "Lake Titicaca Sunset Sailing & Stargazing",
    description:
      "Set sail on the sacred waters of Lake Titicaca aboard a comfortable catamaran to witness a spectacular sunset, followed by expert-guided stargazing in one of South America's clearest night skies, far from light pollution.",
    city: "Puno",
    country: "Peru",
    region: "Puno Region",
    images: [
      "/images/tours/puno/titicaca-sunset.jpg",
      "/images/tours/puno/night-stargazing.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Sunset", "Sailing", "Stargazing"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "romantic",

    meetingPoint: {
      address: "Titilaka Dock, 30km from Puno",
      coordinates: {
        latitude: -15.7956,
        longitude: -69.7038,
      },
      instructions:
        "Meet at the private dock of Titilaka Hotel. Transportation from central Puno hotels can be arranged for additional cost during booking.",
      contactNumber: "+51 951 234 574",
      contactEmail: "sailing@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Sail on Lake Titicaca aboard a comfortable catamaran during the golden hour",
      "Witness spectacular sunset colors reflecting on the world's highest navigable lake",
      "Enjoy appetizers and wine as you cruise the sacred waters",
      "Learn about Andean astronomy and its importance in indigenous cultures",
      "Experience exceptional stargazing with professional telescope and expert guidance",
    ],

    inclusions: [
      "Sunset sailing cruise on Lake Titicaca",
      "Professional captain and crew",
      "Astronomy expert guide",
      "Use of professional telescope and stargazing equipment",
      "Selection of appetizers and snacks",
      "Wine, hot chocolate, and non-alcoholic beverages",
      "Warm blankets and jackets for evening comfort",
      "Star map of the Southern Hemisphere to take home",
    ],

    exclusions: [
      "Transportation to/from dock (available for $15 per person round trip)",
      "Additional alcoholic beverages beyond included wine",
      "Full dinner (light appetizers provided)",
      "Personal expenses",
      "Gratuities for crew and guide",
    ],

    itinerary: [
      "16:30 - Meet at Titilaka Dock (or hotel pickup if arranged)",
      "16:45 - Introduction and safety briefing",
      "17:00 - Board catamaran and begin sunset cruise",
      "17:30 - Appetizers and beverages served as sun begins to set",
      "18:00 - Prime sunset viewing with photography opportunities",
      "18:30 - Brief presentation on Andean astronomy as darkness falls",
      "19:00 - Dock at secluded bay for optimal stargazing conditions",
      "19:15 - Professional telescope setup and guided stargazing experience",
      "19:45 - Hot beverages served during constellation identification",
      "20:15 - Return cruise to dock",
      "20:30 - Tour concludes at Titilaka Dock (or return transport to Puno)",
    ],

    faqs: [
      {
        question: "Why is this area good for stargazing?",
        answer:
          "The Lake Titicaca region offers exceptional stargazing conditions due to its high altitude (3,812m/12,507ft), low humidity, minimal air pollution, and distance from major cities. These factors combine to create remarkably clear skies where the Milky Way is often visible to the naked eye. The southern hemisphere location also provides views of celestial features not visible from the northern hemisphere, including the Magellanic Clouds and the Southern Cross constellation.",
      },
      {
        question: "What celestial objects might we see?",
        answer:
          "Depending on the season and moon phase, you may observe planets like Jupiter, Saturn, and Mars; star clusters including the Pleiades; nebulae such as the Orion Nebula; and galaxies like the Magellanic Clouds. The Southern Cross and other southern hemisphere constellations are highlights year-round. Our astronomy guide customizes the viewing experience based on current celestial conditions to ensure the most impressive observations.",
      },
      {
        question: "Will it be too cold on the lake at night?",
        answer:
          "Evening temperatures on Lake Titicaca typically range from 0-10°C (32-50°F) depending on the season. We provide warm blankets, jackets, and hot beverages to ensure your comfort. The catamaran has both open viewing areas and a protected cabin space where you can warm up if needed. We recommend bringing layers, a warm hat, and gloves for maximum comfort during the stargazing portion of the tour.",
      },
    ],
  },
];

export default punoTours;
