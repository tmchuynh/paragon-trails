import { Attraction } from "@/lib/interfaces/services/attractions";

export const maltaSouthernEuropeMalta: Attraction[] = [
  {
    title: "Valletta City Gate",
    description:
      "The main entrance to the capital city of Malta, featuring stunning architecture and historical significance.",
    imageUrl: "https://plus.unsplash.com/valletta-city-gate.jpg",
    location: "City Gate, Valletta, Malta",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.6,
    tags: ["historical", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "St. John's Co-Cathedral",
    description:
      "A masterpiece of Baroque art and architecture, known for its stunning interior and Caravaggio paintings.",
    imageUrl: "https://plus.unsplash.com/st-johns-co-cathedral.jpg",
    location: "St. John's Co-Cathedral, Valletta, Malta",
    openingHours: "9 AM - 5 PM",
    entryFee: "€15",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["spiritual", "cultural", "art-and-music"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Blue Lagoon (Comino)",
    description:
      "A stunning natural lagoon with crystal-clear waters, perfect for swimming and snorkeling.",
    imageUrl: "https://plus.unsplash.com/blue-lagoon-comino.jpg",
    location: "Blue Lagoon, Comino, Malta",
    openingHours: "Open 24 hours",
    entryFee: "Free (boat trip required)",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["adventure", "romantic"],
    accessibilityFeatures: ["not wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
];
