import { Tour } from "@/lib/interfaces/services/tours";
export const tahitiTours: Tour[] = [
  {
    title: "Sacred Tahitian Waterfall Adventure",
    description:
      "Journey into Tahiti's lush interior with a local guide to discover hidden waterfalls, ancient ceremonial sites, and natural swimming pools while learning about indigenous Polynesian traditions.",
    images: [
      "/images/tours/tahiti/sacred-waterfall.jpg",
      "/images/tours/tahiti/jungle-trek.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Nature", "Waterfalls", "Cultural"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Tehani Marama",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is the hike?",
        answer:
          "This is a moderate trek with some uneven terrain and river crossings. Participants should be comfortable walking for 3-4 hours with breaks. The trail can be slippery when wet, so appropriate footwear is essential.",
      },
    ],
  },
  {
    title: "Tahitian Black Pearl & Cultural Experience",
    description:
      "Visit a family-owned black pearl farm to learn about these prized gems, then participate in traditional crafts including pareo (sarong) dying and flower crown making with native Polynesian artisans.",
    images: [
      "/images/tours/tahiti/black-pearl-farm.jpg",
      "/images/tours/tahiti/flower-crown-making.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Pearls", "Crafts", "Cultural"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Heirani Tehei",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Can I purchase pearls directly from the farm?",
        answer:
          "Yes, the pearl farm has an on-site boutique where you can purchase certified Tahitian black pearls at farm-direct prices. Our guide can help explain pearl quality factors to assist with your selection if desired.",
      },
    ],
  },
  {
    title: "Tahiti Sunset Lagoon Cruise",
    description:
      "Relax on a traditional outrigger canoe as you glide through Tahiti's tranquil lagoons, enjoying stunning sunset views, local snacks, and the chance to spot dolphins and sea turtles.",
    images: [
      "/images/tours/tahiti/sunset-cruise.jpg",
      "/images/tours/tahiti/outrigger-canoe.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Sunset", "Cruise", "Nature"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Matahi Tereora",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What should I bring on the cruise?",
        answer:
          "We recommend bringing a light jacket for cooler evening breezes, sunscreen, a hat, and your camera to capture the beautiful scenery. Snacks and drinks are provided on board.",
      },
    ],
  },
];

export default tahitiTours;
