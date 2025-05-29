import { Tour } from "@/lib/interfaces/services/tours";
export const mexicoCityTours: Tour[] = [
  {
    title: "Teotihuacan Pyramids at Sunrise & Archaeologist Tour",
    description:
      "Experience the majestic ancient city of Teotihuacan without crowds during the magical morning light, with expert interpretation from an archaeologist specializing in Mesoamerican civilizations.",
    images: [
      "/images/tours/mexico-city/teotihuacan-sunrise.jpg",
      "/images/tours/mexico-city/pyramid-sun.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Archaeological", "Ancient Civilization", "Pyramids"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Vásquez",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How early do we need to start?",
        answer:
          "This is an early departure tour - we'll pick you up at your accommodation around 5:30am to reach the archaeological site before opening hours through special access arrangements. The early start is worth it to experience the pyramids in serene morning light without crowds.",
      },
    ],
  },
  {
    title: "Mexico City Street Food & Market Adventure",
    description:
      "Taste your way through Mexico City's celebrated culinary scene, from bustling markets to street stands serving regional specialties, with insights into ingredients, techniques, and cultural significance.",
    images: [
      "/images/tours/mexico-city/street-tacos.jpg",
      "/images/tours/mexico-city/mercado.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Food", "Markets", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Carlos Mendoza",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer:
          "Safety is our priority - we visit carefully selected vendors with excellent hygiene practices and high local reputation. Your guide shares food safety tips and provides hand sanitizer throughout the tour. We've conducted this tour for years with an excellent safety record.",
      },
    ],
  },
];

export default mexicoCityTours;
