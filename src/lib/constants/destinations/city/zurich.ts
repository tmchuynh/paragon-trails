// filepath: /home/tmchuynh/Documents/Projects/paragon-trails/src/lib/constants/destinations/city/zurich.ts
import { Attraction } from "@/lib/interfaces/services/attractions";

export const zurichglobalAttractions: Attraction[] = [
  {
    title: "Lake Zurich",
    description:
      "A picturesque lake offering boat cruises, swimming spots, and scenic promenades.",
    imageUrl: "https://images.unsplash.com/photo-lake-zurich",
    location: "Zurich, Switzerland",
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
    rating: 4.7,
    tags: ["Adventure", "Free", "Popular", "Petfriendly"],
    accessibilityFeatures: [],
    entryFees: [],
    features: ["lake", "boating", "walking trails"],
  },
  {
    title: "Grossmünster",
    description:
      "Iconic twin-towered church with significant historical and architectural value.",
    imageUrl: "https://images.unsplash.com/photo-grossmunster-zurich",
    location: "Grossmünsterplatz, 8001 Zürich, Switzerland",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "10:00 AM",
            to: "6:00 PM",
          },
        ],
      },
    ],
    entryFee: "CHF 5",
    entryFeeCategory: "budget",
    priceRange: "$",
    priceCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["Historical", "Popular"],
    accessibilityFeatures: ["stairs to tower"],
    entryFees: [
      {
        category: "adult",
        priceRange: "CHF 5",
        priceCategory: "budget",
      },
      {
        category: "child",
        priceRange: "CHF 2",
        priceCategory: "budget",
      },
    ],
    features: ["church", "architecture", "historical site"],
  },
  {
    title: "Bahnhofstrasse",
    description:
      "One of the world's most exclusive shopping avenues, lined with luxury boutiques and cafes.",
    imageUrl: "https://images.unsplash.com/photo-bahnhofstrasse-zurich",
    location: "Bahnhofstrasse, Zurich, Switzerland",
    openingHours: [
      {
        day: "Monday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
      {
        day: "Tuesday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
      {
        day: "Wednesday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
      {
        day: "Thursday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
      {
        day: "Friday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
      {
        day: "Saturday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
      {
        day: "Sunday",
        availableHours: [
          {
            from: "9:00 AM",
            to: "5:00 PM",
          },
        ],
      },
    ],
    entryFee: undefined,
    entryFeeCategory: "free",
    priceRange: "free",
    priceCategory: "free",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["Free", "Popular"],
    accessibilityFeatures: [],
    entryFees: [],
    features: ["shopping", "dining", "urban experience"],
  },
];
