import { Tour } from "@/lib/interfaces/services/tours";

export const mekongDeltaTours: Tour[] = [
  {
    title: "Floating Markets & Waterways Exploration",
    description:
      "Experience the authentic river life of the Mekong Delta by visiting vibrant floating markets where farmers trade produce from boat to boat. Navigate narrow canals, witness traditional commerce unchanged for centuries, and interact with welcoming local merchants.",
    city: "Can Tho",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/cai-rang-market.jpg",
      "/images/tours/mekong-delta/boat-vendors.jpg",
    ],
    duration: "10 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Markets", "River Life", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When is the best time to visit the floating markets?",
        answer:
          "The markets are most active in the early morning, typically between 5:30-9:00 AM when local farmers bring fresh produce to trade. We depart pre-dawn to arrive when activity is at its peak. By mid-morning, much of the wholesale trading concludes, though some vendors remain. For photographers, the early morning light creates magical conditions with misty waterways and golden light illuminating the colorful boats.",
      },
      {
        question: "What should I wear for the boat tour?",
        answer:
          "Wear comfortable, lightweight clothing suitable for warm weather. Closed-toe shoes that can get wet are recommended, as you may need to step into shallow water at some stops. A hat and sunscreen are also advisable, as the sun can be strong on the water.",
      },
    ],
  },
  {
    title: "Mekong Cuisine: Cooking Class & Orchard Tour",
    description:
      "Discover the distinctive flavors of Mekong Delta cuisine through a hands-on cooking class. Visit tropical fruit orchards, learn about unusual ingredients, and prepare regional specialties like caramelized fish in clay pot, rice paper rolls, and coconut candy.",
    city: "Vinh Long",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/cooking-class.jpg",
      "/images/tours/mekong-delta/fruit-orchard.jpg",
    ],
    duration: "7 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Cooking", "Food", "Agriculture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The cooking class typically includes 4-5 authentic Mekong Delta dishes: caramelized fish in clay pot (cá kho tộ), fresh spring rolls with herbs and river shrimp (gỏi cuốn), elephant ear fish with rice paper (cá tai tượng), green mango salad (gỏi xoài), and coconut-based desserts. Vegetarian options are available. All recipes use fresh ingredients sourced that morning from floating markets or the host family's garden, and recipe cards are provided so you can recreate these dishes at home.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is necessary. The class is designed for all skill levels, from beginners to experienced cooks. Chef Minh provides step-by-step instructions and personalized guidance, ensuring everyone can participate and learn. The focus is on traditional techniques and flavors, making it accessible and enjoyable for everyone.",
      },
    ],
  },
  {
    title: "Paddle Through Mangrove Forests & Hidden Canals",
    description:
      "Navigate the Mekong's less-visited waterways by sampan or kayak, gliding through tranquil water coconut forests and narrow canals that larger boats can't access. Spot diverse birds, monitor lizards, and traditional riverside homes while experiencing the delta's natural beauty.",
    city: "Ben Tre",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/mangrove-kayaking.jpg",
      "/images/tours/mekong-delta/narrow-canals.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Kayaking", "Nature", "Ecotour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need kayaking experience?",
        answer:
          "No prior experience is necessary. We use stable, traditional sampan boats with a guide who does the paddling, or for the more adventurous, two-person sit-on-top kayaks which are very stable and easy to maneuver in the calm waters. The canals and tributaries we explore have minimal current and are sheltered, making this suitable for beginners. Life jackets and basic paddling instruction are provided for those choosing to kayak.",
      },
      {
        question: "What wildlife can we expect to see?",
        answer:
          "The mangrove forests and waterways are home to a variety of bird species, including kingfishers, herons, and egrets. You may also spot monitor lizards sunning themselves on the banks, as well as various fish species in the clear waters. The delta's biodiversity is rich, and our guides are skilled at pointing out interesting flora and fauna along the way.",
      },
    ],
  },
  {
    title: "Bicycle Tour: Island Villages & Orchards",
    description:
      "Explore the peaceful back roads of Mekong Delta islands by bicycle, pedaling past rice fields, fruit orchards, and rural villages. Stop to interact with farmers, visit cottage industries, and enjoy fresh tropical fruits straight from the orchard.",
    city: "Tra Vinh",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/cycling-rice-fields.jpg",
      "/images/tours/mekong-delta/village-cycling.jpg",
    ],
    duration: "6 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Cycling", "Rural", "Agriculture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How difficult is the cycling route?",
        answer:
          "The route is primarily flat and easy, covering approximately 15-20 km (9-12 miles) at a leisurely pace with frequent stops. We use comfortable bikes with basic gearing suitable for the terrain, and the paths are mostly concrete or packed dirt roads through villages and along canals. The biggest challenge can be the tropical heat rather than the terrain, so we start early and provide plenty of water and shade breaks. Alternative transportation can be arranged for portions of the journey if needed.",
      },
      {
        question: "What kind of bikes are provided?",
        answer:
          "We provide high-quality, well-maintained mountain bikes with comfortable seats and adjustable handlebars. Helmets are included, and we ensure the bikes are the right size for each participant. For families with young children, we can provide child seats or tandem bikes upon request. The bikes are suitable for both paved roads and packed dirt paths commonly found in the delta.",
      },
    ],
  },
  {
    title: "Mekong Delta Photography Expedition",
    description:
      "Capture the photogenic essence of the Mekong Delta with a professional photographer guiding you to optimal shooting locations and helping perfect your technique. Focus on floating markets at dawn, daily river life, and stunning sunset scenes over the waterways.",
    city: "Can Tho",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/photography-workshop.jpg",
      "/images/tours/mekong-delta/river-sunset-photo.jpg",
    ],
    duration: "4 hours",
    price: "$195",
    rating: 4.7,
    tags: ["Photography", "Culture", "Landscapes"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour accommodates all skill levels from smartphone photographers to professional DSLR users. Our guide provides personalized instruction based on your equipment and experience. Beginners will learn composition techniques and basic settings, while advanced photographers can focus on challenging lighting conditions, long exposures, and environmental portraiture. The small group size (maximum 6 photographers) ensures individual attention regardless of your level.",
      },
      {
        question: "What equipment should I bring?",
        answer:
          "Bring your camera (DSLR, mirrorless, or high-end smartphone), extra batteries, and memory cards. A tripod is recommended for low-light photography, especially during sunrise and sunset shoots. If you have specific lenses (wide-angle, telephoto), feel free to bring those as well. We also provide a limited number of tripods for those who need them. Don't forget comfortable walking shoes and weather-appropriate clothing, as we will be outdoors for extended periods.",
      },
    ],
  },
  {
    title: "Mekong River Sunset Cruise & Dinner",
    description:
      "Cruise the majestic waters of the Mekong at the most enchanting time of day, when the setting sun bathes the river in golden light. Enjoy a gourmet Vietnamese dinner aboard a traditional wooden boat while watching river life unfold along the banks.",
    city: "Can Tho",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/sunset-cruise.jpg",
      "/images/tours/mekong-delta/river-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Sunset", "Cruise", "Dining"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What kind of food is served during the dinner cruise?",
        answer:
          "The dinner features a multi-course Vietnamese meal highlighting fresh Mekong Delta specialties. Typical dishes include elephant ear fish with rice paper, river prawns grilled with salt and chili, caramelized pork in clay pot, seasonal vegetable stir-fry, and fresh tropical fruits for dessert. Vegetarian options are available with advance notice. Beverages include local beer, wine, soft drinks, and filtered water. The food is prepared fresh onboard by our chef, using ingredients sourced from local markets that morning.",
      },
      {
        question: "Is the cruise suitable for children?",
        answer:
          "Yes, the cruise is family-friendly and suitable for children of all ages. The boat is stable and safe, with plenty of space for kids to move around. We can accommodate children's dietary preferences, and the relaxed atmosphere makes it a great way for families to enjoy the Mekong Delta together.",
      },
    ],
  },
  {
    title: "Traditional Crafts & Cottage Industries",
    description:
      "Discover the rich artisanal heritage of the Mekong Delta by visiting family workshops that produce coconut candy, rice paper, pottery, and woven mats using techniques passed down through generations. Try your hand at each craft with guidance from master artisans.",
    city: "Ben Tre",
    country: "Vietnam",
    region: "Mekong Delta",
    images: [
      "/images/tours/mekong-delta/coconut-candy-making.jpg",
      "/images/tours/mekong-delta/traditional-crafts.jpg",
    ],
    duration: "7 hours",
    price: "$60",
    rating: 4.6,
    tags: ["Crafts", "Cultural", "Hands-on"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we get to participate in making crafts?",
        answer:
          "Yes, this is an interactive experience where you'll have hands-on opportunities at each workshop. You'll try making rice paper on a traditional cloth-covered steamer, hand-rolling coconut candy, weaving simple patterns with water hyacinth, and throwing a clay pot on a potter's wheel. While mastering these crafts takes years, the artisans are skilled at guiding beginners to create simple pieces and understand the processes. You'll take home samples of your work as unique souvenirs of your visit.",
      },
      {
        question: "Are the workshops suitable for children?",
        answer:
          "Yes, the workshops are family-friendly and designed to engage participants of all ages. Children will enjoy the hands-on activities and learning about traditional crafts. The artisans are experienced in working with kids and can adapt activities to be age-appropriate, ensuring everyone has a fun and educational experience.",
      },
    ],
  },
];

export default mekongDeltaTours;
