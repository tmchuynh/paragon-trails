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
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Maria Papadakis",
    tourCategoryId: "historical",
    faqs: [
      {
        question:
          "How much of Knossos Palace is original versus reconstructed?",
        answer:
          "The site features both original ruins and controversial reconstructions by archaeologist Sir Arthur Evans. Our guide provides clear context about which elements are original Minoan structures (dating to 1700-1400 BCE) and which are early 20th-century interpretations, explaining the historical debate surrounding the restoration work.",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nikos Georgiadis",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Cretan wines different from other Greek wines?",
        answer:
          "Crete's unique microclimate and indigenous grape varieties like Vidiano, Thrapsathiri, Liatiko, and Kotsifali produce wines found nowhere else. The island's viniculture dates back 4,000 years to Minoan times, with techniques passed through generations. You'll taste wines that express Crete's terroir with distinctive mineral notes from the mountainous terrain and influences from the surrounding Mediterranean.",
      },
    ],
  },
];

export default heraklionTours;
