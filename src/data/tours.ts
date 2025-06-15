import { Tour } from "@/lib/interfaces/services/tours";

export const mockTours: Tour[] = [
  // Paris Tours
  {
    id: "TOUR-PAR-001",
    title: "Paris City Highlights & Eiffel Tower Tour",
    description:
      "Discover the magic of Paris on this comprehensive tour featuring iconic landmarks, charming neighborhoods, and skip-the-line access to the Eiffel Tower. Experience the best of the City of Lights with a local guide, including a Seine River cruise and visits to Notre-Dame Cathedral, Louvre Museum, and Montmartre.",
    type: "Guided Tour",
    category: "Sightseeing",
    features: [
      "Skip-the-line Eiffel Tower access",
      "Professional English-speaking guide",
      "Air-conditioned transportation",
      "Small group size (max 20 people)",
      "Photo stops at major landmarks",
    ],
    restrictions: [
      "Not wheelchair accessible",
      "Moderate walking required",
      "Children must be accompanied by adults",
    ],
    images: [
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 89,
      child: 65,
      senior: 79,
      student: 75,
      family: 280,
      currency: "EUR",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Paris",
      country: "France",
      address: "Place du Trocadéro, 75016 Paris",
      coordinates: {
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 2847,
      highlights: [
        "Amazing views from Eiffel Tower",
        "Knowledgeable guide",
        "Well organized tour",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:00",
        activities: [
          "Meet at Trocadéro Gardens",
          "Eiffel Tower exterior tour and photos",
          "Skip-the-line access to Eiffel Tower 2nd floor",
        ],
      },
      {
        startTime: "11:30",
        endTime: "13:00",
        activities: [
          "Seine River cruise",
          "Notre-Dame Cathedral (exterior)",
          "Latin Quarter walking tour",
        ],
      },
      {
        startTime: "14:00",
        endTime: "16:00",
        activities: [
          "Louvre Museum exterior",
          "Champs-Élysées walk",
          "Arc de Triomphe photo stop",
        ],
      },
      {
        startTime: "16:30",
        endTime: "17:00",
        activities: [
          "Montmartre and Sacré-Cœur",
          "Free time for shopping",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Place du Trocadéro, 75016 Paris, France",
      instructions: "Meet your guide by the Eiffel Tower statue",
      contactNumber: "+33 1 42 25 96 10",
    },
  },
  {
    id: "TOUR-PAR-002",
    title: "Versailles Palace & Gardens Day Trip",
    description:
      "Experience the grandeur of the Palace of Versailles and its stunning gardens on this full-day guided tour from Paris. Skip the lines and explore the opulent rooms, Hall of Mirrors, and expansive gardens with a knowledgeable guide.",
    type: "Day Trip",
    category: "History",
    features: [
      "Skip-the-line access to Versailles Palace",
      "Guided tour of the palace interiors",
      "Access to the gardens and fountains show",
      "Round-trip transportation from Paris",
      "Audio guide available in multiple languages",
    ],
    restrictions: [
      "Not wheelchair accessible",
      "Moderate walking required",
      "Children must be accompanied by adults",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 89,
      child: 65,
      senior: 79,
      student: 75,
      family: 280,
      currency: "EUR",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Versailles",
      country: "France",
      address: "Place d'Armes, 78000 Versailles",
      coordinates: {
        latitude: 48.8049,
        longitude: 2.1204,
      },
    },
    reviews: {
      rating: 4.7,
      totalReviews: 1985,
      highlights: [
        "Stunning palace architecture",
        "Beautiful gardens and fountains",
        "Informative guide",
      ],
    },
    itinerary: [
      {
        startTime: "08:30",
        endTime: "10:00",
        activities: [
          "Pickup from central Paris hotel or meeting point",
          "Drive to Versailles (approx. 1 hour)",
          "Arrival at Versailles Palace entrance",
        ],
      },
      {
        startTime: "10:00",
        endTime: "12:00",
        activities: [
          "Guided tour of the Palace of Versailles",
          "Visit the Hall of Mirrors and royal apartments",
          "Learn about the history of the French monarchy",
        ],
      },
      {
        startTime: "12:00",
        endTime: "13:00",
        activities: [
          "Lunch break (not included)",
          "Explore the gardens at your leisure",
          "Enjoy the fountains show (seasonal)",
        ],
      },
      {
        startTime: "13:00",
        endTime: "15:30",
        activities: [
          "Continue exploring the gardens and Trianon palaces",
          "Free time for photos and relaxation",
          "Optional bike or golf cart rental (extra cost)",
        ],
      },
      {
        startTime: "15:30",
        endTime: "17:00",
        activities: [
          "Return drive to Paris",
          "Drop-off at original pickup location",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Place d'Armes, 78000 Versailles, France",
      instructions: "Meet your guide at the main entrance gate",
      contactNumber: "+33 1 42 25 96 10",
    },
  },
  {
    id: "TOUR-PAR-003",
    title: "Mont Saint-Michel & Normandy Beaches Tour",
    description:
      "Explore the breathtaking Mont Saint-Michel and the historic Normandy beaches on this full-day guided tour from Paris. Discover the medieval abbey, picturesque village, and learn about the D-Day landings.",
    type: "Local Experience",
    category: "Culture",
    features: [
      "Guided tour of Mont Saint-Michel Abbey",
      "Visit to Normandy beaches (Omaha and Utah)",
      "Round-trip transportation from Paris",
      "Audio guide available in multiple languages",
      "Lunch included at a local restaurant",
    ],
    restrictions: [
      "Not wheelchair accessible",
      "Moderate walking required",
      "Children must be accompanied by adults",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "12 hours",
    pricing: {
      adult: 129,
      child: 95,
      senior: 115,
      student: 105,
      family: 400,
      currency: "EUR",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Mont Saint-Michel",
      country: "France",
      address: "Mont Saint-Michel, Normandy",
      coordinates: {
        latitude: 48.6361,
        longitude: -1.5119,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 1675,
      highlights: [
        "Incredible views of Mont Saint-Michel",
        "Informative guide on D-Day history",
        "Beautiful coastal scenery",
      ],
    },
    itinerary: [
      {
        startTime: "07:00",
        endTime: "09:30",
        activities: [
          "Pickup from central Paris hotel or meeting point",
          "Drive to Mont Saint-Michel (approx. 3 hours)",
          "Arrival at Mont Saint-Michel parking area",
        ],
      },
      {
        startTime: "09:30",
        endTime: "12:00",
        activities: [
          "Guided tour of Mont Saint-Michel Abbey",
          "Explore the medieval village and shops",
          "Learn about the history of the island",
        ],
      },
      {
        startTime: "12:00",
        endTime: "13:00",
        activities: [
          "Lunch at a local restaurant (included)",
          "Free time to explore the island",
          "Enjoy panoramic views from the ramparts",
        ],
      },
      {
        startTime: "13:00",
        endTime: "15:30",
        activities: [
          "Drive to Normandy beaches (Omaha and Utah)",
          "Visit the American Cemetery and Memorial",
          "Learn about the D-Day landings and history",
        ],
      },
      {
        startTime: "15:30",
        endTime: "18:00",
        activities: [
          "Return drive to Paris",
          "Drop-off at original pickup location",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Place Charles de Gaulle, 75008 Paris, France",
      instructions: "Meet your guide at the Arc de Triomphe",
      contactNumber: "+33 1 42 25 96 10",
    },
  },

  // Tokyo Tours
  {
    id: "TOUR-TOK-001",
    title: "Tokyo Traditional & Modern Culture Experience",
    description:
      "Immerse yourself in Tokyo's fascinating blend of ancient traditions and cutting-edge modernity with visits to temples, markets, and tech districts. Experience a traditional tea ceremony, sushi making workshop, and explore the vibrant neighborhoods of Asakusa, Shibuya, and Harajuku.",
    type: "Cultural Tour",
    category: "Culture",
    features: [
      "Traditional tea ceremony experience",
      "Sushi making workshop",
      "Visit to Senso-ji Temple",
      "Shibuya crossing experience",
      "Local English-speaking guide",
    ],
    restrictions: [
      "Dietary restrictions accommodated with advance notice",
      "Some temple areas require shoe removal",
      "Moderate walking required",
    ],
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=600&fit=crop",
    ],
    duration: "10 hours",
    pricing: {
      adult: 145,
      child: 110,
      senior: 135,
      student: 120,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "Tokyo",
      country: "Japan",
      address: "Asakusa Station, Tokyo",
      coordinates: {
        latitude: 35.6762,
        longitude: 139.6503,
      },
    },
    reviews: {
      rating: 4.9,
      totalReviews: 1923,
      highlights: [
        "Authentic cultural experience",
        "Excellent sushi workshop",
        "Perfect mix of old and new Tokyo",
      ],
    },
    itinerary: [
      {
        startTime: "08:30",
        endTime: "10:30",
        activities: [
          "Meet at Asakusa Station",
          "Senso-ji Temple tour",
          "Traditional shopping street exploration",
        ],
      },
      {
        startTime: "11:00",
        endTime: "13:00",
        activities: [
          "Tea ceremony experience",
          "Traditional Japanese lunch",
          "Meiji Shrine visit",
        ],
      },
      {
        startTime: "14:00",
        endTime: "16:30",
        activities: [
          "Sushi making workshop",
          "Tokyo Skytree area exploration",
          "Modern technology district tour",
        ],
      },
      {
        startTime: "17:00",
        endTime: "18:30",
        activities: [
          "Shibuya crossing experience",
          "Harajuku fashion district",
          "Tour conclusion at Shibuya Station",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Asakusa Station, Exit 1, Tokyo, Japan",
      instructions: "Look for guide with Tokyo Culture Tours sign",
      contactNumber: "+81 3-5555-1234",
    },
  },
  {
    id: "TOUR-TOK-002",
    title: "Kyoto Temples & Gardens Day Trip from Tokyo",
    description:
      "Experience the serene beauty of Kyoto's ancient temples and stunning gardens on this full-day guided tour from Tokyo. Visit iconic sites like Kinkaku-ji (Golden Pavilion), Fushimi Inari Shrine, and Arashiyama Bamboo Grove.",
    type: "Day Trip",
    category: "Religion",
    features: [
      "Round-trip bullet train tickets from Tokyo to Kyoto",
      "Guided tour of Kinkaku-ji and Fushimi Inari Shrine",
      "Visit to Arashiyama Bamboo Grove",
      "Traditional Japanese lunch included",
      "Local English-speaking guide",
    ],
    restrictions: [
      "Not wheelchair accessible",
      "Moderate walking required",
      "Children must be accompanied by adults",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "12 hours",
    pricing: {
      adult: 199,
      child: 150,
      senior: 180,
      student: 170,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Kyoto",
      country: "Japan",
      address: "Kyoto Station, Kyoto",
      coordinates: {
        latitude: 35.0116,
        longitude: 135.7681,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 1450,
      highlights: [
        "Beautiful temples and gardens",
        "Knowledgeable guide with great stories",
        "Efficient bullet train experience",
      ],
    },
    itinerary: [
      {
        startTime: "06:30",
        endTime: "08:30",
        activities: [
          "Pickup from central Tokyo hotel or meeting point",
          "Bullet train ride to Kyoto (approx. 2 hours)",
          "Arrival at Kyoto Station and meet guide",
        ],
      },
      {
        startTime: "09:00",
        endTime: "11:00",
        activities: [
          "Visit Kinkaku-ji (Golden Pavilion)",
          "Explore the beautiful gardens",
          "Learn about Zen Buddhism history",
        ],
      },
      {
        startTime: "11:30",
        endTime: "13:00",
        activities: [
          "Fushimi Inari Shrine visit",
          "Hike through the iconic torii gates",
          "Traditional Japanese lunch at local restaurant",
        ],
      },
      {
        startTime: "13:30",
        endTime: "15:30",
        activities: [
          "Arashiyama Bamboo Grove exploration",
          "Visit Tenryu-ji Temple and gardens",
          "Free time for photos and shopping",
        ],
      },
      {
        startTime: "16:00",
        endTime: "18:30",
        activities: [
          "Return bullet train to Tokyo",
          "Drop-off at original pickup location",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Tokyo Station, Marunouchi, Chiyoda City, Tokyo",
      instructions: "Meet your guide at the Shinkansen ticket gate",
      contactNumber: "+81 3-5555-6789",
    },
  },
  {
    id: "TOUR-TOK-003",
    title: "Nara & Osaka Cultural Day Trip from Tokyo",
    description:
      "Discover the cultural treasures of Nara and Osaka on this full-day guided tour from Tokyo. Visit Nara's famous deer park, Todai-ji Temple, and explore Osaka's vibrant Dotonbori district.",
    type: "Cultural Tour",
    category: "Culture",
    features: [
      "Round-trip bullet train tickets from Tokyo to Nara and Osaka",
      "Guided tour of Nara Park and Todai-ji Temple",
      "Explore Osaka's Dotonbori district",
      "Traditional Japanese lunch included",
      "Local English-speaking guide",
    ],
    restrictions: [
      "Not wheelchair accessible",
      "Moderate walking required",
      "Children must be accompanied by adults",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "12 hours",
    pricing: {
      adult: 199,
      child: 150,
      senior: 180,
      student: 170,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Nara/Osaka",
      country: "Japan",
      address: "Nara Park, Nara / Dotonbori, Osaka",
      coordinates: {
        latitude: 34.6851,
        longitude: 135.8048,
      },
    },
    reviews: {
      rating: 4.7,
      totalReviews: 1200,
      highlights: [
        "Friendly deer in Nara Park",
        "Stunning Todai-ji Temple architecture",
        "Lively atmosphere in Dotonbori",
      ],
    },
    itinerary: [
      {
        startTime: "06:30",
        endTime: "08:30",
        activities: [
          "Pickup from central Tokyo hotel or meeting point",
          "Bullet train ride to Nara (approx. 2 hours)",
          "Arrival at Nara Station and meet guide",
        ],
      },
      {
        startTime: "09:00",
        endTime: "11:00",
        activities: [
          "Visit Nara Park and interact with free-roaming deer",
          "Explore Todai-ji Temple and see the Great Buddha",
          "Learn about Nara's history as Japan's first capital",
        ],
      },
      {
        startTime: "11:30",
        endTime: "13:00",
        activities: [
          "Traditional Japanese lunch at local restaurant",
          "Free time to explore Naramachi district",
          "Shopping for local crafts and souvenirs",
        ],
      },
      {
        startTime: "13:30",
        endTime: "15:30",
        activities: [
          "Bullet train ride to Osaka (approx. 45 minutes)",
          "Explore Dotonbori district and its famous neon lights",
          "Visit Osaka Castle (exterior)",
        ],
      },
      {
        startTime: "16:00",
        endTime: "18:30",
        activities: [
          "Free time for shopping and street food in Dotonbori",
          "Return bullet train to Tokyo",
          "Drop-off at original pickup location",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Tokyo Station, Marunouchi, Chiyoda City, Tokyo",
      instructions: "Meet your guide at the Shinkansen ticket gate",
      contactNumber: "+81 3-5555-6789",
    },
  },

  // New York City Tours
  {
    id: "TOUR-NYC-001",
    title: "NYC Icons & Neighborhoods Walking Tour",
    description:
      "Explore the best of Manhattan on foot, from iconic landmarks to hidden gems, with an expert local guide sharing insider stories and history. Visit Central Park, Times Square, the 9/11 Memorial, and walk across the Brooklyn Bridge while enjoying local food tastings along the way.",
    type: "Walking Tour",
    category: "Sightseeing",
    features: [
      "Central Park guided walk",
      "Times Square and Broadway district",
      "9/11 Memorial visit",
      "Brooklyn Bridge walk",
      "Local food tastings included",
    ],
    restrictions: [
      "Extensive walking required (5+ miles)",
      "Weather dependent",
      "Not recommended for mobility issues",
    ],
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=600&fit=crop",
    ],
    duration: "7 hours",
    pricing: {
      adult: 95,
      child: 75,
      senior: 85,
      student: 80,
      family: 320,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "New York",
      country: "United States",
      address: "Central Park, 59th Street Entrance",
      coordinates: {
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
    reviews: {
      rating: 4.7,
      totalReviews: 3156,
      highlights: [
        "Great introduction to NYC",
        "Knowledgeable local guide",
        "Perfect mix of famous sites and hidden spots",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:00",
        activities: [
          "Central Park highlights tour",
          "Bethesda Fountain and Terrace",
          "Strawberry Fields memorial",
        ],
      },
      {
        startTime: "11:30",
        endTime: "13:30",
        activities: [
          "Times Square and Broadway",
          "High Line elevated park",
          "Chelsea Market food tasting",
        ],
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        activities: [
          "9/11 Memorial and Museum area",
          "Wall Street and Financial District",
          "Stone Street historic block",
        ],
      },
      {
        startTime: "15:45",
        endTime: "16:00",
        activities: [
          "Brooklyn Bridge walk",
          "DUMBO neighborhood",
          "Manhattan skyline views",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Central Park, 59th Street and 5th Avenue, New York, NY",
      instructions: "Meet at the Grand Army Plaza entrance",
      contactNumber: "+1 212-555-0199",
    },
  },

  // Bali Tours
  {
    id: "TOUR-BAL-001",
    title: "Bali Temples & Rice Terraces Cultural Journey",
    description:
      "Discover Bali's spiritual heart and stunning landscapes with visits to ancient temples, traditional villages, and the famous Tegallalang Rice Terraces. Experience authentic Balinese culture through ceremonies, artisan workshops, and a traditional lunch with a local family.",
    type: "Cultural Tour",
    category: "Culture",
    features: [
      "Traditional Balinese ceremony participation",
      "Rice terrace trekking",
      "Temple blessings with local priests",
      "Traditional lunch with local family",
      "Artisan village visits",
    ],
    restrictions: [
      "Modest dress required for temples",
      "Moderate fitness level needed",
      "Some areas not accessible by vehicle",
    ],
    images: [
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop",
    ],
    duration: "9 hours",
    pricing: {
      adult: 65,
      child: 45,
      senior: 60,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "Bali",
      country: "Indonesia",
      address: "Ubud Center, Bali",
      coordinates: {
        latitude: -8.3405,
        longitude: 115.092,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 1576,
      highlights: [
        "Authentic cultural experience",
        "Beautiful rice terraces",
        "Spiritual temple visits",
      ],
    },
    itinerary: [
      {
        startTime: "08:00",
        endTime: "10:00",
        activities: [
          "Hotel pickup in Ubud area",
          "Tegallalang Rice Terraces visit",
          "Traditional farming demonstration",
        ],
      },
      {
        startTime: "10:30",
        endTime: "12:30",
        activities: [
          "Tirta Empul Holy Water Temple",
          "Purification ceremony participation",
          "Temple blessing with local priest",
        ],
      },
      {
        startTime: "13:00",
        endTime: "14:30",
        activities: [
          "Traditional Balinese lunch",
          "Local family compound visit",
          "Cultural exchange and stories",
        ],
      },
      {
        startTime: "15:00",
        endTime: "17:00",
        activities: [
          "Artisan village tours",
          "Wood carving and silver jewelry workshops",
          "Shopping for authentic crafts",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Ubud Traditional Market, Jl. Raya Ubud, Bali",
      instructions: "Meet at the main entrance to the traditional market",
      contactNumber: "+62 361-555-0123",
    },
  },
  {
    id: "TOUR-BAL-002",
    title: "Bali Beaches & Waterfalls Adventure",
    description:
      "Experience Bali's natural beauty with a day of beach hopping and waterfall exploration. Visit stunning beaches, swim in crystal-clear waters, and hike to hidden waterfalls surrounded by lush jungle.",
    type: "Adventure Tour",
    category: "Nature & Wildlife",
    features: [
      "Beach hopping at Nusa Dua and Uluwatu",
      "Kecak dance performance at Uluwatu Temple",
      "Visit to Tegenungan Waterfall",
      "Snorkeling gear provided",
      "Local lunch included",
    ],
    restrictions: [
      "Moderate fitness level required for hiking",
      "Swimwear required for beach and waterfall visits",
      "Not suitable for children under 5 years old",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "10 hours",
    pricing: {
      adult: 75,
      child: 55,
      senior: 70,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "Bali",
      country: "Indonesia",
      address: "Nusa Dua Beach, Bali",
      coordinates: {
        latitude: -8.8032,
        longitude: 115.2253,
      },
    },
    reviews: {
      rating: 4.9,
      totalReviews: 1320,
      highlights: [
        "Stunning beaches and clear waters",
        "Amazing waterfall experience",
        "Cultural dance performance at sunset",
      ],
    },
    itinerary: [
      {
        startTime: "08:00",
        endTime: "10:00",
        activities: [
          "Hotel pickup in Nusa Dua area",
          "Visit Nusa Dua Beach for swimming and relaxation",
          "Beachfront coffee break at local café",
        ],
      },
      {
        startTime: "10:30",
        endTime: "12:30 ",
        activities: [
          "Drive to Uluwatu Temple",
          "Explore the temple grounds",
          "Kecak dance performance with ocean views",
        ],
      },
      {
        startTime: "13:00",
        endTime: "14:30",
        activities: [
          "Lunch at a local seafood restaurant",
          "Free time to explore Uluwatu beach area",
          "Optional surfing lessons (extra cost)",
        ],
      },
      {
        startTime: "15:00",
        endTime: "17:00",
        activities: [
          "Visit Tegenungan Waterfall",
          "Hike down to the waterfall base",
          "Swim in the natural pool and relax",
        ],
      },
      {
        startTime: "17:30",
        endTime: "18:30",
        activities: [
          "Return drive to hotel",
          "Tour conclusion",
          "Optional sunset beach stop at Jimbaran Bay",
        ],
      },
      {
        startTime: "18:30",
        endTime: "19:00",
        activities: ["Drop-off at original pickup location", "End of tour"],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Nusa Dua Beach, Jl. Pantai Mengiat, Bali",
      instructions: "Meet at the main entrance to Nusa Dua Beach",
      contactNumber: "+62 361-555-6789",
    },
  },

  // Cape Town Tours
  {
    id: "TOUR-CPT-001",
    title: "Cape Town Table Mountain & Winelands Adventure",
    description:
      "Experience Cape Town's natural beauty and world-renowned wine culture with Table Mountain cable car, wine tastings, and scenic drives through the Winelands. Enjoy a traditional South African lunch while taking in breathtaking views of vineyards and mountains.",
    type: "Adventure Tour",
    category: "Nature & Wildlife",
    features: [
      "Table Mountain cable car ride",
      "3 wine estate visits with tastings",
      "Scenic drives through Stellenbosch",
      "Traditional South African lunch",
      "Professional sommelier guide",
    ],
    restrictions: [
      "Cable car weather dependent",
      "Age 18+ for wine tastings",
      "Moderate walking on wine estates",
    ],
    images: [
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563656353898-febc9270be0b?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 125,
      child: 75,
      senior: 115,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
      address: "Table Mountain Cable Car Station",
      coordinates: {
        latitude: -33.9249,
        longitude: 18.4241,
      },
    },
    reviews: {
      rating: 4.9,
      totalReviews: 2234,
      highlights: [
        "Breathtaking Table Mountain views",
        "Excellent wine selections",
        "Beautiful Winelands scenery",
      ],
    },
    itinerary: [
      {
        startTime: "08:30",
        endTime: "10:30",
        activities: [
          "Table Mountain cable car ascent",
          "Summit exploration and photography",
          "360-degree city and ocean views",
        ],
      },
      {
        startTime: "11:00",
        endTime: "13:00",
        activities: [
          "Drive to Stellenbosch Winelands",
          "First wine estate visit and tasting",
          "Vineyard tour and cellar visit",
        ],
      },
      {
        startTime: "13:30",
        endTime: "15:00",
        activities: [
          "Traditional South African lunch",
          "Second wine estate with food pairing",
          "Meet local winemaker",
        ],
      },
      {
        startTime: "15:30",
        endTime: "16:30",
        activities: [
          "Third wine estate visit",
          "Premium wine tasting session",
          "Return journey to Cape Town",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Table Mountain Lower Cable Station, Tafelberg Road, Cape Town",
      instructions: "Meet at the main ticket office entrance",
      contactNumber: "+27 21-555-0199",
    },
  },
  {
    id: "TOUR-CPT-002",
    title: "Cape Peninsula Scenic Drive & Wildlife Safari",
    description:
      "Explore the stunning Cape Peninsula with a scenic drive along the coast, visit the Cape of Good Hope, and enjoy a wildlife safari at a private reserve. Experience breathtaking ocean views, encounter African wildlife, and savor a delicious picnic lunch.",
    type: "Scenic Tour",
    category: "Nature & Wildlife",
    features: [
      "Cape Peninsula scenic drive",
      "Visit to Cape of Good Hope",
      "Wildlife safari at private reserve",
      "Picnic lunch with ocean views",
      "Professional nature guide",
    ],
    restrictions: [
      "Wildlife sightings not guaranteed",
      "Moderate walking on safari trails",
      "Weather dependent for coastal views",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop",
    ],
    duration: "9 hours",
    pricing: {
      adult: 110,
      child: 65,
      senior: 100,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "Cape Town",
      country: "South Africa",
      address: "Cape Point Nature Reserve Entrance",
      coordinates: {
        latitude: -34.3578,
        longitude: 18.4746,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 1980,
      highlights: [
        "Stunning coastal scenery",
        "Exciting wildlife encounters",
        "Informative guide with local knowledge",
      ],
    },
    itinerary: [
      {
        startTime: "08:00",
        endTime: "10:00",
        activities: [
          "Pickup from central Cape Town hotel",
          "Drive along Chapman's Peak Drive",
          "Photo stops at scenic viewpoints",
        ],
      },
      {
        startTime: "10:30",
        endTime: "12:00",
        activities: [
          "Visit Cape of Good Hope and lighthouse",
          "Hike to Cape Point for panoramic views",
        ],
      },
      {
        startTime: "12:30",
        endTime: "14:00",
        activities: [
          "Picnic lunch at scenic spot",
          "Relax and enjoy ocean views",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:30",
        activities: [
          "Wildlife safari at private reserve",
          "Game drive to spot lions, elephants, and more",
          "Learn about local flora and fauna",
        ],
      },
      {
        startTime: "17:00",
        endTime: "18:00",
        activities: [
          "Return drive to Cape Town",
          "Drop-off at original pickup location",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Cape Point Nature Reserve Entrance, Cape Town",
      instructions: "Meet at the main entrance gate",
      contactNumber: "+27 21-555-6789",
    },
  },

  // Cusco Tours
  {
    id: "TOUR-CUS-001",
    title: "Sacred Valley & Machu Picchu Express Experience",
    description:
      "Journey through the mystical Sacred Valley and visit the iconic Machu Picchu citadel on this unforgettable Inca heritage tour with train transportation. Explore ancient ruins, vibrant markets, and breathtaking landscapes while learning about the rich history of the Inca civilization.",
    type: "Historical Tour",
    category: "Local Experience",
    features: [
      "Vistadome train to Machu Picchu",
      "Professional archaeological guide",
      "Sacred Valley market visits",
      "Traditional Andean lunch",
      "Small group experience (max 16)",
    ],
    restrictions: [
      "High altitude - acclimatization recommended",
      "Moderate to challenging hiking",
      "Weather can change rapidly",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
    ],
    duration: "12 hours",
    pricing: {
      adult: 189,
      child: 145,
      senior: 175,
      student: 165,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: false,
    },
    location: {
      city: "Cusco",
      country: "Peru",
      address: "Cusco San Pedro Train Station",
      coordinates: {
        latitude: -13.1631,
        longitude: -72.545,
      },
    },
    reviews: {
      rating: 4.9,
      totalReviews: 1845,
      highlights: [
        "Life-changing Machu Picchu experience",
        "Knowledgeable guide about Inca history",
        "Beautiful train journey through mountains",
      ],
    },
    itinerary: [
      {
        startTime: "05:30",
        endTime: "07:30",
        activities: [
          "Hotel pickup in Cusco",
          "Drive to Ollantaytambo station",
          "Sacred Valley scenic route",
        ],
      },
      {
        startTime: "08:00",
        endTime: "10:00",
        activities: [
          "Vistadome train to Aguas Calientes",
          "Andean mountain scenery",
          "Traditional music on board",
        ],
      },
      {
        startTime: "10:30",
        endTime: "14:00",
        activities: [
          "Bus ascent to Machu Picchu",
          "Guided tour of the citadel",
          "Free time for photography",
        ],
      },
      {
        startTime: "14:30",
        endTime: "18:00",
        activities: [
          "Traditional Andean lunch",
          "Return train journey",
          "Transfer back to Cusco hotels",
        ],
      },
    ],
    cancellationPolicy:
      "50% refund up to 7 days before, no refund within 7 days",
    meetingPoint: {
      address: "San Pedro Train Station, Cusco, Peru",
      instructions: "Meet at the station main entrance 30 minutes early",
      contactNumber: "+51 84-555-0123",
    },
  },
  {
    id: "TOUR-CUS-002",
    title: "Cusco City & Sacsayhuamán Archaeological Tour",
    description:
      "Explore the historic city of Cusco and its surrounding archaeological sites, including the impressive Sacsayhuamán fortress. Learn about the Inca Empire's legacy while visiting key landmarks, local markets, and enjoying traditional Peruvian cuisine.",
    type: "Cultural Tour",
    category: "History",
    features: [
      "Guided tour of Cusco's main square",
      "Visit to Sacsayhuamán fortress",
      "Local market exploration",
      "Traditional Peruvian lunch included",
      "Small group experience (max 12)",
    ],
    restrictions: [
      "Moderate walking required",
      "Not wheelchair accessible",
      "Children must be accompanied by adults",
    ],
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
    ],
    duration: "6 hours",
    pricing: {
      adult: 75,
      child: 55,
      senior: 70,
      student: 65,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "Cusco",
      country: "Peru",
      address: "Plaza de Armas, Cusco",
      coordinates: {
        latitude: -13.1631,
        longitude: -72.545,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 1120,
      highlights: [
        "Rich history and culture insights",
        "Stunning views from Sacsayhuamán",
        "Friendly and knowledgeable guide",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "10:30",
        activities: [
          "Pickup from central Cusco hotel",
          "Walking tour of Plaza de Armas",
          "Visit to Cusco Cathedral and Qorikancha Temple",
        ],
      },
      {
        startTime: "11:00",
        endTime: "12:30",
        activities: [
          "Drive to Sacsayhuamán archaeological site",
          "Guided tour of the fortress",
          "Learn about Inca engineering and history",
        ],
      },
      {
        startTime: "13:00",
        endTime: "14:30",
        activities: [
          "Traditional Peruvian lunch at local restaurant",
          "Taste local dishes like ceviche and lomo saltado",
        ],
      },
      {
        startTime: "15:00",
        endTime: "16:30",
        activities: [
          "Visit San Pedro Market for local crafts",
          "Explore local food stalls and artisan shops",
        ],
      },
      {
        startTime: "17:00",
        endTime: "17:30",
        activities: [
          "Return to Cusco city center",
          "Drop-off at original pickup location",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Plaza de Armas, Cusco, Peru",
      instructions: "Meet at the main fountain in the square",
      contactNumber: "+51 84-555-6789",
    },
  },

  // Los Angeles Tours
  {
    id: "TOUR-LA-001",
    title: "Hollywood & Beverly Hills Celebrity Tour",
    description:
      "Go behind the scenes of Tinseltown with visits to famous studios, celebrity homes, and iconic Hollywood landmarks in this comprehensive entertainment tour.",
    type: "Entertainment Tour",
    category: "Entertainment",
    features: [
      "Hollywood Walk of Fame tour",
      "Celebrity homes in Beverly Hills",
      "Studio tour (Universal or Warner Bros)",
      "Griffith Observatory visit",
      "Professional entertainment guide",
    ],
    restrictions: [
      "Photography restrictions in some studio areas",
      "Celebrity sightings not guaranteed",
      "Some venues may have age restrictions",
    ],
    images: [
      "https://images.unsplash.com/photo-1534190760961-74e8c1b5c2bb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 149,
      child: 119,
      senior: 139,
      student: 129,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Los Angeles",
      country: "United States",
      address: "Hollywood Boulevard, Los Angeles, CA",
      coordinates: {
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
    reviews: {
      rating: 4.6,
      totalReviews: 2967,
      highlights: [
        "Great celebrity homes tour",
        "Informative studio experience",
        "Fun Hollywood history",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:00",
        activities: [
          "Hollywood Walk of Fame",
          "TCL Chinese Theatre handprints",
          "Hollywood Sign viewing",
        ],
      },
      {
        startTime: "11:30",
        endTime: "14:00",
        activities: [
          "Universal Studios or Warner Bros tour",
          "Behind-the-scenes studio experience",
          "Lunch at studio commissary",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:30",
        activities: [
          "Beverly Hills celebrity homes",
          "Rodeo Drive shopping district",
          "Sunset Strip landmarks",
        ],
      },
      {
        startTime: "17:00",
        endTime: "18:00",
        activities: [
          "Griffith Observatory visit",
          "Los Angeles city views",
          "Tour conclusion",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "6801 Hollywood Blvd, Los Angeles, CA 90028",
      instructions: "Meet in front of the TCL Chinese Theatre",
      contactNumber: "+1 323-555-0199",
    },
  },

  // Dubai Tours
  {
    id: "TOUR-DUB-001",
    title: "Dubai Modern Marvels & Desert Safari Adventure",
    description:
      "Experience the best of futuristic Dubai with visits to iconic skyscrapers and a thrilling desert safari complete with camel riding and traditional entertainment.",
    type: "Adventure Tour",
    category: "Nature & Wildlife",
    features: [
      "Burj Khalifa observation deck",
      "Dubai Mall and fountain show",
      "4x4 desert safari adventure",
      "Camel riding experience",
      "Traditional Bedouin camp dinner",
    ],
    restrictions: [
      "Desert activities weather dependent",
      "Not suitable for pregnant women",
      "Modest dress required for some areas",
    ],
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&h=600&fit=crop",
    ],
    duration: "10 hours",
    pricing: {
      adult: 175,
      child: 135,
      senior: 165,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Burj Khalifa, Downtown Dubai",
      coordinates: {
        latitude: 25.2048,
        longitude: 55.2708,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 3421,
      highlights: [
        "Amazing Burj Khalifa views",
        "Exciting desert safari",
        "Authentic cultural experience",
      ],
    },
    itinerary: [
      {
        startTime: "10:00",
        endTime: "12:00",
        activities: [
          "Burj Khalifa observation deck (Level 148)",
          "Dubai Mall exploration",
          "Aquarium and underwater zoo",
        ],
      },
      {
        startTime: "12:30",
        endTime: "14:00",
        activities: [
          "Traditional Emirati lunch",
          "Gold and spice souks visit",
          "Traditional abra boat ride",
        ],
      },
      {
        startTime: "15:00",
        endTime: "18:30",
        activities: [
          "Desert safari pickup",
          "4x4 dune bashing adventure",
          "Camel riding experience",
        ],
      },
      {
        startTime: "19:00",
        endTime: "20:00",
        activities: [
          "Traditional Bedouin camp",
          "Henna painting and falcon show",
          "BBQ dinner with entertainment",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Burj Khalifa, 1 Sheikh Mohammed bin Rashid Blvd, Dubai",
      instructions: "Meet at the main entrance to At The Top experience",
      contactNumber: "+971 4-555-0123",
    },
  },

  // London Tours
  {
    id: "TOUR-LON-001",
    title: "London Royal Heritage & Thames River Cruise",
    description:
      "Discover London's royal history and iconic landmarks with palace visits, Thames river cruise, and traditional afternoon tea experience.",
    type: "Cultural Tour",
    category: "History",
    features: [
      "Buckingham Palace tour (when available)",
      "Tower of London and Crown Jewels",
      "Thames river cruise with commentary",
      "Traditional afternoon tea",
      "Westminster Abbey visit",
    ],
    restrictions: [
      "Palace tours subject to royal schedule",
      "Security checks at royal venues",
      "Some areas not wheelchair accessible",
    ],
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&h=600&fit=crop",
    ],
    duration: "9 hours",
    pricing: {
      adult: 165,
      child: 125,
      senior: 155,
      student: 145,
      family: 580,
      currency: "GBP",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "London",
      country: "United Kingdom",
      address: "Westminster Abbey, London",
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278,
      },
    },
    reviews: {
      rating: 4.7,
      totalReviews: 4156,
      highlights: [
        "Impressive Crown Jewels display",
        "Beautiful Thames views",
        "Authentic afternoon tea experience",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:00",
        activities: [
          "Westminster Abbey guided tour",
          "Houses of Parliament exterior",
          "Big Ben photo opportunities",
        ],
      },
      {
        startTime: "11:30",
        endTime: "13:30",
        activities: [
          "Tower of London tour",
          "Crown Jewels exhibition",
          "Beefeater stories and history",
        ],
      },
      {
        startTime: "14:00",
        endTime: "15:30",
        activities: [
          "Thames river cruise",
          "London Bridge and Tower Bridge",
          "City skyline commentary",
        ],
      },
      {
        startTime: "16:00",
        endTime: "18:00",
        activities: [
          "Buckingham Palace area",
          "St. James's Park walk",
          "Traditional afternoon tea",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before the tour",
    meetingPoint: {
      address: "Westminster Abbey, 20 Deans Yd, Westminster, London SW1P 3PA",
      instructions: "Meet at the main visitor entrance",
      contactNumber: "+44 20-7555-0199",
    },
  },

  // Singapore Tours
  {
    id: "TOUR-SIN-001",
    title: "Singapore Gardens & Cultural Districts Explorer",
    description:
      "Explore Singapore's incredible Gardens by the Bay and diverse cultural neighborhoods including Chinatown, Little India, and Arab Street.",
    type: "Cultural Tour",
    category: "Culture",
    features: [
      "Gardens by the Bay with Supertree Grove",
      "Cloud Forest and Flower Dome",
      "Chinatown heritage center",
      "Little India cultural walk",
      "Local hawker food experience",
    ],
    restrictions: [
      "Air-conditioned venues available",
      "Some walking in tropical heat",
      "Food allergies accommodated with notice",
    ],
    images: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 89,
      child: 65,
      senior: 79,
      family: 295,
      currency: "SGD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Singapore",
      country: "Singapore",
      address: "Gardens by the Bay, Marina Bay",
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 2789,
      highlights: [
        "Stunning Gardens by the Bay",
        "Great cultural diversity",
        "Excellent food experiences",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "12:00",
        activities: [
          "Gardens by the Bay exploration",
          "Cloud Forest and Flower Dome",
          "OCBC Skyway treetop walk",
        ],
      },
      {
        startTime: "12:30",
        endTime: "14:00",
        activities: [
          "Chinatown heritage center",
          "Traditional shophouses tour",
          "Local hawker lunch experience",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:00",
        activities: [
          "Little India cultural district",
          "Sri Veeramakaliamman Temple",
          "Spice and textile shopping",
        ],
      },
      {
        startTime: "16:30",
        endTime: "17:00",
        activities: [
          "Arab Street and Kampong Glam",
          "Sultan Mosque visit",
          "Traditional crafts and perfumes",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Gardens by the Bay, 18 Marina Gardens Dr, Singapore 018953",
      instructions: "Meet at the main visitor center entrance",
      contactNumber: "+65 6555-0123",
    },
  },

  // Miami Tours
  {
    id: "TOUR-MIA-001",
    title: "Miami Beach & Art Deco District Experience",
    description:
      "Discover Miami's vibrant beach culture and stunning Art Deco architecture with beach time, cultural tours, and authentic Cuban cuisine in Little Havana.",
    type: "Cultural Tour",
    category: "Local Experience",
    features: [
      "Art Deco Historic District walking tour",
      "South Beach and Ocean Drive",
      "Little Havana cultural experience",
      "Cuban coffee and cuisine tasting",
      "Wynwood Walls street art tour",
    ],
    restrictions: [
      "Sun protection recommended",
      "Some walking in tropical heat",
      "Beach activities weather dependent",
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=600&fit=crop",
    ],
    duration: "7 hours",
    pricing: {
      adult: 85,
      child: 65,
      senior: 75,
      family: 285,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "Miami",
      country: "United States",
      address: "Ocean Drive, South Beach, Miami",
      coordinates: {
        latitude: 25.7617,
        longitude: -80.1918,
      },
    },
    reviews: {
      rating: 4.5,
      totalReviews: 1834,
      highlights: [
        "Beautiful Art Deco architecture",
        "Authentic Cuban culture",
        "Amazing street art in Wynwood",
      ],
    },
    itinerary: [
      {
        startTime: "10:00",
        endTime: "12:00",
        activities: [
          "Art Deco Historic District tour",
          "Ocean Drive and Collins Avenue",
          "Versace Mansion and celebrity spots",
        ],
      },
      {
        startTime: "12:30",
        endTime: "14:30",
        activities: [
          "Little Havana walking tour",
          "Domino Park and cigar rolling",
          "Authentic Cuban lunch experience",
        ],
      },
      {
        startTime: "15:00",
        endTime: "16:30",
        activities: [
          "Wynwood Walls street art district",
          "Local artist galleries",
          "Urban art and murals tour",
        ],
      },
      {
        startTime: "16:45",
        endTime: "17:00",
        activities: [
          "South Beach relaxation time",
          "Beach photography session",
          "Tour conclusion at Lincoln Road",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Ocean Drive and 10th Street, South Beach, Miami, FL",
      instructions: "Meet at the lifeguard station on the beach",
      contactNumber: "+1 305-555-0199",
    },
  },

  // São Paulo Tours
  {
    id: "TOUR-SAO-001",
    title: "São Paulo Street Art & Culinary Discovery",
    description:
      "Explore South America's largest city through its incredible street art scene and diverse culinary landscape, from traditional markets to modern gastronomy.",
    type: "Cultural Tour",
    category: "Local Experience",
    features: [
      "Vila Madalena street art walking tour",
      "Mercado Municipal food market",
      "Traditional Brazilian cooking class",
      "Samba and capoeira demonstration",
      "Local neighborhood exploration",
    ],
    restrictions: [
      "Some areas involve walking on uneven surfaces",
      "Food allergies accommodated with advance notice",
      "Portuguese/English translation provided",
    ],
    images: [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516834474360-c0b68f1ac8ea?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 75,
      child: 55,
      senior: 65,
      student: 60,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: false,
      groupDiscounts: true,
    },
    location: {
      city: "São Paulo",
      country: "Brazil",
      address: "Vila Madalena, São Paulo",
      coordinates: {
        latitude: -23.5505,
        longitude: -46.6333,
      },
    },
    reviews: {
      rating: 4.6,
      totalReviews: 967,
      highlights: [
        "Amazing street art everywhere",
        "Delicious Brazilian food",
        "Great cultural immersion",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:30",
        activities: [
          "Vila Madalena street art tour",
          "Local artist studios visit",
          "Graffiti and mural exploration",
        ],
      },
      {
        startTime: "12:00",
        endTime: "14:00",
        activities: [
          "Mercado Municipal traditional market",
          "Exotic fruits and local products",
          "Traditional Brazilian lunch",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:30",
        activities: [
          "Brazilian cooking class",
          "Learn to make feijoada and caipirinha",
          "Local ingredients and techniques",
        ],
      },
      {
        startTime: "17:00",
        endTime: "17:00",
        activities: [
          "Samba and capoeira demonstration",
          "Interactive cultural performance",
          "Downtown São Paulo walking tour",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Vila Madalena Metro Station, São Paulo, Brazil",
      instructions: "Meet at the main metro station exit",
      contactNumber: "+55 11-5555-0123",
    },
  },

  // Vancouver Tours
  {
    id: "TOUR-VAN-001",
    title: "Vancouver Nature & City Highlights Adventure",
    description:
      "Experience Vancouver's stunning natural beauty and urban attractions with visits to Stanley Park, Granville Island, and the Capilano Suspension Bridge.",
    type: "Nature Tour",
    category: "Local Experience",
    features: [
      "Capilano Suspension Bridge experience",
      "Stanley Park seawall cycling",
      "Granville Island market and artisans",
      "Gastown historic district tour",
      "Scenic mountain and ocean views",
    ],
    restrictions: [
      "Weather dependent activities",
      "Moderate physical activity required",
      "Height restrictions for some bridges",
    ],
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 135,
      child: 95,
      senior: 125,
      family: 450,
      currency: "CAD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Vancouver",
      country: "Canada",
      address: "Stanley Park, Vancouver, BC",
      coordinates: {
        latitude: 49.2827,
        longitude: -123.1207,
      },
    },
    reviews: {
      rating: 4.7,
      totalReviews: 2156,
      highlights: [
        "Breathtaking suspension bridge",
        "Beautiful Stanley Park",
        "Great city and mountain views",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:30",
        activities: [
          "Capilano Suspension Bridge Park",
          "Treetops Adventure and Cliffwalk",
          "First Nations cultural center",
        ],
      },
      {
        startTime: "12:00",
        endTime: "14:00",
        activities: [
          "Stanley Park seawall tour",
          "Totem poles and Prospect Point",
          "English Bay and sunset beach",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:00",
        activities: [
          "Granville Island public market",
          "Local artisan workshops",
          "Fresh seafood and local products",
        ],
      },
      {
        startTime: "16:30",
        endTime: "17:00",
        activities: [
          "Gastown historic district",
          "Steam clock and cobblestone streets",
          "Vancouver Lookout city views",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Stanley Park Information Booth, Vancouver, BC",
      instructions: "Meet at the main park entrance information center",
      contactNumber: "+1 604-555-0199",
    },
  },

  // Seoul Tours
  {
    id: "TOUR-SEO-001",
    title: "Seoul Palaces & K-Culture Experience",
    description:
      "Immerse yourself in Seoul's rich history and modern K-culture with palace tours, traditional markets, K-pop experiences, and authentic Korean cuisine.",
    type: "Cultural Tour",
    category: "History",
    features: [
      "Gyeongbokgung Palace and changing of guard",
      "Bukchon Hanok Village traditional houses",
      "K-pop dance class experience",
      "Korean BBQ and kimchi making",
      "Myeongdong shopping district",
    ],
    restrictions: [
      "Palace tours include extensive walking",
      "K-pop class suitable for all skill levels",
      "Some traditional areas require respectful dress",
    ],
    images: [
      "https://images.unsplash.com/photo-1505149812241-4c09565b69a5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    ],
    duration: "9 hours",
    pricing: {
      adult: 95,
      child: 75,
      senior: 85,
      student: 80,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Seoul",
      country: "South Korea",
      address: "Gyeongbokgung Palace, Seoul",
      coordinates: {
        latitude: 37.5665,
        longitude: 126.978,
      },
    },
    reviews: {
      rating: 4.8,
      totalReviews: 2945,
      highlights: [
        "Beautiful traditional palaces",
        "Fun K-pop dance experience",
        "Delicious Korean food",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:30",
        activities: [
          "Gyeongbokgung Palace tour",
          "Changing of the guard ceremony",
          "National Folk Museum visit",
        ],
      },
      {
        startTime: "12:00",
        endTime: "14:00",
        activities: [
          "Bukchon Hanok Village",
          "Traditional Korean architecture",
          "Authentic Korean lunch experience",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:00",
        activities: [
          "K-pop dance class experience",
          "Learn popular K-pop choreography",
          "Korean music and culture intro",
        ],
      },
      {
        startTime: "16:30",
        endTime: "18:00",
        activities: [
          "Myeongdong shopping district",
          "Korean beauty and fashion",
          "N Seoul Tower views (weather permitting)",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address: "Gyeongbokgung Palace Main Gate, Seoul, South Korea",
      instructions: "Meet at the main palace entrance ticket booth",
      contactNumber: "+82 2-555-0123",
    },
  },

  // Atlanta Tours
  {
    id: "TOUR-ATL-001",
    title: "Atlanta Civil Rights & Southern Culture Tour",
    description:
      "Explore Atlanta's pivotal role in the Civil Rights Movement and experience authentic Southern culture with historical sites, museums, and traditional cuisine.",
    type: "Historical Tour",
    category: "History",
    features: [
      "Martin Luther King Jr. National Historical Park",
      "Center for Civil Rights and Human Rights",
      "Atlanta History Center",
      "Traditional Southern cooking class",
      "BeltLine and street art tour",
    ],
    restrictions: [
      "Moderate walking required",
      "Some emotionally sensitive historical content",
      "Food allergies accommodated with notice",
    ],
    images: [
      "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580653842606-c5b5d1ae9f77?w=800&h=600&fit=crop",
    ],
    duration: "8 hours",
    pricing: {
      adult: 89,
      child: 65,
      senior: 79,
      student: 75,
      family: 295,
      currency: "USD",
    },
    tickets: {
      advanceBooking: true,
      skipTheLine: true,
      groupDiscounts: true,
    },
    location: {
      city: "Atlanta",
      country: "United States",
      address: "Martin Luther King Jr. National Historical Park",
      coordinates: {
        latitude: 33.749,
        longitude: -84.388,
      },
    },
    reviews: {
      rating: 4.7,
      totalReviews: 1567,
      highlights: [
        "Powerful civil rights history",
        "Excellent museum experiences",
        "Authentic Southern hospitality",
      ],
    },
    itinerary: [
      {
        startTime: "09:00",
        endTime: "11:30",
        activities: [
          "Martin Luther King Jr. Birth Home",
          "Ebenezer Baptist Church tour",
          "MLK Memorial and reflecting pool",
        ],
      },
      {
        startTime: "12:00",
        endTime: "14:00",
        activities: [
          "Center for Civil Rights and Human Rights",
          "Interactive exhibits and galleries",
          "Traditional Southern lunch",
        ],
      },
      {
        startTime: "14:30",
        endTime: "16:00",
        activities: [
          "Atlanta History Center",
          "Swan House and historic gardens",
          "Civil War and Southern history",
        ],
      },
      {
        startTime: "16:30",
        endTime: "17:00",
        activities: [
          "BeltLine trail and public art",
          "Ponce City Market",
          "Modern Atlanta neighborhoods",
        ],
      },
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before the tour",
    meetingPoint: {
      address:
        "Martin Luther King Jr. National Historical Park Visitor Center, Atlanta, GA",
      instructions: "Meet at the main visitor center entrance",
      contactNumber: "+1 404-555-0199",
    },
  },
];
