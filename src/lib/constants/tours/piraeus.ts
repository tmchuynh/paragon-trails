import { Tour } from "@/lib/interfaces/services/tours";

export const piraeusTours: Tour[] = [
  {
    title: "Ancient Port & Maritime History Tour",
    description:
      "Discover the rich maritime history of Piraeus, one of the oldest and most important ports in the Mediterranean, with a guided tour of its archaeological sites, maritime museum, and ancient harbor structures.",
    city: "Piraeus",
    country: "Greece",
    region: "Attica",
    images: [
      "/images/tours/piraeus/maritime-museum.jpg",
      "/images/tours/piraeus/ancient-harbor.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Historical", "Maritime", "Archaeological"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
  },
  {
    title: "Island Hopping Day Trip: Hydra, Poros & Aegina",
    description:
      "Embark on a classic Greek island adventure aboard a comfortable cruise ship to visit three enchanting islands in the Saronic Gulf - cosmopolitan Hydra, pine-covered Poros, and historic Aegina.",
    city: "Piraeus",
    country: "Greece",
    region: "Attica",
    images: [
      "/images/tours/piraeus/hydra-island.jpg",
      "/images/tours/piraeus/aegina-temple.jpg",
    ],
    duration: "10 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Islands", "Cruise", "Swimming"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
  {
    title: "Piraeus Food & Market Experience",
    description:
      "Explore the vibrant local markets of Piraeus with a culinary expert, sampling traditional Greek delicacies, meeting local vendors, and learning about the importance of fresh seafood in Greek cuisine.",
    city: "Piraeus",
    country: "Greece",
    region: "Attica",
    images: [
      "/images/tours/piraeus/local-market.jpg",
      "/images/tours/piraeus/greek-seafood.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Market", "Seafood"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
  },
];

export default piraeusTours;
