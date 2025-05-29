import { Tour } from "@/lib/interfaces/services/tours";

export const mumbaiTours: Tour[] = [
  {
    title: "Dharavi: Beyond the Slum Experience",
    description:
      "Explore Asia's largest slum with local guides born and raised in the community to discover its thriving industries, vibrant culture, and entrepreneurial spirit that generates an annual turnover of over $1 billion.",
    images: [
      "/images/tours/mumbai/dharavi-industries.jpg",
      "/images/tours/mumbai/dharavi-community.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Cultural", "Community", "Educational"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Raj Mehta",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour exploitative of the community?",
        answer:
          "This tour was designed with and for the Dharavi community. 80% of tour proceeds go directly to local NGOs supporting education and healthcare initiatives within Dharavi. Our guides are residents who share their own community with pride and dignity, focusing on resilience, entrepreneurship, and creativity rather than poverty. Photography is limited to specific areas with clear guidelines to ensure respect for residents.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The guides are experienced in engaging younger audiences with age-appropriate explanations and activities. However, we recommend parental discretion for very young children due to the crowded and bustling environment.",
      },
    ],
  },
  {
    title: "Bollywood Studio Tour & Dance Workshop",
    description:
      "Go behind the scenes at one of Mumbai's legendary film studios to witness movie magic in action, followed by a choreography session where you'll learn signature Bollywood dance moves from professional performers.",
    images: [
      "/images/tours/mumbai/bollywood-set.jpg",
      "/images/tours/mumbai/dance-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Bollywood", "Entertainment", "Dance"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Priya Singh",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see famous Bollywood actors?",
        answer:
          "While we cannot guarantee celebrity sightings as shooting schedules vary daily, our tours frequently coincide with ongoing productions where actors may be present. Our studio access includes live sets, costume departments, and post-production facilities. The dance workshop is led by professional choreographers who have worked with leading Bollywood stars and will teach you moves from famous film sequences.",
      },
      {
        question: "What should I wear for the dance workshop?",
        answer:
          "Comfortable clothing suitable for movement is recommended. We suggest wearing breathable fabrics and closed-toe shoes with good grip. The studio provides changing facilities if needed.",
      },
    ],
  },
  {
    title: "Mumbai Street Food Safari",
    description:
      "Embark on a culinary adventure through Mumbai's vibrant street food scene with a food expert who navigates the best hygienic vendors serving authentic local favorites from vada pav to pav bhaji, bhel puri, and more.",
    images: [
      "/images/tours/mumbai/street-food.jpg",
      "/images/tours/mumbai/chaat-stalls.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Food", "Street Food", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Anand Kumar",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the street food safe to eat?",
        answer:
          "We carefully select vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the most reputable stalls that locals frequent. All food is freshly prepared in front of you. We provide hand sanitizer throughout the tour and bottled water. The tour can accommodate vegetarian and most dietary restrictions, though those with severe allergies should notify us in advance.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of Mumbai's most iconic street foods, including vada pav, pav bhaji, bhel puri, pani puri, and more. We also include a sweet treat like kulfi or jalebi. The tour is designed to give you a comprehensive taste of the city's culinary diversity.",
      },
    ],
  },
  {
    title: "Dawn on the Arabian Sea: Fishing Village & Market",
    description:
      "Experience the authentic rhythms of Mumbai's fishing communities with a pre-dawn visit to Sassoon Docks where traditional Koli fishermen bring in the night's catch, followed by the lively wholesale fish auction and colorful retail market.",
    images: [
      "/images/tours/mumbai/sassoon-docks.jpg",
      "/images/tours/mumbai/fish-market.jpg",
    ],
    duration: "4 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Markets", "Fishing", "Local Life"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Suresh Koli",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What time does this tour start?",
        answer:
          "This tour begins very early - with hotel pickup around 5:00 AM to arrive at the docks by 5:30 AM when the fishing boats return and the auction begins. The early start is essential to experience the authentic activity of the docks and markets. We provide coffee and chai to help with the early wake-up, and the vibrant energy of the markets quickly overcomes any sleepiness!",
      },
    ],
  },
  {
    title: "Colonial Mumbai Heritage Walk",
    description:
      "Step back in time with a walking tour through Mumbai's historic Fort district, exploring stunning Gothic and Art Deco architecture, hidden colonial-era gems, and the stories behind the city's transformation from fishing village to global metropolis.",
    images: [
      "/images/tours/mumbai/colonial-architecture.jpg",
      "/images/tours/mumbai/gateway-india.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["History", "Architecture", "Colonial"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Pradeep Sharma",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3-4 kilometers of walking at a leisurely pace with frequent stops. The terrain is flat and mostly on sidewalks, though some areas have uneven surfaces. We recommend comfortable walking shoes, sun protection, and water. The walk can be adapted for different mobility levels with advance notice.",
      },
      {
        question: "Will we enter any buildings?",
        answer:
          "Yes, the tour includes visits to several historic buildings such as the Chhatrapati Shivaji Maharaj Terminus (CST), Bombay High Court, and the Asiatic Society Library. We also explore hidden courtyards and gardens that are not typically accessible to the public. Some buildings may have limited access due to ongoing restoration work, but our guide will provide detailed historical context for all sites.",
      },
    ],
  },
  {
    title: "Mumbai by Night: Queens Necklace & Rooftop Cocktails",
    description:
      "Experience the dazzling transformation of Mumbai after dark with a scenic drive along Marine Drive's 'Queen's Necklace', followed by exclusive rooftop cocktails offering panoramic views of the illuminated cityscape.",
    images: [
      "/images/tours/mumbai/marines-drive-night.jpg",
      "/images/tours/mumbai/rooftop-bar.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nightlife", "Skyline", "Luxury"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Arjun Mehta",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is there a dress code for the rooftop bars?",
        answer:
          "Yes, the exclusive rooftop venues we visit have a smart-casual dress code. We recommend collared shirts for men (no shorts or flip-flops) and elegant casual wear for women. Our pre-tour information includes specific dress requirements for each venue on your itinerary, which typically includes some of Mumbai's most sophisticated establishments with strict door policies.",
      },
      {
        question: "What if it rains?",
        answer:
          "Mumbai's monsoon season (June-September) can bring unexpected showers. Our tour is designed to be flexible, with alternative indoor venues available in case of rain. The rooftop bars we visit have covered areas to ensure you can still enjoy the views and ambiance even in light rain.",
      },
    ],
  },
  {
    title: "Elephanta Caves Private Tour & Sunset Sailing",
    description:
      "Journey across Mumbai Harbor to the UNESCO-listed Elephanta Caves with an archaeology expert to explore ancient rock-cut temples, followed by a private sunset sailing experience along the coast with champagne and Indian canapés.",
    images: [
      "/images/tours/mumbai/elephanta-caves.jpg",
      "/images/tours/mumbai/harbor-sunset.jpg",
    ],
    duration: "7 hours",
    price: "$175",
    rating: 4.9,
    tags: ["UNESCO", "Archaeology", "Sailing"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Aditya Rao",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How do we reach the Elephanta Caves?",
        answer:
          "The journey begins with a one-hour ferry ride from the Gateway of India across Mumbai Harbor. For the standard tour, we take the public ferry, but we can arrange a private boat for an additional fee. Upon reaching Elephanta Island, there's a climb of approximately 120 steps to reach the cave entrance, though a small toy train can cover the initial portion of the path for those who prefer not to walk.",
      },
      {
        question: "What should we wear for the cave visit?",
        answer:
          "Comfortable walking shoes are essential for exploring the caves, as the paths can be uneven and rocky. We recommend lightweight, breathable clothing suitable for warm weather, as the caves can be humid. A hat and sunscreen are also advisable, especially if you plan to explore the island before or after the cave visit.",
      },
    ],
  },
  {
    title: "Mumbai's Secret Gardens & Hidden Oases",
    description:
      "Discover the surprising green sanctuaries tucked within Mumbai's urban jungle, from historic botanical gardens and exclusive members-only parks to rooftop urban farms and the world's largest inner-city tropical forest.",
    images: [
      "/images/tours/mumbai/hanging-gardens.jpg",
      "/images/tours/mumbai/urban-forest.jpg",
    ],
    duration: "5 hours",
    price: "$60",
    rating: 4.5,
    tags: ["Nature", "Gardens", "Peaceful"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Nandini Desai, Botanist",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, though the experience varies seasonally. The monsoon season (June-September) transforms the gardens into lush green oases with flowing waterways and blooming tropical plants. The winter months (November-February) offer pleasant temperatures and clear skies ideal for outdoor exploration. Our guide adapts the tour to showcase the best seasonal highlights, from flowering seasons to fruit harvests in the urban farms.",
      },
      {
        question: "What should we wear for the garden tour?",
        answer:
          "Comfortable walking shoes are essential, as we will be exploring various gardens and parks. Lightweight, breathable clothing is recommended, especially during warmer months. A hat and sunscreen are advisable, and we suggest bringing a reusable water bottle to stay hydrated.",
      },
    ],
  },
];

export default mumbaiTours;
