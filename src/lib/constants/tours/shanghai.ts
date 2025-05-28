import { Tour } from "@/lib/interfaces/services/tours";

const shanghaiTours: Tour[] = [
  {
    title: "Shanghai Contrasts: Old Town & Futuristic Pudong",
    description:
      "Experience Shanghai's fascinating blend of ancient and ultramodern with a tour of historic Yu Garden and Old Town, followed by the futuristic skyline of Pudong with VIP observation deck access.",
    images: [
      "/images/tours/shanghai/old-town.jpg",
      "/images/tours/shanghai/pudong-skyline.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Architecture", "History", "Modern"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Li Wei",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which observation deck do we visit?",
        answer:
          "The tour includes VIP access to the Shanghai Tower observation deck on the 118th floor, currently the world's highest observation deck at 546 meters. We bypass the regular lines and enjoy priority access with dedicated viewing time.",
      },
    ],
  },
  {
    title: "Shanghai Culinary Journey & Private Cooking Class",
    description:
      "Discover Shanghai's diverse food scene from street food to haute cuisine, followed by a private cooking class with a renowned chef to master signature Shanghainese dishes.",
    images: [
      "/images/tours/shanghai/street-food.jpg",
      "/images/tours/shanghai/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Food", "Cooking", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Zhang Min",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare 3-4 signature Shanghainese dishes, typically including xiaolongbao (soup dumplings), hong shao rou (red-braised pork), and jiang ya (Shanghainese smoked duck). Vegetarian options are available upon request.",
      },
    ],
  },
];

export default shanghaiTours;
