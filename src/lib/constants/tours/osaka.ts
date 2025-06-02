import { Tour } from "@/lib/interfaces/services/tours";

export const osakaTours: Tour[] = [
  {
    title: "Street Food Safari: Dotonbori & Kuromon Market",
    description:
      "Devour Osaka's legendary street food with a culinary expert guiding you through bustling Dotonbori and Kuromon Market, sampling iconic dishes like takoyaki, okonomiyaki, and kushikatsu while learning local foodie traditions.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/street-food.jpg",
      "/images/tours/osaka/kuromon-market.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Street Food", "Market"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Glico Man Sign, 1-6-10 Dotonbori, Chuo Ward, Osaka",
      coordinates: {
        latitude: 34.6687,
        longitude: 135.5029,
      },
      instructions:
        "Meet directly under the iconic Glico Running Man sign in Dotonbori. Your guide will be holding a sign with 'Osaka Food Tour' written on it.",
      contactNumber: "+81 6-1234-5678",
      contactEmail: "foodtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Sample 8-10 authentic Osakan specialties at the city's best food stalls",
      "Master the art of eating takoyaki (octopus balls) like a local",
      "Explore Kuromon Ichiba Market, known as 'Osaka's Kitchen'",
      "Learn about Osaka's 'kuidaore' (eat until you drop) food culture",
      "Discover hidden food gems that most tourists miss",
    ],

    inclusions: [
      "Local food expert guide",
      "All food tastings at 7-8 different vendors (equivalent to a full meal)",
      "One local beverage (beer, sake, or soft drink)",
      "Guided tour of Dotonbori and Kuromon Market",
      "Small-group experience (maximum 8 participants)",
      "Food map with recommendations for further exploration",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included tastings",
      "Transportation during the tour (all locations are within walking distance)",
      "Gratuities (not customary in Japan)",
      "Personal shopping expenses at the markets",
    ],

    itinerary: [
      "18:00 - Meet at Glico Man sign for introduction to Osaka's food culture",
      "18:15 - First tasting: takoyaki (octopus balls) at a famous local stand",
      "18:45 - Sample kushikatsu (deep-fried skewers) with demonstration of dipping etiquette",
      "19:15 - Walk through vibrant Dotonbori entertainment district with photo opportunities",
      "19:30 - Try okonomiyaki (savory pancake) with cooking demonstration",
      "20:00 - Walk to Kuromon Ichiba Market",
      "20:15 - Sample fresh sashimi, wagyu beef skewers, and seasonal specialties at market stalls",
      "20:45 - Enjoy taiyaki (fish-shaped cake) for dessert",
      "21:00 - Market exploration with recommendations for food souvenirs",
      "21:45 - Farewell drink at local izakaya with final Q&A session",
      "22:00 - Tour concludes with additional recommendations for the area",
    ],

    faqs: [
      {
        question: "How much food will we eat on this tour?",
        answer:
          "Come hungry! The tour includes 8-10 substantial food tastings that together constitute more than a full meal. We'll sample a wide variety of Osaka's most famous dishes including takoyaki, okonomiyaki, kushikatsu, and more. Portions at each stop are sized to allow you to try many different foods without becoming too full too quickly - though by the end, you'll understand why Osaka is known for 'kuidaore' (eating until you drop)!",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "We can accommodate vegetarians with advance notice, though options may be more limited as Osakan cuisine is heavily seafood-based. For vegans, those with gluten allergies, or other strict dietary requirements, please contact us before booking as significant modifications to the tour may be necessary. For serious food allergies, we can provide allergen cards in Japanese to show vendors.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children are welcome on this tour. Most kids enjoy the interactive nature of Osaka street food, especially watching takoyaki being made and the hands-on aspects of the market visits. We can suggest child-friendly options at each stop. Note that the evening tour may run past some younger children's bedtimes, so the afternoon departure might be better for families.",
      },
    ],
  },

  {
    title: "Osaka Castle & Historical District Explorer",
    description:
      "Uncover Osaka's samurai heritage with an in-depth exploration of magnificent Osaka Castle and surrounding historical districts, led by a local history expert who brings the city's dramatic past to life.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/osaka-castle.jpg",
      "/images/tours/osaka/historical-district.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Historical", "Castle", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Tanimachi 4-chome Station, Exit 1B, Osaka",
      coordinates: {
        latitude: 34.6819,
        longitude: 135.5198,
      },
      instructions:
        "Meet outside Exit 1B of Tanimachi 4-chome Subway Station. Your guide will be holding a samurai flag.",
      contactNumber: "+81 6-1234-5679",
      contactEmail: "osakahistory@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-24",
      "2023-12-26",
      "2023-12-28",
      "2023-12-30",
      "2024-01-01",
      "2024-01-03",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Explore all areas of Osaka Castle including the panoramic observation deck",
      "Discover hidden design features that protected the castle from attackers",
      "Visit the comprehensive museum housing samurai artifacts and historical exhibits",
      "Stroll through the beautiful castle grounds and garden with cherry trees",
      "Explore nearby historical districts with preserved merchant houses",
    ],

    inclusions: [
      "Professional historian guide specialized in Japanese feudal history",
      "Skip-the-line entry to Osaka Castle Main Tower",
      "Castle grounds and garden access",
      "Historical district walking tour",
      "Traditional Japanese tea and sweet at a historic teahouse",
      "Public transportation during the tour (subway or bus if needed)",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional beverages",
      "Entry to optional museums or exhibits not specified",
      "Gratuities (not customary in Japan)",
      "Personal expenses",
    ],

    itinerary: [
      "09:00 - Meet at Tanimachi 4-chome Station for introduction",
      "09:15 - Walk through Osaka Castle Park with historical commentary",
      "09:45 - Explore outer moats and defensive structures",
      "10:15 - Enter Osaka Castle Main Tower with skip-the-line access",
      "10:45 - Visit the museum floors with armor and weapon displays",
      "11:30 - Ascend to the observation deck for panoramic city views",
      "12:00 - Explore Nishinomaru Garden (seasonal beauty)",
      "12:30 - Traditional tea and sweet at castle grounds teahouse",
      "13:15 - Walk or take subway to nearby historical district",
      "13:45 - Explore preserved merchant houses and historical streets",
      "14:30 - Tour conclusion with recommendations for further exploration",
    ],

    faqs: [
      {
        question: "Is Osaka Castle the original structure?",
        answer:
          "No, the current Osaka Castle is a concrete reconstruction completed in 1931. The original castle was built in 1583 by Toyotomi Hideyoshi but was destroyed multiple times throughout history. While the exterior faithfully reproduces the original design, the interior is a modern museum with elevators. Our guide will explain the castle's tumultuous history and point out which elements reflect the original 16th-century design versus modern additions.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 5 kilometers (3 miles) of walking at a leisurely pace. The castle grounds are spacious, and there are some slopes and stairs. Within the castle tower, there are elevators, but some exhibits are accessible only via stairs. The historical district portion is on flat terrain. Comfortable walking shoes are strongly recommended.",
      },
      {
        question: "When is the best time to visit Osaka Castle?",
        answer:
          "Osaka Castle is spectacular year-round, but particularly beautiful during cherry blossom season (late March to early April) when hundreds of sakura trees bloom throughout the grounds. Autumn (November) brings vibrant fall colors to the castle park. Summer offers lush greenery but can be very hot and humid. The castle is less crowded on weekdays and in the early morning.",
      },
    ],
  },

  {
    title: "Osaka Night Life & Local Izakaya Experience",
    description:
      "Dive into Osaka's vibrant nightlife with a local guide who takes you to authentic izakayas (Japanese pubs), standing bars, and hidden drinking spots where tourists rarely venture.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/izakaya.jpg",
      "/images/tours/osaka/night-district.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nightlife", "Food & Drink", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Namba Station, Central Exit, Osaka",
      coordinates: {
        latitude: 34.6691,
        longitude: 135.5011,
      },
      instructions:
        "Meet at the Central Exit of Namba Station next to the ticket gates. Your guide will be holding an illuminated sign with 'Osaka Night Tour' written on it.",
      contactNumber: "+81 6-1234-5680",
      contactEmail: "nightlife@paragontrails.com",
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
      "Visit 3-4 authentic local izakayas and bars away from tourist areas",
      "Experience 'tachinomi' (standing bar) culture unique to Japan",
      "Sample a variety of Japanese spirits including sake, shochu, and whisky",
      "Enjoy typical izakaya foods paired with appropriate drinks",
      "Learn proper Japanese drinking customs and etiquette",
    ],

    inclusions: [
      "Local nightlife expert guide",
      "All cover charges and seating fees",
      "Food tastings at each location (equivalent to dinner)",
      "One drink at each location (3-4 drinks total)",
      "Japanese drinking customs and etiquette explanation",
      "Translation assistance for communicating with staff and locals",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included items",
      "Transportation between venues (all walking distance)",
      "Gratuities (not customary in Japan)",
      "Personal expenses",
    ],

    itinerary: [
      "19:00 - Meet at Namba Station for introduction",
      "19:15 - Walk to first venue: traditional izakaya with charcoal grill",
      "19:30 - Enjoy first round of drinks and food with explanation of izakaya culture",
      "20:15 - Walk through vibrant entertainment district with guide commentary",
      "20:30 - Second venue: local standing bar with unique atmosphere",
      "21:00 - Continue to hidden alley for specialized sake bar (third venue)",
      "21:30 - Sample premium sake with expert pairing suggestions",
      "22:15 - Final venue: modern izakaya with creative Japanese dishes",
      "22:45 - Tour wrap-up with recommendations for further exploration",
      "23:00 - Tour concludes (guide can assist with directions or taxis)",
    ],

    faqs: [
      {
        question: "I don't drink alcohol - can I still enjoy this tour?",
        answer:
          "Absolutely! While alcohol is a component of izakaya culture, non-alcoholic alternatives are available at each venue. Japan offers excellent non-alcoholic beer, mocktails, and specialty soft drinks. The food and cultural experience are equally important aspects of the tour, and your guide will ensure you have an enjoyable experience regardless of your drinking preferences.",
      },
      {
        question: "How much alcohol is served during the tour?",
        answer:
          "The tour includes one standard-sized drink at each venue (typically 3-4 venues total). This might be a beer, glass of sake, shochu, or whisky highball depending on the specialty of each location. The focus is on quality and variety rather than quantity. Additional drinks can be purchased at your own expense if desired. We prioritize responsible consumption and authentic cultural experience over heavy drinking.",
      },
      {
        question: "What type of food will we try?",
        answer:
          "Izakayas serve a variety of small dishes designed to pair with alcohol. You'll typically try 6-8 different items throughout the evening including grilled skewers (yakitori), sashimi, fried dishes like karaage (Japanese fried chicken), seasonal vegetable dishes, and local Osaka specialties. The food adds up to a full meal by the end of the tour. We can accommodate some dietary restrictions with advance notice.",
      },
    ],
  },

  {
    title: "Spiritual Osaka: Buddhist Temples & Practices",
    description:
      "Experience Osaka's spiritual side with visits to ancient temples off the tourist path, participate in meditation sessions with monks, and learn about Buddhist traditions that have shaped Japanese culture for centuries.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/temple-meditation.jpg",
      "/images/tours/osaka/buddhist-ceremony.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.6,
    tags: ["Spiritual", "Buddhism", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address:
        "Shitennoji Temple Main Gate, 1-11-18 Shitennoji, Tennoji Ward, Osaka",
      coordinates: {
        latitude: 34.6575,
        longitude: 135.516,
      },
      instructions:
        "Meet at the main gate (Nandaimon) of Shitennoji Temple. Your guide will be holding a lotus flower symbol.",
      contactNumber: "+81 6-1234-5681",
      contactEmail: "spiritual@paragontrails.com",
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
      "Explore Shitennoji, Japan's oldest officially administered temple",
      "Participate in a meditation session led by Buddhist monks",
      "Learn proper temple etiquette and ritual practices",
      "Visit hidden local temples rarely included in tourist itineraries",
      "Experience a traditional Buddhist vegetarian meal (shojin ryori)",
    ],

    inclusions: [
      "Buddhist culture expert guide",
      "All temple entry fees and donations",
      "Guided meditation session",
      "Traditional Buddhist vegetarian lunch",
      "Calligraphy activity with spiritual meaning",
      "Public transportation between temples",
      "Prayer beads souvenir",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included lunch",
      "Optional special rituals requiring separate fees",
      "Photography permits (some temples restrict photography)",
      "Personal offerings at temples",
    ],

    itinerary: [
      "09:00 - Meet at Shitennoji Temple for introduction",
      "09:15 - Tour of Japan's oldest official temple grounds",
      "10:00 - Visit inner precinct with detailed historical explanations",
      "10:45 - Travel to local Zen temple for meditation introduction",
      "11:15 - Guided meditation session with resident monk",
      "12:15 - Traditional vegetarian Buddhist lunch",
      "13:30 - Visit to hidden neighborhood temple with local significance",
      "14:15 - Calligraphy activity with Buddhist themes",
      "15:00 - Final temple visit with participation in afternoon ritual",
      "15:30 - Tour conclusion with spiritual souvenir presentation",
    ],

    faqs: [
      {
        question: "Do I need prior meditation experience?",
        answer:
          "No prior experience is required. The meditation session is designed for beginners, with clear instruction provided by the monk and our guide. The session typically lasts 20-30 minutes and focuses on simple breath awareness and mindfulness techniques. You'll sit on cushions on the floor, though chairs can be provided for those with mobility issues.",
      },
      {
        question: "What should I wear to the temples?",
        answer:
          "Modest, respectful attire is required. Shoulders and knees should be covered for all genders. We recommend loose, comfortable clothing as you will be sitting on the floor for meditation. Shoes will be removed when entering temple buildings, so wear socks and shoes that are easy to remove. Avoid strong perfumes or colognes as these can be distracting during meditation.",
      },
      {
        question: "What is shojin ryori (Buddhist cuisine)?",
        answer:
          "Shojin ryori is traditional Buddhist vegetarian cuisine developed in Japanese temples. It follows strict principles: no animal products, no strong-smelling vegetables (like garlic or onions), minimal waste, and balance of colors, flavors and cooking methods. The meal typically includes seasonal vegetables, tofu, mountain vegetables, and pickles, beautifully presented as an expression of Buddhist philosophy. Even non-vegetarians find it a remarkable culinary experience.",
      },
    ],
  },

  {
    title: "Universal Studios Japan VIP Experience",
    description:
      "Maximize your day at Universal Studios Japan with priority access to popular attractions, dedicated English-speaking guide, express passes, and insider tips to experience the park's highlights efficiently.",
    city: "Osaka",
    country: "Japan",
    region: "Kansai",
    images: [
      "/images/tours/osaka/universal-studios.jpg",
      "/images/tours/osaka/wizarding-world.jpg",
    ],
    duration: "8 hours",
    price: "$225",
    rating: 4.8,
    tags: ["Theme Park", "Family", "Entertainment"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "entertainment",

    meetingPoint: {
      address:
        "Universal Studios Japan Main Entrance, 2 Chome-1-33 Sakurajima, Konohana Ward, Osaka",
      coordinates: {
        latitude: 34.6653,
        longitude: 135.4323,
      },
      instructions:
        "Meet outside the main entrance turnstiles of Universal Studios Japan, near the globe fountain. Your guide will be holding a Harry Potter wand with a red ribbon.",
      contactNumber: "+81 6-1234-5682",
      contactEmail: "universal@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-21",
      "2023-12-22",
      "2023-12-26",
      "2023-12-28",
      "2023-12-29",
      "2024-01-02",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-16",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-01-30",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-13",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
      "2024-02-27",
    ],

    highlights: [
      "Skip the lines with Express Pass access to top attractions",
      "Dedicated English-speaking guide specialized in Universal Studios Japan",
      "Wizarding World of Harry Potter priority access",
      "Super Nintendo World experience with interactive activities",
      "Optimized itinerary to experience maximum attractions",
    ],

    inclusions: [
      "1-Day Studio Pass admission ticket",
      "Express Pass 7 for priority attraction access",
      "English-speaking guide for the entire day",
      "Welcome package with park map and schedule",
      "Bottled water and light snack",
      "Souvenir photo at one premium location",
      "Restaurant reservations assistance",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional beverages",
      "Optional attraction upgrades beyond Express Pass 7",
      "Merchandise and souvenirs",
      "Gratuities (not customary in Japan)",
    ],

    itinerary: [
      "08:30 - Meet guide at park entrance for early admission",
      "08:45 - Enter park with pre-opening access when available",
      "09:00 - Customized itinerary planning based on group preferences",
      "09:15 - Priority access to most popular attractions",
      "11:00 - Scheduled entry to Wizarding World of Harry Potter",
      "12:30 - Lunch break with restaurant recommendations",
      "13:30 - Super Nintendo World interactive experiences",
      "15:00 - Additional rides and attractions with Express Pass",
      "16:30 - Show or parade viewing with reserved area access",
      "17:30 - Final attractions and souvenir shopping time",
      "18:30 - Tour concludes with evening recommendations",
    ],

    faqs: [
      {
        question:
          "What is the Express Pass 7 and which attractions does it cover?",
        answer:
          "Express Pass 7 is a premium ticket that gives you priority access to seven of the park's most popular attractions with significantly reduced wait times. The specific attractions may vary seasonally, but typically include The Wizarding World of Harry Potter, Super Nintendo World's Mario Kart, Attack on Titan, Spiderman, Jurassic Park, Jaws, and Flying Dinosaur. Your guide will help you maximize the value of these passes throughout the day.",
      },
      {
        question:
          "Do I need to speak Japanese to enjoy Universal Studios Japan?",
        answer:
          "While many attractions and shows at Universal Studios Japan are in Japanese, your English-speaking guide will provide translation and context throughout the day. Most rides are enjoyable regardless of language, and the immersive environments like The Wizarding World of Harry Potter and Super Nintendo World can be appreciated visually. Major signage is also in English throughout the park.",
      },
      {
        question: "Is this tour suitable for families with children?",
        answer:
          "Absolutely! This tour is perfect for families. Your guide will customize the day based on the ages and preferences of your group, suggesting age-appropriate attractions and helping measure children for height restrictions. The guide can also assist with child switch service on thrill rides, allowing parents to take turns while the other stays with children who can't or don't want to ride.",
      },
    ],
  },
];

export default osakaTours;
