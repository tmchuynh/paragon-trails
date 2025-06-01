import { Tour } from "@/lib/interfaces/services/tours";

export const seattleTours: Tour[] = [
  {
    title: "Pike Place Market Early Access Food Tour",
    description:
      "Experience Seattle's iconic Pike Place Market before the crowds arrive with exclusive vendor access, generous tastings, and behind-the-scenes stories from market insiders.",
    images: [
      "/images/tours/seattle/pike-place-market.jpg",
      "/images/tours/seattle/fish-throwing.jpg",
    ],
    duration: "2.5 hours",
    price: "$69",
    rating: 4.9,
    tags: ["Food", "Market", "Local"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many food tastings are included?",
        answer:
          "The tour includes 8-9 generous tastings from a variety of vendors, enough to replace breakfast. Tastings may include fresh pastries, smoked salmon, artisanal cheeses, and Seattle's famous clam chowder.",
      },
    ],
  },
  {
    title: "Underground Seattle History Tour",
    description:
      "Descend beneath the streets of Seattle to explore the hidden subterranean city and hear fascinating tales of the city's colorful past, from the Gold Rush era to Prohibition.",
    images: [
      "/images/tours/seattle/underground.jpg",
      "/images/tours/seattle/pioneer-square.jpg",
    ],
    duration: "2 hours",
    price: "$45",
    rating: 4.7,
    tags: ["History", "Underground", "Unusual"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour accessible for people with mobility issues?",
        answer:
          "The underground portion involves navigating uneven surfaces, low ceilings, and several staircases. Unfortunately, it is not wheelchair accessible and may be challenging for those with significant mobility limitations.",
      },
    ],
  },
  {
    title: "Seattle Waterfront Kayak Adventure",
    description:
      "Paddle through Seattle's scenic waterfront and Elliott Bay, enjoying views of the skyline, Olympic Mountains, and marine wildlife on this guided kayaking tour.",
    images: [
      "/images/tours/seattle/kayaking.jpg",
      "/images/tours/seattle/elliott-bay.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Adventure", "Water", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need prior kayaking experience?",
        answer:
          "No prior experience is necessary! Our guides provide a brief orientation and all necessary equipment. The route is suitable for beginners and families.",
      },
      {
        question: "What should I wear for the kayak tour?",
        answer:
          "Dress in layers appropriate for the weather, with quick-drying clothing. Waterproof jackets are provided, but we recommend wearing shoes that can get wet.",
      },
    ],
  },
];

export default seattleTours;
