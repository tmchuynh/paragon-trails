import { Tour } from "@/lib/interfaces/services/tours";

export const bangkokTours: Tour[] = [
  {
    title: "Grand Palace & Temple Tour",
    description:
      "Explore the magnificent Grand Palace complex and sacred temples including Wat Phra Kaew (Temple of the Emerald Buddha) and Wat Pho (Temple of the Reclining Buddha).",
    images: [
      "/images/tours/bangkok/grand-palace.jpg",
      "/images/tours/bangkok/emerald-buddha.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Temples", "History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Somchai Thongchai",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear to visit the temples?",
        answer:
          "Modest attire is required. Shoulders and knees must be covered, and no revealing clothes are permitted. We provide complimentary sarongs if needed.",
      },
    ],
  },
  {
    title: "Bangkok Canal & Floating Market Tour",
    description:
      "Experience traditional Thai water culture with a long-tail boat journey through Bangkok's historic canals (khlongs) and visit the colorful Damnoen Saduak floating market.",
    images: [
      "/images/tours/bangkok/floating-market.jpg",
      "/images/tours/bangkok/canal-tour.jpg",
    ],
    duration: "7 hours",
    price: "$79",
    rating: 4.9,
    tags: ["Local Culture", "Boat Tour", "Shopping"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Suchada Wongwian",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "Will there be time to shop at the floating market?",
        answer:
          "Yes, we allocate approximately 1.5 hours for exploring and shopping at the floating market. Your guide can help you negotiate fair prices.",
      },
    ],
  },
];

export default bangkokTours;
