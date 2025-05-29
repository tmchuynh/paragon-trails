import { Tour } from "@/lib/interfaces/services/tours";
export const stockholmTours: Tour[] = [
  {
    title: "Stockholm Archipelago Sailing Adventure",
    description:
      "Cruise through Stockholm's stunning archipelago of 30,000 islands aboard a classic sailing yacht, stopping at secluded islands for swimming, nature walks, and a traditional Swedish lunch.",
    images: [
      "/images/tours/stockholm/archipelago-sailing.jpg",
      "/images/tours/stockholm/island-lunch.jpg",
    ],
    duration: "7 hours",
    price: "$155",
    rating: 4.9,
    tags: ["Sailing", "Nature", "Islands"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Erik Andersson",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need sailing experience?",
        answer:
          "No experience needed! Our professional captain handles the sailing, though guests are welcome to participate and learn some basics if interested. The experience focuses on enjoying the archipelago scenery and island visits.",
      },
    ],
  },
  {
    title: "Nordic Food Walk & Cooking Class",
    description:
      "Explore Stockholm's food scene with visits to specialty shops and the historic Östermalms food hall, then join a professional chef to prepare your own Swedish feast using fresh, seasonal ingredients.",
    images: [
      "/images/tours/stockholm/food-market.jpg",
      "/images/tours/stockholm/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$130",
    rating: 4.8,
    tags: ["Food", "Cooking", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Lindström",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we cook in the class?",
        answer:
          "Menus change seasonally but typically include classic Swedish dishes with modern interpretations. You might prepare gravlax with mustard sauce, traditional meatballs with lingonberry, or saffron-infused fish stew, followed by a classic dessert like cloudberry parfait.",
      },
    ],
  },
];

export default stockholmTours;
