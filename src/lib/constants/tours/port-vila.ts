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
      {
        question: "Can we swim in the waterfall pools?",
        answer:
          "Yes! The natural pools at the base of the waterfall are perfect for swimming. The water is clean and refreshing, with a depth of about 2-3 meters. There are shallow areas for children, but we recommend adult supervision for younger swimmers. Our guides will ensure safety and provide life jackets if needed.",
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
      {
        question: "What should I wear for the village visit?",
        answer:
          "We recommend wearing comfortable, modest clothing suitable for walking and sitting on the ground. Closed-toe shoes or sandals with straps are best for the village paths. A light scarf or shawl is also a good idea, as it can be used to cover shoulders if needed during ceremonies. Sunscreen and insect repellent are advisable.",
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
      {
        question: "What snorkeling equipment is provided?",
        answer:
          "We provide high-quality snorkeling gear including masks, snorkels, and fins. Life jackets are also available for those who prefer extra buoyancy or are less confident swimmers. Our guides will give a safety briefing and snorkeling tips before you enter the water. If you have your own gear that you prefer to use, feel free to bring it along.",
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
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Yes, the cruise is family-friendly! We have a children's menu available with options like chicken skewers, pasta, and fruit platters. Kids can enjoy the open deck space and watch for dolphins or other marine life during the cruise. Our crew is experienced in accommodating families and ensuring everyone has a wonderful time.",
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
      {
        question: "What should I bring for the safari tour?",
        answer:
          "We recommend wearing comfortable clothing suitable for a full day of adventure, including sturdy shoes for walking. Bring a swimsuit and towel for swimming stops, sunscreen, a hat, and insect repellent. A refillable water bottle is also a good idea to stay hydrated throughout the day. Our guides will provide snacks and lunch, but feel free to bring any additional snacks you might want.",
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
      {
        question: "What marine life can we expect to see while snorkeling?",
        answer:
          "Hideaway Island Marine Sanctuary is home to a diverse range of marine species, including colorful reef fish, sea turtles, and various types of coral. The waters are generally calm and clear, providing excellent visibility. Our guides will point out interesting species and help you identify them. If you're lucky, you might even spot a manta ray or dolphin during your visit!",
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
      {
        question: "Do I need any prior cooking experience for the class?",
        answer:
          "No prior cooking experience is necessary! This class is designed for all skill levels, from complete beginners to experienced cooks. Our chef will guide you through each step of the cooking process, explaining techniques and cultural significance along the way. You'll leave with new skills and recipes to recreate these dishes at home.",
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
      {
        question: "What should I wear for the zip line tour?",
        answer:
          "Wear comfortable, weather-appropriate clothing that allows for freedom of movement. Closed-toe shoes with straps are required for safety. We recommend wearing long pants or shorts that cover your knees, as you will be harnessed at the waist and legs. Avoid loose clothing or accessories that could get caught in the equipment. Sunscreen and insect repellent are also advisable.",
      },
    ],
  },
];

export default portVilaTours;
