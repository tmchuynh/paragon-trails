import { Tour } from "@/lib/interfaces/services/tours";
export const thessalonikiTours: Tour[] = [
  {
    title: "Byzantine Heritage & Hidden Treasures",
    description:
      "Explore Thessaloniki's remarkable Byzantine churches, ancient ruins, and hidden historical gems with an expert archaeologist guide who brings the city's 2,300-year history to life.",
    images: [
      "/images/tours/thessaloniki/rotunda.jpg",
      "/images/tours/thessaloniki/byzantine-church.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Byzantine", "Churches", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Papadopoulos",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we go inside all the churches?",
        answer:
          "Yes, we arrange access to 5-6 significant Byzantine churches. Modest dress is required (shoulders and knees covered), and women may need to cover their heads in some locations.",
      },
    ],
  },
  {
    title: "Thessaloniki Food Journey",
    description:
      "Taste your way through Greece's culinary capital with visits to traditional markets, bakeries, and tavernas while learning about the city's multicultural influences on its distinctive cuisine.",
    images: [
      "/images/tours/thessaloniki/food-market.jpg",
      "/images/tours/thessaloniki/greek-meze.jpg",
    ],
    duration: "4 hours",
    price: "$79",
    rating: 4.9,
    tags: ["Food", "Market", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dimitri Antoniadis",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How much food is included?",
        answer:
          "Come hungry! The tour includes at least 8 food tastings equivalent to a full meal, featuring local specialties like bougatsa, koulouri, seafood meze, and distinctive Thessaloniki sweets.",
      },
    ],
  },
  {
    title: "Thessaloniki Street Art & Urban Culture",
    description:
      "Discover Thessaloniki's vibrant street art scene with a local artist, exploring murals, graffiti, and urban installations that reflect the city's contemporary culture and social movements.",
    images: [
      "/images/tours/thessaloniki/street-art.jpg",
      "/images/tours/thessaloniki/urban-culture.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Street Art", "Culture", "Urban"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nikos Stavros",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and includes engaging stories about the artists and the meaning behind the artworks. Children will enjoy the colorful and interactive nature of street art.",
      },
    ],
  },
];

export default thessalonikiTours;
