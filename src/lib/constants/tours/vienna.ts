import { Tour } from "@/lib/interfaces/services/tours";

const viennaTours: Tour[] = [
  {
    title: "Classical Vienna & Private Concert",
    description:
      "Immerse yourself in the musical heritage of Vienna with a distinguished musicologist, visiting the homes of Mozart and Beethoven, followed by a private chamber concert in a historic palace with champagne reception.",
    images: [
      "/images/tours/vienna/mozart-house.jpg",
      "/images/tours/vienna/palace-concert.jpg",
    ],
    duration: "4 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Classical Music", "Cultural", "Exclusive"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elise Mueller",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to know about classical music to enjoy this tour?",
        answer:
          "Not at all! Our musicologist guides are experts at making classical music accessible and engaging for everyone. The tour provides historical and cultural context that brings the music to life regardless of your prior knowledge. The private concert features well-known pieces with brief, engaging introductions that enhance your appreciation of each composition.",
      },
    ],
  },
  {
    title: "Imperial Vienna & Habsburg Treasures",
    description:
      "Experience the grandeur of the Habsburg Empire with private access to imperial apartments in Schönbrunn Palace, the Imperial Treasury's crown jewels, and the Spanish Riding School with a historian specializing in royal history.",
    images: [
      "/images/tours/vienna/schonbrunn-palace.jpg",
      "/images/tours/vienna/imperial-crown.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Royal History", "Palace", "Habsburg"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Franz Huber",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this palace tour different from standard visits?",
        answer:
          "Our tour includes exclusive access to the private imperial apartments not open to general visitors, including Franz Joseph and Empress Elisabeth's personal chambers with original furnishings. We also visit the palace during quieter hours and gain special access to the Lipizzaner stables at the Spanish Riding School where you can meet these majestic horses up close - something regular visitors cannot experience.",
      },
    ],
  },
];

export default viennaTours;
