import { Tour } from "@/lib/interfaces/services/tours";
export const hoChiMinhTours: Tour[] = [
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
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly, but please note that the tunnels can be cramped and dark. Children should be accompanied by an adult at all times. We recommend bringing a flashlight for younger children who may want to explore the tunnels.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Wear comfortable clothing and sturdy shoes suitable for walking and crawling through the tunnels. Lightweight, breathable fabrics are best due to the warm climate. We also recommend bringing a hat, sunscreen, and insect repellent.",
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
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local favorites, including pho, banh mi, fresh spring rolls, and unique desserts. We can accommodate dietary restrictions, so please inform us in advance if you have any allergies or preferences.",
      },
      {
        question: "Do I need to bring cash for the food tour?",
        answer:
          "No, the tour price includes all food samples. However, you may want to bring some cash for optional purchases or souvenirs at the markets.",
      },
    ],
  },
];

export default hoChiMinhTours;
