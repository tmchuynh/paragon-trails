import { Tour } from "@/lib/interfaces/services/tours";

export const singaporeTours: Tour[] = [
  {
    title: "Singapore Heritage Districts & Hawker Cuisine",
    description:
      "Explore Singapore's diverse cultural heritage through its distinct ethnic neighborhoods, with insider access to temples, shophouses, and markets, culminating in a curated hawker center feast showcasing the best of local cuisine.",
    city: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    images: [
      "/images/tours/singapore/chinatown-temple.jpg",
      "/images/tours/singapore/hawker-center.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Heritage", "Food", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    city: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    images: [
      "/images/tours/singapore/supertree-grove-night.jpg",
      "/images/tours/singapore/marina-bay-lights.jpg",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Gardens", "Light Show", "Modern"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this Gardens by the Bay experience special?",
        answer:
          "Our tour includes private access to elevated walkways in the Supertree Grove during the Garden Rhapsody light show, providing unobstructed views and perfect photo opportunities without crowds. We also enjoy exclusive after-hours entry to the Cloud Forest when most visitors have left, allowing you to experience this magnificent conservatory in serene tranquility as the mist envelops the indoor waterfall.",
      },
    ],
  },
  {
    title: "Singapore's Hidden Nature Trails & Wildlife Encounters",
    description:
      "Discover Singapore's lush green spaces and diverse wildlife with a guided hike through lesser-known nature reserves, visiting hidden waterfalls, mangroves, and spotting native species in their natural habitats.",
    city: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    images: [
      "/images/tours/singapore/nature-trail.jpg",
      "/images/tours/singapore/wildlife-encounter.jpg",
    ],
    duration: "5 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Nature", "Off-the-beaten-path"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What kind of wildlife can we expect to see?",
        answer:
          "Depending on the season, you may spot native species such as long-tailed macaques, monitor lizards, various bird species, and even the elusive flying lemur. Our guide will point out interesting flora and fauna along the trails.",
      },
      {
        question: "Are there any strenuous hikes involved?",
        answer:
          "The trails are moderate in difficulty, with some uneven terrain and gentle slopes. We pace ourselves to ensure everyone can enjoy the experience comfortably. Sturdy footwear is recommended.",
      },
    ],
  },
];

export default singaporeTours;
