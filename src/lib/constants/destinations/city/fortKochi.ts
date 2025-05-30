import { Attraction } from "@/lib/interfaces/services/attractions";

export const fortKochiKeralaIndia: Attraction[] = [
  {
    title: "Fort Kochi Beach",
    description:
      "A serene beach known for its Chinese fishing nets and beautiful sunsets.",
    imageUrl: "https://plus.unsplash.com/fort-kochi-beach.jpg",
    location: "Fort Kochi, Kerala, India",
    openingHours: "Open 24 hours",
    priceRange: "$",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.5,
    tags: ["adventure", "romantic", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "St. Francis Church",
    description:
      "The oldest European church in India, known for its historical significance and architecture.",
    imageUrl: "https://plus.unsplash.com/st-francis-church.jpg",
    location: "Fort Kochi, Kerala, India",
    openingHours: "6 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["historical", "spiritual", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Chinese Fishing Nets",
    description:
      "Iconic fishing nets that are a symbol of Fort Kochi, offering a glimpse into the local fishing culture.",
    imageUrl: "https://plus.unsplash.com/chinese-fishing-nets.jpg",
    location: "Fort Kochi, Kerala, India",
    openingHours: "Open 24 hours",
    priceRange: "$",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["cultural", "romantic", "art-and-music"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Luxury Keralan Houseboat Experience",
    description:
      "An opulent private houseboat journey through Kerala's backwaters featuring traditional architecture with modern luxury, personal chef preparing authentic Kerala cuisine, and exclusive cultural performances onboard.",
    imageUrl: "https://plus.unsplash.com/kerala-luxury-houseboat.jpg",
    location: "Vembanad Lake, Fort Kochi",
    openingHours: "24-hour service with advanced booking",
    entryFee: "From ₹75,000 per night",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["luxury", "cultural", "local"],
    accessibilityFeatures: ["assistance available"],
    isPopular: false,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
