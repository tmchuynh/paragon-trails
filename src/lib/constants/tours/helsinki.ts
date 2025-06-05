import { Tour } from "@/lib/interfaces/services/tours";

export const helsinkiTours: Tour[] = [
  {
    title: "Helsinki Archipelago Sailing Adventure",
    description:
      "Experience the stunning Helsinki archipelago aboard a traditional wooden sailing boat, navigating between islands, swimming in pristine Baltic waters, and enjoying a Finnish seafood lunch on a private island.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/archipelago-sailing.jpg",
      "/images/tours/helsinki/wooden-sailboat.jpg",
    ],
    duration: "6 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Sailing", "Nature", "Island"],
    meetingPoint: {
      address: "Kaivopuisto Marina, Ehrenströmintie 3, 00140 Helsinki",
      coordinates: {
        latitude: 60.1552,
        longitude: 24.9578,
      },
      instructions:
        "Meet at the wooden dock in Kaivopuisto Marina. Look for the blue-hulled wooden sailboat named 'Suomen Joutsen'. Your captain will be wearing a navy blue sailing cap.",
      contactNumber: "+358 40 123 4567",
      contactEmail: "sailing@helsinkiadventures.com",
    },
    highlights: [
      "Sail through Helsinki's stunning archipelago of 330 islands",
      "Swim in clean Baltic waters at a secluded island cove",
      "Enjoy a traditional Finnish seafood lunch with local ingredients",
      "Learn sailing basics and help crew the traditional wooden boat",
      "Visit a historic island lighthouse with panoramic views",
    ],
    inclusions: [
      "Professional captain and crew",
      "All sailing equipment and safety gear",
      "Traditional Finnish seafood lunch with beverages",
      "Island nature walks and swimming stops",
      "Wind/waterproof sailing gear if needed",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond included drinks",
      "Gratuities",
      "Professional photography (available as add-on)",
    ],
    itinerary: [
      "10:00 AM - Meet at Kaivopuisto Marina for boarding and safety briefing",
      "10:30 AM - Set sail into the Helsinki archipelago",
      "11:30 AM - First island stop with guided nature walk",
      "12:30 PM - Anchor at private island for lunch and swimming",
      "2:00 PM - Continue sailing to historic lighthouse island",
      "3:00 PM - Visit lighthouse and enjoy panoramic views",
      "4:00 PM - Return sail to Helsinki with coffee and traditional Finnish pastries",
      "5:00 PM - Arrive back at Kaivopuisto Marina",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the experience. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled departure or in case of no-show. Alternative date offered if canceled due to unsafe weather conditions.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need sailing experience to enjoy this tour?",
        answer:
          "No sailing experience is necessary! Our professional crew handles all technical aspects of sailing. You're welcome to participate and learn some basics if interested, but can also simply relax and enjoy the journey. The captain will explain sailing principles as we go, making it educational and fun for beginners.",
      },
      {
        question: "What should I bring for the archipelago sailing tour?",
        answer:
          "Please bring swimwear, a towel, sunscreen, sunglasses, a hat, and a light jacket or sweater as it can be cooler on the water. We provide all necessary sailing gear including weatherproof jackets if needed. A camera is highly recommended for the spectacular archipelago views, and you may want to bring it in a waterproof case or bag.",
      },
      {
        question: "What happens if the weather is bad?",
        answer:
          "Your safety is our priority. If weather conditions are deemed unsafe for sailing (strong winds, storms, or thick fog), we'll contact you as early as possible to reschedule or provide a full refund. Light rain doesn't typically affect our tours as we have covered areas on the boat, and we provide weatherproof gear.",
      },
    ],
  },
  {
    title: "Finnish Design Walking Tour",
    description:
      "Discover Helsinki's renowned design heritage on a guided walking tour through the Design District, visiting iconic showrooms, meeting local designers, and understanding the Finnish design philosophy of beauty and functionality.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/design-district.jpg",
      "/images/tours/helsinki/finnish-design.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Design", "Culture", "Walking Tour"],
    meetingPoint: {
      address: "Design Museum, Korkeavuorenkatu 23, 00130 Helsinki",
      coordinates: {
        latitude: 60.1633,
        longitude: 24.9454,
      },
      instructions:
        "Meet at the main entrance of the Design Museum. Your guide will be holding a clipboard with 'Helsinki Design Tour' written on it.",
      contactNumber: "+358 40 765 4321",
      contactEmail: "design@helsinkitours.fi",
    },
    highlights: [
      "Explore Helsinki's Design District with over 200 creative businesses",
      "Visit flagship stores of iconic Finnish brands like Marimekko, Iittala, and Artek",
      "Meet local designers in their studios and learn about their creative process",
      "Understand the principles of Nordic design and Finnish aesthetics",
      "Discover how design shapes Finnish daily life and culture",
    ],
    inclusions: [
      "Professional design expert guide",
      "Small group experience (maximum 8 people)",
      "Entry to the Design Museum",
      "Coffee and traditional Finnish pastry at a designer café",
      "Helsinki Design Map to continue exploring independently",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages beyond included coffee break",
      "Personal purchases at design stores",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Design Museum for introduction to Finnish design history",
      "10:30 AM - Guided tour of the Design Museum's highlights",
      "11:15 AM - Walk through the Design District with commentary on architecture",
      "11:45 AM - Visit to Iittala and Arabia flagship store",
      "12:15 PM - Coffee break at designer café",
      "12:45 PM - Visit to Marimekko flagship store and textile demonstration",
      "1:15 PM - Meet with local designer in their studio/workshop",
      "2:00 PM - Tour conclusion with shopping recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the experience. No refund for cancellations less than 24 hours before scheduled tour or in case of no-show.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Do I need to be knowledgeable about design to enjoy this tour?",
        answer:
          "Not at all! This tour is designed to be fascinating for everyone, from design professionals to complete beginners. Our guides explain concepts in accessible ways and focus on the stories behind the designs and their cultural significance. You'll gain a new appreciation for how design shapes our daily lives.",
      },
      {
        question: "Will there be opportunities to shop during the tour?",
        answer:
          "Yes, we visit several flagship stores and design boutiques where you can purchase items if desired. However, there's absolutely no pressure to buy anything. Our guide provides a Helsinki Design Map at the end of the tour so you can return to favorite spots or explore new ones later.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2 kilometers (1.2 miles) at a leisurely pace with plenty of stops. Most of the route is flat, but there are occasional steps and some cobblestone streets in the historic districts. Comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Traditional Finnish Sauna Experience",
    description:
      "Immerse yourself in Finnish culture with an authentic sauna experience guided by a sauna master, including traditional rituals, birch branch whisking, ice swimming, and a post-sauna feast of local specialties.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/traditional-sauna.jpg",
      "/images/tours/helsinki/ice-swimming.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Sauna", "Wellness", "Cultural"],
    meetingPoint: {
      address: "Löyly Sauna, Hernesaarenranta 4, 00150 Helsinki",
      coordinates: {
        latitude: 60.1526,
        longitude: 24.9266,
      },
      instructions:
        "Meet in the reception area of Löyly Sauna. Look for your host wearing a white 'Sauna Guide' t-shirt.",
      contactNumber: "+358 40 987 6543",
      contactEmail: "bookings@saunaexperience.fi",
    },
    highlights: [
      "Experience both traditional wood-heated and smoke saunas with a sauna master",
      "Learn traditional Finnish sauna rituals and etiquette",
      "Try the invigorating practice of ice swimming (optional but encouraged)",
      "Enjoy birch branch whisking (vasta/vihta) for improved circulation",
      "Sample traditional Finnish sauna foods and drinks",
    ],
    inclusions: [
      "Private sauna facilities with expert sauna master",
      "All sauna accessories (towels, seat covers, toiletries)",
      "Traditional birch whisks (vasta/vihta)",
      "Post-sauna meal of Finnish specialties",
      "One beer or cider and unlimited water",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional alcoholic beverages beyond the included drink",
      "Swimsuit (can be rented or purchased on-site)",
      "Gratuities",
    ],
    itinerary: [
      "5:00 PM - Meet at Löyly for introduction to Finnish sauna culture",
      "5:15 PM - Change into sauna attire and preparation instructions",
      "5:30 PM - First sauna session with instructions on traditional techniques",
      "6:00 PM - Cooling off period with option for ice swimming",
      "6:15 PM - Second sauna round with birch branch whisking experience",
      "6:45 PM - Final cool-down and refreshments",
      "7:15 PM - Change and prepare for post-sauna meal",
      "7:30 PM - Traditional Finnish dinner and discussion",
      "9:00 PM - Experience conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the experience. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled experience.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Is sauna nude or with swimwear?",
        answer:
          "Traditional Finnish saunas are enjoyed nude, with men and women in separate sauna rooms. However, we understand cultural differences, so swimwear is permitted if you're uncomfortable with nudity. We provide private changing areas and clear instructions. In the mixed-gender facilities, swimwear is required. Towels and seat covers are always used in the sauna.",
      },
      {
        question: "Is ice swimming really necessary?",
        answer:
          "Ice swimming is completely optional, though it's an authentic part of the Finnish sauna experience and offers health benefits when done properly. Many guests find it invigorating after initial hesitation. We offer different cooling options including cold showers for those who prefer not to immerse in icy water.",
      },
      {
        question: "What health considerations should I be aware of?",
        answer:
          "Sauna is not recommended for pregnant women or people with certain cardiovascular conditions, very high or low blood pressure, or acute illnesses. If you have any medical concerns, please consult your doctor before booking. The sauna rooms are very hot (80-100°C/176-212°F), and alcohol consumption before sauna is discouraged.",
      },
    ],
  },
  {
    title: "Helsinki Winter Ice Fishing Adventure",
    description:
      "Experience traditional Finnish ice fishing on a frozen lake near Helsinki, drilling through the ice, setting up lines, and cooking your fresh catch for lunch in a cozy wilderness cabin.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/ice-fishing.jpg",
      "/images/tours/helsinki/winter-lake.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Winter", "Fishing", "Nature"],
    meetingPoint: {
      address:
        "Helsinki Central Railway Station, main entrance, 00100 Helsinki",
      coordinates: {
        latitude: 60.1718,
        longitude: 24.9414,
      },
      instructions:
        "Meet under the main clock in the central hall of Helsinki Railway Station. Your guide will be holding an 'Ice Fishing Tour' sign. From there, we'll travel together to the fishing location.",
      contactNumber: "+358 40 543 2109",
      contactEmail: "fishing@finnishadventures.com",
    },
    highlights: [
      "Drill your own fishing hole through lake ice using a traditional hand auger",
      "Learn ice fishing techniques from an experienced local guide",
      "Enjoy the tranquility of Finland's winter wilderness",
      "Cook your fresh catch over an open fire in a traditional cabin",
      "Warm up with traditional Finnish hot drinks and snacks",
    ],
    inclusions: [
      "Transportation from Helsinki to fishing location and back",
      "All fishing equipment and ice safety gear",
      "Professional fishing guide",
      "Wilderness lunch, including your catch if successful",
      "Hot beverages and traditional Finnish snacks",
      "Winter clothing rental if needed (boots, overalls, gloves)",
    ],
    exclusions: [
      "Alcoholic beverages",
      "Additional fishing equipment beyond what's provided",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Helsinki Central Railway Station",
      "9:30 AM - Transportation to fishing location (approximately 45 minutes)",
      "10:15 AM - Ice safety briefing and fishing equipment orientation",
      "10:45 AM - Drill holes and begin ice fishing experience",
      "12:30 PM - Break for lunch preparation in wilderness cabin",
      "1:00 PM - Cook and enjoy lunch, including any caught fish",
      "2:00 PM - Continue fishing or enjoy optional winter activities",
      "3:00 PM - Pack up and prepare for return journey",
      "4:00 PM - Return to Helsinki Central Railway Station",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the experience. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before. Alternative date or indoor fishing program offered if ice conditions are unsafe.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What fish species might we catch?",
        answer:
          "The most common catches during ice fishing in Finnish lakes are perch, pike, and whitefish. If we're lucky, we might also catch zander (pike-perch) or burbot. While we can't guarantee catches, our guides know the best locations to maximize your chances. Even without a catch, the experience of fishing on a frozen lake surrounded by snowy forests is unforgettable.",
      },
      {
        question: "How cold will it be and what should I wear?",
        answer:
          "Winter temperatures in Finland typically range from 0°C to -20°C (32°F to -4°F), but can sometimes drop lower. We provide thermal overalls, boots, and gloves if needed, but recommend you dress in layers: thermal underwear, warm mid-layer, and a windproof outer layer. Don't forget a warm hat that covers your ears and warm socks.",
      },
      {
        question: "Is ice fishing safe?",
        answer:
          "Safety is our top priority. We only conduct ice fishing when the ice is sufficiently thick (minimum 15cm/6 inches). Our guides are trained in ice safety and carry safety equipment including ice picks, throw ropes, and first aid kits. We provide a thorough safety briefing at the beginning of the tour and all participants wear ice safety equipment.",
      },
    ],
  },
  {
    title: "Helsinki Food Tour: From Market Halls to Modern Nordic Cuisine",
    description:
      "Taste your way through Helsinki's culinary landscape, from traditional market halls to contemporary restaurants showcasing New Nordic cuisine, with expert commentary on Finnish food culture and traditions.",
    city: "Helsinki",
    country: "Finland",
    region: "Uusimaa",
    images: [
      "/images/tours/helsinki/market-hall.jpg",
      "/images/tours/helsinki/nordic-cuisine.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Culture", "Culinary"],
    meetingPoint: {
      address:
        "Old Market Hall (Vanha Kauppahalli), Eteläranta, 00130 Helsinki",
      coordinates: {
        latitude: 60.1674,
        longitude: 24.9527,
      },
      instructions:
        "Meet at the main entrance of the Old Market Hall facing the harbor. Look for your guide holding a 'Helsinki Food Tour' sign.",
      contactNumber: "+358 40 765 9876",
      contactEmail: "taste@helsinkifoodtours.com",
    },
    highlights: [
      "Sample traditional Finnish foods like Karelian pies, salmon soup, and reindeer",
      "Visit the historic Old Market Hall and modern Market Square",
      "Taste New Nordic cuisine highlighting foraged and seasonal ingredients",
      "Learn about Finland's food traditions and modern culinary innovations",
      "Enjoy Finnish craft beer or berry wine pairings with select tastings",
    ],
    inclusions: [
      "Professional food guide with culinary expertise",
      "Food tastings at 6-7 different locations (equivalent to a full meal)",
      "Select beverage pairings including one alcoholic drink (non-alcoholic options available)",
      "Small group experience (maximum 8 people)",
      "Helsinki Food Guide booklet with recipes and recommendations",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks beyond included tastings",
      "Gratuities",
    ],
    itinerary: [
      "11:00 AM - Meet at the Old Market Hall for introduction and first tastings",
      "11:45 AM - Visit Market Square for seasonal outdoor vendors",
      "12:15 PM - Walk to Punavuori district with commentary on Finnish food culture",
      "12:45 PM - Visit award-winning bakery for modern Finnish pastries",
      "1:15 PM - Taste New Nordic cuisine at contemporary restaurant",
      "2:00 PM - Sample Finnish craft beverages with small food pairings",
      "2:30 PM - Final sweet tastings at artisanal chocolate shop",
      "3:00 PM - Tour conclusion with additional recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the experience. 50% refund if canceled 24-48 hours before. No refund for cancellations less than 24 hours before scheduled tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most allergy-specific diets with advance notice. Please inform us of any dietary restrictions when booking so we can arrange appropriate tastings. Note that some traditional Finnish dishes contain fish, meat, or dairy, but alternatives are available.",
      },
      {
        question: "How much food is included?",
        answer:
          "The tour includes 6-7 generous tastings that together equal a full meal. You'll sample a variety of Finnish specialties from small bites to more substantial portions. Most guests finish the tour comfortably satisfied and won't need additional lunch plans.",
      },
      {
        question: "Is alcohol included in the tour?",
        answer:
          "The tour includes one alcoholic beverage pairing (typically Finnish craft beer, cider, or berry wine) with one of the tastings. Non-alcoholic alternatives are always available. Additional alcoholic beverages can be purchased separately if desired. Participants must be 18+ to consume alcohol.",
      },
    ],
  },
];

export default helsinkiTours;
