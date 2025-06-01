import { Tour } from "@/lib/interfaces/services/tours";

export const panautiTours: Tour[] = [
  {
    title: "Ancient Temples & Living Heritage Walk",
    description:
      "Discover Panauti's remarkable collection of 13th-century temples and historic architecture on a guided walk through this living museum. Learn about the unique cultural practices still observed in this ancient Newari town that remains largely untouched by modern tourism.",
    images: [
      "/images/tours/panauti/indreshwar-temple.jpg",
      "/images/tours/panauti/street-architecture.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Cultural", "Architecture", "Religious"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question:
          "What makes Panauti's temples special compared to others in Nepal?",
        answer:
          "Panauti's temples represent some of the finest examples of Newari architecture and have survived intact for centuries, partly because the town was never conquered by invading forces. The Indreshwar Mahadev Temple is Nepal's oldest surviving pagoda structure, dating to 1294 AD. Unlike temples in more touristed areas, Panauti's religious sites remain centers of authentic daily worship rather than primarily tourist attractions, allowing visitors to witness living religious traditions.",
      },
      {
        question: "Are there any dress codes for visiting the temples?",
        answer:
          "Yes, visitors should dress modestly when entering temples. This typically means covering shoulders and knees. Comfortable walking shoes are recommended as some temple areas have uneven surfaces. Our guide will provide a scarf or shawl if needed, and we can also recommend appropriate attire before the tour.",
      },
    ],
  },
  {
    title: "Sacred Confluence Trek & Meditation",
    description:
      "Hike to the sacred confluence of three rivers believed to have special spiritual powers. Learn about Hindu and Buddhist beliefs surrounding this mystical site, participate in a guided meditation session, and witness evening aarti (prayer) ceremonies by the riverside.",
    images: [
      "/images/tours/panauti/river-confluence.jpg",
      "/images/tours/panauti/riverside-meditation.jpg",
    ],
    duration: "5 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Spiritual", "Hiking", "Meditation"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "How difficult is the hiking portion of this tour?",
        answer:
          "The hike is relatively easy and suitable for most fitness levels, covering approximately 3 kilometers round-trip with gentle elevation changes. We walk at a comfortable pace with plenty of stops for explanations about the natural environment and spiritual significance of different sites. The trail follows the riverside with some uneven terrain, so comfortable walking shoes are recommended, but no special hiking gear is needed.",
      },
      {
        question: "What should I bring for the meditation session?",
        answer:
          "We recommend bringing a small cushion or mat to sit on, as well as a water bottle and light snacks. Our guide will provide blankets for warmth during the meditation. If you have a favorite meditation shawl or scarf, feel free to bring it along. The session is designed to be accessible for all levels, so no prior meditation experience is necessary.",
      },
    ],
  },
  {
    title: "Newari Cooking Class & Market Experience",
    description:
      "Learn to prepare traditional Newari cuisine with a local family in their centuries-old home. Visit the local market to select fresh ingredients, master authentic cooking techniques, and enjoy the feast you've helped create while learning about the cultural significance of Newari food traditions.",
    images: [
      "/images/tours/panauti/cooking-class.jpg",
      "/images/tours/panauti/local-market.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cooking", "Culinary", "Market"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare a complete traditional Newari meal, which typically includes chatamari (rice flour crepes), bara (lentil patties), aloo tama bodi (potato, bamboo shoot, and black-eyed pea curry), and yomari (sweet rice flour dumplings) for dessert. Newari cuisine features unique cooking methods and distinctive spice combinations not found in standard Nepali food. Our cooking instructor will teach you authentic techniques while explaining the cultural and ceremonial significance of each dish.",
      },
      {
        question: "Do I need any prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! This class is designed for all skill levels, from complete beginners to experienced cooks. Our instructor will guide you through each step of the cooking process, ensuring you understand the techniques and ingredients used in Newari cuisine. You'll leave with new skills and recipes to recreate these dishes at home.",
      },
    ],
  },
  {
    title: "Panauti Photography Tour: Dawn Light & Ancient Architecture",
    description:
      "Capture the magical morning light illuminating Panauti's medieval architecture and daily life. Learn specialized photography techniques for temples, street scenes, and portraits while discovering hidden viewpoints and special access to normally restricted temple areas.",
    images: [
      "/images/tours/panauti/dawn-photography.jpg",
      "/images/tours/panauti/temple-detail-photo.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.6,
    tags: ["Photography", "Architecture", "Dawn"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What time does this tour start?",
        answer:
          "This tour starts approximately 45 minutes before sunrise, which varies seasonally. In winter months (November-February), this means around 5:45 AM, while summer months may require a 4:30 AM start. The early start is essential to capture the magical quality of light as it first illuminates the ancient temples and before the streets become busy. We'll confirm the exact pickup time when you book based on the sunrise time for your specific tour date.",
      },
      {
        question: "What photography equipment should I bring?",
        answer:
          "A DSLR or mirrorless camera with manual settings is recommended for the best results, but any camera that allows you to adjust exposure settings will work. Bring a tripod for stability in low light conditions, and consider lenses with wide apertures (f/2.8 or lower) for capturing details in the early morning light. Extra batteries and memory cards are also essential, as cold temperatures can drain batteries quickly. Our guide can provide additional tips on settings and composition during the tour.",
      },
    ],
  },
  {
    title: "Panauti to Namo Buddha Hiking Adventure",
    description:
      "Trek through terraced fields and traditional villages on this scenic hike from Panauti to the sacred Buddhist site of Namo Buddha, where Buddha (in a previous life) is said to have sacrificed himself to feed a starving tigress and her cubs.",
    images: [
      "/images/tours/panauti/namo-buddha-monastery.jpg",
      "/images/tours/panauti/rural-trek.jpg",
    ],
    duration: "Full day",
    price: "$70",
    rating: 4.7,
    tags: ["Hiking", "Buddhist", "Nature"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How challenging is this hike?",
        answer:
          "This is a moderate 12-kilometer hike with approximately 650 meters of elevation gain, usually taking 5-6 hours including stops. The trail follows established paths through villages and agricultural areas, with some uphill sections but no technical difficulty. Reasonably fit hikers of all ages can complete this trek, though some hiking experience is recommended. We maintain a comfortable pace with plenty of breaks to enjoy the scenery and learn about local life.",
      },
      {
        question: "What should I bring for the hike?",
        answer:
          "Wear comfortable hiking shoes and dress in layers, as temperatures can vary significantly throughout the day. Bring a refillable water bottle, sunscreen, a hat, and snacks. We recommend a small daypack to carry your essentials. Our guide will provide a packed lunch at Namo Buddha Monastery, where you can enjoy stunning views while you eat.",
      },
    ],
  },
];

export default panautiTours;
