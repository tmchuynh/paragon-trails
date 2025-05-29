import { Tour } from "@/lib/interfaces/services/tours";
export const florenceTours: Tour[] = [
  {
    title: "Renaissance Art & Hidden Doors",
    description:
      "Discover Florence's artistic masterpieces with private museum access and an art historian guide, then explore secret passages and hidden doors in Palazzo Vecchio that reveal the Medici family's clandestine history.",
    images: [
      "/images/tours/florence/uffizi-gallery.jpg",
      "/images/tours/florence/secret-passages.jpg",
    ],
    duration: "5 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Art", "Secret History", "Renaissance"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Sofia Rossi",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which artworks will we see?",
        answer:
          "Our tour includes Michelangelo's David at the Accademia, key masterpieces at the Uffizi including Botticelli's Birth of Venus and works by Leonardo da Vinci, and the hidden artistic treasures within Palazzo Vecchio. Your art historian guide customizes the focus based on your interests while ensuring you see the essential masterpieces.",
      },
    ],
  },
  {
    title: "Tuscan Hills & Artisanal Food Journey",
    description:
      "Escape to the rolling Tuscan countryside for a day of culinary discoveries, visiting small family-run vineyards, an award-winning olive oil producer, and enjoying a traditional long lunch at a farmhouse with spectacular views.",
    images: [
      "/images/tours/florence/tuscan-vineyard.jpg",
      "/images/tours/florence/farmhouse-lunch.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Wine", "Culinary", "Countryside"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marco Bianchi",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Which wines will we taste?",
        answer:
          "The tour includes tastings of Chianti Classico, Super Tuscans, and other regional specialties like Vernaccia di San Gimignano. You'll sample approximately 8-10 different wines throughout the day, paired with appropriate foods to enhance the tasting experience. Our focus is on small-production, family-run vineyards rather than commercial operations.",
      },
    ],
  },
];

export default florenceTours;
