import { Tour } from "@/lib/interfaces/services/tours";
export const denpasarTours: Tour[] = [
  {
    title: "Balinese Temples & Cultural Heritage",
    description:
      "Discover Bali's spiritual side with visits to ancient water temples, clifftop sanctuaries, and a traditional Balinese compound where you'll witness ceremonial preparations and offerings.",
    images: [
      "/images/tours/denpasar/water-temple.jpg",
      "/images/tours/denpasar/temple-ceremony.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Spiritual", "Cultural", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nyoman Suardika",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I wear to visit the temples?",
        answer:
          "Modest attire is required. Both men and women should cover shoulders and knees. We provide traditional sarongs and sashes at each temple, but please dress respectfully.",
      },
    ],
  },
  {
    title: "Balinese Home Cooking & Market Tour",
    description:
      "Start at a local market to select fresh ingredients, then travel to a traditional Balinese home where you'll learn authentic cooking techniques and prepare a multi-course feast.",
    images: [
      "/images/tours/denpasar/cooking-class.jpg",
      "/images/tours/denpasar/market-tour.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cooking", "Market", "Culture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Made Sudarsana",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need cooking experience?",
        answer:
          "No experience necessary! Our hosts will guide you through each step of preparing authentic Balinese dishes, from basic techniques to complex flavors. Everyone succeeds and enjoys the meal together afterward.",
      },
    ],
  },
];

export default denpasarTours;
