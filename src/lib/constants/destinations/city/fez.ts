import { Attraction } from "@/lib/interfaces/services/attractions";

export const fezFesMeknesMorocco: Attraction[] = [
  {
    title: "Medina of Fez",
    description:
      "A UNESCO World Heritage site, the Medina of Fez is one of the world's largest car-free urban areas, known for its medieval architecture and vibrant souks.",
    imageUrl: "https://plus.unsplash.com/medina-of-fez.jpg",
    location: "Fez, Fès-Meknès, Morocco",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["cultural", "historical", "shopping"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "Bou Inania Madrasa",
    description:
      "An architectural masterpiece of Marinid architecture, this madrasa features intricate tile work and wood carvings.",
    imageUrl: "https://plus.unsplash.com/bou-inania-madrasa.jpg",
    location: "Bou Inania, Fez",
    openingHours: "9 AM - 5 PM",
    entryFee: "10 MAD",
    priceCategory: "budget",
    priceRange: "$",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "religious", "architecture"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Dar Batha Museum",
    description:
      "A museum housed in a former royal palace, showcasing Moroccan arts and crafts, including ceramics and woodwork.",
    imageUrl: "https://plus.unsplash.com/dar-batha-museum.jpg",
    location: "Dar Batha, Fez",
    openingHours: "9 AM - 6 PM",
    entryFee: "20 MAD",
    priceCategory: "budget",
    priceRange: "$",
    entryFeeCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["cultural", "museum", "arts"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
];
