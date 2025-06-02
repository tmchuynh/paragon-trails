import { Tour } from "@/lib/interfaces/services/tours";

export const cairoTours: Tour[] = [
  {
    title: "Pyramids at Dawn & Private Archaeologist Tour",
    description:
      "Experience the majesty of the Pyramids of Giza without crowds during a special early access visit, accompanied by an Egyptologist who reveals the latest archaeological discoveries and ancient engineering secrets.",
    city: "Cairo",
    country: "Egypt",
    region: "Lower Egypt",
    images: [
      "/images/tours/cairo/pyramids-sunrise.jpg",
      "/images/tours/cairo/sphinx-morning.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Pyramids", "Archaeology", "Exclusive Access"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Marriott Mena House, 6 Pyramids Road, Giza, Cairo, Egypt",
      coordinates: {
        latitude: 29.9891,
        longitude: 31.1342,
      },
      instructions:
        "Meet your Egyptologist guide in the lobby of the historic Marriott Mena House hotel. The guide will be holding a sign with your name and 'Dawn Pyramids Tour'. Please arrive 30 minutes before sunrise time (exact time will be confirmed the day before). Hotel pickup from central Cairo hotels is available for an additional fee.",
      contactNumber: "+20 2 3377 3222",
      contactEmail: "pyramids@paragontrails.com",
    },
    faqs: [
      {
        question: "How early do we start this tour?",
        answer:
          "Hotel pickup begins approximately 1 hour before sunrise (time varies seasonally). While this is an early start, the experience of watching the sun rise over the pyramids with virtually no other visitors present is absolutely worth it. We provide coffee/tea and light breakfast refreshments to enjoy while watching the sunrise transform the monuments.",
      },
      {
        question: "Can we enter the pyramids during this tour?",
        answer:
          "Yes, the tour includes entry to one of the pyramids (either Khufu or Khafre) as well as the Sphinx. We recommend visiting the interior of the Great Pyramid for a truly unforgettable experience, but you can choose which pyramid to enter based on your interests.",
      },
      {
        question:
          "What makes this tour different from standard pyramid visits?",
        answer:
          "Our early access permits allow you to experience the pyramids in serene tranquility before the crowds arrive. Additionally, your guide is a practicing archaeologist who provides deep insights into ongoing excavations and the latest discoveries that aren't covered in standard tours.",
      },
      {
        question: "Is photography allowed?",
        answer:
          "Yes, photography is permitted throughout most of the tour. There are some restrictions inside certain chambers of the pyramids. Your guide will advise when photography is not allowed. We also provide tips for capturing the best sunrise shots of the monuments.",
      },
      {
        question: "What should I wear for this desert excursion?",
        answer:
          "We recommend comfortable walking shoes, lightweight breathable clothing, a hat for sun protection, and sunglasses. Early mornings in the desert can be surprisingly cool, especially in winter months (November-February), so bringing a light jacket or sweater is advisable. Modest dress is appreciated when visiting sites.",
      },
    ],
  },
  {
    title: "Islamic Cairo & Khan el-Khalili Artisans",
    description:
      "Explore medieval Cairo's magnificent mosques and madrasas with an architectural historian, then discover traditional craftsmanship with private visits to workshops hidden in the historic Khan el-Khalili bazaar.",
    city: "Cairo",
    country: "Egypt",
    region: "Lower Egypt",
    images: [
      "/images/tours/cairo/al-azhar-mosque.jpg",
      "/images/tours/cairo/khan-bazaar.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Islamic Architecture", "Bazaar", "Crafts"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address:
        "Al-Azhar Mosque main entrance, Al-Azhar Street, Islamic Cairo, Egypt",
      coordinates: {
        latitude: 30.0441,
        longitude: 31.2618,
      },
      instructions:
        "Meet your architectural historian guide at the main tourist entrance of Al-Azhar Mosque. Your guide will be holding a blue folder with Islamic architectural patterns. Please arrive 15 minutes before the scheduled start time, wearing modest clothing that covers shoulders and knees. Women should bring a scarf to cover their hair when entering mosques.",
      contactNumber: "+20 2 2598 4781",
      contactEmail: "islamic@paragontrails.com",
    },
    faqs: [
      {
        question: "What should I wear when visiting mosques?",
        answer:
          "For mosque visits, both men and women should wear clothing that covers shoulders and knees. Women should also bring a scarf to cover their hair when entering mosques. We provide traditional overgowns if needed. Shoes will be removed before entering prayer halls, so wear socks and easily removable footwear.",
      },
      {
        question: "Will we have time to shop in Khan el-Khalili?",
        answer:
          "Yes, the tour includes ample time to explore the bazaar and shop for unique handicrafts, spices, jewelry, and souvenirs. Our guide can recommend reputable artisans and shops based on your interests.",
      },
      {
        question: "Which mosques do we visit on this tour?",
        answer:
          "The tour includes visits to the Sultan Hassan Mosque, Al-Rifa'i Mosque, Ibn Tulun Mosque, and the Al-Azhar Mosque. Each represents a different era of Islamic architecture in Cairo, from the Fatimid to the Mamluk periods.",
      },
      {
        question: "What kinds of workshops will we visit?",
        answer:
          "You'll visit traditional artisan workshops specializing in metalwork, woodworking with intricate inlay techniques, textile production, and calligraphy. These workshops often use techniques passed down through generations, and you'll have opportunities to meet master craftspeople and see them at work.",
      },
      {
        question: "Is this tour suitable for people with mobility issues?",
        answer:
          "This tour involves significant walking over uneven surfaces, stairs without handrails, and narrow passageways typical of medieval architecture. While we do our best to accommodate guests with mobility concerns, many historic sites in Islamic Cairo have limited accessibility features. Please contact us to discuss your specific needs before booking.",
      },
    ],
  },
  {
    title: "Nile Sunset Cruise & Cultural Dinner Show",
    description:
      "Glide along the Nile at sunset aboard a traditional felucca or luxury yacht, followed by an authentic Egyptian dinner featuring live music, Tanoura whirling dervishes, and belly dancing performances.",
    city: "Cairo",
    country: "Egypt",
    region: "Lower Egypt",
    images: [
      "/images/tours/cairo/nile-sunset-cruise.jpg",
      "/images/tours/cairo/egyptian-performance.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Nile River", "Cultural Show", "Culinary", "Sunset"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "local",
    meetingPoint: {
      address: "Nile Maxim Boat Dock, Corniche El Nil, Tahrir, Cairo, Egypt",
      coordinates: {
        latitude: 30.0429,
        longitude: 31.2241,
      },
      instructions:
        "Meet our representative at the entrance to the Nile Maxim Boat dock. The representative will be holding a sign with 'Nile Sunset Experience' written on it. Please arrive 20 minutes before departure time for boarding procedures. The boat will not wait for late arrivals.",
      contactNumber: "+20 2 2578 1234",
      contactEmail: "nile@paragontrails.com",
    },
    faqs: [
      {
        question: "What type of boat will we be on?",
        answer:
          "We offer two options: a traditional Egyptian felucca sailboat for a more authentic experience, or a modern luxury yacht for added comfort. Both provide excellent views of the Cairo skyline and Nile scenery. The felucca is more intimate while the yacht features air conditioning and more amenities.",
      },
      {
        question: "What's included in the dinner?",
        answer:
          "The dinner features a full Egyptian buffet with traditional specialties like koshari, molokhia, stuffed vine leaves, grilled meats, fresh bread, and assorted mezze. Vegetarian options are always available. Soft drinks are included, with alcoholic beverages available for purchase.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly, though the dinner show ends around 10:30 PM. Children typically enjoy the boat ride and performances, especially the whirling dervishes. We can arrange for earlier return transportation for families with young children if needed.",
      },
      {
        question: "Will we see Cairo's landmarks from the water?",
        answer:
          "Yes, the cruise passes by many Cairo landmarks including modern Cairo Tower, the historic Kasr El Nil Bridge, and various palaces along the riverbank. Your guide will point out important sites and share their historical significance throughout the cruise portion.",
      },
      {
        question: "What type of entertainment is included in the show?",
        answer:
          "The show features several traditional Egyptian performances including Tanoura whirling dervishes (a mesmerizing Sufi-inspired dance with colorful skirts), belly dancing by professional performers, folk music played on traditional instruments like the oud and tabla, and sometimes Nubian dance performances. Each act represents different aspects of Egyptian cultural heritage from various regions of the country.",
      },
    ],
  },
  {
    title: "Coptic Cairo & Medieval Churches",
    description:
      "Discover Egypt's Christian heritage in the ancient district of Coptic Cairo, visiting centuries-old churches, the Hanging Church, and Ben Ezra Synagogue where the Cairo Geniza documents were found.",
    city: "Cairo",
    country: "Egypt",
    region: "Lower Egypt",
    images: [
      "/images/tours/cairo/hanging-church.jpg",
      "/images/tours/cairo/coptic-museum.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Christian Heritage", "Ancient Churches", "Religious History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "spiritual",
    meetingPoint: {
      address: "Mar Girgis Metro Station, Old Cairo, Cairo, Egypt",
      coordinates: {
        latitude: 30.0064,
        longitude: 31.2301,
      },
      instructions:
        "Meet your guide outside the Mar Girgis Metro Station exit, which leads directly to the Coptic Cairo area. Your guide will be holding a sign with 'Coptic Heritage Tour' written on it. Please arrive 10 minutes before your scheduled tour time. Modest dress is required for church visits.",
      contactNumber: "+20 2 2363 5712",
      contactEmail: "coptic@paragontrails.com",
    },
    faqs: [
      {
        question: "What is the significance of Coptic Cairo?",
        answer:
          "Coptic Cairo represents one of the oldest Christian communities in the world. The area contains churches dating back to the 4th century AD and was said to have been visited by the Holy Family. It's a crucial site for understanding Egypt's religious diversity and the development of early Christianity in North Africa.",
      },
      {
        question: "Will we visit the Coptic Museum?",
        answer:
          "Yes, the tour includes a guided visit to the Coptic Museum, which houses the world's largest collection of Coptic artifacts, including ancient manuscripts, icons, and textiles spanning Egypt's Christian history from the earliest days to the present.",
      },
      {
        question: "Are the churches still active places of worship?",
        answer:
          "Yes, many of the churches we visit are still active parishes where Coptic Orthodox Christians worship regularly. We time our visits to avoid disrupting services. During major religious holidays or Sunday mornings, some areas may have limited access due to ongoing ceremonies.",
      },
      {
        question:
          "What's the connection between the Ben Ezra Synagogue and the Cairo Geniza?",
        answer:
          "The Ben Ezra Synagogue housed the Cairo Geniza, a collection of over 300,000 Jewish manuscript fragments discovered in the late 19th century. These documents provided unprecedented insights into medieval Mediterranean society from the 9th to 19th centuries and revolutionized our understanding of Jewish history and the medieval Middle East.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "As we'll be visiting active religious sites, modest dress is required. Both men and women should wear clothing that covers shoulders and knees. Women are advised to bring a scarf to cover their hair in certain areas. Comfortable walking shoes are recommended as the tour involves walking on uneven surfaces and occasional stairs.",
      },
    ],
  },
  {
    title: "Cairo Street Food & Local Culinary Adventure",
    description:
      "Sample authentic Egyptian flavors on this guided food crawl through downtown Cairo and local neighborhoods, tasting everything from traditional breakfast foods to beloved street snacks and desserts.",
    city: "Cairo",
    country: "Egypt",
    region: "Lower Egypt",
    images: [
      "/images/tours/cairo/street-food-market.jpg",
      "/images/tours/cairo/egyptian-desserts.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Culinary", "Street Food", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Tahrir Square, Downtown Cairo, Egypt",
      coordinates: {
        latitude: 30.0444,
        longitude: 31.2357,
      },
      instructions:
        "Meet your culinary guide at the entrance to the Egyptian Museum in Tahrir Square. Your guide will be holding a red tote bag with 'Egyptian Food Tour' written on it. Please arrive hungry and 15 minutes before your scheduled tour time. Wear comfortable walking shoes and casual clothing.",
      contactNumber: "+20 2 2575 6789",
      contactEmail: "foodtour@paragontrails.com",
    },
    faqs: [
      {
        question: "Is the street food safe to eat?",
        answer:
          "We carefully select vendors based on cleanliness, reputation, and food safety practices. Your guide is trained to bring you to establishments with the highest standards. All produce is washed in filtered water, and we avoid items that may cause digestive discomfort for international visitors.",
      },
      {
        question: "What foods will we try on this tour?",
        answer:
          "You'll sample 10-12 different specialties including ful medames (stewed fava beans), taameya (Egyptian falafel), koshari (rice, pasta, and lentil dish), hawawshi (spiced meat pie), feteer (layered pastry), sugarcane juice, and traditional Egyptian desserts like basbousa and kunafa.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, vegan, gluten-free, and halal requirements. Please inform us of any allergies or dietary needs when booking so we can tailor the experience accordingly.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2-3 kilometers at a leisurely pace with plenty of stops for eating and drinking. We navigate through some narrow streets and small alleyways that may not be wheelchair accessible. Comfortable walking shoes are recommended.",
      },
      {
        question: "Will we eat at restaurants or street stalls?",
        answer:
          "Both! We'll visit a mix of street food vendors, small local establishments, family-run kitchens, and specialty shops. This variety provides a comprehensive understanding of Cairo's diverse food culture from quick street snacks to more traditional seated meals.",
      },
    ],
  },
  {
    title: "Saqqara & Memphis Day Excursion",
    description:
      "Journey to ancient Memphis, Egypt's first capital, and the necropolis of Saqqara to explore the Step Pyramid of Djoser—the world's oldest major stone structure—plus lesser-visited tombs with vibrant original artwork.",
    city: "Saqqara",
    country: "Egypt",
    region: "Lower Egypt",
    images: [
      "/images/tours/cairo/step-pyramid-saqqara.jpg",
      "/images/tours/cairo/memphis-ruins.jpg",
    ],
    duration: "8 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Ancient Egypt", "Pyramids", "Off the Beaten Path"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address:
        "Cairo Marriott Hotel, 16 Saray El Gezira St, Zamalek, Cairo, Egypt",
      coordinates: {
        latitude: 30.0571,
        longitude: 31.224,
      },
      instructions:
        "Meet your guide in the lobby of the Cairo Marriott Hotel. Your guide will be holding a sign with your name and 'Saqqara Tour'. Please arrive 15 minutes before your scheduled pickup time. We can arrange pickup from other central Cairo hotels with advance notice.",
      contactNumber: "+20 2 2728 3000",
      contactEmail: "saqqara@paragontrails.com",
    },
    faqs: [
      {
        question: "How far is Saqqara from central Cairo?",
        answer:
          "Saqqara is located approximately 30 kilometers (19 miles) south of central Cairo. The drive takes around 45-60 minutes depending on traffic conditions. We provide air-conditioned transportation for the entire excursion.",
      },
      {
        question: "What makes Saqqara different from the Giza pyramids?",
        answer:
          "While Giza is home to the most famous pyramids, Saqqara contains the oldest pyramid in Egypt—the Step Pyramid of Djoser—dating to 2667-2648 BCE. Saqqara also offers a more comprehensive view of Egyptian burial practices spanning 3,000 years and typically has far fewer tourists, allowing for a more intimate experience.",
      },
      {
        question: "What remains of Memphis to see today?",
        answer:
          "Memphis exists today as an open-air museum with scattered ruins, statues, and sphinx figures. The highlights include a massive fallen colossus of Ramses II housed in a purpose-built museum and an impressive alabaster sphinx. While less intact than other sites, Memphis's historical importance as Egypt's first capital makes it culturally significant.",
      },
      {
        question: "Will we enter any tombs at Saqqara?",
        answer:
          "Yes, the tour includes entry to several tombs with remarkably preserved wall reliefs and paintings. Notable tombs we visit include the Tomb of Kagemni, the Pyramid of Teti with its pyramid texts, and the Tomb of Mereruka. These elaborate tombs of nobles and officials often have more detailed artwork than royal tombs.",
      },
      {
        question: "Is lunch included in this tour?",
        answer:
          "Yes, we include a traditional Egyptian lunch at a local restaurant between the Saqqara and Memphis portions of the tour. The meal typically features grilled meats, fresh bread, mezze plates, and seasonal vegetables. Vegetarian options are available upon request.",
      },
    ],
  },
];

export default cairoTours;
