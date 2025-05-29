import { Tour } from "@/lib/interfaces/services/tours";

export const austinTours: Tour[] = [
  {
    title: "Live Music Crawl & Backstage Access",
    description:
      "Experience Austin's legendary music scene with a local musician guide who provides VIP access to multiple venues, backstage introductions, and insider stories about the city's musical heritage.",
    images: [
      "/images/tours/austin/live-music-venue.jpg",
      "/images/tours/austin/backstage.jpg",
    ],
    duration: "4 hours",
    price: "$79",
    rating: 4.8,
    tags: ["Music", "Nightlife", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Jack Wilson",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What music genres will we experience?",
        answer:
          "Austin's music scene is diverse! Our tours typically include a mix of rock, blues, country, and indie, but each night varies based on who's performing. Let us know your preferences and we'll try to accommodate.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "While the tour is family-friendly, most venues are bars or clubs that may not allow minors after a certain hour. We recommend checking with us in advance if you plan to bring children.",
      },
      {
        question: "Do we need to purchase tickets for the venues?",
        answer:
          "No, your tour ticket includes all venue cover charges. Drinks and food are not included but can be purchased at each location.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably! Austin's music scene is casual, but some venues may have dress codes. We recommend comfortable shoes for walking between venues.",
      },
    ],
  },
  {
    title: "BBQ & Brewery Experience",
    description:
      "Savor Austin's renowned BBQ scene with skip-the-line access at top smokehouses, followed by craft beer tastings at local breweries with an expert food and beverage guide.",
    images: [
      "/images/tours/austin/bbq-platter.jpg",
      "/images/tours/austin/craft-beer.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.9,
    tags: ["Food", "BBQ", "Beer"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Travis Rodriguez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How much BBQ will we actually eat?",
        answer:
          "Come hungry! We visit 3 legendary BBQ spots with substantial tastings at each, sampling brisket, ribs, sausage, and classic sides. The tour also includes 3-4 beer tastings at each brewery we visit.",
      },
      {
        question: "Are vegetarian options available?",
        answer:
          "While BBQ is the star of this tour, we can accommodate vegetarians with advance notice. We can also recommend vegetarian-friendly breweries in the area.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we highly recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any dietary restrictions.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably! We will be walking between venues, so wear comfortable shoes. Austin's BBQ scene is casual, so feel free to dress down.",
      },
    ],
  },
];

export default austinTours;
