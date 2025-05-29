import { Tour } from "@/lib/interfaces/services/tours";
export const materaTours: Tour[] = [
  {
    title: "Sassi Cave Dwellings & Ancient Civilization",
    description:
      "Journey through 9,000 years of human history in Matera's UNESCO-listed cave dwellings with an archaeology expert who reveals the extraordinary story of the oldest continuously inhabited settlement in Italy.",
    images: [
      "/images/tours/matera/sassi-view.jpg",
      "/images/tours/matera/cave-church.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["UNESCO", "History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Marco Lombardi",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking and climbing is involved?",
        answer:
          "This tour involves moderate walking on uneven stone surfaces, including steps carved into the rock and inclined pathways. We cover approximately 2.5km at a relaxed pace with plenty of stops, but comfortable footwear with good grip is essential. While not extremely strenuous, basic mobility is required as there are areas without handrails.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. We provide engaging historical context and stories that captivate younger audiences, but parents should be aware that some areas may not be stroller-accessible.",
      },
    ],
  },
  {
    title: "Cucina Povera: Traditional Cooking in Ancient Caves",
    description:
      "Learn the secrets of Matera's 'peasant cuisine' with a hands-on cooking class inside a restored cave dwelling, mastering traditional recipes that have sustained generations using simple, high-quality local ingredients.",
    images: [
      "/images/tours/matera/cave-cooking.jpg",
      "/images/tours/matera/traditional-bread.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cooking", "Culinary", "Local"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nonna Giovanna",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to make?",
        answer:
          "You'll learn to prepare Matera's iconic bread (protected by DOP status), handmade orecchiette pasta with local bitter greens, traditional legume soup with wild herbs, and 'peperoni cruschi' (dried sweet peppers) prepared in the traditional method. The class concludes with preparing a simple almond dessert based on ancient recipes from local convents.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior experience is required! This class is designed for all skill levels, from complete beginners to experienced cooks. Nonna Giovanna provides step-by-step guidance and shares her family secrets in a warm, welcoming atmosphere.",
      },
    ],
  },
];

export default materaTours;
