import { Attraction } from "@/lib/interfaces/services/attractions";

export const savannahGaUnitedStates: Attraction[] = [
  {
    title: "Forsyth Park",
    description:
      "A large public park in the historic district of Savannah, known for its iconic fountain and beautiful oak trees.",
    imageUrl: "https://plus.unsplash.com/forsyth-park.jpg",
    location: "Forsyth Park, Savannah, GA, USA",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    entryFeeCategory: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.8,
    tags: ["outdoor", "scenic", "relaxation"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Savannah Historic District",
    description:
      "A well-preserved area featuring cobblestone streets, historic homes, and beautiful squares.",
    imageUrl: "https://plus.unsplash.com/savannah-historic-district.jpg",
    location: "Savannah Historic District, Savannah, GA, USA",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    entryFeeCategory: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.9,
    tags: ["cultural", "historical", "walking"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "River Street",
    description:
      "A bustling waterfront street lined with shops, restaurants, and bars, offering great views of the Savannah River.",
    imageUrl: "https://plus.unsplash.com/river-street.jpg",
    location: "River Street, Savannah, GA, USA",
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    entryFeeCategory: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["entertainment", "shopping", "dining"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
];
