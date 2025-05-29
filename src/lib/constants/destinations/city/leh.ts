import { Attraction } from "@/lib/interfaces/services/attractions";

export const lehLadakhIndia: Attraction[] = [
  {
    title: "Pangong Lake",
    description:
      "A stunning high-altitude lake known for its changing colors and breathtaking views.",
    imageUrl: "https://plus.unsplash.com/pangong-lake.jpg",
    location: "Pangong Lake, Ladakh, India",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["romantic", "art-and-music"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Thiksey Monastery",
    description:
      "A beautiful Tibetan Buddhist monastery offering panoramic views of the Indus Valley.",
    imageUrl: "https://plus.unsplash.com/thiksey-monastery.jpg",
    location: "Thiksey, Leh, Ladakh, India",
    openingHours: "6 AM - 7 PM",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["spiritual", "cultural"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Leh Palace",
    description:
      "An ancient palace offering a glimpse into the history and culture of Ladakh.",
    imageUrl: "https://plus.unsplash.com/leh-palace.jpg",
    location: "Leh, Ladakh, India",
    openingHours: "7 AM - 5 PM",
    entryFee: "INR 50",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["historical", "cultural"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
];
