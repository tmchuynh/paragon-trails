import { Tour } from "@/lib/interfaces/services/tours";

export const vancouverTours: Tour[] = [
  {
    title: "Capilano Suspension Bridge & Temperate Rainforest",
    description:
      "Experience Vancouver's stunning natural surroundings with a guided tour of Capilano Suspension Bridge Park, ancient temperate rainforest trails, and the breathtaking Cliffwalk overlooking the canyon.",
    images: [
      "/images/tours/vancouver/capilano-bridge.jpg",
      "/images/tours/vancouver/rainforest-trail.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nature", "Adventure", "Scenic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this tour suitable for those afraid of heights?",
        answer:
          "The main suspension bridge hangs 70 meters (230 feet) above the Capilano River and is 137 meters (450 feet) long. While many visitors with mild fear of heights still cross the bridge, those with severe acrophobia may find it challenging. Alternative forest paths are available if needed, though they miss some of the signature experiences.",
      },
    ],
  },
  {
    title: "Indigenous Culture & Stanley Park Exploration",
    description:
      "Discover Vancouver's Stanley Park through Indigenous perspectives with a First Nations guide who shares traditional knowledge about native plants, totem poles, and cultural stories about this ancient land.",
    images: [
      "/images/tours/vancouver/totem-poles.jpg",
      "/images/tours/vancouver/stanley-park.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Indigenous", "Cultural", "Nature"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What Indigenous nations are represented on this tour?",
        answer:
          "The tour is led by guides from the Squamish, Musqueam, or Tsleil-Waututh Nations, the three Coast Salish peoples whose traditional territories include present-day Vancouver. The content respects and represents the specific cultural knowledge and perspectives of these distinct First Nations.",
      },
    ],
  },
  {
    title: "Gastown & Granville Island Food Tour",
    description:
      "Savor Vancouver's culinary scene with a guided food tour through historic Gastown and vibrant Granville Island, sampling local delicacies, craft beers, and artisanal treats while learning about the city's food culture.",
    images: [
      "/images/tours/vancouver/gastown-food.jpg",
      "/images/tours/vancouver/granville-island.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Food", "Culinary", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are vegetarian or vegan options available?",
        answer:
          "Yes, we can accommodate dietary restrictions including vegetarian and vegan preferences. Please inform us at the time of booking so we can tailor the food stops accordingly.",
      },
      {
        question: "How much food should I expect on this tour?",
        answer:
          "The tour includes enough tastings to serve as a light meal, with approximately 6-8 different stops featuring a variety of dishes and beverages. You will leave satisfied but not overly full.",
      },
    ],
  },
];

export default vancouverTours;
