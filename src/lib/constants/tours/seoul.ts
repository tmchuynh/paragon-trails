import { Tour } from "@/lib/interfaces/services/tours";

export const seoulTours: Tour[] = [
  {
    title: "Seoul Palace & Heritage Walking Tour",
    description:
      "Explore Seoul's magnificent royal palaces and historic districts with an expert guide, discovering the city's rich cultural heritage and dynastic history.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/gyeongbokgung-palace.jpg",
      "/images/tours/seoul/bukchon-hanok.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.8,
    tags: ["History", "Culture", "Walking Tour"],
    meetingPoint: {
      address: "Exit 5, Gyeongbokgung Station, Seoul",
      coordinates: {
        latitude: 37.5759,
        longitude: 126.9751,
      },
      instructions:
        "Meet outside Exit 5 of Gyeongbokgung Station. Your guide will be holding a sign with 'Seoul Heritage Tour' written on it.",
      contactNumber: "+82 2 1234 5678",
      contactEmail: "bookings@seoulheritagetours.com",
    },
    highlights: [
      "Explore Gyeongbokgung Palace, the largest of Seoul's five royal palaces",
      "Witness the Royal Guard Changing Ceremony in traditional Joseon-era costumes",
      "Stroll through Bukchon Hanok Village with its preserved traditional Korean houses",
      "Visit Insadong district known for traditional crafts, tea houses, and galleries",
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Entrance fees to all palaces and museums",
      "Traditional Korean tea experience",
      "Bottled water",
      "Public transportation during the tour (subway, bus)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Personal expenses and souvenirs",
      "Gratuities",
    ],
    itinerary: [
      "9:30 AM - Meet at Gyeongbokgung Station",
      "9:45 AM - Tour of Gyeongbokgung Palace and National Folk Museum",
      "11:30 AM - Walk to Bukchon Hanok Village",
      "12:30 PM - Lunch break at local restaurant (not included)",
      "1:30 PM - Explore Insadong art district",
      "2:45 PM - Visit Jogyesa Temple",
      "3:30 PM - Tour concludes at Insadong",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund for cancellations 24-48 hours before. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear for the palace tour?",
        answer:
          "Comfortable walking shoes and weather-appropriate clothing are recommended. Palaces involve a fair amount of walking on uneven surfaces. In summer, bring sun protection, and in winter, dress warmly as many palace grounds are exposed to the elements.",
      },
      {
        question: "Is photography allowed at the palaces?",
        answer:
          "Yes, photography is permitted in most areas of the palaces for personal use. Some specific exhibits or interior rooms may have restrictions, which your guide will point out.",
      },
      {
        question: "Can we see the Royal Guard Changing Ceremony?",
        answer:
          "Yes, the tour is timed to include the Royal Guard Changing Ceremony at Gyeongbokgung Palace, which takes place at 10:00 AM and 2:00 PM (not available on Tuesdays when the palace is closed).",
      },
    ],
  },
  {
    title: "Korean Food Tour & Cooking Class",
    description:
      "Immerse yourself in Korean culinary culture with a guided tour through traditional markets, street food alleys, and a hands-on cooking class where you'll prepare authentic Korean dishes.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/food-market.jpg",
      "/images/tours/seoul/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Cooking", "Market"],
    meetingPoint: {
      address: "Exit 2, Jongno 3-ga Station, Seoul",
      coordinates: {
        latitude: 37.5706,
        longitude: 126.9912,
      },
      instructions:
        "Meet outside Exit 2 of Jongno 3-ga Station. Your guide will be holding a red umbrella with 'Seoul Food Tour' written on it.",
      contactNumber: "+82 2 3456 7890",
      contactEmail: "eat@seoulfoodtours.com",
    },
    highlights: [
      "Explore Gwangjang Market, one of Seoul's oldest and largest traditional markets",
      "Sample diverse Korean street foods like bindaetteok (mung bean pancakes) and tteokbokki (spicy rice cakes)",
      "Learn to prepare 3-4 authentic Korean dishes in a hands-on cooking class",
      "Discover the essential ingredients and techniques of Korean cuisine",
    ],
    inclusions: [
      "Professional food guide",
      "All food tastings at the market (6-7 different items)",
      "Cooking class with all ingredients and equipment",
      "Take-home recipe cards",
      "Traditional tea or rice wine tasting",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food beyond included tastings",
      "Extra beverages",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Jongno 3-ga Station",
      "10:15 AM - Guided tour of Gwangjang Market with food tastings",
      "11:45 AM - Visit local grocery to learn about Korean ingredients",
      "12:30 PM - Walk to cooking school location",
      "1:00 PM - Hands-on cooking class",
      "2:30 PM - Enjoy the meal you prepared",
      "3:00 PM - Tour concludes at cooking school",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the tour. 50% refund if canceled 48-72 hours before. No refund for cancellations less than 48 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The cooking class typically includes 3-4 traditional Korean dishes such as bibimbap (mixed rice bowl), bulgogi (marinated beef), japchae (stir-fried glass noodles), and kimchi. Vegetarian options are available with advance notice.",
      },
      {
        question: "Do I need cooking experience?",
        answer:
          "No prior cooking experience is necessary. Our instructors will guide you through each step, making the class enjoyable for beginners while still interesting for experienced home cooks.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary restrictions with advance notice. Please inform us of any allergies or restrictions when booking.",
      },
    ],
  },
  {
    title: "Modern Seoul Architecture & Design Tour",
    description:
      "Discover Seoul's innovative contemporary architecture, trendsetting design districts, and cutting-edge cultural spaces that showcase Korea's modern creative vision.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/dongdaemun-design-plaza.jpg",
      "/images/tours/seoul/modern-architecture.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Architecture", "Design", "Modern"],
    meetingPoint: {
      address: "Exit 1, Dongdaemun Design Plaza Station, Seoul",
      coordinates: {
        latitude: 37.5664,
        longitude: 127.0095,
      },
      instructions:
        "Meet at Exit 1 of Dongdaemun Design Plaza Station. Your guide will be waiting with an iPad displaying 'Seoul Design Tour'.",
      contactNumber: "+82 2 5678 9012",
      contactEmail: "hello@seouldesigntours.com",
    },
    highlights: [
      "Tour the futuristic Dongdaemun Design Plaza designed by Zaha Hadid",
      "Visit the stunning Sebitseom floating islands on the Han River",
      "Explore the innovative Seoul Museum of Art and its exhibitions",
      "Discover trendy design shops and studios in Gangnam Design District",
    ],
    inclusions: [
      "Professional design and architecture guide",
      "Public transportation during the tour",
      "Entrance fees to museums and exhibitions",
      "Bottled water",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Personal expenses and souvenirs",
      "Gratuities",
    ],
    itinerary: [
      "1:00 PM - Meet at Dongdaemun Design Plaza Station",
      "1:15 PM - Tour of Dongdaemun Design Plaza and exhibitions",
      "2:30 PM - Travel to Sebitseom floating islands",
      "3:00 PM - Explore Sebitseom architectural features",
      "3:45 PM - Visit to Seoul Museum of Art",
      "4:45 PM - Tour concludes at Gangnam Design District",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. 50% refund if canceled 12-24 hours before. No refund for cancellations less than 12 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Is this tour suitable for those without an architecture background?",
        answer:
          "Absolutely! The tour is designed to be engaging and informative for everyone, regardless of prior knowledge. Our guides explain concepts in accessible ways that help you appreciate Seoul's innovative design landscape.",
      },
      {
        question: "Will we go inside all the buildings we visit?",
        answer:
          "We enter most of the architectural highlights on the tour, including Dongdaemun Design Plaza and Seoul Museum of Art. Some buildings may only be viewed from the exterior due to access restrictions.",
      },
      {
        question: "Will there be time for shopping in the design districts?",
        answer:
          "Yes, we include some free time in the Gangnam Design District where you can explore design shops and studios. Your guide will provide recommendations based on your interests.",
      },
    ],
  },
  {
    title: "Seoul Night Culture & Local Street Food",
    description:
      "Experience Seoul's vibrant nightlife with a guided evening tour through bustling night markets, neon-lit streets, and local food scenes that showcase the city after dark.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/night-market.jpg",
      "/images/tours/seoul/street-food-night.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.8,
    tags: ["Nightlife", "Food", "Local Experience"],
    meetingPoint: {
      address: "Exit 6, Hongdae Station, Seoul",
      coordinates: {
        latitude: 37.5572,
        longitude: 126.9235,
      },
      instructions:
        "Meet outside Exit 6 of Hongdae Station. Your guide will be holding a small lantern with 'Seoul Night Tour' written on it.",
      contactNumber: "+82 2 6789 0123",
      contactEmail: "night@seoulexplorers.com",
    },
    highlights: [
      "Experience Hongdae's energetic university district with street performers and nightlife",
      "Sample diverse Korean street food and specialty snacks",
      "Visit a traditional night market with local vendors and crafts",
      "Enjoy panoramic night views of Seoul from a secret local viewpoint",
    ],
    inclusions: [
      "Expert local nightlife guide",
      "Street food tastings (5-6 different items)",
      "One alcoholic or non-alcoholic Korean beverage",
      "Public transportation during the tour",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included tastings",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "6:00 PM - Meet at Hongdae Station",
      "6:15 PM - Explore Hongdae's vibrant street culture and performances",
      "7:00 PM - Street food tasting tour begins",
      "8:00 PM - Visit to traditional night market",
      "9:00 PM - Travel to secret viewpoint for Seoul night views",
      "9:30 PM - Final food tastings and beverage",
      "10:00 PM - Tour concludes near Hongdae",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. 50% refund if canceled 12-24 hours before. No refund for cancellations less than 12 hours before the tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "Is this tour suitable for solo travelers?",
        answer:
          "Absolutely! This is one of our most popular tours for solo travelers, as it provides a safe and fun way to experience Seoul's nightlife with a knowledgeable local guide and a small group of fellow travelers.",
      },
      {
        question: "What type of street food will we try?",
        answer:
          "You'll sample a variety of Korean street foods such as tteokbokki (spicy rice cakes), hotteok (sweet filled pancakes), Korean fried chicken, fish cakes, and other seasonal specialties. We can accommodate most dietary preferences with advance notice.",
      },
      {
        question: "Is there a lot of walking on this tour?",
        answer:
          "The tour involves moderate walking (approximately 3-4 km total) at a leisurely pace with frequent stops. We use public transportation between some locations to cover more ground and see different neighborhoods.",
      },
    ],
  },
  {
    title: "DMZ & Joint Security Area Day Tour",
    description:
      "Visit one of the world's most heavily fortified borders with a guided tour to the Korean Demilitarized Zone (DMZ) and Joint Security Area (JSA), gaining insights into the complex history between North and South Korea.",
    city: "Seoul",
    country: "South Korea",
    region: "Seoul Capital Area",
    images: [
      "/images/tours/seoul/dmz-border.jpg",
      "/images/tours/seoul/joint-security-area.jpg",
    ],
    duration: "8 hours",
    price: "$130",
    rating: 4.8,
    tags: ["History", "Military", "Educational"],
    meetingPoint: {
      address: "Exit 5, City Hall Station, Seoul",
      coordinates: {
        latitude: 37.5662,
        longitude: 126.9766,
      },
      instructions:
        "Meet at Exit 5 of City Hall Station at 7:45 AM. Your guide will be holding a sign with 'DMZ Tour' written on it. Please bring your passport.",
      contactNumber: "+82 2 7890 1234",
      contactEmail: "dmztours@koreaheritagetours.com",
    },
    highlights: [
      "Visit the Joint Security Area (JSA) where North and South Korean soldiers stand face-to-face",
      "See the iconic blue conference buildings that straddle the border",
      "Explore the Third Infiltration Tunnel discovered in 1978",
      "Visit Dora Observatory for views into North Korea",
    ],
    inclusions: [
      "Round-trip transportation from Seoul in climate-controlled vehicle",
      "English-speaking guide with military and historical expertise",
      "All entrance fees and permits",
      "DMZ orientation and safety briefing",
      "Lunch at local restaurant",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Optional souvenir photos at certain locations",
      "Gratuities",
    ],
    itinerary: [
      "8:00 AM - Departure from Seoul City Hall",
      "9:30 AM - Arrival at DMZ Visitor Center for security check",
      "10:00 AM - Tour of the Third Infiltration Tunnel",
      "11:00 AM - Visit to Dora Observatory",
      "12:00 PM - Lunch at local restaurant",
      "1:30 PM - Security briefing for JSA visit",
      "2:00 PM - Tour of Joint Security Area and conference buildings",
      "3:30 PM - Departure from DMZ",
      "5:00 PM - Return to Seoul City Hall",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days before. No refund for cancellations less than 3 days before the tour. Tour may be canceled on short notice due to military operations or security concerns, with full refund provided.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "educational",
    faqs: [
      {
        question: "What documents do I need to bring?",
        answer:
          "You must bring your original passport. Tour participants are subject to security screening, and proper identification is required by military authorities. Without your passport, you will not be permitted to join the tour.",
      },
      {
        question: "Are there any dress code requirements?",
        answer:
          "Yes, there is a strict dress code for the JSA portion. No torn jeans, sleeveless shirts, sandals, or revealing clothing. Military-style clothing is not permitted. Smart casual attire is recommended.",
      },
      {
        question: "Is photography allowed?",
        answer:
          "Photography is permitted in designated areas only. Your guide will clearly indicate where photos are allowed and where they are prohibited. Military personnel may inspect cameras and request deletion of unauthorized photos.",
      },
    ],
  },
];

export default seoulTours;
