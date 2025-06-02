import { Tour } from "@/lib/interfaces/services/tours";

export const newOrleansTours: Tour[] = [
  {
    title: "French Quarter History & Cocktail Tour",
    description:
      "Explore the historic French Quarter while sampling New Orleans' signature cocktails, from the Sazerac to the Hurricane, learning about the city's rich cultural heritage and cocktail innovations.",
    city: "New Orleans",
    country: "United States",
    state: "Louisiana",
    region: "Southern U.S.",
    images: [
      "/images/tours/new-orleans/french-quarter.jpg",
      "/images/tours/new-orleans/cocktail.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["History", "Cocktails", "Culture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Jackson Square, 700 Decatur St, New Orleans, LA 70116",
      coordinates: {
        latitude: 29.9573,
        longitude: -90.0631,
      },
      instructions:
        "Meet by the Andrew Jackson statue in the center of Jackson Square. Your guide will be holding a purple umbrella with 'NOLA Cocktail Tour' written on it.",
      contactNumber: "+1 504-555-1234",
      contactEmail: "cocktailtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-20",
      "2023-12-21",
      "2023-12-22",
      "2023-12-27",
      "2023-12-28",
      "2023-12-29",
      "2024-01-03",
      "2024-01-04",
      "2024-01-05",
      "2024-01-10",
      "2024-01-11",
      "2024-01-12",
      "2024-01-17",
      "2024-01-18",
      "2024-01-19",
      "2024-01-24",
      "2024-01-25",
      "2024-01-26",
      "2024-01-31",
      "2024-02-01",
      "2024-02-02",
      "2024-02-07",
      "2024-02-08",
      "2024-02-09",
      "2024-02-14",
      "2024-02-15",
      "2024-02-16",
      "2024-02-21",
      "2024-02-22",
      "2024-02-23",
      "2024-02-28",
      "2024-02-29",
    ],

    highlights: [
      "Sample 4 classic New Orleans cocktails at historic establishments",
      "Learn the story behind the Sazerac, America's first cocktail",
      "Explore the historic French Quarter with its Spanish colonial architecture",
      "Discover the city's colorful past, from pirates to prohibition",
      "Visit the oldest continually operating bar in the United States",
    ],

    inclusions: [
      "Professional licensed guide with mixology knowledge",
      "4 signature cocktails at different historic establishments",
      "French Quarter walking tour with historical commentary",
      "Recipe card for making authentic New Orleans cocktails",
      "Small group experience (maximum 12 participants)",
    ],

    exclusions: [
      "Additional food and beverages beyond included cocktails",
      "Gratuities for bartenders and guide (recommended)",
      "Hotel pickup and drop-off",
      "Souvenir purchases",
    ],

    itinerary: [
      "16:00 - Meet at Jackson Square for introduction to New Orleans' drinking culture",
      "16:15 - Visit first historic bar to sample the classic Sazerac with history lesson",
      "16:45 - Walk through the French Quarter with architectural and historical commentary",
      "17:15 - Second stop to enjoy a Ramos Gin Fizz with demonstration",
      "17:45 - Visit to the historic Napoleon House for a Pimm's Cup",
      "18:15 - Learn about prohibition era in New Orleans while walking to final venue",
      "18:30 - Final stop at iconic Pat O'Brien's for their famous Hurricane cocktail",
      "19:00 - Tour concludes with cocktail recipe sharing and recommendations",
    ],

    faqs: [
      {
        question: "Is this tour only for alcohol drinkers?",
        answer:
          "While the tour focuses on New Orleans' cocktail history, non-alcoholic alternatives are available at each stop. The historical and cultural aspects of the tour are enjoyable regardless of whether you drink alcohol. Please let us know when booking if you prefer non-alcoholic options.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 1 mile (1.6 km) of walking at a leisurely pace on flat terrain through the French Quarter. We make frequent stops at drinking establishments, so the walking portions are broken up throughout the experience.",
      },
      {
        question: "Is there a dress code for the bars we visit?",
        answer:
          "Most establishments on our tour are casual, but we recommend smart casual attire (no athletic wear or flip-flops) as some historic venues maintain certain standards. Comfortable walking shoes are advised for the cobblestone streets of the French Quarter.",
      },
    ],
  },

  {
    title: "Garden District & Lafayette Cemetery Tour",
    description:
      "Discover the elegant Garden District with its grand mansions, oak-lined streets, and famous residents, plus explore the historic Lafayette Cemetery with its unique above-ground tombs and fascinating burial customs.",
    city: "New Orleans",
    country: "United States",
    state: "Louisiana",
    region: "Southern U.S.",
    images: [
      "/images/tours/new-orleans/garden-district.jpg",
      "/images/tours/new-orleans/lafayette-cemetery.jpg",
    ],
    duration: "2.5 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Architecture", "Cemetery", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address:
        "Lafayette Cemetery No. 1, Washington Ave & Prytania St, New Orleans, LA 70130",
      coordinates: {
        latitude: 29.9284,
        longitude: -90.0851,
      },
      instructions:
        "Meet at the main gates of Lafayette Cemetery No. 1 on Washington Avenue. Your guide will be holding a green umbrella with 'Garden District Tour' written on it.",
      contactNumber: "+1 504-555-2345",
      contactEmail: "gardendistrict@paragontrails.com",
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
      "Explore the historic Lafayette Cemetery No. 1 with its ornate above-ground tombs",
      "Learn about New Orleans' unique burial customs and cemetery architecture",
      "See grand antebellum mansions and elegant Victorian homes in the Garden District",
      "Discover houses owned by famous residents including authors and celebrities",
      "Experience the lush, oak-lined streets of one of America's most beautiful neighborhoods",
    ],

    inclusions: [
      "Licensed historian guide with cemetery and architectural expertise",
      "Guided tour of Lafayette Cemetery No. 1",
      "Garden District walking tour with historical commentary",
      "Small group experience (maximum 14 participants)",
      "Complimentary bottle of water",
      "Map of the Garden District with points of interest",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Food and beverages beyond water provided",
      "Gratuities (recommended but optional)",
      "Interior access to private homes",
    ],

    itinerary: [
      "10:00 - Meet at Lafayette Cemetery gates for introduction",
      "10:15 - Guided tour of Lafayette Cemetery No. 1 with burial customs explanation",
      "10:45 - Learn about tomb architecture and famous residents",
      "11:15 - Exit cemetery and begin Garden District walking tour",
      "11:30 - View historic mansions with architectural commentary",
      "12:00 - See homes of famous residents past and present",
      "12:15 - Explore side streets with hidden architectural gems",
      "12:30 - Tour concludes with final commentary and recommendations",
    ],

    faqs: [
      {
        question: "Will we go inside any of the mansions?",
        answer:
          "This tour focuses on the exterior architecture and history of the Garden District homes, as these are private residences. We view and discuss the homes from public sidewalks, with your guide providing detailed information about their architecture, history, and famous occupants. For interior home tours, we recommend the nearby Buckner Mansion which offers separate interior tours on specific dates.",
      },
      {
        question:
          "Is the cemetery portion of the tour spooky or inappropriate for children?",
        answer:
          "The cemetery portion focuses on history, architecture, and cultural traditions rather than supernatural elements. Your guide discusses burial customs, tomb design, and historical figures in an educational and respectful manner. Most children find the unique above-ground tombs fascinating. The tour is generally appropriate for children 8 and older who have an interest in history.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 1.5 miles (2.4 km) at a leisurely pace on mostly flat terrain. The cemetery has paved paths, and the Garden District features well-maintained sidewalks, though some may be uneven due to tree roots. Comfortable walking shoes are recommended.",
      },
    ],
  },

  {
    title: "Bayou Swamp & Wildlife Encounter",
    description:
      "Venture into the mysterious bayous of Louisiana with a naturalist guide who will introduce you to alligators, exotic birds, and lush swamp vegetation while sharing stories of Cajun culture and wetland ecology.",
    city: "New Orleans",
    country: "United States",
    state: "Louisiana",
    region: "Southern U.S.",
    images: [
      "/images/tours/new-orleans/swamp-boat.jpg",
      "/images/tours/new-orleans/alligator.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Nature", "Wildlife", "Boat Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nature",

    meetingPoint: {
      address:
        "Wyndham Garden Hotel, 6401 Veterans Memorial Blvd, Metairie, LA 70003",
      coordinates: {
        latitude: 30.004,
        longitude: -90.1586,
      },
      instructions:
        "Meet in the lobby of the Wyndham Garden Hotel. Transportation to the swamp will depart from here. Look for the guide holding a 'Bayou Tours' sign.",
      contactNumber: "+1 504-555-3456",
      contactEmail: "swamptour@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-23",
      "2023-12-27",
      "2023-12-29",
      "2023-12-30",
      "2024-01-03",
      "2024-01-05",
      "2024-01-06",
      "2024-01-10",
      "2024-01-12",
      "2024-01-13",
      "2024-01-17",
      "2024-01-19",
      "2024-01-20",
      "2024-01-24",
      "2024-01-26",
      "2024-01-27",
      "2024-01-31",
      "2024-02-02",
      "2024-02-03",
      "2024-02-07",
      "2024-02-09",
      "2024-02-10",
      "2024-02-14",
      "2024-02-16",
      "2024-02-17",
      "2024-02-21",
      "2024-02-23",
      "2024-02-24",
      "2024-02-28",
    ],

    highlights: [
      "Experience a narrated boat tour through cypress-tupelo swamps",
      "See alligators, turtles, egrets, herons and other wildlife in their natural habitat",
      "Learn about wetland ecology and conservation efforts",
      "Hear fascinating stories of Cajun culture and swamp life",
      "Opportunity to hold a baby alligator (seasonal availability)",
    ],

    inclusions: [
      "Round-trip transportation from meeting point to swamp",
      "2-hour narrated boat tour with experienced captain",
      "Wildlife expert/naturalist guide",
      "Life jackets and safety equipment",
      "Bottled water",
      "Alligator demonstration (seasonal)",
    ],

    exclusions: [
      "Hotel pickup and drop-off beyond meeting point",
      "Food and additional beverages",
      "Gratuities for boat captain and guide (recommended)",
      "Souvenir photos (available for purchase)",
    ],

    itinerary: [
      "13:00 - Meet at Wyndham Garden Hotel",
      "13:15 - Board transportation to swamp tour location (30-40 minute drive)",
      "14:00 - Arrival at swamp dock with safety briefing",
      "14:15 - Begin 2-hour narrated boat tour through bayou waterways",
      "14:45 - Alligator spotting and wildlife observation",
      "15:30 - Navigate through cypress forests with ecological commentary",
      "16:00 - Alligator encounter demonstration (seasonal)",
      "16:15 - Begin return journey to dock",
      "16:30 - Free time for gift shop and restrooms",
      "17:00 - Return transportation to original meeting point",
    ],

    faqs: [
      {
        question: "Will we definitely see alligators?",
        answer:
          "Alligator sightings are very likely but not guaranteed as we observe wildlife in their natural habitat. During warmer months (March-October), alligator sightings are almost certain, while in cooler weather (November-February) they are less active but still often visible. Regardless of season, your naturalist guide will help spot numerous species of birds, turtles, and other swamp dwellers throughout the tour.",
      },
      {
        question: "What should I bring on the swamp tour?",
        answer:
          "We recommend bringing sunscreen, insect repellent, sunglasses, and a hat. A light jacket is advisable in cooler months. Don't forget your camera - the photographic opportunities are excellent! The boat is covered for sun and rain protection, but the sides are open for unobstructed viewing. Cash is recommended for gratuities and optional souvenirs.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is very family-friendly! Children typically love seeing the alligators and other wildlife up close. The boats are stable and safe, and life jackets are provided (required for children under 12). The captains are experienced in making the tour entertaining and educational for all ages.",
      },
    ],
  },

  {
    title: "New Orleans Jazz & Heritage Experience",
    description:
      "Immerse yourself in the birthplace of jazz with an evening tour featuring live performances at historic music venues, stories of legendary musicians, and insight into how this distinctly American art form evolved in the Crescent City.",
    city: "New Orleans",
    country: "United States",
    state: "Louisiana",
    region: "Southern U.S.",
    images: [
      "/images/tours/new-orleans/jazz-club.jpg",
      "/images/tours/new-orleans/trumpet-player.jpg",
    ],
    duration: "3.5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Music", "Jazz", "Nightlife"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "art-and-music",

    meetingPoint: {
      address:
        "Louis Armstrong Park, 701 N. Rampart Street, New Orleans, LA 70116",
      coordinates: {
        latitude: 29.9627,
        longitude: -90.0677,
      },
      instructions:
        "Meet at the main entrance arch of Louis Armstrong Park on N. Rampart Street. Your guide will be holding a trumpet-shaped sign.",
      contactNumber: "+1 504-555-4567",
      contactEmail: "jazztour@paragontrails.com",
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
      "Visit Congo Square, the birthplace of jazz, in Louis Armstrong Park",
      "Enjoy reserved seating at two historic jazz venues with live performances",
      "Learn about the evolution of jazz and its legendary New Orleans musicians",
      "Explore Frenchmen Street, the local's alternative to Bourbon Street",
      "Receive insider recommendations for the best music venues in the city",
    ],

    inclusions: [
      "Music historian guide with deep knowledge of New Orleans jazz",
      "Entrance fees to two music venues with live performances",
      "One classic New Orleans cocktail (or non-alcoholic alternative)",
      "Reserved seating at jazz clubs",
      "Walking tour of musically significant sites",
      "Jazz history guide booklet",
    ],

    exclusions: [
      "Additional food and beverages beyond included drink",
      "Transportation to and from meeting point",
      "Gratuities for venue staff and musicians",
      "Hotel pickup and drop-off",
    ],

    itinerary: [
      "19:00 - Meet at Louis Armstrong Park entrance",
      "19:15 - Visit Congo Square with history of African musical influences",
      "19:45 - Walking tour through the Tremé neighborhood with jazz heritage sites",
      "20:15 - First music venue with reserved seating and live traditional jazz",
      "21:00 - Walk to Frenchmen Street with commentary on jazz development",
      "21:15 - Second venue featuring contemporary New Orleans jazz",
      "22:00 - Tour concludes with recommendations for continuing your jazz exploration",
      "22:30 - Optional: Guide can help arrange taxis or rideshares for return transportation",
    ],

    faqs: [
      {
        question: "Will I hear traditional or modern jazz on this tour?",
        answer:
          "You'll experience both! We begin with a traditional New Orleans jazz performance showcasing the original Dixieland style that made the city famous. The second venue features more contemporary jazz, demonstrating how the genre has evolved while maintaining its New Orleans roots. Your guide will explain the characteristics and historical significance of both styles.",
      },
      {
        question: "Is there a dress code for the jazz clubs?",
        answer:
          "Most New Orleans jazz clubs are casual, but we recommend smart casual attire (no athletic wear, tank tops or flip-flops). Some venues maintain certain standards, and you'll enjoy the evening more if dressed comfortably but presentably. Remember that clubs can be cool with air conditioning even when it's warm outside.",
      },
      {
        question: "Can I take photos during the performances?",
        answer:
          "Photography without flash is generally permitted at the venues we visit, though policies vary. Your guide will advise about specific rules at each location. We always encourage respectful photography that doesn't disturb the musicians or other patrons. Video recording is typically not allowed.",
      },
    ],
  },

  {
    title: "Creole & Cajun Cooking Class",
    description:
      "Master New Orleans' legendary cuisine in this hands-on cooking class where you'll learn to prepare classic dishes like gumbo, jambalaya, and bananas foster, then feast on your creations with wine and local beer.",
    city: "New Orleans",
    country: "United States",
    state: "Louisiana",
    region: "Southern U.S.",
    images: [
      "/images/tours/new-orleans/cooking-class.jpg",
      "/images/tours/new-orleans/gumbo.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Cooking", "Food", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address:
        "New Orleans School of Cooking, 524 St. Louis Street, New Orleans, LA 70130",
      coordinates: {
        latitude: 29.9547,
        longitude: -90.0663,
      },
      instructions:
        "Meet in the lobby of the New Orleans School of Cooking on St. Louis Street in the French Quarter. Look for the instructor in a chef's coat.",
      contactNumber: "+1 504-555-5678",
      contactEmail: "cookingclass@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-28",
      "2023-12-30",
      "2024-01-04",
      "2024-01-06",
      "2024-01-11",
      "2024-01-13",
      "2024-01-18",
      "2024-01-20",
      "2024-01-25",
      "2024-01-27",
      "2024-02-01",
      "2024-02-03",
      "2024-02-08",
      "2024-02-10",
      "2024-02-15",
      "2024-02-17",
      "2024-02-22",
      "2024-02-24",
      "2024-02-29",
    ],

    highlights: [
      "Learn to make iconic New Orleans dishes under expert guidance",
      "Master the art of making roux, the foundation of Creole cooking",
      "Understand the difference between Creole and Cajun cuisine",
      "Create and enjoy a complete meal with appetizer, main course, and dessert",
      "Take home recipe cards to recreate the dishes in your own kitchen",
    ],

    inclusions: [
      "Professional chef instructor with deep knowledge of Louisiana cuisine",
      "All ingredients and cooking equipment",
      "Hands-on preparation of multiple dishes",
      "Full meal of what you prepare",
      "Local beer, wine, or soft drinks with meal",
      "Recipe booklet to take home",
      "Cooking school apron souvenir",
    ],

    exclusions: [
      "Transportation to and from cooking school",
      "Additional food and beverages beyond those provided",
      "Gratuities for chef instructor (optional)",
    ],

    itinerary: [
      "10:00 - Welcome and introduction to Louisiana cuisine",
      "10:15 - Overview of key ingredients and cooking techniques",
      "10:30 - Begin preparation of gumbo with roux-making demonstration",
      "11:00 - Prepare jambalaya or étouffée (varies by class)",
      "11:45 - Learn to make classic New Orleans appetizers",
      "12:15 - Prepare bananas foster or bread pudding dessert",
      "12:45 - Set table and serve the meal family-style",
      "13:00 - Enjoy the feast with drinks and culinary discussion",
      "13:45 - Final Q&A, recipe tips, and souvenir distribution",
    ],

    faqs: [
      {
        question: "Do I need cooking experience to enjoy this class?",
        answer:
          "Not at all! Our classes are designed for all skill levels from beginners to experienced home cooks. The chef instructor demonstrates techniques clearly and provides individual guidance throughout the process. The atmosphere is relaxed and supportive, focused on fun and learning rather than culinary perfection.",
      },
      {
        question: "What dishes will we prepare?",
        answer:
          "Each class prepares a complete New Orleans meal. Typically, you'll make a signature gumbo or bisque, a main dish such as jambalaya or shrimp étouffée, and a classic dessert like bananas foster or bread pudding. Specific dishes may vary slightly based on seasonality and class theme, but always represent authentic Louisiana cuisine.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "With advance notice, we can accommodate most dietary restrictions including vegetarian, gluten-free, and many allergies. Please inform us when booking, as many traditional New Orleans dishes contain seafood and other potential allergens. While modifications can be made, this class focuses on traditional recipes that typically include meat and seafood.",
      },
    ],
  },
];

export default newOrleansTours;
