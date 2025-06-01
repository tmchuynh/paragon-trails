import { Tour } from "@/lib/interfaces/services/tours";

export const palermoTours: Tour[] = [
  {
    title: "Palermo Street Food Tour",
    description:
      "Experience the vibrant street food scene of Palermo with a local guide, tasting traditional dishes and exploring bustling markets.",
    images: [
      "/images/tours/palermo/street-food.jpg",
      "/images/tours/palermo/markets.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Food", "Local", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local specialties including arancini, panelle, and cannoli.",
      },
      {
        question: "Is this tour suitable for vegetarians?",
        answer:
          "Yes, vegetarian options are available. Please inform us of any dietary restrictions in advance.",
      },
    ],
  },
  {
    title: "Historical Walking Tour of Palermo",
    description:
      "Discover the rich history of Palermo on a guided walking tour through its ancient streets and iconic landmarks.",
    images: [
      "/images/tours/palermo/historical-walking.jpg",
      "/images/tours/palermo/cathedral.jpg",
    ],
    duration: "2.5 hours",
    price: "$30",
    rating: 4.7,
    tags: ["History", "Culture", "Sightseeing"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
  },
  {
    title: "Palermo Nightlife Experience",
    description:
      "Explore the vibrant nightlife of Palermo with a local guide, visiting popular bars and clubs for an unforgettable evening.",
    images: [
      "/images/tours/palermo/nightlife.jpg",
      "/images/tours/palermo/bars.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.9,
    tags: ["Nightlife", "Entertainment", "Local"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What types of venues will we visit?",
        answer:
          "We'll visit a mix of traditional bars, modern clubs, and hidden gems known only to locals.",
      },
      {
        question: "Is there a dress code for the nightlife tour?",
        answer:
          "While there is no strict dress code, smart casual attire is recommended for most venues. Some clubs may have specific requirements, so it's best to check in advance.",
      },
    ],
  },
  {
    title: "Cultural Day Tour to Monreale",
    description:
      "Take a day trip to the nearby town of Monreale to visit its stunning cathedral and enjoy panoramic views of Palermo.",
    images: [
      "/images/tours/palermo/monreale-cathedral.jpg",
      "/images/tours/palermo/panorama.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Culture", "History", "Sightseeing"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How do we get to Monreale?",
        answer:
          "The tour includes round-trip transportation from Palermo to Monreale. We will travel by comfortable air-conditioned bus.",
      },
      {
        question: "What should I wear for the cathedral visit?",
        answer:
          "Visitors to the Monreale Cathedral are required to dress modestly. Shoulders and knees must be covered, so please wear appropriate clothing.",
      },
    ],
  },
];
