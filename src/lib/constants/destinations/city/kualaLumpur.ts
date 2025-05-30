import { Attraction } from "@/lib/interfaces/services/attractions";

export const kualaLumpurSelangorMalaysia: Attraction[] = [
  {
    title: "Petronas Twin Towers",
    description:
      "Iconic twin skyscrapers offering stunning views of the city from the Skybridge and observation deck.",
    imageUrl: "https://plus.unsplash.com/petronas-twin-towers.jpg",
    location: "Kuala Lumpur City Centre, Kuala Lumpur, Selangor",
    openingHours: "9 AM - 9 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Batu Caves",
    description:
      "A limestone hill with a series of caves and cave temples, famous for its large golden statue of Lord Murugan.",
    imageUrl: "https://plus.unsplash.com/batu-caves.jpg",
    location: "Gombak, Selangor, Malaysia",
    openingHours: "6 AM - 9 PM",
    priceRange: "$",
    priceCategory: "free",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["spiritual", "cultural"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "KL Bird Park",
    description:
      "The world's largest free-flight walk-in aviary, home to over 200 species of birds.",
    imageUrl: "https://plus.unsplash.com/kl-bird-park.jpg",
    location: "Lake Gardens, Kuala Lumpur, Selangor",
    openingHours: "9 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["local", "adventure"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
];
