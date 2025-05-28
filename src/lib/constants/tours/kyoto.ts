import { Tour } from "@/lib/interfaces/services/tours";

export const kyotoTours: Tour[] = [
  {
    title: "Fushimi Inari Shrine & Bamboo Grove Dawn Tour",
    description:
      "Experience Kyoto's most iconic sites at their most peaceful - before the crowds arrive. Perfect for photography and spiritual contemplation.",
    images: [
      "/images/tours/kyoto/fushimi-inari.jpg",
      "/images/tours/kyoto/bamboo-grove.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 5.0,
    tags: ["Photography", "Spiritual", "Nature"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Kenji Yamamoto",
    tourCategoryId: "photography-expert",
    faqs: [
      {
        question: "How early does this tour start?",
        answer:
          "The tour begins at 5:30am during summer months and 6:30am during winter. The early start is essential to experience these popular sites before the crowds.",
      },
    ],
  },
  {
    title: "Geisha District Evening Walk & Dinner",
    description:
      "Explore Kyoto's historic Gion district at dusk when geiko and maiko may be spotted heading to appointments, followed by a traditional kaiseki dinner.",
    images: [
      "/images/tours/kyoto/gion-evening.jpg",
      "/images/tours/kyoto/kaiseki-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$150",
    rating: 4.9,
    tags: ["Cultural", "Dining", "Evening"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Akiko Tanaka",
    tourCategoryId: "cultural-expert",
    faqs: [
      {
        question: "Are we guaranteed to see geisha?",
        answer:
          "While sightings are common, we cannot guarantee geisha appearances as they follow private schedules. Your guide will share authentic insights into geisha culture regardless.",
      },
    ],
  },
];

export default kyotoTours;
