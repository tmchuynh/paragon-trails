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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
    availableDates: [
      "2024-04-10",
      "2024-04-20",
      "2024-05-05",
      "2024-05-15",
      "2024-05-25",
      "2024-06-05",
      "2024-06-15",
      "2024-06-25",
      "2024-07-05",
      "2024-07-15",
      "2024-07-25",
      "2024-08-05",
      "2024-09-10",
      "2024-09-20",
      "2024-10-05",
    ],
    highlights: [
      "Early morning access to the Acropolis before the crowds arrive",
      "Expert archaeology guide with specialized knowledge of ancient Athens",
      "Exclusive entry to areas closed to regular visitors",
      "Panoramic views of Athens from the Acropolis",
      "Visit to the impressive Acropolis Museum with skip-the-line entry",
    ],
    inclusions: [
      "Professional licensed archaeology guide",
      "Hotel pickup and drop-off",
      "Skip-the-line tickets to all archaeological sites",
      "Bottled water and snacks",
      "Exclusive access to restricted areas (when available)",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Lunch and additional food/beverages",
      "Personal expenses",
      "Professional photography services",
    ],
    itinerary: [
      "7:30 AM: Hotel pickup and transfer to the Acropolis",
      "8:00 AM: Early access entry to the Acropolis with guided tour",
      "9:30 AM: Visit the Ancient Agora and Temple of Hephaestus",
      "11:00 AM: Explore the Roman Agora and Tower of the Winds",
      "12:00 PM: Visit the Acropolis Museum with expert commentary",
      "1:30 PM: Tour conclusion and hotel drop-off (or lunch recommendations)",
    ],
    meetingPoint:
      "Your Athens hotel lobby or apartment (within city center)",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    availableDates: [
      "2024-04-12",
      "2024-04-26",
      "2024-05-10",
      "2024-05-24",
      "2024-06-07",
      "2024-06-21",
      "2024-07-12",
      "2024-07-26",
      "2024-08-09",
      "2024-08-23",
      "2024-09-13",
      "2024-09-27",
      "2024-10-11",
    ],
    highlights: [
      "Guided tour of Athens' vibrant Central Market",
      "Selection of fresh, seasonal ingredients with a local chef",
      "Hands-on cooking class in a rooftop kitchen overlooking the Acropolis",
      "Learn authentic Greek recipes passed down through generations",
      "Enjoy the meal you've prepared with local wine pairings",
    ],
    inclusions: [
      "Market tour with professional chef",
      "All cooking ingredients and equipment",
      "Recipes to take home",
      "Full meal with wine and dessert",
      "Coffee or tea",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages",
      "Gratuities (optional)",
    ],
    itinerary: [
      "9:00 AM: Meet your chef at Athens Central Market",
      "9:15 AM: Tour the market and select fresh ingredients",
      "10:30 AM: Visit specialty food shops for additional items",
      "11:00 AM: Arrive at the cooking venue and begin preparation",
      "1:00 PM: Enjoy the meal you've prepared with local wine",
      "2:30 PM: Tour conclusion with recipes and cooking tips",
    ],
    meetingPoint:
      "Entrance of Athens Central Market (Varvakeios Agora), Athinas Street",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled activity.",
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

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
    availableDates: [
      "2024-04-15",
      "2024-04-30",
      "2024-05-15",
      "2024-05-30",
      "2024-06-15",
      "2024-06-30",
      "2024-07-15",
      "2024-07-30",
      "2024-08-15",
      "2024-08-30",
      "2024-09-15",
      "2024-09-30",
      "2024-10-15",
    ],
    highlights: [
      "Scenic drive along the stunning Athens Riviera coastline",
      "Visit the dramatic Temple of Poseidon perched on cliffs above the sea",
      "Witness a breathtaking sunset from one of Greece's most spectacular locations",
      "Wine tasting featuring excellent local Greek varieties",
      "Gourmet dinner at an authentic seaside taverna",
    ],
    inclusions: [
      "Transportation in luxury air-conditioned vehicle",
      "Professional English-speaking guide",
      "Entrance fees to the Temple of Poseidon",
      "Wine tasting of 3 Greek varieties",
      "Dinner at a seaside taverna (set menu)",
    ],
    exclusions: [
      "Additional food and drinks not specified",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    itinerary: [
      "4:00 PM: Departure from Athens (summer) / 2:00 PM (winter)",
      "5:00 PM: Arrive at Cape Sounion with guided tour of the Temple of Poseidon",
      "6:30 PM: Wine tasting with spectacular views",
      "7:30 PM: Watch the sunset from prime viewing location",
      "8:00 PM: Dinner at a traditional seaside taverna",
      "10:00 PM: Return to Athens",
    ],
    meetingPoint:
      "Your Athens hotel lobby or apartment (within city center)",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
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
    availableDates: [
      "2024-04-18",
      "2024-05-02",
      "2024-05-16",
      "2024-05-30",
      "2024-06-13",
      "2024-06-27",
      "2024-07-11",
      "2024-07-25",
      "2024-08-08",
      "2024-08-22",
      "2024-09-12",
      "2024-09-26",
      "2024-10-10",
    ],
    highlights: [
      "Explore hidden neighborhoods and local markets off the tourist trail",
      "Discover vibrant street art and learn about Athens' contemporary culture",
      "Visit family-run workshops and meet local artisans",
      "Enjoy traditional Greek coffee and pastries at a local kafeneio",
      "Experience the lively atmosphere of Athens' historic neighborhoods",
    ],
    inclusions: [
      "Local English-speaking guide",
      "Coffee or tea at a local cafe",
      "Pastry or snack at a local bakery",
      "Visit to a traditional market",
      "Small group size for a personalized experience",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Gratuities (optional)",
    ],
    itinerary: [
      "9:00 AM: Meet your guide in Monastiraki Square",
      "9:15 AM: Explore the vibrant Monastiraki Flea Market",
      "10:00 AM: Visit the historic neighborhood of Psiri",
      "10:45 AM: Discover the street art of Exarchia",
      "11:30 AM: Break at a traditional kafeneio for coffee and pastry",
      "12:00 PM: Visit the Central Market and learn about local ingredients",
      "1:00 PM: Tour conclusion and recommendations for further exploration",
    ],
    meetingPoint: "Monastiraki Square, in front of the Church of the Pantanassa",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
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
    availableDates: [
      "2024-04-22",
      "2024-05-06",
      "2024-05-20",
      "2024-06-03",
      "2024-06-17",
      "2024-07-01",
      "2024-07-15",
      "2024-07-29",
      "2024-08-12",
      "2024-08-26",
      "2024-09-09",
      "2024-09-23",
      "2024-10-07",
    ],
    highlights: [
      "Photography guidance from a professional photographer",
      "Visit to iconic landmarks and hidden gems",
      "Learn composition, lighting, and editing tips",
      "Capture the contrast of ancient and modern Athens",
      "Small group size for personalized instruction",
    ],
    inclusions: [
      "Professional photographer guide",
      "Photo editing software trial (if requested)",
      "Use of tripod and other photography equipment (if needed)",
      "Bottled water and snacks",
      "Digital copies of your best photos taken during the tour",
    ],
    exclusions: [
      "Camera and personal photography equipment",
      "Transportation to and from the meeting point",
      "Gratuities (optional)",
    ],
    itinerary: [
      "8:00 AM: Meet your photographer guide in Plaka",
      "8:15 AM: Visit the Acropolis for sunrise photography",
      "10:00 AM: Explore the Ancient Agora and Roman Agora",
      "11:30 AM: Street photography in the vibrant neighborhoods of Psiri and Monastiraki",
      "1:00 PM: Review and editing session at a local cafe",
      "2:00 PM: Tour conclusion and digital photo delivery",
    ],
    meetingPoint: "Plaka, Athens (exact location provided upon booking)",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
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
    availableDates: [
      "2024-04-14",
      "2024-04-28",
      "2024-05-12",
      "2024-05-26",
      "2024-06-09",
      "2024-06-23",
      "2024-07-14",
      "2024-07-28",
      "2024-08-11",
      "2024-08-25",
      "2024-09-14",
      "2024-09-28",
      "2024-10-12",
    ],
    highlights: [
      "Tasting of rare indigenous Greek wines not commonly found outside Greece",
      "Visit to three unique wine bars, each with its own character and specialty",
      "Guided by a certified sommelier with in-depth knowledge of Greek wines",
      "Pairing of wines with traditional Greek meze for a complete culinary experience",
      "Small group size for an intimate and personalized experience",
    ],
    inclusions: [
      "Wine tastings at three different wine bars",
      "Meze pairings with each wine tasting",
      "Guided by a certified sommelier",
      "Transportation between wine bars (if applicable)",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Additional food and drinks not specified",
      "Personal expenses",
      "Gratuities (optional)",
    ],
    itinerary: [
      "5:00 PM: Meet your sommelier at the first wine bar",
      "5:15 PM: Begin wine tasting experience with introduction to Greek wines",
      "6:00 PM: Continue to the second wine bar for more tastings",
      "6:45 PM: Visit the third wine bar, concluding with a dessert wine",
      "7:30 PM: Tour conclusion or optional dinner reservation at a nearby restaurant",
    ],
    meetingPoint: "First wine bar location provided upon booking",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
    availableDates: [
      "2024-04-16",
      "2024-04-23",
      "2024-05-07",
      "2024-05-21",
      "2024-06-04",
      "2024-06-18",
      "2024-07-02",
      "2024-07-16",
      "2024-07-30",
      "2024-08-13",
      "2024-08-27",
      "2024-09-10",
      "2024-09-24",
      "2024-10-08",
    ],
    highlights: [
      "Visit the Acropolis and stand where ancient gods were worshiped",
      "Explore the Agora where Athenian democracy was born",
      "See the Temple of Olympian Zeus, one of the Seven Wonders of the Ancient World",
      "Learn about the myths and legends from an expert guide",
      "Small group size for a personalized and engaging experience",
    ],
    inclusions: [
      "Professional licensed guide specializing in mythology",
      "Headsets to hear the guide clearly",
      "Entrance fees to all sites visited",
      "Bottled water",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Lunch and additional food/beverages",
      "Personal expenses",
    ],
    itinerary: [
      "9:00 AM: Meet your guide at the Acropolis Metro Station",
      "9:15 AM: Visit the Acropolis and its museum",
      "11:00 AM: Explore the Ancient Agora and learn about Athenian life",
      "12:30 PM: Tour the Temple of Olympian Zeus and Roman Agora",
      "1:30 PM: Enjoy a traditional Greek lunch (optional) or continue exploring",
      "3:00 PM: Tour conclusion and return to central Athens",
    ],
    meetingPoint: "Acropolis Metro Station, Makrygianni 1, Athens",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
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
    availableDates: [
      "2024-04-17",
      "2024-05-01",
      "2024-05-14",
      "2024-05-28",
      "2024-06-11",
      "2024-06-25",
      "2024-07-09",
      "2024-07-23",
      "2024-08-06",
      "2024-08-20",
      "2024-09-03",
      "2024-09-17",
      "2024-10-01",
    ],
    highlights: [
      "Morning rock climbing with stunning views of Athens",
      "Afternoon sea kayaking with cave and cove explorations",
      "All necessary equipment provided, with professional instruction",
      "Delicious packed lunch with local Greek specialties",
      "Small group size for a personalized and safe experience",
    ],
    inclusions: [
      "All necessary climbing and kayaking equipment",
      "Professional guides for both climbing and kayaking",
      "Transportation from/to central Athens",
      "Packed lunch with Greek specialties",
      "Small group size for personalized attention",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Additional food and drinks",
      "Personal expenses",
    ],
    itinerary: [
      "7:30 AM: Depart from Athens to Hymettus Mountain",
      "8:00 AM: Arrive at the climbing site and safety briefing",
      "8:30 AM: Morning rock climbing session",
      "12:00 PM: Lunch break and transfer to the kayaking location",
      "1:00 PM: Afternoon sea kayaking session",
      "5:00 PM: Return to Athens",
      "6:00 PM: Tour conclusion",
    ],
    meetingPoint: "Central Athens location (exact details provided upon booking)",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "local",
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
    availableDates: [
      "2024-04-19",
      "2024-05-03",
      "2024-05-17",
      "2024-05-31",
      "2024-06-14",
      "2024-06-28",
      "2024-07-12",
      "2024-07-26",
      "2024-08-09",
      "2024-08-23",
      "2024-09-13",
      "2024-09-27",
      "2024-10-11",
    ],
    highlights: [
      "Interactive treasure hunt exploring Athens' ancient and modern sites",
      "Engaging puzzles and clues based on Greek mythology and history",
      "Family-friendly activities that entertain and educate",
      "Flexible route and difficulty level tailored to your group",
      "Fun and memorable way to explore Athens with your family",
    ],
    inclusions: [
      "All materials for the treasure hunt",
      "Map of the treasure hunt route",
      "Small prize for the winning team",
      "Professional guide to lead the treasure hunt",
      "Fun and educational experience for the whole family",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Gratuities (optional)",
    ],
    itinerary: [
      "9:00 AM: Meet your guide and receive the treasure hunt materials",
      "9:15 AM: Begin the treasure hunt at the first clue location",
      "11:00 AM: Complete the treasure hunt and return to the starting point",
      "11:15 AM: Prize ceremony for the winning team",
      "11:30 AM: Tour conclusion and recommendations for family-friendly activities in Athens",
    ],
    meetingPoint: "Syntagma Square, in front of the Greek Parliament building",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
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
    availableDates: [
      "2024-04-21",
      "2024-05-05",
      "2024-05-19",
      "2024-06-02",
      "2024-06-16",
      "2024-06-30",
      "2024-07-14",
      "2024-07-28",
      "2024-08-11",
      "2024-08-25",
      "2024-09-08",
      "2024-09-22",
      "2024-10-06",
    ],
    highlights: [
      "Private yacht cruise with personalized itinerary",
      "Gourmet dinner at a Michelin-starred restaurant",
      "Stunning views of the Athens Riviera and Acropolis",
      "Luxury transportation to and from your hotel",
      "Exclusive and intimate experience",
    ],
    inclusions: [
      "Private yacht for the duration of the cruise",
      "Professional captain and crew",
      "Gourmet dinner with wine pairings",
      "Snacks and beverages on the yacht",
      "Luxury transportation to and from the yacht",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Additional food and drinks not specified",
      "Personal expenses",
    ],
    itinerary: [
      "3:00 PM: Pickup from your hotel and transfer to the marina",
      "4:00 PM: Embark on your private yacht and safety briefing",
      "4:30 PM: Cruise along the Athens Riviera with stops at scenic spots",
      "7:00 PM: Dinner at a Michelin-starred restaurant with Acropolis views",
      "9:00 PM: Return to the yacht and continue cruising or head back",
      "10:00 PM: Disembark at the marina and transfer back to your hotel",
    ],
    meetingPoint: "Your Athens hotel lobby or apartment (within city center)",
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
];

export default athensTours;
