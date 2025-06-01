import { Tour } from "@/lib/interfaces/services/tours";

export const petraTours: Tour[] = [
  {
    title: "Petra by Night",
    description:
      "Experience the magic of Petra under the stars with this enchanting night tour. Walk through the Siq to the Treasury, illuminated by thousands of candles, and enjoy traditional music in a unique atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$75",
    duration: "2 hours",
    rating: 4.8,
    highlights: [
      "Walk through the Siq to the Treasury",
      "Experience the Treasury illuminated by candles",
      "Enjoy traditional music",
      "Capture stunning night photography",
      "Learn about Petra's history from a local guide",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Candlelight experience",
      "Traditional music performance",
    ],
    exclusions: [
      "Transportation to Petra",
      "Food and beverages",
      "Personal expenses",
    ],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Comfortable walking shoes are recommended. The temperature can drop at night, so a light jacket is advisable.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly, but children should be supervised due to the uneven terrain.",
      },
      {
        question: "How do I get to Petra?",
        answer:
          "Petra is accessible by car or bus from major cities in Jordan. We recommend arranging transportation in advance.",
      },
    ],
  },
  {
    title: "Petra Full-Day Guided Tour",
    description:
      "Explore the ancient city of Petra with a knowledgeable local guide. Discover the history, architecture, and culture of this UNESCO World Heritage Site.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$150",
    duration: "6 hours",
    rating: 4.9,
    highlights: [
      "Visit the Treasury, Monastery, and Royal Tombs",
      "Learn about Petra's Nabatean heritage",
      "Enjoy panoramic views from Al-Madbah",
      "Explore lesser-known sites like the High Place of Sacrifice",
      "Take a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Lunch at a local restaurant",
      "Bottled water",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Yes, lunch at a local restaurant is included in the tour price.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Sunrise Hike",
    description:
      "Experience the breathtaking beauty of Petra at sunrise. This guided hike takes you through the Siq to the Treasury, offering stunning views and a peaceful atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$100",
    duration: "3 hours",
    rating: 4.7,
    highlights: [
      "Witness the sunrise over Petra",
      "Hike through the Siq to the Treasury",
      "Enjoy a guided tour with historical insights",
      "Capture stunning morning photography",
      "Experience Petra in a quieter setting",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Light breakfast snack",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What time does the tour start?",
        answer:
          "The tour starts early in the morning, around 5 AM, to catch the sunrise.",
      },
      {
        question: "Is breakfast included?",
        answer: "Yes, a light breakfast snack is provided during the hike.",
      },
      {
        question: "What should I wear?",
        answer:
          "Comfortable hiking shoes and warm clothing are recommended, as it can be chilly in the early morning.",
      },
    ],
  },
  {
    title: "Petra and Wadi Rum Adventure",
    description:
      "Combine the wonders of Petra with the stunning landscapes of Wadi Rum. This full-day tour includes a guided visit to Petra and a jeep safari in Wadi Rum.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$200",
    duration: "8 hours",
    rating: 4.9,
    highlights: [
      "Explore Petra's iconic sites",
      "Jeep safari through Wadi Rum's desert landscapes",
      "Visit Lawrence of Arabia's famous sites",
      "Enjoy a traditional Bedouin lunch",
      "Experience the unique geology of Wadi Rum",
    ],
    inclusions: [
      "Local guide",
      "Entrance fees to Petra and Wadi Rum",
      "Jeep safari in Wadi Rum",
      "Lunch at a Bedouin camp",
      "Bottled water",
    ],
    exclusions: [
      "Transportation to Petra and Wadi Rum",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer: "Yes, lunch at a Bedouin camp is included in the tour price.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking in Petra and a jeep ride in Wadi Rum. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Archaeological Tour",
    description:
      "Delve into the archaeological wonders of Petra with this in-depth guided tour. Explore the ancient city's history, architecture, and cultural significance.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$120",
    duration: "4 hours",
    rating: 4.6,
    highlights: [
      "Visit the Royal Tombs and the Great Temple",
      "Learn about Petra's Nabatean civilization",
      "Explore the Street of Facades",
      "Discover lesser-known archaeological sites",
      "Enjoy a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Archaeological insights",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No, lunch is not included in this tour, but there are options available at local restaurants.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Photography Tour",
    description:
      "Capture the stunning beauty of Petra with this specialized photography tour. Led by a professional photographer, this tour focuses on the best spots for photography and offers tips for capturing the perfect shot.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$180",
    duration: "5 hours",
    rating: 4.9,
    highlights: [
      "Visit iconic photography spots in Petra",
      "Learn photography techniques from a pro",
      "Capture sunrise or sunset shots",
      "Explore hidden gems for unique photos",
      "Receive personalized feedback on your photography",
    ],
    inclusions: [
      "Professional photographer guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Photography tips and techniques",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring your camera, comfortable walking shoes, a hat, sunscreen, and a refillable water bottle.",
      },
      {
        question: "Is this tour suitable for beginners?",
        answer:
          "Yes, the tour is designed for all skill levels, from beginners to advanced photographers.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Cultural Heritage Tour",
    description:
      "Explore the cultural heritage of Petra with this guided tour that focuses on the Nabatean civilization, their architecture, and their way of life.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$110",
    duration: "4 hours",
    rating: 4.5,
    highlights: [
      "Learn about the Nabatean civilization",
      "Visit the Royal Tombs and the Great Temple",
      "Explore the Street of Facades",
      "Discover lesser-known cultural sites",
      "Enjoy a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Cultural insights",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No, lunch is not included in this tour, but there are options available at local restaurants.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Night Photography Workshop",
    description:
      "Join a night photography workshop in Petra, where you'll learn how to capture the stunning beauty of the ancient city under the stars.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$200",
    duration: "3 hours",
    rating: 4.9,
    highlights: [
      "Learn night photography techniques",
      "Capture the Treasury illuminated by candles",
      "Receive personalized feedback on your photos",
      "Explore lesser-known sites for unique shots",
      "Enjoy a guided hike through the Siq at night",
    ],
    inclusions: [
      "Professional photographer guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Photography tips and techniques",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring your camera, comfortable walking shoes, a hat, sunscreen, and a refillable water bottle.",
      },
      {
        question: "Is this workshop suitable for beginners?",
        answer:
          "Yes, the workshop is designed for all skill levels, from beginners to advanced photographers.",
      },
      {
        question: "How physically demanding is the workshop?",
        answer:
          "The workshop involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Historical Insights Tour",
    description:
      "Discover the historical significance of Petra with this guided tour that delves into the Nabatean civilization, their trade routes, and architectural innovations.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$130",
    duration: "4 hours",
    rating: 4.6,
    highlights: [
      "Learn about Petra's role in ancient trade routes",
      "Visit the Royal Tombs and the Great Temple",
      "Explore the Street of Facades",
      "Discover lesser-known historical sites",
      "Enjoy a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Historical insights",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No, lunch is not included in this tour, but there are options available at local restaurants.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Adventure Trek",
    description:
      "Embark on an adventurous trek through Petra, exploring its hidden trails and lesser-known sites. This guided tour combines hiking with cultural insights into the Nabatean civilization.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$150",
    duration: "5 hours",
    rating: 4.8,
    highlights: [
      "Hike through Petra's hidden trails",
      "Visit the Royal Tombs and the Great Temple",
      "Explore the Street of Facades",
      "Discover lesser-known archaeological sites",
      "Enjoy a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Adventure trekking experience",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable hiking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No, lunch is not included in this tour, but there are options available at local restaurants.",
      },
      {
        question: "How physically demanding is the trek?",
        answer:
          "The trek involves moderate to strenuous hiking. A good level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Cultural Heritage Walk",
    description:
      "Take a leisurely walk through Petra, focusing on its cultural heritage and the Nabatean way of life. This guided tour offers insights into the ancient city's history and architecture.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$120",
    duration: "4 hours",
    rating: 4.5,
    highlights: [
      "Learn about the Nabatean civilization",
      "Visit the Royal Tombs and the Great Temple",
      "Explore the Street of Facades",
      "Discover lesser-known cultural sites",
      "Enjoy a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Cultural insights",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No, lunch is not included in this tour, but there are options available at local restaurants.",
      },
      {
        question: "How physically demanding is the walk?",
        answer:
          "The walk involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Sunset Experience",
    description:
      "Experience the breathtaking beauty of Petra at sunset. This guided tour takes you through the Siq to the Treasury, offering stunning views and a peaceful atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$100",
    duration: "3 hours",
    rating: 4.7,
    highlights: [
      "Witness the sunset over Petra",
      "Hike through the Siq to the Treasury",
      "Enjoy a guided tour with historical insights",
      "Capture stunning evening photography",
      "Experience Petra in a quieter setting",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Light snack",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Comfortable walking shoes and light clothing are recommended, as it can be warm during the day but cooler in the evening.",
      },
      {
        question: "Is food included?",
        answer:
          "A light snack is provided during the tour, but dinner is not included.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
  {
    title: "Petra Archaeological Insights Tour",
    description:
      "Delve into the archaeological wonders of Petra with this in-depth guided tour. Explore the ancient city's history, architecture, and cultural significance.",
    images: [
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    ],
    price: "$120",
    duration: "4 hours",
    rating: 4.6,
    highlights: [
      "Visit the Royal Tombs and the Great Temple",
      "Learn about Petra's Nabatean civilization",
      "Explore the Street of Facades",
      "Discover lesser-known archaeological sites",
      "Enjoy a guided hike through the Siq",
    ],
    inclusions: [
      "Local guide",
      "Entrance fee to Petra",
      "Bottled water",
      "Archaeological insights",
    ],
    exclusions: [
      "Transportation to Petra",
      "Personal expenses",
      "Tips for the guide",
    ],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural-experience",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring comfortable walking shoes, a hat, sunscreen, and a refillable water bottle. A camera is also recommended for stunning photos.",
      },
      {
        question: "Is lunch included?",
        answer:
          "No, lunch is not included in this tour, but there are options available at local restaurants.",
      },
      {
        question: "How physically demanding is the tour?",
        answer:
          "The tour involves moderate walking and some uphill sections. A reasonable level of fitness is recommended.",
      },
    ],
  },
];
