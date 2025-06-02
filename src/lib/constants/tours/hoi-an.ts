import { Tour } from "@/lib/interfaces/services/tours";

export const hoiAnTours: Tour[] = [
  {
    title: "Ancient Town Walking & Lantern Making",
    description:
      "Explore Hoi An's UNESCO-listed Old Town with its centuries-old architecture, then learn to craft your own traditional Vietnamese lantern.",
    city: "Hoi An",
    country: "Vietnam",
    region: "Quang Nam Province",
    images: [
      "/images/tours/hoi-an/ancient-town.jpg",
      "/images/tours/hoi-an/lantern-making.jpg",
    ],
    duration: "5 hours",
    price: "$40",
    rating: 4.9,
    tags: ["Cultural", "Craft", "UNESCO"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Hoi An Ancient Town Ticket Office, 47 Trần Phú Street, Hoi An",
      coordinates: {
        latitude: 15.8801,
        longitude: 108.3265,
      },
      instructions:
        "Meet at the main ticket office on Trần Phú Street. Your guide will be holding a yellow umbrella with a lantern logo.",
      contactNumber: "+84 90 123 4567",
      contactEmail: "hoian@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "Guided tour of Hoi An's UNESCO World Heritage Ancient Town",
      "Visit to an ancestral house preserved for over 200 years",
      "Exploration of the iconic Japanese Covered Bridge",
      "hands-on workshop creating your own traditional silk lantern",
      "Opportunity to release a floating candle lantern on the Thu Bon River",
    ],

    inclusions: [
      "Professional English-speaking guide",
      "Ancient Town entrance ticket and heritage sites admission",
      "Lantern making workshop with all materials",
      "Your handcrafted lantern to take home",
      "One floating candle lantern for river release",
      "Traditional Vietnamese tea during workshop",
      "Bottled water throughout tour",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Personal expenses and shopping",
      "Tips and gratuities",
    ],

    itinerary: [
      "14:00 - Meet guide at Ancient Town Ticket Office",
      "14:15 - Guided walking tour of Hoi An Ancient Town",
      "14:45 - Visit to 200-year-old ancestral house",
      "15:30 - Explore Japanese Covered Bridge and surrounding area",
      "16:00 - Visit Chinese Assembly Hall with ornate architecture",
      "16:30 - Begin lantern making workshop with local artisan",
      "17:30 - Complete your traditional silk lantern with guidance",
      "18:00 - Evening light refreshment and tea",
      "18:30 - Walk to Thu Bon River to release floating candle lanterns",
      "19:00 - Tour concludes near riverfront restaurants",
    ],

    faqs: [
      {
        question: "Will I be able to take my handmade lantern home?",
        answer:
          "Yes! Your lantern will be carefully wrapped for easy packing in your luggage, or we can arrange shipping for larger lanterns.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will explore cobblestone streets and some uneven surfaces. Light, breathable clothing is also advisable due to the warm climate.",
      },
      {
        question: "Is the lantern-making suitable for children?",
        answer:
          "Yes, this activity is family-friendly and children will enjoy creating their own lanterns with guidance from our expert artisans.",
      },
    ],
  },
  {
    title: "Countryside Bicycle Tour & Cooking Class",
    description:
      "Cycle through picturesque rice paddies and vegetable villages, then learn to cook traditional Vietnamese dishes with fresh ingredients you helped harvest.",
    city: "Hoi An",
    country: "Vietnam",
    region: "Quang Nam Province",
    images: [
      "/images/tours/hoi-an/countryside-cycling.jpg",
      "/images/tours/hoi-an/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cycling", "Cooking", "Rural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Grasshopper Adventures, 441 Hai Bà Trưng, Hoi An",
      coordinates: {
        latitude: 15.8804,
        longitude: 108.3349,
      },
      instructions:
        "Meet at Grasshopper Adventures shop on Hai Bà Trưng Street. Look for the green bicycles out front.",
      contactNumber: "+84 90 123 4568",
      contactEmail: "cooking@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Scenic bicycle ride through rice paddies and farming villages",
      "Visit to Tra Que organic vegetable village to harvest ingredients",
      "Learn traditional farming techniques from local farmers",
      "Hands-on cooking class with local chef preparing 4 Vietnamese dishes",
      "Feast on your own creations in a beautiful garden setting",
    ],

    inclusions: [
      "Professional English-speaking guide",
      "Quality mountain bike and helmet",
      "Entrance fees to visited sites",
      "Farming activity in vegetable village",
      "Cooking class with all ingredients and equipment",
      "Full meal of prepared dishes",
      "Recipe booklet to take home",
      "Bottled water and fresh tropical fruit refreshments",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages",
      "Personal expenses",
      "Tips and gratuities",
    ],

    itinerary: [
      "08:30 - Meet at bike shop for fitting and safety briefing",
      "09:00 - Begin countryside bicycle tour through rice fields",
      "09:45 - Stop at traditional rural market to see local produce",
      "10:30 - Arrive at Tra Que Vegetable Village for farming activity",
      "11:00 - Learn farming techniques and harvest vegetables for cooking",
      "11:45 - Bicycle to cooking school location",
      "12:15 - Begin cooking class with introduction to Vietnamese cuisine",
      "12:45 - Hands-on preparation of 4 traditional dishes",
      "14:00 - Enjoy the lunch you prepared in garden setting",
      "14:30 - Return bicycle ride through scenic route",
      "15:30 - Tour concludes at original meeting point",
    ],

    faqs: [
      {
        question: "How difficult is the bike ride?",
        answer:
          "The terrain is flat and the pace is leisurely, making it suitable for all fitness levels. We cover approximately 8km on quiet country roads and paths.",
      },
      {
        question: "What if I'm not comfortable cooking?",
        answer:
          "No prior cooking experience is necessary! Our friendly chef will guide you through each step, and you can participate as much or as little as you like. The focus is on having fun and enjoying the process.",
      },
      {
        question: "Are vegetarian options available for the cooking class?",
        answer:
          "Yes, we can accommodate vegetarian preferences. Please let us know in advance so we can prepare suitable ingredients for you.",
      },
    ],
  },
  {
    title: "Hoi An Street Food & Market Tour",
    description:
      "Discover the vibrant flavors of Hoi An with a guided street food tour, sampling local specialties like cao lau, banh mi, and fresh seafood at bustling markets and hidden eateries.",
    city: "Hoi An",
    country: "Vietnam",
    region: "Quang Nam Province",
    images: [
      "/images/tours/hoi-an/street-food.jpg",
      "/images/tours/hoi-an/local-markets.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Food", "Markets", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Central Market, Trần Phú Street, Hoi An",
      coordinates: {
        latitude: 15.8778,
        longitude: 108.3316,
      },
      instructions:
        "Meet at the main entrance to Hoi An Central Market on Trần Phú Street. Your guide will be holding a sign with a food symbol.",
      contactNumber: "+84 90 123 4569",
      contactEmail: "streetfood@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-24",
      "2023-12-31",
      "2024-01-07",
      "2024-01-14",
      "2024-01-21",
      "2024-01-28",
      "2024-02-04",
      "2024-02-11",
      "2024-02-18",
      "2024-02-25",
    ],

    highlights: [
      "Sample Hoi An's signature dish, cao lau, at a local favorite spot",
      "Try 'white rose' dumplings from the family that invented them",
      "Visit the bustling central market to learn about local ingredients",
      "Taste the 'best banh mi in Vietnam' made famous by Anthony Bourdain",
      "Experience authentic street food at venues few tourists discover",
    ],

    inclusions: [
      "Local food expert guide",
      "7-8 food tastings (sufficient for a full meal)",
      "1 local beer or fresh juice",
      "Bottled water throughout the tour",
      "Food map of Hoi An with recommendations",
      "Small group size (maximum 8 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included tastings",
      "Personal expenses",
      "Tips and gratuities",
    ],

    itinerary: [
      "16:00 - Meet guide at Central Market entrance",
      "16:15 - Market tour with ingredient explanations and street snack tasting",
      "17:00 - Visit traditional cao lau noodle maker",
      "17:30 - Sample authentic white rose dumplings at family restaurant",
      "18:00 - Try Hoi An's famous banh mi sandwich",
      "18:30 - Stop at local favored street food stall for regional specialties",
      "19:00 - Enjoy savory pancakes at hidden courtyard eatery",
      "19:30 - Finish with traditional Vietnamese dessert and coffee",
      "20:00 - Tour concludes with additional dining recommendations",
    ],

    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of Hoi An's famous street foods including savory noodles, grilled meats, fresh seafood, and delicious desserts. The tour highlights seasonal ingredients and traditional recipes.",
      },
      {
        question: "Are there vegetarian or vegan options available?",
        answer:
          "Yes, the tour can accommodate dietary preferences. Please inform us in advance so we can ensure suitable options are included.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The guide engages children with fun stories about local food culture and allows them to try different flavors in a family-friendly environment.",
      },
    ],
  },
  {
    title: "Sunset River Cruise & Traditional Music",
    description:
      "Experience the magic of Hoi An's riverside at sunset with a relaxing boat cruise, accompanied by live traditional Vietnamese music and local snacks.",
    city: "Hoi An",
    country: "Vietnam",
    region: "Quang Nam Province",
    images: [
      "/images/tours/hoi-an/sunset-cruise.jpg",
      "/images/tours/hoi-an/traditional-music.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Romantic", "Cultural", "Scenic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Bach Dang Boat Dock, 10 Bach Dang Street, Hoi An",
      coordinates: {
        latitude: 15.8785,
        longitude: 108.3297,
      },
      instructions:
        "Meet at Bach Dang Boat Dock near the Japanese Covered Bridge. Look for the boat with colorful lanterns and 'Sunset Cruise' sign.",
      contactNumber: "+84 90 123 4570",
      contactEmail: "rivercruise@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-22",
      "2023-12-23",
      "2023-12-29",
      "2023-12-30",
      "2024-01-05",
      "2024-01-06",
      "2024-01-12",
      "2024-01-13",
      "2024-01-19",
      "2024-01-20",
      "2024-01-26",
      "2024-01-27",
      "2024-02-02",
      "2024-02-03",
      "2024-02-09",
      "2024-02-10",
      "2024-02-16",
      "2024-02-17",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Scenic boat cruise on the Thu Bon River at golden hour",
      "Live traditional Vietnamese music performance on board",
      "View of Hoi An Ancient Town illuminated by lanterns from the water",
      "Opportunity to release floating lanterns for good fortune",
      "Spectacular sunset views over the river and coconut palm forests",
    ],

    inclusions: [
      "Traditional wooden boat cruise",
      "Live music performance",
      "Selection of Vietnamese snacks and tropical fruits",
      "One complimentary drink (beer, wine, or soft drink)",
      "One floating lantern per person",
      "English-speaking guide",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond those mentioned",
      "Personal expenses",
      "Tips and gratuities",
    ],

    itinerary: [
      "16:30 - Meet at Bach Dang Boat Dock",
      "16:45 - Board traditional wooden boat and receive welcome drink",
      "17:00 - Begin scenic cruise along Thu Bon River",
      "17:30 - Live traditional Vietnamese music performance",
      "17:45 - Reach scenic point for sunset viewing",
      "18:00 - Enjoy Vietnamese snacks and refreshments",
      "18:30 - Floating lantern ceremony with personal wishes",
      "18:45 - Return cruise with views of illuminated Ancient Town",
      "19:30 - Arrive back at dock and tour conclusion",
    ],

    faqs: [
      {
        question: "What should I bring on the cruise?",
        answer:
          "We recommend bringing a light jacket for cooler evening breezes, a camera for photos, and any personal items you may need. The boat provides comfortable seating and refreshments.",
      },
      {
        question: "Is the music performed by local artists?",
        answer:
          "Yes, the music is performed by talented local musicians who share their cultural heritage through traditional instruments and songs.",
      },
      {
        question: "Can we book a private cruise for special occasions?",
        answer:
          "Yes, private cruises can be arranged for special events such as anniversaries or birthdays. Please contact us for more details.",
      },
    ],
  },
];

export default hoiAnTours;
