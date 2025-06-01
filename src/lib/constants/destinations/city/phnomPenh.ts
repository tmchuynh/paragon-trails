import { Attraction } from "@/lib/interfaces/services/attractions";

export const phnomPenhPhnomPenhCambodia: Attraction[] = [
  {
    title: "Royal Palace",
    description:
      "A stunning complex of buildings that serves as the royal residence of the King of Cambodia, featuring beautiful gardens and traditional Khmer architecture.",
    imageUrl: "https://plus.unsplash.com/royal-palace.jpg",
    location: "Preah Sisowath Quay, Phnom Penh, Cambodia",
    openingHours: "8 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["cultural", "historical"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,
    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Tuol Sleng Genocide Museum",
    description:
      "A poignant museum located in a former high school that was used as a prison during the Khmer Rouge regime, offering deep insights into Cambodia's tragic history.",
    imageUrl: "https://plus.unsplash.com/tuol-sleng-museum.jpg",
    location: "Street 113, Phnom Penh, Cambodia",
    openingHours: "8 AM - 5:30 PM",
    priceRange: "$",
    priceCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["cultural", "historical"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,
    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
];
