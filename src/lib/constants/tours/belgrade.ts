import { Tour } from "@/lib/interfaces/services/tours";

export const belgradeTours: Tour[] = [
  {
    title: "Belgrade Fortress & Underground Secrets",
    description:
      "Explore the ancient Kalemegdan Fortress with exclusive access to underground military tunnels, Roman wells, and hidden chambers spanning 2,000 years of Belgrade's turbulent history as the gateway between East and West.",
    images: [
      "/images/tours/belgrade/kalemegdan-fortress.jpg",
      "/images/tours/belgrade/underground-tunnels.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["History", "Military", "Underground"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Professor Milan Jovanović",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are the underground tunnels accessible for everyone?",
        answer:
          "The underground portions involve narrow passages and uneven surfaces with limited lighting. Participants should have reasonable mobility and comfort in enclosed spaces. The main fortress areas are fully accessible, so those preferring not to enter the tunnels can enjoy spectacular views of the Sava and Danube rivers confluence while the group explores below. We provide headlamps and appropriate safety equipment for the underground sections.",
      },
    ],
  },
  {
    title: "Rakija Experience: Serbian Spirit Tasting Journey",
    description:
      "Discover Serbia's national drink through an immersive rakija tasting experience featuring premium artisanal varieties, traditional meze pairings, and insights into centuries-old distillation techniques from a master craftsman.",
    images: [
      "/images/tours/belgrade/rakija-tasting.jpg",
      "/images/tours/belgrade/traditional-meze.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Drinks", "Cultural", "Tasting"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dragan Petrović",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What exactly is rakija?",
        answer:
          "Rakija is a fruit brandy traditional throughout the Balkans but particularly significant in Serbian culture. Typically distilled from plums (šljivovica), it's also made from apricots, quince, grapes, pears, and other fruits. Each family often has their own recipe passed through generations. During our tasting, you'll sample 6-8 premium varieties ranging from 40-55% alcohol content, each paired with appropriate traditional foods that complement their distinct flavors and aromas.",
      },
    ],
  },
  {
    title: "Yugoslav History & Architecture Tour",
    description:
      "Examine Belgrade's fascinating communist-era heritage through its monumental architecture, controversial history, and cultural impacts with visits to New Belgrade's brutalist masterpieces and the Museum of Yugoslavia.",
    images: [
      "/images/tours/belgrade/brutalist-architecture.jpg",
      "/images/tours/belgrade/house-of-flowers.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Communist Era", "Architecture", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Jelena Marković",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour politically biased?",
        answer:
          "Our tour presents Yugoslav history with historical accuracy and multiple perspectives. Your guide will present facts about the socialist period, its achievements and controversies, without imposing political judgments. We contextualize Yugoslavia's unique position between East and West during the Cold War and examine how this complex legacy continues to influence modern Serbia. Both nostalgia and criticism of this era exist among Serbians, and we explore these diverse viewpoints respectfully.",
      },
    ],
  },
  {
    title: "Belgrade River Cruise & Sunset Dinner",
    description:
      "Cruise the confluence of the Sava and Danube rivers aboard a private boat, enjoying panoramic views of Belgrade's landmarks followed by an exclusive dinner at a floating restaurant with live traditional music.",
    images: [
      "/images/tours/belgrade/river-cruise.jpg",
      "/images/tours/belgrade/floating-restaurant.jpg",
    ],
    duration: "4 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Cruise", "Dinner", "Sunset"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Captain Nikola",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What type of food is served during dinner?",
        answer:
          "The dinner features contemporary Serbian cuisine highlighting local ingredients and traditional recipes with modern presentation. The menu typically includes river fish specialties, grilled meats, organic vegetables from nearby farms, and homemade desserts. Vegetarian options are available with advance notice. Each course is paired with selected Serbian wines from family-owned vineyards in the Fruška Gora region. The floating restaurant offers panoramic river views and creates an authentic yet sophisticated dining experience.",
      },
    ],
  },
  {
    title: "Belgrade Street Art & Alternative Culture Tour",
    description:
      "Discover Belgrade's vibrant underground culture through its striking murals, hidden galleries, and creative districts while learning how street art became a powerful form of expression during Yugoslavia's collapse and Serbia's transition.",
    images: [
      "/images/tours/belgrade/street-art.jpg",
      "/images/tours/belgrade/savamala-district.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.6,
    tags: ["Street Art", "Urban", "Alternative"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ana Đorđević",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we meet any local artists?",
        answer:
          "Whenever possible, we arrange spontaneous meetings with artists working in the districts we visit. While we can't guarantee specific encounters, many local artists know our guides and often join us briefly to discuss their work when they're painting in the area. We also visit several artist-run spaces and galleries where you can engage with creators and perhaps see works in progress. The tour concludes at a cultural center frequented by local artists, where you can continue conversations over coffee or craft beer.",
      },
    ],
  },
];

export default belgradeTours;
