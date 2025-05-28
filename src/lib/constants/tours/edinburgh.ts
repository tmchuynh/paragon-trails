import { Tour } from "@/lib/interfaces/services/tours";

const edinburghTours: Tour[] = [
  {
    title: "Edinburgh Castle & Royal Mile Legends",
    description:
      "Discover the secrets of Edinburgh Castle and the historic Royal Mile with a local historian who brings to life tales of royalty, battles, and ghostly encounters.",
    images: [
      "/images/tours/edinburgh/edinburgh-castle.jpg",
      "/images/tours/edinburgh/royal-mile.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Castle", "History", "Royal"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Alistair Campbell",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Does this tour include entry to Edinburgh Castle?",
        answer:
          "Yes, skip-the-line tickets to Edinburgh Castle are included, as well as entry to St Giles' Cathedral and other significant Royal Mile landmarks.",
      },
    ],
  },
  {
    title: "Scottish Whisky Journey & Tasting",
    description:
      "Embark on a guided tour of Edinburgh's finest whisky establishments, learning about production methods and regional differences while sampling premium single malts.",
    images: [
      "/images/tours/edinburgh/whisky-tasting.jpg",
      "/images/tours/edinburgh/scotch-whisky.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Whisky", "Tasting", "Scottish"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Hamish MacLeod",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many whiskies will we taste?",
        answer:
          "The tour includes guided tastings of 6 premium single malt whiskies representing different Scottish regions, with detailed tasting notes and food pairings.",
      },
    ],
  },
];

export default edinburghTours;
