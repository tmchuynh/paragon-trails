import { Tour } from "@/lib/interfaces/services/tours";

export const portoTours: Tour[] = [
  {
    title: "Port Wine Cellars & Douro Valley",
    description:
      "Embark on a journey through Portugal's renowned wine region with private tastings in historic Port wine lodges, followed by a scenic Douro Valley tour with vineyard visits and a traditional Portuguese lunch overlooking terraced hillsides.",
    city: "Porto",
    country: "Portugal",
    region: "Northern Portugal",
    images: [
      "/images/tours/porto/port-wine-cellar.jpg",
      "/images/tours/porto/douro-valley.jpg",
    ],
    duration: "8 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Wine", "Port", "Valley"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address:
        "Taylor's Port Wine Cellars, Rua do Choupelo 250, Vila Nova de Gaia",
      coordinates: {
        latitude: 41.1337,
        longitude: -8.612,
      },
      instructions:
        "Meet at the main entrance to Taylor's Port Wine Cellars. Your guide will be holding a wine-themed Paragon Trails sign.",
      contactNumber: "+351 912 345 678",
      contactEmail: "portwine@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
    ],

    highlights: [
      "Exclusive tastings at three historic Port wine lodges in Vila Nova de Gaia",
      "Scenic drive through the UNESCO World Heritage Douro Valley",
      "Visit to working vineyard with explanation of terrace cultivation methods",
      "Traditional Portuguese lunch at panoramic vineyard restaurant",
      "Learn about Port wine production from vine to bottle with expert guidance",
    ],

    inclusions: [
      "Professional sommelier guide with Port wine expertise",
      "Luxury transportation with air conditioning and WiFi",
      "Premium tastings of 12 Port wines across different styles and ages",
      "Three-course traditional Portuguese lunch with wine pairing",
      "All entrance fees to Port lodges and vineyard",
      "Douro River cruise (1 hour, seasonal May-October)",
      "Bottled water and snacks on the vehicle",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for €15 supplement)",
      "Additional wine purchases beyond included tastings",
      "Gratuities (recommended but at your discretion)",
      "Personal expenses",
      "Travel insurance",
    ],

    itinerary: [
      "09:00 - Meet at Taylor's Port Wine Cellars for introduction to Port wine history",
      "09:15 - Guided tour of historic cellars with barrel aging demonstration",
      "10:00 - First Port wine tasting featuring Ruby, Tawny, and Vintage styles",
      "10:45 - Visit second Port lodge with focus on aging techniques",
      "11:30 - Premium aged Port tasting including 20-year Tawny and LBV",
      "12:15 - Scenic drive to Douro Valley with photo stops at panoramic viewpoints",
      "13:30 - Arrival at vineyard estate for tour of production facilities",
      "14:00 - Traditional Portuguese lunch with wine pairing at vineyard restaurant",
      "15:30 - Guided walk through terraced vineyards with viticulture explanation",
      "16:15 - Final Port tasting including rare varieties at estate tasting room",
      "17:00 - Douro River cruise (May-October) or additional vineyard visit (November-April)",
      "18:00 - Return journey to Porto with sunset views",
      "19:00 - Tour concludes at original meeting point",
    ],

    faqs: [
      {
        question: "What makes Port wine unique?",
        answer:
          "Port is a fortified wine exclusively produced in the Douro Valley region. During the tour, you'll learn about its unique production method involving adding grape brandy during fermentation, the various styles (Ruby, Tawny, White, etc.), aging requirements, and the fascinating history of British merchant families who established many of the famous Port houses you'll visit.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "This tour is primarily designed for adults due to the focus on wine tasting and vineyard visits. However, children are welcome if accompanied by an adult, and we can provide non-alcoholic beverages for them during the tastings.",
      },
      {
        question: "What's the difference between the Port lodges we'll visit?",
        answer:
          "Each Port lodge has its own unique history, production methods and specialty styles. Taylor's is renowned for its vintage Ports, Graham's for its aged tawnies, and Sandeman for its distinctive ruby Ports. At each location, we focus on their signature styles and production techniques, providing a comprehensive understanding of Port wine varieties.",
      },
    ],
  },
  {
    title: "Porto's Hidden Treasures & Riverside Heritage",
    description:
      "Explore Porto's UNESCO-listed historic center with a local historian, discovering hidden corners, architectural gems, and authentic neighborhoods beyond the tourist trail, including the stunning riverside Ribeira district.",
    city: "Porto",
    country: "Portugal",
    region: "Northern Portugal",
    images: [
      "/images/tours/porto/ribeira-district.jpg",
      "/images/tours/porto/hidden-porto.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Historical", "Architecture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "São Bento Railway Station, Praça de Almeida Garrett, Porto",
      coordinates: {
        latitude: 41.1456,
        longitude: -8.6108,
      },
      instructions:
        "Meet in the main hall of São Bento Railway Station in front of the famous azulejo tile panels. Your guide will be holding a blue Porto history book.",
      contactNumber: "+351 912 345 679",
      contactEmail: "hiddenporto@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-16",
      "2023-12-21",
      "2023-12-28",
      "2024-01-04",
      "2024-01-06",
      "2024-01-11",
      "2024-01-18",
      "2024-01-20",
      "2024-01-25",
      "2024-02-01",
      "2024-02-03",
      "2024-02-08",
      "2024-02-15",
      "2024-02-17",
      "2024-02-22",
    ],

    highlights: [
      "Explore hidden medieval alleyways and secret viewpoints in Porto's historic center",
      "Visit the stunning São Bento Station with its 20,000 hand-painted historic tiles",
      "Discover architectural masterpieces including Baroque churches and Art Nouveau cafés",
      "Wander through the picturesque Ribeira district with its colorful houses and riverside charm",
      "Experience authentic local life in neighborhoods rarely visited by tourists",
    ],

    inclusions: [
      "Expert local historian guide with deep Porto knowledge",
      "Entry to São Francisco Church with its ornate gold interior",
      "Traditional Portuguese pastry and coffee break",
      "River viewpoint access at exclusive location",
      "Small group size (maximum 8 participants)",
      "Detailed map of hidden Porto highlights for further exploration",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Public transportation tickets (if needed during tour)",
      "Additional food and beverages beyond included coffee break",
      "Gratuities (optional)",
      "Entry fees to any optional sites not on the main itinerary",
    ],

    itinerary: [
      "09:00 - Meet at São Bento Station for tour introduction and azulejo tile explanation",
      "09:30 - Walk through hidden medieval streets behind the cathedral",
      "10:00 - Visit to São Francisco Church with its extraordinary gold-leaf Baroque interior",
      "10:45 - Explore the hidden Vitória neighborhood with its authentic local character",
      "11:30 - Coffee and pastry break at historic café with architectural significance",
      "12:00 - Walk down to Ribeira district via secret stairways with scenic viewpoints",
      "12:30 - Guided exploration of Ribeira's hidden corners and riverside history",
      "13:15 - Visit to exclusive river viewpoint for panoramic photography opportunity",
      "13:45 - Tour conclusion with recommendations for lunch and further exploration",
    ],

    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km with some steep hills and staircases, as Porto is built on different levels rising from the river. We take a relaxed pace with plenty of stops, but comfortable footwear is essential. For those with mobility concerns, we can arrange a modified version using public transportation for some portions.",
      },
      {
        question: "Will we visit any local markets or shops?",
        answer:
          "Yes! The tour includes a visit to the historic Mercado do Bolhão, where you can experience local food culture and shop for traditional Portuguese products. We also explore artisan shops in the Ribeira district, showcasing handmade crafts and local delicacies.",
      },
      {
        question: "Is this tour suitable for families with young children?",
        answer:
          "Yes, this tour is family-friendly! We can adjust the pace and include engaging stories and activities for children. The Ribeira district has plenty of open spaces and scenic views that kids will enjoy. However, please note that some areas may have cobblestone streets and steps, so a stroller may not be practical.",
      },
    ],
  },
  {
    title: "Culinary Delights of Porto: Food & Culture Tour",
    description:
      "Savor the flavors of Porto with a guided food tour through the city's vibrant markets, traditional eateries, and hidden gems, tasting local specialties like Francesinha, Bacalhau, and Pastel de Nata.",
    city: "Porto",
    country: "Portugal",
    region: "Northern Portugal",
    images: [
      "/images/tours/porto/food-market.jpg",
      "/images/tours/porto/francesinha.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Culture", "Local Cuisine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Mercado do Bolhão, Rua Formosa, Porto",
      coordinates: {
        latitude: 41.1496,
        longitude: -8.6066,
      },
      instructions:
        "Meet at the main entrance to Mercado do Bolhão market. Your guide will be holding a food tour sign with a fork and knife icon.",
      contactNumber: "+351 912 345 680",
      contactEmail: "portofood@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-07",
      "2024-01-12",
      "2024-01-19",
      "2024-01-21",
      "2024-01-26",
      "2024-02-02",
      "2024-02-04",
      "2024-02-09",
      "2024-02-16",
      "2024-02-18",
      "2024-02-23",
    ],

    highlights: [
      "Sample authentic Portuguese cuisine at 7-8 different food stops",
      "Explore the historic Bolhão Market with its fresh local products",
      "Taste the iconic Francesinha sandwich at Porto's most renowned café",
      "Learn about Portuguese culinary traditions and local ingredients",
      "Visit specialty food shops for cheese, cured meats, and traditional conservas (tinned fish)",
    ],

    inclusions: [
      "Professional local food guide with culinary expertise",
      "All food tastings at 7-8 different locations (equivalent to a full meal)",
      "3 beverage pairings including wine and local drinks",
      "Behind-the-scenes access at select food establishments",
      "Small group size (maximum 10 participants)",
      "Recipe cards for selected Portuguese dishes",
      "Discount vouchers for selected food shops",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included tastings",
      "Personal shopping purchases at markets and food shops",
      "Gratuities (optional)",
      "Transportation between some tasting locations (walking tour)",
    ],

    itinerary: [
      "10:00 - Meet at Bolhão Market for introduction to Portuguese food culture",
      "10:15 - Market tour with tastings of local cheeses, cured meats, and fresh fruit",
      "11:00 - Visit traditional bakery for bread and pastry tastings",
      "11:30 - Sample Port wine and chocolate pairing at specialty shop",
      "12:00 - Taste traditional cod dishes (bacalhau) at family-run tavern",
      "12:45 - Visit to historic café for coffee and pastel de nata",
      "13:15 - Main course featuring the iconic Francesinha sandwich at famous café",
      "14:00 - Artisanal ice cream made with traditional Portuguese flavors",
      "14:30 - Final stop for digestif liqueur tasting and recipe sharing",
      "15:00 - Tour conclusion with food shopping recommendations",
    ],

    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes tastings of iconic Porto dishes such as Francesinha (a hearty sandwich), Bacalhau à Brás (codfish dish), local cheeses, cured meats, and of course, the famous Pastel de Nata. We also visit local markets to sample fresh produce and regional specialties.",
      },
      {
        question: "Are there vegetarian or vegan options available?",
        answer:
          "Yes, we can accommodate dietary restrictions with advance notice. Vegetarian and vegan options will be provided at most stops, ensuring everyone can enjoy the culinary experience.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The tour is family-friendly and designed to engage visitors of all ages. Children will enjoy trying new foods and learning about Porto's culinary traditions.",
      },
    ],
  },
  {
    title: "Traditional Fado Night: Music & Dinner Experience",
    description:
      "Immerse yourself in the soulful melodies of Portugal's UNESCO-listed Fado music during an intimate evening in a traditional Porto Fado house, combined with a multi-course dinner featuring local specialties and fine wines.",
    city: "Porto",
    country: "Portugal",
    region: "Northern Portugal",
    images: [
      "/images/tours/porto/fado-performance.jpg",
      "/images/tours/porto/portuguese-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Fado", "Music", "Dining"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "art-and-music",

    meetingPoint: {
      address: "Casa da Música, Avenida da Boavista 604-610, Porto",
      coordinates: {
        latitude: 41.158,
        longitude: -8.6305,
      },
      instructions:
        "Meet at the main entrance of Casa da Música. Your guide will be holding a guitar-shaped Fado sign.",
      contactNumber: "+351 912 345 681",
      contactEmail: "fadopordo@paragontrails.com",
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
      "Experience authentic Fado music performed by traditional artists",
      "Learn about the history and cultural significance of this UNESCO-listed musical tradition",
      "Enjoy an intimate performance in a genuine Fado house away from tourist crowds",
      "Savor a traditional Portuguese dinner with regional wines",
      "Meet the performers and musicians after the show",
    ],

    inclusions: [
      "Cultural guide with expertise in Portuguese music traditions",
      "Reserved seating at authentic Fado house",
      "Complete Portuguese dinner with multiple courses",
      "Two glasses of wine or non-alcoholic alternatives",
      "Fado performance featuring multiple singers",
      "Transportation between Casa da Música and Fado venue",
      "Fado music CD souvenir",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond included wine",
      "Gratuities for performers and restaurant staff",
      "Professional photography (available at additional cost)",
      "Return transportation after the experience",
    ],

    itinerary: [
      "19:00 - Meet at Casa da Música for introduction to Fado music history",
      "19:15 - Short presentation on Fado instruments and performance styles",
      "19:45 - Transportation to traditional Fado house in historic district",
      "20:00 - Welcome drink and seating at reserved tables",
      "20:15 - First dinner course served with wine pairing",
      "20:45 - First Fado performance set (25 minutes)",
      "21:15 - Main dinner course with regional specialties",
      "21:45 - Second Fado performance set with different artists",
      "22:30 - Dessert service and final music performance",
      "23:00 - Meet and greet with performers (subject to availability)",
      "23:30 - Experience conclusion with guide recommendations for nightlife",
    ],

    faqs: [
      {
        question: "What exactly is Fado music?",
        answer:
          "Fado is Portugal's most iconic musical tradition, recognized by UNESCO as Intangible Cultural Heritage. Characterized by its mournful melodies and lyrics expressing 'saudade' (a uniquely Portuguese sense of longing), Fado features vocalists accompanied by Portuguese and classical guitars. Our experience includes informative introduction to help you understand and appreciate this profound musical expression.",
      },
      {
        question: "What kind of dinner is served?",
        answer:
          "The dinner features traditional Portuguese cuisine including appetizers like cheese and cured meats, main courses such as codfish (bacalhau) or slow-cooked pork, and traditional desserts. The menu varies slightly but always showcases authentic local specialties paired with regional wines. Vegetarian options are available with advance notice.",
      },
      {
        question: "Is photography allowed during the Fado performance?",
        answer:
          "Photography without flash is permitted between songs, but not during performances as it disrupts the intimate atmosphere and the artists' concentration. Video recording is not allowed. Our guide will advise on appropriate times for taking photos, and we offer professional photos of the evening as an optional purchase.",
      },
    ],
  },
  {
    title: "Porto Bridges & Douro River Cruise",
    description:
      "Discover Porto's six magnificent bridges from the best vantage point – the water itself – on this relaxing river cruise with expert commentary on the city's riverside landmarks, engineering marvels, and historical development.",
    city: "Porto",
    country: "Portugal",
    region: "Northern Portugal",
    images: [
      "/images/tours/porto/river-cruise.jpg",
      "/images/tours/porto/porto-bridges.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.6,
    tags: ["River Cruise", "Sightseeing", "Bridges"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "sightseeing",

    meetingPoint: {
      address: "Cais da Ribeira Pier, Cais da Ribeira, Porto",
      coordinates: {
        latitude: 41.1405,
        longitude: -8.6116,
      },
      instructions:
        "Meet at the Paragon Trails boat stand at Cais da Ribeira, near the Dom Luís I Bridge. Look for our blue and white boat with company logo.",
      contactNumber: "+351 912 345 682",
      contactEmail: "portocruise@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-22",
      "2023-12-23",
      "2023-12-24",
      "2023-12-29",
      "2023-12-30",
      "2023-12-31",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
      "2024-02-16",
      "2024-02-17",
      "2024-02-18",
      "2024-02-23",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "Cruise under all six bridges connecting Porto and Vila Nova de Gaia",
      "Learn about the engineering achievements of the Dom Luís I Bridge",
      "See Porto's colorful riverside districts from the water perspective",
      "Discover the history of Port wine transportation along the Douro",
      "Enjoy unmatched photography opportunities of Porto's skyline",
    ],

    inclusions: [
      "1.5-hour guided river cruise on comfortable boat",
      "English-speaking guide with expertise in Porto's architecture and history",
      "Detailed commentary on bridges and riverside landmarks",
      "Glass of Port wine or soft drink",
      "Illustrated guidebook of Porto's bridges",
      "Covered and open-air seating options",
      "Access to upper viewing deck",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Gratuities (optional)",
      "Full meal (light snacks available for purchase)",
      "Personal expenses",
    ],

    itinerary: [
      "14:00 - Meet at Cais da Ribeira pier for check-in",
      "14:15 - Welcome aboard with safety briefing and introduction",
      "14:30 - Boat departure with initial views of Ribeira district",
      "14:45 - Cruise under Luís I Bridge with commentary on its engineering",
      "15:00 - Pass under Infante D. Henrique Bridge with historical context",
      "15:15 - View of Maria Pia Bridge designed by Gustave Eiffel",
      "15:30 - Refreshment service with Port wine or soft drinks",
      "15:45 - Cruise to São João and Freixo bridges with urban development commentary",
      "16:00 - Turn-around point with panoramic photography opportunity",
      "16:15 - Return journey with alternative perspective and Arrábida Bridge",
      "16:45 - Cruise conclusion at original departure point",
      "17:00 - Optional continuation to cable car for panoramic city views (extra cost)",
    ],

    faqs: [
      {
        question: "Will the cruise be canceled in case of bad weather?",
        answer:
          "The cruise operates in most weather conditions except in cases of severe weather that would compromise safety (strong winds, heavy rain, or fog). If we need to cancel due to weather conditions, you'll be offered the option to reschedule or receive a full refund. Our boats have covered areas to shelter from light rain or strong sun.",
      },
      {
        question: "Is this cruise accessible for people with mobility issues?",
        answer:
          "Our main deck is accessible for most passengers with limited mobility, though there are a few steps to board the boat. The upper viewing deck is accessed via stairs. Please contact us in advance if you have specific mobility concerns so we can make appropriate arrangements.",
      },
      {
        question: "What makes Porto's bridges special?",
        answer:
          "Porto's six bridges span nearly 150 years of engineering history and include designs by Gustav Eiffel's company, showcasing various architectural styles from the 19th to 21st centuries. The Dom Luís I Bridge was the longest iron arch in the world when completed in 1886. Each bridge tells part of Porto's story of growth and development, which our guide explains during the cruise.",
      },
    ],
  },
];

export default portoTours;
