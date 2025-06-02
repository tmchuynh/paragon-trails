import { Tour } from "@/lib/interfaces/services/tours";

export const marrakechTours: Tour[] = [
  {
    title: "Medina Cultural Walking Tour",
    description:
      "Navigate the labyrinthine streets of Marrakech's ancient medina with a local guide, discovering hidden palaces, artisan workshops, and historic sites beyond the tourist path.",
    city: "Marrakech",
    country: "Morocco",
    region: "Marrakech-Safi",
    images: [
      "/images/tours/marrakech/medina-streets.jpg",
      "/images/tours/marrakech/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cultural", "Walking", "Artisans"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Café de France, Jemaa el-Fna, Marrakech 40000, Morocco",
      coordinates: {
        latitude: 31.6258,
        longitude: -7.9891,
      },
      instructions:
        "Meet on the rooftop terrace of Café de France overlooking Jemaa el-Fna square. Your guide will be wearing a traditional Moroccan djellaba with a Paragon Trails badge.",
      contactNumber: "+212 524-123-456",
      contactEmail: "marrakech@paragontrails.com",
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
      "Visit hidden artisan workshops where traditional crafts are still practiced using centuries-old techniques",
      "Explore the rarely-visited northern medina away from typical tourist routes",
      "Discover architectural gems including historic fondouks, madrasas, and private riads",
      "Learn about daily Moroccan life while wandering through residential neighborhoods",
      "Meet local craftspeople and hear their stories through your guide's translation",
    ],

    inclusions: [
      "Professional local guide with insider knowledge of the medina",
      "Entrance fees to historical sites and workshops",
      "Traditional Moroccan mint tea at local café",
      "Bottled water throughout the tour",
      "Small group size (maximum 8 participants)",
      "Cultural guidebook with medina map",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages beyond included tea",
      "Gratuities for guide (recommended but optional)",
      "Personal purchases at markets and workshops",
      "Professional photography (personal photos are permitted)",
    ],

    itinerary: [
      "09:00 - Meet at Café de France for introductions and brief history of Marrakech",
      "09:15 - Begin walk through Jemaa el-Fna and into the souks",
      "09:45 - Visit traditional metalworking workshop and observe artisans",
      "10:30 - Explore historic Madrasa Ben Youssef with architectural commentary",
      "11:15 - Walk through residential areas of the northern medina rarely seen by tourists",
      "11:45 - Visit traditional bakery where locals bring bread to be baked",
      "12:15 - Discover hidden fondouk (ancient merchant inn) restored as artisan cooperative",
      "12:45 - Mint tea break at authentic local café with panoramic terrace views",
      "13:15 - Tour concludes with orientation and recommendations for further exploration",
    ],

    faqs: [
      {
        question: "Will there be aggressive vendors in the souks?",
        answer:
          "Our routes avoid the more aggressive commercial areas, and your guide acts as a buffer against unwanted attention. We focus on authentic artisans who provide low-pressure shopping experiences.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We tailor the experience to be engaging for all ages, with opportunities to interact with local craftspeople and learn about their trades.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are essential, as we will cover uneven cobblestone streets. Lightweight, breathable clothing is recommended due to the warm climate.",
      },
    ],
  },

  // Continue with the second tour
  {
    title: "Sahara Desert & Berber Experience",
    description:
      "Journey to the edge of the Sahara for camel trekking across golden dunes, dinner under the stars at a luxury desert camp, and cultural exchange with Berber nomads.",
    city: "Marrakech",
    country: "Morocco",
    region: "Marrakech-Safi",
    images: [
      "/images/tours/marrakech/sahara-camels.jpg",
      "/images/tours/marrakech/desert-camp.jpg",
    ],
    duration: "2 days",
    price: "$295",
    rating: 4.9,
    tags: ["Desert", "Adventure", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "La Mamounia Hotel, Avenue Bab Jdid, Marrakech 40040, Morocco",
      coordinates: {
        latitude: 31.6218,
        longitude: -7.994,
      },
      instructions:
        "Meet in the main lobby of La Mamounia Hotel. Our driver will be waiting with a sign showing your name and 'Sahara Experience'.",
      contactNumber: "+212 524-123-457",
      contactEmail: "sahara@paragontrails.com",
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
      "Travel through the stunning Atlas Mountains with photo stops at panoramic viewpoints",
      "Ride traditional camels across golden Sahara dunes led by experienced Berber guides",
      "Spend the night in a luxury desert camp with private tents and modern amenities",
      "Enjoy authentic Berber cuisine under the stars with traditional music and storytelling",
      "Experience the magical desert sunrise from a private dune viewpoint",
    ],

    inclusions: [
      "Round-trip transportation in comfortable 4x4 vehicle",
      "Professional English-speaking guide throughout journey",
      "Luxury desert camp accommodation with private bathroom facilities",
      "All meals (lunch and dinner on day 1, breakfast on day 2)",
      "Camel trek with traditional saddles and experienced handlers",
      "Evening entertainment including Berber music and astronomy",
      "Bottled water throughout journey",
    ],

    exclusions: [
      "Alcoholic beverages (available for purchase)",
      "Gratuities for guides, drivers and camp staff",
      "Personal travel insurance",
      "Optional activities such as quad biking or sandboarding",
      "Specialized photography equipment (bring your own)",
    ],

    itinerary: [
      "Day 1: 07:00 - Departure from Marrakech in 4x4 vehicle",
      "Day 1: 09:30 - Coffee break at panoramic Atlas Mountains viewpoint",
      "Day 1: 11:30 - Visit UNESCO World Heritage kasbah of Ait Ben Haddou",
      "Day 1: 13:00 - Lunch at traditional restaurant in Ouarzazate",
      "Day 1: 14:30 - Continue journey through changing landscapes toward desert",
      "Day 1: 16:30 - Arrive at desert outpost to meet camel guides",
      "Day 1: 17:00 - Begin sunset camel trek across dunes (approximately 1 hour)",
      "Day 1: 18:00 - Arrive at luxury desert camp and settle into accommodations",
      "Day 1: 19:30 - Traditional Moroccan dinner under the stars",
      "Day 1: 21:00 - Berber music and stargazing with astronomy guide",

      "Day 2: 05:30 - Optional sunrise viewing from private dune",
      "Day 2: 07:00 - Breakfast at camp",
      "Day 2: 08:30 - Morning desert activities or relaxation time",
      "Day 2: 10:00 - Depart camp via camel or 4x4 (your choice)",
      "Day 2: 12:30 - Lunch stop at oasis restaurant",
      "Day 2: 13:30 - Begin return journey to Marrakech via different scenic route",
      "Day 2: 18:00 - Arrive back in Marrakech",
    ],

    faqs: [
      {
        question: "How comfortable is the desert accommodation?",
        answer:
          "Our premium desert camp features proper beds with quality linens, private bathroom facilities with hot water, and elegant furnishings that blend traditional design with modern comfort.",
      },
      {
        question: "What should I pack for the desert?",
        answer:
          "We recommend packing layers for temperature changes, a hat, sunscreen, and comfortable shoes for walking. A small backpack for day trips is also useful.",
      },
      {
        question: "Is the camel ride suitable for beginners?",
        answer:
          "Yes, our camels are well-trained and suitable for all experience levels. Your guide will provide instructions and support throughout the ride.",
      },
    ],
  },

  // Complete properties for the third tour
  {
    title: "Atlas Mountains Hiking & Local Cuisine",
    description:
      "Hike through the stunning Atlas Mountains, visiting traditional Berber villages, and enjoy a home-cooked meal with a local family in their mountain home.",
    city: "Marrakech",
    country: "Morocco",
    region: "Marrakech-Safi",
    images: [
      "/images/tours/marrakech/atlas-hiking.jpg",
      "/images/tours/marrakech/berber-cuisine.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Nature", "Hiking", "Culinary"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness",

    meetingPoint: {
      address:
        "Hôtel de la Menara, Avenue Mohammed VI, Marrakech 40000, Morocco",
      coordinates: {
        latitude: 31.6156,
        longitude: -8.0098,
      },
      instructions:
        "Meet in the hotel lobby. Our transportation will be waiting outside the main entrance with a sign reading 'Atlas Mountains Trek'.",
      contactNumber: "+212 524-123-458",
      contactEmail: "atlasmountains@paragontrails.com",
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
      "Hike through spectacular mountain landscapes with views of North Africa's highest peaks",
      "Visit traditional Berber villages unchanged for centuries",
      "Learn about medicinal herbs and plants used in Berber traditional medicine",
      "Share a home-cooked meal with a local family in their authentic mountain home",
      "Experience a traditional Berber tea ceremony with mountain herbs",
    ],

    inclusions: [
      "Round-trip transportation from Marrakech",
      "Professional mountain guide fluent in English",
      "Traditional home-cooked Berber lunch with local family",
      "Mint tea and local snacks",
      "Bottled water throughout the day",
      "Small group size (maximum 8 participants)",
    ],

    exclusions: [
      "Hiking equipment (walking poles available for rent)",
      "Gratuities for guide and host family",
      "Personal travel insurance",
      "Additional food and beverages beyond included meals",
      "Optional mule rides for those who prefer not to hike certain sections",
    ],

    itinerary: [
      "08:30 - Pickup from meeting point in Marrakech",
      "09:45 - Arrive at starting point in Imlil village (5,700 ft elevation)",
      "10:00 - Begin hiking through walnut groves and terraced fields",
      "11:00 - Visit traditional Berber village with views of Mount Toubkal",
      "11:30 - Learn about local agriculture and irrigation systems",
      "12:15 - Reach scenic mountain viewpoint for rest and photos",
      "12:45 - Continue to higher village for lunch with local family",
      "13:15 - Home-cooked traditional meal with Berber family",
      "14:30 - Tea ceremony and discussion of Berber culture and traditions",
      "15:00 - Begin descent via different trail with valley views",
      "15:45 - Visit local women's argan oil cooperative",
      "16:30 - Return to transport for drive back to Marrakech",
      "17:30 - Arrive back in Marrakech",
    ],

    faqs: [
      {
        question: "What level of fitness is required for the hike?",
        answer:
          "The hike is moderate, suitable for those with a basic level of fitness. We cover approximately 8km on well-marked trails with some elevation gain.",
      },
      {
        question: "Will we have a chance to interact with local families?",
        answer:
          "Yes, the highlight of this tour is sharing a meal with a Berber family, where you can learn about their culture and daily life in the mountains.",
      },
      {
        question: "What should I wear for the hike?",
        answer:
          "Comfortable hiking shoes are essential. Dress in layers to accommodate changing temperatures, and bring a light jacket or sweater for higher elevations.",
      },
    ],
  },
];

export default marrakechTours;
