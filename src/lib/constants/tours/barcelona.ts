import { Tour } from "@/lib/interfaces/services/tours";
export const barcelonaTours: Tour[] = [
  {
    title: "Gaudí Masterpieces & Modernisme Architecture",
    description:
      "Experience Barcelona's architectural genius with exclusive early access to Sagrada Familia and Park Güell, guided by an expert in Catalan Modernisme who reveals Gaudí's innovative techniques and vision.",
    images: [
      "/images/tours/barcelona/sagrada-familia.jpg",
      "/images/tours/barcelona/park-guell.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Architecture", "Gaudí", "Modernisme"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Fernández",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How early do we enter Sagrada Familia?",
        answer:
          "We enter 30 minutes before general opening, providing a much more peaceful experience with time to appreciate the morning light streaming through the stained glass. This exclusive early access is one of the highlights of the tour.",
      },
    ],
  },
  {
    title: "Tapas Crawl & Flamenco Experience",
    description:
      "Immerse yourself in Barcelona's culinary and artistic soul with a guided tapas tour through ancient Gothic Quarter bars, followed by an authentic flamenco performance in an intimate historic venue.",
    images: [
      "/images/tours/barcelona/tapas.jpg",
      "/images/tours/barcelona/flamenco.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Tapas", "Flamenco", "Food & Drink"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Miguel Serrano",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many tapas venues do we visit?",
        answer:
          "We visit 4 different tapas bars, each specializing in different aspects of Spanish cuisine. You'll try approximately 12-14 different tapas in total, paired with appropriate regional wines or vermouths.",
      },
    ],
  },
];

export default barcelonaTours;
