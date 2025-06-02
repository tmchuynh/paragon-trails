import { Tour } from "@/lib/interfaces/services/tours";

export const istanbulTours: Tour[] = [
  {
    title: "Two Continents & Bosphorus Experience",
    description:
      "Journey through Istanbul's unique position straddling Europe and Asia with a private Bosphorus cruise, visiting landmarks on both continents and enjoying a traditional Turkish meal with spectacular strait views.",
    city: "Istanbul",
    country: "Turkey",
    region: "Marmara Region",
    images: [
      "/images/tours/istanbul/bosphorus-cruise.jpg",
      "/images/tours/istanbul/asian-side.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Bosphorus", "Two Continents", "Scenic"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we stop on the Asian side?",
        answer:
          "Yes, we dock at Üsküdar on the Asian side of Istanbul for approximately 2 hours to explore its historic mosques, authentic local market, and beautiful waterfront promenade. This provides a perfect contrast to the more tourist-oriented European side, showing a more authentic slice of daily Istanbul life.",
      },
      {
        question: "Is the boat private?",
        answer:
          "Yes, this is a private tour with your own dedicated boat and guide. You can customize the itinerary to include specific landmarks or activities along the Bosphorus.",
      },
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress comfortably for a day on the water. We recommend layers, as it can be cooler on the water than on land. Comfortable shoes are also advisable if you plan to explore the Asian side.",
      },
    ],
  },
  {
    title: "Archaeological Wonders of Istanbul",
    description:
      "Explore Istanbul's rich archaeological heritage with a guided tour of the ancient Hippodrome, the Basilica Cistern, and the stunning mosaics of Chora Church, led by an expert in Byzantine history.",
    city: "Istanbul",
    country: "Turkey",
    region: "Marmara Region",
    images: [
      "/images/tours/istanbul/hippodrome.jpg",
      "/images/tours/istanbul/basilica-cistern.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Archaeological", "Byzantine", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "archaeology",
    faqs: [
      {
        question: "What archaeological sites will we visit?",
        answer:
          "The tour includes the Hippodrome of Constantinople, where you'll see the Obelisk of Theodosius, the Serpent Column, and the German Fountain. We'll also explore the Basilica Cistern, an ancient underground water reservoir with stunning columns and atmospheric lighting. Finally, we'll visit Chora Church, famous for its exquisite mosaics and frescoes depicting scenes from the life of Christ.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy the fascinating history and unique architecture of these ancient sites. However, parents should be aware that some areas may have uneven surfaces or stairs.",
      },
      {
        question: "Do we need to book tickets in advance?",
        answer:
          "Yes, we recommend booking tickets in advance for the Basilica Cistern and Chora Church to avoid long lines. Your guide will handle all ticketing to ensure a smooth experience.",
      },
      {
        question: "What should I wear for the archaeological tour?",
        answer:
          "Dress comfortably for walking, as we will be exploring several sites. Comfortable shoes are a must, and we recommend wearing layers as some areas can be cooler, especially the Basilica Cistern. Modest clothing is also appreciated in religious sites.",
      },
    ],
  },
];

export default istanbulTours;
