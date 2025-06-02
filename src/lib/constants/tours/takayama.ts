import { Tour } from "@/lib/interfaces/services/tours";

export const takayamaTours: Tour[] = [
  {
    title: "Traditional Carpentry & Old Town Heritage",
    description:
      "Explore Takayama's perfectly preserved Edo-period streets with a local historian, visiting master carpenter workshops that built Japan's most important temples, followed by exclusive access to historic merchants' homes not open to the public.",
    city: "Takayama",
    country: "Japan",
    region: "Gifu Prefecture",
    images: [
      "/images/tours/takayama/old-town.jpg",
      "/images/tours/takayama/carpenter-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Historical", "Architecture", "Crafts"],
    meetingPoint: {
      address:
        "Takayama Station, 6 Hanasatocho, Takayama, Gifu Prefecture 506-0026",
      coordinates: {
        latitude: 36.1417,
        longitude: 137.2525,
      },
      instructions:
        "Meet at the east exit of Takayama Station by the tourist information center. Your guide will be holding a wooden sign with 'Takayama Heritage Tour' carved into it.",
      contactNumber: "+81 577-32-1111",
      contactEmail: "info@takayamatours.jp",
    },
    highlights: [
      "Visit active carpenter workshops that have operated for 14 generations",
      "Learn traditional woodworking techniques used in Japan's greatest temples",
      "Exclusive access to preserved merchant homes not open to the general public",
      "Stroll through the historic Sanmachi district with over 100 preserved buildings",
    ],
    inclusions: [
      "Expert local historian guide",
      "Entrance fees to all workshops and historic homes",
      "Traditional Japanese tea service",
      "Hands-on mini woodworking experience",
      "Detailed historical map of Takayama",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (though recommendations will be provided)",
      "Personal purchases at craft shops",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Takayama Station",
      "9:15 AM - Walking tour of Sanmachi historic district",
      "10:30 AM - Visit to active carpenter workshop with demonstration",
      "11:15 AM - Hands-on mini woodworking experience",
      "12:00 PM - Tea ceremony in historic merchant home",
      "1:00 PM - Visit to exclusive preserved homes not open to public",
      "1:45 PM - Tour concludes with return to Takayama Station",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: true,
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
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Why is Takayama known for its carpentry?",
        answer:
          "Takayama's carpenters (called 'Hida no takumi') were so skilled that they were summoned by Imperial command to build temples and shrines in Kyoto and Nara, including many national treasures that still stand today. The region's high-quality timber and isolated mountain location helped preserve traditional techniques that have been passed down through generations for over 1,000 years.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2 kilometers of walking on mostly flat terrain, though some historic buildings have step entrances and narrow staircases. We maintain a leisurely pace suitable for most fitness levels.",
      },
      {
        question: "Is photography permitted inside the buildings?",
        answer:
          "Photography is permitted in most locations except for certain sections of the carpenter workshops where proprietary techniques are demonstrated. Your guide will clearly indicate when photography is not allowed.",
      },
    ],
  },
  {
    title: "Sake Brewery Tour & Tasting Experience",
    description:
      "Discover the art of premium sake production with exclusive access to centuries-old breweries, guided tastings of rare varieties not available elsewhere, and traditional izakaya dinner featuring Hida beef prepared in multiple ways.",
    city: "Takayama",
    country: "Japan",
    region: "Gifu Prefecture",
    images: [
      "/images/tours/takayama/sake-brewery.jpg",
      "/images/tours/takayama/sake-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Sake", "Brewery", "Culinary"],
    meetingPoint: {
      address:
        "Takayama Jinya, 1-5 Hachikenmachi, Takayama, Gifu Prefecture 506-0012",
      coordinates: {
        latitude: 36.1423,
        longitude: 137.2589,
      },
      instructions:
        "Meet at the entrance gate of Takayama Jinya historic government building. Your guide will be holding a sake barrel-shaped sign.",
      contactNumber: "+81 577-32-2222",
      contactEmail: "tastings@takayamasake.jp",
    },
    highlights: [
      "Visit two historic sake breweries dating back to the 1600s",
      "Learn about traditional sake production methods preserved for generations",
      "Taste 8-10 different premium sake varieties including rare limited editions",
      "Enjoy a multi-course izakaya dinner featuring the famous Hida beef",
    ],
    inclusions: [
      "Expert sake guide",
      "All brewery entrance fees and special access",
      "Guided sake tastings (8-10 varieties)",
      "Traditional izakaya dinner with Hida beef",
      "Sake brewing demonstration",
      "Commemorative sake cup to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional bottles of sake (available for purchase)",
      "Gratuities",
    ],
    itinerary: [
      "4:00 PM - Meet at Takayama Jinya",
      "4:15 PM - First sake brewery tour and production explanation",
      "5:00 PM - First sake tasting session (4-5 varieties)",
      "5:45 PM - Walk to second brewery",
      "6:00 PM - Second brewery tour focusing on traditional methods",
      "6:30 PM - Premium sake tasting (4-5 rare varieties)",
      "7:15 PM - Traditional izakaya dinner with Hida beef",
      "8:00 PM - Tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
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
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Takayama's sake special?",
        answer:
          "Takayama's sake is renowned for its exceptional quality due to three key factors: the pure mountain water filtered through the Japanese Alps, the high-quality local rice varieties, and the cold winter climate that creates ideal brewing conditions. Many of the breweries have been operated by the same families for over 15 generations, with techniques refined over centuries.",
      },
      {
        question: "Is sake tasting similar to wine tasting?",
        answer:
          "While there are similarities, sake tasting has its own unique approach. Our guide will teach you about the different sake grades (junmai, ginjo, daiginjo), brewing methods, serving temperatures, and how to identify subtle flavor notes specific to premium sake.",
      },
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "The tour focuses primarily on sake production and tasting, so it's most enjoyable for those interested in sampling the beverages. However, non-alcoholic participants are welcome and can enjoy the cultural aspects, brewery tours, and the full dinner experience.",
      },
    ],
  },
  {
    title: "Hida Folk Village & Traditional Crafts",
    description:
      "Experience rural Japan at the Hida Folk Village, an open-air museum showcasing traditional thatched-roof farmhouses, followed by hands-on workshops in pottery and indigo dyeing with local artisans.",
    city: "Takayama",
    country: "Japan",
    region: "Gifu Prefecture",
    images: [
      "/images/tours/takayama/hida-folk-village.jpg",
      "/images/tours/takayama/indigo-dyeing.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Cultural", "Crafts", "Nature"],
    meetingPoint: {
      address:
        "Takayama Station, 6 Hanasatocho, Takayama, Gifu Prefecture 506-0026",
      coordinates: {
        latitude: 36.1417,
        longitude: 137.2525,
      },
      instructions:
        "Meet at the west exit of Takayama Station near the bus stops. Your guide will be holding a blue flag with 'Hida Folk Village Tour' on it.",
      contactNumber: "+81 577-32-3333",
      contactEmail: "reservations@hidafolktour.jp",
    },
    highlights: [
      "Explore the Hida Folk Village with over 30 traditional rural structures",
      "Learn about mountain farming life and architecture from the Edo period",
      "Participate in hands-on workshops taught by master craftspeople",
      "Create your own pottery or indigo-dyed souvenir to take home",
    ],
    inclusions: [
      "Professional cultural guide",
      "Round-trip transportation to Hida Folk Village",
      "Entrance fees to all sites",
      "Traditional craft workshop (choice of pottery or indigo dyeing)",
      "All materials for craft activities",
      "Light refreshments",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Full meals",
      "Additional craft activities beyond the included workshop",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Takayama Station",
      "9:15 AM - Bus to Hida Folk Village",
      "9:30 AM - Guided tour of traditional farmhouses and rural buildings",
      "11:00 AM - Demonstration of traditional crafts and farming techniques",
      "12:00 PM - Light refreshments and free time to explore",
      "1:00 PM - Begin craft workshop (pottery or indigo dyeing)",
      "2:30 PM - Complete craft project to take home",
      "3:00 PM - Return bus to Takayama Station",
      "3:15 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: true,
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
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of crafts will we learn?",
        answer:
          "Participants can choose between pottery making using traditional Hida clay or indigo dyeing techniques passed down through generations. Both workshops are designed for beginners and include all materials needed to create your own unique piece to take home.",
      },
      {
        question: "How much time do we spend at the Folk Village?",
        answer:
          "We spend approximately 3 hours exploring the open-air museum, which gives ample time to see the various buildings, demonstrations, and exhibits at a relaxed pace.",
      },
      {
        question: "Will we see people in traditional dress?",
        answer:
          "Yes, staff at the Folk Village wear period-appropriate clothing and demonstrate traditional crafts and household activities throughout the day. This provides excellent photo opportunities and insights into daily life from the Edo period.",
      },
    ],
  },
];

export default takayamaTours;
