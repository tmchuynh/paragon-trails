import { Tour } from "@/lib/interfaces/services/tours";
export const cannesTours: Tour[] = [
  {
    title: "Cannes Film Festival Experience",
    description:
      "Experience the glamour of the world's most prestigious film festival with red carpet access, film screenings, and insider knowledge about the festival's history and impact on global cinema.",
    images: [
      "/images/tours/cannes/red-carpet.jpg",
      "/images/tours/cannes/film-festival.jpg",
    ],
    duration: "6 hours",
    price: "$295",
    rating: 4.9,
    tags: ["Film Festival", "Celebrity", "Exclusive"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sophie Laurent",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Can we actually attend a film screening?",
        answer:
          "Yes, this experience includes tickets to one official selection screening. During the festival, availability depends on the festival schedule, but our connections allow us to secure access to screenings that aren't available to the general public. Outside festival dates, we arrange private screenings of past Palme d'Or winners.",
      },
    ],
  },
  {
    title: "French Riviera Coastal Cruise",
    description:
      "Sail the crystal waters of the Côte d'Azur aboard a luxury yacht, visiting secluded bays, seaside villages, and glamorous ports between Cannes and Saint-Tropez with champagne lunch included.",
    images: [
      "/images/tours/cannes/yacht-cruise.jpg",
      "/images/tours/cannes/coastal-view.jpg",
    ],
    duration: "7 hours",
    price: "$450",
    rating: 4.8,
    tags: ["Yacht", "Coastal", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Jean-Pierre",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is swimming possible during the cruise?",
        answer:
          "Absolutely! We make 2-3 swimming stops in beautiful secluded coves with crystal-clear water. The yacht is equipped with snorkeling gear, paddleboards, and a swimming platform for easy access to the water.",
      },
    ],
  },
];

export default cannesTours;
