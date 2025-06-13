import { Hotel } from "@/lib/interfaces/services/hotels";
import { getRoomsForHotelType } from "./hotel-room-options";

export const mockHotels: Hotel[] = [
  // Paris Hotels
  {
    id: "1",
    name: "Le Grand Parisian",
    type: "hotel",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop"
    ],
    description: "Luxury hotel in the heart of Paris, steps away from the Louvre and Champs-Élysées. Experience Parisian elegance with world-class service.",
    location: {
      address: "15 Avenue de l'Opéra, 1st Arrondissement",
      city: "Paris",
      country: "France",
      coordinates: { latitude: 48.8656, longitude: 2.3325 },
      nearbyAttractions: ["Louvre Museum", "Palais Garnier", "Tuileries Garden", "Champs-Élysées"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Luggage Storage", "Currency Exchange"],
      business: ["Business Center", "Meeting Rooms", "Conference Facilities", "High-Speed Internet"],
      recreation: ["Spa", "Fitness Center", "Indoor Pool", "Sauna", "Massage Services"],
      dining: ["Restaurant", "Bar", "Room Service", "Champagne Bar", "Rooftop Terrace"],
      accessibility: ["Wheelchair Accessible", "Elevator", "Accessible Parking", "Braille Signage"]
    },
    rooms: {
      types: getRoomsForHotelType("hotel"),
      totalRooms: 180
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      petPolicy: "Pets allowed with additional fee",
      smokingPolicy: "Non-smoking property"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 280, max: 850, currency: "USD" },
      seasonality: { peak: 450, standard: 320, low: 280 }
    },
    rating: 4.8,
    reviews: 2847,
    awards: ["World's Best Hotels 2024", "Forbes 5-Star"],
    sustainability: {
      certified: true,
      practices: ["Green energy", "Water conservation", "Local sourcing", "Waste reduction"]
    },
    tags: ["Luxury", "Historic", "City Center", "Business", "Romantic"]
  },
  {
    id: "2",
    name: "Boutique Montmartre",
    type: "boutique",
    starRating: 4,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=600&fit=crop"
    ],
    description: "Charming boutique hotel in artistic Montmartre district, featuring unique décor and personalized service.",
    location: {
      address: "12 Rue des Abbesses, 18th Arrondissement",
      city: "Paris",
      country: "France",
      coordinates: { latitude: 48.8844, longitude: 2.3380 },
      nearbyAttractions: ["Sacré-Cœur", "Moulin Rouge", "Place du Tertre", "Montmartre Cemetery"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Luggage Storage"],
      business: ["Business Corner", "High-Speed Internet"],
      recreation: ["Rooftop Terrace", "Library"],
      dining: ["Continental Breakfast", "Wine Bar", "Room Service"],
      accessibility: ["Elevator", "Accessible Rooms"]
    },
    rooms: {
      types: getRoomsForHotelType("boutique"),
      totalRooms: 45
    },
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours before arrival",
      petPolicy: "Small pets welcome",
      smokingPolicy: "Non-smoking property"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: false,
      spa: false,
      fitness: false,
      businessCenter: false
    },
    pricing: {
      priceRange: { min: 180, max: 380, currency: "USD" },
      seasonality: { peak: 280, standard: 220, low: 180 }
    },
    rating: 4.6,
    reviews: 892,
    tags: ["Boutique", "Artistic", "Cozy", "Romantic", "Local Experience"]
  },

  // Tokyo Hotels
  {
    id: "3",
    name: "Tokyo Imperial Palace Hotel",
    type: "hotel",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1520637836862-4d197d17c60a?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=600&fit=crop"
    ],
    description: "Prestigious hotel offering traditional Japanese hospitality with modern luxury, overlooking the Imperial Palace gardens.",
    location: {
      address: "1-1-1 Uchisaiwaicho, Chiyoda City",
      city: "Tokyo",
      country: "Japan",
      coordinates: { latitude: 35.6785, longitude: 139.7585 },
      nearbyAttractions: ["Imperial Palace", "Ginza", "Tokyo Station", "Hibiya Park"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Valet Parking", "Currency Exchange"],
      business: ["Business Center", "Executive Lounge", "Meeting Rooms", "Conference Facilities"],
      recreation: ["Spa", "Fitness Center", "Indoor Pool", "Traditional Onsen", "Garden Views"],
      dining: ["Multiple Restaurants", "Sushi Bar", "Tea Ceremony Room", "Rooftop Bar"],
      accessibility: ["Wheelchair Accessible", "Elevator", "Accessible Parking", "Japanese & English Signage"]
    },
    rooms: {
      types: getRoomsForHotelType("hotel"),
      totalRooms: 320
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      petPolicy: "No pets allowed",
      smokingPolicy: "Designated smoking areas only"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 400, max: 1200, currency: "USD" },
      seasonality: { peak: 650, standard: 500, low: 400 }
    },
    rating: 4.9,
    reviews: 3421,
    awards: ["AAA Five Diamond", "Leading Hotels of the World"],
    sustainability: {
      certified: true,
      practices: ["Energy efficiency", "Waste reduction", "Local partnerships", "Cultural preservation"]
    },
    tags: ["Luxury", "Traditional", "Business", "City Center", "Cultural"]
  },

  // New York Hotels
  {
    id: "4",
    name: "Manhattan Grand Central",
    type: "hotel",
    starRating: 4,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=600&fit=crop"
    ],
    description: "Modern hotel in Midtown Manhattan, perfectly located near Grand Central Station and Times Square.",
    location: {
      address: "125 Park Avenue, Midtown East",
      city: "New York",
      country: "United States",
      coordinates: { latitude: 40.7505, longitude: -73.9764 },
      nearbyAttractions: ["Grand Central Terminal", "Times Square", "Central Park", "Empire State Building"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Luggage Storage", "ATM"],
      business: ["Business Center", "Meeting Rooms", "High-Speed Internet", "Printing Services"],
      recreation: ["Fitness Center", "Rooftop Lounge", "City Views"],
      dining: ["Restaurant", "Grab & Go Market", "Room Service", "Coffee Shop"],
      accessibility: ["ADA Compliant", "Elevator", "Accessible Parking", "Braille Signage"]
    },
    rooms: {
      types: getRoomsForHotelType("hotel"),
      totalRooms: 250
    },
    policies: {
      checkIn: "4:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      petPolicy: "Pet-friendly with fee",
      smokingPolicy: "Non-smoking property"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: false,
      spa: false,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 250, max: 600, currency: "USD" },
      seasonality: { peak: 400, standard: 320, low: 250 }
    },
    rating: 4.4,
    reviews: 1876,
    tags: ["Modern", "Business", "City Center", "Transportation Hub", "Shopping"]
  },

  // London Hotels
  {
    id: "5",
    name: "The Royal Kensington",
    type: "hotel",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop"
    ],
    description: "Victorian elegance meets modern luxury in this prestigious Kensington hotel, near Hyde Park and world-class museums.",
    location: {
      address: "2-24 Kensington High Street, Kensington",
      city: "London",
      country: "United Kingdom",
      coordinates: { latitude: 51.5014, longitude: -0.1918 },
      nearbyAttractions: ["Hyde Park", "Kensington Palace", "Natural History Museum", "Victoria and Albert Museum"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Valet Parking", "Butler Service"],
      business: ["Business Center", "Executive Lounge", "Meeting Rooms", "Secretary Services"],
      recreation: ["Spa", "Fitness Center", "Indoor Pool", "Steam Room", "Park Views"],
      dining: ["Fine Dining Restaurant", "Traditional Pub", "Afternoon Tea", "Room Service"],
      accessibility: ["Wheelchair Accessible", "Lift", "Accessible Toilets", "Audio Induction Loops"]
    },
    rooms: {
      types: getRoomsForHotelType("hotel"),
      totalRooms: 180
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      petPolicy: "Pets welcome with advance notice",
      smokingPolicy: "Non-smoking property"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 320, max: 800, currency: "USD" },
      seasonality: { peak: 520, standard: 420, low: 320 }
    },
    rating: 4.7,
    reviews: 2156,
    awards: ["AA 5 Red Stars", "Historic Hotels of Europe"],
    sustainability: {
      certified: true,
      practices: ["Carbon neutral", "Historic preservation", "Local sourcing", "Community support"]
    },
    tags: ["Historic", "Luxury", "Museums", "Parks", "Royal"]
  },

  // Sydney Hotels
  {
    id: "6",
    name: "Harbour View Resort",
    type: "resort",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop"
    ],
    description: "Luxury waterfront resort with spectacular views of Sydney Harbour, Opera House, and Harbour Bridge.",
    location: {
      address: "1 Circular Quay West, The Rocks",
      city: "Sydney",
      country: "Australia",
      coordinates: { latitude: -33.8599, longitude: 151.2090 },
      nearbyAttractions: ["Sydney Opera House", "Harbour Bridge", "Royal Botanic Gardens", "The Rocks"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Valet Parking", "Tour Desk"],
      business: ["Business Center", "Conference Facilities", "Executive Floors", "High-Speed Internet"],
      recreation: ["Spa", "Fitness Center", "Outdoor Pool", "Tennis Court", "Harbour Cruises"],
      dining: ["Waterfront Restaurant", "Cocktail Bar", "Pool Bar", "Room Service", "BBQ Area"],
      accessibility: ["Wheelchair Accessible", "Elevator", "Pool Lift", "Accessible Parking"]
    },
    rooms: {
      types: getRoomsForHotelType("resort"),
      totalRooms: 280
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours before arrival",
      petPolicy: "No pets allowed",
      smokingPolicy: "Designated outdoor areas only"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 380, max: 1000, currency: "USD" },
      seasonality: { peak: 600, standard: 480, low: 380 }
    },
    rating: 4.8,
    reviews: 3124,
    awards: ["World Travel Awards Winner", "AAA Five Diamond"],
    sustainability: {
      certified: true,
      practices: ["Marine conservation", "Solar energy", "Water recycling", "Local wildlife protection"]
    },
    tags: ["Waterfront", "Luxury", "Views", "Family-Friendly", "Resort"]
  },

  // Dubai Hotels
  {
    id: "7",
    name: "Desert Palace Resort",
    type: "resort",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520637736862-4d197d17c60a?w=1200&h=600&fit=crop"
    ],
    description: "Opulent desert resort offering traditional Arabian hospitality with ultra-modern amenities in the heart of Dubai.",
    location: {
      address: "Al Sufouh Road, Jumeirah Beach",
      city: "Dubai",
      country: "United Arab Emirates",
      coordinates: { latitude: 25.1362, longitude: 55.1878 },
      nearbyAttractions: ["Burj Al Arab", "Jumeirah Beach", "Wild Wadi Water Park", "Madinat Jumeirah"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Valet Parking", "Private Beach"],
      business: ["Business Center", "Meeting Rooms", "Executive Lounge", "Conference Facilities"],
      recreation: ["Multiple Pools", "Spa", "Private Beach", "Water Sports", "Kids Club"],
      dining: ["Fine Dining", "Beach Restaurant", "Rooftop Bar", "Shisha Lounge", "24/7 Room Service"],
      accessibility: ["Wheelchair Accessible", "Elevator", "Beach Wheelchair", "Accessible Pools"]
    },
    rooms: {
      types: getRoomsForHotelType("resort"),
      totalRooms: 350
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 24 hours before arrival",
      petPolicy: "No pets allowed",
      smokingPolicy: "Designated areas only"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 450, max: 1500, currency: "USD" },
      seasonality: { peak: 800, standard: 600, low: 450 }
    },
    rating: 4.9,
    reviews: 4512,
    awards: ["World's Leading Resort", "Forbes Travel Guide Five-Star"],
    sustainability: {
      certified: true,
      practices: ["Desalination plant", "Solar energy", "Sustainable seafood", "Cultural preservation"]
    },
    tags: ["Ultra-Luxury", "Beach", "Desert", "Family-Friendly", "Arabian Culture"]
  },

  // Rome Hotels
  {
    id: "8",
    name: "Eternal City Boutique",
    type: "boutique",
    starRating: 4,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=600&fit=crop"
    ],
    description: "Elegant boutique hotel in historic Rome, steps from the Colosseum and Roman Forum with authentic Italian charm.",
    location: {
      address: "Via dei Fori Imperiali, 15",
      city: "Rome",
      country: "Italy",
      coordinates: { latitude: 41.8902, longitude: 12.4922 },
      nearbyAttractions: ["Colosseum", "Roman Forum", "Pantheon", "Trevi Fountain"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Luggage Storage", "Tour Assistance"],
      business: ["Business Corner", "High-Speed Internet", "Meeting Space"],
      recreation: ["Rooftop Terrace", "Library", "Wine Cellar Tours"],
      dining: ["Italian Restaurant", "Wine Bar", "Continental Breakfast", "Room Service"],
      accessibility: ["Elevator", "Accessible Rooms", "Ramp Access"]
    },
    rooms: {
      types: getRoomsForHotelType("boutique"),
      totalRooms: 35
    },
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours before arrival",
      petPolicy: "Small pets welcome",
      smokingPolicy: "Non-smoking property"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: false,
      spa: false,
      fitness: false,
      businessCenter: false
    },
    pricing: {
      priceRange: { min: 200, max: 450, currency: "USD" },
      seasonality: { peak: 320, standard: 260, low: 200 }
    },
    rating: 4.6,
    reviews: 1243,
    tags: ["Historic", "Boutique", "Central", "Authentic", "Romantic"]
  },

  // Santorini Hotels
  {
    id: "9",
    name: "Aegean Sunset Villa",
    type: "villa",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&h=600&fit=crop"
    ],
    description: "Stunning cliff-side villa resort with iconic white architecture and breathtaking sunset views over the Aegean Sea.",
    location: {
      address: "Oia Village, Caldera",
      city: "Santorini",
      country: "Greece",
      coordinates: { latitude: 36.4618, longitude: 25.3753 },
      nearbyAttractions: ["Oia Castle", "Amoudi Bay", "Red Beach", "Akrotiri Archaeological Site"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Concierge", "Private Transfers", "Sunset Views"],
      business: ["High-Speed Internet", "Business Services"],
      recreation: ["Infinity Pool", "Spa Treatments", "Yacht Charters", "Wine Tasting"],
      dining: ["Gourmet Restaurant", "Pool Bar", "Private Dining", "Wine Cellar"],
      accessibility: ["Some Accessible Areas", "Elevator to Pool", "Accessible Parking"]
    },
    rooms: {
      types: getRoomsForHotelType("villa"),
      totalRooms: 25
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 72 hours before arrival",
      petPolicy: "No pets allowed",
      smokingPolicy: "Outdoor areas only"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: false,
      businessCenter: false
    },
    pricing: {
      priceRange: { min: 600, max: 2000, currency: "USD" },
      seasonality: { peak: 1200, standard: 800, low: 600 }
    },
    rating: 4.9,
    reviews: 876,
    awards: ["Small Luxury Hotels", "Condé Nast Gold List"],
    sustainability: {
      certified: true,
      practices: ["Water conservation", "Local sourcing", "Traditional architecture", "Marine protection"]
    },
    tags: ["Luxury", "Romantic", "Sunset Views", "Cycladic", "Adults-Only"]
  },

  // Bali Hotels
  {
    id: "10",
    name: "Tropical Paradise Resort",
    type: "resort",
    starRating: 5,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=600&fit=crop"
    ],
    description: "Luxurious beachfront resort in Bali combining traditional Balinese architecture with world-class amenities.",
    location: {
      address: "Jalan Pantai Kuta, Seminyak",
      city: "Bali",
      country: "Indonesia",
      coordinates: { latitude: -8.6905, longitude: 115.1729 },
      nearbyAttractions: ["Seminyak Beach", "Tanah Lot Temple", "Ubud Rice Terraces", "Monkey Forest Sanctuary"]
    },
    amenities: {
      general: ["Free Wi-Fi", "24/7 Front Desk", "Concierge", "Private Beach", "Cultural Tours"],
      business: ["Business Center", "Meeting Pavilions", "High-Speed Internet"],
      recreation: ["Multiple Pools", "Spa Village", "Yoga Pavilion", "Water Sports", "Kids Club"],
      dining: ["Beachfront Restaurant", "Traditional Warung", "Pool Bar", "Room Service"],
      accessibility: ["Wheelchair Accessible", "Beach Wheelchair", "Accessible Pools", "Elevator"]
    },
    rooms: {
      types: getRoomsForHotelType("resort"),
      totalRooms: 200
    },
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before arrival",
      petPolicy: "No pets allowed",
      smokingPolicy: "Designated outdoor areas only"
    },
    services: {
      concierge: true,
      roomService: true,
      laundry: true,
      airportShuttle: true,
      spa: true,
      fitness: true,
      businessCenter: true
    },
    pricing: {
      priceRange: { min: 250, max: 800, currency: "USD" },
      seasonality: { peak: 450, standard: 350, low: 250 }
    },
    rating: 4.7,
    reviews: 2654,
    awards: ["World Travel Awards", "Luxury Travel Guide"],
    sustainability: {
      certified: true,
      practices: ["Coral reef protection", "Local community support", "Organic gardens", "Traditional crafts"]
    },
    tags: ["Beach", "Tropical", "Spa", "Cultural", "Family-Friendly"]
  }
];

// Helper function to get hotels by destination
export const getHotelsByDestination = (destinationName: string): Hotel[] => {
  const destinationMappings: { [key: string]: string[] } = {
    "Paris": ["1", "2"],
    "Tokyo": ["3"],
    "New York": ["4"],
    "London": ["5"],
    "Sydney": ["6"],
    "Dubai": ["7"],
    "Rome": ["8"],
    "Santorini": ["9"],
    "Bali": ["10"]
  };

  const hotelIds = destinationMappings[destinationName] || [];
  return mockHotels.filter(hotel => hotelIds.includes(hotel.id));
};

// Helper function to get hotels by type
export const getHotelsByType = (type: string): Hotel[] => {
  return mockHotels.filter(hotel => hotel.type === type);
};

// Helper function to get hotels by star rating
export const getHotelsByStarRating = (minStars: number): Hotel[] => {
  return mockHotels.filter(hotel => hotel.starRating >= minStars);
};