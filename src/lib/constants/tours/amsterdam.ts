import { Tour } from "@/lib/interfaces/services/tours";

const amsterdamTours: Tour[] = [
  {
    title: "Hidden Canals & Secret Gardens",
    description:
      "Explore Amsterdam beyond the tourist paths with a local historian, discovering hidden hofjes (courtyard gardens), secret canals, and architectural gems from the Golden Age that most visitors never see.",
    images: [
      "/images/tours/amsterdam/hidden-canals.jpg",
      "/images/tours/amsterdam/secret-hofjes.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Hidden Gems", "Architecture", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dr. Emma van der Berg",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km at a leisurely pace with plenty of stops. We walk along some narrow cobblestone paths and cross several small bridges, so comfortable footwear is recommended. The route is relatively flat but does include some stairs to access certain hidden courtyards.",
      },
    ],
  },
  {
    title: "Dutch Masters & Rijksmuseum After Hours",
    description:
      "Experience the world-renowned Rijksmuseum without the crowds during a special after-hours visit, with an art historian guide illuminating the stories behind Rembrandt's Night Watch, Vermeer's masterpieces, and other Dutch Golden Age treasures.",
    images: [
      "/images/tours/amsterdam/rijksmuseum-night-watch.jpg",
      "/images/tours/amsterdam/rijksmuseum-hall.jpg",
    ],
    duration: "2.5 hours",
    price: "$125",
    rating: 5.0,
    tags: ["Art", "Museum", "After Hours"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Jan de Vries",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes this museum visit special?",
        answer:
          "Our after-hours access means you'll experience the Rijksmuseum with only a small group (maximum 12 guests), enjoying the masterpieces without the usual crowds. Your guide is a published art historian specializing in Dutch Golden Age painting who provides context and stories about the artists and their work that bring the collection to life. The quieter atmosphere allows for an intimate experience with world-famous artworks.",
      },
    ],
  },
];

export default amsterdamTours;
