import { Tour } from "@/lib/interfaces/services/tours";

export const daNangTours: Tour[] = [
  {
    title: "Golden Bridge & Ba Na Hills",
    description:
      "Visit the iconic Golden Bridge held by giant hands and explore the whimsical Ba Na Hills French Village with panoramic mountain views.",
    images: [
      "/images/tours/da-nang/golden-bridge.jpg",
      "/images/tours/da-nang/ba-na-hills.jpg",
    ],
    duration: "Full day",
    price: "$90",
    rating: 4.8,
    tags: ["Photography", "Architecture", "Mountain"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Pham Van Hai",
    tourCategoryId: "local-expert",
    faqs: [
      {
        question: "Is there a lot of walking involved?",
        answer:
          "While there is some walking, cable cars connect most attractions at Ba Na Hills, making it accessible for most fitness levels.",
      },
    ],
  },
  {
    title: "Marble Mountains & My Son Sanctuary",
    description:
      "Discover ancient Hindu temples at UNESCO-listed My Son Sanctuary and explore the caves and pagodas of the marble mountains in one fascinating day.",
    images: [
      "/images/tours/da-nang/my-son-sanctuary.jpg",
      "/images/tours/da-nang/marble-mountains.jpg",
    ],
    duration: "8 hours",
    price: "$75",
    rating: 4.7,
    tags: ["UNESCO", "Temples", "Hiking"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Tran Thi Mai",
    tourCategoryId: "archaeology-expert",
    faqs: [
      {
        question: "How difficult is the climb up Marble Mountain?",
        answer:
          "There are approximately 150 steps to the main viewpoint. For those who prefer not to climb, there is an elevator option for an additional fee.",
      },
    ],
  },
];

export default daNangTours;
