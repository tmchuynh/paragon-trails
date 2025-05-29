import { Attraction } from "@/lib/interfaces/services/attractions";

export const lisbonLisbonDistrictPortugal: Attraction[] = [
  {
    title: "Belém Tower",
    description:
      "A UNESCO World Heritage site, this iconic tower is a symbol of Portugal's Age of Discovery.",
    imageUrl: "https://plus.unsplash.com/belém-tower.jpg",
    location: "Av. Brasília, 1400-038 Lisboa, Portugal",
    openingHours: "10 AM - 5:30 PM",
    entryFee: "€6",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural", "architecture"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Jerónimos Monastery",
    description:
      "Another UNESCO World Heritage site, this monastery showcases stunning Manueline architecture.",
    imageUrl: "https://plus.unsplash.com/jerónimos-monastery.jpg",
    location: "Praça do Império 1400-206 Lisboa, Portugal",
    openingHours: "10 AM - 5 PM",
    entryFee: "€10",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural", "religious"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Alfama District",
    description:
      "The oldest district in Lisbon, known for its narrow streets, Fado music, and vibrant atmosphere.",
    imageUrl: "https://plus.unsplash.com/alfama-district.jpg",
    location: "Alfama, Lisbon, Portugal (near the Lisbon Cathedral)",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.6,
    tags: ["cultural", "historical", "neighborhood"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
];
