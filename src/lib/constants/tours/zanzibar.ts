import { Tour } from "@/lib/interfaces/services/tours";
export const zanzibarTours: Tour[] = [
  {
    title: "Stone Town & Spice Plantation Journey",
    description:
      "Explore the UNESCO-listed Stone Town with its Arabic architecture and complex history, then visit aromatic spice plantations to discover why Zanzibar earned its name as the 'Spice Island'.",
    images: [
      "/images/tours/zanzibar/stone-town.jpg",
      "/images/tours/zanzibar/spice-plantation.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["UNESCO", "Cultural", "Spices"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Salim Abdullah",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What will we learn about at the spice plantations?",
        answer:
          "You'll discover how spices like cinnamon, cloves, nutmeg, vanilla, cardamom, and black pepper are grown and harvested. Our guide demonstrates traditional uses beyond cooking, including medicinal applications and beauty treatments. You'll have the opportunity to taste fresh spices, tropical fruits, and spiced tea during the tour.",
      },
    ],
  },
  {
    title: "Blue Safari & Dolphin Spotting Adventure",
    description:
      "Sail traditional wooden dhows to pristine sandbanks and snorkeling spots teeming with marine life, with opportunities to spot wild dolphins in their natural habitat and feast on freshly caught seafood.",
    images: [
      "/images/tours/zanzibar/dhow-sailing.jpg",
      "/images/tours/zanzibar/dolphins.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 4.9,
    tags: ["Marine Life", "Snorkeling", "Dolphins"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Captain Juma",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Are dolphin sightings guaranteed?",
        answer:
          "While dolphin sightings are common (over 85% success rate), these are wild animals in their natural habitat, so sightings cannot be guaranteed. We follow responsible wildlife viewing practices, maintaining appropriate distances and limiting viewing time to minimize impact on the dolphins.",
      },
    ],
  },
];

export default zanzibarTours;
