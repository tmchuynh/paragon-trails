import { Tour } from "@/lib/interfaces/services/tours";

export const tokyoTours: Tour[] = [
  {
    title: "Tokyo After Dark: Izakaya Experience",
    description:
      "Experience Tokyo's vibrant nightlife with a local guide who will take you to authentic izakaya bars frequented by locals.",
    images: [
      "/images/tours/tokyo/izakaya.jpg",
      "/images/tours/tokyo/shinjuku-night.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nightlife", "Food", "Drinks", "Local"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Akira Tanaka",
    tourCategoryId: "food-culture",
    faqs: [
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "Yes, there are non-alcoholic options available and the food experience is enjoyable for everyone.",
      },
    ],
  },
  {
    title: "Traditional Tokyo: Temples, Gardens & Tea Ceremony",
    description:
      "Discover Tokyo's peaceful traditional side with visits to ancient temples, serene gardens, and participation in an authentic tea ceremony.",
    images: [
      "/images/tours/tokyo/meiji-shrine.jpg",
      "/images/tours/tokyo/tea-ceremony.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Cultural", "Spiritual", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Yuko Nakamura",
    tourCategoryId: "cultural-expert",
    faqs: [
      {
        question: "What should I wear for the tea ceremony?",
        answer:
          "Comfortable clothing is fine, but avoid very casual attire like shorts or tank tops. You'll need to remove shoes, so wear socks and easily removable footwear.",
      },
    ],
  },
];

export default tokyoTours;
