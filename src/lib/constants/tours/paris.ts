import { Tour } from "@/lib/interfaces/services/tours";
export const parisTours: Tour[] = [
  {
    title: "Hidden Paris Walking Tour",
    description:
      "Discover the secret passages, charming courtyards, and lesser-known neighborhoods of Paris with a local historian who reveals the city beyond the tourist attractions.",
    images: [
      "/images/tours/paris/hidden-passages.jpg",
      "/images/tours/paris/secret-gardens.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Walking", "Hidden Gems", "Historical"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Claire Dubois",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3-4 km at a leisurely pace with plenty of stops. We walk through some narrow passages and cobblestone streets, so comfortable shoes are recommended.",
      },
    ],
  },
  {
    title: "Louvre Masterpieces & Beyond",
    description:
      "Experience the world's most famous museum with an art historian guide who brings masterpieces to life. Includes skip-the-line access and visits to hidden galleries most tourists never see.",
    images: [
      "/images/tours/paris/louvre-mona-lisa.jpg",
      "/images/tours/paris/louvre-venus.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Art", "Museum", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Sophie Martin",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see the Mona Lisa?",
        answer:
          "Yes, we include the Mona Lisa and other masterpieces like the Venus de Milo and Winged Victory of Samothrace. Our strategy helps you view these popular works without being overwhelmed by crowds, while also discovering less-visited but equally impressive treasures.",
      },
    ],
  },
];

export default parisTours;
