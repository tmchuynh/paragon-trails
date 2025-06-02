import { Tour } from "@/lib/interfaces/services/tours";

export const tokyoTours: Tour[] = [
  {
    title: "Tokyo After Dark: Izakaya & Hidden Bars",
    description:
      "Experience Tokyo's legendary nightlife with a local expert who guides you through traditional izakaya pubs, secret speakeasies, and vibrant entertainment districts not found in guidebooks.",
    city: "Tokyo",
    country: "Japan",
    region: "Kanto",
    images: [
      "/images/tours/tokyo/golden-gai.jpg",
      "/images/tours/tokyo/hidden-izakaya.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nightlife", "Food & Drink", "Local Culture"],
    meetingPoint: {
      address: "Shinjuku Station East Exit, 3-38 Shinjuku, Tokyo 160-0022",
      coordinates: {
        latitude: 35.6911,
        longitude: 139.7015,
      },
      instructions:
        "Meet outside the East Exit of Shinjuku Station near the Memories of Tokyo statue. Your guide will be holding a glowing lantern with 'Tokyo Night Tour' written on it.",
      contactNumber: "+81 3-1234-5678",
      contactEmail: "nights@tokyoafterdarktours.com",
    },
    highlights: [
      "Visit 3-4 carefully selected local izakaya and hidden bars",
      "Explore the atmospheric narrow alleys of Golden Gai or Nonbei Yokocho",
      "Sample a variety of Japanese drinks from sake to craft cocktails",
      "Experience Tokyo nightlife like a local, away from tourist traps",
    ],
    inclusions: [
      "Expert local nightlife guide",
      "Welcome drink at each venue (3-4 total)",
      "Food tastings at select locations",
      "All cover charges and reservations",
      "Nightlife map with insider recommendations",
    ],
    exclusions: [
      "Additional food and drinks beyond included tastings",
      "Transportation to/from meeting point",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "7:00 PM - Meet at Shinjuku Station East Exit",
      "7:15 PM - Brief introduction to Tokyo nightlife culture",
      "7:30 PM - First izakaya visit with food and drink",
      "8:30 PM - Guided walk through atmospheric alleyways",
      "9:00 PM - Second venue: hidden cocktail bar",
      "10:00 PM - Final stop at traditional sake bar",
      "11:00 PM - Tour conclusion with recommendations for continuing your evening",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "How much food and drink is included?",
        answer:
          "The tour includes 3 drink tickets and food tastings at 3-4 establishments. Additional food and drinks can be purchased separately. We visit authentic local spots where even non-alcoholic options are culturally interesting.",
      },
      {
        question: "Is there a dress code?",
        answer:
          "Smart casual attire is recommended. While there's no strict dress code, very casual clothing (sports attire, flip-flops) may not be appropriate for some venues we visit.",
      },
      {
        question: "What is the minimum age for this tour?",
        answer:
          "The legal drinking age in Japan is 20. Participants under 20 are welcome but won't be served alcohol. This tour focuses on nightlife culture, so it's most appropriate for adults.",
      },
    ],
  },
  {
    title: "Tokyo Technology & Innovation Tour",
    description:
      "Explore cutting-edge Japan with visits to technology showrooms, concept stores, and electronics districts. Experience the latest innovations from robots to virtual reality alongside a tech industry insider.",
    city: "Tokyo",
    country: "Japan",
    region: "Kanto",
    images: [
      "/images/tours/tokyo/robot-restaurant.jpg",
      "/images/tours/tokyo/akihabara.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Technology", "Modern", "Interactive"],
    meetingPoint: {
      address:
        "Akihabara Station Electric Town Exit, 1-17 Sotokanda, Chiyoda, Tokyo 101-0021",
      coordinates: {
        latitude: 35.6984,
        longitude: 139.7731,
      },
      instructions:
        "Meet outside the Electric Town Exit of Akihabara Station. Your guide will be wearing a blue tech-themed t-shirt and holding a tablet with 'Tokyo Tech Tour' displayed.",
      contactNumber: "+81 3-2345-6789",
      contactEmail: "hello@tokyotechtours.jp",
    },
    highlights: [
      "Visit cutting-edge technology showrooms not typically accessible to tourists",
      "Experience the latest in robotics, AI, and virtual reality technologies",
      "Explore Akihabara, Tokyo's famous electronics and gaming district",
      "Meet with local tech entrepreneurs and developers (when available)",
    ],
    inclusions: [
      "Tech industry insider guide",
      "Admission to all technology showrooms and exhibits",
      "One tech-themed souvenir",
      "Interactive technology demonstrations",
      "Public transportation between venues",
    ],
    exclusions: [
      "Meals and beverages",
      "Personal technology purchases",
      "Optional activities (like maid café visits or extended gaming sessions)",
      "Gratuities",
    ],
    itinerary: [
      "1:00 PM - Meet at Akihabara Station",
      "1:15 PM - Introduction to Tokyo's technology scene",
      "1:30 PM - Visit to robotics showroom with interactive demonstrations",
      "2:30 PM - Exploration of Akihabara electronics stores and gaming centers",
      "3:30 PM - Transportation to digital art installation or VR experience",
      "4:15 PM - Visit to technology concept store featuring future innovations",
      "5:00 PM - Optional visit to themed café or additional tech location",
      "6:00 PM - Tour conclusion with technology recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
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
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is there an age requirement for this tour?",
        answer:
          "This tour is suitable for all ages, though some robot shows have minimum age requirements (typically 7+). We can customize the itinerary based on your group's interests and ages, focusing on either fun tech experiences or more in-depth industry insights.",
      },
      {
        question: "Do I need to be tech-savvy to enjoy this tour?",
        answer:
          "Not at all! Our guides explain everything in an accessible way that's enjoyable for tech enthusiasts and novices alike. The emphasis is on interactive experiences rather than technical details.",
      },
      {
        question: "Will we be able to purchase electronics during the tour?",
        answer:
          "Yes, there will be opportunities to shop at electronics stores in Akihabara. Your guide can provide advice on recommended products and tax-free shopping options, though extended shopping time may limit visits to other locations.",
      },
    ],
  },
  {
    title: "Tokyo Street Food & Market Tour",
    description:
      "Discover Tokyo's vibrant street food scene with a local guide, sampling everything from classic yakitori to trendy fusion dishes at bustling markets and hidden stalls.",
    city: "Tokyo",
    country: "Japan",
    region: "Kanto",
    images: [
      "/images/tours/tokyo/street-food.jpg",
      "/images/tours/tokyo/tsukiji-market.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Food", "Market", "Cultural"],
    meetingPoint: {
      address: "Tsukiji Hongwanji Temple, 3-15-1 Tsukiji, Chuo, Tokyo 104-0045",
      coordinates: {
        latitude: 35.6654,
        longitude: 139.7707,
      },
      instructions:
        "Meet in front of Tsukiji Hongwanji Temple main entrance. Your guide will be holding a sign with 'Tokyo Food Tour' written on it.",
      contactNumber: "+81 3-3456-7890",
      contactEmail: "eat@tokyofoodtours.com",
    },
    highlights: [
      "Sample 8-10 different Japanese street foods and specialties",
      "Explore the outer markets of Tsukiji, Tokyo's historic seafood hub",
      "Learn about Japanese food culture and traditions from a local expert",
      "Discover hidden food stalls frequented by locals",
    ],
    inclusions: [
      "Professional food guide",
      "All food tastings (8-10 different items)",
      "One local beverage (tea, soft drink, or beer)",
      "Market and neighborhood food exploration",
      "Food map with personal recommendations",
    ],
    exclusions: [
      "Additional food beyond included tastings",
      "Extra beverages",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Tsukiji Hongwanji Temple",
      "10:15 AM - Introduction to Japanese food culture",
      "10:30 AM - Begin food tastings at Tsukiji Outer Market",
      "11:30 AM - Visit local depachika (food hall) for specialty items",
      "12:30 PM - Explore street food stalls in nearby neighborhood",
      "1:30 PM - Final tastings and specialty coffee or tea",
      "2:00 PM - Tour conclusion with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
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
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of street foods such as yakitori, takoyaki, okonomiyaki, and seasonal specialties. We also visit local markets where you can sample fresh seafood, fruits, and unique snacks.",
      },
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarian diets with advance notice. Many street food vendors offer delicious vegetarian options like grilled vegetables, tofu dishes, and seasonal vegetable tempura.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2-3 km (1.2-1.8 miles) of walking at a leisurely pace with frequent stops for food tastings. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Japanese Tea Ceremony Experience",
    description:
      "Immerse yourself in the serene world of Japanese tea culture with a traditional tea ceremony led by a certified tea master, learning about the history, rituals, and artistry behind this ancient practice.",
    city: "Tokyo",
    country: "Japan",
    region: "Kanto",
    images: [
      "/images/tours/tokyo/tea-ceremony.jpg",
      "/images/tours/tokyo/tea-house.jpg",
    ],
    duration: "2 hours",
    price: "$60",
    rating: 4.9,
    tags: ["Cultural", "Relaxation", "Traditional"],
    meetingPoint: {
      address: "Happo-en Garden, 1-1-1 Shirokanedai, Minato, Tokyo 108-0071",
      coordinates: {
        latitude: 35.6357,
        longitude: 139.7233,
      },
      instructions:
        "Meet at the main entrance of Happo-en Garden. Your host will be wearing a traditional kimono and waiting to greet you.",
      contactNumber: "+81 3-4567-8901",
      contactEmail: "ceremony@teaexperience.jp",
    },
    highlights: [
      "Participate in an authentic Japanese tea ceremony (chado) with a certified tea master",
      "Learn the principles, philosophy, and etiquette of this 400-year-old tradition",
      "Experience ceremony in a traditional tea room within a historic Japanese garden",
      "Enjoy matcha tea and seasonal wagashi (traditional sweets)",
    ],
    inclusions: [
      "Traditional tea ceremony experience",
      "Matcha green tea preparation and tasting",
      "Seasonal wagashi (Japanese sweets)",
      "Entrance to the Japanese garden",
      "English explanation of ceremony elements",
    ],
    exclusions: [
      "Transportation to/from the tea house",
      "Additional food and beverages beyond the ceremony",
      "Gratuities",
      "Kimono rental (available as optional add-on)",
    ],
    itinerary: [
      "1:30 PM - Meet at Happo-en Garden entrance",
      "1:45 PM - Brief stroll through garden to tea house",
      "2:00 PM - Introduction to tea ceremony history and philosophy",
      "2:15 PM - Demonstration of ceremonial preparations",
      "2:30 PM - Learn proper guest etiquette and participation",
      "3:00 PM - Participate in ceremonial tea preparation and tasting",
      "3:30 PM - Conclusion and time for questions",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the experience.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: true,
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
        question: "What should I wear for the tea ceremony?",
        answer:
          "We recommend wearing comfortable, modest clothing. Traditional Japanese attire like a kimono can enhance the experience, but it is not required. The tea ceremony is about mindfulness and appreciation, so dress in a way that allows you to relax and enjoy the moment.",
      },
      {
        question: "Can children participate in the tea ceremony?",
        answer:
          "Yes, children are welcome to join the tea ceremony. We tailor the experience to be engaging for all ages, explaining the significance of each step in a way that is accessible and enjoyable for younger participants. Children will learn about the history of tea in Japan and can even help with some of the simple tasks involved.",
      },
      {
        question: "Do I need to sit on the floor for the ceremony?",
        answer:
          "Traditional tea ceremonies are conducted with participants seated on tatami mats. However, we can provide chairs or accommodations for those with mobility concerns. Please let us know in advance if you require special seating arrangements.",
      },
    ],
  },
];

export default tokyoTours;
