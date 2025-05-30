import { Attraction } from "@/lib/interfaces/services/attractions";

export const tokyoKantoJapan: Attraction[] = [
  {
    title: "Meiji Shrine",
    description:
      "A serene Shinto shrine dedicated to Emperor Meiji and Empress Shoken, set within a 170-acre forest with 120,000 trees in the heart of Tokyo.",
    imageUrl: "https://plus.unsplash.com/meiji-shrine-tokyo.jpg",
    location: "1-1 Yoyogi-Kamizonocho, Shibuya City, Tokyo",
    openingHours: "Sunrise to sunset",
    entryFee: "Free",
    entryFeeCategory: "free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["shrine", "spiritual", "nature"],
    accessibilityFeatures: ["wheelchair accessible paths"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isShopping: true,
    isDining: false,
    isOutdoor: true,
    isIndoor: false,
  },
  {
    title: "Shibuya Crossing",
    description:
      "The world's busiest pedestrian intersection where up to 3,000 people cross at once under giant video screens and neon signs, creating a uniquely Tokyo experience.",
    imageUrl: "https://plus.unsplash.com/shibuya-crossing.jpg",
    location: "Shibuya, Tokyo",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    entryFeeCategory: "free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["urban", "art-and-music"],
    accessibilityFeatures: ["wheelchair accessible crossings"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isShopping: true,
    isDining: true,
    isOutdoor: true,
    isIndoor: false,
  },
  {
    title: "TeamLab Borderless Digital Art Museum",
    description:
      "An immersive, interactive digital art experience where artworks move freely, influence each other, and interact with visitors in a borderless world.",
    imageUrl: "https://plus.unsplash.com/teamlab-borderless.jpg",
    location: "Odaiba, Tokyo (relocating to Azabudai Hills in 2024)",
    openingHours: "10:00 AM - 7:00 PM (closed Tuesdays)",
    entryFee: "¥3,200 for adults, ¥1,000 for children",
    entryFeeCategory: "moderate",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["digital art"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isShopping: true,
    isDining: false,
    isOutdoor: false,
    isIndoor: true,
  },
  {
    title: "Tsukiji Outer Market",
    description:
      "A bustling marketplace with over 400 shops and restaurants offering the freshest seafood, Japanese kitchen tools, and local specialties.",
    imageUrl: "https://plus.unsplash.com/tsukiji-market.jpg",
    location: "Tsukiji, Chuo City, Tokyo",
    openingHours: "5:00 AM - 2:00 PM (many shops closed on Sundays)",
    entryFee: "Free (food and shopping costs vary)",
    entryFeeCategory: "free",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["culinary"],
    accessibilityFeatures: ["crowded pathways"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isShopping: true,
    isDining: true,
    isOutdoor: true,
    isIndoor: true,
  },
  {
    title: "Private Geisha Experience",
    description:
      "An exclusive evening in a traditional teahouse with authentic geisha entertainment, including traditional music, dance performances, conversation, and games, accompanied by a multi-course kaiseki dinner.",
    imageUrl: "https://plus.unsplash.com/tokyo-geisha-experience.jpg",
    location: "Private teahouse in Asakusa or Kagurazaka, Tokyo",
    openingHours: "By appointment, typically 7:00 PM - 10:00 PM",
    entryFee: "From ¥100,000 per group",
    entryFeeCategory: "luxury",
    priceRange: "$$$$",
    priceCategory: "luxury",
    timeOfDay: "evening",
    rating: 4.9,
    tags: ["cultural", "local", "traditional"],
    accessibilityFeatures: ["assistance available"],
    isPopular: false,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
    isLuxury: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isShopping: false,
    isDining: true,
    isOutdoor: false,
    isIndoor: true,
  },
];
