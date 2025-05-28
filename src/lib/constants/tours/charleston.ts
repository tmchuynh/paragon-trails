import { Tour } from "@/lib/interfaces/services/tours";

const charlestonTours: Tour[] = [
  {
    title: "Charleston's Historic Homes & Gardens",
    description:
      "Step behind normally closed doors of Charleston's most prestigious historic homes with a renowned architectural historian, enjoying private access to gardens, hidden courtyards, and exclusive estates.",
    images: [
      "/images/tours/charleston/historic-home.jpg",
      "/images/tours/charleston/garden-courtyard.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "History", "Gardens"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Eleanor Rutledge",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Which historic homes will we visit?",
        answer:
          "The tour typically includes 3-4 properties, with exact homes varying based on availability. We always include at least one home not open to general public tours. Favorites include the Nathaniel Russell House, Edmondston-Alston House, and several private residences in the South of Broad neighborhood.",
      },
    ],
  },
  {
    title: "Lowcountry Gullah Culture & Cuisine",
    description:
      "Experience the unique Gullah culture of the Sea Islands with visits to traditional communities, demonstrations of sweetgrass basket weaving, and authentic Lowcountry cuisine with Gullah culinary traditions.",
    images: [
      "/images/tours/charleston/sweetgrass-baskets.jpg",
      "/images/tours/charleston/gullah-cuisine.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Cultural", "Cuisine", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Amelia Jenkins",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is Gullah culture?",
        answer:
          "Gullah (or Geechee) refers to the descendants of enslaved West Africans who developed a distinctive culture and creole language in the coastal regions and Sea Islands of South Carolina and Georgia. The isolation of these communities allowed them to preserve many African linguistic patterns, cultural practices, crafts, and culinary traditions that you'll learn about during this immersive tour.",
      },
    ],
  },
];

export default charlestonTours;
