import { Tour } from "@/lib/interfaces/services/tours";

export const dubaiTours: Tour[] = [
  {
    title: "Desert Safari & Bedouin Experience",
    description:
      "Experience the thrill of dune bashing, camel riding, and traditional Bedouin hospitality with dinner under the stars in the Arabian Desert.",
    images: [
      "/images/tours/dubai/dune-bashing.jpg",
      "/images/tours/dubai/desert-camp.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Adventure", "Desert", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ahmed Al Mansoori",
    tourCategoryId: "desert-expert",
    faqs: [
      {
        question: "Is dune bashing safe?",
        answer:
          "Yes, our drivers are highly experienced and the vehicles are specially equipped for desert driving. However, it's not recommended for pregnant women or those with back problems.",
      },
    ],
  },
  {
    title: "Modern Dubai: Burj Khalifa & City Tour",
    description:
      "Skip the lines at the world's tallest building for incredible views, then explore Dubai's most impressive modern landmarks and architectural wonders.",
    images: [
      "/images/tours/dubai/burj-khalifa.jpg",
      "/images/tours/dubai/dubai-marina.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Architecture", "Luxury", "Photography"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Layla Rahman",
    tourCategoryId: "city-expert",
    faqs: [
      {
        question: "Which floor does the tour visit in Burj Khalifa?",
        answer:
          "Our standard tour includes access to the 124th and 125th floor observation decks. For an additional fee, we can arrange access to the premium 'At The Top SKY' on the 148th floor.",
      },
    ],
  },
];

export default dubaiTours;
