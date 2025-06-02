import { Tour } from "@/lib/interfaces/services/tours";

export const monacoTours: Tour[] = [
  {
    title: "Monaco Glamour & Monte Carlo Elegance",
    description:
      "Experience the opulence of Monaco with a guided tour through this legendary principality. Visit the Prince's Palace, Monte Carlo Casino, and the famous F1 circuit while learning about Monaco's unique history, royal family, and transformation into a luxury destination.",
    city: "Monaco",
    country: "Monaco",
    region: "Western Europe",
    images: [
      "/images/tours/monaco/monte-carlo-casino.jpg",
      "/images/tours/monaco/princes-palace.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Luxury", "Casino", "Royal"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",

    meetingPoint: {
      address: "Place du Casino, Monte Carlo, Monaco",
      coordinates: {
        latitude: 43.7398,
        longitude: 7.4274,
      },
      instructions:
        "Meet in front of the Monte Carlo Casino main entrance. Your guide will be holding a white 'Monaco Tours' sign.",
      contactNumber: "+377 99 99 30 00",
      contactEmail: "monacotour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-21",
      "2023-12-24",
      "2023-12-27",
      "2023-12-30",
      "2024-01-02",
      "2024-01-05",
      "2024-01-08",
      "2024-01-11",
      "2024-01-14",
      "2024-01-17",
      "2024-01-20",
      "2024-01-23",
      "2024-01-26",
      "2024-01-29",
      "2024-02-01",
      "2024-02-04",
      "2024-02-07",
      "2024-02-10",
      "2024-02-13",
      "2024-02-16",
      "2024-02-19",
      "2024-02-22",
      "2024-02-25",
      "2024-02-28",
    ],

    highlights: [
      "Tour the legendary Monte Carlo Casino with its Belle Époque architecture",
      "Visit the Prince's Palace and witness the Changing of the Guard ceremony",
      "Walk sections of the famous Formula 1 Grand Prix circuit",
      "Explore the exclusive Port Hercule with its spectacular superyachts",
      "Enjoy panoramic views from multiple vantage points around the principality",
    ],

    inclusions: [
      "Professional local guide with expert knowledge of Monaco's history",
      "Entry ticket to Monte Carlo Casino's atrium and public areas",
      "Entry to Prince's Palace (April-October only)",
      "Luxury bottled water",
      "Small group size (maximum 8 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages beyond water provided",
      "Casino gaming rooms entrance fee (€17, payable directly if desired)",
      "Gratuities (recommended but optional)",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "10:00 - Meet at Monte Carlo Casino for introduction to Monaco's history",
      "10:15 - Guided tour of Casino Square and Monte Carlo Casino (main atrium)",
      "10:45 - Walk through Casino Gardens with Mediterranean views",
      "11:15 - Visit to Café de Paris and Hôtel de Paris with historical context",
      "11:30 - Walk along section of the Formula 1 circuit toward Port Hercule",
      "11:45 - Explore Port Hercule and see luxury yachts",
      "12:15 - Take the Rampe Major path up to Monaco-Ville (The Rock)",
      "12:30 - Watch Changing of the Guard ceremony at Prince's Palace (if scheduled)",
      "12:45 - Visit Monaco Cathedral where Grace Kelly is buried",
      "13:00 - Tour conclusion with panoramic views and recommendations",
    ],

    faqs: [
      {
        question: "What should I wear for this tour?",
        answer:
          "Smart casual attire is recommended for this tour. If you wish to enter the casino gaming rooms after the tour, please note there's a strict dress code: jackets for men are recommended in the evening (required in some private rooms), no shorts or flip-flops, and elegant attire is expected. For the general tour, comfortable walking shoes are advised as Monaco has many hills and steps.",
      },
      {
        question: "Will we see the inside of the Monte Carlo Casino?",
        answer:
          "Morning tours include entry to the casino's atrium and public areas with their spectacular Belle Époque architecture and artwork. The private gaming rooms are only accessible after 2pm for those wishing to gamble (passport required and entry fee applies). Our guide explains the casino's history, architecture, and cultural significance, but gambling activities are not part of the guided tour.",
      },
      {
        question: "Is there a chance we'll see members of the royal family?",
        answer:
          "While royal sightings are rare and never guaranteed, our guides are well-informed about royal family activities and public appearances. The Changing of the Guard ceremony at 11:55am (daily from April to October) is the most likely time to glimpse palace activities. Throughout the tour, your guide will share fascinating insights about the Grimaldi family who have ruled Monaco for over 700 years.",
      },
    ],
  },

  {
    title: "Monaco Grand Prix Historic Circuit Tour",
    description:
      "Walk the legendary Monaco Formula 1 circuit with a motorsport expert, visiting famous corners, the starting grid, and exclusive areas while learning about historic races and legendary drivers who mastered this challenging street course.",
    city: "Monaco",
    country: "Monaco",
    region: "Western Europe",
    images: [
      "/images/tours/monaco/f1-circuit.jpg",
      "/images/tours/monaco/race-memorabilia.jpg",
    ],
    duration: "2.5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Formula 1", "Motorsport", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "sports",

    meetingPoint: {
      address: "Automobile Club de Monaco, 23 Boulevard Albert 1er, Monaco",
      coordinates: {
        latitude: 43.7331,
        longitude: 7.421,
      },
      instructions:
        "Meet in front of the Automobile Club de Monaco building. Your guide will be wearing a red cap with 'F1 Expert' written on it.",
      contactNumber: "+377 99 99 30 01",
      contactEmail: "f1tour@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-19",
      "2023-12-22",
      "2023-12-25",
      "2023-12-28",
      "2023-12-31",
      "2024-01-03",
      "2024-01-06",
      "2024-01-09",
      "2024-01-12",
      "2024-01-15",
      "2024-01-18",
      "2024-01-21",
      "2024-01-24",
      "2024-01-27",
      "2024-01-30",
      "2024-02-02",
      "2024-02-05",
      "2024-02-08",
      "2024-02-11",
      "2024-02-14",
      "2024-02-17",
      "2024-02-20",
      "2024-02-23",
      "2024-02-26",
      "2024-02-29",
    ],

    highlights: [
      "Walk the entire 3.337 km Monaco Grand Prix circuit with a motorsport expert",
      "Stand on the exact starting grid where F1 legends begin the race",
      "Visit the famous Casino hairpin and Fairmont hairpin turns",
      "See the tunnel section and infamous chicane where many races were decided",
      "Learn insider racing stories and technical details about this unique street circuit",
    ],

    inclusions: [
      "Formula 1 expert guide with racing knowledge",
      "Circuit map with key points and racing facts",
      "Formula 1 memorabilia viewing",
      "Photo opportunities at iconic circuit locations",
      "Commemorative Monaco Grand Prix pin",
      "Bottled water during the walk",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Food and beverages beyond water provided",
      "Entry to private venues along the route",
      "Gratuities (optional)",
      "Personal purchases",
    ],

    itinerary: [
      "10:00 - Meet at Automobile Club de Monaco for introduction",
      "10:15 - Begin circuit walk at the official starting grid on Boulevard Albert 1er",
      "10:30 - Visit Sainte Devote corner, site of many first-lap incidents",
      "10:45 - Climb up Beau Rivage to Casino Square",
      "11:00 - Explore the famous Casino hairpin with racing stories",
      "11:15 - Continue to the Mirabeau and Portier sections",
      "11:30 - View the tunnel entrance (exterior only)",
      "11:45 - Visit the harbor chicane and Swimming Pool complex",
      "12:00 - Walk through Rascasse corner and toward Anthony Noghès corner",
      "12:15 - Complete the circuit loop back at the starting point",
      "12:30 - Tour conclusion with Formula 1 memorabilia viewing",
    ],

    faqs: [
      {
        question: "How physically demanding is this walking tour?",
        answer:
          "The tour involves approximately 3.3 km (2 miles) of walking including some uphill sections and stairs, particularly in the Beau Rivage area. We maintain a moderate pace with frequent stops for explanations and photos. While not excessively strenuous, comfortable walking shoes are essential, and a basic level of fitness is recommended.",
      },
      {
        question:
          "Will we see race preparations if visiting close to the Grand Prix?",
        answer:
          "If you visit in the weeks leading up to the Monaco Grand Prix (held annually in late May), you'll see the gradual transformation of the city as grandstands are erected and barriers installed. Our tour route may be slightly modified during this period due to construction, but this offers a fascinating behind-the-scenes look at how a city street circuit comes together.",
      },
      {
        question: "Does the tour include a visit to a Formula 1 team garage?",
        answer:
          "This tour focuses on the public streets that make up the circuit. Formula 1 team facilities are highly secured and not accessible outside of race weekends, and even then only with special passes. However, our guides share insider knowledge about team operations and logistics for this unique street circuit.",
      },
    ],
  },

  {
    title: "Monaco by Night: Sunset & Casino Experience",
    description:
      "Experience Monaco's glamorous transformation after dark, from a spectacular sunset over the Mediterranean to the excitement of Monte Carlo's legendary casino. Includes an elegant three-course dinner at a premium restaurant.",
    city: "Monaco",
    country: "Monaco",
    region: "Western Europe",
    images: [
      "/images/tours/monaco/monaco-sunset.jpg",
      "/images/tours/monaco/casino-night.jpg",
    ],
    duration: "5 hours",
    price: "$250",
    rating: 4.9,
    tags: ["Evening", "Dining", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Fairmont Monte Carlo Hotel, 12 Avenue des Spélugues, Monaco",
      coordinates: {
        latitude: 43.7394,
        longitude: 7.4292,
      },
      instructions:
        "Meet in the Fairmont Hotel lobby near the concierge desk. Your host will be wearing a black suit with a gold 'Monaco Elite' pin.",
      contactNumber: "+377 99 99 30 02",
      contactEmail: "nighttour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-22",
      "2023-12-24",
      "2023-12-26",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
    ],

    highlights: [
      "Enjoy champagne at a premium vantage point while watching the Mediterranean sunset",
      "Experience a three-course gourmet dinner at an exclusive Monaco restaurant",
      "Tour the illuminated city-state with its dazzling evening light displays",
      "Visit the Monte Carlo Casino with VIP admission to gaming rooms",
      "See luxury supercars and high society gathering around Casino Square",
    ],

    inclusions: [
      "Welcome glass of champagne at sunset viewpoint",
      "Three-course gourmet dinner at premium restaurant",
      "One glass of wine with dinner",
      "Professional evening guide/host",
      "Casino entry fees and gaming room access",
      "Complimentary casino gaming chip (€25 value)",
      "Walking tour of illuminated Monaco highlights",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond those mentioned",
      "Additional casino chips beyond complimentary chip",
      "Gratuities (recommended but optional)",
      "Formal attire rental (required for casino entry, available if needed)",
    ],

    itinerary: [
      "19:00 - Meet at Fairmont Hotel for welcome and introductions",
      "19:15 - Walk to sunset viewpoint for champagne toast overlooking the Mediterranean",
      "19:45 - Stroll through illuminated gardens to dinner venue",
      "20:00 - Gourmet three-course dinner at exclusive Monaco restaurant",
      "21:30 - Evening walking tour through illuminated Monaco highlights",
      "22:00 - Arrive at Casino Square to admire luxury vehicles and nighttime ambiance",
      "22:15 - VIP entry to Monte Carlo Casino with gaming rooms access",
      "22:30 - Introduction to casino games and gaming chip presentation",
      "22:45 - Free time for gaming or enjoying casino atmosphere",
      "00:00 - Tour officially ends (guests may stay longer at casino if desired)",
    ],

    faqs: [
      {
        question: "What is the dress code for this evening tour?",
        answer:
          "Formal evening attire is required for casino entry. Gentlemen must wear a jacket and tie (blazer acceptable), dress shoes, and long trousers. Ladies should wear cocktail dresses, formal evening wear, or elegant pantsuits. The casino strictly enforces these dress codes in the gaming rooms. Jeans, shorts, sneakers, and overly casual attire are not permitted inside the casino gaming areas.",
      },
      {
        question: "Do I need to bring identification?",
        answer:
          "Yes, a valid passport is required for entry into the gaming rooms at Monte Carlo Casino, regardless of your nationality or age. Casino policy requires this identification, and entry will be refused without it. No photocopies are accepted - you must have your original passport.",
      },
      {
        question: "Is the dinner suitable for those with dietary restrictions?",
        answer:
          "Yes, the restaurant can accommodate most dietary requirements including vegetarian, gluten-free, and common allergies with advance notice. Please inform us of any dietary restrictions at least 48 hours before the tour so we can make appropriate arrangements with the restaurant. The menu typically features Mediterranean cuisine with French and Italian influences, using premium seasonal ingredients.",
      },
    ],
  },

  {
    title: "Hidden Monaco History & Secret Corners",
    description:
      "Discover the lesser-known stories and places of Monaco on this insightful walking tour that reveals the principality's fascinating history beyond the glamour, from medieval origins to wartime intrigue and royal secrets.",
    city: "Monaco",
    country: "Monaco",
    region: "Western Europe",
    images: [
      "/images/tours/monaco/old-monaco.jpg",
      "/images/tours/monaco/hidden-corners.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.6,
    tags: ["History", "Walking", "Off the Beaten Path"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Place de la Visitation, Monaco-Ville, Monaco",
      coordinates: {
        latitude: 43.7315,
        longitude: 7.4226,
      },
      instructions:
        "Meet at the small square near the Cathedral in Monaco-Ville (The Rock). Your guide will be holding a blue folder with 'Hidden Monaco' written on it.",
      contactNumber: "+377 99 99 30 03",
      contactEmail: "historytour@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-20",
      "2023-12-23",
      "2023-12-26",
      "2023-12-29",
      "2024-01-01",
      "2024-01-04",
      "2024-01-07",
      "2024-01-10",
      "2024-01-13",
      "2024-01-16",
      "2024-01-19",
      "2024-01-22",
      "2024-01-25",
      "2024-01-28",
      "2024-01-31",
      "2024-02-03",
      "2024-02-06",
      "2024-02-09",
      "2024-02-12",
      "2024-02-15",
      "2024-02-18",
      "2024-02-21",
      "2024-02-24",
      "2024-02-27",
    ],

    highlights: [
      "Explore Monaco-Ville's medieval streets and discover their surprising history",
      "Learn about Monaco's strategic importance through centuries of European politics",
      "Visit hidden gardens and secluded viewpoints known only to locals",
      "Discover the Grimaldi family's 700+ year rule and colorful historical characters",
      "Explore sites related to Monaco's wartime experiences and diplomatic maneuvering",
    ],

    inclusions: [
      "Local historian guide with specialized knowledge",
      "Entry to St. Nicholas Cathedral",
      "Access to special viewpoints normally missed by tourists",
      "Historical maps and photographs for context",
      "Traditional Monégasque snack sampling",
      "Bottled water",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Entry fees to additional sites not specified",
      "Meals and additional beverages",
      "Gratuities (optional)",
      "Personal expenses",
    ],

    itinerary: [
      "10:00 - Meet at Place de la Visitation for introduction to Monaco's early history",
      "10:15 - Visit St. Nicholas Cathedral with historical context beyond Grace Kelly",
      "10:45 - Explore hidden medieval streets of Monaco-Ville",
      "11:15 - Discover secluded gardens with panoramic views",
      "11:30 - Learn about Monaco's surprising military history and fortifications",
      "11:45 - Visit sites connected to World War II and Monaco's delicate position",
      "12:15 - Explore lesser-known royal residences and historical buildings",
      "12:30 - Sample traditional Monégasque barbagiuan pastry with historical context",
      "12:45 - Final stories of Monaco's transformation from poor principality to wealthy enclave",
      "13:00 - Tour conclusion with recommendations for further exploration",
    ],

    faqs: [
      {
        question: "How strenuous is this walking tour?",
        answer:
          "This tour involves moderate walking (approximately 2 km/1.2 miles) through Monaco-Ville, which sits on a rocky promontory. While distances aren't great, there are some steep streets and steps. We maintain a leisurely pace with frequent stops, but comfortable walking shoes are essential. Monaco's historic areas feature some cobblestone streets and uneven surfaces.",
      },
      {
        question:
          "Does this tour overlap with the main Monaco highlights tour?",
        answer:
          "This specialized tour is designed to complement rather than duplicate our Monaco Glamour & Monte Carlo Elegance tour. While we do visit Monaco-Ville, we focus on different aspects, hidden corners, and lesser-known historical sites. This tour delves deeper into the principality's surprising military, political, and cultural history beyond the casinos and glamour.",
      },
      {
        question: "Will we visit the Prince's Palace?",
        answer:
          "We view the Palace exterior and explain its historical significance, but this tour does not include interior access. If you wish to visit inside the State Apartments (open April-October), we recommend combining this tour with our Monaco Glamour tour or visiting independently afterward. Our guide can provide practical advice for tickets and optimal visiting times.",
      },
    ],
  },
  {
    title: "Monaco Yacht Tour: Luxury on the Water",
    description:
      "Experience Monaco's stunning coastline and luxury yachts on a private boat tour. Cruise the Mediterranean, visit hidden coves, and enjoy breathtaking views of the principality from the water.",
    city: "Monaco",
    country: "Monaco",
    region: "Western Europe",
    images: [
      "/images/tours/monaco/yacht-tour.jpg",
      "/images/tours/monaco/monaco-coastline.jpg",
    ],
    duration: "4 hours",
    price: "$450",
    rating: 4.9,
    tags: ["Yachting", "Luxury", "Coastal Views"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",

    meetingPoint: {
      address: "Port Hercule, Monaco",
      coordinates: {
        latitude: 43.7333,
        longitude: 7.4167,
      },
      instructions:
        "Meet at the main dock in Port Hercule near the 'Monaco Yachts' sign. Your captain will be wearing a navy polo shirt with 'Monaco Yachts' embroidered on it.",
      contactNumber: "+377 99 99 30 04",
    },
    availableDates: [
      "2023-12-16",
      "2023-12-19",
      "2023-12-22",
      "2023-12-25",
      "2023-12-28",
      "2023-12-31",
      "2024-01-02",
      "2024-01-05",
      "2024-01-08",
      "2024-01-11",
      "2024-01-14",
      "2024-01-17",
      "2024-01-20",
      "2024-01-23",
      "2024-01-26",
      "2024-01-29",
      "2024-02-01",
      "2024-02-04",
      "2024-02-07",
      "2024-02-10",
      "2024-02-13",
      "2024-02-16",
      "2024-02-19",
      "2024-02-22",
      "2024-02-25",
      "2024-02-28",
    ],

    highlights: [
      "Private yacht cruise along Monaco's stunning coastline",
      "Visit hidden coves and secluded beaches accessible only by boat",
      "Enjoy panoramic views of the principality from the water",
      "Learn about Monaco's maritime history and luxury yacht culture",
      "Relax with complimentary refreshments on board",
    ],

    inclusions: [
      "Private yacht rental for up to 6 guests",
      "Professional captain and crew",
      "Complimentary refreshments (water, soft drinks, snacks)",
      "Towels and sun loungers on board",
      "Snorkeling gear available upon request",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond those provided",
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "10:00 - Meet at Port Hercule for introductions and safety briefing",
      "10:15 - Board the yacht and set sail along the coastline",
      "10:30 - Cruise past iconic landmarks like the Monte Carlo Casino and Prince's Palace from the water",
      "11:00 - Stop at a secluded cove for swimming and relaxation (weather permitting)",
      "11:30 - Continue cruising with opportunities for photos and sightseeing",
      "12:00 - Enjoy refreshments on board while taking in the views",
      "12:30 - Visit a hidden beach accessible only by boat for more swimming and relaxation",
      "13:00 - Begin return journey to Port Hercule",
      "13:30 - Arrive back at Port Hercule and conclude the tour",
    ],
  },
];

export default monacoTours;
