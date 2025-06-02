import { Tour } from "@/lib/interfaces/services/tours";

export const romeTours: Tour[] = [
  {
    title: "Ancient Rome: Colosseum & Roman Forum VIP Access",
    description:
      "Skip the hours-long lines for privileged access to the Colosseum, Roman Forum, and Palatine Hill with an expert archaeologist who brings ancient Rome to life through vivid stories and hidden historical details.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/colosseum-interior.jpg",
      "/images/tours/rome/roman-forum.jpg",
    ],
    duration: "3 hours",
    price: "$79",
    rating: 4.9,
    tags: ["Ancient Rome", "Archaeological", "Skip-the-Line"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "archaeological",

    meetingPoint: {
      address: "Arch of Constantine, Via di San Gregorio, Rome",
      coordinates: {
        latitude: 41.8898,
        longitude: 12.4912,
      },
      instructions:
        "Meet beside the Arch of Constantine, opposite the Colosseum. Your guide will be holding a 'Paragon Trails' sign.",
      contactNumber: "+39 06 1234 5678",
      contactEmail: "rome@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-18",
      "2023-12-19",
      "2023-12-20",
      "2023-12-21",
      "2023-12-22",
      "2023-12-23",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
      "2024-02-16",
      "2024-02-17",
      "2024-02-18",
      "2024-02-23",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "VIP access to the Colosseum with special entrance avoiding hours-long queues",
      "Visit the arena floor where gladiators once fought for their lives",
      "Explore the extensive Roman Forum with its temples, basilicas, and triumphal arches",
      "Discover the opulent Palatine Hill, home to emperors and aristocracy",
      "Learn about daily life, politics, and entertainment in ancient Rome",
    ],

    inclusions: [
      "Skip-the-line access to all sites",
      "Professional archaeologist guide with expertise in ancient Rome",
      "Small group size (maximum 12 participants)",
      "Audio headsets to hear guide clearly in crowded areas",
      "All entrance fees and taxes",
      "Bottled water",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Gratuities (optional)",
      "Colosseum Underground and Third Ring (available as upgrade)",
      "Personal expenses",
    ],

    itinerary: [
      "08:45 - Meet at the Arch of Constantine for introduction",
      "09:00 - Skip-the-line entry to the Colosseum with historical overview",
      "09:20 - Explore the Colosseum's main arena and seating areas",
      "10:00 - Learn about gladiatorial combats and public spectacles",
      "10:30 - Visit the Roman Forum with focus on political and religious sites",
      "11:15 - Explore the Via Sacra and major temples",
      "11:45 - Ascend Palatine Hill to see imperial palaces",
      "12:15 - Free time for photos and questions",
      "12:30 - Tour concludes at the exit of Palatine Hill",
    ],

    faqs: [
      {
        question: "How strenuous is this tour?",
        answer:
          "This tour involves approximately 2 miles (3.2 km) of walking over uneven surfaces with numerous stairs and inclines. The Palatine Hill particularly involves uphill walking. While we move at a moderate pace with rest stops, comfortable walking shoes and a reasonable level of fitness are recommended. Unfortunately, much of the ancient sites are not wheelchair accessible due to their historical nature.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children often enjoy the fascinating stories of gladiators and emperors. Our guides are skilled at engaging younger visitors with age-appropriate content. For children ages 6-12, we offer a special activity booklet to enhance their experience. Note that strollers are difficult to manage at these sites due to stairs and uneven terrain.",
      },
      {
        question: "What happens in case of rain?",
        answer:
          "The tour proceeds rain or shine, so please check the weather forecast and dress accordingly. The Colosseum has some covered areas, but the Roman Forum and Palatine Hill are largely uncovered. In cases of severe weather that might compromise safety, we may adjust the itinerary or offer rescheduling options.",
      },
    ],
  },
  {
    title: "Vatican Museums, Sistine Chapel & St. Peter's Early Access",
    description:
      "Enter the Vatican Museums a full hour before the general public for an intimate experience of Michelangelo's Sistine Chapel and masterpieces of Renaissance art, followed by direct access to St. Peter's Basilica.",
    city: "Rome",
    country: "Italy",
    region: "Vatican City",
    images: [
      "/images/tours/rome/sistine-chapel.jpg",
      "/images/tours/rome/vatican-museums.jpg",
    ],
    duration: "3.5 hours",
    price: "$99",
    rating: 4.9,
    tags: ["Art", "Religious", "Early Access"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Viale Vaticano, 100, 00192 Roma RM",
      coordinates: {
        latitude: 41.9067,
        longitude: 12.4526,
      },
      instructions:
        "Meet at the steps leading to the Vatican Museums entrance. Your guide will be holding a sign reading 'Early Access Vatican'.",
      contactNumber: "+39 06 1234 5679",
      contactEmail: "vatican@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-19",
      "2023-12-20",
      "2023-12-22",
      "2023-12-23",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-16",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-01-30",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-13",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
      "2024-02-27",
    ],

    highlights: [
      "Early access to the Vatican Museums before regular opening hours",
      "Experience the Sistine Chapel with significantly fewer crowds",
      "Admire the Maps Gallery, Raphael Rooms, and other museum highlights",
      "Privileged access from Sistine Chapel directly to St. Peter's Basilica",
      "Expert explanation of Michelangelo's masterpiece ceiling and Last Judgment",
    ],

    inclusions: [
      "Early access to Vatican Museums (1 hour before general public)",
      "Skip-the-line entrance fees for all sites",
      "Art historian guide with expertise in Renaissance art",
      "Small group size (maximum 12 participants)",
      "Audio headsets to hear guide clearly",
      "Fast-track entrance to St. Peter's Basilica",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "St. Peter's Dome climb (available separately)",
      "Gratuities (optional)",
      "Food and beverages",
      "Vatican Gardens access",
    ],

    itinerary: [
      "07:15 - Meet guide outside Vatican Museums",
      "07:30 - Early privileged entrance to Museums (1 hour before general opening)",
      "07:45 - Visit the Pinecone Courtyard and Belvedere Courtyard",
      "08:15 - Explore the Gallery of Maps and Tapestries",
      "08:45 - Tour the Raphael Rooms with expert commentary",
      "09:30 - Extended visit to the Sistine Chapel (before major crowds arrive)",
      "10:15 - Direct access to St. Peter's Basilica through special passage",
      "10:45 - Guided tour of St. Peter's including Michelangelo's Pietà",
      "11:00 - Tour concludes at St. Peter's Basilica with free time to explore",
    ],

    faqs: [
      {
        question: "What is the dress code for the Vatican?",
        answer:
          "The Vatican enforces a strict dress code. Shoulders and knees must be covered for both men and women. No shorts, sleeveless tops, or short skirts are permitted. Comfortable shoes are recommended as the tour involves significant walking. Hats must be removed when entering religious buildings. We suggest bringing a light scarf to cover shoulders if needed, especially in summer months.",
      },
      {
        question: "Will we really see the Sistine Chapel with fewer people?",
        answer:
          "Yes! Our early access begins at 7:30 am, a full hour before the general public is admitted. While the Sistine Chapel is never completely empty, the difference in crowd levels between early access and standard hours is remarkable. This allows you to appreciate Michelangelo's masterpiece in relative tranquility and gives our guide the opportunity to explain the artwork in detail before you enter the chapel.",
      },
      {
        question: "Is St. Peter's Basilica always open for tours?",
        answer:
          "St. Peter's Basilica is an active church and may close without notice for religious ceremonies or papal events. If the basilica is closed during your tour date, we will spend additional time in the Vatican Museums and our guide will provide a detailed explanation of the basilica and its significance. In such cases, we offer a partial refund or the option to reschedule your visit.",
      },
    ],
  },
  {
    title: "Rome Street Food & Local Neighborhoods Tour",
    description:
      "Discover Rome's culinary secrets with a local food expert guiding you through historic neighborhoods like Trastevere and Campo de' Fiori, sampling authentic street food, artisanal products, and traditional dishes beloved by Romans.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/street-food.jpg",
      "/images/tours/rome/campo-de-fiori.jpg",
    ],
    duration: "4 hours",
    price: "$69",
    rating: 4.8,
    tags: ["Food", "Local Experience", "Walking Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Campo de' Fiori, 00186 Roma RM",
      coordinates: {
        latitude: 41.8956,
        longitude: 12.4722,
      },
      instructions:
        "Meet by the statue of Giordano Bruno in the center of Campo de' Fiori market square. Your guide will be holding a 'Rome Food Tour' sign.",
      contactNumber: "+39 06 1234 5680",
      contactEmail: "romefood@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-15",
      "2023-12-16",
      "2023-12-18",
      "2023-12-19",
      "2023-12-21",
      "2023-12-22",
      "2023-12-23",
      "2024-01-04",
      "2024-01-05",
      "2024-01-06",
      "2024-01-11",
      "2024-01-12",
      "2024-01-13",
      "2024-01-18",
      "2024-01-19",
      "2024-01-20",
      "2024-01-25",
      "2024-01-26",
      "2024-01-27",
      "2024-02-01",
      "2024-02-02",
      "2024-02-03",
      "2024-02-08",
      "2024-02-09",
      "2024-02-10",
      "2024-02-15",
      "2024-02-16",
      "2024-02-17",
      "2024-02-22",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Sample authentic Roman street food including supplì, pizza al taglio, and porchetta",
      "Visit Campo de' Fiori market to taste fresh local produce and meet vendors",
      "Explore the charming historic neighborhood of Trastevere like a local",
      "Learn about Roman food traditions from an expert culinary guide",
      "Enjoy a traditional pasta lunch at a neighborhood trattoria",
    ],

    inclusions: [
      "Food-loving local guide with culinary expertise",
      "8+ food tastings (sufficient for a filling lunch)",
      "Glass of local wine, craft beer, or soft drink with lunch",
      "Small group size (maximum 10 participants)",
      "Food market exploration",
      "Neighborhood walking tour with historical context",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional beverages beyond those included",
      "Gratuities (optional)",
      "Personal food purchases beyond included tastings",
      "Restaurant dinner (tour ends before dinner)",
    ],

    itinerary: [
      "10:30 - Meet at Campo de' Fiori market for introduction",
      "10:45 - Market tour with seasonal produce tastings and vendor interactions",
      "11:30 - Visit historic bakery for Roman pizza and bread specialties",
      "12:00 - Sample traditional fried street foods including supplì (rice balls)",
      "12:30 - Cross Ponte Sisto bridge with historical commentary",
      "12:45 - Explore Trastevere neighborhood's hidden corners",
      "13:15 - Visit to traditional salumeria for cheese and cured meat tasting",
      "13:45 - Traditional pasta lunch at authentic local trattoria",
      "14:30 - Dessert stop for gelato or tiramisu",
      "14:45 - Tour concludes in Trastevere with recommendations for dinner and evening activities",
    ],

    faqs: [
      {
        question: "How much food is included? Will I be full?",
        answer:
          "The tour includes 8+ generous food tastings that amount to more than a full meal. Come hungry! We sample a variety of street food, market products, pasta, and desserts. Most guests find themselves completely satisfied by the end of the tour, having experienced a comprehensive overview of Roman cuisine from savory to sweet.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "With advance notice, we can accommodate vegetarians, pescatarians, and most food allergies. Please specify any dietary restrictions when booking so we can arrange alternatives where necessary. Due to the nature of traditional Roman cuisine, vegan options may be limited at some stops, but we'll do our best to provide suitable alternatives.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 miles (3 km) at a leisurely pace with frequent stops for food tastings. We walk through the historic center of Rome including Campo de' Fiori and Trastevere neighborhoods. The terrain is mostly flat with some cobblestone streets. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Underground Rome: Catacombs & Crypts",
    description:
      "Descend beneath modern Rome to discover ancient catacombs, mysterious crypts, and hidden underground sites that reveal the city's macabre history and early Christian practices with exclusive access to restricted areas.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/catacombs.jpg",
      "/images/tours/rome/capuchin-crypt.jpg",
    ],
    duration: "3.5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Underground", "Christianity", "Off-the-beaten-path"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",

    meetingPoint: {
      address: "Piazza Barberini, 00187 Roma RM",
      coordinates: {
        latitude: 41.9035,
        longitude: 12.4887,
      },
      instructions:
        "Meet by the Triton Fountain in the center of Piazza Barberini. Your guide will be holding a sign reading 'Underground Rome'.",
      contactNumber: "+39 06 1234 5681",
      contactEmail: "undergroundrome@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
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
      "Explore the ancient Christian Catacombs with their remarkable frescoes",
      "Visit the eerie Capuchin Crypt decorated with the bones of 4,000 monks",
      "Descend to San Clemente Basilica's underground levels revealing 2,000 years of history",
      "Gain special access to restricted catacomb areas not open to the general public",
      "Learn about early Christian symbolism and burial practices",
    ],

    inclusions: [
      "Expert guide specialized in Roman history and early Christianity",
      "Air-conditioned transportation between sites",
      "Skip-the-line entrance tickets to all locations",
      "Access to special restricted areas (when available)",
      "Small group size (maximum 12 participants)",
      "Audio headsets to hear guide clearly",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities (optional)",
      "Photo permits (photography restrictions apply at some sites)",
      "Personal expenses",
    ],

    itinerary: [
      "14:00 - Meet at Piazza Barberini for introduction",
      "14:15 - Visit Capuchin Crypt and Museum with bone art displays",
      "15:00 - Drive to the Catacombs of San Callisto or San Sebastiano",
      "15:30 - Guided tour of the ancient Christian catacombs",
      "16:15 - Exclusive access to restricted catacomb areas (when permitted)",
      "16:45 - Drive to San Clemente Basilica",
      "17:15 - Explore San Clemente's multiple underground levels",
      "18:00 - Visit the 1st century Roman houses and ancient Mithraeum temple",
      "18:30 - Tour concludes at San Clemente Basilica",
    ],

    faqs: [
      {
        question: "Is this tour suitable for claustrophobic individuals?",
        answer:
          "Those with severe claustrophobia may find parts of this tour challenging. The catacombs feature narrow passageways and low ceilings in some sections, though most main corridors are reasonably spacious. San Clemente's lower levels are underground but generally have adequate space. If you're concerned, please contact us before booking to discuss your specific situation.",
      },
      {
        question: "Are there photography restrictions?",
        answer:
          "Photography is strictly prohibited in the catacombs to preserve the ancient frescoes. At the Capuchin Crypt, photography is also forbidden out of respect for the human remains. At San Clemente Basilica, non-flash photography is permitted in most areas for personal use only. Your guide will clearly indicate where photos are allowed.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Since we visit religious sites, modest dress is required. Shoulders and knees must be covered for both men and women. The underground sites maintain cool temperatures (around 15°C/60°F) year-round, so a light jacket or sweater is recommended even in summer. Comfortable walking shoes are essential as the tour involves stairs and uneven surfaces.",
      },
    ],
  },
  {
    title: "Day Trip to Pompeii & Mount Vesuvius",
    description:
      "Journey back in time to the fateful day in 79 AD when Mt. Vesuvius erupted, exploring remarkably preserved Pompeii with an archaeologist guide, followed by a hike to the crater of the still-active volcano for panoramic views of the Bay of Naples.",
    city: "Rome",
    country: "Italy",
    region: "Campania",
    images: [
      "/images/tours/rome/pompeii-ruins.jpg",
      "/images/tours/rome/vesuvius-crater.jpg",
    ],
    duration: "12 hours",
    price: "$159",
    rating: 4.8,
    tags: ["Day Trip", "Archaeological", "Volcano"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "archaeological",

    meetingPoint: {
      address: "Piazza del Popolo, 00187 Roma RM",
      coordinates: {
        latitude: 41.9109,
        longitude: 12.4764,
      },
      instructions:
        "Meet by the central obelisk in Piazza del Popolo. Your guide will be holding a sign reading 'Pompeii & Vesuvius Tour'.",
      contactNumber: "+39 06 1234 5682",
      contactEmail: "pompeii@paragontrails.com",
    },

    availableDates: [
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2024-01-08",
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
    ],

    highlights: [
      "Explore the incredible preservation of Pompeii with an expert archaeologist guide",
      "See remarkably intact buildings, frescoes, and the famous plaster casts of victims",
      "Hike to the summit of Mt. Vesuvius and peer into its crater (weather permitting)",
      "Enjoy stunning panoramic views of the Bay of Naples and surrounding countryside",
      "Learn about volcanology and the continued activity of Vesuvius",
    ],

    inclusions: [
      "Round-trip transportation from Rome in air-conditioned coach",
      "Professional archaeologist guide at Pompeii",
      "Skip-the-line entrance tickets to Pompeii archaeological site",
      "Mt. Vesuvius access fee (weather permitting)",
      "Volcanologist guide on Vesuvius",
      "Headsets to hear the guide clearly",
      "Light lunch or snack box",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond lunch/snack",
      "Gratuities (optional)",
      "Alternative activities in case of Vesuvius closure",
      "Optional experiences or add-ons",
    ],

    itinerary: [
      "07:30 - Departure from Piazza del Popolo in Rome",
      "10:30 - Arrive at Pompeii Archaeological Site",
      "10:45 - Skip-the-line entrance and guided tour of Pompeii highlights",
      "11:00 - Visit the Forum, thermal baths, and wealthy homes with frescoes",
      "12:00 - Explore the theaters, streets, and commercial buildings",
      "12:45 - View the famous plaster casts of Pompeii's victims",
      "13:30 - Light lunch break",
      "14:30 - Drive to Mount Vesuvius base",
      "15:15 - Begin hike to Vesuvius crater (approximately 30 minutes uphill)",
      "16:00 - Exploration of crater rim with volcanologist explanation",
      "16:45 - Descent from volcano",
      "17:30 - Begin return journey to Rome",
      "20:30 - Estimated arrival back in Rome",
    ],

    faqs: [
      {
        question: "How strenuous is the hike up Mount Vesuvius?",
        answer:
          "The hike to the crater rim takes approximately 25-30 minutes on a moderately steep gravel path. The elevation gain is about 200 meters (650 feet) over a 1.5 km (0.9 mile) trail. While not technically difficult, it requires reasonable fitness and sturdy walking shoes. The spectacular views and unique experience of standing on an active volcano make the effort worthwhile. Walking sticks are available for rental at the base.",
      },
      {
        question: "What happens if Vesuvius is closed due to weather?",
        answer:
          "Mt. Vesuvius occasionally closes due to poor weather conditions or volcanic activity. If the mountain is closed during your tour, we'll substitute with a visit to either Herculaneum (another remarkably preserved site from the same eruption) or the National Archaeological Museum in Naples, which houses many treasures from Pompeii. This decision will be made by your guide based on current conditions and group preference.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is appropriate for children who are comfortable with extended walking and a long day. Children often find the Pompeii plaster casts and volcano fascinating. The Vesuvius hike is manageable for children 8 and older with reasonable fitness. We recommend bringing snacks, water, and entertainment for the bus journey. Note that strollers are not practical in Pompeii or on Vesuvius due to uneven terrain and steps.",
      },
    ],
  },
  {
    title: "Roman Twilight: Evening Fountains & Piazzas Stroll",
    description:
      "Experience the magic of Rome after dark as the ancient city glows with golden illumination, visiting iconic fountains and piazzas while sampling gelato and enjoying the lively atmosphere of evening passeggiata when locals come out to stroll.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/trevi-fountain-night.jpg",
      "/images/tours/rome/piazza-navona-evening.jpg",
    ],
    duration: "2.5 hours",
    price: "$49",
    rating: 4.7,
    tags: ["Evening", "Sightseeing", "Local Experience"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Spanish Steps (at the bottom), Piazza di Spagna, Rome",
      coordinates: {
        latitude: 41.9058,
        longitude: 12.4823,
      },
      instructions:
        "Meet at the fountain at the bottom of the Spanish Steps (Fontana della Barcaccia). Your guide will be holding a small lantern with a 'Roman Nights' tag.",
      contactNumber: "+39 06 1234 5683",
      contactEmail: "eveningrome@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-18",
      "2023-12-19",
      "2023-12-22",
      "2023-12-23",
      "2024-01-05",
      "2024-01-06",
      "2024-01-12",
      "2024-01-13",
      "2024-01-19",
      "2024-01-20",
      "2024-01-26",
      "2024-01-27",
      "2024-02-02",
      "2024-02-03",
      "2024-02-09",
      "2024-02-10",
      "2024-02-16",
      "2024-02-17",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "See the illuminated Trevi Fountain with its dramatic sculptures and cascading water",
      "Experience the vibrant atmosphere of Piazza Navona in the evening",
      "View the Pantheon's impressive dome against the night sky",
      "Sample authentic Italian gelato at a historic gelateria",
      "Learn about the history and legends associated with Rome's famous fountains",
    ],

    inclusions: [
      "Local expert guide passionate about Roman history",
      "Small group size (maximum 15 participants)",
      "Gelato tasting at acclaimed local gelateria",
      "Insider tips on evening dining options and nightlife",
      "Audio headsets to hear guide clearly in evening crowds",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond gelato tasting",
      "Gratuities (optional)",
      "Transportation during tour (it's a walking tour)",
      "Personal expenses",
    ],

    itinerary: [
      "19:30 - Meet at Spanish Steps for introduction",
      "19:45 - Stroll to Trevi Fountain with commentary on route",
      "20:15 - Trevi Fountain visit with time for photos and traditional coin toss",
      "20:45 - Walk through picturesque streets to the Pantheon",
      "21:00 - Admire the illuminated Pantheon and hear about its perfect dome",
      "21:20 - Continue to Piazza Navona to see Bernini's fountains lit up",
      "21:40 - Gelato stop at historic gelateria",
      "22:00 - Tour concludes in Piazza Navona with recommendations for dinner or continuing your evening",
    ],

    faqs: [
      {
        question: "Is Rome safe at night?",
        answer:
          "Rome's historic center is generally very safe and well-lit at night, with plenty of people enjoying the evening passeggiata (traditional evening stroll). Our tour routes stay in well-populated, central areas. As in any major city, be mindful of your belongings in crowded areas around major attractions.",
      },
      {
        question: "What makes seeing these sites at night special?",
        answer:
          "Rome's monuments take on a magical quality when illuminated at night. The lighting accentuates the artistic details of fountains and buildings, creating dramatic effects and perfect photo opportunities. Additionally, evening brings cooler temperatures in summer months and often smaller crowds than during peak daytime hours. The atmosphere becomes more romantic and authentic as locals emerge for their evening activities.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 1.5 miles (2.4 km) at a leisurely evening pace. The route is flat with some cobblestone streets. We make several stops along the way, and the walking is not strenuous. However, comfortable shoes are recommended as Rome's historic center features many cobblestone streets and uneven surfaces.",
      },
    ],
  },
  {
    title: "Rome Pasta & Tiramisu Cooking Class",
    description:
      "Roll up your sleeves for a hands-on cooking class where you'll learn to create two Italian classics from scratch – fresh pasta with traditional Roman sauces and authentic tiramisu – followed by a convivial meal enjoying your creations.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/pasta-making.jpg",
      "/images/tours/rome/tiramisu-class.jpg",
    ],
    duration: "3 hours",
    price: "$89",
    rating: 4.9,
    tags: ["Cooking", "Culinary", "Hands-on"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Via dei Chiavari, 39, 00186 Roma RM",
      coordinates: {
        latitude: 41.8952,
        longitude: 12.4736,
      },
      instructions:
        "Meet at our cooking school located near Campo de' Fiori. Look for the door with the 'Roman Cooking Workshop' sign.",
      contactNumber: "+39 06 1234 5684",
      contactEmail: "cookingclass@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-18",
      "2023-12-19",
      "2023-12-20",
      "2023-12-21",
      "2023-12-22",
      "2023-12-23",
      "2024-01-04",
      "2024-01-05",
      "2024-01-06",
      "2024-01-11",
      "2024-01-12",
      "2024-01-13",
      "2024-01-18",
      "2024-01-19",
      "2024-01-20",
      "2024-01-25",
      "2024-01-26",
      "2024-01-27",
      "2024-02-01",
      "2024-02-02",
      "2024-02-03",
      "2024-02-08",
      "2024-02-09",
      "2024-02-10",
      "2024-02-15",
      "2024-02-16",
      "2024-02-17",
      "2024-02-22",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Learn to make fresh pasta dough from scratch using traditional techniques",
      "Master two authentic Roman sauces: Amatriciana and Cacio e Pepe",
      "Create perfect tiramisu with expert tips on mascarpone cream and coffee soaking",
      "Enjoy the fruits of your labor with a convivial sit-down meal",
      "Take home detailed recipe cards to recreate the dishes in your own kitchen",
    ],

    inclusions: [
      "Professional chef instructor fluent in English",
      "All ingredients and cooking equipment",
      "Hands-on instruction for pasta making and tiramisu",
      "Glass of prosecco and appetizers upon arrival",
      "Full meal of prepared dishes with wine",
      "Recipe booklet to take home",
      "Complimentary cooking apron souvenir",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond those mentioned",
      "Gratuities (optional)",
      "Market visit (available with premium class option)",
    ],

    itinerary: [
      "17:00 - Arrive at cooking school, welcome prosecco and appetizers",
      "17:15 - Introduction to Italian cooking principles and regional Roman cuisine",
      "17:30 - Hands-on fresh pasta making workshop",
      "18:15 - Prepare traditional Roman sauces",
      "18:45 - Tiramisu lesson and assembly",
      "19:15 - Final preparation of dishes while enjoying wine",
      "19:30 - Sit-down dinner enjoying your creations",
      "20:00 - Recipe discussion, cooking tips, and certificate presentation",
      "20:15 - Class concludes (participants welcome to linger over dinner until 21:00)",
    ],

    faqs: [
      {
        question: "Do I need previous cooking experience?",
        answer:
          "Not at all! Our classes are designed for all skill levels from complete beginners to experienced home cooks. The chef provides clear, step-by-step instructions and offers individual attention to ensure everyone succeeds. The techniques are authentic but accessible, and you'll leave with skills you can confidently replicate at home.",
      },
      {
        question: "Is this class suitable for children?",
        answer:
          "This regular class is best suited for participants 16 and older due to the pace and complexity of techniques. For families with younger children, we offer specific Family Cooking Classes (bookable separately) that feature child-friendly recipes and approaches. Please contact us directly to arrange a family cooking experience.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, with advance notice we can accommodate vegetarians, those with gluten sensitivities (we can make gluten-free pasta), and most allergies. Please inform us of any dietary restrictions when booking so we can prepare alternative ingredients. For vegan tiramisu, we require at least 48 hours notice to properly prepare plant-based substitutes.",
      },
    ],
  },
  {
    title: "E-Bike Ancient Appian Way & Aqueducts Tour",
    description:
      "Escape the city on electric bikes to cruise the ancient Appian Way, discovering magnificent Roman aqueducts, hidden catacombs, and pastoral countryside landscapes that reveal how Romans engineered their empire and connected their vast territories.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/appian-way.jpg",
      "/images/tours/rome/roman-aqueducts.jpg",
    ],
    duration: "4 hours",
    price: "$79",
    rating: 4.7,
    tags: ["E-Bike", "Ancient Rome", "Outdoors"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Via Labicana, 118, 00184 Roma RM",
      coordinates: {
        latitude: 41.8894,
        longitude: 12.4967,
      },
      instructions:
        "Meet at our bike shop near the Colosseum. Look for the 'Roma E-Bike Tours' sign.",
      contactNumber: "+39 06 1234 5685",
      contactEmail: "ebike@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2024-01-06",
      "2024-01-07",
      "2024-01-13",
      "2024-01-14",
      "2024-01-20",
      "2024-01-21",
      "2024-01-27",
      "2024-01-28",
      "2024-02-03",
      "2024-02-04",
      "2024-02-10",
      "2024-02-11",
      "2024-02-17",
      "2024-02-18",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "Cycle along the ancient Appian Way on comfortable electric bikes",
      "Discover massive Roman aqueducts that once supplied the entire city with water",
      "Visit the Circus of Maxentius, one of the best-preserved Roman chariot racing tracks",
      "Explore the Roman countryside with its pastoral landscapes and ancient ruins",
      "Learn about Roman engineering and the empire's sophisticated infrastructure",
    ],

    inclusions: [
      "High-quality electric bike with safety equipment",
      "Expert guide specialized in Roman history and archaeology",
      "Small group size (maximum 12 riders)",
      "Audio headsets to hear guide while riding",
      "Bottled water and snack",
      "Rain ponchos (if needed)",
      "Entrance fee to Appian Way Regional Park",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities (optional)",
      "Catacombs entrance fee (optional visit, €8 per person)",
      "Lunch (tour ends before lunch time)",
      "E-bike rental beyond tour duration",
    ],

    itinerary: [
      "09:30 - Meet at bike shop for fitting and safety briefing",
      "09:45 - E-bike orientation and practice session",
      "10:00 - Begin ride through historic districts toward Appian Way",
      "10:30 - Arrive at Porta San Sebastiano (ancient Roman gate)",
      "10:45 - Cycle the ancient Appian Way with its original Roman paving stones",
      "11:15 - Visit Circus of Maxentius and Tomb of Cecilia Metella",
      "11:45 - Continue to the impressive aqueduct park",
      "12:15 - Explore the massive arches of the Claudian and Anio Novus aqueducts",
      "12:45 - Scenic rest stop with refreshments",
      "13:00 - Return journey through Park of the Caffarella",
      "13:30 - Return to starting point where tour concludes",
    ],

    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "No special cycling experience is required. Our e-bikes make the journey easy and accessible for most fitness levels, as the electric assist helps with any inclines. The pace is leisurely with frequent stops for explanation and photos. We ride mostly on dedicated bike paths, park trails, and low-traffic roads. Before departing, we provide a thorough orientation to ensure you're comfortable with the e-bike operation.",
      },
      {
        question: "What should I wear for the e-bike tour?",
        answer:
          "Dress comfortably in weather-appropriate clothing that allows freedom of movement. Athletic or casual attire works well, avoiding very loose pants that might catch in the bike chain. We recommend closed-toe shoes. Helmets are provided and required. Bring sunglasses and sunscreen, and a light jacket or layer is useful even in summer as you'll create a breeze while riding.",
      },
      {
        question: "How far do we cycle in total?",
        answer:
          "The total cycling distance is approximately 12-15 miles (19-24 km), but feels much easier with the electric assist. We maintain a relaxed pace with plenty of stops, covering varied terrain including some low hills (easily managed with the e-bikes) and short sections of ancient Roman paving stones that can be bumpy. If you're concerned about the distance, rest assured the electric bikes make it accessible for most participants with basic balance and mobility.",
      },
    ],
  },
  {
    title: "Borghese Gallery & Gardens Small Group Tour",
    description:
      "Discover one of Rome's finest art collections with a guided tour of the Borghese Gallery featuring masterpieces by Bernini, Caravaggio, and Raphael, followed by a leisurely stroll through the elegant surrounding gardens and park.",
    city: "Rome",
    country: "Italy",
    region: "Lazio",
    images: [
      "/images/tours/rome/borghese-gallery.jpg",
      "/images/tours/rome/borghese-gardens.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Art", "Museum", "Gardens"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Piazzale del Museo Borghese, 00197 Roma RM",
      coordinates: {
        latitude: 41.9144,
        longitude: 12.4921,
      },
      instructions:
        "Meet at the steps outside the main entrance to the Borghese Gallery. Your guide will be holding a sign with 'Borghese Art Tour' written on it.",
      contactNumber: "+39 06 1234 5686",
      contactEmail: "borghese@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-24",
      "2024-01-26",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-07",
      "2024-02-09",
      "2024-02-13",
      "2024-02-15",
      "2024-02-19",
      "2024-02-21",
      "2024-02-25",
      "2024-02-27",
    ],

    highlights: [
      "Admire Bernini's dynamic sculptures including Apollo and Daphne and David",
      "View Caravaggio's powerful paintings with their dramatic use of light and shadow",
      "See masterpieces by Raphael, Titian, and Canova in an intimate villa setting",
      "Discover the stories and symbolism behind the magnificent artworks",
      "Stroll through the elegant Borghese Gardens with their pavilions and lake",
    ],

    inclusions: [
      "Pre-reserved skip-the-line tickets to Borghese Gallery",
      "Art historian guide with expertise in Renaissance and Baroque art",
      "Small group size (maximum 10 participants due to museum restrictions)",
      "Audio headsets to hear guide clearly in the museum",
      "Guided tour of villa interior and selected garden highlights",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Gratuities (optional)",
      "Villa Borghese electric cart/bike rental (available in gardens)",
      "Additional museum access beyond scheduled visit time",
    ],

    itinerary: [
      "09:45 - Meet outside Borghese Gallery for introduction",
      "10:00 - Skip-the-line entrance to gallery (timed entry enforced by museum)",
      "10:15 - Ground floor tour focusing on Bernini's magnificent sculptures",
      "11:00 - Upper floor visit to view Caravaggio paintings and other masterpieces",
      "11:45 - Final rooms including Raphael's works and Canova sculptures",
      "12:30 - Exit gallery (2-hour maximum visit time strictly enforced by museum)",
      "12:45 - Guided stroll through Borghese Gardens highlights",
      "13:00 - Visit to panoramic terrace overlooking Piazza del Popolo",
      "13:30 - Tour concludes in the gardens with recommendations for continuing exploration",
    ],

    faqs: [
      {
        question: "Why is the visit time limited to 2 hours?",
        answer:
          "The Borghese Gallery strictly enforces a 2-hour visit policy for all visitors to control crowds and preserve the artwork. The museum operates on a timed entry system, and all visitors must exit at the end of their assigned time slot. Our expert guides are skilled at maximizing this time, focusing on the most significant masterpieces while providing rich context and interpretation.",
      },
      {
        question: "Is photography allowed in the Borghese Gallery?",
        answer:
          "Photography without flash is permitted in most rooms of the Borghese Gallery for personal use only. Some special exhibitions or specific artworks may have photography restrictions. Video recording is generally not permitted. Photography is freely allowed in the gardens. Your guide will advise about any specific restrictions during the tour.",
      },
      {
        question: "Should I book this tour in advance?",
        answer:
          "Absolutely. The Borghese Gallery has extremely limited capacity and often sells out weeks in advance, especially during peak seasons. The museum allows only 360 visitors per 2-hour time slot. We strongly recommend booking at least 3-4 weeks ahead to secure your preferred date and time.",
      },
    ],
  },
];

export default romeTours;
