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
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages, including families with children. We adapt our pace and content to ensure an engaging experience for everyone. Children under 12 receive a discounted rate, and infants can join free of charge if they do not require their own seat.",
      },
      {
        question: "What should we wear for the Acropolis tour?",
        answer:
          "Comfortable walking shoes are essential as the Acropolis has uneven terrain and many steps. We recommend wearing light, breathable clothing suitable for warm weather, and a hat or sunglasses for sun protection. Please note that modest dress is required when visiting the sacred sites, so shoulders and knees should be covered.",
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
      {
        question: "Do I need any prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! Our classes are designed for all skill levels, from complete beginners to experienced cooks. Chef Sophia will guide you through each step, providing tips and techniques to enhance your culinary skills while ensuring you have a fun and enjoyable experience.",
      },
      {
        question: "Is the cooking class suitable for children?",
        answer:
          "Yes, this class is family-friendly and children aged 8 and up are welcome to participate. We encourage families to cook together, and our chef will adapt the activities to ensure everyone can contribute safely. Younger children can join as observers or help with simpler tasks like mixing ingredients or decorating dishes.",
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
      {
        question: "Is the dinner included in the tour price?",
        answer:
          "Yes, a delicious dinner at a traditional seaside taverna is included in the tour price. You'll enjoy a selection of fresh seafood, local specialties, and a glass of wine while taking in the stunning views of the Aegean Sea. Vegetarian options are available upon request.",
      },
      {
        question: "How long do we spend at the Temple of Poseidon?",
        answer:
          "We spend approximately 1 hour at the Temple of Poseidon, allowing time to explore the site, take photos, and enjoy the panoramic views. The temple is particularly beautiful during sunset when the sky turns vibrant colors against the ancient ruins.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Yes, round-trip transportation from your hotel or a central meeting point in Athens is included. Our comfortable air-conditioned vehicle will take you along the scenic coastal road to Cape Sounion and back.",
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
      {
        question: "Will we visit any historical sites?",
        answer:
          "While this tour focuses on contemporary local culture, we do pass by some lesser-known historical sites and landmarks. However, the emphasis is on experiencing modern Athenian life rather than in-depth historical exploration. If you're interested in a more historical-focused tour, we can recommend alternatives.",
      },
      {
        question: "Are there any food tastings included?",
        answer:
          "Yes, we include several food tastings at local markets and shops, such as traditional pastries, olives, cheeses, and coffee. If you have specific dietary restrictions or preferences, please let us know in advance so we can accommodate you.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. We adapt the pace and content to keep younger participants engaged, including interactive elements like scavenger hunts or storytelling about local legends. Parents often find this a great way to introduce their kids to the culture and daily life of Athens.",
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
      {
        question: "Do I need prior photography experience?",
        answer:
          "No prior photography experience is necessary! This tour is designed for all skill levels, from complete beginners to advanced photographers. Our guide will tailor the instruction to your current knowledge and help you improve your skills while enjoying the sights of Athens.",
      },
      {
        question: "Can I bring a tripod?",
        answer:
          "Yes, you can bring a tripod, but please let us know in advance so we can plan accordingly. Some locations may have restrictions on tripod use, especially during busy times, but we will find suitable spots where you can set up for long exposure shots or group photos.",
      },
      {
        question: "What if it rains on the day of the tour?",
        answer:
          "Photography is still possible in light rain, and we can provide ponchos if needed. However, if the weather conditions are severe, we will contact you to reschedule or offer a full refund. Athens has a unique charm even in overcast weather, and our guide will suggest alternative indoor locations with interesting architecture and atmosphere.",
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
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 48 hours in advance to secure your spot, as this tour is very popular and space is limited. If you have a larger group or specific date requests, please contact us directly to check availability.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Transportation is not included in the tour price, but we can arrange private transfers from your hotel or preferred location for an additional fee. Alternatively, the wine bars are located within walking distance of central Athens and easily accessible by public transport.",
      },
      {
        question: "Can I purchase wine to take home?",
        answer:
          "Yes, each wine bar offers the option to purchase bottles of the wines you taste during the tour. Our sommelier can provide recommendations based on your preferences, and we can assist with shipping arrangements if needed.",
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
      {
        question: "What sites will we visit during the tour?",
        answer:
          "We will visit key sites such as the Acropolis, Ancient Agora, Temple of Olympian Zeus, and the Roman Agora. Each location is tied to specific myths and legends, allowing us to connect the physical sites with the stories of gods, heroes, and mythical creatures. The tour is designed to provide a comprehensive overview of how mythology shaped ancient Athens.",
      },
      {
        question: "How long is the walking distance?",
        answer:
          "The total walking distance is approximately 2.5 km (1.5 miles) at a leisurely pace, with plenty of stops for storytelling and exploration. We take breaks at each site to allow time for questions and photos. The route is mostly flat with some gentle slopes, making it accessible for all ages and fitness levels.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot, especially during peak tourist seasons. This tour is very popular, and space is limited to ensure an intimate experience. If you have a larger group or specific date requests, please contact us directly to check availability.",
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
      {
        question: "What should I bring for the adventure tour?",
        answer:
          "Please wear comfortable athletic clothing suitable for outdoor activities, and bring a hat, sunscreen, and a refillable water bottle. We provide all climbing gear, kayaks, and safety equipment. Swimwear is recommended for the kayaking portion, and we suggest bringing a change of clothes for after the activities.",
      },
      {
        question: "Is lunch included in the tour price?",
        answer:
          "Yes, a packed lunch is included featuring local Greek specialties such as sandwiches with feta cheese, olives, and seasonal fruits. Vegetarian options are available upon request. We take breaks during the day to enjoy our meal while taking in the beautiful surroundings.",
      },
      {
        question: "What is the age limit for this tour?",
        answer:
          "This tour is suitable for ages 10 and up. Children under 16 must be accompanied by an adult. We can adapt the activities to ensure a fun and safe experience for younger participants, including easier climbing routes and shorter kayaking distances if needed.",
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
      {
        question: "How many people can participate in the treasure hunt?",
        answer:
          "The treasure hunt is designed for groups of 2-6 participants, making it ideal for families or small groups of friends. If you have a larger group, we can arrange multiple teams to compete against each other, adding an extra layer of excitement. Each team will receive its own set of clues and challenges to solve.",
      },
      {
        question: "What should we wear for the treasure hunt?",
        answer:
          "Comfortable walking shoes are essential, as we will be exploring various neighborhoods and historical sites. Dress in layers to accommodate changing weather conditions, and consider bringing a small backpack with water and snacks. The tour is designed to be fun and active, so casual attire is recommended.",
      },
      {
        question: "Is this tour available year-round?",
        answer:
          "Yes, the family treasure hunt operates year-round, although the specific route may vary slightly based on seasonal events or site accessibility. We can also customize the experience for special occasions like birthdays or family reunions with advance notice.",
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
      {
        question: "Is transportation included in the luxury tour?",
        answer:
          "Yes, we provide private chauffeur service to and from your hotel or preferred location in Athens. The yacht will be waiting for you at the marina, and after your gourmet dinner, your driver will be ready to take you back at your convenience.",
      },
      {
        question: "What should we wear for the yacht cruise and dinner?",
        answer:
          "Smart casual attire is recommended for both the yacht cruise and the gourmet dinner. Comfortable shoes are best for the yacht, while the restaurant has a smart casual dress code. We suggest bringing a light jacket or wrap for the evening breeze on the water.",
      },
      {
        question: "Is the yacht suitable for special occasions?",
        answer:
          "Yes, this luxury experience is perfect for celebrating special occasions such as anniversaries, birthdays, or romantic getaways. We can arrange special touches like floral arrangements, personalized menus, or even a photographer to capture your memories. Please let us know in advance so we can make the necessary arrangements.",
      },
    ],
  },
];

export default athensTours;
