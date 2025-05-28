import { Tour } from "@/lib/interfaces/services/tours";

const santoriniTours: Tour[] = [
  {
    title: "Sunset Caldera Sailing & Hot Springs",
    description:
      "Cruise Santorini's stunning volcanic caldera aboard a traditional wooden vessel, stopping for swimming at the hot springs, snorkeling at Red Beach, and witnessing the island's legendary sunset from the water.",
    images: [
      "/images/tours/santorini/caldera-sailing.jpg",
      "/images/tours/santorini/red-beach.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Sailing", "Sunset", "Swimming"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Nikos",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What should I bring for the hot springs?",
        answer:
          "Bring your swimwear, a towel, sunscreen, and a change of clothes. Important note: the minerals in the hot springs can discolor light-colored swimwear, so we recommend wearing darker colors. The boat provides snorkeling equipment and light refreshments.",
      },
    ],
  },
  {
    title: "Santorini Wine Trail & Village Discovery",
    description:
      "Journey through Santorini's ancient vineyards to sample the island's unique volcanic wines, then explore traditional whitewashed villages hidden from tourist crowds with panoramic caldera views.",
    images: [
      "/images/tours/santorini/vineyard.jpg",
      "/images/tours/santorini/pyrgos-village.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Wine", "Villages", "Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Elena Papadopoulos",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Santorini wines special?",
        answer:
          "Santorini's wines are unique due to several factors: the volcanic soil provides mineral character, the indigenous grape varieties (especially Assyrtiko) are rarely found elsewhere, and the island's unique 'kouloura' vine-training system (basket-shaped) protects grapes from strong winds and intense sun. Some vines are also phylloxera-resistant and can be hundreds of years old.",
      },
    ],
  },
];

export default santoriniTours;
