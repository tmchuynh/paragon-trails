import { Tour } from "@/lib/interfaces/services/tours";

export const heraklionTours: Tour[] = [
  {
    title: "Knossos Palace & Archaeological Museum",
    description:
      "Discover the ancient Minoan civilization at the legendary Palace of Knossos and explore the world-class Archaeological Museum with an expert guide.",
    images: [
      "/images/tours/heraklion/knossos-palace.jpg",
      "/images/tours/heraklion/archaeological-museum.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Archaeological", "Historical", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Elena Papadakis",
    tourCategoryId: "archaeology-expert",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, our guides make the ancient history engaging for all ages with stories of myths and legends.",
      },
    ],
  },
  {
    title: "Cretan Culinary Journey",
    description:
      "Experience authentic Cretan cuisine with a market tour, cooking class, and wine tasting featuring local olive oils and traditional dishes.",
    images: [
      "/images/tours/heraklion/cretan-market.jpg",
      "/images/tours/heraklion/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$89",
    rating: 4.8,
    tags: ["Food", "Cooking", "Wine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nikos Mavrakis",
    tourCategoryId: "food-culture",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Absolutely! We can adjust the recipes for vegetarian, vegan, gluten-free and most other dietary needs.",
      },
    ],
  },
];

export default heraklionTours;
