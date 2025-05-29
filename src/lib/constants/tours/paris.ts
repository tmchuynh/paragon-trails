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
    tourGuide: "Nina Dubois",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3-4 km at a leisurely pace with plenty of stops. We walk through some narrow passages and cobblestone streets, so comfortable shoes are recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We keep the pace relaxed and our guide will share engaging stories that appeal to both adults and children. However, please note that some passages may not be stroller accessible.",
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
    tourGuide: "Dr. Jean-Pierre Lefevre",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see the Mona Lisa?",
        answer:
          "Yes, we include the Mona Lisa and other masterpieces like the Venus de Milo and Winged Victory of Samothrace. Our strategy helps you view these popular works without being overwhelmed by crowds, while also discovering less-visited but equally impressive treasures.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! Our guide is skilled at engaging children with fascinating stories and interactive elements. We also provide a scavenger hunt to keep younger visitors entertained while learning about the art.",
      },
      {
        question: "Do we skip the lines?",
        answer:
          "Yes, this tour includes skip-the-line access, allowing you to bypass the long queues and maximize your time inside the museum.",
      },
    ],
  },
  {
    title: "Parisian Culinary Delights Tour",
    description:
      "Savor the flavors of Paris with a guided food tour through local markets, bakeries, and bistros, sampling traditional French cuisine and learning about the city's culinary heritage.",
    images: [
      "/images/tours/paris/culinary-tour.jpg",
      "/images/tours/paris/local-bakery.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Culinary", "Food", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Camille Moreau",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of tastings, such as fresh baguettes, artisanal cheeses, charcuterie, pastries, and local wines. We can accommodate most dietary restrictions with advance notice.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 3 km at a leisurely pace with plenty of stops for tastings. It's suitable for all fitness levels.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and children will enjoy the interactive food experiences. We can also provide kid-friendly food options upon request.",
      },
    ],
  },
];

export default parisTours;
