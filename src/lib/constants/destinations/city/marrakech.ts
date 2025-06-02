import { Attraction } from "@/lib/interfaces/services/attractions";

export const marrakechMarrakechsafiMorocco: Attraction[] = [
  {
    title: "Jemaa el-Fnaa",
    description:
      "The main square and marketplace in Marrakech, known for its vibrant atmosphere, street performers, and food stalls.",
    imageUrl: "https://plus.unsplash.com/jemaa-el-fnaa.jpg",
    location: "Jemaa el-Fnaa, Marrakech",
    openingHours: "Open 24 hours",
    priceRange: "free",
    entryFee: "Free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["cultural", "historical", "culinary"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "Koutoubia Mosque",
    description:
      "The largest mosque in Marrakech, known for its stunning minaret and beautiful gardens.",
    imageUrl: "https://plus.unsplash.com/koutoubia-mosque.jpg",
    location: "Avenue Mohammed V, Marrakech",
    openingHours: "6 AM - 8 PM",
    entryFee: "Free (non-Muslims cannot enter the mosque)",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["spiritual", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Majorelle Garden",
    description:
      "A beautiful garden designed by French painter Jacques Majorelle, featuring exotic plants and vibrant blue buildings.",
    imageUrl: "https://plus.unsplash.com/majorelle-garden.jpg",
    location: "Rue Yves Saint Laurent, Marrakech",
    openingHours: "8 AM - 5 PM",
    entryFee: "MAD 70",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["romantic", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
];
