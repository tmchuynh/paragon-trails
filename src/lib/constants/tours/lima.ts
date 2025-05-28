import { Tour } from "@/lib/interfaces/services/tours";

const limaTours: Tour[] = [
  {
    title: "Lima Culinary Discovery & Pisco Experience",
    description:
      "Embark on a journey through Peru's acclaimed gastronomy with market visits, cooking demonstrations by renowned chefs, and a masterclass in preparing the perfect pisco sour at an award-winning cocktail bar.",
    images: [
      "/images/tours/lima/market-tour.jpg",
      "/images/tours/lima/ceviche-preparation.jpg",
    ],
    duration: "5 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Culinary", "Pisco", "Cooking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Gabriela Flores",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What Peruvian dishes will we learn about?",
        answer:
          "The tour focuses on Peru's most iconic dishes: ceviche (raw fish 'cooked' in citrus), causa (layered potato dish), anticuchos (marinated beef heart skewers), and lomo saltado (stir-fried beef). You'll learn about the ingredients, techniques, cultural significance, and how pre-Columbian, European, African, and Asian influences created Peru's unique fusion cuisine.",
      },
    ],
  },
  {
    title: "Colonial Lima & Pre-Columbian Treasures",
    description:
      "Discover Lima's dual heritage with a private tour of Spanish colonial architecture in the historic center, followed by exclusive access to pre-Columbian gold artifacts and ancient textiles with an archaeology expert.",
    images: [
      "/images/tours/lima/colonial-architecture.jpg",
      "/images/tours/lima/gold-museum.jpg",
    ],
    duration: "6 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Historical", "Colonial", "Museums"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Carlos Mendoza",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we see both Spanish colonial and indigenous artifacts?",
        answer:
          "Yes, the tour provides a comprehensive view of Peru's diverse heritage. We explore the Spanish colonial influence through Lima's UNESCO-listed historic center with its baroque cathedral and ornate balconies, then delve into pre-Columbian cultures at the Larco Museum, where our guide provides expert context on gold artifacts, ceramics, and textiles dating back 5,000 years.",
      },
    ],
  },
];

export default limaTours;
