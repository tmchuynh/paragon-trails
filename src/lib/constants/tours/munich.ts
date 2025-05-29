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
      {
        question: "Can I join if I don't drink alcohol?",
        answer:
          "Absolutely! We offer non-alcoholic options including traditional Bavarian soft drinks and juices. The tour is designed to be inclusive, focusing on the cultural aspects of Munich's beer heritage.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, this tour is family-friendly. Children can enjoy the cultural aspects and non-alcoholic beverages. However, we recommend parental discretion regarding the brewery visit.",
      },
      {
        question: "What should I wear for the brewery visit?",
        answer:
          "We recommend comfortable clothing and closed-toe shoes, especially for the brewery tour where you may be walking on uneven surfaces. Dress in layers as brewery temperatures can vary.",
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
      {
        question: "Are the castles accessible for people with mobility issues?",
        answer:
          "Neuschwanstein Castle has limited accessibility due to its mountainous location, but we can arrange for a horse-drawn carriage ride to the castle entrance. Linderhof Castle is more accessible, with paved paths and ramps.",
      },
      {
        question: "What should I wear for the castle visits?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as you will be exploring outdoor areas. The castles can be chilly, so layers are advisable.",
      },
    ],
  },
];

export default munichTours;
