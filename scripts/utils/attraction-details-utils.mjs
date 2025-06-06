/**
 * Attraction details utilities for Paragon Trails
 * Contains detailed information about attractions including hours, prices, and features
 */

// Standard opening hours patterns
const standardBusinessHours = [
  { day: "Monday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
];

const tenToTen = [
  { day: "Monday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "10:00 AM", to: "10:00 PM" }] },
];

const tenToFour = [
  { day: "Monday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "10:00 AM", to: "4:00 PM" }] },
];

const tenToSix = [
  { day: "Monday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
];

const earlyMorningToEvening = [
  { day: "Monday", availableHours: [{ from: "7:00 AM", to: "6:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "7:00 AM", to: "6:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "7:00 AM", to: "6:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "7:00 AM", to: "6:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "7:00 AM", to: "6:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "8:00 AM", to: "6:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "8:00 AM", to: "6:00 PM" }] },
];

const extendedWeekdayHours = [
  { day: "Monday", availableHours: [{ from: "9:00 AM", to: "8:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "9:00 AM", to: "8:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "9:00 AM", to: "8:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "9:00 AM", to: "8:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "9:00 AM", to: "8:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
];

const twentyFourHours = [
  { day: "Monday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
  { day: "Thursday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
  { day: "Friday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
  { day: "Saturday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
  { day: "Sunday", availableHours: [{ from: "12:00 AM", to: "11:59 PM" }] },
];

const extendedDays = [
  { day: "Monday", availableHours: [{ from: "8:00 AM", to: "7:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "8:00 AM", to: "7:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "8:00 AM", to: "7:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "8:00 AM", to: "7:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "8:00 AM", to: "7:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
];

const closedTuesdays = [
  { day: "Monday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Tuesday", availableHours: [] },
  { day: "Wednesday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "9:00 AM", to: "5:00 PM" }] },
];

const twelveToEleven = [
  { day: "Monday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
  { day: "Tuesday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "12:00 PM", to: "11:00 PM" }] },
];

const closedMondays = [
  { day: "Monday", availableHours: [] },
  { day: "Tuesday", availableHours: [{ from: "10:00 AM", to: "5:00 PM" }] },
  { day: "Wednesday", availableHours: [{ from: "10:00 AM", to: "5:00 PM" }] },
  { day: "Thursday", availableHours: [{ from: "10:00 AM", to: "5:00 PM" }] },
  { day: "Friday", availableHours: [{ from: "10:00 AM", to: "5:00 PM" }] },
  { day: "Saturday", availableHours: [{ from: "10:00 AM", to: "5:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "10:00 AM", to: "5:00 PM" }] },
];

const weekendOnly = [
  { day: "Monday", availableHours: [] },
  { day: "Tuesday", availableHours: [] },
  { day: "Wednesday", availableHours: [] },
  { day: "Thursday", availableHours: [] },
  { day: "Friday", availableHours: [] },
  { day: "Saturday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
  { day: "Sunday", availableHours: [{ from: "10:00 AM", to: "6:00 PM" }] },
];

// Export the attraction details
export const attractionDetails = {
  amsterdam: {
    Rijksmuseum: {
      description: "National museum showcasing Dutch art and history.",
      entryFee: "€20",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      openingHours: standardBusinessHours,
      rating: 4.8,
      isHistorical: true,
      isArtOrMusic: true,
      isPopular: true,
      accessibilityFeatures: ["wheelchair accessible"],
      entryFees: [
        { category: "adult", priceRange: "€20", priceCategory: "moderate" },
        { category: "child", priceRange: "€10", priceCategory: "budget" },
      ],
      features: ["museum", "art", "Dutch history", "guided tours"],
    },
    "Anne Frank House": {
      description: "Museum dedicated to the Jewish wartime diarist Anne Frank.",
      entryFee: "€12.50",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "9:00 AM", to: "7:00 PM" }] },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "7:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "7:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "7:00 PM" }],
        },
        { day: "Friday", availableHours: [{ from: "9:00 AM", to: "7:00 PM" }] },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "7:00 PM" }],
        },
        { day: "Sunday", availableHours: [{ from: "9:00 AM", to: "7:00 PM" }] },
      ],
      rating: 4.7,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      accessibilityFeatures: ["not wheelchair accessible"],
      entryFees: [
        { category: "adult", priceRange: "€12.50", priceCategory: "budget" },
        { category: "child", priceRange: "€6.50", priceCategory: "budget" },
      ],
      features: ["museum", "WWII history", "education"],
    },
    Vondelpark: {
      description:
        "Popular park offering open green spaces and outdoor activities.",
      entryFee: undefined,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      openingHours: twentyFourHours,
      rating: 4.6,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isPetFriendly: true,
      accessibilityFeatures: [],
      entryFees: [],
      features: ["park", "walking", "outdoor", "cycling", "picnic"],
    },
  },
  london: {
    "Tower of London": {
      description: "Historic castle on the north bank of the River Thames.",
      entryFee: "£29.90",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "premium",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "5:30 PM" }],
        },
        { day: "Friday", availableHours: [{ from: "9:00 AM", to: "5:30 PM" }] },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
      ],
      rating: 4.6,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      accessibilityFeatures: ["partial wheelchair access"],
      entryFees: [
        { category: "adult", priceRange: "£29.90", priceCategory: "expensive" },
        { category: "child", priceRange: "£14.90", priceCategory: "moderate" },
      ],
      features: ["castle", "history", "crown jewels", "guided tours"],
    },
    "British Museum": {
      description: "Public museum dedicated to human history, art and culture.",
      entryFee: undefined,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "10:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "10:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "10:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "10:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "10:00 AM", to: "8:30 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
      ],
      rating: 4.8,
      isHistorical: true,
      isArtOrMusic: true,
      isFree: true,
      isPopular: true,
      accessibilityFeatures: ["wheelchair accessible", "audio guides"],
      entryFees: [],
      features: ["museum", "art", "world history", "artifacts", "exhibitions"],
    },
    "Hyde Park": {
      description: "One of the largest parks in London and a Royal Park.",
      entryFee: undefined,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "5:00 AM", to: "12:00 AM" }],
        },
      ],
      rating: 4.7,
      isAdventure: true,
      isFree: true,
      isPetFriendly: true,
      isPopular: true,
      accessibilityFeatures: ["wheelchair accessible paths"],
      entryFees: [],
      features: ["park", "lake", "gardens", "outdoor activities"],
    },
  },
  "new-york-city": {
    "Statue of Liberty": {
      description: "Iconic copper statue representing freedom and democracy.",
      entryFee: "$24.30",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "9:30 AM", to: "4:30 PM" }] },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        { day: "Friday", availableHours: [{ from: "9:30 AM", to: "4:30 PM" }] },
        {
          day: "Saturday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        { day: "Sunday", availableHours: [{ from: "9:30 AM", to: "4:30 PM" }] },
      ],
      rating: 4.7,
      isHistorical: true,
      isPopular: true,
      accessibilityFeatures: ["elevator to observation deck"],
      entryFees: [
        { category: "adult", priceRange: "$24.30", priceCategory: "moderate" },
        { category: "child", priceRange: "$12.15", priceCategory: "budget" },
      ],
      features: ["monument", "national park", "views", "ferry ride"],
    },
    "Central Park": {
      description: "Expansive urban park in the heart of Manhattan.",
      entryFee: undefined,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "6:00 AM", to: "1:00 AM" }] },
        {
          day: "Tuesday",
          availableHours: [{ from: "6:00 AM", to: "1:00 AM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "6:00 AM", to: "1:00 AM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "6:00 AM", to: "1:00 AM" }],
        },
        { day: "Friday", availableHours: [{ from: "6:00 AM", to: "1:00 AM" }] },
        {
          day: "Saturday",
          availableHours: [{ from: "6:00 AM", to: "1:00 AM" }],
        },
        { day: "Sunday", availableHours: [{ from: "6:00 AM", to: "1:00 AM" }] },
      ],
      rating: 4.9,
      isAdventure: true,
      isFree: true,
      isPetFriendly: true,
      isPopular: true,
      accessibilityFeatures: ["accessible paths", "adaptive playgrounds"],
      entryFees: [],
      features: ["park", "lake", "zoo", "paths", "outdoor activities"],
    },
    "Metropolitan Museum of Art": {
      description:
        "One of the world's largest and most prestigious art museums.",
      entryFee: "$25",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "10:00 AM", to: "9:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "10:00 AM", to: "9:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "10:00 AM", to: "5:30 PM" }],
        },
      ],
      rating: 4.8,
      isHistorical: true,
      isArtOrMusic: true,
      isPopular: true,
      accessibilityFeatures: [
        "wheelchair accessible",
        "assistive listening devices",
      ],
      entryFees: [
        { category: "adult", priceRange: "$25", priceCategory: "moderate" },
        { category: "student", priceRange: "$12", priceCategory: "budget" },
        { category: "senior", priceRange: "$17", priceCategory: "budget" },
        {
          category: "child under 12",
          priceRange: "Free",
          priceCategory: "free",
        },
      ],
      features: ["museum", "art", "exhibitions", "world-class collection"],
    },
  },
  paris: {
    "Eiffel Tower": {
      description: "Iconic wrought-iron lattice tower on the Champ de Mars.",
      entryFee: "€26.80",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "premium",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:30 AM", to: "11:45 PM" }],
        },
      ],
      rating: 4.6,
      isHistorical: true,
      isRomantic: true,
      isPopular: true,
      accessibilityFeatures: [
        "elevator access",
        "wheelchair accessible platform",
      ],
      entryFees: [
        {
          category: "adult to top",
          priceRange: "€26.80",
          priceCategory: "expensive",
        },
        {
          category: "youth to top",
          priceRange: "€13.40",
          priceCategory: "moderate",
        },
        {
          category: "adult to second floor",
          priceRange: "€16.70",
          priceCategory: "moderate",
        },
      ],
      features: ["landmark", "views", "restaurant", "observation deck"],
    },
    "Louvre Museum": {
      description:
        "World's largest art museum and a historic monument in Paris.",
      entryFee: "€17",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "9:00 AM", to: "6:00 PM" }] },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        { day: "Friday", availableHours: [{ from: "9:00 AM", to: "9:45 PM" }] },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "9:45 PM" }],
        },
        { day: "Sunday", availableHours: [{ from: "9:00 AM", to: "6:00 PM" }] },
      ],
      rating: 4.8,
      isHistorical: true,
      isArtOrMusic: true,
      isPopular: true,
      accessibilityFeatures: ["wheelchair accessible entrances"],
      entryFees: [
        { category: "adult", priceRange: "€17", priceCategory: "moderate" },
        { category: "child", priceRange: "€8.50", priceCategory: "budget" },
      ],
      features: ["museum", "art", "cultural history", "guided tours"],
    },
    Montmartre: {
      description:
        "Historic hilltop neighborhood known for its artistic history.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.5,
      isRomantic: true,
      isArtOrMusic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["historic district", "artistic heritage", "scenic views"],
    },
  },
  "rio-de-janeiro": {
    "Christ the Redeemer": {
      description:
        "Colossal statue overlooking Rio, symbolizing peace and Christianity.",
      openingHours: extendedDays,
      entryFee: "R$24",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.8,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible paths and elevators"],
      entryFees: [
        {
          category: "adult",
          priceRange: "R$24",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "R$12",
          priceCategory: "budget",
        },
      ],
      features: ["statue", "landmark", "religious site", "viewpoint"],
    },
    "Copacabana Beach": {
      description: "Famous beach with vibrant atmosphere and stunning views.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      entryFees: [],
      features: ["beach", "sunbathing", "swimming", "water sports"],
    },
    "Sugarloaf Mountain": {
      description:
        "Granite peak with cable car rides and panoramic views of the city.",
      openingHours: "8:00 AM - 9:00 PM",
      entryFee: "R$20",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.7,
      isAdventure: true,
      isRomantic: true,
      isPopular: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "R$20",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "R$10",
          priceCategory: "budget",
        },
      ],
      features: ["mountain", "viewpoint", "cable car", "hiking"],
    },
  },
  sydney: {
    "Sydney Opera House": {
      description:
        "World-famous performing arts center with distinctive architecture.",
      openingHours: standardBusinessHours,
      entryFee: "AUD 42",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.7,
      isArtOrMusic: true,
      isLuxury: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible entrances and seating"],
      entryFees: [
        {
          category: "adult",
          priceRange: "AUD 42",
          priceCategory: "expensive",
        },
        {
          category: "child",
          priceRange: "AUD 20",
          priceCategory: "budget",
        },
      ],
      features: ["performing arts", "architecture", "guided tours"],
    },
    "Bondi Beach": {
      description: "Popular beach known for surfing and coastal walks.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      entryFees: [],
      features: ["beach", "surfing", "walking", "outdoor"],
    },
    "Taronga Zoo": {
      description: "Large zoo featuring native and exotic animals.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:30 AM", to: "4:30 PM" }],
        },
      ],
      entryFee: "AUD 47",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.5,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible pathways"],
      entryFees: [
        {
          category: "adult",
          priceRange: "AUD 47",
          priceCategory: "expensive",
        },
        {
          category: "child",
          priceRange: "AUD 24",
          priceCategory: "budget",
        },
      ],
      features: ["zoo", "wildlife", "family-friendly", "guided tours"],
    },
  },
  tokyo: {
    "Senso-ji Temple": {
      description:
        "Tokyo’s oldest temple, famous for its Kaminarimon Gate and shopping street.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "6:00 AM", to: "5:00 PM" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["temple", "historical site", "shopping street"],
    },
    "Tokyo Tower": {
      description:
        "Iconic communications and observation tower offering city views.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "11:00 PM" }],
        },
      ],
      entryFee: "¥1200",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isRomantic: true,
      isPopular: true,
      isWheelchairAccessible: true,
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
    "Shinjuku Gyoen National Garden": {
      description:
        "Large park with traditional Japanese gardens and seasonal flowers.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "4:30 PM" }],
        },
      ],
      entryFee: "¥500",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isAdventure: true,
      isFree: false,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible paths"],
      entryFees: [
        {
          category: "adult",
          priceRange: "¥500",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "¥250",
          priceCategory: "budget",
        },
      ],
      features: ["garden", "nature", "walking trails", "picnic"],
    },
    "Shibuya Crossing": {
      description:
        "World-famous intersection known for its scramble crossing and neon lights, symbolizing the hustle of Tokyo.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "day or night",
      rating: 4.6,
      isPopular: true,
      isFree: true,
      isScenic: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["intersection", "neon lights", "shopping", "entertainment"],
    },
  },
  "st-thomas": {
    "Magens Bay Beach": {
      description:
        "One of the most beautiful beaches in the Caribbean, known for calm waters and a scenic bay.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "8:00 AM", to: "4:00 PM" }],
        },
      ],
      entryFee: "$5",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.7,
      isScenic: true,
      isNature: true,
      isPopular: true,
      isFamilyFriendly: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$5",
          priceCategory: "low",
        },
        {
          category: "child",
          priceRange: "$2.50",
          priceCategory: "low",
        },
      ],
      features: ["beach", "swimming", "snorkeling", "sunbathing"],
    },
    "Blackbeard's Castle": {
      description:
        "Historic watchtower and attraction with panoramic views and pirate-themed history exhibits.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
      ],
      entryFee: "$15",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.4,
      isHistorical: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "$15",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$7.50",
          priceCategory: "low",
        },
      ],
      features: ["historical site", "watchtower", "panoramic views"],
    },
    "Coral World Ocean Park": {
      description:
        "Marine park offering close-up encounters with sea life, an underwater observatory, and touch pools.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
      ],
      entryFee: "$24",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.5,
      isEducational: true,
      isFamilyFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$24",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$12",
          priceCategory: "budget",
        },
      ],
      features: ["marine park", "aquarium", "educational exhibits"],
    },
  },
  "san-juan": {
    "Old San Juan": {
      description:
        "Historic colonial district with cobblestone streets, colorful buildings, and 16th-century forts.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "day or night",
      rating: 4.8,
      isHistorical: true,
      isFree: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["historic district", "colonial architecture", "scenic views"],
    },
    "Castillo San Felipe del Morro": {
      description:
        "Massive 16th-century citadel offering stunning ocean views and insight into colonial-era military architecture.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "6:00 PM" }],
        },
      ],
      entryFee: "$10",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$10",
          priceCategory: "low",
        },
        {
          category: "child",
          priceRange: "$5",
          priceCategory: "low",
        },
      ],
      features: ["fortress", "historical site", "ocean views"],
    },
    "Condado Beach": {
      description:
        "Popular beach near San Juan’s hotel district known for its golden sand and lively atmosphere.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isNature: true,
      isFree: true,
      isPopular: true,
      isFamilyFriendly: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["beach", "sunbathing", "swimming", "water sports"],
    },
  },
  "quebec-city": {
    "Old Quebec": {
      description:
        "UNESCO World Heritage Site featuring cobblestone streets, historic architecture, and fortified city walls.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.8,
      isHistorical: true,
      isScenic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["historic district", "cobblestone streets", "scenic views"],
    },
    "Château Frontenac": {
      description:
        "Iconic grand hotel and historic site with panoramic views over the St. Lawrence River.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
      ],
      entryFee: "$20 (tour)",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$20 (tour)",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$10 (tour)",
          priceCategory: "budget",
        },
      ],
      features: ["historic hotel", "panoramic views", "guided tours"],
    },
    "Montmorency Falls": {
      description:
        "Spectacular waterfall higher than Niagara Falls, with a suspension bridge and cable car views.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "9:00 AM", to: "5:00 PM" }],
        },
      ],
      entryFee: "$7.39",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.6,
      isNature: true,
      isAdventure: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$7.39",
          priceCategory: "low",
        },
        {
          category: "child",
          priceRange: "$3.70",
          priceCategory: "low",
        },
      ],
      features: ["waterfall", "suspension bridge", "cable car"],
    },
  },
  "los-angeles": {
    "Hollywood Walk of Fame": {
      description:
        "Famous sidewalk celebrating stars of the entertainment industry with over 2,700 brass stars.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.3,
      isCultural: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["sidewalk", "celebrity stars", "entertainment history"],
    },
    "Griffith Observatory": {
      description:
        "Public observatory with exhibits, telescopes, and panoramic views of Los Angeles and the Hollywood Sign.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "12:00 PM", to: "10:00 PM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "12:00 PM", to: "10:00 PM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "12:00 PM", to: "10:00 PM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "12:00 PM", to: "10:00 PM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "10:00 AM", to: "10:00 PM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "10:00 AM", to: "10:00 PM" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "day or night",
      rating: 4.7,
      isEducational: true,
      isFree: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["observatory", "telescope", "Hollywood Sign views"],
    },
    "Santa Monica Pier": {
      description:
        "Iconic oceanfront pier with an amusement park, aquarium, shops, and restaurants.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "6:00 AM", to: "12:00 AM" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "day or evening",
      rating: 4.5,
      isAdventure: true,
      isFree: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["pier", "amusement park", "aquarium", "restaurants"],
    },
  },
  "hong-kong": {
    "Victoria Peak": {
      description:
        "Highest point on Hong Kong Island with observation decks and sweeping views of the city skyline and harbor.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "7:00 AM", to: "12:00 AM" }],
        },
      ],
      entryFeeCategory: "free (tram extra)",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "day or night",
      rating: 4.8,
      isScenic: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["peak", "observation deck", "city views"],
    },
    "Tsim Sha Tsui Promenade": {
      description:
        "Waterfront promenade offering stunning views of Hong Kong’s skyline, especially at night.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "evening",
      rating: 4.6,
      isScenic: true,
      isRomantic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["promenade", "waterfront", "city skyline views"],
    },
    "Hong Kong Disneyland": {
      description:
        "Family theme park with classic Disney rides, entertainment, and themed zones.",
      openingHours: "10:30 AM – 8:00 PM",
      entryFee: "$82 USD",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.5,
      isFamilyFriendly: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$82 USD",
          priceCategory: "expensive",
        },
        {
          category: "child",
          priceRange: "$41 USD",
          priceCategory: "budget",
        },
      ],
      features: ["theme park", "Disney rides", "entertainment"],
    },
  },
  "glacier-bay": {
    "Glacier Bay National Park": {
      description:
        "Expansive national park in Alaska known for tidewater glaciers, wildlife, and stunning fjords.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.9,
      isNature: true,
      isAdventure: true,
      isScenic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["national park", "glaciers", "wildlife", "fjords"],
    },
    "Johns Hopkins Glacier": {
      description:
        "Remote tidewater glacier within Glacier Bay, admired for its striking blue ice and calving displays.",
      openingHours: "Accessible by boat/cruise only",
      entryFeeCategory: "free",
      priceRange: "varies by cruise",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.8,
      isNature: true,
      isScenic: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["glacier", "blue ice", "calving displays"],
    },
    "Muir Glacier": {
      description:
        "Formerly massive glacier in Glacier Bay, now significantly retreated but still a scenic landmark for eco-tours.",
      openingHours: "Accessible by boat only",
      entryFeeCategory: "free",
      priceRange: "varies by cruise",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isNature: true,
      isScenic: true,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["glacier", "eco-tours", "scenic landmark"],
    },
  },
  "george-town": {
    "Seven Mile Beach": {
      description:
        "A stunning stretch of white sandy beach and crystal-clear turquoise waters, ideal for swimming, snorkeling, and sunbathing.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isNature: true,
      isScenic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["beach", "snorkeling", "swimming", "sunbathing"],
    },
    "Stingray City": {
      description:
        "Famous shallow sandbar where visitors can interact with friendly southern stingrays in their natural habitat.",
      openingHours: "Tours typically 9:00 AM – 4:00 PM",
      entryFee: "$55-$80 (tour fee)",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.9,
      isAdventure: true,
      isWildlife: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["snorkeling", "wildlife interaction", "tours"],
    },
    "Cayman Islands National Museum": {
      description:
        "Museum showcasing the cultural, historical, and natural heritage of the Cayman Islands.",
      openingHours: "10:00 AM – 4:00 PM",
      entryFee: "$10",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.5,
      isEducational: true,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$10",
          priceCategory: "low",
        },
        {
          category: "child",
          priceRange: "$5",
          priceCategory: "low",
        },
      ],
      features: ["museum", "cultural heritage", "historical exhibits"],
    },
  },
  "fort-lauderdale": {
    "Fort Lauderdale Beach": {
      description:
        "Popular beach destination with a lively promenade, watersports, and beautiful sandy shores.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.6,
      isNature: true,
      isScenic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["beach", "watersports", "promenade", "sunbathing"],
    },
    "Las Olas Boulevard": {
      description:
        "Vibrant street filled with shops, restaurants, galleries, and nightlife, known as Fort Lauderdale’s cultural hub.",
      openingHours: "Varies by business, generally 10:00 AM – 10:00 PM",
      entryFeeCategory: "free",
      priceRange: "varies",
      priceCategory: "varies",
      timeOfDay: "daytime and evening",
      rating: 4.4,
      isCultural: true,
      isShopping: true,
      isDining: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["shopping", "dining", "art galleries", "nightlife"],
    },
    "Bonnet House Museum & Gardens": {
      description:
        "Historic estate with art collections, beautiful gardens, and wildlife sanctuary.",
      openingHours: standardBusinessHours,
      entryFee: "$20",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isCultural: true,
      isNature: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$20",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$10",
          priceCategory: "budget",
        },
      ],
      features: ["historic estate", "art collections", "gardens"],
    },
  },
  "st-petersburg": {
    "The Hermitage Museum": {
      description:
        "One of the world’s largest and oldest museums, housing a vast collection of art and cultural artifacts.",
      openingHours: "10:30 AM – 6:00 PM",
      entryFee: "$12",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.9,
      isArtOrMusic: true,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$12",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$6",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "art", "cultural artifacts"],
    },
    "Church of the Savior on Spilled Blood": {
      description:
        "Iconic Russian Orthodox church known for its ornate domes and detailed mosaics.",
      openingHours: "10:30 AM – 6:00 PM",
      entryFee: "$8",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.8,
      isReligious: true,
      isHistorical: true,
      isPopular: true,
      isScenic: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$8",
          priceCategory: "low",
        },
        {
          category: "child",
          priceRange: "$4",
          priceCategory: "low",
        },
      ],
      features: ["church", "mosaics", "scenic views"],
    },
    "Peterhof Palace": {
      description:
        "Lavish palace and gardens complex, often referred to as the 'Russian Versailles,' with fountains and gold accents.",
      openingHours: "10:00 AM – 6:00 PM",
      entryFee: "$15",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.8,
      isHistorical: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$15",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$7.50",
          priceCategory: "low",
        },
      ],
      features: ["palace", "gardens", "fountains", "gold accents"],
    },
  },
  "buenos-aires": {
    "Plaza de Mayo": {
      description:
        "Historic square surrounded by important government buildings, known for political demonstrations and cultural significance.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.5,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["historic square", "government buildings", "cultural events"],
    },
    "La Boca": {
      description:
        "Colorful neighborhood famous for its vibrant street art, tango performances, and the iconic Caminito street.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.4,
      isCultural: true,
      isArtOrMusic: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["neighborhood", "street art", "tango", "Caminito street"],
    },
    "Recoleta Cemetery": {
      description:
        "Famous cemetery known for its elaborate mausoleums and as the resting place of Eva Perón.",
      openingHours: "8:00 AM - 5:00 PM",
      entryFee: "$3",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["cemetery", "mausoleums", "historical site"],
    },
  },
  venice: {
    "Doge's Palace": {
      description:
        "Historic palace and former residence of the Doge of Venice.",
      openingHours: "8:30 AM - 7:00 PM",
      entryFee: "€20",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.6,
      accessibilityFeatures: ["limited wheelchair access"],
      isHistorical: true,
      isArtOrMusic: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "€20",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "€10",
          priceCategory: "budget",
        },
      ],
      features: ["historical site", "museum", "guided tours"],
    },
    "Grand Canal": {
      description:
        "Main waterway of Venice, perfect for gondola rides and scenic views.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.9,
      isRomantic: true,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      entryFees: [],
      features: ["canal", "gondola rides", "scenic views"],
    },
    "St. Mark's Basilica": {
      description:
        "Iconic basilica known for its Byzantine architecture and golden mosaics.",
      openingHours: "9:30 AM - 5:00 PM",
      entryFee: "€5",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.7,
      accessibilityFeatures: ["wheelchair accessible entrance"],
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "€5",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "€2.50",
          priceCategory: "low",
        },
      ],
      features: ["basilica", "Byzantine architecture", "golden mosaics"],
    },
  },
  // New cities expanded below
  bangkok: {
    "Grand Palace": {
      description: "Historic royal residence featuring intricate architecture.",
      openingHours: "8:30 AM - 3:30 PM",
      entryFee: "฿500",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["limited wheelchair access"],
      entryFees: [
        {
          category: "adult",
          priceRange: "฿500",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "฿250",
          priceCategory: "low",
        },
      ],
      features: ["palace", "historical site", "guided tours"],
    },
    "Wat Arun": {
      description:
        "Famous riverside temple with distinctive spires and riverside views.",
      openingHours: "8:00 AM - 5:30 PM",
      entryFee: "฿100",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "฿100",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "฿50",
          priceCategory: "low",
        },
      ],
      features: ["temple", "riverside views", "guided tours"],
    },
    "Chatuchak Market": {
      description: "Vast weekend market with diverse shopping and food stalls.",
      openingHours: "Sat-Sun 9:00 AM - 6:00 PM",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.4,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      entryFees: [],
      features: ["market", "shopping", "food stalls", "weekend market"],
    },
  },
  dubai: {
    "Burj Khalifa": {
      description:
        "World's tallest building with observation decks and fine dining.",
      openingHours: "8:30 AM - 11:00 PM",
      entryFee: "AED 149",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.8,
      isLuxury: true,
      isRomantic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible elevators and ramps"],
      entryFees: [
        {
          category: "adult",
          priceRange: "AED 149",
          priceCategory: "expensive",
        },
        {
          category: "child",
          priceRange: "AED 75",
          priceCategory: "budget",
        },
      ],
      features: ["skyscraper", "observation deck", "fine dining"],
    },
    "Dubai Mall": {
      description:
        "Massive shopping mall with entertainment and dining options.",
      openingHours: "10:00 AM - 12:00 AM",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["shopping mall", "entertainment", "dining"],
    },
    "Dubai Fountain": {
      description: "Famous choreographed fountain show at Dubai Mall.",
      openingHours: "Daily shows in evenings",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "evening",
      rating: 4.7,
      isRomantic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["fountain show", "choreographed lights", "music"],
    },
    "Palm Jumeirah": {
      description:
        "Iconic man-made island shaped like a palm tree, featuring luxury hotels, residences, and entertainment venues.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "varies",
      priceCategory: "varies",
      timeOfDay: "all day",
      rating: 4.7,
      isLuxury: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["man-made island", "luxury resorts", "entertainment"],
    },
  },
  "san-francisco": {
    "Golden Gate Bridge": {
      description: "Iconic suspension bridge with scenic views and walkways.",
      openingHours: "24 hours",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.9,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["bridge", "scenic views", "walkways"],
    },
    "Alcatraz Island": {
      description:
        "Historic former prison island offering guided tours and views.",
      openingHours: standardBusinessHours,
      entryFee: "$41",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["island", "former prison", "guided tours"],
    },
    "Fisherman's Wharf": {
      description:
        "Popular tourist area with shops, seafood, and waterfront views.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.5,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["tourist area", "shops", "seafood", "waterfront views"],
    },
  },
  dubrovnik: {
    "Old Town Walls": {
      description:
        "Ancient city walls offering panoramic views of the Adriatic Sea.",
      openingHours: extendedDays,
      entryFee: "HRK 200",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.8,
      isHistorical: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["city walls", "panoramic views", "historical site"],
    },
    "Fort Lovrijenac": {
      description:
        "Historic fortress overlooking the sea, known as 'Dubrovnik's Gibraltar.'",
      openingHours: standardBusinessHours,
      entryFee: "HRK 100",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["fortress", "historical site", "ocean views"],
    },
    Stradun: {
      description:
        "Main pedestrian street lined with shops, cafes, and historic buildings.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.7,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["pedestrian street", "shops", "cafes", "historic buildings"],
    },
    "Rector's Palace": {
      description:
        "A historic palace that once served as the seat of the Rector of the Republic of Ragusa, featuring Gothic and Renaissance architecture.",
      openingHours: standardBusinessHours,
      entryFee: "$8",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isArchitectural: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: [
        "historical site",
        "Gothic architecture",
        "Renaissance architecture",
      ],
    },
    "Banje Beach": {
      description:
        "A popular pebble beach near Dubrovnik’s Old Town, offering clear waters and stunning views of the city walls.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isNature: true,
      isScenic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["beach", "pebble beach", "scenic views"],
    },
  },
  cartagena: {
    "Walled City": {
      description:
        "Historic colonial city center surrounded by impressive stone walls, full of colorful buildings, plazas, and cobblestone streets.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.8,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: [
        "historic district",
        "colonial architecture",
        "cobblestone streets",
      ],
    },
    "Castillo San Felipe de Barajas": {
      description:
        "A large fortress built by the Spanish in the 17th century, offering panoramic views and historical exhibits.",
      openingHours: "8:00 AM - 6:00 PM",
      entryFee: "$5",
      entryFeeCategory: "low",
      priceRange: "$",
      priceCategory: "low",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["fortress", "historical site", "panoramic views"],
    },
    "Plaza Santo Domingo": {
      description:
        "A vibrant plaza known for its lively atmosphere, cafes, and the famous sculpture ‘Gertrudis’ by Botero.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.4,
      isCultural: true,
      isDining: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["plaza", "cafes", "sculpture", "lively atmosphere"],
    },
  },
  rome: {
    Colosseum: {
      description:
        "Ancient Roman amphitheater known for gladiatorial contests.",
      openingHours: "8:30 AM - 7:00 PM",
      entryFee: "€16",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      accessibilityFeatures: ["limited wheelchair access"],
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "€16",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "€8",
          priceCategory: "budget",
        },
      ],
      features: ["amphitheater", "gladiatorial contests", "guided tours"],
    },
    "Vatican Museums": {
      description:
        "World-renowned museums showcasing art and history collected by the Roman Catholic Church.",
      openingHours: "9:00 AM - 6:00 PM (closed Sundays)",
      entryFee: "€17",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.6,
      accessibilityFeatures: ["wheelchair accessible entrances"],
      isHistorical: true,
      isArtOrMusic: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "€17",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "€8.50",
          priceCategory: "budget",
        },
      ],
      features: ["museums", "art", "history", "guided tours"],
    },
    "Trevi Fountain": {
      description:
        "Iconic 18th-century fountain known for the tradition of throwing coins into the water.",
      openingHours: "24 hours",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.5,
      isHistorical: true,
      isRomantic: true,
      isFree: true,
      isPopular: true,
      entryFees: [],
      features: ["fountain", "Baroque architecture", "coin tossing tradition"],
    },
  },
  athens: {
    Acropolis: {
      description:
        "Ancient citadel containing the Parthenon and other iconic Greek ruins.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
      ],
      entryFee: "€20",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.8,
      accessibilityFeatures: ["limited wheelchair access"],
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "€20",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "€10",
          priceCategory: "budget",
        },
      ],
      features: ["ancient ruins", "historical site", "guided tours"],
    },
    Parthenon: {
      description:
        "Iconic ancient Greek temple dedicated to the goddess Athena.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "08:00", to: "19:00" }],
        },
      ],
      entryFee: "Included with Acropolis ticket",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["ancient temple", "historical site", "guided tours"],
    },
    "Plaka District": {
      description:
        "Historic neighborhood with neoclassical architecture, shops, and restaurants.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.5,
      isHistorical: true,
      isFree: true,
      isPopular: true,
      entryFees: [],
      features: ["historic neighborhood", "shopping", "dining"],
    },
  },
  barcelona: {
    "Sagrada Família": {
      description:
        "Antoni Gaudí's iconic unfinished church known for its unique architecture.",
      openingHours: standardBusinessHours,
      entryFee: "€26-€38",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.8,
      accessibilityFeatures: ["wheelchair accessible"],
      isHistorical: true,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: true,
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
    "Park Güell": {
      description:
        "Public park with Gaudí's architectural works and gardens with city views.",
      openingHours: "9:30 AM - 7:30 PM",
      entryFee: "€10",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      accessibilityFeatures: ["limited wheelchair access"],
      isArtOrMusic: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
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
    "La Rambla": {
      description:
        "Famous tree-lined pedestrian street with shops, restaurants, and street performers.",
      openingHours: twentyFourHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.4,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: [
        "pedestrian street",
        "shopping",
        "dining",
        "street performers",
      ],
    },
  },
  // Add missing cities
  auckland: {
    "Sky Tower": {
      description:
        "Iconic observation and telecommunications tower offering panoramic views of Auckland.",
      openingHours: "9:00 AM - 10:00 PM",
      entryFee: "NZD 32",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "all day",
      rating: 4.5,
      isArchitecture: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "elevator access",
        "wheelchair accessible viewing platforms",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "NZD 32",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "NZD 16",
          priceCategory: "budget",
        },
      ],
      features: ["observation tower", "panoramic views", "Auckland skyline"],
    },
    "Auckland War Memorial Museum": {
      description:
        "Museum showcasing New Zealand's cultural and military history.",
      openingHours: tenToFour,
      entryFee: "NZD 25 (suggested donation)",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isEducational: true,
      isCultural: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible entrances", "elevators"],
      entryFees: [
        {
          category: "adult",
          priceRange: "NZD 25 (suggested donation)",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "NZD 12.50",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "cultural history", "military history"],
    },
    "Mount Eden": {
      description:
        "Dormant volcano offering panoramic views of Auckland and its harbors.",
      openingHours: "Always open",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.7,
      isAdventure: true,
      isOutdoor: true,
      isFree: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["volcano", "panoramic views", "hiking"],
    },
  },
  bali: {
    "Uluwatu Temple": {
      description:
        "Ancient sea temple perched on a cliff with spectacular sunset views.",
      openingHours: "9:00 AM - 7:00 PM",
      entryFee: "IDR 50,000",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "sunset",
      rating: 4.7,
      isSpiritual: true,
      isHistorical: true,
      isScenic: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "IDR 50,000",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "IDR 25,000",
          priceCategory: "low",
        },
      ],
      features: ["sea temple", "cliff views", "sunset views"],
    },
    "Tegallalang Rice Terraces": {
      description:
        "Stunning agricultural terraces showcasing traditional Balinese irrigation system.",
      openingHours: "8:00 AM - 6:00 PM",
      entryFee: "IDR 10,000",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isScenic: true,
      isAdventure: true,
      isCultural: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "IDR 10,000",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "IDR 5,000",
          priceCategory: "low",
        },
      ],
      features: ["rice terraces", "agriculture", "scenic views"],
    },
    "Ubud Monkey Forest": {
      description:
        "Natural sanctuary home to over 700 Balinese long-tailed monkeys and ancient temples.",
      openingHours: "8:30 AM - 6:00 PM",
      entryFee: "IDR 80,000",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.4,
      isAdventure: true,
      isNature: true,
      isFamily: true,
      isWheelchairAccessible: false,
      entryFees: [
        {
          category: "adult",
          priceRange: "IDR 80,000",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "IDR 40,000",
          priceCategory: "low",
        },
      ],
      features: ["monkey sanctuary", "nature", "ancient temples"],
    },
  },
  berlin: {
    "Brandenburg Gate": {
      description:
        "Iconic 18th-century neoclassical monument symbolizing peace and unity.",
      openingHours: "24 hours",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.7,
      isHistorical: true,
      isArchitecture: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["level ground", "paved access"],
      entryFees: [],
      features: ["monument", "neoclassical architecture", "historical site"],
    },
    "Reichstag Building": {
      description:
        "Historic building housing the German parliament with a glass dome offering city views.",
      openingHours: "8:00 AM - 10:00 PM",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isHistorical: true,
      isArchitecture: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["elevators", "accessible entrances"],
      entryFees: [],
      features: ["government building", "glass dome", "city views"],
    },
    "Berlin Cathedral": {
      description:
        "Impressive baroque cathedral with a large dome and ornate interior.",
      openingHours: standardBusinessHours,
      entryFee: "€9",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isSpiritual: true,
      isArchitecture: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["cathedral", "baroque architecture", "dome"],
    },
  },
  boston: {
    "Freedom Trail": {
      description:
        "A 2.5-mile walking route through downtown Boston passing 16 historical sites.",
      openingHours: "24 hours (individual sites vary)",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.8,
      isHistorical: true,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["walking trail", "historical sites", "self-guided tour"],
    },
    "Fenway Park": {
      description:
        "Historic baseball park and home of the Boston Red Sox since 1912.",
      openingHours: "Varies by game and tour schedule",
      entryFee: "$21 for tours, games vary",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "varies",
      rating: 4.7,
      isSports: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair seating areas",
        "accessible entrances",
      ],
      entryFees: [],
      features: ["baseball park", "sports history", "tours"],
    },
    "Boston Common": {
      description:
        "America's oldest public park, offering green spaces, historical monuments, and recreational areas in the heart of Boston.",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "06:30", to: "23:00" }] },
        { day: "Tuesday", availableHours: [{ from: "06:30", to: "23:00" }] },
        { day: "Wednesday", availableHours: [{ from: "06:30", to: "23:00" }] },
        { day: "Thursday", availableHours: [{ from: "06:30", to: "23:00" }] },
        { day: "Friday", availableHours: [{ from: "06:30", to: "23:00" }] },
        { day: "Saturday", availableHours: [{ from: "06:30", to: "23:00" }] },
        { day: "Sunday", availableHours: [{ from: "06:30", to: "23:00" }] },
      ],
      entryFee: "Free",
      entryFeeCategory: "free",
      priceRange: "Free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible paths",
        "accessible restrooms",
      ],
      entryFees: [],
      features: ["public park", "historical landmarks", "seasonal events"],
    },
    "Museum of Fine Arts": {
      description:
        "One of the most comprehensive art museums in the world, featuring a vast collection spanning ancient to contemporary art.",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "10:00", to: "17:00" }] },
        { day: "Tuesday", availableHours: [] },
        { day: "Wednesday", availableHours: [{ from: "10:00", to: "17:00" }] },
        { day: "Thursday", availableHours: [{ from: "10:00", to: "22:00" }] },
        { day: "Friday", availableHours: [{ from: "10:00", to: "22:00" }] },
        { day: "Saturday", availableHours: [{ from: "10:00", to: "17:00" }] },
        { day: "Sunday", availableHours: [{ from: "10:00", to: "17:00" }] },
      ],
      entryFee: "Adult: $27; Youth (7–17): $10; Children under 7: Free",
      entryFeeCategory: "midrange",
      priceRange: "$$",
      priceCategory: "midrange",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: false,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible entrances and galleries",
        "wheelchairs available on a first-come, first-served basis",
        "accessible restrooms",
      ],
      entryFees: [
        { category: "adult", priceRange: "$27", priceCategory: "midrange" },
        {
          category: "youth (7–17)",
          priceRange: "$10",
          priceCategory: "budget",
        },
        {
          category: "child (under 7)",
          priceRange: "Free",
          priceCategory: "free",
        },
      ],
      features: [
        "art museum",
        "permanent and rotating exhibitions",
        "educational programs",
      ],
    },
    "New England Aquarium": {
      description:
        "A premier aquarium featuring a Giant Ocean Tank, penguin colony, and interactive exhibits focused on marine conservation.",
      openingHours: [
        { day: "Monday", availableHours: [{ from: "09:00", to: "18:00" }] },
        { day: "Tuesday", availableHours: [{ from: "09:00", to: "18:00" }] },
        { day: "Wednesday", availableHours: [{ from: "09:00", to: "18:00" }] },
        { day: "Thursday", availableHours: [{ from: "09:00", to: "18:00" }] },
        { day: "Friday", availableHours: [{ from: "09:00", to: "18:00" }] },
        { day: "Saturday", availableHours: [{ from: "09:00", to: "18:00" }] },
        { day: "Sunday", availableHours: [{ from: "09:00", to: "18:00" }] },
      ],
      entryFee:
        "Adult: $39; Child (3–11): $30; Senior (60+): $37; Children under 3: Free",
      entryFeeCategory: "midrange",
      priceRange: "$$",
      priceCategory: "midrange",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: false,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible entrances and exhibits",
        "free wheelchair rental",
        "free entry for visitors using wheelchairs or with visual impairments",
      ],
      entryFees: [
        { category: "adult", priceRange: "$39", priceCategory: "midrange" },
        {
          category: "child (3–11)",
          priceRange: "$30",
          priceCategory: "midrange",
        },
        {
          category: "senior (60+)",
          priceRange: "$37",
          priceCategory: "midrange",
        },
        {
          category: "child (under 3)",
          priceRange: "Free",
          priceCategory: "free",
        },
      ],
      features: ["aquarium", "marine life exhibits", "educational programs"],
    },
  },
  singapore: {
    "Gardens by the Bay": {
      description:
        "Futuristic park featuring the iconic Supertree Grove, Cloud Forest, and Flower Dome with diverse flora.",
      openingHours: "9:00 AM – 9:00 PM",
      entryFee: "$20–$28 depending on attraction",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "day or night",
      rating: 4.8,
      isNature: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["garden", "Supertree Grove", "Cloud Forest", "Flower Dome"],
    },
    "Marina Bay Sands": {
      description:
        "Iconic resort with luxury accommodations, an infinity pool, shopping, dining, and a sky park observation deck.",
      openingHours: "SkyPark: 11:00 AM – 9:00 PM",
      entryFee: "$25 (SkyPark Observation Deck)",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "day or night",
      rating: 4.7,
      isScenic: true,
      isLuxury: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["resort", "luxury accommodations", "infinity pool"],
    },
    "Sentosa Island": {
      description:
        "Resort island with beaches, theme parks, luxury hotels, and attractions like Universal Studios Singapore.",
      openingHours: twentyFourHours,
      entryFee: "Varies by attraction",
      entryFeeCategory: "varies",
      priceRange: "$–$$$",
      priceCategory: "mixed",
      timeOfDay: "all day",
      rating: 4.6,
      isAdventure: true,
      isFamilyFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["resort island", "beaches", "theme parks"],
    },
  },
  sitka: {
    "Sitka National Historical Park": {
      description:
        "Preserves the site of a battle between Tlingit people and Russian traders, featuring totem poles and trails.",
      openingHours: "9:00 AM – 5:00 PM",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isCultural: true,
      isFree: true,
      isNature: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["historical site", "totem poles", "trails"],
    },
    "Russian Bishop's House": {
      description:
        "One of the oldest surviving examples of Russian colonial architecture in North America.",
      openingHours: "10:00 AM – 4:00 PM (summer only)",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isFree: true,
      isCultural: true,
      isWheelchairAccessible:
        "partially (some steep paths and uneven surfaces)",
      entryFees: [],
      features: [
        "historical site",
        "Russian architecture",
        "cultural exhibits",
      ],
    },
    "Totem Park": {
      description:
        "Part of the Sitka National Historical Park, showcasing beautifully carved Tlingit and Haida totem poles.",
      openingHours: "Sunrise to sunset",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isCultural: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["totem poles", "cultural heritage", "historical site"],
    },
  },
  skagway: {
    "Klondike Gold Rush National Historical Park": {
      description:
        "Historic park commemorating the gold rush era with preserved buildings and educational exhibits.",
      openingHours: "9:00 AM – 5:00 PM",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["historical park", "gold rush history", "guided tours"],
    },
    "White Pass & Yukon Route Railroad": {
      description:
        "Scenic narrow-gauge railway offering breathtaking views of mountains and gorges along the gold rush route.",
      openingHours: "8:00 AM – 6:00 PM (varies by tour)",
      entryFee: "$129+",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.9,
      isAdventure: true,
      isScenic: true,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["scenic railway", "mountain views", "gold rush history"],
    },
    "Skagway Museum": {
      description:
        "Local museum featuring artifacts and exhibits on the gold rush, native culture, and regional history.",
      openingHours: standardBusinessHours,
      entryFee: "$2",
      entryFeeCategory: "cheap",
      priceRange: "$",
      priceCategory: "cheap",
      timeOfDay: "daytime",
      rating: 4.3,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["museum", "gold rush artifacts", "native culture"],
    },
  },
  tampa: {
    "Busch Gardens": {
      description:
        "African-themed amusement park with roller coasters, live shows, and a large zoo.",
      openingHours: "10:00 AM – 6:00 PM",
      entryFee: "$100+",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.5,
      isFamilyFriendly: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["amusement park", "roller coasters", "live shows"],
    },
    "Tampa Riverwalk": {
      description:
        "Scenic waterfront walkway lined with parks, museums, shops, and restaurants in downtown Tampa.",
      openingHours: "Open all day",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isScenic: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["waterfront", "parks", "museums", "shops"],
    },
    "Florida Aquarium": {
      description:
        "Family-friendly aquarium featuring marine life exhibits, touch tanks, and conservation education.",
      openingHours: "9:30 AM – 5:00 PM",
      entryFee: "$33",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.6,
      isFamilyFriendly: true,
      isEducational: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["aquarium", "marine life", "educational exhibits"],
    },
  },
  toronto: {
    "CN Tower": {
      description:
        "Iconic observation tower offering panoramic views of Toronto and beyond, with a glass floor and rotating restaurant.",
      openingHours: tenToTen,
      entryFee: "$43",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "day or night",
      rating: 4.6,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["elevators", "accessible restrooms"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$43",
          priceCategory: "expensive",
        },
        {
          category: "child",
          priceRange: "$22",
          priceCategory: "budget",
        },
      ],
      features: ["observation tower", "panoramic views", "rotating restaurant"],
    },
    "Royal Ontario Museum": {
      description:
        "One of the largest museums in North America with exhibits on natural history, art, and world cultures.",
      openingHours: "10:00 AM – 5:30 PM",
      entryFee: "$26",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isEducational: true,
      isArtOrMusic: true,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "$26",
          priceCategory: "moderate",
        },
        {
          category: "child",
          priceRange: "$13",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "natural history", "art", "world cultures"],
    },
    "Distillery District": {
      description:
        "Historic area with cobblestone streets, art galleries, boutiques, and eateries housed in 19th-century buildings.",
      openingHours: "10:00 AM – 7:00 PM (varies by business)",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "day or night",
      rating: 4.5,
      isCultural: true,
      isHistorical: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["historic district", "art galleries", "boutiques", "eateries"],
    },
  },
  vancouver: {
    "Stanley Park": {
      description:
        "1,000-acre public park with scenic trails, beaches, gardens, and cultural landmarks like totem poles.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.8,
      isNature: true,
      isFree: true,
      isAdventure: true,
      isPetFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["public park", "scenic trails", "beaches", "gardens"],
    },
    "Granville Island": {
      description:
        "Vibrant district known for its public market, artisan shops, theaters, and waterfront dining.",
      openingHours: "9:00 AM – 6:00 PM (Market)",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.6,
      isCultural: true,
      isFree: true,
      isFoodOrDrink: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: [
        "public market",
        "artisan shops",
        "theaters",
        "waterfront dining",
      ],
    },
    "Capilano Suspension Bridge": {
      description:
        "Historic 137-meter suspension bridge crossing the Capilano River with treetop adventures and cliffwalks.",
      openingHours: "9:00 AM – 6:00 PM",
      entryFee: "$66",
      entryFeeCategory: "expensive",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.7,
      isAdventure: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["suspension bridge", "treetop adventures", "cliffwalks"],
    },
  },
  victoria: {
    "Butchart Gardens": {
      description:
        "Renowned floral gardens featuring themed landscapes, fountains, and seasonal displays.",
      openingHours: "9:00 AM – 10:00 PM (seasonal)",
      entryFee: "$25–$40 (seasonal)",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "day or night",
      rating: 4.8,
      isNature: true,
      isScenic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["botanical garden", "themed landscapes", "fountains"],
    },
    "Royal BC Museum": {
      description:
        "Museum featuring natural history, indigenous cultures, and regional artifacts of British Columbia.",
      openingHours: "10:00 AM – 5:00 PM",
      entryFee: "$18",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.6,
      isEducational: true,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["museum", "natural history", "indigenous cultures"],
    },
    "Craigdarroch Castle": {
      description:
        "Victorian-era mansion showcasing period furnishings and architecture from 1890s aristocracy.",
      openingHours: "10:00 AM – 4:00 PM",
      entryFee: "$20",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: false,
      entryFees: [],
      features: ["historic house", "Victorian architecture", "furnishings"],
    },
  },
  zurich: {
    "Lake Zurich": {
      description:
        "A picturesque lake offering boat cruises, swimming spots, and scenic promenades.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.7,
      isAdventure: true,
      isFree: true,
      isPetFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["lake", "boating", "walking trails"],
    },
    Grossmünster: {
      description:
        "Iconic twin-towered church with significant historical and architectural value.",
      openingHours: tenToSix,
      entryFee: "CHF 5",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
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
    Bahnhofstrasse: {
      description:
        "One of the world's most exclusive shopping avenues, lined with luxury boutiques and cafes.",
      openingHours: "Varies by store",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["shopping", "dining", "urban experience"],
    },
  },
  yokohama: {
    "Minato Mirai 21": {
      description:
        "A futuristic waterfront district featuring shopping centers, amusement parks, and panoramic views.",
      openingHours: "Varies by establishment",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["shopping", "entertainment", "skyline views"],
    },
    "Sankeien Garden": {
      description:
        "Traditional Japanese garden with historic architecture and seasonal flora.",
      openingHours: standardBusinessHours,
      entryFee: "¥700",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.7,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "¥700",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "¥200",
          priceCategory: "budget",
        },
      ],
      features: ["garden", "historic buildings", "seasonal events"],
    },
    "Cup Noodles Museum": {
      description:
        "Interactive museum dedicated to the history and creativity of instant noodles.",
      openingHours: tenToSix,
      entryFee: "¥500",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.5,
      isFamilyFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "¥500",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "¥300",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "interactive exhibits", "food-themed"],
    },
  },
  "washington-dc": {
    "Lincoln Memorial": {
      description:
        "A neoclassical monument honoring the 16th U.S. President, Abraham Lincoln.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.8,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["monument", "historical site", "photography"],
    },
    "Smithsonian National Museum of Natural History": {
      description:
        "World-renowned museum showcasing natural wonders, from dinosaur fossils to gemstones.",
      openingHours: tenToSix,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isFamilyFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["museum", "exhibits", "educational"],
    },
    "National Air and Space Museum": {
      description:
        "Exhibits the largest collection of historic aircraft and spacecraft in the world.",
      openingHours: tenToSix,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.8,
      isFamilyFriendly: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["museum", "aerospace", "interactive exhibits"],
    },
  },
  "ho-chi-minh-city": {
    "War Remnants Museum": {
      description:
        "Museum exhibiting artifacts and photographs from the Vietnam War, offering insight into the country's history.",
      openingHours: earlyMorningToEvening,
      entryFee: "VND 40,000",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible ramps and elevators"],
      entryFees: [
        {
          category: "adult",
          priceRange: "VND 40,000",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "VND 20,000",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "war history", "educational exhibits"],
    },
    "Cu Chi Tunnels": {
      description:
        "An extensive network of underground tunnels used during the Vietnam War, now a popular tourist attraction.",
      openingHours: earlyMorningToEvening,
      entryFee: "VND 90,000",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["narrow tunnels, not suitable for wheelchairs"],
      entryFees: [
        {
          category: "adult",
          priceRange: "VND 90,000",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "VND 45,000",
          priceCategory: "budget",
        },
      ],
      features: ["historical site", "tunnel exploration", "guided tours"],
    },
    "Ben Thanh Market": {
      description:
        "A bustling market offering a wide range of goods, from local handicrafts to street food.",
      openingHours: earlyMorningToEvening,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.2,
      isCultural: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["market", "shopping", "local cuisine"],
    },
  },
  kiel: {
    "Laboe Naval Memorial & U-995 Submarine": {
      description:
        "A memorial honoring sailors lost in both World Wars, featuring a 280-foot tower with panoramic views and the U-995 submarine museum.",
      openingHours: tenToSix,
      entryFee: "€7",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible paths",
        "elevator to observation deck",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "€7",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "€3.50",
          priceCategory: "budget",
        },
      ],
      features: ["memorial", "submarine museum", "observation deck"],
    },
    "Kiel Canal (Nord-Ostsee-Kanal)": {
      description:
        "The world's busiest artificial waterway, offering scenic views, cycling paths, and ship-watching opportunities.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["canal", "cycling", "scenic views"],
    },
    "Kunsthalle zu Kiel": {
      description:
        "Kiel's premier art museum, showcasing modern and contemporary art, including German Expressionism and Russian art.",
      openingHours: tenToSix,
      entryFee: "€6",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.4,
      isArtOrMusic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible entrances", "elevators"],
      entryFees: [
        {
          category: "adult",
          priceRange: "€6",
          priceCategory: "budget",
        },
        {
          category: "student",
          priceRange: "€3",
          priceCategory: "budget",
        },
      ],
      features: ["art museum", "sculpture garden", "exhibitions"],
    },
  },
  kyoto: {
    "Fushimi Inari-taisha": {
      description:
        "Famous Shinto shrine known for its thousands of vermilion torii gates leading into the forested mountain trails.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.8,
      isSpiritual: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["shrine", "torii gates", "hiking trails"],
    },
    "Kinkaku-ji (Golden Pavilion)": {
      description:
        "Zen Buddhist temple covered in gold leaf, surrounded by beautiful gardens and a reflective pond.",
      openingHours: standardBusinessHours,
      entryFee: "¥400",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [
        {
          category: "adult",
          priceRange: "¥400",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "¥300",
          priceCategory: "budget",
        },
      ],
      features: ["temple", "gardens", "scenic views"],
    },
    "Arashiyama Bamboo Grove": {
      description:
        "A serene path through towering bamboo stalks, offering a unique and tranquil experience.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.6,
      isAdventure: true,
      isFree: true,
      isPopular: true,
      isWheelchairAccessible: true,
      entryFees: [],
      features: ["bamboo forest", "walking path", "nature"],
    },
  },
  lima: {
    "Larco Museum": {
      description:
        "Museum showcasing pre-Columbian art, including ceramics, textiles, and gold and silver artifacts.",
      openingHours: standardBusinessHours,
      entryFee: "S/35",
      entryFeeCategory: "moderate",
      priceRange: "$$",
      priceCategory: "moderate",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isArtOrMusic: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible facilities"],
      entryFees: [
        {
          category: "adult",
          priceRange: "S/35",
          priceCategory: "moderate",
        },
        {
          category: "student",
          priceRange: "S/17",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "pre-Columbian art", "gardens"],
    },
    "Huaca Pucllana": {
      description:
        "An ancient pre-Incan adobe pyramid located in the heart of Miraflores, offering guided tours that reveal insights into Lima’s early civilizations.",
      openingHours: closedTuesdays,
      entryFee: "S/15",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.4,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible pathways",
        "ramp access to main viewing areas",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "S/15",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "S/7.50",
          priceCategory: "budget",
        },
      ],
      features: [
        "archaeological site",
        "guided tours",
        "historical ruins",
        "museum exhibit",
      ],
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "09:00", to: "17:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "09:00", to: "17:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "09:00", to: "17:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "09:00", to: "17:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "09:00", to: "17:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "09:00", to: "17:00" }],
        },
      ],
    },
  },
  miami: {
    "Vizcaya Museum and Gardens": {
      description:
        "A historic estate featuring Italian Renaissance–style architecture, formal gardens, and period antiques, offering insight into early 20th-century Miami society.",
      openingHours: "9:30 AM - 4:30 PM",
      entryFee: "$25",
      entryFeeCategory: "regular",
      priceRange: "$$",
      priceCategory: "midrange",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible ramps", "elevator"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$25",
          priceCategory: "midrange",
        },
        {
          category: "child",
          priceRange: "$10",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "garden", "historical architecture"],
    },
    "South Beach": {
      description:
        "Iconic stretch of white-sand shoreline on Miami Beach, known for its Art Deco architecture, vibrant nightlife, and clear turquoise water.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.8,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["accessible beach mat available upon request"],
      entryFees: [],
      features: ["beach", "sunbathing", "water sports"],
    },
    "Wynwood Walls": {
      description:
        "An outdoor museum showcasing large-scale murals by international street artists; a central hub of Miami’s arts district.",
      openingHours: "10:30 AM - 11:30 PM",
      entryFee: "$15",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: false,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair accessible pathways"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$15",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "$10",
          priceCategory: "budget",
        },
      ],
      features: ["street art", "museum", "photography"],
    },
    "Miami Seaquarium": {
      description:
        "Marine-life park with daily dolphin and sea lion shows, aquariums, and interactive exhibits featuring tropical fish, turtles, and sharks.",
      openingHours: standardBusinessHours,
      entryFee: "$49",
      entryFeeCategory: "regular",
      priceRange: "$$",
      priceCategory: "midrange",
      timeOfDay: "daytime",
      rating: 4.2,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible exhibits",
        "accessible restrooms",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "$49",
          priceCategory: "midrange",
        },
        {
          category: "child",
          priceRange: "$39",
          priceCategory: "midrange",
        },
      ],
      features: ["aquarium", "animal shows", "family attractions"],
    },
    "Little Havana": {
      description:
        "Vibrant Cuban-American neighborhood known for its street life, authentic cuisine, live music, and colorful murals along Calle Ocho.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["mostly flat sidewalks", "accessible curb cuts"],
      entryFees: [],
      features: ["street food", "live music", "cultural tours"],
    },
  },
  montevideo: {
    "Ciudad Vieja": {
      description:
        "Montevideo’s historic Old Town, characterized by colonial-era buildings, cobblestone streets, art galleries, and plazas dating back to the 18th century.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.4,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["paved streets", "ramps at public buildings"],
      entryFees: [],
      features: ["walking tours", "architecture", "history"],
    },
    "Teatro Solís": {
      description:
        "The oldest theater in Uruguay, renowned for its neoclassical architecture and world-class opera, ballet, and orchestral performances.",
      openingHours: "10:00 AM - 7:00 PM",
      entryFee: "$20",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "evening",
      rating: 4.6,
      isHistorical: true,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible seating",
        "elevator to balcony",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "$20",
          priceCategory: "budget",
        },
        {
          category: "student",
          priceRange: "$10",
          priceCategory: "budget",
        },
      ],
      features: ["performances", "architecture", "guided tours"],
    },
    "Rambla of Montevideo": {
      description:
        "A 22-mile waterfront promenade along the Río de la Plata, popular for walking, jogging, cycling, and watching sunsets over the river.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "paved biking and walking path",
        "benches with armrests",
      ],
      entryFees: [],
      features: ["cycling", "jogging", "sunset views"],
    },
    "Mercado del Puerto": {
      description:
        "Historic iron-roofed market known for its parrilladas (grill restaurants), local crafts, and live music—a central gathering spot for food lovers.",
      openingHours: twelveToEleven,
      entryFeeCategory: "free",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.5,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wide aisles", "accessible restrooms"],
      entryFees: [],
      features: ["grills", "local cuisine", "live music"],
    },
    "Museo Nacional de Artes Visuales": {
      description:
        "Houses Uruguay’s most important collection of national paintings and sculptures, with works dating from the 19th and 20th centuries.",
      openingHours: "12:00 PM - 6:00 PM (Closed Monday)",
      entryFee: "$10",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.3,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["ramp access", "accessible restrooms"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$10",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "free",
          priceCategory: "free",
        },
      ],
      features: ["fine arts", "painting", "sculpture"],
    },
  },
  nassau: {
    "Atlantis Paradise Island": {
      description:
        "Luxury resort and water park complex featuring a vast marine habitat, slides, lagoons, and on-site casino; a destination in itself.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFee: "$129",
      entryFeeCategory: "midrange",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "daytime",
      rating: 4.4,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["accessible rooms", "ramps throughout park"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$129",
          priceCategory: "midrange",
        },
        {
          category: "child",
          priceRange: "$99",
          priceCategory: "budget",
        },
      ],
      features: ["water park", "marine habitat", "casino"],
    },
    "Queen's Staircase": {
      description:
        "A 66-step limestone staircase carved by enslaved Africans in the late 18th century as an escape route from Fort Fincastle.",
      openingHours: earlyMorningToEvening,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["steep steps, not suitable for wheelchairs"],
      entryFees: [],
      features: ["historical site", "landmark", "photography"],
    },
    "Ardastra Gardens & Wildlife Conservation Centre": {
      description:
        "Small zoo and conservation center known for its iconic marching flamingos, lush botanical gardens, and rescued wildlife.",
      openingHours: standardBusinessHours,
      entryFee: "$25",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.3,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["paved paths", "accessible restrooms"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$25",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "$15",
          priceCategory: "budget",
        },
      ],
      features: ["wildlife", "garden", "family-friendly"],
    },
    "Pirates of Nassau Museum": {
      description:
        "Interactive museum with life-size recreations of pirate ships, exhibits on Golden Age piracy, and hands-on displays for families.",
      openingHours: standardBusinessHours,
      entryFee: "$18",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.2,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair ramps", "accessible exhibits"],
      entryFees: [
        {
          category: "adult",
          priceRange: "$18",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "$12",
          priceCategory: "budget",
        },
      ],
      features: ["interactive exhibits", "history", "family"],
    },
    "John Watling's Distillery": {
      description:
        "Historic distillery located on a colonial-era estate, offering guided tours of the rum-making process and tastings in a restored Great House.",
      openingHours: standardBusinessHours,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.4,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair accessible pathways",
        "accessible tasting bar",
      ],
      entryFees: [
        {
          category: "tasting tour",
          priceRange: "$15",
          priceCategory: "budget",
        },
      ],
      features: ["distillery tour", "rum tasting", "history"],
    },
  },
  "new-orleans": {
    "French Quarter": {
      description:
        "New Orleans’ oldest neighborhood, renowned for its French and Spanish Creole architecture, jazz clubs, and vibrant street life centered on Bourbon Street.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "any",
      rating: 4.8,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "some uneven sidewalks",
        "ramped entries to galleries",
      ],
      entryFees: [],
      features: ["architecture", "music", "food"],
    },
    "Garden District": {
      description:
        "Residential district featuring tree-lined streets and grand 19th-century mansions, known for its well-maintained historic homes and Lafayette Cemetery No. 1.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["uneven sidewalks", "some steps into properties"],
      entryFees: [],
      features: ["walking tours", "architecture", "history"],
    },
    "National WWII Museum": {
      description:
        "Top-ranked museum in the United States dedicated to the history of World War II, featuring immersive exhibits, personal narratives, and large-scale artifacts.",
      openingHours: standardBusinessHours,
      entryFee: "$29",
      entryFeeCategory: "regular",
      priceRange: "$$",
      priceCategory: "midrange",
      timeOfDay: "daytime",
      rating: 4.8,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "wheelchair ramps",
        "elevators",
        "accessible restrooms",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "$29",
          priceCategory: "midrange",
        },
        {
          category: "child",
          priceRange: "$19",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "war history", "interactive exhibits"],
    },
    "Jackson Square": {
      description:
        "Historic park at the heart of the French Quarter, featuring live music, local artists, and views of St. Louis Cathedral overlooking the Mississippi River.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["paved paths", "accessible benches"],
      entryFees: [],
      features: ["people watching", "local artists", "scenic views"],
    },
    "Bourbon Street": {
      description:
        "Famous thoroughfare lined with bars, jazz clubs, and restaurants; known worldwide for its nightlife, live music, and historic façades.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "nighttime",
      rating: 4.5,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["crowded, uneven pavement", "limited curb cuts"],
      entryFees: [],
      features: ["bars", "music", "nightlife"],
    },
  },
  southampton: {
    "SeaCity Museum": {
      description:
        "Museum exploring Southampton’s history as a maritime city, including its connection to the Titanic, through interactive galleries and multimedia displays.",
      openingHours: tenToFour,
      entryFee: "£12",
      entryFeeCategory: "budget",
      priceRange: "£",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.3,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["wheelchair ramps", "accessible restrooms"],
      entryFees: [
        {
          category: "adult",
          priceRange: "£12",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "£6",
          priceCategory: "budget",
        },
      ],
      features: ["museum", "maritime history", "interactive exhibits"],
    },
    "Southampton City Art Gallery": {
      description:
        "Hosts an extensive collection of paintings and sculptures from the 17th century to contemporary works, free to the public and housed in a modern facility.",
      openingHours: closedMondays,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isCultural: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["step-free access", "accessible restrooms"],
      entryFees: [],
      features: ["art", "exhibitions", "cultural"],
    },
    "Tudor House and Garden": {
      description:
        "A restored 15th-century Tudor merchant’s house featuring period furnishings, tapestries, and walled gardens, illustrating medieval to Tudor life in Southampton.",
      openingHours: tenToFour,
      entryFee: "£10",
      entryFeeCategory: "budget",
      priceRange: "£",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.4,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: [
        "some areas not accessible",
        "steps in main house",
      ],
      entryFees: [
        {
          category: "adult",
          priceRange: "£10",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "£5",
          priceCategory: "budget",
        },
      ],
      features: ["architecture", "history", "garden"],
    },
    "Westquay Shopping Centre": {
      description:
        "Large indoor shopping center with over 80 stores ranging from high street brands to designer boutiques, plus multiple dining and entertainment options.",
      openingHours: extendedDays,
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.2,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "step-free access",
        "disabled parking",
        "accessible restrooms",
      ],
      entryFees: [],
      features: ["shopping", "dining", "cinema"],
    },
    "Medieval Walls of Southampton": {
      description:
        "Surviving stretches of 13th-century defensive walls that once enclosed Southampton, offering a walkable historic route through the city.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "00:00", to: "23:59" }],
        },
      ],
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.4,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: [
        "accessible paths",
        "information panels at even intervals",
      ],
      entryFees: [],
      features: ["history", "walking tours", "architecture"],
    },
  },
  "amalfi-coast": {
    "Positano Beach": {
      description:
        "A picturesque pebble beach in Positano known for its colorful cliffside houses, crystal-clear waters, and vibrant seaside atmosphere.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "06:00", to: "22:00" }],
        },
      ],
      entryFee: "Free",
      entryFeeCategory: "free",
      priceRange: "Free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.7,
      isPopular: true,
      isWheelchairAccessible: false,
      features: ["beach", "swimming", "scenic views", "sunbathing"],
    },
    "Villa Rufolo": {
      description:
        "A historic villa in Ravello known for its beautiful gardens, Moorish architecture, and stunning views over the Amalfi Coast.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "09:00", to: "19:00" }],
        },
      ],
      entryFee: "€7",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.6,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["Some stairs, limited wheelchair access"],
      features: ["historic villa", "gardens", "views", "architecture"],
    },
    "Path of the Gods (Sentiero degli Dei)": {
      description:
        "A famous hiking trail offering breathtaking views of the Amalfi Coast, connecting the towns of Agerola and Positano.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "06:00", to: "19:00" }],
        },
      ],
      entryFee: "Free",
      entryFeeCategory: "free",
      priceRange: "Free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.9,
      isAdventure: true,
      isPopular: true,
      isWheelchairAccessible: false,
      accessibilityFeatures: ["Uneven terrain, not suitable for wheelchairs"],
      features: ["hiking", "nature", "scenic views", "outdoors"],
    },
    "Amalfi Cathedral (Cattedrale di Sant'Andrea)": {
      description:
        "A stunning medieval cathedral located in Amalfi, famous for its Romanesque architecture and beautiful interior decorations.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "09:00", to: "18:00" }],
        },
      ],
      entryFee: "€3",
      entryFeeCategory: "budget",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.7,
      isHistorical: true,
      isPopular: true,
      isWheelchairAccessible: true,
      accessibilityFeatures: ["Ramps and elevators available"],
      entryFees: [
        {
          category: "adult",
          priceRange: "€3",
          priceCategory: "budget",
        },
        {
          category: "child",
          priceRange: "€1.50",
          priceCategory: "low",
        },
      ],
      features: [
        "historical site",
        "architecture",
        "religious site",
        "cultural",
      ],
    },
    "Fiordo di Furore": {
      description:
        "A dramatic fjord with a small hidden beach, famous for its natural beauty and the picturesque bridge spanning the gorge.",
      openingHours: [
        {
          day: "Monday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
        {
          day: "Tuesday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
        {
          day: "Wednesday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
        {
          day: "Thursday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
        {
          day: "Friday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
        {
          day: "Saturday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
        {
          day: "Sunday",
          availableHours: [{ from: "06:00", to: "20:00" }],
        },
      ],
      entryFee: "Free",
      entryFeeCategory: "free",
      priceRange: "Free",
      priceCategory: "free",
      timeOfDay: "daytime",
      rating: 4.5,
      isPopular: true,
      isWheelchairAccessible: false,
      features: ["fjord", "natural beauty", "hidden beach", "scenic views"],
    },
  },
};
