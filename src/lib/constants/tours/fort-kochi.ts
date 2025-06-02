import { Tour } from "@/lib/interfaces/services/tours";

export const fortKochiTours: Tour[] = [
  {
    title: "Colonial Heritage & Chinese Fishing Nets",
    description:
      "Explore Fort Kochi's rich colonial past with visits to Dutch, Portuguese, and British heritage sites, culminating in sunset at the iconic Chinese fishing nets with opportunity to assist local fishermen.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/chinese-fishing-nets.jpg",
      "/images/tours/fort-kochi/colonial-buildings.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Historical", "Cultural", "Photography"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Santa Cruz Basilica, Fort Kochi",
      coordinates: {
        latitude: 9.9659,
        longitude: 76.2429,
      },
      instructions:
        "Meet your guide in front of the main entrance of Santa Cruz Basilica. Guide will be holding a blue umbrella.",
      contactNumber: "+91 98765 43210",
      contactEmail: "fortkochiheritage@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-22",
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
      "Visit the historic St. Francis Church, the oldest European church in India",
      "Explore Mattancherry Palace with its stunning murals and Dutch architecture",
      "Walk through colonial streets lined with Portuguese and British buildings",
      "Experience the iconic Chinese fishing nets at sunset",
      "Opportunity to help local fishermen operate the traditional fishing nets",
    ],

    inclusions: [
      "Professional English-speaking guide",
      "Entrance fees to all monuments",
      "Bottled water",
      "Sunset refreshments",
      "Interactive demonstration with fishermen",
      "Photo opportunities at the Chinese fishing nets",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Personal expenses",
      "Tips and gratuities",
      "Additional food and drinks not specified",
    ],

    itinerary: [
      "14:00 - Meet at Santa Cruz Basilica for tour introduction",
      "14:15 - Visit St. Francis Church and learn about its Portuguese origins",
      "15:00 - Explore Mattancherry Palace and Dutch historical influence",
      "15:45 - Walk through Jew Town and discuss its historical significance",
      "16:30 - Tea break at a heritage cafe",
      "17:00 - Visit the Chinese fishing nets and learn about their history",
      "17:30 - Participate in operating the fishing nets with local fishermen",
      "18:00 - Watch sunset over the Arabian Sea",
      "18:30 - Tour concludes at the fishing nets",
    ],

    faqs: [
      {
        question: "What makes the Chinese fishing nets unique?",
        answer:
          "These distinctive fishing nets are believed to have been introduced by Chinese explorer Zheng He in the 14th century and represent a rare cultural exchange between ancient China and Kerala. The cantilever systems use counterweights and require multiple operators, creating a spectacular silhouette at sunset that has become symbolic of Fort Kochi.",
      },
      {
        question: "Will we get to operate the fishing nets?",
        answer:
          "Yes, you'll have the opportunity to join local fishermen in operating these massive nets. They'll demonstrate the traditional techniques and invite you to participate in lowering and raising the nets. It's a cooperative effort that provides insight into this centuries-old fishing method.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we'll cover several historical sites on foot. Light, breathable clothing is advisable for the tropical climate. For sunset at the fishing nets, a hat and sunglasses are useful, and you may want to bring a light covering for cooler evening breezes.",
      },
    ],
  },
  {
    title: "Kerala Cuisine Cooking Class & Spice Market",
    description:
      "Discover Kerala's aromatic cuisine with a guided tour of Fort Kochi's spice markets followed by a hands-on cooking class in a traditional home, learning to prepare authentic Syrian Christian and Malabari dishes.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/cooking-class.jpg",
      "/images/tours/fort-kochi/spice-market.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Culinary", "Cooking", "Spices"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Kochi Spice Market, Market Road, Fort Kochi",
      coordinates: {
        latitude: 9.9675,
        longitude: 76.2422,
      },
      instructions:
        "Meet at the main entrance to the spice market. Look for our guide with a 'Kerala Cuisine' sign.",
      contactNumber: "+91 98765 43211",
      contactEmail: "keralacuisine@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-21",
      "2023-12-28",
      "2024-01-04",
      "2024-01-11",
      "2024-01-18",
      "2024-01-25",
      "2024-02-01",
      "2024-02-08",
      "2024-02-15",
      "2024-02-22",
    ],

    highlights: [
      "Guided tour of Fort Kochi's historic spice markets",
      "Learn about Kerala's spice trade history and culinary influences",
      "Visit a traditional Kerala home kitchen",
      "Hands-on cooking class with a local family",
      "Prepare and enjoy an authentic multi-course Kerala meal",
    ],

    inclusions: [
      "Market tour with spice expert",
      "All cooking ingredients and materials",
      "Recipe booklet to take home",
      "Full traditional Kerala meal",
      "Non-alcoholic beverages including fresh coconut water",
      "Spice samples to take home",
    ],

    exclusions: [
      "Transportation to and from the meeting point",
      "Alcoholic beverages",
      "Additional spice purchases beyond provided samples",
      "Personal cooking equipment",
    ],

    itinerary: [
      "10:00 - Meet at the spice market entrance for introductions",
      "10:15 - Guided tour of the spice market with tastings and explanations",
      "11:30 - Visit to traditional Kerala home for cooking class",
      "12:00 - Introduction to Kerala cuisine and preparation techniques",
      "12:30 - Hands-on cooking class (preparing 4-5 dishes)",
      "14:00 - Enjoy the meal you prepared with your hosts",
      "15:00 - Tour concludes with recipe sharing and spice samples",
    ],

    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The class focuses on signature Kerala dishes such as fish molee (coconut curry), appam (rice pancakes), avial (mixed vegetable curry with coconut), and payasam (cardamom-infused dessert). Menus vary seasonally based on available ingredients, but always include a balanced selection of vegetarian and non-vegetarian options.",
      },
      {
        question: "Do I need cooking experience?",
        answer:
          "No prior experience is necessary! The class is designed for all skill levels, from beginners to experienced cooks. Our host will guide you through each step and explain techniques as you go.",
      },
      {
        question: "Can special dietary needs be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and most other dietary restrictions with advance notice. Kerala cuisine naturally includes many vegetarian options, and we can easily adapt recipes to suit your needs.",
      },
    ],
  },
  {
    title: "Kathakali Classical Dance & Cultural Performance",
    description:
      "Experience the ancient art of Kathakali with a behind-the-scenes look at elaborate makeup preparation, followed by a mesmerizing performance of this classical Kerala dance-drama that combines literature, music, painting, acting, and dance.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/kathakali-makeup.jpg",
      "/images/tours/fort-kochi/kathakali-performance.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Arts", "Cultural", "Performance"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Kerala Kathakali Centre, KB Jacob Road, Fort Kochi",
      coordinates: {
        latitude: 9.9663,
        longitude: 76.2421,
      },
      instructions:
        "Arrive at the Kerala Kathakali Centre entrance 15 minutes before the scheduled time. Look for the colorful Kathakali facade.",
      contactNumber: "+91 98765 43212",
      contactEmail: "kathakali@paragontrails.com",
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
      "Witness the elaborate makeup application process (takes up to 1.5 hours)",
      "Learn about the symbolism and meaning behind Kathakali facial expressions",
      "Detailed explanation of mudras (hand gestures) and their meanings",
      "Enjoy a complete Kathakali performance with English narration",
      "Opportunity to meet performers after the show",
    ],

    inclusions: [
      "Reserved seating for makeup demonstration",
      "Premium seats for the performance",
      "English program guide explaining the story",
      "Pre-show explanation of Kathakali elements",
      "Bottled water",
      "Post-show interaction with artists (subject to availability)",
    ],

    exclusions: [
      "Transportation to and from venue",
      "Professional photography (available at additional cost)",
      "Meals and additional beverages",
      "Personal souvenirs",
    ],

    itinerary: [
      "17:00 - Arrival at Kerala Kathakali Centre",
      "17:15 - Introduction to Kathakali history and significance",
      "17:30 - Witness the elaborate makeup application process",
      "18:30 - Learn about costumes, gestures and expressions",
      "18:45 - Demonstration of basic mudras (hand gestures)",
      "19:00 - Main Kathakali performance begins",
      "20:00 - Performance concludes with opportunity to meet artists",
    ],

    faqs: [
      {
        question:
          "What makes Kathakali special among Indian classical dance forms?",
        answer:
          "Kathakali stands out for its elaborate makeup and costumes that transform performers into mythological characters, its complex facial expressions and precise eye movements used to convey emotions, and its synthesis of multiple art forms. Dating back to the 17th century, it's one of the oldest classical dance-dramas in India, telling stories primarily from Hindu epics.",
      },
      {
        question: "How long is the makeup preparation?",
        answer:
          "The makeup preparation takes approximately 1-1.5 hours. This fascinating process is an art form itself, as performers apply natural pigments to create colorful, three-dimensional facial designs that indicate character types. Green faces represent heroes, red faces depict evil characters, while yellow and white signify female characters and sages.",
      },
      {
        question:
          "Will I understand the performance if I don't know the language?",
        answer:
          "Yes, the performance includes English narration and program notes. Additionally, before the main performance, artists demonstrate the basic hand gestures (mudras) and facial expressions used to convey different emotions, helping you understand the symbolic language of Kathakali.",
      },
    ],
  },
  {
    title: "Jewish Heritage Walking Tour",
    description:
      "Explore Fort Kochi's fascinating Jewish history with visits to the 16th-century Paradesi Synagogue, Jewish Cemetery, and historic Jew Town, learning about this ancient community's rich cultural contributions and distinctive heritage.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/paradesi-synagogue.jpg",
      "/images/tours/fort-kochi/jew-town.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.8,
    tags: ["History", "Jewish Heritage", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address:
        "Paradesi Synagogue entrance, Jew Town, Mattancherry, Fort Kochi",
      coordinates: {
        latitude: 9.9578,
        longitude: 76.2592,
      },
      instructions:
        "Meet at the entrance gate to the Paradesi Synagogue. Your guide will be wearing a blue cap with the Paragon Trails logo.",
      contactNumber: "+91 98765 43213",
      contactEmail: "jewishheritage@paragontrails.com",
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
      "Guided tour of the historic Paradesi Synagogue with its Belgian chandeliers and Chinese tiles",
      "Visit to the Jewish Cemetery dating back to the 18th century",
      "Walk through Jew Town's historic spice trading streets",
      "Learn about the 2000-year history of Jews in Kerala",
      "Meet remaining members of this ancient community (when available)",
    ],

    inclusions: [
      "Expert English-speaking guide specialized in Jewish history",
      "Entrance fees to all sites",
      "Traditional Jewish-Keralan snack",
      "Bottled water",
      "Informational booklet on Kerala's Jewish heritage",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Additional food and beverages",
      "Personal purchases in Jew Town shops",
      "Gratuities (recommended but optional)",
    ],

    itinerary: [
      "09:00 - Meet at Paradesi Synagogue entrance",
      "09:15 - Guided tour of the synagogue and its architectural elements",
      "10:00 - Visit Jewish Cemetery with history of notable community members",
      "10:45 - Walking tour through historic Jew Town streets",
      "11:15 - Visit to spice shops once owned by Jewish merchants",
      "11:45 - Traditional Jewish-Keralan snack break",
      "12:15 - Continue exploration of Jewish heritage sites",
      "12:45 - Q&A session and concluding remarks at a historic viewpoint",
    ],

    faqs: [
      {
        question: "How old is the Jewish community in Kochi?",
        answer:
          "The Jewish presence in Kerala dates back over 2,000 years, making it one of the oldest Jewish settlements outside Israel. Different waves of Jewish immigrants arrived, with the earliest possibly coming after the destruction of the Second Temple in 70 CE. The community flourished as merchants, with the Paradesi ('foreign') Jews arriving in the 16th century after fleeing the Spanish Inquisition.",
      },
      {
        question: "Is the synagogue still active?",
        answer:
          "The Paradesi Synagogue remains India's oldest active synagogue, though the community has dwindled to very few members. It contains remarkable features including hand-painted Chinese tiles, Belgian chandeliers, and a gold crown gifted by a local Hindu ruler. Services are still occasionally held, particularly during high holidays.",
      },
      {
        question: "What makes Jew Town unique?",
        answer:
          "Jew Town is the historic Jewish quarter centered around Synagogue Lane. Once a thriving center of the spice trade run by Jewish merchants, it now houses antique shops, spice stores, and boutiques in buildings that retain their colonial architecture. Many buildings feature Stars of David and other Jewish symbols, reflecting the area's heritage.",
      },
    ],
  },
];

export default fortKochiTours;
