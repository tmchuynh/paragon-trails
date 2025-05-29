import { Tour } from "@/lib/interfaces/services/tours";
export const tuscanyTours: Tour[] = [
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
  {
    title: "Tuscan Cooking Class & Market Tour",
    description:
      "Join a local chef for a hands-on cooking class in a rustic farmhouse, starting with a visit to the local market to select fresh ingredients before preparing traditional Tuscan dishes.",
    images: [
      "/images/tours/tuscany/cooking-class.jpg",
      "/images/tours/tuscany/market-tour.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Cooking", "Local Cuisine", "Hands-On"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Elena Conti",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior experience is necessary! The class is designed for all skill levels, and our chef will guide you through each step of the process.",
      },
      {
        question: "What dishes will we prepare?",
        answer:
          "The menu varies by season but typically includes homemade pasta, seasonal vegetable dishes, and traditional desserts like tiramisu or panna cotta. Vegetarian options are available upon request.",
      },
    ],
  },
  {
    title: "Florence Art & Architecture Walking Tour",
    description:
      "Discover Florence's artistic heritage with a guided walking tour of the city's most iconic landmarks, including the Duomo, Uffizi Gallery, and Ponte Vecchio, while learning about the Renaissance masters.",
    images: [
      "/images/tours/tuscany/florence-duomo.jpg",
      "/images/tours/tuscany/uffizi-gallery.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Art", "Renaissance", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Giovanni Ferraro",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Do we enter any museums on this tour?",
        answer:
          "This tour focuses on outdoor landmarks and does not include museum entry. However, we can arrange a separate visit to the Uffizi Gallery or Accademia Gallery if desired.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We tailor our stories and pace to engage visitors of all ages, making it enjoyable for children as well.",
      },
    ],
  },
];

export default tuscanyTours;
