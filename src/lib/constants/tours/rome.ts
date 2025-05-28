import { Tour } from "@/lib/interfaces/services/tours";

export const romeTours: Tour[] = [
  {
    title: "VIP Colosseum Underground & Roman Forum",
    description:
      "Gain special access to the Colosseum's underground chambers and arena floor, then explore the heart of ancient Rome with an expert archaeologist.",
    images: [
      "/images/tours/rome/colosseum-underground.jpg",
      "/images/tours/rome/roman-forum.jpg",
    ],
    duration: "4 hours",
    price: "$109",
    rating: 4.9,
    tags: ["VIP Access", "Ancient", "Historical"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marco Bianchi",
    tourCategoryId: "archaeology-expert",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 2-3 kilometers of walking on uneven surfaces. Comfortable shoes are strongly recommended.",
      },
    ],
  },
  {
    title: "Vatican Museums & Sistine Chapel: Early Access",
    description:
      "Enter the Vatican Museums before the general public for a peaceful experience of Michelangelo's masterpiece and the incredible papal collections.",
    images: [
      "/images/tours/rome/sistine-chapel.jpg",
      "/images/tours/rome/st-peters-basilica.jpg",
    ],
    duration: "3 hours",
    price: "$99",
    rating: 4.8,
    tags: ["Art", "Religious", "Skip-the-line"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sophia Rossi",
    tourCategoryId: "art-history",
    faqs: [
      {
        question: "Is there a dress code?",
        answer:
          "Yes, the Vatican enforces a strict dress code. Shoulders and knees must be covered for both men and women. No shorts, sleeveless tops, or revealing clothing is permitted.",
      },
    ],
  },
];

export default romeTours;
