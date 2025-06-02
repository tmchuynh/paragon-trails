import { Tour } from "@/lib/interfaces/services/tours";
export const londonTours: Tour[] = [
  {
    title: "Hidden London Underground & Wartime Secrets",
    description:
      "Explore abandoned tube stations, Churchill's secret bunkers, and hidden tunnels beneath London with exclusive access to sites normally closed to the public, guided by a historian specializing in London's wartime history.",
    city: "London",
    country: "United Kingdom",
    region: "Greater London",
    images: [
      "https://media.istockphoto.com/id/1330587634/photo/old-underground-london-tunnel.jpg",
      "https://images.unsplash.com/photo-1576921450048-7b5d16976c63",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["History", "Underground", "WWII"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    itinerary: [
      "10:00 - Meet at designated entrance near Aldwych Station",
      "10:15 - Begin underground exploration of disused tunnels",
      "11:00 - Guided walk through Churchill War Rooms",
      "12:00 - Recap, Q&A, and optional museum time",
      "13:00 - Tour ends at Westminster",
    ],
    faqs: [
      {
        question: "Is this tour suitable for those with claustrophobia?",
        answer:
          "Some sections involve narrow passageways. Those with severe claustrophobia should contact us prior to booking for tailored advice.",
      },
      {
        question: "What should I wear for the underground tour?",
        answer:
          "Comfortable shoes and a jacket are advised, as it may be damp. We provide torches if needed.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, for ages 10+. Content can be adjusted for families upon request.",
      },
    ],
    inclusions: [
      "Expert guide with historical knowledge",
      "Access to disused tube stations and Churchill War Rooms",
      "Use of torches and safety equipment",
      "Small group size for personalized experience",
    ],
    exclusions: [
      "Transportation to the meeting point",
      "Food and beverages",
      "Gratuities for the guide (optional)",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are non-refundable.",
    meetingPoint: {
      address: "Aldwych Station Entrance, London",
      coordinates: {
        latitude: 51.5133,
        longitude: -0.1196,
      },
      instructions:
        "Meet outside the Aldwych Station entrance. Your guide will be holding a sign with 'Hidden London Tour' written on it.",
      contactNumber: "+44 20 7946 0958",
    },
  },
  {
    title: "Royal London & Changing of the Guard Experience",
    description:
      "Witness royal ceremonies from insider positions, tour the ceremonial heart of London, and learn about royal traditions from an expert with connections to royal institutions.",
    city: "London",
    country: "United Kingdom",
    region: "Greater London",
    images: [
      "https://images.unsplash.com/photo-1595581532321-0d2b7ff6b4db",
      "https://cdn.pixabay.com/photo/2020/02/13/10/57/buckingham-palace-4845069_1280.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Royal", "Ceremony", "Tradition"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    itinerary: [
      "09:00 - Meet outside Green Park Station",
      "09:30 - Guided walk to Buckingham Palace",
      "10:00 - Watch Changing of the Guard from VIP viewing area",
      "11:00 - Walk to Horse Guards Parade and Royal Mall",
      "12:30 - End at Westminster Abbey",
    ],
    faqs: [
      {
        question: "Is the Changing of the Guard guaranteed?",
        answer:
          "Subject to schedule and weather. Alternatives will be provided if canceled.",
      },
      {
        question: "Can we enter Buckingham Palace during the tour?",
        answer:
          "No, but we explore its surroundings. Separate entry tickets available upon request.",
      },
    ],
    inclusions: [
      "Expert guide with royal connections",
      "VIP viewing area for Changing of the Guard",
      "Guided walk through royal landmarks",
      "Small group size for personalized experience",
    ],
    exclusions: [
      "Transportation to the meeting point",
      "Food and beverages",
      "Gratuities for the guide (optional)",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are non-refundable.",
    meetingPoint: {
      address: "Green Park Station, London",
      coordinates: {
        latitude: 51.5064,
        longitude: -0.1422,
      },
      instructions:
        "Meet outside Green Park Station, near the entrance to the park. Your guide will be holding a sign with 'Royal London Tour' written on it.",
      contactNumber: "+44 20 7946 0958",
    },
  },
  {
    title: "London's Hidden Gardens & Secret Parks",
    description:
      "Discover London's lesser-known green spaces, from tranquil hidden gardens to historic parks, guided by a local horticulturist who shares the stories and flora of these peaceful retreats.",
    city: "London",
    country: "United Kingdom",
    region: "Greater London",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipM4nBboUGL95yD6RQ8KJ0qk5vNU-AJqONhECeWD=w1080-h608-p-k-no",
      "https://cdn.pixabay.com/photo/2020/09/06/16/47/london-5547822_1280.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Nature", "Gardens", "Relaxation"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    itinerary: [
      "14:00 - Meet at Barbican Conservatory entrance",
      "14:15 - Walk through historic Postman’s Park",
      "15:00 - Visit the Chelsea Physic Garden",
      "16:00 - Relaxation break and optional tea service",
      "17:00 - Tour ends near Sloane Square",
    ],
    faqs: [
      {
        question: "Are the gardens wheelchair accessible?",
        answer:
          "Most are accessible. Let us know about any mobility concerns in advance.",
      },
      {
        question: "What should I wear for the garden tour?",
        answer:
          "Walking shoes and weather-appropriate layers. Umbrella recommended for rainy days.",
      },
      {
        question: "Can children join this tour?",
        answer:
          "Yes, it's family-friendly. Activities can be provided for children.",
      },
    ],
    inclusions: [
      "Local horticulturist guide",
      "Access to private gardens and parks",
      "Relaxation break with optional tea service",
      "Small group size for personalized experience",
    ],
    exclusions: [
      "Transportation to the meeting point",
      "Food and beverages (except optional tea service)",
      "Gratuities for the guide (optional)",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are non-refundable.",
    meetingPoint: {
      address: "Barbican Conservatory, Silk Street, London",
      coordinates: {
        latitude: 51.52,
        longitude: -0.0922,
      },
      instructions:
        "Meet at the entrance of the Barbican Conservatory. Your guide will be holding a sign with 'Hidden Gardens Tour' written on it.",
      contactNumber: "+44 20 7946 0958",
    },
  },
  {
    title: "London Nightlife & Rooftop Cocktails",
    description:
      "Experience the best of London nightlife with guided access to sky-high rooftop bars, hidden speakeasies, and stylish lounges with panoramic views of the skyline.",
    city: "London",
    country: "United Kingdom",
    region: "Greater London",
    images: [
      "https://img.freepik.com/free-photo/view-london-sunset-with-city-skyscrapers_53876-143223.jpg",
      "https://media.istockphoto.com/id/1197945175/photo/rooftop-bar-in-london-at-night.jpg",
    ],
    duration: "4 hours",
    price: "$110",
    rating: 4.6,
    tags: ["Nightlife", "Drinks", "Skyline"],
    isNightlife: true,
    isLuxury: true,
    isRomantic: true,
    isLocalExperience: true,
    isOffTheBeatenPath: false,
    isHistorical: false,
    tourCategoryId: "luxury",
    itinerary: [
      "19:00 - Meet at Sky Garden entrance for welcome drink",
      "19:45 - Private rooftop bar tour with city views",
      "21:00 - Hidden speakeasy experience with craft cocktails",
      "22:00 - End with VIP lounge access or transfer options",
    ],
    faqs: [
      {
        question: "Is there a dress code?",
        answer:
          "Yes, smart casual. No sportswear or flip-flops allowed in rooftop venues.",
      },
      {
        question: "Are drinks included?",
        answer:
          "One welcome drink is included. Additional beverages are available for purchase.",
      },
      {
        question: "Is this suitable for non-drinkers?",
        answer:
          "Yes, mocktails and non-alcoholic options are available at all venues.",
      },
    ],
    inclusions: [
      "Expert nightlife guide",
      "Welcome drink at Sky Garden",
      "Access to exclusive rooftop bars and speakeasies",
      "VIP lounge access or transfer options",
      "Small group size for personalized experience",
    ],
    exclusions: [
      "Transportation to the meeting point",
      "Additional food and beverages",
      "Gratuities for the guide (optional)",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are non-refundable.",
    meetingPoint: {
      address: "Sky Garden, 20 Fenchurch Street, London",
      coordinates: {
        latitude: 51.5123,
        longitude: -0.0802,
      },
      instructions:
        "Meet at the entrance of Sky Garden. Your guide will be holding a sign with 'London Nightlife Tour' written on it.",
      contactNumber: "+44 20 7946 0958",
    },
  },
  {
    title: "Street Art & Urban Culture Tour",
    description:
      "Explore London's vibrant street art scene with a local artist, visiting iconic murals, hidden graffiti spots, and learning about the stories behind the art in neighborhoods like Shoreditch and Camden.",
    city: "London",
    country: "United Kingdom",
    region: "Greater London",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.5,
    tags: ["Art", "Culture", "Urban"],
    isCultural: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    itinerary: [
      "10:00 - Meet at Old Street Station",
      "10:15 - Guided walk through Shoreditch's street art hotspots",
      "11:30 - Visit Camden Market for urban art and culture",
      "12:30 - End at Brick Lane with optional lunch recommendations",
    ],
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, it's family-friendly. We can adjust content for younger audiences.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Absolutely! Photography is encouraged to capture the vibrant street art.",
      },
      {
        question: "What should I wear?",
        answer:
          "Comfortable walking shoes and weather-appropriate clothing are recommended.",
      },
    ],
    inclusions: [
      "Local street art guide",
      "Access to hidden street art locations",
      "Small group size for personalized experience",
      "Optional lunch recommendations at Brick Lane",
    ],
    exclusions: [
      "Transportation to the meeting point",
      "Food and beverages",
      "Gratuities for the guide (optional)",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are non-refundable.",
    meetingPoint: {
      address: "Old Street Station, London",
      coordinates: {
        latitude: 51.5255,
        longitude: -0.0872,
      },
      instructions:
        "Meet outside Old Street Station, near the entrance to the station. Your guide will be holding a sign with 'Street Art Tour' written on it.",
      contactNumber: "+44 20 7946 0958",
    },
  },
  {
    title: "Historic Pubs & Brewery Tour",
    description:
      "Discover London's historic pubs and breweries with a local guide, sampling traditional ales and learning about the city's brewing heritage in iconic establishments dating back centuries.",
    city: "London",
    country: "United Kingdom",
    region: "Greater London",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.4,
    tags: ["Food", "Drink", "History"],
    isCulinary: true,
    isHistorical: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    itinerary: [
      "18:00 - Meet at the first historic pub in Covent Garden",
      "18:15 - Guided walk to the second pub with brewing history",
      "19:00 - Sample local ales and learn about brewing traditions",
      "20:00 - End at a brewery with tasting options available",
    ],
    faqs: [
      {
        question: "Is this tour suitable for non-drinkers?",
        answer: "Yes, non-alcoholic options are available at all venues.",
      },
      {
        question: "What should I wear?",
        answer:
          "Casual attire is fine, but smart casual is recommended for some pubs.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, children are welcome. We can provide soft drinks for them.",
      },
    ],
    inclusions: [
      "Local guide with brewing knowledge",
      "Samples of traditional ales",
      "Access to historic pubs and breweries",
      "Small group size for personalized experience",
    ],
    exclusions: [
      "Transportation to the meeting point",
      "Additional food and beverages",
      "Gratuities for the guide (optional)",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are non-refundable.",
    meetingPoint: {
      address: "Covent Garden, London",
      coordinates: {
        latitude: 51.5115,
        longitude: -0.1235,
      },
      instructions:
        "Meet outside the first historic pub in Covent Garden. Your guide will be holding a sign with 'Historic Pubs Tour' written on it.",
      contactNumber: "+44 20 7946 0958",
    },
  },
];
export default londonTours;
