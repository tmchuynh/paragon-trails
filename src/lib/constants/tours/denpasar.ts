import { Tour } from "@/lib/interfaces/services/tours";

export const denpasarTours: Tour[] = [
  {
    title: "Balinese Temples & Cultural Heritage",
    description:
      "Discover Bali's spiritual side with visits to ancient water temples, clifftop sanctuaries, and a traditional Balinese compound where you'll witness ceremonial preparations and offerings.",
    images: [
      "/images/tours/denpasar/water-temple.jpg",
      "/images/tours/denpasar/temple-ceremony.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Spiritual", "Cultural", "Architecture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I wear to visit the temples?",
        answer:
          "Modest attire is required. Both men and women should cover shoulders and knees. We provide traditional sarongs and sashes at each temple, but please dress respectfully.",
      },
      {
        question: "Are the temples accessible for all ages?",
        answer:
          "Yes, the tour is designed to be family-friendly. However, some temple sites may involve stairs or uneven paths, so comfortable walking shoes are recommended.",
      },
      {
        question: "Will we participate in any ceremonies?",
        answer:
          "Yes, if available, you may have the opportunity to observe or participate in a local ceremony, such as offering prayers or blessings. Your guide will explain the significance of each ritual.",
      },
    ],
  },
  {
    title: "Balinese Home Cooking & Market Tour",
    description:
      "Start at a local market to select fresh ingredients, then travel to a traditional Balinese home where you'll learn authentic cooking techniques and prepare a multi-course feast.",
    images: [
      "/images/tours/denpasar/cooking-class.jpg",
      "/images/tours/denpasar/market-tour.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cooking", "Market", "Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need cooking experience?",
        answer:
          "No experience necessary! Our hosts will guide you through each step of preparing authentic Balinese dishes, from basic techniques to complex flavors. Everyone succeeds and enjoys the meal together afterward.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions or allergies in advance. We can accommodate vegetarian, vegan, and gluten-free diets with prior notice.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your accommodation to the market and cooking location.",
      },
    ],
  },
  {
    title: "Denpasar City & Art Scene Tour",
    description:
      "Explore the vibrant art and culture of Denpasar with visits to local galleries, museums, and street art installations, guided by a local artist who shares insights into Bali's contemporary art scene.",
    images: [
      "/images/tours/denpasar/art-gallery.jpg",
      "/images/tours/denpasar/street-art.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culture",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring various neighborhoods on foot.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Absolutely! We encourage you to take photos of the art and cultural sites we visit.",
      },
    ],
  },
  {
    title: "Denpasar Night Market & Street Food Adventure",
    description:
      "Experience the bustling atmosphere of Denpasar's night market, sampling a variety of local street foods, from satay to desserts, while learning about Balinese culinary traditions.",
    images: [
      "/images/tours/denpasar/night-market.jpg",
      "/images/tours/denpasar/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Food", "Night Market", "Local Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local dishes including satay, nasi goreng, gado-gado, and traditional Balinese desserts. Vegetarian options are available.",
      },
      {
        question: "Is the food safe to eat?",
        answer:
          "Yes, we only visit reputable vendors known for their hygiene and quality. Your guide will ensure you have a safe and enjoyable culinary experience.",
      },
      {
        question: "Can we buy souvenirs at the market?",
        answer:
          "Absolutely! The night market offers a range of handicrafts, clothing, and souvenirs that you can purchase during your visit.",
      },
    ],
  },
];

export default denpasarTours;
