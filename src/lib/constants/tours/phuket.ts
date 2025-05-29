import { Tour } from "@/lib/interfaces/services/tours";

export const phuketTours: Tour[] = [
  {
    title: "Phi Phi Islands Speedboat Adventure",
    description:
      "Explore the stunning Phi Phi Islands aboard a private speedboat, visiting iconic locations including Maya Bay (The Beach filming location), Monkey Beach, and Viking Cave. Enjoy snorkeling among colorful coral reefs and a gourmet lunch on a secluded beach.",
    images: [
      "/images/tours/phuket/phi-phi-islands.jpg",
      "/images/tours/phuket/maya-bay.jpg",
    ],
    duration: "Full day",
    price: "$135",
    rating: 4.8,
    tags: ["Islands", "Speedboat", "Snorkeling"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Somchai",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this tour suitable for non-swimmers?",
        answer:
          "Yes, non-swimmers can still enjoy this tour. We provide life jackets for everyone, and our staff can assist those who aren't confident swimmers but still want to experience snorkeling. There are also beautiful viewpoints and beaches to enjoy if you prefer not to enter the water. Please inform our guides about any swimming concerns so they can provide appropriate assistance.",
      },
      {
        question: "What should I bring for the tour?",
        answer:
          "We recommend bringing sunscreen, a hat, swimwear, a towel, and a change of clothes. Snorkeling gear is provided, but you can bring your own if preferred. A waterproof bag for personal items is also useful.",
      },
    ],
  },
  {
    title: "Thai Cooking Masterclass & Market Tour",
    description:
      "Master the art of authentic Thai cuisine with a hands-on cooking class led by a professional chef. Begin with a guided tour of a local market to select fresh ingredients, then prepare classic dishes like Tom Yum soup, Pad Thai, and green curry in a beautiful open-air kitchen.",
    images: [
      "/images/tours/phuket/thai-cooking-class.jpg",
      "/images/tours/phuket/local-market.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cooking", "Culinary", "Market"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Nattaporn",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll prepare a complete Thai meal including an appetizer (spring rolls or fish cakes), soup (Tom Yum or Tom Kha), a stir-fry dish (Pad Thai or Pad See Ew), a curry (green, red, or Massaman), and a dessert (mango sticky rice or banana in coconut milk). The exact menu may vary slightly based on seasonal ingredients and group preferences. Vegetarian options are available for all dishes.",
      },
      {
        question: "Do I need any prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! This class is designed for all skill levels, from complete beginners to experienced cooks. Our chef will guide you through each step, ensuring you understand the techniques and ingredients used in Thai cuisine. You'll leave with new skills and recipes to recreate these dishes at home.",
      },
    ],
  },
  {
    title: "Ethical Elephant Sanctuary Experience",
    description:
      "Visit a genuine ethical elephant sanctuary where rescued elephants live free from riding and performances. Prepare elephant food, walk alongside these gentle giants in their natural habitat, and even join them for a mud spa and bathing session in the river.",
    images: [
      "/images/tours/phuket/elephant-sanctuary.jpg",
      "/images/tours/phuket/elephant-bathing.jpg",
    ],
    duration: "Half day",
    price: "$95",
    rating: 4.9,
    tags: ["Wildlife", "Ethical", "Nature"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Khun Chai",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "How do I know this is truly an ethical elephant experience?",
        answer:
          "Our sanctuary partner follows strict ethical guidelines: no riding, no performances, no hooks or chains. The elephants have been rescued from logging or tourism industries and now live in a natural environment where they can form herds and express natural behaviors. The sanctuary limits visitor numbers and interaction time to prioritize elephant welfare. A portion of your tour fee directly supports elephant care, habitat maintenance, and rescue efforts.",
      },
      {
        question: "What should I wear for the sanctuary visit?",
        answer:
          "Wear comfortable, breathable clothing suitable for outdoor activities. Closed-toe shoes or sandals with straps are recommended, as you'll be walking on uneven terrain. Bring a change of clothes if you plan to join the elephants in the river, as you will get wet. Sunscreen and insect repellent are also advisable.",
      },
    ],
  },
  {
    title: "Big Buddha & Temple Tour with Sunset Viewpoint",
    description:
      "Discover Phuket's spiritual side with visits to the iconic 45-meter Big Buddha statue, historic Wat Chalong temple, and a secret sunset viewpoint overlooking the island. Learn about Thai Buddhism and cultural practices from a knowledgeable local guide.",
    images: [
      "/images/tours/phuket/big-buddha.jpg",
      "/images/tours/phuket/wat-chalong.jpg",
    ],
    duration: "6 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Cultural", "Temples", "Sunset"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Supaporn Thongchai",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the temples?",
        answer:
          "When visiting Thai temples, modest dress is required out of respect for the religious sites. Both men and women should cover shoulders and knees (no sleeveless tops, short skirts, or shorts). We recommend bringing a light scarf or shawl that can be used to cover up if needed. Shoes must be removed before entering temple buildings, so slip-on footwear is convenient.",
      },
      {
        question: "How strenuous is the hike to the sunset viewpoint?",
        answer:
          "The hike to the sunset viewpoint is moderate, covering about 1 kilometer (0.6 miles) with some steep sections. It takes approximately 30 minutes to reach the top at a leisurely pace, with plenty of opportunities to stop and take photos. The path is well-maintained but can be uneven in places, so comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Phang Nga Bay Sea Cave Kayaking",
    description:
      "Paddle through the emerald waters of Phang Nga Bay in a sea kayak, navigating through dramatic limestone karsts, hidden lagoons, and sea caves only accessible during certain tide conditions. Visit James Bond Island and the floating village of Koh Panyee.",
    images: [
      "/images/tours/phuket/sea-kayaking.jpg",
      "/images/tours/phuket/hong-lagoon.jpg",
    ],
    duration: "8 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Kayaking", "Sea Caves", "National Park"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Ekachai",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need kayaking experience?",
        answer:
          "No prior kayaking experience is necessary. You'll be in a stable two-person sea kayak with an experienced guide who does the paddling and navigating through the caves and lagoons. You simply sit back and enjoy the scenery. The kayaks are specially designed for stability and ease of entry/exit when transferring from the main boat.",
      },
      {
        question: "What should I bring for the kayaking tour?",
        answer:
          "We recommend wearing a swimsuit or quick-dry clothing, a hat, sunglasses, and sunscreen. Water shoes or sandals with straps are ideal for getting in and out of the kayak. A waterproof bag for personal items is also useful. We provide life jackets, paddles, and dry bags for your belongings.",
      },
    ],
  },
  {
    title: "Thai Muay Thai Boxing Training Session",
    description:
      "Learn the basics of Thailand's national sport, Muay Thai (Thai boxing), with a training session at an authentic boxing gym. Professional fighters will teach you fundamental techniques, combinations, and the cultural significance of this ancient martial art.",
    images: [
      "/images/tours/phuket/muay-thai.jpg",
      "/images/tours/phuket/boxing-training.jpg",
    ],
    duration: "2 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Muay Thai", "Active", "Cultural"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Trainer Sittichok",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to be fit to participate?",
        answer:
          "The training session is adapted to your fitness level. While Muay Thai is physically demanding, our instructors design the session appropriately for beginners, focusing on basic techniques and moderate conditioning. You'll work up a sweat, but you can take breaks as needed. Wear comfortable athletic clothing and bring water. Training equipment like gloves and pads are provided.",
      },
      {
        question: "What should I bring for the training session?",
        answer:
          "Wear comfortable athletic clothing suitable for exercise, such as shorts and a t-shirt. Bring a water bottle to stay hydrated, and if you have your own boxing gloves or hand wraps, feel free to bring them, although we provide all necessary equipment. A towel is also recommended as you will work up a sweat.",
      },
    ],
  },
  {
    title: "Old Town Phuket Heritage Walking Tour",
    description:
      "Step back in time exploring Phuket Old Town's colorful Sino-Portuguese architecture, hidden shrines, and bustling markets. Learn about the island's tin mining history, Chinese influence, and cultural heritage while visiting historic mansions, museums, and local artisan shops.",
    images: [
      "/images/tours/phuket/old-town.jpg",
      "/images/tours/phuket/sino-portuguese.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Heritage", "Architecture", "Walking Tour"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dr. Pranee Sakulpipatana",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3 kilometers at a leisurely pace with frequent stops. The terrain is flat, but some streets have uneven surfaces. We take multiple breaks at cafes, shops, and historic buildings. The tour operates in the morning or late afternoon to avoid midday heat. Comfortable walking shoes and sun protection are recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We keep the pace relaxed and our guide shares engaging stories that appeal to both adults and children. The colorful architecture, street art, and local snacks make it enjoyable for all ages. However, please note that some buildings may not be stroller accessible due to steps or narrow passages.",
      },
    ],
  },
  {
    title: "Luxury Catamaran Sunset Cruise",
    description:
      "Sail the Andaman Sea aboard a luxury catamaran, cruising around Phuket's scenic coastline while enjoying free-flowing drinks, a gourmet dinner, and a spectacular sunset. Stop for swimming and snorkeling at a secluded bay before watching the sun sink below the horizon.",
    images: [
      "/images/tours/phuket/luxury-catamaran.jpg",
      "/images/tours/phuket/sunset-cruise.jpg",
    ],
    duration: "5 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Sailing", "Sunset", "Luxury"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Nakornchai",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What's included in the cruise?",
        answer:
          "The cruise includes hotel transfers, welcome cocktail, free-flowing beverages (soft drinks, beer, wine, and select spirits), a gourmet buffet dinner featuring Thai and international cuisine, use of snorkeling equipment and towels, and professional photos taken by the crew. The catamaran features spacious sundecks, shaded seating areas, freshwater showers, and clean restroom facilities.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! Children of all ages are welcome. The catamaran is spacious and safe, with life jackets available for everyone. The crew is experienced in accommodating families, and we can provide child-friendly meal options upon request. The sunset views and gentle sailing make it a relaxing experience for all ages.",
      },
    ],
  },
  {
    title: "Phuket Night Market Food Tour",
    description:
      "Experience the vibrant flavors of Phuket's night markets with a guided food tour, sampling local street food delicacies like grilled seafood, spicy salads, and sweet desserts. Learn about Thai culinary traditions and the best dishes to try from a knowledgeable local guide.",
    images: [
      "/images/tours/phuket/night-market.jpg",
      "/images/tours/phuket/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Food", "Night Market", "Street Food"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Somchai Prasert",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of local specialties including grilled seafood skewers, spicy papaya salad (Som Tum), Pad Thai, coconut ice cream, and traditional desserts like mango sticky rice. The exact dishes may vary based on seasonal ingredients and market availability. Vegetarian options are available upon request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We can adjust the food selections to suit children's tastes and dietary restrictions. The guide will also share fun facts about each dish to engage younger participants. However, please note that some dishes may be spicy, so we can provide milder alternatives if needed.",
      },
    ],
  },
];

export default phuketTours;
