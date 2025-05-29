import { Attraction } from "@/lib/interfaces/services/attractions";

export const glasgowScotlandUnitedKingdom: Attraction[] = [
  {
    title: "Kelvingrove Art Gallery and Museum",
    description:
      "A world-class museum with a diverse collection of art and artifacts, set in a beautiful park.",
    imageUrl: "https://plus.unsplash.com/kelvingrove-art-gallery.jpg",
    location: "Argyle St, Glasgow",
    openingHours: "10 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["cultural", "historical", "museum"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Glasgow Cathedral",
    description:
      "A stunning medieval cathedral known for its impressive architecture and rich history.",
    imageUrl: "https://plus.unsplash.com/glasgow-cathedral.jpg",
    location: "Castle St, Glasgow",
    openingHours: "9 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "religious", "architecture"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "The Riverside Museum",
    description:
      "A modern transport museum showcasing Glasgow's rich maritime history and transport heritage.",
    imageUrl: "https://plus.unsplash.com/riverside-museum.jpg",
    location: "100 Pointhouse Place, Glasgow",
    openingHours: "10 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["cultural", "historical", "museum"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "The Clydeside Private Whisky Experience",
    description:
      "An exclusive whisky journey featuring private tastings of rare single malts, personalized blending sessions with master distillers, and helicopter transportation to historic highland distilleries.",
    imageUrl: "https://plus.unsplash.com/glasgow-whisky-experience.jpg",
    location: "100 Stobcross Road, Glasgow",
    openingHours: "By appointment only",
    entryFee: "From £1,200 per person",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["luxury", "whisky", "exclusive"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: false,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
