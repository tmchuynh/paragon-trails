import { Tour } from "@/lib/interfaces/services/tours";

export const thessalonikiTours: Tour[] = [
  {
    title: "Byzantine Heritage & Hidden Treasures",
    description:
      "Explore Thessaloniki's remarkable Byzantine churches, ancient ruins, and hidden historical gems with an expert archaeologist guide who brings the city's 2,300-year history to life.",
    city: "Thessaloniki",
    country: "Greece",
    region: "Central Macedonia",
    images: [
      "/images/tours/thessaloniki/rotunda.jpg",
      "/images/tours/thessaloniki/byzantine-church.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Byzantine", "Churches", "Architecture"],
    meetingPoint: {
      address: "White Tower, Leoforos Nikis, Thessaloniki 546 21",
      coordinates: {
        latitude: 40.6263,
        longitude: 22.9481,
      },
      instructions:
        "Meet at the entrance to the White Tower. Your guide will be holding a blue sign with 'Byzantine Heritage Tour' written on it.",
      contactNumber: "+30 2310 123 456",
      contactEmail: "info@thessalonikitours.gr",
    },
    highlights: [
      "Visit 5-6 UNESCO World Heritage Byzantine churches with privileged access",
      "Explore Thessaloniki's ancient Roman ruins including the Forum and Palace of Galerius",
      "Discover hidden historical sites most tourists miss in this 2,300-year-old city",
      "Learn about the unique religious and cultural history from expert archaeologists",
    ],
    inclusions: [
      "Expert archaeologist guide with academic credentials",
      "Entrance fees to all churches and archaeological sites",
      "Special permission for photography in restricted areas",
      "Traditional Greek coffee break",
      "Audio headsets to hear guide clearly",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional beverages",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at White Tower and introduction to Thessaloniki's history",
      "9:30 AM - Visit Rotunda, one of the oldest Christian churches in the world",
      "10:15 AM - Explore the Arch of Galerius and nearby Roman ruins",
      "11:00 AM - Visit Agios Dimitrios church with its ancient crypt",
      "11:45 AM - Coffee break at historic café",
      "12:15 PM - Visit lesser-known Byzantine churches (Agia Sofia, Panagia Chalkeon)",
      "1:00 PM - Tour concludes near Aristotelous Square",
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
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we go inside all the churches?",
        answer:
          "Yes, we arrange access to 5-6 significant Byzantine churches. Modest dress is required (shoulders and knees covered), and women may need to cover their heads in some locations.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 3 km (1.9 miles) of walking at a leisurely pace with frequent stops. Some sites have steps and uneven surfaces. Comfortable walking shoes are recommended.",
      },
      {
        question: "Are the churches still active places of worship?",
        answer:
          "Yes, most Byzantine churches on the tour are still functioning Greek Orthodox churches. We time our visits to avoid disrupting services, and our guides are knowledgeable about appropriate behavior and customs in these sacred spaces.",
      },
    ],
  },
  {
    title: "Thessaloniki Food Journey",
    description:
      "Taste your way through Greece's culinary capital with visits to traditional markets, bakeries, and tavernas while learning about the city's multicultural influences on its distinctive cuisine.",
    city: "Thessaloniki",
    country: "Greece",
    region: "Central Macedonia",
    images: [
      "/images/tours/thessaloniki/food-market.jpg",
      "/images/tours/thessaloniki/greek-meze.jpg",
    ],
    duration: "4 hours",
    price: "$79",
    rating: 4.9,
    tags: ["Food", "Market", "Cultural"],
    meetingPoint: {
      address: "Aristotelous Square, Thessaloniki 546 24",
      coordinates: {
        latitude: 40.6328,
        longitude: 22.941,
      },
      instructions:
        "Meet at the fountain in the center of Aristotelous Square. Your guide will be holding a red sign with 'Thessaloniki Food Tour' written on it.",
      contactNumber: "+30 2310 567 890",
      contactEmail: "taste@thessalonikifoodtours.gr",
    },
    highlights: [
      "Sample over 15 authentic Greek specialties across 8 carefully selected tasting locations",
      "Explore Kapani and Modiano markets where locals have shopped for centuries",
      "Learn about Thessaloniki's unique culinary history influenced by Greek, Ottoman, Jewish, and Balkan traditions",
      "Visit family-run establishments that have perfected recipes over generations",
    ],
    inclusions: [
      "All food tastings (equivalent to a large lunch)",
      "Expert local culinary guide",
      "Bottled water",
      "Small-group experience (maximum 10 participants)",
      "Recipe booklet with local specialties",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond the included tastings",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Aristotelous Square and introduction to Thessaloniki's food culture",
      "10:15 AM - Visit traditional Greek bakery for breakfast specialties",
      "10:45 AM - Explore Kapani Market with cheese and olive tastings",
      "11:30 AM - Visit Modiano Market for charcuterie and seafood specialties",
      "12:15 PM - Sweet treats at historic patisserie",
      "12:45 PM - Traditional meze and ouzo tasting at family-run taverna",
      "1:30 PM - Visit specialty shop for regional products",
      "2:00 PM - Tour concludes with coffee and Greek pastries",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund for cancellations within 48 hours. No refund for same-day cancellations or no-shows.",
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
        question: "How much food is included?",
        answer:
          "Come hungry! The tour includes at least 8 food tastings equivalent to a full meal, featuring local specialties like bougatsa, koulouri, seafood meze, and distinctive Thessaloniki sweets.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, gluten-free, and most other dietary restrictions. Please inform us at least 48 hours before your tour.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2 km (1.2 miles) at a leisurely pace with plenty of stops for tastings and rest. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Thessaloniki Street Art & Urban Culture",
    description:
      "Discover Thessaloniki's vibrant street art scene with a local artist, exploring murals, graffiti, and urban installations that reflect the city's contemporary culture and social movements.",
    city: "Thessaloniki",
    country: "Greece",
    region: "Central Macedonia",
    images: [
      "/images/tours/thessaloniki/street-art.jpg",
      "/images/tours/thessaloniki/urban-culture.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Street Art", "Culture", "Urban"],
    meetingPoint: {
      address: "Navarinou Square, Thessaloniki 546 30",
      coordinates: {
        latitude: 40.6337,
        longitude: 22.9406,
      },
      instructions:
        "Meet at the north side of Navarinou Square near the university campus. Your guide will be wearing a denim jacket with colorful paint splatters.",
      contactNumber: "+30 2310 890 123",
      contactEmail: "art@thessalonikistreetart.gr",
    },
    highlights: [
      "Explore over 30 significant street art works in the city's alternative neighborhoods",
      "Meet local artists and learn about their techniques and inspiration",
      "Discover how Thessaloniki's social and political history influences urban expression",
      "Visit artist studios and independent galleries off the tourist trail",
    ],
    inclusions: [
      "Guided tour with local street artist",
      "Street art map of Thessaloniki",
      "Coffee or soft drink at an artist-run café",
      "Street art photography tips",
      "Small-group experience (maximum 8 people)",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Additional food and beverages",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "5:00 PM - Meet at Navarinou Square and introduction to Thessaloniki's street art scene",
      "5:15 PM - Explore university district murals and political art",
      "6:00 PM - Visit to independent art space with rotating exhibitions",
      "6:30 PM - Explore hidden alleyways with smaller street art interventions",
      "7:00 PM - Coffee break at artist-run café",
      "7:30 PM - Walking tour of port area industrial murals",
      "8:00 PM - Tour concludes with recommendations for evening events and galleries",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. No refund for cancellations less than 24 hours before the scheduled tour or no-shows.",
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
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and includes engaging stories about the artists and the meaning behind the artworks. Children will enjoy the colorful and interactive nature of street art.",
      },
      {
        question: "Will we create any art during the tour?",
        answer:
          "While this tour focuses on viewing and appreciating street art, we can arrange a separate workshop experience if you're interested in creating your own street art. Just let us know in advance.",
      },
      {
        question: "Is photography allowed during the tour?",
        answer:
          "Absolutely! Photography is encouraged, and your guide will show you the best angles and lighting for capturing the murals. They'll also share tips specific to street art photography.",
      },
    ],
  },
];

export default thessalonikiTours;
