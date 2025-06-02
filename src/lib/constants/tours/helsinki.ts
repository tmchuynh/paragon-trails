import { Tour } from "@/lib/interfaces/services/tours";
export const helsinkiTours: Tour[] = [
  {
    title: "Finnish Sauna Journey & Ice Swimming",
    description:
      "Experience authentic Finnish sauna culture with visits to different types of saunas, from traditional smoke saunas to modern design saunas, with optional ice swimming in the sea or a lake.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/traditional-sauna.jpg",
      "/images/tours/helsinki/ice-swimming.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Sauna", "Wellness", "Traditional"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isCulinary: false,
    isSpiritual: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Do I need to be naked in the sauna?",
        answer:
          "Traditional Finnish saunas are typically enjoyed nude, but we provide private facilities and options to wear a swimsuit if preferred. Gender-separated saunas are standard, with towels and clear etiquette guidance provided.",
      },
      {
        question: "Is ice swimming safe?",
        answer:
          "Yes, ice swimming is a popular Finnish tradition. We provide safety gear, and our guides ensure that all participants are comfortable and safe. Beginners are welcome, and we start with a brief introduction to the practice.",
      },
    ],
    availableDates: [
      "2024-01-15",
      "2024-01-16",
      "2024-01-17",
      "2024-01-18",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-22",
      "2024-01-23",
      "2024-01-24",
      "2024-01-25",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-01-29",
      "2024-01-30",
      "2024-01-31",
      "2024-02-01",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-05",
      "2024-02-06",
      "2024-02-07",
      "2024-02-08",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
    ],
    inclusions: [
      "Guided sauna experience",
      "Ice swimming gear (if applicable)",
      "Towel and sauna attire",
      "Light refreshments",
    ],
    exclusions: [
      "Transportation to sauna locations",
      "Personal expenses",
      "Tips for the guide",
    ],
    itinerary: [
      "7:00 AM - Meet at the designated sauna location",
      "7:15 AM - Introduction to Finnish sauna culture",
      "7:30 AM - Visit to the first sauna (traditional smoke sauna)",
      "8:15 AM - Optional ice swimming session",
      "8:45 AM - Visit to the second sauna (modern design sauna)",
      "9:30 AM - Relaxation and refreshments",
      "10:00 AM - End of the tour",
    ],
    meetingPoint: {
      address: "Helsinki City Center, Uusimaa, Finland",
      coordinates: {
        latitude: 60.1695,
        longitude: 24.9354,
      },
      instructions:
        "Meet at the main entrance of the first sauna location. Look for your guide holding a sign with your tour name.",
    },
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
  },
  {
    title: "Helsinki Design District & Architecture Tour",
    description:
      "Explore the world-renowned Finnish design scene with visits to flagship stores, hidden boutiques, and architectural masterpieces from Alvar Aalto to contemporary innovators.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/design-district.jpg",
      "/images/tours/helsinki/aalto-architecture.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Design", "Architecture", "Shopping"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this a shopping tour?",
        answer:
          "While we visit several design shops, the focus is on understanding Finnish design philosophy and architectural innovation. Shopping opportunities exist but are secondary to the cultural and educational experience.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Dress comfortably for walking, as we will explore various neighborhoods. Comfortable shoes are recommended, and weather-appropriate clothing is essential, especially in colder months.",
      },
    ],
  },
  {
    title: "Historical Helsinki & Fortress of Suomenlinna",
    description:
      "Discover Helsinki's rich history with a guided tour of the city's key historical sites, followed by a ferry ride to the UNESCO World Heritage site of Suomenlinna, an 18th-century sea fortress.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/suomenlinna-fortress.jpg",
      "/images/tours/helsinki/historical-helsinki.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["History", "Walking Tour"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How do we get to Suomenlinna?",
        answer:
          "We take a short ferry ride from the Market Square in Helsinki. The ferry ride itself offers beautiful views of the archipelago.",
      },
      {
        question: "Is there an entrance fee for Suomenlinna?",
        answer:
          "No, the fortress is free to enter, but some museums and exhibitions within may have a small fee.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring both the city and the fortress on foot. Weather-appropriate clothing is also essential.",
      },
    ],
  },
  {
    title: "Helsinki Food Tour: Local Flavors & Markets",
    description:
      "Taste your way through Helsinki's culinary scene with a guided food tour that includes visits to local markets, traditional eateries, and tastings of Finnish delicacies like rye bread, salmon soup, and cloudberry jam.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/food-market.jpg",
      "/images/tours/helsinki/finnish-cuisine.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.8,
    tags: ["Food", "Culture", "Local Cuisine"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and gluten-free diets with prior notice. Please inform us of any allergies or dietary needs when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of traditional Finnish foods such as rye bread, salmon soup, reindeer meat, and local cheeses, along with sweet treats like cinnamon buns and cloudberry jam.",
      },
    ],
  },
];
export default helsinkiTours;
