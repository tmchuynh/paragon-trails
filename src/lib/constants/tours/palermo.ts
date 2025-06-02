import { Tour } from "@/lib/interfaces/services/tours";

export const palermoTours: Tour[] = [
  {
    title: "Palermo Street Food & Markets Adventure",
    description:
      "Immerse yourself in Palermo's vibrant culinary scene by exploring historic markets and sampling authentic Sicilian street foods including arancini, panelle, and the infamous pani ca meusa, guided by a local food expert.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/street-food.jpg",
      "/images/tours/palermo/market-scene.jpg",
    ],
    duration: "3.5 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Food", "Markets", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Quattro Canti (Four Corners), Palermo City Center",
      coordinates: {
        latitude: 38.1157,
        longitude: 13.3613,
      },
      instructions:
        "Meet at the northeastern corner of Quattro Canti intersection. Your guide will be holding a sign with 'Palermo Food Tour' written on it.",
      contactNumber: "+39 091 555 1234",
      contactEmail: "foodtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-23",
      "2023-12-27",
      "2023-12-29",
      "2023-12-30",
      "2024-01-02",
      "2024-01-05",
      "2024-01-06",
      "2024-01-09",
      "2024-01-12",
      "2024-01-13",
      "2024-01-16",
      "2024-01-19",
      "2024-01-20",
      "2024-01-23",
      "2024-01-26",
      "2024-01-27",
      "2024-01-30",
      "2024-02-02",
      "2024-02-03",
      "2024-02-06",
      "2024-02-09",
      "2024-02-10",
      "2024-02-13",
      "2024-02-16",
      "2024-02-17",
      "2024-02-20",
      "2024-02-23",
      "2024-02-24",
      "2024-02-27",
    ],

    highlights: [
      "Explore the historic Capo and Ballarò markets with their vibrant atmosphere and centuries of tradition",
      "Sample 8-10 authentic Sicilian street foods selected by a local culinary expert",
      "Meet vendors and artisans who have been preparing traditional foods for generations",
      "Learn about Palermo's complex culinary history influenced by Arab, Norman, and Spanish cultures",
      "Discover hidden food spots that only locals know about",
    ],

    inclusions: [
      "Local food expert guide",
      "All food tastings (8-10 different items sufficient for a full meal)",
      "One glass of local wine or soft drink",
      "Bottled water",
      "Map of Palermo's culinary highlights",
      "Small group experience (maximum 12 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond the tastings",
      "Gratuities (optional)",
      "Personal shopping expenses",
    ],

    itinerary: [
      "10:00 - Meet at Quattro Canti for introduction to Sicilian cuisine",
      "10:15 - Visit first street food vendor for arancini (rice balls) tasting",
      "10:45 - Explore Capo Market with multiple food stops including panelle (chickpea fritters)",
      "11:30 - Try traditional sfincione (Sicilian pizza) at century-old bakery",
      "12:00 - Sample seasonal fruits and local cheeses at market stalls",
      "12:30 - Experience pani ca meusa (spleen sandwich) for the adventurous or alternative options",
      "13:00 - Enjoy cannoli and cassata at historic pastry shop",
      "13:30 - Tour concludes with recommendations for additional culinary experiences",
    ],

    faqs: [
      {
        question: "What foods will we try on this tour?",
        answer:
          "The tour includes 8-10 Sicilian specialties such as arancini (fried rice balls), panelle (chickpea fritters), sfincione (Sicilian pizza), pani ca meusa (spleen sandwich), seasonal fresh fruits, local cheeses, and sweet treats like cannoli and cassata. We can accommodate most dietary preferences with advance notice, though some traditional items contain gluten, dairy, or meat.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 km (less than 1 mile) at a leisurely pace with frequent stops for food tastings. The route is mostly flat with occasional steps. The markets can be crowded, but we navigate carefully to ensure everyone can hear the guide's explanations and enjoy the experience.",
      },
      {
        question: "Is this tour suitable for vegetarians?",
        answer:
          "Yes, we can accommodate vegetarians with delicious alternatives to the meat-based dishes. Palermo's cuisine has many naturally vegetarian options including panelle (chickpea fritters), arancini with butter and cheese, caponata (eggplant dish), and various cheese tastings. Please inform us of dietary restrictions when booking.",
      },
    ],
  },
  {
    title: "Arab-Norman Palermo UNESCO Sites Tour",
    description:
      "Discover the unique Arab-Norman architectural masterpieces of Palermo that earned UNESCO World Heritage status, exploring magnificent cathedrals, royal palaces, and churches with their blend of Byzantine, Islamic, and Western influences.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/palatine-chapel.jpg",
      "/images/tours/palermo/cathedral.jpg",
    ],
    duration: "5 hours",
    price: "$89",
    rating: 4.9,
    tags: ["UNESCO", "Architecture", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address:
        "Norman Palace (Palazzo dei Normanni), Piazza Indipendenza, Palermo",
      coordinates: {
        latitude: 38.1106,
        longitude: 13.3534,
      },
      instructions:
        "Meet at the main entrance gate to the Norman Palace. Your guide will be holding a sign with 'UNESCO Heritage Tour' written on it.",
      contactNumber: "+39 091 555 2345",
      contactEmail: "heritage@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-22",
      "2023-12-26",
      "2023-12-28",
      "2023-12-29",
      "2024-01-02",
      "2024-01-04",
      "2024-01-05",
      "2024-01-09",
      "2024-01-11",
      "2024-01-12",
      "2024-01-16",
      "2024-01-18",
      "2024-01-19",
      "2024-01-23",
      "2024-01-25",
      "2024-01-26",
      "2024-01-30",
      "2024-02-01",
      "2024-02-02",
      "2024-02-06",
      "2024-02-08",
      "2024-02-09",
      "2024-02-13",
      "2024-02-15",
      "2024-02-16",
      "2024-02-20",
      "2024-02-22",
      "2024-02-23",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Visit the spectacular Palatine Chapel with its dazzling Byzantine mosaics and Islamic-inspired wooden ceiling",
      "Explore the imposing Palermo Cathedral with its unique blend of architectural styles from different eras",
      "Discover the Church of San Giovanni degli Eremiti with its distinctive red domes",
      "Admire the intricate mosaics of the Church of Santa Maria dell'Ammiraglio (La Martorana)",
      "Learn about Sicily's fascinating period of cultural fusion under Norman rule",
    ],

    inclusions: [
      "Professional art historian guide",
      "Skip-the-line entrance tickets to all sites",
      "Audio headsets for groups of 6+ people",
      "Detailed historical commentary at each location",
      "Informational booklet about Arab-Norman architecture",
      "Bottled water",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Transportation between sites (short walking distances)",
    ],

    itinerary: [
      "09:00 - Meet at Norman Palace entrance for introduction",
      "09:15 - Tour of Norman Palace including the magnificent Palatine Chapel",
      "10:30 - Walk to nearby Church of San Giovanni degli Eremiti",
      "11:15 - Visit Palermo Cathedral and royal tombs",
      "12:15 - Coffee break at historic café (own expense)",
      "12:45 - Walk to La Martorana church to see Byzantine mosaics",
      "13:30 - Visit Church of San Cataldo with its distinctive red domes",
      "14:00 - Tour concludes with recommendations for additional sites",
    ],

    faqs: [
      {
        question: "Is there a dress code for visiting the religious sites?",
        answer:
          "Yes, modest dress is required for entering churches and religious sites. Shoulders and knees must be covered for both men and women. We recommend carrying a light scarf or shawl that can be used to cover shoulders if needed. Some sites provide disposable coverings, but it's better to come prepared.",
      },
      {
        question: "What makes Arab-Norman architecture unique?",
        answer:
          "Arab-Norman architecture represents a unique cultural fusion that occurred during the Norman rule of Sicily in the 12th century. It blends Byzantine, Islamic, and Romanesque elements, creating structures with distinctive features like geometric patterns, colorful mosaics, pointed arches, and domes. This style reflects the multicultural society of medieval Sicily where Christian, Muslim, and Byzantine cultures coexisted and influenced each other.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "The tour involves approximately 2 km (1.2 miles) of walking between sites at a leisurely pace. The terrain is mostly flat with some cobblestone streets in the historic center. Inside the sites, there may be stairs without elevator alternatives. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Monreale & Cefalù Day Trip",
    description:
      "Journey beyond Palermo to explore two magnificent UNESCO World Heritage sites: the Norman Cathedral of Monreale with the world's largest collection of Byzantine mosaics, and the charming coastal town of Cefalù with its imposing cathedral and medieval wash houses.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/monreale-cathedral.jpg",
      "/images/tours/palermo/cefalu-beach.jpg",
    ],
    duration: "8 hours",
    price: "$125",
    rating: 4.8,
    tags: ["UNESCO", "Day Trip", "Coastal"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",

    meetingPoint: {
      address: "Teatro Politeama, Piazza Ruggero Settimo, Palermo",
      coordinates: {
        latitude: 38.1241,
        longitude: 13.3572,
      },
      instructions:
        "Meet in front of the main entrance stairs to Teatro Politeama. Your guide will be waiting by the tour minivan with a 'Monreale & Cefalù Tour' sign.",
      contactNumber: "+39 091 555 3456",
      contactEmail: "daytrips@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-20",
      "2023-12-23",
      "2023-12-27",
      "2023-12-30",
      "2024-01-03",
      "2024-01-06",
      "2024-01-10",
      "2024-01-13",
      "2024-01-17",
      "2024-01-20",
      "2024-01-24",
      "2024-01-27",
      "2024-01-31",
      "2024-02-03",
      "2024-02-07",
      "2024-02-10",
      "2024-02-14",
      "2024-02-17",
      "2024-02-21",
      "2024-02-24",
      "2024-02-28",
    ],

    highlights: [
      "Marvel at Monreale Cathedral's stunning Byzantine mosaics covering over 6,000 square meters",
      "Explore the beautiful cloister with 228 unique carved columns at Monreale",
      "Stroll through the picturesque fishing village of Cefalù with its beautiful beaches and narrow medieval streets",
      "Visit Cefalù Cathedral with its impressive Christ Pantocrator mosaic",
      "Discover the ancient Lavatoio (medieval wash houses) of Cefalù",
    ],

    inclusions: [
      "Transportation in air-conditioned minivan",
      "Professional English-speaking guide",
      "Entrance fees to Monreale Cathedral and cloister",
      "Guided tours of both UNESCO sites",
      "Free time in Cefalù for lunch and independent exploration",
      "Bottled water",
      "Hotel pickup and drop-off within Palermo city center",
    ],

    exclusions: [
      "Lunch (plenty of options available in Cefalù)",
      "Optional entrance fees to additional sites",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "08:30 - Hotel pickup or meet at Teatro Politeama",
      "09:15 - Arrive at Monreale and guided visit of the Cathedral",
      "10:00 - Explore the magnificent cloister with 228 carved columns",
      "11:00 - Free time to enjoy the panoramic view over Palermo and Conca d'Oro",
      "11:30 - Depart for Cefalù (approximately 1-hour drive)",
      "12:30 - Arrive in Cefalù with orientation walk",
      "13:00 - Free time for lunch and beach (in summer)",
      "14:30 - Guided tour of Cefalù Cathedral and historic center",
      "15:30 - Visit the ancient Lavatoio (medieval wash houses)",
      "16:00 - Free time for shopping or relaxation",
      "16:45 - Departure for Palermo",
      "17:30 - Arrive back in Palermo",
    ],

    faqs: [
      {
        question: "What's special about Monreale Cathedral?",
        answer:
          "Monreale Cathedral houses the largest collection of Byzantine mosaics in the world, covering over 6,000 square meters. Created in the 12th century, these spectacular gold mosaics depict biblical scenes with remarkable detail and artistry. The cathedral represents the perfect fusion of Norman, Byzantine, and Islamic artistic elements, with its magnificent cloister displaying 228 columns, each uniquely carved with different patterns and figures.",
      },
      {
        question: "Is there time for swimming in Cefalù?",
        answer:
          "During summer months (May to September), we allocate free time in Cefalù that can be used for swimming at the beautiful sandy beach. The beach is just a short walk from the historic center. Please bring swimwear and a towel if you'd like to swim. In winter months, the extra time is typically used for exploring the town's charming streets, shopping, or enjoying a longer lunch.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Modest dress is required for cathedral visits (shoulders and knees must be covered). Comfortable walking shoes are essential as both sites involve walking on uneven surfaces and steps. We recommend bringing a hat and sunscreen in summer months, and a light jacket for cooler days. If you plan to swim in Cefalù during summer, bring swimwear and a towel.",
      },
    ],
  },
  {
    title: "Mafia & Anti-Mafia Movement Tour",
    description:
      "Gain insight into Sicily's complex relationship with the Mafia and the brave anti-Mafia movement through visits to significant sites, meetings with activists, and discussion of how Sicilian society is reclaiming its future from organized crime.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/anti-mafia-memorial.jpg",
      "/images/tours/palermo/no-mafia-mural.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Educational", "Cultural", "Social Impact"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Piazza della Memoria, near Palace of Justice, Palermo",
      coordinates: {
        latitude: 38.1171,
        longitude: 13.3611,
      },
      instructions:
        "Meet at Piazza della Memoria, by the monument dedicated to judges Falcone and Borsellino. Your guide will be holding a sign with 'Anti-Mafia Tour' written on it.",
      contactNumber: "+39 091 555 4567",
      contactEmail: "antimafia@paragontrails.com",
    },

    availableDates: [
      "2023-12-18",
      "2023-12-21",
      "2023-12-28",
      "2024-01-04",
      "2024-01-08",
      "2024-01-11",
      "2024-01-15",
      "2024-01-18",
      "2024-01-22",
      "2024-01-25",
      "2024-01-29",
      "2024-02-01",
      "2024-02-05",
      "2024-02-08",
      "2024-02-12",
      "2024-02-15",
      "2024-02-19",
      "2024-02-22",
      "2024-02-26",
      "2024-02-29",
    ],

    highlights: [
      "Visit significant sites related to anti-Mafia judges Giovanni Falcone and Paolo Borsellino",
      "Learn about the civil resistance movement against organized crime",
      "Meet with representatives from anti-Mafia organizations (subject to availability)",
      "Visit businesses that have taken a public stand against paying 'pizzo' (protection money)",
      "Understand the historical context and current state of the anti-Mafia movement",
    ],

    inclusions: [
      "Expert guide specialized in Sicilian social history",
      "Visit to Anti-Mafia memorial sites",
      "Meeting with anti-Mafia association representative (when available)",
      "Coffee break at an 'Addiopizzo' business (businesses that publicly refuse to pay protection money)",
      "Donation to local anti-Mafia education initiatives",
      "Informational booklet about the anti-Mafia movement",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included coffee",
      "Gratuities (optional)",
      "Personal expenses",
    ],

    itinerary: [
      "15:00 - Meet at Piazza della Memoria for introduction to tour themes",
      "15:15 - Visit Palace of Justice and discuss the Maxi Trial of 1986",
      "15:45 - Walk to the Falcone Tree memorial outside Judge Falcone's former home",
      "16:15 - Visit sites related to the 1992 assassinations that changed public opinion",
      "16:45 - Meet with representative from anti-Mafia organization (subject to availability)",
      "17:30 - Visit to businesses participating in the 'Addiopizzo' movement with coffee break",
      "18:15 - Discussion about current state of anti-Mafia efforts in Sicily",
      "18:45 - Tour concludes with recommendations for further learning",
    ],

    faqs: [
      {
        question: "Is this tour sensationalist or focused on 'Mafia tourism'?",
        answer:
          "Absolutely not. This educational tour approaches the subject with respect and sensitivity, focusing primarily on the brave individuals and organizations working to combat organized crime. Rather than glorifying or sensationalizing the Mafia, we highlight the positive social movement against it and how Sicilian society is reclaiming its future. The tour is developed in consultation with anti-Mafia organizations and contributes financially to educational initiatives.",
      },
      {
        question: "Is the tour appropriate for children?",
        answer:
          "The tour is most appropriate for adults and mature teenagers due to the serious subject matter. While there's nothing graphic presented, discussions include topics like assassinations and organized crime that may not be suitable for young children. For families with younger children, we recommend our other Palermo tours that focus on food, history, or art.",
      },
      {
        question: "Will we visit sites of Mafia activity?",
        answer:
          "The tour focuses primarily on places significant to the anti-Mafia movement rather than locations of criminal activity. We visit memorials, educational sites, and businesses taking a stand against organized crime. Our goal is to provide historical context and highlight the positive changes occurring in modern Sicily.",
      },
    ],
  },
  {
    title: "Palermo Cooking Class & Market Tour",
    description:
      "Learn to prepare authentic Sicilian dishes with a chef-led market tour to select fresh ingredients, followed by a hands-on cooking class where you'll create a complete traditional meal including pasta, seafood, and dessert.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/cooking-class.jpg",
      "/images/tours/palermo/sicilian-cuisine.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Cooking", "Culinary", "Hands-on"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Capo Market Main Entrance, Via Sant'Agostino, Palermo",
      coordinates: {
        latitude: 38.118,
        longitude: 13.3593,
      },
      instructions:
        "Meet at the main entrance to Capo Market on Via Sant'Agostino. Your chef-instructor will be waiting with a 'Sicilian Cooking Class' sign and a shopping basket.",
      contactNumber: "+39 091 555 5678",
      contactEmail: "cookingclass@paragontrails.com",
    },

    availableDates: [
      "2023-12-19",
      "2023-12-22",
      "2023-12-26",
      "2023-12-29",
      "2024-01-02",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-16",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-01-30",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-13",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
      "2024-02-27",
    ],

    highlights: [
      "Shop for fresh ingredients at a historic Palermo market with chef guidance",
      "Learn to prepare authentic pasta from scratch using traditional techniques",
      "Master classic Sicilian dishes like pasta alla Norma or pasta con le sarde",
      "Discover the secrets of perfect arancini (fried rice balls)",
      "Create traditional Sicilian desserts such as cannoli or cassata",
    ],

    inclusions: [
      "Market tour with professional Sicilian chef",
      "All ingredients and cooking materials",
      "Hands-on instruction for complete meal preparation",
      "Full lunch or dinner of prepared dishes with wine pairing",
      "Recipe booklet to take home",
      "Complimentary apron souvenir",
      "Certificate of course completion",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond included wine",
      "Gratuities (optional)",
    ],

    itinerary: [
      "10:00 - Meet at Capo Market for introductions",
      "10:15 - Guided market tour with ingredient selection and explanations",
      "11:15 - Walk to cooking school location in historic center",
      "11:30 - Introduction to Sicilian cuisine and preparation techniques",
      "12:00 - Begin hands-on cooking of appetizers and pasta making",
      "13:00 - Prepare main course featuring seasonal ingredients",
      "14:00 - Create traditional Sicilian dessert",
      "14:45 - Enjoy the complete meal you've prepared with wine pairing",
      "15:30 - Recipe sharing and cooking tips discussion",
      "16:00 - Tour concludes with certificate presentation",
    ],

    faqs: [
      {
        question: "Do I need cooking experience to enjoy this class?",
        answer:
          "No prior experience is necessary! Our classes accommodate all skill levels from beginners to experienced home cooks. The chef provides clear step-by-step instruction and personal attention to ensure everyone succeeds. The atmosphere is relaxed and fun, focused on enjoying the process as much as the delicious results.",
      },
      {
        question: "What will we cook during the class?",
        answer:
          "The menu varies seasonally to showcase the freshest available ingredients, but typically includes a complete Sicilian meal: antipasti (appetizers), fresh pasta with traditional sauce, a main course (often featuring seafood), and an authentic Sicilian dessert. Specific dishes might include arancini, pasta alla Norma, involtini di pesce spada (swordfish rolls), and cannoli or cassata for dessert.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate most dietary needs including vegetarian, gluten-free, and many food allergies. Sicilian cuisine naturally features many vegetable-based dishes and seafood options. Please inform us of any restrictions when booking so we can adjust the menu accordingly.",
      },
    ],
  },
  {
    title: "Palermo By Night: Evening Passeggiata & Wine Experience",
    description:
      "Experience Palermo like a local with an evening walking tour through illuminated historic districts, hidden piazzas, and lively nightspots, concluding with a wine tasting featuring Sicilian vintages paired with regional appetizers.",
    city: "Palermo",
    country: "Italy",
    region: "Sicily",
    images: [
      "/images/tours/palermo/night-palermo.jpg",
      "/images/tours/palermo/wine-tasting.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Evening", "Wine", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Teatro Massimo, Piazza Verdi, Palermo",
      coordinates: {
        latitude: 38.1196,
        longitude: 13.3583,
      },
      instructions:
        "Meet at the bottom of the steps of Teatro Massimo opera house. Your guide will be holding a sign with 'Palermo By Night' written on it.",
      contactNumber: "+39 091 555 6789",
      contactEmail: "eveningtour@paragontrails.com",
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
      "Experience the traditional Italian evening passeggiata (social stroll) through historic districts",
      "See Palermo's architectural treasures beautifully illuminated at night",
      "Discover hidden piazzas and courtyards not found in guidebooks",
      "Visit local favorite nightspots away from tourist areas",
      "Enjoy a guided tasting of 4 Sicilian wines paired with regional specialties",
    ],

    inclusions: [
      "Expert local guide with knowledge of Palermo nightlife",
      "Evening walking tour through illuminated historic districts",
      "Guided wine tasting of 4 premium Sicilian wines",
      "Selection of Sicilian appetizers (substantial enough for a light dinner)",
      "Small group experience (maximum 10 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond the included tasting",
      "Gratuities (optional)",
      "Transportation after tour conclusion",
    ],

    itinerary: [
      "19:00 - Meet at Teatro Massimo for introduction",
      "19:15 - Evening walk through historic La Kalsa district with architectural commentary",
      "19:45 - Visit hidden courtyards and piazzas illuminated at night",
      "20:15 - Observe local passeggiata traditions in action",
      "20:45 - Arrive at wine bar in a historic building",
      "21:00 - Guided tasting of 4 Sicilian wines with paired appetizers",
      "21:45 - Discussion of Sicilian wine regions and traditions",
      "22:00 - Tour concludes with recommendations for continuing your evening",
    ],

    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 1.5 kilometers (less than a mile) of walking at a relaxed evening pace. The route is primarily flat but includes some cobblestone streets in the historic center. Comfortable walking shoes are recommended.",
      },
      {
        question: "Is the wine tasting substantial enough for dinner?",
        answer:
          "The wine tasting includes generous portions of Sicilian appetizers such as cheeses, cured meats, olives, caponata, bruschetta, and other local specialties. Most participants find it substantial enough for a light dinner. However, if you prefer a full meal, we can recommend restaurants for after the tour.",
      },
      {
        question: "What types of wine will we taste?",
        answer:
          "The tasting includes 4 premium wines showcasing Sicily's diverse wine regions. Typically, you'll sample a refreshing white wine from Mount Etna, a mineral-rich white from the western coast, an elegant Nero d'Avola red, and either a complex Etna red or a sweet Marsala dessert wine. All wines are selected to represent the best of Sicilian viticulture, with many from small producers not widely available outside Italy.",
      },
    ],
  },
];

export default palermoTours;
