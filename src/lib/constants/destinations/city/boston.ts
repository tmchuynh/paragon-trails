import { Attraction } from "@/lib/interfaces/services/attractions";

export const bostonMaUnitedStates: Attraction[] = [
  {
    title: "Freedom Trail",
    description:
      "A 2.5-mile-long path through downtown Boston that passes by 16 significant historical sites, including the Massachusetts State House and Paul Revere's House.",
    imageUrl: "https://plus.unsplash.com/freedom-trail.jpg",
    location: "Boston, MA",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["historical", "cultural", "walking tour"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Boston Common",
    description:
      "The oldest public park in the United States, offering a peaceful retreat in the heart of the city with walking paths, a pond, and seasonal events.",
    imageUrl: "https://plus.unsplash.com/boston-common.jpg",
    location: "139 Tremont St, Boston, MA 02111",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["park", "adventure"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Museum of Fine Arts",
    description:
      "One of the largest museums in the United States, featuring an extensive collection of art from around the world, including works by Monet, Van Gogh, and more.",
    imageUrl: "https://plus.unsplash.com/museum-of-fine-arts.jpg",
    location: "465 Huntington Ave, Boston, MA 02115",
    openingHours:
      "Mon-Wed, Fri-Sun 10 AM - 5 PM; Thu 10 AM - 9 PM; Closed on Tuesdays",
    entryFee: "$25 for adults; free for children under 18",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["art-and-music", "cultural"],
    accessibilityFeatures: ["wheelchair accessible", "audio guides available"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "O Ya Boston",
    description:
      "An intimate, world-class Japanese restaurant offering an exquisite omakase experience with innovative nigiri and creative small plates using the finest ingredients from around the world, complemented by rare sake selections.",
    imageUrl: "https://plus.unsplash.com/oya-boston.jpg",
    location: "9 East St, Boston, MA 02111",
    openingHours: "5:00 PM - 10:00 PM, Closed Sundays and Mondays",
    entryFee:
      "Omakase experience from $285 per person, beverage pairings additional $150",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "evening",
    rating: 4.9,
    tags: ["culinary", "local"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
];
