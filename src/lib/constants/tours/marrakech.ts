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
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We tailor the experience to be engaging for all ages, with opportunities to interact with local craftspeople and learn about their trades.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are essential, as we will cover uneven cobblestone streets. Lightweight, breathable clothing is recommended due to the warm climate.",
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
      {
        question: "What should I pack for the desert?",
        answer:
          "We recommend packing layers for temperature changes, a hat, sunscreen, and comfortable shoes for walking. A small backpack for day trips is also useful.",
      },
      {
        question: "Is the camel ride suitable for beginners?",
        answer:
          "Yes, our camels are well-trained and suitable for all experience levels. Your guide will provide instructions and support throughout the ride.",
      },
    ],
  },
  {
    title: "Atlas Mountains Hiking & Local Cuisine",
    description:
      "Hike through the stunning Atlas Mountains, visiting traditional Berber villages, and enjoy a home-cooked meal with a local family in their mountain home.",
    images: [
      "/images/tours/marrakech/atlas-hiking.jpg",
      "/images/tours/marrakech/berber-cuisine.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Nature", "Hiking", "Culinary"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Fatima Zahra",
    tourCategoryId: "nature",
    faqs: [
      {
        question: "What level of fitness is required for the hike?",
        answer:
          "The hike is moderate, suitable for those with a basic level of fitness. We cover approximately 8km on well-marked trails with some elevation gain.",
      },
      {
        question: "Will we have a chance to interact with local families?",
        answer:
          "Yes, the highlight of this tour is sharing a meal with a Berber family, where you can learn about their culture and daily life in the mountains.",
      },
      {
        question: "What should I wear for the hike?",
        answer:
          "Comfortable hiking shoes are essential. Dress in layers to accommodate changing temperatures, and bring a light jacket or sweater for higher elevations.",
      },
    ],
  },
];

export default marrakechTours;
