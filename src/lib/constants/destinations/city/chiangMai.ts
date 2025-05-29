import { Attraction } from "@/lib/interfaces/services/attractions";

export const chiangMaiChiangMaiProvinceThailand: Attraction[] = [
  {
    title: "Wat Phra That Doi Suthep",
    description:
      "A sacred temple located on Doi Suthep mountain, offering stunning views of Chiang Mai.",
    imageUrl: "https://plus.unsplash.com/wat-phra-that-doi-suthep.jpg",
    location: "Doi Suthep, Chiang Mai",
    openingHours: "6 AM - 6 PM",
    entryFee: "THB 30",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["spiritual", "cultural", "romantic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Chiang Mai Old City",
    description:
      "A historic area with ancient temples, traditional markets, and vibrant culture.",
    imageUrl: "https://plus.unsplash.com/chiang-mai-old-city.jpg",
    location: "Old City, Chiang Mai",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.5,
    tags: ["cultural", "historical"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "Elephant Nature Park",
    description:
      "An ethical elephant sanctuary providing rescue and rehabilitation for elephants, offering visitors the chance to observe and interact with elephants in a natural environment.",
    imageUrl: "https://plus.unsplash.com/elephant-nature-park.jpg",
    location: "Kuet Chang, Mae Taeng District, Chiang Mai",
    openingHours: "9 AM - 5 PM",
    entryFee: "THB 2,500",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["ethical", "nature"],
    accessibilityFeatures: ["assistance available"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
];
