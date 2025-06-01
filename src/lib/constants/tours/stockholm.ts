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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we cook in the class?",
        answer:
          "Menus change seasonally but typically include classic Swedish dishes with modern interpretations. You might prepare gravlax with mustard sauce, traditional meatballs with lingonberry, or saffron-infused fish stew, followed by a classic dessert like cloudberry parfait.",
      },
    ],
  },
  {
    title: "Stockholm Historical Walk: Gamla Stan & Royal Palace",
    description:
      "Discover the rich history of Stockholm with a guided walk through the cobblestone streets of Gamla Stan, visiting the Royal Palace, Storkyrkan Cathedral, and learning about the city's medieval past.",
    images: [
      "/images/tours/stockholm/gamla-stan.jpg",
      "/images/tours/stockholm/royal-palace.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.7,
    tags: ["History", "Culture", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are there any entry fees for the palace?",
        answer:
          "Yes, entry to the Royal Palace is included in the tour price. You'll have access to the Royal Apartments, Treasury, and Museum of Antiquities.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The tour is designed to be engaging for all ages, with stories and activities that captivate younger visitors.",
      },
    ],
  },
];

export default stockholmTours;
