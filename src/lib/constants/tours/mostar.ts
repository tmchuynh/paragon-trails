import { Tour } from "@/lib/interfaces/services/tours";

export const mostarTours: Tour[] = [
  {
    title: "Bridges of Mostar: Ottoman Heritage Tour",
    description:
      "Explore Mostar's architectural treasures and complex history with a local historian, focusing on the iconic Stari Most (Old Bridge) and the city's remarkable recovery from the 1990s conflict.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/stari-most.jpg",
      "/images/tours/mostar/ottoman-quarter.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.9,
    tags: ["Historical", "Architecture", "Cultural"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Spanish Square (Španski trg), Mostar",
      coordinates: {
        latitude: 43.3423,
        longitude: 17.8081,
      },
      instructions:
        "Meet at the fountain in Spanish Square. Your guide will be holding a blue umbrella with 'Mostar Tours' written on it.",
      contactNumber: "+387 63 123 456",
      contactEmail: "mostar@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-22",
      "2023-12-23",
      "2024-01-05",
      "2024-01-06",
      "2024-01-12",
      "2024-01-13",
      "2024-01-19",
      "2024-01-20",
      "2024-01-26",
      "2024-01-27",
      "2024-02-02",
      "2024-02-03",
      "2024-02-09",
      "2024-02-10",
      "2024-02-16",
      "2024-02-17",
      "2024-02-23",
      "2024-02-24",
    ],

    highlights: [
      "Walk across the UNESCO-listed Stari Most (Old Bridge) with its dramatic history",
      "Explore the Ottoman quarter with its authentic Turkish houses and workshops",
      "Visit Koski Mehmed Pasha Mosque with minaret climb for panoramic city views",
      "Learn about Mostar's complex history and remarkable post-war recovery",
      "Meet local craftspeople continuing centuries-old traditions",
    ],

    inclusions: [
      "Professional local guide with historical expertise",
      "Entrance fees to Koski Mehmed Pasha Mosque and minaret",
      "Traditional Bosnian coffee experience",
      "Local craft demonstration",
      "Small group size (maximum 12 participants)",
      "Map of historical Mostar",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Food and additional beverages beyond included coffee",
      "Optional gratuities",
      "Personal purchases from craft shops",
    ],

    itinerary: [
      "10:00 - Meet at Spanish Square for introduction to Mostar's history",
      "10:15 - Walk to viewpoint for first glimpse of Stari Most",
      "10:30 - Cross the historic bridge while learning about its destruction and reconstruction",
      "10:45 - Explore Ottoman quarter with traditional stone houses",
      "11:15 - Visit to Koski Mehmed Pasha Mosque with optional minaret climb",
      "11:45 - Coffee break with traditional Bosnian coffee preparation",
      "12:15 - Visit copper craftsman workshop with demonstration",
      "12:45 - Walk through old bazaar with time for shopping",
      "13:00 - Tour concludes at Kriva Ćuprija (Crooked Bridge)",
    ],

    faqs: [
      {
        question: "Will we see bridge divers during the tour?",
        answer:
          "The famous bridge divers of Mostar typically perform during summer months when the river is at the right level and there are sufficient tourists (they collect donations before jumping). While we cannot guarantee a dive during your tour, your guide will explain this traditional practice dating back centuries and share stories about the divers' club. If divers are preparing to jump during our tour, we'll certainly pause to watch!",
      },
      {
        question: "Does this tour discuss the 1990s conflict?",
        answer:
          "Yes, our guides provide balanced and sensitive insights into the 1990s conflict that severely damaged Mostar, including the destruction of the Old Bridge. We explain both the historical context and the remarkable international effort to rebuild the bridge and heal community divisions. Our guides come from diverse backgrounds and focus on reconciliation while honoring the complex history.",
      },
      {
        question: "Is the minaret climb mandatory?",
        answer:
          "The minaret climb is optional and requires ascending a narrow spiral staircase (approximately 90 steps). Those who prefer not to climb can enjoy the mosque's beautiful courtyard garden and interior. The panoramic view from the top is spectacular but alternative viewpoints are included in the tour for those who skip the climb.",
      },
    ],
  },

  {
    title: "Neretva Valley: Wine, Waterfalls & Ancient Sites",
    description:
      "Journey beyond Mostar to discover the natural and historical treasures of the Neretva Valley. Visit ancient Roman ruins, sample wines from family vineyards, and enjoy the spectacular Kravice Waterfalls.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/kravice-waterfalls.jpg",
      "/images/tours/mostar/herzegovina-vineyard.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nature", "Wine", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",

    meetingPoint: {
      address: "Mostar Bus Station, Sjeverni logor, Mostar",
      coordinates: {
        latitude: 43.3534,
        longitude: 17.8092,
      },
      instructions:
        "Meet in front of the main entrance to Mostar Bus Station. Your guide will be waiting in a vehicle marked with 'Neretva Valley Tours'.",
      contactNumber: "+387 63 123 457",
      contactEmail: "neretva@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-20",
      "2023-12-27",
      "2024-01-03",
      "2024-01-10",
      "2024-01-17",
      "2024-01-24",
      "2024-01-31",
      "2024-02-07",
      "2024-02-14",
      "2024-02-21",
      "2024-02-28",
    ],

    highlights: [
      "Explore the ancient Roman ruins of Mogorjelo with 4th-century mosaics",
      "Visit family-owned vineyards producing the native Žilavka and Blatina wines",
      "Swim beneath the magnificent Kravice Waterfalls (summer months)",
      "Discover the medieval necropolis at Radimlja with mysterious stećci tombstones",
      "Taste traditional Herzegovina cuisine at a local konoba restaurant",
    ],

    inclusions: [
      "Transportation in comfortable air-conditioned vehicle",
      "Professional English-speaking guide",
      "Wine tasting at premier Herzegovina winery",
      "Traditional lunch with local specialties",
      "Entrance fees to all sites (Roman villa, waterfalls, necropolis)",
      "Bottled water throughout the day",
      "Hotel pickup and drop-off within Mostar city limits",
    ],

    exclusions: [
      "Additional food and beverages beyond included lunch and tasting",
      "Optional gratuities",
      "Swimming equipment (bring your own if desired)",
      "Personal expenses",
    ],

    itinerary: [
      "09:00 - Pickup from your Mostar accommodation",
      "09:30 - Visit ancient Roman villa rustica at Mogorjelo",
      "10:30 - Drive through scenic Neretva Valley",
      "11:00 - Visit to family winery with tasting of local varieties",
      "12:30 - Traditional lunch at authentic konoba restaurant",
      "14:00 - Explore the medieval stećci tombstones at Radimlja necropolis",
      "15:00 - Visit spectacular Kravice Waterfalls with free time for swimming (seasonal)",
      "16:30 - Return journey to Mostar with photo stops",
      "17:30 - Drop-off at your accommodation",
    ],

    faqs: [
      {
        question: "Can we swim at Kravice Waterfalls?",
        answer:
          "Swimming is possible at Kravice Waterfalls from approximately May through September when water temperatures are comfortable. The pool beneath the falls reaches depths of 5-6 meters in places but has shallower areas suitable for less confident swimmers. Changing facilities are available at the site. During winter and early spring, water levels are much higher making swimming unsafe, but the falls are spectacularly powerful during these periods.",
      },
      {
        question: "What kinds of wine will we taste?",
        answer:
          "Herzegovina is known for its distinctive native grape varieties, particularly Žilavka (white) and Blatina (red). Our tasting typically includes 4-5 wines, focusing on these indigenous varieties as well as international grapes that grow well in the region's Mediterranean climate. The winery we visit has been family-operated for generations and offers informative tastings that explain the unique terroir and winemaking traditions of Herzegovina.",
      },
      {
        question: "What is included in the traditional lunch?",
        answer:
          "Lunch features authentic Herzegovina cuisine at a family-run konoba (traditional restaurant). Typical dishes include slow-roasted lamb under a bell (sač), homemade cheeses, locally produced prosciutto (pršut), river trout, seasonal vegetables, and homemade bread. Vegetarian options are available with advance notice. The meal is served family-style with multiple dishes to share, accompanied by local wine.",
      },
    ],
  },

  {
    title: "War & Peace: Mostar's Recent History Tour",
    description:
      "Gain deeper understanding of the 1990s conflict that devastated Mostar through visits to key sites and personal accounts from locals who lived through the siege, while exploring efforts toward reconciliation and rebuilding.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/war-museum.jpg",
      "/images/tours/mostar/sniper-tower.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["History", "Educational", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Musala Bridge, Mostar",
      coordinates: {
        latitude: 43.3416,
        longitude: 17.8078,
      },
      instructions:
        "Meet at the eastern end of Musala Bridge, near Hotel Mostar. Your guide will be holding a white peace flag.",
      contactNumber: "+387 63 123 458",
      contactEmail: "warpeace@paragontrails.com",
    },

    availableDates: [
      "2023-12-18",
      "2023-12-25",
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
      "Visit the War Photo Exhibition with powerful images from wartime photojournalists",
      "Explore the former frontline along Bulevar street with visible war damage",
      "See the preserved ruins of the 'Sniper Tower' (former bank building)",
      "Learn about life during the 978-day siege from those who experienced it",
      "Discuss post-war reconciliation efforts and current community relations",
    ],

    inclusions: [
      "Local guide with personal experience of the conflict",
      "Entrance to War Photo Exhibition",
      "Visit to memorial sites not found in guidebooks",
      "Coffee or drink with local resident who lived through the siege",
      "Map marking key war sites and peace monuments",
      "Donation to local peacebuilding organization",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch (optional extension available)",
      "Additional beverages beyond included drink",
      "Personal expenses",
    ],

    itinerary: [
      "14:00 - Meet at Musala Bridge for introduction and historical context",
      "14:15 - Walk to former frontline along Bulevar street",
      "14:45 - Visit symbolic 'Sniper Tower' with explanation of siege tactics",
      "15:15 - Tour of War Photo Exhibition with eyewitness commentary",
      "16:00 - Coffee break with local resident sharing personal experiences",
      "16:45 - Visit to peace monuments and reconciliation projects",
      "17:30 - Discussion of current community relations and future prospects",
      "18:00 - Tour conclusion with recommendations for further learning",
    ],

    faqs: [
      {
        question: "Is this tour politically biased?",
        answer:
          "We strive to present a balanced view of the conflict from multiple perspectives. Our guides include people from diverse backgrounds who focus on historical facts while acknowledging the complex ethnic and political dimensions. The tour emphasizes human experiences and reconciliation rather than assigning blame. We welcome respectful questions and discussion but avoid divisive political commentary.",
      },
      {
        question: "Is this tour appropriate for children?",
        answer:
          "Due to the serious subject matter and potentially disturbing imagery, we recommend this tour for ages 16 and older. Parents should use discretion as some war photographs and discussions may be upsetting. For families with younger children, we offer a modified 'Building Bridges' tour that focuses more on reconciliation efforts and positive community projects.",
      },
      {
        question: "Will this be an emotionally difficult tour?",
        answer:
          "This tour deals with difficult subject matter including siege, civilian suffering, and ethnic conflict. While not graphic or sensationalized, the personal stories and images can be emotionally impactful. Our guides are sensitive to participants' reactions and strike a respectful balance between honest historical account and appropriate emotional context. The tour ends with hopeful examples of reconciliation and rebuilding.",
      },
    ],
  },
  {
    title: "Flavors of Herzegovina: Mostar Food Tour",
    description:
      "Discover the rich culinary heritage of Herzegovina through this immersive food experience in Mostar. Sample traditional specialties, meet local producers, and learn how diverse cultural influences have shaped this unique regional cuisine.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/food-tour.jpg",
      "/images/tours/mostar/local-cuisine.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Food", "Cultural", "Local Experience", "Wine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Koski Mehmed Pasha Mosque courtyard, Mostar",
      coordinates: {
        latitude: 43.3378,
        longitude: 17.8146,
      },
      instructions:
        "Meet in the courtyard of Koski Mehmed Pasha Mosque. Your guide will be holding a sign with 'Food Tour' and a fork symbol.",
      contactNumber: "+387 63 123 459",
      contactEmail: "food@paragontrails.com",
    },

    availableDates: [
      "2023-12-19",
      "2023-12-21",
      "2023-12-26",
      "2023-12-28",
      "2024-01-02",
      "2024-01-04",
      "2024-01-09",
      "2024-01-11",
      "2024-01-16",
      "2024-01-18",
      "2024-01-23",
      "2024-01-25",
      "2024-01-30",
      "2024-02-01",
      "2024-02-06",
      "2024-02-08",
      "2024-02-13",
      "2024-02-15",
      "2024-02-20",
      "2024-02-22",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Sample traditional Bosnian coffee prepared using centuries-old techniques",
      "Taste burek and other Ottoman-influenced pastries from a historic bakery",
      "Visit a family-run smokehouse to try traditional Herzegovina dried meats",
      "Explore the local market with fresh seasonal produce and regional specialties",
      "Enjoy locally-produced wines including the native Žilavka and Blatina varieties",
      "Learn to make Klepe (Bosnian dumplings) in a hands-on demonstration",
    ],

    inclusions: [
      "Professional food guide with culinary expertise",
      "7-8 food tastings (equivalent to a full meal)",
      "Wine and local drinks pairing",
      "Hands-on cooking demonstration",
      "Food map with recommendations for the rest of your stay",
      "Recipe booklet of Herzegovinian specialties",
      "All food and beverage tastings",
    ],

    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food or drinks beyond the included tastings",
      "Gratuities for guide and food providers",
      "Personal purchases at visited establishments",
    ],

    itinerary: [
      "10:00 - Meet at Koski Mehmed Pasha Mosque courtyard",
      "10:15 - Traditional Bosnian coffee experience with demonstration",
      "10:45 - Visit to historic bakery for burek and other pastries",
      "11:30 - Explore local fresh market with seasonal tastings",
      "12:15 - Visit to family smokehouse for cured meats and cheeses",
      "13:00 - Hands-on demonstration of making Klepe (Bosnian dumplings)",
      "13:45 - Wine tasting featuring local Herzegovina varieties",
      "14:15 - Sweet finale with traditional desserts and Turkish-influenced treats",
      "14:30 - Tour conclusion with recommendations for dinner",
    ],

    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, gluten-free, and most common dietary restrictions. Please note that due to the nature of traditional Bosnian cuisine, which features many meat and pastry dishes, some substitutions may be necessary. Vegan options are limited but possible with at least 48 hours notice. Please specify any dietary requirements when booking.",
      },
      {
        question: "How much food is included? Will I be full?",
        answer:
          "The tour includes 7-8 substantial food tastings plus beverages, equivalent to a large meal spread over several hours. Most guests find themselves pleasantly satisfied by the end. We recommend a light breakfast on the morning of the tour. The tastings include a variety of items from savory pastries and meats to desserts, providing a comprehensive sampling of regional cuisine.",
      },
      {
        question: "Is alcohol included in this tour?",
        answer:
          "Yes, the tour includes tastings of local Herzegovina wines and possibly rakija (fruit brandy). Non-alcoholic alternatives like fresh juices or mineral water are available. Herzegovina has a proud winemaking tradition dating back to Roman times, with unique native grape varieties that pair perfectly with the local cuisine. If you prefer to skip alcohol entirely, please let us know in advance.",
      },
    ],
  },
  {
    title: "Blagaj, Pocitelj & Kravice Waterfall Day Trip",
    description:
      "Explore three stunning locations outside Mostar on this scenic day trip. Visit the mystical Dervish monastery in Blagaj, wander the medieval fortress town of Počitelj, and swim beneath the magnificent Kravice Waterfall - all in one unforgettable day.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/blagaj-tekke.jpg",
      "/images/tours/mostar/kravice-waterfall.jpg",
      "/images/tours/mostar/pocitelj-fortress.jpg",
    ],
    duration: "8 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Nature", "History", "Photography", "Swimming"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "day-trip",

    meetingPoint: {
      address: "Spanish Square (Španski trg), Mostar",
      coordinates: {
        latitude: 43.3423,
        longitude: 17.8081,
      },
      instructions:
        "Meet at the fountain in Spanish Square. Your guide will be holding a sign with 'Herzegovina Highlights Tour' written on it.",
      contactNumber: "+387 63 123 460",
      contactEmail: "daytrips@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-19",
      "2023-12-21",
      "2023-12-24",
      "2023-12-26",
      "2023-12-28",
      "2023-12-31",
      "2024-01-02",
      "2024-01-04",
      "2024-01-07",
      "2024-01-09",
      "2024-01-11",
      "2024-01-14",
      "2024-01-16",
      "2024-01-18",
      "2024-01-21",
      "2024-01-23",
      "2024-01-25",
      "2024-01-28",
      "2024-01-30",
      "2024-02-01",
      "2024-02-04",
      "2024-02-06",
      "2024-02-08",
      "2024-02-11",
      "2024-02-13",
      "2024-02-15",
      "2024-02-18",
      "2024-02-20",
      "2024-02-22",
      "2024-02-25",
      "2024-02-27",
      "2024-02-29",
    ],

    highlights: [
      "Visit the 600-year-old Dervish monastery built into a cliff in Blagaj",
      "Explore the Ottoman stone fortress and artists' colony in Počitelj",
      "Swim beneath the spectacular 25-meter high Kravice Waterfall",
      "Enjoy a traditional lunch at a family-run restaurant",
      "Learn about the diverse cultural and natural heritage of Herzegovina",
      "Take stunning photographs at three of the region's most picturesque locations",
    ],

    inclusions: [
      "Transportation in air-conditioned vehicle",
      "Professional English-speaking local guide",
      "Entrance fees to Blagaj Tekke monastery",
      "Počitelj fortress access",
      "Kravice Waterfall entrance fee",
      "Bottled water",
      "Hotel pickup and drop-off within Mostar city limits",
    ],

    exclusions: [
      "Lunch (available for purchase, approximately €10-15)",
      "Optional boat ride in Blagaj (€6)",
      "Swimming equipment at Kravice (bring your own)",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "09:00 - Pickup from your Mostar accommodation or meeting point",
      "09:30 - Arrive at Blagaj Tekke (Dervish monastery) built into a cliff",
      "09:45 - Guided tour of the tekke and karst spring of the Buna river",
      "10:30 - Free time for optional short boat ride or coffee by the river",
      "11:15 - Departure for the medieval fortress town of Počitelj",
      "11:45 - Guided walk through Počitelj with fortress climb (optional)",
      "12:45 - Free time to explore the artists' colony and shop for souvenirs",
      "13:15 - Lunch at local restaurant (not included)",
      "14:30 - Drive to Kravice Waterfall",
      "15:00 - Arrive at Kravice for swimming and relaxation",
      "16:30 - Begin return journey to Mostar",
      "17:00 - Drop-off at your accommodation or central Mostar",
    ],

    faqs: [
      {
        question: "Can I swim at Kravice Waterfall year-round?",
        answer:
          "Swimming at Kravice is possible from approximately late April through September, with optimal conditions from June through August when water temperatures are most comfortable. During winter and early spring, water levels are much higher making swimming unsafe, but the falls are spectacularly powerful. In peak summer (July-August), we visit early afternoon before the largest crowds arrive. Note that changing facilities are available during high season only.",
      },
      {
        question: "How difficult is the walk to Počitelj fortress?",
        answer:
          "The walk through Počitelj village involves uphill cobblestone paths and steps to reach the fortress. The climb takes about 15-20 minutes at a moderate pace and requires basic fitness and sturdy footwear. For those who prefer not to climb, the lower parts of the village offer plenty to explore including the mosque, art galleries, and cafes with beautiful views. Your guide can suggest alternatives based on your mobility level.",
      },
      {
        question: "What should I bring for this day trip?",
        answer:
          "During summer months (May-September), bring swimwear, a towel, sun protection (hat, sunglasses, sunscreen), and comfortable walking shoes for uneven terrain. A change of clothes after swimming is recommended. In cooler months, bring layers as weather can vary. Year-round items include: camera, some local currency for lunch and souvenirs, and a water bottle (though bottled water is provided). Modest clothing is required for visiting the Dervish monastery (shoulders and knees covered).",
      },
    ],
  },
  {
    title: "Mostar Sunset Photography Tour",
    description:
      "Capture the magical light of the golden hour illuminating Mostar's iconic landmarks on this specialized photography tour. Learn techniques to photograph the Old Bridge, historic architecture, and stunning vistas with guidance from a professional photographer.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/sunset-photography.jpg",
      "/images/tours/mostar/night-photography.jpg",
    ],
    duration: "3.5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Photography", "Sunset", "Architecture", "Small Group"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "photography",

    meetingPoint: {
      address: "Lucki Most (Crooked Bridge), Mostar",
      coordinates: {
        latitude: 43.3369,
        longitude: 17.8136,
      },
      instructions:
        "Meet at Kriva Ćuprija (Crooked Bridge), the small stone bridge near the Old Bridge. Your guide will be carrying a camera tripod and wearing a dark blue photography vest.",
      contactNumber: "+387 63 123 461",
      contactEmail: "photograpy@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-24",
      "2023-12-26",
      "2023-12-28",
      "2023-12-30",
      "2024-01-01",
      "2024-01-03",
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
      "Photograph Stari Most (Old Bridge) in perfect golden hour lighting",
      "Access exclusive vantage points not found in guidebooks",
      "Learn specialized techniques for architectural and landscape photography",
      "Capture the transition from sunset to blue hour and early evening",
      "Master challenging lighting conditions with expert guidance",
      "Small group size ensures personalized attention (max 6 participants)",
    ],

    inclusions: [
      "Professional photographer guide with local knowledge",
      "Photography tutorial customized to your experience level",
      "Access to private viewing locations through local connections",
      "Tripod loan if needed (limited quantity, request in advance)",
      "Technical assistance with camera settings and composition",
      "Digital guidebook with best photography locations in Mostar",
      "Post-tour online review of selected images (optional)",
    ],

    exclusions: [
      "Camera equipment (bring your own)",
      "Transportation to meeting point",
      "Food and beverages",
      "Advanced photo editing instruction",
      "Gratuities for guide",
    ],

    itinerary: [
      "Times vary seasonally based on sunset - the following is a summer schedule:",
      "19:00 - Meet at Kriva Ćuprija (Crooked Bridge) for introductions",
      "19:15 - Photography briefing and camera setting review",
      "19:30 - First shooting location: Old Town cobblestone streets and architecture",
      "20:00 - Reposition to riverside location for Old Bridge photographs",
      "20:30 - Access private balcony for unique elevated perspective (exclusive location)",
      "21:00 - Sunset photography of bridge and river",
      "21:30 - Blue hour photography techniques from eastern bank",
      "22:00 - Optional night photography demonstration and practice",
      "22:30 - Tour conclusion with final tips and image review",
    ],

    faqs: [
      {
        question: "What type of camera do I need for this tour?",
        answer:
          "This tour is designed for photographers of all levels. While a DSLR or mirrorless camera with manual settings will allow you to take full advantage of the technical instruction, participants with smartphones or compact cameras will also benefit from the composition guidance and unique locations. For sunset and blue hour photography, cameras that perform well in lower light and a tripod are recommended but not required. Your guide can adapt techniques based on your equipment.",
      },
      {
        question: "Will we be walking a lot during the tour?",
        answer:
          "The tour involves moderate walking between photography locations, covering approximately 2-3 kilometers over 3.5 hours. We navigate some cobblestone streets and steps, particularly around the Old Bridge area. The pace is leisurely with frequent stops for photography. Wear comfortable shoes and be prepared for some uphill walking to reach the best vantage points. Participants should be able to stand for periods of 15-20 minutes while taking photographs.",
      },
      {
        question: "What happens if it's raining during my scheduled tour?",
        answer:
          "Light rain can create interesting photographic opportunities with reflections and atmospheric effects, and the tour will proceed with adaptations. For heavy rain or storms, we offer three options: 1) Reschedule for another day during your stay, 2) Convert to an indoor photography workshop focusing on local architecture and cultural details, or 3) Receive a full refund. The decision is typically made 3-4 hours before the tour and we'll contact you via your provided information.",
      },
    ],
  },
  {
    title: "Sarajevo Day Trip from Mostar",
    description:
      "Experience the rich history and cultural diversity of Bosnia's fascinating capital on this full-day excursion from Mostar to Sarajevo. Travel through stunning mountain scenery, explore Ottoman and Austro-Hungarian architecture, and discover the city known as the 'Jerusalem of Europe'.",
    city: "Mostar",
    country: "Bosnia and Herzegovina",
    region: "Herzegovina-Neretva Canton",
    images: [
      "/images/tours/mostar/sarajevo-day-trip.jpg",
      "/images/tours/mostar/sarajevo-baščaršija.jpg",
    ],
    duration: "12 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Day Trip", "History", "Cultural", "City Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "day-trip",

    meetingPoint: {
      address: "Spanish Square (Španski trg), Mostar",
      coordinates: {
        latitude: 43.3423,
        longitude: 17.8081,
      },
      instructions:
        "Meet at the fountain in Spanish Square. Your guide will be holding a sign with 'Sarajevo Day Trip' written on it.",
      contactNumber: "+387 63 123 462",
      contactEmail: "sarajevo@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],

    highlights: [
      "Visit Baščaršija, Sarajevo's Ottoman-era old bazaar with authentic crafts",
      "Stand on the Latin Bridge where Archduke Franz Ferdinand was assassinated, triggering WWI",
      "Explore the meeting point of cultures where East meets West",
      "Learn about the 1990s siege of Sarajevo and the city's remarkable recovery",
      "Discover Sarajevo's unique religious diversity with mosques, churches, and synagogues in close proximity",
      "Enjoy traditional Bosnian cuisine in the heart of the capital",
    ],

    inclusions: [
      "Transportation in comfortable air-conditioned vehicle",
      "Professional English-speaking guide",
      "Sarajevo walking tour",
      "Free time for lunch and shopping",
      "Bottled water",
      "Hotel pickup and drop-off within Mostar city limits",
      "All taxes and service charges",
    ],

    exclusions: [
      "Lunch (available for purchase, approximately €10-20)",
      "Optional museum entrance fees",
      "Gratuities for guide and driver",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "07:00 - Pickup from your Mostar accommodation or meeting point",
      "07:15 - Departure for Sarajevo via scenic mountain route",
      "09:30 - Arrival in Sarajevo, introduction to city's unique history",
      "09:45 - Walking tour beginning at Baščaršija (old bazaar)",
      "10:30 - Visit to Gazi Husrev-beg Mosque and surrounding area",
      "11:15 - Walk along the 'East meets West' line where Ottoman and Austro-Hungarian architecture converge",
      "12:00 - Visit Latin Bridge and site of Franz Ferdinand's assassination",
      "12:30 - Free time for lunch and shopping in the old town",
      "14:30 - Visit to Eternal Flame memorial and Parliament building",
      "15:30 - Optional visit to Tunnel Museum or free time (additional entrance fee)",
      "16:30 - Begin return journey to Mostar",
      "19:00 - Approximate arrival back in Mostar",
    ],

    faqs: [
      {
        question: "How long is the drive between Mostar and Sarajevo?",
        answer:
          "The journey takes approximately 2-2.5 hours each way, depending on traffic and border procedures. We travel via the scenic route through the mountains, with beautiful landscapes of the Neretva river canyon and traditional villages. The drive itself is considered part of the experience, and we make a short comfort break each way. Our vehicles are modern and air-conditioned with comfortable seating.",
      },
      {
        question: "Is there much walking involved in Sarajevo?",
        answer:
          "The guided portion of the Sarajevo tour involves moderate walking of approximately 3-4 kilometers over 2.5 hours at a leisurely pace. Most of the old town is pedestrianized with level cobblestone streets, though there are some gentle slopes. Comfortable walking shoes are recommended. During free time, you can choose your own pace and distance. For those with mobility concerns, we can adjust the route and focus on the most accessible areas of the old town.",
      },
      {
        question: "What can I do during the free time in Sarajevo?",
        answer:
          "During your free time (approximately 2 hours), you might enjoy visiting the Sarajevo City Hall (Vijećnica), shopping for handcrafted copper items or textiles in Baščaršija, trying Bosnian coffee in a traditional café, visiting the Jewish Museum or the Gallery 11/07/95 (focusing on the Srebrenica genocide). Your guide will provide recommendations based on your interests. The old town area is compact and most attractions are within walking distance.",
      },
    ],
  },
];

export default mostarTours;
