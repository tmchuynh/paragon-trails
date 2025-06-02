import { Tour } from "@/lib/interfaces/services/tours";

export const fijiTours: Tour[] = [
  {
    title: "Island Hopping Adventure: Yasawa Islands Exploration",
    description:
      "Discover the pristine Yasawa Islands on this island-hopping adventure, with white sand beaches, spectacular coral reefs, and authentic cultural experiences in traditional Fijian villages.",
    city: "Nadi",
    country: "Fiji",
    region: "Yasawa Islands",
    images: [
      "/images/tours/fiji/yasawa-islands.jpg",
      "/images/tours/fiji/blue-lagoon.jpg",
    ],
    duration: "5 days",
    price: "$1,250",
    rating: 4.9,
    tags: ["Islands", "Snorkeling", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Port Denarau Marina, Denarau Island, Fiji",
      coordinates: {
        latitude: -17.7674,
        longitude: 177.38,
      },
      instructions:
        "Meet at the Awesome Adventures Fiji check-in counter at Port Denarau Marina. Please arrive 90 minutes before departure to complete check-in procedures and receive your boarding passes.",
      contactNumber: "+679 675 0500",
      contactEmail: "adventures@paragontrails.com",
    },
    availableDates: [
      "2024-04-10",
      "2024-04-24",
      "2024-05-08",
      "2024-05-22",
      "2024-06-05",
      "2024-06-19",
      "2024-07-03",
      "2024-07-17",
      "2024-08-07",
      "2024-08-21",
      "2024-09-04",
      "2024-09-18",
      "2024-10-09",
      "2024-10-23",
    ],
    highlights: [
      "Stay on 3 different Yasawa Islands to experience varied landscapes and village life",
      "Snorkel in the famous Blue Lagoon with crystal clear waters",
      "Participate in traditional Fijian kava ceremonies and cultural performances",
      "Hike to panoramic viewpoints on volcanic island landscapes",
      "Visit local villages and meet indigenous Fijians to learn about their way of life",
    ],
    inclusions: [
      "4 nights accommodation in beachfront bures on different islands",
      "All boat transfers between islands via the Yasawa Flyer catamaran",
      "Daily breakfast, lunch and dinner",
      "Guided snorkeling excursions with equipment provided",
      "Village visits and cultural demonstrations",
      "Traditional Fijian lovo feast (earth oven cooking)",
    ],
    exclusions: [
      "Flights to and from Fiji",
      "Airport transfers to/from Port Denarau",
      "Alcoholic beverages",
      "Optional activities like scuba diving or jet skiing",
      "Travel insurance",
      "Environmental levy ($20 FJD paid directly to resorts)",
    ],
    itinerary: [
      "Day 1: Depart Port Denarau Marina for first island, welcome ceremony, afternoon snorkeling",
      "Day 2: Morning guided hike, traditional weaving demonstration, transfer to second island",
      "Day 3: Visit to limestone caves, snorkeling with manta rays (seasonal), village visit",
      "Day 4: Transfer to third island, sunset kayaking, traditional lovo feast and cultural performance",
      "Day 5: Morning free time for relaxation or water activities, return to Port Denarau",
    ],
    cancellationPolicy:
      "Full refund if canceled 30 days before the scheduled tour. 50% refund if canceled 15-29 days in advance. No refund for cancellations less than 15 days before tour start date.",
    faqs: [
      {
        question: "What islands will we visit?",
        answer:
          "The tour includes stops at Waya, Naviti, and the Blue Lagoon region, with the exact islands determined by weather conditions. Each offers a distinct landscape from volcanic formations to pristine beaches.",
      },
      {
        question: "Is accommodation included?",
        answer:
          "Yes, the tour includes 4 nights in a mix of beachfront bures (traditional Fijian bungalows) and eco-resorts on different islands. All accommodations are carefully selected for comfort, authenticity, and stunning locations.",
      },
      {
        question: "What should I pack?",
        answer:
          "Pack light! Bring swimwear, sun protection, reef-safe sunscreen, lightweight clothing, a hat, sturdy sandals, and a refillable water bottle. Don't forget your camera and any necessary medications.",
      },
      {
        question: "What level of physical fitness is required?",
        answer:
          "A moderate fitness level is recommended as activities include swimming, snorkeling, hiking, and water sports. However, all activities are optional, and you can choose your level of participation. The island terrain can be uneven and some bures may require climbing steps.",
      },
      {
        question: "Is there electricity and Wi-Fi on the islands?",
        answer:
          "Most islands have electricity, typically via generators operating during specific hours (usually 6-10 PM). Wi-Fi is limited or unavailable on more remote islands, offering a perfect digital detox. We recommend bringing portable chargers for electronic devices and adapters for Fiji's power outlets (same as Australia/New Zealand).",
      },
    ],
  },
  {
    title: "Traditional Fijian Village Stay & Cultural Immersion",
    description:
      "Experience authentic Fijian life with a homestay in a traditional village, participating in daily activities, ceremonies, and learning about indigenous customs, traditions, and sustainable practices.",
    city: "Navala",
    country: "Fiji",
    region: "Viti Levu",
    images: [
      "/images/tours/fiji/kava-ceremony.jpg",
      "/images/tours/fiji/village-life.jpg",
    ],
    duration: "3 days",
    price: "$550",
    rating: 4.8,
    tags: ["Cultural", "Village", "Homestay"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Navala Village, Ba Province, Viti Levu, Fiji",
      coordinates: {
        latitude: -17.6721,
        longitude: 177.6811,
      },
      instructions:
        "Meet our representative at Nadi International Airport arrivals hall for transfer to Navala Village. Please look for a driver holding a sign with 'Paragon Cultural Immersion' written on it. Transfer departure is at 10:00 AM.",
      contactNumber: "+679 770 1234",
      contactEmail: "cultural@paragontrails.com",
    },
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
    ],
    highlights: [
      "Live with a Fijian family in one of Fiji's most traditional villages",
      "Participate in an authentic sevusevu (kava) welcoming ceremony",
      "Learn traditional crafts like mat weaving and tapa cloth making",
      "Join fishing, farming, and cooking activities with village residents",
      "Experience Sunday church service with renowned Fijian choir singing",
    ],
    inclusions: [
      "Airport transfers to/from Navala Village",
      "2 nights accommodation with a host family",
      "All meals prepared by your host family",
      "Cultural activities and demonstrations",
      "Village contribution fee",
      "English-speaking local guide",
    ],
    exclusions: [
      "Personal gifts for host family (recommended but optional)",
      "Additional transportation outside the scheduled program",
      "Personal expenses",
      "Travel insurance",
      "Alcoholic beverages",
    ],
    itinerary: [
      "Day 1: Airport pickup, scenic drive to village, welcome sevusevu ceremony, village orientation, traditional dinner with host family",
      "Day 2: Morning farming activities, traditional craft workshops, lunch preparation, afternoon fishing or river swimming, evening storytelling and kava session",
      "Day 3: Optional church service, traditional Sunday lunch, farewell ceremony, return to Nadi",
    ],
    cancellationPolicy:
      "Full refund if canceled 21 days before the scheduled tour. 50% refund if canceled 14-20 days in advance. No refund for cancellations less than 14 days before tour start date.",
    faqs: [
      {
        question: "What is a typical day like during the village stay?",
        answer:
          "Days begin with breakfast with your host family, followed by participating in daily village activities such as farming, fishing, weaving, or cooking. Afternoons include cultural workshops and community gatherings. Evenings feature shared meals, storytelling, and often music or dance.",
      },
      {
        question: "What are the sleeping arrangements?",
        answer:
          "Accommodation is in a family home or traditional bure (thatched hut) within the village. Facilities are simple but clean, with basic bathrooms that may be shared. Sleeping arrangements are typically on comfortable mats with clean bedding.",
      },
      {
        question: "What cultural protocols should I be aware of?",
        answer:
          "Our guide will brief you thoroughly, but key protocols include presenting a sevusevu (kava offering) to the chief, dressing modestly (covering shoulders and knees), removing hats in the village, and not touching anyone's head as it's considered sacred. These signs of respect are greatly appreciated by your hosts.",
      },
      {
        question: "Is there electricity or running water?",
        answer:
          "Navala Village has limited electricity and basic running water. There are shared facilities for bathing and toilets. We recommend bringing a flashlight, portable charger for electronic devices, and biodegradable toiletries. This authentic experience allows you to understand how traditional Fijian communities live sustainably.",
      },
      {
        question: "What should I bring as gifts for my host family?",
        answer:
          "While not required, small gifts are appreciated as a gesture of gratitude. Good options include educational supplies for children (books, pens, notebooks), practical household items (kitchen tools, solar lights), or specialty food items from your home country. Avoid expensive electronics or items that might create inequality within the village.",
      },
    ],
  },
  {
    title: "Fiji Marine Conservation Experience",
    description:
      "Combine adventure with purpose by joining marine biologists in coral reef restoration efforts, endangered sea turtle monitoring, and sustainable fishing practices, all while enjoying pristine beaches and world-class snorkeling.",
    city: "Savusavu",
    country: "Fiji",
    region: "Vanua Levu",
    images: [
      "/images/tours/fiji/coral-planting.jpg",
      "/images/tours/fiji/turtle-monitoring.jpg",
    ],
    duration: "7 days",
    price: "$1,850",
    rating: 4.7,
    tags: ["Conservation", "Marine Life", "Educational"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Jean-Michel Cousteau Resort, Savusavu, Vanua Levu, Fiji",
      coordinates: {
        latitude: -16.775,
        longitude: 179.3408,
      },
      instructions:
        "Meet at the Conservation Center at Jean-Michel Cousteau Resort. Transportation from Savusavu Airport to the resort is included - our representative will meet you at arrivals. Please provide flight details at least 7 days before arrival.",
      contactNumber: "+679 885 0188",
      contactEmail: "conservation@paragontrails.com",
    },
    availableDates: [
      "2024-04-15",
      "2024-04-29",
      "2024-05-13",
      "2024-05-27",
      "2024-06-10",
      "2024-06-24",
      "2024-07-08",
      "2024-07-22",
      "2024-08-05",
      "2024-08-19",
      "2024-09-09",
      "2024-09-23",
    ],
    highlights: [
      "Work alongside marine biologists on real conservation projects",
      "Learn coral fragmentation and transplantation techniques",
      "Participate in sea turtle monitoring and protection programs",
      "Conduct reef surveys to contribute to long-term scientific research",
      "Engage with local communities on sustainable fishing practices",
    ],
    inclusions: [
      "6 nights eco-friendly accommodation",
      "All meals featuring locally-sourced sustainable ingredients",
      "Conservation equipment and materials",
      "Training by professional marine biologists",
      "Daily conservation activities and snorkeling excursions",
      "Airport transfers to/from Savusavu",
      "Certificate of participation and project impact report",
    ],
    exclusions: [
      "Flights to/from Fiji and domestic flights to Savusavu",
      "Optional SCUBA diving certification or dives",
      "Personal snorkeling gear (available for rent)",
      "Travel insurance (required)",
      "Alcoholic beverages",
      "Gratuities",
    ],
    itinerary: [
      "Day 1: Arrival, orientation, and introduction to marine conservation projects",
      "Day 2: Coral reef ecology training and initial snorkeling survey",
      "Day 3: Coral fragmentation workshop and transplantation activities",
      "Day 4: Sea turtle monitoring and nest protection techniques",
      "Day 5: Reef health assessment and data collection methodologies",
      "Day 6: Community outreach program on sustainable fishing practices",
      "Day 7: Final conservation activity, impact review, and departure",
    ],
    cancellationPolicy:
      "Full refund if canceled 60 days before the scheduled program. 50% refund if canceled 30-59 days in advance. No refund for cancellations less than 30 days before program start date.",
    faqs: [
      {
        question: "Do I need scientific knowledge to participate?",
        answer:
          "No prior scientific experience is necessary. Our marine biologists provide comprehensive training in all conservation techniques, data collection methods, and species identification at the beginning of your stay.",
      },
      {
        question: "What conservation activities will I participate in?",
        answer:
          "Activities vary based on seasonal needs but typically include coral fragmentation and planting, reef health surveys, beach cleanups, turtle nesting site monitoring, and community education projects. You'll typically spend 4-5 hours daily on these activities.",
      },
      {
        question: "Is this suitable for families?",
        answer:
          "The program is best suited for families with children aged 12+ due to the nature of the activities. Younger children may participate in modified activities with parental supervision.",
      },
      {
        question: "Do I need to be SCUBA certified?",
        answer:
          "No, all conservation activities can be conducted while snorkeling in shallow water. However, if you're already SCUBA certified, you may have opportunities for deeper coral restoration work. We offer optional SCUBA certification courses at an additional cost if you're interested in learning during your stay.",
      },
      {
        question: "What is the accommodation like?",
        answer:
          "You'll stay in eco-friendly bures (traditional Fijian bungalows) with modern amenities including solar power, rainwater collection systems, and natural ventilation. Each bure has a private bathroom with hot water, comfortable beds with mosquito netting, and a veranda overlooking the ocean or garden. The resort emphasizes sustainability while maintaining comfort.",
      },
    ],
  },
  {
    title: "Luxury Private Island Retreat",
    description:
      "Escape to your own private island paradise with this exclusive retreat featuring overwater bungalows, personal butler service, world-class diving, gourmet dining, and bespoke experiences tailored to your preferences.",
    city: "Mamanuca Islands",
    country: "Fiji",
    region: "Western Division",
    images: [
      "/images/tours/fiji/overwater-bungalow.jpg",
      "/images/tours/fiji/private-island.jpg",
    ],
    duration: "5 days",
    price: "$5,950",
    rating: 5.0,
    tags: ["Luxury", "Private Island", "Exclusive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address: "Private Island Resort, Mamanuca Islands, Fiji",
      coordinates: {
        latitude: -17.6333,
        longitude: 177.0833,
      },
      instructions:
        "VIP meet and greet at Nadi International Airport upon arrival. You will be escorted to private helicopter or luxury yacht transfer directly to the island (transfer method of your choice). Please provide flight details at time of booking.",
      contactNumber: "+679 888 1234",
      contactEmail: "luxury@paragontrails.com",
    },
    availableDates: [
      "2024-04-05",
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
      "2024-09-06",
      "2024-09-20",
      "2024-10-04",
      "2024-10-18",
    ],
    highlights: [
      "Stay in a luxury overwater bungalow with private infinity pool",
      "Personal butler service throughout your stay",
      "Private beach picnics and intimate dining experiences",
      "World-class diving and snorkeling on pristine coral reefs",
      "Bespoke experiences tailored to your preferences",
    ],
    inclusions: [
      "4 nights luxury accommodation in an overwater bungalow",
      "Private helicopter or yacht transfers to/from the island",
      "All gourmet meals and premium beverages",
      "Personal butler service",
      "Daily spa treatments",
      "Private snorkeling and diving excursions",
      "Sunset champagne cruises",
      "Use of all water sports equipment",
    ],
    exclusions: [
      "International flights to/from Fiji",
      "Premium wine and champagne selections (beyond the included house offerings)",
      "Specialized spa treatments beyond the daily included treatment",
      "Personal shopping purchases",
      "Gratuities (entirely at your discretion)",
    ],
    itinerary: [
      "Day 1: VIP airport greeting, luxury transfer to island, welcome ceremony, champagne dinner on your private deck",
      "Day 2: Breakfast delivered by canoe, private guided snorkeling tour, beach picnic lunch, afternoon spa treatment, sunset cruise",
      "Day 3: Morning yoga, helicopter excursion to waterfall for private picnic (optional), afternoon relaxation, private beach dinner under the stars",
      "Day 4: Morning diving or snorkeling, lunch on a private sandbank, cultural performance, farewell dinner preparation with resort chef",
      "Day 5: Final breakfast, optional morning activity, luxury transfer back to mainland",
    ],
    cancellationPolicy:
      "Full refund if canceled 90 days before arrival. 75% refund if canceled 60-89 days before arrival. 50% refund if canceled 30-59 days before arrival. No refund for cancellations less than 30 days before scheduled arrival.",
    faqs: [
      {
        question: "How do we reach the private island?",
        answer:
          "Transportation is via private seaplane or luxury boat transfer, depending on your preference and weather conditions. The journey itself offers spectacular aerial views of the Fijian archipelago and is part of the luxury experience.",
      },
      {
        question: "What's included in the luxury package?",
        answer:
          "The package includes accommodation in a premium overwater bungalow, all meals and premium beverages, daily spa treatment, private snorkeling and diving excursions, sunset cruise, island picnics, and personalized activities based on your interests.",
      },
      {
        question: "Can special occasions be arranged?",
        answer:
          "Absolutely! We specialize in creating memorable celebrations for anniversaries, honeymoons, and special birthdays. Options include private beach dinners under the stars, champagne breakfast on a secluded sandbank, or traditional Fijian blessing ceremonies.",
      },
      {
        question: "Is the island completely private?",
        answer:
          "The resort operates on a small private island with a limited number of overwater bungalows and beachfront villas, ensuring exclusivity and privacy. While you may encounter other guests in common areas, many experiences can be arranged privately, and each accommodation offers secluded spaces. For complete exclusivity, whole-island buyouts are available for larger groups or special events.",
      },
      {
        question: "What dining options are available?",
        answer:
          "The resort features world-class dining with ingredients sourced from local organic farmers and daily fresh seafood. The executive chef creates personalized menus based on your preferences. Dining locations vary from the elegant main restaurant to your private deck, secluded beaches, sandbanks, or even underwater in the marine observatory. Special dietary requirements are easily accommodated with advance notice.",
      },
    ],
  },
  {
    title: "Fiji Adventure Sports & Watersports Package",
    description:
      "Experience the adrenaline rush of Fiji's best adventure activities with this action-packed package including white water rafting, zip-lining through rainforest canopies, surfing, jet skiing, and parasailing.",
    city: "Coral Coast",
    country: "Fiji",
    region: "Viti Levu",
    images: [
      "/images/tours/fiji/white-water-rafting.jpg",
      "/images/tours/fiji/zip-lining.jpg",
    ],
    duration: "6 days",
    price: "$1,450",
    rating: 4.7,
    tags: ["Adventure", "Watersports", "Action"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Outrigger Fiji Beach Resort, Coral Coast, Viti Levu, Fiji",
      coordinates: {
        latitude: -18.1478,
        longitude: 177.4306,
      },
      instructions:
        "Meet at the Activities Center at Outrigger Fiji Beach Resort. Airport transfers from Nadi International Airport can be arranged for an additional fee. Please inform us of your arrival details if transfer is required.",
      contactNumber: "+679 652 0000",
      contactEmail: "adventure@paragontrails.com",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-15",
      "2024-04-29",
      "2024-05-13",
      "2024-05-27",
      "2024-06-10",
      "2024-06-24",
      "2024-07-08",
      "2024-07-22",
      "2024-08-05",
      "2024-08-19",
      "2024-09-02",
      "2024-09-16",
      "2024-09-30",
    ],
    highlights: [
      "White water rafting on the Upper Navua River through rainforest gorges",
      "Zip-lining adventure through tropical rainforest canopies",
      "Guided surfing lessons at world-famous breaks (suitable for all levels)",
      "Jet ski safari to hidden beaches and snorkeling spots",
      "Parasailing experience with spectacular aerial coastal views",
    ],
    inclusions: [
      "5 nights accommodation at beach resort",
      "Daily breakfast",
      "All adventure activities with professional guides",
      "Safety equipment and instruction",
      "Transportation to/from activity locations",
      "Professional photography package of your adventures",
      "Welcome and farewell dinners",
    ],
    exclusions: [
      "Flights to/from Fiji",
      "Airport transfers (available for additional fee)",
      "Lunches and some dinners",
      "Travel insurance (mandatory for adventure activities)",
      "Personal equipment rentals beyond what's provided",
      "Gratuities",
    ],
    itinerary: [
      "Day 1: Arrival, resort check-in, orientation briefing, welcome dinner",
      "Day 2: Full-day white water rafting adventure on the Upper Navua River",
      "Day 3: Morning zip-lining through rainforest canopy, afternoon jet ski safari",
      "Day 4: Full-day surfing experience with professional instructors",
      "Day 5: Morning parasailing adventure, afternoon free for optional activities",
      "Day 6: Farewell breakfast, optional beach activities, departure",
    ],
    cancellationPolicy:
      "Full refund if canceled 30 days before the scheduled tour. 50% refund if canceled 15-29 days in advance. No refund for cancellations less than 15 days before tour start date.",
    faqs: [
      {
        question: "What skill level is required for the activities?",
        answer:
          "Most activities are suitable for beginners and intermediates. No prior experience is necessary as professional instructors provide comprehensive safety briefings and guidance for each activity.",
      },
      {
        question: "Are all equipment and gear included?",
        answer:
          "Yes, all necessary equipment, safety gear, and instruction are included in the package price. Just bring appropriate clothing, swimwear, and sunscreen.",
      },
      {
        question: "What is the minimum age requirement?",
        answer:
          "The minimum age for most activities is 12 years, though some activities like white water rafting have a minimum age of 15. Alternative activities can be arranged for younger children.",
      },
      {
        question: "How physically demanding is this package?",
        answer:
          "This package is moderately physically demanding. Participants should be in good physical condition, able to swim confidently, and comfortable with heights and fast-moving water. Each day typically involves 3-5 hours of activity with appropriate breaks. While the activities are exciting, safety is our priority and professional guides ensure all adventures are appropriate for your ability level.",
      },
      {
        question:
          "What happens if weather conditions prevent certain activities?",
        answer:
          "Fiji's tropical climate occasionally brings weather that may affect certain activities. If an activity cannot proceed safely due to weather, we'll substitute with an alternative adventure or reschedule for another day during your stay when possible. No refunds are provided for weather-related schedule changes as long as alternative activities are offered.",
      },
    ],
  },
];

export default fijiTours;
