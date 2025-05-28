import { Tour } from "@/lib/interfaces/services/tours";

const beijingTours: Tour[] = [
  {
    title: "Great Wall Exclusive: Untouched Sections & Helicopter View",
    description:
      "Experience the Great Wall of China away from the crowds with access to restored and wild sections, plus an optional helicopter flight providing unforgettable aerial perspectives of this wonder of the world.",
    images: [
      "/images/tours/beijing/unrestored-wall.jpg",
      "/images/tours/beijing/wall-helicopter.jpg",
    ],
    duration: "Full day",
    price: "$295",
    rating: 5.0,
    tags: ["Great Wall", "Exclusive", "Aerial"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Wang Feng",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which sections of the Great Wall do we visit?",
        answer:
          "We visit both Mutianyu (a beautifully restored section with fewer crowds than Badaling) and hike a private access path to Jiankou (a dramatic unrestored section). This combination provides both the majestic views of the restored wall and the authentic adventure of walking on the ancient, wild sections where you'll feel like an explorer discovering the wall for the first time.",
      },
    ],
  },
  {
    title: "Forbidden City Behind-the-Scenes & Imperial Treasures",
    description:
      "Gain privileged access to closed sections of Beijing's Forbidden City, exploring imperial quarters and secret gardens while discovering the fascinating stories of emperors, concubines, and court intrigue.",
    images: [
      "/images/tours/beijing/forbidden-city.jpg",
      "/images/tours/beijing/imperial-garden.jpg",
    ],
    duration: "5 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Imperial", "Palace", "Exclusive"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Liu Mei",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which restricted areas will we visit?",
        answer:
          "Our special permit allows access to areas like the Treasure Gallery (Zhenbaoguan), Qianlong Garden complex with its exquisite interiors, and select areas of the Palace of Compassion and Tranquility. These sections contain some of the most spectacular examples of Chinese artistry and design, yet are closed to general visitors or require additional fees and advance reservations.",
      },
    ],
  },
];

export default beijingTours;
