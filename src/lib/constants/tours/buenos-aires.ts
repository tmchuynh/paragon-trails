import { Tour } from "@/lib/interfaces/services/tours";
export const buenosAiresTours: Tour[] = [
  {
    title: "Tango Experience & Milonga Night",
    description:
      "Immerse yourself in Argentina's passionate dance culture with a private tango lesson, followed by dinner and an authentic milonga (dance hall) experience with local dancers.",
    images: [
      "/images/tours/buenos-aires/tango-lesson.jpg",
      "/images/tours/buenos-aires/milonga.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Tango", "Dance", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Gabriela Mendez",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "I have no dance experience - is this still suitable?",
        answer:
          "Absolutely! Our instructors specialize in teaching beginners, and the private lesson is tailored to your level. The focus is on enjoying the experience and cultural immersion, not dance perfection.",
      },
      {
        question: "What should I wear for the tango lesson?",
        answer:
          "Comfortable clothing that allows for movement is best. Many participants wear dressy casual attire, but you can also wear comfortable shoes suitable for dancing. We recommend avoiding sneakers or overly casual footwear.",
      },
    ],
  },
  {
    title: "Hidden Buenos Aires: Architecture & Street Art",
    description:
      "Discover the city beyond the tourist trail, exploring unique architectural gems, vibrant street art neighborhoods, and local designer boutiques with insights from an urban culture specialist.",
    images: [
      "/images/tours/buenos-aires/street-art.jpg",
      "/images/tours/buenos-aires/hidden-architecture.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Architecture", "Art", "Local Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Diego Ramirez",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Which neighborhoods do we visit?",
        answer:
          "The tour explores the contrasting neighborhoods of Palermo Soho with its street art scene, San Telmo's hidden architectural gems, and the colorful working-class area of La Boca beyond the tourist section of Caminito.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. The walking pace is relaxed, and we can adjust the itinerary to include child-friendly stops like parks or ice cream shops.",
      },
      {
        question: "Can we customize the tour?",
        answer:
          "Absolutely! We can tailor the tour to focus on specific interests such as architecture styles, street art themes, or local crafts. Just let us know your preferences when booking.",
      },
    ],
  },
  {
    title: "Buenos Aires Culinary Journey: From Markets to Dining",
    description:
      "Experience the flavors of Argentina with a guided tour through local markets, tastings of traditional dishes, and a visit to a renowned parrilla (steakhouse) for an authentic asado dinner.",
    images: [
      "/images/tours/buenos-aires/market-tour.jpg",
      "/images/tours/buenos-aires/asado-dinner.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Food", "Culinary", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lucia Fernandez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes tastings of local cheeses, cured meats, empanadas, dulce de leche desserts, and a full asado dinner featuring various cuts of Argentine beef cooked over an open flame.",
      },
      {
        question: "Is vegetarian or vegan food available?",
        answer:
          "While the focus is on traditional Argentine cuisine, we can accommodate vegetarian or vegan diets with advance notice. Please inform us when booking.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to ensure availability and allow us to customize the experience based on your dietary preferences.",
      },
    ],
  },
  {
    title: "Buenos Aires Nightlife: Bars & Tango Show",
    description:
      "Experience the vibrant nightlife of Buenos Aires with a guided tour of trendy bars, local craft cocktails, and a spectacular tango show at a historic venue.",
    images: [
      "/images/tours/buenos-aires/nightlife-bars.jpg",
      "/images/tours/buenos-aires/tango-show.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.7,
    tags: ["Nightlife", "Tango", "Local Culture"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Alvarez",
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What time does the tour start?",
        answer:
          "The tour typically starts around 8 PM to experience the nightlife atmosphere. We can adjust the start time based on your preferences.",
      },
      {
        question: "Is dinner included in the tour?",
        answer:
          "Dinner is not included, but we can recommend local restaurants or bars where you can enjoy a meal before or after the tango show.",
      },
      {
        question: "Are drinks included in the bar stops?",
        answer:
          "Drinks are not included in the tour price, but we will visit several bars where you can purchase craft cocktails and local wines.",
      },
    ],
  },
  {
    title: "Buenos Aires Historical Landmarks & Parks",
    description:
      "Explore the rich history of Buenos Aires with a guided tour of iconic landmarks, including Plaza de Mayo, Recoleta Cemetery, and the beautiful parks of Palermo.",
    images: [
      "/images/tours/buenos-aires/plaza-de-mayo.jpg",
      "/images/tours/buenos-aires/recoleta-cemetery.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.8,
    tags: ["History", "Culture", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Carlos Gutierrez",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What historical sites will we visit?",
        answer:
          "The tour includes visits to Plaza de Mayo, Casa Rosada, the Metropolitan Cathedral, and Recoleta Cemetery, where you can see the tomb of Eva Perón.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We can adjust the pace and include stops at parks or playgrounds if needed.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "We recommend booking at least 24 hours in advance to ensure availability and allow us to tailor the experience to your interests.",
      },
    ],
  },
  {
    title: "Buenos Aires River Delta Adventure",
    description:
      "Escape the city with a guided boat tour through the scenic Tigre Delta, exploring its lush islands, local markets, and enjoying a riverside picnic.",
    images: [
      "/images/tours/buenos-aires/tigre-delta.jpg",
      "/images/tours/buenos-aires/river-picnic.jpg",
    ],
    duration: "6 hours",
    price: "$100",
    rating: 4.9,
    tags: ["Nature", "Adventure", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Martín López",
    tourCategoryId: "nature",
    faqs: [
      {
        question: "What should I wear for the boat tour?",
        answer:
          "We recommend comfortable clothing suitable for warm weather, sunscreen, and a hat. Closed-toe shoes are advisable as some areas may be muddy.",
      },
      {
        question: "Is food included in the tour?",
        answer:
          "Yes, we provide a picnic lunch featuring local specialties. If you have dietary restrictions, please inform us when booking.",
      },
      {
        question: "Do we need to bring anything?",
        answer:
          "We recommend bringing a camera for photos, sunglasses, and any personal items you may need during the day.",
      },
    ],
  },
  {
    title: "Buenos Aires Art & Culture Tour",
    description:
      "Discover the vibrant art scene of Buenos Aires with a guided tour of contemporary galleries, street art murals, and cultural institutions, including a visit to the MALBA (Museum of Latin American Art).",
    images: [
      "/images/tours/buenos-aires/art-gallery.jpg",
      "/images/tours/buenos-aires/malba.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Art", "Culture", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ana Torres",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of art will we see?",
        answer:
          "The tour includes contemporary art galleries, street art murals in neighborhoods like Palermo and Colegiales, and a visit to the MALBA to see works by Latin American artists.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We can adjust the itinerary to include interactive art experiences for younger participants.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "We recommend booking at least 24 hours in advance to ensure availability and allow us to customize the experience based on your interests.",
      },
    ],
  },
  {
    title: "Buenos Aires Parks & Gardens Tour",
    description:
      "Explore the green spaces of Buenos Aires with a guided tour of its most beautiful parks and gardens, including the Bosques de Palermo, Japanese Garden, and Rosedal.",
    images: [
      "/images/tours/buenos-aires/palermo-parks.jpg",
      "/images/tours/buenos-aires/japanese-garden.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Nature", "Parks", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Clara Martinez",
    tourCategoryId: "nature",
    faqs: [
      {
        question: "What should I wear for the parks tour?",
        answer:
          "Comfortable walking shoes and light clothing are recommended. A hat and sunscreen are also advisable, especially in warmer months.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We can include stops at playgrounds or picnic areas to make it enjoyable for younger visitors.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "We recommend booking at least 24 hours in advance to ensure availability and allow us to tailor the experience to your interests.",
      },
    ],
  },
];

export default buenosAiresTours;
