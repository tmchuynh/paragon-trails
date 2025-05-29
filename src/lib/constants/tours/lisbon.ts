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
      {
        question: "Is the fado performance suitable for children?",
        answer:
          "While fado music is deeply emotional and may not hold children's attention, the atmosphere is family-friendly. We recommend this tour for children aged 10 and up who can appreciate cultural experiences.",
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
      {
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as we will be exploring both indoor and outdoor sites. Sintra's microclimate can be cooler than Lisbon, so a light jacket is advisable.",
      },
    ],
  },
  {
    title: "Lisbon Street Art & Culinary Tour",
    description:
      "Explore Lisbon's vibrant street art scene with a guided walking tour through the city's best murals, followed by a culinary experience sampling local delicacies at hidden food spots.",
    images: [
      "/images/tours/lisbon/street-art.jpg",
      "/images/tours/lisbon/food-market.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Art", "Food", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Joana Pereira",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences and delicious food tastings.",
      },
      {
        question: "What should I wear for the walk?",
        answer:
          "Wear comfortable walking shoes and dress for the weather. We recommend bringing a water bottle and sunscreen.",
      },
      {
        question: "Do we visit any indoor galleries?",
        answer:
          "Yes, we will visit a few indoor galleries showcasing local artists' work, along with outdoor murals throughout the city.",
      },
    ],
  },
];

export default lisbonTours;
