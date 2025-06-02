import { Tour } from "@/lib/interfaces/services/tours";
export const reykjavikTours: Tour[] = [
  {
    title: "Golden Circle & Blue Lagoon Combo",
    description:
      "Experience Iceland's natural wonders with a tour of the Golden Circle, including Þingvellir National Park, Geysir geothermal area, and Gullfoss waterfall, followed by a relaxing soak in the Blue Lagoon.",
    city: "Reykjavik",
    country: "Iceland",
    region: "Capital Region",
    images: [
      "/images/tours/reykjavik/golden-circle.jpg",
      "/images/tours/reykjavik/blue-lagoon.jpg",
    ],
    duration: "10 hours",
    price: "$150",
    rating: 4.8,
    tags: ["Nature", "Relaxation", "Adventure"],
    meetingPoint: {
      address: "Borgartún 29, 105 Reykjavik, Iceland",
      coordinates: {
        latitude: 64.1355,
        longitude: -21.8954,
      },
      instructions:
        "Meet in front of the Reykjavik Excursions office. Look for the gray bus marked 'Golden Circle'.",
      contactNumber: "+354 580 5400",
      contactEmail: "info@re.is",
    },
    highlights: [
      "Visit Þingvellir National Park - a UNESCO World Heritage site and geological wonder",
      "Watch the active Strokkur geyser erupt every 6-10 minutes",
      "Witness the powerful Gullfoss waterfall",
      "Relax in the mineral-rich waters of the Blue Lagoon geothermal spa",
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Transportation in climate-controlled vehicle",
      "Professional English-speaking guide",
      "Entrance to Blue Lagoon (standard admission)",
      "One silica mud mask at Blue Lagoon",
    ],
    exclusions: [
      "Food and drinks (available for purchase)",
      "Towel rental at Blue Lagoon (can be rented or brought from hotel)",
      "Optional upgrades at Blue Lagoon",
      "Gratuities",
    ],
    itinerary: [
      "8:30 AM - Hotel pickup begins",
      "9:30 AM - Þingvellir National Park visit",
      "11:00 AM - Geysir geothermal area exploration",
      "12:30 PM - Lunch break (not included)",
      "1:30 PM - Gullfoss waterfall visit",
      "3:00 PM - Travel to Blue Lagoon",
      "4:00 PM - Blue Lagoon relaxation time (2 hours)",
      "6:30 PM - Return to Reykjavik",
      "7:30 PM - Hotel drop-off",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before departure. 50% refund if canceled between 12-24 hours before departure. No refund for cancellations less than 12 hours before departure.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "nature-wildlife",
    faqs: [
      {
        question: "What should I bring to the Blue Lagoon?",
        answer:
          "A bathing suit is mandatory in the Blue Lagoon. We recommend bringing your own towel, though towels can be rented. Shower facilities with shampoo and conditioner are provided.",
      },
      {
        question: "Is food available during the tour?",
        answer:
          "There will be a lunch break at a service center with various dining options. There are also cafés at the Blue Lagoon.",
      },
      {
        question: "What should I wear for the Golden Circle portion?",
        answer:
          "We recommend dressing in warm, waterproof layers as Icelandic weather can be unpredictable. Sturdy walking shoes are essential.",
      },
    ],
  },
  {
    title: "Northern Lights Evening Tour",
    description:
      "Chase the elusive Northern Lights with an expert guide who will take you to the best viewing spots away from city lights.",
    city: "Reykjavik",
    country: "Iceland",
    region: "Capital Region",
    images: [
      "/images/tours/reykjavik/northern-lights.jpg",
      "/images/tours/reykjavik/stargazing.jpg",
    ],
    duration: "3-5 hours",
    price: "$100",
    rating: 4.9,
    tags: ["Adventure", "Nightlife", "Photography"],
    meetingPoint: {
      address: "Skógarhlíð 10, 105 Reykjavik, Iceland",
      coordinates: {
        latitude: 64.1282,
        longitude: -21.8912,
      },
      instructions:
        "Meet at the Gray Line Bus Terminal 30 minutes before departure. Look for the 'Northern Lights Tour' sign.",
      contactNumber: "+354 540 1313",
      contactEmail: "iceland@grayline.is",
    },
    highlights: [
      "Hunt for the Northern Lights with expert aurora guides",
      "Learn about the science and folklore behind this natural phenomenon",
      "Get photography tips for capturing the aurora borealis",
      "Visit carefully selected viewing locations away from city light pollution",
    ],
    inclusions: [
      "Hotel pickup and drop-off",
      "Transportation in comfortable bus with WiFi",
      "Expert English-speaking northern lights guide",
      "Hot chocolate and Icelandic pastries",
      "Blankets for extra warmth",
    ],
    exclusions: [
      "Professional photography equipment (bring your own)",
      "Tripod (recommended for aurora photography)",
      "Dinner (light snacks provided)",
      "Gratuities",
    ],
    itinerary: [
      "8:30 PM - Hotel pickup begins",
      "9:15 PM - Departure from the bus terminal",
      "9:45 PM - Travel to viewing locations (chosen daily based on forecast conditions)",
      "10:30 PM - Northern Lights hunting with guidance on photography techniques",
      "12:00 AM - Hot chocolate and pastries served under the night sky",
      "1:00 AM - Return journey to Reykjavik",
      "1:30 AM - Hotel drop-off",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before departure. Full refund if Northern Lights are not visible during the tour (you can join another tour for free).",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
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
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is seeing the Northern Lights guaranteed?",
        answer:
          "No, as they are a natural phenomenon. If no lights are seen on your tour, you can join another tour for free until you see them (subject to availability).",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress very warmly in multiple layers. Hat, gloves, thermal underwear, warm coat, and sturdy boots are essential as you'll be standing outside in cold temperatures.",
      },
      {
        question: "Can I photograph the Northern Lights with my smartphone?",
        answer:
          "While professional cameras yield better results, modern smartphones can capture basic aurora images. Our guides will provide photography tips for any device.",
      },
    ],
  },
  {
    title: "Reykjavik City Walking Tour",
    description:
      "Discover Reykjavik's vibrant culture and history on a guided walking tour through its charming streets, iconic landmarks, and hidden gems.",
    city: "Reykjavik",
    country: "Iceland",
    region: "Capital Region",
    images: [
      "/images/tours/reykjavik/city-walking-tour.jpg",
      "/images/tours/reykjavik/hallgrimskirkja.jpg",
    ],
    duration: "2 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Cultural", "Historical", "City Tour"],
    meetingPoint: {
      address: "Austurvöllur Square, 101 Reykjavik, Iceland",
      coordinates: {
        latitude: 64.147,
        longitude: -21.9408,
      },
      instructions:
        "Meet by the statue of Jón Sigurðsson in Austurvöllur Square. Your guide will be holding a blue 'Reykjavik Walking Tours' sign.",
      contactNumber: "+354 519 5000",
      contactEmail: "info@walkingtoursreykjavik.is",
    },
    highlights: [
      "Visit Hallgrímskirkja church with its distinctive architecture",
      "Explore the colorful old town and harbor area",
      "See the modern Harpa Concert Hall and Conference Centre",
      "Discover hidden street art and local hotspots",
    ],
    inclusions: [
      "Professional local English-speaking guide",
      "Small group experience (maximum 15 people)",
      "Map of Reykjavik with personal recommendations",
    ],
    exclusions: [
      "Food and drinks",
      "Entrance fees to museums or attractions",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Austurvöllur Square",
      "10:15 AM - Visit Alþingi (Parliament House) and learn about Icelandic democracy",
      "10:45 AM - Walk through the old town neighborhood",
      "11:15 AM - Visit Hallgrímskirkja church (exterior and interior)",
      "11:45 AM - Explore Laugavegur shopping street",
      "12:15 PM - Visit Harpa Concert Hall",
      "12:45 PM - Tour concludes at the Old Harbor",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before tour starts. No refund for cancellations less than 24 hours in advance.",
    isHistorical: true,
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
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2.5 km (1.5 miles) at a leisurely pace with several stops along the way. Comfortable walking shoes are recommended.",
      },
      {
        question: "Does the tour run in bad weather?",
        answer:
          "Yes, the tour operates in all weather conditions except extreme cases. Iceland's weather is changeable, so dress in layers and bring waterproof clothing.",
      },
      {
        question: "Can I bring children on this tour?",
        answer:
          "Yes, this tour is suitable for all ages. Children under 12 join for free when accompanied by an adult (maximum 2 children per adult).",
      },
    ],
  },
];
export default reykjavikTours;
