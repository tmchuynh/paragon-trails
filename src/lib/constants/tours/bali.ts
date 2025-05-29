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
      {
        question: "Is the water purification ceremony safe?",
        answer:
          "Yes, the water used in the purification ceremony is sourced from sacred springs and is considered holy. It is safe for participants, but those with open wounds or skin conditions should consult with our guide beforehand.",
      },
      {
        question:
          "Can children participate in the water purification ceremony?",
        answer:
          "Yes, children can participate in the ceremony. However, parents should ensure their children are comfortable with the experience, as it involves entering a sacred water spring.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions in advance. We can accommodate vegetarian, vegan, and gluten-free diets during the included lunch.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
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
      {
        question: "What should I wear for the jungle swing?",
        answer:
          "Wear comfortable clothing suitable for outdoor activities. Closed-toe shoes are recommended, and we suggest wearing a light jacket as it can get breezy in the jungle. Don't forget your camera for stunning photos!",
      },
      {
        question: "Can children participate in the jungle swing?",
        answer:
          "Yes, children can participate in the jungle swing, but they must be at least 5 years old and accompanied by an adult. Weight limits apply, so please check with our guide if you have concerns.",
      },
      {
        question: "Are there vegetarian options available for lunch?",
        answer:
          "Yes, we offer vegetarian options during the included lunch. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
];

export default baliTours;
