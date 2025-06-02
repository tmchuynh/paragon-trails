import { Tour } from "@/lib/interfaces/services/tours";

export const queenstownTours: Tour[] = [
  {
    title: "Milford Sound Day Trip",
    description:
      "Experience the breathtaking beauty of Milford Sound with a scenic cruise through fjords, waterfalls, and towering cliffs.",
    city: "Queenstown",
    country: "New Zealand",
    region: "Otago",
    images: [
      "/images/tours/queenstown/milford-sound.jpg",
      "/images/tours/queenstown/fjord-cruise.jpg",
    ],
    duration: "6 hours",
    price: "$199",
    rating: 4.9,
    tags: ["Nature", "Adventure", "Scenic"],
    meetingPoint: {
      address: "88 Shotover Street, Queenstown 9300",
      coordinates: {
        latitude: -45.031707,
        longitude: 168.661494,
      },
      instructions:
        "Meet at the tour desk inside the main lobby. Look for the 'Milford Sound Tours' sign.",
      contactNumber: "+64 3 442 7500",
    },
    highlights: [
      "Scenic cruise through the fjord with towering cliffs",
      "View spectacular waterfalls including Stirling and Bowen Falls",
      "Opportunity to see wildlife including seals and dolphins",
      "Expert commentary on the region's geology and history",
    ],
    inclusions: [
      "Round-trip transportation from Queenstown",
      "1.5-hour scenic cruise",
      "Professional guide",
      "Live commentary on board",
    ],
    exclusions: [
      "Meals and drinks (available for purchase)",
      "Hotel pickup and drop-off",
      "Gratuities",
    ],
    itinerary: [
      "7:00 AM - Departure from Queenstown",
      "10:30 AM - Arrive at Milford Sound",
      "11:00 AM - Board cruise vessel",
      "11:15 AM - Begin cruise through Milford Sound",
      "12:45 PM - Return to dock",
      "1:30 PM - Begin return journey",
      "5:00 PM - Arrive back in Queenstown",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled within 24 hours. No refund for no-shows or cancellations within 2 hours of departure.",
    isHistorical: false,
    isRomantic: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "nature-experience",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Dress in layers and bring waterproof clothing as weather can change rapidly in the fjords.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Lunch is not included, but there are options to purchase food on board the cruise.",
      },
      {
        question: "Is there a bathroom on the cruise?",
        answer:
          "Yes, all cruise vessels are equipped with restroom facilities.",
      },
    ],
  },
  {
    title: "Skydiving Over Queenstown",
    description:
      "Experience the thrill of freefalling over Queenstown's stunning landscapes with a tandem skydive.",
    city: "Queenstown",
    country: "New Zealand",
    region: "Otago",
    images: [
      "/images/tours/queenstown/skydiving.jpg",
      "/images/tours/queenstown/aerial-view.jpg",
    ],
    duration: "3 hours",
    price: "$299",
    rating: 4.8,
    tags: ["Adventure", "Thrill", "Aerial"],
    meetingPoint: {
      address: "3 Tex Smith Lane, Queenstown Airport",
      coordinates: {
        latitude: -45.021111,
        longitude: 168.738889,
      },
      instructions:
        "Check in at the NZONE Skydive reception desk inside the terminal building.",
      contactNumber: "+64 3 442 5867",
    },
    highlights: [
      "15,000ft tandem skydive with 60 seconds of freefall",
      "Breathtaking views of The Remarkables, Lake Wakatipu, and Queenstown",
      "Professional and experienced tandem masters",
      "Comprehensive safety briefing and equipment",
    ],
    inclusions: [
      "Tandem skydive with experienced instructor",
      "All necessary equipment",
      "Safety briefing",
      "Certificate of completion",
    ],
    exclusions: [
      "Photo and video packages (available for purchase)",
      "Transportation to/from the drop zone",
      "Personal insurance",
    ],
    itinerary: [
      "Check-in and registration",
      "Safety briefing and training (30 minutes)",
      "Gear up for jump",
      "Board aircraft and ascend to jump altitude (20 minutes)",
      "Skydive experience (5-7 minutes)",
      "Land at designated drop zone",
      "Debrief and receive certificate",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance due to personal reasons. 100% refund for weather cancellations. No refund for no-shows or cancellations within 24 hours.",
    faqs: [
      {
        question: "Do I need prior experience to skydive?",
        answer:
          "No prior experience is necessary. You'll be securely attached to a professional tandem instructor who will control the entire jump.",
      },
      {
        question: "Are there any weight or health restrictions?",
        answer:
          "Yes, the weight limit is 100kg (220lbs). Participants should be in good health. Those with heart conditions, epilepsy, or who are pregnant should not participate.",
      },
      {
        question: "What should I wear?",
        answer:
          "Comfortable, casual clothing and athletic shoes. All necessary jump suits and equipment will be provided.",
      },
    ],
    isHistorical: false,
    isRomantic: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
  },
  {
    title: "Wine Tasting Tour in Gibbston Valley",
    description:
      "Explore the renowned wineries of Gibbston Valley with guided tastings and vineyard tours.",
    city: "Queenstown",
    country: "New Zealand",
    region: "Otago",
    images: [
      "/images/tours/queenstown/wine-tasting.jpg",
      "/images/tours/queenstown/gibbston-valley.jpg",
    ],
    duration: "5 hours",
    price: "$150",
    rating: 4.7,
    tags: ["Culinary", "Wine", "Local Experience"],
    meetingPoint: {
      address: "41 Shotover Street, Queenstown 9300",
      coordinates: {
        latitude: -45.0315,
        longitude: 168.661,
      },
      instructions:
        "Meet at the Queenstown Wine Trail office. Look for our branded van parked outside.",
      contactNumber: "+64 3 441 3990",
      contactEmail: "info@queenstownwinetrail.co.nz",
    },
    highlights: [
      "Visit 4 premium wineries in Central Otago",
      "Sample award-winning Pinot Noir and other varietals",
      "Expert-guided tour of vineyard operations",
      "Artisan cheese tasting paired with local wines",
    ],
    inclusions: [
      "Transportation in comfortable minivan",
      "Professional wine guide",
      "Tasting fees at all wineries",
      "Gourmet cheese platter at one venue",
    ],
    exclusions: [
      "Additional food beyond included tastings",
      "Wine bottle purchases",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Pickup from central Queenstown",
      "10:45 AM - First winery visit and tasting",
      "12:00 PM - Second winery with cheese pairing",
      "1:30 PM - Third winery with vineyard tour",
      "2:45 PM - Final winery experience",
      "3:30 PM - Return journey to Queenstown",
      "4:00 PM - Drop-off in central Queenstown",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before departure. 50% refund for cancellations within 24 hours. No refund for no-shows.",
    isHistorical: false,
    isRomantic: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are children allowed on the tour?",
        answer:
          "Yes, children are welcome, but they must be accompanied by an adult. Some wineries may have age restrictions for tastings.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot on the tour.",
      },
      {
        question: "Is there a designated driver?",
        answer:
          "Yes, our professional guide is also your designated driver, so you can enjoy the wine tastings responsibly.",
      },
    ],
  },
  {
    title: "Queenstown Jet Boat Adventure",
    description:
      "Feel the adrenaline rush on a high-speed jet boat ride through the Shotover River canyons.",
    city: "Queenstown",
    country: "New Zealand",
    region: "Otago",
    images: [
      "/images/tours/queenstown/jet-boat.jpg",
      "/images/tours/queenstown/shotover-river.jpg",
    ],
    duration: "1 hour",
    price: "$129",
    rating: 4.9,
    tags: ["Adventure", "Thrill", "Water Sports"],
    meetingPoint: {
      address: "3 Arthurs Point Road, Queenstown 9371",
      coordinates: {
        latitude: -45.036235,
        longitude: 168.683975,
      },
      instructions:
        "Meet at the Shotover Jet Welcome Centre. Free shuttle available from central Queenstown.",
      contactNumber: "+64 3 442 8570",
    },
    highlights: [
      "High-speed jet boat ride through narrow canyon passages",
      "Experience 360-degree spins and other thrilling maneuvers",
      "Navigate within inches of rocky outcrops",
      "Spectacular scenery of Shotover River Canyon",
    ],
    inclusions: [
      "25-minute jet boat ride",
      "Professional driver/guide",
      "Safety gear including life jackets",
      "Free shuttle from Queenstown if needed",
    ],
    exclusions: [
      "Photos (available for purchase)",
      "Souvenir items",
      "Gratuities",
    ],
    itinerary: [
      "Check in 20 minutes before departure time",
      "Safety briefing and gear fitting",
      "Board the jet boat",
      "25-minute jet boat ride with high-speed spins and maneuvers",
      "Return to base and opportunity to view photos",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before departure. 50% refund for cancellations within 24 hours. Full refund if tour is canceled due to adverse weather conditions.",
    isHistorical: false,
    isRomantic: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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
        question: "Is prior boating experience required?",
        answer:
          "No prior experience is needed. Our experienced guides will provide all necessary instructions and safety gear.",
      },
      {
        question: "What should I wear?",
        answer:
          "Wear comfortable clothing that can get wet. We provide life jackets and waterproof gear, but you may want to bring a change of clothes.",
      },
      {
        question: "Is it safe for children?",
        answer:
          "Yes, children are welcome as long as they are at least 1 meter (3.3 feet) tall. All passengers must wear provided safety equipment.",
      },
    ],
  },
  {
    title: "Queenstown Scenic Gondola Ride",
    description:
      "Take a scenic gondola ride to Bob's Peak for panoramic views of Queenstown and Lake Wakatipu.",
    city: "Queenstown",
    country: "New Zealand",
    region: "Otago",
    images: [
      "/images/tours/queenstown/gondola-ride.jpg",
      "/images/tours/queenstown/bobs-peak.jpg",
    ],
    duration: "2 hours",
    price: "$49",
    rating: 4.6,
    tags: ["Scenic", "Family Friendly", "Local Experience"],
    meetingPoint: {
      address: "Brecon Street, Queenstown 9300",
      coordinates: {
        latitude: -45.030677,
        longitude: 168.658529,
      },
      instructions:
        "Meet at the Skyline Queenstown base terminal on Brecon Street, a short walk from central Queenstown.",
      contactNumber: "+64 3 441 0101",
    },
    highlights: [
      "Panoramic views of Queenstown, Lake Wakatipu and the Remarkables mountain range",
      "Southern Hemisphere's steepest cable car lift",
      "Access to viewing platform and optional luge rides",
      "Restaurant and cafe with stunning views",
    ],
    inclusions: [
      "Round-trip gondola ride",
      "Access to the observation deck and viewing platforms",
      "Free Wifi at the top",
    ],
    exclusions: [
      "Optional activities like luge rides or mountain biking",
      "Food and beverages",
      "Souvenir photos",
    ],
    itinerary: [
      "Check in at Skyline Queenstown base",
      "Board gondola for scenic ascent (10 minutes)",
      "Free time at the summit to enjoy views and activities",
      "Optional dining at the restaurant or cafe (not included)",
      "Return gondola ride when ready",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before booked time. No refund for cancellations less than 24 hours in advance.",
    isHistorical: false,
    isRomantic: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "scenic",
    faqs: [
      {
        question: "Is the gondola wheelchair accessible?",
        answer:
          "Yes, the gondola is wheelchair accessible. Please inform us in advance if you require special assistance.",
      },
      {
        question: "Are there dining options at the top?",
        answer:
          "Yes, there is a restaurant and café at the top of Bob's Peak offering stunning views and a variety of food options.",
      },
      {
        question: "How long can I stay at the top?",
        answer:
          "Your gondola ticket allows you to stay as long as you like during operating hours, typically 9am to 9pm.",
      },
    ],
  },
];

export default queenstownTours;
