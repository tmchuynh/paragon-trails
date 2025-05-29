import { Tour } from "@/lib/interfaces/services/tours";

export const piraeusTours: Tour[] = [
  {
    title: "Ancient Port of Piraeus & Maritime History",
    description:
      "Explore the fascinating 2,500-year history of one of the Mediterranean's most important ports with an archaeology expert. Discover ancient harbor remains, visit the outstanding Archaeological Museum of Piraeus with its bronze statues, and learn how this vital port shaped Athens' destiny.",
    images: [
      "/images/tours/piraeus/ancient-harbor.jpg",
      "/images/tours/piraeus/archaeological-museum.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Archaeological", "Maritime", "Museums"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Papadopoulou",
    tourCategoryId: "historical",
    faqs: [
      {
        question:
          "How is this tour different from standard Athens archaeology tours?",
        answer:
          "While most archaeological tours focus on central Athens sites like the Acropolis, this specialized tour explores Piraeus's often overlooked maritime heritage. You'll see the remains of the ancient ship sheds where the Athenian fleet was housed, view rare bronze statues salvaged from shipwrecks, and understand how naval power underpinned Athenian democracy. The Archaeological Museum of Piraeus houses extraordinary artifacts rarely visited by tourists, including the only surviving bronze statues from Classical Greece.",
      },
      {
        question: "Are there any restroom facilities available?",
        answer:
          "Yes, there are restroom facilities at the Archaeological Museum of Piraeus. We will also make a stop at a local cafe where you can use the restrooms before continuing the tour.",
      },
      {
        question: "Is photography allowed during the tour?",
        answer:
          "Yes, photography is allowed in most areas of the museum and outdoor sites. However, please be respectful of any signs indicating no flash photography or restrictions on certain artifacts.",
      },
      {
        question: "What if it rains on the day of the tour?",
        answer:
          "The tour will proceed rain or shine, as most of the activities are indoors at the museum. However, we recommend bringing an umbrella or raincoat just in case we have to walk between sites.",
      },
      {
        question:
          "Is this tour accessible for individuals with mobility issues?",
        answer:
          "The Archaeological Museum of Piraeus is wheelchair accessible, but some outdoor areas may have uneven surfaces. Please let us know in advance if you require any special accommodations, and we will do our best to assist you.",
      },
    ],
  },
  {
    title: "Saronic Gulf Island Hopping Day Cruise",
    description:
      "Set sail from Piraeus on a full-day cruise to three enchanting Saronic Gulf islands: Hydra, Poros, and Aegina. Explore car-free streets, swim in crystal-clear waters, sample fresh pistachios, and experience authentic Greek island life, all within a day trip from Athens.",
    images: [
      "/images/tours/piraeus/saronic-islands.jpg",
      "/images/tours/piraeus/hydra-port.jpg",
    ],
    duration: "Full day",
    price: "$125",
    rating: 4.8,
    tags: ["Islands", "Cruise", "Swimming"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Nikolaos",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much time do we spend on each island?",
        answer:
          "The cruise typically allocates 1.5 hours on Hydra, 1 hour on Poros, and 2 hours on Aegina. This allows enough time to explore each island's main attractions at a comfortable pace. On Hydra, you can wander the picturesque port town or enjoy swimming. Poros offers beautiful beaches and panoramic views from the clocktower. On Aegina, you can visit the ancient Temple of Aphaia, St. Nektarios Monastery, or simply enjoy local seafood by the harbor.",
      },
      {
        question: "What should I bring for the day trip?",
        answer:
          "We recommend wearing comfortable clothing and shoes suitable for walking. Bring a swimsuit and towel if you plan to swim, sunscreen, a hat, and a reusable water bottle. A light jacket or sweater is also advisable as it can get breezy on the water. Don't forget your camera to capture the stunning island scenery!",
      },
      {
        question: "Is lunch included in the cruise?",
        answer:
          "Lunch is not included in the cruise price, but there are options available on each island. You can enjoy local tavernas serving fresh seafood, traditional Greek dishes, or grab a quick snack from cafes. We can provide recommendations based on your preferences.",
      },
    ],
  },
  {
    title: "Seafood Feast & Fish Market Tour",
    description:
      "Experience the vibrant atmosphere of Piraeus' famous fish market with a local chef, selecting the freshest catches of the day, then enjoy a hands-on cooking class preparing traditional Greek seafood dishes followed by a feast paired with local wines.",
    images: [
      "/images/tours/piraeus/fish-market.jpg",
      "/images/tours/piraeus/seafood-feast.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Seafood", "Market", "Cooking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Yannis Marinos",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What seafood dishes will we prepare?",
        answer:
          "The menu varies based on the market's best offerings that day, but typically includes classic Greek seafood dishes such as grilled octopus with ladolemono sauce, ouzo-steamed mussels, fish soup (kakavia), and whole fish grilled with olive oil, lemon, and oregano. You'll learn proper techniques for cleaning seafood, judging freshness, and mastering the cooking times for different species. All dishes are paired with local Greek wines from Attica and the islands.",
      },
      {
        question: "Do I need any prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! This class is designed for all skill levels, from complete beginners to experienced cooks. Our chef will guide you through each step of the cooking process, ensuring you understand the techniques and ingredients used in traditional Greek seafood cuisine. You'll leave with new skills and recipes to recreate these dishes at home.",
      },
    ],
  },
  {
    title: "Sunset Sailing & Athens Riviera Cruise",
    description:
      "Set sail from Marina Zeas aboard a luxury sailing yacht to cruise along the Athens Riviera as the sun sets. Enjoy swimming stops in secluded coves, complimentary drinks and snacks, and breathtaking views of the coastline bathed in golden light.",
    images: [
      "/images/tours/piraeus/yacht-sunset.jpg",
      "/images/tours/piraeus/athens-riviera.jpg",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Sailing", "Sunset", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Andreas",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Do I need sailing experience?",
        answer:
          "No sailing experience is needed. Our professional crew handles all aspects of sailing the yacht, though guests are welcome to try their hand at steering or helping with the sails if they wish. The yacht is spacious and stable, making it comfortable even for those who haven't sailed before. If you're prone to seasickness, we recommend taking precautions as the Saronic Gulf usually has calm waters but can occasionally be choppy.",
      },
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress in layers and wear comfortable, weather-appropriate clothing. A light jacket is recommended, as it can get breezy on the water. Don't forget sunscreen and a hat! Swimwear is also advisable if you plan to swim during the stops.",
      },
    ],
  },
  {
    title: "Urban Photography Tour: Port Life & Street Art",
    description:
      "Capture the unique character of Piraeus through your lens, from working harbor scenes and colorful fishing boats to impressive street art murals in revitalized neighborhoods. Learn composition techniques and storytelling through images with guidance from a professional photographer.",
    images: [
      "/images/tours/piraeus/port-photography.jpg",
      "/images/tours/piraeus/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Photography", "Street Art", "Urban"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dimitris Karavias",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This tour is suitable for all camera types, from smartphones to DSLRs. If using a dedicated camera, a versatile walk-around lens (such as a 24-70mm equivalent) is ideal for capturing both street scenes and architectural details. A wide-angle lens can be useful for the street art murals. The guide provides technical advice tailored to your specific equipment, focusing on composition, lighting, and storytelling regardless of camera type.",
      },
      {
        question: "Is this tour suitable for beginners?",
        answer:
          "Absolutely! This tour is designed for photographers of all skill levels, from complete beginners to advanced enthusiasts. The guide will provide personalized tips and techniques based on your experience level, helping you improve your photography skills while exploring the vibrant urban landscape of Piraeus.",
      },
    ],
  },
  {
    title: "Mikrolimano Harbor Dinner & Evening Stroll",
    description:
      "Experience the charming fishing harbor of Mikrolimano with its yacht-filled marina and renowned seafood restaurants. Enjoy a guided evening stroll through this picturesque district, followed by a multi-course dinner at a traditional taverna with stunning harbor views.",
    images: [
      "/images/tours/piraeus/mikrolimano-harbor.jpg",
      "/images/tours/piraeus/seafood-taverna.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Dining", "Evening", "Scenic"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Andronis",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What type of food will be served at dinner?",
        answer:
          "The dinner features classic Greek seafood meze (small plates) and fresh fish. A typical meal includes shared appetizers like taramosalata (fish roe dip), grilled octopus, fried calamari, Greek salad, and tzatziki, followed by freshly caught fish grilled with olive oil and lemon. The restaurant's daily specials depend on the morning's catch. Vegetarian options are available with advance notice, and the meal includes local wine or beer.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! The relaxed pace and scenic setting make it enjoyable for all ages. Children can try various seafood dishes, and the guide will ensure the experience is engaging for younger visitors. High chairs are available at the taverna, and we can accommodate dietary restrictions with advance notice.",
      },
    ],
  },
  {
    title: "Naval Tradition & Battleship Tour",
    description:
      "Discover Greece's proud naval history with a tour of the Hellenic Maritime Museum and the preserved historical battleship Georgios Averof. Explore authentic ship interiors, learn about historic sea battles, and understand the critical role of naval power in Greek independence and modern history.",
    images: [
      "/images/tours/piraeus/battleship-averof.jpg",
      "/images/tours/piraeus/maritime-museum.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Naval History", "Military", "Museum"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Commander Petros (Retired)",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, children typically enjoy exploring the battleship with its big guns, command bridge, and engine rooms. Our guides make the historical information accessible and engaging for younger visitors, focusing on exciting naval stories and the day-to-day life of sailors. The tour involves climbing some steep ladders and narrow passageways on the ship, so appropriate footwear is recommended, and very young children may need assistance.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Wear comfortable clothing and sturdy shoes suitable for walking and climbing aboard the battleship. The ship has some steep ladders and narrow passageways, so closed-toe shoes with good grip are recommended. A light jacket is advisable as it can get breezy on the water.",
      },
      {
        question: "Are there restroom facilities available?",
        answer:
          "Yes, there are restroom facilities on the battleship and at the Hellenic Maritime Museum. We will make sure to stop at these locations during the tour.",
      },
    ],
  },
  {
    title: "Piraeus to Cape Sounion Coastal Drive",
    description:
      "Journey along the scenic Athens Riviera from Piraeus to Cape Sounion, stopping at beautiful beaches, seaside towns, and lake Vouliagmeni's thermal waters before arriving at the Temple of Poseidon for a spectacular clifftop sunset over the Aegean Sea.",
    images: [
      "/images/tours/piraeus/cape-sounion.jpg",
      "/images/tours/piraeus/vouliagmeni-lake.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Coastal", "Scenic Drive", "Sunset"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Thanos Alexandris",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Will there be swimming opportunities?",
        answer:
          "Yes, the tour includes 1-2 swimming stops (weather permitting), typically at Lake Vouliagmeni with its warm thermal waters and tiny spa fish, and at a beautiful beach along the Apollo Coast. Towels are provided, but please bring your own swimwear. Swimming is optional, and non-swimmers can enjoy the coastal scenery, beachside cafes, or a stroll along the shoreline during these stops.",
      },
      {
        question: "What time do we arrive at Cape Sounion?",
        answer:
          "We aim to arrive at Cape Sounion around 6:30 PM, allowing ample time to explore the Temple of Poseidon and find the best viewing spots for the sunset. The exact timing may vary slightly based on traffic and weather conditions, but we always plan to be there well before sunset to ensure you have plenty of time to enjoy the views.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! The scenic drive, beach stops, and historical sites are enjoyable for all ages. We keep the pace relaxed with plenty of breaks, and our guide will share engaging stories that appeal to both adults and children. However, please note that some areas may not be stroller accessible.",
      },
    ],
  },
];

export default piraeusTours;
