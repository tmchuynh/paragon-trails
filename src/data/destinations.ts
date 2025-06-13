import { Destination } from "@/lib/interfaces/services/destinations";

export const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Paris",
    country: "France",
    continent: "Europe",
    region: "Western Europe",
    description: "The City of Light, renowned for its art, fashion, gastronomy, and culture. Paris captivates visitors with its iconic landmarks, world-class museums, and romantic atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=600&fit=crop",
    ],
    popularWith: ["Couples", "Art lovers", "Food enthusiasts", "Culture seekers"],
    population: 2161000,
    capital: "Paris",
    area: {
      total: 105.4,
      unit: "km²"
    },
    geography: {
      terrain: "Urban cityscape along the Seine River",
      elevation: {
        average: 35,
        highest: 130,
        lowest: 28,
        unit: "meters"
      },
      landmarks: ["Seine River", "Ile de la Cité", "Montmartre Hill"]
    },
    connectivity: {
      internetSpeed: "High-speed fiber",
      wifiAvailability: true,
      mobileNetworkCoverage: "Excellent"
    },
    visaRequirements: "Schengen visa for stays over 90 days for non-EU citizens",
    climate: {
      season: "Temperate oceanic",
      temperature: {
        high: 25,
        low: 3,
        unit: "°C"
      },
      rainfall: "Moderate throughout year",
      humidity: "65-75%",
      averageTemperature: 12
    },
    currency: {
      code: "EUR",
      symbol: "€",
      name: "Euro"
    },
    pricing: {
      averageDailyBudget: 150,
      accommodationRange: {
        budget: 80,
        midRange: 150,
        luxury: 400
      },
      foodAndDrink: 50,
      transportation: 15,
      activitiesAndAttractions: 35
    },
    language: ["French", "English"],
    timezone: "CET (UTC+1)",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Champs-Élysées",
      "Montmartre",
      "Seine River Cruises"
    ],
    bestTimeToVisit: ["April-June", "September-October"],
    attractions: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe", "Sacré-Cœur", "Palace of Versailles"],
    activities: ["Seine River Cruise", "Food Walking Tours", "Art Museum Visits", "Shopping", "Cabaret Shows"],
    cuisine: ["Croissants", "French Onion Soup", "Coq au Vin", "Macarons", "Wine Tasting"],
    culture: {
      festivals: ["Bastille Day", "Nuit Blanche", "Paris Fashion Week"],
      traditions: ["Café culture", "Sunday market visits", "Evening strolls"],
      artsAndCrafts: ["Fashion design", "Perfume making", "Patisserie"],
      musicAndDance: ["Cabaret", "Classical music", "Jazz"],
      localCustoms: ["Greeting with kisses", "Long lunch breaks", "Evening aperitifs"],
      languages: ["French", "English"],
      cuisine: ["French pastries", "Wine", "Cheese", "Haute cuisine"]
    },
    transportation: {
      airports: ["Charles de Gaulle (CDG)", "Orly (ORY)"],
      publicTransport: ["Metro", "Bus", "RER", "Trams"],
      taxi: true,
      rental: true
    },
    accommodation: {
      budget: 80,
      midRange: 150,
      luxury: 400,
      currency: "EUR"
    },
    rating: 4.8,
    reviews: 15420,
    tags: ["Romantic", "Art", "Culture", "Fashion", "Gastronomy"],
    coordinates: {
      latitude: 48.8566,
      longitude: 2.3522
    },
    visa: {
      required: false,
      details: "Schengen visa for stays over 90 days for non-EU citizens"
    },
    safety: {
      level: "Generally Safe",
      advisories: ["Pickpocketing in tourist areas", "Be aware of scams near attractions"],
      crimeRate: "Low to moderate",
      healthRisks: ["None significant"],
      emergencyNumber: "112"
    },
    tradition: ["Art appreciation", "Wine culture", "Fashion consciousness", "Culinary excellence"]
  },
  {
    id: "2",
    name: "Tokyo",
    country: "Japan",
    region: "East Asia",
    description: "A vibrant metropolis where ancient traditions blend seamlessly with cutting-edge technology. Tokyo offers incredible cuisine, rich culture, and unique experiences.",
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=600&fit=crop",
    ],
    climate: {
      season: "Humid subtropical",
      temperature: {
        high: 30,
        low: 2,
        unit: "°C"
      },
      rainfall: "High in summer, moderate in winter",
      humidity: "60-80%"
    },
    currency: {
      code: "JPY",
      symbol: "¥",
      name: "Japanese Yen"
    },
    language: ["Japanese", "English (limited)"],
    timezone: "JST (UTC+9)",
    highlights: [
      "Senso-ji Temple",
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Tsukiji Fish Market",
      "Meiji Shrine",
      "Harajuku District"
    ],
    bestTimeToVisit: ["March-May", "September-November"],
    attractions: ["Tokyo Skytree", "Imperial Palace", "Asakusa", "Ginza", "Akihabara"],
    activities: ["Sushi Making", "Temple Visits", "Shopping", "Karaoke", "Sumo Wrestling"],
    cuisine: ["Sushi", "Ramen", "Tempura", "Yakitori", "Wagyu Beef"],
    culture: ["Temples", "Traditional Gardens", "Tea Ceremony", "Anime & Manga", "Technology"],
    transportation: {
      airport: "Narita (NRT), Haneda (HND)",
      publicTransport: ["JR Lines", "Tokyo Metro", "Toei Subway", "Buses"],
      taxi: true,
      rental: true
    },
    accommodation: {
      budget: 60,
      midRange: 120,
      luxury: 350,
      currency: "USD"
    },
    rating: 4.7,
    reviews: 12890,
    tags: ["Technology", "Culture", "Food", "Traditional", "Modern"],
    coordinates: {
      latitude: 35.6762,
      longitude: 139.6503
    },
    visa: {
      required: false,
      details: "Tourist visa on arrival for many nationalities (90 days)"
    },
    safety: {
      level: "Very Safe",
      advisories: ["Natural disasters (earthquakes)", "Language barrier"]
    }
  },
  {
    id: "3",
    name: "New York City",
    country: "United States",
    region: "North America",
    description: "The city that never sleeps. NYC is a global hub for art, fashion, food, and finance, offering endless entertainment and iconic landmarks.",
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop",
    ],
    climate: {
      season: "Humid continental",
      temperature: {
        high: 29,
        low: -3,
        unit: "°C"
      },
      rainfall: "Moderate year-round",
      humidity: "55-75%"
    },
    currency: {
      code: "USD",
      symbol: "$",
      name: "US Dollar"
    },
    language: ["English", "Spanish", "Many others"],
    timezone: "EST (UTC-5)",
    highlights: [
      "Statue of Liberty",
      "Empire State Building",
      "Central Park",
      "Times Square",
      "Brooklyn Bridge",
      "9/11 Memorial"
    ],
    bestTimeToVisit: ["April-June", "September-November"],
    attractions: ["Statue of Liberty", "One World Trade Center", "High Line", "Manhattan Bridge", "Coney Island"],
    activities: ["Broadway Shows", "Museum Visits", "Food Tours", "Shopping", "Helicopter Tours"],
    cuisine: ["New York Pizza", "Bagels", "Cheesecake", "Deli Sandwiches", "International Cuisine"],
    culture: ["Broadway", "Museums", "Street Art", "Jazz", "Fashion"],
    transportation: {
      airport: "JFK, LaGuardia (LGA), Newark (EWR)",
      publicTransport: ["Subway", "Bus", "Taxi", "Uber/Lyft"],
      taxi: true,
      rental: true
    },
    accommodation: {
      budget: 100,
      midRange: 250,
      luxury: 600,
      currency: "USD"
    },
    rating: 4.6,
    reviews: 18750,
    tags: ["Urban", "Culture", "Entertainment", "Shopping", "Food"],
    coordinates: {
      latitude: 40.7128,
      longitude: -74.0060
    },
    visa: {
      required: true,
      details: "ESTA for eligible countries, visa required for others"
    },
    safety: {
      level: "Generally Safe",
      advisories: ["Petty crime in some areas", "Crowded tourist areas"]
    }
  },
  {
    id: "4",
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    description: "Island paradise known for its beautiful beaches, ancient temples, lush rice terraces, and vibrant Hindu culture. Perfect for relaxation and adventure.",
    images: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555400083-7e3bbb4c632d?w=1200&h=600&fit=crop",
    ],
    climate: {
      season: "Tropical",
      temperature: {
        high: 32,
        low: 24,
        unit: "°C"
      },
      rainfall: "Wet season Nov-Mar, dry season Apr-Oct",
      humidity: "75-85%"
    },
    currency: {
      code: "IDR",
      symbol: "Rp",
      name: "Indonesian Rupiah"
    },
    language: ["Indonesian", "Balinese", "English (tourist areas)"],
    timezone: "WITA (UTC+8)",
    highlights: [
      "Tanah Lot Temple",
      "Ubud Rice Terraces",
      "Mount Batur",
      "Seminyak Beach",
      "Uluwatu Temple",
      "Sacred Monkey Forest"
    ],
    bestTimeToVisit: ["April-September"],
    attractions: ["Tanah Lot", "Uluwatu Temple", "Sekumpul Falls", "Tegallalang Rice Terraces", "Goa Gajah"],
    activities: ["Surfing", "Temple Tours", "Volcano Trekking", "Yoga Retreats", "Cooking Classes"],
    cuisine: ["Nasi Goreng", "Satay", "Rendang", "Gado-Gado", "Fresh Tropical Fruits"],
    culture: ["Hindu Temples", "Traditional Dance", "Art Villages", "Ceremonies", "Meditation"],
    transportation: {
      airport: "Ngurah Rai International (DPS)",
      publicTransport: ["Bemo", "Buses", "Ride-sharing"],
      taxi: true,
      rental: true
    },
    accommodation: {
      budget: 25,
      midRange: 75,
      luxury: 250,
      currency: "USD"
    },
    rating: 4.8,
    reviews: 9340,
    tags: ["Beach", "Spiritual", "Adventure", "Tropical", "Culture"],
    coordinates: {
      latitude: -8.3405,
      longitude: 115.0920
    },
    visa: {
      required: true,
      details: "Visa on arrival or e-Visa for most nationalities (30 days)"
    },
    safety: {
      level: "Generally Safe",
      advisories: ["Traffic safety", "Petty theft", "Natural disasters"]
    }
  },
  {
    id: "5",
    name: "Cape Town",
    country: "South Africa",
    region: "Southern Africa",
    description: "Stunning coastal city nestled between mountains and ocean. Known for its natural beauty, wine regions, rich history, and vibrant culture.",
    images: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563656353898-febc9270be0b?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578454167567-d8738d97a375?w=1200&h=600&fit=crop",
    ],
    climate: {
      season: "Mediterranean",
      temperature: {
        high: 26,
        low: 7,
        unit: "°C"
      },
      rainfall: "Winter rainfall (May-Aug)",
      humidity: "60-70%"
    },
    currency: {
      code: "ZAR",
      symbol: "R",
      name: "South African Rand"
    },
    language: ["English", "Afrikaans", "Xhosa", "Other local languages"],
    timezone: "SAST (UTC+2)",
    highlights: [
      "Table Mountain",
      "V&A Waterfront",
      "Robben Island",
      "Cape Point",
      "Stellenbosch Wine Region",
      "Camps Bay Beach"
    ],
    bestTimeToVisit: ["October-April"],
    attractions: ["Table Mountain", "Cape of Good Hope", "Kirstenbosch Gardens", "Boulders Beach", "Lion's Head"],
    activities: ["Wine Tasting", "Shark Cage Diving", "Hiking", "Penguin Watching", "Township Tours"],
    cuisine: ["Bobotie", "Biltong", "Boerewors", "Cape Malay Curry", "Rooibos Tea"],
    culture: ["Museums", "Jazz", "Art Galleries", "Markets", "History"],
    transportation: {
      airport: "Cape Town International (CPT)",
      publicTransport: ["MyCiTi Bus", "Metrorail", "Minibus taxis"],
      taxi: true,
      rental: true
    },
    accommodation: {
      budget: 35,
      midRange: 85,
      luxury: 200,
      currency: "USD"
    },
    rating: 4.7,
    reviews: 6789,
    tags: ["Nature", "Wine", "Adventure", "History", "Beach"],
    coordinates: {
      latitude: -33.9249,
      longitude: 18.4241
    },
    visa: {
      required: false,
      details: "Tourist visa on arrival for many nationalities (90 days)"
    },
    safety: {
      level: "Moderate",
      advisories: ["Crime in certain areas", "Don't display valuables", "Use reputable tour operators"]
    }
  }
];