import { Tour } from "@/lib/interfaces/services/tours";

const sevilleTours: Tour[] = [
  {
    title: "Alcázar Palace & Flamenco Heritage",
    description:
      "Discover Seville's Moorish treasures with priority access to the magnificent Real Alcázar Palace, followed by an intimate flamenco experience with private lessons and authentic performance in a historic venue.",
    images: [
      "/images/tours/seville/alcazar-palace.jpg",
      "/images/tours/seville/flamenco-performance.jpg",
    ],
    duration: "6 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Palace", "Flamenco", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Carmen Rodriguez",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need dance experience for the flamenco portion?",
        answer:
          "Not at all! The flamenco workshop is designed for complete beginners and focuses on basic rhythms, hand movements, and understanding the cultural context of this passionate art form. You'll gain appreciation for the skill involved while learning enough basic steps to participate in a simple choreography. The experience concludes with a professional performance where you can see true flamenco artistry.",
      },
    ],
  },
  {
    title: "Andalusian Countryside & Olive Oil Estates",
    description:
      "Escape the city to discover Andalusia's picturesque white villages, centuries-old olive groves, and family-run estates where you'll learn traditional oil production methods and taste award-winning varieties.",
    images: [
      "/images/tours/seville/white-village.jpg",
      "/images/tours/seville/olive-grove.jpg",
    ],
    duration: "7 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Olive Oil", "Countryside", "Gastronomy"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Antonio Jimenez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Spanish olive oil special?",
        answer:
          "Spain produces about 45% of the world's olive oil, with Andalusia being the epicenter of production. On this tour, you'll learn about the region's ideal growing conditions, traditional and modern extraction methods, and how to distinguish between varieties and qualities. The guided tasting teaches you to recognize flavors like 'fruity,' 'peppery,' and 'grassy' while understanding the health benefits of authentic extra virgin olive oil.",
      },
    ],
  },
];

export default sevilleTours;
