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
      {
        question: "What should I wear for the bike tour?",
        answer:
          "We recommend comfortable clothing suitable for cycling, such as breathable fabrics and closed-toe shoes. A light jacket is advisable in cooler weather. Helmets are provided but optional, as cycling is very safe in Copenhagen.",
      },
      {
        question: "Are the canal cruise refreshments included?",
        answer:
          "Yes, the canal cruise includes a selection of Nordic refreshments such as open-faced sandwiches (smørrebrød), pastries, and soft drinks. Alcoholic beverages can be purchased on board.",
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
      {
        question: "Is this tour suitable for children?",
        answer:
          "While the tour is family-friendly, it is more focused on design and architecture, which may be of greater interest to adults and older children. Younger children may find it less engaging, but we can tailor the experience to include interactive elements if needed.",
      },
      {
        question: "Are any buildings off-limits to the public?",
        answer:
          "Yes, we have exclusive access to private residences that are not normally open to the public. These homes provide a unique insight into how Danish design principles are applied in real life, showcasing both aesthetics and functionality.",
      },
    ],
  },
];

export default copenhagenTours;
