import { Tour } from "@/lib/interfaces/services/tours";

export const blagajTours: Tour[] = [
  {
    title: "Blagaj Tekija & Buna River Spring Experience",
    description:
      "Explore the mystical Dervish monastery built into the dramatic cliff face at the source of the Buna River, one of Europe's most powerful springs, with exclusive access to normally restricted prayer rooms and meditation chambers.",
    images: [
      "/images/tours/blagaj/tekija-monastery.jpg",
      "/images/tours/blagaj/buna-spring.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Spiritual", "Nature", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Emir Hadžimuratović",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What is the significance of the Blagaj Tekija?",
        answer:
          "The Blagaj Tekija (Dervish House) represents a unique blend of Ottoman and Mediterranean architectural styles dating to the early 16th century. It served as a Sufi lodge for the Dervish order, who chose this location for its natural beauty and spiritual power. The monastery contains well-preserved living quarters, prayer rooms, and ceremonial spaces where Sufi rituals were performed. Beyond its religious significance, the site embodies the harmonious relationship between human spirituality and natural beauty that characterizes Bosnian Islamic traditions.",
      },
      {
        question: "Can we enter the prayer rooms and meditation chambers?",
        answer:
          "Yes, this tour includes exclusive access to areas of the Tekija that are not open to the general public, including the main prayer hall, private meditation chambers, and the serene courtyard overlooking the Buna River. Our guide will explain the significance of each space and its role in Sufi practices.",
      },
    ],
  },
  {
    title: "Traditional Bosnian Cuisine & Riverside Dining",
    description:
      "Experience authentic Herzegovinian gastronomy with a cooking demonstration using centuries-old recipes, followed by a sumptuous meal at a traditional restaurant perched directly above the turquoise Buna River.",
    images: [
      "/images/tours/blagaj/cooking-demonstration.jpg",
      "/images/tours/blagaj/riverside-restaurant.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Culinary", "Local Food", "Cooking"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Amra Begović",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes are featured in this culinary experience?",
        answer:
          "You'll learn about traditional Herzegovinian specialties including jagnjetina ispod sača (lamb cooked under a metal dome), klepe (minced meat dumplings), dolma (stuffed vegetables), and baklava. The cooking demonstration highlights how these dishes represent the fusion of Ottoman, Mediterranean, and Slavic influences that characterize Bosnian cuisine. Our meal features trout freshly caught from the Buna River, organic vegetables from local farms, and homemade bread baked in a traditional wood-fired oven. Vegetarian options are readily available with advance notice.",
      },
      {
        question: "Is the restaurant accessible for families with children?",
        answer:
          "Yes, the riverside restaurant is family-friendly with a spacious outdoor terrace overlooking the Buna River. It has high chairs available and a children's menu featuring local favorites like grilled fish, chicken skewers, and homemade pasta. The relaxed atmosphere allows children to enjoy the natural surroundings while parents savor their meals.",
      },
    ],
  },
  {
    title: "Blagaj Photography: Capturing Nature & Heritage",
    description:
      "Perfect your photography skills while capturing the stunning natural scenery and historical architecture of Blagaj. Learn composition techniques and optimal lighting strategies with guidance from a professional landscape photographer.",
    images: [
      "/images/tours/blagaj/photography-workshop.jpg",
      "/images/tours/blagaj/landscape-photography.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Photography", "Landscape", "Architecture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Mirza Hasanović",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What are the best features to photograph in Blagaj?",
        answer:
          "Blagaj offers exceptional photographic opportunities including the dramatic limestone cliff face where the Buna River emerges, the Ottoman architecture of the Tekija set against the rock wall, traditional stone houses along the riverbank, and the crystal-clear turquoise waters of the Buna itself. During different seasons, we focus on capturing morning mist over the water, wildflowers in spring, or autumn colors reflecting in the river. We visit several exclusive vantage points on private property that provide unique perspectives not available to regular tourists.",
      },
      {
        question: "Do I need professional photography equipment?",
        answer:
          "While a DSLR or mirrorless camera is recommended for optimal results, this workshop is suitable for all skill levels and equipment types. We provide guidance on using smartphones effectively for landscape photography as well. The focus is on composition, lighting, and storytelling rather than technical specifications, so you can participate with whatever camera you have.",
      },
    ],
  },
  {
    title: "Kayaking Adventure on the Buna River",
    description:
      "Paddle the crystal-clear waters of the emerald Buna River on a guided kayaking journey, exploring hidden caves, natural pools, and picturesque landscapes inaccessible by land, with a riverside picnic featuring local specialties.",
    images: [
      "/images/tours/blagaj/kayaking-buna.jpg",
      "/images/tours/blagaj/river-adventure.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Kayaking", "Adventure", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Adnan Kajtaz",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous kayaking experience?",
        answer:
          "No previous experience is necessary. The Buna River has gentle currents perfect for beginners, and we provide comprehensive instruction before departure. We use stable, easy-to-navigate sit-on-top kayaks suitable for novices, and our guides remain close by throughout the journey. The river's exceptional clarity (visibility up to 15 meters deep) and consistent temperature (approximately 11°C year-round, due to its underground spring source) create perfect conditions for a comfortable paddling experience. Swimming opportunities are available during warmer months.",
      },
      {
        question: "What should I bring for the kayaking tour?",
        answer:
          "Please wear comfortable, quick-drying clothing suitable for water activities. We recommend bringing a swimsuit, towel, sunscreen, a hat, and water shoes or sandals with straps. We provide all necessary kayaking gear including life jackets, paddles, and waterproof dry bags for personal items. A light riverside picnic lunch featuring local specialties is included in the tour.",
      },
    ],
  },
  {
    title: "Sunset Hike & Fortress Exploration",
    description:
      "Trek the historic hillside paths to the medieval Stjepan Grad fortress ruins overlooking Blagaj, learning about the region's rich history from Roman times through the Ottoman period, culminating with spectacular sunset views over the Buna valley.",
    images: [
      "/images/tours/blagaj/fortress-ruins.jpg",
      "/images/tours/blagaj/sunset-view.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.6,
    tags: ["Hiking", "Sunset", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Haris Ibrahimović",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How difficult is the hike to the fortress?",
        answer:
          "The hike covers approximately 3km round trip with a moderate elevation gain of about 200 meters. The trail follows historic pathways that wind gradually uphill, with some steeper sections and uneven terrain near the fortress ruins. Most reasonably fit participants complete the ascent in 45-60 minutes at a comfortable pace with rest stops. We time our arrival at the summit for approximately 30 minutes before sunset, allowing plenty of time to explore the fortress ruins and find an optimal viewing spot before the evening light show begins over the valley.",
      },
      {
        question: "What should I wear for the hike?",
        answer:
          "We recommend wearing comfortable hiking shoes or sturdy sneakers with good grip, as the trail can be rocky and uneven in places. Dress in layers suitable for warm weather, as temperatures can drop significantly after sunset. A light jacket or sweater is advisable, along with a hat and sunscreen. We provide bottled water and light snacks to keep you energized during the hike.",
      },
    ],
  },
];

export default blagajTours;
