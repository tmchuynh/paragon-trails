import { Tour } from "@/lib/interfaces/services/tours";

export const xianTours: Tour[] = [
  {
    title: "Terracotta Army & Emperor's Tomb VIP Access",
    description:
      "Experience the archaeological wonder of China's Terracotta Warriors with privileged access to areas closed to regular visitors, guided by an expert archaeologist who reveals the latest discoveries and historical context.",
    city: "Xi'an",
    country: "China",
    region: "Shaanxi Province",
    images: [
      "/images/tours/xi-an/terracotta-warriors.jpg",
      "/images/tours/xi-an/emperor-tomb.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 5.0,
    tags: ["Archaeological", "Emperor", "Ancient China"],
    meetingPoint: {
      address:
        "Lobby of Grand Mercure Xi'an on Renmin Square, No.319 Dongxin Street",
      coordinates: {
        latitude: 34.2655,
        longitude: 108.9569,
      },
      instructions:
        "Meet in the hotel lobby. Your guide will be holding a sign with 'VIP Terracotta Tour' written on it.",
      contactNumber: "+86 29 8323 6666",
      contactEmail: "tours@xianvip.com",
    },
    highlights: [
      "Exclusive access to Pit #5, an active excavation area closed to regular visitors",
      "Direct insights from an archaeologist with connections to the excavation team",
      "View recently unearthed warriors still with original paint traces",
      "Special permission to observe restoration work in the on-site laboratory",
    ],
    inclusions: [
      "Hotel pickup and drop-off in central Xi'an",
      "Private transportation in air-conditioned vehicle",
      "Expert archaeologist guide",
      "VIP access permissions and tickets",
      "Bottled water and refreshments",
      "Lunch at local restaurant specializing in Shaanxi cuisine",
    ],
    exclusions: [
      "Gratuities",
      "Personal expenses",
      "Travel insurance",
      "Additional activities not specified in the itinerary",
    ],
    itinerary: [
      "8:00 AM - Hotel pickup from central Xi'an",
      "9:00 AM - Arrive at Terracotta Army Museum before peak crowds",
      "9:15 AM - VIP entrance and introduction to the site's history",
      "10:00 AM - Guided tour of Pit #1 (largest excavation)",
      "10:45 AM - Access to Pit #5 (special permission area) with excavation briefing",
      "11:30 AM - Visit to the restoration laboratory",
      "12:30 PM - Traditional Shaanxi lunch at local restaurant",
      "1:30 PM - Visit Emperor Qin's tomb mound and museum",
      "2:30 PM - Return journey to Xi'an",
      "3:30 PM - Hotel drop-off in central Xi'an",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours before tour. No refund for cancellations less than 48 hours before the scheduled tour.",
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
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this Terracotta Army tour special?",
        answer:
          "Our tour includes access to special excavation areas normally closed to the public, including the newest Pit #5 site where archeologists are actively working. You'll receive detailed explanations from a specialist with direct connections to the archaeological team, allowing for insights into the latest discoveries and research. We also visit at optimal times to avoid the largest crowds, ensuring a more intimate experience.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2-3 km of walking throughout the day on mostly flat terrain. There are some steps at the museum entrances. Comfortable walking shoes are recommended.",
      },
      {
        question: "Is photography allowed at the Terracotta Army site?",
        answer:
          "Photography without flash is permitted in most areas. In the special access areas, photography may be restricted in certain sections, which your guide will clearly indicate. Professional photography or video equipment requires additional permits.",
      },
    ],
  },
  {
    title: "Xi'an Ancient City Wall & Muslim Quarter",
    description:
      "Cycle along China's best-preserved ancient city wall offering panoramic views, then explore the vibrant Muslim Quarter's narrow lanes and sample its famous street food with insights into the city's Silk Road heritage.",
    city: "Xi'an",
    country: "China",
    region: "Shaanxi Province",
    images: [
      "/images/tours/xi-an/city-wall-cycling.jpg",
      "/images/tours/xi-an/muslim-quarter.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Cycling", "Street Food", "Culture"],
    meetingPoint: {
      address: "South Gate (Yongning Gate) of Xi'an City Wall, Nan Gate Street",
      coordinates: {
        latitude: 34.2505,
        longitude: 108.9386,
      },
      instructions:
        "Meet at the bicycle rental station inside the South Gate. Your guide will be waiting with a red flag.",
      contactNumber: "+86 29 8778 5588",
      contactEmail: "xianculturaltours@visit.cn",
    },
    highlights: [
      "Cycle atop the 600-year-old city wall with panoramic views of Xi'an",
      "Visit all four magnificent gates with their distinct architectural styles",
      "Explore the bustling Muslim Quarter with its rich Islamic heritage",
      "Sample 8-10 authentic local foods from family-run stalls",
    ],
    inclusions: [
      "Bicycle rental with safety equipment",
      "English-speaking local guide",
      "All entrance fees and tickets",
      "Food tastings in the Muslim Quarter",
      "Bottled water",
    ],
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Additional food beyond included tastings",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "2:00 PM - Meet at South Gate of Xi'an City Wall",
      "2:15 PM - Brief introduction and bicycle fitting",
      "2:30 PM - Begin cycling tour along the ancient city wall",
      "4:00 PM - Complete the city wall circuit (14km)",
      "4:30 PM - Walk to nearby Muslim Quarter",
      "4:45 PM - Guided food tour through Muslim Quarter with tastings",
      "6:00 PM - Visit to the Great Mosque of Xi'an",
      "6:30 PM - Tour conclusion with recommendations for dinner",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: true,
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
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How long is the cycling portion?",
        answer:
          "The complete Xi'an city wall circuit is 14km (8.7 miles) and takes approximately 2 hours to cycle at a leisurely pace with stops for photos and historical commentary. For those who prefer not to cycle the entire route, we can arrange to cover just the most scenic section (about 4km) and then use our vehicle to transfer to the Muslim Quarter.",
      },
      {
        question: "What if I don't know how to ride a bicycle?",
        answer:
          "We offer tandem bicycles where you can ride with a guide, or alternatively, we can arrange for an electric cart to take you around the city wall for an additional fee.",
      },
      {
        question: "What kind of food will we try in the Muslim Quarter?",
        answer:
          "You'll sample traditional Xi'an and Hui Muslim specialties including roujiamo (Chinese hamburger), yangrou paomo (lamb stew with bread), liangpi (cold noodles), persimmon cakes, various kebabs, and local nutty desserts. Vegetarian options are available upon request.",
      },
    ],
  },
  {
    title: "Silk Road Heritage & Local Crafts Tour",
    description:
      "Discover Xi'an's rich Silk Road history with visits to ancient trading posts, artisan workshops, and markets where you can see traditional crafts like paper cutting, calligraphy, and pottery being made.",
    city: "Xi'an",
    country: "China",
    region: "Shaanxi Province",
    images: [
      "/images/tours/xi-an/silk-road-market.jpg",
      "/images/tours/xi-an/calligraphy-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Cultural", "Crafts", "Silk Road"],
    meetingPoint: {
      address: "Shanxi History Museum, No.91 Xiaozhai East Road, Xi'an",
      coordinates: {
        latitude: 34.2284,
        longitude: 108.9533,
      },
      instructions:
        "Meet at the main entrance of Shanxi History Museum. Your guide will be holding a yellow sign with 'Silk Road Crafts' written on it.",
      contactNumber: "+86 29 8765 4321",
      contactEmail: "craft@xianshadows.com",
    },
    highlights: [
      "Visit authentic craft workshops with generations of artisan heritage",
      "Try your hand at traditional paper cutting with master guidance",
      "Learn calligraphy basics and paint your own souvenir",
      "Explore historic sites along the ancient Silk Road trade route",
    ],
    inclusions: [
      "Expert cultural guide",
      "All workshop materials and supplies",
      "Admission to Shanxi History Museum",
      "Private transportation between locations",
      "Your handmade crafts to take home",
      "Traditional Chinese tea service",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional souvenirs beyond workshop creations",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "9:00 AM - Meet at Shanxi History Museum",
      "9:15 AM - Guided tour focusing on Silk Road artifacts",
      "10:30 AM - Visit to paper cutting workshop with hands-on activity",
      "11:30 AM - Traditional calligraphy lesson with a master",
      "12:15 PM - Tea break with local specialty snacks",
      "12:45 PM - Visit pottery studio in historic district",
      "1:30 PM - Tour conclusion with recommendations for lunch",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before scheduled tour.",
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
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of crafts will we see?",
        answer:
          "The tour includes visits to workshops specializing in traditional crafts such as paper cutting, Chinese calligraphy, pottery, and silk weaving. You'll have the opportunity to watch artisans at work and even try your hand at some techniques under their guidance.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes! This tour is family-friendly and designed to engage visitors of all ages with hands-on activities and interactive demonstrations. Children will enjoy learning about the history of the Silk Road through crafts and stories.",
      },
      {
        question: "Do I need artistic skills to enjoy the workshops?",
        answer:
          "No artistic experience is necessary. The workshops are designed for beginners, and the master artisans are skilled at guiding first-timers. You'll receive step-by-step instructions and will create pieces you can be proud to take home.",
      },
    ],
  },
];

export default xianTours;
