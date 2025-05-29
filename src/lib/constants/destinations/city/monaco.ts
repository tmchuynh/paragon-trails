import { Attraction } from "@/lib/interfaces/services/attractions";

export const monacoFrenchRivieraMonaco: Attraction[] = [
  {
    title: "Monte Carlo Casino",
    description:
      "A world-famous casino known for its opulent architecture and luxurious atmosphere.",
    imageUrl: "https://plus.unsplash.com/monte-carlo-casino.jpg",
    location: "Monte Carlo, Monaco",
    openingHours: "2 PM - 4 AM",
    entryFee: "€10",
    priceRange: "$$$",
    priceCategory: "expensive",
    entryFeeCategory: "budget",
    timeOfDay: "evening",
    rating: 4.6,
    tags: [ "luxury", ],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Prince's Palace of Monaco",
    description:
      "The official residence of the Prince of Monaco, offering guided tours and stunning views of the city.",
    imageUrl: "https://plus.unsplash.com/princes-palace-of-monaco.jpg",
    location: "Monaco-Ville, Monaco",
    openingHours: "9 AM - 7 PM",
    entryFee: "€8",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Oceanographic Museum of Monaco",
    description:
      "A museum dedicated to marine science and oceanography, featuring aquariums and exhibitions.",
    imageUrl: "https://plus.unsplash.com/oceanographic-museum-of-monaco.jpg",
    location: "Monaco-Ville, Monaco",
    openingHours: "10 AM - 7 PM",
    entryFee: "€14",
    entryFeeCategory: "budget",
    priceRange: "$$",
    priceCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural", "local"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
];
