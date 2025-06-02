import { Tour } from "@/lib/interfaces/services/tours";

export const sanFranciscoTours: Tour[] = [
  {
    title: "Golden Gate Bridge Bike Tour",
    description:
      "Cycle across San Francisco's iconic Golden Gate Bridge with breathtaking views of the bay, Alcatraz, and the city skyline.",
    city: "San Francisco",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-francisco/golden-gate-cycling.jpg",
      "/images/tours/san-francisco/sausalito-view.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cycling", "Bridge", "Views"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    city: "San Francisco",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-francisco/alcatraz.jpg",
      "/images/tours/san-francisco/chinatown.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Prison", "History", "Neighborhoods"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far in advance should I book this tour?",
        answer:
          "Alcatraz tickets often sell out 2-3 months in advance, especially during summer and holidays. Early booking is strongly recommended.",
      },
    ],
  },
  {
    title: "San Francisco Food Truck Tour",
    description:
      "Taste the best of San Francisco's food truck scene with a guided tour through the Mission District, sampling gourmet tacos, artisanal ice cream, and more.",
    city: "San Francisco",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-francisco/food-truck.jpg",
      "/images/tours/san-francisco/mission-district.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Food", "Street Food", "Local Cuisine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and gluten-free diets with advance notice. Please inform us of any specific dietary needs when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of dishes from different food trucks, such as gourmet tacos, fusion sandwiches, artisanal desserts, and local beverages.",
      },
    ],
  },
];

export default sanFranciscoTours;
