import { Tour } from "@/lib/interfaces/services/tours";

const casablancaTours: Tour[] = [
  {
    title: "Hassan II Mosque & Islamic Architecture",
    description:
      "Explore the magnificence of one of the world's largest mosques with an architecture expert, gaining special access to ornate details and design elements typically overlooked, followed by a tour of Casablanca's stunning Art Deco district.",
    images: [
      "/images/tours/casablanca/hassan-ii-mosque.jpg",
      "/images/tours/casablanca/art-deco-district.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Religious", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Omar Benzakour",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the mosque?",
        answer:
          "Modest dress is required for mosque visits. Women should cover their hair, arms, and legs (headscarves and appropriate coverings are provided if needed). Men should wear long pants and shirts with sleeves. All visitors must remove shoes before entering prayer areas, so slip-on footwear is recommended.",
      },
    ],
  },
  {
    title: "Moroccan Culinary Journey & Spice Markets",
    description:
      "Immerse yourself in Morocco's legendary cuisine with a chef-led exploration of vibrant markets, followed by a hands-on cooking class in a traditional riad where you'll master authentic tagine, couscous, and pastry techniques.",
    images: [
      "/images/tours/casablanca/spice-market.jpg",
      "/images/tours/casablanca/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Fatima Zahra",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The cooking class typically includes preparing a traditional Moroccan tagine (chicken with preserved lemon and olives or vegetable option), fresh Moroccan salads, authentic couscous using hand-rolling techniques, and sweet pastries such as gazelle horns or almond briouats. All recipes are provided to take home, along with recommendations for ingredient substitutions available in your home country.",
      },
    ],
  },
];

export default casablancaTours;
