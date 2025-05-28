import { Tour } from "@/lib/interfaces/services/tours";

const athensTours: Tour[] = [
  {
    title: "Acropolis Sunset & Ancient Athens",
    description:
      "Experience the majesty of the Acropolis bathed in golden light during sunset hours with an archaeology expert who brings ancient Athens to life through captivating stories.",
    images: [
      "/images/tours/athens/acropolis-sunset.jpg",
      "/images/tours/athens/parthenon.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 5.0,
    tags: ["Archaeology", "Ancient Greece", "Sunset"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Papadakis",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, though the exact timing shifts with seasonal sunset times. In summer we start later (around 6pm) while in winter we begin earlier (around 3:30pm) to catch the perfect golden hour light.",
      },
    ],
  },
  {
    title: "Greek Food & Wine Odyssey",
    description:
      "Discover Athens' culinary scene from traditional tavernas to innovative modern Greek restaurants, with tastings of regional wines, olive oils, and local specialties.",
    images: [
      "/images/tours/athens/greek-meze.jpg",
      "/images/tours/athens/wine-tasting.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Food", "Wine", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dimitris Antoniadis",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many food stops are included?",
        answer:
          "The tour includes 6-8 generous tastings at various locations, equivalent to a full meal plus drinks. Come hungry and with an adventurous palate!",
      },
    ],
  },
];

export default athensTours;
