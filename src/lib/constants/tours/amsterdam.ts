import { Tour } from "@/lib/interfaces/services/tours";

const amsterdamTours: Tour[] = [
  {
    title: "Hidden Canals & Courtyard Gardens",
    description:
      "Explore Amsterdam's secret waterways and private courtyard gardens normally closed to the public, with a local historian revealing the city's hidden architectural treasures.",
    images: [
      "/images/tours/amsterdam/hidden-canal.jpg",
      "/images/tours/amsterdam/hofje-garden.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Architecture", "Gardens", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Johanna de Vries",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "We walk approximately 4km at a leisurely pace with plenty of stops. The route is flat but includes narrow passages and some uneven cobblestones.",
      },
    ],
  },
  {
    title: "Dutch Masters VIP Museum Tour",
    description:
      "Enjoy priority access and expert insights at Amsterdam's top museums including the Rijksmuseum and Van Gogh Museum, focusing on Golden Age masterpieces.",
    images: [
      "/images/tours/amsterdam/rijksmuseum.jpg",
      "/images/tours/amsterdam/van-gogh.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Art", "Museums", "Dutch Masters"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Willem Bakker",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Can we take photographs in the museums?",
        answer:
          "Photography without flash is permitted in most gallery spaces, with some exceptions for special exhibitions or fragile works. Your guide will advise on specific restrictions.",
      },
    ],
  },
];

export default amsterdamTours;
