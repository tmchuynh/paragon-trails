import { Tour } from "@/lib/interfaces/services/tours";
export const pucallpaTours: Tour[] = [
  {
    title: "Amazon River Cruise & Jungle Adventure",
    description:
      "Embark on a 3-day Amazon river cruise, exploring the lush rainforest, wildlife, and indigenous cultures with expert guides.",
    city: "Pucallpa",
    country: "Peru",
    region: "Ucayali",
    images: [
      "/images/tours/pucallpa/amazon-cruise.jpg",
      "/images/tours/pucallpa/jungle-adventure.jpg",
    ],
    duration: "3 days",
    price: "$299",
    rating: 4.8,
    tags: ["Adventure", "Nature", "Wildlife"],
    meetingPoint: {
      address: "Pucallpa Port, Av. Centenario 123, Pucallpa, Peru",
      coordinates: {
        latitude: -8.3809,
        longitude: -74.5541,
      },
      instructions:
        "Meet at the main entrance of Pucallpa Port. Look for our representative holding a sign with 'Amazon River Cruise' on it.",
      contactNumber: "+51 987 654 321",
    },
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What should I pack for the jungle?",
        answer:
          "We recommend lightweight, breathable clothing, insect repellent, sunscreen, a hat, and sturdy shoes. Don't forget your camera!",
      },
      {
        question: "Are there any health precautions?",
        answer:
          "Yes, please consult your doctor about vaccinations for tropical diseases and consider anti-malarial medication.",
      },
    ],
    availableDates: ["2024-05-01", "2024-05-15", "2024-06-01"],
    highlights: [
      "Guided jungle hikes",
      "Wildlife spotting (monkeys, birds, etc.)",
      "Cultural interactions with indigenous communities",
      "Fishing and swimming in the Amazon River",
    ],
    inclusions: [
      "Accommodation on the boat",
      "All meals during the cruise",
      "Guided excursions",
      "Fishing gear and equipment",
      "Life jackets and safety gear",
    ],
    exclusions: [
      "Alcoholic beverages",
      "Personal expenses",
      "Travel insurance",
      "Tips for guides and crew",
    ],
    itinerary: [
      "Day 1: Depart from Pucallpa, board the boat, and start the cruise on the Amazon River. Evening jungle hike.",
      "Day 2: Full day of jungle exploration, wildlife spotting, and cultural visits to indigenous communities.",
      "Day 3: Morning fishing and swimming, return to Pucallpa in the afternoon.",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. After that, a 50% cancellation fee applies.",
  },
  {
    title: "Pucallpa City & Cultural Tour",
    description:
      "Discover the vibrant culture of Pucallpa with visits to local markets, museums, and traditional communities.",
    city: "Pucallpa",
    country: "Peru",
    region: "Ucayali",
    images: [
      "/images/tours/pucallpa/cultural-tour.jpg",
      "/images/tours/pucallpa/local-markets.jpg",
    ],
    duration: "5 hours",
    price: "$49",
    rating: 4.5,
    tags: ["Cultural", "Local", "Historical"],
    meetingPoint: {
      address: "Pucallpa Central Plaza, Av. Centenario 456, Pucallpa, Peru",
      coordinates: {
        latitude: -8.3809,
        longitude: -74.5541,
      },
      instructions:
        "Meet at the central fountain in Pucallpa Central Plaza. Look for our guide wearing a blue shirt with 'Pucallpa Tours' printed on it.",
      contactNumber: "+51 987 654 321",
    },
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for families?",
        answer:
          "Absolutely! This tour is family-friendly and offers engaging activities for all ages.",
      },
      {
        question: "What languages are spoken by the guides?",
        answer:
          "Our guides are fluent in both Spanish and English to accommodate all visitors.",
      },
    ],
    availableDates: ["2024-05-02", "2024-05-16", "2024-06-02"],
    highlights: [
      "Visit to the Shipibo-Conibo community",
      "Exploration of local handicrafts and art",
      "Tasting traditional Amazonian cuisine",
      "Guided tour of Pucallpa's historical sites",
    ],
    inclusions: [
      "Local guide",
      "Transportation within Pucallpa",
      "Lunch at a traditional restaurant",
      "Entrance fees to museums and cultural sites",
    ],
    exclusions: [
      "Personal expenses",
      "Souvenirs",
      "Tips for the guide",
      "Travel insurance",
    ],
    itinerary: [
      "Morning: Visit the Shipibo-Conibo community, learn about their culture and crafts.",
      "Afternoon: Explore Pucallpa's local markets, museums, and historical sites. Enjoy a traditional lunch.",
      "Evening: Return to the starting point.",
    ],
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour. No refunds for cancellations within 24 hours.",
  },
  {
    title: "Yarinacocha Lake & Wildlife Safari",
    description:
      "Experience the beauty of Yarinacocha Lake with a guided boat tour, spotting exotic wildlife and visiting local communities.",
    city: "Pucallpa",
    country: "Peru",
    region: "Ucayali",
    images: [
      "/images/tours/pucallpa/yarinacocha-lake.jpg",
      "/images/tours/pucallpa/wildlife-safari.jpg",
    ],
    duration: "4 hours",
    price: "$59",
    rating: 4.6,
    tags: ["Nature", "Wildlife", "Adventure"],
    meetingPoint: {
      address: "Yarinacocha Lake Dock, Av. Yarinacocha 789, Pucallpa, Peru",
      coordinates: {
        latitude: -8.3809,
        longitude: -74.5541,
      },
      instructions:
        "Meet at the Yarinacocha Lake Dock. Look for our guide wearing a green vest with 'Yarinacocha Tours' printed on it.",
      contactNumber: "+51 987 654 321",
    },
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "nature",
    faqs: [
      {
        question: "What wildlife can we expect to see?",
        answer:
          "You may see pink river dolphins, caimans, various bird species, and more. Our guides are experts in local fauna.",
      },
      {
        question: "Is the boat tour safe?",
        answer:
          "Yes, all safety measures are in place, and our experienced guides prioritize your safety throughout the tour.",
      },
    ],
    availableDates: ["2024-05-03", "2024-05-17", "2024-06-03"],
    highlights: [
      "Guided boat tour of Yarinacocha Lake",
      "Wildlife spotting (dolphins, birds, etc.)",
      "Visit to local fishing communities",
      "Swimming and relaxing by the lake",
    ],
    inclusions: [
      "Boat rental",
      "Local guide",
      "Life jackets",
      "Beverages and snacks",
    ],
    exclusions: [
      "Lunch",
      "Personal expenses",
      "Tips for the guide",
      "Travel insurance",
    ],
    itinerary: [
      "Morning: Depart from Pucallpa, board the boat, and start the tour of Yarinacocha Lake.",
      "Midday: Wildlife spotting and visit to a local fishing community.",
      "Afternoon: Relax by the lake, swimming and enjoying refreshments before returning to Pucallpa.",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. After that, a 50% cancellation fee applies.",
  },
  {
    title: "Pucallpa Night Market & Street Food Tour",
    description:
      "Experience the vibrant nightlife of Pucallpa with a guided tour of the night market, tasting local street food and enjoying live music.",
    city: "Pucallpa",
    country: "Peru",
    region: "Ucayali",
    images: [
      "/images/tours/pucallpa/night-market.jpg",
      "/images/tours/pucallpa/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Food", "Cultural", "Nightlife"],
    meetingPoint: {
      address: "Pucallpa Night Market, Av. Amazonas 123, Pucallpa, Peru",
      coordinates: {
        latitude: -8.3809,
        longitude: -74.5541,
      },
      instructions:
        "Meet at the entrance of the Pucallpa Night Market. Look for our guide wearing a red shirt with 'Pucallpa Night Tours' printed on it.",
      contactNumber: "+51 987 654 321",
    },
    highlights: [
      "Tasting a variety of local street foods and delicacies",
      "Exploration of the vibrant night market",
      "Live music and cultural performances",
      "Interaction with local vendors and craftspeople",
    ],
    inclusions: [
      "Food tastings from 5-6 different vendors",
      "Local guide with food expertise",
      "One traditional Amazonian drink",
      "Cultural insights and recommendations",
    ],
    exclusions: [
      "Additional food beyond included tastings",
      "Alcoholic beverages (available for purchase)",
      "Souvenirs and crafts",
      "Transportation to/from the meeting point",
    ],
    itinerary: [
      "7:00 PM: Meet at the Pucallpa Night Market entrance",
      "7:15 PM: Begin food tasting tour, visiting various street food vendors",
      "8:30 PM: Enjoy live music and cultural performances",
      "9:15 PM: Free time to explore the market",
      "10:00 PM: Tour concludes at the market entrance",
    ],
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour. No refunds for cancellations within 24 hours or no-shows.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You will sample a variety of local street foods, including grilled meats, traditional Amazonian dishes, and sweet treats.",
      },
      {
        question: "Is the tour safe at night?",
        answer:
          "Yes, our guides are familiar with the area and ensure your safety throughout the tour. We also recommend staying in well-lit areas and being aware of your surroundings.",
      },
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarian preferences. Please let us know in advance so we can arrange appropriate food tastings.",
      },
    ],
    availableDates: ["2024-05-04", "2024-05-11", "2024-05-18", "2024-05-25"],
  },
];
export default pucallpaTours;
