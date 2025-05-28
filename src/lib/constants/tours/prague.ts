import { Tour } from "@/lib/interfaces/services/tours";

const pragueTours: Tour[] = [
  {
    title: "Prague Castle After Hours",
    description:
      "Experience Prague's magnificent castle complex after the crowds have departed, with private access to areas normally closed to the public and insights from a historian specializing in Czech royal history.",
    images: [
      "/images/tours/prague/castle-night.jpg",
      "/images/tours/prague/st-vitus-cathedral.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Castle", "Evening Tour", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Jana Novakova",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this tour different from regular castle visits?",
        answer:
          "Our evening access provides a dramatically different atmosphere with special lighting that highlights architectural details, near-empty halls that are usually crowded, and access to normally restricted areas including parts of the Old Royal Palace and Golden Lane houses.",
      },
    ],
  },
  {
    title: "Prague Microbrewery Exploration",
    description:
      "Discover Prague's celebrated beer culture beyond the famous brands with visits to local microbreweries, learning traditional Czech brewing methods and tasting unique small-batch brews with a certified beer expert.",
    images: [
      "/images/tours/prague/microbrewery.jpg",
      "/images/tours/prague/beer-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Beer", "Culinary", "Local"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Petr Svoboda",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many beer samples are included?",
        answer:
          "The tour includes tastings of 10-12 different craft beers (approximately 0.2L each) from 3-4 different microbreweries, along with traditional Czech beer snacks to complement the flavors.",
      },
    ],
  },
];

export default pragueTours;
