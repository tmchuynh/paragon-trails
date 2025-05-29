import { Tour } from "@/lib/interfaces/services/tours";
export const osakaTours: Tour[] = [
  {
    title: "Osaka Street Food & Local Eats Tour",
    description:
      "Discover why Osaka is called 'Japan's Kitchen' with a walking food tour through Dotonbori and local markets, sampling regional specialties like takoyaki, okonomiyaki, and kushi-katsu.",
    images: [
      "/images/tours/osaka/dotonbori-food.jpg",
      "/images/tours/osaka/takoyaki-making.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Food", "Street Food", "Local Cuisine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Kenji Tanaka",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, halal, and most dietary restrictions. Osaka cuisine does offer many options, though some traditional dishes may be modified.",
      },
      {
        question: "Will we be trying raw seafood?",
        answer:
          "The tour focuses on cooked street food specialties, but if you're interested in raw seafood, we can recommend nearby sushi restaurants for after the tour.",
      },
    ],
  },
  {
    title: "Osaka Castle & Samurai Legacy",
    description:
      "Explore the magnificent Osaka Castle with a historian specializing in feudal Japan, learn about samurai traditions, and participate in a traditional Japanese sword demonstration.",
    images: [
      "/images/tours/osaka/osaka-castle.jpg",
      "/images/tours/osaka/samurai-demonstration.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Castle", "Samurai", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Hiroshi Watanabe",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we get to handle real samurai swords?",
        answer:
          "The tour includes a demonstration with authentic historical swords, but handling is limited to specially made practice swords during the optional participation portion for safety and preservation of historical artifacts.",
      },
      {
        question: "Is the castle accessible for those with mobility issues?",
        answer:
          "Yes, the main castle grounds and museum are wheelchair accessible, though some areas may have steep steps. We can provide assistance and alternative viewing options if needed.",
      },
    ],
  },
  {
    title: "Namba Nightlife & Izakaya Experience",
    description:
      "Experience Osaka's vibrant nightlife with a guided tour of Namba's izakayas, sampling local drinks and dishes while learning about the city's after-dark culture.",
    images: [
      "/images/tours/osaka/namba-nightlife.jpg",
      "/images/tours/osaka/izakaya.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Nightlife", "Izakaya", "Local Culture"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Yuki Nakamura",
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "Is this tour suitable for solo travelers?",
        answer:
          "Absolutely! Many solo travelers join our izakaya tours and find it a great way to meet people and experience local culture.",
      },
      {
        question: "What should I wear for the nightlife tour?",
        answer:
          "Dress casually but comfortably. Osaka's nightlife is relaxed, so feel free to wear what you would normally wear out in the evening.",
      },
    ],
  },
];

export default osakaTours;
