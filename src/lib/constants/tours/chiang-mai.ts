import { Tour } from "@/lib/interfaces/services/tours";

export const chiangMaiTours: Tour[] = [
  {
    title: "Wat Phra Singh Woramahawihan",
    description:
      "Visit the iconic Wat Phra Singh, a masterpiece of Lanna architecture, and explore its intricate murals and serene atmosphere. This temple is a must-see for anyone interested in Thai culture and history.",
    city: "Chiang Mai",
    country: "Thailand",
    region: "Northern Thailand",
    images: ["/images/tours/chiang-mai/wat-phra-singh.jpg"],
    duration: "2 hours",
    price: "$20",
    rating: 4.9,
    tags: ["Cultural", "Historical", "Photography"],
    isHistorical: true,
    isRomantic: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "cultural",
    highlights: [
      "Explore the stunning Lanna architecture",
      "Admire the intricate murals and sculptures",
      "Learn about the history of the temple",
      "Experience the serene atmosphere",
      "Capture beautiful photographs",
    ],
    inclusions: ["Guided tour", "Entrance fee", "Bottled water"],
    exclusions: ["Personal expenses", "Tips for the guide"],
    itinerary: [
      "Meet at the temple entrance",
      "Guided tour of the temple grounds",
      "Visit the main hall and admire the Buddha statue",
      "Explore the surrounding gardens",
      "Free time for photography and reflection",
    ],
    meetingPoint: {
      address:
        "Singharat Road, Phra Sing, Mueang Chiang Mai District, Chiang Mai 50200, Thailand",
      coordinates: {
        latitude: 18.7883,
        longitude: 98.9847,
      },
      instructions:
        "Meet at the main entrance of Wat Phra Singh. Look for the guide holding a sign with your tour name.",
    },
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
  },
];

export default chiangMaiTours;
