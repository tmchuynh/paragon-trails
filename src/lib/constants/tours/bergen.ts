import { Tour } from "@/lib/interfaces/services/tours";

const bergenTours: Tour[] = [
  {
    title: "Norwegian Fjords & Nærøyfjord Cruise",
    description:
      "Experience the majestic beauty of Norway's famous fjords with a scenic train journey on the Flåm Railway, followed by a cruise through the UNESCO-listed Nærøyfjord with its dramatic landscapes.",
    images: [
      "/images/tours/bergen/naeroyfjord.jpg",
      "/images/tours/bergen/flam-railway.jpg",
    ],
    duration: "10 hours",
    price: "$215",
    rating: 5.0,
    tags: ["Nature", "UNESCO", "Scenic"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Erik Larsen",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, the tour operates in all seasons, with each offering a distinct experience. Summer provides long daylight hours and lush green landscapes, while winter offers snow-capped mountains and potentially the Northern Lights. Spring and fall feature dramatic light conditions and fewer tourists.",
      },
    ],
  },
  {
    title: "Bergen Food & Culture Heritage Tour",
    description:
      "Discover Bergen's Hanseatic history and culinary traditions with visits to the UNESCO-listed Bryggen wharf, the bustling fish market, and tastings of local seafood and traditional Norwegian delicacies.",
    images: [
      "/images/tours/bergen/bryggen-wharf.jpg",
      "/images/tours/bergen/fish-market.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "UNESCO", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ingrid Hansen",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Will we taste traditional Norwegian fish?",
        answer:
          "Yes, the tour includes tastings of various Norwegian seafood specialties including salmon prepared in different ways, traditional fish soup, stockfish, and if you're adventurous, a sample of Lutefisk or fermented trout during the seasonal availability.",
      },
    ],
  },
];

export default bergenTours;
