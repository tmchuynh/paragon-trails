import { Tour } from "@/lib/interfaces/services/tours";

export const mekongDeltaTours: Tour[] = [
  {
    title: "Mekong Delta Floating Markets & Waterways Adventure",
    description:
      "Experience the vibrant floating markets of the Mekong Delta with an early morning boat journey through Cai Rang and Phong Dien, followed by exploration of hidden waterways and authentic rural villages.",
    city: "Can Tho",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/floating-market.jpg",
      "/images/tours/mekong-delta/river-boats.jpg",
    ],
    duration: "8 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Markets", "Rural", "Boat Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    
    meetingPoint: {
      address: "Ninh Kieu Pier, Can Tho City, Vietnam",
      coordinates: {
        latitude: 10.0347,
        longitude: 105.7907,
      },
      instructions: "Meet at Ninh Kieu tourist pier next to the illuminated pedestrian bridge. Look for your guide holding a sign with 'Mekong Tours' written on it.",
      contactNumber: "+84 292 123 4567",
      contactEmail: "mekong@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", "2023-12-25", "2023-12-27", "2023-12-29", "2023-12-31",
      "2024-01-02", "2024-01-04", "2024-01-06", "2024-01-08", "2024-01-10", "2024-01-12", "2024-01-14", "2024-01-16", "2024-01-18", "2024-01-20", "2024-01-22", "2024-01-24", "2024-01-26", "2024-01-28", "2024-01-30",
      "2024-02-01", "2024-02-03", "2024-02-05", "2024-02-07", "2024-02-09", "2024-02-11", "2024-02-13", "2024-02-15", "2024-02-17", "2024-02-19", "2024-02-21", "2024-02-23", "2024-02-25", "2024-02-27", "2024-02-29",
    ],
    
    highlights: [
      "Experience Cai Rang floating market in early morning when local trade is most active",
      "Navigate narrow waterways unreachable by larger tourist boats",
      "Visit local family businesses producing rice paper, coconut candy, and rice wine",
      "Enjoy authentic home-cooked lunch in a rural Mekong Delta home",
      "Cycle through orchard-lined paths in villages with no car access",
    ],
    
    inclusions: [
      "Private sampan boat with experienced local captain",
      "English-speaking guide with expert knowledge of Mekong culture",
      "Home-cooked lunch featuring local specialties",
      "Fresh tropical fruit tastings at family orchards",
      "Bicycle rental for village exploration",
      "All entrance fees to craft villages",
      "Filtered water and refreshing coconuts",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off (can be arranged for additional fee)",
      "Alcoholic beverages beyond included rice wine tasting",
      "Personal expenses and souvenirs",
      "Gratuities for guide and boat operator",
    ],
    
    itinerary: [
      "05:30 - Meet at Ninh Kieu Pier to board private sampan boat",
      "06:00 - Depart for Cai Rang floating market as vendors begin morning trade",
      "06:30 - Navigate through the bustling Cai Rang floating market",
      "07:30 - Visit smaller, more authentic Phong Dien floating market",
      "08:30 - Breakfast onboard with noodles and fresh fruits",
      "09:00 - Visit family rice paper workshop with demonstration",
      "09:45 - Explore narrow canals and waterways by smaller rowing boat",
      "10:30 - Bicycle ride through orchard villages and rural pathways",
      "11:30 - Visit local family home and learn about delta lifestyle",
      "12:00 - Home-cooked lunch with Mekong Delta specialties",
      "13:00 - Visit coconut candy workshop with tasting",
      "13:45 - Return journey through scenic waterways",
      "14:30 - Arrive back at Ninh Kieu Pier in Can Tho",
    ],
    
    faqs: [
      {
        question: "Why do we need to start so early in the morning?",
        answer:
          "The floating markets are most active and authentic very early in the morning when local farmers and traders conduct their business. By starting at 5:30am, we catch the markets at their busiest and most photogenic time, before most tourist boats arrive. The early start also means more comfortable temperatures for exploration and better light for photography."
      },
      {
        question: "What should I bring on this tour?",
        answer:
          "We recommend bringing a hat, sunglasses, sunscreen, insect repellent, and a light rain jacket or poncho (especially during rainy season from May to October). Camera, extra battery and memory cards are essential as the floating markets offer fantastic photo opportunities. Wear comfortable clothing that can get slightly wet and shoes that are easy to remove when entering homes."
      },
      {
        question: "Will we get wet on this tour?",
        answer:
          "You'll remain relatively dry on the main sampan boat, but some water splash is possible when transferring to smaller rowing boats. During rainy season (May-October), brief tropical showers may occur. Our boats have rain covers, but it's still wise to bring a light rain jacket. The humidity in the delta means you may feel damp regardless of rain - light, breathable clothing is recommended."
      },
    ],
  },
  {
    title: "Home Stay Experience & Rural Mekong Life",
    description:
      "Immerse yourself in authentic Mekong Delta culture with an overnight stay in a local family home, participating in daily activities from fishing to cooking while experiencing the warm hospitality and traditional lifestyle of the region.",
    city: "Vinh Long",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/homestay.jpg",
      "/images/tours/mekong-delta/rural-cooking.jpg",
    ],
    duration: "2 days",
    price: "$120",
    rating: 4.9,
    tags: ["Homestay", "Cultural Immersion", "Authentic"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    
    meetingPoint: {
      address: "Vinh Long Boat Pier, Ward 1, Vinh Long City",
      coordinates: {
        latitude: 10.2532,
        longitude: 105.9723,
      },
      instructions: "Meet at the main boat pier in Vinh Long city center. Your guide will be waiting with a sign showing 'Mekong Homestay Experience'.",
      contactNumber: "+84 270 456 7890",
      contactEmail: "homestay@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-18", "2023-12-21", "2023-12-24", "2023-12-27", "2023-12-30",
      "2024-01-02", "2024-01-05", "2024-01-08", "2024-01-11", "2024-01-14", "2024-01-17", "2024-01-20", "2024-01-23", "2024-01-26", "2024-01-29",
      "2024-02-01", "2024-02-04", "2024-02-07", "2024-02-10", "2024-02-13", "2024-02-16", "2024-02-19", "2024-02-22", "2024-02-25", "2024-02-28",
    ],
    
    highlights: [
      "Experience authentic rural Vietnamese life with a host family",
      "Learn to cook traditional Mekong Delta dishes with fresh local ingredients",
      "Try traditional fishing methods using nets and basket traps",
      "Cycle through fruit orchards and village paths inaccessible to vehicles",
      "Participate in seasonal farming activities alongside local farmers",
    ],
    
    inclusions: [
      "English-speaking guide throughout the experience",
      "Private boat transportation to island homestay",
      "Accommodation in traditional wooden Mekong Delta home (private room)",
      "All meals (1 breakfast, 2 lunches, 1 dinner)",
      "Bicycle rental for local exploration",
      "Fishing equipment and farming tools",
      "Cooking class materials and ingredients",
      "Seasonal fruit tastings from family orchard",
    ],
    
    exclusions: [
      "Transportation to/from Vinh Long meeting point",
      "Alcoholic beverages (available for purchase)",
      "Personal expenses",
      "Gratuities for guide and host family (optional but appreciated)",
      "Travel insurance",
    ],
    
    itinerary: [
      "Day 1: 11:00 - Meet at Vinh Long boat pier",
      "Day 1: 11:15 - Boat journey to island homestay through small canals",
      "Day 1: 12:00 - Welcome lunch with host family",
      "Day 1: 13:30 - Tour of island village by bicycle",
      "Day 1: 14:30 - Visit local workshops (rice paper, coconut candy)",
      "Day 1: 16:00 - Seasonal farming activities with host family",
      "Day 1: 17:30 - Learn traditional fishing techniques in nearby pond or river",
      "Day 1: 18:30 - Help prepare dinner using fresh local ingredients",
      "Day 1: 19:30 - Family dinner with host family",
      "Day 1: 20:30 - Evening cultural exchange with local music or stories",
      
      "Day 2: 06:30 - Early morning village walk to local market",
      "Day 2: 07:30 - Help prepare traditional Vietnamese breakfast",
      "Day 2: 08:30 - Breakfast with host family",
      "Day 2: 09:30 - Cooking class focusing on Mekong Delta specialties",
      "Day 2: 11:30 - Enjoy the lunch you prepared",
      "Day 2: 13:00 - Final activities and farewell to host family",
      "Day 2: 14:00 - Return boat journey to Vinh Long pier",
      "Day 2: 15:00 - Tour concludes at Vinh Long pier",
    ],
    
    faqs: [
      {
        question: "What are the accommodation conditions like?",
        answer:
          "The homestay is a traditional wooden Mekong house with basic but clean and comfortable accommodations. You'll have a private room with mosquito netting, fan, and often a separate shower/toilet area (some homes have shared facilities). While not luxury, these authentic homes offer a genuine experience of rural Mekong life with the essential comforts needed for international guests."
      },
      {
        question: "What should I pack for the homestay?",
        answer:
          "Pack light for this overnight experience. Essentials include lightweight clothing (modest attire respectful of local culture), toiletries, insect repellent, sunscreen, hat, camera, any personal medications, and perhaps a small gift for your host family (something from your home country is always appreciated but not required). We provide towels, bedding, and drinking water."
      },
      {
        question: "Will language be a barrier with the host family?",
        answer:
          "Your guide will be present throughout the experience to translate and facilitate communication with your host family. Most host families have some basic English phrases, and you'll be surprised how much can be communicated through gestures, smiles, and participation in activities together. Many guests report that the connection with their host family was a highlight despite limited shared language."
      },
    ],
  },
  {
    title: "Mekong Delta Bird Sanctuary & Wetlands Tour",
    description:
      "Discover the incredible biodiversity of the Mekong Delta's Tram Chim National Park, a designated Ramsar wetland site, home to rare birds including the endangered Eastern Sarus Crane, with guided boat trips and elevated viewing platforms.",
    city: "Cao Lanh",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/bird-sanctuary.jpg",
      "/images/tours/mekong-delta/wetlands.jpg",
    ],
    duration: "7 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Wildlife", "Birdwatching", "Nature"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "nature",
    
    meetingPoint: {
      address: "Hong Ngu Boat Station, Tram Chim National Park, Dong Thap",
      coordinates: {
        latitude: 10.7127,
        longitude: 105.5466,
      },
      instructions: "Meet at the main entrance to Tram Chim National Park near the Park Headquarters. Your guide will be waiting with binoculars and a 'Bird Sanctuary Tour' sign.",
      contactNumber: "+84 277 789 0123",
      contactEmail: "birdsanctuary@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-19", "2023-12-22", "2023-12-25", "2023-12-28", "2023-12-31",
      "2024-01-03", "2024-01-06", "2024-01-09", "2024-01-12", "2024-01-15", "2024-01-18", "2024-01-21", "2024-01-24", "2024-01-27", "2024-01-30",
      "2024-02-02", "2024-02-05", "2024-02-08", "2024-02-11", "2024-02-14", "2024-02-17", "2024-02-20", "2024-02-23", "2024-02-26", "2024-02-29",
    ],
    
    highlights: [
      "Boat safari through Tram Chim National Park, a UNESCO Ramsar wetland site",
      "Observe rare birds including the endangered Eastern Sarus Crane (seasonal)",
      "Access elevated observation towers with panoramic wetland views",
      "Learn about wetland ecosystem conservation efforts",
      "Explore diverse habitats including lotus fields, reed beds, and melaleuca forests",
    ],
    
    inclusions: [
      "Expert birding guide with knowledge of local species",
      "Private motorboat and rowing boat journeys through the park",
      "Use of quality binoculars and spotting scope",
      "National park entrance and conservation fees",
      "Traditional Mekong Delta lunch at floating restaurant",
      "Bird species checklist and identification guide",
      "Bottled water and fresh fruits",
    ],
    
    exclusions: [
      "Transportation to/from Tram Chim National Park",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Gratuities for guide and boat operator",
      "Professional photography equipment rental",
    ],
    
    itinerary: [
      "05:30 - Meet at Tram Chim National Park entrance",
      "05:45 - Brief introduction to the park and its ecosystem",
      "06:00 - Begin early morning boat safari when birds are most active",
      "07:30 - Visit first observation tower for panoramic wetland views",
      "08:15 - Continue through narrow waterways by rowing boat",
      "09:30 - Morning refreshments at ranger station",
      "10:00 - Second boat journey through diverse habitats",
      "11:30 - Visit seasonal crane observation area (Dec-May)",
      "12:30 - Traditional lunch at floating restaurant",
      "13:30 - Final boat journey through melaleuca forest",
      "14:30 - Return to park headquarters with final bird spotting opportunities",
      "15:00 - Tour concludes with species checklist review",
    ],
    
    faqs: [
      {
        question: "When is the best time to see birds at Tram Chim National Park?",
        answer:
          "The peak season for bird watching at Tram Chim is from December to May, during the dry season. This is when thousands of birds, including the endangered Eastern Sarus Crane, gather in the park. Early morning (6am-9am) provides optimal viewing conditions when birds are most active feeding, with a second active period in late afternoon. Different species can be observed year-round, though the diversity and concentration is highest during the dry season."
      },
      {
        question: "What birds might we see?",
        answer:
          "Tram Chim hosts over 230 bird species. Key species include the endangered Eastern Sarus Crane (Dec-May), Purple Swamphen, Black-headed Ibis, Spot-billed Pelican, Oriental Darter, and various kingfishers, storks, and herons. The park also supports large populations of egrets, cormorants, and various duck species. While wildlife sightings cannot be guaranteed, our experienced guides know the best locations for spotting different species."
      },
      {
        question: "Should I bring my own binoculars?",
        answer:
          "While we provide quality binoculars and a spotting scope, experienced birders may prefer using their own familiar equipment. We recommend bringing your own binoculars if you have them, as well as a camera with telephoto lens if you're interested in bird photography. Early morning light can be stunning for photography, and our guides can advise on the best angles and locations for capturing specific species."
      },
    ],
  },
  {
    title: "Mekong Delta Cooking Adventure by Sampan",
    description:
      "Float down peaceful Mekong Delta waterways on a traditional sampan while learning to prepare authentic southern Vietnamese cuisine, visiting local ingredient markets, and enjoying your creations in scenic riverside settings.",
    city: "Ben Tre",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/cooking-sampan.jpg",
      "/images/tours/mekong-delta/river-cooking.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Cooking", "Culinary", "Boat Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    
    meetingPoint: {
      address: "Ham Luong Tourist Pier, Ben Tre City",
      coordinates: {
        latitude: 10.2457,
        longitude: 106.3758,
      },
      instructions: "Meet at the Ham Luong tourist pier in central Ben Tre. Look for your guide holding a sign with a sampan boat and cooking pan logo.",
      contactNumber: "+84 275 567 8901",
      contactEmail: "mekongcooking@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-17", "2023-12-20", "2023-12-23", "2023-12-26", "2023-12-29",
      "2024-01-01", "2024-01-04", "2024-01-07", "2024-01-10", "2024-01-13", "2024-01-16", "2024-01-19", "2024-01-22", "2024-01-25", "2024-01-28", "2024-01-31",
      "2024-02-03", "2024-02-06", "2024-02-09", "2024-02-12", "2024-02-15", "2024-02-18", "2024-02-21", "2024-02-24", "2024-02-27",
    ],
    
    highlights: [
      "Float on traditional wooden sampan boats through scenic Mekong waterways",
      "Learn to cook authentic Vietnamese dishes on specialized cooking boats",
      "Shop for fresh ingredients at a colorful floating market",
      "Master key Vietnamese cooking techniques from expert local chef",
      "Enjoy your prepared dishes in picturesque riverside settings",
    ],
    
    inclusions: [
      "Private traditional sampan boat transportation",
      "Expert Vietnamese chef instructor",
      "All cooking ingredients and equipment",
      "Market visit with ingredient selection guidance",
      "Full meal of all dishes prepared during class",
      "Recipe booklet to take home",
      "Fresh tropical fruit tastings",
      "Unlimited filtered water and one coconut drink",
    ],
    
    exclusions: [
      "Transportation to/from Ben Tre meeting point",
      "Alcoholic beverages beyond welcome drink",
      "Personal expenses and souvenirs",
      "Gratuities for chef and boat operator",
    ],
    
    itinerary: [
      "09:00 - Meet at Ham Luong pier in Ben Tre",
      "09:15 - Board traditional wooden sampan boat",
      "09:30 - Visit local floating market to select fresh ingredients",
      "10:15 - Cruise through narrow canals while learning about Mekong Delta cuisine",
      "10:45 - First cooking demonstration on specialized cooking boat",
      "11:15 - Hands-on cooking of traditional Vietnamese appetizers",
      "11:45 - Continue to scenic location while preparing main dishes",
      "12:30 - Dock at beautiful riverside location to enjoy your creations",
      "13:30 - Final dessert preparation using tropical fruits",
      "14:00 - Leisurely return journey through peaceful waterways",
      "15:00 - Arrive back at Ham Luong pier with recipes and cooking tips",
    ],
    
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The menu typically includes 4-5 classic southern Vietnamese dishes such as fresh spring rolls (gỏi cuốn), caramelized fish or pork in clay pot (cá kho tộ/thịt kho tộ), sizzling catfish with turmeric and dill (chả cá), green papaya salad (gỏi đu đủ), and coconut-based desserts. Ingredients are seasonal and market-dependent, so specific dishes may vary. Vegetarian options are available with advance notice."
      },
      {
        question: "Do I need cooking experience to enjoy this tour?",
        answer:
          "Not at all! The class is designed for all skill levels from beginners to experienced home cooks. Our chef instructor demonstrates techniques step by step and provides personal guidance throughout. The emphasis is on fun, hands-on learning in a beautiful setting, not on creating perfect restaurant-quality dishes (though you might surprise yourself with what you create!)."
      },
      {
        question: "How stable are the boats? Will I get seasick?",
        answer:
          "The traditional sampan boats used on this tour are wide, flat-bottomed vessels designed for stability in the calm waters of the Mekong Delta. Seasickness is extremely rare as we travel on sheltered rivers and canals with minimal current. The specialized cooking boats have stable cooking stations. Those with mobility concerns should note that boarding requires stepping from pier to boat with assistance from our staff."
      },
    ],
  },
];

export default mekongDeltaTours;
