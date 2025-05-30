import { Attraction } from "@/lib/interfaces/services/attractions";

export const seoulSeoulSouthKorea: Attraction[] = [
  {
    title: "Gyeongbokgung Palace",
    description:
      "The largest of the Five Grand Palaces built during the Joseon Dynasty, known for its beautiful architecture and changing of the guard ceremony.",
    imageUrl: "https://plus.unsplash.com/gyeongbokgung-palace.jpg",
    location: "161 Sajik-ro, Sejongno, Jongno-gu, Seoul, South Korea",
    openingHours: "9 AM - 6 PM",
    entryFee: "3,000 KRW",
    priceRange: "moderate",
    entryFeeCategory: "paid",
    priceCategory: "paid",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["cultural", "historical"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Bukchon Hanok Village",
    description:
      "A traditional Korean village with well-preserved hanoks (traditional houses), offering a glimpse into Korea's past.",
    imageUrl: "https://plus.unsplash.com/bukchon-hanok-village.jpg",
    location: "37 Gyedong-gil, Jongno-gu, Seoul, South Korea",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    entryFeeCategory: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["cultural", "historical", "wellness"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "N Seoul Tower",
    description:
      "An iconic tower offering panoramic views of the city, especially beautiful at night when illuminated.",
    imageUrl: "https://plus.unsplash.com/n-seoul-tower.jpg",
    location: "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
    openingHours: "10 AM - 11 PM",
    entryFee: "10,000 KRW (observation deck)",
    priceRange: "moderate",
    entryFeeCategory: "moderate",
    priceCategory: "paid",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,

    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
