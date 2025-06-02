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

    meetingPoint: {
      address: "Saigon Opera House, 7 Công Trường Lam Sơn, District 1, HCMC",
      coordinates: {
        latitude: 10.7797,
        longitude: 106.7017,
      },
      instructions:
        "Meet at the front steps of the Saigon Opera House. Your guide will be holding a sign with 'Cu Chi Tunnels Tour' written on it.",
      contactNumber: "+84 28 1234 5678",
      contactEmail: "cuchi@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Explore the intricate Cu Chi Tunnel network used during the Vietnam War",
      "Learn about guerrilla warfare tactics and see booby traps up close",
      "Opportunity to crawl through a section of the tunnels (optional)",
      "Watch documentary film providing historical context",
      "Visit War Remnants Museum in Ho Chi Minh City",
    ],

    inclusions: [
      "Professional English-speaking historian guide",
      "Air-conditioned transportation to/from Cu Chi Tunnels",
      "Entrance fees to Cu Chi Tunnels and War Remnants Museum",
      "Bottled water and light snacks",
      "Ammunition for shooting range (optional activity, extra cost)",
      "Sample of traditional tapioca eaten during wartime",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (available for purchase at local restaurant)",
      "Shooting range fees (available on site, approximately $1-3 per bullet)",
      "Personal expenses and souvenirs",
      "Tips and gratuities",
    ],

    itinerary: [
      "08:00 - Meet at Saigon Opera House",
      "08:15 - Departure for Cu Chi Tunnels (1.5 hour drive)",
      "09:45 - Arrival at Cu Chi Tunnels, watch introductory documentary",
      "10:15 - Guided tour of tunnel system and war remnants",
      "11:00 - Demonstration of tunnel entrances and booby traps",
      "11:30 - Optional tunnel crawling experience",
      "12:00 - Sample wartime tapioca and tea",
      "12:30 - Optional shooting range activity (extra cost)",
      "13:00 - Return journey to Ho Chi Minh City",
      "14:30 - Visit War Remnants Museum",
      "15:30 - Tour concludes at War Remnants Museum",
    ],

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

    meetingPoint: {
      address:
        "Ben Thanh Market (front entrance), Le Loi Street, District 1, HCMC",
      coordinates: {
        latitude: 10.7724,
        longitude: 106.698,
      },
      instructions:
        "Meet at the main entrance gate of Ben Thanh Market on Le Loi Street. Your guide will be holding a sign with 'Street Food Tour' written on it.",
      contactNumber: "+84 28 1234 5679",
      contactEmail: "foodtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Sample 8-10 authentic Vietnamese dishes at local favorite spots",
      "Explore hidden alleyway eateries most tourists never find",
      "Visit bustling Ben Thanh Market with expert food guidance",
      "Learn about Vietnamese food culture and cooking techniques",
      "Experience Saigon's vibrant street life through its cuisine",
    ],

    inclusions: [
      "Local food expert guide",
      "8-10 food tastings (sufficient for a full meal)",
      "1 local beer or fresh juice",
      "1 Vietnamese coffee",
      "Bottled water throughout the tour",
      "Small group size (maximum 8 participants)",
      "Food guide booklet with recommendations",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included tastings",
      "Personal expenses",
      "Tips and gratuities",
    ],

    itinerary: [
      "17:00 - Meet at Ben Thanh Market entrance",
      "17:15 - Market tour with ingredient explanations and first tasting",
      "17:45 - Walk to hidden alleyway for authentic banh mi sandwich",
      "18:15 - Visit local street vendor for fresh spring rolls",
      "18:45 - Try specialty noodle soup at family-run restaurant",
      "19:15 - Sample regional Vietnamese snacks and street desserts",
      "19:45 - Enjoy traditional Vietnamese coffee preparation",
      "20:30 - Final tasting of local street food specialty",
      "21:00 - Tour concludes with recommendations for continued exploration",
    ],

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

    meetingPoint: {
      address: "Saigon Opera House, 7 Công Trường Lam Sơn, District 1, HCMC",
      coordinates: {
        latitude: 10.7797,
        longitude: 106.7017,
      },
      instructions:
        "Meet at the front steps of the Saigon Opera House. Your guide will be holding a sign with 'Mekong Delta Tour' written on it.",
      contactNumber: "+84 28 1234 5680",
      contactEmail: "mekong@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-24",
      "2023-12-31",
      "2024-01-07",
      "2024-01-14",
      "2024-01-21",
      "2024-01-28",
      "2024-02-04",
      "2024-02-11",
      "2024-02-18",
      "2024-02-25",
    ],

    highlights: [
      "Cruise along the mighty Mekong River and its narrow canals",
      "Visit traditional workshops producing coconut candy and honey products",
      "Enjoy fresh tropical fruits and local music at a riverside orchard",
      "Experience travel by various boats including sampan rowing boats",
      "Learn about daily life in the fertile Mekong Delta region",
    ],

    inclusions: [
      "Professional English-speaking guide",
      "Air-conditioned transportation to/from the Mekong Delta",
      "Boat trips on the Mekong River including motorboat and sampan",
      "Entrance fees to all visited sites",
      "Tropical fruit tasting and honey tea",
      "Traditional Vietnamese lunch with Mekong specialties",
      "Bottled water throughout the day",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages",
      "Optional activities not mentioned in itinerary",
      "Personal expenses and souvenirs",
      "Tips and gratuities",
    ],

    itinerary: [
      "08:00 - Meet at Saigon Opera House",
      "08:15 - Departure for My Tho (2 hour drive)",
      "10:15 - Board boat at My Tho pier for Mekong River cruise",
      "10:45 - Visit small islands with tropical fruit orchards",
      "11:15 - Honey bee farm visit with honey tea tasting",
      "11:45 - Sampan boat ride through narrow canals",
      "12:30 - Traditional lunch at riverside restaurant",
      "13:30 - Visit to coconut candy workshop",
      "14:15 - Explore local village and agricultural activities",
      "15:00 - Return boat trip to My Tho pier",
      "15:30 - Begin return journey to Ho Chi Minh City",
      "17:30 - Arrive back at Saigon Opera House",
    ],

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

    meetingPoint: {
      address:
        "Saigon River Cruise Terminal, 5 Tôn Đức Thắng, District 1, HCMC",
      coordinates: {
        latitude: 10.7719,
        longitude: 106.7052,
      },
      instructions:
        "Meet at the Saigon River Cruise Terminal entrance. Look for staff holding a 'Sunset Cruise' sign.",
      contactNumber: "+84 28 1234 5681",
      contactEmail: "rivercruise@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-22",
      "2023-12-23",
      "2023-12-29",
      "2023-12-30",
      "2024-01-05",
      "2024-01-06",
      "2024-01-12",
      "2024-01-13",
      "2024-01-19",
      "2024-01-20",
      "2024-01-26",
      "2024-01-27",
      "2024-02-02",
      "2024-02-03",
      "2024-02-09",
      "2024-02-10",
      "2024-02-16",
      "2024-02-17",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Scenic sunset views over the Saigon skyline from the river",
      "Pass by historic landmarks including Saigon Bridge and port areas",
      "Live traditional Vietnamese music performance",
      "Opportunity for stunning photography of the city at dusk",
      "Relaxing ambiance away from city crowds",
    ],

    inclusions: [
      "2-hour river cruise on comfortable boat",
      "Welcome drink (choice of wine, beer or soft drink)",
      "Selection of Vietnamese canapes and fruit platter",
      "Live traditional music performance",
      "English-speaking guide providing commentary on sites passed",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond those mentioned",
      "Personal expenses",
      "Tips and gratuities",
    ],

    itinerary: [
      "17:30 - Meet at Saigon River Cruise Terminal",
      "17:45 - Welcome aboard and safety briefing",
      "18:00 - Cruise begins along the Saigon River",
      "18:15 - Welcome drink service and Vietnamese canapes",
      "18:30 - Pass by historic riverside landmarks with guide commentary",
      "18:45 - Live traditional Vietnamese music performance",
      "19:00 - Prime sunset viewing from the river",
      "19:15 - Fresh fruit service and continued cruise",
      "19:45 - Return journey with city lights view",
      "20:00 - Arrive at terminal and disembark",
    ],

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
