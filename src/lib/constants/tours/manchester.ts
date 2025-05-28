import { Tour } from "@/lib/interfaces/services/tours";

const manchesterTours: Tour[] = [
  {
    title: "Manchester Music Scene Explorer",
    description:
      "Discover the city that gave birth to The Smiths, Joy Division, Oasis, and countless influential bands on a tour through legendary music venues, recording studios, and the neighborhoods that shaped these iconic sounds.",
    images: [
      "/images/tours/manchester/hacienda-site.jpg",
      "/images/tours/manchester/salford-lads-club.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Music", "Cultural", "Alternative"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ian Brown",
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Do we need to be familiar with Manchester bands to enjoy this tour?",
        answer:
          "Not at all! While fans will recognize many references, our guide provides context and plays music samples throughout the tour. You'll leave with an appreciation of Manchester's music scene and its cultural significance regardless of your prior knowledge.",
      },
    ],
  },
  {
    title: "Industrial Revolution Heritage Experience",
    description:
      "Step back in time to the birth of the industrial age with visits to restored cotton mills, canal networks, and workers' housing that tell the story of how Manchester changed the world forever.",
    images: [
      "/images/tours/manchester/science-industry-museum.jpg",
      "/images/tours/manchester/ancoats-mills.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Industrial Heritage", "History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Emily Watson",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Why is Manchester considered the first industrial city?",
        answer:
          "Manchester was the world's first industrialized city, transforming from a small market town to a manufacturing powerhouse in the late 18th century. Our tour explains how the perfect storm of technological innovation, transportation networks, natural resources, and entrepreneurial spirit made Manchester the template for industrial cities worldwide.",
      },
    ],
  },
];

export default manchesterTours;
