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
      {
        question: "What should I wear?",
        answer:
          "Comfortable clothing and shoes are recommended. Bring a light jacket as it can be cooler in the mountains.",
      },
      {
        question: "Are meals included in the tour?",
        answer: "Yes, lunch is included at a local restaurant in Ba Na Hills.",
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
      {
        question: "What should I bring for the My Son visit?",
        answer:
          "Wear comfortable shoes for walking on uneven terrain. Sunscreen and a hat are recommended as it can get hot.",
      },
      {
        question: "Is there a dress code for visiting temples?",
        answer:
          "Yes, please wear modest clothing that covers your shoulders and knees when visiting My Son Sanctuary.",
      },
    ],
  },
  {
    title: "Hoi An Ancient Town Day Trip",
    description:
      "Experience the charm of Hoi An with its well-preserved ancient architecture, lantern-lit streets, and vibrant markets. Enjoy a guided walking tour and free time to explore.",
    images: [
      "/images/tours/da-nang/hoi-an-ancient-town.jpg",
      "/images/tours/da-nang/hoi-an-lanterns.jpg",
    ],
    duration: "Full day",
    price: "$60",
    rating: 4.9,
    tags: ["Cultural", "Historical", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nguyen Van An",
    tourCategoryId: "cultural-expert",
    faqs: [
      {
        question: "Is transportation included?",
        answer:
          "Yes, round-trip transportation from Da Nang to Hoi An is included in the tour price.",
      },
      {
        question: "What should I wear?",
        answer:
          "Comfortable walking shoes are recommended. The weather can be hot, so light clothing is advisable.",
      },
      {
        question: "Are meals included?",
        answer:
          "Lunch at a local restaurant in Hoi An is included in the tour package.",
      },
    ],
  },
  {
    title: "Da Nang City Highlights Tour",
    description:
      "Explore the vibrant city of Da Nang, visiting the Dragon Bridge, Han River, and local markets. Experience the blend of modernity and tradition in this coastal city.",
    images: [
      "/images/tours/da-nang/dragon-bridge.jpg",
      "/images/tours/da-nang/han-river.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.6,
    tags: ["City Tour", "Local Culture", "Photography"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Le Thi Hoa",
    tourCategoryId: "city-expert",
    faqs: [
      {
        question: "What time does the Dragon Bridge light up?",
        answer:
          "The Dragon Bridge lights up every evening at 9 PM with a spectacular fire-breathing show on weekends.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and includes stops at parks and playgrounds.",
      },
      {
        question: "Are there any shopping opportunities?",
        answer:
          "Yes, we will visit local markets where you can shop for souvenirs and local handicrafts.",
      },
    ],
  },
];

export default daNangTours;
