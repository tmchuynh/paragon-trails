import { Tour } from "@/lib/interfaces/services/tours";

export const hoiAnTours: Tour[] = [
  {
    title: "Ancient Town Walking & Lantern Making",
    description:
      "Explore Hoi An's UNESCO-listed Old Town with its centuries-old architecture, then learn to craft your own traditional Vietnamese lantern.",
    images: [
      "/images/tours/hoi-an/ancient-town.jpg",
      "/images/tours/hoi-an/lantern-making.jpg",
    ],
    duration: "5 hours",
    price: "$40",
    rating: 4.9,
    tags: ["Cultural", "Craft", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mai Thi Phuong",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will I be able to take my handmade lantern home?",
        answer:
          "Yes! Your lantern will be carefully wrapped for easy packing in your luggage, or we can arrange shipping for larger lanterns.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will explore cobblestone streets and some uneven surfaces. Light, breathable clothing is also advisable due to the warm climate.",
      },
      {
        question: "Is the lantern-making suitable for children?",
        answer:
          "Yes, this activity is family-friendly and children will enjoy creating their own lanterns with guidance from our expert artisans.",
      },
    ],
  },
  {
    title: "Countryside Bicycle Tour & Cooking Class",
    description:
      "Cycle through picturesque rice paddies and vegetable villages, then learn to cook traditional Vietnamese dishes with fresh ingredients you helped harvest.",
    images: [
      "/images/tours/hoi-an/countryside-cycling.jpg",
      "/images/tours/hoi-an/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cycling", "Cooking", "Rural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nguyen Van Duc",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How difficult is the bike ride?",
        answer:
          "The terrain is flat and the pace is leisurely, making it suitable for all fitness levels. We cover approximately 8km on quiet country roads and paths.",
      },
      {
        question: "What if I'm not comfortable cooking?",
        answer:
          "No prior cooking experience is necessary! Our friendly chef will guide you through each step, and you can participate as much or as little as you like. The focus is on having fun and enjoying the process.",
      },
      {
        question: "Are vegetarian options available for the cooking class?",
        answer:
          "Yes, we can accommodate vegetarian preferences. Please let us know in advance so we can prepare suitable ingredients for you.",
      },
    ],
  },
];

export default hoiAnTours;
