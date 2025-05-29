import { Tour } from "@/lib/interfaces/services/tours";
export const chiangMaiTours: Tour[] = [
  {
    title: "Ethical Elephant Sanctuary Experience",
    description:
      "Spend a day with rescued elephants at an ethical sanctuary where you'll observe these magnificent creatures in a natural environment, learning about conservation efforts and helping prepare their meals.",
    images: [
      "/images/tours/chiang-mai/elephant-sanctuary.jpg",
      "/images/tours/chiang-mai/elephant-bathing.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 5.0,
    tags: ["Wildlife", "Conservation", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Somporn Thongchai",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What makes this an ethical elephant experience?",
        answer:
          "Our sanctuary partner follows a strict no-riding policy and focuses on elephant welfare. The elephants here were rescued from logging or tourism industries and now live in natural conditions where they can roam freely, form herds, and express natural behaviors. You'll observe and interact with them at a respectful distance, preparing food and watching them enjoy their natural surroundings.",
      },
    ],
  },
  {
    title: "Monk Chat & Temple Meditation Experience",
    description:
      "Gain spiritual insights through personal conversations with Buddhist monks, followed by guided meditation sessions at ancient temples and a traditional blessing ceremony.",
    images: [
      "/images/tours/chiang-mai/monk-chat.jpg",
      "/images/tours/chiang-mai/temple-meditation.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Spiritual", "Cultural", "Buddhism"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ajarn Chai",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I wear for temple visits?",
        answer:
          "Modest dress is required when visiting temples and meeting monks. Both men and women should cover shoulders and knees. We provide traditional Thai sarongs if needed. It's also customary to remove shoes before entering temple buildings, so comfortable slip-on footwear is recommended.",
      },
    ],
  },
];

export default chiangMaiTours;
