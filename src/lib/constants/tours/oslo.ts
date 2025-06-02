import { Tour } from "@/lib/interfaces/services/tours";

export const osloTours: Tour[] = [
  {
    title: "Oslo Fjord & Islands Cruise",
    description:
      "Glide through the stunning Oslo Fjord on a private sailing tour, exploring hidden islands, secluded beaches, and enjoying fresh Norwegian seafood prepared by an onboard chef.",
    city: "Oslo",
    country: "Norway",
    region: "Eastern Norway",
    images: [
      "/images/tours/oslo/oslo-fjord.jpg",
      "/images/tours/oslo/islands-cruise.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Sailing", "Nature", "Fjords"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this tour weather-dependent?",
        answer:
          "Yes, for safety reasons, tours may be rescheduled in case of heavy rain or strong winds. We monitor forecasts closely and will contact you 24 hours in advance if weather conditions are unsuitable.",
      },
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress in layers and wear comfortable, weather-appropriate clothing. A light jacket is recommended, as it can get breezy on the water. Don't forget sunscreen and a hat!",
      },
      {
        question: "Can we swim during the tour?",
        answer:
          "Yes! We often stop at secluded beaches where you can take a refreshing swim. Bring a swimsuit and towel if you wish to swim.",
      },
    ],
  },
  {
    title: "Viking History & Folk Museum Tour",
    description:
      "Step back in time to explore Norway's Viking heritage with an expert historian guiding you through the Viking Ship Museum and the open-air Norwegian Folk Museum.",
    city: "Oslo",
    country: "Norway",
    region: "Eastern Norway",
    images: [
      "/images/tours/oslo/viking-ship.jpg",
      "/images/tours/oslo/folk-museum.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Vikings", "History", "Museums"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! Our guides are excellent at engaging children with fascinating Viking stories and hands-on activities at the Folk Museum. The Viking Ship Museum is particularly exciting for children of all ages.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves moderate walking, approximately 2-3 km (1.2-1.9 miles) total, with some uneven surfaces at the Folk Museum. Comfortable shoes are recommended.",
      },
      {
        question: "Are there any interactive elements?",
        answer:
          "Yes! At the Norwegian Folk Museum, children can participate in traditional crafts and games, making it a fun and educational experience for the whole family.",
      },
    ],
  },
  {
    title: "Oslo Culinary Experience",
    description:
      "Taste your way through Oslo's vibrant food scene with a guided tour of local markets, artisanal shops, and hidden gems, sampling traditional Norwegian dishes and modern cuisine.",
    city: "Oslo",
    country: "Norway",
    region: "Eastern Norway",
    images: [
      "/images/tours/oslo/culinary-tour.jpg",
      "/images/tours/oslo/local-markets.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Culinary", "Food", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of tastings, such as traditional Norwegian seafood, local cheeses, artisanal breads, and modern fusion dishes. We can accommodate most dietary restrictions with advance notice.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 3 km (1.9 miles) at a leisurely pace with plenty of stops for tastings. It's suitable for all fitness levels.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and children will enjoy the interactive food experiences. We can also provide kid-friendly food options upon request.",
      },
    ],
  },
];

export default osloTours;
