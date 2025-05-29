import { Tour } from "@/lib/interfaces/services/tours";
export const buenosAiresTours: Tour[] = [
  {
    title: "Tango Experience & Milonga Night",
    description:
      "Immerse yourself in Argentina's passionate dance culture with a private tango lesson, followed by dinner and an authentic milonga (dance hall) experience with local dancers.",
    images: [
      "/images/tours/buenos-aires/tango-lesson.jpg",
      "/images/tours/buenos-aires/milonga.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Tango", "Dance", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Gabriela Mendez",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "I have no dance experience - is this still suitable?",
        answer:
          "Absolutely! Our instructors specialize in teaching beginners, and the private lesson is tailored to your level. The focus is on enjoying the experience and cultural immersion, not dance perfection.",
      },
      {
        question: "What should I wear for the tango lesson?",
        answer:
          "Comfortable clothing that allows for movement is best. Many participants wear dressy casual attire, but you can also wear comfortable shoes suitable for dancing. We recommend avoiding sneakers or overly casual footwear.",
      },
    ],
  },
  {
    title: "Hidden Buenos Aires: Architecture & Street Art",
    description:
      "Discover the city beyond the tourist trail, exploring unique architectural gems, vibrant street art neighborhoods, and local designer boutiques with insights from an urban culture specialist.",
    images: [
      "/images/tours/buenos-aires/street-art.jpg",
      "/images/tours/buenos-aires/hidden-architecture.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Architecture", "Art", "Local Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Diego Ramirez",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Which neighborhoods do we visit?",
        answer:
          "The tour explores the contrasting neighborhoods of Palermo Soho with its street art scene, San Telmo's hidden architectural gems, and the colorful working-class area of La Boca beyond the tourist section of Caminito.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. The walking pace is relaxed, and we can adjust the itinerary to include child-friendly stops like parks or ice cream shops.",
      },
      {
        question: "Can we customize the tour?",
        answer:
          "Absolutely! We can tailor the tour to focus on specific interests such as architecture styles, street art themes, or local crafts. Just let us know your preferences when booking.",
      },
    ],
  },
];

export default buenosAiresTours;
