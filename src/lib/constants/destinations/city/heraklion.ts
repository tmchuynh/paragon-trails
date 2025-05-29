import { Attraction } from "@/lib/interfaces/services/attractions";

export const heraklionCreteGreece: Attraction[] = [
  {
    title: "Heraklion Archaeological Museum",
    description:
      "One of the most significant museums in Greece, showcasing Minoan artifacts and art.",
    imageUrl: "https://plus.unsplash.com/heraklion-archaeological-museum.jpg",
    location: "Xanthoudidou 1, Heraklion, Crete",
    openingHours: "8 AM - 8 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["cultural", "historical", "museum"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Knossos Palace",
    description:
      "The largest Bronze Age archaeological site on Crete, believed to be the ceremonial and political center of the Minoan civilization.",
    imageUrl: "https://plus.unsplash.com/knossos-palace.jpg",
    location: "Knossos, Heraklion, Crete",
    openingHours: "8 AM - 7 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "archaeological", "cultural"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "Heraklion Fortress (Koules)",
    description:
      "A Venetian fortress located at the entrance of the old harbor, offering panoramic views of the city and sea.",
    imageUrl: "https://plus.unsplash.com/heraklion-fortress.jpg",
    location: "Venetian Harbor, Heraklion, Crete",
    openingHours: "9 AM - 7 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["historical", "fortress", "viewpoint"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Luxury Cretan Yacht Experience",
    description:
      "An exclusive private yacht charter exploring Crete's hidden coves and pristine beaches, featuring gourmet Cretan cuisine prepared onboard by a personal chef, premium wine service, and snorkeling equipment.",
    imageUrl: "https://plus.unsplash.com/crete-yacht-charter.jpg",
    location: "Heraklion Marina, Crete",
    openingHours: "By reservation, 9 AM - 7 PM",
    entryFee: "From €3,500 per day",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["luxury", "exclusive", "marine"],
    accessibilityFeatures: ["assistance available"],
    isPopular: false,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
