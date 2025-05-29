import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

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
    tags: ["Conservation", "Nature"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("chiang mai", "adventure").name,
    tourCategoryId: "adventure",
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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("chiang mai", "spiritual").name,
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
  {
    title: "Chiang Mai Night Bazaar & Street Food Tour",
    description:
      "Explore the vibrant Chiang Mai Night Bazaar with a local guide, sampling delicious street food, shopping for handicrafts, and experiencing the lively atmosphere of this iconic market.",
    images: [
      "/images/tours/chiang-mai/night-bazaar.jpg",
      "/images/tours/chiang-mai/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Food", "Shopping", "Culture"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("chiang mai", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local street foods, including khao soi (curry noodles), sai ua (northern Thai sausage), mango sticky rice, and more. We cater to dietary restrictions, so please inform us in advance if you have any allergies or preferences.",
      },
      {
        question: "Is the market accessible for strollers or wheelchairs?",
        answer:
          "The Night Bazaar is mostly pedestrian-friendly, but some areas can be crowded. We recommend bringing a lightweight stroller or wheelchair if needed, but be prepared for some uneven surfaces.",
      },
      {
        question: "Can we shop during the tour?",
        answer:
          "Yes! You'll have time to browse and shop for unique handicrafts, textiles, and souvenirs. Your guide can help you negotiate prices and find the best deals.",
      },
      {
        question: "What should I bring for the night market tour?",
        answer:
          "Bring comfortable walking shoes, a light jacket (it can get cool in the evening), and some cash for food and shopping. Most vendors accept cash only, so it's best to have small denominations on hand.",
      },
    ],
  },
  {
    title: "Doi Suthep & Hill Tribe Village Tour",
    description:
      "Visit the sacred Doi Suthep Temple and explore a nearby hill tribe village, learning about the unique cultures and traditions of northern Thailand's indigenous communities.",
    images: [
      "/images/tours/chiang-mai/doi-suthep.jpg",
      "/images/tours/chiang-mai/hill-tribe-village.jpg",
    ],
    duration: "5 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Cultural", "Nature", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("chiang mai", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How do we get to Doi Suthep?",
        answer:
          "Transportation to Doi Suthep is included in the tour price. We use comfortable, air-conditioned vehicles for the journey up the mountain, which takes about 30 minutes from Chiang Mai city center.",
      },
    ],
  },
];

export default chiangMaiTours;
