import { Tour } from "@/lib/interfaces/services/tours";

const singaporeTours: Tour[] = [
  {
    title: "Hidden Singapore: Culture & Heritage Tour",
    description:
      "Discover Singapore beyond the glossy skyscrapers with explorations of vibrant ethnic neighborhoods, ancestral temples, and local cultural traditions rarely seen by tourists.",
    images: [
      "/images/tours/singapore/chinatown-heritage.jpg",
      "/images/tours/singapore/kampong-glam.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Cultural", "Heritage", "Local"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mei Lin Tan",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we visit religious sites on this tour?",
        answer:
          "Yes, we visit several religious sites including temples, mosques, and churches. Modest dress is recommended (shoulders covered, no shorts above the knee) and head coverings will be provided where required.",
      },
    ],
  },
  {
    title: "Singapore After Dark: Cocktails & City Lights",
    description:
      "Experience the city's world-class nightlife with exclusive access to hidden speakeasies, award-winning rooftop bars, and breathtaking views of the illuminated skyline.",
    images: [
      "/images/tours/singapore/marina-bay-night.jpg",
      "/images/tours/singapore/cocktail-bar.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Nightlife", "Cocktails", "City Views"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "James Wong",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Are drinks included in the tour price?",
        answer:
          "The tour includes one signature cocktail or non-alcoholic alternative at each of the three venues we visit. Additional drinks can be purchased separately.",
      },
    ],
  },
];

export default singaporeTours;
