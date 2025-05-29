import { Attraction } from "@/lib/interfaces/services/attractions";

export const londonGreaterLondonUnitedKingdom: Attraction[] = [
  {
    title: "British Museum",
    description:
      "One of the world's most comprehensive museums, housing a vast collection of art and antiquities.",
    imageUrl: "https://plus.unsplash.com/british-museum.jpg",
    location: "Great Russell St, Bloomsbury, London",
    openingHours: "10 AM - 5:30 PM",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Tower of London",
    description:
      "A historic castle on the north bank of the River Thames, known for its rich history and the Crown Jewels.",
    imageUrl: "https://plus.unsplash.com/tower-of-london.jpg",
    location: "St Katharine's & Wapping, London",
    openingHours: "9 AM - 5:30 PM",
    entryFee: "£29.90",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural", "military"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Hyde Park",
    description:
      "One of London's largest parks, perfect for a leisurely stroll, picnics, or boating.",
    imageUrl: "https://plus.unsplash.com/hyde-park.jpg",
    location: "Hyde Park, London",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.6,
    tags: ["adventure", "romantic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
];
