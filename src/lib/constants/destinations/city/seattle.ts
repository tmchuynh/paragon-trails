import { Attraction } from "@/lib/interfaces/services/attractions";

export const seattleWaUnitedStates: Attraction[] = [
  {
    title: "Space Needle",
    description:
      "An iconic observation tower offering panoramic views of Seattle and the surrounding mountains.",
    imageUrl: "https://plus.unsplash.com/space-needle.jpg",
    location: "400 Broad St, Seattle, WA 98109, USA",
    openingHours: "9 AM - 11 PM",
    entryFee: "$35",
    priceRange: "$$",
    entryFeeCategory: "paid",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["cultural", ],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Pike Place Market",
    description:
      "A bustling public market known for its fresh produce, seafood, and unique shops.",
    imageUrl: "https://plus.unsplash.com/pike-place-market.jpg",
    location: "85 Pike St, Seattle, WA 98101, USA",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    entryFeeCategory: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["culinary", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Chihuly Garden and Glass",
    description:
      "A stunning exhibition of glass art by Dale Chihuly, featuring intricate sculptures and a beautiful garden setting.",
    imageUrl: "https://plus.unsplash.com/chihuly-garden-glass.jpg",
    location: "305 Harrison St, Seattle, WA 98109, USA",
    openingHours: "10 AM - 6 PM",
    entryFee: "$30",
    priceRange: "$$",
    entryFeeCategory: "moderate",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["art-and-music", "cultural", "romantic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
];
