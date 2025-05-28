import { Tour } from "@/lib/interfaces/services/tours";

export const shanghaiTours: Tour[] = [
  {
    title: "Shanghai Contrasts: The Bund & Pudong",
    description:
      "Experience Shanghai's fascinating blend of colonial heritage and futuristic architecture with a walking tour of The Bund and Pudong's skyscrapers.",
    images: [
      "/images/tours/shanghai/the-bund.jpg",
      "/images/tours/shanghai/pudong-skyline.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Architecture", "Photography", "Walking"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Li Wei",
    tourCategoryId: "city-expert",
    faqs: [
      {
        question: "Does this tour include entrance to the Shanghai Tower?",
        answer:
          "Yes, we include fast-track entry to the observation deck of Shanghai Tower for panoramic city views.",
      },
    ],
  },
  {
    title: "Old Shanghai: Yu Garden & French Concession",
    description:
      "Step back in time exploring Shanghai's most charming historical districts including the Ming-era Yu Garden and tree-lined streets of the French Concession.",
    images: [
      "/images/tours/shanghai/yu-garden.jpg",
      "/images/tours/shanghai/french-concession.jpg",
    ],
    duration: "6 hours",
    price: "$79",
    rating: 4.9,
    tags: ["Historical", "Cultural", "Garden"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mei Zhang",
    tourCategoryId: "history-expert",
    faqs: [
      {
        question: "Will we have time to shop at Yu Garden Bazaar?",
        answer:
          "Yes, the tour includes 45 minutes of free time to explore the bazaar and shop for souvenirs.",
      },
    ],
  },
];

export default shanghaiTours;
