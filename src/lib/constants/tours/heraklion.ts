import { Tour } from "@/lib/interfaces/services/tours";

export const heraklionTours: Tour[] = [
  {
    title: "Knossos Palace & Minoan Civilization",
    description:
      "Journey back 4,000 years with an archaeologist guide who brings the ancient Minoan civilization to life at the legendary Palace of Knossos and Archaeological Museum of Heraklion.",
    images: [
      "/images/tours/heraklion/knossos-palace.jpg",
      "/images/tours/heraklion/archaeological-museum.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Archaeology", "Ancient Civilization", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question:
          "How much of Knossos Palace is original versus reconstructed?",
        answer:
          "The site features both original ruins and controversial reconstructions by archaeologist Sir Arthur Evans. Our guide provides clear context about which elements are original Minoan structures (dating to 1700-1400 BCE) and which are early 20th-century interpretations, explaining the historical debate surrounding the restoration work.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. The guide tailors explanations to engage younger visitors, making the ancient history accessible and interesting for all ages.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Comfortable walking shoes are recommended as we explore uneven terrain. A hat and sunscreen are advisable, especially in summer months.",
      },
    ],
  },
  {
    title: "Cretan Vineyard Tour & Mountain Villages",
    description:
      "Explore Crete's renowned wine country and traditional mountain villages, sampling unique indigenous grape varieties and enjoying authentic farm-to-table cuisine at family-run tavernas.",
    images: [
      "/images/tours/heraklion/wine-tasting.jpg",
      "/images/tours/heraklion/mountain-village.jpg",
    ],
    duration: "8 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Wine", "Rural", "Culinary"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Cretan wines different from other Greek wines?",
        answer:
          "Crete's unique microclimate and indigenous grape varieties like Vidiano, Thrapsathiri, Liatiko, and Kotsifali produce wines found nowhere else. The island's viniculture dates back 4,000 years to Minoan times, with techniques passed through generations. You'll taste wines that express Crete's terroir with distinctive mineral notes from the mountainous terrain and influences from the surrounding Mediterranean.",
      },
      {
        question: "Are the vineyard visits suitable for children?",
        answer:
          "Yes, children are welcome. While they won't participate in wine tasting, they can enjoy the scenic countryside, learn about traditional farming practices, and sample local juices and snacks.",
      },
      {
        question: "What should I wear for the vineyard tour?",
        answer:
          "Comfortable clothing and sturdy shoes are recommended as we explore rural paths and vineyards. A hat and sunscreen are advisable, especially in summer months.",
      },
    ],
  },
  {
    title: "Heraklion Street Food & Local Markets",
    description:
      "Experience the vibrant flavors of Heraklion with a guided street food tour, sampling local delicacies like kalitsounia, dakos, and loukoum at bustling markets and hidden eateries.",
    images: [
      "/images/tours/heraklion/street-food.jpg",
      "/images/tours/heraklion/local-markets.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Food", "Markets", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of Cretan street foods including savory pastries, fresh salads, grilled meats, and sweet treats. The tour highlights seasonal ingredients and traditional recipes passed down through generations.",
      },
      {
        question: "Are there vegetarian or vegan options available?",
        answer:
          "Yes, the tour can accommodate dietary preferences. Please inform us in advance so we can ensure suitable options are included.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The guide engages children with fun stories about local food culture and allows them to try different flavors in a family-friendly environment.",
      },
    ],
  },
];

export default heraklionTours;
