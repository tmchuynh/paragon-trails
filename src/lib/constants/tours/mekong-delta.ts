import { Tour } from "@/lib/interfaces/services/tours";

export const mekongDeltaTours: Tour[] = [
  {
    title: "Floating Markets & Waterways Exploration",
    description:
      "Experience the authentic river life of the Mekong Delta by visiting vibrant floating markets where farmers trade produce from boat to boat. Navigate narrow canals, witness traditional commerce unchanged for centuries, and interact with welcoming local merchants.",
    images: [
      "/images/tours/mekong-delta/cai-rang-market.jpg",
      "/images/tours/mekong-delta/boat-vendors.jpg",
    ],
    duration: "Full day",
    price: "$75",
    rating: 4.8,
    tags: ["Markets", "River Life", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nguyen Thi Hoa",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When is the best time to visit the floating markets?",
        answer:
          "The markets are most active in the early morning, typically between 5:30-9:00 AM when local farmers bring fresh produce to trade. We depart pre-dawn to arrive when activity is at its peak. By mid-morning, much of the wholesale trading concludes, though some vendors remain. For photographers, the early morning light creates magical conditions with misty waterways and golden light illuminating the colorful boats.",
      },
    ],
  },
  {
    title: "Mekong Delta Homestay & Village Life",
    description:
      "Immerse yourself in authentic Delta life with an overnight stay in a family home along the river. Join in daily activities like fishing, cooking, and gardening while learning about generations of river traditions firsthand from your welcoming host family.",
    images: [
      "/images/tours/mekong-delta/homestay-house.jpg",
      "/images/tours/mekong-delta/village-life.jpg",
    ],
    duration: "2 days",
    price: "$95",
    rating: 4.9,
    tags: ["Homestay", "Local Life", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Local Host Family",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "What are the accommodations like?",
        answer:
          "The homestays feature private rooms in traditional wooden houses with mosquito nets, fans, and simple but clean facilities. Bathrooms typically have Western toilets and shower facilities, though some are shared with the family. While not luxurious, the accommodations are comfortable, authentic, and carefully selected for cleanliness and hospitality. Meals are shared family-style, offering a wonderful opportunity to connect across cultures through the universal language of food.",
      },
    ],
  },
  {
    title: "Mekong Cuisine: Cooking Class & Orchard Tour",
    description:
      "Discover the distinctive flavors of Mekong Delta cuisine through a hands-on cooking class. Visit tropical fruit orchards, learn about unusual ingredients, and prepare regional specialties like caramelized fish in clay pot, rice paper rolls, and coconut candy.",
    images: [
      "/images/tours/mekong-delta/cooking-class.jpg",
      "/images/tours/mekong-delta/fruit-orchard.jpg",
    ],
    duration: "7 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Cooking", "Food", "Agriculture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Tran Van Minh",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The cooking class typically includes 4-5 authentic Mekong Delta dishes: caramelized fish in clay pot (cá kho tộ), fresh spring rolls with herbs and river shrimp (gỏi cuốn), elephant ear fish with rice paper (cá tai tượng), green mango salad (gỏi xoài), and coconut-based desserts. Vegetarian options are available. All recipes use fresh ingredients sourced that morning from floating markets or the host family's garden, and recipe cards are provided so you can recreate these dishes at home.",
      },
    ],
  },
  {
    title: "Paddle Through Mangrove Forests & Hidden Canals",
    description:
      "Navigate the Mekong's less-visited waterways by sampan or kayak, gliding through tranquil water coconut forests and narrow canals that larger boats can't access. Spot diverse birds, monitor lizards, and traditional riverside homes while experiencing the delta's natural beauty.",
    images: [
      "/images/tours/mekong-delta/mangrove-kayaking.jpg",
      "/images/tours/mekong-delta/narrow-canals.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Kayaking", "Nature", "Ecotour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Nam Tran",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need kayaking experience?",
        answer:
          "No prior experience is necessary. We use stable, traditional sampan boats with a guide who does the paddling, or for the more adventurous, two-person sit-on-top kayaks which are very stable and easy to maneuver in the calm waters. The canals and tributaries we explore have minimal current and are sheltered, making this suitable for beginners. Life jackets and basic paddling instruction are provided for those choosing to kayak.",
      },
    ],
  },
  {
    title: "Bicycle Tour: Island Villages & Orchards",
    description:
      "Explore the peaceful back roads of Mekong Delta islands by bicycle, pedaling past rice fields, fruit orchards, and rural villages. Stop to interact with farmers, visit cottage industries, and enjoy fresh tropical fruits straight from the orchard.",
    images: [
      "/images/tours/mekong-delta/cycling-rice-fields.jpg",
      "/images/tours/mekong-delta/village-cycling.jpg",
    ],
    duration: "6 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Cycling", "Rural", "Agriculture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Thanh Nguyen",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How difficult is the cycling route?",
        answer:
          "The route is primarily flat and easy, covering approximately 15-20 km (9-12 miles) at a leisurely pace with frequent stops. We use comfortable bikes with basic gearing suitable for the terrain, and the paths are mostly concrete or packed dirt roads through villages and along canals. The biggest challenge can be the tropical heat rather than the terrain, so we start early and provide plenty of water and shade breaks. Alternative transportation can be arranged for portions of the journey if needed.",
      },
    ],
  },
  {
    title: "Mekong Delta Photography Expedition",
    description:
      "Capture the photogenic essence of the Mekong Delta with a professional photographer guiding you to optimal shooting locations and helping perfect your technique. Focus on floating markets at dawn, daily river life, and stunning sunset scenes over the waterways.",
    images: [
      "/images/tours/mekong-delta/photography-workshop.jpg",
      "/images/tours/mekong-delta/river-sunset-photo.jpg",
    ],
    duration: "2 days",
    price: "$195",
    rating: 4.7,
    tags: ["Photography", "Culture", "Landscapes"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Minh Quan, Professional Photographer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour accommodates all skill levels from smartphone photographers to professional DSLR users. Our guide provides personalized instruction based on your equipment and experience. Beginners will learn composition techniques and basic settings, while advanced photographers can focus on challenging lighting conditions, long exposures, and environmental portraiture. The small group size (maximum 6 photographers) ensures individual attention regardless of your level.",
      },
    ],
  },
  {
    title: "Mekong River Sunset Cruise & Dinner",
    description:
      "Cruise the majestic waters of the Mekong at the most enchanting time of day, when the setting sun bathes the river in golden light. Enjoy a gourmet Vietnamese dinner aboard a traditional wooden boat while watching river life unfold along the banks.",
    images: [
      "/images/tours/mekong-delta/sunset-cruise.jpg",
      "/images/tours/mekong-delta/river-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Sunset", "Cruise", "Dining"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Huy Nguyen",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What kind of food is served during the dinner cruise?",
        answer:
          "The dinner features a multi-course Vietnamese meal highlighting fresh Mekong Delta specialties. Typical dishes include elephant ear fish with rice paper, river prawns grilled with salt and chili, caramelized pork in clay pot, seasonal vegetable stir-fry, and fresh tropical fruits for dessert. Vegetarian options are available with advance notice. Beverages include local beer, wine, soft drinks, and filtered water. The food is prepared fresh onboard by our chef, using ingredients sourced from local markets that morning.",
      },
    ],
  },
  {
    title: "Traditional Crafts & Cottage Industries",
    description:
      "Discover the rich artisanal heritage of the Mekong Delta by visiting family workshops that produce coconut candy, rice paper, pottery, and woven mats using techniques passed down through generations. Try your hand at each craft with guidance from master artisans.",
    images: [
      "/images/tours/mekong-delta/coconut-candy-making.jpg",
      "/images/tours/mekong-delta/traditional-crafts.jpg",
    ],
    duration: "7 hours",
    price: "$60",
    rating: 4.6,
    tags: ["Crafts", "Cultural", "Hands-on"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mrs. Huong Tran",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we get to participate in making crafts?",
        answer:
          "Yes, this is an interactive experience where you'll have hands-on opportunities at each workshop. You'll try making rice paper on a traditional cloth-covered steamer, hand-rolling coconut candy, weaving simple patterns with water hyacinth, and throwing a clay pot on a potter's wheel. While mastering these crafts takes years, the artisans are skilled at guiding beginners to create simple pieces and understand the processes. You'll take home samples of your work as unique souvenirs of your visit.",
      },
    ],
  },
];

export default mekongDeltaTours;
