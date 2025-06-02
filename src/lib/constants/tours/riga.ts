import { Tour } from "@/lib/interfaces/services/tours";

export const rigaTours: Tour[] = [
  {
    title: "Riga City Highlights Tour",
    description:
      "Explore the rich history and architecture of Riga with a guided tour through its UNESCO World Heritage-listed Old Town.",
    city: "Riga",
    country: "Latvia",
    region: "Vidzeme",
    images: [
      "/images/tours/riga/city-highlights.jpg",
      "/images/tours/riga/old-town.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Cultural", "Historical", "City Tour"],
    meetingPoint: {
      address: "Town Hall Square (Rātslaukums), Old Town, Riga",
      coordinates: {
        latitude: 56.9475,
        longitude: 24.1069,
      },
      instructions:
        "Meet by the Blackheads House entrance. Your guide will be holding a blue 'Riga Tours' umbrella.",
      contactNumber: "+371 2712 3456",
      contactEmail: "info@rigatours.lv",
    },
    highlights: [
      "Visit the magnificent Riga Cathedral and St. Peter's Church",
      "Explore the colorful facades of the Art Nouveau district",
      "Discover medieval landmarks in the UNESCO-listed Old Town",
      "Learn about Latvia's fascinating history and culture",
    ],
    inclusions: [
      "Professional local English-speaking guide",
      "Small group experience (maximum 12 people)",
      "Entry to St. Peter's Church tower viewpoint",
      "Latvian sweet treat tasting",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Additional food and drinks",
      "Entry fees to other monuments not specified",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Town Hall Square",
      "10:15 AM - Tour of Riga's medieval Old Town landmarks",
      "11:00 AM - Visit St. Peter's Church and ascend the tower",
      "11:45 AM - Explore the Art Nouveau district",
      "12:15 PM - Visit Riga Central Market",
      "12:45 PM - Sample traditional Latvian treats",
      "1:00 PM - Tour conclusion with recommendations for lunch",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the tour. 50% refund for cancellations within 24 hours. No refund for no-shows.",
    faqs: [
      {
        question: "Is this tour suitable for those with limited mobility?",
        answer:
          "The tour involves walking on cobblestone streets and includes some stairs. While we try to accommodate all guests, those with severe mobility restrictions may find it challenging.",
      },
      {
        question: "What languages is the tour offered in?",
        answer:
          "The tour is regularly offered in English, German, and Russian. Other languages may be available upon request with advance notice.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "Tours run rain or shine. In case of extreme weather, the guide may modify portions of the route or offer more indoor attractions.",
      },
    ],
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
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
  },
  {
    title: "Gauja National Park Adventure",
    description:
      "Experience the natural beauty of Gauja National Park with hiking, canoeing, and wildlife spotting.",
    city: "Sigulda",
    country: "Latvia",
    region: "Vidzeme",
    images: [
      "/images/tours/riga/gauja-national-park.jpg",
      "/images/tours/riga/hiking.jpg",
    ],
    duration: "6 hours",
    price: "$80",
    rating: 4.9,
    tags: ["Adventure", "Nature", "Hiking"],
    meetingPoint: {
      address: "Sigulda Train Station, Ausekļa iela 6, Sigulda",
      coordinates: {
        latitude: 57.1537,
        longitude: 24.8538,
      },
      instructions:
        "Meet in front of the main entrance to Sigulda Train Station. Your guide will be wearing a green vest with 'Gauja Adventures' logo.",
      contactNumber: "+371 2845 6789",
      contactEmail: "adventures@gauja.lv",
    },
    highlights: [
      "Trek through pristine forests and sandstone cliffs",
      "Canoe along the scenic Gauja River",
      "Visit the medieval Turaida Castle",
      "Chance to spot local wildlife including deer and various bird species",
    ],
    inclusions: [
      "Round-trip transportation from Riga to Sigulda",
      "Professional nature guide",
      "Canoeing equipment and safety gear",
      "Picnic lunch with local products",
      "Entrance fees to Turaida Castle",
    ],
    exclusions: [
      "Additional snacks and beverages",
      "Personal travel insurance",
      "Souvenirs",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Departure from Riga",
      "10:00 AM - Arrival at Gauja National Park and safety briefing",
      "10:30 AM - Begin hiking through forest trails",
      "12:00 PM - Picnic lunch at scenic viewpoint",
      "1:00 PM - Canoeing session on Gauja River",
      "2:30 PM - Visit to Turaida Castle",
      "3:30 PM - Return journey to Riga",
      "5:00 PM - Arrival in Riga city center",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund for cancellations 24-48 hours before. No refund for cancellations less than 24 hours or in case of no-show.",
    faqs: [
      {
        question: "Do I need previous canoeing experience?",
        answer:
          "No, this tour is suitable for beginners. Our guides will provide a safety briefing and basic instruction before the canoeing portion.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Wear comfortable outdoor clothing and sturdy walking shoes. Bring a waterproof jacket, sun protection, insect repellent, and a water bottle. We provide all specialized equipment.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children 8 years and older can participate. All children must be accompanied by an adult and be able to swim for the canoeing portion.",
      },
    ],
    isHistorical: false,
    isRomantic: false,
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
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
  },
  {
    title: "Riga Food Tour",
    description:
      "Discover the flavors of Latvia with a guided food tour through Riga's best local eateries and markets.",
    city: "Riga",
    country: "Latvia",
    region: "Vidzeme",
    images: [
      "/images/tours/riga/food-tour.jpg",
      "/images/tours/riga/local-eateries.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Culinary", "Cultural", "Local Experience"],
    meetingPoint: {
      address: "Riga Central Market, Nēģu iela 7, Riga",
      coordinates: {
        latitude: 56.9432,
        longitude: 24.1146,
      },
      instructions:
        "Meet at the main entrance of the Central Market pavilion. Your guide will be holding a sign with 'Taste of Latvia' written on it.",
      contactNumber: "+371 2967 8901",
      contactEmail: "tastings@rigafood.lv",
    },
    highlights: [
      "Sample over 10 traditional Latvian dishes and specialties",
      "Explore the historic Central Market housed in converted Zeppelin hangars",
      "Visit local bakeries, breweries, and specialty food shops",
      "Learn about Latvia's culinary traditions and food culture",
    ],
    inclusions: [
      "Food tastings (enough for a full meal)",
      "3 beverage tastings including local beer and Black Balsam",
      "Professional local food guide",
      "Small group experience (maximum 8 people)",
      "Recipe booklet of traditional Latvian dishes",
    ],
    exclusions: [
      "Additional food and drinks beyond the included tastings",
      "Transportation to/from meeting point",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "11:00 AM - Meet at Central Market entrance",
      "11:15 AM - Market tour and tastings of smoked fish, cheese, and honey",
      "12:15 PM - Visit to traditional Latvian bakery",
      "12:45 PM - Tasting session at local brewery",
      "1:30 PM - Visit local restaurant for hot food tastings",
      "2:15 PM - Dessert and coffee at specialty café",
      "2:45 PM - Black Balsam tasting and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the tour. 50% refund for cancellations within 48 hours. No refund for same-day cancellations or no-shows.",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, gluten-free, and most other dietary restrictions. Please inform us at least 48 hours before your tour.",
      },
      {
        question: "Is alcohol included in the tour?",
        answer:
          "Yes, the tour includes tastings of local beer and Black Balsam (traditional Latvian herbal liqueur). Non-alcoholic alternatives are available upon request.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2 km (1.2 miles) at a leisurely pace with plenty of stops for tastings and rest. Comfortable walking shoes are recommended.",
      },
    ],
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
  },
];

export default rigaTours;
