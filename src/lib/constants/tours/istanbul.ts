import { Tour } from "@/lib/interfaces/services/tours";

const istanbulTours: Tour[] = [
  {
    title: "Bosphorus Luxury Yacht Cruise",
    description:
      "Cruise between Europe and Asia on a private yacht, enjoying panoramic views of Ottoman palaces, fortresses, and waterfront mansions with gourmet refreshments onboard.",
    images: [
      "/images/tours/istanbul/bosphorus-cruise.jpg",
      "/images/tours/istanbul/waterfront-mansion.jpg",
    ],
    duration: "3 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Yacht", "Waterfront", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mehmet Yilmaz",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What refreshments are included?",
        answer:
          "The cruise includes a selection of Turkish appetizers (meze), seasonal fruits, desserts, unlimited soft drinks, tea, and coffee. Alcoholic beverages are available for an additional charge.",
      },
    ],
  },
  {
    title: "Grand Bazaar Treasure Hunt & Artisan Workshops",
    description:
      "Navigate the labyrinthine Grand Bazaar with a local expert guide who introduces you to hidden workshops, secret courtyards, and master craftspeople away from tourist areas.",
    images: [
      "/images/tours/istanbul/grand-bazaar.jpg",
      "/images/tours/istanbul/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Shopping", "Crafts", "Culture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ayşe Kaya",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "Will there be pressure to buy things?",
        answer:
          "Absolutely not. This tour focuses on cultural exploration rather than shopping. Your guide acts as a buffer against aggressive selling tactics and takes you to authentic workshops where browsing is welcomed without obligation.",
      },
    ],
  },
];

export default istanbulTours;
