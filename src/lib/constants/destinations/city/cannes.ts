import { Attraction } from "@/lib/interfaces/services/attractions";

export const cannesFrenchRivieraFrance: Attraction[] = [
  {
    title: "La Croisette",
    description:
      "A famous promenade along the Mediterranean Sea, lined with luxury hotels, shops, and restaurants.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1697729769965-c07662e5c658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWNyb3BvbGlzJTIwTXVzZXVtfGVufDB8fDB8fHww",
    location: "Boulevard de la Croisette, Cannes",
    openingHours: "Open 24 hours",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["scenic", "shopping", "dining"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Le Suquet",
    description:
      "The old town of Cannes, offering narrow streets, historic buildings, and panoramic views of the city.",
    imageUrl: "https://plus.unsplash.com/le-suquet.jpg",
    location: "Rue Saint-Antoine, Cannes",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.6,
    tags: ["historical", "cultural", "viewpoint"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Palais des Festivals et des Congrès",
    description:
      "The iconic venue of the Cannes Film Festival, offering guided tours that explore the history of cinema and the famous red carpet.",
    imageUrl: "https://plus.unsplash.com/palais-des-festivals.jpg",
    location: "1 Boulevard de la Croisette, Cannes",
    openingHours: "Tours daily 10 AM - 6 PM (except during events)",
    entryFee: "€15 for guided tour",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["cultural", "film", "iconic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
