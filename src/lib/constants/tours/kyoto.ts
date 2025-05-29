import { Tour } from "@/lib/interfaces/services/tours";
export const kyotoTours: Tour[] = [
  {
    title: "Fushimi Inari After Hours & Geisha District",
    description:
      "Experience Kyoto's most famous shrine after the crowds depart, followed by an exclusive evening stroll through the atmospheric Gion district with insights into the secretive geisha world.",
    images: [
      "/images/tours/kyoto/fushimi-evening.jpg",
      "/images/tours/kyoto/geisha-district.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 5.0,
    tags: ["Shrines", "Cultural", "Evening"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Akiko Nakamura",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see geisha during the tour?",
        answer:
          "While sightings cannot be guaranteed, our evening tour is timed to coincide with when maiko (apprentice geisha) and geiko (Kyoto's term for fully-qualified geisha) travel between appointments. Your guide will help you understand the etiquette of respectful observation and photography.",
      },
    ],
  },
  {
    title: "Traditional Tea Ceremony & Zen Gardens",
    description:
      "Immerse yourself in Japanese traditions with a private tea ceremony in an authentic tea house, followed by guided meditation and contemplation in Kyoto's most serene Zen gardens.",
    images: [
      "/images/tours/kyoto/tea-ceremony.jpg",
      "/images/tours/kyoto/zen-garden.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Cultural", "Zen", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Midori Tanaka",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Do I need to sit on the floor during the tea ceremony?",
        answer:
          "Traditional tea ceremonies involve sitting on tatami mats in the seiza position (kneeling). However, we can arrange for chairs or different seating if you have mobility concerns. Please inform us in advance so we can make appropriate arrangements.",
      },
    ],
  },
];

export default kyotoTours;
