import { Tour } from "@/lib/interfaces/services/tours";

export const santoriniTours: Tour[] = [
  {
    title: "Santorini Sunset Cruise",
    description:
      "Experience the breathtaking sunsets of Santorini from the sea with a romantic sunset cruise.",
    city: "Fira",
    country: "Greece",
    region: "South Aegean",
    images: [
      "/images/tours/santorini/sunset-cruise.jpg",
      "/images/tours/santorini/sunset-view.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.9,
    tags: ["Romantic", "Adventure", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "romantic",
  },
  {
    title: "Santorini Wine Tasting Tour",
    description:
      "Discover the unique wines of Santorini with a guided tour of local vineyards and tastings.",
    city: "Fira",
    country: "Greece",
    region: "South Aegean",
    images: [
      "/images/tours/santorini/wine-tasting.jpg",
      "/images/tours/santorini/vineyards.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Culinary", "Cultural", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
  },
  {
    title: "Akrotiri Archaeological Site Tour",
    description:
      "Explore the ancient ruins of Akrotiri, a Minoan Bronze Age settlement preserved in volcanic ash.",
    city: "Akrotiri",
    country: "Greece",
    region: "South Aegean",
    images: [
      "/images/tours/santorini/akrotiri.jpg",
      "/images/tours/santorini/archaeological-site.jpg",
    ],
    duration: "2 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Historical", "Cultural", "Educational"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
  },
];

export default santoriniTours;
