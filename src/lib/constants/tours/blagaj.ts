import { Tour } from "@/lib/interfaces/services/tours";

export const blagajTours: Tour[] = [
  {
    title: "Blagaj Tekija & Buna River Spring Experience",
    description:
      "Explore the mystical Dervish monastery built into the dramatic cliff face at the source of the Buna River, one of Europe's most powerful springs, with exclusive access to normally restricted prayer rooms and meditation chambers.",
    images: [
      "/images/tours/blagaj/tekija-monastery.jpg",
      "/images/tours/blagaj/buna-spring.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Spiritual", "Nature", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Blagaj Tekija Parking Area, Blagaj bb, Bosnia and Herzegovina",
      coordinates: {
        latitude: 43.2565,
        longitude: 17.9058,
      },
      instructions:
        "Meet your guide at the main parking area in front of the path to Blagaj Tekija. Look for a guide holding a 'Paragon Trails' sign. Please arrive 15 minutes before your scheduled tour time.",
      contactNumber: "+387 61 123 456",
      contactEmail: "blagaj@paragontrails.com",
    },
    faqs: [
      {
        question: "What is the significance of the Blagaj Tekija?",
        answer:
          "The Blagaj Tekija (Dervish House) represents a unique blend of Ottoman and Mediterranean architectural styles dating to the early 16th century. It served as a Sufi lodge for the Dervish order, who chose this location for its natural beauty and spiritual power. The monastery contains well-preserved living quarters, prayer rooms, and ceremonial spaces where Sufi rituals were performed. Beyond its religious significance, the site embodies the harmonious relationship between human spirituality and natural beauty that characterizes Bosnian Islamic traditions.",
      },
      {
        question: "Can we enter the prayer rooms and meditation chambers?",
        answer:
          "Yes, this tour includes exclusive access to areas of the Tekija that are not open to the general public, including the main prayer hall, private meditation chambers, and the serene courtyard overlooking the Buna River. Our guide will explain the significance of each space and its role in Sufi practices.",
      },
      {
        question: "Is photography permitted inside the Tekija?",
        answer:
          "Photography is permitted in most areas of the Tekija, though some prayer rooms may have restrictions during certain times. Your guide will clearly indicate when photography is not appropriate. Flash photography is prohibited throughout the interior to protect the historic artifacts and decorative elements. The exterior and the stunning natural setting of the monastery against the cliff face offer exceptional photo opportunities.",
      },
      {
        question: "Will we be able to taste the famous Buna River water?",
        answer:
          "Yes! The Buna River is renowned for its exceptionally pure, cold water that emerges directly from the karst cavern. You'll have the opportunity to fill water bottles or simply taste the pristine water straight from the spring. Many visitors consider it some of the best-tasting natural water they've ever experienced. Local legend holds that drinking from the Buna spring ensures a return visit to Bosnia.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is appropriate for children of all ages, though parents should ensure children remain respectful in the religious areas of the Tekija. The natural setting with the dramatic cliff face and emerald river is fascinating for young visitors, and the historical stories are presented in an engaging way suitable for various age groups. The walking is minimal and on relatively flat terrain.",
      },
    ],
  },
  {
    title: "Traditional Bosnian Cuisine & Riverside Dining",
    description:
      "Experience authentic Herzegovinian gastronomy with a cooking demonstration using centuries-old recipes, followed by a sumptuous meal at a traditional restaurant perched directly above the turquoise Buna River.",
    images: [
      "/images/tours/blagaj/cooking-demonstration.jpg",
      "/images/tours/blagaj/riverside-restaurant.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Culinary", "Local Food", "Cooking"],

    isHistorical: false,
    isRomantic: true,
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
      address: "Restaurant Vrelo, Blagaj bb, Bosnia and Herzegovina",
      coordinates: {
        latitude: 43.2566,
        longitude: 17.9053,
      },
      instructions:
        "Meet your culinary guide at the entrance of Restaurant Vrelo, one of the traditional riverside restaurants in Blagaj. Your guide will be wearing a chef's apron with the Paragon Trails logo. Please arrive 10-15 minutes before the scheduled start time.",
      contactNumber: "+387 61 234 567",
      contactEmail: "dining@paragontrails.com",
    },
    faqs: [
      {
        question: "What dishes are featured in this culinary experience?",
        answer:
          "You'll learn about traditional Herzegovinian specialties including jagnjetina ispod sača (lamb cooked under a metal dome), klepe (minced meat dumplings), dolma (stuffed vegetables), and baklava. The cooking demonstration highlights how these dishes represent the fusion of Ottoman, Mediterranean, and Slavic influences that characterize Bosnian cuisine. Our meal features trout freshly caught from the Buna River, organic vegetables from local farms, and homemade bread baked in a traditional wood-fired oven. Vegetarian options are readily available with advance notice.",
      },
      {
        question: "Is the restaurant accessible for families with children?",
        answer:
          "Yes, the riverside restaurant is family-friendly with a spacious outdoor terrace overlooking the Buna River. It has high chairs available and a children's menu featuring local favorites like grilled fish, chicken skewers, and homemade pasta. The relaxed atmosphere allows children to enjoy the natural surroundings while parents savor their meals.",
      },
      {
        question: "Will we learn how to prepare Bosnian dishes ourselves?",
        answer:
          "Yes, this experience includes a hands-on cooking demonstration where you'll learn to prepare 2-3 traditional dishes. You'll be guided through the preparation of dishes like klepe (Bosnian dumplings) or dolma (stuffed vegetables), learning authentic techniques from local culinary experts. The instruction is suitable for all skill levels, and you'll receive recipe cards to take home.",
      },
      {
        question: "What makes Herzegovinian cuisine unique?",
        answer:
          "Herzegovinian cuisine represents a fascinating blend of Mediterranean, Ottoman, and Slavic culinary traditions. The region's microclimate allows for unique agricultural products including exceptional fruits, tobacco, and wine grapes. The proximity to the Adriatic Sea influences the cuisine with more Mediterranean elements than other parts of Bosnia, while Ottoman traditions remain strong in techniques and flavor profiles. The pristine Buna River provides some of the freshest trout you'll ever taste, prepared according to recipes passed down through generations.",
      },
      {
        question: "Can you accommodate special dietary requirements?",
        answer:
          "Yes, with advance notice we can accommodate vegetarian, vegan, gluten-free, and most other dietary requirements. Traditional Bosnian cuisine naturally includes many vegetable-based dishes that can be adapted easily. Please inform us of any dietary restrictions at least 48 hours before your tour so our chefs can prepare appropriate alternatives while still providing an authentic culinary experience.",
      },
    ],
  },
  {
    title: "Blagaj Photography: Capturing Nature & Heritage",
    description:
      "Perfect your photography skills while capturing the stunning natural scenery and historical architecture of Blagaj. Learn composition techniques and optimal lighting strategies with guidance from a professional landscape photographer.",
    images: [
      "/images/tours/blagaj/photography-workshop.jpg",
      "/images/tours/blagaj/landscape-photography.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Photography", "Landscape", "Architecture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    meetingPoint: {
      address: "Blagaj Tekija Viewpoint, Blagaj bb, Bosnia and Herzegovina",
      coordinates: {
        latitude: 43.257,
        longitude: 17.906,
      },
      instructions:
        "Meet your photography guide at the main viewpoint overlooking Blagaj Tekija and the Buna River spring. Your guide will be carrying professional camera equipment and a Paragon Trails photography vest. Please arrive 15 minutes early with your camera gear ready.",
      contactNumber: "+387 61 345 678",
      contactEmail: "photography@paragontrails.com",
    },
    faqs: [
      {
        question: "What are the best features to photograph in Blagaj?",
        answer:
          "Blagaj offers exceptional photographic opportunities including the dramatic limestone cliff face where the Buna River emerges, the Ottoman architecture of the Tekija set against the rock wall, traditional stone houses along the riverbank, and the crystal-clear turquoise waters of the Buna itself. During different seasons, we focus on capturing morning mist over the water, wildflowers in spring, or autumn colors reflecting in the river. We visit several exclusive vantage points on private property that provide unique perspectives not available to regular tourists.",
      },
      {
        question: "Do I need professional photography equipment?",
        answer:
          "While a DSLR or mirrorless camera is recommended for optimal results, this workshop is suitable for all skill levels and equipment types. We provide guidance on using smartphones effectively for landscape photography as well. The focus is on composition, lighting, and storytelling rather than technical specifications, so you can participate with whatever camera you have.",
      },
      {
        question: "What are the best times of day for photography in Blagaj?",
        answer:
          "Early morning (7-9am) and late afternoon (4-6pm) provide the most dramatic lighting conditions at Blagaj. During morning hours, soft light illuminates the monastery and cliff face, while afternoon light creates stunning reflections on the emerald waters of the Buna spring. Our workshop is timed to capture these optimal conditions, with exact times adjusted seasonally. In summer months, we often extend into blue hour to capture the monastery illuminated against the twilight sky.",
      },
      {
        question: "Are tripods allowed at the monastery and spring area?",
        answer:
          "Yes, tripods are permitted throughout the exterior areas of the site. However, their use inside the Tekija building is restricted due to space limitations and respect for the religious setting. During our workshop, we'll identify the best locations for tripod setup that won't interfere with other visitors while providing optimal composition opportunities.",
      },
      {
        question:
          "What photographic skills will we focus on during this workshop?",
        answer:
          "This workshop covers several key skills including: mastering challenging light conditions when photographing the dark cave entrance against bright exteriors, capturing the vivid emerald water colors with accurate white balance, composition techniques for architectural subjects in natural settings, and long-exposure techniques to create silky water effects on the Buna River. We adapt our teaching to your existing skill level, ensuring both beginners and experienced photographers gain valuable new techniques.",
      },
    ],
  },
  {
    title: "Kayaking Adventure on the Buna River",
    description:
      "Paddle the crystal-clear waters of the emerald Buna River on a guided kayaking journey, exploring hidden caves, natural pools, and picturesque landscapes inaccessible by land, with a riverside picnic featuring local specialties.",
    images: [
      "/images/tours/blagaj/kayaking-buna.jpg",
      "/images/tours/blagaj/river-adventure.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Kayaking", "Adventure", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
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
      address: "Buna River Kayak Launch, Blagaj bb, Bosnia and Herzegovina",
      coordinates: {
        latitude: 43.258,
        longitude: 17.9065,
      },
      instructions:
        "Meet your kayaking guide at the designated kayak launch point approximately 200 meters downstream from the Blagaj Tekija. Look for the blue Paragon Trails kayaks and staff wearing blue rash guards. Please arrive in appropriate water attire and bring a change of clothes.",
      contactNumber: "+387 61 456 789",
      contactEmail: "adventure@paragontrails.com",
    },
    faqs: [
      {
        question: "Do I need previous kayaking experience?",
        answer:
          "No previous experience is necessary. The Buna River has gentle currents perfect for beginners, and we provide comprehensive instruction before departure. We use stable, easy-to-navigate sit-on-top kayaks suitable for novices, and our guides remain close by throughout the journey. The river's exceptional clarity (visibility up to 15 meters deep) and consistent temperature (approximately 11°C year-round, due to its underground spring source) create perfect conditions for a comfortable paddling experience. Swimming opportunities are available during warmer months.",
      },
      {
        question: "What should I bring for the kayaking tour?",
        answer:
          "Please wear comfortable, quick-drying clothing suitable for water activities. We recommend bringing a swimsuit, towel, sunscreen, a hat, and water shoes or sandals with straps. We provide all necessary kayaking gear including life jackets, paddles, and waterproof dry bags for personal items. A light riverside picnic lunch featuring local specialties is included in the tour.",
      },
      {
        question: "How cold is the Buna River water?",
        answer:
          "The Buna River maintains a constant temperature of approximately 11°C (52°F) year-round, regardless of the season. This is because the water emerges directly from an underground spring system. During summer months when air temperatures can reach 35°C (95°F), the cool water provides a refreshing experience. We provide splash jackets in cooler weather, and the stability of our kayaks means you're unlikely to get completely wet unless you choose to swim in designated areas.",
      },
      {
        question: "What wildlife might we see during the kayaking trip?",
        answer:
          "The pristine Buna River supports diverse wildlife including numerous fish species that are visible through the crystal-clear water. Birdwatchers might spot kingfishers, herons, and various waterfowl. The surrounding vegetation hosts small mammals and numerous butterfly species. The river's exceptional water quality has preserved an ecosystem that has become increasingly rare in Europe, making wildlife sightings common during peaceful paddling.",
      },
      {
        question: "Is this kayaking trip environmentally responsible?",
        answer:
          "Absolutely. We follow strict environmental protocols to protect the Buna River's pristine ecosystem. Our guides are trained in low-impact approaches, we limit group sizes, follow designated paddling routes to protect sensitive habitat, and participate in regular river cleanup initiatives. A portion of your tour fee directly supports local conservation efforts focused on protecting the Buna River watershed. We use modern equipment that prevents any contamination of the water.",
      },
    ],
  },
  {
    title: "Sunset Hike & Fortress Exploration",
    description:
      "Trek the historic hillside paths to the medieval Stjepan Grad fortress ruins overlooking Blagaj, learning about the region's rich history from Roman times through the Ottoman period, culminating with spectacular sunset views over the Buna valley.",
    images: [
      "/images/tours/blagaj/fortress-ruins.jpg",
      "/images/tours/blagaj/sunset-view.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.6,
    tags: ["Hiking", "Sunset", "History"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address: "Stjepan Grad Trailhead, Blagaj bb, Bosnia and Herzegovina",
      coordinates: {
        latitude: 43.2555,
        longitude: 17.907,
      },
      instructions:
        "Meet your hiking guide at the Stjepan Grad fortress trailhead marker in Blagaj village. Your guide will be wearing a green Paragon Trails hiking vest. Please wear appropriate footwear and weather-appropriate clothing, and bring water and a flashlight for the return journey.",
      contactNumber: "+387 61 567 890",
      contactEmail: "hiking@paragontrails.com",
    },
    faqs: [
      {
        question: "How difficult is the hike to the fortress?",
        answer:
          "The hike covers approximately 3km round trip with a moderate elevation gain of about 200 meters. The trail follows historic pathways that wind gradually uphill, with some steeper sections and uneven terrain near the fortress ruins. Most reasonably fit participants complete the ascent in 45-60 minutes at a comfortable pace with rest stops. We time our arrival at the summit for approximately 30 minutes before sunset, allowing plenty of time to explore the fortress ruins and find an optimal viewing spot before the evening light show begins over the valley.",
      },
      {
        question: "What should I wear for the hike?",
        answer:
          "We recommend wearing comfortable hiking shoes or sturdy sneakers with good grip, as the trail can be rocky and uneven in places. Dress in layers suitable for warm weather, as temperatures can drop significantly after sunset. A light jacket or sweater is advisable, along with a hat and sunscreen. We provide bottled water and light snacks to keep you energized during the hike.",
      },
      {
        question:
          "What is the historical significance of Stjepan Grad fortress?",
        answer:
          "Stjepan Grad (also known as Blagaj Fortress) dates back to the 10th century and was one of the most important defensive structures in Herzegovina. It served as the seat of Herceg Stjepan Vukčić Kosača, the medieval ruler after whom Herzegovina is named. The strategic position offered control over ancient trade routes and the fertile plains below. The fortress walls contain elements from Illyrian, Roman, medieval Bosnian, and Ottoman periods, representing over 2,000 years of defensive architecture adapted to this commanding position.",
      },
      {
        question: "What should I bring for the sunset hike?",
        answer:
          "Essential items include sturdy walking shoes or hiking boots, a water bottle (at least 1 liter), a light jacket as temperatures drop after sunset, sunscreen and a hat for the ascent, and a small flashlight or headlamp for the descent after sunset. A camera is highly recommended for the spectacular views, and hiking poles are beneficial for those who use them. We provide a small backpack with emergency supplies and additional water if needed.",
      },
      {
        question:
          "Will we learn about the local flora and fauna during the hike?",
        answer:
          "Yes, our guides are knowledgeable about the local ecosystem and will identify notable plant species, many of which are endemic to Herzegovina's karst landscape. The hillsides feature aromatic Mediterranean herbs, hardy oak varieties, and seasonal wildflowers. Wildlife in the area includes various bird species, particularly raptors that nest in the cliffs. The hike provides an excellent opportunity to understand how geography and climate have shaped both the natural environment and human settlement patterns in this region.",
      },
    ],
  },
];

export default blagajTours;
