import { Tour } from "@/lib/interfaces/services/tours";

export const denpasarTours: Tour[] = [
  {
    title: "Balinese Temples & Cultural Heritage",
    description:
      "Discover Bali's spiritual side with visits to ancient water temples, clifftop sanctuaries, and a traditional Balinese compound where you'll witness ceremonial preparations and offerings.",
    images: [
      "/images/tours/denpasar/water-temple.jpg",
      "/images/tours/denpasar/temple-ceremony.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Spiritual", "Cultural", "Architecture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I wear to visit the temples?",
        answer:
          "Modest attire is required. Both men and women should cover shoulders and knees. We provide traditional sarongs and sashes at each temple, but please dress respectfully.",
      },
      {
        question: "Are the temples accessible for all ages?",
        answer:
          "Yes, the tour is designed to be family-friendly. However, some temple sites may involve stairs or uneven paths, so comfortable walking shoes are recommended.",
      },
      {
        question: "Will we participate in any ceremonies?",
        answer:
          "Yes, if available, you may have the opportunity to observe or participate in a local ceremony, such as offering prayers or blessings. Your guide will explain the significance of each ritual.",
      },
    ],
  },
  {
    title: "Balinese Home Cooking & Market Tour",
    description:
      "Start at a local market to select fresh ingredients, then travel to a traditional Balinese home where you'll learn authentic cooking techniques and prepare a multi-course feast.",
    images: [
      "/images/tours/denpasar/cooking-class.jpg",
      "/images/tours/denpasar/market-tour.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cooking", "Market", "Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need cooking experience?",
        answer:
          "No experience necessary! Our hosts will guide you through each step of preparing authentic Balinese dishes, from basic techniques to complex flavors. Everyone succeeds and enjoys the meal together afterward.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions or allergies in advance. We can accommodate vegetarian, vegan, and gluten-free diets with prior notice.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your accommodation to the market and cooking location.",
      },
    ],
  },
  {
    title: "Denpasar City & Art Scene Tour",
    description:
      "Explore the vibrant art and culture of Denpasar with visits to local galleries, museums, and street art installations, guided by a local artist who shares insights into Bali's contemporary art scene.",
    images: [
      "/images/tours/denpasar/art-gallery.jpg",
      "/images/tours/denpasar/street-art.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culture",
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
          "Absolutely! We encourage you to take photos of the art and cultural sites we visit.",
      },
    ],
  },
  {
    title: "Denpasar Night Market & Street Food Adventure",
    description:
      "Experience the bustling atmosphere of Denpasar's night market, sampling a variety of local street foods, from satay to desserts, while learning about Balinese culinary traditions.",
    images: [
      "/images/tours/denpasar/night-market.jpg",
      "/images/tours/denpasar/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Food", "Night Market", "Local Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local dishes including satay, nasi goreng, gado-gado, and traditional Balinese desserts. Vegetarian options are available.",
      },
      {
        question: "Is the food safe to eat?",
        answer:
          "Yes, we only visit reputable vendors known for their hygiene and quality. Your guide will ensure you have a safe and enjoyable culinary experience.",
      },
      {
        question: "Can we buy souvenirs at the market?",
        answer:
          "Absolutely! The night market offers a range of handicrafts, clothing, and souvenirs that you can purchase during your visit.",
      },
    ],
  },
  {
    title: "Denpasar Heritage Walking Tour",
    description:
      "Discover the rich history and colonial architecture of Denpasar on this walking tour of the city's heritage sites, including Dutch colonial buildings, traditional Balinese houses, and historical landmarks.",
    images: [
      "/images/tours/denpasar/colonial-architecture.jpg",
      "/images/tours/denpasar/bali-museum.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.6,
    tags: ["History", "Architecture", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Puputan Badung Square, Jl. Surapati, Denpasar, Bali, Indonesia",
      coordinates: {
        latitude: -8.6556,
        longitude: 115.2202,
      },
      instructions:
        "Meet your guide at the main entrance of Puputan Badung Square. Look for a guide holding a sign reading 'Heritage Walking Tour'. Please arrive 10 minutes before the scheduled start time.",
      contactNumber: "+62 812 4567 8901",
      contactEmail: "heritage@paragontrails.com",
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
      "2024-07-06",
      "2024-07-13",
      "2024-07-20",
      "2024-07-27",
    ],
    highlights: [
      "Visit the Bali Museum to learn about the island's rich history",
      "Explore colonial architecture from the Dutch era",
      "Discover traditional Balinese houses and compounds",
      "Learn about significant historical events at Puputan Badung Square",
      "Visit the Maospahit Monument and understand its significance",
    ],
    inclusions: [
      "Professional English-speaking guide",
      "Entrance fee to Bali Museum",
      "Bottled water",
      "City map with historical sites marked",
      "Cultural insights and historical context",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "09:00 AM: Meet at Puputan Badung Square",
      "09:15 AM: Tour of the square and learn about the Puputan ritual",
      "10:00 AM: Walk to Bali Museum for guided tour",
      "11:00 AM: Visit colonial buildings and Maospahit Monument",
      "11:45 AM: Explore traditional Balinese houses",
      "12:30 PM: Tour conclusion with local recommendations",
    ],
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. No refund for cancellations less than 24 hours before the tour or no-shows.",
    faqs: [
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour involves approximately 2-3 kilometers (1.2-1.9 miles) of walking at a leisurely pace. The terrain is mostly flat and urban, though some streets may have uneven surfaces. There are regular stops for explanations and rest breaks, making it accessible for most fitness levels.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and can be engaging for children interested in history and culture. Our guides can adapt their commentary to be more accessible for young participants. For very young children, please note that strollers may be difficult to manage on some of the older streets.",
      },
      {
        question: "What should I wear for this walking tour?",
        answer:
          "We recommend comfortable walking shoes, lightweight clothing appropriate for Bali's warm climate, a hat, and sunscreen. If we visit any temples during the tour, you'll need to have shoulders and knees covered, though our guide can advise if this will be necessary for your specific tour date.",
      },
      {
        question: "Will we visit active religious sites?",
        answer:
          "While the focus of this tour is on historical sites, we may pass by or briefly visit active temples or shrines. Our guide will advise on appropriate behavior and attire. If any special ceremonies are taking place, we might adjust the route to observe respectfully or avoid disruption.",
      },
      {
        question: "What makes Denpasar's architecture unique?",
        answer:
          "Denpasar features a fascinating blend of traditional Balinese architecture with strong Hindu influences, Dutch colonial buildings from the early 20th century, and post-independence Indonesian styles. The tour highlights how these different architectural traditions coexist and sometimes blend together, reflecting Bali's complex cultural history and religious practices.",
      },
    ],
  },
  {
    title: "Sacred Monkey Forest & Temple Sanctuary",
    description:
      "Visit the famous Sacred Monkey Forest Sanctuary, home to over 700 Balinese long-tailed macaques living freely among ancient temple ruins, followed by a guided meditation session at a secluded holy water temple.",
    images: [
      "/images/tours/denpasar/monkey-forest.jpg",
      "/images/tours/denpasar/water-temple.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Wildlife", "Temples", "Nature"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Jl. Monkey Forest, Ubud, Gianyar, Bali, Indonesia",
      coordinates: {
        latitude: -8.5188,
        longitude: 115.2582,
      },
      instructions:
        "Meet at the main entrance of the Sacred Monkey Forest Sanctuary in Ubud. Your guide will be waiting with a sign reading 'Monkey Forest Tour'. Please arrive 15 minutes before the scheduled start time.",
      contactNumber: "+62 812 3456 7890",
      contactEmail: "monkeyforest@paragontrails.com",
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
      "2024-05-31",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
      "2024-06-28",
      "2024-07-05",
      "2024-07-12",
      "2024-07-19",
      "2024-07-26",
    ],
    highlights: [
      "Observe over 700 Balinese long-tailed macaques in their natural habitat",
      "Explore three ancient temples within the sacred forest",
      "Learn about Hindu-Balinese spiritual traditions",
      "Experience a guided meditation session at a holy water temple",
      "Understand the ecological importance of the sanctuary",
    ],
    inclusions: [
      "Entrance fees to Sacred Monkey Forest",
      "Professional English-speaking guide",
      "Holy water temple meditation session",
      "Traditional sarong rental for temple visit",
      "Bottled water and light refreshments",
      "Transportation between sites",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages",
      "Personal offerings for temple ceremonies",
      "Gratuities",
    ],
    itinerary: [
      "08:30 AM: Meet at Sacred Monkey Forest entrance",
      "08:45 AM: Guided tour through the monkey sanctuary",
      "10:15 AM: Visit to the three temples within the forest",
      "11:30 AM: Travel to the holy water temple",
      "12:00 PM: Guided meditation session",
      "01:00 PM: Light refreshments and discussion",
      "01:30 PM: Tour conclusion",
    ],
    cancellationPolicy:
      "Free cancellation up to 48 hours before the tour starts. 50% refund for cancellations made 24-48 hours before the tour. No refund for cancellations less than 24 hours before the tour or no-shows.",
    faqs: [
      {
        question: "Are the monkeys dangerous?",
        answer:
          "The macaques in the sanctuary are generally accustomed to humans but are still wild animals. Our guide will instruct you on proper behavior around the monkeys to ensure a safe experience. We recommend not carrying food, wearing dangling jewelry, or bringing plastic bags as these can attract the monkeys' attention. Don't stare directly at them or attempt to touch them. When these guidelines are followed, interactions are typically peaceful and fascinating.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "For the monkey forest, comfortable clothing and closed shoes are recommended. For the temple visit, modest attire is required with shoulders and knees covered. We provide traditional sarongs for the temple portion of the tour. We suggest bringing a change of clothes if you wish to participate in the water blessing ceremony at the holy water temple.",
      },
      {
        question: "Do I need previous meditation experience?",
        answer:
          "No, the meditation session is suitable for beginners. Our spiritual guide will provide clear instructions and guide you through a gentle meditation practice. The serene environment of the water temple naturally facilitates a peaceful experience, regardless of your previous meditation background.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is generally suitable for children aged 10 and above who are comfortable around animals. Parents should closely supervise younger children, especially in the monkey forest. The meditation portion can be modified for families with children to make it engaging and age-appropriate.",
      },
      {
        question: "What spiritual traditions will we learn about?",
        answer:
          "This tour explores Hindu-Balinese spiritual traditions, including the concept of Tri Hita Karana (harmony between humans, nature, and the divine), the significance of water in purification rituals, and the role of temples as places where the human and divine worlds meet. The experience is presented in a respectful, educational manner that's accessible to people of all religious backgrounds.",
      },
    ],
  },
  {
    title: "Bali Spiritual Healing & Wellness Journey",
    description:
      "Experience Bali's traditional healing practices with a day dedicated to wellness, including a consultation with a local healer, a cleansing ritual at a sacred spring temple, yoga session, and natural herbal treatments.",
    images: [
      "/images/tours/denpasar/healing-ritual.jpg",
      "/images/tours/denpasar/yoga-session.jpg",
    ],
    duration: "7 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Wellness", "Spiritual", "Healing"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
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
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "Jl. Hanoman, Ubud, Gianyar, Bali, Indonesia",
      coordinates: {
        latitude: -8.5187,
        longitude: 115.2636,
      },
      instructions:
        "Meet at Yoga Barn in Ubud. Your wellness guide will be waiting in the reception area. Please arrive 15 minutes before the scheduled start time wearing comfortable clothing.",
      contactNumber: "+62 813 5678 9012",
      contactEmail: "healing@paragontrails.com",
    },
    availableDates: [
      "2024-04-07",
      "2024-04-21",
      "2024-05-05",
      "2024-05-19",
      "2024-06-02",
      "2024-06-16",
      "2024-06-30",
      "2024-07-14",
      "2024-07-28",
    ],
    highlights: [
      "Consult with a respected Balinese healer (Balian)",
      "Participate in a purification ritual at a sacred spring temple",
      "Practice gentle yoga and meditation with a skilled instructor",
      "Experience traditional herbal treatments and healing techniques",
      "Learn about Balinese wellness philosophy and practices",
    ],
    inclusions: [
      "Consultation with traditional healer",
      "Sacred spring temple purification ceremony",
      "Guided yoga and meditation session",
      "Traditional herbal treatments",
      "Healthy organic lunch",
      "All transportation between locations",
      "Offering materials for ceremonies",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional treatments beyond those included",
      "Personal spiritual offerings",
      "Gratuities",
    ],
    itinerary: [
      "09:00 AM: Meet at Yoga Barn for introduction",
      "09:30 AM: Morning yoga and meditation session",
      "10:45 AM: Travel to sacred spring temple",
      "11:15 AM: Purification ritual and blessing",
      "12:30 PM: Organic lunch at a local wellness restaurant",
      "02:00 PM: Consultation with Balinese healer",
      "03:30 PM: Traditional herbal treatments",
      "04:00 PM: Closing ceremony and discussion",
      "04:30 PM: Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours in advance. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before the scheduled tour.",
    faqs: [
      {
        question: "What is a Balian (traditional healer)?",
        answer:
          "A Balian is a traditional Balinese healer who combines spiritual practices with herbal knowledge and energy work. Each Balian has different specialties - some focus on physical ailments, others on emotional or spiritual matters. The consultation is both educational and personal; the Balian may offer insights about your well-being and suggest traditional remedies or practices. While respectful of local traditions, we present this experience as cultural and educational rather than as a replacement for conventional healthcare.",
      },
      {
        question: "What happens during the purification ritual?",
        answer:
          "The purification (melukat) takes place at a sacred water temple where you'll change into a traditional sarong (provided) and make offerings to the deities. You'll then enter the spring waters as our guide leads you through prayers and intentions. The cool, fresh spring water is believed to cleanse negative energies and purify body and spirit. This is a genuine spiritual practice for Balinese Hindus, so we participate with respect and proper decorum.",
      },
      {
        question: "Do I need yoga experience for this tour?",
        answer:
          "No prior yoga experience is necessary. Our instructor leads a gentle session appropriate for beginners, focusing on basic poses, breathing techniques, and meditation. The emphasis is on mindfulness and connecting with your body rather than advanced postures. The session takes place in a beautiful outdoor setting that enhances the experience.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Please wear comfortable, loose-fitting clothing suitable for yoga and movement. Bring a change of clothes for the water purification ritual, along with a towel. We provide sarongs for temple visits. We also recommend bringing a journal to record insights from your experience, sunscreen, and any personal medications you might need throughout the day.",
      },
      {
        question: "Is this experience authentic or created for tourists?",
        answer:
          "This journey offers authentic Balinese healing traditions presented respectfully by local practitioners. The Balian consultations are with genuine healers who serve their communities, not performers. Similarly, the purification rituals are conducted at temples actively used by local worshippers. While we've designed the experience to be accessible to visitors, these are real practices central to Balinese spiritual life, not staged demonstrations. Our guides provide cultural context to help you understand and appreciate the deeper significance of these traditions.",
      },
    ],
  },
  {
    title: "Bali Rice Terraces & Agricultural Traditions",
    description:
      "Journey through Bali's iconic emerald rice terraces, learning traditional farming methods from local farmers, participating in rice planting or harvesting (season dependent), and discovering the ancient subak irrigation system that defines Balinese agriculture.",
    images: [
      "/images/tours/denpasar/rice-terraces.jpg",
      "/images/tours/denpasar/farming-activities.jpg",
    ],
    duration: "6 hours",
    price: "$60",
    rating: 4.8,
    tags: ["Agriculture", "Nature", "Rural Life"],

    isHistorical: true,
    isRomantic: false,
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
    isArtOrMusic: false,
    tourCategoryId: "local",
    meetingPoint: {
      address: "Tegallalang Rice Terrace, Jl. Raya Tegallalang, Gianyar, Bali, Indonesia",
      coordinates: {
        latitude: -8.4312,
        longitude: 115.2768,
      },
      instructions:
        "Meet at the main entrance viewpoint of Tegallalang Rice Terrace. Your guide will be holding a sign with 'Rice Terrace Tour'. Please arrive 15 minutes before the scheduled start time wearing suitable clothing for farming activities.",
      contactNumber: "+62 818 0123 4567",
      contactEmail: "riceterraces@paragontrails.com",
    },
    availableDates: [
      "2024-04-08",
      "2024-04-22",
      "2024-05-06",
      "2024-05-20",
      "2024-06-03",
      "2024-06-17",
      "2024-07-01",
      "2024-07-15",
      "2024-07-29",
    ],
    highlights: [
      "Explore UNESCO-recognized rice terraces with stunning views",
      "Learn traditional farming techniques from local farmers",
      "Participate in seasonal planting or harvesting activities",
      "Understand the ancient subak irrigation system",
      "Visit a local farmer's home and enjoy traditional refreshments",
    ],
    inclusions: [
      "Guided tour of rice terraces",
      "Hands-on farming experience",
      "Traditional tools and equipment",
      "Local refreshments and snacks",
      "Transportation between locations",
      "Donation to local farming community",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "09:00 AM: Meet guide at Tegallalang Rice Terrace",
      "09:15 AM: Introduction to Balinese agriculture and the subak system",
      "10:00 AM: Guided walk through rice terraces with scenic viewpoints",
      "11:00 AM: Hands-on farming activities (planting or harvesting)",
      "12:30 PM: Visit a water temple to understand irrigation rituals",
      "01:30 PM: Visit a local farmer's home for refreshments",
      "02:30 PM: Return to starting point and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "What farming activities will we participate in?",
        answer:
          "The activities vary depending on the growing season. During planting season (typically January-February and August-September), you may help transplant rice seedlings into the flooded fields. During growing seasons, activities include field maintenance and water management. During harvest (typically May-June and December), you can try traditional hand-harvesting techniques. Regardless of season, our local farming partners ensure you have an authentic hands-on experience with traditional tools and methods.",
      },
      {
        question: "Will my clothes get muddy?",
        answer:
          "Yes, particularly if you participate fully in the farming activities! We recommend wearing clothes you don't mind getting wet or muddy. We provide traditional farmer hats and can loan rubber boots in standard sizes. Many guests choose to roll up their pants and go barefoot in the mud like local farmers. Bring a change of clothes if you prefer to be clean afterward, though we do have basic washing facilities available.",
      },
      {
        question: "What is the subak system?",
        answer:
          "The subak is a traditional Balinese cooperative irrigation system that dates back to the 9th century. It's not just a water management system but a social and spiritual practice that embodies the Balinese philosophy of Tri Hita Karana (harmony between humans, nature, and the divine). Each subak includes water temples where offerings ensure spiritual harmony alongside the physical infrastructure that distributes water equitably among farmers. This sophisticated system was recognized by UNESCO as a Cultural Landscape in 2012, acknowledging its cultural and ecological significance.",
      },
      {
        question: "Is this tour physically demanding?",
        answer:
          "The tour involves moderate physical activity including walking on narrow paths between rice fields, sometimes on muddy or slippery surfaces. The farming activities require bending and working with your hands. We pace the activities appropriately and you can choose your level of participation, but a reasonable level of fitness and mobility is recommended. The tour is not suitable for those with significant mobility limitations.",
      },
      {
        question: "How does this tour benefit the local community?",
        answer:
          "We partner directly with local farming families who receive fair compensation for sharing their knowledge and allowing access to their fields. A portion of each tour fee goes to maintaining traditional farming practices and supporting the local subak organization. Additionally, we purchase refreshments from local producers, creating broader economic benefits. This sustainable tourism approach helps preserve the rice terraces, which are increasingly threatened by development and changing agricultural practices.",
      },
    ],
  },
];

export default denpasarTours;
