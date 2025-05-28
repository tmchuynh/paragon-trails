import { Tour } from "@/lib/interfaces/services/tours";

const zurichTours: Tour[] = [
  {
    title: "Swiss Banking & Financial History",
    description:
      "Discover Zurich's fascinating role as a global financial hub with guided visits to historic banking institutions, the Swiss National Bank, and exclusive insights into Switzerland's unique banking heritage and modern financial system.",
    images: [
      "/images/tours/zurich/bahnhofstrasse-banks.jpg",
      "/images/tours/zurich/swiss-national-bank.jpg",
    ],
    duration: "4 hours",
    price: "$165",
    rating: 4.7,
    tags: ["Banking", "Financial", "History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Andreas Müller",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we learn about Swiss banking secrecy?",
        answer:
          "Yes, the tour provides a balanced and factual discussion of Switzerland's banking secrecy laws, including their historical origins, how they've evolved over time, recent international banking reforms, and their current status. The guide explains the complex reality beyond popular misconceptions portrayed in films and media.",
      },
    ],
  },
  {
    title: "Alpine Chocolate & Cheese Journey",
    description:
      "Indulge in Switzerland's iconic culinary treasures with private chocolate making workshops, artisanal cheese tastings, and visits to traditional dairy farms in the picturesque countryside surrounding Zurich.",
    images: [
      "/images/tours/zurich/chocolate-making.jpg",
      "/images/tours/zurich/alpine-cheese-farm.jpg",
    ],
    duration: "7 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Chocolate", "Cheese", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Heidi Brunner",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we make in the chocolate workshop?",
        answer:
          "In the hands-on chocolate workshop, you'll learn traditional Swiss chocolate-making techniques from a master chocolatier. You'll create your own personalized chocolate bars with premium ingredients, hand-dipped pralines, and Swiss truffles. All your creations will be beautifully packaged to take home – if they last that long!",
      },
    ],
  },
];

export default zurichTours;
