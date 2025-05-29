import { Tour } from "@/lib/interfaces/services/tours";

export const portVilaTours: Tour[] = [
  {
    title: "Cascade Waterfall & Jungle Adventure",
    description:
      "Trek through lush rainforest to reach the spectacular Cascade Waterfall, one of Vanuatu's most beautiful natural attractions. Swim in crystal-clear natural pools, slide down rock formations, and learn about tropical plants and wildlife with a knowledgeable local guide.",
    images: [
      "/images/tours/port-vila/cascade-waterfall.jpg",
      "/images/tours/port-vila/jungle-trekking.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Waterfall", "Nature", "Swimming"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "John Kaltap",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the walk to the waterfall?",
        answer:
          "The trail to Cascade Waterfall is moderately challenging, covering about 1 kilometer through jungle terrain with some uneven surfaces and inclines. Most reasonably fit visitors can complete it in 20-30 minutes. There are steps and handrails in steeper sections. We recommend wearing water shoes or secure sandals as they work well for both the jungle walk and swimming. The trail can be slippery after rain, so we provide walking sticks for those who want them.",
      },
    ],
  },
  {
    title: "Traditional Village Cultural Experience",
    description:
      "Immerse yourself in authentic Melanesian culture with a visit to a traditional ni-Vanuatu village. Witness ancient ceremonies and rituals, learn basket weaving and fire-making techniques, participate in tribal dancing, and share a traditional feast cooked in an earth oven.",
    images: [
      "/images/tours/port-vila/traditional-village.jpg",
      "/images/tours/port-vila/cultural-ceremony.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Cultural", "Village Life", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chief Tariq",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this an authentic village or created for tourists?",
        answer:
          "This is a genuine working village where families live according to traditional customs while selectively sharing their culture with visitors. Your visit directly supports the community and helps preserve their way of life. While certain ceremonies are organized for visitors, they are authentic cultural practices that have been performed for generations. Photography is generally welcomed, but your guide will advise if there are specific ceremonies or sacred objects that should not be photographed out of respect.",
      },
    ],
  },
  {
    title: "Blue Lagoon Snorkeling & Beach Picnic",
    description:
      "Experience the natural wonder of Vanuatu's Blue Lagoon, a stunning natural pool of impossibly blue freshwater. Snorkel among tropical fish, swing from banyan tree ropes, and enjoy a picnic lunch featuring local tropical fruits and freshly grilled seafood.",
    images: [
      "/images/tours/port-vila/blue-lagoon.jpg",
      "/images/tours/port-vila/snorkeling.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Snorkeling", "Lagoon", "Picnic"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marie Touliu",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Why is the Blue Lagoon so vibrantly blue?",
        answer:
          "The Blue Lagoon's striking color comes from a combination of factors: clear freshwater springs feeding the pool, a white limestone base that reflects light, and the perfect depth to create vivid blue hues through light refraction. The water is typically 2-5 meters deep in most areas, with excellent visibility. The colors are most vibrant on sunny days and during mid-morning to early afternoon when the sun is high.",
      },
    ],
  },
  {
    title: "Port Vila Harbor Sunset Dinner Cruise",
    description:
      "Sail the beautiful waters of Port Vila Harbor aboard a luxury catamaran while enjoying canapés, champagne, and a spectacular sunset. After dark, feast on a 3-course dinner featuring fresh local seafood and produce as you cruise under the stars.",
    images: [
      "/images/tours/port-vila/sunset-cruise.jpg",
      "/images/tours/port-vila/harbor-views.jpg",
    ],
    duration: "3 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Sunset", "Dinner", "Cruise"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Michael",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What type of food is served on the dinner cruise?",
        answer:
          "The dinner features contemporary Pacific cuisine highlighting local Vanuatu ingredients. A typical menu includes coconut ceviche with fresh-caught fish, slow-cooked organic beef or fresh lagoon prawns for the main course, and tropical desserts featuring local vanilla, mango, or coconut. Vegetarian and special dietary options are available with advance notice. The meal is paired with quality Australian and New Zealand wines, local Tusker beer, or tropical fruit mocktails.",
      },
    ],
  },
  {
    title: "Vanuatu Round Island Safari",
    description:
      "Circumnavigate the entire island of Efate on this full-day 4WD adventure. Visit remote villages, swim in hidden blue holes, enjoy panoramic viewpoints, learn about WW2 history, and experience diverse landscapes from rainforests to beaches.",
    images: [
      "/images/tours/port-vila/4wd-safari.jpg",
      "/images/tours/port-vila/blue-hole.jpg",
    ],
    duration: "Full day",
    price: "$145",
    rating: 4.9,
    tags: ["4WD", "Island Tour", "Adventure"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "James Wilson",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How long does it take to drive around the entire island?",
        answer:
          "The complete Ring Road around Efate is approximately 130km (80 miles) and takes about 3-4 hours of pure driving time. However, our tour spends a full day (8-9 hours) making numerous stops at villages, viewpoints, swimming locations, and historical sites along the way. The road is mostly paved but has some unpaved sections, which is why we use comfortable 4WD vehicles. We include a delicious lunch at a beachside restaurant about halfway around the island.",
      },
    ],
  },
  {
    title: "Hideaway Island Marine Sanctuary & Underwater Post Office",
    description:
      "Discover the underwater wonders of Hideaway Island Marine Sanctuary with guided snorkeling among vibrant coral reefs and hundreds of tropical fish species. Visit the world's only underwater post office to mail a special waterproof postcard to friends back home.",
    images: [
      "/images/tours/port-vila/underwater-post-office.jpg",
      "/images/tours/port-vila/hideaway-island.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.6,
    tags: ["Snorkeling", "Marine Life", "Unique"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sarah Naviti",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "How does the underwater post office actually work?",
        answer:
          "The underwater post office is staffed by trained postal workers wearing scuba gear during scheduled hours. You purchase special waterproof postcards on the island (included in our tour), write your message, and then snorkel or dive down about 3 meters to hand your card to the postal worker. They stamp it with a special waterproof postmark before placing it in a waterproof container for delivery through the regular postal system. It's a functional post office and your card will actually be delivered to the address you write on it!",
      },
    ],
  },
  {
    title: "Vanuatu Cooking Class & Market Tour",
    description:
      "Learn to prepare traditional Ni-Vanuatu cuisine starting with a guided tour of Port Vila's vibrant market to select tropical ingredients. Create dishes like lap lap (root vegetable pudding cooked in banana leaves), coconut crab, and fresh fish marinated in lime and coconut in a hands-on cooking class.",
    images: [
      "/images/tours/port-vila/cooking-class.jpg",
      "/images/tours/port-vila/market-tour.jpg",
    ],
    duration: "5 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Lina",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Vanuatu cuisine unique?",
        answer:
          "Vanuatu cuisine combines Melanesian traditions with influences from French colonization. The cooking methods are distinctive—particularly the underground earth oven (called 'nakamal') used for traditional dishes like lap lap. The cuisine features abundant tropical fruits, root vegetables like taro and yam, fresh seafood, and coconut milk in many preparations. You'll learn how these elements come together in dishes that have been prepared for generations using traditional techniques that require no modern kitchen equipment.",
      },
    ],
  },
  {
    title: "Zip Line Canopy Tour & Canyon Swing",
    description:
      "Soar through the rainforest canopy on a series of high-speed zip lines offering breathtaking views of the jungle and coastline. The adventure culminates with an optional giant canyon swing that sends you flying through a spectacular gorge.",
    images: [
      "/images/tours/port-vila/zip-line.jpg",
      "/images/tours/port-vila/canyon-swing.jpg",
    ],
    duration: "3 hours",
    price: "$105",
    rating: 4.8,
    tags: ["Zip Line", "Adventure", "Adrenaline"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Adventure Team",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is the canyon swing scary?",
        answer:
          "The canyon swing is definitely thrilling! It features a 35-meter free-fall drop before swinging in a giant arc through the canyon. While it creates an intense (but safe) adrenaline rush, it's optional—about 20% of guests choose to watch rather than participate in this particular element. The zip lines themselves vary from moderate to exciting but are designed to be accessible to most people, including those with no previous zip line experience. Our guides prioritize safety with detailed briefings and top-quality equipment.",
      },
    ],
  },
];

export default portVilaTours;
