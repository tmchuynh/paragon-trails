import { Tour } from "@/lib/interfaces/services/tours";

export const yokohamaTours: Tour[] = [
  {
    title: "Yokohama Bay Skyline Night Photography",
    description:
      "Capture stunning night shots of Japan's most beautiful harbor skyline with a professional photographer guide, using both Minato Mirai's futuristic architecture and historic Red Brick Warehouse as backdrops.",
    city: "Yokohama",
    country: "Japan",
    region: "Kanagawa Prefecture",
    images: [
      "/images/tours/yokohama/night-skyline.jpg",
      "/images/tours/yokohama/minatomirai.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Photography", "Night Views", "Urban"],
    meetingPoint: {
      address:
        "Yokohama Landmark Tower, 2-2-1 Minatomirai, Nishi Ward, Yokohama",
      coordinates: {
        latitude: 35.4548,
        longitude: 139.6318,
      },
      instructions:
        "Meet at the Sky Garden entrance on the 2nd floor of Landmark Tower. Your photographer guide will be holding a tripod with a 'Night Photo Tour' sign.",
      contactNumber: "+81 45-123-4567",
      contactEmail: "info@yokohamanightphoto.com",
    },
    highlights: [
      "Photograph iconic views of Minato Mirai skyline from exclusive vantage points",
      "Learn night photography techniques from a professional photographer",
      "Capture the illuminated Cosmo Clock 21 Ferris wheel reflections on water",
      "Create light trail shots of harbor traffic and cityscapes",
    ],
    inclusions: [
      "Professional photographer guide",
      "Photography instruction and technique coaching",
      "Access to recommended viewpoints including some restricted areas",
      "Digital photography guide with night shooting tips",
      "Post-tour online review session of selected photos",
    ],
    exclusions: [
      "Camera equipment (bring your own)",
      "Tripod (available for rent: $10)",
      "Transportation between photo locations",
      "Food and beverages",
      "Gratuities",
    ],
    itinerary: [
      "7:00 PM - Meet at Landmark Tower and equipment check",
      "7:15 PM - Orientation and night photography techniques workshop",
      "7:45 PM - Cosmo World shooting location with Ferris wheel views",
      "8:30 PM - Red Brick Warehouse waterfront for harbor reflections",
      "9:15 PM - Kishamichi Promenade for panoramic cityscapes",
      "9:45 PM - Final shoot at Osanbashi Pier for skyline compositions",
      "10:00 PM - Tour conclusion and photography review",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour. Weather-dependent: full refund or rescheduling offered in case of heavy rain.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
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
    isIndoor: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "A camera with manual settings is ideal (DSLR or mirrorless), and a tripod is essential for night photography. If you don't have equipment, we can provide a professional camera and tripod rental for an additional fee.",
      },
      {
        question: "What skill level is required for this tour?",
        answer:
          "This tour is suitable for all skill levels, from beginners to advanced photographers. Our guides adjust their instruction based on your experience. Beginners will learn fundamentals of night photography, while experienced photographers will benefit from local knowledge of the best compositions and timing.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2 km (1.2 miles) of walking between photo locations. We maintain a leisurely pace with plenty of stops for shooting. The terrain is flat and mostly paved, making it accessible for most participants.",
      },
    ],
  },
  {
    title: "Chinatown Culinary Adventure",
    description:
      "Explore Japan's largest Chinatown with a local food expert, sampling authentic Chinese-Japanese fusion cuisine from hidden family-run restaurants spanning multiple generations.",
    city: "Yokohama",
    country: "Japan",
    region: "Kanagawa Prefecture",
    images: [
      "/images/tours/yokohama/chinatown.jpg",
      "/images/tours/yokohama/dim-sum.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Food", "Chinatown", "Cultural Fusion"],
    meetingPoint: {
      address:
        "East Gate (Zenrin-mon), Yokohama Chinatown, Naka Ward, Yokohama",
      coordinates: {
        latitude: 35.4434,
        longitude: 139.6463,
      },
      instructions:
        "Meet at the East Gate (Zenrin-mon) entrance to Chinatown. Your guide will be holding a red paper lantern with 'Yokohama Food Tour' written on it.",
      contactNumber: "+81 45-234-5678",
      contactEmail: "tastings@yokohamachinatown.com",
    },
    highlights: [
      "Visit 7 carefully selected eateries showcasing authentic Chinese-Japanese fusion cuisine",
      "Learn the 150-year history of Japan's largest Chinatown from descendants of original settlers",
      "Taste regional Chinese specialties adapted to Japanese ingredients and tastes",
      "Discover hidden family restaurants not found in guidebooks",
    ],
    inclusions: [
      "All food tastings at 7 different locations (equivalent to a full meal)",
      "Local culinary guide with deep connections to the Chinatown community",
      "Chinese tea tasting experience",
      "One glass of local craft beer or soft drink",
      "Small-group experience (maximum 8 participants)",
    ],
    exclusions: [
      "Additional beverages beyond included tastings",
      "Personal purchases and souvenirs",
      "Transportation to/from meeting point",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "11:00 AM - Meet at East Gate (Zenrin-mon) entrance",
      "11:15 AM - Historical introduction to Yokohama Chinatown",
      "11:30 AM - First tasting: Traditional dim sum",
      "12:15 PM - Second stop: Shanghainese dumplings",
      "12:45 PM - Third stop: Cantonese BBQ specialties",
      "1:15 PM - Tea ceremony at traditional Chinese tea house",
      "1:45 PM - Fourth stop: Regional noodle varieties",
      "2:15 PM - Fifth stop: Taiwanese street food",
      "2:45 PM - Dessert stops featuring Chinese sweets",
      "3:00 PM - Tour conclusion with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
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
        question: "How much food is included?",
        answer:
          "The tour includes 7-8 food tastings that together constitute a full meal. Come hungry! Portions range from small bites to more substantial dishes, showcasing the diversity of Yokohama Chinatown cuisine.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice (at least 48 hours), we can accommodate vegetarian, pescatarian, and most food allergies. Please note that due to the nature of Chinese cuisine, it may be difficult to accommodate strict vegan or gluten-free diets in all locations.",
      },
      {
        question: "What makes Yokohama's Chinatown unique?",
        answer:
          "Yokohama's Chinatown is Japan's largest and dates back to 1859 when the port opened to foreign trade. Unlike many Chinatowns worldwide that are predominantly Cantonese, Yokohama's includes diverse regional Chinese cuisines with significant Japanese influence, creating unique fusion dishes found nowhere else.",
      },
    ],
  },
  {
    title: "Yokohama's Hidden Temples & Gardens",
    description:
      "Discover the serene beauty of Yokohama's lesser-known temples and traditional gardens with a local historian, exploring peaceful spots away from the crowds while learning about their history and significance.",
    city: "Yokohama",
    country: "Japan",
    region: "Kanagawa Prefecture",
    images: [
      "/images/tours/yokohama/hidden-temple.jpg",
      "/images/tours/yokohama/traditional-garden.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Historical", "Nature", "Cultural"],
    meetingPoint: {
      address: "Motomachi-Chukagai Station, Exit 3, Naka Ward, Yokohama",
      coordinates: {
        latitude: 35.4423,
        longitude: 139.6417,
      },
      instructions:
        "Meet outside Exit 3 of Motomachi-Chukagai Station. Your guide will be holding a wooden sign with 'Hidden Temples Tour' in Japanese calligraphy.",
      contactNumber: "+81 45-345-6789",
      contactEmail: "peace@yokohamatemples.jp",
    },
    highlights: [
      "Visit Sojiji Temple, an important Zen Buddhist temple rarely included in standard tours",
      "Explore the serene Sankeien Garden with its historic buildings from across Japan",
      "Discover Shomyoji Temple and its peaceful pond garden reflecting 13th century design",
      "Learn meditation basics at a working temple with a local monk",
    ],
    inclusions: [
      "Expert local historian guide",
      "All temple and garden entrance fees",
      "20-minute guided meditation session",
      "Traditional Japanese tea and sweets",
      "Public transportation during the tour (if needed)",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Meals and additional beverages",
      "Personal donations at temples",
      "Photography fees (some temples charge for professional photography)",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Motomachi-Chukagai Station",
      "9:15 AM - Walk to Sojiji Temple through historic neighborhoods",
      "10:00 AM - Guided tour of Sojiji Temple and grounds",
      "10:45 AM - Short train ride to Sankeien Garden",
      "11:15 AM - Explore Sankeien Garden's historic buildings and landscapes",
      "12:15 PM - Japanese tea and sweets in traditional tea house",
      "12:45 PM - Transportation to Shomyoji Temple",
      "1:15 PM - Tour of Shomyoji Temple and meditation practice",
      "2:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Are these temples open to the public?",
        answer:
          "Yes, all sites visited are open to the public, but they are often less frequented by tourists. We focus on locations that offer a more tranquil experience compared to larger, more popular temples.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring gardens and temple grounds. Modest clothing is appreciated in temple areas, so please dress respectfully with shoulders and knees covered. We may need to remove shoes in certain temple buildings, so easily removable footwear is helpful.",
      },
      {
        question: "Is photography permitted at these sites?",
        answer:
          "Photography is generally allowed in outdoor areas and gardens, but some temple interiors prohibit photography, especially of certain religious artifacts or ceremonies. Your guide will clearly indicate where photography is and is not permitted.",
      },
    ],
  },
];

export default yokohamaTours;
