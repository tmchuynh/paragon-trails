import { Tour } from "@/lib/interfaces/services/tours";

export const phnomPenhTours: Tour[] = [
  {
    title: "Phnom Penh City Highlights",
    description:
      "Explore the rich history and vibrant culture of Cambodia's capital with visits to the Royal Palace, Silver Pagoda, and National Museum.",
    images: [
      "/images/tours/phnom-penh/royal-palace.jpg",
      "/images/tours/phnom-penh/silver-pagoda.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Cultural", "Historical", "City Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Modest clothing is required when visiting religious sites. Shoulders and knees must be covered.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, transportation within Phnom Penh is included in the tour price.",
      },
    ],
  },
  {
    title: "Killing Fields & S21 Museum Tour",
    description:
      "A poignant journey through Cambodia's tragic past, visiting the Killing Fields of Choeung Ek and the Tuol Sleng Genocide Museum (S21) with an expert guide.",
    images: [
      "/images/tours/phnom-penh/killing-fields.jpg",
      "/images/tours/phnom-penh/s21-museum.jpg",
    ],
    duration: "5 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Historical", "Cultural", "Educational"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical-education",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Due to the sensitive nature of the content, this tour is not recommended for children under 12 years old.",
      },
      {
        question: "What should I bring?",
        answer:
          "Comfortable walking shoes, water, and a respectful attitude are recommended. Headphones for the audio guide are also suggested.",
      },
    ],
  },
  {
    title: "Tonle Sap Lake Floating Village Tour",
    description:
      "Experience the unique lifestyle of the floating villages on Tonle Sap Lake, including a boat ride through the stilted houses and a visit to a local school.",
    images: [
      "/images/tours/phnom-penh/tonle-sap.jpg",
      "/images/tours/phnom-penh/floating-village.jpg",
    ],
    duration: "6 hours",
    price: "$60",
    rating: 4.5,
    tags: ["Cultural", "Nature", "Adventure"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nature-adventure",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Light, breathable clothing is recommended. A hat and sunscreen are also advisable due to the sun exposure.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Yes, a traditional Cambodian lunch at a local restaurant is included in the tour price.",
      },
    ],
  },
  {
    title: "Phnom Penh Night Market & Street Food Tour",
    description:
      "Discover the vibrant nightlife of Phnom Penh with a guided tour of the night market and a tasting adventure through local street food stalls.",
    images: [
      "/images/tours/phnom-penh/night-market.jpg",
      "/images/tours/phnom-penh/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$30",
    rating: 4.6,
    tags: ["Culinary", "Cultural", "Nightlife"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary-experience",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You will sample a variety of local dishes, including grilled skewers, noodle soups, and traditional desserts.",
      },
      {
        question: "Is this tour suitable for vegetarians?",
        answer:
          "Yes, vegetarian options are available. Please inform your guide of any dietary restrictions.",
      },
    ],
  },
  {
    title: "Phnom Penh Royal Palace & Silver Pagoda Tour",
    description:
      "Visit the stunning Royal Palace and the Silver Pagoda, home to a collection of priceless artifacts and the Emerald Buddha.",
    images: [
      "/images/tours/phnom-penh/royal-palace.jpg",
      "/images/tours/phnom-penh/silver-pagoda.jpg",
    ],
    duration: "2 hours",
    price: "$25",
    rating: 4.9,
    tags: ["Cultural", "Historical", "Religious"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What are the opening hours?",
        answer:
          "The Royal Palace is open daily from 8 AM to 5 PM. Last entry is at 4:30 PM.",
      },
      {
        question: "Are there any photography restrictions?",
        answer:
          "Photography is allowed in most areas, but please be respectful of sacred sites and follow any posted signs.",
      },
    ],
  },
  {
    title: "Phnom Penh Art & Culture Tour",
    description:
      "Explore Phnom Penh's thriving art scene with visits to local galleries, artist studios, and cultural centers, including a traditional dance performance.",
    images: [
      "/images/tours/phnom-penh/art-gallery.jpg",
      "/images/tours/phnom-penh/dance-performance.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Cultural", "Art", "Performance"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "art-culture",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Comfortable clothing is recommended. Some galleries may have specific dress codes, so please check in advance.",
      },
      {
        question: "Is the dance performance included?",
        answer:
          "Yes, the tour includes a traditional Cambodian dance performance at a local cultural center.",
      },
    ],
  },
  {
    title: "Phnom Penh Historical Walking Tour",
    description:
      "A guided walking tour through Phnom Penh's historical districts, exploring colonial architecture, local markets, and significant landmarks.",
    images: [
      "/images/tours/phnom-penh/colonial-architecture.jpg",
      "/images/tours/phnom-penh/local-market.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Historical", "Cultural", "Walking Tour"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical-experience",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2-3 kilometers of walking on mostly flat terrain. Comfortable shoes are recommended.",
      },
      {
        question: "Are there any restroom breaks?",
        answer:
          "Yes, the tour includes scheduled breaks at local cafes and markets where restrooms are available.",
      },
    ],
  },
  {
    title: "Phnom Penh Sunset Cruise on the Mekong River",
    description:
      "Enjoy a relaxing evening cruise on the Mekong River, taking in the stunning sunset views and the city skyline while enjoying refreshments.",
    images: [
      "/images/tours/phnom-penh/sunset-cruise.jpg",
      "/images/tours/phnom-penh/mekong-river.jpg",
    ],
    duration: "2 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Romantic", "Nature", "Relaxation"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "romantic-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "A light jacket for the evening breeze, your camera for photos, and any personal items you may need.",
      },
      {
        question: "Is food included?",
        answer:
          "Light snacks and drinks are provided on board. If you have specific dietary needs, please inform us in advance.",
      },
    ],
  },
  {
    title: "Phnom Penh Local Markets & Crafts Tour",
    description:
      "Discover the vibrant local markets of Phnom Penh, including the Russian Market and Central Market, while learning about traditional Cambodian crafts.",
    images: [
      "/images/tours/phnom-penh/russian-market.jpg",
      "/images/tours/phnom-penh/central-market.jpg",
    ],
    duration: "3 hours",
    price: "$30",
    rating: 4.6,
    tags: ["Cultural", "Shopping", "Local Experience"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "What types of crafts will we see?",
        answer:
          "You will see a variety of traditional Cambodian crafts, including silk weaving, pottery, and wood carving.",
      },
      {
        question: "Is bargaining allowed in the markets?",
        answer:
          "Yes, bargaining is common in local markets. Feel free to negotiate prices with vendors.",
      },
    ],
  },
  {
    title: "Phnom Penh Cycling Tour",
    description:
      "Explore Phnom Penh on two wheels with a guided cycling tour through the city's parks, riverside paths, and hidden neighborhoods.",
    images: [
      "/images/tours/phnom-penh/cycling-tour.jpg",
      "/images/tours/phnom-penh/riverside-path.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Adventure", "Cultural", "Active"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "active-experience",
    faqs: [
      {
        question: "Do I need to bring my own bike?",
        answer:
          "No, bikes are provided as part of the tour package. Helmets and safety gear are also included.",
      },
      {
        question: "What level of fitness is required?",
        answer:
          "The tour is suitable for all fitness levels. The pace is relaxed, and breaks are included.",
      },
    ],
  },
  {
    title: "Phnom Penh Photography Tour",
    description:
      "Capture the essence of Phnom Penh with a guided photography tour, visiting iconic landmarks and hidden gems while learning photography tips and techniques.",
    images: [
      "/images/tours/phnom-penh/photography-tour.jpg",
      "/images/tours/phnom-penh/iconic-landmarks.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Photography", "Cultural", "Art"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "art-photography",
    faqs: [
      {
        question: "Do I need to bring my own camera?",
        answer:
          "Yes, please bring your own camera or smartphone. A DSLR or mirrorless camera is recommended for best results.",
      },
      {
        question: "Are there any photography restrictions?",
        answer:
          "Some locations may have restrictions on photography. Your guide will inform you of any rules at each site.",
      },
    ],
  },
  {
    title: "Phnom Penh Wellness Retreat",
    description:
      "Relax and rejuvenate with a wellness retreat that includes yoga, meditation, and traditional Khmer spa treatments in a serene setting.",
    images: [
      "/images/tours/phnom-penh/wellness-retreat.jpg",
      "/images/tours/phnom-penh/yoga-session.jpg",
    ],
    duration: "5 hours",
    price: "$70",
    rating: 4.9,
    tags: ["Wellness", "Relaxation", "Cultural"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Comfortable clothing for yoga and meditation, a water bottle, and any personal items you may need.",
      },
      {
        question: "Are meals included?",
        answer:
          "A healthy lunch is included in the retreat package, featuring traditional Khmer cuisine.",
      },
    ],
  },
  {
    title: "Phnom Penh Historical Sites & Temples Tour",
    description:
      "Visit the most significant historical sites and temples in Phnom Penh, including Wat Phnom, the Independence Monument, and the National Library.",
    images: [
      "/images/tours/phnom-penh/wat-phnom.jpg",
      "/images/tours/phnom-penh/independence-monument.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Historical", "Cultural", "Religious"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical-experience",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Modest clothing is required when visiting temples. Shoulders and knees must be covered.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, transportation within Phnom Penh is included in the tour price.",
      },
    ],
  },
];
