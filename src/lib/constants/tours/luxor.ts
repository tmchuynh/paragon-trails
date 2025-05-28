import { Tour } from "@/lib/interfaces/services/tours";

const luxorTours: Tour[] = [
  {
    title: "Valley of the Kings Private Access",
    description:
      "Experience exclusive early morning access to the Valley of the Kings before public opening, including special entry to tombs normally closed to visitors, guided by an expert Egyptologist.",
    images: [
      "/images/tours/luxor/valley-kings.jpg",
      "/images/tours/luxor/tomb-interior.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Archaeology", "Ancient Egypt", "Exclusive"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Ahmed Hassan",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which tombs will we visit?",
        answer:
          "The tour always includes Tutankhamun's tomb and 2-3 others based on current archaeological access. Through special arrangements, we typically access at least one tomb not open to the general public or recently opened after restoration work. Your Egyptologist guide selects tombs with the best-preserved artwork on each visit.",
      },
    ],
  },
  {
    title: "Nile Sunset Sailing & Dinner Experience",
    description:
      "Sail the Nile aboard a traditional felucca as the sun sets behind the Valley of the Kings, then enjoy an authentic Egyptian feast at a local family home with musical entertainment.",
    images: [
      "/images/tours/luxor/felucca-sunset.jpg",
      "/images/tours/luxor/egyptian-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Nile", "Sunset", "Local Cuisine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Fatima el-Sayed",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What kind of food will be served at the family dinner?",
        answer:
          "The meal features traditional Upper Egyptian specialties rarely found in restaurants, including freshly baked bread, bamia (okra stew), stuffed pigeon, koshari, and various mezze. Our host family has been sharing their culinary traditions with our guests for three generations.",
      },
    ],
  },
];

export default luxorTours;
