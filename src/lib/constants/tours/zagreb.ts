import { Tour } from "@/lib/interfaces/services/tours";

export const zagrebTours: Tour[] = [
  {
    title: "Zagreb Upper Town Secrets & Hidden Courtyards",
    description:
      "Discover the historical heart of Zagreb beyond the usual tourist routes. Explore hidden courtyards, secret passages, and tucked-away gardens of the Upper Town while learning about the city's medieval origins, legends, and the everyday lives of locals past and present.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/hidden-courtyard.jpg",
      "/images/tours/zagreb/upper-town-street.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Walking Tour", "History", "Hidden Gems"],
    meetingPoint: {
      address: "Ban Jelačić Square, at the horseman statue, Zagreb",
      coordinates: {
        latitude: 45.8131,
        longitude: 15.9753,
      },
      instructions:
        "Meet by the horseman statue in the center of the square. Your guide will be holding a blue umbrella with 'Secret Zagreb' written on it.",
      contactNumber: "+385 91 123 4567",
      contactEmail: "tours@secretzagreb.com",
    },
    highlights: [
      "Access private courtyards and hidden passages normally closed to the public",
      "Discover the Stone Gate shrine and hear about its miraculous survival",
      "Explore the mysterious tunnel system beneath Upper Town",
      "Visit charming secret gardens and patios of historic buildings",
    ],
    inclusions: [
      "Expert local guide with historical expertise",
      "Special access to normally restricted areas",
      "Small group experience (maximum 10 people)",
      "Traditional Croatian pastry tasting",
      "One Croatian coffee or homemade herbal tea",
    ],
    exclusions: [
      "Funicular tickets (approximately €1 if needed)",
      "Additional food and beverages",
      "Gratuities",
      "Hotel pickup and drop-off",
    ],
    itinerary: [
      "10:00 AM - Meet at Ban Jelačić Square",
      "10:15 AM - Walk or take funicular to Upper Town",
      "10:30 AM - Explore hidden passages near St. Mark's Church",
      "11:00 AM - Visit secret courtyards of noble families",
      "11:30 AM - Stone Gate shrine and its legends",
      "12:00 PM - Discover hidden garden cafes and coffee break",
      "12:30 PM - Explore lesser-known viewpoints and fortifications",
      "1:00 PM - Tour conclusion at Lotrščak Tower",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
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
    isIndoor: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3-4 kilometers at a leisurely pace, with several uphill sections and stairs in the Upper Town. While not strenuous, comfortable walking shoes are recommended. The route includes some cobblestone streets and narrow passages. We take frequent breaks at scenic viewpoints and interesting locations, and can adjust the pace based on group preferences.",
      },
      {
        question: "Will we enter any buildings or museums?",
        answer:
          "This tour focuses primarily on outdoor spaces, hidden courtyards, and passageways. We may briefly enter certain buildings with public access, but no major museum visits are included. This allows us to discover more secret spots rather than spending time in major attractions.",
      },
      {
        question: "Can I take photographs during the tour?",
        answer:
          "Photography is welcomed throughout most of the tour. When visiting private courtyards and gardens, we ask that you respect any specific restrictions mentioned by your guide. The unique vantage points on this tour offer excellent photo opportunities of Zagreb that most visitors never discover.",
      },
    ],
  },
  {
    title: "Strukli Cooking Class & Croatian Cuisine",
    description:
      "Master the art of making strukli, Zagreb's iconic cheese pastry, in a hands-on cooking workshop. Learn about Croatian culinary traditions, visit Dolac Market to select ingredients, and discover the techniques behind this UNESCO-recognized intangible cultural heritage dish.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/strukli-making.jpg",
      "/images/tours/zagreb/dolac-market.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Cooking", "Food", "Cultural"],
    meetingPoint: {
      address: "Dolac Market, main entrance, Dolac 9, Zagreb",
      coordinates: {
        latitude: 45.8148,
        longitude: 15.9762,
      },
      instructions:
        "Meet at the main entrance to Dolac Market, near the statue of the market woman 'Kumica'. Your instructor will be holding a 'Croatian Cooking Class' sign.",
      contactNumber: "+385 91 234 5678",
      contactEmail: "cook@zagrebfood.hr",
    },
    highlights: [
      "Shop for fresh ingredients at the historic Dolac farmers' market",
      "Learn to prepare traditional strukli from a local culinary expert",
      "Master the stretching technique for the perfect pastry dough",
      "Create both savory and sweet variations of this Croatian specialty",
    ],
    inclusions: [
      "Market tour with ingredient shopping",
      "Hands-on cooking class with expert instruction",
      "All ingredients and cooking equipment",
      "Meal featuring your prepared dishes",
      "Wine, water, and coffee with your meal",
      "Recipe booklet to take home",
    ],
    exclusions: [
      "Transportation to/from the meeting point",
      "Additional food or beverages beyond what's mentioned",
      "Gratuities",
      "Personal cooking equipment",
    ],
    itinerary: [
      "9:00 AM - Meet at Dolac Market entrance",
      "9:15 AM - Guided market tour and ingredient shopping",
      "10:00 AM - Walk to cooking school in nearby historic building",
      "10:15 AM - Introduction to Croatian cuisine and strukli history",
      "10:30 AM - Begin cooking workshop and dough preparation",
      "11:30 AM - Prepare fillings and learn assembly techniques",
      "12:30 PM - Baking time and preparation of accompanying dishes",
      "1:00 PM - Enjoy the strukli and other Croatian specialties you've prepared",
      "1:45 PM - Recipe sharing and culinary Q&A",
      "2:00 PM - Class conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled class.",
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
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Will we make other Croatian dishes besides strukli?",
        answer:
          "While strukli is the star of our workshop given its significance in Zagreb's culinary heritage, the class also includes preparation of 2-3 additional dishes that complement it. Typically, we make a seasonal soup (such as zagorska juha in winter), a traditional salad with pumpkin oil dressing, and a simple dessert like fritule (Croatian doughnuts) or seasonal fruit strudel. You'll receive recipes for all dishes to take home.",
      },
      {
        question: "Do I need cooking experience to participate?",
        answer:
          "No prior cooking experience is necessary. Our instructors break down the techniques into simple steps that even beginners can follow. Making strukli does involve some dough stretching techniques that require patience, but our instructors will guide you through the process step by step.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "With advance notice, we can accommodate vegetarian diets. Traditional strukli contains dairy (fresh cheese), but we can prepare vegetarian accompanying dishes. For other dietary restrictions such as gluten-free, vegan, or specific allergies, please contact us before booking to discuss possibilities.",
      },
    ],
  },
  {
    title: "Museum of Broken Relationships & Artistic Zagreb",
    description:
      "Explore Zagreb's innovative museum scene, starting with the globally acclaimed Museum of Broken Relationships and continuing through the city's creative art spaces, galleries, and artistic quarters. Discuss contemporary Croatian culture with local artists and creative professionals.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/broken-relationships.jpg",
      "/images/tours/zagreb/art-gallery.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Museums", "Contemporary Art", "Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes the Museum of Broken Relationships special?",
        answer:
          "This award-winning museum began as a traveling exhibition showcasing personal objects from failed relationships, each with a story attached. Now permanently housed in Zagreb's Upper Town, it presents a unique, often poignant, sometimes humorous exploration of love and loss through everyday items donated from around the world. The concept originated in Zagreb and has inspired similar museums globally. Our tour includes special insights into the museum's creation and cultural significance beyond what regular visitors experience.",
      },
    ],
  },
  {
    title: "Zagreb Craft Beer Tour & Brewery Visits",
    description:
      "Experience Croatia's booming craft beer scene with guided tastings at Zagreb's top microbreweries and craft beer bars. Meet brewmasters, learn about brewing techniques, and discover how young entrepreneurs are revolutionizing Croatian beer culture with innovative local ingredients and methods.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/craft-beer.jpg",
      "/images/tours/zagreb/brewery-tour.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.6,
    tags: ["Beer", "Breweries", "Nightlife"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many beer samples are included?",
        answer:
          "The tour includes guided tastings of 10-12 different craft beers across 3-4 locations, with generous pour sizes (approximately 1/3 pint per sample). Each brewery stop includes a behind-the-scenes tour where possible, and direct interaction with brewers or knowledgeable staff. Light snacks are provided to complement the beer tastings. Non-alcoholic alternatives are available with advance notice.",
      },
    ],
  },
  {
    title: "Zagreb Christmas Markets & Festive Traditions",
    description:
      "Experience the magic of Zagreb's award-winning Christmas markets, voted Europe's best several years running. Explore festively decorated squares, sample seasonal delicacies and mulled wine, and learn about Croatian holiday traditions with a local guide who knows all the best spots.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/christmas-market.jpg",
      "/images/tours/zagreb/advent-zagreb.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.9,
    tags: ["Christmas", "Seasonal", "Festive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When do the Christmas markets operate?",
        answer:
          "Zagreb's Christmas markets (known as Advent in Zagreb) typically run from the last weekend of November until early January. The exact dates vary slightly each year. The markets are most magical in the evening when all the lights are illuminated, though they operate during daytime hours as well. Our tour is offered daily during the Advent season and can be taken as either a daytime or evening experience, with slightly different focuses depending on your preference.",
      },
    ],
  },
  {
    title: "Samobor Culinary Excursion & Kremšnite Tasting",
    description:
      "Journey to the charming medieval town of Samobor just outside Zagreb for a food-focused exploration. Sample the famous Samobor kremšnite cream cake, bermet aperitif wine, and other local specialties while exploring the picturesque old town with its artisan traditions and beautiful setting.",
    city: "Samobor",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/samobor-town.jpg",
      "/images/tours/zagreb/kremsnite.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Day Trip", "Food", "Small Town"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How do we get to Samobor from Zagreb?",
        answer:
          "Samobor is located approximately 25 kilometers (15 miles) west of Zagreb. Our tour includes comfortable private transportation from your Zagreb accommodation directly to Samobor, with the journey taking about 30-40 minutes each way depending on traffic. During the drive, your guide will share information about the region and its history. Upon arrival in Samobor, we explore the historic center primarily on foot, as it's a small, pedestrian-friendly town.",
      },
    ],
  },
  {
    title: "Socialist Zagreb: Communist Era Architecture & History",
    description:
      "Explore Zagreb's fascinating socialist period through its striking modernist architecture, monuments, and public spaces. Learn how the Yugoslav era shaped the city with massive housing projects, innovative cultural venues, and distinctive design that still defines much of Zagreb today.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/modernist-architecture.jpg",
      "/images/tours/zagreb/socialist-monument.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Architecture", "Communist Era", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Does this tour have a political perspective?",
        answer:
          "Our tour takes an objective, historical approach to understanding how the socialist period (1945-1991) influenced Zagreb's urban development and architecture. Rather than focusing on politics, we explore the architectural innovations, urban planning concepts, and daily life aspects of this era. The tour highlights both the achievements (like social housing and public spaces) and challenges of the period through buildings, monuments, and firsthand accounts. Our guide provides historical context while welcoming different perspectives from participants.",
      },
    ],
  },
  {
    title: "Zagreb Photography Walk: Contrasts & Compositions",
    description:
      "Explore Zagreb through your camera lens with guidance from a professional photographer. Capture the city's unique contrasts between Habsburg elegance and socialist-era structures, colorful markets and quiet courtyards, all while learning composition techniques and photography tips.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/street-photography.jpg",
      "/images/tours/zagreb/urban-composition.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Photography", "Urban", "Creative"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This tour is suitable for photographers using any type of camera, from smartphones to DSLRs. Our guide provides tips specific to your equipment. For DSLR or mirrorless camera users, a versatile walk-around lens (24-70mm equivalent) works well for this urban setting. The focus is on composition, light, and storytelling rather than technical equipment. We provide practical advice for capturing Zagreb's unique architectural contrasts and street scenes regardless of your gear.",
      },
    ],
  },
  {
    title: "Zagreb's Green Spaces: Parks, Gardens & Nature",
    description:
      "Discover Zagreb's beautiful parks and gardens with a local nature enthusiast. Explore Maksimir Park, the Botanical Garden, and lesser-known green spaces while learning about the city's flora, fauna, and environmental initiatives.",
    city: "Zagreb",
    country: "Croatia",
    region: "Central Croatia",
    images: [
      "/images/tours/zagreb/maksimir-park.jpg",
      "/images/tours/zagreb/botanical-garden.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.8,
    tags: ["Nature", "Parks", "Botanical"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "Are there any entry fees for the parks?",
        answer:
          "No, all the parks and gardens included in this tour are free to enter. Maksimir Park and the Botanical Garden do not charge any admission fees, allowing you to enjoy Zagreb's green spaces without cost. We may visit some smaller private gardens or community green spaces that also do not require entry fees.",
      },
    ],
  },
];

export default zagrebTours;
