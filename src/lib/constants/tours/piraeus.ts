import { Tour } from "@/lib/interfaces/services/tours";

export const piraeusTours: Tour[] = [
  {
    title: "Ancient Port of Athens Discovery",
    description:
      "Explore the historic harbor of Piraeus that has served as Athens' maritime gateway for over 2,500 years, visiting archaeological sites, maritime museums, and learning about ancient naval technology.",
    images: [
      "/images/tours/piraeus/ancient-harbor.jpg",
      "/images/tours/piraeus/archaeological-museum.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["History", "Maritime", "Archaeology"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What archaeological sites will we visit?",
        answer:
          "The tour includes the ancient Zea Harbor with its ship sheds where the Athenian triremes were housed, the archaeological site of the Piraeus Theater, and the foundations of the ancient city walls built during the time of Themistocles.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! This tour engages younger visitors with interactive elements like ancient shipbuilding models and stories of naval battles. The walking distances are moderate with plenty of stops.",
      },
    ],
  },
  {
    title: "Seaside Culinary Journey & Fish Market",
    description:
      "Experience the authentic flavors of Greece's largest port city with a visit to the bustling fish market, traditional tavernas, and waterfront eateries serving the freshest seafood prepared according to generations-old recipes.",
    images: [
      "/images/tours/piraeus/fish-market.jpg",
      "/images/tours/piraeus/seaside-taverna.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Market", "Seafood"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What local dishes will we taste?",
        answer:
          "You'll sample traditional Greek seafood dishes like fresh grilled fish, octopus carpaccio, steamed mussels with ouzo, fish soup made from the day's catch, and various mezedes (small plates) that highlight local ingredients and cooking methods.",
      },
      {
        question: "When is the best time to visit the fish market?",
        answer:
          "The Piraeus fish market is most active in the early morning hours (6-9 AM) when fishermen bring in their fresh catch and restaurant owners come to select the best seafood. Our tour visits during this lively period to experience the authentic atmosphere and negotiations.",
      },
    ],
  },
];

export default piraeusTours;
