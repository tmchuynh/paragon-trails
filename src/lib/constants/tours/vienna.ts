import { Tour } from "@/lib/interfaces/services/tours";

const viennaTours: Tour[] = [
  {
    title: "Imperial Vienna & Classical Music Experience",
    description:
      "Journey through the opulent Habsburg palaces and immerse yourself in Vienna's rich musical heritage with a private classical concert in a historic venue.",
    images: [
      "/images/tours/vienna/schonbrunn-palace.jpg",
      "/images/tours/vienna/imperial-concert.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Classical Music", "Architecture", "Imperial History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Johann Weber",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to dress formally for the concert?",
        answer:
          "Smart casual attire is perfectly acceptable. While traditional formal concert dress is not required, many guests enjoy dressing up for the experience.",
      },
    ],
  },
  {
    title: "Coffeehouse Culture & Sachertorte Secrets",
    description:
      "Discover Vienna's celebrated coffeehouse tradition with visits to historic cafés, then learn to create the perfect Sachertorte in a hands-on pastry workshop.",
    images: [
      "/images/tours/vienna/traditional-coffeehouse.jpg",
      "/images/tours/vienna/sachertorte.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Culinary", "Coffee", "Sweet Treats"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Elisabeth Hoffmann",
    tourCategoryId: "culinary",
    faqs: [
      {
        question:
          "Can I accommodate dietary restrictions in the pastry workshop?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian and most dietary restrictions. Unfortunately, we cannot guarantee vegan or gluten-free adaptations for the Sachertorte class.",
      },
    ],
  },
];

export default viennaTours;
