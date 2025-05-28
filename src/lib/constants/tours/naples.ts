import { Tour } from "@/lib/interfaces/services/tours";

const naplesTours: Tour[] = [
  {
    title: "Authentic Neapolitan Pizza Masterclass",
    description:
      "Learn the secrets of true Neapolitan pizza from a third-generation pizzaiolo in a historic center pizzeria, from dough preparation to wood-fired oven techniques.",
    images: [
      "/images/tours/naples/pizza-making.jpg",
      "/images/tours/naples/wood-fired-oven.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 5.0,
    tags: ["Cooking Class", "Pizza", "Culinary Tradition"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marco Esposito",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need any cooking experience?",
        answer:
          "No experience needed! This class is designed for all skill levels. Our master pizzaiolo will guide you through each step, ensuring you create an authentic Neapolitan pizza regardless of your cooking background.",
      },
    ],
  },
  {
    title: "Pompeii & Vesuvius VIP Experience",
    description:
      "Explore the ancient ruins of Pompeii with an archaeologist, then journey up Mount Vesuvius for a private volcanic wine tasting at an exclusive estate on the volcano's slopes.",
    images: [
      "/images/tours/naples/pompeii-ruins.jpg",
      "/images/tours/naples/vesuvius-vineyard.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Archaeology", "Volcano", "Wine"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Alessandra Romano",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How difficult is the hike up Mount Vesuvius?",
        answer:
          "The hiking portion is moderately challenging, covering around 1.5 miles round-trip with an elevation gain of about 500 feet. The path is well-maintained but steep in sections, taking about 30 minutes each way for most visitors.",
      },
    ],
  },
];

export default naplesTours;
