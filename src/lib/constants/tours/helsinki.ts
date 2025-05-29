import { Tour } from "@/lib/interfaces/services/tours";
export const helsinkiTours: Tour[] = [
  {
    title: "Finnish Sauna Journey & Ice Swimming",
    description:
      "Experience authentic Finnish sauna culture with visits to different types of saunas, from traditional smoke saunas to modern design saunas, with optional ice swimming in the sea or a lake.",
    images: [
      "/images/tours/helsinki/traditional-sauna.jpg",
      "/images/tours/helsinki/ice-swimming.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Sauna", "Wellness", "Traditional"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mikko Virtanen",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Do I need to be naked in the sauna?",
        answer:
          "Traditional Finnish saunas are typically enjoyed nude, but we provide private facilities and options to wear a swimsuit if preferred. Gender-separated saunas are standard, with towels and clear etiquette guidance provided.",
      },
    ],
  },
  {
    title: "Helsinki Design District & Architecture Tour",
    description:
      "Explore the world-renowned Finnish design scene with visits to flagship stores, hidden boutiques, and architectural masterpieces from Alvar Aalto to contemporary innovators.",
    images: [
      "/images/tours/helsinki/design-district.jpg",
      "/images/tours/helsinki/aalto-architecture.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Design", "Architecture", "Shopping"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Elina Mäkinen",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this a shopping tour?",
        answer:
          "While we visit several design shops, the focus is on understanding Finnish design philosophy and architectural innovation. Shopping opportunities exist but are secondary to the cultural and educational experience.",
      },
    ],
  },
];

export default helsinkiTours;
