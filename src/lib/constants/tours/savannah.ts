import { Tour } from "@/lib/interfaces/services/tours";

export const savannahTours: Tour[] = [
  {
    title: "Historic Squares & Southern Architecture",
    description:
      "Stroll through Savannah's picture-perfect squares and tree-lined streets while learning about the city's fascinating history, architectural styles, and garden designs.",
    city: "Savannah",
    country: "United States",
    region: "Georgia",
    images: [
      "/images/tours/savannah/forsyth-park.jpg",
      "/images/tours/savannah/historic-homes.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.8,
    tags: ["History", "Architecture", "Gardens"],
    meetingPoint: {
      address: "Johnson Square, 2 E Bryan St, Savannah, GA 31401",
      coordinates: {
        latitude: 32.0807,
        longitude: -81.0915,
      },
      instructions:
        "Meet by the Nathanael Greene Monument in Johnson Square. Your guide will be holding a green umbrella with 'Savannah Tours' printed on it.",
      contactNumber: "+1 (912) 555-7890",
      contactEmail: "hello@savannahwalkingtours.com",
    },
    highlights: [
      "Explore 8-10 of Savannah's beautiful historic squares",
      "Learn about distinctive architectural styles from Federal to Victorian",
      "Discover the symbolism in Southern garden designs",
      "Visit iconic sites including Forsyth Park and the Mercer-Williams House",
    ],
    inclusions: [
      "Professional local guide with architecture expertise",
      "Small group experience (maximum 12 people)",
      "Bottled water",
      "Map of Savannah's historic district",
      "Special access to select historical garden courtyards",
    ],
    exclusions: [
      "Interior visits to historic homes (available as add-ons)",
      "Gratuities",
      "Transportation to/from meeting point",
      "Food and beverages beyond water",
    ],
    itinerary: [
      "9:00 AM - Meet at Johnson Square and introduction",
      "9:15 AM - Begin walking tour through the historic district",
      "9:45 AM - Visit Chippewa Square and discuss 'Forrest Gump' connections",
      "10:15 AM - Explore architectural features in the Historic District",
      "10:45 AM - Visit Madison Square and surrounding mansions",
      "11:15 AM - Walk through Forsyth Park with fountain photo opportunity",
      "11:45 AM - Conclude at Forsyth Park with recommendations for lunch",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before tour start time.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles at a leisurely pace with frequent stops. Most of the route is flat, but comfortable walking shoes are recommended.",
      },
      {
        question: "Does the tour operate in inclement weather?",
        answer:
          "Tours operate rain or shine. In case of light rain, we provide ponchos. For severe weather, we may modify the route to include more indoor components or offer to reschedule.",
      },
      {
        question: "Is photography allowed throughout the tour?",
        answer:
          "Yes, photography is encouraged throughout the tour! Your guide will point out the best photo opportunities and can assist with group photos. Some private homes may restrict photography of their interiors.",
      },
    ],
  },
  {
    title: "Bonaventure Cemetery After Hours",
    description:
      "Experience the hauntingly beautiful Bonaventure Cemetery at dusk when most visitors have departed, with exclusive access to areas normally closed to the public.",
    city: "Savannah",
    country: "United States",
    region: "Georgia",
    images: [
      "/images/tours/savannah/bonaventure-cemetery.jpg",
      "/images/tours/savannah/cemetery-statues.jpg",
    ],
    duration: "2 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cemetery", "Photography", "Gothic"],
    meetingPoint: {
      address:
        "Bonaventure Cemetery Main Gate, 330 Bonaventure Road, Savannah, GA 31404",
      coordinates: {
        latitude: 32.044,
        longitude: -81.0449,
      },
      instructions:
        "Meet at the main entrance gate to Bonaventure Cemetery. Your guide will be wearing Victorian-era clothing and carrying a lantern.",
      contactNumber: "+1 (912) 555-2468",
      contactEmail: "tours@bonaventurestories.com",
    },
    highlights: [
      "Atmospheric evening tour when the cemetery is at its most beautiful",
      "Access to sections normally closed to the public",
      "Visit the famous 'Bird Girl' statue location featured in 'Midnight in the Garden of Good and Evil'",
      "Expert historical commentary on notable graves and Victorian symbolism",
    ],
    inclusions: [
      "Professional guide with cemetery historical expertise",
      "Small group experience (maximum 10 people)",
      "Special after-hours access permit",
      "Lantern for each group member",
      "Transportation from downtown Savannah to the cemetery and back",
    ],
    exclusions: [
      "Gratuities",
      "Food and beverages",
      "Photography permits for commercial photography",
      "Personal memento items (available for purchase)",
    ],
    itinerary: [
      "5:30 PM - Pickup from downtown Savannah (optional)",
      "6:00 PM - Arrive at Bonaventure Cemetery and introduction",
      "6:15 PM - Begin walking tour through historic sections",
      "6:45 PM - Visit famous graves including Johnny Mercer and Conrad Aiken",
      "7:15 PM - Access exclusive non-public areas as the sun begins to set",
      "7:45 PM - Photography session in most atmospheric sections",
      "8:00 PM - Return to entrance and conclusion",
      "8:30 PM - Arrive back in downtown Savannah (if transportation option selected)",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
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
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "Is this a ghost tour?",
        answer:
          "While some ghostly legends may be mentioned, this is primarily a historical and artistic tour focusing on the cemetery's notable monuments, sculptures, and the stories of those interred there.",
      },
      {
        question: "Is it safe to visit the cemetery at dusk?",
        answer:
          "Yes, the tour is completely safe. We maintain a group setting at all times, paths are well-marked, and your guide carries additional lighting. Security personnel are also present in the cemetery.",
      },
      {
        question: "Can I bring my camera and tripod?",
        answer:
          "Absolutely! This tour is perfect for photography enthusiasts. Tripods are welcome, and your guide will point out the most photogenic monuments and best lighting angles. Flash photography is permitted as there will be no other visitors present.",
      },
    ],
  },
  {
    title: "Savannah Riverboat Cruise & Dinner",
    description:
      "Enjoy a scenic dinner cruise along the Savannah River aboard a historic riverboat, with live music and stunning views of the waterfront and city skyline.",
    city: "Savannah",
    country: "United States",
    region: "Georgia",
    images: [
      "/images/tours/savannah/riverboat-cruise.jpg",
      "/images/tours/savannah/dinner-cruise.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cruise", "Dinner", "Views"],
    meetingPoint: {
      address: "9 E River Street, Savannah, GA 31401",
      coordinates: {
        latitude: 32.0809,
        longitude: -81.0912,
      },
      instructions:
        "Meet at the Savannah Riverboat Cruises ticket booth on River Street. Please arrive 30 minutes before departure time.",
      contactNumber: "+1 (912) 232-6404",
      contactEmail: "info@savannahriverboat.com",
    },
    highlights: [
      "Cruise the Savannah River on an authentic paddlewheel riverboat",
      "Enjoy a fresh Southern-style buffet dinner with locally-sourced ingredients",
      "Live entertainment featuring jazz and Southern standards",
      "Spectacular views of Savannah's historic waterfront and Talmadge Bridge",
    ],
    inclusions: [
      "2-hour riverboat cruise",
      "Full buffet dinner",
      "Live entertainment",
      "Indoor climate-controlled dining areas and outdoor viewing decks",
      "Narrated historical points of interest",
    ],
    exclusions: [
      "Alcoholic beverages (available for purchase)",
      "Specialty desserts beyond the included dessert",
      "Gratuities",
      "Hotel pickup and drop-off",
      "Souvenir photos (available for purchase onboard)",
    ],
    itinerary: [
      "6:30 PM - Check-in and boarding begins",
      "7:00 PM - Riverboat departs from the dock",
      "7:15 PM - Welcome reception with captain's introduction",
      "7:30 PM - Dinner buffet opens",
      "8:00 PM - Live entertainment begins",
      "8:30 PM - Pass under the Talmadge Bridge with skyline views",
      "9:00 PM - Dessert service",
      "9:30 PM - Riverboat returns to dock",
      "10:00 PM - Disembarkation complete",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before cruise departure.",
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
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cruise",
    faqs: [
      {
        question: "What is included in the dinner?",
        answer:
          "The dinner includes a buffet-style meal featuring Southern cuisine staples like fried chicken, shrimp and grits, collard greens, and peach cobbler. Vegetarian options are available upon request.",
      },
      {
        question: "Is there a dress code for the cruise?",
        answer:
          "While there is no strict dress code, smart casual attire is recommended. Many guests opt for comfortable yet stylish clothing suitable for an evening on the water.",
      },
      {
        question: "Will the riverboat cruise in case of rain?",
        answer:
          "Yes, the cruise operates rain or shine. The riverboat has spacious indoor cabins with large windows, so you'll still enjoy beautiful views and a comfortable experience regardless of weather conditions.",
      },
    ],
  },
];

export default savannahTours;
