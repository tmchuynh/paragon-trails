import { Tour } from "@/lib/interfaces/services/tours";

export const sanFranciscoTours: Tour[] = [
  {
    title: "Golden Gate Bridge Bike Tour",
    description:
      "Cycle across San Francisco's iconic Golden Gate Bridge with breathtaking views of the bay, Alcatraz, and the city skyline.",
    images: [
      "/images/tours/san-francisco/golden-gate-cycling.jpg",
      "/images/tours/san-francisco/sausalito-view.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cycling", "Bridge", "Views"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Alex Chen",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the bike ride?",
        answer:
          "The ride includes some moderate hills but is generally suitable for anyone comfortable on a bike. Electric bike upgrades are available for an additional fee.",
      },
    ],
  },
  {
    title: "Alcatraz & San Francisco Highlights",
    description:
      "Visit the infamous Alcatraz Island prison with audio tour, then explore San Francisco's diverse neighborhoods, including Chinatown, North Beach, and Haight-Ashbury.",
    images: [
      "/images/tours/san-francisco/alcatraz.jpg",
      "/images/tours/san-francisco/chinatown.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Prison", "History", "Neighborhoods"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maria Gonzales",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far in advance should I book this tour?",
        answer:
          "Alcatraz tickets often sell out 2-3 months in advance, especially during summer and holidays. Early booking is strongly recommended.",
      },
    ],
  },
];

export default sanFranciscoTours;
