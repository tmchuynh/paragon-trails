import { Attraction } from "@/lib/interfaces/services/attractions";

export const madridCommunityOfMadridSpain: Attraction[] = [
  {
    title: "Prado Museum",
    description:
      "One of the world's premier art galleries, featuring works by Spanish masters like Velázquez and Goya.",
    imageUrl: "https://plus.unsplash.com/prado-museum.jpg",
    location: "Calle de Ruiz de Alarcón, 23, Madrid",
    openingHours: "10 AM - 8 PM",
    entryFee: "€15",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["art", "cultural", "historical"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Retiro Park",
    description:
      "A large and popular park in the city center, perfect for a leisurely stroll or a picnic.",
    imageUrl: "https://plus.unsplash.com/retiro-park.jpg",
    location: "Plaza de la Independencia, 7, Madrid",
    openingHours: "6 AM - 10 PM",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["outdoor", "recreation", "scenic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Royal Palace of Madrid",
    description:
      "The official residence of the Spanish royal family, offering opulent architecture and rich history.",
    imageUrl: "https://plus.unsplash.com/royal-palace-madrid.jpg",
    location: "Calle de Bailén, s/n, Madrid",
    openingHours: "10 AM - 6 PM",
    entryFee: "€13",
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
];
