import { Attraction } from "@/lib/interfaces/services/attractions";

export const sapaLaoCaiProvinceVietnam: Attraction[] = [
  {
    title: "Fansipan Mountain",
    description:
      "The highest mountain in Vietnam, offering breathtaking views and challenging hikes for adventure seekers.",
    imageUrl: "https://plus.unsplash.com/fansipan-mountain.jpg",
    location: "Fansipan Mountain, Sapa, Lao Cai Province, Vietnam",
    openingHours: "Open 24 hours",
    entryFee: "$20 for the cable car",
    priceCategory: "moderate",
    priceRange: "$$",
    entryFeeCategory: "paid",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["romantic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Sapa Market",
    description:
      "A vibrant market where you can experience local culture, shop for handicrafts, and taste traditional foods.",
    imageUrl: "https://plus.unsplash.com/sapa-market.jpg",
    location: "Sapa Market, Sapa, Lao Cai Province, Vietnam",
    openingHours: "6 AM - 6 PM",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["cultural", "culinary"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Cat Cat Village",
    description:
      "A traditional Hmong village known for its beautiful terraced rice fields and rich cultural heritage.",
    imageUrl: "https://plus.unsplash.com/cat-cat-village.jpg",
    location: "Cat Cat Village, Sapa, Lao Cai Province, Vietnam",
    openingHours: "Open 24 hours",
    entryFee: "$1 for village entry fee",
    priceCategory: "cheap",
    priceRange: "$",
    entryFeeCategory: "paid",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["cultural", "romantic", "traditional"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
];
