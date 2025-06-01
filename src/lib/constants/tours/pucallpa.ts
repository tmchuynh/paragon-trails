import { Tour } from "@/lib/interfaces/services/tours";

export const pucallpaTours: Tour[] = [
  {
    title: "Amazon River Cruise & Jungle Adventure",
    description:
      "Embark on a 3-day Amazon river cruise, exploring the lush rainforest, wildlife, and indigenous cultures with expert guides.",
    images: [
      "/images/tours/pucallpa/amazon-cruise.jpg",
      "/images/tours/pucallpa/jungle-adventure.jpg",
    ],
    duration: "3 days",
    price: "$299",
    rating: 4.8,
    tags: ["Adventure", "Nature", "Wildlife"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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
    meetingPoint: " Pucallpa Port, main dock",
    cancellationPolicy:
      " Free cancellation up to 48 hours before the tour. After that, a 50% cancellation fee applies.",
  },
  {
    title: "Pucallpa City & Cultural Tour",
    description:
      "Discover the vibrant culture of Pucallpa with visits to local markets, museums, and traditional communities.",
    images: [
      "/images/tours/pucallpa/cultural-tour.jpg",
      "/images/tours/pucallpa/local-markets.jpg",
    ],
    duration: "5 hours",
    price: "$49",
    rating: 4.5,
    tags: ["Cultural", "Local", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    meetingPoint: " Main square of Pucallpa, near the statue of the founder",
    cancellationPolicy:
      " Free cancellation up to 24 hours before the tour. No refunds for cancellations within 24 hours.",
  },
  {
    title: "Yarinacocha Lake & Wildlife Safari",
    description:
      "Experience the beauty of Yarinacocha Lake with a guided boat tour, spotting exotic wildlife and visiting local communities.",
    images: [
      "/images/tours/pucallpa/yarinacocha-lake.jpg",
      "/images/tours/pucallpa/wildlife-safari.jpg",
    ],
    duration: "4 hours",
    price: "$59",
    rating: 4.6,
    tags: ["Nature", "Wildlife", "Adventure"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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
    meetingPoint: " Yarinacocha Port, main dock",
    cancellationPolicy:
      " Free cancellation up to 48 hours before the tour. After that, a 50% cancellation fee applies.",
  },
  {
    title: "Pucallpa Night Market & Street Food Tour",
    description:
      "Experience the vibrant nightlife of Pucallpa with a guided tour of the night market, tasting local street food and enjoying live music.",
    images: [
      "/images/tours/pucallpa/night-market.jpg",
      "/images/tours/pucallpa/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Food", "Cultural", "Nightlife"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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
    ],
  },
];
