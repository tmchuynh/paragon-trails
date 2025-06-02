import { Tour } from "@/lib/interfaces/services/tours";

export const panautiTours: Tour[] = [
  {
    title: "Ancient Temples & Living Heritage Tour",
    description:
      "Explore the medieval town of Panauti with its well-preserved temples, intricate wood carvings, and living traditions that have remained unchanged for centuries in this lesser-visited Nepali cultural gem.",
    city: "Panauti",
    country: "Nepal",
    region: "Bagmati Province",
    images: [
      "/images/tours/panauti/ancient-temples.jpg",
      "/images/tours/panauti/wood-carvings.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Cultural", "Temples", "Heritage"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
  },
  {
    title: "Panauti Homestay Experience",
    description:
      "Immerse yourself in authentic Nepali life with a community-based homestay experience in Panauti, participating in cooking traditional meals, learning local crafts, and sharing daily activities with your host family.",
    city: "Panauti",
    country: "Nepal",
    region: "Bagmati Province",
    images: [
      "/images/tours/panauti/homestay.jpg",
      "/images/tours/panauti/local-cooking.jpg",
    ],
    duration: "24 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Homestay", "Cultural Exchange", "Food"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "local",
  },
  {
    title: "Village to Village Trek: Panauti to Namo Buddha",
    description:
      "Embark on a picturesque day hike from the ancient town of Panauti to the sacred Buddhist site of Namo Buddha, passing through terraced fields, traditional villages, and forest trails with views of the Himalayas.",
    city: "Panauti",
    country: "Nepal",
    region: "Bagmati Province",
    images: [
      "/images/tours/panauti/village-trek.jpg",
      "/images/tours/panauti/namo-buddha.jpg",
    ],
    duration: "6 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Hiking", "Nature", "Buddhist Sites"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
];

export default panautiTours;
