import { Tour } from "@/lib/interfaces/services/tours";

export const lehTours: Tour[] = [
  {
    title: "Monastery Circuit & Buddhist Heritage",
    description:
      "Explore Ladakh's magnificent 1000-year-old monasteries perched dramatically on hilltops. Witness morning prayers, interact with monks, and learn about Tibetan Buddhist traditions with a religious scholar guide who provides rare access to private temple rooms.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/thiksey-monastery.jpg",
      "/images/tours/leh/hemis-monastery.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Buddhism", "Monasteries", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "spiritual",
    
    meetingPoint: {
      address: "Shanti Stupa Main Entrance, Leh 194101, India",
      coordinates: {
        latitude: 34.1536,
        longitude: 77.5855,
      },
      instructions: "Meet at the main entrance gate of Shanti Stupa. Your guide will be holding a sign with 'Monastery Tour' written on it.",
      contactNumber: "+91 1982 252101",
      contactEmail: "monasteries@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-22", "2023-12-29", 
      "2024-01-05", "2024-01-12", "2024-01-19", "2024-01-26",
      "2024-02-02", "2024-02-09", "2024-02-16", "2024-02-23",
    ],
    
    highlights: [
      "Witness morning prayer ceremonies with chanting monks and traditional instruments",
      "Visit Thiksey Monastery, known as 'Mini-Potala' for its resemblance to Tibet's iconic palace",
      "Explore Hemis Monastery, Ladakh's largest and wealthiest monastery",
      "Gain special access to Alchi Monastery's 11th-century murals not available to regular visitors",
      "Meet and interact with Buddhist monks and learn about their daily lives",
    ],
    
    inclusions: [
      "Professional religious scholar guide",
      "Private transportation between monasteries in comfortable vehicle",
      "All monastery entrance and donation fees",
      "Traditional Ladakhi lunch at local family home",
      "Special permission for photography in restricted areas",
      "Morning tea with monks at one monastery",
      "Oxygen supplementation (if needed at high altitudes)",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off",
      "Personal offerings at monasteries (optional)",
      "Specialty camera permits for professional equipment",
      "Gratuities for guide and driver",
      "Additional food and beverages beyond included meals",
    ],
    
    itinerary: [
      "06:30 - Meet at Shanti Stupa for introduction and orientation",
      "07:00 - Drive to Thiksey Monastery for morning prayer ceremony",
      "07:30 - Witness monks' morning rituals and butter lamp offerings",
      "08:30 - Tour of Thiksey Monastery's temples and living quarters",
      "09:30 - Drive to Hemis Monastery with stunning mountain views en route",
      "10:30 - Guided exploration of Hemis with special access to sacred relics",
      "12:00 - Traditional Ladakhi lunch at local family home",
      "13:30 - Visit to Stakna Monastery with its distinctive rock formation",
      "14:30 - Drive to Alchi Monastery complex for private tour",
      "15:00 - Explore Alchi's ancient murals with detailed commentary",
      "16:00 - Tea with resident monks and Q&A session about Buddhist philosophy",
      "17:00 - Return to Leh with photo stops at scenic viewpoints",
    ],
    
    faqs: [
      {
        question: "What should I wear for monastery visits?",
        answer:
          "Modest dress is essential for monastery visits. Both men and women should cover shoulders and knees, and removing shoes is required before entering temple areas. Avoid wearing shorts, sleeveless tops, or revealing clothing out of respect for Buddhist traditions. We recommend bringing a light jacket or shawl as monasteries at high elevations can be cool even in summer.",
      },
      {
        question: "Can we participate in any rituals or prayers?",
        answer:
          "Yes, our guides can arrange for you to participate in morning prayers at select monasteries, providing a unique opportunity to experience the spiritual atmosphere. You may also have the chance to light butter lamps or make offerings under the guidance of the monks. However, participation is always optional and respectful silence is expected during rituals.",
      },
    ],
  },
  {
    title: "Nubra Valley Expedition & Bactrian Camels",
    description:
      "Journey over the world's highest motorable pass (Khardung La) to discover Nubra Valley's surreal landscapes. Ride double-humped Bactrian camels across sand dunes surrounded by snow-capped mountains and stay in a luxury desert camp.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/nubra-valley.jpg",
      "/images/tours/leh/bactrian-camels.jpg",
    ],
    duration: "2 days",
    price: "$275",
    rating: 4.8,
    tags: ["Adventure", "Desert", "Wildlife"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    
    meetingPoint: {
      address: "Leh Main Market, Hotel Grand Dragon Entrance, Leh 194101",
      coordinates: {
        latitude: 34.1642,
        longitude: 77.5848,
      },
      instructions: "Meet at the entrance of Hotel Grand Dragon in Leh Main Market. Look for our expedition vehicle with 'Nubra Valley Expedition' sign.",
      contactNumber: "+91 1982 252102",
      contactEmail: "nubra@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-23", "2023-12-30", 
      "2024-01-06", "2024-01-13", "2024-01-20", "2024-01-27",
      "2024-02-03", "2024-02-10", "2024-02-17", "2024-02-24",
    ],
    
    highlights: [
      "Cross Khardung La Pass (18,380 ft), the world's highest motorable road",
      "Ride rare double-humped Bactrian camels across the Hunder sand dunes",
      "Experience the surreal contrast of desert dunes surrounded by snow peaks",
      "Stay in luxury desert camp with traditional Ladakhi hospitality",
      "Visit the ancient Diskit Monastery with its 32m tall Maitreya Buddha statue",
    ],
    
    inclusions: [
      "Professional adventure guide with high-altitude expertise",
      "Private 4x4 transportation throughout the expedition",
      "Inner Line Permit arrangements for restricted areas",
      "1 night accommodation in luxury desert camp",
      "All meals during the expedition (2 lunches, 1 dinner, 1 breakfast)",
      "Bactrian camel safari with local handlers",
      "Oxygen supplementation and first aid kit",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off in Leh",
      "Personal riding equipment and specialized clothing",
      "Alcoholic beverages",
      "Photography fees at certain monuments",
      "Gratuities for guides, drivers and camp staff",
    ],
    
    itinerary: [
      "Day 1: 07:00 - Meet at Leh Main Market for departure briefing",
      "Day 1: 07:30 - Begin journey to Khardung La Pass with acclimatization stops",
      "Day 1: 09:30 - Reach Khardung La summit (18,380 ft) for photographs and tea",
      "Day 1: 10:30 - Descend into the dramatic Nubra Valley",
      "Day 1: 12:30 - Lunch at Khalsar village with views of the Shyok River",
      "Day 1: 14:00 - Visit Diskit Monastery and giant Buddha statue",
      "Day 1: 16:00 - Arrive at Hunder sand dunes for Bactrian camel safari",
      "Day 1: 17:30 - Check in at luxury desert camp with traditional welcome",
      "Day 1: 19:00 - Authentic Ladakhi dinner with cultural performance",
      
      "Day 2: 05:30 - Optional sunrise photography at sand dunes",
      "Day 2: 07:30 - Breakfast at camp with valley views",
      "Day 2: 08:30 - Morning exploration of Hunder village",
      "Day 2: 10:00 - Begin return journey via alternate scenic route",
      "Day 2: 12:00 - Visit Sumur and the historic Samstanling Monastery",
      "Day 2: 13:30 - Lunch at organic mountain farm",
      "Day 2: 15:00 - Cross Khardung La Pass with views of Karakoram Range",
      "Day 2: 17:30 - Return to Leh with expedition debriefing",
    ],
    
    faqs: [
      {
        question: "How do we handle the high altitude on this trip?",
        answer:
          "This expedition reaches elevations over 17,500 feet (5,300m) at Khardung La Pass, so proper acclimatization is essential. We recommend spending at least 2-3 days in Leh (11,500 ft/3,500m) before undertaking this journey. The tour includes oxygen supplements and our guides are trained in recognizing and managing altitude sickness. We travel at a moderate pace with frequent stops for adjustment and hydration.",
      },
      {
        question: "What type of accommodation is provided in Nubra Valley?",
        answer:
          "We stay in luxury desert camps featuring spacious tents with comfortable beds, en-suite bathrooms, and hot showers. Each camp is equipped with modern amenities while maintaining an authentic desert experience. The camps are located near the sand dunes for easy camel rides and stargazing at night.",
      },
    ],
  },
  {
    title: "Pangong Lake Photography Expedition",
    description:
      "Photograph one of the world's highest and most beautiful mountain lakes, famous for its ever-changing blue hues. Capture sunrise and sunset at prime locations with guidance from a professional landscape photographer.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/pangong-lake.jpg",
      "/images/tours/leh/pangong-sunrise.jpg",
    ],
    duration: "2 days",
    price: "$295",
    rating: 4.9,
    tags: ["Photography", "Lake", "Landscapes"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "art-and-music",
    
    meetingPoint: {
      address: "Leh Market Square, Near Central Clock Tower, Leh 194101",
      coordinates: {
        latitude: 34.1635,
        longitude: 77.5841,
      },
      instructions: "Meet at the Leh Clock Tower in the main market. Your photography guide will be carrying professional camera equipment and a Paragon Trails sign.",
      contactNumber: "+91 1982 252103",
      contactEmail: "pangong@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-17", "2023-12-24", "2023-12-31", 
      "2024-01-07", "2024-01-14", "2024-01-21", "2024-01-28",
      "2024-02-04", "2024-02-11", "2024-02-18", "2024-02-25",
    ],
    
    highlights: [
      "Photograph the ever-changing blues of Pangong Lake at optimal light conditions",
      "Learn specialized high-altitude photography techniques from a pro photographer",
      "Capture the stunning contrast between azure waters and barren mountains",
      "Stay in lakeside accommodations for sunrise and sunset shots",
      "Photograph unique Himalayan wildlife including marmots and Brahminy ducks",
    ],
    
    inclusions: [
      "Professional photography guide with Ladakh expertise",
      "Private 4x4 vehicle transportation throughout expedition",
      "Inner Line Permit arrangements for restricted areas",
      "1 night lakeside accommodation",
      "All meals during the expedition (2 lunches, 1 dinner, 1 breakfast)",
      "Photography accessories including filters and tripods if needed",
      "Digital post-processing session",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off in Leh",
      "Personal camera equipment (bring your own)",
      "Photography permits for professional/commercial photography",
      "Alcoholic beverages",
      "Gratuities for guide and driver",
    ],
    
    itinerary: [
      "Day 1: 05:00 - Meet at Leh Clock Tower for early departure",
      "Day 1: 05:15 - Departure for Pangong Lake via Chang La Pass",
      "Day 1: 07:30 - Breakfast stop and photography at Thiksey village",
      "Day 1: 08:30 - Continue journey with photo stops at Chang La Pass (17,688 ft)",
      "Day 1: 10:30 - Photography session at Chang La with instruction on altitude shooting",
      "Day 1: 11:30 - Descend towards Pangong with stops at Tangste Valley",
      "Day 1: 13:00 - Lunch at mountain village with local family",
      "Day 1: 14:30 - First sighting and photography of Pangong Lake",
      "Day 1: 15:30 - Arrive at campsite and photography walk along shoreline",
      "Day 1: 17:00 - Evening photography session capturing changing light on lake",
      "Day 1: 19:00 - Dinner and night photography briefing",
      "Day 1: 20:30 - Optional night sky photography session (weather permitting)",
      
      "Day 2: 05:00 - Pre-dawn positioning for sunrise photography",
      "Day 2: 05:45 - Capture sunrise over Pangong Lake",
      "Day 2: 07:30 - Breakfast at camp while reviewing morning shots",
      "Day 2: 09:00 - Lakeside photography at different viewpoints",
      "Day 2: 11:00 - Begin return journey with stops at photogenic locations",
      "Day 2: 13:00 - Lunch and photography at high-altitude wetland",
      "Day 2: 15:00 - Photo session at Changla Pass with different light conditions",
      "Day 2: 17:30 - Return to Leh with final photo stops at sunset",
      "Day 2: 19:00 - Photography review session in Leh",
    ],
    
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For landscape photography in Ladakh's dramatic light conditions, we recommend a DSLR or mirrorless camera with wide-angle lens (16-35mm range), polarizing and neutral density filters, stable tripod for low-light shooting, and extra batteries (cold temperatures deplete them quickly). That said, even smartphone photographers will capture stunning images with our guide's assistance with composition and timing. We can arrange equipment rental with advance notice.",
      },
      {
        question: "Are there any restrictions on photography at Pangong Lake?",
        answer:
          "Photography is allowed throughout the Pangong Lake area, but please respect local customs and avoid photographing people without permission. Some areas near the border may have restricted access, so we will ensure all locations visited are open to tourists. Our guide will also provide tips on capturing the lake's unique colors and reflections.",
      },
    ],
  },
  {
    title: "River Rafting Adventure on the Zanskar",
    description:
      "Tackle exhilarating rapids on the turquoise waters of the Zanskar River, surrounded by towering gorges and pristine wilderness. This world-class rafting expedition is led by internationally certified river guides and includes riverside camping.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/zanskar-rafting.jpg",
      "/images/tours/leh/river-camping.jpg",
    ],
    duration: "2 days",
    price: "$225",
    rating: 4.7,
    tags: ["Rafting", "Adventure", "Camping"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    
    meetingPoint: {
      address: "Rafting Base Camp, Phey Village, 15km from Leh",
      coordinates: {
        latitude: 34.1413,
        longitude: 77.6655,
      },
      instructions: "Meet at the Rafting Base Camp in Phey Village. Transport from Leh can be arranged for additional fee. Look for the blue rafting tents and equipment area.",
      contactNumber: "+91 1982 252104",
      contactEmail: "rafting@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-23", "2023-12-30", 
      "2024-01-06", "2024-01-13", "2024-01-20", "2024-01-27",
      "2024-02-03", "2024-02-10", "2024-02-17", "2024-02-24",
    ],
    
    highlights: [
      "Navigate Class III-IV rapids on the pristine Zanskar River",
      "Raft through spectacular deep gorges with 1000-foot walls",
      "Camp on pristine river beaches under star-filled Himalayan skies",
      "Spot rare wildlife including blue sheep and golden eagles",
      "Experience traditional riverside cooking and camping",
    ],
    
    inclusions: [
      "Professional internationally certified rafting guides",
      "All rafting and safety equipment (rafts, paddles, helmets, life jackets)",
      "Expedition-grade camping equipment",
      "All meals during the expedition (2 lunches, 1 dinner, 1 breakfast)",
      "Dry bags for personal items",
      "Comprehensive safety briefing and basic paddling instruction",
      "First aid supplies and emergency communication device",
    ],
    
    exclusions: [
      "Transportation to/from rafting base camp (can be arranged)",
      "Personal clothing and toiletries",
      "Sleeping bags (available for rent)",
      "Alcoholic beverages",
      "Gratuities for guides",
      "Personal travel insurance",
    ],
    
    itinerary: [
      "Day 1: 08:30 - Meet at Phey Rafting Base Camp for registration",
      "Day 1: 09:00 - Safety briefing and introduction to rafting equipment",
      "Day 1: 10:00 - Practice basic paddling techniques in calm water",
      "Day 1: 11:00 - Begin rafting journey on the Indus River",
      "Day 1: 12:30 - Navigate first set of rapids (Class II-III)",
      "Day 1: 13:30 - Riverside lunch with spectacular mountain views",
      "Day 1: 14:30 - Continue rafting to confluence with Zanskar River",
      "Day 1: 16:00 - Enter the dramatic Zanskar Gorge with increasing rapids",
      "Day 1: 17:30 - Arrive at riverside camp and set up tents",
      "Day 1: 19:00 - Traditional dinner prepared over campfire",
      "Day 1: 20:00 - Stargazing and stories around the campfire",
      
      "Day 2: 07:00 - Breakfast at camp with riverside views",
      "Day 2: 08:30 - Break camp and prepare for day's rafting",
      "Day 2: 09:00 - Navigate the most challenging section with Class III-IV rapids",
      "Day 2: 11:00 - Short hike to hidden waterfall (optional)",
      "Day 2: 12:30 - Lunch at scenic beach with swimming opportunity",
      "Day 2: 14:00 - Final rafting section with spectacular gorge views",
      "Day 2: 16:00 - Arrive at take-out point and celebrate completion",
      "Day 2: 16:30 - Return to base camp with equipment",
      "Day 2: 17:30 - Certificate ceremony and expedition conclusion",
    ],
    
    faqs: [
      {
        question: "Do I need previous rafting experience?",
        answer:
          "No previous rafting experience is necessary, but participants should be reasonably fit, comfortable around water, and able to swim. The Zanskar River features Class III-IV rapids (moderate to difficult), making it exciting but manageable for beginners under expert guidance. All safety equipment is provided including helmets, life jackets, wetsuits, and professional rescue training for guides. A comprehensive safety briefing is conducted before launching.",
      },
      {
        question: "What should I bring for the rafting trip?",
        answer:
          "We provide all necessary rafting gear, but you should bring personal items like quick-dry clothing, swimwear, sunscreen, a hat, sunglasses with straps, and a waterproof bag for valuables. Sturdy water shoes or sandals with straps are recommended. For overnight trips, pack light camping gear (we provide tents and sleeping bags) and a change of clothes for the evening.",
      },
    ],
  },
  {
    title: "Himalayan Meditation Retreat with Buddhist Masters",
    description:
      "Find inner peace through guided meditation practices in ancient monasteries and remote mountain settings. Learn mindfulness techniques directly from Tibetan Buddhist masters who share centuries-old wisdom adapted for modern practitioners.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/meditation-retreat.jpg",
      "/images/tours/leh/buddhist-teaching.jpg",
    ],
    duration: "3 days",
    price: "$195",
    rating: 4.9,
    tags: ["Meditation", "Spiritual", "Wellness"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "spiritual",
    
    meetingPoint: {
      address: "Mahabodhi International Meditation Centre, Devachan, Leh 194104",
      coordinates: {
        latitude: 34.1528,
        longitude: 77.5659,
      },
      instructions: "Meet at the main entrance gate of the Mahabodhi Meditation Centre. Look for the welcome desk with the retreat sign.",
      contactNumber: "+91 1982 252105",
      contactEmail: "meditation@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-22", "2023-12-29", 
      "2024-01-05", "2024-01-12", "2024-01-19", "2024-01-26",
      "2024-02-02", "2024-02-09", "2024-02-16", "2024-02-23",
    ],
    
    highlights: [
      "Learn authentic meditation techniques from Tibetan Buddhist masters",
      "Practice in serene monastery settings with panoramic Himalayan views",
      "Receive personal guidance adapted to your experience level",
      "Experience traditional Buddhist rituals and ceremonies",
      "Connect with like-minded practitioners in a supportive environment",
    ],
    
    inclusions: [
      "Expert meditation instructors and Buddhist scholars",
      "All meditation sessions and workshops",
      "Accommodation at retreat center (2 nights)",
      "Vegetarian meals throughout retreat",
      "Transportation to monastery meditation sessions",
      "Meditation cushions and materials",
      "Certificate of completion",
    ],
    
    exclusions: [
      "Transportation to/from retreat center",
      "Personal items and toiletries",
      "Additional snacks or beverages beyond provided meals",
      "Optional private sessions with masters (available at extra cost)",
      "Gratuities for retreat staff and teachers",
    ],
    
    itinerary: [
      "Day 1: 09:00 - Arrival and welcome at meditation center",
      "Day 1: 09:30 - Orientation and introduction to retreat program",
      "Day 1: 10:30 - Initial meditation instruction and practice",
      "Day 1: 12:30 - Mindful lunch with silence practice",
      "Day 1: 14:00 - Transportation to Thiksey Monastery",
      "Day 1: 14:30 - Meditation in ancient monastery prayer hall",
      "Day 1: 16:00 - Buddhist philosophy discussion with resident monk",
      "Day 1: 18:00 - Return to center for evening meal",
      "Day 1: 19:30 - Gentle yoga session for meditation preparation",
      "Day 1: 21:00 - Evening meditation and day closure",
      
      "Day 2: 06:00 - Morning sunrise meditation session",
      "Day 2: 07:30 - Light breakfast and tea",
      "Day 2: 09:00 - Advanced meditation techniques workshop",
      "Day 2: 11:00 - Walking meditation in mountain setting",
      "Day 2: 12:30 - Mindful lunch and rest period",
      "Day 2: 14:00 - Visit to Shanti Stupa for outdoor meditation",
      "Day 2: 16:00 - Sound healing session with Tibetan singing bowls",
      "Day 2: 18:00 - Evening meal at center",
      "Day 2: 19:30 - Special teaching by visiting Buddhist master",
      
      "Day 3: 05:30 - Pre-dawn meditation with mantra practice",
      "Day 3: 07:00 - Light breakfast and personal reflection time",
      "Day 3: 08:30 - Final meditation instruction session",
      "Day 3: 10:30 - Buddhist ceremony and blessing",
      "Day 3: 12:00 - Closing circle and certificate presentation",
      "Day 3: 13:00 - Farewell lunch and departure",
    ],
    
    faqs: [
      {
        question: "Is this retreat suitable for meditation beginners?",
        answer:
          "Yes, this retreat is designed to accommodate all levels, from complete beginners to experienced practitioners. Our teachers provide clear instruction in basic meditation techniques before progressing to more advanced practices. The schedule includes short meditation sessions (20-30 minutes) gradually increasing in duration, with plenty of breaks, discussions, and time for questions. No specific religious beliefs are required - the focus is on mindfulness techniques beneficial to everyone regardless of background.",
      },
      {
        question: "What should I bring for the meditation retreat?",
        answer:
          "Comfortable, loose-fitting clothing suitable for meditation is recommended. Bring a meditation cushion or mat if you prefer your own, though we provide basic seating. A journal for notes and reflections can be helpful. Personal items like toiletries, a water bottle, and any medications should also be packed. We recommend avoiding electronic devices to fully immerse yourself in the experience.",
      },
    ],
  },
  {
    title: "Royal Palaces of Ladakh & Noble Family Heritage",
    description:
      "Explore the fascinating royal history of Ladakh with exclusive access to historic palaces, including private quarters not open to the public. Meet descendants of noble families who share stories of the former Himalayan kingdom.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/stok-palace.jpg",
      "/images/tours/leh/royal-artifacts.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.7,
    tags: ["Royal History", "Heritage", "Architecture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Leh Palace Main Entrance, Leh 194101",
      coordinates: {
        latitude: 34.1664,
        longitude: 77.5832,
      },
      instructions: "Meet at the main entrance of Leh Palace. Your guide will be wearing traditional Ladakhi royal attire and holding a scroll with the royal insignia.",
      contactNumber: "+91 1982 252106",
      contactEmail: "royalheritage@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-18", "2023-12-25", 
      "2024-01-01", "2024-01-08", "2024-01-15", "2024-01-22", "2024-01-29",
      "2024-02-05", "2024-02-12", "2024-02-19", "2024-02-26",
    ],
    
    highlights: [
      "Private tour of Stok Palace including royal quarters not open to the public",
      "Visit the royal treasury with crown jewels and ancient artifacts",
      "Meet descendants of Ladakh's royal family for personal stories",
      "Explore Leh Palace with its magnificent 9-story architecture",
      "View rare royal thangkas, weapons, and historical documents",
    ],
    
    inclusions: [
      "Expert royal historian guide",
      "Private transportation between palaces",
      "All palace entrance and special access fees",
      "Traditional Ladakhi royal lunch experience",
      "Tea ceremony with noble family members",
      "Royal heritage guidebook",
      "Permission for photography in restricted areas",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off",
      "Special ceremonies or performances (available on request)",
      "Personal purchases of royal handicrafts or souvenirs",
      "Gratuities for guide and royal staff",
    ],
    
    itinerary: [
      "09:00 - Meet at Leh Palace for introduction to Ladakh's royal history",
      "09:30 - Guided tour of Leh Palace's nine stories",
      "10:30 - Special access to the palace prayer room and royal chambers",
      "11:30 - Drive to Shey Palace, the former summer retreat of kings",
      "12:00 - Explore Shey's temple with giant Buddha statue and murals",
      "13:00 - Royal lunch experience with traditional aristocratic recipes",
      "14:30 - Travel to Stok Palace, current residence of the royal family",
      "15:00 - Meet with royal family descendant for personal stories",
      "15:45 - Private tour of royal living quarters and treasures",
      "16:30 - Tea ceremony with traditional royal customs",
      "17:00 - View special exhibition of royal artifacts",
      "17:30 - Return to Leh with farewell at Leh Palace viewpoint",
    ],
    
    faqs: [
      {
        question: "What royal sites will we visit?",
        answer:
          "The tour includes visits to Stok Palace (still inhabited by the royal family), Shey Palace (the former summer residence), and Leh Palace (modeled after Tibet's Potala Palace). At Stok, we gain special access to the royal quarters and private collection of crown jewels, ceremonial artifacts, and ancient thangka paintings not shown to regular visitors. Our guide's direct connection to the royal lineage provides unique historical perspectives and personal anecdotes about court life in the former kingdom.",
      },
    ],
  },
  {
    title: "Ladakh's Ancient Silk Road & Caravan Trails",
    description:
      "Trace the historic Silk Road routes through Ladakh, visiting ancient caravanserais, trading posts, and remote villages that once thrived on this legendary trade network connecting India, Tibet, and Central Asia.",
    city: "Leh",
    country: "India",
    region: "Ladakh",
    images: [
      "/images/tours/leh/silk-road.jpg",
      "/images/tours/leh/caravanserai.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Silk Road", "History", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    
    meetingPoint: {
      address: "Central Asian Museum, Main Bazaar Road, Leh 194101",
      coordinates: {
        latitude: 34.1647,
        longitude: 77.5845,
      },
      instructions: "Meet outside the Central Asian Museum in Leh Main Bazaar. Your guide will be dressed as a traditional caravan trader with historical trade items.",
      contactNumber: "+91 1982 252107",
      contactEmail: "silkroad@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-19", "2023-12-26", 
      "2024-01-02", "2024-01-09", "2024-01-16", "2024-01-23", "2024-01-30",
      "2024-02-06", "2024-02-13", "2024-02-20", "2024-02-27",
    ],
    
    highlights: [
      "Walk historic caravan routes used by Silk Road traders for centuries",
      "Visit the Central Asian Museum with its collection of ancient trade artifacts",
      "Explore restored caravanserais where traders rested and exchanged goods",
      "Meet families who maintain traditional crafts influenced by Silk Road trade",
      "Learn about the exchange of ideas, religions, and technologies along trade routes",
    ],
    
    inclusions: [
      "Expert historian guide specialized in Silk Road history",
      "Transportation to remote trade route sites",
      "All site entrance and museum fees",
      "Traditional trade route lunch with Central Asian influences",
      "Silk Road map with historic routes marked",
      "Tea ceremony with Central Asian spices",
      "Small handicraft demonstration",
    ],
    
    exclusions: [
      "Hotel pickup and drop-off",
      "Specialty craft purchases and souvenirs",
      "Personal expenses during village visits",
      "Gratuities for guide and local craftspeople",
    ],
    
    itinerary: [
      "09:00 - Meet at Central Asian Museum for introduction to Silk Road history",
      "09:30 - Guided tour of the museum's trade artifacts and historical maps",
      "10:30 - Walk through Leh Old Town along ancient trading paths",
      "11:15 - Visit restored caravanserai with demonstrations of trading practices",
      "12:00 - Drive to Spituk village on historic trade route",
      "12:30 - Traditional lunch featuring dishes from various Silk Road regions",
      "13:45 - Visit local family maintaining craft traditions influenced by trade",
      "14:30 - Continue to Alchi to see ancient temple artwork showing trade items",
      "15:30 - Walk portion of original caravan trail with pack animals",
      "16:15 - Demonstration of traditional navigation and caravan organization",
      "17:00 - Return to Leh with final discussion at historic trading point",
    ],
    
    faqs: [
      {
        question: "What historical sites will we see?",
        answer:
          "The tour includes visits to ancient caravanserais (rest stops for traders), ruined forts, and remote villages that were once bustling trade hubs. We explore the remains of the Leh-Lhasa trade route, including the famous Chang La Pass and Nubra Valley's caravan trails. Our guide shares fascinating stories about the caravans that crossed these harsh terrains carrying silk, spices, and precious goods for centuries.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly with engaging storytelling and interactive elements to keep children interested in the rich history of Ladakh's Silk Road heritage. The pace is relaxed with plenty of opportunities for exploration and learning.",
      },
    ],
  },
];

export default lehTours;
