import { Activity } from "@/lib/interfaces/services/activities";

export const mockActivities: Activity[] = [
  {
    id: "ACT001",
    name: "Whitewater Rafting Adventure",
    category: "Water Sports",
    description:
      "Experience the thrill of navigating Class III-IV rapids on one of the world's most scenic rivers. Perfect for adventure seekers looking for an adrenaline rush.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    ],
    duration: "6 hours",
    difficulty: "Challenging",
    groupSize: {
      min: 4,
      max: 12,
    },
    pricing: {
      adult: 125,
      child: 75,
      senior: 100,
      currency: "USD",
    },
    location: {
      city: "Colorado Springs",
      country: "United States",
      address: "Arkansas River, Colorado",
      coordinates: {
        latitude: 38.8339,
        longitude: -105.7911,
      },
    },
    schedule: {
      frequency: "Daily",
      times: ["08:00", "13:00"],
      seasonality: "May - September",
    },
    inclusions: [
      "Professional guide",
      "All safety equipment",
      "Wet suits and helmets",
      "Transportation to/from river",
      "Post-adventure lunch",
    ],
    exclusions: [
      "Personal clothing",
      "Photos (available for purchase)",
      "Gratuities",
      "Hotel pickup",
    ],
    requirements: [
      "Minimum age 12 years",
      "Good physical fitness",
      "Ability to swim",
      "No serious medical conditions",
    ],
    equipment: {
      provided: ["Life jacket", "Helmet", "Paddle", "Wet suit"],
      required: ["Swimwear", "Secure footwear", "Sunscreen"],
    },
    safety: {
      certification: ["Swift Water Rescue", "Wilderness First Aid"],
      guidelines: [
        "Safety briefing mandatory",
        "Follow guide instructions",
        "Stay with group",
      ],
    },
    cancellation: {
      policy: "24 hours advance notice",
      refund: "Full refund for weather cancellations",
    },
    rating: 4.8,
    reviews: 347,
    tags: ["Adventure", "Water Sports", "Adrenaline", "Nature"],
    ageRestriction: {
      minimum: 12,
    },
    physicalRequirements: ["Good swimming ability", "Moderate fitness level"],
    weatherDependent: true,
  },
  {
    id: "ACT002",
    name: "Hot Air Balloon Ride",
    category: "Aerial Experience",
    description:
      "Float peacefully above stunning landscapes in a hot air balloon. Enjoy panoramic views and a unique perspective of the countryside during this magical experience.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop",
    ],
    duration: "3 hours",
    difficulty: "Easy",
    groupSize: {
      min: 2,
      max: 8,
    },
    pricing: {
      adult: 199,
      child: 149,
      currency: "USD",
    },
    location: {
      city: "Napa Valley",
      country: "United States",
      address: "Napa Valley, California",
      coordinates: {
        latitude: 38.5025,
        longitude: -122.2654,
      },
    },
    schedule: {
      frequency: "Daily",
      times: ["06:00", "18:00"],
      seasonality: "Year-round (weather permitting)",
    },
    inclusions: [
      "1-hour balloon flight",
      "Pre-flight safety briefing",
      "Champagne toast",
      "Flight certificate",
      "Transportation to launch site",
    ],
    exclusions: [
      "Hotel pickup",
      "Meals",
      "Gratuities",
      "Photos (available for purchase)",
    ],
    requirements: [
      "Minimum age 6 years",
      "Ability to stand for 1 hour",
      "No fear of heights",
    ],
    equipment: {
      provided: ["Safety briefing", "Flight certificate"],
      required: ["Comfortable walking shoes", "Layered clothing"],
    },
    safety: {
      certification: ["FAA Licensed Pilot", "Commercial Balloon License"],
      guidelines: ["Weather conditions monitored", "Weight restrictions apply"],
    },
    cancellation: {
      policy: "48 hours advance notice",
      refund: "Full refund for weather cancellations",
    },
    rating: 4.9,
    reviews: 892,
    tags: ["Scenic", "Romantic", "Peaceful", "Aerial"],
    ageRestriction: {
      minimum: 6,
    },
    physicalRequirements: ["Ability to stand for extended periods"],
    weatherDependent: true,
  },
  {
    id: "ACT003",
    name: "Rock Climbing Course",
    category: "Adventure Sports",
    description:
      "Learn the fundamentals of rock climbing with certified instructors. Perfect for beginners wanting to try this exciting sport in a safe environment.",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517654892525-6d913d1e9c37?w=1200&h=600&fit=crop",
    ],
    duration: "4 hours",
    difficulty: "Moderate",
    groupSize: {
      min: 3,
      max: 6,
    },
    pricing: {
      adult: 85,
      child: 65,
      currency: "USD",
    },
    location: {
      city: "Joshua Tree",
      country: "United States",
      address: "Joshua Tree National Park, California",
      coordinates: {
        latitude: 33.8734,
        longitude: -115.901,
      },
    },
    schedule: {
      frequency: "Weekends",
      times: ["08:00", "13:00"],
      seasonality: "October - April",
    },
    inclusions: [
      "Certified climbing instructor",
      "All climbing equipment",
      "Safety gear and helmets",
      "Basic technique instruction",
      "Park entrance fee",
    ],
    exclusions: [
      "Transportation to park",
      "Food and beverages",
      "Advanced equipment",
      "Personal gear",
    ],
    requirements: [
      "Minimum age 10 years",
      "Good physical condition",
      "No fear of heights",
      "Closed-toe shoes required",
    ],
    equipment: {
      provided: ["Climbing harness", "Helmet", "Ropes", "Carabiners"],
      required: ["Athletic clothing", "Closed-toe shoes", "Water bottle"],
    },
    safety: {
      certification: [
        "Certified Rock Climbing Instructor",
        "Wilderness First Aid",
      ],
      guidelines: [
        "Always use safety equipment",
        "Follow instructor commands",
        "Buddy system",
      ],
    },
    cancellation: {
      policy: "24 hours advance notice",
      refund: "50% refund with 24+ hours notice",
    },
    rating: 4.6,
    reviews: 234,
    tags: ["Adventure", "Fitness", "Learning", "Outdoor"],
    ageRestriction: {
      minimum: 10,
    },
    physicalRequirements: ["Good upper body strength", "Basic fitness level"],
    weatherDependent: true,
  },
  {
    id: "ACT004",
    name: "Wildlife Photography Safari",
    category: "Photography",
    description:
      "Combine wildlife viewing with photography instruction on this guided safari. Learn techniques while capturing amazing shots of animals in their natural habitat.",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574029811650-2fb0e3b2fc79?w=1200&h=600&fit=crop",
    ],
    duration: "8 hours",
    difficulty: "Easy",
    groupSize: {
      min: 4,
      max: 10,
    },
    pricing: {
      adult: 175,
      child: 125,
      senior: 150,
      currency: "USD",
    },
    location: {
      city: "Serengeti",
      country: "Tanzania",
      address: "Serengeti National Park",
      coordinates: {
        latitude: -2.3333,
        longitude: 34.8333,
      },
    },
    schedule: {
      frequency: "Daily",
      times: ["05:30"],
      seasonality: "Year-round",
    },
    inclusions: [
      "Professional photography guide",
      "Game drive vehicle",
      "Photography instruction",
      "Park entrance fees",
      "Lunch and refreshments",
    ],
    exclusions: [
      "Camera equipment rental",
      "Accommodation",
      "International flights",
      "Visa fees",
    ],
    requirements: [
      "Basic photography knowledge helpful",
      "Own camera equipment",
      "Early morning start",
    ],
    equipment: {
      provided: ["Binoculars", "Field guide", "Vehicle with roof hatch"],
      required: [
        "Camera with telephoto lens",
        "Extra batteries",
        "Memory cards",
      ],
    },
    safety: {
      certification: ["Professional Guide License", "First Aid Certified"],
      guidelines: [
        "Stay in vehicle",
        "No sudden movements",
        "Follow guide instructions",
      ],
    },
    cancellation: {
      policy: "72 hours advance notice",
      refund: "Full refund for weather/animal migration cancellations",
    },
    rating: 4.8,
    reviews: 156,
    tags: ["Wildlife", "Photography", "Safari", "Educational"],
    ageRestriction: {
      minimum: 8,
    },
    physicalRequirements: ["Ability to sit for extended periods"],
    weatherDependent: false,
  },
  {
    id: "ACT005",
    name: "Scuba Diving Certification",
    category: "Water Sports",
    description:
      "Get your Open Water certification with our comprehensive scuba diving course. Learn essential skills and explore the underwater world safely.",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop",
    ],
    duration: "3 days",
    difficulty: "Moderate",
    groupSize: {
      min: 2,
      max: 8,
    },
    pricing: {
      adult: 450,
      child: 350,
      currency: "USD",
    },
    location: {
      city: "Key Largo",
      country: "United States",
      address: "John Pennekamp Coral Reef State Park, Florida",
      coordinates: {
        latitude: 25.0978,
        longitude: -80.4549,
      },
    },
    schedule: {
      frequency: "Weekly",
      times: ["08:00"],
      seasonality: "Year-round",
    },
    inclusions: [
      "PADI Open Water certification",
      "All scuba equipment",
      "Training materials",
      "Pool and open water dives",
      "Instructor fees",
    ],
    exclusions: [
      "Medical clearance",
      "Accommodation",
      "Meals",
      "Transportation",
    ],
    requirements: [
      "Minimum age 12 years",
      "Medical fitness form",
      "Swimming competency",
      "Comfort in water",
    ],
    equipment: {
      provided: ["Mask, fins, snorkel", "BCD vest", "Regulator", "Wetsuit"],
      required: ["Swimwear", "Towel", "Medical clearance form"],
    },
    safety: {
      certification: ["PADI Instructor", "Emergency First Response"],
      guidelines: [
        "Never dive alone",
        "Respect marine life",
        "Follow dive tables",
      ],
    },
    cancellation: {
      policy: "7 days advance notice",
      refund: "Partial refund based on completed portions",
    },
    rating: 4.7,
    reviews: 445,
    tags: ["Scuba Diving", "Certification", "Marine Life", "Adventure"],
    ageRestriction: {
      minimum: 12,
    },
    physicalRequirements: [
      "Swimming ability",
      "Basic physical fitness",
      "Medical clearance",
    ],
    weatherDependent: true,
  },
];
