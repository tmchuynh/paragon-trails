import { Tour } from "@/lib/interfaces/services/tours";

export const petraTours: Tour[] = [
  {
    title: "Petra by Night: Candlelit Treasury Experience",
    description:
      "Experience the magic of Petra after dark as the ancient city is illuminated by thousands of candles, creating an unforgettable atmosphere as you walk through the Siq to the Treasury and listen to traditional Bedouin music.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/petra-by-night.jpg",
      "/images/tours/petra/treasury-candles.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.9,
    tags: ["Night Tour", "Atmospheric", "Cultural"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Petra Visitor Center Main Gate, Wadi Musa",
      coordinates: {
        latitude: 30.3289,
        longitude: 35.4717,
      },
      instructions: "Meet at the main entrance gate of Petra Visitor Center. Your guide will be holding a lantern with a Paragon Trails sign.",
      contactNumber: "+962 3 215 7093",
      contactEmail: "petrabynight@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-18", "2023-12-20", "2023-12-25", "2023-12-27",
      "2024-01-01", "2024-01-03", "2024-01-08", "2024-01-10", "2024-01-15", "2024-01-17", "2024-01-22", "2024-01-24", "2024-01-29", "2024-01-31",
      "2024-02-05", "2024-02-07", "2024-02-12", "2024-02-14", "2024-02-19", "2024-02-21", "2024-02-26", "2024-02-28"
    ],
    
    highlights: [
      "Walk through the Siq Canyon illuminated by over 1,500 candles",
      "Experience the iconic Treasury (Al-Khazneh) façade softly lit by candlelight",
      "Listen to traditional Bedouin music performances under the stars",
      "Enjoy hot Bedouin tea while sitting on rugs before the Treasury",
      "Photograph this UNESCO World Heritage site in a magical, crowd-free setting"
    ],
    
    inclusions: [
      "Petra by Night entrance ticket",
      "Professional guide with historical expertise",
      "Bedouin tea ceremony",
      "Traditional music performance",
      "Return transportation to major hotels in Wadi Musa",
      "Small group experience (maximum 25 participants)"
    ],
    
    exclusions: [
      "Regular Petra entrance ticket (required for daytime access)",
      "Hotel pickup from accommodations outside Wadi Musa",
      "Food beyond the provided tea",
      "Gratuities (optional)",
      "Professional photography equipment (tripods require special permission)"
    ],
    
    itinerary: [
      "20:00 - Meet at Petra Visitor Center for check-in",
      "20:15 - Brief introduction and safety instructions",
      "20:30 - Begin the candlelit walk through the Siq",
      "21:00 - Arrive at the Treasury illuminated by hundreds of candles",
      "21:15 - Traditional Bedouin music performance begins",
      "21:30 - Bedouin tea service while enjoying the atmosphere",
      "21:45 - Free time for photos and quiet contemplation",
      "22:00 - Begin return walk through the Siq",
      "22:30 - Tour concludes at Visitor Center with transportation to hotels"
    ],
    
    faqs: [
      {
        question: "Is photography allowed during Petra by Night?",
        answer: "Yes, photography is permitted, but flash photography is prohibited as it disturbs the ambiance and other visitors. For the best results, we recommend cameras with good low-light capabilities. Tripods require special permission and additional fees from the Petra authorities."
      },
      {
        question: "How difficult is the walking during this tour?",
        answer: "The walk through the Siq to the Treasury is approximately 2 km (1.2 miles) round-trip on mostly flat terrain. The path is illuminated by candles, but some sections can be uneven. Comfortable, closed-toe walking shoes are strongly recommended. The pace is leisurely, making it suitable for most fitness levels."
      },
      {
        question: "Do I need a regular Petra ticket to attend Petra by Night?",
        answer: "No, Petra by Night requires a separate ticket (included in this tour). However, if you wish to visit Petra during the day, you'll need to purchase a regular entrance ticket. We recommend visiting during daytime hours first to fully appreciate the nighttime experience."
      }
    ]
  },
  {
    title: "Petra Archaeological Tour with Expert Guide",
    description:
      "Delve deep into the history and archaeology of the ancient Nabataean city with an expert archaeologist guide, discovering hidden details and exploring lesser-visited monuments beyond the main trail.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/archaeological-tour.jpg",
      "/images/tours/petra/hidden-monuments.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Archaeological", "Educational", "Historical"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Movenpick Resort Petra Lobby, Wadi Musa",
      coordinates: {
        latitude: 30.3222,
        longitude: 35.4717,
      },
      instructions: "Meet in the main lobby of the Movenpick Resort Petra. Your archaeologist guide will be holding a sign with 'Archaeological Petra Tour' written on it.",
      contactNumber: "+962 3 215 7094",
      contactEmail: "archaeotour@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-17", "2023-12-19", "2023-12-24", "2023-12-26",
      "2024-01-02", "2024-01-07", "2024-01-09", "2024-01-14", "2024-01-16", "2024-01-21", "2024-01-23", "2024-01-28", "2024-01-30",
      "2024-02-04", "2024-02-06", "2024-02-11", "2024-02-13", "2024-02-18", "2024-02-20", "2024-02-25", "2024-02-27"
    ],
    
    highlights: [
      "Tour led by a certified archaeologist with extensive knowledge of Nabataean civilization",
      "Visit the iconic Treasury with detailed explanation of its architectural significance",
      "Explore off-the-beaten-path monuments rarely visited by standard tours",
      "Discover the sophisticated water management system that sustained the ancient city",
      "Learn to identify and understand Nabataean, Roman, and Byzantine influences in the architecture"
    ],
    
    inclusions: [
      "Professional archaeologist guide",
      "Petra entrance fees",
      "Detailed archaeological guidebook",
      "Bottled water throughout the tour",
      "Packed lunch from premium local restaurant",
      "Audio headsets to clearly hear guide explanations"
    ],
    
    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Optional donkey, horse, or camel rides within the site",
      "Gratuities (recommended but at your discretion)",
      "Personal expenses and souvenirs",
      "Travel insurance"
    ],
    
    itinerary: [
      "08:00 - Meet at Movenpick Resort lobby for introduction",
      "08:15 - Short drive to Petra Visitor Center",
      "08:30 - Begin tour with archaeological overview of the site",
      "09:00 - Walk through the Siq with geological and historical commentary",
      "09:45 - Arrive at Treasury (Al-Khazneh) for detailed analysis",
      "10:30 - Explore the Street of Facades and Royal Tombs",
      "11:30 - Visit the Great Temple archaeological complex",
      "12:30 - Lunch break in a shaded area",
      "13:15 - Explore the Byzantine Church and its mosaics",
      "14:00 - Visit lesser-known monuments in the outer city",
      "14:45 - Begin return journey with different perspective",
      "15:30 - Tour concludes at the Visitor Center"
    ],
    
    faqs: [
      {
        question: "How is this tour different from regular Petra tours?",
        answer: "This specialized tour is led by a certified archaeologist with academic credentials in Nabataean history, providing insights far beyond standard tours. We focus on archaeological details, construction techniques, historical context, and recent discoveries not covered in general tours. The itinerary also includes lesser-visited monuments that reveal important aspects of Nabataean life, architecture, and cultural practices."
      },
      {
        question: "How physically demanding is this tour?",
        answer: "This tour involves approximately 8-10 kilometers (5-6 miles) of walking over the course of 6 hours, including some uphill sections and uneven terrain. We maintain a moderate pace with frequent stops for explanations, but good mobility is required. Comfortable walking shoes with good grip are essential, as are sun protection, water, and weather-appropriate clothing."
      },
      {
        question: "Is this tour suitable for children?",
        answer: "While children are welcome, this tour is designed with a strong academic focus and detailed archaeological explanations that may not engage younger children. We recommend it for ages 12 and up with a genuine interest in history. For families with younger children, we suggest our 'Petra Family Adventure' tour, which offers a more interactive approach with age-appropriate activities."
      }
    ]
  },
  {
    title: "Monastery Trail & High Places Hike",
    description:
      "Challenge yourself with a guided hike to Petra's Monastery (Ad-Deir) and the High Place of Sacrifice, venturing off the main tourist paths to discover spectacular viewpoints and hidden carvings with a Bedouin mountain guide.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/monastery.jpg",
      "/images/tours/petra/high-place.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Hiking", "Adventure", "Views"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    
    meetingPoint: {
      address: "Petra Guest House Hotel, Wadi Musa",
      coordinates: {
        latitude: 30.3218,
        longitude: 35.4690,
      },
      instructions: "Meet at the entrance of Petra Guest House Hotel. Your Bedouin guide will be wearing a traditional red-and-white shemagh headscarf and holding a hiking stick.",
      contactNumber: "+962 3 215 7095",
      contactEmail: "petrahike@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-18", "2023-12-23", "2023-12-30",
      "2024-01-06", "2024-01-13", "2024-01-20", "2024-01-27",
      "2024-02-03", "2024-02-10", "2024-02-17", "2024-02-24"
    ],
    
    highlights: [
      "Hike the ancient stone-cut stairway to the magnificent Monastery (Ad-Deir)",
      "Climb to the High Place of Sacrifice for panoramic views over Petra",
      "Discover Little Petra (Siq al-Barid) with far fewer tourists",
      "Learn about Bedouin life and traditions from your local guide",
      "Explore hidden trails and viewpoints known only to local Bedouins"
    ],
    
    inclusions: [
      "Professional Bedouin hiking guide",
      "Petra entrance fees",
      "Packed lunch and trail snacks",
      "Bottled water (2L per person)",
      "Hiking poles (if requested)",
      "First aid kit and safety equipment",
      "Transportation between hiking points as needed"
    ],
    
    exclusions: [
      "Hotel pickup and drop-off",
      "Optional donkey ride on Monastery trail (available for hire)",
      "Specialized photography equipment",
      "Gratuities for guide",
      "Additional drinks beyond water provided",
      "Travel insurance"
    ],
    
    itinerary: [
      "07:30 - Meet at Petra Guest House for briefing",
      "07:45 - Enter Petra through the main gate",
      "08:30 - Begin hike to the High Place of Sacrifice via the ancient stairway",
      "09:30 - Reach the High Place of Sacrifice for rest and panoramic views",
      "10:00 - Descend via the hidden Wadi Farasa trail with rock-cut monuments",
      "11:00 - Break for snacks and water at the Lion Fountain",
      "11:30 - Continue through the main valley toward the Monastery trail",
      "12:30 - Lunch break in a shaded area",
      "13:15 - Begin the 800-step climb to the Monastery (Ad-Deir)",
      "14:30 - Arrive at the Monastery with time for photos and rest",
      "15:00 - Hike to the best viewpoint above the Monastery",
      "15:30 - Begin descent via alternate route with different perspectives",
      "16:30 - Complete the hike near the Petra Basin",
      "17:00 - Return to visitor center via the main trail"
    ],
    
    faqs: [
      {
        question: "How difficult is the hiking on this tour?",
        answer: "This is a moderately strenuous hike that covers approximately 12-15 kilometers (7-9 miles) with significant elevation gain. The routes to both the High Place of Sacrifice and the Monastery involve ancient stone-cut stairs (800+ steps to the Monastery alone) with some steep sections and uneven terrain. Good physical fitness is required, and proper hiking footwear is essential. The hike is conducted at a steady pace with regular breaks."
      },
      {
        question: "Is it possible to ride donkeys instead of hiking?",
        answer: "Donkeys are available for hire on the Monastery trail and can be arranged for portions of the route (at additional cost). However, for safety and animal welfare reasons, we recommend hiking for physically able participants. Some sections of our route are not accessible by donkey, particularly narrow paths and certain viewpoints. Your guide can advise on appropriate options based on your fitness level."
      },
      {
        question: "What should I bring for this hiking tour?",
        answer: "Essential items include sturdy hiking boots with ankle support, a sun hat, sunglasses, sunscreen (SPF 30+), a light backpack, and a personal water bottle (though we provide water). We recommend wearing layers as temperatures can vary throughout the day, especially at higher elevations. Camera, binoculars, and any personal medications are also recommended. Hiking poles are provided if requested, but you're welcome to bring your own."
      }
    ]
  },
  {
    title: "Petra to Wadi Rum Desert Journey",
    description:
      "Experience the dramatic transition from the rose-red city to the crimson desert with this journey connecting two of Jordan's UNESCO World Heritage sites, with hiking in Petra, off-road exploration in Wadi Rum, and a night under the stars.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/petra-scenery.jpg",
      "/images/tours/petra/wadi-rum-desert.jpg",
    ],
    duration: "2 days",
    price: "$250",
    rating: 4.9,
    tags: ["Multi-day", "Desert", "UNESCO Sites"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    
    meetingPoint: {
      address: "Petra Moon Hotel, Tourism Street, Wadi Musa",
      coordinates: {
        latitude: 30.3235,
        longitude: 35.4734,
      },
      instructions: "Meet in the lobby of Petra Moon Hotel with your overnight bag. Look for your guide holding a 'Petra-Wadi Rum Journey' sign.",
      contactNumber: "+962 3 215 7096",
      contactEmail: "petrawadirum@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-20", "2023-12-27", 
      "2024-01-03", "2024-01-10", "2024-01-17", "2024-01-24", "2024-01-31",
      "2024-02-07", "2024-02-14", "2024-02-21", "2024-02-28"
    ],
    
    highlights: [
      "Explore Petra's main monuments and Little Petra (Siq al-Barid)",
      "Travel the scenic King's Highway through mountains and valleys",
      "Experience spectacular desert landscapes in 4x4 jeep safari",
      "Visit ancient rock inscriptions and natural rock bridges in Wadi Rum",
      "Enjoy traditional Bedouin hospitality and cuisine under the stars",
      "Sleep in a premium desert camp with clear views of the night sky"
    ],
    
    inclusions: [
      "Professional English-speaking guide throughout",
      "Petra entrance fees including Little Petra",
      "Wadi Rum Protected Area fees",
      "4x4 jeep safari in Wadi Rum with Bedouin driver",
      "Overnight accommodation in premium desert camp (private tent with ensuite bathroom)",
      "All meals from lunch on day 1 through lunch on day 2",
      "Bottled water throughout the journey",
      "Transportation between all sites in air-conditioned vehicle",
      "Sunset camel ride in Wadi Rum"
    ],
    
    exclusions: [
      "Hotel pickup outside of Wadi Musa",
      "Alcoholic beverages",
      "Optional activities beyond the scheduled itinerary",
      "Gratuities for guides, drivers, and camp staff",
      "Personal expenses and souvenirs",
      "Travel insurance"
    ],
    
    itinerary: [
      "Day 1: 08:00 - Meet at Petra Moon Hotel",
      "Day 1: 08:30 - Enter Petra through the main gate",
      "Day 1: 09:00 - Guided tour of Petra's main monuments",
      "Day 1: 12:00 - Lunch at Basin Restaurant inside Petra",
      "Day 1: 13:30 - Visit Little Petra (Siq al-Barid)",
      "Day 1: 15:00 - Scenic drive to Wadi Rum (1.5 hours)",
      "Day 1: 16:30 - Meet Bedouin guides and transfer to 4x4 jeeps",
      "Day 1: 17:00 - Begin desert jeep safari exploring key sites",
      "Day 1: 18:00 - Sunset camel ride to a scenic viewpoint",
      "Day 1: 19:00 - Arrive at desert camp and settle in",
      "Day 1: 20:00 - Traditional Bedouin dinner (zarb - underground oven)",
      "Day 1: 21:30 - Bedouin music around campfire and stargazing",

      "Day 2: 06:00 - Optional sunrise viewing (highly recommended)",
      "Day 2: 07:30 - Breakfast at camp",
      "Day 2: 08:30 - Morning desert jeep safari to remote areas",
      "Day 2: 10:30 - Visit ancient petroglyphs and natural rock bridges",
      "Day 2: 12:00 - Tea with Bedouin family in their traditional tent",
      "Day 2: 13:00 - Lunch in the desert",
      "Day 2: 14:30 - Final desert landscape viewing",
      "Day 2: 15:30 - Depart Wadi Rum for Aqaba or return to Petra (your choice)"
    ],
    
    faqs: [
      {
        question: "What type of desert accommodation is provided?",
        answer: "You'll stay in a premium desert camp featuring comfortable permanent tents with real beds (not cots), proper linens, and private ensuite bathrooms with running water. Each tent is spacious with traditional decorative elements and a small sitting area. The camp includes a central dining area, fire pit for evening gatherings, and is situated in a scenic location away from other camps for an authentic desert experience."
      },
      {
        question: "What should I pack for this overnight journey?",
        answer: "Pack light but bring: comfortable walking shoes, lightweight clothing for daytime, warm layers for cool desert nights (temperatures can drop significantly), hat, sunglasses, sunscreen, personal medications, camera, small flashlight or headlamp, and basic toiletries. A small backpack for daytime explorations is useful. We recommend packing in a soft duffel bag rather than hard suitcases for easier transport in the desert vehicles."
      },
      {
        question: "Is this tour suitable for people with limited mobility?",
        answer: "This tour involves moderate walking in Petra, getting in and out of 4x4 vehicles, and walking on uneven desert terrain. While we can adjust some activities for those with mild mobility issues, the tour is not suitable for wheelchair users or those with significant mobility limitations. The desert camp does have some steps and the desert itself presents natural mobility challenges. Please contact us to discuss specific requirements."
      }
    ]
  },
  {
    title: "Petra Behind the Scenes: Local Life Experience",
    description:
      "Go beyond the ancient monuments to connect with the living culture of Petra, spending time with local Bedouin families, learning traditional crafts, preparing authentic cuisine, and understanding contemporary life in this historic region.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/bedouin-family.jpg",
      "/images/tours/petra/traditional-crafts.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Cultural", "Local Experience", "Authentic"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "local",
    
    meetingPoint: {
      address: "Petra Visitor Center Main Entrance, Wadi Musa",
      coordinates: {
        latitude: 30.3289,
        longitude: 35.4717,
      },
      instructions: "Meet outside the main entrance of the Petra Visitor Center. Your Bedouin host will greet you wearing a traditional outfit and introduce himself as 'Abu Ibrahim'.",
      contactNumber: "+962 3 215 7097",
      contactEmail: "bedouinlife@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-19", "2023-12-21", "2023-12-26", "2023-12-28",
      "2024-01-02", "2024-01-04", "2024-01-09", "2024-01-11", "2024-01-16", "2024-01-18", "2024-01-23", "2024-01-25", "2024-01-30",
      "2024-02-01", "2024-02-06", "2024-02-08", "2024-02-13", "2024-02-15", "2024-02-20", "2024-02-22", "2024-02-27", "2024-02-29"
    ],
    
    highlights: [
      "Visit a traditional Bedouin home outside the tourist areas",
      "Learn about the transition from cave-dwelling to modern Bedouin life",
      "Participate in bread-making and traditional coffee preparation ceremonies",
      "Try your hand at traditional handicrafts with local artisans",
      "Enjoy an authentic home-cooked meal with a Bedouin family"
    ],
    
    inclusions: [
      "Transportation to local villages outside the main tourist area",
      "Bedouin host and cultural interpreter",
      "Hands-on cooking experience",
      "Traditional lunch with a local family",
      "Craft workshop materials",
      "Coffee and tea ceremonies",
      "Small handmade souvenir",
      "Support for local community initiatives"
    ],
    
    exclusions: [
      "Petra entrance fees (not entered during this experience)",
      "Hotel pickup and drop-off",
      "Alcoholic beverages",
      "Additional souvenirs beyond the included handcraft",
      "Gratuities (optional but appreciated by families)"
    ],
    
    itinerary: [
      "09:00 - Meet at Petra Visitor Center",
      "09:15 - Short drive to nearby Bedouin community",
      "09:45 - Welcome ceremony with traditional coffee ritual",
      "10:15 - Tour of contemporary Bedouin home and discussion of cultural changes",
      "11:00 - Hands-on bread making in traditional outdoor oven (zarb)",
      "11:45 - Craft workshop with local women artisans",
      "12:45 - Help prepare lunch using traditional methods",
      "13:30 - Enjoy authentic home-cooked meal with family members",
      "14:30 - Traditional music and storytelling session",
      "15:00 - Tea ceremony and discussion of Bedouin life today",
      "15:30 - Return to Petra Visitor Center"
    ],
    
    faqs: [
      {
        question: "Is this tour focused on Petra's monuments?",
        answer: "No, this unique experience specifically avoids the main archaeological site to focus instead on living culture. You'll spend time with contemporary Bedouin families who have ancestral connections to Petra but now live in nearby settlements. For those interested in the monuments, we recommend taking this tour on a second day after visiting the archaeological site."
      },
      {
        question: "How authentic is the Bedouin experience?",
        answer: "This is a genuine cultural exchange, not a staged tourist performance. You'll visit real family homes and interact with community members going about their daily lives. The families we work with are genuinely interested in cultural exchange and sharing their traditions, while the economic benefit helps them maintain their cultural practices. That said, remember that Bedouin culture is evolving - you'll see both traditional elements and modern adaptations."
      },
      {
        question: "Will we be able to communicate with the family?",
        answer: "Your experience includes a Bedouin host who is fluent in English and serves as both guide and interpreter. Many family members, especially younger ones, speak basic English as well. The universal languages of food preparation, crafts, music and smiles bridge many gaps, creating meaningful connections despite language differences."
      }
    ]
  },
  {
    title: "Petra: Royal Tombs & Byzantine Church Focus",
    description:
      "Explore beyond the Treasury with an expert-led tour focused on Petra's magnificent Royal Tombs and the remarkably preserved Byzantine Church with its intricate mosaics, revealing the city's evolution across multiple civilizations.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/royal-tombs.jpg",
      "/images/tours/petra/byzantine-church.jpg",
    ],
    duration: "5 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Archaeological", "Historical", "Architecture"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Petra Basin Restaurant, Inside Petra Archaeological Park",
      coordinates: {
        latitude: 30.3275,
        longitude: 35.4464,
      },
      instructions: "Meet at the entrance to Basin Restaurant in the center of Petra. This is past the Treasury, approximately 30 minutes walk from the main entrance. Look for guide with a blue flag.",
      contactNumber: "+962 3 215 7098",
      contactEmail: "petratour@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-20", "2023-12-22", "2023-12-27", "2023-12-29",
      "2024-01-03", "2024-01-05", "2024-01-10", "2024-01-12", "2024-01-17", "2024-01-19", "2024-01-24", "2024-01-26", "2024-01-31",
      "2024-02-02", "2024-02-07", "2024-02-09", "2024-02-14", "2024-02-16", "2024-02-21", "2024-02-23", "2024-02-28"
    ],
    
    highlights: [
      "Detailed exploration of the Royal Tombs with their grand facades",
      "Visit to the Byzantine Church with remarkably preserved floor mosaics",
      "Learn about Petra's transition from Nabataean to Roman and Byzantine periods",
      "Discover the architectural innovations in tomb construction",
      "Understand the religious symbolism in different historical periods"
    ],
    
    inclusions: [
      "Expert guide specialized in Petra's later historical periods",
      "Detailed information booklet on the Royal Tombs and Byzantine sites",
      "Bottled water during the tour",
      "Audio headsets to clearly hear guide explanations",
      "Lightweight foldable chair for use during detailed explanations"
    ],
    
    exclusions: [
      "Petra entrance fee (must be purchased separately)",
      "Transportation to Petra and initial walk to Basin Restaurant",
      "Food and additional beverages",
      "Optional donkey or horse rides",
      "Gratuities (optional)"
    ],
    
    itinerary: [
      "10:00 - Meet at Basin Restaurant for introduction",
      "10:15 - Visit the Urn Tomb with its distinctive facade and large courtyard",
      "10:45 - Explore the Silk Tomb with its remarkable colored rock striations",
      "11:15 - Detailed tour of the Corinthian Tomb with Roman architectural influences",
      "11:45 - Visit the Palace Tomb, the most elaborate of the Royal Tombs",
      "12:30 - Break for rest and refreshments",
      "13:00 - Walk to the Byzantine Church complex",
      "13:30 - Explore the 5th-century church and its spectacular floor mosaics",
      "14:15 - Examine the adjoining buildings and baptismal chamber",
      "14:45 - Closing discussion on Petra's evolution through different periods",
      "15:00 - Tour concludes at Byzantine Church site"
    ],
    
    faqs: [
      {
        question: "Is this tour suitable for those who have already visited Petra?",
        answer: "Yes, this tour is perfectly suited for return visitors to Petra who want a deeper understanding of specific monuments. While most first-time visitors focus on the Treasury and main trail, this specialized tour explores the often overlooked but historically significant Royal Tombs and Byzantine remains in detail. The expert commentary provides historical context and architectural insights rarely covered in general tours."
      },
      {
        question: "Do we need to walk through the entire site to reach the meeting point?",
        answer: "Yes, you'll need to enter Petra through the main entrance and walk through the Siq to the Treasury, then continue approximately 20 minutes further to reach the Basin Restaurant meeting point. This self-guided portion takes about 30-45 minutes depending on your walking pace. The benefit is that our specialized tour begins already in the central basin area, maximizing time at the featured monuments."
      },
      {
        question: "How strenuous is this tour?",
        answer: "This tour involves moderate walking (approximately 3-4 kilometers) over mostly flat terrain with some uneven surfaces and occasional steps. The pace is unhurried with frequent stops for detailed explanations. Most of the Royal Tombs can be viewed from ground level, though accessing some interiors involves short climbs. The Byzantine Church area is relatively flat. This tour is less strenuous than those involving the Monastery or High Place of Sacrifice."
      }
    ]
  },
  {
    title: "Petra Photography Expedition at Golden Hour",
    description:
      "Capture perfect images of Petra's monuments during optimal lighting conditions with this specialized photography tour led by a professional photographer, focusing on the best angles, lighting techniques, and hidden photo spots.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/photography-tour.jpg",
      "/images/tours/petra/golden-hour.jpg",
    ],
    duration: "4 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Photography", "Golden Hour", "Specialized"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    
    meetingPoint: {
      address: "Petra Visitor Center Main Gate, Wadi Musa",
      coordinates: {
        latitude: 30.3289,
        longitude: 35.4717,
      },
      instructions: "Meet at the main entrance gate of Petra Visitor Center. Your photography guide will be carrying a professional camera with a tripod and wearing a navy blue photography vest.",
      contactNumber: "+962 3 215 7099",
      contactEmail: "petraphoto@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-17", "2023-12-24", "2023-12-31",
      "2024-01-07", "2024-01-14", "2024-01-21", "2024-01-28",
      "2024-02-04", "2024-02-11", "2024-02-18", "2024-02-25"
    ],
    
    highlights: [
      "Photograph Petra during the optimal golden hour lighting",
      "Learn specialized techniques for capturing ancient monuments",
      "Discover hidden vantage points known only to experienced photographers",
      "Receive professional guidance on composition and camera settings",
      "Visit carefully timed locations when tourist crowds are minimal"
    ],
    
    inclusions: [
      "Professional photographer guide",
      "Photography technique instruction",
      "Location guide with best angles and timing",
      "Tripod loans if needed",
      "Photography permit fees",
      "Bottled water",
      "Post-tour digital guide with photography tips"
    ],
    
    exclusions: [
      "Petra entrance fee (must be purchased separately)",
      "Camera equipment (bring your own)",
      "Transportation to/from Petra",
      "Food and additional beverages",
      "Optional post-processing workshop (available at additional cost)"
    ],
    
    itinerary: [
      "14:30 - Meet at Visitor Center for equipment check and briefing",
      "14:45 - Enter Petra and begin photography walk through the Siq",
      "15:30 - Arrive at Treasury as light begins to soften",
      "15:45 - Professional guidance on optimal Treasury compositions",
      "16:15 - Move to elevated viewpoint for different Treasury perspective",
      "16:45 - Walk to Royal Tombs for golden hour lighting",
      "17:15 - Capture sunset colors on the monument facades",
      "17:45 - Last light photography of Petra Basin",
      "18:15 - Begin return walk with blue hour photography in the Siq",
      "18:45 - Tour conclusion with final tips and recommendations"
    ],
    
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer: "For optimal results, we recommend a DSLR or mirrorless camera with manual controls, a wide-angle lens (16-35mm equivalent), a standard zoom (24-70mm equivalent), and a tripod for low-light situations. A polarizing filter is useful for managing reflections on stone surfaces. That said, photographers of all levels are welcome - even those with smartphones will benefit from our guide's expertise on composition and positioning."
      },
      {
        question: "Is this tour exclusively for professional photographers?",
        answer: "No, photographers of all skill levels are welcome. Our guide adjusts instruction to match your experience level, from basic composition techniques for beginners to advanced exposure blending methods for experienced photographers. The focus is on getting you to the right places at the right times with the right techniques for your equipment."
      },
      {
        question: "Will there be good photo opportunities if the weather isn't ideal?",
        answer: "Absolutely. While golden hour light is our goal, even overcast days offer excellent photography opportunities at Petra, often with more even lighting for capturing details. Your professional photography guide is experienced in making the most of all lighting conditions and will adjust the itinerary and techniques accordingly. Sometimes dramatic clouds or unusual lighting can create even more memorable images than standard sunny conditions."
      }
    ]
  },
  {
    title: "Little Petra & Beidha Neolithic Village",
    description:
      "Explore beyond the main Petra site to discover Little Petra (Siq al-Barid) with its remarkably preserved frescoes, then visit one of the world's oldest villages at Beidha, dating back 9,000 years, with expert archaeological commentary.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/little-petra.jpg",
      "/images/tours/petra/beidha.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Archaeological", "Off-the-beaten-path", "Historical"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    
    meetingPoint: {
      address: "Petra Moon Hotel Lobby, Tourism Street, Wadi Musa",
      coordinates: {
        latitude: 30.3235,
        longitude: 35.4734,
      },
      instructions: "Meet in the lobby of Petra Moon Hotel. Your guide will be holding a sign with 'Little Petra Tour' written on it.",
      contactNumber: "+962 3 215 7100",
      contactEmail: "littlepetra@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-21", "2023-12-28",
      "2024-01-04", "2024-01-11", "2024-01-18", "2024-01-25",
      "2024-02-01", "2024-02-08", "2024-02-15", "2024-02-22", "2024-02-29"
    ],
    
    highlights: [
      "Explore Little Petra (Siq al-Barid) without the crowds of the main site",
      "See the only surviving Nabataean painted frescoes in situ",
      "Visit one of the world's oldest villages at Beidha (9,000 years old)",
      "Learn about Neolithic agricultural development and early settlement",
      "Understand the connection between these sites and the main Petra complex"
    ],
    
    inclusions: [
      "Transportation to Little Petra and Beidha sites",
      "Professional archaeologist guide",
      "Entrance fees to both sites",
      "Bottled water and light snacks",
      "Illustrated guidebook to Neolithic Beidha",
      "Archaeological timeline reference materials"
    ],
    
    exclusions: [
      "Main Petra entrance fees (not visited on this tour)",
      "Hotel pickup and drop-off outside central Wadi Musa",
      "Lunch (tour concludes before lunchtime)",
      "Gratuities (optional)",
      "Personal expenses"
    ],
    
    itinerary: [
      "08:00 - Meet at Petra Moon Hotel",
      "08:15 - Drive to Little Petra (15 minutes)",
      "08:30 - Guided tour of Little Petra with historical context",
      "09:15 - Visit the Nabataean biclinium with painted frescoes",
      "09:45 - Explore the hidden trails and water collection systems",
      "10:15 - Short drive to Beidha Neolithic Village",
      "10:30 - Archaeological overview of the site's significance",
      "11:00 - Tour the reconstructed Neolithic buildings",
      "11:30 - Examine artifact displays and early agriculture evidence",
      "12:00 - Return drive to Wadi Musa with final Q&A",
      "12:15 - Tour concludes at original meeting point"
    ],
    
    faqs: [
      {
        question: "What makes Little Petra different from the main Petra site?",
        answer: "Little Petra (Siq al-Barid) offers a more intimate experience with similar Nabataean architecture but far fewer tourists. While smaller than the main site, it contains unique features including the only surviving Nabataean painted frescoes still in their original location. It's believed to have served as a suburb of Petra, hosting traders and visiting merchants. The narrow siq, carved facades, and dining halls are remarkably well-preserved and can be explored without the crowds typically found at the main site."
      },
      {
        question: "How significant is the Beidha Neolithic Village?",
        answer: "Beidha is one of the world's oldest known agricultural settlements, dating to approximately 7,000 BCE (9,000 years ago). This Pre-Pottery Neolithic B site shows the critical transition from hunter-gatherer to farming communities, with evidence of early domestication of plants and animals. The reconstructed circular structures give visitors a unique glimpse into how our ancestors lived during this pivotal period in human development. Few travelers visit this UNESCO World Heritage site despite its archaeological importance."
      },
      {
        question: "Is this tour physically demanding?",
        answer: "This tour involves light to moderate walking over mostly flat terrain with occasional uneven surfaces. Little Petra requires about 800 meters of walking round-trip, while the Beidha archaeological site involves approximately 400 meters of walking. There are no significant stairs or climbs involved. The pace is leisurely with frequent stops for explanation, making this tour suitable for most fitness levels and significantly less strenuous than tours of the main Petra site."
      }
    ]
  },
  {
    title: "Petra by Moonlight: Full Moon Special Tour",
    description:
      "Experience the magic of Petra illuminated by the full moon, with this exclusive monthly tour offering a rare opportunity to see the ancient city bathed in natural moonlight after regular closing hours.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/full-moon.jpg",
      "/images/tours/petra/night-vista.jpg",
    ],
    duration: "3 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Full Moon", "Exclusive", "Night Tour"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "romantic",
    
    meetingPoint: {
      address: "Movenpick Resort Petra Lobby, Wadi Musa",
      coordinates: {
        latitude: 30.3222,
        longitude: 35.4717,
      },
      instructions: "Meet in the Movenpick Resort Petra lobby. Your guide will be holding a lantern with a 'Moonlight Tour' sign.",
      contactNumber: "+962 3 215 7101",
      contactEmail: "moonlight@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-27", 
      "2024-01-25", 
      "2024-02-24"
    ],
    
    highlights: [
      "Visit Petra during the full moon when the rose-colored stone is transformed by moonlight",
      "Access the site after regular closing hours with special permission",
      "Experience the Treasury and Siq in peaceful tranquility without daytime crowds",
      "Learn about Nabataean astronomy and moon-related traditions",
      "Photograph iconic monuments in unique lighting conditions"
    ],
    
    inclusions: [
      "Special after-hours access permit to Petra",
      "Expert guide with knowledge of Nabataean astronomy",
      "Small flashlights for safety (rarely needed during full moon)",
      "Bedouin tea ceremony near the Treasury",
      "Souvenir professional photograph",
      "Traditional Jordanian dessert treat",
      "Limited group size (maximum 12 participants)"
    ],
    
    exclusions: [
      "Regular Petra entrance fee (separate special permit included instead)",
      "Hotel pickup and drop-off",
      "Professional photography equipment (bring your own)",
      "Tripods (not permitted without special additional permit)",
      "Gratuities (optional)"
    ],
    
    itinerary: [
      "19:00 - Meet at Movenpick Resort for introduction and briefing",
      "19:30 - Transfer to Petra Visitor Center",
      "19:45 - Special access entry after regular closing time",
      "20:00 - Moonlit walk through the Siq with commentary on Nabataean astronomy",
      "20:45 - Arrive at the Treasury illuminated by moonlight",
      "21:15 - Bedouin tea ceremony while enjoying Treasury views",
      "21:45 - Further exploration of nearby monuments by moonlight",
      "22:15 - Begin return journey through the moonlit Siq",
      "22:45 - Tour conclusion at Visitor Center"
    ],
    
    faqs: [
      {
        question: "What happens if it's cloudy on the night of the tour?",
        answer: "This tour is specifically scheduled during the full moon period, but weather conditions can't be guaranteed. If cloud cover is significant enough to substantially impact the moonlight experience, we offer three options: proceed with the tour using subtle artificial lighting to enhance the experience, reschedule to the following night if moon conditions remain favorable, or receive a credit toward another Petra experience. The special atmosphere of Petra at night remains magical even with partial moonlight."
      },
      {
        question: "How is this different from the regular Petra by Night show?",
        answer: "This exclusive experience differs significantly from the regular Petra by Night show. While the standard show features artificial candlelight and accommodates hundreds of visitors, our moonlight tour relies on natural illumination, allows extended time at monuments, includes knowledgeable guided commentary, and strictly limits group size to ensure tranquility. We also access more areas beyond just the Treasury and provide astronomical and cultural context not covered in the regular night show."
      },
      {
        question: "Is photography possible during this tour?",
        answer: "Yes, the full moon provides sufficient light for night photography, though specialized equipment will enhance results. We recommend cameras with good low-light capability, fast lenses (f/2.8 or wider), and high ISO performance. A small tripod is helpful but must be compact as full-sized tripods require special permits. Your guide can suggest optimal settings and compositions for moonlight photography. No flash photography is permitted as it disrupts the natural atmosphere."
      }
    ]
  },
];

export default petraTours;
