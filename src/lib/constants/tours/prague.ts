import { Tour } from "@/lib/interfaces/services/tours";

export const pragueTours: Tour[] = [
  {
    title: "Prague Castle After Hours",
    description:
      "Experience Prague's magnificent castle complex after the crowds have departed, with private access to areas normally closed to the public and insights from a historian specializing in Czech royal history.",
    city: "Prague",
    country: "Czech Republic",
    region: "Bohemia",
    images: [
      "/images/tours/prague/castle-night.jpg",
      "/images/tours/prague/st-vitus-cathedral.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Castle", "Evening Tour", "Architecture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Second Courtyard of Prague Castle, Prague 1",
      coordinates: {
        latitude: 50.0911,
        longitude: 14.3999,
      },
      instructions:
        "Meet in front of St. Vitus Cathedral in the Second Courtyard of Prague Castle. Your guide will be holding a lantern with the Paragon Trails logo.",
      contactNumber: "+420 777 123 456",
      contactEmail: "praguecastle@paragontrails.com",
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
      "Access Prague Castle after regular closing hours with dramatically fewer visitors",
      "Visit normally restricted areas of the Old Royal Palace including medieval halls",
      "Explore St. Vitus Cathedral with special evening lighting highlighting Gothic details",
      "Enter the private residences in Golden Lane typically closed to the public",
      "Enjoy panoramic night views of illuminated Prague from castle viewpoints",
    ],

    inclusions: [
      "Special after-hours access to Prague Castle complex",
      "Expert historian guide specializing in Czech royal history",
      "Entry to normally restricted areas not on regular tours",
      "Glass of Czech sparkling wine or non-alcoholic alternative",
      "Commemorative Prague Castle night tour certificate",
      "All castle admission fees",
      "Exclusive souvenir booklet with historical castle images",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Transportation to Prague Castle",
      "Food and additional beverages",
      "Gratuities (optional)",
      "Professional photography (available for purchase)",
    ],

    itinerary: [
      "19:00 - Meet at the Second Courtyard entrance for security clearance",
      "19:15 - Introduction to Prague Castle's 1,000-year history",
      "19:30 - Private visit to St. Vitus Cathedral with special evening lighting",
      "20:00 - Explore normally restricted areas of the Old Royal Palace",
      "20:30 - Visit to St. George's Basilica with medieval history discussion",
      "20:50 - Walk along Golden Lane with access to private residences",
      "21:15 - Panoramic view of illuminated Prague from castle viewpoint",
      "21:30 - Toast with Czech sparkling wine and certificate presentation",
      "22:00 - Tour conclusion at castle exit",
    ],

    faqs: [
      {
        question: "What makes this tour different from regular castle visits?",
        answer:
          "Our evening access provides a dramatically different atmosphere with special lighting that highlights architectural details, near-empty halls that are usually crowded, and access to normally restricted areas including parts of the Old Royal Palace and Golden Lane houses.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages with fascinating stories and interactive elements. However, please note that some areas may have limited accessibility for strollers.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "We recommend comfortable walking shoes as the castle complex includes cobblestone courtyards and stairs. Evening temperatures can be cool, especially in spring and fall, so layers are advisable. The castle maintains a respectful atmosphere, so modest attire is appreciated.",
      },
    ],
  },
  {
    title: "Prague Microbrewery Exploration",
    description:
      "Discover Prague's celebrated beer culture beyond the famous brands with visits to local microbreweries, learning traditional Czech brewing methods and tasting unique small-batch brews with a certified beer expert.",
    city: "Prague",
    country: "Czech Republic",
    region: "Bohemia",
    images: [
      "/images/tours/prague/microbrewery.jpg",
      "/images/tours/prague/beer-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Beer", "Culinary", "Local"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Letná Beer Garden, Letenské sady, Prague 7",
      coordinates: {
        latitude: 50.0979,
        longitude: 14.4178,
      },
      instructions:
        "Meet at the main entrance to Letná Beer Garden. Your guide will be wearing a beer-themed t-shirt and holding a Paragon Trails sign.",
      contactNumber: "+420 777 234 567",
      contactEmail: "praguebeers@paragontrails.com",
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
      "Visit 3-4 authentic Prague microbreweries away from typical tourist routes",
      "Taste 10-12 different craft beer styles from traditional Czech lagers to experimental brews",
      "Learn about centuries-old brewing traditions and modern Czech craft beer innovations",
      "Meet local brewmasters and see behind-the-scenes brewing operations",
      "Sample traditional Czech beer snacks paired with specific beer styles",
    ],

    inclusions: [
      "Beer expert guide with professional brewing knowledge",
      "All beer tastings (10-12 samples of approximately 0.2L each)",
      "Traditional Czech beer snacks at each location",
      "Behind-the-scenes access at select breweries",
      "Prague beer map and tasting notes booklet",
      "Czech brewing history overview",
      "Souvenir beer glass",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food beyond included beer snacks",
      "Additional beers beyond included tastings",
      "Public transportation tickets between some venues (approx. €1-2)",
      "Gratuities (optional)",
    ],

    itinerary: [
      "16:00 - Meet at Letná Beer Garden for introduction to Czech beer culture",
      "16:15 - First brewery visit with behind-the-scenes production tour",
      "17:00 - Guided tasting of 3-4 different beer styles with snack pairing",
      "17:45 - Walk or short tram ride to second microbrewery location",
      "18:00 - Second brewery visit focusing on traditional Czech lagers",
      "18:45 - Traditional beer snacks with brewing history discussion",
      "19:15 - Short walk to final brewery location in historic building",
      "19:30 - Final brewery visit featuring experimental craft beers",
      "20:15 - Tasting competition with prizes and brewing Q&A session",
      "20:45 - Tour wrap-up with recommendations for additional beer venues",
      "21:00 - Tour concludes at final brewery",
    ],

    faqs: [
      {
        question: "How many beer samples are included?",
        answer:
          "The tour includes tastings of 10-12 different craft beers (approximately 0.2L each) from 3-4 different microbreweries, along with traditional Czech beer snacks to complement the flavors.",
      },
      {
        question: "Can I join if I don't drink alcohol?",
        answer:
          "Absolutely! We can provide non-alcoholic alternatives such as traditional Czech soft drinks or non-alcoholic beers. Just let us know in advance, and we'll ensure you have a great experience.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves approximately 2-3 km (1.2-1.9 miles) of total walking, spread out between brewery locations. We may also take public transportation for one section. The pace is leisurely with plenty of sitting time at each brewery. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Hidden Gems of Prague: Art & Architecture Tour",
    description:
      "Explore Prague's lesser-known architectural marvels and vibrant street art scene with a local guide, visiting hidden courtyards, unique buildings, and contemporary art installations that showcase the city's creative spirit.",
    city: "Prague",
    country: "Czech Republic",
    region: "Bohemia",
    images: [
      "/images/tours/prague/street-art.jpg",
      "/images/tours/prague/hidden-courtyard.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Art", "Architecture", "Local Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "art-and-music",

    meetingPoint: {
      address: "Meet Factory, Ke Sklárně 3213/15, Prague 5",
      coordinates: {
        latitude: 50.0545,
        longitude: 14.407,
      },
      instructions:
        "Meet outside the entrance to the Meet Factory art center. Your guide will be wearing a colorful artist's scarf and holding a sketchbook.",
      contactNumber: "+420 777 345 678",
      contactEmail: "pragueart@paragontrails.com",
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
      "Discover Prague's unique Cubist architecture, the only place where this style was applied to buildings",
      "Explore hidden Art Nouveau courtyards and passages typically missed by visitors",
      "Visit the vibrant Holešovice district with its converted industrial spaces and street art",
      "See David Černý's provocative sculptures scattered throughout the city",
      "Experience the contrast between historic and contemporary architectural styles",
    ],

    inclusions: [
      "Local artist or architect guide with expertise in Prague's art scene",
      "Entry to select galleries and artistic spaces",
      "Prague architecture and art map highlighting hidden gems",
      "Public transportation tickets during the tour",
      "Coffee or tea at an artistic café",
      "Small sketchbook and pencil souvenir",
      "Discount passes to major art galleries valid for your stay",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Entry fees to any optional sites not on the main itinerary",
      "Gratuities (optional)",
      "Professional art supplies (basic sketching materials provided)",
    ],

    itinerary: [
      "13:00 - Meet at the Meet Factory for introduction to Prague's art scene",
      "13:15 - Explore repurposed industrial spaces and contemporary installations",
      "13:45 - Public transport to Holešovice district with commentary on changing urban landscape",
      "14:00 - Walking tour of street art murals and discussion of artistic significance",
      "14:30 - Visit to hidden courtyard with unique architectural elements",
      "15:00 - Coffee break at artist-run café with exhibition space",
      "15:30 - Walk to Cubist building examples with architectural analysis",
      "16:00 - Visit David Černý sculpture installations with interpretation",
      "16:30 - Explore Art Nouveau hidden gems with photography opportunities",
      "17:00 - Tour concludes with recommendations for further art exploration",
    ],

    faqs: [
      {
        question: "What types of art will we see?",
        answer:
          "The tour includes a mix of street art murals, contemporary sculptures, and unique architectural details from various styles including Art Nouveau, Cubism, and modern design. We also visit local galleries showcasing emerging artists.",
      },
      {
        question: "Is this tour suitable for families with young children?",
        answer:
          "Yes, this tour is family-friendly! We can adjust the pace and include engaging stories and activities for children. The outdoor nature of the tour allows for flexibility with strollers.",
      },
      {
        question: "Do I need to know about art to enjoy this tour?",
        answer:
          "Not at all! Our guides make art accessible and interesting for everyone, regardless of your background knowledge. We focus on the stories behind the art and artists, providing context that helps you appreciate Prague's creative culture in a new way.",
      },
    ],
  },
  {
    title: "Prague's Historic Jewish Quarter Tour",
    description:
      "Delve into the rich history of Prague's Jewish community with a guided tour through the Jewish Quarter, visiting synagogues, the Old Jewish Cemetery, and learning about the cultural heritage that has shaped this vibrant area.",
    city: "Prague",
    country: "Czech Republic",
    region: "Bohemia",
    images: [
      "/images/tours/prague/jewish-quarter.jpg",
      "/images/tours/prague/old-jewish-cemetery.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.9,
    tags: ["History", "Culture", "Jewish Heritage"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Spanish Synagogue, Vězeňská 1, Prague 1",
      coordinates: {
        latitude: 50.0906,
        longitude: 14.4199,
      },
      instructions:
        "Meet at the entrance to the Spanish Synagogue. Your guide will be holding a blue folder with the Star of David symbol.",
      contactNumber: "+420 777 456 789",
      contactEmail: "jewishprague@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-18",
      "2023-12-21",
      "2023-12-28",
      "2024-01-04",
      "2024-01-08",
      "2024-01-11",
      "2024-01-18",
      "2024-01-22",
      "2024-01-25",
      "2024-02-01",
      "2024-02-05",
      "2024-02-08",
      "2024-02-15",
      "2024-02-19",
      "2024-02-22",
    ],

    highlights: [
      "Visit Europe's oldest active synagogue, the 13th-century Old-New Synagogue",
      "Explore the haunting Pinkas Synagogue with names of 80,000 Holocaust victims inscribed on its walls",
      "Walk through the atmospheric Old Jewish Cemetery with graves stacked up to 12 layers deep",
      "See the ceremonial hall and learn about Jewish burial traditions",
      "Discover the stories of Prague's Jewish community from medieval times to the present day",
    ],

    inclusions: [
      "Expert guide specializing in Jewish history and heritage",
      "Entrance fees to all Jewish Quarter sites on the itinerary",
      "Skip-the-line access at busy locations",
      "Audio headsets to clearly hear the guide",
      "Informative booklet about Prague's Jewish heritage",
      "Symbolic memorial candle at Pinkas Synagogue",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities (optional)",
      "Transportation between sites (all locations are within walking distance)",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "09:00 - Meet at the Spanish Synagogue for introduction",
      "09:15 - Guided tour of the Spanish Synagogue with its stunning interior",
      "09:45 - Visit to the Old-New Synagogue with its Gothic architecture",
      "10:15 - Explore the Pinkas Synagogue and Holocaust memorial",
      "10:45 - Walk through the Old Jewish Cemetery with explanation of symbolism and history",
      "11:15 - Visit to the Ceremonial Hall and learn about burial traditions",
      "11:45 - Tour of the Klausen Synagogue with its Jewish customs exhibits",
      "12:15 - Walk along Pařížská Street with stories of the area's transformation",
      "12:45 - Tour conclusion at the Jewish Town Hall with its famous backwards clock",
    ],

    faqs: [
      {
        question: "What sites will we visit in the Jewish Quarter?",
        answer:
          "The tour includes visits to the Old-New Synagogue, Pinkas Synagogue, Klausen Synagogue, and the Old Jewish Cemetery. You'll learn about the history of the Jewish community in Prague, including its traditions, struggles, and contributions to the city.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages. We share stories and historical context in an accessible way, making it suitable for children while respecting the solemnity of the sites.",
      },
      {
        question: "Is there a dress code for visiting the synagogues?",
        answer:
          "Yes, as these are religious sites, modest dress is required. Men must wear a head covering (kippah/yarmulke provided at entrance) and both men and women should have shoulders and knees covered. Very casual attire such as shorts or sleeveless tops may be considered disrespectful.",
      },
    ],
  },
  {
    title: "Communist Prague: Cold War History Tour",
    description:
      "Step back to the era of Soviet influence with this immersive tour exploring Prague's communist history, Cold War sites, underground bunkers, and stories of resistance, espionage, and daily life behind the Iron Curtain.",
    city: "Prague",
    country: "Czech Republic",
    region: "Bohemia",
    images: [
      "/images/tours/prague/nuclear-bunker.jpg",
      "/images/tours/prague/soviet-memorial.jpg",
    ],
    duration: "3.5 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cold War", "Communist History", "Historic"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Museum of Communism, V Celnici 1031/4, Prague 1",
      coordinates: {
        latitude: 50.087,
        longitude: 14.4291,
      },
      instructions:
        "Meet at the entrance to the Museum of Communism. Your guide will be holding a vintage red star symbol.",
      contactNumber: "+420 777 567 890",
      contactEmail: "coldwarprague@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-19",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
    ],

    highlights: [
      "Explore a genuine nuclear bunker built for the Communist elite",
      "See Soviet monuments and socialist realist architecture throughout Prague",
      "Visit key sites of the 1968 Prague Spring and 1989 Velvet Revolution",
      "Learn about daily life under communist rule from guides with personal experience",
      "Discover hidden surveillance locations used by the secret police (StB)",
    ],

    inclusions: [
      "Expert guide who lived through the communist era",
      "Entry to the nuclear bunker museum",
      "Public transportation tickets during the tour",
      "Authentic communist-era snack",
      "Cold War history booklet",
      "Souvenir ration card and pin",
      "Photo permit for all locations",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages beyond included snack",
      "Entry to the Museum of Communism (optional post-tour visit)",
      "Gratuities (optional)",
      "Personal expenses",
    ],

    itinerary: [
      "10:00 - Meet at Museum of Communism for historical introduction",
      "10:15 - Walking tour of Wenceslas Square with focus on Prague Spring and Velvet Revolution",
      "10:45 - Visit to former StB (secret police) headquarters with surveillance stories",
      "11:30 - Public transport to nuclear bunker location",
      "11:45 - Tour of authentic Cold War nuclear bunker",
      "12:30 - Authentic communist-era snack with stories of food shortages",
      "13:00 - Visit to Soviet-era architecture examples and monuments",
      "13:30 - Tour of neighborhoods with socialist housing developments",
      "14:00 - Discussion of transition to democracy at Revolution memorial",
      "14:30 - Tour conclusion with recommendations for further Cold War sites",
    ],

    faqs: [
      {
        question: "Will we actually go inside a nuclear bunker?",
        answer:
          "Yes, we visit an authentic underground nuclear bunker built during the Cold War. You'll see original equipment including gas masks, radiation suits, and communication devices. The bunker is accessed via stairs with no elevator access available.",
      },
      {
        question: "Is this tour political in nature?",
        answer:
          "While this tour discusses political history, it presents factual information about the communist period rather than promoting any particular viewpoint. Our guides share personal experiences and historical context to help visitors understand this important era in Czech history.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "This tour involves approximately 3 km (1.9 miles) of walking plus stairs to access the bunker. There is one flight of stairs with about 20 steps to enter the underground facility. We use public transportation for one segment. The pace is moderate with regular stops.",
      },
    ],
  },
];

export default pragueTours;
