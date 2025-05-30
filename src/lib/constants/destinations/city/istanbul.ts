import { Attraction } from "@/lib/interfaces/services/attractions";

export const istanbulMarmaraRegionTurkey: Attraction[] = [
  {
    title: "Hagia Sophia",
    description:
      "A former Greek Orthodox Christian basilica, later an Ottoman imperial mosque and now a museum, known for its massive dome and stunning mosaics.",
    imageUrl: "https://plus.unsplash.com/hagia-sophia.jpg",
    location: "Sultanahmet, Fatih, Istanbul",
    openingHours: "9 AM - 7 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural", "spiritual"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Topkapi Palace",
    description:
      "The former palace of Ottoman sultans, featuring stunning architecture and rich history.",
    imageUrl: "https://plus.unsplash.com/topkapi-palace.jpg",
    location: "Cankurtaran, Fatih, Istanbul",
    openingHours: "9 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Basilica Cistern",
    description:
      "An ancient underground water reservoir with stunning columns and atmospheric lighting.",
    imageUrl: "https://plus.unsplash.com/basilica-cistern.jpg",
    location: "Alemdar, Fatih, Istanbul",
    openingHours: "9 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["historical", "cultural", "underground"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
];
