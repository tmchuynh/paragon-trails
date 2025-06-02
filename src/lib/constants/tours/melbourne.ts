import { Tour } from "@/lib/interfaces/services/tours";

export const melbourneTours: Tour[] = [
  {
    title: "Hidden Laneways & Street Art Culture",
    description:
      "Discover Melbourne's famous laneway culture with a renowned street artist guiding you through colorful alleys, explaining techniques, artist stories, and the evolution of Melbourne's dynamic urban art scene. Includes a hands-on stencil art workshop.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/street-art.jpg",
      "/images/tours/melbourne/hidden-laneways.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Street Art", "Culture", "Workshop"],
    meetingPoint: {
      address: "Federation Square, Corner Swanston & Flinders St, Melbourne",
      coordinates: {
        latitude: -37.8183,
        longitude: 144.9671,
      },
      instructions:
        "Meet at the main entrance steps of Federation Square near the visitor center. Your guide will be holding a sign with 'Melbourne Street Art Tour' written on it.",
      contactNumber: "+61 3 9999 1234",
      contactEmail: "tours@melbournestreetart.com.au",
    },
    highlights: [
      "Explore Melbourne's famous graffiti-covered Hosier Lane with a professional street artist",
      "Learn about various street art techniques including stenciling, paste-ups, and murals",
      "Create your own stencil art piece to take home as a souvenir",
      "Discover hidden cafes and galleries tucked away in Melbourne's laneways",
      "Get insider knowledge on Melbourne's evolving street art scene and famous artists",
    ],
    inclusions: [
      "Professional street artist guide",
      "Hands-on stencil art workshop with all materials",
      "Your own artwork to take home",
      "Small group experience (maximum 8 people)",
      "Melbourne laneway culture map",
    ],
    exclusions: [
      "Food and beverages",
      "Additional art supplies beyond workshop materials",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Federation Square for introduction",
      "10:15 AM - Begin exploration of Hosier Lane and AC/DC Lane",
      "11:00 AM - Visit lesser-known street art locations around Flinders Quarter",
      "11:45 AM - Stop at hidden laneway café (drinks optional, not included)",
      "12:15 PM - Stencil art workshop at dedicated creative space",
      "1:00 PM - Tour conclusion with recommendations for further exploration",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the street art workshop suitable for beginners?",
        answer:
          "Absolutely! Our workshop is designed for all skill levels, with step-by-step guidance from professional street artists. You'll learn basic stencil cutting and spray techniques to create your own piece of art to take home. All materials are provided, including eco-friendly water-based spray paints. The workshop takes place in a designated legal space for street art practice.",
      },
      {
        question: "What should I wear for the workshop?",
        answer:
          "We recommend wearing comfortable clothes that you don't mind getting a bit paint-splattered. Closed-toe shoes are also advisable, as we will be working outdoors in urban settings.",
      },
      {
        question: "Can I bring my own camera?",
        answer:
          "Yes, photography is encouraged throughout the tour. Melbourne's street art makes for excellent photo opportunities, and our guides can suggest the best angles and compositions. Just be mindful that some artists may request no photography of works in progress.",
      },
    ],
  },
  {
    title: "Great Ocean Road & Twelve Apostles Adventure",
    description:
      "Experience one of the world's most scenic coastal drives with a naturalist guide. Visit the iconic Twelve Apostles limestone formations, ancient rainforests, and pristine beaches while learning about unique wildlife and shipwreck history.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/twelve-apostles.jpg",
      "/images/tours/melbourne/great-ocean-road.jpg",
    ],
    duration: "10 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Coastal Drive", "Natural Wonders", "Photography"],
    meetingPoint: {
      address: "St Paul's Cathedral, Corner Flinders & Swanston St, Melbourne",
      coordinates: {
        latitude: -37.8171,
        longitude: 144.968,
      },
      instructions:
        "Meet outside the main entrance of St Paul's Cathedral. Your guide will be waiting next to a clearly marked 'Great Ocean Road Tours' minivan.",
      contactNumber: "+61 3 9888 5678",
      contactEmail: "bookings@greatoceanroadtours.com.au",
    },
    highlights: [
      "Witness the magnificent Twelve Apostles limestone stacks at the optimal time for photography",
      "Walk through ancient rainforest at Maits Rest with trees over 300 years old",
      "Spot koalas and native birds in their natural habitat along the Kennett River",
      "Visit Loch Ard Gorge and hear tales of the dramatic shipwreck coast",
      "Drive along the stunning coastal road with scenic stops at Memorial Arch and Apollo Bay",
    ],
    inclusions: [
      "Professional guide with wildlife and ecological expertise",
      "Luxury air-conditioned minibus transportation",
      "Morning tea with freshly baked goods",
      "National Park entrance fees",
      "Guided rainforest walk",
      "Koala spotting experience",
      "Bottled water throughout the day",
    ],
    exclusions: [
      "Lunch (available for purchase at Apollo Bay)",
      "Optional helicopter rides over the Twelve Apostles",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "7:30 AM - Depart Melbourne with pickup from meeting point",
      "9:00 AM - Morning tea stop with coastal views at Memorial Arch",
      "10:00 AM - Koala spotting at Kennett River",
      "11:30 AM - Lunch break at Apollo Bay (not included)",
      "1:00 PM - Guided rainforest walk at Maits Rest",
      "2:30 PM - Arrive at the Twelve Apostles for guided viewing and photography",
      "3:15 PM - Explore Loch Ard Gorge and shipwreck history",
      "4:00 PM - Begin return journey to Melbourne",
      "5:30 PM - Comfort stop with dinner option (not included)",
      "7:30 PM - Arrive back in Melbourne",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How long is the drive along the Great Ocean Road?",
        answer:
          "The journey from Melbourne to the Twelve Apostles is approximately 4 hours each way, but we make the experience engaging with frequent scenic stops including Loch Ard Gorge, London Bridge, Apollo Bay, and Great Otway National Park. Our comfortable vehicle has large windows designed for sightseeing, and we limit group size to ensure everyone gets window seats for optimal viewing and photography.",
      },
      {
        question: "What should I bring for the day trip?",
        answer:
          "We recommend wearing comfortable clothing and sturdy shoes suitable for walking. Bring a hat, sunscreen, and a refillable water bottle. A light jacket is advisable as coastal weather can change quickly. We provide snacks and refreshments, but you may want to bring a packed lunch or purchase food at one of the stops.",
      },
      {
        question: "What wildlife might we see on this tour?",
        answer:
          "The Great Ocean Road offers excellent wildlife viewing opportunities. We regularly spot koalas in the wild at Kennett River, as well as colorful parrots and other native birds. During winter and spring (June-November), southern right whales and humpback whales can sometimes be spotted from coastal viewpoints. Your naturalist guide will help identify wildlife and explain their unique adaptations and behaviors.",
      },
    ],
  },
  {
    title: "Melbourne Coffee Culture & Hidden Cafés",
    description:
      "Explore Melbourne's world-famous coffee scene with a professional barista. Visit specialty roasters, learn cupping techniques, discover secret cafés in unexpected locations, and understand what makes Melbourne's coffee culture unique globally.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/coffee-tasting.jpg",
      "/images/tours/melbourne/hidden-cafe.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Coffee", "Food", "Cultural"],
    meetingPoint: {
      address: "Flinders Street Station, Main Entrance, Melbourne",
      coordinates: {
        latitude: -37.8183,
        longitude: 144.967,
      },
      instructions:
        "Meet under the clocks at the main entrance of Flinders Street Station. Your guide will be holding a coffee cup-shaped sign.",
      contactNumber: "+61 3 9777 4321",
      contactEmail: "hello@melbournecoffeetours.com.au",
    },
    highlights: [
      "Visit 5 distinct coffee venues ranging from hidden laneway gems to award-winning roasteries",
      "Sample different brewing methods including espresso, filter, and cold brew",
      "Participate in a hands-on barista workshop to create latte art",
      "Learn about coffee bean origins and how Melbourne developed its unique coffee culture",
      "Receive a small bag of freshly roasted beans to take home",
    ],
    inclusions: [
      "Professional barista guide",
      "Coffee tastings at 5 locations (equivalent to 3-4 regular coffees)",
      "Hands-on barista workshop experience",
      "Small pastry or snack pairing at one location",
      "Take-home bag of fresh coffee beans",
      "Melbourne café culture guide and map",
    ],
    exclusions: [
      "Additional food beyond included tastings",
      "Transportation to/from meeting point",
      "Gratuities",
      "Personal coffee equipment (available for purchase)",
    ],
    itinerary: [
      "9:30 AM - Meet at Flinders Street Station",
      "9:45 AM - First café visit with introduction to Melbourne coffee culture",
      "10:30 AM - Second café with espresso tasting and coffee bean discussion",
      "11:15 AM - Visit specialty roastery for behind-the-scenes tour",
      "12:00 PM - Hands-on barista workshop with latte art instruction",
      "12:30 PM - Final café visit with filter coffee tasting and pastry",
      "1:00 PM - Tour conclusion at Federation Square with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "I don't drink coffee. Is this tour still worth it for me?",
        answer:
          "While coffee is our focus, this tour explores Melbourne's broader café culture and the stories behind these unique spaces. Non-coffee drinkers can enjoy specialty teas, hot chocolate, and other beverages at each stop. Many of our visitors who don't drink coffee still find the tour fascinating for its cultural insights, architectural discoveries, and the stories of entrepreneurship behind Melbourne's distinctive café scene.",
      },
      {
        question: "Will we learn how to make coffee?",
        answer:
          "Yes! The tour includes a hands-on session where you can try your hand at making espresso drinks using professional equipment. Our barista guide will demonstrate techniques for brewing the perfect cup, and you'll have the chance to practice steaming milk and pouring latte art. No prior experience is necessary, and all equipment is provided.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 kilometers (1.2 miles) at a leisurely pace with frequent stops at cafés. We walk through Melbourne's flat central business district and laneways, with most locations being within a 10-15 minute walk of each other. Comfortable walking shoes are recommended, but the walking distance is moderate and suitable for most fitness levels.",
      },
    ],
  },
  {
    title: "Yarra Valley Wine & Artisanal Food Journey",
    description:
      "Sample premium cool-climate wines at boutique vineyards in the scenic Yarra Valley. Meet winemakers, enjoy exclusive cellar door tastings, and indulge in a gourmet lunch featuring local produce paired perfectly with regional wines.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/yarra-valley-vineyard.jpg",
      "/images/tours/melbourne/wine-tasting.jpg",
    ],
    duration: "8 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Wine", "Gourmet", "Scenic"],
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the St Paul's Cathedral side of Federation Square. Your guide will be waiting next to a Mercedes van with 'Yarra Valley Wine Tours' signage.",
      contactNumber: "+61 3 9123 4571",
      contactEmail: "yarrawine@paragontrails.com",
    },
    highlights: [
      "Visit 4 premium wineries showcasing the region's renowned cool-climate wines",
      "Enjoy private behind-the-scenes winery tour with barrel room tasting",
      "Sample Yarra Valley's exceptional Chardonnay, Pinot Noir, and sparkling wines",
      "Indulge in a two-course lunch at a vineyard restaurant with wine pairing",
      "Meet winemakers and cellar door staff for expert insights",
    ],
    inclusions: [
      "Transportation in luxury Mercedes vehicle",
      "Professional wine-educated guide",
      "All wine tasting fees at 4 premium wineries (15-20 wines total)",
      "Two-course lunch at vineyard restaurant",
      "One glass of premium wine with lunch",
      "Behind-the-scenes winery tour",
      "Bottled water throughout the day",
      "Yarra Valley wine map and tasting notes",
    ],
    exclusions: [
      "Additional wine purchases beyond included tastings",
      "Additional food beyond included lunch",
      "Gratuities (optional)",
      "Hotel pickup and drop-off (central meeting point only)",
    ],
    itinerary: [
      "09:00 - Depart Melbourne from Federation Square",
      "10:00 - Arrive at first boutique winery for tasting focusing on sparkling wines",
      "11:15 - Visit second winery with private behind-the-scenes tour and barrel tasting",
      "12:30 - Gourmet lunch at vineyard restaurant with stunning views",
      "14:00 - Third winery visit focusing on premium reserve wines",
      "15:30 - Final winery stop at iconic Yarra Valley estate",
      "16:45 - Begin return journey to Melbourne",
      "17:45 - Arrive back at Federation Square",
    ],
    faqs: [
      {
        question: "What types of wine will we taste?",
        answer:
          "The Yarra Valley is renowned for cool-climate varieties, particularly Chardonnay, Pinot Noir, and sparkling wines made in the traditional method. You'll also sample Cabernet Sauvignon, Shiraz, and sometimes unique varieties like Nebbiolo or Arneis. Each winery offers 4-5 wines for tasting, selected to showcase their distinctive styles and the region's diverse terroir. Both established classics and experimental new wines are included.",
      },
      {
        question: "Do I need wine knowledge to enjoy this tour?",
        answer:
          "Not at all! This tour is designed for everyone from curious beginners to experienced wine enthusiasts. Our guides explain wine fundamentals and tasting techniques in an approachable way while providing deeper insights for those with more experience. The relaxed atmosphere encourages questions, and wineries are selected for their welcoming approach to visitors of all knowledge levels.",
      },
      {
        question: "Is there a dress code for the wineries?",
        answer:
          "Smart casual attire is appropriate for the wineries and included lunch. While there's no strict dress code, we recommend comfortable clothing and avoiding very casual items like flip-flops or beachwear. A light layer is useful as cellar areas can be cool even on warm days. Most importantly, wear comfortable shoes as there may be short walks through vineyards or on gravel paths.",
      },
    ],
  },
  {
    title: "Australian Wildlife Encounter & Penguin Parade",
    description:
      "Get up close with iconic Australian wildlife at a conservation sanctuary before witnessing the famous Phillip Island penguin parade, where hundreds of little penguins return from the ocean to their burrows at sunset.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/koala-encounter.jpg",
      "/images/tours/melbourne/penguin-parade.jpg",
    ],
    duration: "10 hours",
    price: "$165",
    rating: 4.8,
    tags: ["Penguins", "Conservation"],
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Your accommodation in Melbourne CBD (hotel pickup included)",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
      instructions:
        "We'll pick you up from the lobby of your Melbourne CBD accommodation between 7:00-7:30am. Your guide will contact you the day before to confirm exact pickup time.",
      contactNumber: "+61 3 9123 4569",
      contactEmail: "oceanroad@paragontrails.com",
    },
    highlights: [
      "Private luxury vehicle allowing flexibility and comfort throughout the journey",
      "Visit the iconic Twelve Apostles limestone stacks at optimal times to avoid crowds",
      "Walk through ancient rainforest at Maits Rest with 300-year-old trees",
      "Spot wild koalas, kangaroos and native birds in their natural habitats",
      "Explore pristine beaches and dramatic coastal landscapes with personalized commentary",
    ],
    inclusions: [
      "Private guide/driver with extensive local knowledge",
      "Luxury vehicle transportation (Mercedes or similar)",
      "Hotel pickup and drop-off within Melbourne CBD",
      "Gourmet picnic lunch featuring local products",
      "Morning tea and coffee with fresh pastries",
      "All national park entrance fees",
      "Bottled water and snacks throughout the day",
      "Binoculars for wildlife spotting",
    ],
    exclusions: [
      "Helicopter tours over the Twelve Apostles (can be arranged for additional fee)",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Gratuities (optional)",
    ],
    itinerary: [
      "07:00 - Hotel pickup from your Melbourne accommodation",
      "08:30 - Morning tea stop at charming coastal town with ocean views",
      "09:15 - Visit to iconic surf beaches including Bells Beach",
      "10:00 - Koala spotting in wild eucalyptus forest",
      "11:00 - Scenic drive through rainforest with guided nature walk",
      "12:30 - Gourmet picnic lunch at scenic lookout",
      "13:30 - Travel along the most spectacular section of the Great Ocean Road",
      "14:30 - Arrive at Twelve Apostles for guided viewing experience",
      "15:15 - Visit to Loch Ard Gorge and learn about its shipwreck history",
      "16:00 - Optional short walks to secret viewpoints (weather permitting)",
      "16:45 - Begin return journey to Melbourne via inland route",
      "19:00 - Arrive back at your Melbourne accommodation",
    ],
    faqs: [
      {
        question: "What animals might we see on this tour?",
        answer:
          "At the wildlife sanctuary, you'll encounter koalas, kangaroos (with opportunities for supervised close interaction), wombats, Tasmanian devils, dingoes, and various native bird species. On Phillip Island, the main attraction is the evening 'penguin parade' featuring thousands of Little Penguins (the world's smallest penguin species). We often spot wild wallabies, cape barren geese, and native water birds on the island as well. Our wildlife biologist guide provides expert insight into behavior and conservation efforts.",
      },
      {
        question: "How long is the penguin parade?",
        answer:
          "The penguin parade lasts approximately 1.5 hours, starting at sunset when the penguins return from their day at sea. We arrive early to secure prime viewing spots and enjoy a brief introduction about the penguins' life cycle and conservation efforts. The experience is designed to minimize disturbance to the penguins while providing an unforgettable wildlife encounter.",
      },
    ],
  },
  {
    title: "Aboriginal Melbourne: Indigenous Cultural Heritage",
    description:
      "Explore Melbourne through the perspective of its first inhabitants with an Indigenous guide sharing Dreamtime stories, traditional uses of native plants, and the ongoing cultural significance of sites throughout the city and Royal Botanic Gardens.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/indigenous-culture.jpg",
      "/images/tours/melbourne/aboriginal-art.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Indigenous", "Cultural", "Historical"],
    tourCategoryId: "cultural",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the Melbourne Visitor Hub in Federation Square. Your guide will be holding a sign with 'Aboriginal Melbourne Tour' written on it.",
      contactNumber: "+61 3 9123 4572",
      contactEmail: "aboriginalmelbourne@paragontrails.com",
    },
    highlights: [
      "Engage in a Welcome to Country ceremony by a local Indigenous Elder",
      "Visit significant cultural sites including the Royal Botanic Gardens and Birrarung Marr",
      "Learn about Indigenous art, music, and dance traditions",
      "Discover the historical impact of colonization on Indigenous peoples",
      "Enjoy a traditional Indigenous bush food tasting experience",
    ],
    inclusions: [
      "Indigenous guide with expert knowledge",
      "Cultural site entry fees",
      "Traditional bush food tasting",
      "Small group size (maximum 10 participants)",
      "Melbourne Indigenous culture guide",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Gratuities (optional)",
    ],
    itinerary: [
      "1:00 PM - Meet at Federation Square for introductions",
      "1:15 PM - Guided walk through the Royal Botanic Gardens focusing on Indigenous plants",
      "2:30 PM - Visit to the Shrine of Remembrance and learn about its significance",
      "3:00 PM - Explore Birrarung Marr and the Yarra River waterfront",
      "4:00 PM - Traditional Indigenous bush food tasting experience",
      "4:30 PM - Tour conclusion with recommendations for further exploration",
    ],
    faqs: [
      {
        question: "How does this tour support Indigenous communities?",
        answer:
          "This tour is 100% Indigenous owned and operated. Your guide is a respected Elder who shares knowledge according to cultural protocols. A percentage of tour proceeds supports Indigenous youth education programs and cultural preservation initiatives. The experience includes products from Indigenous-owned businesses, and we facilitate connections to ethical sources for Aboriginal art and crafts should you wish to purchase culturally authentic items that properly compensate Indigenous artists.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Wear comfortable clothing suitable for walking, as we will be exploring both urban and natural environments. Closed-toe shoes are recommended. The tour takes place in various weather conditions, so dress in layers and bring a hat and sunscreen if it's sunny.",
      },
    ],
  },
  {
    title: "Melbourne Photography Masterclass",
    description:
      "Perfect your photography skills at Melbourne's most photogenic locations with guidance from a professional architectural and urban photographer. Learn techniques for capturing cityscapes, street scenes, and iconic buildings in the best light.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/photography-workshop.jpg",
      "/images/tours/melbourne/cityscape-photography.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Photography", "Architecture", "Skills"],
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the Melbourne Visitor Hub in Federation Square. Your guide will be holding a sign with 'Melbourne Photography Masterclass' written on it.",
      contactNumber: "+61 3 9123 4573",
      contactEmail: "phototours@paragontrails.com",
    },
    highlights: [
      "Learn from a professional photographer with extensive local knowledge",
      "Visit iconic and hidden photographic locations around Melbourne",
      "Receive personalized feedback on your photography skills",
      "Explore different styles of photography including architectural, landscape, and street photography",
      "Enjoy a small group size for tailored instruction and support",
    ],
    inclusions: [
      "Professional photographer guide",
      "Photography skill development tailored to your level",
      "Small group size (maximum 6 participants)",
      "Melbourne photography guidebook",
      "Post-tour photo review and feedback session",
    ],
    exclusions: [
      "Camera equipment (available for rental or purchase)",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Federation Square for introductions and overview",
      "9:15 AM - Visit to iconic Flinders Street Station for exterior and interior shots",
      "10:00 AM - Explore the laneways and arcades for street and architectural photography",
      "11:30 AM - Break at a local café (not included) and review of morning photos",
      "12:00 PM - Afternoon session at the Royal Botanic Gardens focusing on landscape photography",
      "1:30 PM - Visit to the Shrine of Remembrance and surrounding gardens",
      "2:30 PM - Final review and feedback session at a local gallery or café",
      "3:00 PM - Tour conclusion with recommendations for further photography exploration",
    ],
    faqs: [
      {
        question: "What photography skill level is required?",
        answer:
          "This workshop accommodates all skill levels from smartphone photographers to experienced DSLR users. Our instructor provides personalized guidance based on your equipment and experience. Beginners will learn composition principles and basic settings, while advanced photographers can focus on challenging lighting techniques, long exposures, and creative architectural perspectives. The small group size (maximum 6) ensures individual attention.",
      },
      {
        question: "What should I bring?",
        answer:
          "Please bring your camera (DSLR, mirrorless, or smartphone), a tripod if you have one, and any lenses you prefer to use. We recommend comfortable walking shoes, weather-appropriate clothing, and a refillable water bottle. If you have specific photography goals or challenges, feel free to discuss them with the instructor at the start of the workshop.",
      },
    ],
  },
  {
    title: "Melbourne Progressive Dining Experience",
    description:
      "Indulge in a moving feast across Melbourne's diverse culinary neighborhoods. Enjoy different courses at multiple acclaimed restaurants, from innovative modern Australian cuisine to authentic ethnic specialties, with expert food and wine pairings.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/fine-dining.jpg",
      "/images/tours/melbourne/food-tour.jpg",
    ],
    duration: "5 hours",
    price: "$225",
    rating: 4.8,
    tags: ["Gourmet", "Dining", "Wine"],
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the St Paul's Cathedral side of Federation Square. Your guide will be waiting next to a Mercedes van with 'Melbourne Foodie Tours' signage.",
      contactNumber: "+61 3 9123 4574",
      contactEmail: "foodietours@paragontrails.com",
    },
    highlights: [
      "Savor a variety of dishes at 4-5 top-rated restaurants and hidden gems",
      "Enjoy expertly paired wines with each course",
      "Learn about Melbourne's culinary scene and food culture from your guide",
      "Experience the vibrant atmosphere of Melbourne's dining neighborhoods",
      "Small group size ensures personalized service and attention",
    ],
    inclusions: [
      "Gourmet dining experience with multiple courses",
      "Wine pairings with each course",
      "Professional guide with culinary expertise",
      "Small group size (maximum 8 participants)",
      "Melbourne dining guidebook",
    ],
    exclusions: [
      "Additional food and beverages beyond included courses",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "5:30 PM - Meet at Federation Square for introductions",
      "5:45 PM - First course at a modern Australian restaurant",
      "6:30 PM - Second course at a renowned Italian trattoria",
      "7:15 PM - Third course at a local pub with classic Australian fare",
      "8:00 PM - Dessert at a specialty patisserie",
      "8:30 PM - Tour conclusion with recommendations for further dining exploration",
    ],
    faqs: [
      {
        question: "What type of restaurants will we visit?",
        answer:
          "We visit 4-5 restaurants ranging from hidden local favorites to award-winning establishments. The experience is designed as a progressive meal with different courses at each location: perhaps innovative appetizers at a modern Australian restaurant, handmade pasta at an Italian trattoria, signature main courses at a chef-hatted destination, and dessert at a specialized patisserie. Each venue offers something distinctive that represents Melbourne's diverse culinary landscape, with appropriate wine pairings at each stop.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions with prior notice. Please inform us of any allergies or preferences when booking, and we will ensure that alternative dishes are provided at each restaurant to suit your needs while still allowing you to enjoy the full experience.",
      },
    ],
  },
  {
    title: "Melbourne's Historic Pubs & Craft Beer Tour",
    description:
      "Explore Melbourne's vibrant pub culture with a local guide, visiting historic pubs, hidden bars, and craft breweries. Sample a variety of local beers, learn about the city's brewing history, and enjoy traditional pub fare.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/historic-pub.jpg",
      "/images/tours/melbourne/craft-beer.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.6,
    tags: ["Beer", "Pubs", "Local Experience"],
    tourCategoryId: "nightlife",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the Melbourne Visitor Hub in Federation Square. Your guide will be holding a sign with 'Melbourne Pub Tour' written on it.",
      contactNumber: "+61 3 9123 4575",
      contactEmail: "pubtours@paragontrails.com",
    },
    highlights: [
      "Visit 4-5 historic pubs and craft breweries in Melbourne",
      "Learn about the history of beer and brewing in Melbourne",
      "Enjoy a range of beer styles from local craft brewers",
      "Savor traditional pub fare and modern Australian dishes",
      "Small group size ensures personalized service and attention",
    ],
    inclusions: [
      "Beer tastings at each venue (equivalent to 3-4 standard drinks)",
      "Guided tour of historic pubs and breweries",
      "Traditional pub meal",
      "Professional guide with local knowledge",
      "Small group size (maximum 10 participants)",
    ],
    exclusions: [
      "Additional food and beverages",
      "Transportation to/from meeting point",
      "Gratuities",
    ],
    itinerary: [
      "3:00 PM - Meet at Federation Square for introductions",
      "3:15 PM - Visit historic pub for beer tasting and history",
      "4:00 PM - Explore hidden bar with unique craft beers",
      "4:45 PM - Tour local brewery with behind-the-scenes insights",
      "5:30 PM - Enjoy a traditional pub meal at a classic Melbourne pub",
      "6:15 PM - Final beer tasting at a rooftop bar with city views",
      "7:00 PM - Tour conclusion with recommendations for further exploration",
    ],
    faqs: [
      {
        question: "Are non-alcoholic options available?",
        answer:
          "Yes, we offer non-alcoholic beer tastings and soft drinks at each stop for those who prefer not to consume alcohol. The focus remains on exploring Melbourne's pub culture and history.",
      },
      {
        question: "What should I wear for the pub tour?",
        answer:
          "Dress casually and comfortably. We will be walking between venues, so wear comfortable shoes. Melbourne's pub scene is relaxed, so feel free to dress down.",
      },
    ],
  },
  {
    title: "Great Ocean Road Private Adventure",
    description:
      "Experience one of Australia's most scenic coastal drives with a private guide, visiting the iconic Twelve Apostles, ancient rainforests, pristine beaches, and abundant wildlife with flexible timing to avoid the crowds.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/12-apostles.jpg",
      "/images/tours/melbourne/great-ocean-road.jpg",
    ],
    duration: "12 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Nature", "Coastal", "Wildlife"],
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Your accommodation in Melbourne CBD (hotel pickup included)",
      coordinates: {
        latitude: -37.8136,
        longitude: 144.9631,
      },
      instructions:
        "We'll pick you up from the lobby of your Melbourne CBD accommodation between 7:00-7:30am. Your guide will contact you the day before to confirm exact pickup time.",
      contactNumber: "+61 3 9123 4569",
      contactEmail: "oceanroad@paragontrails.com",
    },
    highlights: [
      "Private luxury vehicle allowing flexibility and comfort throughout the journey",
      "Visit the iconic Twelve Apostles limestone stacks at optimal times to avoid crowds",
      "Walk through ancient rainforest at Maits Rest with 300-year-old trees",
      "Spot wild koalas, kangaroos and native birds in their natural habitats",
      "Explore pristine beaches and dramatic coastal landscapes with personalized commentary",
    ],
    inclusions: [
      "Private guide/driver with extensive local knowledge",
      "Luxury vehicle transportation (Mercedes or similar)",
      "Hotel pickup and drop-off within Melbourne CBD",
      "Gourmet picnic lunch featuring local products",
      "Morning tea and coffee with fresh pastries",
      "All national park entrance fees",
      "Bottled water and snacks throughout the day",
      "Binoculars for wildlife spotting",
    ],
    exclusions: [
      "Helicopter tours over the Twelve Apostles (can be arranged for additional fee)",
      "Alcoholic beverages",
      "Personal expenses and souvenirs",
      "Gratuities (optional)",
    ],
    itinerary: [
      "07:00 - Hotel pickup from your Melbourne accommodation",
      "08:30 - Morning tea stop at charming coastal town with ocean views",
      "09:15 - Visit to iconic surf beaches including Bells Beach",
      "10:00 - Koala spotting in wild eucalyptus forest",
      "11:00 - Scenic drive through rainforest with guided nature walk",
      "12:30 - Gourmet picnic lunch at scenic lookout",
      "13:30 - Travel along the most spectacular section of the Great Ocean Road",
      "14:30 - Arrive at Twelve Apostles for guided viewing experience",
      "15:15 - Visit to Loch Ard Gorge and learn about its shipwreck history",
      "16:00 - Optional short walks to secret viewpoints (weather permitting)",
      "16:45 - Begin return journey to Melbourne via inland route",
      "19:00 - Arrive back at your Melbourne accommodation",
    ],
    faqs: [
      {
        question: "How long is the drive to the Twelve Apostles?",
        answer:
          "The drive from Melbourne to the Twelve Apostles is approximately 4 hours along the scenic coastal route. However, we take a full day (approximately 12 hours round trip) to make numerous stops for sightseeing, wildlife spotting, short walks, and meals. Our return journey utilizes a faster inland route, taking about 3 hours.",
      },
      {
        question: "What wildlife might we see?",
        answer:
          "The Great Ocean Road region is home to abundant wildlife. We frequently spot koalas in the wild at specific locations along the route, especially near Kennett River. You may also see kangaroos in grassy areas during the afternoon, various native birds including kookaburras and cockatoos, and during certain seasons, migrating whales (May to October) can be spotted from coastal viewpoints.",
      },
      {
        question: "What happens in poor weather?",
        answer:
          "The Great Ocean Road is spectacular in all weather conditions, with misty or stormy days often providing dramatic atmospherics at the coastal formations. We adjust the itinerary based on conditions, potentially spending more time in the rainforest areas during rain or focusing on inland wildlife during extreme winds. The tour operates rain or shine, but your guide will optimize the experience based on conditions.",
      },
    ],
  },
  {
    title: "Melbourne Foodie Discovery Walking Tour",
    description:
      "Uncover Melbourne's renowned food scene with an insider's walking tour through hidden laneways, visiting unique specialty shops, bustling markets, and hole-in-the-wall eateries while sampling diverse cuisines that reflect the city's multicultural heritage.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/food-laneways.jpg",
      "/images/tours/melbourne/market-food.jpg",
    ],
    duration: "3.5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Walking Tour", "Cultural"],
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the Melbourne Visitor Hub in Federation Square. Your guide will be holding a sign with 'Melbourne Food Tour' written on it.",
      contactNumber: "+61 3 9123 4570",
      contactEmail: "melbfood@paragontrails.com",
    },
    highlights: [
      "Sample a diverse range of Melbourne's multicultural cuisines in 6-8 tastings",
      "Explore hidden laneway cafés and eateries known only to locals",
      "Learn about Melbourne's food history and evolving culinary scene",
      "Visit specialty food shops and meet passionate local producers",
      "Discover the influence of Italian, Greek, Chinese and other cultures on Melbourne's food",
    ],
    inclusions: [
      "Local foodie guide with expert knowledge",
      "6-8 food tastings (equivalent to a full meal)",
      "One coffee or local beverage",
      "Food map with recommendations for further exploration",
      "Special discounts at select food specialty shops",
      "Small group size (maximum 8 participants)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included tastings",
      "Personal shopping expenses",
      "Gratuities (optional)",
    ],
    itinerary: [
      "10:00 - Meet at Federation Square for introductions",
      "10:15 - Visit historic Degraves Street for coffee and pastry tasting",
      "10:45 - Explore hidden laneway specialty shops with tastings",
      "11:15 - Sample authentic dim sum in Melbourne's historic Chinatown",
      "11:45 - Visit Italian precinct for gourmet cheese and antipasto tasting",
      "12:15 - Taste award-winning chocolates and confectionery",
      "12:45 - Explore unique Australian bush food products",
      "13:15 - Final stop for dessert featuring local ingredients",
      "13:30 - Tour conclusion with additional recommendations",
    ],
    faqs: [
      {
        question: "How much food is included?",
        answer:
          "The tour includes 6-8 substantial tastings that together constitute a full meal. Come hungry! We sample a diverse range of foods reflecting Melbourne's multicultural food scene, from Italian and Asian influences to unique Australian specialties. Portions at each stop are generous enough to share the experience without leaving you too full to continue.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary restrictions with advance notice. Please inform us of any dietary requirements at least 48 hours before your tour so we can arrange appropriate alternatives. Melbourne's diverse food scene means we can usually find excellent options for all dietary needs.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2.5 km (1.5 miles) at a leisurely pace with frequent stops. Melbourne's central area is flat and easily walkable, though some laneways have cobblestones. We walk between venues which are typically 5-10 minutes apart, with plenty of opportunities to rest during tastings.",
      },
    ],
  },
  {
    title: "Yarra Valley Wine Experience",
    description:
      "Indulge in a day of premium wine tasting in the picturesque Yarra Valley, visiting boutique and established wineries for guided tastings, a gourmet lunch amid vineyard views, and behind-the-scenes winemaking insights.",
    city: "Melbourne",
    country: "Australia",
    region: "Victoria",
    images: [
      "/images/tours/melbourne/yarra-valley-vineyards.jpg",
      "/images/tours/melbourne/wine-tasting.jpg",
    ],
    duration: "8 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Wine", "Gourmet", "Countryside"],
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Federation Square, corner of Swanston & Flinders Streets, Melbourne",
      coordinates: {
        latitude: -37.8182,
        longitude: 144.969,
      },
      instructions:
        "Meet at the St Paul's Cathedral side of Federation Square. Your guide will be waiting next to a Mercedes van with 'Yarra Valley Wine Tours' signage.",
      contactNumber: "+61 3 9123 4571",
      contactEmail: "yarrawine@paragontrails.com",
    },
    highlights: [
      "Visit 4 premium wineries showcasing the region's renowned cool-climate wines",
      "Enjoy private behind-the-scenes winery tour with barrel room tasting",
      "Sample Yarra Valley's exceptional Chardonnay, Pinot Noir, and sparkling wines",
      "Indulge in a two-course lunch at a vineyard restaurant with wine pairing",
      "Meet winemakers and cellar door staff for expert insights",
    ],
    inclusions: [
      "Transportation in luxury Mercedes vehicle",
      "Professional wine-educated guide",
      "All wine tasting fees at 4 premium wineries (15-20 wines total)",
      "Two-course lunch at vineyard restaurant",
      "One glass of premium wine with lunch",
      "Behind-the-scenes winery tour",
      "Bottled water throughout the day",
      "Yarra Valley wine map and tasting notes",
    ],
    exclusions: [
      "Additional wine purchases beyond included tastings",
      "Additional food beyond included lunch",
      "Gratuities (optional)",
      "Hotel pickup and drop-off (central meeting point only)",
    ],
    itinerary: [
      "09:00 - Depart Melbourne from Federation Square",
      "10:00 - Arrive at first boutique winery for tasting focusing on sparkling wines",
      "11:15 - Visit second winery with private behind-the-scenes tour and barrel tasting",
      "12:30 - Gourmet lunch at vineyard restaurant with stunning views",
      "14:00 - Third winery visit focusing on premium reserve wines",
      "15:30 - Final winery stop at iconic Yarra Valley estate",
      "16:45 - Begin return journey to Melbourne",
      "17:45 - Arrive back at Federation Square",
    ],
    faqs: [
      {
        question: "What types of wine will we taste?",
        answer:
          "The Yarra Valley is renowned for cool-climate varieties, particularly Chardonnay, Pinot Noir, and sparkling wines made in the traditional method. You'll also sample Cabernet Sauvignon, Shiraz, and sometimes unique varieties like Nebbiolo or Arneis. Each winery offers 4-5 wines for tasting, selected to showcase their distinctive styles and the region's diverse terroir. Both established classics and experimental new wines are included.",
      },
      {
        question: "Do I need wine knowledge to enjoy this tour?",
        answer:
          "Not at all! This tour is designed for everyone from curious beginners to experienced wine enthusiasts. Our guides explain wine fundamentals and tasting techniques in an approachable way while providing deeper insights for those with more experience. The relaxed atmosphere encourages questions, and wineries are selected for their welcoming approach to visitors of all knowledge levels.",
      },
      {
        question: "Is there a dress code for the wineries?",
        answer:
          "Smart casual attire is appropriate for the wineries and included lunch. While there's no strict dress code, we recommend comfortable clothing and avoiding very casual items like flip-flops or beachwear. A light layer is useful as cellar areas can be cool even on warm days. Most importantly, wear comfortable shoes as there may be short walks through vineyards or on gravel paths.",
      },
    ],
  },
];
export default melbourneTours;
