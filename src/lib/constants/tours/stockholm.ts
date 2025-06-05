import { Tour } from "@/lib/interfaces/services/tours";

export const stockholmTours: Tour[] = [
  {
    title: "Stockholm Archipelago Sailing Adventure",
    description:
      "Explore the stunning Stockholm archipelago with a full-day sailing journey aboard a classic yacht. Navigate through narrow passages between islands, swim in pristine Baltic waters, and enjoy a traditional Swedish lunch in a secluded cove.",
    city: "Stockholm",
    country: "Sweden",
    region: "Stockholm County",
    images: [
      "/images/tours/stockholm/archipelago-sailing.jpg",
      "/images/tours/stockholm/island-cove.jpg",
    ],
    duration: "8 hours",
    price: "$149",
    rating: 4.9,
    tags: ["Sailing", "Nature", "Archipelago"],
    meetingPoint: {
      address: "Nybrokajen 13, 111 48 Stockholm",
      coordinates: {
        latitude: 59.3295,
        longitude: 18.0756,
      },
      instructions:
        "Meet at the Nybrokajen marina, pier #5. Look for the white sailboat named 'Stockholm Vind'.",
      contactNumber: "+46 70 123 4567",
      contactEmail: "bookings@stockholmsailing.se",
    },
    highlights: [
      "Sail through the scenic Stockholm archipelago with over 30,000 islands and islets",
      "Visit secluded bays and uninhabited islands far from tourist routes",
      "Swim in clean Baltic waters during summer months",
      "Enjoy a traditional Swedish lunch prepared with local ingredients",
    ],
    inclusions: [
      "Full-day sailing on a classic Swedish yacht",
      "Professional captain and crew",
      "Traditional Swedish lunch and refreshments",
      "Use of snorkeling equipment (seasonal)",
      "Life jackets and safety equipment",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Alcoholic beverages",
      "Personal expenses",
    ],
    itinerary: [
      "9:00 AM - Meet at Nybrokajen marina",
      "9:30 AM - Departure and sailing instruction for interested participants",
      "11:30 AM - Reach the outer archipelago and explore hidden islands",
      "1:00 PM - Anchor in a scenic cove for lunch and swimming",
      "3:00 PM - Continue sailing through narrow island passages",
      "4:30 PM - Begin return journey",
      "5:30 PM - Return to Nybrokajen marina",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before scheduled departure.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
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
        question: "Do I need sailing experience to participate?",
        answer:
          "No sailing experience is required. Our professional crew handles the yacht, but interested guests are welcome to learn basic sailing techniques and help with simple tasks if desired.",
      },
      {
        question: "What should I bring on the tour?",
        answer:
          "Wear comfortable clothing and soft-soled shoes. Bring swimwear, a towel, sunscreen, sunglasses, a hat, and a light windproof jacket. Don't forget your camera!",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "For safety reasons, tours may be rescheduled or canceled in case of high winds or severe weather. We'll offer an alternative date or a full refund if the tour cannot proceed due to weather conditions.",
      },
    ],
  },
  {
    title: "Stockholm Royal Palace & Old Town Walking Tour",
    description:
      "Explore Stockholm's historic heart with a guided walk through the medieval Old Town (Gamla Stan) and a tour of the magnificent Royal Palace, featuring its state apartments, treasury, and the changing of the guards ceremony.",
    city: "Stockholm",
    country: "Sweden",
    region: "Stockholm County",
    images: [
      "/images/tours/stockholm/royal-palace.jpg",
      "/images/tours/stockholm/gamla-stan.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Historical", "Royal", "Walking Tour"],
    meetingPoint: {
      address: "Stortorget 2, 111 29 Stockholm",
      coordinates: {
        latitude: 59.3254,
        longitude: 18.0716,
      },
      instructions:
        "Meet at Stortorget square in Gamla Stan, by the Nobel Museum entrance. Your guide will be holding a blue umbrella with 'Stockholm History Tours' printed on it.",
      contactNumber: "+46 8 123 4567",
      contactEmail: "info@stockholmhistory.com",
    },
    highlights: [
      "Tour the magnificent Royal Palace with its 600+ rooms and five museums",
      "Witness the ceremonial Changing of the Guards",
      "Explore Stockholm's medieval Old Town with its narrow cobblestone streets",
      "Visit the Storkyrkan Cathedral where royal coronations took place",
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Skip-the-line entry to the Royal Palace",
      "Guided tour of the Old Town",
      "Headsets to clearly hear the guide",
      "Entry to Storkyrkan Cathedral",
    ],
    exclusions: [
      "Food and drinks",
      "Hotel pickup and drop-off",
      "Gratuities",
      "Entry to additional museums not specified",
    ],
    itinerary: [
      "10:00 AM - Meet at Stortorget square and begin Old Town walking tour",
      "10:45 AM - Visit the Storkyrkan Cathedral",
      "11:30 AM - Break for coffee at a historic café (not included)",
      "12:00 PM - Walk to the Royal Palace",
      "12:15 PM - Witness the Changing of the Guards ceremony",
      "1:00 PM - Guided tour of Royal Palace state apartments and treasury",
      "2:00 PM - Tour conclusion at the Royal Palace",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. No refund for cancellations less than 24 hours before the tour or no-shows.",
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
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we see the royal family?",
        answer:
          "The Royal Palace is the official residence of His Majesty the King of Sweden, but the royal family primarily lives at Drottningholm Palace. While royal sightings are rare, the flag indicates when the King is in residence.",
      },
      {
        question: "When does the Changing of the Guards ceremony take place?",
        answer:
          "The Royal Guards ceremony takes place daily at 12:15 PM during summer months (May-August) and at 12:15 PM on weekdays and 1:15 PM on Sundays and holidays during the rest of the year. The ceremony lasts about 40 minutes.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 2-3 km (1.2-1.8 miles) of walking on cobblestone streets in the Old Town. Comfortable walking shoes are strongly recommended.",
      },
    ],
  },
  {
    title: "Nordic Food Tour & Cooking Class",
    description:
      "Discover the flavors of new Nordic cuisine with a tour of Stockholm's food markets, followed by a hands-on cooking class where you'll prepare traditional Swedish dishes with a modern twist.",
    city: "Stockholm",
    country: "Sweden",
    region: "Stockholm County",
    images: [
      "/images/tours/stockholm/nordic-food.jpg",
      "/images/tours/stockholm/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Food", "Cooking", "Culinary"],
    meetingPoint: {
      address: "Östermalmstorg 114, 114 42 Stockholm",
      coordinates: {
        latitude: 59.3358,
        longitude: 18.0761,
      },
      instructions:
        "Meet at the main entrance of Östermalmshallen food market. Your guide will be holding a sign with 'Stockholm Food Tour' written on it.",
      contactNumber: "+46 70 987 6543",
      contactEmail: "taste@stockholmfood.se",
    },
    highlights: [
      "Tour the historic Östermalmshallen food market with a culinary expert",
      "Sample traditional Swedish delicacies like gravlax, herring, and lingonberry preserves",
      "Learn about the principles of New Nordic cuisine and sustainable food practices",
      "Participate in a hands-on cooking class creating a 3-course Swedish meal",
    ],
    inclusions: [
      "Food tour with multiple tastings",
      "Hands-on cooking class with professional chef",
      "All ingredients and equipment",
      "3-course meal with wine pairing",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional beverages beyond included wine",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Östermalmshallen and introduction",
      "10:15 AM - Market tour with tastings of Swedish specialties",
      "11:30 AM - Walk to cooking school location",
      "12:00 PM - Begin cooking class with professional chef",
      "2:00 PM - Enjoy the prepared 3-course meal with wine pairing",
      "3:00 PM - Tour conclusion with recipes and cooking tips",
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
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The menu changes seasonally but typically includes traditional Swedish dishes with modern interpretations. Examples include cured salmon with dill sauce, Swedish meatballs with lingonberry, or venison with forest mushrooms. Vegetarian options are available upon request.",
      },
      {
        question: "Do I need cooking experience?",
        answer:
          "No prior cooking experience is necessary. Our professional chef will guide you through all techniques and preparations in a fun, approachable way suitable for all skill levels.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, gluten-free, and dairy-free with advance notice. Please inform us of any allergies or dietary needs when booking.",
      },
    ],
  },
];

export default stockholmTours;
