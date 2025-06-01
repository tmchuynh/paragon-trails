import { Tour } from "@/lib/interfaces/services/tours";

export const reykjavikTours: Tour[] = [
  {
    title: "Golden Circle & Blue Lagoon Combo",
    description:
      "Experience Iceland's natural wonders with a tour of the Golden Circle, including Þingvellir National Park, Geysir geothermal area, and Gullfoss waterfall, followed by a relaxing soak in the Blue Lagoon.",
    images: [
      "/images/tours/reykjavik/golden-circle.jpg",
      "/images/tours/reykjavik/blue-lagoon.jpg",
    ],
    duration: "10 hours",
    price: "$150",
    rating: 4.8,
    tags: ["Nature", "Relaxation", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "nature-wildlife",
  },
  {
    title: "Northern Lights Evening Tour",
    description:
      "Chase the elusive Northern Lights with an expert guide who will take you to the best viewing spots away from city lights.",
    images: [
      "/images/tours/reykjavik/northern-lights.jpg",
      "/images/tours/reykjavik/stargazing.jpg",
    ],
    duration: "3-5 hours",
    price: "$100",
    rating: 4.9,
    tags: ["Adventure", "Nightlife", "Photography"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
  },
  {
    title: "Reykjavik City Walking Tour",
    description:
      "Discover Reykjavik's vibrant culture and history on a guided walking tour through its charming streets, iconic landmarks, and hidden gems.",
    images: [
      "/images/tours/reykjavik/city-walking-tour.jpg",
      "/images/tours/reykjavik/hallgrimskirkja.jpg",
    ],
    duration: "2 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Cultural", "Historical", "City Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
  },
];
