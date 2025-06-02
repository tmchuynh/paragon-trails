import { Tour } from "@/lib/interfaces/services/tours";

export const palermoTours: Tour[] = [
  {
    title: "Palermo Street Food Safari",
    description:
      "Taste your way through Sicily's vibrant capital on a guided tour of Palermo's historic markets and street food stalls, sampling authentic specialties like arancini, panelle, and the infamous spleen sandwich.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/street-food.jpg",
      "/images/tours/palermo/markets.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Markets", "Cultural"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
  },
  {
    title: "Norman-Arab Architecture Tour",
    description:
      "Discover Palermo's unique architectural heritage with visits to UNESCO-listed Norman-Arab sites including the stunning Palatine Chapel, Palermo Cathedral, and the magnificent Monreale Cathedral with its golden mosaics.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/palatine-chapel.jpg",
      "/images/tours/palermo/monreale-cathedral.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Architecture", "UNESCO", "History"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
  },
  {
    title: "Sicilian Cooking Class in Historic Palace",
    description:
      "Learn traditional Sicilian recipes in a hands-on cooking class held in a historic noble palace, preparing dishes like pasta alla Norma and cassata under the guidance of a local chef before enjoying your creations in the palace courtyard.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/cooking-class.jpg",
      "/images/tours/palermo/historic-palace.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Cooking", "Food", "Historical"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
  },
];

export default palermoTours;
