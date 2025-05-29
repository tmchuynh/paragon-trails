import { Tour } from "@/lib/interfaces/services/tours";
export const athensTours: Tour[] = [
  {
    title: "Acropolis & Ancient Athens Private Experience",
    description:
      "Explore the cradle of Western civilization with an archaeology expert guiding you through the Acropolis and ancient sites, with early access before crowds arrive and exclusive entry to areas closed to regular visitors.",
    images: [
      "/images/tours/athens/acropolis-sunrise.jpg",
      "/images/tours/athens/parthenon-close.jpg",
    ],
    duration: "5 hours",
    price: "$155",
    rating: 4.9,
    tags: ["Ancient Greece", "Archaeology", "Early Access"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Papadopoulos",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How early do we need to start for the early access?",
        answer:
          "We begin with hotel pickup approximately 1 hour before the Acropolis opens to the public. This early start is well worth it as you'll experience the magnificent Parthenon in the golden morning light with unobstructed views and peaceful surroundings before the crowds and heat of the day build up.",
      },
    ],
  },
  {
    title: "Athens Food Journey & Cooking Class",
    description:
      "Discover Greek culinary traditions with a market tour selecting fresh ingredients, followed by a cooking class in a rooftop kitchen with Acropolis views where you'll create authentic dishes under the guidance of a local chef.",
    images: [
      "/images/tours/athens/food-market.jpg",
      "/images/tours/athens/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Sophia Dimitriou",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we cook in the class?",
        answer:
          "You'll prepare a complete Greek meal including classics like moussaka or pastitsio, traditional Greek salad with locally produced feta, hand-rolled dolmades (stuffed grape leaves), and baklava or galaktoboureko for dessert. The exact menu may vary slightly based on seasonal ingredients, and vegetarian options are readily available upon request.",
      },
    ],
  },
  {
    title: "Cape Sounion Sunset & Temple of Poseidon",
    description:
      "Journey along the stunning Athens Riviera to Cape Sounion and witness a breathtaking sunset from the ancient Temple of Poseidon perched on the cliffs above the Aegean Sea. This romantic evening tour includes wine tasting and a gourmet dinner at a seaside taverna.",
    images: [
      "/images/tours/athens/sounion-sunset.jpg",
      "/images/tours/athens/poseidon-temple.jpg",
    ],
    duration: "6 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Sunset", "Ancient Temple", "Seaside"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Andreas Nikolaou",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What time does the tour depart?",
        answer:
          "Our departure time varies throughout the year to ensure we arrive at Cape Sounion approximately one hour before sunset. In summer months, we typically depart Athens around 4:00-5:00 PM, while in winter the departure is earlier, around 2:00-3:00 PM. The exact time will be confirmed when you book based on your specific date.",
      },
    ],
  },
  {
    title: "Hidden Athens: Secret Neighborhoods & Local Life",
    description:
      "Discover the authentic Athens that tourists rarely see as you explore hidden neighborhoods, bustling local markets, street art scenes, and family-run workshops. Meet the real Athenians who keep ancient traditions alive while embracing modern Greek culture.",
    images: [
      "/images/tours/athens/local-market.jpg",
      "/images/tours/athens/street-art.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Local Life", "Hidden Gems", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dimitri Alexopoulos",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3-4 km at a leisurely pace with plenty of stops. We explore some hilly neighborhoods with occasional steps, so comfortable walking shoes are recommended. The route can be modified to accommodate different mobility levels with advance notice.",
      },
    ],
  },
  {
    title: "Athens Photography Tour: Capturing Ancient & Modern",
    description:
      "Perfect your photography skills while capturing the unique juxtaposition of ancient ruins against modern Athens. Learn composition techniques and the best angles from a professional photographer at both iconic landmarks and hidden viewpoints.",
    images: [
      "/images/tours/athens/photography-acropolis.jpg",
      "/images/tours/athens/photography-street.jpg",
    ],
    duration: "3 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Photography", "Landmarks", "Urban"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maria Katsarou",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What kind of camera do I need?",
        answer:
          "This tour is suitable for any type of camera, from smartphones to DSLRs. Our professional photographer guide will provide tips specific to your equipment. More important than your gear is your interest in learning composition, lighting, and storytelling through images. We can even arrange rental of professional equipment with advance notice if you'd like to try more advanced photography during the tour.",
      },
    ],
  },
  {
    title: "Greek Wine Odyssey: Athens Tasting Experience",
    description:
      "Embark on a journey through Greece's ancient winemaking tradition with visits to three distinctive wine bars, sampling rare indigenous grape varieties and classic Greek meze pairings with guidance from a certified sommelier.",
    images: [
      "/images/tours/athens/wine-tasting.jpg",
      "/images/tours/athens/wine-cellar.jpg",
    ],
    duration: "4 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Wine", "Tasting", "Culinary"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Eleni Konstantinou, Certified Sommelier",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many wines will we taste?",
        answer:
          "You'll sample 12-15 different wines throughout the evening, representing the diverse terroirs and indigenous grape varieties of Greece. Each wine is served with complementary meze (Greek appetizers) specifically chosen to enhance the tasting experience. Non-alcoholic alternatives are available with advance notice.",
      },
    ],
  },
  {
    title: "Mythological Athens: Walking in the Footsteps of Gods",
    description:
      "Bring ancient Greek mythology to life as you explore the sites where gods and heroes once tread. This storytelling tour connects archaeological sites with the captivating myths and legends that have influenced world culture for millennia.",
    images: [
      "/images/tours/athens/mythology-tour.jpg",
      "/images/tours/athens/ancient-agora.jpg",
    ],
    duration: "3.5 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Mythology", "Storytelling", "Ancient Sites"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Georgios Mavridis",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Absolutely! In fact, children often find this tour particularly engaging. Our guides adapt their storytelling style to captivate younger audiences, focusing on the adventure aspects of Greek mythology while omitting some of the more mature themes. The tour includes interactive elements where children can play roles in famous myths, making history come alive for them in a memorable way.",
      },
    ],
  },
  {
    title: "Athens Adventure: Rock Climbing & Sea Kayaking",
    description:
      "Experience the natural side of Athens with morning rock climbing on the limestone crags of Hymettus Mountain, followed by afternoon sea kayaking along the scenic Athens Riviera with cave explorations and swimming breaks.",
    images: [
      "/images/tours/athens/rock-climbing.jpg",
      "/images/tours/athens/sea-kayaking.jpg",
    ],
    duration: "8 hours",
    price: "$175",
    rating: 4.7,
    tags: ["Adventure", "Climbing", "Kayaking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Alex Papadakis",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need prior experience with rock climbing or kayaking?",
        answer:
          "No prior experience is necessary. Our guides provide comprehensive instruction suitable for beginners, with routes and kayaking conditions adapted to your comfort level. All necessary safety equipment is provided, and we begin with thorough training before starting each activity. More experienced adventurers will also find challenging options to suit their skill level.",
      },
    ],
  },
  {
    title: "Family Mythology Quest: Athens Treasure Hunt",
    description:
      "Turn Athens into a playground of discovery with this interactive family treasure hunt. Follow clues through ancient sites and modern neighborhoods while solving puzzles based on Greek mythology and history.",
    images: [
      "/images/tours/athens/family-treasure-hunt.jpg",
      "/images/tours/athens/kids-activity.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Family", "Interactive", "Educational"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Christina Demetriou",
    tourCategoryId: "family",
    faqs: [
      {
        question: "What age group is this tour best suited for?",
        answer:
          "The treasure hunt is designed primarily for families with children aged 6-14, but we've found that younger siblings (4-5) and teenagers also enjoy the experience. We adapt the difficulty of clues and puzzles to your specific family group. Parents and grandparents often report having just as much fun as the children while learning fascinating historical facts presented in an engaging way.",
      },
    ],
  },
  {
    title: "Luxury Athens: Private Yacht & Gourmet Experience",
    description:
      "Indulge in the ultimate Athens luxury experience with a private yacht cruise along the Athens Riviera, followed by a bespoke gourmet dinner at a Michelin-starred restaurant with panoramic Acropolis views.",
    images: [
      "/images/tours/athens/luxury-yacht.jpg",
      "/images/tours/athens/gourmet-dining.jpg",
    ],
    duration: "7 hours",
    price: "$895",
    rating: 5.0,
    tags: ["Luxury", "Yacht", "Gourmet"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Stavros Constantinou",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Can the yacht itinerary be customized?",
        answer:
          "Absolutely. Your private yacht cruise can be fully tailored to your preferences. Popular options include stopping at secluded swimming coves, visiting nearby islands like Aegina or Hydra, scheduling sunset viewing locations, or extending the sailing time. Similarly, the dinner menu can be customized based on your dietary preferences and tastes, with wine pairings selected by the restaurant's sommelier.",
      },
    ],
  },
];

export default athensTours;
