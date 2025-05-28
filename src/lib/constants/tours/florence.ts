import { Tour } from "@/lib/interfaces/services/tours";

export const florenceTours: Tour[] = [
  {
    title: "Uffizi Gallery & Renaissance Masterpieces",
    description:
      "Explore one of the world's premier art collections with an art historian guide who brings to life the works of Botticelli, Leonardo, Michelangelo, and Raphael.",
    images: [
      "/images/tours/florence/uffizi-gallery.jpg",
      "/images/tours/florence/birth-of-venus.jpg",
    ],
    duration: "3 hours",
    price: "$80",
    rating: 4.9,
    tags: ["Art", "Museum", "Renaissance"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Rossi",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How do we avoid the long lines at the Uffizi?",
        answer:
          "Our tour includes skip-the-line priority access. While there may still be a brief wait for security checks, you'll avoid the main ticket lines which can exceed 2-3 hours during peak season.",
      },
    ],
  },
  {
    title: "Tuscan Cooking Class & Wine Experience",
    description:
      "Learn the secrets of traditional Tuscan cuisine in a hands-on cooking class, followed by a meal of your creations paired with local wines from nearby vineyards.",
    images: [
      "/images/tours/florence/cooking-class.jpg",
      "/images/tours/florence/wine-tasting.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Cooking", "Wine", "Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marco Bianchi",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need cooking experience?",
        answer:
          "Not at all! Our classes are designed for all skill levels, from complete beginners to experienced home cooks. The focus is on fun, learning, and enjoying Tuscan culinary traditions.",
      },
    ],
  },
];

export default florenceTours;
