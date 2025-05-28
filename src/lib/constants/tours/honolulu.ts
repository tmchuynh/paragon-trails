import { Tour } from "@/lib/interfaces/services/tours";

export const honoluluTours: Tour[] = [
  {
    title: "Diamond Head Sunrise Hike & Breakfast",
    description:
      "Start your day with a guided sunrise hike up Diamond Head crater for breathtaking panoramic views of Waikiki and the Pacific Ocean, followed by a gourmet Hawaiian breakfast.",
    images: [
      "/images/tours/honolulu/diamond-head-sunrise.jpg",
      "/images/tours/honolulu/hawaiian-breakfast.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Hiking", "Sunrise", "Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Kai Kahele",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hike?",
        answer:
          "The hike is moderately challenging with some steep sections and stairs. It takes about 30-45 minutes to reach the summit at a comfortable pace. Basic fitness is recommended.",
      },
    ],
  },
  {
    title: "Pearl Harbor & USS Arizona Memorial",
    description:
      "Experience a moving journey through history with a guided tour of Pearl Harbor, the USS Arizona Memorial, and other significant WWII sites with historical expert commentary.",
    images: [
      "/images/tours/honolulu/pearl-harbor.jpg",
      "/images/tours/honolulu/uss-arizona-memorial.jpg",
    ],
    duration: "5 hours",
    price: "$105",
    rating: 4.8,
    tags: ["History", "Memorial", "Military"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Commander James Reynolds (Ret.)",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is photography allowed at the memorial?",
        answer:
          "Photography is permitted at the USS Arizona Memorial, but please be respectful as this is a solemn site and final resting place for many servicemen. Bags are not allowed at Pearl Harbor but secure storage is provided.",
      },
    ],
  },
];

export default honoluluTours;
