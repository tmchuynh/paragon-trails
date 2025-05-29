import { Tour } from "@/lib/interfaces/services/tours";
export const bolognaTours: Tour[] = [
  {
    title: "Traditional Pasta Making with Nonna",
    description:
      "Join a genuine Italian grandmother in her home kitchen to learn the time-honored techniques of handmade pasta, from tortellini to tagliatelle, followed by a family-style meal with local wines.",
    images: [
      "/images/tours/bologna/pasta-making.jpg",
      "/images/tours/bologna/tortellini-class.jpg",
    ],
    duration: "4 hours",
    price: "$110",
    rating: 5.0,
    tags: ["Cooking Class", "Pasta", "Homestyle"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nonna Maria Rossi",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is this class suitable for beginners?",
        answer:
          "Absolutely! Nonna Maria has been teaching pasta-making to her family for generations and has a special talent for guiding beginners. No experience is necessary, just a love of Italian food.",
      },
      {
        question: "What dietary restrictions can be accommodated?",
        answer:
          "We can accommodate vegetarian diets, but please inform us in advance of any allergies or specific dietary needs. Unfortunately, we cannot accommodate gluten-free diets as traditional pasta is made with wheat flour.",
      },
      {
        question: "Will we be able to take home any pasta?",
        answer:
          "Yes, you will make enough pasta to enjoy a generous portion during the meal, and you can take home any leftovers. Nonna Maria will also provide you with her family recipes so you can recreate the dishes at home.",
      },
    ],
  },
  {
    title: "Bologna's Secret Porticoes & Towers",
    description:
      "Discover Bologna's architectural marvels with a local art historian, exploring medieval towers with private access and the UNESCO-listed portico network, including hidden sections closed to the public.",
    images: [
      "/images/tours/bologna/asinelli-tower.jpg",
      "/images/tours/bologna/hidden-porticoes.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Architecture", "Medieval", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Elena Bianchi",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Does this tour involve a lot of climbing?",
        answer:
          "Yes, accessing the Asinelli Tower involves climbing approximately 498 steps, which requires moderate fitness. However, the climb is well worth it for the spectacular panoramic views of Bologna's red rooftops.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No, the tour price includes all entrance fees to the towers and porticoes. We recommend bringing some cash for optional refreshments at local cafes during the tour.",
      },
      {
        question: "Can children join this tour?",
        answer:
          "Yes, children are welcome, but please note that the tower climb may be challenging for very young children. We recommend this tour for ages 10 and up.",
      },
    ],
  },
];

export default bolognaTours;
