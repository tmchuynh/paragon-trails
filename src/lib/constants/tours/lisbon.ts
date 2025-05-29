import { Tour } from "@/lib/interfaces/services/tours";
export const lisbonTours: Tour[] = [
  {
    title: "Fado Music Night & Alfama Exploration",
    description:
      "Experience Portugal's soulful fado music in an authentic setting after exploring the atmospheric Alfama district's maze of narrow streets, hidden courtyards, and stunning viewpoints.",
    images: [
      "/images/tours/lisbon/fado-night.jpg",
      "/images/tours/lisbon/alfama-streets.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Music", "Cultural", "Evening"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Miguel Santos",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Does the tour include dinner?",
        answer:
          "Yes, the tour includes a traditional Portuguese dinner with wine during the fado performance. The meal typically features classic dishes like bacalhau (codfish), caldo verde (kale soup), and pastel de nata for dessert.",
      },
    ],
  },
  {
    title: "Sintra Fairytale Palaces & Mystical Gardens",
    description:
      "Discover the magical town of Sintra, exploring colorful Pena Palace, mysterious Quinta da Regaleira gardens, and enjoying pastries from a historic bakery using royal recipes.",
    images: [
      "/images/tours/lisbon/pena-palace.jpg",
      "/images/tours/lisbon/quinta-regaleira.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Palaces", "Gardens", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Ana Oliveira",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How far is Sintra from Lisbon?",
        answer:
          "Sintra is located about 30km (18 miles) from Lisbon. Our comfortable private transportation takes approximately 40 minutes each way, depending on traffic conditions.",
      },
    ],
  },
];

export default lisbonTours;
