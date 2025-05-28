import { Tour } from "@/lib/interfaces/services/tours";

const stPetersburgTours: Tour[] = [
  {
    title: "Hermitage Museum & Winter Palace Private Tour",
    description:
      "Explore one of the world's greatest art collections with privileged early access and a dedicated art historian revealing the stories behind the masterpieces.",
    images: [
      "/images/tours/st-petersburg/hermitage-exterior.jpg",
      "/images/tours/st-petersburg/winter-palace-interior.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Art", "Museum", "Royal History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Irina Petrova",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour covers approximately 4 kilometers of walking through the museum complex. While there are places to sit throughout, comfortable footwear is strongly recommended.",
      },
    ],
  },
  {
    title: "White Nights Boat Cruise & Folklore Evening",
    description:
      "Experience St. Petersburg's famous White Nights with an atmospheric canal cruise, followed by an authentic Russian folklore performance and traditional dinner.",
    images: [
      "/images/tours/st-petersburg/night-canal-cruise.jpg",
      "/images/tours/st-petersburg/folk-performance.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Evening Tour", "Canals", "Cultural Performance"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mikhail Sokolov",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "When is the White Nights phenomenon visible?",
        answer:
          "The White Nights period runs approximately from late May to mid-July, with the brightest nights around the summer solstice (June 21-22). Outside this period, we offer an evening illumination cruise that's equally magical.",
      },
    ],
  },
];

export default stPetersburgTours;
