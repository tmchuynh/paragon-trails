import { Tour } from "@/lib/interfaces/services/tours";
import { FaCamera, FaMountain, FaWater, FaTree, FaCity, FaUmbrellaBeach } from "react-icons/fa";

export const mockTours: Tour[] = [
  {
    id: "1",
    title: "Grand Canyon Helicopter Tour",
    description: "Experience the breathtaking beauty of the Grand Canyon from above with our premium helicopter tour. Soar over the majestic landscapes and witness one of the world's most spectacular natural wonders.",
    images: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=1200&h=600&fit=crop",
    ],
    price: "$459",
    duration: "3 hours",
    rating: 4.9,
    tourCategoryId: "adventure",
    tags: ["Adventure", "Scenic", "Helicopter", "Nature"],
    highlights: [
      "45-minute helicopter flight over Grand Canyon",
      "Professional pilot commentary",
      "Spectacular aerial photography opportunities",
      "Views of Colorado River",
      "Desert landscape exploration"
    ],
    inclusions: [
      "Helicopter flight",
      "Professional pilot guide",
      "Safety briefing and equipment",
      "Complimentary photos",
      "Hotel pickup and drop-off"
    ],
    exclusions: [
      "Gratuities",
      "Personal expenses",
      "Food and beverages",
      "Travel insurance"
    ],
    itinerary: [
      "Hotel pickup and transfer to heliport",
      "Safety briefing and helicopter boarding",
      "45-minute scenic flight over Grand Canyon",
      "Landing at exclusive viewpoint",
      "Return flight and hotel drop-off"
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before departure. Weather-dependent cancellations receive full refund.",
    icon: FaMountain,
    meetingPoint: {
      address: "Grand Canyon National Airport, 3555 Airport Rd, Grand Canyon Village, AZ 86023",
      coordinates: {
        latitude: 35.9524,
        longitude: -112.1401
      },
      instructions: "Please arrive 30 minutes before departure time. Check in at the helicopter tour counter.",
      contactNumber: "+1-555-CANYON-1",
      contactEmail: "info@grandcanyonheli.com"
    }
  },
  {
    id: "2",
    title: "Paris Walking Food Tour",
    description: "Discover the culinary delights of Paris with our guided food walking tour. Taste authentic French cuisine, visit local markets, and learn about Parisian food culture.",
    images: [
      "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549398120-8ccaa3b2b56a?w=1200&h=600&fit=crop",
    ],
    price: "$89",
    duration: "4 hours",
    rating: 4.8,
    tourCategoryId: "culinary",
    tags: ["Food", "Walking", "Culture", "Local Experience"],
    highlights: [
      "Visit 6 authentic Parisian eateries",
      "Taste traditional French pastries and cheeses",
      "Explore local markets and bakeries",
      "Learn about French culinary history",
      "Small group experience (max 12 people)"
    ],
    inclusions: [
      "Professional food guide",
      "All food tastings",
      "Local market visits",
      "Recipe cards",
      "Small group experience"
    ],
    exclusions: [
      "Additional drinks",
      "Hotel pickup",
      "Gratuities",
      "Personal purchases"
    ],
    itinerary: [
      "Meet at Place des Vosges",
      "Visit traditional French bakery",
      "Cheese tasting at fromagerie",
      "Local market exploration",
      "Wine and charcuterie tasting",
      "Dessert at historic patisserie"
    ],
    cancellationPolicy: "Free cancellation up to 12 hours before tour start time.",
    icon: FaCity,
    meetingPoint: {
      address: "Place des Vosges, 75004 Paris, France",
      coordinates: {
        latitude: 48.8555,
        longitude: 2.3665
      },
      instructions: "Meet at the center of Place des Vosges near the statue. Look for guide with red umbrella.",
      contactNumber: "+33-1-23-45-67-89",
      contactEmail: "bonjour@parisfoottours.fr"
    }
  },
  {
    id: "3",
    title: "Northern Lights Aurora Safari",
    description: "Chase the magical Northern Lights in the pristine wilderness of Iceland. Our expert guides will take you to the best viewing locations for an unforgettable aurora experience.",
    images: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517654892525-6d913d1e9c37?w=1200&h=600&fit=crop",
    ],
    price: "$195",
    duration: "6 hours",
    rating: 4.7,
    tourCategoryId: "adventure",
    tags: ["Northern Lights", "Photography", "Adventure", "Nature"],
    highlights: [
      "Professional aurora photography guidance",
      "Multiple viewing locations",
      "Hot chocolate and traditional snacks",
      "Aurora forecast expertise",
      "Small group for personalized experience"
    ],
    inclusions: [
      "Expert Northern Lights guide",
      "Transportation to viewing locations",
      "Photography tips and assistance",
      "Warm blankets and hot beverages",
      "Aurora forecast updates"
    ],
    exclusions: [
      "Camera equipment rental",
      "Meals",
      "Hotel pickup (available for extra cost)",
      "Warm clothing rental"
    ],
    itinerary: [
      "Evening pickup from Reykjavik",
      "Drive to optimal viewing location",
      "Aurora waiting and photography",
      "Hot chocolate break",
      "Alternative location if needed",
      "Return to Reykjavik"
    ],
    cancellationPolicy: "Tours may be cancelled due to weather. Full refund or reschedule available. 24-hour cancellation policy.",
    icon: FaMountain,
    meetingPoint: {
      address: "BSI Bus Terminal, 101 Reykjavik, Iceland",
      coordinates: {
        latitude: 64.1466,
        longitude: -21.9426
      },
      instructions: "Meet at the main entrance of BSI Bus Terminal. Guide will have 'Aurora Safari' sign.",
      contactNumber: "+354-555-AURORA",
      contactEmail: "northern@aurorasafari.is"
    }
  },
  {
    id: "4",
    title: "Tropical Snorkeling Adventure",
    description: "Explore vibrant coral reefs and swim with tropical fish in crystal-clear waters. Perfect for beginners and experienced snorkelers alike.",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&h=600&fit=crop",
    ],
    price: "$75",
    duration: "4 hours",
    rating: 4.6,
    tourCategoryId: "water-sports",
    tags: ["Snorkeling", "Marine Life", "Coral Reef", "Adventure"],
    highlights: [
      "Visit 3 pristine snorkeling spots",
      "Professional snorkeling instruction",
      "Colorful coral reef exploration",
      "Tropical fish and marine life viewing",
      "Underwater photography opportunities"
    ],
    inclusions: [
      "Snorkeling equipment",
      "Professional guide",
      "Boat transportation",
      "Safety briefing",
      "Refreshments on board"
    ],
    exclusions: [
      "Underwater camera rental",
      "Towels",
      "Lunch",
      "Hotel transportation"
    ],
    itinerary: [
      "Marina departure",
      "Safety briefing and equipment fitting",
      "First snorkeling site - shallow reef",
      "Second site - coral garden",
      "Third site - fish sanctuary",
      "Return to marina"
    ],
    cancellationPolicy: "Free cancellation up to 24 hours. Weather cancellations receive full refund.",
    icon: FaWater,
    meetingPoint: {
      address: "Coral Bay Marina, Pier 3, Key Largo, FL 33037",
      coordinates: {
        latitude: 25.0978,
        longitude: -80.4549
      },
      instructions: "Check in at the marina office 15 minutes before departure.",
      contactNumber: "+1-305-555-REEF",
      contactEmail: "dive@coralbaysnorkel.com"
    }
  },
  {
    id: "5",
    title: "Amazon Rainforest Trek",
    description: "Immerse yourself in the world's largest rainforest. Discover incredible biodiversity, indigenous culture, and pristine natural beauty on this multi-day adventure.",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574029811650-2fb0e3b2fc79?w=1200&h=600&fit=crop",
    ],
    price: "$285",
    duration: "3 days",
    rating: 4.8,
    tourCategoryId: "eco-tour",
    tags: ["Rainforest", "Wildlife", "Eco-tourism", "Adventure"],
    highlights: [
      "Guided jungle trekking",
      "Wildlife spotting opportunities",
      "Indigenous community visit",
      "Canopy walkway experience",
      "Night sounds of the jungle"
    ],
    inclusions: [
      "Professional naturalist guide",
      "All meals during trek",
      "Eco-lodge accommodation",
      "Transportation from/to Iquitos",
      "Wildlife viewing equipment"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal gear",
      "Alcoholic beverages",
      "Gratuities"
    ],
    itinerary: [
      "Day 1: Arrival and river journey to lodge",
      "Day 2: Jungle trek and wildlife observation",
      "Day 3: Canopy walk and indigenous village visit",
      "Day 3: Return journey to Iquitos"
    ],
    cancellationPolicy: "Cancellation fees apply. Travel insurance recommended. Weather-dependent activities.",
    icon: FaTree,
    meetingPoint: {
      address: "Iquitos Airport, Coronel FAP Francisco Secada Vignetta International Airport, Peru",
      coordinates: {
        latitude: -3.7847,
        longitude: -73.3088
      },
      instructions: "Meet at arrival hall. Look for Amazon Trek guide with company logo.",
      contactNumber: "+51-65-555-JUNGLE",
      contactEmail: "adventure@amazontrek.pe"
    }
  },
  {
    id: "6",
    title: "Mediterranean Sunset Sail",
    description: "Experience the magic of a Mediterranean sunset aboard a traditional sailing vessel. Enjoy local wines, fresh seafood, and breathtaking coastal views.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1200&h=600&fit=crop",
    ],
    price: "$125",
    duration: "3 hours",
    rating: 4.9,
    tourCategoryId: "leisure",
    tags: ["Sailing", "Sunset", "Wine", "Romantic"],
    highlights: [
      "Traditional Mediterranean sailing",
      "Spectacular sunset views",
      "Local wine and tapas",
      "Swimming opportunity",
      "Small group intimate experience"
    ],
    inclusions: [
      "Sailing experience",
      "Professional skipper",
      "Local wines and tapas",
      "Swimming equipment",
      "Sunset photography opportunities"
    ],
    exclusions: [
      "Hotel pickup",
      "Additional drinks",
      "Gratuities",
      "Towels"
    ],
    itinerary: [
      "Marina departure",
      "Coastal sailing",
      "Swimming break (optional)",
      "Wine and tapas service",
      "Sunset viewing",
      "Return to marina"
    ],
    cancellationPolicy: "Free cancellation up to 48 hours. Weather-dependent with full refund for cancellations.",
    icon: FaUmbrellaBeach,
    meetingPoint: {
      address: "Port Vell Marina, 08039 Barcelona, Spain",
      coordinates: {
        latitude: 41.3759,
        longitude: 2.1851
      },
      instructions: "Meet at dock 15, look for the traditional sailing boat 'Mediterranean Dream'.",
      contactNumber: "+34-93-555-SAIL",
      contactEmail: "ahoy@medsail.es"
    }
  }
];