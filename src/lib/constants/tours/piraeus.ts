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
    ],
  },
];

export default piraeusTours;
