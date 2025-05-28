import { Tour } from "@/lib/interfaces/services/tours";

export const beijingTours: Tour[] = [
  {
    title: "Great Wall Hiking Tour - Jinshanling Section",
    description:
      "Experience one of the less-crowded sections of the Great Wall with breathtaking views and authentic architecture that showcases the true majesty of this ancient structure.",
    images: [
      "/images/tours/beijing/great-wall-jinshanling.jpg",
      "/images/tours/beijing/great-wall-watchtower.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Hiking", "UNESCO", "Photography"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Li Wei",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hike?",
        answer:
          "This section involves moderate hiking with some steep ascents and uneven steps. We cover approximately 6km in 3-4 hours, suitable for those with reasonable fitness levels.",
      },
    ],
  },
  {
    title: "Forbidden City & Temple of Heaven Tour",
    description:
      "Explore the imperial grandeur of Beijing with skip-the-line access to the Forbidden City followed by the Temple of Heaven, symbols of China's imperial past.",
    images: [
      "/images/tours/beijing/forbidden-city.jpg",
      "/images/tours/beijing/temple-of-heaven.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Imperial", "History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Zhang Min",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How crowded is the Forbidden City?",
        answer:
          "The Forbidden City can be extremely crowded, especially during holidays. Our tour starts early to beat the crowds, and we use a carefully planned route to navigate the complex while avoiding the busiest areas.",
      },
    ],
  },
];

export default beijingTours;
