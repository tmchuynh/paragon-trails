import { Tour } from "@/lib/interfaces/services/tours";

export const glasgowTours: Tour[] = [
  {
    title: "Glasgow Music Heritage & Secret Venues",
    description:
      "Explore Glasgow's legendary music scene with a local musician, visiting iconic venues, hidden underground clubs, and famous recording studios that shaped genres from post-punk to contemporary indie.",
    city: "Glasgow",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/glasgow/barrowland.jpg",
      "/images/tours/glasgow/king-tuts.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Music", "Nightlife", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "King Tut's Wah Wah Hut, 272a St Vincent Street, Glasgow G2 5RL",
      coordinates: {
        latitude: 55.8646,
        longitude: -4.2686,
      },
      instructions:
        "Meet outside the entrance to King Tut's. Your guide will be wearing a vintage band t-shirt and carrying a guitar case.",
      contactNumber: "+44 141 555 1234",
      contactEmail: "musictrail@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Visit legendary venues like Barrowland Ballroom and King Tut's where Oasis was discovered",
      "Explore hidden basement venues where local bands perform",
      "See famous recording studios used by Simple Minds, Franz Ferdinand, and more",
      "Hear live acoustic performances by your musician guide",
      "Learn about Glasgow's influence on global music from punk to present day",
    ],

    inclusions: [
      "Professional musician guide",
      "Entry to all venues (subject to availability)",
      "Mini live performance at select locations",
      "Exclusive music venue access",
      "Glasgow music history booklet",
      "Drink at final venue",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Additional food and drinks",
      "Concert tickets (though discounts may be available)",
      "Gratuities (optional)",
      "Personal expenses",
    ],

    itinerary: [
      "18:00 - Meet at King Tut's Wah Wah Hut for introduction to Glasgow's music scene",
      "18:30 - Visit to Barrowland Ballroom with stories of legendary performances",
      "19:15 - Explore hidden basement venues in the Merchant City",
      "19:45 - Visit former Apollo Theatre site with tales of iconic shows",
      "20:15 - Tour of CaVa Studios with behind-the-scenes production insights",
      "20:45 - Nice N Sleazy bar with acoustic performance by your guide",
      "21:45 - Final drink and Q&A about Glasgow music at a local music venue",
      "22:00 - Tour concludes with recommendations for live music that night",
    ],

    faqs: [
      {
        question: "Will we hear live music during the tour?",
        answer:
          "The daytime tour includes brief acoustic performances by your guide at select locations. Evening tours typically include a stop at a venue with live music, though specific performances vary by date.",
      },
      {
        question: "Are there age restrictions for this tour?",
        answer:
          "This tour is designed for adults and older teens. Some venues may have age restrictions, so please check with us if you plan to bring younger guests.",
      },
    ],
  },
  {
    title: "Charles Rennie Mackintosh Architectural Trail",
    description:
      "Discover the revolutionary designs of Glasgow's most celebrated architect with exclusive access to Mackintosh buildings, including private areas of the Glasgow School of Art and House for an Art Lover.",
    city: "Glasgow",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/glasgow/mackintosh-school.jpg",
      "/images/tours/glasgow/house-for-art-lover.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Design", "Art Nouveau"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "The Lighthouse, 11 Mitchell Lane, Glasgow G1 3NU",
      coordinates: {
        latitude: 55.8605,
        longitude: -4.2548,
      },
      instructions:
        "Meet in the entrance foyer of The Lighthouse, Scotland's Centre for Design and Architecture. Your guide will be holding a Mackintosh-style rose symbol.",
      contactNumber: "+44 141 555 2345",
      contactEmail: "mackintosh@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Exclusive access to Mackintosh buildings including private areas",
      "Guided tour of the House for an Art Lover with design insights",
      "Visit the iconic Willow Tea Rooms with original furnishings",
      "Explore Mackintosh exhibits at The Lighthouse with panoramic city views",
      "See original Mackintosh furniture and design elements up close",
    ],

    inclusions: [
      "Expert architectural guide specialized in Mackintosh",
      "Entry to all Mackintosh buildings on the itinerary",
      "Special access to private areas not open to general public",
      "Transportation between venues",
      "Tea and scones at the Willow Tea Rooms",
      "Mackintosh design booklet to take home",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Personal purchases at gift shops",
      "Gratuities (optional)",
    ],

    itinerary: [
      "10:00 - Meet at The Lighthouse for introduction to Mackintosh's work",
      "10:30 - Climb the Mackintosh Tower for Glasgow panorama",
      "11:00 - Transport to Glasgow School of Art for exterior visit and history",
      "11:45 - Visit Scotland Street School Museum with insights into educational design",
      "12:30 - Transport to Willow Tea Rooms",
      "13:00 - Tea and scones at the Willow Tea Rooms with discussion of interior design",
      "14:00 - Transport to House for an Art Lover",
      "14:15 - Extensive tour of House for an Art Lover including private areas",
      "15:00 - Tour concludes at House for an Art Lover with time to explore gardens",
    ],

    faqs: [
      {
        question: "What makes Mackintosh's work so significant?",
        answer:
          "Charles Rennie Mackintosh was a pioneering designer whose work bridged Art Nouveau and Modernism. His distinctive style combining elegant simplicity with complex detail influenced architecture and design worldwide. Glasgow contains his most complete and best-preserved works.",
      },
      {
        question: "Can we take photos inside the buildings?",
        answer:
          "Photography is allowed in most areas, but some locations may have restrictions to protect artworks or privacy. Your guide will inform you of any limitations during the tour.",
      },
    ],
  },
  {
    title: "Glasgow Street Art & Urban Culture",
    description:
      "Explore Glasgow's vibrant street art scene with a local artist, visiting murals, graffiti hotspots, and community projects that reflect the city's creative spirit and social issues.",
    city: "Glasgow",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/glasgow/street-art.jpg",
      "/images/tours/glasgow/mural-trail.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Art", "Culture", "Urban"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Gallery of Modern Art, Royal Exchange Square, Glasgow G1 3AH",
      coordinates: {
        latitude: 55.8604,
        longitude: -4.2519,
      },
      instructions:
        "Meet at the Duke of Wellington statue (the one with the traffic cone on his head) outside the Gallery of Modern Art. Your guide will be carrying a sketchbook.",
      contactNumber: "+44 141 555 3456",
      contactEmail: "streetart@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-24",
      "2023-12-31",
      "2024-01-07",
      "2024-01-14",
      "2024-01-21",
      "2024-01-28",
      "2024-02-04",
      "2024-02-11",
      "2024-02-18",
      "2024-02-25",
    ],

    highlights: [
      "Explore the famous City Centre Mural Trail with insider knowledge",
      "Meet local street artists at work (when available)",
      "Learn about different street art techniques and styles",
      "Discover the stories and social messages behind major artworks",
      "Visit the Strathclyde University area with its concentration of urban art",
    ],

    inclusions: [
      "Local artist guide",
      "Street art map of Glasgow",
      "Street art photography tips",
      "Small sketchbook and pencil set",
      "Coffee or tea at a local street art café",
      "Discount coupon for local art supply store",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Additional food and drinks",
      "Spray paint or materials for creating street art",
      "Gratuities (optional)",
    ],

    itinerary: [
      "14:00 - Meet at the Duke of Wellington statue for introduction to Glasgow's street art scene",
      "14:15 - Begin exploring the City Centre Mural Trail",
      "14:45 - Visit the Strathclyde University area murals with political themes",
      "15:30 - Coffee break at a café decorated by local street artists",
      "15:45 - Continue to the Merchant City area to see larger installations",
      "16:15 - Visit to community art spaces in the East End",
      "16:45 - Discussion on street art techniques and preservation",
      "17:00 - Tour concludes with recommendations for further exploration",
    ],

    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage all ages with interactive storytelling about the artists and their work.",
      },
      {
        question: "Can we participate in any street art activities?",
        answer:
          "While this tour focuses on observation and appreciation, we can arrange workshops for groups interested in learning street art techniques. Please inquire when booking.",
      },
    ],
  },
  {
    title: "Glasgow Food & Drink Experience",
    description:
      "Savor Glasgow's culinary delights with a guided food tour through local markets, traditional pubs, and contemporary eateries, sampling everything from haggis to craft beers.",
    city: "Glasgow",
    country: "United Kingdom",
    region: "Scotland",
    images: [
      "/images/tours/glasgow/food-market.jpg",
      "/images/tours/glasgow/craft-beer.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Food", "Culinary", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Buchanan Street Steps, Glasgow G1 2FF",
      coordinates: {
        latitude: 55.8625,
        longitude: -4.2531,
      },
      instructions:
        "Meet at the bottom of the Buchanan Street steps. Your guide will be holding a 'Glasgow Food Tour' sign and wearing a tartan scarf.",
      contactNumber: "+44 141 555 4567",
      contactEmail: "foodtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Sample authentic Scottish cuisine from traditional to contemporary",
      "Visit local food markets and meet artisanal producers",
      "Try modern interpretations of Scottish classics",
      "Taste craft beers from Glasgow's thriving microbrewery scene",
      "Learn about the history of Scottish cuisine and its cultural significance",
    ],

    inclusions: [
      "Food tastings at 6-7 different establishments",
      "Three drink pairings (including craft beer)",
      "Culinary expert guide",
      "Glasgow food map highlighting local specialties",
      "Recipe cards for select Scottish dishes",
      "Discount vouchers for participating restaurants",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Additional food and drinks beyond included tastings",
      "Gratuities (optional)",
      "Personal purchases",
    ],

    itinerary: [
      "12:00 - Meet at Buchanan Street Steps for introduction to Glasgow's food scene",
      "12:15 - Visit to traditional Scottish bakery for freshly baked treats",
      "12:45 - Sample authentic haggis at a historic pub with whisky pairing",
      "13:30 - Visit to artisanal cheese shop with local produce tasting",
      "14:00 - Craft beer tasting at microbrewery with brewery tour",
      "14:45 - Visit award-winning modern Scottish restaurant for contemporary dishes",
      "15:30 - Sweet treats at a specialty dessert café",
      "16:00 - Tour concludes with final food discussion and recommendations",
    ],

    faqs: [
      {
        question: "Are vegetarian or vegan options available?",
        answer:
          "Yes, we can accommodate dietary restrictions including vegetarian and vegan preferences. Please inform us at the time of booking so we can tailor the food stops accordingly.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 48 hours in advance to ensure availability and allow us to customize your experience based on dietary needs.",
      },
    ],
  },
];

export default glasgowTours;
