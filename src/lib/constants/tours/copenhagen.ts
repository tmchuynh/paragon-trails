import { Tour } from "@/lib/interfaces/services/tours";
export const copenhagenTours: Tour[] = [
  {
    title: "Copenhagen by Bike & Canal Cruise",
    description:
      "Experience Copenhagen like a local with a guided bicycle tour through the city's beautiful parks, historic districts, and along the harbor, followed by a relaxing canal cruise with Nordic refreshments.",
    images: [
      "/images/tours/copenhagen/bike-tour.jpg",
      "/images/tours/copenhagen/canal-cruise.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Cycling", "Canals", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lars Nielsen",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "How difficult is the cycling portion?",
        answer:
          "Copenhagen is wonderfully flat and has world-class cycling infrastructure, making it perfect for riders of all levels. We maintain a leisurely pace over approximately 8km with frequent stops at points of interest. Quality bikes are provided with adjustments for your comfort, and the entire route follows dedicated cycle paths away from car traffic.",
      },
    ],
  },
  {
    title: "Danish Design & Architecture Masterpieces",
    description:
      "Discover Copenhagen's revolutionary design heritage with an architecture specialist guiding you through iconic modern buildings, design studios, and exclusive access to private homes showcasing Danish design principles.",
    images: [
      "/images/tours/copenhagen/design-museum.jpg",
      "/images/tours/copenhagen/modern-architecture.jpg",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Design", "Architecture", "Modern"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Sofia Bergmann",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which designers' work will we see?",
        answer:
          "The tour features works by renowned Danish designers including Arne Jacobsen, Hans Wegner, Finn Juhl, and Poul Henningsen. We'll explore how their functional yet beautiful approach revolutionized global design in the 20th century. We visit both iconic public buildings and, uniquely, private homes that showcase Danish design principles in everyday living contexts.",
      },
    ],
  },
];

export default copenhagenTours;
