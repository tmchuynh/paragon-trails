import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const munichTours: Tour[] = [
  {
    title: "Beer & Brewery Heritage Tour",
    description:
      "Discover Munich's rich brewing history with visits to traditional beer halls, historic breweries, and the famous Hofbräuhaus. Learn about the 500-year-old Bavarian Purity Law while sampling distinctive beer styles.",
    images: [
      "/images/tours/munich/beer-hall.jpg",
      "/images/tours/munich/brewery-tour.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Beer", "Cultural", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("munich", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "Yes, while beer tasting is a highlight, the tour focuses on cultural and historical aspects of brewing. Non-alcoholic alternatives are available at each stop, and the historical commentary is engaging for all participants.",
      },
      {
        question: "How much beer is included in the tastings?",
        answer:
          "The tour includes samples of 5-6 different beer styles, totaling approximately 1-1.5 liters. Food pairings are provided to complement the tastings.",
      },
    ],
  },
];

export default munichTours;
