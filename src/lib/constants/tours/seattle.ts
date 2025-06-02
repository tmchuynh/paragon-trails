import { Tour } from "@/lib/interfaces/services/tours";

export const seattleTours: Tour[] = [
  {
    title: "Pike Place Market Early Access Food Tour",
    description:
      "Experience Seattle's iconic Pike Place Market before the crowds arrive with exclusive vendor access, generous tastings, and behind-the-scenes stories from market insiders.",
    city: "Seattle",
    country: "United States",
    region: "Washington",
    images: [
      "/images/tours/seattle/pike-place-market.jpg",
      "/images/tours/seattle/fish-throwing.jpg",
    ],
    duration: "3 hours",
    price: "$69",
    rating: 4.9,
    tags: ["Food", "Market", "Local"],
    meetingPoint: {
      address: "Pike Place Market, 1st Avenue Entrance, Seattle, WA 98101",
      coordinates: {
        latitude: 47.6097,
        longitude: -122.3422,
      },
      instructions:
        "Meet at the original Starbucks location. Your guide will be wearing a green apron with 'Seattle Food Tours' embroidered on it.",
      contactNumber: "+1 (206) 555-1234",
      contactEmail: "info@seattlefoodtours.com",
    },
    highlights: [
      "Early access to Pike Place Market before the crowds arrive",
      "Meet local vendors and hear their behind-the-scenes stories",
      "Sample 8-9 generous tastings from iconic market vendors",
      "See the famous fish throwers in action",
    ],
    inclusions: [
      "Professional local food guide",
      "All food tastings (enough for a full breakfast)",
      "Exclusive vendor access",
      "Small group experience (maximum 10 people)",
      "Recipe collection from market vendors",
    ],
    exclusions: [
      "Additional food and beverages beyond included tastings",
      "Gratuities",
      "Hotel pickup and drop-off",
      "Market souvenirs and purchases",
    ],
    itinerary: [
      "8:00 AM - Meet at the original Starbucks for coffee tasting",
      "8:15 AM - Introductions and market history",
      "8:30 AM - Exclusive behind-the-scenes tour before regular opening hours",
      "9:00 AM - Visit to famous fish throwers with demonstration",
      "9:30 AM - Tastings at artisan bakeries and cheese vendors",
      "10:15 AM - Sample award-winning chowder and seafood",
      "10:45 AM - Sweet treats and local delicacies",
      "11:00 AM - Tour conclusion with recommendations for further exploration",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
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
        question: "How many food tastings are included?",
        answer:
          "The tour includes 8-9 generous tastings from a variety of vendors, enough to replace breakfast. Tastings may include fresh pastries, smoked salmon, artisanal cheeses, and Seattle's famous clam chowder.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, gluten-free, and most allergies. Please indicate any dietary restrictions when booking so our guide can arrange appropriate alternatives.",
      },
      {
        question: "Will we have time to shop at the market?",
        answer:
          "The guided portion of the tour focuses on tastings and vendor stories, but we conclude at the market, allowing you to revisit your favorite spots for shopping afterward. Your guide will provide a map marking all the visited locations.",
      },
    ],
  },
  {
    title: "Underground Seattle History Tour",
    description:
      "Descend beneath the streets of Seattle to explore the hidden subterranean city and hear fascinating tales of the city's colorful past, from the Gold Rush era to Prohibition.",
    city: "Seattle",
    country: "United States",
    region: "Washington",
    images: [
      "/images/tours/seattle/underground.jpg",
      "/images/tours/seattle/pioneer-square.jpg",
    ],
    duration: "2 hours",
    price: "$45",
    rating: 4.7,
    tags: ["History", "Underground", "Unusual"],
    meetingPoint: {
      address: "608 1st Ave, Seattle, WA 98104",
      coordinates: {
        latitude: 47.6024,
        longitude: -122.3343,
      },
      instructions:
        "Meet inside Doc Maynard's Public House in Pioneer Square. Look for the Underground Tour sign.",
      contactNumber: "+1 (206) 682-4646",
      contactEmail: "reservations@undergroundtour.com",
    },
    highlights: [
      "Access historic underground passageways not open to the general public",
      "Learn about Seattle's fascinating history of rebuilding after the Great Fire",
      "Discover the original street level of Seattle, now buried underground",
      "Hear stories of colorful characters from the city's rough-and-tumble past",
    ],
    inclusions: [
      "Guided underground tour with expert historian",
      "Access to restricted subterranean areas",
      "Historical photographs and visual aids",
      "Entertaining stories and legends of old Seattle",
    ],
    exclusions: [
      "Gratuities",
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Souvenir booklet (available for purchase)",
    ],
    itinerary: [
      "5:30 PM - Meet at Doc Maynard's Public House for check-in",
      "5:45 PM - Introduction to Seattle's history and the Great Fire of 1889",
      "6:00 PM - Descend to the first underground section beneath Pioneer Square",
      "6:20 PM - Explore original storefronts and sidewalks from the 1890s",
      "6:45 PM - Visit the second underground section with architectural remnants",
      "7:15 PM - Final underground passage with stories of Prohibition era",
      "7:30 PM - Return to street level and conclude tour",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
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
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour accessible for people with mobility issues?",
        answer:
          "The underground portion involves navigating uneven surfaces, low ceilings, and several staircases. Unfortunately, it is not wheelchair accessible and may be challenging for those with significant mobility limitations.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children generally enjoy the 'hidden city' aspect of the tour. The content is appropriate for all ages, though younger children may not appreciate the historical details. We recommend the tour for ages 8 and up.",
      },
      {
        question: "Is it dark or claustrophobic underground?",
        answer:
          "The underground passages are well-lit and most areas have adequate ceiling height. However, some passages are narrow and there are sections where the ceiling is lower. People with severe claustrophobia may find some portions uncomfortable.",
      },
    ],
  },
  {
    title: "Seattle Waterfront Kayak Adventure",
    description:
      "Paddle through Seattle's scenic waterfront and Elliott Bay, enjoying views of the skyline, Olympic Mountains, and marine wildlife on this guided kayaking tour.",
    city: "Seattle",
    country: "United States",
    region: "Washington",
    images: [
      "/images/tours/seattle/kayaking.jpg",
      "/images/tours/seattle/elliott-bay.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Adventure", "Water", "Nature"],
    meetingPoint: {
      address: "2100 Alaskan Way, Seattle, WA 98121",
      coordinates: {
        latitude: 47.6112,
        longitude: -122.35,
      },
      instructions:
        "Meet at the Northwest Outdoor Center on the west side of Alaskan Way. Look for the blue kayak racks.",
      contactNumber: "+1 (206) 789-1205",
      contactEmail: "paddle@nwoc.com",
    },
    highlights: [
      "Paddle along Seattle's iconic waterfront with spectacular city views",
      "Potential wildlife sightings including harbor seals, sea lions, and eagles",
      "Unique perspective of the Seattle skyline from the water",
      "Close-up views of working waterfronts, ferries, and maritime activities",
    ],
    inclusions: [
      "Professional kayak guide",
      "Single or double kayak rental",
      "All necessary paddling equipment (paddle, life jacket, spray skirt)",
      "Basic paddling instruction",
      "Waterproof bags for small personal items",
      "Safety equipment and first aid kit",
    ],
    exclusions: [
      "Gratuities",
      "Hotel pickup and drop-off",
      "Waterproof camera (available for rental)",
      "Food and beverages",
      "Change of clothes",
    ],
    itinerary: [
      "9:00 AM - Meet at Northwest Outdoor Center for check-in",
      "9:15 AM - Safety briefing and paddling instruction",
      "9:45 AM - Launch kayaks and begin waterfront exploration",
      "10:15 AM - Paddle past downtown waterfront and piers",
      "11:00 AM - Rest and photo opportunity with Seattle skyline backdrop",
      "11:30 AM - Paddle through harbor and observe marine wildlife",
      "12:15 PM - Return to launch point",
      "12:30 PM - Tour conclusion and equipment return",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before tour. Full refund if tour is canceled due to unsafe weather conditions.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: false,
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
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need prior kayaking experience?",
        answer:
          "No prior experience is necessary! Our guides provide a brief orientation and all necessary equipment. The route is suitable for beginners and families.",
      },
      {
        question: "What should I wear for the kayak tour?",
        answer:
          "Dress in layers appropriate for the weather, with quick-drying clothing. Waterproof jackets are provided, but we recommend wearing shoes that can get wet.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "Light rain doesn't affect our tours, as we provide waterproof gear. In case of high winds, lightning, or other unsafe conditions, we'll offer to reschedule or provide a full refund. Safety is our priority.",
      },
    ],
  },
];

export default seattleTours;
