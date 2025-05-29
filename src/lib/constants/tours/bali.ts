import { Tour } from "@/lib/interfaces/services/tours";
export const baliTours: Tour[] = [
  {
    title: "Sacred Temples & Water Purification Ceremony",
    description:
      "Experience Bali's spiritual heart with visits to ancient temples including Tirta Empul and Uluwatu, culminating in a traditional water purification ceremony guided by a local Hindu priest.",
    images: [
      "/images/tours/bali/tirta-empul.jpg",
      "/images/tours/bali/uluwatu-temple.jpg",
    ],
    duration: "Full day",
    price: "$120",
    rating: 4.9,
    tags: ["Spiritual", "Temples", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Made Arjana",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question:
          "What should I wear for temple visits and the purification ceremony?",
        answer:
          "For temple visits, both men and women must wear a sarong and temple scarf (provided). For the water purification ritual, bring a change of clothes, as you'll get wet during the ceremony. Women should wear a t-shirt and knee-length shorts or leggings to wear in the sacred springs, rather than swimwear, out of respect for local customs.",
      },
    ],
  },
  {
    title: "Ubud Art Villages & Jungle Swings",
    description:
      "Discover Bali's creative soul through visits to traditional craft villages specializing in woodcarving, batik, and silver, followed by an exhilarating jungle swing experience with rice terrace views.",
    images: [
      "/images/tours/bali/art-village.jpg",
      "/images/tours/bali/bali-swing.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Art", "Crafts", "Adventure"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nyoman Sukadana",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the jungle swing safe?",
        answer:
          "Yes, our selected swing facility uses professional equipment with multiple safety harnesses and trained staff. The swings are regularly inspected and maintained to international safety standards. For those who prefer a less adventurous experience, there are also 'nests' and stationary photo platforms offering similar spectacular views without the adrenaline rush.",
      },
    ],
  },
];

export default baliTours;
