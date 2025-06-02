import { Tour } from "@/lib/interfaces/services/tours";

export const ayutthayaTours: Tour[] = [
  {
    title: "Ayutthaya Ancient Capitals Private Tour",
    description:
      "Explore Thailand's ancient capital with an archaeology expert, visiting UNESCO World Heritage temples, royal palace ruins, and hidden shrines away from the tourist crowds, with insights into Siamese history and architecture.",
    city: "Ayutthaya",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/ayutthaya/wat-mahathat.jpg",
      "/images/tours/ayutthaya/buddha-head.jpg",
    ],
    duration: "Full day",
    price: "$115",
    rating: 4.9,
    tags: ["Temples", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
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
      "2024-07-05",
      "2024-07-12",
    ],
    highlights: [
      "Explore the UNESCO World Heritage ruins of Ayutthaya with an archaeology expert",
      "Visit the iconic Buddha head entwined in tree roots at Wat Mahathat",
      "Discover hidden shrines and lesser-known temples away from tourist crowds",
      "Learn about Siamese history, architecture, and the fall of the ancient capital",
      "Experience the grandeur of Wat Chaiwatthanaram, the most impressive temple complex",
    ],
    inclusions: [
      "Private transportation in air-conditioned vehicle",
      "Professional English-speaking guide specialized in archaeology",
      "All entrance fees to temples and historical sites",
      "Bottled water and light snacks",
      "Local lunch at a riverside restaurant",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Hotel pickup and drop-off outside Bangkok city center (available for additional fee)",
    ],
    itinerary: [
      "7:30 AM: Pickup from your Bangkok accommodation",
      "9:00 AM: Arrive in Ayutthaya and visit Wat Yai Chai Mongkol",
      "10:00 AM: Explore Wat Mahathat and the famous Buddha head in tree roots",
      "11:00 AM: Visit Wat Phra Si Sanphet (the former royal temple)",
      "12:30 PM: Lunch at a riverside restaurant",
      "2:00 PM: Tour Wat Chaiwatthanaram, the most impressive temple complex",
      "3:30 PM: Visit remaining sites based on your interests",
      "5:00 PM: Return to Bangkok",
      "6:30 PM: Drop-off at your accommodation",
    ],
    meetingPoint: {
      address: "Your accommodation in Bangkok city center",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      instructions:
        "Our guide will meet you in the lobby of your Bangkok accommodation. They will be holding a sign with your name and 'Ayutthaya Tour'. Please be ready 5 minutes before your scheduled pickup time.",
      contactNumber: "+66 2 123 4567",
      contactEmail: "bookings@ayutthayatours.com",
    },
    faqs: [
      {
        question: "How long is the drive from Bangkok to Ayutthaya?",
        answer:
          "The drive from Bangkok to Ayutthaya takes approximately 1-1.5 hours each way, depending on traffic conditions. Our comfortable, air-conditioned vehicle makes the journey pleasant, and your guide will provide interesting information about Thailand during the drive.",
      },
      {
        question: "What should I wear for temple visits?",
        answer:
          "For temple visits, please dress respectfully. This means covered shoulders and knees for both men and women. Comfortable walking shoes are recommended as the tour involves walking on uneven surfaces. We provide cold towels and drinking water to keep you comfortable in the heat.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour can be enjoyed by children, especially those with an interest in history and ancient ruins. The pace can be adjusted for families, and our guides are experienced in making historical information engaging for younger visitors. Note that the site involves walking in open areas with limited shade.",
      },
      {
        question: "Will we see the famous Buddha head in the tree roots?",
        answer:
          "Yes, the tour includes a visit to Wat Mahathat where you can see the iconic Buddha head entwined in tree roots. This is one of the most photographed images from Ayutthaya and your guide will share the fascinating history behind this unique sight.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Yes, a traditional Thai lunch at a riverside restaurant is included in your tour package. The restaurant offers authentic local dishes with options for various dietary requirements. Please inform us in advance of any food allergies or special dietary needs.",
      },
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Ayutthaya by Bicycle & Longtail Boat",
    description:
      "Experience the ancient city from unique perspectives, cycling through historical parks and local neighborhoods, then cruising the rivers that encircle the old capital by traditional longtail boat to view temples from the water.",
    city: "Ayutthaya",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/ayutthaya/cycling-ruins.jpg",
      "/images/tours/ayutthaya/river-view.jpg",
    ],
    duration: "8 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cycling", "Boat Tour", "Active"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-04-07",
      "2024-04-14",
      "2024-04-21",
      "2024-04-28",
      "2024-05-05",
      "2024-05-12",
      "2024-05-19",
      "2024-05-26",
      "2024-11-03",
      "2024-11-10",
      "2024-11-17",
      "2024-11-24",
      "2024-12-01",
      "2024-12-08",
    ],
    highlights: [
      "Cycle through Ayutthaya Historical Park on comfortable cruiser bikes",
      "Experience the ancient city from a unique perspective",
      "Cruise the rivers that encircle the old capital by traditional longtail boat",
      "View temples from the water - a perspective few tourists experience",
      "Visit local communities and markets along the route",
    ],
    inclusions: [
      "Round-trip transportation from Bangkok",
      "Professional English-speaking guide",
      "Quality bicycle and helmet rental",
      "Longtail boat cruise",
      "Lunch at a riverside restaurant",
      "Bottled water and refreshments",
      "Entrance fees to all temples and sites",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional food and beverages not specified",
    ],
    itinerary: [
      "7:30 AM: Pickup from your Bangkok accommodation",
      "9:00 AM: Arrive in Ayutthaya and bicycle fitting",
      "9:30 AM: Begin cycling tour of main temple complexes",
      "11:30 AM: Visit local market and refreshment break",
      "12:30 PM: Lunch at a riverside restaurant",
      "2:00 PM: Board longtail boat for river tour around the island",
      "3:30 PM: Visit final temples accessible by boat",
      "4:30 PM: Return bicycles and depart for Bangkok",
      "6:00 PM: Drop-off at your accommodation",
    ],
    meetingPoint: {
      address: "Your accommodation in Bangkok city center",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      instructions:
        "Our guide will meet you at the lobby of your Bangkok accommodation. Look for a representative holding a sign with 'Ayutthaya Bicycle & Boat Tour'. Please be ready 5-10 minutes before your scheduled pickup time.",
      contactNumber: "+66 2 234 5678",
      contactEmail: "active@ayutthayatours.com",
    },
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "No, you don't need to be an experienced cyclist. The terrain in Ayutthaya is flat, and we ride at a leisurely pace suitable for casual riders. The tour covers approximately 10 kilometers in total, with frequent stops for sightseeing and photography.",
      },
      {
        question: "What kind of bicycles do you provide?",
        answer:
          "We provide comfortable cruiser bikes with wide seats and upright positioning that are easy to ride. All bikes are regularly maintained for safety and comfort. Helmets are provided and strongly recommended for all participants.",
      },
      {
        question: "What should I wear for cycling and the boat trip?",
        answer:
          "Wear comfortable, light clothing suitable for cycling. Athletic shorts or pants, a breathable shirt, and closed-toe shoes are recommended. Don't forget sunscreen, sunglasses, and a hat. For temple visits, please bring clothing that covers shoulders and knees, which can be worn over cycling clothes when needed.",
      },
      {
        question: "What if it rains during the tour?",
        answer:
          "In case of light rain, we provide ponchos and the tour continues as normal. For heavy rain or stormy conditions, we may modify the itinerary to include more covered sites or substitute the cycling portion with transportation by van for safety reasons. Full cancellation with refund is offered only in extreme weather conditions.",
      },
      {
        question: "Is the longtail boat ride safe?",
        answer:
          "Yes, our longtail boats are operated by experienced local boatmen who know the waterways well. All boats are equipped with life jackets for every passenger and undergo regular safety inspections. The waters around Ayutthaya are generally calm, making for a smooth and enjoyable experience.",
      },
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Ayutthaya Sunset Photography Tour",
    description:
      "Capture the magical light of sunset over Ayutthaya's ancient temples with guidance from a professional photographer who knows the best angles and locations for spectacular shots as the stone ruins glow in the golden hour.",
    city: "Ayutthaya",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/ayutthaya/temple-sunset.jpg",
      "/images/tours/ayutthaya/golden-buddha.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Temples"],

    isHistorical: true,
    isRomantic: true,
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
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
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
      "2024-07-06",
    ],
    highlights: [
      "Capture stunning sunset photos at Wat Chaiwatthanaram",
      "Learn photography tips and techniques from a professional",
      "Explore Ayutthaya's ancient temples in the beautiful evening light",
      "Experience the tranquility of the historical park at sunset",
      "Enjoy a small group size for personalized instruction",
    ],
    inclusions: [
      "Round-trip transportation from Bangkok",
      "Professional photographer guide",
      "Photography assistance and tips",
      "Tripod rental (if needed)",
      "Light refreshments",
      "Entrance fees to all temples and sites",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional food and beverages not specified",
    ],
    itinerary: [
      "2:30 PM: Pickup from your Bangkok accommodation",
      "4:00 PM: Arrive in Ayutthaya and visit Wat Chaiwatthanaram",
      "5:00 PM: Explore Wat Mahathat and other temples for photography",
      "6:30 PM: Capture sunset photos at the best vantage points",
      "7:30 PM: Return to Bangkok",
      "9:00 PM: Drop-off at your accommodation",
    ],
    meetingPoint: {
      address: "Your accommodation in Bangkok city center",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      instructions:
        "Your photography guide will meet you in the lobby of your Bangkok accommodation. They will be carrying professional camera equipment and holding a sign with 'Ayutthaya Photo Tour'. Please be ready 5 minutes before your scheduled pickup time.",
      contactNumber: "+66 2 345 6789",
      contactEmail: "photo@ayutthayatours.com",
    },
    faqs: [
      {
        question: "Do I need professional camera equipment for this tour?",
        answer:
          "While professional equipment isn't required, we recommend bringing a camera that allows manual settings adjustment for best results. A DSLR or mirrorless camera with a tripod is ideal, but smartphones with good cameras can also capture beautiful images. Your guide will provide tips specific to your equipment.",
      },
      {
        question: "What if I'm a beginner photographer?",
        answer:
          "This tour is suitable for all skill levels from beginners to professionals. Our photography guides are experienced teachers who can provide basic instruction or advanced techniques depending on your needs. They'll help you understand composition, lighting, and settings to best capture Ayutthaya's beauty.",
      },
      {
        question: "Will we have time to set up tripods at each location?",
        answer:
          "Yes, the tour is specifically designed with photographers in mind. We allow ample time at each location for setting up equipment, trying different compositions, and adjusting settings. The itinerary focuses on quality of photography opportunities rather than quantity of sites.",
      },
      {
        question: "What are the best subjects to photograph in Ayutthaya?",
        answer:
          "Ayutthaya offers incredible diversity for photographers: ancient temples with distinctive prang (towers), Buddha statues in various states of preservation, the famous Buddha head in tree roots, reflections in water, and local life. Sunset creates dramatic silhouettes and golden lighting on the ancient stones.",
      },
      {
        question: "Will the guide help with my specific camera model?",
        answer:
          "Our guides are familiar with most major camera brands and models. While they may not know every function of every camera, they understand the fundamental principles that apply to all photography and can help you navigate your specific equipment to achieve the best results.",
      },
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Ayutthaya Floating Markets & Local Cuisine",
    description:
      "Discover the flavors of central Thailand with visits to authentic floating markets, tasting sessions of regional specialties, and a hands-on cooking class featuring royal Thai cuisine recipes that originated in ancient Ayutthaya.",
    city: "Ayutthaya",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/ayutthaya/floating-market.jpg",
      "/images/tours/ayutthaya/thai-cooking.jpg",
    ],
    duration: "7 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Food", "Markets", "Cooking"],

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
    availableDates: [
      "2024-04-08",
      "2024-04-15",
      "2024-04-22",
      "2024-04-29",
      "2024-05-06",
      "2024-05-13",
      "2024-05-20",
      "2024-05-27",
      "2024-11-04",
      "2024-11-11",
      "2024-11-18",
      "2024-11-25",
      "2024-12-02",
      "2024-12-09",
    ],
    highlights: [
      "Visit authentic floating markets and taste regional specialties",
      "Enjoy a hands-on cooking class for royal Thai cuisine",
      "Learn about the historical significance of dishes from Ayutthaya",
      "Explore local ingredients and cooking techniques",
      "Savor the flavors of your own cooking and local delicacies",
    ],
    inclusions: [
      "Round-trip transportation from Bangkok",
      "Professional English-speaking guide",
      "Market visits and tastings",
      "Cooking class with a local chef",
      "Lunch featuring your cooked dishes",
      "Bottled water and refreshments",
      "Entrance fees to all sites and markets",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional food and beverages not specified",
    ],
    itinerary: [
      "7:00 AM: Pickup from your Bangkok accommodation",
      "8:30 AM: Arrive at the floating markets and explore",
      "10:30 AM: Visit a local herb garden and learn about Thai spices",
      "12:00 PM: Cooking class at a local restaurant or chef's home",
      "1:30 PM: Enjoy lunch featuring your cooked dishes",
      "3:00 PM: Return to Bangkok",
      "4:30 PM: Drop-off at your accommodation",
    ],
    meetingPoint: {
      address: "Your accommodation in Bangkok city center",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      instructions:
        "Your culinary guide will meet you at the lobby of your Bangkok accommodation. Look for a guide holding a sign with 'Ayutthaya Food Tour' and a small basket of Thai ingredients. Please be ready 5 minutes before your scheduled pickup time.",
      contactNumber: "+66 2 456 7890",
      contactEmail: "food@ayutthayatours.com",
    },
    faqs: [
      {
        question: "What kind of food will we taste during the tour?",
        answer:
          "You'll sample a wide variety of central Thai specialties including boat noodles, ancient royal Thai cuisine recipes, seasonal fruits, traditional Thai sweets, and local snacks from the floating markets. The tour offers both familiar favorites and unique dishes that are difficult to find outside Thailand.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most food allergies with advance notice. Please inform us of any dietary restrictions when booking so our chef can prepare appropriate alternatives while still providing an authentic Thai culinary experience.",
      },
      {
        question: "How much cooking will we actually do in the class?",
        answer:
          "The cooking class is fully hands-on. You'll prepare 3-4 complete dishes from scratch under the guidance of our chef, learning traditional techniques and the cultural significance of each recipe. Everyone gets their own cooking station with all necessary ingredients and equipment provided.",
      },
      {
        question: "Will we receive recipes to take home?",
        answer:
          "Yes, you'll receive a beautifully illustrated recipe booklet with all the dishes you've learned, plus additional regional specialties. The recipes are adapted for international kitchens, with suggestions for ingredient substitutions if certain Thai ingredients are difficult to find in your home country.",
      },
      {
        question:
          "What's the difference between a regular market and a floating market?",
        answer:
          "Floating markets are a traditional form of commerce in Thailand where vendors sell goods from small boats along canals. Today, some markets are partially on land with some vendors in boats, creating a unique atmosphere. These markets offer specialty foods and crafts often not found in regular markets, and provide insight into Thailand's historical waterborne commerce.",
      },
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Elephant Sanctuary & Ayutthaya Heritage",
    description:
      "Combine cultural heritage with ethical wildlife experiences by visiting Ayutthaya's historical park and a nearby ethical elephant sanctuary where retired working elephants live in natural conditions with expert care.",
    city: "Ayutthaya",
    country: "Thailand",
    region: "Central Thailand",
    images: [
      "/images/tours/ayutthaya/elephant-sanctuary.jpg",
      "/images/tours/ayutthaya/elephant-feeding.jpg",
    ],
    duration: "Full day",
    price: "$145",
    rating: 4.8,
    tags: ["Elephants", "Conservation"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-11-05",
      "2024-11-12",
      "2024-11-19",
      "2024-11-26",
      "2024-12-03",
      "2024-12-10",
    ],
    highlights: [
      "Visit the ethical elephant sanctuary and learn about elephant conservation",
      "Observe and interact with elephants in a natural and respectful environment",
      "Explore Ayutthaya's historical park and UNESCO World Heritage sites",
      "Enjoy a guided tour with a focus on history and wildlife protection",
      "Savor a delicious Thai lunch at the sanctuary",
    ],
    inclusions: [
      "Round-trip transportation from Bangkok",
      "Professional English-speaking guide",
      "Entrance fees to Ayutthaya Historical Park",
      "Visit to the ethical elephant sanctuary",
      "Lunch at the sanctuary",
      "Bottled water and refreshments",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses and souvenirs",
      "Additional food and beverages not specified",
    ],
    itinerary: [
      "7:00 AM: Pickup from your Bangkok accommodation",
      "8:30 AM: Arrive at Ayutthaya Historical Park",
      "9:00 AM: Guided tour of the historical park",
      "12:00 PM: Lunch at a local restaurant",
      "1:00 PM: Visit the ethical elephant sanctuary",
      "3:00 PM: Return to Bangkok",
      "4:30 PM: Drop-off at your accommodation",
    ],
    meetingPoint: {
      address: "Your accommodation in Bangkok city center",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      instructions:
        "Your guide will meet you at the lobby of your Bangkok accommodation. They will be holding a sign with 'Elephant Sanctuary & Heritage Tour'. Please be ready 5-10 minutes before your scheduled pickup time.",
      contactNumber: "+66 2 567 8901",
      contactEmail: "elephants@ayutthayatours.com",
    },
    faqs: [
      {
        question: "What kind of activities will we do with the elephants?",
        answer:
          "This ethical sanctuary allows you to observe elephants in a natural setting, help prepare their food, and watch them bathe and play. You may assist in preparing special dietary supplements, creating enrichment activities, and learning about elephant behavior from expert mahouts. Unlike unethical operators, we do NOT offer elephant riding or performances.",
      },
      {
        question: "What is the sanctuary's approach to elephant welfare?",
        answer:
          "The sanctuary focuses on providing retired and rescued elephants with a natural habitat where they can socialize and behave as they would in the wild. The elephants' well-being is the top priority, with limited, respectful human interaction designed around their needs rather than tourists' desires. All activities are monitored by veterinary staff.",
      },
      {
        question: "What should I wear for the elephant sanctuary visit?",
        answer:
          "Wear comfortable, casual clothing that you don't mind getting a little dirty or wet. Closed-toe shoes with good traction are necessary as the sanctuary grounds can be muddy. Bringing a change of clothes is recommended. Avoid wearing bright colors or strong perfumes, which can sometimes agitate the elephants.",
      },
      {
        question: "Will we be able to touch the elephants?",
        answer:
          "Limited, respectful physical interaction with some elephants may be possible, but always under the supervision of experienced mahouts and only with elephants that are comfortable with human contact. Some elephants at the sanctuary prefer minimal human interaction, and their preferences are always respected.",
      },
      {
        question: "How does this tour support elephant conservation?",
        answer:
          "A significant portion of your tour fee goes directly to the elephant sanctuary for food, veterinary care, facility maintenance, and community education programs. The sanctuary also conducts research on elephant behavior and participates in broader conservation efforts throughout Thailand. By visiting, you're contributing to ethical elephant tourism that helps phase out exploitative practices.",
      },
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
];

export default ayutthayaTours;
