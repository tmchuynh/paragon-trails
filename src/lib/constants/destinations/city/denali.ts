import { Attraction } from "@/lib/interfaces/services/attractions";

export const denaliAkUnitedStates: Attraction[] = [
  {
    title: "Denali National Park and Preserve",
    description:
      "Home to North America's highest peak, Denali, this park offers stunning landscapes and diverse wildlife.",
    imageUrl: "https://plus.unsplash.com/denali-national-park.jpg",
    location: "Denali Park Rd, Alaska",
    openingHours: "May - September, 24 hours",
    entryFee: "$15 per vehicle",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["adventure", "romantic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,

    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Denali Visitor Center",
    description:
      "The main hub for visitor information, exhibits, and ranger-led programs in Denali National Park.",
    imageUrl: "https://plus.unsplash.com/denali-visitor-center.jpg",
    location: "Mile 1.5 Denali Park Rd, Alaska",
    openingHours: "May - September, 9 AM - 7 PM",
    entryFee: "Free",
    priceCategory: "free",
    priceRange: "free",
    entryFeeCategory: "free",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["cultural", "information"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,

    isWheelchairAccessible: true,
    isHistorical: false,
  },
  {
    title: "Mount McKinley (Denali)",
    description:
      "The highest peak in North America, offering breathtaking views and challenging climbs.",
    imageUrl: "https://plus.unsplash.com/mount-mckinley.jpg",
    location: "Denali National Park, Alaska",
    openingHours: "Open year-round, best viewed in summer months",
    entryFee: "$15 per vehicle (park entry fee)",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["romantic", "adventure"],
    accessibilityFeatures: ["not wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Denali Transit Bus Tour",
    description:
      "A narrated bus tour through Denali National Park, offering opportunities to spot wildlife and scenic views of the Alaskan wilderness.",
    imageUrl: "https://plus.unsplash.com/denali-bus-tour.jpg",
    location: "Denali Park Road, Alaska",
    openingHours: "Multiple departures daily, May - September",
    entryFee: "$60 per adult",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["romantic"],
    accessibilityFeatures: ["accessible buses available"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
