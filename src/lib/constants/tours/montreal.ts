import { Tour } from "@/lib/interfaces/services/tours";

export const montrealTours: Tour[] = [
  {
    title: "Old Montreal Heritage & Architecture Walk",
    description:
      "Discover Montreal's rich colonial past on this guided walking tour through historic Old Montreal. Explore 17th-century architecture, hidden courtyards, and charming cobblestone streets while learning about the city's French and British heritage.",
    city: "Montreal",
    country: "Canada",
    state: "Quebec",
    region: "Quebec",
    images: [
      "/images/tours/montreal/old-montreal.jpg",
      "/images/tours/montreal/notre-dame-basilica.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Historical", "Architecture", "Walking"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Place d'Armes, in front of Notre-Dame Basilica, Old Montreal",
      coordinates: {
        latitude: 45.5048,
        longitude: -73.5571,
      },
      instructions:
        "Meet your guide in front of the Notre-Dame Basilica main entrance. Guide will be holding a red and white sign with 'Montreal Heritage Tours'.",
      contactNumber: "+1 514-555-1234",
      contactEmail: "oldmontreal@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-22",
      "2023-12-23",
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
      "Visit the stunning interior of Notre-Dame Basilica with its intricate wood carvings",
      "Explore Place Jacques-Cartier and its historical significance",
      "Discover hidden courtyards and narrow streets from the 17th century",
      "Learn about Montreal's founding as a French missionary outpost",
      "See architectural examples spanning French Colonial, Victorian, and Art Deco styles",
    ],

    inclusions: [
      "Professional bilingual guide (English/French)",
      "Entrance fee to Notre-Dame Basilica",
      "Small group size (maximum 15 participants)",
      "Audio headsets to hear guide clearly in busy areas",
      "Historical map of Old Montreal to keep",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities (recommended but optional)",
      "Entry to optional attractions",
    ],

    itinerary: [
      "10:00 - Meet at Place d'Armes for introduction to Montreal's history",
      "10:15 - Guided visit inside Notre-Dame Basilica",
      "10:45 - Walk to Place Royale, site of Montreal's founding",
      "11:15 - Explore Place Jacques-Cartier with historic buildings and monuments",
      "11:45 - Visit the Old Port waterfront and discuss its commercial history",
      "12:15 - Discover City Hall and the Château Ramezay Museum (exterior)",
      "12:45 - Walk through hidden courtyards and narrow streets of Old Montreal",
      "13:00 - Tour concludes near Bonsecours Market with recommendations",
    ],

    faqs: [
      {
        question: "Is the Notre-Dame Basilica always included in the tour?",
        answer:
          "Yes, the interior visit of Notre-Dame Basilica is a guaranteed highlight of our tour. If there's a special religious event preventing entry during your scheduled tour, we'll adjust timing to ensure you still get to see this magnificent Gothic Revival church known for its stunning wood carvings and stained glass. The basilica entrance fee (value $12) is included in your tour price.",
      },
      {
        question: "How much walking does this tour involve?",
        answer:
          "This tour covers approximately 2.5km (1.5 miles) at a leisurely pace with frequent stops. The terrain is mostly flat but includes cobblestone streets that can be uneven in places. Comfortable walking shoes are strongly recommended. In winter months (Nov-Mar), proper footwear for potentially snowy or icy conditions is essential.",
      },
      {
        question: "Can we do this tour in winter?",
        answer:
          "Absolutely! Our tours run year-round, and winter offers a magical perspective of Old Montreal, especially when historic buildings are outlined with snow. We adjust routes slightly during heavy snow to ensure safety and comfort. The tour includes several indoor stops to warm up, and we recommend dressing in layers with proper winter footwear, hats and gloves during cold months.",
      },
    ],
  },

  {
    title: "Montreal Food Tour: Flavors of the Main",
    description:
      "Taste your way through Montreal's culinary landscape on Saint-Laurent Boulevard (aka 'The Main'), sampling specialties from diverse cultural communities while learning how immigration has shaped the city's vibrant food scene.",
    city: "Montreal",
    country: "Canada",
    state: "Quebec",
    region: "Quebec",
    images: [
      "/images/tours/montreal/bagels.jpg",
      "/images/tours/montreal/smoked-meat.jpg",
    ],
    duration: "3.5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Cultural", "Walking"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Schwartz's Deli, 3895 Saint-Laurent Blvd, Montreal",
      coordinates: {
        latitude: 45.5163,
        longitude: -73.5775,
      },
      instructions:
        "Meet in front of the iconic Schwartz's Deli on Saint-Laurent Boulevard. Your guide will be holding a sign reading 'Montreal Food Tour'.",
      contactNumber: "+1 514-555-2345",
      contactEmail: "foodtour@paragontrails.com",
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
      "Sample Montreal's famous smoked meat sandwich at a legendary deli",
      "Try authentic wood-fired Montreal bagels fresh from the oven",
      "Taste Portuguese pastries in Little Portugal",
      "Experience Italian specialties in Little Italy's vibrant market",
      "Learn how waves of immigration shaped Montreal's culinary identity",
    ],

    inclusions: [
      "Food tastings at 6 different establishments (equivalent to a full meal)",
      "Expert culinary guide with knowledge of local food history",
      "One local craft beer or non-alcoholic beverage",
      "Small group size (maximum 12 participants)",
      "Montreal food guide with recommendations and recipes",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food or drinks beyond the included tastings",
      "Gratuities (recommended but optional)",
    ],

    itinerary: [
      "13:00 - Meet at Schwartz's Deli for introduction and first tasting",
      "13:30 - Walk through the Plateau neighborhood with historical context",
      "13:45 - Visit to St-Viateur Bagel to sample authentic Montreal bagels",
      "14:15 - Explore Portuguese neighborhood with pastry tasting",
      "14:45 - Sample Quebec artisanal cheeses at specialty shop",
      "15:15 - Visit Jean-Talon Market in Little Italy for seasonal tastings",
      "15:45 - Craft beer tasting at local microbrewery",
      "16:30 - Final sweet treat and tour conclusion",
    ],

    faqs: [
      {
        question: "How much food is included in this tour?",
        answer:
          "The tour includes six substantial food tastings that amount to a full meal. Come hungry! You'll sample Montreal's iconic dishes including smoked meat, bagels, Portuguese pastries, Quebec cheeses, market fresh specialties, and a sweet treat, plus a craft beer or non-alcoholic beverage.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, gluten-free, and most allergies with advance notice. Please inform us of any dietary needs when booking so we can make appropriate arrangements. Due to the specialized nature of the tastings, vegan options may be limited at some stops.",
      },
      {
        question: "What makes Montreal's food scene unique?",
        answer:
          "Montreal's culinary landscape has been shaped by waves of immigration and the blending of French and English influences. The city is famous for its unique specialties like Montreal-style bagels (smaller, sweeter and wood-fired), smoked meat (a distinctive cured beef), and poutine (fries with cheese curds and gravy). Our tour highlights how each immigrant community contributed to the rich tapestry of flavors that define Montreal cuisine today.",
      },
    ],
  },

  {
    title: "Underground City & Modern Montreal Tour",
    description:
      "Explore Montreal's famous underground city network connecting metro stations, shopping centers, and office complexes, then discover the city's innovative architecture and urban design in the downtown core.",
    city: "Montreal",
    country: "Canada",
    state: "Quebec",
    region: "Quebec",
    images: [
      "/images/tours/montreal/underground-city.jpg",
      "/images/tours/montreal/place-des-arts.jpg",
    ],
    duration: "2.5 hours",
    price: "$35",
    rating: 4.6,
    tags: ["Architecture", "Urban", "Indoor"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Place Ville Marie, 1 Place Ville Marie, Montreal",
      coordinates: {
        latitude: 45.5016,
        longitude: -73.5694,
      },
      instructions:
        "Meet in the main lobby of Place Ville Marie, near the central sculpture. Your guide will be holding a blue folder with 'Underground City Tour' written on it.",
      contactNumber: "+1 514-555-3456",
      contactEmail: "undergroundcity@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-18",
      "2023-12-24",
      "2023-12-25",
      "2023-12-31",
      "2024-01-07",
      "2024-01-08",
      "2024-01-14",
      "2024-01-15",
      "2024-01-21",
      "2024-01-22",
      "2024-01-28",
      "2024-01-29",
      "2024-02-04",
      "2024-02-05",
      "2024-02-11",
      "2024-02-12",
      "2024-02-18",
      "2024-02-19",
      "2024-02-25",
      "2024-02-26",
    ],

    highlights: [
      "Navigate Montreal's 33km RÉSO underground pedestrian network",
      "Learn how this unique urban planning solution adapts to harsh winters",
      "Discover impressive public art installations throughout the network",
      "Visit architectural highlights including Place Ville Marie and Place des Arts",
      "Experience the city's innovative approach to urban spaces and design",
    ],

    inclusions: [
      "Professional architecture and urban planning guide",
      "Access to private sections of the underground network",
      "Map of the complete underground city system",
      "Coffee or hot chocolate at an underground café",
      "Public transportation pass for one underground metro journey",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Shopping purchases",
      "Gratuities (recommended but optional)",
    ],

    itinerary: [
      "10:00 - Meet at Place Ville Marie for introduction to Montreal's underground concept",
      "10:15 - Tour begins through the first underground connections",
      "10:30 - Visit impressive public art installations",
      "10:45 - Navigate to Place des Arts cultural complex via underground passages",
      "11:15 - Coffee break at underground café with discussion of urban planning",
      "11:30 - Metro journey to another section of the network",
      "11:45 - Explore shopping and business districts connected underground",
      "12:15 - View architectural highlights and finish with recommendations",
      "12:30 - Tour concludes at central location with further exploration options",
    ],

    faqs: [
      {
        question: "Why did Montreal build an underground city?",
        answer:
          "Montreal's harsh winters with heavy snowfall and sub-zero temperatures prompted the development of this climate-controlled pedestrian network beginning in the 1960s. The system (officially called RÉSO) now spans 33km connecting 1,600 shops, restaurants, offices, hotels, and cultural venues across the downtown core. This innovative urban solution allows Montrealers to navigate much of downtown without ever facing extreme weather conditions.",
      },
      {
        question: "Is this tour entirely underground?",
        answer:
          "The tour combines underground sections with some above-ground segments to provide context and contrast. Approximately 70% of the tour takes place in the climate-controlled underground network, while the remainder includes strategic outdoor viewpoints of significant buildings and urban spaces that connect to the system. This mixed approach provides a comprehensive understanding of how the underground integrates with the city above.",
      },
      {
        question: "Is this tour accessible for those with mobility issues?",
        answer:
          "Yes, the underground city is designed with accessibility in mind. The route utilizes elevators and ramps rather than stairs wherever possible. The pace is leisurely with frequent stops. Please notify us in advance if you have specific mobility requirements so we can ensure the most accessible route for your tour.",
      },
    ],
  },

  {
    title: "Montreal Mural Art & Street Culture Experience",
    description:
      "Discover Montreal's vibrant street art scene in the Plateau and Mile End neighborhoods, home to stunning large-scale murals from the annual MURAL Festival and year-round street art that reflects the city's creative energy.",
    city: "Montreal",
    country: "Canada",
    state: "Quebec",
    region: "Quebec",
    images: [
      "/images/tours/montreal/street-murals.jpg",
      "/images/tours/montreal/mile-end-art.jpg",
    ],
    duration: "2.5 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Art", "Walking", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "art-and-music",

    meetingPoint: {
      address:
        "Mont-Royal Metro Station, 470 Avenue du Mont-Royal Est, Montreal",
      coordinates: {
        latitude: 45.5244,
        longitude: -73.5819,
      },
      instructions:
        "Meet outside the main entrance to Mont-Royal Metro Station. Your guide will be wearing a colorful jacket and holding a 'Mural Art Tour' sign.",
      contactNumber: "+1 514-555-4567",
      contactEmail: "muralart@paragontrails.com",
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
      "See over 20 spectacular large-scale murals by local and international artists",
      "Learn about Montreal's unique position in the global street art movement",
      "Discover the stories behind the annual MURAL Festival",
      "Explore the hip Plateau and Mile End neighborhoods",
      "Visit local galleries and shops showcasing urban art",
    ],

    inclusions: [
      "Local artist guide with insider knowledge of the street art scene",
      "Small group size (maximum 12 participants)",
      "Street art map with mural locations and artist information",
      "Photography tips for capturing street art",
      "Discount to local art supply store",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Food and beverages",
      "Gratuities (recommended but optional)",
      "Art purchases from galleries",
    ],

    itinerary: [
      "14:00 - Meet at Mont-Royal Metro Station for introduction",
      "14:15 - Begin walking tour on Saint-Laurent Boulevard",
      "14:30 - First major mural stops with artistic context and techniques",
      "15:00 - Explore side streets featuring smaller street art pieces",
      "15:30 - Visit to Station 16 Gallery specializing in urban art",
      "16:00 - Continue to Mile End neighborhood for more murals",
      "16:20 - Discussion of Montreal's place in global street art movement",
      "16:45 - Tour conclusion with recommendations for further exploration",
    ],

    faqs: [
      {
        question: "Is this tour only available during the MURAL Festival?",
        answer:
          "This tour runs year-round, not just during the annual MURAL Festival (typically held in June). While the festival brings exciting new works each year, the murals remain as permanent installations transforming the urban landscape. Our tour includes both festival-commissioned pieces and independent works, with content regularly updated to feature new murals as they appear throughout the year.",
      },
      {
        question: "What makes Montreal's mural scene special?",
        answer:
          "Montreal has emerged as one of North America's street art capitals thanks to supportive municipal policies, the internationally-recognized MURAL Festival, and a vibrant local creative community. Unlike many cities where street art exists in a legal gray area, Montreal actively commissions and preserves large-scale murals, resulting in exceptionally high-quality works that often address social themes, local culture, and artistic innovation.",
      },
      {
        question: "Is this tour suitable for photographers?",
        answer:
          "Absolutely! The tour is designed with photographers in mind, with routes and stopping points optimized for the best angles and lighting conditions. Your guide will share tips for capturing street art effectively and allow time for photography at each major mural. Both amateur and professional photographers will find plenty of stunning visual opportunities throughout the tour.",
      },
    ],
  },
];

export default montrealTours;
