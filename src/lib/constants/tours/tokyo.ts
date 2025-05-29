import { Tour } from "@/lib/interfaces/services/tours";
export const tokyoTours: Tour[] = [
  {
    title: "Tokyo After Dark: Izakaya & Hidden Bars",
    description:
      "Experience Tokyo's legendary nightlife with a local expert who guides you through traditional izakaya pubs, secret speakeasies, and vibrant entertainment districts not found in guidebooks.",
    images: [
      "/images/tours/tokyo/golden-gai.jpg",
      "/images/tours/tokyo/hidden-izakaya.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nightlife", "Food & Drink", "Local Culture"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Takashi Yamamoto",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "How much food and drink is included?",
        answer:
          "The tour includes 3 drink tickets and food tastings at 3-4 establishments. Additional food and drinks can be purchased separately. We visit authentic local spots where even non-alcoholic options are culturally interesting.",
      },
    ],
  },
  {
    title: "Tokyo Technology & Innovation Tour",
    description:
      "Explore cutting-edge Japan with visits to technology showrooms, concept stores, and electronics districts. Experience the latest innovations from robots to virtual reality alongside a tech industry insider.",
    images: [
      "/images/tours/tokyo/robot-restaurant.jpg",
      "/images/tours/tokyo/akihabara.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Technology", "Modern", "Interactive"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Haruki Tanaka",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is there an age requirement for this tour?",
        answer:
          "This tour is suitable for all ages, though some robot shows have minimum age requirements (typically 7+). We can customize the itinerary based on your group's interests and ages, focusing on either fun tech experiences or more in-depth industry insights.",
      },
    ],
  },
  {
    title: "Tokyo Street Food & Market Tour",
    description:
      "Discover Tokyo's vibrant street food scene with a local guide, sampling everything from classic yakitori to trendy fusion dishes at bustling markets and hidden stalls.",
    images: [
      "/images/tours/tokyo/street-food.jpg",
      "/images/tours/tokyo/tsukiji-market.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Food", "Market", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Yuki Sato",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of street foods such as yakitori, takoyaki, okonomiyaki, and seasonal specialties. We also visit local markets where you can sample fresh seafood, fruits, and unique snacks.",
      },
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarian diets with advance notice. Many street food vendors offer delicious vegetarian options like grilled vegetables, tofu dishes, and seasonal vegetable tempura.",
      },
    ],
  },
];

export default tokyoTours;
