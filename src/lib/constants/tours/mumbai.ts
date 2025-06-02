import { Tour } from "@/lib/interfaces/services/tours";

export const mumbaiTours: Tour[] = [
  {
    title: "Dharavi: Beyond the Slum Experience",
    description:
      "Explore Asia's largest slum with local guides born and raised in the community to discover its thriving industries, vibrant culture, and entrepreneurial spirit that generates an annual turnover of over $1 billion.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/dharavi-industries.jpg",
      "/images/tours/mumbai/dharavi-community.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Cultural", "Community", "Educational"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Dharavi Station, Western Railway, Dharavi, Mumbai 400017",
      coordinates: {
        latitude: 19.0407,
        longitude: 72.8567,
      },
      instructions:
        "Meet outside the main entrance of Dharavi Railway Station. Your guide will be wearing a blue shirt with 'Reality Tours' logo.",
      contactNumber: "+91 982-049-8678",
      contactEmail: "dharavi@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Visit small-scale industries including pottery, textiles, recycling, and leather",
      "Learn how Dharavi's entrepreneurial spirit creates $1B+ in annual revenue",
      "Interact with locals and gain insight into community life and organization",
      "See how residents have developed innovative solutions to urban challenges",
      "Support community development with 80% of tour proceeds going to local NGOs",
    ],

    inclusions: [
      "Local guide from the Dharavi community",
      "Small group size for personalized experience (maximum 6 participants)",
      "Bottled water",
      "Community development contribution",
      "Street snack tasting",
      "Visit to community center to learn about NGO initiatives",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included snack",
      "Gratuities",
      "Personal shopping expenses during tour",
      "Photography permit (available for additional fee at certain locations)",
    ],

    itinerary: [
      "09:30 - Meet at Dharavi Railway Station for introductions",
      "09:45 - Brief orientation on Dharavi's history and importance",
      "10:00 - Visit to recycling area to witness innovative upcycling industry",
      "10:30 - Tour pottery colony and interact with multi-generational artisans",
      "11:00 - Explore textile manufacturing area and leather workshops",
      "11:30 - Visit residential area with local guide explaining living conditions",
      "12:00 - Stop at local community center to learn about educational initiatives",
      "12:15 - Snack break at a local food stall",
      "12:30 - Tour concludes with Q&A session and information on community NGOs",
    ],

    faqs: [
      {
        question: "Is this tour exploitative of the community?",
        answer:
          "This tour was designed with and for the Dharavi community. 80% of tour proceeds go directly to local NGOs supporting education and healthcare initiatives within Dharavi. Our guides are residents who share their own community with pride and dignity, focusing on resilience, entrepreneurship, and creativity rather than poverty. Photography is limited to specific areas with clear guidelines to ensure respect for residents.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The guides are experienced in engaging younger audiences with age-appropriate explanations and activities. However, we recommend parental discretion for very young children due to the crowded and bustling environment.",
      },
    ],
  },
  {
    title: "Bollywood Studio Tour & Dance Workshop",
    description:
      "Go behind the scenes at one of Mumbai's legendary film studios to witness movie magic in action, followed by a choreography session where you'll learn signature Bollywood dance moves from professional performers.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/bollywood-set.jpg",
      "/images/tours/mumbai/dance-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Bollywood", "Entertainment", "Dance"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Film City Main Gate, Goregaon East, Mumbai 400065",
      coordinates: {
        latitude: 19.1647,
        longitude: 72.8913,
      },
      instructions:
        "Meet outside the main entrance gate of Film City. Your guide will be holding a sign with 'Bollywood Experience' written on it.",
      contactNumber: "+91 982-049-8679",
      contactEmail: "bollywood@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-24",
      "2023-12-26",
      "2023-12-28",
      "2023-12-30",
      "2024-01-01",
      "2024-01-03",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Exclusive access to active film sets with potential to witness ongoing shoots",
      "Tour sound stages, costume departments, and post-production facilities",
      "Learn about the history and impact of India's massive film industry",
      "Participate in a professional dance workshop featuring iconic Bollywood moves",
      "Dress in traditional Indian costumes for an optional photo shoot",
    ],

    inclusions: [
      "Professional entertainment industry guide",
      "Film City entrance and studio access fees",
      "90-minute Bollywood dance workshop with professional choreographer",
      "Costume rental for photo session",
      "Digital souvenir photos in costume (2 per person)",
      "Refreshments and bottled water",
      "Transportation between studio locations within Film City",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Professional video recording (available at additional cost)",
      "Extra costume changes beyond the included option",
      "Meals and additional snacks",
      "Gratuities for guide and dance instructor",
    ],

    itinerary: [
      "10:00 - Meet at Film City Main Gate for introductions",
      "10:15 - Orientation about Bollywood history and Film City development",
      "10:30 - Tour active sound stages and production facilities",
      "11:30 - Visit costume department and set design workshops",
      "12:15 - Refreshment break with Indian chai and snacks",
      "12:45 - Introduction to Bollywood dance styles and cultural significance",
      "13:00 - Professional dance workshop learning choreography from popular films",
      "14:30 - Costume session with traditional Indian outfits",
      "15:00 - Photo shoot with professional photographer",
      "15:30 - Tour conclusion with final Q&A session",
    ],

    faqs: [
      {
        question: "Will we see famous Bollywood actors?",
        answer:
          "While we cannot guarantee celebrity sightings as shooting schedules vary daily, our tours frequently coincide with ongoing productions where actors may be present. Our studio access includes live sets, costume departments, and post-production facilities. The dance workshop is led by professional choreographers who have worked with leading Bollywood stars and will teach you moves from famous film sequences.",
      },
      {
        question: "What should I wear for the dance workshop?",
        answer:
          "Comfortable clothing suitable for movement is recommended. We suggest wearing breathable fabrics and closed-toe shoes with good grip. The studio provides changing facilities if needed.",
      },
    ],
  },
  {
    title: "Mumbai Street Food Safari",
    description:
      "Embark on a culinary adventure through Mumbai's vibrant street food scene with a food expert who navigates the best hygienic vendors serving authentic local favorites from vada pav to pav bhaji, bhel puri, and more.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/street-food.jpg",
      "/images/tours/mumbai/chaat-stalls.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Street Food", "Culinary"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Churchgate Railway Station, West Exit, Mumbai 400020",
      coordinates: {
        latitude: 18.9322,
        longitude: 72.8264,
      },
      instructions:
        "Meet outside the Western exit of Churchgate Railway Station near the Mumbai University campus. Your guide will be holding a red umbrella with 'Food Tour' written on it.",
      contactNumber: "+91 982-049-8680",
      contactEmail: "streetfood@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Sample 8-10 iconic Mumbai street foods from carefully selected vendors",
      "Learn about the cultural and historical significance of each dish",
      "Experience different regional influences in Mumbai's diverse food scene",
      "Visit legendary establishments that have served Mumbaikars for generations",
      "Discover hidden food gems in historic neighborhoods off the tourist path",
    ],

    inclusions: [
      "Food expert guide with deep knowledge of Mumbai's culinary scene",
      "All food tastings at 6-8 different vendors (equivalent to a full meal)",
      "Bottled water and refreshing drinks",
      "Hand sanitizer and hygienic wipes",
      "Small group size (maximum 8 participants)",
      "Food map with recommendations for further exploration",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages",
      "Additional food beyond included tastings",
      "Personal shopping expenses",
      "Transportation during tour (walking-based experience)",
    ],

    itinerary: [
      "17:00 - Meet at Churchgate Station for introductions",
      "17:15 - Walk to Chowpatty Beach area for first street food tasting",
      "17:30 - Sample Mumbai's famous pav bhaji (spiced vegetable curry with bread)",
      "18:00 - Try different varieties of chaat at renowned vendor",
      "18:30 - Walk through historic Fort area with architectural commentary",
      "19:00 - Visit legendary vada pav stall (Mumbai's iconic potato burger)",
      "19:30 - Sample regional sweets and kulfi (traditional ice cream)",
      "20:00 - Try Mumbai's distinctive street-side Chinese cuisine",
      "20:30 - Conclude with masala chai at historical Iranian cafe",
      "21:00 - Tour ends with final recommendations and farewells",
    ],

    faqs: [
      {
        question: "Is the street food safe to eat?",
        answer:
          "We carefully select vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the most reputable stalls that locals frequent. All food is freshly prepared in front of you. We provide hand sanitizer throughout the tour and bottled water. The tour can accommodate vegetarian and most dietary restrictions, though those with severe allergies should notify us in advance.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of Mumbai's most iconic street foods, including vada pav, pav bhaji, bhel puri, pani puri, and more. We also include a sweet treat like kulfi or jalebi. The tour is designed to give you a comprehensive taste of the city's culinary diversity.",
      },
    ],
  },
  {
    title: "Dawn on the Arabian Sea: Fishing Village & Market",
    description:
      "Experience the authentic rhythms of Mumbai's fishing communities with a pre-dawn visit to Sassoon Docks where traditional Koli fishermen bring in the night's catch, followed by the lively wholesale fish auction and colorful retail market.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/sassoon-docks.jpg",
      "/images/tours/mumbai/fish-market.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Markets", "Fishing", "Local Life"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",

    meetingPoint: {
      address: "Sassoon Docks, Near Cuffe Parade, Mumbai 400005",
      coordinates: {
        latitude: 18.9155,
        longitude: 72.8232,
      },
      instructions:
        "Meet at the main entrance of Sassoon Docks. Your guide will be holding a sign with 'Fishing Village Tour' written on it.",
      contactNumber: "+91 982-049-8681",
      contactEmail: "fishingvillage@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-24",
      "2023-12-26",
      "2023-12-28",
      "2023-12-30",
      "2024-01-01",
      "2024-01-03",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Witness the bustling fish market come to life with fresh catches",
      "Learn about traditional fishing techniques from Koli fishermen",
      "Experience the vibrant atmosphere of Mumbai's largest fish auction",
      "Explore the historic Sassoon Docks and its architectural significance",
      "Enjoy a scenic walk along the waterfront and observe local marine life",
    ],

    inclusions: [
      "Expert guide with knowledge of Mumbai's fishing industry",
      "Visit to Sassoon Docks and participation in fish auction",
      "Tasting of fresh seafood delicacies",
      "Bottled water and refreshments",
      "Small group size (maximum 10 participants)",
      "Transportation from meeting point to tour locations",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Gratuities",
      "Personal expenses and shopping",
      "Transportation during free time in the area",
    ],

    itinerary: [
      "05:00 - Meet at Sassoon Docks for introductions",
      "05:15 - Guided tour of the docks to see fishing boats and gear",
      "05:45 - Experience the fish auction and learn about seafood sourcing",
      "06:30 - Walk to a local eatery to sample breakfast dishes popular with fishermen",
      "07:15 - Visit the Koliwada (fishing village) to understand community life",
      "08:00 - Tour concludes with return to Sassoon Docks",
    ],

    faqs: [
      {
        question: "What time does this tour start?",
        answer:
          "This tour begins very early - with hotel pickup around 5:00 AM to arrive at the docks by 5:30 AM when the fishing boats return and the auction begins. The early start is essential to experience the authentic activity of the docks and markets. We provide coffee and chai to help with the early wake-up, and the vibrant energy of the markets quickly overcomes any sleepiness!",
      },
    ],
  },
  {
    title: "Colonial Mumbai Heritage Walk",
    description:
      "Step back in time with a walking tour through Mumbai's historic Fort district, exploring stunning Gothic and Art Deco architecture, hidden colonial-era gems, and the stories behind the city's transformation from fishing village to global metropolis.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/colonial-architecture.jpg",
      "/images/tours/mumbai/gateway-india.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["History", "Architecture", "Colonial"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address:
        "Chhatrapati Shivaji Maharaj Terminus (CST), DN Road, Fort, Mumbai 400001",
      coordinates: {
        latitude: 18.9407,
        longitude: 72.8354,
      },
      instructions:
        "Meet outside the main entrance of CST Station. Your guide will be holding a sign with 'Heritage Walk' written on it.",
      contactNumber: "+91 982-049-8682",
      contactEmail: "heritagewalk@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Discover the architectural splendor of CST, a UNESCO World Heritage Site",
      "Visit the iconic Gateway of India and learn about its historical significance",
      "Explore hidden gardens and courtyards from Mumbai's colonial past",
      "See the contrast between colonial architecture and Mumbai's modern skyline",
      "Learn about the stories and events that shaped Mumbai's history",
    ],

    inclusions: [
      "Expert guide with in-depth knowledge of Mumbai's history",
      "Entry fees to monuments and museums as per itinerary",
      "Bottled water and refreshments",
      "Small group size (maximum 10 participants)",
      "Transportation from meeting point to tour locations",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional snacks",
      "Gratuities",
      "Personal expenses and shopping",
      "Transportation during free time in the area",
    ],

    itinerary: [
      "09:00 - Meet at CST Station for introductions",
      "09:15 - Guided tour of CST Station and its architectural highlights",
      "09:45 - Walk to the Gateway of India, learning about its history",
      "10:15 - Visit to the Prince of Wales Museum (now Chhatrapati Shivaji Maharaj Vastu Sangrahalaya)",
      "11:00 - Explore the Kala Ghoda art precinct and its galleries",
      "11:30 - Visit the David Sassoon Library and Reading Room",
      "12:00 - Tour concludes with return to CST Station",
    ],

    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3-4 kilometers of walking at a leisurely pace with frequent stops. The terrain is flat and mostly on sidewalks, though some areas have uneven surfaces. We recommend comfortable walking shoes, sun protection, and water. The walk can be adapted for different mobility levels with advance notice.",
      },
      {
        question: "Will we enter any buildings?",
        answer:
          "Yes, the tour includes visits to several historic buildings such as the Chhatrapati Shivaji Maharaj Terminus (CST), Bombay High Court, and the Asiatic Society Library. We also explore hidden courtyards and gardens that are not typically accessible to the public. Some buildings may have limited access due to ongoing restoration work, but our guide will provide detailed historical context for all sites.",
      },
    ],
  },
  {
    title: "Mumbai by Night: Queens Necklace & Rooftop Cocktails",
    description:
      "Experience the dazzling transformation of Mumbai after dark with a scenic drive along Marine Drive's 'Queen's Necklace', followed by exclusive rooftop cocktails offering panoramic views of the illuminated cityscape.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/marines-drive-night.jpg",
      "/images/tours/mumbai/rooftop-bar.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nightlife", "Skyline", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is there a dress code for the rooftop bars?",
        answer:
          "Yes, the exclusive rooftop venues we visit have a smart-casual dress code. We recommend collared shirts for men (no shorts or flip-flops) and elegant casual wear for women. Our pre-tour information includes specific dress requirements for each venue on your itinerary, which typically includes some of Mumbai's most sophisticated establishments with strict door policies.",
      },
      {
        question: "What if it rains?",
        answer:
          "Mumbai's monsoon season (June-September) can bring unexpected showers. Our tour is designed to be flexible, with alternative indoor venues available in case of rain. The rooftop bars we visit have covered areas to ensure you can still enjoy the views and ambiance even in light rain.",
      },
    ],
  },
  {
    title: "Elephanta Caves Private Tour & Sunset Sailing",
    description:
      "Journey across Mumbai Harbor to the UNESCO-listed Elephanta Caves with an archaeology expert to explore ancient rock-cut temples, followed by a private sunset sailing experience along the coast with champagne and Indian canapés.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/elephanta-caves.jpg",
      "/images/tours/mumbai/harbor-sunset.jpg",
    ],
    duration: "7 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Archaeology", "Sailing"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How do we reach the Elephanta Caves?",
        answer:
          "The journey begins with a one-hour ferry ride from the Gateway of India across Mumbai Harbor. For the standard tour, we take the public ferry, but we can arrange a private boat for an additional fee. Upon reaching Elephanta Island, there's a climb of approximately 120 steps to reach the cave entrance, though a small toy train can cover the initial portion of the path for those who prefer not to walk.",
      },
      {
        question: "What should we wear for the cave visit?",
        answer:
          "Comfortable walking shoes are essential for exploring the caves, as the paths can be uneven and rocky. We recommend lightweight, breathable clothing suitable for warm weather, as the caves can be humid. A hat and sunscreen are also advisable, especially if you plan to explore the island before or after the cave visit.",
      },
    ],
  },
  {
    title: "Mumbai's Secret Gardens & Hidden Oases",
    description:
      "Discover the surprising green sanctuaries tucked within Mumbai's urban jungle, from historic botanical gardens and exclusive members-only parks to rooftop urban farms and the world's largest inner-city tropical forest.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/hanging-gardens.jpg",
      "/images/tours/mumbai/urban-forest.jpg",
    ],
    duration: "5 hours",
    price: "$60",
    rating: 4.5,
    tags: ["Nature", "Gardens", "Peaceful"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, though the experience varies seasonally. The monsoon season (June-September) transforms the gardens into lush green oases with flowing waterways and blooming tropical plants. The winter months (November-February) offer pleasant temperatures and clear skies ideal for outdoor exploration. Our guide adapts the tour to showcase the best seasonal highlights, from flowering seasons to fruit harvests in the urban farms.",
      },
      {
        question: "What should we wear for the garden tour?",
        answer:
          "Comfortable walking shoes are essential, as we will be exploring various gardens and parks. Lightweight, breathable clothing is recommended, especially during warmer months. A hat and sunscreen are advisable, and we suggest bringing a reusable water bottle to stay hydrated.",
      },
    ],
  },
  {
    title: "Mumbai's Art Deco Heritage Tour",
    description:
      "Explore the world's largest collection of Art Deco buildings outside Miami with an architecture expert, visiting iconic structures, hidden gems, and learning about the history and preservation of this unique architectural style.",
    city: "Mumbai",
    country: "India",
    region: "Maharashtra",
    images: [
      "/images/tours/mumbai/art-deco-building.jpg",
      "/images/tours/mumbai/art-deco-interior.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Architecture", "Art Deco", "Heritage"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are there any entry fees for the buildings we visit?",
        answer:
          "Most of the Art Deco buildings we explore are exterior-focused, so there are no entry fees. However, some interiors may be accessible on special request or during open house events. Our guide will provide detailed historical context and stories about each building's significance.",
      },
      {
        question: "What should I wear for this walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we will cover approximately 2 km (1.2 miles) on foot. Dress in layers to accommodate changing weather conditions, and consider bringing a hat and sunscreen for sun protection.",
      },
    ],
  },
];

export default mumbaiTours;
