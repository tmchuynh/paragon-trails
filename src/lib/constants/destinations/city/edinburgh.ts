import { Attraction } from "@/lib/interfaces/services/attractions";

export const edinburghScotlandUnitedKingdom: Attraction[] = [
  {
    title: "Edinburgh Castle",
    description:
      "A historic fortress that dominates the skyline of Edinburgh, offering stunning views and rich history.",
    imageUrl: "https://plus.unsplash.com/edinburgh-castle.jpg",
    location: "Castlehill, Edinburgh, Scotland",
    openingHours: "9:30 AM - 5 PM",
    entryFee: "£17.50",
    entryFeeCategory: "moderate",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural", "viewpoint"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Arthur's Seat",
    description:
      "An ancient volcano and a popular hiking spot offering panoramic views of the city.",
    imageUrl: "https://plus.unsplash.com/arthurs-seat.jpg",
    location: "Holyrood Park, Edinburgh, Scotland",
    openingHours: "Open 24 hours",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["outdoor", "hiking", "scenic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "Royal Mile",
    description:
      "A historic street in the heart of Edinburgh, lined with shops, restaurants, and attractions.",
    imageUrl: "https://plus.unsplash.com/royal-mile.jpg",
    location: "Royal Mile, Edinburgh, Scotland",
    openingHours: "Open 24 hours",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.6,
    tags: ["cultural", "shopping", "historical"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: true,
  },
];
