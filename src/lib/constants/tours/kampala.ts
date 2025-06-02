import { Tour } from "@/lib/interfaces/services/tours";
export const kampalaTours: Tour[] = [
  {
    title: "Kampala Cultural Mosaic Walking Tour",
    description:
      "Explore Kampala's rich multicultural heritage on foot, visiting diverse places of worship including the Gaddafi National Mosque, Baha'i Temple, and Namirembe Cathedral. Learn how different religions peacefully coexist while contributing to Uganda's cultural fabric.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    images: [
      "/images/tours/kampala/gaddafi-mosque.jpg",
      "/images/tours/kampala/bahai-temple.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cultural", "Religious", "Walking Tour"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isCulinary: false,
    isSpiritual: true,
    isAdventure: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    meetingPoint: {
      address: "Kampala City Centre, near the Uganda Museum",
      coordinates: {
        latitude: 0.347596,
        longitude: 32.58252,
      },
      instructions:
        "Meet your guide at the entrance of the Uganda Museum. Look for a guide holding a sign that says 'Kampala Cultural Mosaic'.",
      contactNumber: "+256 700 123456",
    },
    inclusions: [
      "Expert local guide",
      "Visits to Gaddafi National Mosque, Baha'i Temple, Namirembe Cathedral, and other key sites",
      "Cultural insights and stories about religious coexistence",
      "Bottled water",
      "Light snacks at a local café",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Lunch (can be arranged at an additional cost)",
      "Personal expenses (souvenirs, etc.)",
    ],
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear for visiting religious sites?",
        answer:
          "Modest dress is required when visiting places of worship. For both men and women, shoulders and knees should be covered. Women will need to cover their hair when visiting the mosque (scarves are provided). Comfortable walking shoes are recommended as the tour involves moderate walking, including some hills and stairs at various sites.",
      },
      {
        question: "Are there any entry fees for the religious sites?",
        answer:
          "Most sites do not charge an entry fee, but donations are appreciated to support their upkeep. The Gaddafi Mosque has a small fee for guided tours, which is included in the tour price. Our guide will ensure all necessary fees are covered.",
      },
    ],
  },
  {
    title: "Flavors of Uganda: Street Food & Market Adventure",
    description:
      "Discover Uganda's diverse culinary traditions through its vibrant street food scene. Sample delicacies like rolex (egg roll), matooke, fresh tropical fruits, and local coffee while exploring colorful markets and meeting the passionate vendors behind the food.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    images: [
      "/images/tours/kampala/street-food.jpg",
      "/images/tours/kampala/owino-market.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Food", "Markets", "Local Experience"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isCulinary: true,
    isSpiritual: false,
    isAdventure: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    meetingPoint: {
      address: "Owino Market, near the main entrance",
      coordinates: {
        latitude: 0.315555,
        longitude: 32.581111,
      },
      instructions:
        "Meet your guide at the main entrance of Owino Market. Look for a guide holding a sign that says 'Flavors of Uganda'.",
      contactNumber: "+256 700 654321",
    },
    inclusions: [
      "Expert local food guide",
      "Street food samples from various vendors",
      "Visit to Owino Market and other local markets",
      "Cultural insights into Ugandan food traditions",
      "Bottled water",
      "Hand sanitizer",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Additional food or drinks beyond samples",
      "Personal expenses (souvenirs, etc.)",
    ],
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the street food safe to eat?",
        answer:
          "We carefully select vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the safest and most delicious street food options frequented by locals rather than tourists. All food is freshly prepared, often right before your eyes. We provide hand sanitizer throughout the tour and can accommodate dietary restrictions with advance notice.",
      },
      {
        question: "Will we have a chance to try cooking some dishes?",
        answer:
          "Yes, we include a hands-on cooking demonstration at a local home or community center where you can learn to make a traditional Ugandan dish like posho or groundnut stew. This interactive experience allows you to connect with local culinary traditions and take home new skills.",
      },
    ],
  },
  {
    title: "Boda-Boda City Tour: Kampala by Motorcycle",
    description:
      "Experience Kampala like a local on the back of a boda-boda (motorcycle taxi), the city's most popular form of transportation. Zip through bustling streets, hidden neighborhoods, and scenic viewpoints with experienced drivers and knowledgeable guides.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    images: [
      "/images/tours/kampala/boda-boda.jpg",
      "/images/tours/kampala/city-overlook.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Adventure", "City Tour", "Local Experience"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isCulinary: false,
    isSpiritual: false,
    isAdventure: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    meetingPoint: {
      address: "Kampala City Centre, near the Old Taxi Park",
      coordinates: {
        latitude: 0.315555,
        longitude: 32.581111,
      },
      instructions:
        "Meet your guide at the entrance of the Old Taxi Park. Look for a guide holding a sign that says 'Boda-Boda City Tour'.",
      contactNumber: "+256 700 789012",
    },
    inclusions: [
      "Experienced boda-boda driver and guide",
      "High-quality helmets and safety gear",
      "Visit to key city landmarks and hidden gems",
      "Scenic viewpoints and photo opportunities",
      "Bottled water",
      "Insurance coverage during the ride",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Personal expenses (souvenirs, etc.)",
      "Tips for drivers (optional but appreciated)",
    ],
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is riding a boda-boda safe?",
        answer:
          "We prioritize safety with specially selected and trained drivers who have excellent safety records. Unlike typical boda-bodas, our drivers provide high-quality helmets, follow traffic rules, drive at moderate speeds, and have undergone defensive driving training. Our routes avoid the busiest roads when possible. This experience gives you the excitement of this quintessential Kampala transport method while minimizing risks.",
      },
      {
        question: "What should I wear for the boda-boda tour?",
        answer:
          "Comfortable clothing suitable for warm weather is recommended. We provide helmets, but you may want to wear a bandana or scarf to protect your hair from dust. Closed-toe shoes are advisable, and we recommend avoiding long skirts or dresses for ease of movement on the motorcycle.",
      },
    ],
  },
  {
    title: "Uganda Martyrs Trail & Religious Heritage",
    description:
      "Trace the powerful story of the Uganda Martyrs with visits to Namugongo Martyrs Shrine, Munyonyo Martyrs Shrine, and Rubaga Cathedral. Learn about these 19th-century Christian converts who died for their faith and their enduring impact on Ugandan society.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    images: [
      "/images/tours/kampala/namugongo-shrine.jpg",
      "/images/tours/kampala/rubaga-cathedral.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Religious", "Historical", "Pilgrimage"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isCulinary: false,
    isSpiritual: true,
    isAdventure: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    meetingPoint: {
      address: "Namugongo Martyrs Shrine, near Kampala",
      coordinates: {
        latitude: 0.35,
        longitude: 32.6,
      },
      instructions:
        "Meet your guide at the main entrance of Namugongo Martyrs Shrine. Look for a guide holding a sign that says 'Uganda Martyrs Trail'.",
      contactNumber: "+256 700 345678",
    },
    inclusions: [
      "Expert local guide",
      "Visits to Namugongo Martyrs Shrine, Munyonyo Martyrs Shrine, and Rubaga Cathedral",
      "Cultural insights into the Uganda Martyrs' story",
      "Bottled water",
      "Light lunch at a local restaurant",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Personal expenses (souvenirs, etc.)",
    ],
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Do I need to be religious to appreciate this tour?",
        answer:
          "While this tour visits sites of religious significance, it's designed to be accessible and meaningful for people of all faiths and backgrounds. The historical importance of these sites and their role in shaping Ugandan identity transcends religious boundaries. Our guide presents the information from both spiritual and historical-cultural perspectives, allowing each visitor to connect with the story in their own way.",
      },
    ],
  },
  {
    title: "Royal Kampala: Buganda Kingdom & Kasubi Tombs",
    description:
      "Delve into Uganda's most powerful traditional kingdom with visits to the Buganda Parliament (Lukiiko), Kabaka's Palace, and UNESCO-listed Kasubi Tombs. Learn about traditional governance systems that continue to shape modern Ugandan society.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    tourCategoryId: "historical",
    images: [
      "/images/tours/kampala/kasubi-tombs.jpg",
      "/images/tours/kampala/buganda-parliament.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Cultural", "Historical"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isCulinary: false,
    isSpiritual: false,
    isAdventure: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    meetingPoint: {
      address: "Kasubi Tombs, near Kampala",
      coordinates: {
        latitude: 0.35,
        longitude: 32.6,
      },
      instructions:
        "Meet your guide at the main entrance of the Kasubi Tombs. Look for a guide holding a sign that says 'Royal Kampala Tour'.",
      contactNumber: "+256 700 456789",
    },
    inclusions: [
      "Expert local guide with knowledge of Buganda history",
      "Visits to Buganda Parliament, Kabaka's Palace, and Kasubi Tombs",
      "Cultural insights into Buganda traditions and governance",
      "Bottled water",
      "Light refreshments at a local café",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Personal expenses (souvenirs, etc.)",
    ],
    cancellationPolicy:
      "Free cancellation up to 24 hours before the tour starts. Cancellations made less than 24 hours in advance will incur a 50% charge.",
    faqs: [
      {
        question: "What is the significance of the Kasubi Tombs?",
        answer:
          "The Kasubi Tombs, a UNESCO World Heritage Site, are the burial grounds of four Buganda kings (Kabakas) and represent the spiritual center of the Buganda Kingdom. The main tomb building, called Muzibu-Azaala-Mpanga, is a masterpiece of traditional architecture built entirely of organic materials. Beyond its role as a royal burial site, it's an active religious place where rituals are performed and a vital place for preserving Ganda traditions, craftsmanship, and spiritual practices.",
      },
      {
        question: "Can we take photos inside the tombs?",
        answer:
          "Photography is not allowed inside the tombs out of respect for the sacred nature of the site. However, you can take photos in the surrounding areas, including the beautiful gardens and traditional structures. Our guide will provide insights into the significance of each area and its role in Buganda culture.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and suitable for children. The guide provides engaging stories and activities to help younger visitors understand the cultural significance of the sites. However, parents should be aware that some historical topics may be complex, so we recommend this tour for children aged 8 and up.",
      },
      {
        question: "Will we have a chance to meet any local leaders or royals?",
        answer:
          "While we cannot guarantee meetings with high-ranking officials or royals, our guide has strong connections within the Buganda Kingdom and may arrange for a brief audience or Q&A session with local leaders if possible. This depends on their availability and schedule on the day of your visit.",
      },
      {
        question: "What languages are spoken during the tour?",
        answer:
          "The tour is conducted in English, but our guide can also provide explanations in Luganda, the local language of the Buganda Kingdom, to enhance your understanding of cultural nuances and traditional practices.",
      },
      {
        question: "Is this tour wheelchair accessible?",
        answer:
          "Unfortunately, the Kasubi Tombs and some areas of the Buganda Parliament have uneven terrain and steps, making them challenging for wheelchair users. However, we can modify the tour to focus on accessible areas and provide alternative cultural experiences that are more suitable for those with mobility challenges.",
      },
      {
        question: "Can we purchase traditional Buganda crafts during the tour?",
        answer:
          "Yes, we often include a visit to local craft markets or workshops where you can purchase authentic Buganda crafts such as bark cloth, traditional jewelry, and woven baskets. This supports local artisans and allows you to take home unique souvenirs with cultural significance.",
      },
      {
        question: "What is the best time of year to take this tour?",
        answer:
          "The tour can be enjoyed year-round, but the dry season (December to February and June to August) offers the most comfortable weather for walking tours. However, we operate in all seasons, and our guides are experienced in adapting the itinerary based on current conditions to ensure a pleasant experience.",
      },
    ],
  },
  {
    title: "Crafts & Artisans: Ugandan Art Experience",
    description:
      "Discover Uganda's vibrant arts scene through visits to community craft workshops, artist studios, and social enterprise initiatives. Meet skilled artisans creating batik textiles, handwoven baskets, recycled paper beads, and contemporary art with cultural significance.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    images: [
      "/images/tours/kampala/craft-workshop.jpg",
      "/images/tours/kampala/basket-weaving.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Crafts", "Art", "Cultural"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Will we have opportunities to purchase crafts directly from artisans?",
        answer:
          "Yes, you'll have the opportunity to purchase directly from the artisans you meet, ensuring they receive fair compensation for their work. This direct exchange also allows you to learn the story behind each piece and sometimes even customize items. Many of the workshops we visit are social enterprises that provide sustainable income and skills training for women, people with disabilities, or youth from disadvantaged backgrounds, so your purchases directly support community development initiatives.",
      },
      {
        question: "Can we try our hand at any of the crafts?",
        answer:
          "Absolutely! Many workshops include hands-on activities where you can learn basic techniques in crafts like basket weaving, batik painting, or bead making. These interactive experiences allow you to connect with the artisans and gain a deeper appreciation for their skills. No prior experience is needed, and all materials are provided.",
      },
    ],
  },
  {
    title: "Kampala's Hidden Gems: Off-the-Beaten-Path Tour",
    description:
      "Explore lesser-known neighborhoods and attractions in Kampala, from vibrant local markets to scenic parks and community art projects. Experience the city's authentic daily life away from typical tourist spots.",
    city: "Kampala",
    country: "Uganda",
    region: "Central Region",
    images: [
      "/images/tours/kampala/local-market.jpg",
      "/images/tours/kampala/community-art.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Off the Beaten Path", "Local Culture", "Hidden Gems"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What types of places will we visit on this tour?",
        answer:
          "The tour includes visits to vibrant local markets, community art projects, scenic parks, and lesser-known cultural sites that showcase everyday life in Kampala. You'll experience the city's authentic atmosphere and meet local residents who share their stories and traditions.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages. Our guide provides interactive activities and stories that make the experience enjoyable for children while introducing them to local culture in a fun way.",
      },
      {
        question: "Will we have opportunities to try local food?",
        answer:
          "Yes, the tour includes stops at local eateries where you can sample traditional Ugandan dishes like luwombo (stew), posho (maize porridge), and fresh tropical fruits. We ensure that all food vendors follow hygiene standards for a safe culinary experience.",
      },
    ],
  },
];
export default kampalaTours;
