import { Tour } from "@/lib/interfaces/services/tours";

export const ouarzazateTours: Tour[] = [
  {
    title: "Ait Ben Haddou UNESCO Heritage Site Explorer",
    description:
      "Visit the iconic fortified village of Ait Ben Haddou, one of Morocco's most spectacular ksar settlements and a UNESCO World Heritage site that has served as a backdrop for countless Hollywood films including Gladiator and Game of Thrones.",
    city: "Ouarzazate",
    country: "Morocco",
    region: "Drâa-Tafilalet",
    images: [
      "/images/tours/ouarzazate/ait-ben-haddou.jpg",
      "/images/tours/ouarzazate/ksar-view.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["UNESCO", "Historical", "Architecture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Hôtel la Kasbah, Avenue Mohammed V, Ouarzazate",
      coordinates: {
        latitude: 30.9199,
        longitude: -6.8928,
      },
      instructions:
        "Meet in the lobby of Hôtel la Kasbah. Your guide will be wearing a blue djellaba and holding a sign with your name.",
      contactNumber: "+212 524-882-331",
      contactEmail: "aitbenhaddou@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Explore the UNESCO World Heritage site of Ait Ben Haddou with a local expert",
      "Discover the history of this 17th-century fortified village and trading post",
      "Learn about traditional Berber architecture and defensive building techniques",
      "Visit filming locations from famous movies and TV shows",
      "Enjoy panoramic views from the top of the ksar overlooking the Ounila Valley",
    ],

    inclusions: [
      "Professional local guide with expert knowledge of the site's history",
      "Transportation from Ouarzazate to Ait Ben Haddou and back",
      "Entrance fees to the ksar and historical buildings",
      "Bottled water during the tour",
      "Traditional Moroccan mint tea at a local house inside the ksar",
      "Small group size (maximum 12 participants)",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Lunch (optional stop at local restaurant available)",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs",
      "Professional photography services (available for purchase)",
    ],

    itinerary: [
      "09:00 - Meet at Hôtel la Kasbah in Ouarzazate",
      "09:15 - Depart for Ait Ben Haddou (30 km drive through scenic terrain)",
      "10:00 - Arrive at Ait Ben Haddou and begin guided exploration",
      "10:15 - Visit the lower portions of the ksar and learn about its history",
      "11:00 - Climb to the higher sections for spectacular panoramic views",
      "11:30 - Visit a traditional Berber house inside the fortification",
      "12:00 - Enjoy mint tea with a local family",
      "12:30 - Free time to explore and take photographs",
      "13:00 - Optional lunch at a local restaurant overlooking the ksar",
      "13:45 - Return journey to Ouarzazate",
      "14:30 - Tour concludes at original meeting point",
    ],

    faqs: [
      {
        question: "How physically demanding is the tour of Ait Ben Haddou?",
        answer:
          "The tour involves moderate walking on uneven terrain and climbing some steep paths to reach the upper portions of the ksar. The complete tour includes approximately 1-2 hours of walking with elevation gain. While not extremely difficult, it requires a reasonable level of fitness and mobility. Comfortable closed shoes with good grip are essential. Those with limited mobility can still enjoy the impressive views of the ksar from the base and explore the lower sections.",
      },
      {
        question: "Is Ait Ben Haddou still inhabited?",
        answer:
          "While most inhabitants have moved to more modern housing across the river, several families still live within the ancient ksar. During our tour, you'll have the opportunity to visit one of these traditional homes and meet residents who maintain the historical structures and traditional way of life. Tourism has become an important source of income for these families who act as guardians of this important cultural heritage.",
      },
      {
        question: "What famous films and TV shows were shot at Ait Ben Haddou?",
        answer:
          "Ait Ben Haddou's distinctive architecture has made it a favorite for filmmakers seeking exotic desert locations. Productions filmed here include 'Gladiator,' 'Lawrence of Arabia,' 'The Mummy,' 'Kingdom of Heaven,' and 'Game of Thrones' (where it served as the city of Yunkai). Your guide will point out specific filming locations and share interesting behind-the-scenes stories from these productions.",
      },
    ],
  },
  {
    title: "Atlas Studios & Moroccan Cinema History Tour",
    description:
      "Go behind the scenes at Atlas Studios, one of the world's largest film studios where blockbusters like Gladiator and The Mummy were filmed, and explore the fascinating world of Morocco's long-standing relationship with international cinema.",
    city: "Ouarzazate",
    country: "Morocco",
    region: "Drâa-Tafilalet",
    images: [
      "/images/tours/ouarzazate/atlas-studios.jpg",
      "/images/tours/ouarzazate/film-sets.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Cinema", "Film Studio", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Atlas Studios entrance, Route de Marrakech, Ouarzazate",
      coordinates: {
        latitude: 30.9472,
        longitude: -6.8991,
      },
      instructions:
        "Meet at the main entrance gate to Atlas Studios, approximately 5 km northeast of Ouarzazate. Look for your guide holding a clapperboard sign.",
      contactNumber: "+212 524-882-332",
      contactEmail: "atlasstudios@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2024-01-05",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-13",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-27",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-10",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-24",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Tour the expansive Atlas Studios, one of the world's largest film studios",
      "Explore incredible sets from famous movies like Gladiator, The Mummy, and Kingdom of Heaven",
      "Learn about special effects and filmmaking techniques used in desert environments",
      "Discover Morocco's long history with international film productions",
      "Visit the Cinema Museum to see props, costumes, and equipment from major productions",
    ],

    inclusions: [
      "Expert film industry guide with insider knowledge",
      "Entrance fees to Atlas Studios and all film sets",
      "Admission to Cinema Museum",
      "Behind-the-scenes access to selected production areas (when available)",
      "Bottled water",
      "Film location map souvenir",
    ],

    exclusions: [
      "Transportation to and from the studios (can be arranged for additional fee)",
      "Food and additional beverages",
      "Professional photography services (available for purchase)",
      "Gratuities for guide",
      "Special exhibits or active filming areas requiring additional permissions",
    ],

    itinerary: [
      "10:00 - Meet at Atlas Studios main entrance",
      "10:15 - Introduction to Morocco's film industry history",
      "10:30 - Tour of ancient Egypt sets used in various productions",
      "11:00 - Visit the Jerusalem set from Kingdom of Heaven",
      "11:30 - Explore the Roman sets from Gladiator",
      "12:00 - Behind-the-scenes look at special effects workshops (if available)",
      "12:30 - Visit the Cinema Museum with props and costumes display",
      "13:00 - Tour conclusion with time for questions and photographs",
    ],

    faqs: [
      {
        question: "Will we see actual filming taking place?",
        answer:
          "While Atlas Studios is an active production facility, we cannot guarantee that filming will be taking place during your visit. When productions are in progress, certain areas may be restricted. However, our guides work closely with the studio and will provide the best possible experience given the day's circumstances. If filming is occurring, we may be able to observe from a designated area, though this depends entirely on the production company's policies.",
      },
      {
        question: "Are there any famous props or sets I'll recognize?",
        answer:
          "Yes! Atlas Studios maintains many iconic sets and props from major productions. You'll likely recognize the Egyptian temple from 'The Mummy,' the Roman colosseum from 'Gladiator,' and parts of Jerusalem from 'Kingdom of Heaven.' The Cinema Museum houses an impressive collection including chariots, weaponry, costumes, and set pieces from various productions that have filmed here over the past 35 years.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and often fascinating for children who enjoy movies and are curious about how they're made. Kids particularly enjoy seeing familiar movie sets in real life and learning about special effects. The walking is relatively easy and mostly on flat terrain. However, very young children (under 5) may find some sections less engaging.",
      },
    ],
  },
  {
    title: "Draa Valley & Desert Kasbahs 4x4 Adventure",
    description:
      "Journey through the breathtaking Draa Valley in a 4x4 vehicle, exploring ancient kasbahs, palm oases, and traditional villages while learning about Berber culture and the historical importance of Morocco's desert fortifications.",
    city: "Ouarzazate",
    country: "Morocco",
    region: "Drâa-Tafilalet",
    images: [
      "/images/tours/ouarzazate/draa-valley.jpg",
      "/images/tours/ouarzazate/desert-kasbah.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.8,
    tags: ["4x4", "Desert", "Kasbahs"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Place al-Mouahidine, City Center, Ouarzazate",
      coordinates: {
        latitude: 30.9196,
        longitude: -6.8925,
      },
      instructions:
        "Meet at the central square (Place al-Mouahidine) next to the tourism office. Your driver/guide will be waiting in a 4x4 vehicle with Paragon Trails logo.",
      contactNumber: "+212 524-882-333",
      contactEmail: "draatour@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-20",
      "2023-12-24",
      "2024-01-03",
      "2024-01-07",
      "2024-01-11",
      "2024-01-15",
      "2024-01-19",
      "2024-01-23",
      "2024-01-27",
      "2024-01-31",
      "2024-02-04",
      "2024-02-08",
      "2024-02-12",
      "2024-02-16",
      "2024-02-20",
      "2024-02-24",
      "2024-02-28",
    ],

    highlights: [
      "Travel in comfortable 4x4 vehicles through diverse desert landscapes",
      "Explore the UNESCO-protected Draa Valley with its millions of date palms",
      "Visit remote kasbahs off the standard tourist track",
      "Meet local Berber families and learn about their traditional lifestyle",
      "Photograph spectacular desert scenery and ancient mud-brick architecture",
    ],

    inclusions: [
      "Transportation in air-conditioned 4x4 vehicle",
      "Professional driver/guide with expert local knowledge",
      "Entrance fees to all kasbahs and historical sites",
      "Traditional Moroccan lunch at a local family home",
      "Bottled water throughout the journey",
      "Mint tea ceremonies in village settings",
      "Small group size (maximum 6 participants per vehicle)",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for additional fee)",
      "Alcoholic beverages",
      "Gratuities for guide and driver",
      "Optional activities like camel rides (available at extra cost)",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "08:30 - Meet at Place al-Mouahidine in Ouarzazate",
      "08:45 - Departure by 4x4 vehicle toward the Draa Valley",
      "09:30 - First stop at Tamnougalt Kasbah with guided exploration",
      "10:30 - Continue through palm groves and traditional villages",
      "11:30 - Visit to Agdz and its panoramic viewpoint over the valley",
      "12:30 - Traditional lunch with a local Berber family",
      "14:00 - Explore the less-visited kasbahs of Tizgui and Timiderte",
      "15:30 - Visit a local date farmer and learn about traditional irrigation",
      "16:30 - Final panoramic stop for photography",
      "17:30 - Return journey to Ouarzazate",
      "18:30 - Tour concludes at original meeting point",
    ],

    faqs: [
      {
        question: "How comfortable is the 4x4 journey?",
        answer:
          "We use modern, well-maintained 4x4 vehicles with air conditioning and good suspension. While some sections involve driving on unpaved desert tracks, the pace is relaxed and your driver adjusts to terrain conditions for maximum comfort. The vehicles accommodate a maximum of 6 passengers with window seats for everyone to enjoy the scenery. We make frequent stops for photography, exploration, and refreshments.",
      },
      {
        question: "What should I wear for this desert adventure?",
        answer:
          "Light, breathable clothing is recommended with layers for temperature changes. Even in warm months, bringing a light jacket is advisable as desert temperatures can fluctuate. Sun protection is essential - wear a hat, sunglasses, and apply sunscreen regularly. Closed, comfortable walking shoes are necessary for exploring the kasbahs and villages, where terrain can be uneven. During winter months (November-February), warmer clothing is needed as desert areas can be quite cool.",
      },
      {
        question: "Will we interact with local people during the tour?",
        answer:
          "Yes, authentic interactions with local Berber communities are a highlight of this tour. You'll have lunch with a local family, meet traditional craftspeople, and visit a working date farm. These encounters offer genuine cultural exchange rather than staged tourist experiences. Our guide will help translate and provide cultural context. We maintain ethical relationships with these communities, ensuring fair compensation for their time and hospitality.",
      },
    ],
  },
  {
    title: "Fint Oasis Desert Sunset & Stargazing Experience",
    description:
      "Escape to the hidden Fint Oasis for a magical evening watching the sunset transform the desert landscape, followed by a traditional dinner under Bedouin tents and spectacular stargazing away from light pollution.",
    city: "Ouarzazate",
    country: "Morocco",
    region: "Drâa-Tafilalet",
    images: [
      "/images/tours/ouarzazate/fint-oasis.jpg",
      "/images/tours/ouarzazate/desert-stargazing.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Sunset", "Stargazing", "Oasis"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "nature-experience",

    meetingPoint: {
      address: "Ibis Ouarzazate Hotel, Avenue Mohammed V, Ouarzazate",
      coordinates: {
        latitude: 30.9156,
        longitude: -6.8932,
      },
      instructions:
        "Meet in the lobby of Ibis Ouarzazate Hotel. Transportation will be provided to and from the oasis.",
      contactNumber: "+212 524-882-334",
      contactEmail: "stargazing@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-23",
      "2023-12-25",
      "2023-12-27",
      "2023-12-29",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-06",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-20",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-03",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-17",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Discover the hidden Fint Oasis, a lush palm grove surrounded by stark desert terrain",
      "Experience a spectacular sunset from a perfect panoramic viewpoint",
      "Enjoy a traditional Moroccan dinner in an authentic Bedouin-style camp",
      "Learn about the night sky with professional astronomy guides",
      "Observe stars, planets and galaxies through high-quality telescopes",
    ],

    inclusions: [
      "Round-trip transportation from Ouarzazate to Fint Oasis",
      "Professional guide with astronomy expertise",
      "Traditional Moroccan dinner with tea ceremony",
      "Use of professional astronomy equipment including telescopes",
      "Star maps and navigation guides to take home",
      "Comfortable seating and blankets for stargazing",
      "Mint tea and Moroccan pastries during stargazing",
    ],

    exclusions: [
      "Hotel pickup and drop-off beyond the meeting point",
      "Alcoholic beverages",
      "Professional astrophotography equipment (bring your own)",
      "Gratuities for guides and camp staff",
      "Personal expenses",
    ],

    itinerary: [
      "16:00 - Meet at Ibis Ouarzazate Hotel",
      "16:15 - Departure for Fint Oasis (approximately 45 minute drive)",
      "17:00 - Arrive at Fint Oasis and explore the palm groves",
      "17:30 - Short hike to the sunset viewpoint",
      "18:00 - Watch sunset over the oasis and surrounding mountains",
      "18:45 - Return to desert camp for traditional welcome with mint tea",
      "19:15 - Authentic Moroccan dinner served in Bedouin tents",
      "20:30 - Introduction to the night sky and astronomy basics",
      "21:00 - Guided stargazing with professional telescopes",
      "22:00 - Return journey to Ouarzazate",
      "22:30 - Tour concludes at original meeting point",
    ],

    faqs: [
      {
        question: "Is prior astronomy knowledge needed to enjoy the stargazing?",
        answer:
          "Not at all! Our astronomy guides cater to all knowledge levels, from complete beginners to amateur astronomers. The experience begins with a basic orientation to the night sky, identifying major constellations and celestial objects visible to the naked eye. When using telescopes, guides provide clear explanations of what you're observing. The desert's exceptionally dark skies make even simple stargazing spectacular.",
      },
      {
        question: "What should I bring for the desert evening experience?",
        answer:
          "We recommend wearing layers that can be added as the temperature drops after sunset. Desert evenings can be surprisingly cool even in summer months. Comfortable closed shoes are important for walking in the oasis and desert terrain. Bringing a camera with low-light capabilities will allow you to capture the sunset, though smartphone cameras have limitations for night sky photography. A small flashlight is useful, though we provide red-light flashlights that don't interfere with night vision during stargazing.",
      },
      {
        question: "Will we be able to take good photos of the night sky?",
        answer:
          "Basic night sky photography is possible with most modern smartphones, particularly for capturing constellations and the overall starry sky. For detailed astrophotography of specific celestial objects, you would need specialized equipment including a camera with manual settings, tripod, and ideally a wide-angle lens. Our guides can provide tips for basic night photography with whatever equipment you have. We also take some professional photos during the evening that are shared with participants afterward.",
      },
    ],
  },
  {
    title: "Traditional Berber Carpet Weaving Workshop",
    description:
      "Immerse yourself in the ancient art of Berber carpet making with a hands-on workshop led by master weavers from local women's cooperatives, learning traditional techniques and cultural patterns before creating your own small textile to take home.",
    city: "Tazenakht",
    country: "Morocco",
    region: "Drâa-Tafilalet",
    images: [
      "/images/tours/ouarzazate/berber-carpet.jpg",
      "/images/tours/ouarzazate/weaving-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Crafts", "Cultural", "Hands-on"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Women's Carpet Cooperative, Tazenakht Village, 30km west of Ouarzazate",
      coordinates: {
        latitude: 30.5778,
        longitude: -7.2026,
      },
      instructions:
        "Meet at the Women's Carpet Cooperative in Tazenakht. Transportation from Ouarzazate can be arranged for an additional fee.",
      contactNumber: "+212 524-882-335",
      contactEmail: "carpetworkshop@paragontrails.com",
    },

    availableDates: [
      "2023-12-18",
      "2023-12-25",
      "2024-01-01",
      "2024-01-08",
      "2024-01-15",
      "2024-01-22",
      "2024-01-29",
      "2024-02-05",
      "2024-02-12",
      "2024-02-19",
      "2024-02-26",
    ],

    highlights: [
      "Learn traditional Berber carpet weaving techniques from master artisans",
      "Understand the cultural significance of patterns and symbols in Moroccan textiles",
      "Hands-on experience creating your own small woven piece to take home",
      "Support a women's cooperative that preserves traditional arts and provides economic opportunities",
      "Discover the natural dyeing process using local plants and minerals",
    ],

    inclusions: [
      "Professional weaving instruction from master artisans",
      "All materials for your weaving project",
      "Traditional tea ceremony and Moroccan pastries",
      "Your completed textile piece to take home",
      "Certificate of participation from the cooperative",
      "Detailed booklet on Berber textile traditions",
      "Transportation from Ouarzazate (if option selected)",
    ],

    exclusions: [
      "Transportation (unless option selected)",
      "Additional textile purchases (available directly from cooperative)",
      "Lunch (can be arranged for additional fee)",
      "Gratuities for instructors",
      "Special material upgrades beyond standard workshop supplies",
    ],

    itinerary: [
      "09:30 - Arrive at Women's Carpet Cooperative in Tazenakht",
      "09:45 - Welcome ceremony with mint tea and introduction to Berber textiles",
      "10:15 - Tour of the cooperative facilities and showroom",
      "10:45 - Demonstration of wool preparation and natural dyeing techniques",
      "11:15 - Introduction to basic weaving techniques with hands-on practice",
      "12:00 - Begin work on personal weaving project with instructor assistance",
      "13:00 - Break for tea and pastries with the artisan women",
      "13:30 - Continue weaving with guidance on traditional patterns",
      "14:00 - Complete and finish personal textile piece",
      "14:30 - Closing ceremony with certificates and group photos",
      "15:00 - Free time to shop cooperative products (optional)",
      "15:30 - Workshop concludes, return transportation for those who selected option",
    ],

    faqs: [
      {
        question: "Do I need prior weaving experience?",
        answer:
          "No prior experience is necessary. This workshop is designed for beginners, with patient instructors who will guide you through each step of the process. You'll begin with basic techniques and simple patterns that can be completed within the workshop timeframe. The goal is to learn about the cultural significance of this traditional craft while creating a small but meaningful souvenir of your experience.",
      },
      {
        question: "What will I create during the workshop?",
        answer:
          "You'll create a small textile piece approximately 20cm x 30cm (8\" x 12\") that demonstrates basic Berber weaving techniques and traditional patterns. This could be a decorative wall hanging, table mat, or small bag depending on your preference. While this is smaller than the elaborate carpets that might take months to complete, it incorporates authentic techniques and materials, providing a meaningful introduction to this ancient craft.",
      },
      {
        question: "How does this workshop benefit the local community?",
        answer:
          "This workshop directly supports the Women's Carpet Cooperative, an organization founded to preserve traditional Berber weaving techniques while providing sustainable income for local women. The cooperative ensures that artisans receive fair compensation for their work and training, helping maintain economic independence. Additionally, the program includes apprenticeship opportunities for younger generations to learn these traditional skills, preventing the loss of cultural heritage.",
      },
    ],
  },
];

export default ouarzazateTours;
