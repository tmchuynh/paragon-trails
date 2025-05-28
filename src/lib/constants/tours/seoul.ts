import { Tour } from "@/lib/interfaces/services/tours";

const seoulTours: Tour[] = [
  {
    title: "Korean Palace & Hanbok Experience",
    description:
      "Explore Seoul's magnificent royal palaces dressed in traditional Korean hanbok attire, learning about court customs and enjoying privileged photo opportunities in normally restricted palace areas.",
    images: [
      "/images/tours/seoul/palace-hanbok.jpg",
      "/images/tours/seoul/gyeongbokgung.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Cultural", "Palace", "Traditional Dress"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Min-ji Park",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the hanbok rental included in the price?",
        answer:
          "Yes, rental of high-quality traditional hanbok attire is included, with various styles and sizes available for men, women and children. Our staff helps with proper fitting and traditional styling.",
      },
    ],
  },
  {
    title: "Korean Street Food Night Tour",
    description:
      "Dive into Seoul's vibrant night markets and hidden food alleys with a local culinary expert, sampling everything from classic Korean street foods to trendy new creations in bustling Myeongdong and Gwangjang Market.",
    images: [
      "/images/tours/seoul/street-food.jpg",
      "/images/tours/seoul/gwangjang-market.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Food", "Night Tour", "Markets"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Joon-ho Kim",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How spicy is the food on this tour?",
        answer:
          "We sample a range of items with varying spice levels, but our guide will point out spicier options and suggest milder alternatives. Korean street food offers plenty of non-spicy options that are equally delicious.",
      },
    ],
  },
];

export default seoulTours;
