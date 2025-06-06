// filepath: /home/tmchuynh/Documents/Projects/paragon-trails/src/lib/constants/destinations/city/tokyo.ts
import { Attraction } from "@/lib/interfaces/services/attractions";

export const tokyoasiapacificAttractions: Attraction[] = [
  {
    title: "Senso-ji Temple",
    description:
      "Tokyo’s oldest temple, famous for its Kaminarimon Gate and shopping street.",
    imageUrl: "https://images.unsplash.com/photo-tokyo-sensoji",
    location: "2 Chome-3-1 Asakusa, Taito City, Tokyo",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "6:00 AM",
            to: "5:00 AM",
          },
        ],
      },
    ],
    entryFee: undefined,
    entryFeeCategory: "free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["Historical", "Spiritual", "Popular"],
    accessibilityFeatures: [],
    entryFees: [],
    features: ["temple", "historical site", "shopping street"],
  },
  {
    title: "Shibuya Crossing",
    description:
      "World-famous intersection known for its scramble crossing and neon lights, symbolizing the hustle of Tokyo.",
    imageUrl: "https://images.unsplash.com/photo-tokyo-shibuya-crossing",
    location: "Shibuya, Tokyo",
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
    timeOfDay: "day or night",
    rating: 4.6,
    tags: ["Free", "Popular"],
    accessibilityFeatures: [],
    entryFees: [],
    features: ["intersection", "neon lights", "shopping", "entertainment"],
  },
  {
    title: "Tokyo Tower",
    description:
      "Iconic communications and observation tower offering city views.",
    imageUrl: "https://images.unsplash.com/photo-tokyo-tower",
    location: "4 Chome-2-8 Shibakoen, Minato City, Tokyo",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "11:00 AM",
          },
        ],
      },
    ],
    entryFee: "¥1200",
    entryFeeCategory: "budget",
    priceRange: "$",
    priceCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["Romantic", "Popular"],
    accessibilityFeatures: ["wheelchair accessible elevator"],
    entryFees: [
      {
        category: "adult",
        priceRange: "¥1200",
        priceCategory: "budget",
      },
      {
        category: "child",
        priceRange: "¥600",
        priceCategory: "budget",
      },
    ],
    features: ["observation tower", "city views", "landmark"],
  },
];
