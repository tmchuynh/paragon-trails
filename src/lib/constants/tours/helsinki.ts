import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const helsinkiTours: Tour[] = [
  {
    title: "Finnish Sauna Journey & Ice Swimming",
    description:
      "Experience authentic Finnish sauna culture with visits to different types of saunas, from traditional smoke saunas to modern design saunas, with optional ice swimming in the sea or a lake.",
    images: [
      "/images/tours/helsinki/traditional-sauna.jpg",
      "/images/tours/helsinki/ice-swimming.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Sauna", "Wellness", "Traditional"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("helsinki", "wellness").name,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Do I need to be naked in the sauna?",
        answer:
          "Traditional Finnish saunas are typically enjoyed nude, but we provide private facilities and options to wear a swimsuit if preferred. Gender-separated saunas are standard, with towels and clear etiquette guidance provided.",
      },
      {
        question: "Is ice swimming safe?",
        answer:
          "Yes, ice swimming is a popular Finnish tradition. We provide safety gear, and our guides ensure that all participants are comfortable and safe. Beginners are welcome, and we start with a brief introduction to the practice.",
      },
    ],
  },
  {
    title: "Helsinki Design District & Architecture Tour",
    description:
      "Explore the world-renowned Finnish design scene with visits to flagship stores, hidden boutiques, and architectural masterpieces from Alvar Aalto to contemporary innovators.",
    images: [
      "/images/tours/helsinki/design-district.jpg",
      "/images/tours/helsinki/aalto-architecture.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Design", "Architecture", "Shopping"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("helsinki", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this a shopping tour?",
        answer:
          "While we visit several design shops, the focus is on understanding Finnish design philosophy and architectural innovation. Shopping opportunities exist but are secondary to the cultural and educational experience.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Dress comfortably for walking, as we will explore various neighborhoods. Comfortable shoes are recommended, and weather-appropriate clothing is essential, especially in colder months.",
      },
    ],
  },
  {
    title: "Historical Helsinki & Fortress of Suomenlinna",
    description:
      "Discover Helsinki's rich history with a guided tour of the city's key historical sites, followed by a ferry ride to the UNESCO World Heritage site of Suomenlinna, an 18th-century sea fortress.",
    images: [
      "/images/tours/helsinki/suomenlinna-fortress.jpg",
      "/images/tours/helsinki/historical-helsinki.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["History", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("helsinki", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How do we get to Suomenlinna?",
        answer:
          "We take a short ferry ride from the Market Square in Helsinki. The ferry ride itself offers beautiful views of the archipelago.",
      },
      {
        question: "Is there an entrance fee for Suomenlinna?",
        answer:
          "No, the fortress is free to enter, but some museums and exhibitions within may have a small fee.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring both the city and the fortress on foot. Weather-appropriate clothing is also essential.",
      },
    ],
  },
  {
    title: "Helsinki Food Tour: Local Flavors & Markets",
    description:
      "Taste your way through Helsinki's culinary scene with a guided food tour that includes visits to local markets, traditional eateries, and tastings of Finnish delicacies like rye bread, salmon soup, and cloudberry jam.",
    images: [
      "/images/tours/helsinki/food-market.jpg",
      "/images/tours/helsinki/finnish-cuisine.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.8,
    tags: ["Food", "Culture", "Local Cuisine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("helsinki", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and gluten-free diets with prior notice. Please inform us of any allergies or dietary needs when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of traditional Finnish foods such as rye bread, salmon soup, reindeer meat, and local cheeses, along with sweet treats like cinnamon buns and cloudberry jam.",
      },
    ],
  },
];

export default helsinkiTours;
