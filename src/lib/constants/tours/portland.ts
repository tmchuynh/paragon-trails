import { Tour } from "@/lib/interfaces/services/tours";

const portlandTours: Tour[] = [
  {
    title: "Portland Craft Beverage Explorer",
    description:
      "Experience Portland's world-famous craft beverage scene with behind-the-scenes access to pioneering microbreweries, small-batch distilleries, and urban wineries, meeting the innovative makers revolutionizing the industry.",
    images: [
      "/images/tours/portland/craft-brewery.jpg",
      "/images/tours/portland/distillery-tour.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Craft Beer", "Distilleries", "Local"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ryan Mitchell",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many different beverages will we sample?",
        answer:
          "The tour includes approximately 12-15 different tastings across three locations, typically covering 7-8 craft beers, 3-4 spirits, and 3 wines. We provide light food pairings to complement the tastings and water throughout the tour.",
      },
    ],
  },
  {
    title: "Portland's Urban Nature & Gardens",
    description:
      "Discover Portland's unique blend of urban planning and lush greenery with visits to Japanese gardens, rose test gardens, urban forest reserves, and sustainable eco-districts showcasing innovative green design.",
    images: [
      "/images/tours/portland/japanese-garden.jpg",
      "/images/tours/portland/rose-garden.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Gardens", "Urban Nature", "Sustainable"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Lily Chen",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to see the roses in bloom?",
        answer:
          "Portland's International Rose Test Garden is at its peak bloom from late May through September, with June being the absolute best time to visit. However, even outside this period, the Japanese Garden and urban forest trails offer stunning seasonal beauty year-round.",
      },
    ],
  },
];

export default portlandTours;
