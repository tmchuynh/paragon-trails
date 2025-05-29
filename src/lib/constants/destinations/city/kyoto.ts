import { Attraction } from "@/lib/interfaces/services/attractions";

export const kyotoKyotoPrefectureJapan: Attraction[] = [
  {
    title: "Kinkaku-ji (Golden Pavilion)",
    description:
      "A stunning Zen Buddhist temple covered in gold leaf, surrounded by beautiful gardens.",
    imageUrl: "https://plus.unsplash.com/kinkaku-ji.jpg",
    location: "1 Kinkakujicho, Kita Ward, Kyoto",
    openingHours: "9 AM - 5 PM",
    entryFee: "¥400",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural", "romantic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Fushimi Inari Taisha",
    description:
      "Famous for its thousands of vermilion torii gates that lead up the sacred Mount Inari.",
    imageUrl: "https://plus.unsplash.com/fushimi-inari-taisha.jpg",
    location: "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["spiritual", "cultural", "adventure"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "Arashiyama Bamboo Grove",
    description:
      "A serene bamboo forest that offers a unique and tranquil walking experience.",
    imageUrl: "https://plus.unsplash.com/arashiyama-bamboo-grove.jpg",
    location: "Arashiyama, Ukyo Ward, Kyoto",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["romantic", "art-and-music"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
];
