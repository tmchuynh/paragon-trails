import { Tour } from "@/lib/interfaces/services/tours";

export const parisTours: Tour[] = [
  {
    title: "Private Louvre Museum Tour",
    description:
      "Skip the lines and discover the masterpieces of the world's most visited museum with an expert art historian.",
    images: [
      "/images/tours/paris/louvre-outside.jpg",
      "/images/tours/paris/mona-lisa.jpg",
    ],
    duration: "3 hours",
    price: "$89",
    rating: 4.9,
    tags: ["Art", "Museum", "Skip-the-line"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Claire Dubois",
    tourCategoryId: "art-history",
    faqs: [
      {
        question: "Will we see the Mona Lisa?",
        answer:
          "Yes, the tour includes viewing the Mona Lisa and other key masterpieces.",
      },
    ],
  },
  {
    title: "Hidden Paris: Secret Passages & Courtyards",
    description:
      "Discover the charming hidden passages, secret courtyards and little-known corners of Paris that most tourists never see.",
    images: [
      "/images/tours/paris/covered-passage.jpg",
      "/images/tours/paris/hidden-courtyard.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Off-the-beaten-path", "Walking", "Historical"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Jean-Pierre Martin",
    tourCategoryId: "local-expert",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3-4 kilometers at a leisurely pace with several stops along the way.",
      },
    ],
  },
];

export default parisTours;
