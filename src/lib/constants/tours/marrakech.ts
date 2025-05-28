import { Tour } from "@/lib/interfaces/services/tours";

export const marrakechTours: Tour[] = [
  {
    title: "Medina Cultural Walking Tour",
    description:
      "Navigate the labyrinthine streets of Marrakech's ancient medina with a local guide, discovering hidden palaces, artisan workshops, and historic sites beyond the tourist path.",
    images: [
      "/images/tours/marrakech/medina-streets.jpg",
      "/images/tours/marrakech/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cultural", "Walking", "Artisans"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Omar Benali",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will there be aggressive vendors in the souks?",
        answer:
          "Our routes avoid the more aggressive commercial areas, and your guide acts as a buffer against unwanted attention. We focus on authentic artisans who provide low-pressure shopping experiences.",
      },
    ],
  },
  {
    title: "Sahara Desert & Berber Experience",
    description:
      "Journey to the edge of the Sahara for camel trekking across golden dunes, dinner under the stars at a luxury desert camp, and cultural exchange with Berber nomads.",
    images: [
      "/images/tours/marrakech/sahara-camels.jpg",
      "/images/tours/marrakech/desert-camp.jpg",
    ],
    duration: "2 days",
    price: "$295",
    rating: 4.9,
    tags: ["Desert", "Adventure", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ibrahim Amazigh",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How comfortable is the desert accommodation?",
        answer:
          "Our premium desert camp features proper beds with quality linens, private bathroom facilities with hot water, and elegant furnishings that blend traditional design with modern comfort.",
      },
    ],
  },
];

export default marrakechTours;
