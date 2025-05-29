import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const madridTours: Tour[] = [
  {
    title: "Madrid Art Walk: Prado, Reina Sofia & Thyssen",
    description:
      "Experience Madrid's Golden Triangle of Art with a passionate art historian, exploring masterpieces by Velázquez, Goya, El Greco, Picasso, and Dalí with skip-the-line access.",
    images: [
      "/images/tours/madrid/prado-museum.jpg",
      "/images/tours/madrid/guernica.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Art", "Museums", "Culture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("madrid", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for those without art knowledge?",
        answer:
          "Absolutely! Our art historians specialize in making art accessible and engaging for everyone. The tour focuses on the fascinating stories behind the paintings and their historical context rather than technical art terminology. Whether you're an art enthusiast or a complete beginner, you'll find the experience enriching.",
      },
      {
        question: "Do we need to book tickets in advance?",
        answer:
          "Yes, we include skip-the-line tickets in the tour price to ensure you spend more time enjoying the art and less time waiting in queues. We recommend booking at least a week in advance, especially during peak tourist seasons.",
      },
    ],
  },
  {
    title: "Madrid Tapas & Flamenco Evening",
    description:
      "Dive into Madrid's vibrant nightlife with a tapas crawl through historic taverns and hidden bars, followed by an authentic flamenco performance in an intimate tablao venue.",
    images: [
      "/images/tours/madrid/tapas-tour.jpg",
      "/images/tours/madrid/flamenco-show.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Culinary", "Nightlife", "Flamenco"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("madrid", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many tapas venues will we visit?",
        answer:
          "The tour includes stops at 4 different establishments, each representing a different aspect of Spanish culinary traditions. You'll sample approximately 10-12 different tapas paired with regional wines, vermouth, and sherry. The evening concludes with churros con chocolate after the flamenco show.",
      },
      {
        question: "Is the flamenco show suitable for children?",
        answer:
          "While the flamenco performance itself is family-friendly, the tapas crawl involves visiting bars that may not be ideal for very young children. We recommend this tour for older children (12+) who can appreciate the cultural experience. For families with younger kids, we can suggest alternative dining options.",
      },
      {
        question: "What should I wear for the evening?",
        answer:
          "Smart casual attire is recommended. Comfortable shoes are a must, as we will be walking between venues. The flamenco venue has a relaxed dress code, but avoiding overly casual clothing like flip-flops or gym wear is advisable.",
      },
    ],
  },
  {
    title: "Madrid Historical Walk: Royal Palace & Almudena Cathedral",
    description:
      "Explore Madrid's rich history with a guided walk through the Royal Palace, Almudena Cathedral, and the historic Plaza Mayor, learning about the city's evolution from medieval times to the present.",
    images: [
      "/images/tours/madrid/royal-palace.jpg",
      "/images/tours/madrid/almudena-cathedral.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.7,
    tags: ["History", "Architecture", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("madrid", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are there any entry fees included?",
        answer:
          "Yes, the tour includes entry fees to both the Royal Palace and Almudena Cathedral. We also provide audio guides for a more immersive experience inside these sites.",
      },
      {
        question: "Is this tour wheelchair accessible?",
        answer:
          "The Royal Palace is mostly wheelchair accessible, but some areas may have limited access due to historical architecture. We recommend contacting us in advance to discuss specific needs so we can accommodate you appropriately.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Comfortable walking shoes are essential as we will cover a fair distance on foot. The dress code for the Royal Palace is smart casual, and visitors are expected to dress respectfully when entering religious sites like Almudena Cathedral.",
      },
    ],
  },
];

export default madridTours;
