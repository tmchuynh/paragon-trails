import { Tour } from "@/lib/interfaces/services/tours";

export const mexicoCityTours: Tour[] = [
  {
    title: "Teotihuacan Pyramids & Ancient City Private Tour",
    description:
      "Explore the magnificent UNESCO World Heritage site of Teotihuacan before the crowds arrive, climb the Pyramids of the Sun and Moon, and gain expert insights into this mysterious pre-Aztec civilization.",
    city: "Mexico City",
    country: "Mexico",
    region: "Central Mexico",
    images: [
      "/images/tours/mexico-city/teotihuacan-pyramids.jpg",
      "/images/tours/mexico-city/pyramid-sun.jpg",
    ],
    duration: "6 hours",
    price: "$89",
    rating: 4.9,
    tags: ["Archaeological", "UNESCO", "Ancient History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Zócalo, Historic Center, Mexico City",
      coordinates: {
        latitude: 19.4326,
        longitude: -99.1332,
      },
      instructions: "Meet at the flagpole in the center of Zócalo main square. Your guide will be holding a sign with 'Teotihuacan Tour' written on it.",
      contactNumber: "+52 55 1234 5678",
      contactEmail: "teotihuacan@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", "2023-12-25", "2023-12-27", "2023-12-29", "2023-12-31",
      "2024-01-02", "2024-01-04", "2024-01-06", "2024-01-08", "2024-01-10", "2024-01-12", "2024-01-14", "2024-01-16", "2024-01-18", "2024-01-20", "2024-01-22", "2024-01-24", "2024-01-26", "2024-01-28", "2024-01-30",
      "2024-02-01", "2024-02-03", "2024-02-05", "2024-02-07", "2024-02-09", "2024-02-11", "2024-02-13", "2024-02-15", "2024-02-17", "2024-02-19", "2024-02-21", "2024-02-23", "2024-02-25", "2024-02-27", "2024-02-29",
    ],
    
    highlights: [
      "Early morning access to avoid crowds and enjoy cooler temperatures",
      "Climb the Pyramid of the Sun, the third largest pyramid in the world",
      "Explore the Avenue of the Dead and Temple of Quetzalcoatl",
      "Learn about ancient astronomical alignments and city planning",
      "Visit an obsidian workshop to see traditional craftsmanship",
    ],
    
    inclusions: [
      "Private archaeological expert guide",
      "Round-trip transportation in air-conditioned vehicle",
      "Skip-the-line entrance fees to Teotihuacan",
      "Bottled water throughout the tour",
      "Obsidian workshop visit with demonstration",
      "Detailed historical information with visual aids",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Food and beverages beyond water provided",
      "Gratuities (recommended but at your discretion)",
      "Personal expenses and souvenirs",
      "Travel insurance",
    ],
    
    itinerary: [
      "07:00 - Depart from Mexico City meeting point",
      "08:00 - Arrive at Teotihuacan archaeological site",
      "08:15 - Begin guided tour through the ancient city",
      "08:45 - Explore Temple of Quetzalcoatl with detailed explanation",
      "09:30 - Walk the Avenue of the Dead with historical commentary",
      "10:30 - Climb the Pyramid of the Sun (optional)",
      "11:30 - Visit the Pyramid of the Moon",
      "12:00 - Explore lesser-known residential compounds and murals",
      "12:45 - Visit obsidian workshop with demonstration",
      "13:30 - Depart Teotihuacan",
      "14:30 - Return to Mexico City meeting point",
    ],
    
    faqs: [
      {
        question: "How physically demanding is climbing the pyramids?",
        answer:
          "Climbing the Pyramid of the Sun involves approximately 248 steep steps. While many visitors of various fitness levels complete the climb, it can be challenging, especially in the heat and at high altitude (7,200 feet). The Pyramid of the Moon has fewer steps but is still steep. Taking the climb slowly, with breaks, makes it manageable for most people. Those with mobility issues, heart conditions, or who are uncomfortable with heights may prefer to enjoy the impressive structures from ground level."
      },
      {
        question: "What should I bring on this tour?",
        answer:
          "We recommend wearing comfortable walking shoes, a hat, and sunscreen as there is minimal shade at the archaeological site. Bringing snacks, extra water (beyond what we provide), and a camera is advisable. A light jacket or layered clothing is suggested as mornings can be cool before warming up significantly by midday."
      },
      {
        question: "Is photography allowed at Teotihuacan?",
        answer:
          "Yes, photography is permitted throughout the site. There is no restriction on personal photography, though professional photography/video equipment may require a special permit. Drones are prohibited without prior authorization from INAH (National Institute of Anthropology and History)."
      },
    ],
  },
  {
    title: "Frida Kahlo's Casa Azul & Coyoacán Cultural Tour",
    description:
      "Immerse yourself in the colorful world of Frida Kahlo with priority access to her famous Blue House museum, followed by exploration of the charming Coyoacán neighborhood with its colonial architecture, vibrant markets, and artistic heritage.",
    city: "Mexico City",
    country: "Mexico",
    region: "Central Mexico",
    images: [
      "/images/tours/mexico-city/casa-azul.jpg",
      "/images/tours/mexico-city/coyoacan-market.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Art", "Cultural", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "art-and-music",
    
    meetingPoint: {
      address: "Frida Kahlo Museum, Londres 247, Del Carmen, Coyoacán, Mexico City",
      coordinates: {
        latitude: 19.3554,
        longitude: -99.1627,
      },
      instructions: "Meet outside the main entrance to the Frida Kahlo Museum (Casa Azul). Your guide will be holding a clipboard with a Frida Kahlo image.",
      contactNumber: "+52 55 1234 5679",
      contactEmail: "fridatour@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-18", "2023-12-20", "2023-12-22", "2023-12-24", "2023-12-26", "2023-12-28", "2023-12-30",
      "2024-01-01", "2024-01-03", "2024-01-05", "2024-01-07", "2024-01-09", "2024-01-11", "2024-01-13", "2024-01-15", "2024-01-17", "2024-01-19", "2024-01-21", "2024-01-23", "2024-01-25", "2024-01-27", "2024-01-29", "2024-01-31",
      "2024-02-02", "2024-02-04", "2024-02-06", "2024-02-08", "2024-02-10", "2024-02-12", "2024-02-14", "2024-02-16", "2024-02-18", "2024-02-20", "2024-02-22", "2024-02-24", "2024-02-26", "2024-02-28",
    ],
    
    highlights: [
      "Skip-the-line access to the famous Casa Azul (Frida Kahlo Museum)",
      "See Frida's art, personal belongings, and the rooms where she lived and worked",
      "Explore the charming colonial streets and plazas of Coyoacán",
      "Visit the traditional market with local crafts and Mexican cuisine",
      "Discover the connection between Frida, Diego Rivera, and Leon Trotsky in this neighborhood",
    ],
    
    inclusions: [
      "Art historian guide specializing in Mexican modernism",
      "Priority entrance to Frida Kahlo Museum with guided tour",
      "Walking tour of Coyoacán neighborhood",
      "Visit to Mercado de Coyoacán",
      "Traditional Mexican snack or beverage",
      "Detailed historical and artistic context",
    ],
    
    exclusions: [
      "Transportation to and from the meeting point",
      "Entry fees to additional optional sites",
      "Additional food and beverages beyond included snack",
      "Photography permits inside Casa Azul (if required)",
      "Personal expenses and souvenirs",
    ],
    
    itinerary: [
      "10:00 - Meet at Casa Azul entrance for introduction",
      "10:15 - Priority access and guided tour of Frida Kahlo Museum",
      "11:30 - Walk to Plaza Hidalgo and Jardín Centenario (Coyoacán center)",
      "12:00 - Visit the 16th-century Church of San Juan Bautista",
      "12:30 - Exploration of Coyoacán's colonial streets and architecture",
      "13:00 - Visit Mercado de Coyoacán with time to explore",
      "13:30 - Sample traditional Mexican snack or beverage",
      "14:00 - Optional visit to Leon Trotsky Museum (entry fee not included)",
      "14:30 - Final discussion of artistic and historical significance of area",
      "15:00 - Tour conclusion with recommendations for further exploration",
    ],
    
    faqs: [
      {
        question: "Can I take photos inside the Frida Kahlo Museum?",
        answer:
          "Photography for personal use without flash is permitted in most areas of the museum for an additional fee (around 30 pesos) payable directly at the museum. Photography of certain artworks may be restricted due to copyright. Professional photography equipment requires special permission arranged in advance."
      },
      {
        question: "Is this tour wheelchair accessible?",
        answer:
          "The Frida Kahlo Museum has limited accessibility for wheelchairs, with some areas difficult to access due to the historic nature of the building. Parts of Coyoacán have cobblestone streets that can be challenging to navigate. Please contact us in advance if you have mobility concerns so we can best accommodate your needs and provide specific information."
      },
      {
        question: "Will the tour still operate on days when the Casa Azul is particularly busy?",
        answer:
          "Yes, our skip-the-line access ensures entry even on busy days. However, the museum limits the number of visitors at any given time, so on extremely busy days (particularly holidays), there might still be a short wait. We schedule tours during optimal times to minimize crowds, and our guides are expert at navigating the space efficiently."
      },
    ],
  },
  {
    title: "Mexico City Street Food & Market Adventure",
    description:
      "Sample your way through Mexico City's renowned culinary scene with expert food guides leading you through bustling markets, street food stalls, and hidden local eateries to taste authentic regional specialties and learn about Mexican foodways.",
    city: "Mexico City",
    country: "Mexico",
    region: "Central Mexico",
    images: [
      "/images/tours/mexico-city/street-tacos.jpg",
      "/images/tours/mexico-city/mercado-tour.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Food", "Culinary", "Market"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    
    meetingPoint: {
      address: "Palacio de Bellas Artes, Av. Juárez, Centro Histórico, Mexico City",
      coordinates: {
        latitude: 19.4352,
        longitude: -99.1410,
      },
      instructions: "Meet at the main entrance steps of Palacio de Bellas Artes. Your guide will be holding a red umbrella with 'Food Tour' written on it.",
      contactNumber: "+52 55 1234 5680",
      contactEmail: "foodtour@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", "2023-12-25", "2023-12-27", "2023-12-29", "2023-12-31",
      "2024-01-02", "2024-01-04", "2024-01-06", "2024-01-08", "2024-01-10", "2024-01-12", "2024-01-14", "2024-01-16", "2024-01-18", "2024-01-20", "2024-01-22", "2024-01-24", "2024-01-26", "2024-01-28", "2024-01-30",
      "2024-02-01", "2024-02-03", "2024-02-05", "2024-02-07", "2024-02-09", "2024-02-11", "2024-02-13", "2024-02-15", "2024-02-17", "2024-02-19", "2024-02-21", "2024-02-23", "2024-02-25", "2024-02-27", "2024-02-29",
    ],
    
    highlights: [
      "Sample 8-10 different Mexican specialties from trusted vendors",
      "Explore Mercado San Juan, Mexico City's premier gourmet market",
      "Taste authentic tacos, tlacoyos, tamales, and regional specialties",
      "Learn about Mexico's diverse culinary traditions and ingredients",
      "Visit both traditional markets and modern food halls",
    ],
    
    inclusions: [
      "Expert culinary guide with food safety knowledge",
      "All food tastings at 6-8 different locations (equivalent to a full meal)",
      "One traditional Mexican beverage (non-alcoholic)",
      "One craft beer or mezcal tasting",
      "Bottled water throughout the tour",
      "Food map with vendor recommendations",
      "Hand sanitizer",
    ],
    
    exclusions: [
      "Transportation to and from meeting point",
      "Additional food and beverages beyond included tastings",
      "Extra alcoholic beverages",
      "Gratuities (recommended but optional)",
      "Personal purchases from markets",
    ],
    
    itinerary: [
      "10:00 - Meet at Palacio de Bellas Artes for introduction",
      "10:15 - Visit to first street food stand for traditional breakfast items",
      "10:45 - Walk through historic center with culinary history commentary",
      "11:00 - Mercado San Juan exploration with multiple food tastings",
      "11:45 - Sample regional Mexican specialties from various vendors",
      "12:15 - Visit to traditional tortilleria to learn about nixtamalization process",
      "12:45 - Street taco tasting from renowned local vendor",
      "13:15 - Beverage pairing (alcoholic or non-alcoholic)",
      "13:30 - Sweet treats and Mexican dessert specialties",
      "14:00 - Tour conclusion with final recommendations and food map",
    ],
    
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer:
          "Yes, we carefully select vendors based on strict hygiene practices, high turnover of fresh ingredients, and local reputation. Our guides are extensively trained in food safety and only take guests to establishments that have been personally vetted. We provide hand sanitizer throughout the tour and bottled water. Many of our selected vendors have been in business for decades and are considered institutions in their neighborhoods."
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarians, pescatarians, and most food allergies with advance notice. Please inform us of any dietary restrictions when booking. While Mexican cuisine offers many options, some traditional dishes may be modified or substituted to accommodate dietary needs. Strict vegan or gluten-free diets can be more challenging but are still possible with prior notice."
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2 miles (3.2 km) at a relaxed pace with frequent stops for food tastings and rest. Mexico City's historic center is mostly flat and walkable, though there may be some crowded areas in the markets. Comfortable walking shoes are recommended."
      },
    ],
  },
  {
    title: "Mexico City Nightlife Tour: Cantinas, Mezcal & Mariachi",
    description:
      "Experience authentic Mexican nightlife with visits to historic cantinas, a mezcal tasting guided by a spirit expert, and the chance to witness traditional mariachi performances in Plaza Garibaldi.",
    city: "Mexico City",
    country: "Mexico",
    region: "Central Mexico",
    images: [
      "/images/tours/mexico-city/cantina-traditional.jpg",
      "/images/tours/mexico-city/mariachi-plaza.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Nightlife", "Music", "Drinks"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",
    
    meetingPoint: {
      address: "Zócalo, Historic Center, Mexico City",
      coordinates: {
        latitude: 19.4326,
        longitude: -99.1332,
      },
      instructions: "Meet at the northwest corner of Zócalo main square, near the Metropolitan Cathedral entrance. Your guide will be holding a sign with 'Nightlife Tour' written on it.",
      contactNumber: "+52 55 1234 5681",
      contactEmail: "nightlifetour@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-16", "2023-12-22", "2023-12-23", "2023-12-29", "2023-12-30",
      "2024-01-05", "2024-01-06", "2024-01-12", "2024-01-13", "2024-01-19", "2024-01-20", "2024-01-26", "2024-01-27",
      "2024-02-02", "2024-02-03", "2024-02-09", "2024-02-10", "2024-02-16", "2024-02-17", "2024-02-23", "2024-02-24",
    ],
    
    highlights: [
      "Visit three historic cantinas with unique character and ambiance",
      "Expert-led mezcal tasting featuring artisanal varieties",
      "Experience live mariachi music at Plaza Garibaldi",
      "Learn about Mexican drinking traditions and cantina culture",
      "Sample traditional botanas (bar snacks) served with drinks",
    ],
    
    inclusions: [
      "Local nightlife expert guide",
      "Cover charges and entrance fees where applicable",
      "One drink at each cantina (3 total)",
      "Mezcal tasting flight (4 varieties)",
      "Traditional botanas (snacks) at cantinas",
      "Mariachi experience at Plaza Garibaldi",
      "Nightlife map with additional recommendations",
    ],
    
    exclusions: [
      "Transportation to and from meeting point",
      "Additional drinks beyond those included",
      "Full dinner (though substantial snacks are provided)",
      "Personal mariachi song requests (available at additional cost)",
      "Gratuities (recommended but optional)",
    ],
    
    itinerary: [
      "19:00 - Meet at Zócalo for introduction to Mexican nightlife",
      "19:15 - Short walk to first historic cantina in Centro Histórico",
      "19:30 - First cantina visit with welcome drink and history discussion",
      "20:15 - Walk to specialized mezcaleria for tasting experience",
      "20:30 - Guided tasting of artisanal mezcals with expert explanation",
      "21:30 - Visit second traditional cantina with live music",
      "22:15 - Walk to Plaza Garibaldi, home of mariachi music",
      "22:30 - Experience mariachi performances at the plaza",
      "23:15 - Final cantina visit near Plaza Garibaldi",
      "00:00 - Tour concludes with recommendations for continuing your evening",
    ],
    
    faqs: [
      {
        question: "Is this tour safe at night?",
        answer:
          "Yes, we carefully plan our routes through well-populated, safe areas of the city center. Our guides are experienced locals who know the neighborhoods intimately. We travel as a group between venues, and our guide can arrange taxis for your return to your accommodation at the end of the night if desired."
      },
      {
        question: "What should I wear for the nightlife tour?",
        answer:
          "Smart casual attire is recommended. While most cantinas aren't formal, very casual attire like shorts and flip-flops might not be appropriate. Comfortable shoes are advisable as there is some walking between venues. The weather can get cool in the evenings, so bringing a light jacket is recommended."
      },
      {
        question: "Can non-drinkers enjoy this tour?",
        answer:
          "Absolutely! While alcohol tasting is a component of the experience, non-alcoholic alternatives can be provided. The tour offers cultural insights into Mexican nightlife, music traditions, and social customs that are enjoyable regardless of whether you drink alcohol. The cantinas we visit are cultural institutions beyond just being bars."
      },
    ],
  },
  {
    title: "Floating Gardens of Xochimilco & Frida Kahlo's Neighborhood",
    description:
      "Glide through the ancient canals of Xochimilco on a colorful trajinera boat while enjoying music, food, and drinks, then explore the bohemian district of Coyoacán where Frida Kahlo and Diego Rivera once lived.",
    city: "Mexico City",
    country: "Mexico",
    region: "Central Mexico",
    images: [
      "/images/tours/mexico-city/xochimilco-boats.jpg",
      "/images/tours/mexico-city/coyoacan-square.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.8,
    tags: ["UNESCO", "Cultural", "Frida Kahlo"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    
    meetingPoint: {
      address: "Museo Nacional de Antropología, Paseo de la Reforma, Mexico City",
      coordinates: {
        latitude: 19.4260,
        longitude: -99.1865,
      },
      instructions: "Meet at the main entrance fountain of the National Anthropology Museum. Your guide will be holding a sign with 'Xochimilco Tour' written on it.",
      contactNumber: "+52 55 1234 5682",
      contactEmail: "xochimilco@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-19", "2023-12-23", "2023-12-26", "2023-12-30",
      "2024-01-02", "2024-01-06", "2024-01-09", "2024-01-13", "2024-01-16", "2024-01-20", "2024-01-23", "2024-01-27", "2024-01-30",
      "2024-02-03", "2024-02-06", "2024-02-10", "2024-02-13", "2024-02-17", "2024-02-20", "2024-02-24", "2024-02-27",
    ],
    
    highlights: [
      "Private two-hour trajinera boat ride through Xochimilco's UNESCO-listed canals",
      "Experience floating mariachi bands and local culture on the water",
      "Explore the historic center of Coyoacán with its colonial architecture",
      "Visit the famous Frida Kahlo neighborhood (external views of Casa Azul)",
      "Discover the ancient agricultural technique of chinampas (floating gardens)",
    ],
    
    inclusions: [
      "Round-trip transportation in air-conditioned vehicle",
      "Professional bilingual guide",
      "Private trajinera boat rental at Xochimilco (2 hours)",
      "Traditional Mexican lunch",
      "One drink per person (beer, soft drink, or water)",
      "Walking tour of Coyoacán",
      "Bottled water throughout the day",
    ],
    
    exclusions: [
      "Entry fee to Frida Kahlo Museum (Casa Azul)",
      "Additional food and beverages beyond those mentioned",
      "Mariachi serenades on the boat (available for additional fee)",
      "Personal expenses and souvenirs",
      "Gratuities for guide and boat operator",
    ],
    
    itinerary: [
      "09:00 - Departure from meeting point",
      "09:45 - Arrival at Xochimilco canals",
      "10:00 - Board your private trajinera boat",
      "10:15 - Begin canal journey with historical and cultural commentary",
      "11:00 - Enjoy floating vendors, music, and refreshments on the water",
      "12:00 - Learn about chinampas agricultural system and its history",
      "12:30 - Traditional Mexican lunch served on the boat",
      "13:00 - Return to dock and disembark",
      "13:30 - Drive to Coyoacán",
      "14:00 - Walking tour of Coyoacán's historic center",
      "14:45 - Visit Plaza Hidalgo and Jardín Centenario",
      "15:15 - See exterior of Casa Azul and learn about Frida Kahlo",
      "15:45 - Free time to explore or visit local cafes",
      "16:00 - Return to original meeting point",
    ],
    
    faqs: [
      {
        question: "What's the best day to visit Xochimilco?",
        answer:
          "Weekends are lively and festive at Xochimilco, with many Mexican families celebrating and many boats on the canals. If you enjoy a party atmosphere with lots of music and energy, Saturday or Sunday is perfect. For a more peaceful experience with fewer crowds, weekdays are recommended. Our tour operates year-round, but the canals are especially beautiful during the dry season (November-May)."
      },
      {
        question: "Does this tour include entry to the Frida Kahlo Museum?",
        answer:
          "This tour includes a visit to the Coyoacán neighborhood where Frida Kahlo lived, with external views of her famous Casa Azul (Blue House) and commentary about her life and work, but does not include entry to the museum itself. As tickets often sell out weeks in advance, we focus on the neighborhood experience. If you wish to visit the museum interior, we recommend booking our dedicated Frida Kahlo Museum tour or purchasing tickets separately well in advance."
      },
      {
        question: "Is food available on the boat at Xochimilco?",
        answer:
          "Yes, floating vendors sell various snacks and beverages as you cruise the canals. Additionally, our tour includes a traditional Mexican lunch served on board your trajinera. This typically features items like quesadillas, tlacoyos, guacamole, and seasonal specialties. Vegetarian options are available with advance notice."
      },
    ],
  },
];

export default mexicoCityTours;
