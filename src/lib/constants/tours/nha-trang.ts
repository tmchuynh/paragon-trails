import { Tour } from "@/lib/interfaces/services/tours";

export const nhaTrangTours: Tour[] = [
  {
    title: "Island Hopping & Snorkeling Adventure",
    description:
      "Discover the pristine islands surrounding Nha Trang on this full-day boat tour featuring snorkeling in crystal clear waters, fresh seafood lunch on a secluded beach, and visits to multiple islands with unique attractions.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "South Central Coast",
    images: [
      "/images/tours/nha-trang/island-hopping.jpg",
      "/images/tours/nha-trang/snorkeling.jpg",
    ],
    duration: "8 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Snorkeling", "Islands", "Boat Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Nha Trang Marina, 5 Trần Phú, Lộc Thọ, Nha Trang",
      coordinates: {
        latitude: 12.2388,
        longitude: 109.1967,
      },
      instructions:
        "Meet at the main entrance of Nha Trang Marina. Your guide will be holding a blue flag with 'Island Hopping Tour' written on it.",
      contactNumber: "+84 258 123 4567",
      contactEmail: "islands@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-18",
      "2023-12-19",
      "2023-12-20",
      "2023-12-21",
      "2023-12-22",
      "2023-12-23",
      "2023-12-24",
      "2023-12-25",
      "2023-12-26",
      "2023-12-27",
      "2023-12-28",
      "2023-12-29",
      "2023-12-30",
      "2023-12-31",
      "2024-01-01",
      "2024-01-03",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Visit 4 stunning islands in Nha Trang Bay, a protected marine area",
      "Snorkel among colorful coral reefs with diverse marine life",
      "Enjoy a freshly prepared seafood lunch on a secluded beach",
      "Relax on pristine white sand beaches away from the crowds",
      "Visit a traditional fishing village to see local island life",
    ],

    inclusions: [
      "Hotel pickup and drop-off from central Nha Trang hotels",
      "Round-trip boat transportation",
      "Professional English-speaking guide",
      "Snorkeling equipment (mask, snorkel, fins)",
      "Seafood lunch with vegetarian options available",
      "Fresh fruits and bottled water throughout the day",
      "All entrance and environmental protection fees",
    ],

    exclusions: [
      "Alcoholic beverages (available for purchase on boat)",
      "Optional activities such as jet skiing or parasailing",
      "Personal expenses and souvenirs",
      "Tips for guide and boat crew",
      "Underwater photography (available for additional fee)",
    ],

    itinerary: [
      "08:00 - Pickup from your hotel in central Nha Trang",
      "08:30 - Meet your guide at Nha Trang Marina and board the boat",
      "09:00 - Depart for Mun Island, the best snorkeling spot in Nha Trang",
      "09:45 - Guided snorkeling session at Mun Island's coral reefs",
      "11:00 - Cruise to Mot Island for more snorkeling and beach time",
      "12:00 - Fresh seafood lunch served on a secluded beach",
      "13:30 - Visit Mieu Island and its traditional fishing village",
      "14:30 - Relax on Tam Island's pristine beaches or enjoy optional water sports",
      "15:30 - Begin return journey to Nha Trang with refreshments",
      "16:30 - Arrive at Marina and transfer back to your hotel",
    ],

    faqs: [
      {
        question: "Do I need to be a strong swimmer to participate?",
        answer:
          "You don't need to be a strong swimmer to enjoy this tour. Life jackets are provided for everyone during boat transfers and are available during snorkeling sessions. Our guides are also trained in water safety and will provide basic snorkeling instruction. For non-swimmers, there are plenty of shallow areas and beach activities to enjoy.",
      },
      {
        question: "What should I bring for the island tour?",
        answer:
          "We recommend bringing swimwear, a towel, sunscreen (reef-safe preferred), a hat, sunglasses, a change of clothes, and a waterproof bag or case for electronics. You may also want to bring some cash for optional activities or souvenirs at the islands. Everything else, including snorkeling equipment and lunch, is provided.",
      },
      {
        question: "What kind of marine life might we see while snorkeling?",
        answer:
          "Nha Trang Bay is home to diverse marine ecosystems. During snorkeling, you might see colorful coral formations, tropical fish like butterflyfish and angelfish, sea anemones with clownfish, sea urchins, starfish, and occasionally sea turtles or small reef sharks. The visibility is typically best at Mun Island, which is why we make it our first snorkeling stop.",
      },
    ],
  },

  {
    title: "Countryside & Hot Springs Adventure",
    description:
      "Escape the tourist crowds with this off-the-beaten-path journey through rural villages, lush rice fields, and natural hot springs where you'll experience authentic Vietnamese countryside life and therapeutic mud baths.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "South Central Coast",
    images: [
      "/images/tours/nha-trang/countryside.jpg",
      "/images/tours/nha-trang/hot-springs.jpg",
    ],
    duration: "6 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Hot Springs", "Rural", "Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Thap Ba Hot Springs, Ngọc Hiệp, Nha Trang",
      coordinates: {
        latitude: 12.2869,
        longitude: 109.1954,
      },
      instructions:
        "Meet at the main entrance of Thap Ba Hot Springs. Your guide will be waiting with a sign displaying your name.",
      contactNumber: "+84 258 123 4568",
      contactEmail: "hotsprings@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Experience therapeutic mineral mud baths and hot springs",
      "Cycle through scenic countryside rice paddies and rural villages",
      "Visit an authentic rural market with locally grown products",
      "Interact with farmers and learn about traditional agricultural methods",
      "Sample delicious local snacks and tropical fruits in a village home",
    ],

    inclusions: [
      "Hotel pickup and drop-off from central Nha Trang",
      "Bicycle and safety equipment for countryside ride",
      "Private mud bath and hot spring experience",
      "Local English-speaking guide",
      "Traditional Vietnamese lunch in local home",
      "Fresh fruit and refreshments during the tour",
      "Bottled water throughout the day",
    ],

    exclusions: [
      "Optional activities not specified in the itinerary",
      "Personal expenses and souvenirs",
      "Alcoholic beverages",
      "Tips for guide and drivers",
      "Spa treatments beyond included mud bath",
    ],

    itinerary: [
      "08:30 - Pickup from your hotel in Nha Trang",
      "09:00 - Arrive at Thap Ba Hot Springs for therapeutic mud bath experience",
      "10:00 - Relax in mineral hot springs with stunning mountain views",
      "11:00 - Transfer to countryside starting point for cycling tour",
      "11:30 - Begin bicycle journey through rural landscapes and rice fields",
      "12:30 - Visit traditional village and interact with local farmers",
      "13:00 - Authentic Vietnamese lunch prepared by local family",
      "14:00 - Visit rural market to observe local commerce and daily life",
      "14:45 - Continue cycling through scenic countryside routes",
      "15:30 - Return to starting point and transfer back to Nha Trang",
      "16:30 - Drop-off at your hotel",
    ],

    faqs: [
      {
        question: "What should I wear for the mud baths?",
        answer:
          "We recommend wearing a swimsuit for the mud bath experience. The facility provides secure changing rooms, showers, and lockers. Bring a towel, although rentals are available for a small fee. After the mud bath, you'll have time to shower and change before the countryside portion of the tour.",
      },
      {
        question: "How physically demanding is the bicycle portion?",
        answer:
          "The cycling portion covers approximately 10 kilometers (6 miles) of mostly flat terrain with a few gentle hills. We ride at a leisurely pace suitable for casual cyclists, with plenty of stops for photos and rest. Participants should be comfortable riding a bicycle but don't need to be experienced cyclists.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is suitable for children aged 10 and above who are comfortable riding bicycles. For families with younger children, we can arrange alternative transportation for the cycling portion. The mud bath experience is enjoyable for children, who typically love the unique sensation of the natural mud.",
      },
    ],
  },

  {
    title: "Vietnamese Cooking Class & Local Market Tour",
    description:
      "Master the art of Vietnamese cuisine with a hands-on cooking class beginning with a guided market tour to select fresh ingredients, followed by preparation of classic dishes like pho, spring rolls, and grilled meats.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "South Central Coast",
    images: [
      "/images/tours/nha-trang/cooking-class.jpg",
      "/images/tours/nha-trang/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cooking", "Food", "Market"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Đầm Market, 52 Lý Tự Trọng, Nha Trang",
      coordinates: {
        latitude: 12.2458,
        longitude: 109.1929,
      },
      instructions:
        "Meet at the main entrance of Đầm Market (west entrance). Your culinary guide will be holding a basket with fresh herbs.",
      contactNumber: "+84 258 123 4569",
      contactEmail: "cooking@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-24",
      "2023-12-26",
      "2023-12-28",
      "2023-12-30",
      "2024-01-01",
      "2024-01-03",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Explore a vibrant local market with expert guidance on selecting ingredients",
      "Learn to prepare 4 authentic Vietnamese dishes from scratch",
      "Master techniques for making perfect rice paper rolls",
      "Discover the secrets of balancing Vietnamese flavors and herbs",
      "Enjoy the meal you've prepared in a beautiful garden setting",
    ],

    inclusions: [
      "Market tour with professional chef",
      "All ingredients and cooking equipment",
      "Hands-on instruction for 4 complete dishes",
      "Recipe booklet to take home",
      "Meal featuring all prepared dishes",
      "Complimentary Vietnamese coffee or local beer",
      "Hotel pickup and drop-off from central Nha Trang",
    ],

    exclusions: [
      "Additional beverages beyond those included",
      "Personal cooking tools or aprons (available for purchase)",
      "Personal expenses at the market",
      "Tips for chef and staff",
    ],

    itinerary: [
      "08:30 - Hotel pickup and transfer to local market",
      "09:00 - Guided tour of Đầm Market with ingredient selection and food history",
      "09:45 - Transfer to cooking school",
      "10:00 - Introduction to Vietnamese cuisine and cooking techniques",
      "10:15 - Begin preparation of first dishes (fresh spring rolls and dipping sauce)",
      "11:00 - Learn to prepare a classic Vietnamese soup dish",
      "11:30 - Master main dish techniques (choice of seafood, meat or vegetarian)",
      "12:00 - Prepare traditional Vietnamese dessert",
      "12:30 - Enjoy your prepared meal in garden setting with drinks",
      "13:00 - Receive recipe booklet and cooking certificates",
      "13:30 - Return transfer to your hotel",
    ],

    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The class typically includes four Vietnamese specialties: fresh spring rolls with dipping sauce, a soup dish (often pho or canh), a main dish such as lemongrass chicken or seafood claypot, and a traditional dessert like sticky rice with tropical fruits. We can accommodate special requests with advance notice.",
      },
      {
        question: "Do I need previous cooking experience?",
        answer:
          "No previous experience is necessary! Our chef provides clear, step-by-step instructions suitable for beginners while also offering insights that will interest more experienced cooks. The class is hands-on, so everyone participates in preparing their own dishes with guidance from our culinary team.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary restrictions. Please inform us of any dietary needs when booking so we can prepare appropriate recipes and ingredients. Vietnamese cuisine naturally includes many vegetarian options and is highly adaptable.",
      },
    ],
  },

  {
    title: "Cultural Heritage: Ponagar Cham Towers & Long Son Pagoda",
    description:
      "Journey through Nha Trang's rich spiritual heritage with visits to the ancient Ponagar Cham Towers and the striking Long Son Pagoda, offering insights into both Hindu and Buddhist traditions that shaped Vietnamese culture.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "South Central Coast",
    images: [
      "/images/tours/nha-trang/cham-towers.jpg",
      "/images/tours/nha-trang/long-son-pagoda.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Cultural", "Historical", "Religious"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Ponagar Cham Towers, 2 Thang 4 Street, Nha Trang",
      coordinates: {
        latitude: 12.2656,
        longitude: 109.1956,
      },
      instructions:
        "Meet at the entrance gate to the Ponagar Cham Towers complex. Your guide will be holding a sign with 'Cultural Heritage Tour' written on it.",
      contactNumber: "+84 258 123 4570",
      contactEmail: "heritage@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Explore the ancient Ponagar Cham Towers dating back to the 7th century",
      "Learn about the Cham civilization and their Hindu-influenced culture",
      "Visit the striking Long Son Pagoda with its giant white Buddha statue",
      "Discover the fusion of religious traditions in Vietnamese spiritual life",
      "Enjoy panoramic views of Nha Trang from Long Son Pagoda's hilltop",
    ],

    inclusions: [
      "Professional English-speaking cultural guide",
      "Entrance fees to all sites",
      "Traditional offerings for temple visits",
      "Bottled water",
      "Transportation between sites",
      "Hotel pickup and drop-off from central Nha Trang",
    ],

    exclusions: [
      "Additional offerings beyond those provided",
      "Personal expenses and souvenirs",
      "Food and additional beverages",
      "Optional activities not specified in the itinerary",
      "Tips for guide and driver",
    ],

    itinerary: [
      "08:30 - Hotel pickup and transfer to Ponagar Cham Towers",
      "09:00 - Guided exploration of the Cham Towers complex",
      "09:30 - Learn about Cham architecture and Hindu-influenced religious practices",
      "10:15 - Observe local worship rituals and offerings",
      "10:45 - Transfer to Long Son Pagoda",
      "11:00 - Visit the main temple hall and learn about Vietnamese Buddhism",
      "11:30 - Climb to the giant white Buddha statue with panoramic city views",
      "12:00 - Visit the monastery grounds and meditation gardens",
      "12:30 - Return transfer to your hotel with commentary on modern Vietnamese spiritual life",
    ],

    faqs: [
      {
        question: "What should I wear when visiting these religious sites?",
        answer:
          "Modest attire is required when visiting religious sites. Both men and women should wear clothing that covers shoulders and knees. Comfortable walking shoes are recommended, especially for the steps leading up to the Long Son Pagoda Buddha statue. We provide traditional scarves for women to cover their shoulders if needed.",
      },
      {
        question: "Are there many stairs to climb during this tour?",
        answer:
          "Yes, there are stairs at both sites. The Ponagar Cham Towers involve climbing about 50 steps to reach the main tower complex. At Long Son Pagoda, there are approximately 150 steps to reach the giant Buddha statue at the top. The climb is taken at a leisurely pace with rest stops, but participants should be comfortable with moderate stair climbing.",
      },
      {
        question: "Will we see religious ceremonies during the visit?",
        answer:
          "It's common to encounter active worship at both sites. The Cham Towers remain an active place of worship for both Cham people and Vietnamese who practice a blend of Hinduism and Buddhism. You may see offerings being made with incense and flowers. At Long Son Pagoda, Buddhist monks perform daily rituals and meditation. We ask visitors to respect any ceremonies by observing quietly and following our guide's instructions.",
      },
    ],
  },

  {
    title: "Sunset Sailing & Seafood Dinner Cruise",
    description:
      "Experience the magic of Nha Trang Bay at sunset aboard a luxury sailboat, enjoying fresh seafood dinner, unlimited drinks, and swimming in bioluminescent waters after dark.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "South Central Coast",
    images: [
      "/images/tours/nha-trang/sunset-sailing.jpg",
      "/images/tours/nha-trang/seafood-dinner.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Sunset", "Sailing", "Dining"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",

    meetingPoint: {
      address: "Ana Marina Yacht Club, Phạm Văn Đồng, Nha Trang",
      coordinates: {
        latitude: 12.2229,
        longitude: 109.1983,
      },
      instructions:
        "Meet at the Ana Marina Yacht Club main dock. A crew member will greet you and escort you to the sailing yacht.",
      contactNumber: "+84 258 123 4571",
      contactEmail: "sailing@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-22",
      "2023-12-23",
      "2023-12-24",
      "2023-12-29",
      "2023-12-30",
      "2023-12-31",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
      "2024-02-16",
      "2024-02-17",
      "2024-02-18",
      "2024-02-23",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "Sail on a luxury yacht through Nha Trang's stunning bay at sunset",
      "Enjoy freshly prepared seafood dinner with local specialties",
      "Unlimited drinks including wine, beer, and tropical cocktails",
      "Opportunity to swim in bioluminescent waters after dark",
      "Perfect romantic experience with panoramic sunset views",
    ],

    inclusions: [
      "Luxury sailboat cruise with professional captain and crew",
      "Hotel pickup and drop-off from central Nha Trang",
      "Gourmet seafood dinner with wine pairing",
      "Unlimited beverages (alcoholic and non-alcoholic)",
      "Use of snorkeling equipment and towels",
      "Evening swimming opportunity in bioluminescent waters",
      "Bluetooth speaker for your personal music",
    ],

    exclusions: [
      "Professional photography (available for additional fee)",
      "Special celebration arrangements (available upon request)",
      "Premium spirits beyond included beverage package",
      "Tips for captain and crew",
    ],

    itinerary: [
      "16:00 - Hotel pickup and transfer to Ana Marina Yacht Club",
      "16:30 - Welcome aboard with champagne toast and orientation",
      "17:00 - Set sail into Nha Trang Bay with relaxing music",
      "17:30 - Cruise around offshore islands with swimming opportunity",
      "18:15 - Anchor in secluded bay for sunset viewing",
      "18:45 - Fresh seafood dinner served on deck",
      "19:30 - After-dinner drinks and relaxation under the stars",
      "20:00 - Night swimming experience with bioluminescent plankton (seasonal)",
      "20:30 - Begin return sailing to marina",
      "21:00 - Arrive at marina and transfer back to hotel",
    ],

    faqs: [
      {
        question: "Is this a private or group tour?",
        answer:
          "This is a small group experience with a maximum of 12 guests, ensuring a personalized and spacious experience. For those seeking complete privacy, we offer a private charter option at an additional cost. Please contact us for private sailing arrangements, special occasions, or customized itineraries.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "Your safety is our priority. In case of unfavorable weather conditions, we may either reschedule your sailing experience for another day during your stay or offer a full refund if rescheduling isn't possible. The captain makes the final decision regarding sailing conditions on the day of your tour.",
      },
      {
        question: "What should I bring for the sunset cruise?",
        answer:
          "We recommend bringing swimwear if you'd like to swim, a light sweater or jacket as evenings can be breezy on the water, and your camera to capture the spectacular sunset views. Everything else is provided, including towels, snorkeling equipment if you wish to use it, and all food and beverages.",
      },
    ],
  },
];

export default nhaTrangTours;
