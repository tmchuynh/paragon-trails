import { Tour } from "@/lib/interfaces/services/tours";

export const chefchaouenTours: Tour[] = [
  {
    title: "Blue City Walking Tour & Local Artisans",
    description:
      "Explore the enchanting blue streets of Chefchaouen with a local guide, discovering hidden corners, meeting artisans in their workshops, and learning the fascinating history behind the city's distinctive blue-washed buildings.",
    images: [
      "/images/tours/chefchaouen/blue-streets.jpg",
      "/images/tours/chefchaouen/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Culture", "Photography", "Artisans"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mohammed El Bakkali",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Why is Chefchaouen painted blue?",
        answer:
          "There are several theories about the origin of Chefchaouen's distinctive blue color. Some say it was introduced by Jewish refugees in the 1930s, as blue represents the sky and heaven in Jewish tradition. Others suggest the blue keeps mosquitos away or helps keep buildings cool. Our tour explores these theories and the cultural significance of the color, which continues to be maintained as part of the city's heritage and identity.",
      },
    ],
  },
  {
    title: "Rif Mountains Day Trek & Berber Villages",
    description:
      "Journey into the stunning Rif Mountains surrounding Chefchaouen, hiking through pine forests to traditional Berber villages where you'll enjoy home-cooked meals with local families and learn about their sustainable mountain lifestyle.",
    images: [
      "/images/tours/chefchaouen/rif-mountains.jpg",
      "/images/tours/chefchaouen/berber-village.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Hiking", "Nature", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ibrahim Ameziane",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hike?",
        answer:
          "This is a moderate trek covering approximately 8km with an elevation gain of about 400 meters. The pace is leisurely with plenty of stops at viewpoints and villages. Most reasonably fit people without serious health conditions can complete this trek comfortably. The trail follows mountain paths that can be uneven in places, so proper hiking shoes are recommended. We can adjust the route for different fitness levels with advance notice.",
      },
    ],
  },
  {
    title: "Chefchaouen Photography Masterclass",
    description:
      "Perfect your photography skills in one of the world's most photogenic cities with expert guidance on capturing Chefchaouen's unique blue palette, atmospheric light, and architectural details during optimal lighting conditions.",
    images: [
      "/images/tours/chefchaouen/photography-workshop.jpg",
      "/images/tours/chefchaouen/blue-doorways.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Photography", "Artistic", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Fatima Zohra",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is required?",
        answer:
          "Our photography workshop is designed for all skill levels from beginners to advanced photographers. We tailor instruction based on your equipment and experience level. Smartphone photographers will learn composition techniques and editing tips, while those with DSLRs or mirrorless cameras can explore more technical aspects like managing the challenging blue light conditions and capturing the subtleties of Chefchaouen's monochromatic palette.",
      },
    ],
  },
  {
    title: "Traditional Moroccan Cooking Class",
    description:
      "Learn the secrets of authentic Moroccan cuisine in a hands-on cooking class, beginning with a visit to the local market to select fresh ingredients followed by preparation of traditional dishes in a beautiful blue home kitchen.",
    images: [
      "/images/tours/chefchaouen/cooking-class.jpg",
      "/images/tours/chefchaouen/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Amina Haddou",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare a complete Moroccan meal including a traditional tagine (chicken with preserved lemons and olives or a vegetable version), Moroccan salads, fresh bread, and a dessert such as orange blossom-infused pastries. Our chef adapts recipes based on seasonal ingredients and dietary preferences. The focus is on authentic techniques unique to northern Moroccan cuisine that you can recreate at home.",
      },
    ],
  },
  {
    title: "Akchour Waterfalls & Paradise Valley",
    description:
      "Escape to the natural paradise of Akchour, just outside Chefchaouen, to hike alongside crystal-clear rivers, swim in natural pools beneath stunning waterfalls, and enjoy a picnic lunch in one of Morocco's most beautiful landscapes.",
    images: [
      "/images/tours/chefchaouen/akchour-waterfall.jpg",
      "/images/tours/chefchaouen/natural-bridge.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nature", "Hiking", "Swimming"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Youssef Mahjoub",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to visit Akchour?",
        answer:
          "Spring (April-May) and fall (September-October) offer ideal conditions with comfortable temperatures and good water levels in the rivers and waterfalls. Summer (June-August) can be very hot but perfect for swimming in the cool mountain water, though weekends get crowded with locals escaping the heat. Winter (December-February) offers the most solitude but cooler temperatures make swimming less appealing, and occasional rain can make paths slippery.",
      },
    ],
  },
  {
    title: "Sunset Rooftop Tour & Traditional Mint Tea",
    description:
      "Experience Chefchaouen's magical transformation at sunset from exclusive rooftop terraces normally closed to the public, enjoying traditional mint tea and Moroccan sweets as the call to prayer echoes through the blue city.",
    images: [
      "/images/tours/chefchaouen/rooftop-sunset.jpg",
      "/images/tours/chefchaouen/mint-tea-ceremony.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.9,
    tags: ["Sunset", "Rooftop", "Tea Ceremony"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nadia El Haddad",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Which rooftops do we visit?",
        answer:
          "We visit 3-4 different rooftop terraces across the medina, each offering unique perspectives of Chefchaouen and the surrounding mountains. These include a traditional guesthouse with views of the Grand Mosque, a family home overlooking the bustling Plaza Uta el-Hammam, and our final stop at a restored heritage building with panoramic vistas of the entire blue city against the dramatic backdrop of the Rif Mountains as the sun sets.",
      },
    ],
  },
];

export default chefchaouenTours;
