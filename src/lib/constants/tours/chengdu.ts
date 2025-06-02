import { Tour } from "@/lib/interfaces/services/tours";

export const chengduTours: Tour[] = [
  {
    title: "Giant Panda Experience",
    description:
      "Visit the world-famous Chengdu Research Base of Giant Panda Breeding to observe these beloved creatures up close in a natural habitat.",
    images: [
      "/images/tours/chengdu/giant-pandas.jpg",
      "/images/tours/chengdu/panda-cubs.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.9,
    tags: ["Nature", "Photography"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "1375 Xiongmao Ave, Chenghua District, Chengdu, Sichuan, China",
      coordinates: {
        latitude: 30.738,
        longitude: 104.1568,
      },
      instructions:
        "Meet at the main entrance of the Chengdu Panda Research Base. Your guide will be holding a sign with 'Paragon Trails Panda Tour' written on it. Please arrive 15 minutes before the scheduled tour time.",
      contactNumber: "+86 28 8350 7362",
      contactEmail: "pandatour@paragontrails.com",
    },
    availableDates: [
      "2024-04-05",
      "2024-04-12",
      "2024-04-19",
      "2024-04-26",
      "2024-05-03",
      "2024-05-10",
      "2024-05-17",
      "2024-05-24",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
      "2024-06-28",
    ],
    highlights: [
      "Observe giant pandas in their natural habitat",
      "Learn about conservation efforts from expert guides",
      "Visit the nursery to see baby pandas (when available)",
      "Explore the research facility and learn about breeding programs",
      "Perfect photo opportunities with these beloved animals",
    ],
    inclusions: [
      "English-speaking guide",
      "Entrance tickets to Panda Research Base",
      "Transportation from downtown Chengdu hotels",
      "Bottled water",
      "Souvenir panda bookmark",
    ],
    exclusions: [
      "Hotel pickup outside downtown Chengdu",
      "Optional panda volunteer program (extra cost)",
      "Meals and snacks",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "07:30 AM - Hotel pickup from downtown Chengdu",
      "08:15 AM - Arrive at Panda Research Base",
      "08:30 AM - Morning feeding observation (most active time)",
      "09:30 AM - Guided tour of the research facilities",
      "10:30 AM - Visit to the nursery area (if cubs are present)",
      "11:15 AM - Free time to explore and take photos",
      "12:00 PM - Return to Chengdu city center",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "What's the best time to visit the pandas?",
        answer:
          "Early morning (8-10am) is when pandas are most active and feeding. We schedule our tours during this optimal time.",
      },
      {
        question: "Can I hold a panda?",
        answer:
          "Due to conservation policies, direct contact with pandas is not allowed. However, you can take photos from a safe distance.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The pandas are a hit with kids!",
      },
      {
        question: "What should I bring for the panda tour?",
        answer:
          "Bring your camera with a good zoom lens if possible, comfortable walking shoes, and weather-appropriate clothing. The base has both indoor and outdoor viewing areas with some walking involved. During summer months, we recommend sunscreen, hats, and mosquito repellent as well.",
      },
      {
        question: "How many pandas will we see during the tour?",
        answer:
          "The Research Base is home to over 100 giant pandas, though the exact number visible during your visit depends on the season and individual pandas' behavior. Typically, you'll see between 10-20 adult pandas and potentially some cubs if they're in the nursery at the time. Each panda has indoor and outdoor enclosures designed to mimic their natural mountain habitat.",
      },
    ],
  },
  {
    title: "Sichuan Culinary Adventure",
    description:
      "Dive into the bold flavors of authentic Sichuan cuisine with market tours, cooking demonstrations, and tastings of the region's famous spicy dishes.",
    images: [
      "/images/tours/chengdu/sichuan-cuisine.jpg",
      "/images/tours/chengdu/hotpot.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Cooking", "Spicy"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address:
        "Wenshu Monastery Metro Station, North Exit, Chengdu, Sichuan, China",
      coordinates: {
        latitude: 30.675,
        longitude: 104.0733,
      },
      instructions:
        "Meet your guide outside Exit D of Wenshu Monastery Metro Station. The guide will be holding a sign with 'Sichuan Culinary Tour' on it. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+86 28 8332 1542",
      contactEmail: "food@paragontrails.com",
    },
    availableDates: [
      "2024-04-03",
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
    ],
    highlights: [
      "Explore a local food market with expert guidance",
      "Learn about Sichuan peppercorns and unique local spices",
      "Hands-on cooking class with a professional Sichuan chef",
      "Taste authentic Sichuan dishes including mapo tofu and kung pao chicken",
      "Take home recipe cards to recreate dishes at home",
    ],
    inclusions: [
      "Local English-speaking culinary guide",
      "Market tour with tastings",
      "Cooking class materials and ingredients",
      "Full meal of dishes prepared during class",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages",
      "Personal shopping expenses",
      "Gratuities",
    ],
    itinerary: [
      "09:00 AM - Meet guide at Wenshu Monastery Metro Station",
      "09:15 AM - Visit local market to select ingredients",
      "10:30 AM - Arrive at cooking school",
      "10:45 AM - Introduction to Sichuan cuisine and spices",
      "11:15 AM - Hands-on cooking class",
      "01:00 PM - Enjoy lunch of prepared dishes",
      "02:00 PM - Tour concludes",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the scheduled tour. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "Can you accommodate people who don't eat spicy food?",
        answer:
          "Absolutely! Sichuan cuisine has many non-spicy options, and our chef can adjust spice levels for sensitive palates.",
      },
      {
        question: "Do I need any cooking experience for this tour?",
        answer:
          "No prior cooking experience is necessary. Our chef will guide you through each step, making it accessible for all skill levels.",
      },
      {
        question: "What should I wear for the cooking class?",
        answer:
          "Comfortable clothing and closed-toe shoes are recommended. An apron will be provided during the cooking session.",
      },
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare 3-4 classic Sichuan dishes which typically include Kung Pao Chicken, Mapo Tofu, Twice-Cooked Pork, and Sichuan Cold Noodles. The exact menu may vary slightly based on seasonal ingredients, but always represents authentic local specialties featuring the region's famous balance of flavors known as 'mala' (numbing and spicy).",
      },
      {
        question: "Can I participate if I have food allergies?",
        answer:
          "Yes, we can accommodate most food allergies and dietary restrictions with advance notice. Please inform us when booking about any allergies to ingredients like peanuts, sesame, soy, or specific proteins. Our chef can suggest appropriate substitutions while still maintaining authentic Sichuan flavors.",
      },
    ],
  },
  {
    title: "Chengdu Street Art & Culture Tour",
    description:
      "Explore Chengdu's vibrant street art scene and cultural hotspots with a local guide, visiting murals, galleries, and hidden gems that showcase the city's creative spirit.",
    images: [
      "/images/tours/chengdu/street-art.jpg",
      "/images/tours/chengdu/cultural-spot.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address:
        "People's Park, Shaocheng Rd, Qingyang District, Chengdu, Sichuan, China",
      coordinates: {
        latitude: 30.6576,
        longitude: 104.0656,
      },
      instructions:
        "Meet at the east entrance of People's Park, near the tea garden. Your guide will be holding a colorful art map of Chengdu. Please arrive 5 minutes early.",
      contactNumber: "+86 28 8823 4456",
      contactEmail: "streetart@paragontrails.com",
    },
    availableDates: [
      "2024-04-02",
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-06-04",
      "2024-06-11",
      "2024-06-18",
      "2024-06-25",
    ],
    highlights: [
      "Discover contemporary street art in unexpected urban locations",
      "Visit artist studios and independent galleries",
      "Learn about Chengdu's emerging position in China's modern art scene",
      "Explore the trendy Kuanzhai Alley and Jing'an neighborhoods",
      "Meet local artists and creators (when available)",
    ],
    inclusions: [
      "Local English-speaking art expert guide",
      "Visit to 2-3 galleries or studios",
      "Street art walking tour",
      "Beverage at a local artistic café",
      "Art map of Chengdu",
    ],
    exclusions: [
      "Transportation to/from meeting point",
      "Food and additional beverages",
      "Gallery purchases",
      "Gratuities",
    ],
    itinerary: [
      "02:00 PM - Meet at People's Park entrance",
      "02:15 PM - Explore emerging street art in surrounding neighborhoods",
      "03:00 PM - Visit a local independent art gallery",
      "03:45 PM - Walking tour through Kuanzhai Alley's creative spaces",
      "04:30 PM - Stop at artist-owned café for refreshments and discussion",
      "05:00 PM - Tour conclusion with recommendations for evening arts venues",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring various neighborhoods on foot.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Absolutely! We encourage you to take photos of the street art and cultural sites we visit.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "The tour covers approximately 3-4 kilometers (2-2.5 miles) at a leisurely pace with plenty of stops. We walk through various neighborhoods including some small alleys and pathways. The terrain is mostly flat and urban, but comfortable shoes are still recommended.",
      },
      {
        question:
          "What makes Chengdu's art scene unique compared to other Chinese cities?",
        answer:
          "Chengdu's art scene reflects the city's laid-back lifestyle while pushing creative boundaries. Unlike the more commercial scenes in Beijing or Shanghai, Chengdu artists often incorporate elements of traditional Sichuan culture with contemporary themes. The city is known for its grassroots art collectives, experimental spaces in repurposed factories, and strong connection to youth and tea house culture, creating a uniquely accessible and vibrant creative community.",
      },
    ],
  },
  {
    title: "Leshan Giant Buddha Day Trip",
    description:
      "Take a day trip to the UNESCO World Heritage Site of Leshan to see the world's largest stone Buddha statue, carved into a cliff face overlooking the confluence of three rivers.",
    images: [
      "/images/tours/chengdu/leshan-buddha.jpg",
      "/images/tours/chengdu/leshan-view.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Historical", "Nature", "Day Trip"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Chengdu Train Station, North Plaza, Chengdu, Sichuan, China",
      coordinates: {
        latitude: 30.6895,
        longitude: 104.0661,
      },
      instructions:
        "Meet your guide at the north plaza of Chengdu Train Station, in front of the main entrance. The guide will be holding a sign with 'Leshan Buddha Tour' on it. Please arrive 20 minutes before departure time.",
      contactNumber: "+86 28 8456 7228",
      contactEmail: "leshan@paragontrails.com",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-08",
      "2024-04-15",
      "2024-04-22",
      "2024-04-29",
      "2024-05-06",
      "2024-05-13",
      "2024-05-20",
      "2024-05-27",
      "2024-06-03",
      "2024-06-10",
      "2024-06-17",
      "2024-06-24",
    ],
    highlights: [
      "Visit the colossal Leshan Giant Buddha, standing 71 meters tall",
      "Explore the UNESCO World Heritage Site with expert commentary",
      "Boat ride along the river for panoramic views of the statue",
      "Discover the ancient Lingyun Temple complex",
      "Learn about the historical significance of this 8th-century marvel",
    ],
    inclusions: [
      "English-speaking guide with historical expertise",
      "Round-trip transportation from Chengdu",
      "Leshan Buddha site entrance tickets",
      "Boat ride on Min River",
      "Bottled water",
      "Local lunch",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Optional activities not listed",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "08:00 AM - Departure from Chengdu",
      "10:00 AM - Arrive at Leshan Giant Buddha scenic area",
      "10:30 AM - Boat ride for panoramic views of the Buddha",
      "11:30 AM - Begin walking tour of the Buddha and surrounding temples",
      "01:00 PM - Traditional Sichuan lunch at a local restaurant",
      "02:00 PM - Explore Lingyun Temple and Wuyou Temple",
      "03:30 PM - Begin return journey to Chengdu",
      "05:30 PM - Arrive in Chengdu city center",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the scheduled tour. 50% refund if canceled 24-72 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "How long is the hike to the Leshan Giant Buddha?",
        answer:
          "The hike to the base of the Leshan Giant Buddha takes about 30-45 minutes, depending on your pace. The path is well-maintained and suitable for most fitness levels.",
      },
      {
        question: "Is there an entrance fee for the Leshan Giant Buddha?",
        answer:
          "Yes, there is an entrance fee to visit the Leshan Giant Buddha Scenic Area. The fee is included in the tour price.",
      },
      {
        question: "What should I bring for the day trip?",
        answer:
          "We recommend bringing comfortable walking shoes, a hat, sunscreen, and a water bottle. A light jacket may be useful depending on the season.",
      },
      {
        question: "When was the Leshan Giant Buddha built and why?",
        answer:
          "The Leshan Giant Buddha was carved during the Tang Dynasty, beginning in 713 AD and completed in 803 AD—taking 90 years to complete. It was commissioned by a Chinese monk named Haitong who hoped that the Buddha would calm the turbulent waters of the river and protect the boats traveling past. Interestingly, the enormous amount of stone removed from the cliff and deposited in the river during the Buddha's construction actually did alter the river's flow, making it safer for shipping vessels.",
      },
      {
        question:
          "Is the boat ride mandatory or can we just do the walking tour?",
        answer:
          "The boat ride is optional but highly recommended as it provides the best full view of the Buddha statue. If you prefer, you can skip the boat ride and spend more time exploring the temples and walking paths. Please let your guide know your preference at the beginning of the tour. During peak seasons or after heavy rainfall, the boat ride may be canceled for safety reasons.",
      },
    ],
  },
  {
    title: "Tea Culture Experience & Mountain Plantation",
    description:
      "Journey into the lush mountains outside Chengdu to visit traditional tea plantations, learn about the tea-making process from expert growers, and participate in an authentic Chinese tea ceremony while enjoying panoramic mountain views.",
    images: [
      "/images/tours/chengdu/tea-plantation.jpg",
      "/images/tours/chengdu/tea-ceremony.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Tea", "Culture", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Tianfu Square Metro Station, Exit D, Chengdu, Sichuan, China",
      coordinates: {
        latitude: 30.6578,
        longitude: 104.0668,
      },
      instructions:
        "Meet at Exit D of Tianfu Square Metro Station. Your guide will be holding a sign with a tea leaf symbol. Please arrive 15 minutes before the scheduled departure time.",
      contactNumber: "+86 28 8776 5432",
      contactEmail: "teaculture@paragontrails.com",
    },
    availableDates: [
      "2024-04-06",
      "2024-04-13",
      "2024-04-20",
      "2024-04-27",
      "2024-05-04",
      "2024-05-11",
      "2024-05-18",
      "2024-05-25",
      "2024-06-01",
      "2024-06-08",
      "2024-06-15",
      "2024-06-22",
      "2024-06-29",
    ],
    highlights: [
      "Visit scenic mountain tea plantations with expert tea farmers",
      "Learn traditional tea picking and processing techniques",
      "Experience an authentic Chinese tea ceremony",
      "Sample various premium local teas including rare varieties",
      "Take home a package of freshly processed tea",
    ],
    inclusions: [
      "Transportation to and from the tea mountains",
      "English-speaking tea expert guide",
      "Tea plantation tour and demonstration",
      "Traditional Chinese tea ceremony",
      "Tea tasting session",
      "Lunch at a local farmhouse",
      "Package of premium local tea to take home",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional tea purchases",
      "Gratuities",
    ],
    itinerary: [
      "08:30 AM - Meet guide and depart Chengdu",
      "10:00 AM - Arrive at mountain tea plantation",
      "10:30 AM - Guided tour of tea fields and processing facilities",
      "11:30 AM - Tea picking demonstration and participation (seasonal)",
      "12:30 PM - Lunch at a local farmhouse",
      "02:00 PM - Traditional tea ceremony and tasting session",
      "03:30 PM - Free time to explore and purchase tea",
      "04:00 PM - Return journey to Chengdu",
      "05:30 PM - Arrive back in Chengdu city",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "What types of tea will we learn about?",
        answer:
          "The tour focuses primarily on green teas typical of Sichuan province, including the famous Zhuyeqing (Bamboo Leaf Green) and Mengding Mountain teas. You'll also learn about other varieties like jasmine tea, oolong, and unique local specialties depending on the season. Our guide will explain the differences in processing methods that create various tea types from the same tea plant.",
      },
      {
        question: "When is the best season to visit the tea plantations?",
        answer:
          "While the tour runs year-round, spring (March-April) is the prime tea harvesting season when you can observe and participate in picking the prized first flush leaves. Summer offers lush green scenery, while autumn provides cooler temperatures and beautiful mountain colors. Winter tours focus more on tea processing and cultural aspects rather than field work.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "We recommend comfortable clothing appropriate for the season and sturdy walking shoes as we'll be exploring mountain paths. In spring and summer, bring a hat and sunscreen. In cooler months, layers are advisable as mountain temperatures can be 5-10°C cooler than in Chengdu city.",
      },
      {
        question: "Do I need any prior knowledge about tea?",
        answer:
          "No prior knowledge is required. Whether you're a tea connoisseur or a curious beginner, our guides adjust the information to suit your level of interest. The tour provides a comprehensive introduction to Chinese tea culture while also offering insights that even tea enthusiasts will find valuable.",
      },
      {
        question: "Will we be walking through steep tea mountains?",
        answer:
          "The tour involves walking on gently sloping tea plantation paths, but our selected routes are accessible to most participants with moderate fitness levels. The total walking distance is approximately 2-3 km spread throughout the day, with plenty of breaks. For those with mobility concerns, portions of the experience can be modified.",
      },
    ],
  },
];

export default chengduTours;
