import { Tour } from "@/lib/interfaces/services/tours";
export const shanghaiTours: Tour[] = [
  {
    title: "Shanghai Contrasts: Old Town & Futuristic Pudong",
    description:
      "Experience Shanghai's fascinating blend of ancient and ultramodern with a tour of historic Yu Garden and Old Town, followed by the futuristic skyline of Pudong with VIP observation deck access.",
    images: [
      "/images/tours/shanghai/old-town.jpg",
      "/images/tours/shanghai/pudong-skyline.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Architecture", "History", "Modern"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Li Wei",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which observation deck do we visit?",
        answer:
          "The tour includes VIP access to the Shanghai Tower observation deck on the 118th floor, currently the world's highest observation deck at 546 meters. We bypass the regular lines and enjoy priority access with dedicated viewing time.",
      },
    ],
  },
  {
    title: "Shanghai Culinary Journey & Private Cooking Class",
    description:
      "Discover Shanghai's diverse food scene from street food to haute cuisine, followed by a private cooking class with a renowned chef to master signature Shanghainese dishes.",
    images: [
      "/images/tours/shanghai/street-food.jpg",
      "/images/tours/shanghai/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Food", "Cooking", "Culinary"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Zhang Min",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare 3-4 signature Shanghainese dishes, typically including xiaolongbao (soup dumplings), hong shao rou (red-braised pork), and jiang ya (Shanghainese smoked duck). Vegetarian options are available upon request.",
      },
    ],
  },
  {
    title: "Shanghai Art & Culture: M50 Creative Park Tour",
    description:
      "Explore Shanghai's vibrant contemporary art scene at M50 Creative Park, visiting artist studios, galleries, and exhibitions with a local art curator who provides insights into the city's creative evolution.",
    images: [
      "/images/tours/shanghai/m50-creative-park.jpg",
      "/images/tours/shanghai/contemporary-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Art", "Culture", "Contemporary"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Wang Li",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Are there any entry fees for galleries?",
        answer:
          "Most galleries in M50 Creative Park are free to enter, but some special exhibitions may have a small admission fee. We will inform you of any costs in advance.",
      },
      {
        question: "Can we purchase artworks directly from artists?",
        answer:
          "Yes, many artists welcome direct sales and commissions. The tour guide can assist with introductions and negotiations if you're interested in purchasing artwork.",
      },
    ],
  },
  {
    title: "Shanghai Night Lights: Huangpu River Cruise",
    description:
      "Experience the magic of Shanghai at night with a scenic Huangpu River cruise, taking in the illuminated skyline and historic Bund while enjoying live music and local snacks on board.",
    images: [
      "/images/tours/shanghai/huangpu-river-cruise.jpg",
      "/images/tours/shanghai/bund-night.jpg",
    ],
    duration: "2 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Nightlife", "Cruise", "Views"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Zhao Ming",
    tourCategoryId: "cruise",
    faqs: [
      {
        question: "What snacks are included on the cruise?",
        answer:
          "The cruise includes a selection of local snacks such as spring rolls, dumplings, and sweet buns, along with complimentary tea and soft drinks. Alcoholic beverages are available for purchase on board.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Yes, the cruise is family-friendly and children will enjoy the views and entertainment. There are no age restrictions, but parents should supervise young children near the railings.",
      },
    ],
  },
];

export default shanghaiTours;
