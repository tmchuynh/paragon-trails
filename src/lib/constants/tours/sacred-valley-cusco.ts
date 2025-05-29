import { Tour } from "@/lib/interfaces/services/tours";

export const sacredValleyCuscoTours: Tour[] = [
  {
    title: "Machu Picchu Sunrise Experience",
    description:
      "Be among the first to enter the ancient Inca citadel and witness the magical moment when the morning sun illuminates the sacred stones of this wonder of the world.",
    images: [
      "/images/tours/sacred-valley/machu-picchu-sunrise.jpg",
      "/images/tours/sacred-valley/inca-ruins.jpg",
    ],
    duration: "Full day",
    price: "$195",
    rating: 5.0,
    tags: ["UNESCO", "Archaeology", "Hiking"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Carlos Condori",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "The site involves significant walking on uneven surfaces and many stairs at high altitude (7,970 feet). We move at a comfortable pace with plenty of breaks, but moderate fitness is recommended.",
      },
    ],
  },
  {
    title: "Sacred Valley Andean Communities & Markets",
    description:
      "Connect with living Inca culture in traditional villages where ancient agricultural techniques, textile arts, and customs continue in the stunning Sacred Valley landscape.",
    images: [
      "/images/tours/sacred-valley/pisac-market.jpg",
      "/images/tours/sacred-valley/andean-textiles.jpg",
    ],
    duration: "8 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Cultural", "Handicrafts", "Markets"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Maria Quispe",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "Are the handicrafts authentic?",
        answer:
          "Yes, we visit communities where you can watch master weavers creating textiles using traditional techniques and natural dyes passed down through generations, with opportunity to purchase directly from the artisans.",
      },
    ],
  },
  {
    title: "Cusco City & Inca Heritage Tour",
    description:
      "Explore the historic capital of the Inca Empire with a local guide, visiting key archaeological sites, colonial architecture, and vibrant markets that showcase Cusco's rich cultural tapestry.",
    images: [
      "/images/tours/sacred-valley/cusco-cathedral.jpg",
      "/images/tours/sacred-valley/sacsayhuaman.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Historical", "UNESCO", "Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Juan Carlos Huamaní",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are essential as we will be exploring both the city and archaeological sites. Dress in layers to accommodate changing weather conditions, and bring a hat and sunscreen for sun protection.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with fascinating stories and interactive elements.",
      },
    ],
  },
];

export default sacredValleyCuscoTours;
