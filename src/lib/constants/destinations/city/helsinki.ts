import { Attraction } from "@/lib/interfaces/services/attractions";

export const helsinkiUusimaaFinland: Attraction[] = [
  {
    title: "Helsinki Cathedral",
    description:
      "An iconic neoclassical cathedral located in the heart of Helsinki, offering stunning architecture and views.",
    imageUrl: "https://plus.unsplash.com/helsinki-cathedral.jpg",
    location: "Unioninkatu 29, Helsinki, Finland",
    openingHours: "Open 9 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural", "spiritual"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Suomenlinna Fortress",
    description:
      "A UNESCO World Heritage site, this sea fortress offers rich history and beautiful landscapes.",
    imageUrl: "https://plus.unsplash.com/suomenlinna-fortress.jpg",
    location: "Suomenlinna C 40, Helsinki, Finland",
    openingHours: "Open 24 hours",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural", "adventure"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: true,
    isWheelchairAccessible: false,
  },
  {
    title: "Esplanadi Park",
    description:
      "A popular park in the city center, perfect for relaxation and enjoying local events.",
    imageUrl: "https://plus.unsplash.com/esplanadi-park.jpg",
    location: "Esplanadi, Helsinki, Finland",
    openingHours: "Open 24 hours",
    priceRange: "$",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.5,
    tags: ["adventure", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
  {
    title: "Löyly Premium Sauna Experience",
    description:
      "An exclusive Nordic spa experience featuring private waterfront sauna suites, personalized wellness programs, ice swimming rituals, and gourmet Finnish cuisine with champagne service.",
    imageUrl: "https://plus.unsplash.com/loyly-premium-sauna.jpg",
    location: "Hernesaarenranta 4, Helsinki, Finland",
    openingHours: "Private sessions by appointment",
    entryFee: "From €500 per couple",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["luxury", "wellness", "sauna"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
