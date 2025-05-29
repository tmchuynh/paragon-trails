import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bologna", "culinary").name,
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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("bologna", "historical").name,
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
  {
    title: "Bologna Food & Wine Walking Tour",
    description:
      "Experience Bologna's culinary delights with a guided walking tour through the city's historic markets, sampling local cheeses, cured meats, and wines, ending with a traditional aperitivo at a hidden enoteca.",
    images: [
      "/images/tours/bologna/food-market.jpg",
      "/images/tours/bologna/wine-tasting.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Wine", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bologna", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we sample?",
        answer:
          "You'll taste a variety of local specialties including Parmigiano Reggiano cheese, prosciutto di Parma, balsamic vinegar, and traditional Bolognese sauces. Vegetarian options are available upon request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We can provide child-friendly food options and activities to keep younger participants engaged.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any dietary restrictions.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably for walking! Bologna's streets are mostly cobblestone, so comfortable shoes are recommended. The weather can vary, so check the forecast before your tour.",
      },
    ],
  },
  {
    title: "Bologna's Hidden Canals & Secret Gardens",
    description:
      "Explore Bologna's lesser-known waterways and tranquil gardens with a local guide, visiting hidden canals that date back to the Middle Ages and serene green spaces tucked away from the bustling city center.",
    images: [
      "/images/tours/bologna/canal.jpg",
      "/images/tours/bologna/garden.jpg",
    ],
    duration: "2.5 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Nature", "Hidden Gems", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("bologna", "wellness").name,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Are the canals accessible by foot?",
        answer:
          "Yes, the tour involves walking along the canals and through gardens, which are all accessible on foot. Some areas may have uneven surfaces, so comfortable shoes are recommended.",
      },
      {
        question: "Is this tour suitable for people with mobility issues?",
        answer:
          "While most of the tour is accessible, some sections may be challenging for those with severe mobility issues due to cobblestone paths and steps. Please contact us to discuss specific needs before booking.",
      },
      {
        question: "What should I bring?",
        answer:
          "We recommend bringing a water bottle, sunscreen, and a camera to capture the beautiful scenery. A light jacket may be useful depending on the season.",
      },
    ],
  },
  {
    title: "Bologna's Art & Culture Evening Tour",
    description:
      "Experience Bologna's vibrant art scene with an evening walking tour, visiting contemporary galleries, street art hotspots, and ending with a live performance at a local theater or music venue.",
    images: [
      "/images/tours/bologna/art-gallery.jpg",
      "/images/tours/bologna/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Art", "Culture", "Evening Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bologna", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of art will we see?",
        answer:
          "The tour includes visits to contemporary art galleries, street art murals, and public installations. We also discuss the influence of Bologna's rich cultural history on its modern art scene.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and storytelling about Bologna's art and culture.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any special requests.",
      },
    ],
  },
];

export default bolognaTours;
