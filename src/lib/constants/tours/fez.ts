import { Tour } from "@/lib/interfaces/services/tours";
export const fezTours: Tour[] = [
  {
    title: "Medieval Medina & Artisan Traditions",
    description:
      "Journey through the world's largest car-free urban area with a guide from a multi-generation Fez family, exploring ancient souks, visiting centuries-old workshops, and learning about traditional crafts still practiced as they were 1,000 years ago.",
    images: [
      "/images/tours/fez/medina-view.jpg",
      "/images/tours/fez/artisan-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Medina", "Crafts", "Historical"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Hassan El Mansouri",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How difficult is navigating the medina?",
        answer:
          "Fez medina contains over 9,500 streets and alleys, making it impossible to navigate without a knowledgeable guide. Our tour follows a carefully planned route with moderate walking on sometimes uneven surfaces. The pace is relaxed with plenty of stops, but comfortable closed-toe shoes are essential as some areas may have cobblestones or occasional steps.",
      },
      {
        question: "Will we visit any specific artisan workshops?",
        answer:
          "Yes, the tour includes visits to several traditional workshops where you can see artisans at work. We visit a pottery studio, a leather tannery, a carpet weaving workshop, and a metalwork shop. You'll have the opportunity to interact with the artisans, ask questions, and learn about their crafts.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy the vibrant atmosphere of the medina and may find the artisan workshops particularly fascinating. However, parents should be aware that the medina can be crowded and narrow in places, so close supervision is recommended.",
      },
    ],
  },
  {
    title: "Moroccan Flavors Cooking Class & Market Tour",
    description:
      "Master the art of Moroccan cuisine with a renowned local chef, beginning with a guided tour of food markets to select ingredients, followed by a hands-on cooking class in a traditional riad kitchen where you'll prepare an authentic multi-course feast.",
    images: [
      "/images/tours/fez/food-market.jpg",
      "/images/tours/fez/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 5.0,
    tags: ["Cooking", "Market", "Culinary"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Fatima Berrada",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll prepare a complete Moroccan meal including a classic tagine (meat or vegetarian), traditional salads, freshly baked bread, and a dessert such as pastilla or orange blossom-scented pastries. Our chef teaches authentic techniques for working with preserved lemon, spice blends, and phyllo dough. All recipes are provided to take home, and the class concludes with enjoying the meal you've prepared on a beautiful riad terrace.",
      },
      {
        question: "Do I need any prior cooking experience?",
        answer:
          "No prior experience is necessary! The class is designed for all skill levels, from beginners to experienced cooks. Chef Fatima provides step-by-step instructions and personalized guidance throughout the process.",
      },
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and gluten-free diets with advance notice. Please inform us of any dietary restrictions when booking so we can tailor the menu accordingly.",
      },
    ],
  },
  {
    title: "Fez Cultural Heritage & Architecture Tour",
    description:
      "Discover the architectural wonders of Fez with a local historian, visiting UNESCO World Heritage sites, ancient madrasas, and stunning mosques while learning about the city's rich history and cultural significance.",
    images: [
      "/images/tours/fez/heritage-site.jpg",
      "/images/tours/fez/madrasa.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Heritage", "Architecture", "Historical"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Hassan El Mansouri",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What historical sites will we visit?",
        answer:
          "The tour includes visits to key sites such as the Bou Inania Madrasa, Al Quaraouiyine University (the world's oldest existing degree-granting university), the Royal Palace, and the stunning Nejjarine Museum of Wooden Arts & Crafts. You'll learn about the architectural styles, historical significance, and cultural context of each site.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy exploring the fascinating architecture and learning about Fez's history in an engaging way. However, parents should be aware that some sites may have stairs or uneven surfaces.",
      },
      {
        question: "Do we need to dress modestly for this tour?",
        answer:
          "Yes, visitors are expected to dress modestly when visiting religious sites. We recommend wearing long pants or skirts and covering shoulders. Comfortable walking shoes are also advised as we will be walking on cobblestone streets.",
      },
    ],
  },
  {
    title: "Fez Nightlife & Cultural Experience",
    description:
      "Experience the vibrant nightlife of Fez with a local guide, exploring traditional music venues, enjoying live performances, and tasting local street food in the atmospheric medina after dark.",
    images: [
      "/images/tours/fez/nightlife.jpg",
      "/images/tours/fez/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Nightlife", "Music", "Cultural"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Fatima El Idrissi",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of music will we experience?",
        answer:
          "The tour includes visits to traditional music venues where you can enjoy live performances of Moroccan folk music, including Andalusian classical music and Sufi spiritual songs. You'll also have the chance to see street musicians and performers in the medina.",
      },
      {
        question: "Is this tour suitable for families?",
        answer:
          "This tour is primarily designed for adults and couples. While older children may enjoy the music and atmosphere, younger children may find the late hours and crowded streets challenging.",
      },
      {
        question: "What kind of street food will we try?",
        answer:
          "You'll sample a variety of local street foods such as grilled meats, spicy merguez sausages, fresh juices, and traditional pastries. Our guide will introduce you to safe and popular vendors known for their delicious offerings.",
      },
    ],
  },
];

export default fezTours;
