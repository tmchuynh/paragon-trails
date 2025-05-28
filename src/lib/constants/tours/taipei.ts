import { Tour } from "@/lib/interfaces/services/tours";

const taipeiTours: Tour[] = [
  {
    title: "Taipei Night Markets & Street Food Safari",
    description:
      "Dive into Taiwan's vibrant food culture with a guided exploration of Taipei's legendary night markets, sampling authentic local delicacies explained by a culinary expert who knows all the best stalls.",
    images: [
      "/images/tours/taipei/night-market.jpg",
      "/images/tours/taipei/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Food", "Night Markets", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lin Mei-ling",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Will we try stinky tofu?",
        answer:
          "Yes, if you're adventurous! Stinky tofu is a Taiwanese delicacy that divides opinion. We offer a small sample for those who want to try it, along with many other more approachable dishes. Your guide will explain the fermentation process and cultural significance of this iconic street food.",
      },
    ],
  },
  {
    title: "Taipei's Spiritual Heritage & Temple Tour",
    description:
      "Experience Taiwan's unique spiritual blend of Buddhism, Taoism, and folk religion with visits to ancient temples, morning prayer ceremonies, and fortune-telling traditions with a religious studies expert.",
    images: [
      "/images/tours/taipei/longshan-temple.jpg",
      "/images/tours/taipei/confucius-temple.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Temples", "Spiritual", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Professor Chen Wei-ming",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Is there a dress code for visiting temples?",
        answer:
          "Modest dress is appreciated but not strictly enforced as in some other Asian countries. We recommend covering shoulders and knees as a sign of respect. Comfortable shoes are important as we'll be walking between several temple sites.",
      },
    ],
  },
];

export default taipeiTours;
