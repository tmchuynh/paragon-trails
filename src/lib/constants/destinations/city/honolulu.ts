import { Attraction } from "@/lib/interfaces/services/attractions";

export const honoluluHiUnitedStates: Attraction[] = [
  {
    title: "Waikiki Beach",
    description:
      "Famous for its golden sands and vibrant atmosphere, Waikiki Beach is a must-visit destination in Honolulu.",
    imageUrl: "https://plus.unsplash.com/waikiki-beach.jpg",
    location: "Waikiki, Honolulu, HI",
    openingHours: "Open 24 hours",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["adventure", "local"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Diamond Head State Monument",
    description:
      "A volcanic tuff cone offering panoramic views of Honolulu and the Pacific Ocean.",
    imageUrl: "https://plus.unsplash.com/diamond-head.jpg",
    location: "Diamond Head Rd, Honolulu, HI",
    openingHours: "6 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["romantic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Pearl Harbor National Memorial",
    description:
      "A historic site commemorating the events of December 7, 1941, with museums and memorials.",
    imageUrl: "https://plus.unsplash.com/pearl-harbor.jpg",
    location: "1 Arizona Memorial Pl, Honolulu, HI",
    openingHours: "7 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["historical", "cultural", "memorial"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Four Seasons Private Oceanfront Villa Experience",
    description:
      "An ultra-luxury beachfront villa experience featuring personal chef service, private pool, dedicated concierge, and exclusive helicopter tours of Oahu's hidden waterfalls and secluded beaches.",
    imageUrl: "https://plus.unsplash.com/honolulu-luxury-villa.jpg",
    location: "Four Seasons Resort, 92-1001 Olani St, Kapolei, HI",
    openingHours: "24-hour service",
    entryFee: "From $10,000 per night",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["luxury", "local", "oceanfront"],
    accessibilityFeatures: ["wheelchair accessible", "personalized service"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
