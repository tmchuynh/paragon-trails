import { Tour } from "@/lib/interfaces/services/tours";

const hoChiMinhTours: Tour[] = [
  {
    title: "Cu Chi Tunnels & Vietnam War History",
    description:
      "Journey through Vietnam's complex wartime history with an expert guide at the Cu Chi Tunnels complex, exploring underground networks, hidden trapdoors, and gaining historical perspective from both sides of the conflict.",
    images: [
      "/images/tours/ho-chi-minh/cu-chi-tunnels.jpg",
      "/images/tours/ho-chi-minh/war-remnants.jpg",
    ],
    duration: "7 hours",
    price: "$65",
    rating: 4.8,
    tags: ["History", "War", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mr. Tran Van Hai",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Can we go inside the tunnels?",
        answer:
          "Yes, you can enter a section of the tunnels that has been slightly enlarged for visitors, though they remain quite narrow and low. This is optional, and those who prefer not to go underground can still experience most of the tour. The tunnels are not recommended for people with claustrophobia or mobility issues.",
      },
    ],
  },
  {
    title: "Saigon Street Food Adventure",
    description:
      "Discover the vibrant flavors of Vietnamese cuisine with a guided food tour through bustling markets and hidden street food stalls, sampling regional specialties with insights from a local foodie expert.",
    images: [
      "/images/tours/ho-chi-minh/street-food.jpg",
      "/images/tours/ho-chi-minh/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Food", "Markets", "Local"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ms. Nguyen Thi Mai",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the food safe for foreigners?",
        answer:
          "We carefully select vendors with the highest standards of hygiene and fresh ingredients. Your guide will explain safe eating practices and can recommend the best dishes based on your spice tolerance and dietary preferences. We provide hand sanitizer and bottled water throughout the tour.",
      },
    ],
  },
];

export default hoChiMinhTours;
