import { Tour } from "@/lib/interfaces/services/tours";

export const mtoWaMbuVillageTours: Tour[] = [
  {
    title: "Cultural Mosaic: Tribes of Mto wa Mbu",
    description:
      "Experience the cultural diversity of this unique village where over 120 tribes coexist harmoniously. Visit local homes, farms, and workshops while learning about traditional practices and daily life.",
    city: "Mto wa Mbu",
    country: "Tanzania",
    region: "Arusha",
    images: [
      "/images/tours/mto-wa-mbu-village/banana-plantation.jpg",
      "/images/tours/mto-wa-mbu-village/traditional-art.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Cultural", "Rural", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    
    meetingPoint: {
      address: "Mto wa Mbu Cultural Tourism Office, Main Street, Mto wa Mbu",
      coordinates: {
        latitude: -3.3521,
        longitude: 35.8454,
      },
      instructions: "Meet at the Cultural Tourism Office in the center of Mto wa Mbu village. Look for our guide wearing a green vest with 'Cultural Guide' printed on it.",
      contactNumber: "+255 763 482 591",
      contactEmail: "mtowambu@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-15", "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", 
      "2024-01-05", "2024-01-07", "2024-01-12", "2024-01-14", "2024-01-19", "2024-01-21", "2024-01-26", "2024-01-28",
      "2024-02-02", "2024-02-04", "2024-02-09", "2024-02-11", "2024-02-16", "2024-02-18", "2024-02-23", "2024-02-25",
    ],
    
    highlights: [
      "Visit a traditional Maasai boma and learn about their pastoral lifestyle",
      "Explore banana plantations and learn about the 30+ varieties grown in the region",
      "Sample local banana beer made using traditional brewing methods",
      "Meet artisans creating vibrant Tinga Tinga paintings and wood carvings",
      "Visit a local school and interact with students (when in session)",
    ],
    
    inclusions: [
      "Local English-speaking cultural guide",
      "All activity and entrance fees for mentioned sites",
      "Traditional lunch prepared by local family",
      "Banana beer tasting experience",
      "Contribution to community development projects",
      "Bottled water",
    ],
    
    exclusions: [
      "Transportation to Mto wa Mbu (can be arranged for additional fee)",
      "Gratuities for guide (recommended but at your discretion)",
      "Personal purchases from artisan workshops",
      "Additional food and beverages beyond included lunch",
    ],
    
    itinerary: [
      "09:00 - Meet at Cultural Tourism Office for introductions",
      "09:15 - Walk through village center with orientation talk",
      "09:45 - Visit local school and meet students (when in session)",
      "10:30 - Tour of banana plantations and agricultural areas",
      "11:15 - Visit to traditional banana beer brewing demonstration",
      "11:45 - Meet with local artisans in their workshops",
      "12:30 - Traditional lunch with local family",
      "13:30 - Visit Maasai boma to learn about pastoral traditions",
      "14:15 - Free time for photos and personal exploration",
      "14:45 - Return to Cultural Tourism Office where tour concludes",
    ],
    
    faqs: [
      {
        question: "Why is this village called 'Mto wa Mbu'?",
        answer: "The name 'Mto wa Mbu' means 'River of Mosquitoes' in Swahili, named after the nearby river. Despite its name, the village is actually quite pleasant! What makes it unique is that it's one of the few places in Tanzania where representatives of all 120+ tribal groups live together harmoniously, creating a vibrant cultural mosaic you won't find elsewhere."
      },
      {
        question: "What makes this tour different from other cultural experiences?",
        answer: "Unlike many staged cultural shows, this tour offers authentic interaction with local community members going about their daily lives. All guides are from the village itself, providing genuine insider perspectives. The tour directly benefits community projects, with a significant portion of proceeds supporting the local school, water projects, and healthcare initiatives."
      },
      {
        question: "Is this tour suitable for children?",
        answer: "Yes, this tour is family-friendly and suitable for children of all ages. Kids especially enjoy meeting school children, watching artisans at work, and tasting tropical fruits. The walking pace is leisurely with plenty of shade breaks, making it manageable even in warm weather. For very young children, parents might consider bringing a carrier as some paths may not be stroller-friendly."
      },
    ],
  },
  
  {
    title: "Mto wa Mbu Bicycle Safari & Village Life",
    description:
      "Explore the diverse landscapes and communities surrounding Mto wa Mbu on two wheels. Cycle through rice paddies, banana plantations, and acacia woodlands while meeting local farmers and artisans along the way.",
    city: "Mto wa Mbu",
    country: "Tanzania",
    region: "Arusha",
    images: [
      "/images/tours/mto-wa-mbu-village/bicycle-tour.jpg",
      "/images/tours/mto-wa-mbu-village/rice-fields.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Cycling", "Wildlife", "Active"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    
    meetingPoint: {
      address: "Twiga Campsite, Lake Manyara Road, Mto wa Mbu",
      coordinates: {
        latitude: -3.3536,
        longitude: 35.8461,
      },
      instructions: "Meet at the reception area of Twiga Campsite, about 1km from the main village center. Our bicycle equipment will be set up in the shade.",
      contactNumber: "+255 763 482 592",
      contactEmail: "bikesafari@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-16", "2023-12-18", "2023-12-20", "2023-12-22", "2023-12-24", 
      "2024-01-06", "2024-01-08", "2024-01-13", "2024-01-15", "2024-01-20", "2024-01-22", "2024-01-27", "2024-01-29",
      "2024-02-03", "2024-02-05", "2024-02-10", "2024-02-12", "2024-02-17", "2024-02-19", "2024-02-24", "2024-02-26",
    ],
    
    highlights: [
      "Cycle through diverse landscapes from farmlands to wilderness areas",
      "Spot wildlife like baboons, monkeys, and abundant bird species",
      "Visit rice paddies and learn about traditional irrigation systems",
      "Meet local farmers and sample fresh tropical fruits",
      "Enjoy panoramic views of the Great Rift Valley escarpment",
    ],
    
    inclusions: [
      "Quality mountain bike with helmet",
      "Local English-speaking cycling guide",
      "Support vehicle for tired riders",
      "Bottled water and energy snacks",
      "Traditional Tanzanian lunch at local restaurant",
      "Wildlife spotting guide",
      "Bike repair kit and first aid supplies",
    ],
    
    exclusions: [
      "Transportation to meeting point",
      "Gratuities for guide and support team",
      "Personal items and souvenirs",
      "Additional beverages beyond water provided",
    ],
    
    itinerary: [
      "08:00 - Meet at Twiga Campsite for bike fitting and safety briefing",
      "08:30 - Begin cycling through village outskirts and farms",
      "09:15 - Visit rice paddies and irrigation canals",
      "10:00 - Refreshment break at local fruit stand with tastings",
      "10:30 - Continue cycling toward acacia woodlands with wildlife viewing",
      "11:15 - Visit traditional irrigation system with local guide",
      "12:00 - Cycle to viewpoint overlooking Lake Manyara",
      "12:30 - Return to village for traditional lunch",
      "13:30 - Visit local craftspeople and workshops",
      "14:30 - Return to starting point, tour conclusion",
    ],
    
    faqs: [
      {
        question: "What level of fitness is required for this tour?",
        answer: "This tour is designed for casual cyclists with basic fitness. The terrain is mostly flat with some gentle slopes, covering approximately 15-20km at a leisurely pace with frequent stops. A support vehicle follows the group for anyone who needs a break. No technical mountain biking skills are required."
      },
      {
        question: "Will we see wildlife on this bicycle tour?",
        answer: "Yes! While not a traditional safari, the tour passes through areas where you'll likely spot wildlife. Common sightings include olive baboons, vervet monkeys, bushbuck, dik-dik, and numerous bird species. Occasionally, elephants can be spotted in the distance near the forest edge. Our guides are skilled at spotting wildlife while ensuring your safety."
      },
      {
        question: "What should I wear for cycling?",
        answer: "Wear comfortable, breathable clothing suitable for warm weather. Closed shoes are required (athletic shoes are perfect). We recommend long, lightweight pants or shorts that reach the knee, and shirts that cover your shoulders for sun protection. Don't forget sunglasses, sunscreen, and a hat that fits under your helmet. We provide water, but a small backpack for personal items is useful."
      },
    ],
  },
  
  {
    title: "Farm-to-Table: Mto wa Mbu Culinary Adventure",
    description:
      "Discover the rich agricultural heritage of Mto wa Mbu through its cuisine. Harvest fresh ingredients from local farms, learn traditional cooking methods, and prepare an authentic Tanzanian feast with guidance from village cooks.",
    city: "Mto wa Mbu",
    country: "Tanzania",
    region: "Arusha",
    images: [
      "/images/tours/mto-wa-mbu-village/cooking-class.jpg",
      "/images/tours/mto-wa-mbu-village/farm-harvest.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cooking", "Food", "Agriculture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    
    meetingPoint: {
      address: "Africa Amini Life, Mto wa Mbu Main Road",
      coordinates: {
        latitude: -3.3529,
        longitude: 35.8447,
      },
      instructions: "Meet at the Africa Amini Life Center, which has a prominent sign visible from the main road. Look for your guide wearing a chef's apron.",
      contactNumber: "+255 763 482 593",
      contactEmail: "cooking@paragontrails.com",
    },
    
    availableDates: [
      "2023-12-17", "2023-12-19", "2023-12-21", "2023-12-23", "2023-12-27", 
      "2024-01-07", "2024-01-14", "2024-01-21", "2024-01-28",
      "2024-02-04", "2024-02-11", "2024-02-18", "2024-02-25",
    ],
    
    highlights: [
      "Visit local farms to harvest fresh ingredients for your meal",
      "Learn traditional cooking methods including wood-fire cooking",
      "Master authentic recipes like ugali, banana stew, and vegetable curries",
      "Discover the medicinal and culinary uses of local spices and herbs",
      "Enjoy a feast of your prepared dishes in a traditional setting",
    ],
    
    inclusions: [
      "Local chef instructor and culinary guide",
      "All ingredients and cooking equipment",
      "Farm visits with harvesting experience",
      "Full meal featuring dishes you've prepared",
      "Printed recipe cards to take home",
      "Traditional cooking methods demonstration",
      "Local beer, wine or soft drinks with meal",
    ],
    
    exclusions: [
      "Transportation to Mto wa Mbu",
      "Additional alcoholic beverages beyond those included",
      "Gratuities for chef and farm hosts",
      "Personal cooking equipment to take home",
    ],
    
    itinerary: [
      "09:00 - Meet at Africa Amini Life Center for introductions",
      "09:15 - Tour of herb garden with explanation of local ingredients",
      "09:45 - Visit banana plantation to harvest cooking bananas",
      "10:30 - Stop at local market to select remaining ingredients",
      "11:15 - Return to cooking center to begin food preparation",
      "11:30 - Learn fire management and traditional cooking techniques",
      "12:00 - Prepare main dishes including ugali and vegetable sides",
      "13:30 - Cook banana-based dishes and local specialties",
      "14:30 - Feast on prepared meal with local drinks",
      "15:30 - Recipe sharing and cooking tips, tour conclusion",
    ],
    
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer: "The cooking class focuses on authentic Tanzanian cuisine with local specialties. You'll learn to prepare staples like ugali (cornmeal porridge), various banana-based dishes (as Mto wa Mbu is famous for its 30+ banana varieties), vegetable curries with local greens, beans cooked with coconut milk, and tropical fruit desserts. Vegetarian options are always available, and the menu varies slightly based on seasonal ingredients."
      },
      {
        question: "Do I need previous cooking experience?",
        answer: "No prior cooking experience is necessary! Our local cooks provide step-by-step guidance suitable for all skill levels. The class focuses on simple techniques using basic equipment, similar to how most Tanzanian families cook daily. Even culinary novices will be able to successfully prepare delicious dishes."
      },
      {
        question: "Is this class suitable for children?",
        answer: "Yes, children are welcome and often enjoy the hands-on nature of harvesting ingredients and helping with simple tasks like kneading dough or mashing bananas. For safety reasons, activities involving open fire or sharp implements will be supervised closely or handled by adults. Please inform us of children's ages when booking so we can prepare appropriate activities."
      },
    ],
  },
];

export default mtoWaMbuVillageTours;
