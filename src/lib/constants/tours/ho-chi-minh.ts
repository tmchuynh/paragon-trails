import { Tour } from "@/lib/interfaces/services/tours";

export const hoChiMinhTours: Tour[] = [
  {
    title: "Cu Chi Tunnels & Vietnam War History",
    description:
      "Journey through Vietnam's complex wartime history with an expert guide at the Cu Chi Tunnels complex, exploring underground networks, hidden trapdoors, and gaining historical perspective from both sides of the conflict.",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    region: "Southern Vietnam",
    images: [
      "/images/tours/ho-chi-minh/cu-chi-tunnels.jpg",
      "/images/tours/ho-chi-minh/war-remnants.jpg",
    ],
    duration: "7 hours",
    price: "$65",
    rating: 4.8,
    tags: ["History", "War", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Can we go inside the tunnels?",
        answer:
          "Yes, you can enter a section of the tunnels that has been slightly enlarged for visitors, though they remain quite narrow and low. This is optional, and those who prefer not to go underground can still experience most of the tour. The tunnels are not recommended for people with claustrophobia or mobility issues.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly, but please note that the tunnels can be cramped and dark. Children should be accompanied by an adult at all times. We recommend bringing a flashlight for younger children who may want to explore the tunnels.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Wear comfortable clothing and sturdy shoes suitable for walking and crawling through the tunnels. Lightweight, breathable fabrics are best due to the warm climate. We also recommend bringing a hat, sunscreen, and insect repellent.",
      },
    ],
  },
  {
    title: "Saigon Street Food Adventure",
    description:
      "Discover the vibrant flavors of Vietnamese cuisine with a guided food tour through bustling markets and hidden street food stalls, sampling regional specialties with insights from a local foodie expert.",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    region: "Southern Vietnam",
    images: [
      "/images/tours/ho-chi-minh/street-food.jpg",
      "/images/tours/ho-chi-minh/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Food", "Markets", "Local"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the food safe for foreigners?",
        answer:
          "We carefully select vendors with the highest standards of hygiene and fresh ingredients. Your guide will explain safe eating practices and can recommend the best dishes based on your spice tolerance and dietary preferences. We provide hand sanitizer and bottled water throughout the tour.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local favorites, including pho, banh mi, fresh spring rolls, and unique desserts. We can accommodate dietary restrictions, so please inform us in advance if you have any allergies or preferences.",
      },
      {
        question: "Do I need to bring cash for the food tour?",
        answer:
          "No, the tour price includes all food samples. However, you may want to bring some cash for optional purchases or souvenirs at the markets.",
      },
    ],
  },
  {
    title: "Mekong Delta Day Trip",
    description:
      "Experience the lush landscapes and traditional lifestyles of the Mekong Delta with a full-day tour that includes boat rides, local markets, and visits to family-run farms and workshops.",
    city: "My Tho",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/ho-chi-minh/mekong-delta.jpg",
      "/images/tours/ho-chi-minh/boat-ride.jpg",
    ],
    duration: "8 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Nature", "Culture", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I wear for the Mekong Delta tour?",
        answer:
          "Wear comfortable, lightweight clothing suitable for warm weather. Closed-toe shoes are recommended for walking on uneven surfaces. A hat and sunscreen are advisable, as well as insect repellent.",
      },
      {
        question: "Is the boat ride safe?",
        answer:
          "Yes, all boats used in the tour are equipped with life jackets and are operated by experienced local captains. Safety is our top priority, and we ensure that all safety regulations are followed.",
      },
      {
        question: "Can we customize the tour itinerary?",
        answer:
          "While the main highlights are fixed, we can accommodate some customization based on your interests. Please discuss any specific requests with your guide at the start of the tour.",
      },
    ],
  },
  {
    title: "Saigon River Sunset Cruise",
    description:
      "Relax on a scenic evening cruise along the Saigon River, enjoying stunning sunset views, traditional Vietnamese music, and a selection of local snacks and drinks.",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    region: "Southern Vietnam",
    images: [
      "/images/tours/ho-chi-minh/sunset-cruise.jpg",
      "/images/tours/ho-chi-minh/river-view.jpg",
    ],
    duration: "2 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Romantic", "Scenic", "Relaxation"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is dinner included in the cruise?",
        answer:
          "The cruise includes light snacks and drinks, but a full dinner is not provided. However, you can order additional food from the onboard menu at an extra cost.",
      },
      {
        question: "What time does the sunset cruise start?",
        answer:
          "The cruise typically departs around 5:30 PM to catch the sunset, but exact times may vary based on the season. Please check with your guide for the specific schedule on your tour date.",
      },
      {
        question: "Can we book a private cruise for special occasions?",
        answer:
          "Yes, private cruises can be arranged for special occasions such as anniversaries or birthdays. Please contact us in advance to discuss options and pricing.",
      },
    ],
  },
];

export default hoChiMinhTours;
