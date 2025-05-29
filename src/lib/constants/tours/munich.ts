import { Tour } from "@/lib/interfaces/services/tours";
export const munichTours: Tour[] = [
  {
    title: "Bavarian Beer Heritage Experience",
    description:
      "Explore Munich's rich brewing tradition with visits to historic beer halls, the Beer and Oktoberfest Museum, and a family-run brewery for exclusive tastings and traditional Bavarian snacks.",
    images: [
      "/images/tours/munich/beer-hall.jpg",
      "/images/tours/munich/brewery-tour.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.8,
    tags: ["Beer", "Cultural", "Food"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Franz Mueller",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is this tour only about drinking beer?",
        answer:
          "While beer tasting is a component, this is primarily a cultural experience focusing on the historical significance of brewing in Bavarian culture, traditions, and the 500-year-old Beer Purity Law. We explore how beer shaped Munich's development and traditions.",
      },
    ],
  },
  {
    title: "Fairytale Castles of King Ludwig II",
    description:
      "Visit the stunning Neuschwanstein and Linderhof castles built by Bavaria's 'Fairytale King' Ludwig II, with priority access and expert commentary on the king's fascinating life and artistic vision.",
    images: [
      "/images/tours/munich/neuschwanstein.jpg",
      "/images/tours/munich/linderhof.jpg",
    ],
    duration: "10 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Castles", "Architecture", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Claudia Weber",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How long is the drive to Neuschwanstein Castle?",
        answer:
          "The drive from Munich to Neuschwanstein takes approximately 2 hours each way in our comfortable vehicle. We make the journey enjoyable with Bavarian countryside views and fascinating stories about the region and King Ludwig II.",
      },
    ],
  },
];

export default munichTours;
