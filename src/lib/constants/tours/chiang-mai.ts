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
      {
        question: "Is transportation included in the tour price?",
        answer:
          "Yes, round-trip transportation from your hotel in Chiang Mai is included. We use comfortable, air-conditioned vehicles for your convenience.",
      },
      {
        question: "Can children participate in this tour?",
        answer:
          "Absolutely! This tour is family-friendly and suitable for children of all ages. However, we recommend that younger children be supervised closely during interactions with the elephants.",
      },
      {
        question: "What should I wear for the elephant sanctuary visit?",
        answer:
          "Wear comfortable, breathable clothing suitable for warm weather. Closed-toe shoes are recommended as you may walk on uneven terrain. We also suggest bringing a hat, sunscreen, and insect repellent. Swimwear is optional if you wish to bathe with the elephants.",
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
      {
        question: "Can I ask the monks any questions?",
        answer:
          "Yes, the monk chat is an open forum where you can ask questions about Buddhism, Thai culture, or the monks' daily lives. They are happy to share their knowledge and experiences with visitors.",
      },
      {
        question: "Is meditation suitable for beginners?",
        answer:
          "Absolutely! The guided meditation sessions are designed for all levels, including beginners. The monk will provide instructions and support to help you get the most out of your meditation experience.",
      },
      {
        question: "What is the blessing ceremony like?",
        answer:
          "The blessing ceremony is a traditional ritual where the monk chants blessings for your health, happiness, and prosperity. You'll receive a sacred thread bracelet as a symbol of the blessing, which you can keep as a memento of your spiritual experience.",
      },
    ],
  },
];

export default chiangMaiTours;
