import { Attraction } from "@/lib/interfaces/services/attractions";

export const singaporeCentralSingaporeSingapore: Attraction[] = [
  {
    title: "Marina Bay Sands",
    description:
      "An iconic hotel and entertainment complex featuring a rooftop infinity pool, observation deck, and a shopping mall.",
    imageUrl: "https://plus.unsplash.com/marina-bay-sands.jpg",
    location: "10 Bayfront Ave, Singapore 018956",
    openingHours: "Open 24 hours",
    entryFee: "Free to enter, charges apply for attractions",
    priceCategory: "moderate",
    priceRange: "$$",
    entryFeeCategory: "paid",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["hotel"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Gardens by the Bay",
    description:
      "A futuristic garden featuring the iconic Supertree Grove, Flower Dome, and Cloud Forest.",
    imageUrl: "https://plus.unsplash.com/gardens-by-the-bay.jpg",
    location: "18 Marina Gardens Dr, Singapore 018953",
    openingHours: "5 AM - 2 AM",
    entryFee: "$28 for adults, $15 for children (Flower Dome & Cloud Forest)",
    priceCategory: "moderate",
    priceRange: "$$",
    entryFeeCategory: "paid",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["romantic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Sentosa Island",
    description:
      "A resort island with beaches, theme parks, and attractions like Universal Studios Singapore.",
    imageUrl: "https://plus.unsplash.com/sentosa-island.jpg",
    location: "Sentosa Island, Singapore",
    openingHours: "Open 24 hours (varies by attraction)",
    entryFee:
      "$4 for adults (Sentosa Island entrance), additional fees for attractions",
    priceCategory: " expensive",
    priceRange: "$$$",
    entryFeeCategory: "budget",
    timeOfDay: "all day",
    rating: 4.6,
    tags: [],
    accessibilityFeatures: [
      "wheelchair accessible",
      "assistive devices available",
    ],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
