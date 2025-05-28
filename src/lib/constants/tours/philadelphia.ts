import { Tour } from "@/lib/interfaces/services/tours";

export const philadelphiaTours: Tour[] = [
  {
    title: "Constitutional Walking Tour",
    description:
      "Discover America's birthplace with visits to Independence Hall, Liberty Bell, and other sites where the nation's founding documents were created.",
    images: [
      "/images/tours/philadelphia/independence-hall.jpg",
      "/images/tours/philadelphia/liberty-bell.jpg",
    ],
    duration: "1.5 hours",
    price: "$35",
    rating: 4.8,
    tags: ["History", "Constitution", "Independence"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Benjamin Franklin (Historical Reenactor)",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Do we get to go inside Independence Hall?",
        answer:
          "Our tour includes exterior views and history. For interior access, we'll help you secure the free, timed tickets required by the National Park Service when available.",
      },
    ],
  },
  {
    title: "Philly Food & Culture Tour",
    description:
      "Taste your way through Philadelphia's diverse culinary scene, from iconic cheesesteaks and pretzels to Italian Market specialties and innovative new restaurants.",
    images: [
      "/images/tours/philadelphia/cheesesteak.jpg",
      "/images/tours/philadelphia/reading-terminal.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Food", "Markets", "Local Cuisine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Martinez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, gluten-free, and most other dietary needs while still providing a fulfilling culinary experience.",
      },
    ],
  },
];

export default philadelphiaTours;
