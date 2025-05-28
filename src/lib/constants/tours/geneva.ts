import { Tour } from "@/lib/interfaces/services/tours";

const genevaTours: Tour[] = [
  {
    title: "International Geneva & Diplomatic Heritage",
    description:
      "Discover Geneva's unique role as a global diplomatic hub with exclusive access to international organizations, including the United Nations European headquarters and the historic Red Cross Museum.",
    images: [
      "/images/tours/geneva/united-nations.jpg",
      "/images/tours/geneva/red-cross-museum.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Diplomatic", "International", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Sophie Laurent",
    tourCategoryId: "historical",
    faqs: [
      {
        question:
          "Will we need identification to enter international organizations?",
        answer:
          "Yes, valid government-issued photo ID (passport preferred) is required for security clearance at the United Nations and certain other international organizations. Please bring your passport as some facilities do not accept other forms of identification for non-Swiss citizens.",
      },
    ],
  },
  {
    title: "Lake Geneva Luxury & Alpine Vistas",
    description:
      "Experience the elegant Swiss Riviera with a private boat cruise on Lake Geneva, followed by visits to medieval Château de Chillon, charming Montreux, and spectacular mountain viewpoints with wine tasting.",
    images: [
      "/images/tours/geneva/lake-cruise.jpg",
      "/images/tours/geneva/chateau-chillon.jpg",
    ],
    duration: "8 hours",
    price: "$295",
    rating: 4.9,
    tags: ["Lake", "Mountains", "Château"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Pierre Dubois",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, this tour operates year-round with seasonal adaptations. Summer offers the best lake conditions for cruising, while winter provides stunning snow-capped Alpine views. The tour itinerary is slightly modified in winter to accommodate shorter daylight hours and weather conditions, with additional indoor experiences at the castle and wine cellars.",
      },
    ],
  },
];

export default genevaTours;
