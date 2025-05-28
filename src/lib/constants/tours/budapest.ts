import { Tour } from "@/lib/interfaces/services/tours";

const budapestTours: Tour[] = [
  {
    title: "Thermal Baths & Wellness Experience",
    description:
      "Indulge in Budapest's famous thermal bath culture with VIP access to Széchenyi or Gellért baths, including private cabin and optional massage treatments.",
    images: [
      "/images/tours/budapest/szechenyi-bath.jpg",
      "/images/tours/budapest/gellert-bath.jpg",
    ],
    duration: "4 hours",
    price: "$89",
    rating: 4.8,
    tags: ["Wellness", "Spa", "Relaxation"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Zsuzsanna Nagy",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the bath experience?",
        answer:
          "Just bring your swimsuit. We provide towels, slippers, bathrobe, and all amenities needed for your comfort during the bath visit.",
      },
    ],
  },
  {
    title: "Budapest Underground & Cave Explorer",
    description:
      "Discover Budapest's vast underground world, exploring natural caves and the hidden labyrinth beneath Buda Castle with expert spelunking guides.",
    images: [
      "/images/tours/budapest/cave-system.jpg",
      "/images/tours/budapest/labyrinth.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Adventure", "Caves", "Underground"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Viktor Kovács",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "This tour requires moderate fitness and comfort in enclosed spaces. There is crawling involved in parts of the cave system, so it's not suitable for those with mobility issues or claustrophobia.",
      },
    ],
  },
];

export default budapestTours;
