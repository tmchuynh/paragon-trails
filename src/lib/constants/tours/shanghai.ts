import { Tour } from "@/lib/interfaces/services/tours";

export const shanghaiTours: Tour[] = [
  {
    title: "Shanghai Contrasts: Old Town & Futuristic Pudong",
    description:
      "Experience Shanghai's fascinating blend of ancient and ultramodern with a tour of historic Yu Garden and Old Town, followed by the futuristic skyline of Pudong with VIP observation deck access.",
    city: "Shanghai",
    country: "China",
    region: "Eastern China",
    images: [
      "/images/tours/shanghai/old-town.jpg",
      "/images/tours/shanghai/pudong-skyline.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Architecture", "History", "Modern"],
    meetingPoint: {
      address: "People's Square Metro Station, Exit 14, Shanghai",
      coordinates: {
        latitude: 31.2304,
        longitude: 121.4737,
      },
      instructions:
        "Meet at Exit 14 of People's Square Metro Station. Your guide will be holding a sign with 'Shanghai Contrasts Tour' written on it.",
      contactNumber: "+86 21 6123 4567",
      contactEmail: "booking@shanghaicontraststour.com",
    },
    highlights: [
      "Explore the ancient Yu Garden with its classical Chinese architecture and tranquil ponds",
      "Wander through the narrow alleys of Old Town and experience traditional Shanghai life",
      "Enjoy VIP access to the Shanghai Tower observation deck - the world's highest observation deck",
      "Compare the historic Bund with the futuristic Pudong financial district across the river",
    ],
    inclusions: [
      "Professional English-speaking guide",
      "VIP admission to Shanghai Tower observation deck",
      "Entrance fee to Yu Garden",
      "Metro tickets during the tour",
      "Bottled water",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional beverages",
      "Personal expenses",
      "Gratuities",
      "Additional optional activities",
    ],
    itinerary: [
      "9:00 AM - Meet at People's Square Metro Station",
      "9:30 AM - Explore Yu Garden and the surrounding bazaar",
      "10:45 AM - Walk through the Old Town area",
      "11:30 AM - Lunch break at local restaurant (not included)",
      "12:30 PM - Take metro to Lujiazui station in Pudong",
      "1:00 PM - Visit Shanghai Tower with VIP observation deck access",
      "2:30 PM - Walk along the riverside for views of the Bund",
      "3:00 PM - Tour concludes at Lujiazui Metro Station",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
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
        question: "Which observation deck do we visit?",
        answer:
          "The tour includes VIP access to the Shanghai Tower observation deck on the 118th floor, currently the world's highest observation deck at 546 meters. We bypass the regular lines and enjoy priority access with dedicated viewing time.",
      },
      {
        question: "What's the difference between Old Town and the Pudong area?",
        answer:
          "Old Town represents Shanghai's history with traditional architecture dating back to the Ming Dynasty, narrow lanes, and local markets. Pudong is Shanghai's ultramodern financial district, developed primarily since the 1990s with futuristic skyscrapers and cutting-edge architecture. The contrast between these areas, separated by the Huangpu River, showcases Shanghai's remarkable transformation.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves moderate walking (approximately 4 km total) with some stairs. We use the metro for longer distances between sites. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Shanghai Culinary Journey & Private Cooking Class",
    description:
      "Discover Shanghai's diverse food scene from street food to haute cuisine, followed by a private cooking class with a renowned chef to master signature Shanghainese dishes.",
    city: "Shanghai",
    country: "China",
    region: "Eastern China",
    images: [
      "/images/tours/shanghai/street-food.jpg",
      "/images/tours/shanghai/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Food", "Cooking", "Culinary"],
    meetingPoint: {
      address: "Huanghe Road, near Nanjing West Road, Shanghai",
      coordinates: {
        latitude: 31.2336,
        longitude: 121.4724,
      },
      instructions:
        "Meet outside Jing'an Temple Metro Station (Exit 1). Look for your guide holding a red sign with 'Shanghai Food Tour' written on it.",
      contactNumber: "+86 21 5234 5678",
      contactEmail: "food@shanghaiculinarytours.com",
    },
    highlights: [
      "Sample authentic Shanghainese street food at local markets",
      "Learn about the history and cultural significance of Shanghai cuisine",
      "Participate in a hands-on cooking class with a professional chef",
      "Master 3-4 signature dishes including xiaolongbao (soup dumplings)",
    ],
    inclusions: [
      "Food tastings from 5-6 different vendors",
      "Private cooking class with all ingredients and equipment",
      "Recipe booklet to take home",
      "Unlimited tea, water, and one local beer during cooking class",
      "Small group size (maximum 8 participants)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional beverages beyond those specified",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet guide and begin street food tour",
      "10:15 AM - Visit local wet market to learn about ingredients",
      "11:00 AM - Sample traditional breakfast items and dumplings",
      "11:45 AM - Try Shanghai's famous street snacks",
      "12:30 PM - Walk to cooking school location",
      "1:00 PM - Begin cooking class with professional chef",
      "2:30 PM - Enjoy the meal you've prepared",
      "3:00 PM - Tour concludes with recipes and cooking tips",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before the tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare 3-4 signature Shanghainese dishes, typically including xiaolongbao (soup dumplings), hong shao rou (red-braised pork), and jiang ya (Shanghainese smoked duck). Vegetarian options are available upon request.",
      },
      {
        question: "Do I need cooking experience to enjoy this class?",
        answer:
          "No prior cooking experience is necessary. Our chef instructors will guide you through each step, making the class enjoyable for beginners while still interesting for experienced home cooks.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, gluten-free, and most other dietary restrictions with advance notice. Please inform us of any allergies or restrictions when booking.",
      },
    ],
  },
  {
    title: "Shanghai Art & Culture: M50 Creative Park Tour",
    description:
      "Explore Shanghai's vibrant contemporary art scene at M50 Creative Park, visiting artist studios, galleries, and exhibitions with a local art curator who provides insights into the city's creative evolution.",
    city: "Shanghai",
    country: "China",
    region: "Eastern China",
    images: [
      "/images/tours/shanghai/m50-creative-park.jpg",
      "/images/tours/shanghai/contemporary-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Art", "Culture", "Contemporary"],
    meetingPoint: {
      address: "50 Moganshan Road, Putuo District, Shanghai",
      coordinates: {
        latitude: 31.2417,
        longitude: 121.4472,
      },
      instructions:
        "Meet at the main entrance gate to M50 Creative Park. Your guide will be holding a blue sign with 'Art Tour' written on it.",
      contactNumber: "+86 21 6273 8999",
      contactEmail: "info@shanghaiartours.com",
    },
    highlights: [
      "Discover Shanghai's thriving contemporary art scene with an expert curator",
      "Visit 8-10 galleries and artist studios in the renowned M50 Creative Park",
      "Meet resident artists and learn about their creative processes",
      "Understand how Chinese contemporary art has evolved in the global context",
    ],
    inclusions: [
      "Professional art curator guide",
      "Admission to all galleries and exhibitions",
      "Introduction to 1-2 working artists (subject to availability)",
      "Refreshments at an art-inspired café",
      "Art guide booklet with map and gallery information",
    ],
    exclusions: [
      "Transportation to/from M50 Creative Park",
      "Meals",
      "Artwork purchases",
      "Gratuities",
    ],
    itinerary: [
      "1:00 PM - Meet at M50 entrance and introduction to the area's history",
      "1:15 PM - Visit first selection of galleries with guide interpretation",
      "2:00 PM - Meet with resident artist in their studio (when available)",
      "2:30 PM - Continue gallery exploration focusing on emerging artists",
      "3:15 PM - Refreshment break at art café",
      "3:30 PM - Final galleries and discussion of art market trends",
      "4:00 PM - Tour conclusion with recommendations for other art venues",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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
    isFamilyFriendly: false,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Are there any entry fees for galleries?",
        answer:
          "Most galleries in M50 Creative Park are free to enter, but some special exhibitions may have a small admission fee. We will inform you of any costs in advance.",
      },
      {
        question: "Can we purchase artworks directly from artists?",
        answer:
          "Yes, many artists welcome direct sales and commissions. The tour guide can assist with introductions and negotiations if you're interested in purchasing artwork.",
      },
      {
        question: "What kind of art will we see?",
        answer:
          "M50 showcases diverse contemporary Chinese art including painting, sculpture, photography, mixed media, and installation art. The focus is primarily on avant-garde and experimental work that reflects China's rapid social transformation.",
      },
    ],
  },
  {
    title: "Shanghai Night Lights: Huangpu River Cruise",
    description:
      "Experience the magic of Shanghai at night with a scenic Huangpu River cruise, taking in the illuminated skyline and historic Bund while enjoying live music and local snacks on board.",
    city: "Shanghai",
    country: "China",
    region: "Eastern China",
    images: [
      "/images/tours/shanghai/huangpu-river-cruise.jpg",
      "/images/tours/shanghai/bund-night.jpg",
    ],
    duration: "2 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Nightlife", "Cruise", "Views"],
    meetingPoint: {
      address: "Shiliupu Dock, 171 Waima Road, Huangpu District, Shanghai",
      coordinates: {
        latitude: 31.2292,
        longitude: 121.4902,
      },
      instructions:
        "Meet at the ticket office of Shiliupu Dock. Look for your guide holding a yellow sign with 'Night Cruise' written on it.",
      contactNumber: "+86 21 7654 3210",
      contactEmail: "booking@shanghainightcruise.com",
    },
    highlights: [
      "Experience spectacular views of Shanghai's illuminated skyline from the water",
      "See the contrast between the historic Bund and futuristic Pudong",
      "Enjoy live traditional Chinese music performance on board",
      "Learn about Shanghai's architectural history and development",
    ],
    inclusions: [
      "Huangpu River cruise ticket (premium section)",
      "Selection of local snacks and tea",
      "English-speaking guide providing commentary",
      "Live music performance",
      "One complimentary drink (soft drink, beer, or champagne)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional beverages beyond the complimentary drink",
      "Full dinner (light snacks provided)",
      "Gratuities",
    ],
    itinerary: [
      "7:30 PM - Meet at Shiliupu Dock for check-in",
      "7:45 PM - Board the cruise vessel",
      "8:00 PM - Cruise departure with welcome drink",
      "8:15 PM - Live music performance begins",
      "8:30 PM - Cruise along the Bund with commentary",
      "9:00 PM - Turn around at Yangpu Bridge for return journey",
      "9:30 PM - Cruise returns to dock",
      "9:45 PM - Disembarkation and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before cruise departure.",
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
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cruise",
    faqs: [
      {
        question: "What snacks are included on the cruise?",
        answer:
          "The cruise includes a selection of local snacks such as spring rolls, dumplings, and sweet buns, along with complimentary tea and soft drinks. Alcoholic beverages are available for purchase on board.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Yes, the cruise is family-friendly and children will enjoy the views and entertainment. There are no age restrictions, but parents should supervise young children near the railings.",
      },
      {
        question: "What will we see during the cruise?",
        answer:
          "You'll see Shanghai's most iconic buildings illuminated at night, including the Oriental Pearl Tower, Shanghai Tower, Jin Mao Tower, and World Financial Center on the Pudong side, plus the historic colonial buildings along the Bund. The contrast between these architectural styles is particularly stunning at night.",
      },
    ],
  },
];

export default shanghaiTours;
