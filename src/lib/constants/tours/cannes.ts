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
      {
        question: "What should I wear for the red carpet?",
        answer:
          "Dress to impress! While formal attire is not mandatory, we recommend smart casual or cocktail attire. If you want to go all out, feel free to wear evening gowns or suits. We can also arrange professional hair and makeup services for an additional fee.",
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
      {
        question: "What should I bring for the cruise?",
        answer:
          "We recommend swimwear, sunscreen, a hat, and a light jacket for the evening. Towels and snorkeling gear are provided onboard. Feel free to bring your own drinks or snacks, but we also have a full bar and catering service available.",
      },
    ],
  },
];

export default cannesTours;
