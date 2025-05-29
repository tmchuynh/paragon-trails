import { Tour } from "@/lib/interfaces/services/tours";
export const charlestonTours: Tour[] = [
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
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, this tour is family-friendly. However, please note that some homes have fragile antiques and furnishings, so we ask that children be supervised at all times.",
      },
      {
        question: "Is photography allowed inside the homes?",
        answer:
          "Photography is generally not permitted inside the historic homes to protect the artifacts and privacy of the homeowners. However, you are welcome to take photos in the gardens and courtyards.",
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
      {
        question: "Will we have the chance to try Gullah food?",
        answer:
          "Yes, the tour includes a traditional Gullah meal featuring dishes like shrimp and grits, okra soup, and sweet potato pie. You'll also learn about the history and significance of these dishes in Gullah culture.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! This tour is family-friendly and offers a unique opportunity for children to learn about cultural diversity, history, and traditional crafts in an engaging way.",
      },
    ],
  },
  {
    title: "Charleston Ghosts & Legends Tour",
    description:
      "Explore Charleston's haunted history with a local storyteller, visiting eerie sites like the Old City Jail, the Battery, and the infamous graveyards while hearing chilling tales of ghosts and legends.",
    images: [
      "/images/tours/charleston/ghost-tour.jpg",
      "/images/tours/charleston/old-city-jail.jpg",
    ],
    duration: "2 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Ghosts", "History", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Oliver Graves",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour scary?",
        answer:
          "While the tour includes spooky stories and visits to haunted locations, it is designed to be family-friendly. We focus on historical accounts and legends rather than graphic horror.",
      },
      {
        question: "What should I wear for the ghost tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be walking through historic neighborhoods. Dress for the weather, as we will be outside for most of the tour.",
      },
      {
        question: "Are there any age restrictions?",
        answer:
          "This tour is suitable for all ages, but parental discretion is advised for very young children due to the nature of some stories.",
      },
    ],
  },
];

export default charlestonTours;
