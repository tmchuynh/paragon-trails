import { Tour } from "@/lib/interfaces/services/tours";

const hongKongTours: Tour[] = [
  {
    title: "Secret Hong Kong Food Journey",
    description:
      "Explore Hong Kong's hidden culinary gems with a local food expert who takes you beyond tourist restaurants to family-run eateries, street food stalls, and local favorites.",
    images: [
      "/images/tours/hong-kong/street-food.jpg",
      "/images/tours/hong-kong/dim-sum.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Local Cuisine", "Hidden Gems"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Simon Leung",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How spicy is the food on this tour?",
        answer:
          "The tour includes a range of dishes with varying spice levels. Your guide will point out spicier options, and alternatives are always available for those who prefer milder flavors.",
      },
    ],
  },
  {
    title: "Peak & Harbor Photography Expedition",
    description:
      "Capture Hong Kong's iconic skyline and harbor from the best vantage points with a professional photographer guide who shares expert tips and insider locations.",
    images: [
      "/images/tours/hong-kong/victoria-peak.jpg",
      "/images/tours/hong-kong/harbor-skyline.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Photography", "Skyline", "Views"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Michael Chen",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment do I need?",
        answer:
          "This tour is suitable for all equipment levels—from smartphones to professional DSLRs. Your guide will provide tips specific to your equipment. A tripod is recommended for evening tours but not required.",
      },
    ],
  },
];

export default hongKongTours;
