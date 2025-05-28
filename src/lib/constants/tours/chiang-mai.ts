import { Tour } from "@/lib/interfaces/services/tours";

export const chiangMaiTours: Tour[] = [
  {
    title: "Ethical Elephant Sanctuary Visit",
    description:
      "Spend a day with rescued elephants at an ethical sanctuary where you can observe, feed, and help bathe these magnificent creatures in their natural environment.",
    images: [
      "/images/tours/chiang-mai/elephant-sanctuary.jpg",
      "/images/tours/chiang-mai/elephant-bathing.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 4.9,
    tags: ["Wildlife", "Ethical", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sombat Chaiwong",
    tourCategoryId: "wildlife-conservation",
    faqs: [
      {
        question: "Is this a no-riding elephant sanctuary?",
        answer:
          "Absolutely. We only work with sanctuaries that prohibit riding and other exploitative practices.",
      },
    ],
  },
  {
    title: "Doi Suthep Temple & Hmong Village",
    description:
      "Journey to Chiang Mai's sacred mountain temple offering panoramic views, then visit an authentic Hmong hill tribe village to learn about their culture and crafts.",
    images: [
      "/images/tours/chiang-mai/doi-suthep.jpg",
      "/images/tours/chiang-mai/hmong-village.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Cultural", "Temple", "Indigenous"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nattaporn Sukjai",
    tourCategoryId: "cultural-expert",
    faqs: [
      {
        question: "How strenuous is the walking at Doi Suthep?",
        answer:
          "While there are 309 steps to the temple, we also provide an option to use the cable car for those who prefer not to climb.",
      },
    ],
  },
];

export default chiangMaiTours;
