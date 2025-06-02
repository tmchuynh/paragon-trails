import { Tour } from "@/lib/interfaces/services/tours";

export const puertoEscondidoTours: Tour[] = [
  {
    title: "Surfing Lessons at Playa Zicatela",
    description:
      "Join a professional instructor for a thrilling surfing lesson at one of Mexico's most famous surf beaches, Playa Zicatela.",
    city: "Puerto Escondido",
    country: "Mexico",
    region: "Oaxaca",
    images: [
      "/images/tours/puerto-escondido/surfing-lessons.jpg",
      "/images/tours/puerto-escondido/zicatela-beach.jpg",
    ],
    duration: "2 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Adventure", "Water Sports", "Beach"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need prior surfing experience?",
        answer:
          "No, this tour is suitable for all levels, including beginners. All equipment is provided.",
      },
      {
        question: "What should I bring?",
        answer:
          "Please bring sunscreen, a swimsuit, and a towel. Water and snacks are also recommended.",
      },
    ],
  },
  {
    title: "Laguna de Manialtepec Bioluminescence Tour",
    description:
      "Experience the magical bioluminescence of Laguna de Manialtepec on a guided night kayak tour.",
    city: "Puerto Escondido",
    country: "Mexico",
    region: "Oaxaca",
    images: [
      "/images/tours/puerto-escondido/bioluminescence-tour.jpg",
      "/images/tours/puerto-escondido/kayaking.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Nature", "Night Tour", "Unique Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nature-experience",
  },
  {
    title: "Cultural Tour of Puerto Escondido Markets",
    description:
      "Explore the vibrant local markets of Puerto Escondido with a local guide, tasting traditional foods and learning about local crafts.",
    city: "Puerto Escondido",
    country: "Mexico",
    region: "Oaxaca",
    images: [
      "/images/tours/puerto-escondido/cultural-tour.jpg",
      "/images/tours/puerto-escondido/local-markets.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.8,
    tags: ["Cultural", "Food", "Local Experience"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You will sample a variety of local dishes, including fresh seafood, traditional Oaxacan snacks, and regional specialties.",
      },
      {
        question: "Are the markets accessible for everyone?",
        answer:
          "Yes, the tour is designed to be accessible for all, but please inform us of any specific needs in advance.",
      },
    ],
  },
  {
    title: "Whale Watching Tour",
    description:
      "Embark on an unforgettable whale watching tour to see humpback whales in their natural habitat during the migration season.",
    city: "Puerto Escondido",
    country: "Mexico",
    region: "Oaxaca",
    images: [
      "/images/tours/puerto-escondido/whale-watching.jpg",
      "/images/tours/puerto-escondido/humpback-whale.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.9,
    tags: ["Nature", "Wildlife", "Adventure"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nature-experience",
    faqs: [
      {
        question: "When is the best time for whale watching?",
        answer:
          "The best time for whale watching in Puerto Escondido is from December to April, during the humpback whale migration season.",
      },
      {
        question: "What should I bring on the tour?",
        answer:
          "Please bring a hat, sunscreen, a camera, and a light jacket. Binoculars are also recommended for a better viewing experience.",
      },
    ],
  },
  {
    title: "Yoga Retreat at Playa Carrizalillo",
    description:
      "Join a rejuvenating yoga retreat at the serene Playa Carrizalillo, perfect for relaxation and mindfulness.",
    city: "Puerto Escondido",
    country: "Mexico",
    region: "Oaxaca",
    images: [
      "/images/tours/puerto-escondido/yoga-retreat.jpg",
      "/images/tours/puerto-escondido/carrizalillo-beach.jpg",
    ],
    duration: "5 days",
    price: "$500",
    rating: 4.8,
    tags: ["Wellness", "Relaxation", "Beach"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What is included in the retreat package?",
        answer:
          "The package includes daily yoga sessions, meditation classes, healthy meals, and accommodation at a beachfront hotel.",
      },
      {
        question: "Do I need to be an experienced yogi?",
        answer:
          "No, the retreat is suitable for all levels, from beginners to advanced practitioners. Classes will be tailored to your experience.",
      },
    ],
  },
  {
    title: "Fishing Charter in Puerto Escondido",
    description:
      "Experience deep-sea fishing with a local captain, targeting species like marlin, tuna, and dorado in the Pacific waters.",
    city: "Puerto Escondido",
    country: "Mexico",
    region: "Oaxaca",
    images: [
      "/images/tours/puerto-escondido/fishing-charter.jpg",
      "/images/tours/puerto-escondido/deep-sea-fishing.jpg",
    ],
    duration: "4 hours",
    price: "$200",
    rating: 4.6,
    tags: ["Adventure", "Fishing", "Water Sports"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What should I bring for the fishing charter?",
        answer:
          "Please bring sunscreen, a hat, sunglasses, and any personal fishing gear you prefer. We provide all necessary fishing equipment.",
      },
      {
        question: "Is fishing gear provided?",
        answer:
          "Yes, all fishing gear, bait, and safety equipment are provided. You just need to bring your enthusiasm!",
      },
    ],
  },
];
