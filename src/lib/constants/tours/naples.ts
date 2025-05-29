import { Tour } from "@/lib/interfaces/services/tours";
export const naplesTours: Tour[] = [
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
      {
        question: "What should I wear for the class?",
        answer:
          "Wear comfortable clothing that you don't mind getting a bit messy. Closed-toe shoes are recommended for safety in the kitchen. An apron will be provided.",
      },
      {
        question: "Can I take home my pizza?",
        answer:
          "Absolutely! You'll make your own pizza to enjoy at the end of the class, and we can provide a box for you to take it home if you can't finish it on-site.",
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
      {
        question: "What should I wear for the tour?",
        answer:
          "Wear comfortable walking shoes suitable for uneven terrain, and dress in layers as temperatures can vary significantly between Pompeii and the volcano. A hat and sunscreen are also recommended.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Lunch is not included, but we can recommend local restaurants in Pompeii where you can enjoy authentic Neapolitan cuisine before or after the tour.",
      },
    ],
  },
];

export default naplesTours;
