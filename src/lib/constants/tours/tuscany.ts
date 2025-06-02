import { Tour } from "@/lib/interfaces/services/tours";

export const tuscanyTours: Tour[] = [
  {
    title: "Chianti Wine Region Villa Experience",
    description:
      "Spend a day in the rolling hills of Chianti visiting family-owned vineyards, learning about wine production, and enjoying tastings paired with Tuscan cuisine in a historic villa setting.",
    city: "Chianti",
    country: "Italy",
    region: "Tuscany",
    images: [
      "/images/tours/tuscany/chianti-vineyard.jpg",
      "/images/tours/tuscany/wine-tasting.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Wine", "Countryside", "Gourmet"],
    meetingPoint: {
      address: "Piazza della Repubblica, 50123 Florence, Italy",
      coordinates: {
        latitude: 43.7719,
        longitude: 11.2558,
      },
      instructions:
        "Meet in front of the central column in Piazza della Repubblica. Your guide will be holding a sign with 'Tuscan Wine Tours' on it.",
      contactNumber: "+39 055 123 4567",
      contactEmail: "bookings@tuscanwinetours.com",
    },
    highlights: [
      "Visit three family-owned vineyards in the scenic Chianti Classico region",
      "Tour historic wine cellars dating back to the 16th century",
      "Enjoy a multi-course lunch at a historic villa overlooking vineyards",
      "Sample 12-15 premium wines including rare reserve vintages",
    ],
    inclusions: [
      "Transportation in luxury climate-controlled vehicle",
      "Professional sommelier guide",
      "All wine tastings (12-15 wines)",
      "Gourmet lunch with wine pairings",
      "Olive oil and balsamic vinegar tastings",
      "Bottle of premium Chianti Classico to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional wine purchases beyond tastings",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "9:30 AM - Departure from Florence",
      "10:15 AM - First vineyard visit with cellar tour and tasting",
      "11:45 AM - Second vineyard visit with focus on traditional methods",
      "1:00 PM - Gourmet lunch at historic villa with wine pairings",
      "3:00 PM - Third vineyard visit with premium reserve tastings",
      "4:30 PM - Olive oil and balsamic vinegar tasting",
      "5:30 PM - Return to Florence",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the tour. 50% refund if canceled 24-72 hours before. No refund for cancellations less than 24 hours before scheduled departure.",
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
    isLuxury: true,
    isArtOrMusic: false,
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
        question: "How many wineries do we visit?",
        answer:
          "The tour includes visits to 3 different wineries, each offering a unique perspective on Tuscan winemaking traditions. You'll taste approximately 12 different wines throughout the day.",
      },
      {
        question: "Is transportation provided?",
        answer:
          "Yes, the tour includes luxury transportation in a climate-controlled vehicle from Florence to all vineyards and back. Our professional drivers are familiar with the scenic backroads of Chianti.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, and gluten-free options with advance notice. Please inform us of any special requirements when booking.",
      },
    ],
  },
  {
    title: "Medieval Hill Towns of Tuscany",
    description:
      "Explore the enchanting walled towns of San Gimignano, Monteriggioni, and Volterra with their preserved medieval architecture, artisan workshops, and spectacular countryside views.",
    city: "San Gimignano",
    country: "Italy",
    region: "Tuscany",
    images: [
      "/images/tours/tuscany/san-gimignano.jpg",
      "/images/tours/tuscany/medieval-streets.jpg",
    ],
    duration: "10 hours",
    price: "$165",
    rating: 4.8,
    tags: ["Medieval", "Architecture", "History"],
    meetingPoint: {
      address: "Santa Maria Novella Train Station, 50123 Florence, Italy",
      coordinates: {
        latitude: 43.7764,
        longitude: 11.2478,
      },
      instructions:
        "Meet outside the main entrance of Santa Maria Novella train station, near the taxi stand. Look for your guide holding a green 'Medieval Tuscany' sign.",
      contactNumber: "+39 055 987 6543",
      contactEmail: "info@tuscanytowntours.it",
    },
    highlights: [
      "Visit three perfectly preserved medieval towns in one day",
      "Climb the famous towers of San Gimignano for breathtaking views",
      "Explore Etruscan ruins and medieval streets in Volterra",
      "See the picturesque fortress walls of Monteriggioni",
    ],
    inclusions: [
      "Transportation in air-conditioned minivan",
      "Expert local guide with history specialization",
      "Entrance fees to San Gimignano towers",
      "Guided walking tours of each town",
      "Traditional lunch at a family-run trattoria",
      "Wine tasting of Vernaccia di San Gimignano",
    ],
    exclusions: [
      "Additional food and drinks beyond included lunch",
      "Optional museum entries",
      "Personal expenses and souvenirs",
      "Gratuities",
    ],
    itinerary: [
      "8:30 AM - Departure from Florence",
      "9:45 AM - Arrive at San Gimignano and guided tour",
      "11:15 AM - Free time to explore San Gimignano",
      "12:30 PM - Traditional Tuscan lunch with wine tasting",
      "2:00 PM - Drive to Volterra",
      "2:30 PM - Guided tour of Volterra",
      "4:00 PM - Visit to Monteriggioni fortress town",
      "5:00 PM - Return journey to Florence",
      "6:30 PM - Arrival in Florence",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is there a lot of walking on this tour?",
        answer:
          "Yes, the hill towns feature cobblestone streets with some steep sections and stairs. We walk approximately 4km in total throughout the day at a leisurely pace with plenty of breaks.",
      },
      {
        question: "Are these towns crowded with tourists?",
        answer:
          "San Gimignano can be busy during peak season, but we time our visit to avoid the largest crowds. Volterra and Monteriggioni receive fewer visitors, offering a more authentic experience of medieval Tuscany.",
      },
      {
        question: "What should I bring on this tour?",
        answer:
          "Comfortable walking shoes are essential due to the cobblestone streets and hills. We also recommend bringing a hat, sunscreen, water bottle, and a light jacket as temperatures can vary between towns at different elevations.",
      },
    ],
  },
  {
    title: "Tuscan Cooking Class & Market Tour",
    description:
      "Join a local chef for a hands-on cooking class in a rustic farmhouse, starting with a visit to the local market to select fresh ingredients before preparing traditional Tuscan dishes.",
    city: "Florence",
    country: "Italy",
    region: "Tuscany",
    images: [
      "/images/tours/tuscany/cooking-class.jpg",
      "/images/tours/tuscany/market-tour.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Cooking", "Local Cuisine", "Hands-On"],
    meetingPoint: {
      address:
        "Mercato Centrale, Piazza del Mercato Centrale, 50123 Florence, Italy",
      coordinates: {
        latitude: 43.7773,
        longitude: 11.2543,
      },
      instructions:
        "Meet at the main entrance of Mercato Centrale (Central Market) on the ground floor. Your chef will be waiting with a 'Tuscan Cooking Class' sign.",
      contactNumber: "+39 055 234 5678",
      contactEmail: "cook@tuscancuisine.com",
    },
    highlights: [
      "Shop for fresh ingredients at Florence's historic Mercato Centrale",
      "Learn authentic Tuscan cooking techniques from a professional chef",
      "Prepare a complete four-course Italian meal from scratch",
      "Enjoy your creations for lunch with paired local wines",
    ],
    inclusions: [
      "Market tour with chef",
      "All ingredients and cooking equipment",
      "Hands-on instruction for all courses",
      "Recipes to take home",
      "Four-course meal with wine pairings",
      "Complimentary apron souvenir",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Additional beverages beyond included wine",
      "Gratuities",
    ],
    itinerary: [
      "9:30 AM - Meet at Mercato Centrale",
      "9:45 AM - Guided market tour and ingredient selection",
      "10:30 AM - Transfer to cooking school (10 minute walk)",
      "10:45 AM - Begin cooking class with antipasti preparation",
      "11:30 AM - Learn handmade pasta techniques",
      "12:15 PM - Prepare main course and dessert",
      "1:15 PM - Enjoy your prepared meal with wine",
      "2:30 PM - Class concludes with recipe booklet distribution",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before class.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
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
        question: "Do I need prior cooking experience?",
        answer:
          "No prior experience is necessary! The class is designed for all skill levels, and our chef will guide you through each step of the process.",
      },
      {
        question: "What dishes will we prepare?",
        answer:
          "The menu varies by season but typically includes homemade pasta, seasonal vegetable dishes, and traditional desserts like tiramisu or panna cotta. Vegetarian options are available upon request.",
      },
      {
        question: "Is this class suitable for children?",
        answer:
          "Yes, we welcome participants of all ages! Children under 12 must be accompanied by an adult. We offer special child-friendly tasks appropriate for younger chefs.",
      },
    ],
  },
  {
    title: "Florence Art & Architecture Walking Tour",
    description:
      "Discover Florence's artistic heritage with a guided walking tour of the city's most iconic landmarks, including the Duomo, Uffizi Gallery, and Ponte Vecchio, while learning about the Renaissance masters.",
    city: "Florence",
    country: "Italy",
    region: "Tuscany",
    images: [
      "/images/tours/tuscany/florence-duomo.jpg",
      "/images/tours/tuscany/uffizi-gallery.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Art", "Renaissance", "Architecture"],
    meetingPoint: {
      address: "Piazza della Repubblica, 50123 Florence, Italy",
      coordinates: {
        latitude: 43.7719,
        longitude: 11.2547,
      },
      instructions:
        "Meet at the central column in Piazza della Repubblica. Your guide will be holding a blue umbrella with 'Florence Art Tours' printed on it.",
      contactNumber: "+39 055 876 5432",
      contactEmail: "art@florencetours.it",
    },
    highlights: [
      "Expert-led tour of Florence's iconic Renaissance landmarks",
      "Visit the exterior of the magnificent Florence Cathedral and Brunelleschi's Dome",
      "Stroll through Piazza della Signoria, an open-air sculpture museum",
      "Learn about the Medici family and their influence on Florentine art",
    ],
    inclusions: [
      "Professional art historian guide",
      "Small group experience (maximum 8 people)",
      "Audio headsets to hear guide clearly",
      "Art history booklet",
      "Map of Florence's artistic highlights",
    ],
    exclusions: [
      "Entrance fees to museums (this is an exterior-focused tour)",
      "Food and beverages",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet in Piazza della Repubblica",
      "9:15 AM - Visit to Duomo, Baptistery and Giotto's Bell Tower",
      "10:00 AM - Walk through medieval streets to Piazza della Signoria",
      "10:30 AM - Explore the exterior of Palazzo Vecchio and outdoor sculptures",
      "11:00 AM - Walk to Ponte Vecchio with commentary on its history",
      "11:30 AM - Explore the exterior of Pitti Palace and discussion of Medici patronage",
      "12:00 PM - Tour conclusion near the Uffizi Gallery",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before tour or no-shows.",
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
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Do we enter any museums on this tour?",
        answer:
          "This tour focuses on outdoor landmarks and does not include museum entry. However, we can arrange a separate visit to the Uffizi Gallery or Accademia Gallery if desired.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We tailor our stories and pace to engage visitors of all ages, making it enjoyable for children as well.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2 km (1.2 miles) of walking at a gentle pace with frequent stops. Florence's historic center is relatively flat, though some streets are cobbled.",
      },
    ],
  },
];

export default tuscanyTours;
