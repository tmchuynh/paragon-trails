import { Tour } from "@/lib/interfaces/services/tours";

export const quitoTours: Tour[] = [
  {
    title: "Quito Historic Center & Middle of the World",
    description:
      "Experience Quito's UNESCO World Heritage colonial center with its ornate churches and historic plazas, then stand in both hemispheres at once at the Equator Monument where you can observe unique gravitational phenomena.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha",
    images: [
      "/images/tours/quito/historic-center.jpg",
      "/images/tours/quito/middle-of-world.jpg",
    ],
    duration: "8 hours",
    price: "$85",
    rating: 4.8,
    tags: ["UNESCO", "Cultural", "Equator"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address: "Plaza Grande, Quito Historic Center",
      coordinates: {
        latitude: -0.22,
        longitude: -78.512,
      },
      instructions:
        "Meet at the central gazebo in Plaza Grande. Your guide will be holding a yellow umbrella with 'Paragon Trails' logo.",
      contactNumber: "+593 9 8765 4321",
      contactEmail: "quitotours@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-26",
      "2023-12-29",
      "2024-01-02",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-16",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-01-30",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-13",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
      "2024-02-27",
    ],

    highlights: [
      "Explore Quito's exquisitely preserved colonial center with its grand plazas and ornate churches",
      "Visit the spectacular 'Church of Gold' (La Compañía de Jesús) with its intricate gold leaf interior",
      "Stand with one foot in each hemisphere at the Equator Monument",
      "Witness unique equatorial phenomena including the Coriolis effect and water drainage experiments",
      "Learn about Ecuador's indigenous cultures at the Intiñan Museum",
    ],

    inclusions: [
      "Professional certified bilingual guide",
      "Private transportation in comfortable air-conditioned vehicle",
      "Entrance fees to La Compañía Church, San Francisco Church, and Middle of the World monument",
      "Traditional Ecuadorian lunch at local restaurant",
      "Bottled water",
      "Equator certificate",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for extra charge)",
      "Additional food and beverages not specified",
      "Optional equator demonstrations ($5 extra)",
      "Gratuities (recommended but optional)",
      "Personal expenses and souvenirs",
    ],

    itinerary: [
      "09:00 - Meet at Plaza Grande for introduction and colonial Quito overview",
      "09:30 - Visit La Compañía de Jesús Church to admire its baroque gold interior",
      "10:30 - Explore San Francisco Church and Monastery complex",
      "11:15 - Walking tour through historic La Ronda street with colonial architecture",
      "12:00 - Panoramic viewpoint stop at El Panecillo hill with the Winged Virgin statue",
      "12:45 - Traditional Ecuadorian lunch at local restaurant",
      "14:00 - Drive to the Middle of the World monument (30 minutes)",
      "14:30 - Tour the Equator Monument and stand in both hemispheres simultaneously",
      "15:30 - Visit the Intiñan Museum with interactive equatorial experiments",
      "16:30 - Free time for photos and souvenir shopping",
      "17:00 - Return to Quito historic center where the tour concludes",
    ],

    faqs: [
      {
        question: "Which is the real equator line?",
        answer:
          "There are actually two equator sites near Quito. The larger official Middle of the World monument was built before GPS technology and is about 240 meters off from the actual equator. The Intiñan Museum, which we also visit, claims to be on the true equator line according to GPS measurements. Both sites offer interesting experiences and photo opportunities.",
      },
      {
        question: "How strenuous is the walking in Quito's historic center?",
        answer:
          "The walking portion covers approximately 2 kilometers (1.25 miles) on relatively flat terrain with some short uphill sections and cobblestone streets. The high altitude of Quito (2,850 meters/9,350 feet) may make walking more challenging for some visitors. We take a moderate pace with frequent stops for explanations and photos. Comfortable walking shoes are recommended.",
      },
      {
        question: "Will we be affected by altitude sickness on this tour?",
        answer:
          "Quito is located at 2,850 meters (9,350 feet) above sea level, so some visitors may experience mild altitude symptoms like shortness of breath or headaches. We recommend arriving at least 24 hours before the tour to acclimatize, staying hydrated, avoiding alcohol, and taking it easy during physical activity. Our guides are trained to handle altitude-related issues, and the tour pace is adjusted accordingly.",
      },
    ],
  },
  {
    title: "Otavalo Indigenous Market & Craftsmen",
    description:
      "Journey to the famous Otavalo indigenous market with its vibrant textiles and crafts, then meet local artisans in surrounding villages to observe traditional weaving, leather work and wood carving techniques passed down through generations.",
    city: "Otavalo",
    country: "Ecuador",
    region: "Imbabura",
    images: [
      "/images/tours/quito/otavalo-market.jpg",
      "/images/tours/quito/artisan-workshop.jpg",
    ],
    duration: "10 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Indigenous", "Market", "Handicrafts"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Swissotel Quito, Av. 12 de Octubre 1820, Quito",
      coordinates: {
        latitude: -0.199,
        longitude: -78.4851,
      },
      instructions:
        "Meet in the main lobby of Swissotel Quito. Your guide will be waiting with a sign bearing your name.",
      contactNumber: "+593 9 8765 4322",
      contactEmail: "otavalotour@paragontrails.com",
    },

    availableDates: [
      "2023-12-14",
      "2023-12-16",
      "2023-12-21",
      "2023-12-23",
      "2023-12-28",
      "2023-12-30",
      "2024-01-04",
      "2024-01-06",
      "2024-01-11",
      "2024-01-13",
      "2024-01-18",
      "2024-01-20",
      "2024-01-25",
      "2024-01-27",
      "2024-02-01",
      "2024-02-03",
      "2024-02-08",
      "2024-02-10",
      "2024-02-15",
      "2024-02-17",
      "2024-02-22",
      "2024-02-24",
      "2024-02-29",
    ],

    highlights: [
      "Experience South America's largest indigenous market with centuries of tradition",
      "Meet skilled artisans preserving ancestral crafting techniques",
      "Watch traditional backstrap weaving demonstrations in Peguche",
      "Visit leather workshops in Cotacachi known for fine handcrafted goods",
      "Enjoy spectacular views of San Pablo Lake and surrounding volcanoes",
    ],

    inclusions: [
      "Round-trip transportation from Quito in comfortable vehicle",
      "Professional bilingual guide specialized in indigenous cultures",
      "Traditional Andean lunch featuring local specialties",
      "Entrance fees to artisan workshops and demonstrations",
      "Bottled water throughout the day",
      "Guided market tour with bargaining assistance",
    ],

    exclusions: [
      "Personal purchases at the market and workshops",
      "Additional food and beverages beyond included lunch",
      "Optional activities like musical performances ($10)",
      "Gratuities (recommended but at your discretion)",
      "Travel insurance",
    ],

    itinerary: [
      "07:00 - Pickup from Swissotel Quito or your centrally located hotel",
      "08:45 - Brief stop at Miralago viewpoint to see San Pablo Lake and Imbabura Volcano",
      "09:30 - Arrive at Otavalo Market for guided exploration of textile and craft sections",
      "11:30 - Free time for shopping with bargaining assistance from your guide",
      "12:30 - Traditional Ecuadorian lunch at a local hacienda",
      "14:00 - Visit Peguche indigenous community to observe backstrap weaving",
      "15:00 - Travel to Cotacachi town, famous for leather craftsmanship",
      "15:30 - Leather workshop visit with artisan demonstrations",
      "16:15 - Free time to explore Cotacachi's leather shops",
      "17:00 - Depart for Quito with brief stop at a scenic viewpoint",
      "19:00 - Arrive back in Quito at original pickup location",
    ],

    faqs: [
      {
        question: "Which day is best to visit Otavalo Market?",
        answer:
          "While Otavalo Market operates daily, Saturday is traditionally the main market day when it expands throughout the town with the greatest variety of goods and vendors. We offer this tour on Saturdays for the full experience, but the market's permanent sections with handicrafts and textiles are excellent to visit any day of the week. Wednesday is the second-busiest market day.",
      },
      {
        question: "How much should I budget for shopping?",
        answer:
          "Quality handwoven textiles typically range from $20-$100 depending on size and complexity, while smaller crafts and souvenirs can be found for $5-$20. Leather goods in Cotacachi range from $15 for small items to $100+ for jackets or bags. Credit cards are accepted at larger establishments, but cash (US dollars) is preferred for market vendors. ATMs are available in Otavalo town.",
      },
      {
        question: "Is bargaining expected at the market?",
        answer:
          "Yes, respectful bargaining is a normal part of the market culture. Your guide will provide tips on appropriate bargaining etiquette and can assist with translations if needed. As a general rule, you might start at about 30% below the initial asking price and reach a compromise. However, remember these crafts represent significant work and are the livelihood of local artisans.",
      },
    ],
  },
  {
    title: "Cotopaxi Volcano National Park Adventure",
    description:
      "Explore one of the world's highest active volcanoes on this adventure to Cotopaxi National Park, featuring wildlife spotting, a hike to the mountain refuge at 4,800m, and pristine Andean landscapes with wild horses and unique highland vegetation.",
    city: "Quito",
    country: "Ecuador",
    region: "Cotopaxi",
    images: [
      "/images/tours/quito/cotopaxi-volcano.jpg",
      "/images/tours/quito/cotopaxi-national-park.jpg",
    ],
    duration: "9 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Volcano", "Hiking", "Nature"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Magic Bean Restaurant, Foch E5-08, Quito",
      coordinates: {
        latitude: -0.2014,
        longitude: -78.4901,
      },
      instructions:
        "Meet at The Magic Bean Restaurant in the Mariscal district. Our guide will be waiting outside with a clipboard and Paragon Trails logo.",
      contactNumber: "+593 9 8765 4323",
      contactEmail: "cotopaxi@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-19",
      "2023-12-24",
      "2023-12-27",
      "2023-12-31",
      "2024-01-03",
      "2024-01-07",
      "2024-01-10",
      "2024-01-14",
      "2024-01-17",
      "2024-01-21",
      "2024-01-24",
      "2024-01-28",
      "2024-01-31",
      "2024-02-04",
      "2024-02-07",
      "2024-02-11",
      "2024-02-14",
      "2024-02-18",
      "2024-02-21",
      "2024-02-25",
      "2024-02-28",
    ],

    highlights: [
      "Photograph the perfectly symmetric cone of Cotopaxi, one of the world's highest active volcanoes",
      "Hike to the mountaineers' refuge at 4,800m (15,750ft) and continue to the glacier line",
      "Spot wild horses, Andean foxes, and deer in their natural habitat",
      "Learn about highland adaptation and volcanic ecology from expert mountain guides",
      "Explore Limpiopungo Lagoon with its diverse birdlife and reflective waters",
    ],

    inclusions: [
      "Transportation in 4x4 vehicle suitable for mountain terrain",
      "Professional bilingual guide with mountain expertise",
      "National park entrance fees",
      "Nutritious box lunch and snacks",
      "Hot beverage at the mountain refuge",
      "Trekking poles for the high-altitude hike",
      "Oxygen and first aid equipment",
      "Bottled water and altitude-appropriate hydration",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for $15 extra per group)",
      "Specialized mountain clothing (available for rent)",
      "Additional personal snacks",
      "Alcoholic beverages",
      "Gratuities (recommended but optional)",
      "Travel insurance",
    ],

    itinerary: [
      "07:00 - Departure from Magic Bean Restaurant in Quito",
      "08:30 - Brief stop at Machachi town for restrooms and additional supplies if needed",
      "09:15 - Arrive at Cotopaxi National Park entrance for check-in and briefing",
      "09:45 - Wildlife spotting drive through highland páramo ecosystem",
      "10:30 - Stop at Limpiopungo Lagoon for short walk and photography",
      "11:15 - 4x4 drive up Cotopaxi's slopes to the parking area at 4,500m",
      "12:00 - Begin acclimatization hike to the mountaineers' refuge (4,800m)",
      "12:45 - Hot drink at the refuge and altitude adjustment",
      "13:15 - Optional additional hike toward the glacier line for those feeling strong",
      "14:00 - Picnic lunch with volcano views (weather permitting)",
      "14:45 - Begin descent and return to vehicle",
      "15:30 - Drive through another sector of the park for additional viewpoints",
      "16:30 - Begin return journey to Quito",
      "18:00 - Arrive back in Quito at the original meeting point",
    ],

    faqs: [
      {
        question: "How difficult is the hike to the refuge?",
        answer:
          "The hike from the parking area to the refuge covers about 1km (.6 mile) with 300m (985ft) elevation gain on volcanic sand and rock. The main challenge is the high altitude (4,500-4,800m / 14,760-15,750ft), which makes breathing difficult and slow progress necessary. Most reasonably fit people can complete this hike at a slow pace with frequent breaks. The altitude effects vary greatly between individuals regardless of fitness level.",
      },
      {
        question: "What should I wear for Cotopaxi National Park?",
        answer:
          "Weather at Cotopaxi can change dramatically and quickly. We recommend dressing in layers: moisture-wicking base layer, warm insulating middle layer, and waterproof/windproof outer layer. Sturdy hiking boots, warm hat, gloves, and sunglasses are essential. Sunscreen is crucial at high altitudes. Temperatures typically range from 0-15°C (32-59°F) but can feel colder with wind chill.",
      },
      {
        question: "Will I get altitude sickness on this tour?",
        answer:
          "This tour reaches very high altitudes (4,800m/15,750ft), so some altitude symptoms are common, including shortness of breath, mild headache, or fatigue. To minimize effects, we recommend spending 2-3 days in Quito before the tour for partial acclimatization, staying well-hydrated, avoiding alcohol the night before, and ascending slowly with proper breathing techniques, which our guides will demonstrate. Those with known altitude sensitivity should consult a doctor about preventative medication.",
      },
    ],
  },
  {
    title: "Mindo Cloud Forest & Hummingbird Sanctuary",
    description:
      "Discover the extraordinary biodiversity of Ecuador's cloud forest in Mindo, where you'll observe dozens of hummingbird species, explore orchid gardens, visit a butterfly farm, and experience the lush ecosystem through nature walks and optional adventure activities.",
    city: "Mindo",
    country: "Ecuador",
    region: "Pichincha",
    images: [
      "/images/tours/quito/mindo-hummingbirds.jpg",
      "/images/tours/quito/cloud-forest.jpg",
    ],
    duration: "9 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nature", "Birdwatching", "Eco"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "birdwatching",

    meetingPoint: {
      address: "Plaza Foch, Reina Victoria & Mariscal Foch, Quito",
      coordinates: {
        latitude: -0.2023,
        longitude: -78.4911,
      },
      instructions:
        "Meet at the central monument in Plaza Foch. Guide will be holding a sign with a hummingbird logo.",
      contactNumber: "+593 9 8765 4324",
      contactEmail: "mindo@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-18",
      "2023-12-22",
      "2023-12-25",
      "2023-12-29",
      "2024-01-01",
      "2024-01-05",
      "2024-01-08",
      "2024-01-12",
      "2024-01-15",
      "2024-01-19",
      "2024-01-22",
      "2024-01-26",
      "2024-01-29",
      "2024-02-02",
      "2024-02-05",
      "2024-02-09",
      "2024-02-12",
      "2024-02-16",
      "2024-02-19",
      "2024-02-23",
      "2024-02-26",
    ],

    highlights: [
      "Visit multiple hummingbird feeding stations to see up to 20 different species at close range",
      "Explore an orchid garden with expert explanation of these remarkable adaptable plants",
      "Tour a butterfly garden and witness all stages of butterfly metamorphosis",
      "Guided nature walk through primary cloud forest with chance to spot exotic birds",
      "Optional adventure activities including canopy ziplines or tubing (extra cost)",
    ],

    inclusions: [
      "Transportation from Quito to Mindo and back",
      "Professional bilingual naturalist guide",
      "Entrance to hummingbird sanctuary, butterfly farm, and orchid garden",
      "Guided cloud forest nature walk",
      "Chocolate tasting at local cacao farm",
      "Lunch at traditional Ecuadorian restaurant",
      "Bottled water and tropical fruit snacks",
    ],

    exclusions: [
      "Optional adventure activities (zipline: $20, river tubing: $15)",
      "Alcoholic beverages",
      "Professional bird watching equipment (bring your own binoculars if possible)",
      "Additional food beyond included lunch",
      "Gratuities for guide and driver (recommended)",
      "Rain poncho (available for purchase)",
    ],

    itinerary: [
      "07:00 - Departure from Plaza Foch in Quito",
      "08:45 - Arrive in Mindo town with brief introduction and restroom break",
      "09:15 - Visit first hummingbird sanctuary with expert guide explanation",
      "10:30 - Guided visit to butterfly garden and vivarium",
      "11:30 - Chocolate making demonstration and tasting at local farm",
      "12:30 - Lunch at traditional restaurant featuring local specialties",
      "13:45 - Guided nature walk through cloud forest trails (approximately 1.5 hours)",
      "15:30 - Free time for optional activities (zipline, tubing) or additional birdwatching",
      "16:30 - Begin return journey to Quito",
      "18:00 - Arrive back in Quito at Plaza Foch",
    ],

    faqs: [
      {
        question: "What birds might we see in Mindo?",
        answer:
          "Mindo is renowned for its extraordinary bird diversity with over 500 species recorded. Guaranteed sightings include numerous hummingbird species such as the Violet-tailed Sylph, Booted Racket-tail, and White-necked Jacobin at feeding stations. Other common species include toucans, tanagers, and the iconic Andean Cock-of-the-rock. The best birdwatching occurs early morning, which is why our departure from Quito is early.",
      },
      {
        question: "What is the weather like in Mindo?",
        answer:
          "Mindo has a pleasant subtropical climate with temperatures typically between 15-24°C (59-75°F) year-round. Being a cloud forest, light rain or mist is common even during the 'dry' season. The environment is humid with lush vegetation. We recommend lightweight clothing that dries quickly, sturdy walking shoes with good traction, insect repellent, and a light rain jacket or poncho.",
      },
      {
        question: "Are the optional adventure activities safe?",
        answer:
          "Yes, optional activities like zipline canopy tours and river tubing are operated by established local companies with strong safety records and proper equipment. The ziplines offer spectacular views above the forest canopy across 10-12 platforms of varying heights and speeds. River tubing is generally gentle with some small rapids (difficulty level varies with seasonal water levels). These activities are optional and can be decided upon during the tour.",
      },
    ],
  },
  {
    title: "Quilotoa Crater Lake & Indigenous Villages",
    description:
      "Journey through the Avenue of Volcanoes to the stunning emerald green Quilotoa crater lake, visiting authentic indigenous villages, traditional markets, and artisan workshops while learning about Andean culture and traditions.",
    city: "Quilotoa",
    country: "Ecuador",
    region: "Cotopaxi",
    images: [
      "/images/tours/quito/quilotoa-lake.jpg",
      "/images/tours/quito/indigenous-village.jpg",
    ],
    duration: "11 hours",
    price: "$100",
    rating: 4.8,
    tags: ["Scenic", "Indigenous", "Hiking"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",

    meetingPoint: {
      address: "Hotel Quito, Av. González Suárez N27-142, Quito",
      coordinates: {
        latitude: -0.1932,
        longitude: -78.4773,
      },
      instructions:
        "Meet in the main lobby of Hotel Quito. Guide will be waiting with a clipboard bearing the Paragon Trails logo.",
      contactNumber: "+593 9 8765 4325",
      contactEmail: "quilotoa@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-20",
      "2023-12-23",
      "2023-12-27",
      "2023-12-30",
      "2024-01-03",
      "2024-01-06",
      "2024-01-10",
      "2024-01-13",
      "2024-01-17",
      "2024-01-20",
      "2024-01-24",
      "2024-01-27",
      "2024-01-31",
      "2024-02-03",
      "2024-02-07",
      "2024-02-10",
      "2024-02-14",
      "2024-02-17",
      "2024-02-21",
      "2024-02-24",
      "2024-02-28",
    ],

    highlights: [
      "Marvel at the stunning turquoise Quilotoa crater lake formed in a volcanic caldera",
      "Hike down to the lake shore or around part of the crater rim for spectacular views",
      "Visit Tigua community known for its distinctive folk art paintings",
      "Explore Zumbahua indigenous market (if tour falls on market day - Thursday or Sunday)",
      "Meet local artisans practicing traditional crafts and learn about their techniques",
    ],

    inclusions: [
      "Transportation in comfortable vehicle from Quito",
      "Professional bilingual guide knowledgeable about indigenous cultures",
      "Traditional Andean lunch at local restaurant",
      "Entrance fees to Quilotoa viewpoints",
      "Mule assistance for crater ascent (if needed)",
      "Tigua art workshop visit",
      "Bottled water and altitude-appropriate snacks",
    ],

    exclusions: [
      "Hotel pickup and drop-off (available for additional $15)",
      "Additional activities like kayaking on the crater lake ($10)",
      "Alcoholic beverages",
      "Personal souvenir purchases",
      "Gratuities (recommended but optional)",
    ],

    itinerary: [
      "06:30 - Departure from Hotel Quito",
      "08:00 - Scenic drive through the Avenue of Volcanoes with photo stops",
      "09:15 - Visit Tigua community and art workshop to observe traditional painting",
      "10:30 - Explore Zumbahua indigenous market (on market days) or local community",
      "11:30 - Continue journey to Quilotoa with information about volcanic formation",
      "12:30 - Arrive at Quilotoa crater viewpoint for initial views and orientation",
      "13:00 - Begin hike down to the crater lake (30 minutes descent)",
      "13:45 - Free time at the lake shore for photos and optional kayaking",
      "14:30 - Begin ascent back to crater rim (assistance with mules available)",
      "15:30 - Traditional Ecuadorian lunch at local restaurant",
      "16:30 - Begin return journey to Quito with cultural commentary",
      "18:30 - Arrive back in Quito at Hotel Quito",
    ],

    faqs: [
      {
        question: "How difficult is the hike to Quilotoa Lake?",
        answer:
          "The hike down to the lake is moderately challenging, descending about 280 meters (920 feet) on a sandy trail that takes approximately 30 minutes. The real challenge is the ascent back up, which takes about 45-60 minutes of steady uphill hiking at high altitude (3,900m/12,800ft). For those who find the climb difficult, mules are available for hire (included in tour price). The crater rim also offers spectacular views for those who prefer not to descend.",
      },
      {
        question: "What should I bring for this trip?",
        answer:
          "Essential items include layered clothing (temperatures can range from 5-20°C/41-68°F), sturdy hiking shoes with good traction, sun protection (hat, sunglasses, high SPF sunscreen), rain jacket or poncho, camera, and a small backpack. The high altitude means UV radiation is intense even on cloudy days. Consider bringing trekking poles if you have knee issues, as they can be helpful for the crater descent and ascent.",
      },
      {
        question: "What are Tigua paintings?",
        answer:
          "Tigua art is a distinctive Ecuadorian folk art tradition where indigenous artists paint colorful scenes of Andean rural life, festivals, myths, and cosmology on sheep leather stretched over a wooden frame. This art form originated in the Tigua community in the 1970s and has been passed down through generations. The paintings feature vibrant colors, detailed figures, and portray traditional agricultural activities, celebrations, and the dramatic Andean landscape.",
      },
    ],
  },
  {
    title: "Papallacta Hot Springs & Spa Retreat",
    description:
      "Relax in thermal pools fed by volcanic hot springs in the spectacular Andean highlands at Papallacta, enjoying spa treatments, nature trails, and gourmet cuisine while surrounded by cloud forest and mountain views.",
    city: "Papallacta",
    country: "Ecuador",
    region: "Napo",
    images: [
      "/images/tours/quito/papallacta-hotsprings.jpg",
      "/images/tours/quito/andean-spa.jpg",
    ],
    duration: "8 hours",
    price: "$130",
    rating: 4.7,
    tags: ["Hot Springs", "Wellness", "Relaxation"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "wellness",

    meetingPoint: {
      address: "Casa Gangotena Hotel, Bolívar Oe6-41, Quito",
      coordinates: {
        latitude: -0.22,
        longitude: -78.5145,
      },
      instructions:
        "Meet in the lobby of Casa Gangotena Hotel in the historic center. Your driver will be wearing a black polo shirt with the Paragon Trails logo.",
      contactNumber: "+593 9 8765 4326",
      contactEmail: "hotsprings@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-21",
      "2023-12-24",
      "2023-12-28",
      "2023-12-31",
      "2024-01-04",
      "2024-01-07",
      "2024-01-11",
      "2024-01-14",
      "2024-01-18",
      "2024-01-21",
      "2024-01-25",
      "2024-01-28",
      "2024-02-01",
      "2024-02-04",
      "2024-02-08",
      "2024-02-11",
      "2024-02-15",
      "2024-02-18",
      "2024-02-22",
      "2024-02-25",
      "2024-02-29",
    ],

    highlights: [
      "Soak in multiple thermal pools with temperatures ranging from 36°C to 40°C (97°F to 104°F)",
      "Optional spa treatments including volcanic mud wraps and massages",
      "Explore cloud forest trails with opportunities to spot native birds and plants",
      "Enjoy gourmet Ecuadorian cuisine highlighting local Andean ingredients",
      "Experience the contrast of cool mountain air with warm thermal waters",
    ],

    inclusions: [
      "Round-trip private transportation from Quito",
      "Entrance to exclusive Papallacta Spa thermal pools",
      "Gourmet lunch with Andean specialties",
      "Use of towels, lockers, and facilities",
      "Access to spa relaxation areas",
      "Access to nature trails and viewpoints",
      "Herbal tea service",
    ],

    exclusions: [
      "Optional spa treatments (massages from $40, facials from $35)",
      "Alcoholic beverages",
      "Swimwear (bring your own or available for purchase)",
      "Private pool cabins (available for extra fee)",
      "Gratuities for spa staff and driver",
    ],

    itinerary: [
      "08:30 - Pickup from Casa Gangotena Hotel",
      "10:00 - Scenic mountain drive through Cayambe-Coca Ecological Reserve",
      "10:30 - Arrive at Papallacta Hot Springs Resort & Spa",
      "10:45 - Orientation tour of facilities and changing areas",
      "11:00 - First thermal pool session with rotation through various temperature pools",
      "12:30 - Optional spa treatments (pre-booking recommended) or guided nature walk",
      "13:30 - Gourmet lunch featuring Andean cuisine at resort restaurant",
      "14:30 - Second thermal pool session or relaxation time",
      "15:30 - Optional short hike to mountain viewpoint",
      "16:00 - Final relaxation time with herbal tea service",
      "16:30 - Begin return journey to Quito",
      "18:00 - Arrive back in Quito at Casa Gangotena Hotel",
    ],

    faqs: [
      {
        question: "What should I bring for the hot springs?",
        answer:
          "Essential items include swimwear, flip-flops or water shoes, a change of clothes, and a waterproof bag for wet items. We provide towels, bathrobes, and lockers. The air temperature in Papallacta can be cool (10-15°C/50-59°F), so bringing a warm layer for between pool sessions is recommended. Don't forget sunscreen, as even on cloudy days the UV exposure at high altitude is significant.",
      },
      {
        question: "Are the hot springs natural?",
        answer:
          "Yes, Papallacta's thermal waters are 100% natural, heated by underground volcanic activity. The waters emerge from springs at temperatures up to 70°C (158°F) and are cooled to comfortable bathing temperatures. These mineral-rich waters contain sulfates, sodium, calcium, chloride, and traces of magnesium, which are believed to have therapeutic properties for skin conditions, muscle tension, and circulation.",
      },
      {
        question: "What spa treatments do you recommend?",
        answer:
          "The most popular treatment is the 'Andean Ritual' ($60, 60 minutes), which combines a volcanic mud wrap with a massage using local aromatic oils. For those with muscle tension from hiking or travel, the deep tissue 'Mountain Relief' massage ($45, 45 minutes) is excellent. All treatments should be booked in advance as availability on the day is limited.",
      },
    ],
  },
  {
    title: "Teleferiqo & Pichincha Volcano Hike",
    description:
      "Ascend Quito's dramatic mountainside by cable car to 4,100m, then hike to the summit of Rucu Pichincha volcano at 4,700m for panoramic views of Quito and surrounding volcanoes on this challenging high-altitude adventure.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha",
    images: [
      "/images/tours/quito/teleferico.jpg",
      "/images/tours/quito/pichincha-hike.jpg",
    ],
    duration: "7 hours",
    price: "$80",
    rating: 4.6,
    tags: ["Hiking", "Volcano", "Views"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Teleferiqo Base Station, Av. Occidental, Quito",
      coordinates: {
        latitude: -0.1921,
        longitude: -78.5175,
      },
      instructions:
        "Meet at the ticket office inside the Teleferiqo base station complex. Your guide will be holding a sign with 'Pichincha Hike' written on it.",
      contactNumber: "+593 9 8765 4327",
      contactEmail: "pichincha@paragontrails.com",
    },

    availableDates: [
      "2023-12-18",
      "2023-12-22",
      "2023-12-26",
      "2023-12-30",
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
      "Ride the Teleferiqo cable car with spectacular ascending views of Quito",
      "Hike to the summit of Rucu Pichincha at 4,700m (15,400ft)",
      "See up to 20 volcanoes from the summit on clear days including Cotopaxi and Chimborazo",
      "Experience high Andean páramo ecosystem with unique vegetation",
      "Panoramic views of Quito sprawling along the valley below",
    ],

    inclusions: [
      "Professional mountain guide certified in high-altitude first aid",
      "Teleferiqo cable car tickets (round-trip)",
      "Technical hiking equipment if needed (poles, gloves)",
      "Energy snacks and bottled water",
      "High-energy lunch pack",
      "Emergency oxygen and first aid kit",
      "Certificate of achievement",
    ],

    exclusions: [
      "Transportation to/from the Teleferiqo base station",
      "Additional food and beverages",
      "Personal hiking gear (backpack, layers, hat, etc.)",
      "Sunscreen and personal medications",
      "Gratuities for guide (recommended)",
      "Hiking boots (must provide your own suitable footwear)",
    ],

    itinerary: [
      "07:30 - Meet at Teleferiqo base station for equipment check and briefing",
      "08:00 - Teleferiqo cable car ride to Cruz Loma station (4,100m/13,450ft)",
      "08:30 - Acclimatization and orientation at the upper station",
      "09:00 - Begin gradual ascent hike through páramo landscape",
      "10:30 - First major rest stop with snacks and hydration",
      "11:30 - Begin more challenging section with some rocky terrain",
      "12:30 - Final ascent to Rucu Pichincha summit (4,700m/15,400ft)",
      "13:00 - Celebration at summit with lunch and panoramic views",
      "13:30 - Begin descent via same route",
      "15:00 - Arrive back at cable car station",
      "15:30 - Return by Teleferiqo to base station",
      "16:00 - Tour concludes at base station with certificate presentation",
    ],

    faqs: [
      {
        question: "How difficult is this hike?",
        answer:
          "This is a challenging hike suitable for people with good fitness levels and some hiking experience. The trail covers 10km (6.2 miles) round-trip with 600m (1,970ft) elevation gain from the cable car's upper station. The main challenges are the high altitude (4,100-4,700m / 13,450-15,400ft), which significantly impacts stamina and breathing, and some rocky, steep sections near the summit that require careful footing and occasionally using hands for balance.",
      },
      {
        question: "What should I wear and bring?",
        answer:
          "Proper gear is essential: hiking boots with ankle support and good tread, layered clothing (moisture-wicking base, insulating mid-layer, waterproof/windproof outer layer), warm hat, gloves, sun hat, sunglasses, and high-SPF sunscreen. Weather can change rapidly from sunny to cold, windy, or rainy. A backpack with at least 2 liters of water, personal medications, camera, and extra snacks is recommended.",
      },
      {
        question: "What are the risks of high-altitude hiking?",
        answer:
          "Hiking at elevations above 4,000m (13,000ft) carries risks including altitude sickness, which can affect anyone regardless of fitness level. Symptoms include headache, nausea, dizziness, and fatigue. Our guides are trained to monitor for these signs and carry emergency oxygen. To minimize risk, we recommend at least 2-3 days acclimatization in Quito before this hike, staying hydrated, avoiding alcohol the day before, and maintaining a slow, steady pace with proper breathing techniques.",
      },
    ],
  },
  {
    title: "Quito Culinary Experience & Market Tour",
    description:
      "Explore Quito's gastronomy from indigenous roots to modern fusion with visits to local markets, cooking workshops, and tastings of traditional dishes like locro soup, empanadas, and ceviche, paired with craft beverages.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha",
    images: [
      "/images/tours/quito/food-market.jpg",
      "/images/tours/quito/cooking-workshop.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.9,
    tags: ["Food", "Cooking", "Market"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Plaza del Teatro, Guayaquil y Manabí, Quito Historic Center",
      coordinates: {
        latitude: -0.2179,
        longitude: -78.5096,
      },
      instructions:
        "Meet at the statue in Plaza del Teatro. Your culinary guide will be holding a wooden spoon with a red ribbon.",
      contactNumber: "+593 9 8765 4328",
      contactEmail: "quitofood@paragontrails.com",
    },

    availableDates: [
      "2023-12-19",
      "2023-12-22",
      "2023-12-26",
      "2023-12-29",
      "2024-01-02",
      "2024-01-05",
      "2024-01-09",
      "2024-01-12",
      "2024-01-16",
      "2024-01-19",
      "2024-01-23",
      "2024-01-26",
      "2024-01-30",
      "2024-02-02",
      "2024-02-06",
      "2024-02-09",
      "2024-02-13",
      "2024-02-16",
      "2024-02-20",
      "2024-02-23",
      "2024-02-27",
    ],

    highlights: [
      "Explore vibrant local markets with expert guidance on unique Andean ingredients",
      "Hands-on cooking workshop to prepare traditional Ecuadorian dishes",
      "Sample exotic fruits found only in equatorial regions",
      "Learn to make authentic ceviche and empanadas from scratch",
      "Tastings of craft beer, coffee, and chocolate produced in Ecuador",
    ],

    inclusions: [
      "Professional culinary guide",
      "Food market tour with tastings",
      "Hands-on cooking class with instruction",
      "Full meal of prepared dishes",
      "Coffee tasting session",
      "Craft beer or chocolate tasting",
      "Recipe booklet to take home",
      "All ingredients and cooking equipment",
      "Market shopping bag souvenir",
    ],

    exclusions: [
      "Transportation to/from meeting point",
      "Additional food and drinks beyond included tastings",
      "Personal purchases at the market",
      "Alcoholic beverages beyond the included craft beer tasting",
      "Gratuities (recommended but optional)",
    ],

    itinerary: [
      "09:00 - Meet at Plaza del Teatro for introductions",
      "09:15 - Walk to San Francisco Market with explanation of Ecuadorian cuisine history",
      "09:30 - Guided market tour with vendor interactions and ingredient explanations",
      "10:30 - Exotic fruit tasting session with 8-10 unique Andean and Amazonian fruits",
      "11:00 - Visit specialist food shops for chocolate and coffee tastings",
      "11:45 - Travel to cooking school location (10-minute walk)",
      "12:00 - Begin cooking workshop with instruction on preparing 3-4 traditional dishes",
      "13:30 - Enjoy the prepared meal together with craft beer pairing",
      "14:30 - Recipe discussion and culinary tips",
      "15:00 - Tour concludes with recipe booklet distribution",
    ],

    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "The cooking portion typically focuses on 3-4 traditional Ecuadorian dishes that may include: locro de papa (potato and cheese soup with avocado), empanadas de viento (cheese-filled pastries), ceviche (with variations using shrimp, fish, or hearts of palm for vegetarians), and aji sauce (traditional Ecuadorian hot sauce). The menu may vary slightly based on seasonal ingredients and group preferences.",
      },
      {
        question: "Do I need cooking experience to participate?",
        answer:
          "No prior cooking experience is necessary! The class is designed for all skill levels, with step-by-step instruction from our chef. You'll learn basic techniques specific to Ecuadorian cuisine in a relaxed, supportive environment. The recipes are chosen to be relatively simple but authentic, allowing even beginners to achieve excellent results.",
      },
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, gluten-free, and most other dietary restrictions with advance notice. Ecuadorian cuisine naturally includes many plant-based dishes, and we can adapt most traditional recipes. Please inform us of any allergies or restrictions when booking so we can prepare appropriate alternatives while still providing an authentic culinary experience.",
      },
    ],
  },
  {
    title: "Quito By Night & Panecillo Viewpoint",
    description:
      "Experience Quito's illuminated historic center on this evening tour featuring beautifully lit churches, plazas, and traditional neighborhoods, culminating with panoramic city views from the Panecillo hill and a dinner showcasing local cuisine.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha",
    images: [
      "/images/tours/quito/quito-night.jpg",
      "/images/tours/quito/panecillo-viewpoint.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Evening", "Cultural", "Viewpoints"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Hotel Plaza Grande, Chile y García Moreno, Quito",
      coordinates: {
        latitude: -0.2198,
        longitude: -78.5121,
      },
      instructions:
        "Meet in the lobby of Hotel Plaza Grande. Guide will be holding a light-up sign with 'Night Tour' written on it.",
      contactNumber: "+593 9 8765 4329",
      contactEmail: "quitonight@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],

    highlights: [
      "See Quito's UNESCO World Heritage historic center beautifully illuminated at night",
      "Visit the spectacular gold-leaf interior of La Compañía Church with special evening lighting",
      "Experience a traditional Ecuadorian dinner with live Andean music",
      "Enjoy panoramic views of Quito's lights from the Panecillo hilltop",
      "Learn about the legends and stories of colonial Quito",
    ],

    inclusions: [
      "Professional bilingual guide",
      "Private transportation during the tour",
      "Special evening entrance to La Compañía Church",
      "Traditional dinner with non-alcoholic beverage",
      "Live Andean music performance during dinner",
      "Hotel drop-off after tour",
    ],

    exclusions: [
      "Alcoholic beverages (available for purchase)",
      "Additional food beyond included dinner",
      "Souvenir photos at viewpoints (available for purchase)",
      "Gratuities for guide and musicians",
      "Hotel pickup (only drop-off is included)",
    ],

    itinerary: [
      "18:00 - Meet at Hotel Plaza Grande for tour introduction",
      "18:15 - Walking tour of illuminated historic center including Plaza Grande and Presidential Palace",
      "18:45 - Visit La Compañía Church with its spectacular gold interior under evening lighting",
      "19:30 - Walk through La Ronda traditional street with artisan workshops",
      "20:00 - Drive to El Panecillo hill for panoramic night views of Quito",
      "20:30 - Traditional dinner at restaurant with Andean music performance",
      "21:45 - Return drive through illuminated city with photo stops",
      "22:00 - Tour concludes with drop-off at your hotel",
    ],

    faqs: [
      {
        question: "Is Quito safe to explore at night?",
        answer:
          "The areas we visit on this tour are well-patrolled, illuminated zones that are popular with tourists and locals alike. Our guide and private transportation ensure your safety throughout the experience. As with any city, we recommend standard precautions like keeping valuables secure and staying with the group. The historic center has significant police presence in the evening hours.",
      },
      {
        question: "What kind of Andean music will we hear?",
        answer:
          "The dinner includes a performance featuring traditional Ecuadorian Andean music played on instruments such as the zampoña (pan flutes), quena (Andean flute), charango (small stringed instrument), and bombo (drum). Musicians typically perform folk songs from different regions of Ecuador and the broader Andean region, often encouraging audience participation for a fun, interactive experience.",
      },
      {
        question: "What is served at the traditional dinner?",
        answer:
          "The dinner features classic Ecuadorian highlands cuisine, typically including options such as locro de papa (potato soup with cheese and avocado), seco de chivo (goat stew), llapingachos (potato pancakes), or fritada (fried pork). Vegetarian options are available with advance notice. The meal is accompanied by traditional sides like choclo (Andean corn), plantains, and fresh tropical fruit juice.",
      },
    ],
  },
];

export default quitoTours;
