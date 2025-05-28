import { Tour } from "@/lib/interfaces/services/tours";

const tuscanyTours: Tour[] = [
  {
    title: "Chianti Wine Region Villa Experience",
    description:
      "Spend a day in the rolling hills of Chianti visiting family-owned vineyards, learning about wine production, and enjoying tastings paired with Tuscan cuisine in a historic villa setting.",
    images: [
      "/images/tours/tuscany/chianti-vineyard.jpg",
      "/images/tours/tuscany/wine-tasting.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Wine", "Countryside", "Gourmet"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Bianchi",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many wineries do we visit?",
        answer:
          "The tour includes visits to 3 different wineries, each offering a unique perspective on Tuscan winemaking traditions. You'll taste approximately 12 different wines throughout the day.",
      },
    ],
  },
  {
    title: "Medieval Hill Towns of Tuscany",
    description:
      "Explore the enchanting walled towns of San Gimignano, Monteriggioni, and Volterra with their preserved medieval architecture, artisan workshops, and spectacular countryside views.",
    images: [
      "/images/tours/tuscany/san-gimignano.jpg",
      "/images/tours/tuscany/medieval-streets.jpg",
    ],
    duration: "10 hours",
    price: "$165",
    rating: 4.8,
    tags: ["Medieval", "Architecture", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marco Rossi",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is there a lot of walking on this tour?",
        answer:
          "Yes, the hill towns feature cobblestone streets with some steep sections and stairs. We walk approximately 4km in total throughout the day at a leisurely pace with plenty of breaks.",
      },
    ],
  },
];

export default tuscanyTours;
