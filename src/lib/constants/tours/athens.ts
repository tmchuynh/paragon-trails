import { Tour } from "@/lib/interfaces/services/tours";

const athensTours: Tour[] = [
  {
    title: "Acropolis & Ancient Athens Private Experience",
    description:
      "Explore the cradle of Western civilization with an archaeology expert guiding you through the Acropolis and ancient sites, with early access before crowds arrive and exclusive entry to areas closed to regular visitors.",
    images: [
      "/images/tours/athens/acropolis-sunrise.jpg",
      "/images/tours/athens/parthenon-close.jpg",
    ],
    duration: "5 hours",
    price: "$155",
    rating: 4.9,
    tags: ["Ancient Greece", "Archaeology", "Early Access"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Papadopoulos",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How early do we need to start for the early access?",
        answer:
          "We begin with hotel pickup approximately 1 hour before the Acropolis opens to the public. This early start is well worth it as you'll experience the magnificent Parthenon in the golden morning light with unobstructed views and peaceful surroundings before the crowds and heat of the day build up.",
      },
    ],
  },
  {
    title: "Athens Food Journey & Cooking Class",
    description:
      "Discover Greek culinary traditions with a market tour selecting fresh ingredients, followed by a cooking class in a rooftop kitchen with Acropolis views where you'll create authentic dishes under the guidance of a local chef.",
    images: [
      "/images/tours/athens/food-market.jpg",
      "/images/tours/athens/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Sophia Dimitriou",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we cook in the class?",
        answer:
          "You'll prepare a complete Greek meal including classics like moussaka or pastitsio, traditional Greek salad with locally produced feta, hand-rolled dolmades (stuffed grape leaves), and baklava or galaktoboureko for dessert. The exact menu may vary slightly based on seasonal ingredients, and vegetarian options are readily available upon request.",
      },
    ],
  },
];

export default athensTours;
