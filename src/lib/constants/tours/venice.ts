import { Tour } from "@/lib/interfaces/services/tours";

export const veniceTours: Tour[] = [
  {
    title: "Grand Canal Gondola Serenade",
    description:
      "Experience the romance of Venice with a private gondola ride along the Grand Canal and smaller waterways, accompanied by a traditional Italian serenade from your personal gondolier.",
    city: "Venice",
    country: "Italy",
    region: "Veneto",
    images: [
      "/images/tours/venice/gondola-grand-canal.jpg",
      "/images/tours/venice/gondola-serenade.jpg",
    ],
    duration: "45 minutes",
    price: "$85",
    rating: 4.8,
    tags: ["Romantic", "Cultural", "Water"],
    meetingPoint: {
      address: "Campo Santa Maria del Giglio, 30124 Venice, Italy",
      coordinates: {
        latitude: 45.4312,
        longitude: 12.3347,
      },
      instructions:
        "Meet at the gondola station near the Hotel Gritti Palace. Your gondolier will be holding a sign with 'Serenade Tour' written on it.",
      contactNumber: "+39 041 522 8637",
      contactEmail: "bookings@venicegondolatours.com",
    },
    highlights: [
      "Private gondola ride through the Grand Canal and romantic minor canals",
      "Live serenade by your gondolier singing traditional Italian songs",
      "Pass under the iconic Rialto Bridge and by historic palazzos",
      "Perfect photo opportunities of Venice from the water perspective",
    ],
    inclusions: [
      "Private gondola ride (up to 6 passengers)",
      "Professional gondolier",
      "Live musical serenade",
      "Commentary on historical buildings you pass",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities",
      "Additional time beyond scheduled 45 minutes",
    ],
    itinerary: [
      "5:45 PM - Meet at Campo Santa Maria del Giglio gondola station",
      "6:00 PM - Board your private gondola and begin the journey",
      "6:10 PM - Float along minor canals while enjoying the serenade",
      "6:25 PM - Enter the Grand Canal for magnificent views",
      "6:35 PM - Pass under the Rialto Bridge",
      "6:45 PM - Return to the starting point and disembark",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled between 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled departure.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What happens in case of rain?",
        answer:
          "Gondolas operate in light rain (ponchos can be provided). In case of heavy rain or adverse weather, we offer the option to reschedule or receive a full refund.",
      },
      {
        question: "Can we bring our own music or champagne?",
        answer:
          "Yes, you're welcome to bring your own beverages or special music requests. Please let us know in advance if you have any special requirements for your gondola experience.",
      },
      {
        question: "Are the gondolas shared with other tourists?",
        answer:
          "No, this is a private gondola experience for your party only (maximum 6 people per gondola). For larger groups, we can arrange multiple gondolas to travel together.",
      },
    ],
  },
  {
    title: "Secret Venice Walking Tour & Doge's Palace",
    description:
      "Discover hidden Venice with a knowledgeable local guide, exploring atmospheric backstreets and secret passages, followed by skip-the-line access to the magnificent Doge's Palace.",
    city: "Venice",
    country: "Italy",
    region: "Veneto",
    images: [
      "/images/tours/venice/hidden-alleyways.jpg",
      "/images/tours/venice/doges-palace.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Historical", "Walking", "Architecture"],
    meetingPoint: {
      address: "Campo San Bartolomeo, by the Goldoni Statue, 30124 Venice",
      coordinates: {
        latitude: 45.4378,
        longitude: 12.3368,
      },
      instructions:
        "Meet by the statue of Carlo Goldoni in Campo San Bartolomeo, near the Rialto Bridge. Your guide will be holding a yellow umbrella with 'Hidden Venice Tours' printed on it.",
      contactNumber: "+39 041 277 0562",
      contactEmail: "info@secretvenicetours.com",
    },
    highlights: [
      "Explore atmospheric backstreets and hidden squares most tourists never see",
      "Skip the long lines at Doge's Palace with priority access",
      "Cross the infamous Bridge of Sighs and learn about its dark history",
      "Discover the secret passages and council chambers of Venetian government",
    ],
    inclusions: [
      "Professional local guide with expertise in Venetian history",
      "Skip-the-line entrance to Doge's Palace",
      "Headsets to hear the guide clearly",
      "Small group size (maximum 12 people)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities",
      "St. Mark's Basilica entrance (separate tour available)",
    ],
    itinerary: [
      "9:45 AM - Meet at Campo San Bartolomeo",
      "10:00 AM - Begin walking tour through hidden Venice neighborhoods",
      "10:45 AM - Visit Marco Polo's house and learn about Venetian merchants",
      "11:15 AM - Explore historic courtyard houses and secret passages",
      "11:45 AM - Arrive at Doge's Palace and skip the entrance line",
      "12:00 PM - Tour the magnificent state rooms and council chambers",
      "12:45 PM - Cross the Bridge of Sighs and visit the historic prison cells",
      "1:00 PM - Tour conclusion in St. Mark's Square with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3 km (2 miles) of walking, including some steps and bridges. Venice is a pedestrian city, so comfortable walking shoes are strongly recommended.",
      },
      {
        question: "Is photography allowed in Doge's Palace?",
        answer:
          "Yes, photography is permitted in most areas of Doge's Palace, except in specially marked rooms. Flash photography, tripods, and selfie sticks are not allowed.",
      },
      {
        question: "What happens if St. Mark's Square is flooded?",
        answer:
          "Venice occasionally experiences 'acqua alta' (high water) when tides are exceptionally high. If this occurs, our guide will modify the route while still covering all main highlights. Temporary elevated walkways are installed in St. Mark's Square during flooding events.",
      },
    ],
  },
  {
    title: "Murano Glass & Burano Lace Islands Tour",
    description:
      "Visit the famous Venetian islands of Murano and Burano on a half-day guided boat tour, watching master glass blowers at work and exploring colorful fishermen's houses and traditional lace workshops.",
    city: "Venice",
    country: "Italy",
    region: "Veneto",
    images: [
      "/images/tours/venice/murano-glass.jpg",
      "/images/tours/venice/burano-colorful.jpg",
    ],
    duration: "5 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Artisan", "Islands", "Cultural"],
    meetingPoint: {
      address: "Riva degli Schiavoni, near the Hotel Danieli, 30122 Venice",
      coordinates: {
        latitude: 45.4336,
        longitude: 12.3419,
      },
      instructions:
        "Meet at the waterfront near Hotel Danieli, by the vaporetto stop. Your guide will be holding a blue sign with 'Islands Tour' written on it.",
      contactNumber: "+39 041 852 1550",
      contactEmail: "bookings@veniceislandtours.com",
    },
    highlights: [
      "Watch master glassblowers create incredible works of art on Murano",
      "Visit a traditional glass factory with demonstrations of centuries-old techniques",
      "Explore the colorful fishermen's houses of Burano, perfect for photography",
      "See skilled lacemakers continuing the island's famous tradition",
    ],
    inclusions: [
      "Round-trip boat transportation from Venice",
      "Professional guide throughout the tour",
      "Glass blowing demonstration on Murano",
      "Lace-making demonstration on Burano",
      "Free time for shopping and exploration on each island",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities",
      "Optional purchases at glass and lace shops",
    ],
    itinerary: [
      "1:45 PM - Meet at Riva degli Schiavoni departure point",
      "2:00 PM - Depart Venice by private boat",
      "2:30 PM - Arrive at Murano and visit a glass factory",
      "3:15 PM - Free time to explore Murano and shop for authentic glass items",
      "3:45 PM - Boat journey to Burano island",
      "4:15 PM - Guided walk through colorful Burano with lace demonstration",
      "5:00 PM - Free time to explore Burano's picturesque streets",
      "6:00 PM - Return boat to Venice",
      "6:30 PM - Arrive back at the original departure point",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before departure.",
    isHistorical: true,
    isRomantic: true,
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
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "Will there be pressure to buy glass or lace products?",
        answer:
          "While you'll visit authentic workshops where items are available for purchase, there is absolutely no obligation to buy. Your guide ensures a pressure-free experience while still giving you access to high-quality, authentic local crafts.",
      },
      {
        question: "How much free time do we get on each island?",
        answer:
          "You'll have approximately 45 minutes of free time on each island to explore at your own pace, take photos, or shop. The guided portions ensure you don't miss the most important sights.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children often enjoy watching the glass blowing demonstrations and seeing the colorful houses of Burano. Be aware that glass factories have hot furnaces, so young children must be closely supervised.",
      },
    ],
  },
  {
    title: "Venetian Food Tour & Cicchetti Tasting",
    description:
      "Sample the authentic flavors of Venice with a guided culinary walking tour, visiting traditional bacari wine bars to taste cicchetti (Venetian tapas) paired with local wines and prosecco.",
    city: "Venice",
    country: "Italy",
    region: "Veneto",
    images: [
      "/images/tours/venice/cicchetti.jpg",
      "/images/tours/venice/bacari-wine-bar.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Food", "Wine", "Local Experience"],
    meetingPoint: {
      address: "Campo San Giacomo di Rialto, by the church, 30125 Venice",
      coordinates: {
        latitude: 45.4382,
        longitude: 12.3358,
      },
      instructions:
        "Meet in front of the San Giacomo di Rialto church (the oldest in Venice). Your guide will be holding a wine glass with a red ribbon.",
      contactNumber: "+39 041 523 7728",
      contactEmail: "taste@venicefoodtours.com",
    },
    highlights: [
      "Visit 5-6 authentic bacari (wine bars) where locals eat and drink",
      "Sample 10-12 different cicchetti (Venetian small plates and finger foods)",
      "Taste regional wines including Prosecco, Valpolicella, and Amarone",
      "Cross the Grand Canal by gondola traghetto like a local",
    ],
    inclusions: [
      "Expert food guide with knowledge of Venetian cuisine",
      "All food tastings (equivalent to a full meal)",
      "Wine pairings at each stop (about 5 glasses in total)",
      "Gondola traghetto crossing of the Grand Canal",
      "Small group size (maximum 10 people)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond the included tastings",
      "Gratuities",
      "Souvenir recipes (available for purchase)",
    ],
    itinerary: [
      "5:45 PM - Meet at Campo San Giacomo di Rialto",
      "6:00 PM - Historical introduction and first bacaro visit with tastings",
      "6:45 PM - Cross the Grand Canal by traghetto to explore Cannaregio district",
      "7:00 PM - Second and third bacari with various cicchetti and wine pairings",
      "7:45 PM - Visit to historic market areas and specialty food shops",
      "8:15 PM - Final bacari visits with dessert-style cicchetti and sweet wine",
      "9:00 PM - Tour conclusion with recommendations for dinner or further exploration",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour.",
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
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of cicchetti which may include baccalà mantecato (whipped salt cod), sarde in saor (sweet and sour sardines), polpette (meatballs), various crostini, and seasonal specialties. The selection varies based on what's fresh and available that day.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarians and most dietary restrictions. Please note that seafood is a prominent part of Venetian cuisine, but alternatives can be arranged. Gluten-free options are limited but possible.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2km (1.2 miles) at a leisurely pace with frequent stops for food and drinks. There are several bridges to cross with steps, as is typical in Venice.",
      },
    ],
  },
];

export default veniceTours;
