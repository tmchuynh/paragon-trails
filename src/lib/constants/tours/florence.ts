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
      {
        question: "Are the secret passages accessible to everyone?",
        answer:
          "Yes, the secret passages are designed for guided tours and are fully accessible. However, some areas may involve climbing stairs or navigating narrow corridors. Please inform us in advance if you have mobility concerns.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We tailor the content to engage children with interactive storytelling and age-appropriate explanations of the artworks and history. Children will enjoy the adventure of exploring secret passages and learning about the Medici family's fascinating past.",
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
      {
        question: "Is transportation provided?",
        answer:
          "Yes, we provide comfortable air-conditioned transportation for the entire day, including pick-up and drop-off at your accommodation in Florence. The drive to the countryside takes approximately 1 hour each way, allowing you to relax and enjoy the scenic views without worrying about navigation.",
      },
    ],
  },
  {
    title: "Florence Architecture & Hidden Gems",
    description:
      "Explore Florence's architectural wonders beyond the tourist hotspots, visiting lesser-known churches, palaces, and hidden courtyards with a local architect who reveals the city's unique building styles and history.",
    images: [
      "/images/tours/florence/hidden-church.jpg",
      "/images/tours/florence/architectural-tour.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Architecture", "Hidden Gems", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Luca Ferraro",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What types of architecture will we see?",
        answer:
          "The tour covers a range of architectural styles from Romanesque to Baroque, including hidden gems like the Basilica di San Miniato al Monte, Palazzo Davanzati, and lesser-known chapels. Your guide will explain the historical context and significance of each site, making connections to Florence's broader architectural evolution.",
      },
      {
        question: "Are there any walking requirements?",
        answer:
          "This tour involves moderate walking, including some stairs and uneven surfaces. We recommend comfortable shoes and being prepared for a leisurely pace to fully appreciate the details of each site.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We engage children with interactive stories about the buildings and their history, making it an educational experience that sparks curiosity about architecture and history.",
      },
    ],
  },
  {
    title: "Florence's Secret Gardens & Hidden Courtyards",
    description:
      "Discover Florence's tranquil side with a guided tour of its secret gardens, hidden courtyards, and lesser-known green spaces, exploring the city's botanical heritage and peaceful retreats away from the crowds.",
    images: [
      "/images/tours/florence/secret-garden.jpg",
      "/images/tours/florence/courtyard.jpg",
    ],
    duration: "3 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Gardens", "Hidden Gems", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lucia Martelli",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of gardens will we visit?",
        answer:
          "The tour includes visits to the Bardini Garden, Rose Garden, and several hidden courtyards in Oltrarno. You'll learn about the history of these green spaces, their botanical significance, and how they reflect Florence's cultural heritage.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We include fun activities like scavenger hunts in the gardens and storytelling about the plants and history that will engage children of all ages.",
      },
      {
        question: "Are there any walking requirements?",
        answer:
          "The tour involves moderate walking with some uneven surfaces. Comfortable shoes are recommended, but we keep the pace leisurely to allow time for exploration and photography.",
      },
    ],
  },
];

export default florenceTours;
