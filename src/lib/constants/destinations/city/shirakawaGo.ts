import { Attraction } from "@/lib/interfaces/services/attractions";

export const shirakawaGoGifuPrefectureJapan: Attraction[] = [
  {
    title: "Shirakawa-go Village",
    description:
      "A UNESCO World Heritage site known for its traditional gassho-zukuri farmhouses, set against a backdrop of stunning mountain scenery.",
    imageUrl: "https://plus.unsplash.com/shirakawa-go-village.jpg",
    location: "Shirakawa-go, Gifu Prefecture, Japan",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["cultural", "historical", "scenic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Wada House",
    description:
      "One of the largest and oldest gassho-zukuri farmhouses in Shirakawa-go, offering insights into traditional rural life.",
    imageUrl: "https://plus.unsplash.com/wada-house.jpg",
    location: "Wada House, Shirakawa-go, Gifu Prefecture, Japan",
    openingHours: "9 AM - 5 PM",
    entryFee: "$5 per person",
    priceCategory: "$",
    priceRange: "$$",
    entryFeeCategory: "$",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["cultural", "historical", "museum"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Shirakawa-go Observatory Deck",
    description:
      "A viewpoint offering panoramic views of Shirakawa-go village and the surrounding mountains, especially beautiful during winter.",
    imageUrl: "https://plus.unsplash.com/shirakawa-go-observatory.jpg",
    location: "Shirakawa-go Observatory Deck, Gifu Prefecture, Japan",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["scenic", "outdoor", "photography"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
];
