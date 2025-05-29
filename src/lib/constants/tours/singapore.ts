import { Tour } from "@/lib/interfaces/services/tours";
export const singaporeTours: Tour[] = [
  {
    title: "Singapore Heritage Districts & Hawker Cuisine",
    description:
      "Explore Singapore's diverse cultural heritage through its distinct ethnic neighborhoods, with insider access to temples, shophouses, and markets, culminating in a curated hawker center feast showcasing the best of local cuisine.",
    images: [
      "/images/tours/singapore/chinatown-temple.jpg",
      "/images/tours/singapore/hawker-center.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Heritage", "Food", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Rachel Tan",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Which neighborhoods will we visit?",
        answer:
          "The tour explores three distinct heritage districts: Chinatown with its temples and traditional medicine shops, Little India with its spice markets and Hindu temples, and Kampong Glam (the Malay quarter) with its Sultan Mosque and traditional shophouses. In each area, we go beyond the main streets to discover hidden gems most tourists miss.",
      },
    ],
  },
  {
    title: "Gardens by the Bay After Dark & Marina Bay Spectacle",
    description:
      "Experience Singapore's futuristic side with VIP access to the Supertree Grove light show, the Cloud Forest conservatory after hours, and a private cocktail experience overlooking the Marina Bay laser spectacle.",
    images: [
      "/images/tours/singapore/supertree-grove-night.jpg",
      "/images/tours/singapore/marina-bay-lights.jpg",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Gardens", "Light Show", "Modern"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "David Lim",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this Gardens by the Bay experience special?",
        answer:
          "Our tour includes private access to elevated walkways in the Supertree Grove during the Garden Rhapsody light show, providing unobstructed views and perfect photo opportunities without crowds. We also enjoy exclusive after-hours entry to the Cloud Forest when most visitors have left, allowing you to experience this magnificent conservatory in serene tranquility as the mist envelops the indoor waterfall.",
      },
    ],
  },
];

export default singaporeTours;
