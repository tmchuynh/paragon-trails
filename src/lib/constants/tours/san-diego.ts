import { Tour } from "@/lib/interfaces/services/tours";

export const sanDiegoTours: Tour[] = [
  {
    title: "Hidden Beaches & Coastal Treasures",
    description:
      "Discover San Diego's most scenic and secluded beaches with a local guide who knows exactly when and where to avoid crowds and find the perfect spots.",
    city: "San Diego",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-diego/secret-beach.jpg",
      "/images/tours/san-diego/tide-pools.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Beaches", "Nature", "Photography"],
    meetingPoint: {
      address: "La Jolla Cove, 1100 Coast Blvd, La Jolla, CA 92037",
      coordinates: {
        latitude: 32.8496,
        longitude: -117.2736,
      },
      instructions:
        "Meet at the green bench near the lifeguard tower at La Jolla Cove. Your guide will be holding a blue beach umbrella with 'Secret Beaches' written on it.",
      contactNumber: "+1 (619) 234-5678",
      contactEmail: "tours@sdbeachsecrets.com",
    },
    highlights: [
      "Visit 3-4 hidden beaches and coves not found in typical guidebooks",
      "Explore remarkable tide pools with diverse marine life",
      "Learn about coastal ecology and conservation from a knowledgeable local guide",
      "Perfect photo opportunities at scenic lookout points",
    ],
    inclusions: [
      "Transportation between beach locations in air-conditioned van",
      "Professional local guide",
      "Beach equipment (beach chairs, umbrellas, towels)",
      "Bottled water and light snacks",
      "Tide pool guidebook to identify marine species",
    ],
    exclusions: [
      "Lunch (we recommend bringing a picnic or purchasing from nearby café)",
      "Swimwear and personal items",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at La Jolla Cove and introduction",
      "9:30 AM - Visit first secluded beach location with guided tide pool exploration",
      "10:45 AM - Travel to second beach location with coastal cave features",
      "11:45 AM - Picnic lunch break at scenic overlook (lunch not included)",
      "12:30 PM - Visit third hidden cove with optional swimming time",
      "1:45 PM - Explore final beach location with unique geological formations",
      "2:30 PM - Return to meeting point with time for questions and recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour or no-shows.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
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
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will there be opportunities for swimming?",
        answer:
          "Yes, we'll visit at least one beach suitable for swimming. Bring swimwear and towels if you'd like to take a dip, though swimming is optional.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and children often enjoy exploring the tide pools. The walking distances are moderate and appropriate for children 5 and older.",
      },
      {
        question: "What should I bring?",
        answer:
          "We recommend bringing swimwear, sunscreen, hat, sunglasses, camera, water bottle, and comfortable walking shoes that can get wet. Consider bringing a change of clothes and a light jacket as coastal areas can be breezy.",
      },
    ],
  },
  {
    title: "San Diego Zoo VIP Experience",
    description:
      "Go behind the scenes at the world-famous San Diego Zoo with exclusive early access, private animal encounters, and insights from a zoology expert.",
    city: "San Diego",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-diego/zoo-pandas.jpg",
      "/images/tours/san-diego/animal-encounter.jpg",
    ],
    duration: "4 hours",
    price: "$199",
    rating: 4.9,
    tags: ["Family", "VIP"],
    meetingPoint: {
      address: "San Diego Zoo Front Entrance, 2920 Zoo Dr, San Diego, CA 92101",
      coordinates: {
        latitude: 32.7353,
        longitude: -117.149,
      },
      instructions:
        "Meet at the VIP tour desk inside the main entrance, to the right of the ticket windows. Look for the 'VIP Experience' sign.",
      contactNumber: "+1 (619) 718-3000",
      contactEmail: "viptours@sandiegozoo.org",
    },
    highlights: [
      "Early access to the zoo before regular opening hours",
      "Two exclusive behind-the-scenes animal encounters not available to general visitors",
      "Personal safari cart transportation around the zoo with expert zoology guide",
      "Skip-the-line access to popular animal exhibits and shows",
    ],
    inclusions: [
      "Zoo admission for full day (VIP portion is 4 hours)",
      "Professional zoologist guide",
      "Safari cart transportation within the zoo",
      "Two special animal encounters",
      "Souvenir photo with animals",
      "Complimentary refreshments during the tour",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals (though snacks are provided)",
      "Additional souvenir photos beyond the included one",
      "Gratuities",
    ],
    itinerary: [
      "8:00 AM - Meet at VIP tour desk (one hour before general opening)",
      "8:15 AM - Welcome orientation and introduction to the day's plan",
      "8:30 AM - First behind-the-scenes animal encounter and feeding experience",
      "9:30 AM - Safari cart tour of key exhibits with expert commentary",
      "10:30 AM - Second exclusive animal encounter",
      "11:15 AM - Visit to newest zoo exhibits with skip-the-line access",
      "12:00 PM - VIP tour conclusion with souvenir photo and recommendations",
      "Remainder of day - Explore the zoo at leisure with your full-day pass",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days before experience. No refund for cancellations less than 72 hours before the scheduled experience.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: false,
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
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How close will we get to the animals?",
        answer:
          "This VIP experience includes at least two up-close animal encounters where you may have the opportunity to feed or touch select animals under staff supervision, subject to animal welfare considerations on the day.",
      },
      {
        question: "Is there an age minimum for this tour?",
        answer:
          "Children of all ages are welcome, but for the best experience, we recommend the tour for children ages 6 and up who can follow safety instructions around animals.",
      },
      {
        question: "What animals will we see during the VIP experience?",
        answer:
          "The specific animals featured in behind-the-scenes encounters vary based on animal welfare and availability. You might meet giraffes, rhinos, koalas, or other ambassador animals. Your guide will confirm which animals are part of the day's experience upon arrival.",
      },
    ],
  },
  {
    title: "Craft Beer & Brewery Tour",
    description:
      "Explore San Diego's vibrant craft beer scene with a guided tour of three local breweries, including tastings of unique brews and behind-the-scenes insights into the brewing process.",
    city: "San Diego",
    country: "United States",
    region: "California",
    images: [
      "/images/tours/san-diego/craft-beer.jpg",
      "/images/tours/san-diego/brewery-tour.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Brewery", "Craft Beer", "Local Experience"],
    meetingPoint: {
      address: "3725 30th St, San Diego, CA 92104 (North Park)",
      coordinates: {
        latitude: 32.7493,
        longitude: -117.1298,
      },
      instructions:
        "Meet outside Fall Brewing Company in North Park. Your guide will be wearing a black shirt with 'SD Beer Tours' logo.",
      contactNumber: "+1 (619) 456-7890",
      contactEmail: "cheers@sdbeertours.com",
    },
    highlights: [
      "Visit three distinct craft breweries representing San Diego's diverse beer styles",
      "Sample 12-15 different craft beers with guided tasting notes",
      "Tour production facilities to learn about the brewing process",
      "Meet brewers and beer experts who share insider knowledge",
    ],
    inclusions: [
      "All beer tastings at three breweries (12-15 samples total)",
      "Transportation between breweries",
      "Professional beer guide with Cicerone certification",
      "Behind-the-scenes brewery tours",
      "Bottled water and light snacks",
      "Souvenir tasting glass",
    ],
    exclusions: [
      "Additional beer beyond included tastings",
      "Meals (though light snacks are provided)",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "2:00 PM - Meet at Fall Brewing Company for welcome and first tasting flight",
      "2:45 PM - Behind-the-scenes tour of brewing facilities",
      "3:15 PM - Transportation to second brewery",
      "3:30 PM - Tasting flight at second brewery with focus on seasonal specialties",
      "4:15 PM - Transportation to final brewery",
      "4:30 PM - Final brewery visit with production tour and tasting",
      "5:30 PM - Tour conclusion with recommendations for dinner nearby",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
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
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are non-alcoholic options available?",
        answer:
          "Yes, we can accommodate non-drinkers with craft sodas and water tastings at each brewery. Please let us know in advance if you prefer non-alcoholic options.",
      },
      {
        question: "Is there a minimum age requirement?",
        answer:
          "Participants must be 21 years or older with valid photo ID. We strictly enforce the legal drinking age in compliance with California law.",
      },
      {
        question: "Will food be available during the tour?",
        answer:
          "We provide light snacks to complement the beer tastings. Some breweries may have food options available for purchase, but we recommend eating a meal before the tour.",
      },
    ],
  },
];

export default sanDiegoTours;
