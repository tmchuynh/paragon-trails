import { Tour } from "@/lib/interfaces/services/tours";

export const chiangMaiTours: Tour[] = [
  {
    title: "Ethical Elephant Sanctuary Experience",
    description:
      "Spend a day with rescued elephants at an ethical sanctuary where you'll observe these magnificent creatures in a natural environment, learning about conservation efforts and helping prepare their meals.",
    images: [
      "/images/tours/chiang-mai/elephant-sanctuary.jpg",
      "/images/tours/chiang-mai/elephant-bathing.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 5.0,
    tags: ["Conservation", "Nature"],

    isHistorical: false,
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
    meetingPoint: {
      address: "119/10 Chang Klan Rd, Chiang Mai 50100, Thailand",
      coordinates: {
        latitude: 18.7831,
        longitude: 98.9955
      },
      instructions: "Meet in the lobby of the Anantara Chiang Mai Resort. Our guide will be wearing a green shirt with an elephant logo. Please arrive by 8:00 AM for check-in. We'll depart promptly at 8:30 AM.",
      contactNumber: "+66 53 090 333",
      contactEmail: "elephants@paragontrails.com"
    },
    availableDates: [
      "2024-04-01", "2024-04-05", "2024-04-10", "2024-04-15", "2024-04-20", "2024-04-25",
      "2024-05-01", "2024-05-05", "2024-05-10", "2024-05-15", "2024-05-20", "2024-05-25",
      "2024-06-01", "2024-06-05", "2024-06-10", "2024-06-15", "2024-06-20", "2024-06-25"
    ],
    highlights: [
      "Learn about elephant conservation from expert mahouts",
      "Prepare natural dietary supplements and herbal medicine for the elephants",
      "Observe elephants in their natural habitat without riding or unethical practices",
      "Enjoy a traditional Thai lunch with organic locally-grown ingredients",
      "Support an organization dedicated to elephant welfare and rainforest conservation"
    ],
    inclusions: [
      "Round-trip transportation from Chiang Mai city center",
      "English-speaking guide with expertise in elephant conservation",
      "Traditional Thai lunch and refreshments",
      "Contribution to elephant welfare programs",
      "Accident insurance during the tour"
    ],
    exclusions: [
      "Hotel pickup outside Chiang Mai city center",
      "Alcoholic beverages",
      "Gratuities",
      "Personal expenses"
    ],
    itinerary: [
      "08:30 AM: Departure from Chiang Mai city center",
      "09:45 AM: Arrive at the sanctuary, orientation and safety briefing",
      "10:30 AM: Meet the elephants and learn about their individual stories",
      "11:30 AM: Prepare dietary supplements and herbal medicine for the elephants",
      "12:30 PM: Traditional Thai lunch",
      "01:30 PM: Observe elephants in their natural habitat and learn about their behaviors",
      "03:00 PM: Help prepare afternoon snacks for the elephants",
      "04:00 PM: Depart sanctuary",
      "05:15 PM: Return to Chiang Mai city center"
    ],
    cancellationPolicy: "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "What makes this an ethical elephant experience?",
        answer:
          "Our sanctuary partner follows a strict no-riding policy and focuses on elephant welfare. The elephants here were rescued from logging or tourism industries and now live in natural conditions where they can roam freely, form herds, and express natural behaviors. You'll observe and interact with them at a respectful distance, preparing food and watching them enjoy their natural surroundings."
      },
      {
        question: "Is transportation included in the tour price?",
        answer:
          "Yes, round-trip transportation from your hotel in Chiang Mai is included. We use comfortable, air-conditioned vehicles for your convenience."
      },
      {
        question: "Can children participate in this tour?",
        answer:
          "Absolutely! This tour is family-friendly and suitable for children of all ages. However, we recommend that younger children be supervised closely during interactions with the elephants."
      },
      {
        question: "What should I wear for the elephant sanctuary visit?",
        answer:
          "Wear comfortable, breathable clothing suitable for warm weather. Closed-toe shoes are recommended as you may walk on uneven terrain. We also suggest bringing a hat, sunscreen, and insect repellent. Swimwear is optional if you wish to bathe with the elephants."
      },
      {
        question: "Will I be able to touch or feed the elephants?",
        answer:
          "You'll be able to help prepare food and observe the elephants eating, but direct contact is limited to ensure the welfare of the elephants. Our approach emphasizes natural behavior and minimizing human interference. This policy is based on scientific research showing that elephants experience stress from excessive human handling. Instead, we provide meaningful interactions like food preparation and observation from appropriate distances that respect the elephants' personal space and natural behaviors."
      }
    ]
  },
  {
    title: "Monk Chat & Temple Meditation Experience",
    description:
      "Gain spiritual insights through personal conversations with Buddhist monks, followed by guided meditation sessions at ancient temples and a traditional blessing ceremony.",
    images: [
      "/images/tours/chiang-mai/monk-chat.jpg",
      "/images/tours/chiang-mai/temple-meditation.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Spiritual", "Cultural", "Buddhism"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "spiritual",
    meetingPoint: {
      address: "Wat Chedi Luang, 103 Road King Prajadhipok Phra Singh, Chiang Mai 50200, Thailand",
      coordinates: {
        latitude: 18.7868,
        longitude: 98.9865
      },
      instructions: "Meet at the entrance gate of Wat Chedi Luang temple. Your guide will be waiting with a sign reading 'Monk Chat Experience'. Please arrive 15 minutes before the scheduled start time and dress appropriately (covered shoulders and knees).",
      contactNumber: "+66 53 278 761",
      contactEmail: "temples@paragontrails.com"
    },
    availableDates: [
      "2024-04-02", "2024-04-09", "2024-04-16", "2024-04-23", "2024-04-30",
      "2024-05-07", "2024-05-14", "2024-05-21", "2024-05-28",
      "2024-06-04", "2024-06-11", "2024-06-18", "2024-06-25"
    ],
    highlights: [
      "Engage in meaningful conversations with Buddhist monks learning English",
      "Learn basic meditation techniques from experienced practitioners",
      "Visit historic temples including the ancient Wat Chedi Luang",
      "Participate in a traditional blessing ceremony",
      "Gain insights into Thai Buddhism and monastic life"
    ],
    inclusions: [
      "English-speaking guide with expertise in Buddhism",
      "Monk chat session at Wat Chedi Luang",
      "Guided meditation session",
      "Traditional blessing ceremony",
      "Temple offerings (flowers, incense, and candles)",
      "Bottled water"
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional temple donations (optional)",
      "Lunch",
      "Gratuities"
    ],
    itinerary: [
      "09:00 AM: Meet at Wat Chedi Luang and introduction",
      "09:15 AM: Visit to the ancient chedi (stupa) with historical overview",
      "10:00 AM: Monk chat session with novice monks at the temple",
      "11:00 AM: Basic meditation instruction and practice session",
      "12:00 PM: Traditional blessing ceremony with senior monk",
      "12:30 PM: Reflection time and Q&A about Buddhist practices",
      "01:00 PM: Tour conclusion"
    ],
    cancellationPolicy: "Full refund if canceled 24 hours before the scheduled tour. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    faqs: [
      {
        question: "What should I wear for temple visits?",
        answer:
          "Modest dress is required when visiting temples and meeting monks. Both men and women should cover shoulders and knees. We provide traditional Thai sarongs if needed. It's also customary to remove shoes before entering temple buildings, so comfortable slip-on footwear is recommended."
      },
      {
        question: "Can I ask the monks any questions?",
        answer:
          "Yes, the monk chat is an open forum where you can ask questions about Buddhism, Thai culture, or the monks' daily lives. They are happy to share their knowledge and experiences with visitors."
      },
      {
        question: "Is meditation suitable for beginners?",
        answer:
          "Absolutely! The guided meditation sessions are designed for all levels, including beginners. The monk will provide instructions and support to help you get the most out of your meditation experience."
      },
      {
        question: "What is the blessing ceremony like?",
        answer:
          "The blessing ceremony is a traditional ritual where the monk chants blessings for your health, happiness, and prosperity. You'll receive a sacred thread bracelet as a symbol of the blessing, which you can keep as a memento of your spiritual experience."
      },
      {
        question: "Are there any cultural taboos I should be aware of?",
        answer:
          "Yes, there are several important cultural protocols when interacting with monks. Women should never touch or directly hand items to monks. When sitting, avoid pointing your feet toward Buddha images or monks. During the monk chat, topics about politics, romantic relationships, or criticisms of Buddhism should be avoided. Our guide will help you navigate these cultural expectations respectfully throughout the tour."
      }
    ]
  },
  {
    title: "Chiang Mai Night Bazaar & Street Food Tour",
    description:
      "Explore the vibrant Chiang Mai Night Bazaar with a local guide, sampling delicious street food, shopping for handicrafts, and experiencing the lively atmosphere of this iconic market.",
    images: [
      "/images/tours/chiang-mai/night-bazaar.jpg",
      "/images/tours/chiang-mai/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Food", "Shopping", "Culture"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Night Bazaar, Chang Khlan Road, Chiang Mai 50100, Thailand",
      coordinates: {
        latitude: 18.7876,
        longitude: 98.9935
      },
      instructions: "Meet at the Three Kings Monument at the entrance to the Night Bazaar on Chang Khlan Road. Your guide will be holding a sign with 'Food Tour' written on it. Please arrive 10 minutes before the scheduled start time.",
      contactNumber: "+66 53 123 456",
      contactEmail: "food@paragontrails.com"
    },
    availableDates: [
      "2024-04-01", "2024-04-08", "2024-04-15", "2024-04-22", "2024-04-29",
      "2024-05-06", "2024-05-13", "2024-05-20", "2024-05-27",
      "2024-06-03", "2024-06-10", "2024-06-17", "2024-06-24"
    ],
    highlights: [
      "Sample authentic Northern Thai street food at carefully selected vendors",
      "Learn about unique Thai ingredients and culinary traditions",
      "Explore the sprawling Night Bazaar with insider shopping tips",
      "Watch artisans create traditional handicrafts",
      "Experience local nightlife and cultural performances"
    ],
    inclusions: [
      "English-speaking foodie guide",
      "8-10 food tastings (equivalent to a full meal)",
      "One local beverage",
      "Food map of Chiang Mai with recommended eateries",
      "Small group experience (maximum 8 people)"
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food beyond the included tastings",
      "Alcoholic beverages",
      "Personal shopping expenses",
      "Gratuities"
    ],
    itinerary: [
      "05:00 PM: Meet at Three Kings Monument",
      "05:15 PM: Begin food tastings at selected street vendors",
      "06:00 PM: Explore the Night Bazaar handicraft section with shopping time",
      "06:45 PM: Continue with more food tastings including Northern Thai specialties",
      "07:30 PM: Visit food court area for final tastings and desserts",
      "08:00 PM: Tour conclusion with recommendations for further exploration"
    ],
    cancellationPolicy: "Full refund if canceled 24 hours before the scheduled tour. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local street foods, including khao soi (curry noodles), sai ua (northern Thai sausage), mango sticky rice, and more. We cater to dietary restrictions, so please inform us in advance if you have any allergies or preferences."
      },
      {
        question: "Is the market accessible for strollers or wheelchairs?",
        answer:
          "The Night Bazaar is mostly pedestrian-friendly, but some areas can be crowded. We recommend bringing a lightweight stroller or wheelchair if needed, but be prepared for some uneven surfaces."
      },
      {
        question: "Can we shop during the tour?",
        answer:
          "Yes! You'll have time to browse and shop for unique handicrafts, textiles, and souvenirs. Your guide can help you negotiate prices and find the best deals."
      },
      {
        question: "What should I bring for the night market tour?",
        answer:
          "Bring comfortable walking shoes, a light jacket (it can get cool in the evening), and some cash for food and shopping. Most vendors accept cash only, so it's best to have small denominations on hand."
      },
      {
        question: "Are the food stalls clean and safe to eat from?",
        answer:
          "We carefully select vendors who maintain high standards of hygiene and food safety. Our guides are experienced in identifying the best and safest food stalls. Street food is an integral part of Thai culture, and millions of locals eat from these vendors daily. We prioritize stalls with high turnover of fresh ingredients and proper cooking temperatures to ensure a safe and delicious experience."
      }
    ]
  },
  {
    title: "Doi Suthep & Hill Tribe Village Tour",
    description:
      "Visit the sacred Doi Suthep Temple and explore a nearby hill tribe village, learning about the unique cultures and traditions of northern Thailand's indigenous communities.",
    images: [
      "/images/tours/chiang-mai/doi-suthep.jpg",
      "/images/tours/chiang-mai/hill-tribe-village.jpg",
    ],
    duration: "5 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Cultural", "Nature", "Historical"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Tha Phae Gate, Chiang Mai 50300, Thailand",
      coordinates: {
        latitude: 18.7876,
        longitude: 98.9923
      },
      instructions: "Meet at the eastern side of Tha Phae Gate in the Old City. Your guide will be holding a sign with 'Doi Suthep Tour' written on it. Please arrive 15 minutes before the scheduled start time.",
      contactNumber: "+66 53 234 567",
      contactEmail: "temples@paragontrails.com"
    },
    availableDates: [
      "2024-04-03", "2024-04-10", "2024-04-17", "2024-04-24", 
      "2024-05-01", "2024-05-08", "2024-05-15", "2024-05-22", "2024-05-29",
      "2024-06-05", "2024-06-12", "2024-06-19", "2024-06-26"
    ],
    highlights: [
      "Visit the magnificent golden chedi at Wat Phra That Doi Suthep",
      "Enjoy panoramic views of Chiang Mai from the mountain temple",
      "Experience authentic hill tribe culture at a Karen village",
      "Learn about traditional textile weaving and crafts",
      "Discover the spiritual significance of northern Thailand's most sacred temple"
    ],
    inclusions: [
      "Round-trip transportation from Chiang Mai city",
      "English-speaking cultural guide",
      "Entrance fees to Doi Suthep Temple",
      "Water and light snacks",
      "Contributions to hill tribe community development"
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch",
      "Optional cable car ticket at Doi Suthep (30 THB)",
      "Personal purchases in the village",
      "Gratuities"
    ],
    itinerary: [
      "08:30 AM: Departure from Tha Phae Gate",
      "09:15 AM: Arrive at Doi Suthep Temple, climb the 309 steps (or optional cable car)",
      "09:30 AM: Guided tour of the temple complex and explanation of Buddhist practices",
      "10:30 AM: Free time for photos and personal exploration",
      "11:15 AM: Depart for hill tribe village",
      "11:45 AM: Arrive at Karen village for cultural experience and crafts demonstration",
      "12:45 PM: Depart from village",
      "01:30 PM: Return to Chiang Mai city center"
    ],
    cancellationPolicy: "Full refund if canceled 24 hours before the scheduled tour. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    faqs: [
      {
        question: "How do we get to Doi Suthep?",
        answer:
          "Transportation to Doi Suthep is included in the tour price. We use comfortable, air-conditioned vehicles for the journey up the mountain, which takes about 30 minutes from Chiang Mai city center."
      },
      {
        question: "What is the dress code for visiting Doi Suthep Temple?",
        answer:
          "Proper attire is required for temple visits. Shoulders and knees must be covered for both men and women. If needed, sarongs are available for rent at the temple entrance, but we recommend bringing appropriate clothing. Shoes must be removed before entering temple buildings, so slip-on footwear is convenient."
      },
      {
        question: "How strenuous is the climb to Doi Suthep Temple?",
        answer:
          "The temple is accessed by either climbing 309 steps flanked by ornate dragon sculptures or taking an optional cable car for a small fee (30 THB). The staircase is moderately steep but has handrails and several resting points. For those with mobility concerns, the cable car provides easy access to the temple complex."
      },
      {
        question: "Is the hill tribe village authentic or staged for tourists?",
        answer:
          "We visit a working Karen village where people live their daily lives rather than a tourist-oriented cultural show. While the village does receive visitors, the residents maintain their traditional lifestyle, continuing to practice weaving and other crafts. Our visit is structured to be respectful and educational, with fair compensation to the community. A portion of your tour cost supports community development projects."
      },
      {
        question: "What is the significance of Doi Suthep Temple?",
        answer:
          "Wat Phra That Doi Suthep is one of northern Thailand's most sacred temples, dating back to the 14th century. According to legend, a white elephant carrying Buddha relics climbed Doi Suthep mountain and trumpeted three times before dying at the site, which was interpreted as an omen to build a temple there. The temple houses what are believed to be shoulder bones of the Buddha. Thai people consider it an important pilgrimage site, and the saying goes that you haven't truly visited Chiang Mai until you've seen Doi Suthep."
      }
    ]
  },
  {
    title: "Chiang Mai Cooking Class & Organic Farm",
    description:
      "Immerse yourself in Thai cuisine with a hands-on cooking class at an organic farm outside Chiang Mai. Harvest fresh ingredients, learn authentic recipes, and enjoy your creations in a beautiful countryside setting.",
    images: [
      "/images/tours/chiang-mai/cooking-class.jpg",
      "/images/tours/chiang-mai/organic-farm.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cooking", "Farm", "Food"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Three Kings Monument, Prapokkloa Rd, Chiang Mai 50200, Thailand",
      coordinates: {
        latitude: 18.7902,
        longitude: 98.9871
      },
      instructions: "Meet at the Three Kings Monument in the Old City. Our cooking school van with the 'Thai Farm Cooking' logo will be parked nearby. Please arrive 10 minutes before the scheduled pickup time.",
      contactNumber: "+66 53 864 393",
      contactEmail: "cooking@paragontrails.com"
    },
    availableDates: [
      "2024-04-04", "2024-04-11", "2024-04-18", "2024-04-25",
      "2024-05-02", "2024-05-09", "2024-05-16", "2024-05-23", "2024-05-30",
      "2024-06-06", "2024-06-13", "2024-06-20", "2024-06-27"
    ],
    highlights: [
      "Visit a local market to learn about Thai ingredients and spices",
      "Tour an organic farm and harvest fresh vegetables for your dishes",
      "Learn to prepare 4-5 authentic Thai dishes with expert instruction",
      "Receive recipe book to recreate the dishes at home",
      "Enjoy your prepared meal in a scenic garden setting"
    ],
    inclusions: [
      "Round-trip transportation from Chiang Mai city",
      "Market tour with ingredient explanation",
      "Organic farm visit",
      "Hands-on cooking class with all ingredients",
      "Full meal of your prepared dishes",
      "Recipe book to take home"
    ],
    exclusions: [
      "Hotel pickup outside Chiang Mai city center",
      "Alcoholic beverages",
      "Additional food not prepared during class",
      "Gratuities"
    ],
    itinerary: [
      "08:30 AM: Pickup from meeting point",
      "09:00 AM: Visit local market to learn about ingredients",
      "09:45 AM: Arrive at organic farm for tour and harvesting",
      "10:30 AM: Cooking instruction begins for first dishes",
      "12:00 PM: Lunch featuring your morning creations",
      "01:00 PM: Afternoon cooking session for desserts and additional dishes",
      "02:30 PM: Depart farm",
      "03:15 PM: Return to Chiang Mai city center"
    ],
    cancellationPolicy: "Full refund if canceled 48 hours before the scheduled class. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled class.",
    faqs: [
      {
        question: "Do I need cooking experience to participate?",
        answer: "No prior cooking experience is necessary. Our instructors provide clear, step-by-step guidance suitable for all skill levels, from beginners to experienced cooks. Each participant has their own cooking station with all necessary equipment and ingredients prepared for you."
      },
      {
        question: "What dishes will we learn to cook?",
        answer: "You'll learn to prepare 4-5 classic Thai dishes, typically including curry paste from scratch, a stir-fry dish, soup, appetizer, and dessert. Examples include pad thai, tom yum soup, green curry, spring rolls, and mango sticky rice. You can choose options based on your taste preferences and dietary restrictions."
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer: "Yes, we can accommodate vegetarian, vegan, gluten-free, and most food allergies. Please inform us when booking so we can prepare alternative ingredients. Many Thai dishes can be easily adapted without sacrificing authentic flavors."
      },
      {
        question: "What will we see on the organic farm tour?",
        answer: "The farm tour showcases sustainable Thai farming practices and introduces you to local herbs, vegetables, and fruit trees. You'll see organic rice paddies, herb gardens with lemongrass, galangal, and Thai basil, fruit orchards, and free-range chickens. You'll learn how these ingredients are used in Thai cooking and have the opportunity to harvest some for your dishes."
      },
      {
        question: "What should I bring to the cooking class?",
        answer: "Just bring your appetite and a camera if you wish to document your culinary creations! We provide all cooking equipment, ingredients, aprons, and water. Wear comfortable clothing and closed-toe shoes as you'll be standing during the cooking portions. The cooking area is covered but open-air, so dress appropriately for the weather."
      }
    ]
  }
];

export default chiangMaiTours;
