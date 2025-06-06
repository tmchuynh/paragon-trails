// filepath: /home/tmchuynh/Documents/Projects/paragon-trails/src/lib/constants/destinations/city/barcelona.ts
import { Attraction } from "@/lib/interfaces/services/attractions";

export const barcelonamediterraneanAttractions: Attraction[] = [
  {
    title: "Sagrada Família",
    description:
      "Antoni Gaudí's iconic unfinished church known for its unique architecture.",
    imageUrl: "https://images.unsplash.com/photo-barcelona-sagrada-familia",
    location: "Carrer de Mallorca, 401, Barcelona",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "6:00 PM",
          },
        ],
      },
    ],
    entryFee: "€26-€38",
    entryFeeCategory: "expensive",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["Historical", "Spiritual", "Popular"],
    accessibilityFeatures: ["wheelchair accessible"],
    entryFees: [
      {
        category: "adult",
        priceRange: "€26-€38",
        priceCategory: "expensive",
      },
      {
        category: "child",
        priceRange: "€13-€19",
        priceCategory: "budget",
      },
    ],
    features: ["basilica", "Gaudí architecture", "guided tours"],
  },
  {
    title: "Park Güell",
    description:
      "Public park with Gaudí's architectural works and gardens with city views.",
    imageUrl: "https://images.unsplash.com/photo-barcelona-park-guell",
    location: "Carrer d'Olot, Barcelona",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "9:30 AM",
            to: "7:30 PM",
          },
        ],
      },
    ],
    entryFee: "€10",
    entryFeeCategory: "budget",
    priceRange: "$",
    priceCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["Adventure", "Artormusic", "Popular"],
    accessibilityFeatures: ["limited wheelchair access"],
    entryFees: [
      {
        category: "adult",
        priceRange: "€10",
        priceCategory: "budget",
      },
      {
        category: "child",
        priceRange: "€5",
        priceCategory: "low",
      },
    ],
    features: ["park", "Gaudí architecture", "gardens", "city views"],
  },
  {
    title: "La Rambla",
    description:
      "Famous tree-lined pedestrian street with shops, restaurants, and street performers.",
    imageUrl: "https://images.unsplash.com/photo-barcelona-la-rambla",
    location: "La Rambla, Barcelona",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "12:00 AM",
            to: "11:59 PM",
          },
        ],
      },
    ],
    entryFee: undefined,
    entryFeeCategory: "free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.4,
    tags: ["Free", "Popular"],
    accessibilityFeatures: [],
    entryFees: [],
    features: ["pedestrian street", "shopping", "dining", "street performers"],
  },
];
