import { Tour } from "@/lib/interfaces/services/tours";

const machuPicchuTours: Tour[] = [
  {
    title: "Machu Picchu at Sunrise with Archaeologist",
    description:
      "Experience the magic of Machu Picchu at first light with an expert archaeologist guide, entering the site before crowds arrive to witness the sun illuminating the ancient Inca citadel.",
    images: [
      "/images/tours/machu-picchu/sunrise-view.jpg",
      "/images/tours/machu-picchu/inca-ruins.jpg",
    ],
    duration: "Full day",
    price: "$225",
    rating: 4.9,
    tags: ["Archaeological", "Sunrise", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Alejandro Tupayachi",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How early do we need to start?",
        answer:
          "This is an early start tour, beginning with pickup from your Aguas Calientes hotel around 4:30am. This timing allows us to be among the first to enter the site when it opens and experience the magical moment when the sun's rays first illuminate the citadel.",
      },
    ],
  },
  {
    title: "Inca Trail One-Day Express Hike",
    description:
      "Experience the highlights of the legendary Inca Trail in a single day, hiking through cloud forests and ancient ruins to reach Machu Picchu through the iconic Sun Gate (Inti Punku).",
    images: [
      "/images/tours/machu-picchu/inca-trail.jpg",
      "/images/tours/machu-picchu/sun-gate.jpg",
    ],
    duration: "Full day",
    price: "$195",
    rating: 4.8,
    tags: ["Hiking", "Adventure", "Nature"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Manuel Quispe",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is this hike?",
        answer:
          "This is a moderately challenging hike covering approximately 12km (7.5 miles) with significant elevation changes. It takes about 6-7 hours of hiking at altitude (2,100-2,700m). Good physical fitness is required, and we recommend spending at least 2 days in Cusco beforehand to acclimatize to the altitude.",
      },
    ],
  },
];

export default machuPicchuTours;
