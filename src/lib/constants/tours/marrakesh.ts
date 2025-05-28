import { Tour } from "@/lib/interfaces/services/tours";

const marrakeshTours: Tour[] = [
  {
    title: "Medina Mysteries & Riad Dinner Experience",
    description:
      "Navigate Marrakesh's labyrinthine medina with an expert local guide, discovering hidden artisan workshops, secret gardens, and architectural treasures, followed by an exquisite traditional dinner in a private historic riad.",
    images: [
      "/images/tours/marrakesh/medina-alleys.jpg",
      "/images/tours/marrakesh/riad-dinner.jpg",
    ],
    duration: "6 hours",
    price: "$115",
    rating: 4.9,
    tags: ["Medina", "Local Artisans", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Youssef Berrada",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we be hassled by merchants during the tour?",
        answer:
          "No, your guide serves as both cultural interpreter and buffer against unwanted attention. We deliberately take routes through the medina that avoid the most touristic sections, and we visit workshops where the focus is on demonstrating craftsmanship rather than aggressive selling. Any shopping opportunities are at your discretion, and your guide can help with fair price negotiations if desired.",
      },
    ],
  },
  {
    title: "Atlas Mountains & Berber Villages",
    description:
      "Escape to the breathtaking High Atlas Mountains for a day exploring traditional Berber villages, meeting local families, enjoying mountain hospitality, and hiking to spectacular viewpoints with stunning panoramas.",
    images: [
      "/images/tours/marrakesh/atlas-mountains.jpg",
      "/images/tours/marrakesh/berber-village.jpg",
    ],
    duration: "Full day",
    price: "$135",
    rating: 4.8,
    tags: ["Mountains", "Berber Culture", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ibrahim Amazigh",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hiking portion?",
        answer:
          "We offer multiple hiking options based on your fitness level and preferences. The standard route involves moderate hiking for approximately 2 hours total (split into shorter sections) with some uphill portions on established paths. Easier alternatives with minimal elevation gain are available, as are more challenging routes for experienced hikers seeking a greater adventure.",
      },
    ],
  },
];

export default marrakeshTours;
