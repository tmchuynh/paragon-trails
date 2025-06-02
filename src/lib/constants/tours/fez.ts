import { Tour } from "@/lib/interfaces/services/tours";

export const fezTours: Tour[] = [
  {
    title: "Medieval Fez Medina Deep Dive",
    description:
      "Navigate the world's largest car-free urban area with an expert local guide who unveils hidden workshops, architectural treasures, and authentic markets in the 1,200-year-old UNESCO-listed medina.",
    city: "Fez",
    country: "Morocco",
    region: "Fès-Meknès",
    images: [
      "/images/tours/fez/medina-streets.jpg",
      "/images/tours/fez/artisan-workshop.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cultural", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
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
    title: "Moroccan Culinary Journey & Cooking Workshop",
    description:
      "Discover the secrets of Moroccan cuisine with a market tour to select fresh ingredients, followed by a hands-on cooking class in a traditional riad where you'll prepare authentic dishes like tagine and pastilla.",
    city: "Fez",
    country: "Morocco",
    region: "Fès-Meknès",
    images: [
      "/images/tours/fez/cooking-class.jpg",
      "/images/tours/fez/spice-market.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Cooking", "Food", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    title: "Artisan Craft Tour: Traditional Moroccan Arts",
    description:
      "Meet master artisans preserving Morocco's artistic heritage with visits to workshops specializing in zellige mosaics, copper work, woodcarving, and textile weaving, with opportunities for hands-on participation.",
    city: "Fez",
    country: "Morocco",
    region: "Fès-Meknès",
    images: [
      "/images/tours/fez/zellige-craftsman.jpg",
      "/images/tours/fez/leather-tannery.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Crafts", "Artisans", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What can we expect from the artisan workshops?",
        answer:
          "The tour includes visits to several artisan workshops where you can see traditional Moroccan arts being practiced. Expect to see intricate tile work, metal forging, leather crafting, and wood carving. Some workshops may offer hands-on opportunities to try your hand at these crafts.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy the colorful and interactive nature of the artisan workshops. However, parents should supervise their children closely, especially in working workshops where tools and materials are in use.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, advance booking is required to ensure your spot and allow us to arrange the best artisan visits. Please book at least 24 hours in advance. For groups or special requests, contact us directly.",
      },
    ],
  },
  {
    title: "Middle Atlas Mountains & Berber Villages",
    description:
      "Escape the city for a day exploring the stunning cedar forests of the Middle Atlas Mountains, visiting traditional Berber villages, and experiencing rural Moroccan life with a home-cooked lunch in a local family home.",
    city: "Ifrane",
    country: "Morocco",
    region: "Fès-Meknès",
    images: [
      "/images/tours/fez/middle-atlas.jpg",
      "/images/tours/fez/berber-village.jpg",
    ],
    duration: "8 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Nature", "Cultural", "Rural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What should we wear for this tour?",
        answer:
          "We recommend wearing comfortable, weather-appropriate clothing and sturdy shoes or boots for walking in the mountains. A hat and sunglasses are also advisable for sun protection. If you plan to swim in the river, bring a swimsuit and towel.",
      },
      {
        question: "Will we have time to explore the villages?",
        answer:
          "Yes, the tour includes visits to several Berber villages where you can explore at a relaxed pace. You'll have the opportunity to walk through the villages, meet local people, and learn about Berber culture and traditions.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Yes, a traditional home-cooked lunch is included, featuring local specialties. If you have any dietary restrictions, please let us know in advance so we can accommodate your needs.",
      },
    ],
  },
  {
    title: "After Dark: Fez by Night Experience",
    description:
      "Experience the magical atmosphere of Fez after sunset with an evening tour featuring illuminated monuments, dinner at a restored palace, and live traditional music in an authentic setting.",
    city: "Fez",
    country: "Morocco",
    region: "Fès-Meknès",
    images: [
      "/images/tours/fez/night-monuments.jpg",
      "/images/tours/fez/palace-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Evening", "Cultural", "Dining"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What does the evening tour include?",
        answer:
          "The evening tour includes a guided walk to see Fez's monuments beautifully illuminated at night, a traditional Moroccan dinner at a restored palace, and a live music performance showcasing Moroccan musical heritage.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Yes, the tour includes transportation to and from your accommodation in Fez. Our guide will meet you at your hotel or riad and accompany you throughout the evening.",
      },
      {
        question: "What should we wear for the evening tour?",
        answer:
          "We recommend smart casual attire for the evening tour. Comfortable shoes are advised as there will be some walking involved. If you plan to visit any religious sites, please dress modestly with shoulders and knees covered.",
      },
    ],
  },
];

export default fezTours;
