import { Tour } from "@/lib/interfaces/services/tours";
export const chefchaouenTours: Tour[] = [
  {
    title: "Blue City Walking Tour & Local Artisans",
    description:
      "Explore the enchanting blue streets of Chefchaouen with a local guide, discovering hidden corners, meeting artisans in their workshops, and learning the fascinating history behind the city's distinctive blue-washed buildings.",
    city: "Chefchaouen",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/blue-streets.jpg",
      "/images/tours/chefchaouen/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Culture", "Photography", "Artisans"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Plaza Uta el-Hammam, Chefchaouen Medina, Morocco",
      coordinates: {
        latitude: 35.1686,
        longitude: -5.2636,
      },
      instructions:
        "Meet your guide at the central fountain in Plaza Uta el-Hammam, the main square of Chefchaouen's medina. The guide will be wearing a blue hat and holding a sign with 'Blue City Tour' written on it. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+212 539-986-123",
      contactEmail: "bluecity@paragontrails.com",
    },
    availableDates: [
      "2024-04-02",
      "2024-04-09",
      "2024-04-16",
      "2024-04-23",
      "2024-04-30",
      "2024-05-07",
      "2024-05-14",
      "2024-05-21",
      "2024-05-28",
      "2024-06-04",
      "2024-06-11",
      "2024-06-18",
      "2024-06-25",
    ],
    highlights: [
      "Wander through maze-like blue streets with a knowledgeable local guide",
      "Learn the historical and cultural reasons behind the blue-painted walls",
      "Visit local artisan workshops and see traditional crafts being made",
      "Discover hidden viewpoints perfect for photography",
      "Experience authentic Moroccan tea in a traditional blue home",
    ],
    inclusions: [
      "Expert local guide fluent in English",
      "Visit to 2-3 artisan workshops",
      "Traditional Moroccan mint tea and cookies",
      "Small group experience (maximum 8 people)",
      "Map of Chefchaouen's medina",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch or additional food and drinks",
      "Gratuities",
      "Artisan products or souvenirs",
    ],
    itinerary: [
      "09:00 AM - Meet guide at Plaza Uta el-Hammam",
      "09:15 AM - Historical introduction to Chefchaouen",
      "09:45 AM - Walk through the blue streets and hidden corners",
      "10:30 AM - Visit local weaver's workshop",
      "11:15 AM - Explore traditional oil press and soap making",
      "12:00 PM - Tea break in a local home",
      "12:45 PM - Tour conclusion in the central plaza with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. 50% refund for cancellations 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    faqs: [
      {
        question: "Why is Chefchaouen painted blue?",
        answer:
          "There are several theories about the origin of Chefchaouen's distinctive blue color. Some say it was introduced by Jewish refugees in the 1930s, as blue represents the sky and heaven in Jewish tradition. Others suggest the blue keeps mosquitos away or helps keep buildings cool. Our tour explores these theories and the cultural significance of the color, which continues to be maintained as part of the city's heritage and identity.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we will explore uneven cobblestone streets. Dress in layers, as mornings can be cool but afternoons warm up. A hat and sunscreen are advisable, especially in summer. Modest clothing is appreciated in this traditional city.",
      },
      {
        question: "Is this tour accessible for people with mobility issues?",
        answer:
          "Chefchaouen's medina features many stairs, steep inclines, and uneven cobblestone paths, making it challenging for those with mobility limitations. We can adapt a modified route avoiding the steepest areas, but some uneven terrain is unavoidable. Please contact us in advance to discuss specific needs and we'll do our best to accommodate.",
      },
      {
        question: "Will I have time to take photographs during the tour?",
        answer:
          "Absolutely! We understand that Chefchaouen is a photographer's paradise. The tour includes several stops at scenic viewpoints and particularly photogenic streets. Your guide will point out the best photo spots and allow time for photography throughout the experience. Early morning tours often provide the best light and fewer crowds.",
      },
      {
        question: "What's the history of Chefchaouen?",
        answer:
          "Chefchaouen was founded in 1471 by Moulay Ali Ben Moussa Ben Rached El Alami as a fortress to fight Portuguese invasions of northern Morocco. The city served as a Moorish refuge for those fleeing Spain during the Reconquista. Later, it was annexed by the Spanish as part of Spanish Morocco in the early 20th century, gaining independence with the rest of Morocco in 1956. Throughout its history, the city has been shaped by Andalusian, Jewish, and Berber influences, creating its unique cultural character that we explore during the tour.",
      },
    ],
  },
  {
    title: "Rif Mountains Day Trek & Berber Villages",
    description:
      "Journey into the stunning Rif Mountains surrounding Chefchaouen, hiking through pine forests to traditional Berber villages where you'll enjoy home-cooked meals with local families and learn about their sustainable mountain lifestyle.",
    city: "Chefchaouen",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/rif-mountains.jpg",
      "/images/tours/chefchaouen/berber-village.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Hiking", "Nature", "Cultural"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Ras El Ma (Water Spring), Chefchaouen, Morocco",
      coordinates: {
        latitude: 35.171,
        longitude: -5.2554,
      },
      instructions:
        "Meet your guide at the water spring (Ras El Ma) at the eastern edge of the medina. Follow the sound of the running water uphill from Avenue Hassan II. Your guide will be wearing a traditional Berber hat and holding a hiking pole. Please arrive 15 minutes early for briefing.",
      contactNumber: "+212 539-987-654",
      contactEmail: "mountains@paragontrails.com",
    },
    availableDates: [
      "2024-04-05",
      "2024-04-12",
      "2024-04-19",
      "2024-04-26",
      "2024-05-03",
      "2024-05-10",
      "2024-05-17",
      "2024-05-24",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
      "2024-06-28",
    ],
    highlights: [
      "Trek through diverse landscapes of the Rif Mountains",
      "Visit authentic Berber villages untouched by tourism",
      "Enjoy home-cooked traditional meal with a local family",
      "Learn about traditional Berber farming and lifestyle",
      "Experience panoramic views of Chefchaouen and the surrounding valleys",
    ],
    inclusions: [
      "Professional mountain guide",
      "Traditional Berber lunch in a village home",
      "Water and trail snacks",
      "Walking poles (if requested)",
      "Basic first aid kit",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Personal hiking equipment",
      "Gratuities",
    ],
    itinerary: [
      "09:00 AM - Meet guide at Ras El Ma",
      "09:15 AM - Begin trek up mountain trail",
      "10:30 AM - First viewpoint rest stop",
      "11:15 AM - Continue hiking through pine forests",
      "12:00 PM - Arrive at first Berber village",
      "12:30 PM - Traditional lunch with local family",
      "02:00 PM - Visit second village and meet local artisans",
      "03:30 PM - Begin descent back to Chefchaouen",
      "04:30 PM - Return to city and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "How difficult is the hike?",
        answer:
          "This is a moderate trek covering approximately 8km with an elevation gain of about 400 meters. The pace is leisurely with plenty of stops at viewpoints and villages. Most reasonably fit people without serious health conditions can complete this trek comfortably. The trail follows mountain paths that can be uneven in places, so proper hiking shoes are recommended. We can adjust the route for different fitness levels with advance notice.",
      },
      {
        question: "What should I bring for the trek?",
        answer:
          "Please wear sturdy hiking shoes, bring a refillable water bottle, sunscreen, a hat, and a light jacket for cooler mountain temperatures. We provide a packed lunch with local specialties. A small backpack is recommended to carry your personal items.",
      },
      {
        question: "Is the trek suitable for children?",
        answer:
          "This trek is appropriate for children aged 10 and older who are accustomed to hiking. The path is not suitable for strollers, and young children would need to be carried for significant portions. For families with younger children, we offer alternative, shorter village visits with less demanding walks.",
      },
      {
        question: "Who are the Berber people?",
        answer:
          "The Berbers, or Amazigh people, are the indigenous inhabitants of North Africa, with a history dating back more than 4,000 years. In the Rif Mountains, Berber communities have maintained their distinctive language, crafts, agricultural practices, and social traditions despite centuries of various influences. During our trek, you'll learn about their unique cultural identity, sustainable farming methods, and how they've adapted to modern challenges while preserving their heritage.",
      },
      {
        question: "What will we eat for lunch in the Berber village?",
        answer:
          "Lunch typically consists of fresh, homemade Berber specialties prepared by our host family. This often includes tagine (slow-cooked stew with vegetables and either chicken or lamb), fresh bread baked in traditional wood-fired ovens, locally grown olives, vegetable salads seasoned with mountain herbs, and fresh fruits. The meal concludes with sweet mint tea prepared in the traditional Moroccan style. Vegetarian options are available with advance notice.",
      },
    ],
  },
  {
    title: "Chefchaouen Photography Masterclass",
    description:
      "Perfect your photography skills in one of the world's most photogenic cities with expert guidance on capturing Chefchaouen's unique blue palette, atmospheric light, and architectural details during optimal lighting conditions.",
    city: "Chefchaouen",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/photography-workshop.jpg",
      "/images/tours/chefchaouen/blue-doorways.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Photography", "Artistic", "Architecture"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
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
      address: "Hotel Parador, Plaza El Majzen, Chefchaouen, Morocco",
      coordinates: {
        latitude: 35.1692,
        longitude: -5.2623,
      },
      instructions:
        "Meet in the lobby of Hotel Parador, located at the entrance to the medina. Your photography instructor will be waiting with professional camera equipment. Please arrive 10 minutes early with your camera gear ready.",
      contactNumber: "+212 539-986-324",
      contactEmail: "photography@paragontrails.com",
    },
    availableDates: [
      "2024-04-05",
      "2024-04-19",
      "2024-05-03",
      "2024-05-17",
      "2024-05-31",
      "2024-06-14",
      "2024-06-28",
    ],
    highlights: [
      "Learn professional techniques for capturing the blue city's unique light",
      "Access hidden viewpoints known only to local photographers",
      "Master challenging photography conditions including contrast and colors",
      "Small group size (maximum 6) for personalized instruction",
      "Early morning or late afternoon sessions for optimal lighting",
    ],
    inclusions: [
      "Professional photographer guide",
      "Photography instruction tailored to your skill level",
      "Access to special photography locations",
      "Post-processing tips and techniques",
      "Digital guide to blue city photography",
      "Refreshment break with mint tea",
    ],
    exclusions: [
      "Camera equipment (bring your own)",
      "Hotel pickup and drop-off",
      "Photography props",
      "Gratuities",
    ],
    itinerary: [
      "05:30 AM - Meet guide (morning session)",
      "05:45 AM - Introduction to Chefchaouen photography challenges",
      "06:00 AM - Golden hour shooting at panoramic viewpoint",
      "07:30 AM - Blue streets and doorways photography",
      "09:00 AM - Refreshment break with photography review",
      "09:30 AM - Architecture and detail photography session",
      "10:30 AM - Tour conclusion with final tips and recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "What photography skill level is required?",
        answer:
          "Our photography workshop is designed for all skill levels from beginners to advanced photographers. We tailor instruction based on your equipment and experience level. Smartphone photographers will learn composition techniques and editing tips, while those with DSLRs or mirrorless cameras can explore more technical aspects like managing the challenging blue light conditions and capturing the subtleties of Chefchaouen's monochromatic palette.",
      },
      {
        question: "What equipment should I bring?",
        answer:
          "Bring your camera (DSLR, mirrorless, or smartphone), a tripod if you have one, and any lenses you prefer. We recommend a polarizing filter to help manage reflections from the blue walls. Don't forget extra batteries and memory cards, as we will be shooting extensively in various lighting conditions.",
      },
      {
        question: "Why are there early morning and late afternoon sessions?",
        answer:
          "We schedule our photography tours during 'golden hours'—shortly after sunrise or before sunset—when the light quality is optimal for photography. During these times, the blue walls of Chefchaouen take on magical qualities as the warm sunlight contrasts beautifully with the cool blue tones. These hours also offer fewer tourists in the streets, allowing for cleaner compositions and more authentic scenes.",
      },
      {
        question: "Will we have time to review our photos during the tour?",
        answer:
          "Yes, we include a mid-session break where your instructor will review selected images, providing constructive feedback and suggestions for improvement. This real-time learning allows you to immediately apply new techniques during the remainder of the tour. We also provide post-processing tips specifically suited for Chefchaouen's unique color palette.",
      },
      {
        question: "Can I bring a non-photographer friend or partner?",
        answer:
          "Yes, non-photographing companions are welcome to join the tour at a reduced rate. They will enjoy the beautiful walk through Chefchaouen and learn about the city while photographers receive technical instruction. However, please note that our pace and stops are determined by photography opportunities rather than standard sightseeing.",
      },
    ],
  },
  {
    title: "Traditional Moroccan Cooking Class",
    description:
      "Learn the secrets of authentic Moroccan cuisine in a hands-on cooking class, beginning with a visit to the local market to select fresh ingredients followed by preparation of traditional dishes in a beautiful blue home kitchen.",
    city: "Chefchaouen",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/cooking-class.jpg",
      "/images/tours/chefchaouen/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.7,
    tags: ["Cooking", "Food", "Market"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
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
      address: "Plaza Uta el-Hammam, Chefchaouen Medina, Morocco",
      coordinates: {
        latitude: 35.1686,
        longitude: -5.2636,
      },
      instructions:
        "Meet your chef-instructor at the central fountain in Plaza Uta el-Hammam. Look for a person wearing a white chef's coat and a blue apron. Please arrive 10 minutes early to discuss any dietary restrictions.",
      contactNumber: "+212 539-986-987",
      contactEmail: "cookingclass@paragontrails.com",
    },
    availableDates: [
      "2024-04-03",
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
    ],
    highlights: [
      "Visit to a local market to select fresh ingredients",
      "Hands-on experience preparing traditional Moroccan dishes",
      "Learn about Moroccan culinary spices and cooking techniques",
      "Enjoy the meal you helped prepare, paired with local wines or juices",
      "Receive a recipe booklet to recreate the dishes at home",
    ],
    inclusions: [
      "Professional chef-instructor",
      "All ingredients and cooking equipment",
      "Lunch or dinner with drinks",
      "Recipe booklet and cooking certificate",
      "Small group size (maximum 10 people)",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional drinks or snacks",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "09:00 AM - Meet chef-instructor at Plaza Uta el-Hammam",
      "09:15 AM - Visit to local market for ingredient shopping",
      "10:00 AM - Cooking class in a traditional blue kitchen",
      "12:30 PM - Enjoying the meal and discussion about Moroccan culture",
      "01:30 PM - Tour conclusion with recipe booklet distribution",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled class. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled class.",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare a complete Moroccan meal including a traditional tagine (chicken with preserved lemons and olives or a vegetable version), Moroccan salads, fresh bread, and a dessert such as orange blossom-infused pastries. Our chef adapts recipes based on seasonal ingredients and dietary preferences. The focus is on authentic techniques unique to northern Moroccan cuisine that you can recreate at home.",
      },
      {
        question: "Do I need any cooking experience?",
        answer:
          "No prior cooking experience is required! Our class is designed for all skill levels, from complete beginners to experienced cooks. Chef Amina will guide you through each step, explaining techniques and cultural significance behind the dishes. You will leave with new skills and confidence to prepare Moroccan meals on your own.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions or allergies at the time of booking. We can accommodate most dietary needs, including vegetarian, vegan, gluten-free, and dairy-free diets. Our chef will provide alternative ingredients and dishes as needed.",
      },
      {
        question: "Will we eat what we cook?",
        answer:
          "Yes, you will enjoy the meal you helped prepare during the class, paired with local wines or juices. This is a great opportunity to experience the flavors of Morocco and learn about the cultural significance of the dishes.",
      },
      {
        question: "Can I take photos during the class?",
        answer:
          "Absolutely! We encourage you to take photos during the class to capture your culinary creations and the enjoyable moments. However, please be respectful of the chef's instructions and the privacy of other participants.",
      },
    ],
  },
  {
    title: "Akchour Waterfalls & Paradise Valley",
    description:
      "Escape to the natural paradise of Akchour, just outside Chefchaouen, to hike alongside crystal-clear rivers, swim in natural pools beneath stunning waterfalls, and enjoy a picnic lunch in one of Morocco's most beautiful landscapes.",
    city: "Akchour",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/akchour-waterfall.jpg",
      "/images/tours/chefchaouen/natural-bridge.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Nature", "Hiking", "Swimming"],
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
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address: "Akchour Parking, Chefchaouen, Morocco",
      coordinates: {
        latitude: 35.1833,
        longitude: -5.2667,
      },
      instructions:
        "Meet your guide at the Akchour parking area, located 14km from Chefchaouen. Look for a white van with 'Paragon Trails' logo. Please arrive 15 minutes early for check-in.",
      contactNumber: "+212 539-988-765",
      contactEmail: "akchour@paragontrails.com",
    },
    availableDates: [
      "2024-04-06",
      "2024-04-13",
      "2024-04-20",
      "2024-04-27",
      "2024-05-04",
      "2024-05-11",
      "2024-05-18",
      "2024-05-25",
      "2024-06-01",
      "2024-06-08",
      "2024-06-15",
      "2024-06-22",
    ],
    highlights: [
      "Hike to the breathtaking Akchour Waterfalls",
      "Swim in the natural pools of Paradise Valley",
      "Enjoy a picnic lunch with stunning mountain views",
      "Explore the rich biodiversity of the Rif region",
      "Relax and meditate by the tranquil riverside",
    ],
    inclusions: [
      "Professional hiking guide",
      "Transportation from Chefchaouen to Akchour",
      "Picnic lunch with local specialties",
      "Water and trail snacks",
      "First aid kit",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Personal swimming gear",
      "Gratuities",
    ],
    itinerary: [
      "08:00 AM - Depart from Chefchaouen to Akchour",
      "09:00 AM - Arrive at Akchour and meet your guide",
      "09:15 AM - Begin hike to Akchour Waterfalls",
      "11:00 AM - Arrive at waterfalls and enjoy free time to swim and explore",
      "12:30 PM - Picnic lunch in a scenic spot",
      "01:30 PM - Continue hiking to Paradise Valley",
      "03:00 PM - Arrive at Paradise Valley, swim, and relax",
      "04:30 PM - Begin hike back to Akchour",
      "06:00 PM - Return to Chefchaouen and tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
    faqs: [
      {
        question: "When is the best time to visit Akchour?",
        answer:
          "Spring (April-May) and fall (September-October) offer ideal conditions with comfortable temperatures and good water levels in the rivers and waterfalls. Summer (June-August) can be very hot but perfect for swimming in the cool mountain water, though weekends get crowded with locals escaping the heat. Winter (December-February) offers the most solitude but cooler temperatures make swimming less appealing, and occasional rain can make paths slippery.",
      },
      {
        question: "What should I bring for the Akchour tour?",
        answer:
          "Wear sturdy hiking shoes, bring a refillable water bottle, sunscreen, a hat, and a swimsuit if you plan to swim. We provide a packed picnic lunch with local specialties. A small backpack is recommended to carry your personal items. If you have a camera, waterproof bags are advisable as we will be near water.",
      },
      {
        question: "Is swimming safe in the natural pools?",
        answer:
          "Yes, swimming is safe in the designated areas of the natural pools. However, caution is advised as the currents can be strong in places, and the rocks may be slippery. We recommend wearing water shoes for better grip and protection. Always listen to your guide's safety instructions and advice.",
      },
      {
        question: "Can non-hikers join the tour?",
        answer:
          "The tour is primarily designed for hikers, but non-hikers can join the transportation to the waterfalls and enjoy the area at a relaxed pace. However, some parts of the itinerary, like the hike to Paradise Valley, may not be suitable for those with limited mobility. Please contact us to discuss specific needs.",
      },
      {
        question: "What is the cancellation policy for the Akchour tour?",
        answer:
          "The cancellation policy for the Akchour tour is as follows: Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
      },
    ],
  },
  {
    title: "Sunset Rooftop Tour & Traditional Mint Tea",
    description:
      "Experience Chefchaouen's magical transformation at sunset from exclusive rooftop terraces normally closed to the public, enjoying traditional mint tea and Moroccan sweets as the call to prayer echoes through the blue city.",
    city: "Chefchaouen",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/rooftop-sunset.jpg",
      "/images/tours/chefchaouen/mint-tea-ceremony.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.9,
    tags: ["Sunset", "Rooftop", "Tea Ceremony"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "romantic",
    meetingPoint: {
      address: "Plaza Uta el-Hammam, Chefchaouen Medina, Morocco",
      coordinates: {
        latitude: 35.1686,
        longitude: -5.2636,
      },
      instructions:
        "Meet your guide at the central fountain in Plaza Uta el-Hammam. The guide will be wearing a blue scarf and holding a sign with 'Sunset Rooftop Tour' written on it. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+212 539-986-543",
      contactEmail: "sunsettour@paragontrails.com",
    },
    availableDates: [
      "2024-04-01",
      "2024-04-08",
      "2024-04-15",
      "2024-04-22",
      "2024-04-29",
      "2024-05-06",
      "2024-05-13",
      "2024-05-20",
      "2024-05-27",
      "2024-06-03",
      "2024-06-10",
      "2024-06-17",
      "2024-06-24",
    ],
    highlights: [
      "Access exclusive rooftop terraces with stunning views",
      "Experience the magical sunset over the blue city",
      "Enjoy a traditional mint tea ceremony",
      "Savor Moroccan sweets and pastries",
      "Learn about the significance of mint tea in Moroccan culture",
    ],
    inclusions: [
      "Knowledgeable local guide",
      "Visit to 3-4 exclusive rooftop terraces",
      "Traditional Moroccan mint tea and sweets",
      "Small group experience (maximum 10 people)",
      "Panoramic views of Chefchaouen and the Rif Mountains",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Gratuities",
      "Photography equipment or props",
    ],
    itinerary: [
      "06:00 PM - Meet guide at Plaza Uta el-Hammam",
      "06:15 PM - Visit first rooftop terrace for sunset views",
      "06:45 PM - Continue to next rooftop with panoramic city views",
      "07:15 PM - Enjoy mint tea and sweets at a private terrace",
      "07:45 PM - Final rooftop stop for sunset and city lights",
      "08:15 PM - Tour conclusion and return to Plaza Uta el-Hammam",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. 50% refund for cancellations 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    faqs: [
      {
        question: "Which rooftops do we visit?",
        answer:
          "We visit 3-4 different rooftop terraces across the medina, each offering unique perspectives of Chefchaouen and the surrounding mountains. These include a traditional guesthouse with views of the Grand Mosque, a family home overlooking the bustling Plaza Uta el-Hammam, and our final stop at a restored heritage building with panoramic vistas of the entire blue city against the dramatic backdrop of the Rif Mountains as the sun sets.",
      },
      {
        question: "What is the significance of the mint tea ceremony?",
        answer:
          "Mint tea is an integral part of Moroccan hospitality and culture. The ceremony involves a ritualized preparation and serving of the tea, which symbolizes friendship and welcome. Our guide will explain the history and traditions behind this beloved beverage, and you'll have the opportunity to participate in the pouring technique that creates the perfect froth.",
      },
      {
        question:
          "Is the tour suitable for people with vertigo or fear of heights?",
        answer:
          "The tour involves visiting several rooftop terraces which may not be suitable for those with a fear of heights or vertigo. We stay on the upper levels of buildings with safe access, but the experience of height is subjective. If you have concerns, please consult with us beforehand and we can discuss alternative arrangements.",
      },
      {
        question: "What happens if it rains?",
        answer:
          "In case of rain, the tour will be canceled and you will receive a full refund. The rooftops are not safe or comfortable to visit in wet conditions. We monitor the weather closely and will inform you as early as possible if the tour cannot proceed. Alternatively, we can offer a modified indoor experience exploring Chefchaouen's culture and history.",
      },
      {
        question: "Can I book a private sunset tour?",
        answer:
          "Yes, private sunset tours can be arranged for individuals or groups. This can be a more intimate experience, and we can customize the itinerary to your preferences. Please contact us for pricing and availability of private tours.",
      },
    ],
  },
  {
    title: "Chefchaouen Souk Shopping Experience",
    description:
      "Discover the vibrant local markets of Chefchaouen with a knowledgeable guide, learning how to haggle for traditional handicrafts, textiles, and spices while immersing yourself in the lively atmosphere of the souks.",
    city: "Chefchaouen",
    country: "Morocco",
    region: "Rif Mountains",
    images: [
      "/images/tours/chefchaouen/souk-shopping.jpg",
      "/images/tours/chefchaouen/textile-market.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Shopping", "Culture", "Local Markets"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "local",
    meetingPoint: {
      address: "Plaza Uta el-Hammam, Chefchaouen Medina, Morocco",
      coordinates: {
        latitude: 35.1686,
        longitude: -5.2636,
      },
      instructions:
        "Meet your guide at the central fountain in Plaza Uta el-Hammam. The guide will be wearing a blue vest and holding a sign with 'Souk Tour' written on it. Please arrive 10 minutes before the tour starts.",
      contactNumber: "+212 539-986-321",
      contactEmail: "soukexperience@paragontrails.com",
    },
    availableDates: [
      "2024-04-04",
      "2024-04-11",
      "2024-04-18",
      "2024-04-25",
      "2024-05-02",
      "2024-05-09",
      "2024-05-16",
      "2024-05-23",
      "2024-06-06",
      "2024-06-13",
      "2024-06-20",
      "2024-06-27",
    ],
    highlights: [
      "Explore the bustling souks of Chefchaouen with a local guide",
      "Learn the art of haggling and find unique souvenirs",
      "Discover traditional Moroccan handicrafts and textiles",
      "Taste local delicacies and spices",
      "Experience the vibrant culture and history of Chefchaouen",
    ],
    inclusions: [
      "Knowledgeable local guide",
      "Visit to key souk areas and hidden gems",
      "Tasting of local foods and spices",
      "Small group experience (maximum 10 people)",
      "Map of Chefchaouen's medina and souks",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and drinks",
      "Gratuities",
      "Souvenirs and personal purchases",
    ],
    itinerary: [
      "10:00 AM - Meet guide at Plaza Uta el-Hammam",
      "10:15 AM - Introduction to Chefchaouen's souk culture",
      "10:30 AM - Guided tour of the main souk areas",
      "11:15 AM - Visit to a local artisan's workshop",
      "12:00 PM - Tasting local delicacies at the food stalls",
      "12:30 PM - Free time to explore and shop",
      "01:30 PM - Tour conclusion and return to Plaza Uta el-Hammam",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before the scheduled tour. 50% refund for cancellations 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
    faqs: [
      {
        question: "What types of items can we buy in the souk?",
        answer:
          "The souks of Chefchaouen are famous for their vibrant textiles, including handwoven rugs, blankets, and traditional clothing. You can also find locally made pottery, leather goods, spices, and artisanal crafts. Our guide will help you navigate the stalls and find authentic products while sharing tips on how to haggle respectfully.",
      },
      {
        question: "Is it safe to shop in the souk?",
        answer:
          "Yes, Chefchaouen is known for its friendly atmosphere and welcoming locals. However, as with any market, it's wise to keep an eye on your belongings and be aware of your surroundings. Our guide will ensure you feel comfortable and help you avoid common tourist traps.",
      },
      {
        question: "How should I dress for the souk tour?",
        answer:
          "Modest, comfortable clothing is recommended to respect the local culture and ensure comfort while walking. Women may consider wearing a headscarf, especially in more traditional areas. Sturdy shoes are advisable as the streets can be uneven. A light jacket or sweater may be needed in the morning or evening when temperatures are cooler.",
      },
      {
        question: "Can you help with shipping items home?",
        answer:
          "We can provide information on local shipping options and assist with packing items securely for transport. However, we recommend checking with your country's customs regulations regarding import restrictions and duties on handmade or artisanal products.",
      },
      {
        question: "What is the best time to visit the souks?",
        answer:
          "The souks are best visited in the morning when the temperatures are cooler and the markets are less crowded. This allows for a more pleasant shopping experience and better interaction with the artisans and shopkeepers. Early morning visits also offer the advantage of seeing the souks at their most vibrant, with fresh produce and baked goods available.",
      },
    ],
  },
];
export default chefchaouenTours;
