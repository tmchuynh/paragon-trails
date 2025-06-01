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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
  {
    title: "Capri Island Day Trip with Private Boat Tour",
    description:
      "Experience the stunning beauty of Capri with a private boat tour around the island, visiting the Blue Grotto, Faraglioni rocks, and hidden coves, followed by free time to explore the charming town of Anacapri.",
    images: [
      "/images/tours/naples/capri-boat.jpg",
      "/images/tours/naples/blue-grotto.jpg",
    ],
    duration: "10 hours",
    price: "$250",
    rating: 4.8,
    tags: ["Island Tour", "Boat", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the boat tour?",
        answer:
          "Bring a swimsuit, towel, sunscreen, and a hat. We also recommend a light jacket as it can get breezy on the water. Don't forget your camera to capture the stunning views!",
      },
      {
        question: "Is the Blue Grotto always open?",
        answer:
          "The Blue Grotto is subject to weather conditions and sea levels. If it's closed on the day of your tour, we'll provide alternative stops around Capri.",
      },
      {
        question: "Can we customize our time in Anacapri?",
        answer:
          "Yes! After the boat tour, you'll have several hours to explore Anacapri at your own pace. We can suggest local restaurants, shops, and attractions based on your interests.",
      },
    ],
  },
];

export default naplesTours;
