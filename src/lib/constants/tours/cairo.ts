import { Tour } from "@/lib/interfaces/services/tours";

export const cairoTours: Tour[] = [
  {
    title: "Pyramids of Giza & Sphinx Private Tour",
    description:
      "Stand in awe before the last surviving wonder of the ancient world with an expert Egyptologist guide explaining the mysteries and engineering marvels of the Great Pyramids.",
    images: [
      "/images/tours/cairo/pyramids.jpg",
      "/images/tours/cairo/sphinx.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Ancient Wonders", "Archaeology", "Photography"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Ahmed Fawzy",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Can we go inside the pyramids?",
        answer:
          "Yes, entry to one pyramid is included. The Great Pyramid requires an additional fee. Inside spaces are narrow and can be hot with limited ventilation.",
      },
    ],
  },
  {
    title: "Egyptian Museum & Khan el-Khalili Bazaar",
    description:
      "Discover the treasures of Tutankhamun and artifacts spanning 5,000 years of Egyptian civilization, then experience the sights and sounds of Cairo's oldest bazaar.",
    images: [
      "/images/tours/cairo/egyptian-museum.jpg",
      "/images/tours/cairo/khan-el-khalili.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Museum", "Shopping", "Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Laila Mostafa",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How do I avoid getting overcharged at the bazaar?",
        answer:
          "Your guide will advise on fair prices and can help with negotiations. Generally, expect to pay about 60-70% of the initial asking price after friendly haggling.",
      },
    ],
  },
];

export default cairoTours;
