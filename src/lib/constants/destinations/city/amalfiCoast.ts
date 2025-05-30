import { Attraction } from "@/lib/interfaces/services/attractions";

export const amalfiCoastCampaniaItaly: Attraction[] = [
  {
    title: "Amalfi Cathedral",
    description:
      "A stunning example of Arab-Norman architecture, this cathedral is a must-visit.",
    location: "Piazza Duomo, Amalfi",
    imageUrl: "https://plus.unsplash.com/amalfi-cathedral.jpg",
    rating: 4.8,
    openingHours: "Daily 9:00 AM - 7:00 PM",
    entryFee: "Free",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    tags: ["historical", "cultural", "spiritual"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Luxury Yacht Charter",
    description:
      "Experience the stunning Amalfi coastline from the sea with a private yacht charter, complete with crew and gourmet catering.",
    location: "Amalfi Marina",
    imageUrl: "https://plus.unsplash.com/amalfi-yacht.jpg",
    rating: 4.9,
    openingHours: "Daily 9:00 AM - 6:00 PM",
    entryFee: "From €800 per day",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "daytime",
    tags: ["luxury", "local"],
    accessibilityFeatures: ["assistance available"],
    isPopular: true,

    isFree: false,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
  {
    title: "Caruso Belvedere Hotel Spa",
    description:
      "An exclusive spa experience in one of the coast's most luxurious hotels, offering panoramic views and premium treatments.",
    location: "Piazza San Giovanni del Toro, 2, Ravello",
    imageUrl: "https://plus.unsplash.com/caruso-spa.jpg",
    rating: 4.8,
    openingHours: "Daily 10:00 AM - 8:00 PM",
    entryFee: "From €250 per treatment",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "all day",
    tags: ["luxury", "wellness"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
  {
    title: "Don Alfonso 1890",
    description:
      "A Michelin-starred fine dining experience showcasing the region's finest ingredients with innovative techniques and an extensive wine cellar.",
    location: "Corso Sant'Agata, 11, Sant'Agata sui Due Golfi",
    imageUrl: "https://plus.unsplash.com/don-alfonso.jpg",
    rating: 4.9,
    openingHours: "7:00 PM - 11:00 PM, Closed Mondays",
    entryFee: "Tasting menu from €180 per person",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "evening",
    tags: ["culinary", "luxury"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
  {
    title: "Villa Rufolo",
    description:
      "Famous for its beautiful gardens and panoramic views of the coast.",
    location: "Piazza Duomo, Ravello",
    imageUrl: "https://plus.unsplash.com/villa-rufolo.jpg",
    rating: 4.7,
    openingHours: "Daily 9:00 AM - 7:00 PM",
    entryFee: "€10",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["historical", "cultural", "wellness"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Path of the Gods",
    description:
      "A breathtaking hiking trail offering stunning views of the Amalfi Coast.",
    location: "Bomerano to Nocelle",
    imageUrl: "https://plus.unsplash.com/path-of-the-gods.jpg",
    priceRange: "free",
    rating: 4.9,
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceCategory: "free",
    timeOfDay: "daytime",
    tags: ["adventure", "romantic"],
    accessibilityFeatures: ["not wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
  {
    title: "Ravello Music Festival",
    description:
      "A prestigious annual summer music festival featuring world-class classical performances in stunning outdoor venues with panoramic coastal views.",
    location: "Ravello, Amalfi Coast",
    imageUrl: "https://plus.unsplash.com/ravello-music-festival.jpg",
    rating: 4.9,
    openingHours: "Various times during summer months",
    entryFee: "From €50 to €200 depending on performance",
    priceRange: "$$$",
    priceCategory: "expensive",
    entryFeeCategory: "moderate",
    timeOfDay: "evening",
    tags: ["cultural",  "art-and-music"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
  {
    title: "Ceramic Workshops in Positano",
    description:
      "Traditional ceramic crafting experiences where visitors can learn from local artisans and create their own hand-painted pieces using centuries-old techniques.",
    location: "Positano, Amalfi Coast",
    imageUrl: "https://plus.unsplash.com/positano-ceramics.jpg",
    rating: 4.7,
    openingHours: "10:00 AM - 5:00 PM, Monday to Saturday",
    entryFee: "From €80 per person for a workshop",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["cultural", "art-and-music"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isLocalExperience: true,
  },
  {
    title: "Limoncello Tasting in Sorrento",
    description:
      "Experience the authentic taste of Sorrento's famous limoncello with guided tastings at local distilleries, learning about the production process and the history of this iconic liqueur.",
    location: "Sorrento, Amalfi Coast",
    imageUrl: "https://plus.unsplash.com/sorrento-limoncello.jpg",
    rating: 4.8,
    openingHours: "10:00 AM - 6:00 PM, Monday to Saturday",
    entryFee: "€20 per person for a tasting session",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["cultural", "culinary", "local"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isLocalExperience: true,
  },
  {
    title: "Villa Cimbrone",
    description:
      "Known for its breathtaking gardens and panoramic views, this villa is a perfect spot for relaxation and photography.",
    location: "Via Santa Chiara, Ravello",
    imageUrl: "https://plus.unsplash.com/villa-cimbrone.jpg",
    rating: 4.7,
    openingHours: "Daily 9:00 AM - 7:00 PM",
    entryFee: "€10",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["historical", "cultural", "wellness"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Fiordo di Furore",
    description:
      "A stunning natural fjord with a picturesque beach, perfect for swimming and photography.",
    location: "Furore, Amalfi Coast",
    imageUrl: "https://plus.unsplash.com/fiordo-di-furore.jpg",
    rating: 4.8,
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    tags: ["romantic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
  {
    title: "Villa d'Este",
    description:
      "A UNESCO World Heritage site known for its magnificent gardens and fountains, offering a glimpse into the opulent lifestyle of the Renaissance.",
    location: "Piazza Trento, Tivoli",
    imageUrl: "https://plus.unsplash.com/villa-deste.jpg",
    rating: 4.9,
    openingHours: "Daily 9:00 AM - 7:00 PM",
    entryFee: "€12",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["historical", "cultural", "wellness"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Marina Grande Beach",
    description:
      "The main beach of Positano, known for its vibrant atmosphere and stunning views.",
    location: "Via Marina Grande, Positano",
    imageUrl: "https://plus.unsplash.com/marina-grande-beach.jpg",
    rating: 4.6,
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    tags: ["romantic", "adventure"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
  {
    title: "Grotta dello Smeraldo",
    description:
      "A stunning sea cave known for its emerald-green waters, accessible by boat or a steep staircase.",
    location: "Conca dei Marini, Amalfi Coast",
    imageUrl: "https://plus.unsplash.com/grotta-dello-smeraldo.jpg",
    rating: 4.7,
    openingHours: "Daily 9:00 AM - 5:00 PM",
    entryFee: "€5",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["romantic"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
  {
    title: "Sentiero degli Dei (Path of the Gods)",
    description:
      "A breathtaking hiking trail offering stunning views of the Amalfi Coast, perfect for outdoor enthusiasts.",
    location: "Bomerano to Nocelle",
    imageUrl: "https://plus.unsplash.com/sentiero-degli-dei.jpg",
    rating: 4.9,
    openingHours: "Open 24 hours",
    entryFee: "Free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    tags: ["romantic", "adventure"],
    accessibilityFeatures: ["not wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isHistorical: false,
  },
  {
    title: "Villa San Michele",
    description:
      "A historic villa with beautiful gardens and stunning views of the Bay of Naples, originally built by Swedish physician Axel Munthe.",
    location: "Via Axel Munthe, 34, Anacapri",
    imageUrl: "https://plus.unsplash.com/villa-san-michele.jpg",
    rating: 4.8,
    openingHours: "Daily 9:00 AM - 7:00 PM",
    entryFee: "€8",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    tags: ["historical", "cultural", "wellness"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Capri Boat Tour",
    description:
      "Explore the stunning island of Capri by boat, visiting the famous Blue Grotto and other hidden gems along the coastline.",
    location: "Capri Marina",
    imageUrl: "https://plus.unsplash.com/capri-boat-tour.jpg",
    rating: 4.9,
    openingHours: "Daily 9:00 AM - 6:00 PM",
    entryFee: "From €50 per person",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    tags: [ "romantic", "adventure"],
    accessibilityFeatures: ["assistance available"],
    isPopular: true,

    isFree: false,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
];
