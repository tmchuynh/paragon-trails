import { Tour } from "@/lib/interfaces/services/tours";

export const osakaTours: Tour[] = [
  {
    title: "Osaka Street Food & Dotonbori Night Tour",
    description:
      "Explore Osaka's vibrant food scene with a guided evening tour through the neon-lit Dotonbori district, tasting local specialties like takoyaki, okonomiyaki, and kushikatsu.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/dotonbori-night.jpg",
      "/images/tours/osaka/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Nightlife", "Local Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, halal, and most dietary restrictions. Osaka cuisine does offer many options, though some traditional dishes may be modified.",
      },
      {
        question: "Will we be trying raw seafood?",
        answer:
          "The tour focuses on cooked street food specialties, but if you're interested in raw seafood, we can recommend nearby sushi restaurants for after the tour.",
      },
    ],
  },
  {
    title: "Osaka Castle & Traditional Gardens",
    description:
      "Discover the history and beauty of Osaka Castle, explore its extensive grounds and museum, then visit the nearby traditional Japanese gardens with a knowledgeable local guide.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/osaka-castle.jpg",
      "/images/tours/osaka/japanese-garden.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["History", "Culture", "Gardens"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we get to handle real samurai swords?",
        answer:
          "The tour includes a demonstration with authentic historical swords, but handling is limited to specially made practice swords during the optional participation portion for safety and preservation of historical artifacts.",
      },
      {
        question: "Is the castle accessible for those with mobility issues?",
        answer:
          "Yes, the main castle grounds and museum are wheelchair accessible, though some areas may have steep steps. We can provide assistance and alternative viewing options if needed.",
      },
    ],
  },
  {
    title: "Modern Osaka: Architecture & Innovation",
    description:
      "Experience contemporary Osaka with visits to architectural marvels like Abeno Harukas, Umeda Sky Building, and innovative public spaces showcasing Japan's cutting-edge design.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/umeda-sky-building.jpg",
      "/images/tours/osaka/abeno-harukas.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.6,
    tags: ["Architecture", "Modern Japan", "Photography"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "architecture",
    faqs: [
      {
        question: "Are entrance fees to sites included?",
        answer:
          "Yes, all entrance fees to the sites mentioned in the itinerary are included in the tour price.",
      },
      {
        question: "What is the best time to take this tour?",
        answer:
          "The tour is great year-round, but for the best photography lighting, consider an afternoon tour that concludes at sunset.",
      },
    ],
  },
];

export default osakaTours;
