import { Tour } from "@/lib/interfaces/services/tours";

export const atlasMountainsTours: Tour[] = [
  {
    title: "Berber Villages & High Atlas Trek",
    description:
      "Embark on an authentic trek through Morocco's High Atlas Mountains, staying in traditional Berber villages, sharing meals with local families, and exploring remote valleys and ancient paths known only to local guides.",
    images: [
      "/images/tours/atlas-mountains/berber-village.jpg",
      "/images/tours/atlas-mountains/mountain-trek.jpg",
    ],
    duration: "3 days",
    price: "$295",
    rating: 4.9,
    tags: ["Trekking", "Cultural", "Villages"],

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
    availableDates: [
      "2024-04-05",
      "2024-04-15",
      "2024-04-25",
      "2024-05-05",
      "2024-05-15",
      "2024-05-25",
      "2024-06-05",
      "2024-06-15",
      "2024-09-05",
      "2024-09-15",
      "2024-09-25",
      "2024-10-05",
      "2024-10-15",
      "2024-10-25",
    ],
    highlights: [
      "Trek through spectacular High Atlas Mountain landscapes",
      "Stay in traditional Berber villages and share meals with local families",
      "Learn about Berber culture, traditions, and way of life",
      "Explore remote valleys and ancient paths known only to locals",
      "Experience stunning mountain vistas and diverse ecosystems",
    ],
    inclusions: [
      "Professional mountain guide and support staff",
      "All meals during the trek (breakfast, lunch, dinner)",
      "Accommodation in local guesthouses and camping equipment",
      "Mule support for luggage transportation",
      "Entrance fees to villages and local sites",
      "Transportation from/to Marrakech",
    ],
    exclusions: [
      "International airfare",
      "Personal trekking equipment (sleeping bag, hiking poles)",
      "Travel insurance (required)",
      "Gratuities for guides and support staff",
      "Personal expenses and souvenirs",
    ],
    itinerary: [
      "Day 1: 8:00 AM departure from Marrakech, drive to trailhead, trek to first village (4-5 hours hiking)",
      "Day 1: Evening meal with local family and overnight in village guesthouse",
      "Day 2: Morning trek through valleys to second village (5-6 hours hiking)",
      "Day 2: Visit local artisans and learn traditional crafts",
      "Day 2: Dinner and overnight in family home or camp",
      "Day 3: Trek to final destination with panoramic views (4 hours hiking)",
      "Day 3: Lunch in mountain restaurant before return transport to Marrakech",
      "Day 3: Arrive in Marrakech approximately 5:00 PM",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 14 days in advance. 50% refund if canceled 7-14 days in advance. No refund for cancellations less than 7 days before the scheduled tour.",
    meetingPoint: {
      address: "Marrakech Medina, Djemaa el-Fna Square, Marrakech, Morocco",
      coordinates: {
        latitude: 31.6258,
        longitude: -7.9891,
      },
      instructions:
        "Meet your guide at Café de France on Djemaa el-Fna Square, Marrakech. The guide will be wearing a blue cap with 'High Atlas Treks' embroidered on it. Please arrive 15 minutes before the scheduled departure time with all your trekking essentials packed.",
      contactNumber: "+212 661-234567",
      contactEmail: "trek@paragontrails.com",
    },
    faqs: [
      {
        question: "How physically demanding is this trek?",
        answer:
          "This trek is moderately challenging, with daily hikes of 4-6 hours covering 8-12 km (5-7 miles) with elevation changes of 300-600 meters (1,000-2,000 feet). Trails are mostly well-established but occasionally rocky or steep. While previous trekking experience is beneficial, anyone with reasonable fitness can participate. We maintain a comfortable pace with plenty of breaks and our mules carry the heavy gear, so you only need a daypack during hiking.",
      },
      {
        question: "What are the sleeping arrangements in the villages?",
        answer:
          "Accommodations are in authentic guesthouses (gîtes) run by local families, offering a genuine glimpse into Berber life. Facilities are basic but clean, with shared rooms typically accommodating 4-6 people on mattresses or simple beds. Shared bathrooms provide basic washing facilities and sometimes hot water. In more remote villages, we may stay in family homes with traditional room arrangements. These authentic lodgings are a highlight for most trekkers, offering cultural immersion impossible in conventional accommodations.",
      },
      {
        question: "What type of food is provided during the trek?",
        answer:
          "Meals feature delicious, freshly prepared Moroccan and Berber specialties. Breakfasts include bread, jam, eggs, and tea/coffee. Lunches are picnic-style with salads, bread, cheese, and seasonal fruits. Dinners are substantial, often featuring tagines (slow-cooked stews), couscous dishes with vegetables and meat, followed by fresh fruit. Vegetarian options are available with advance notice. All meals are prepared with locally sourced ingredients, offering a taste of authentic mountain cuisine.",
      },
      {
        question: "What should I pack for the trek?",
        answer:
          "Essential items include sturdy hiking boots (well broken-in), layers of clothing for variable mountain temperatures, a waterproof jacket, sun protection (hat, sunglasses, sunscreen), personal medications, a headlamp, and a day pack. A sleeping bag is necessary (rated to at least 5°C/40°F). We provide a comprehensive packing list upon booking. A porter service for personal items is available for an additional fee if you prefer not to carry anything beyond daily essentials.",
      },
      {
        question:
          "What is the cultural etiquette for visiting Berber villages?",
        answer:
          "When visiting Berber communities, modest dress is essential - shoulders and knees should be covered. Ask permission before photographing people, especially women. Small gifts like tea, sugar, or school supplies for children are appreciated but not expected. Learning a few Berber or Arabic greetings enhances interactions. Your guide will help navigate cultural expectations and facilitate meaningful exchanges with villagers, ensuring a respectful experience that benefits local communities.",
      },
    ],
  },
  {
    title: "Mount Toubkal Summit Expedition",
    description:
      "Challenge yourself to summit North Africa's highest peak guided by experienced mountain guides. This adventure includes professional equipment, high mountain refuges, and breathtaking panoramic views across Morocco and the Sahara.",
    images: [
      "/images/tours/atlas-mountains/toubkal-summit.jpg",
      "/images/tours/atlas-mountains/high-atlas-view.jpg",
    ],
    duration: "2 days",
    price: "$225",
    rating: 4.8,
    tags: ["Mountaineering", "Summit", "Challenge"],

    isHistorical: false,
    isRomantic: false,
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
    availableDates: [
      "2024-04-10",
      "2024-04-24",
      "2024-05-08",
      "2024-05-22",
      "2024-06-05",
      "2024-06-19",
      "2024-07-03",
      "2024-07-17",
      "2024-08-07",
      "2024-08-21",
      "2024-09-04",
      "2024-09-18",
      "2024-10-02",
      "2024-10-16",
    ],
    highlights: [
      "Summit North Africa's highest peak, Mount Toubkal (4,167m/13,671ft)",
      "Experience breathtaking panoramic views across Morocco and the Sahara",
      "Trek through diverse mountain landscapes and traditional Berber villages",
      "Stay in authentic mountain refuges with fellow international climbers",
      "Achievement of conquering a significant peak with professional guidance",
    ],
    inclusions: [
      "Professional certified mountain guides",
      "Technical equipment when needed (crampons, ice axes in winter)",
      "All meals during the expedition (breakfast, lunch, dinner)",
      "Accommodation in mountain refuge",
      "Mule support for luggage transportation to refuge",
      "Transportation from/to Marrakech",
      "Safety and first aid equipment",
    ],
    exclusions: [
      "Personal trekking equipment (sleeping bag, hiking boots, warm clothing)",
      "Travel insurance with mountain rescue coverage (required)",
      "Gratuities for guides and support staff",
      "Personal expenses and additional snacks",
      "Accommodation in Marrakech before/after expedition",
    ],
    itinerary: [
      "Day 1: 7:00 AM departure from Marrakech to Imlil village",
      "Day 1: Begin trek from Imlil (1,740m) to Toubkal Refuge (3,207m), 5-6 hours hiking",
      "Day 1: Evening meal and early night at the mountain refuge",
      "Day 2: Pre-dawn start (5:00 AM) for summit attempt",
      "Day 2: Summit Mount Toubkal (4,167m), 3-4 hours ascent",
      "Day 2: Descend to refuge for lunch, then continue to Imlil, 5-6 hours descent",
      "Day 2: Return transportation to Marrakech, arrive approximately 6:00 PM",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 21 days in advance. 50% refund if canceled 14-21 days in advance. No refund for cancellations less than 14 days before the scheduled expedition.",
    meetingPoint: {
      address: "Imlil Village Center, High Atlas Mountains, Morocco",
      coordinates: {
        latitude: 31.1356,
        longitude: -7.9195,
      },
      instructions:
        "Meet your mountain guide at Café Imlil in the center of Imlil village. The guide will be wearing a red jacket with 'Toubkal Guides' embroidered on it. Please arrive with all your mountaineering equipment ready for immediate departure to the trailhead.",
      contactNumber: "+212 662-345678",
      contactEmail: "toubkal@paragontrails.com",
    },
    faqs: [
      {
        question: "How physically demanding is the Toubkal climb?",
        answer:
          "Summiting Mount Toubkal (4,167m) is challenging, requiring good cardiovascular fitness and some hiking experience. The ascent involves 1,400m elevation gain on day one and 960m on summit day, with some steep, rocky terrain. While technically not difficult (no climbing required), the altitude, uphill hiking, and sometimes adverse weather demand endurance and determination. We recommend training with uphill hikes, stair climbing, or cardio workouts for 4-6 weeks before your expedition.",
      },
      {
        question: "What are the accommodations like at the mountain refuge?",
        answer:
          "The Toubkal Refuge is a basic mountain hostel offering dormitory-style rooms with bunk beds. Facilities are functional but rustic, with shared bathrooms, limited hot water, and simple communal dining areas. Sleeping quarters are mixed-gender and can accommodate 8-20 people per room. During peak seasons (April-October), the refuge can be crowded. For more comfort, we offer a premium option with a private guide and guaranteed smaller rooms (when available) for an additional fee.",
      },
      {
        question: "What equipment do I need to bring?",
        answer:
          "Essential equipment includes sturdy hiking boots with ankle support, warm layers (thermal base layers, fleece, insulated jacket), waterproof/windproof outer layers, gloves, warm hat, sleeping bag rated for below freezing, headlamp with extra batteries, trekking poles, and sun protection. In winter (November-April), additional equipment such as crampons, ice axe, and warmer gear is required. We provide a detailed equipment list upon booking and can arrange rental of technical gear from Imlil if needed.",
      },
      {
        question: "What happens if I cannot reach the summit?",
        answer:
          "Safety is our absolute priority. If a climber experiences altitude sickness, exhaustion, or other issues, our guides are trained to assess the situation and make appropriate decisions. In many cases, a participant can rest at the refuge while others continue, or descend with an assistant guide. There's no refund for not reaching the summit, but the experience of attempting Toubkal and enjoying the magnificent High Atlas is valuable regardless of summit success. Our summit success rate is approximately 85% in summer and 70% in winter.",
      },
      {
        question: "When is the best time to climb Toubkal?",
        answer:
          "The optimal climbing seasons are late spring (May-June) and early autumn (September-October), when weather is relatively stable with mild temperatures and clear skies. Summer (July-August) offers snow-free trails but can be very hot at lower elevations. Winter climbs (December-March) are possible but require additional technical equipment and experience, with snowfall creating more challenging but dramatically beautiful conditions. Our expedition dates are carefully selected to optimize climbing conditions while avoiding extreme weather when possible.",
      },
    ],
  },
  {
    title: "Atlas Mountains Photography Workshop",
    description:
      "Capture the dramatic landscapes, unique light, and authentic culture of the Atlas Mountains under the guidance of a National Geographic photographer. Visit photogenic locations at optimal times and learn advanced techniques.",
    images: [
      "/images/tours/atlas-mountains/photography-workshop.jpg",
      "/images/tours/atlas-mountains/mountain-light.jpg",
    ],
    duration: "4 days",
    price: "$895",
    rating: 4.9,
    tags: ["Photography", "Landscapes", "Workshop"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    availableDates: [
      "2024-03-15",
      "2024-03-25",
      "2024-04-05",
      "2024-04-15",
      "2024-04-25",
      "2024-05-05",
      "2024-05-15",
      "2024-05-25",
      "2024-09-05",
      "2024-09-15",
      "2024-09-25",
      "2024-10-05",
      "2024-10-15",
      "2024-10-25",
    ],
    highlights: [
      "Learn photography tips and techniques from a National Geographic photographer",
      "Capture stunning landscapes, including mountains, valleys, and waterfalls",
      "Experience the unique light of the Atlas Mountains at sunrise and sunset",
      "Explore traditional Berber villages and meet local artisans",
      "Enjoy a small group size for personalized instruction",
    ],
    inclusions: [
      "Guided photography sessions with a professional photographer",
      "All meals during the workshop (breakfast, lunch, dinner)",
      "Accommodation in comfortable guesthouses",
      "Transportation during the workshop",
      "Entrance fees to sites and villages",
      "Post-workshop editing session and feedback",
    ],
    exclusions: [
      "International airfare",
      "Personal photography equipment (camera, lenses, tripod)",
      "Travel insurance (required)",
      "Gratuities for guides and support staff",
      "Personal expenses and souvenirs",
    ],
    itinerary: [
      "Day 1: Arrival in Marrakech, transfer to guesthouse in the Atlas Mountains",
      "Day 1: Afternoon orientation and photography briefing",
      "Day 1: Sunset photography session at a scenic viewpoint",
      "Day 2: Early morning shoot at a traditional Berber village",
      "Day 2: Explore and photograph local markets and artisans",
      "Day 2: Afternoon hike to a waterfall for landscape photography",
      "Day 3: Sunrise shoot at a mountain pass",
      "Day 3: Visit to a local herb garden and cooking class",
      "Day 3: Evening review and editing session",
      "Day 4: Final sunrise shoot, then return to Marrakech",
      "Day 4: Departure from Marrakech",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 30 days in advance. 50% refund if canceled 15-30 days in advance. No refund for cancellations less than 15 days before the scheduled workshop.",
    meetingPoint: {
      address: "La Maison Arabe Hotel, Derb Assehbi, Marrakech 40000, Morocco",
      coordinates: {
        latitude: 31.6295,
        longitude: -7.9928,
      },
      instructions:
        "Meet in the lobby of La Maison Arabe Hotel in Marrakech. Your instructor will be waiting with professional camera equipment and a 'Photography Workshop' sign. Please bring all your camera gear and be ready for immediate departure to our first shooting location.",
      contactNumber: "+212 663-456789",
      contactEmail: "photo@paragontrails.com",
    },
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "We recommend bringing a DSLR or mirrorless camera with manual settings capability, tripod, wide-angle lens (16-35mm or similar), standard zoom lens (24-70mm or similar), telephoto lens (70-200mm recommended for landscapes and portraits), polarizing and ND filters, spare batteries, memory cards, cleaning kit, and a comfortable camera bag. While not required, a drone can capture spectacular aerial perspectives (subject to local regulations). If you're unsure about your equipment, contact us for personalized recommendations before the workshop.",
      },
      {
        question: "What skill level is required for this photography workshop?",
        answer:
          "This workshop accommodates all skill levels from enthusiastic beginners to seasoned photographers. Our instructor provides personalized guidance based on your experience. Beginners will learn fundamental techniques like composition and exposure, while advanced photographers can focus on advanced lighting techniques, complex compositions, and developing a narrative photo series. The diverse locations challenge photographers of all levels to grow creatively while capturing Morocco's stunning landscapes and culture.",
      },
      {
        question: "How will we travel between photography locations?",
        answer:
          "Transportation is provided in a comfortable 4WD vehicle with ample room for photography equipment. Our specialized photography vehicle features adjustable seats, extra space for gear, and large windows ideal for scouting locations. We limit workshop size to ensure everyone has window access and personal space. The vehicle is air-conditioned and stocked with drinks and snacks. Driver stops are flexible, allowing us to pull over whenever inspiring scenes appear during our journey through the Atlas Mountains.",
      },
      {
        question:
          "Will we photograph local people, and how is this handled ethically?",
        answer:
          "Portrait and cultural photography is a significant component of our workshop, conducted with the utmost respect for local communities. Our instructor and local guide facilitate appropriate interactions and secure permissions. We've established relationships with several Berber families who welcome our photographers. We practice and teach ethical photography principles, including asking permission, showing subjects their images, and sometimes providing printed photos on return visits. A portion of workshop fees supports the communities we photograph.",
      },
      {
        question: "What post-processing instruction is included?",
        answer:
          "Evening editing sessions using Adobe Lightroom and Photoshop (trial versions can be installed if you don't own the software) help you transform your daily images. Our instructor provides personalized guidance on workflow efficiency, color correction, exposure blending, and creative techniques specific to landscape and cultural photography. These sessions include constructive group critiques to help refine your photographic vision. You'll receive recordings of key editing demonstrations and a digital workflow guide to reference after the workshop.",
      },
    ],
  },
  {
    title: "Atlas Mountains Luxury Kasbahs & Spas",
    description:
      "Indulge in Morocco's finest mountain retreats with stays at luxurious kasbahs and resorts featuring infinity pools overlooking dramatic valleys, hammam spa treatments, and gourmet Moroccan cuisine with French influences.",
    images: [
      "/images/tours/atlas-mountains/luxury-kasbah.jpg",
      "/images/tours/atlas-mountains/mountain-spa.jpg",
    ],
    duration: "5 days",
    price: "$1,495",
    rating: 5.0,
    tags: ["Luxury", "Relaxation", "Gourmet"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    availableDates: [
      "2024-04-01",
      "2024-04-10",
      "2024-04-20",
      "2024-05-01",
      "2024-05-10",
      "2024-05-20",
      "2024-06-01",
      "2024-06-10",
      "2024-09-01",
      "2024-09-10",
      "2024-09-20",
      "2024-10-01",
      "2024-10-10",
      "2024-10-20",
    ],
    highlights: [
      "Stay in luxurious kasbahs and resorts in the Atlas Mountains",
      "Enjoy infinity pools with stunning mountain views",
      "Indulge in hammam spa treatments and wellness therapies",
      "Savor gourmet Moroccan cuisine with wine pairings",
      "Experience personalized service and exclusive cultural activities",
    ],
    inclusions: [
      "Accommodation in luxury kasbahs and resorts",
      "All meals included (breakfast, lunch, dinner)",
      "Private transfers in luxury 4x4 vehicles",
      "Hammam spa treatments and wellness sessions",
      "Guided tours and activities as per itinerary",
      "Wine and beverage pairings with meals",
    ],
    exclusions: [
      "International airfare",
      "Personal expenses and gratuities",
      "Optional activities and excursions",
      "Travel insurance (required)",
    ],
    itinerary: [
      "Day 1: Arrival in Marrakech, transfer to luxury kasbah in the Atlas Mountains",
      "Day 1: Evening at leisure to enjoy the kasbah amenities",
      "Day 2: Guided tour of the Atlas Mountains, visit to traditional Berber villages",
      "Day 2: Lunch at a scenic spot with panoramic views",
      "Day 2: Return to kasbah for spa treatments and relaxation",
      "Day 3: Cooking class to learn gourmet Moroccan dishes",
      "Day 3: Afternoon wine tasting and vineyard tour",
      "Day 3: Dinner at the kasbah with live traditional music",
      "Day 4: Explore the Ourika Valley and visit to a local market",
      "Day 4: Picnic lunch by the river, return to kasbah for relaxation",
      "Day 4: Stargazing experience in the Atlas Mountains",
      "Day 5: Morning at leisure, optional hot air balloon ride",
      "Day 5: Transfer back to Marrakech for departure",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 14 days in advance. 50% refund if canceled 7-14 days in advance. No refund for cancellations less than 7 days before the scheduled tour.",
    meetingPoint: {
      address:
        "Royal Mansour Hotel, Rue Abou Abbas El Sebti, Marrakech 40000, Morocco",
      coordinates: {
        latitude: 31.624,
        longitude: -7.9922,
      },
      instructions:
        "Your private chauffeur will meet you in the lobby of your Marrakech accommodation. They will be holding a personalized greeting sign with your name. The luxury vehicle will be waiting to transport you to your first kasbah destination in the Atlas Mountains.",
      contactNumber: "+212 664-567890",
      contactEmail: "luxury@paragontrails.com",
    },
    faqs: [
      {
        question: "How luxurious are the kasbah accommodations?",
        answer:
          "Our selected kasbahs represent Morocco's finest mountain retreats, all 5-star properties with exceptional service. Accommodations feature spacious suites with private terraces, premium bedding, and authentic Moroccan design elements. Bathrooms include hammam-style fixtures, rainfall showers, and luxury amenities. Properties such as Kasbah Tamadot (owned by Richard Branson) and Kasbah Bab Ourika offer world-class amenities including infinity pools, award-winning spas, and gardens with panoramic mountain views. Each property maintains high international standards while honoring traditional Moroccan architecture and hospitality.",
      },
      {
        question: "What spa treatments are included?",
        answer:
          "Your experience includes two signature spa treatments per person. Options typically feature traditional Moroccan therapies such as hammam purification rituals with black soap and rhassoul clay, argan oil massages, rose water facials, and Atlas herbs treatments. Each kasbah's spa offers unique specialties based on local ingredients and traditions. Additional treatments can be arranged at supplementary cost. Spa facilities include steam rooms, indoor/outdoor treatment areas, relaxation lounges with mountain views, and traditional hammams designed for ultimate relaxation and rejuvenation.",
      },
      {
        question: "What level of privacy can we expect?",
        answer:
          "This luxury experience emphasizes privacy and exclusivity. Our selected kasbahs feature spacious grounds where suites and common areas are designed to provide intimate spaces. Private dining can be arranged in secluded locations such as rooftop terraces, garden pavilions, or in-suite. For ultimate privacy, we can arrange exclusive use of certain facilities during designated times. Your personal concierge ensures preferences are accommodated discreetly, and private transportation is always available. For public figures or those desiring complete seclusion, we can recommend specific properties with enhanced security and privacy features.",
      },
      {
        question: "What cultural activities are included?",
        answer:
          "While relaxation is central to the experience, we include curated cultural activities to enrich your understanding of the region. These may include private tea ceremonies with Berber elders, exclusive demonstrations of traditional crafts like carpet weaving or pottery, guided heritage walks through ancient villages, and private musical performances featuring local instruments. Each activity is conducted at a leisurely pace and can be customized to your interests. Cultural excursions are led by expert local guides with deep knowledge of Berber history and traditions.",
      },
      {
        question: "What is the quality of the cuisine?",
        answer:
          "Dining is a highlight of this experience, featuring gourmet Moroccan cuisine prepared by accomplished chefs, often trained in European culinary institutes. Meals incorporate organic produce from kasbah gardens, local ingredients from mountain villages, and international techniques. Each kasbah offers signature dishes that showcase regional specialties with sophisticated presentation. Dietary preferences and restrictions are accommodated with creative alternatives. Wine pairings feature Moroccan wines from the foothills of the Atlas Mountains as well as international selections. Private dining experiences in spectacular settings can be arranged upon request.",
      },
    ],
  },
  {
    title: "Atlas Mountains Cooking & Culinary Herbs",
    description:
      "Discover the unique flavors of Berber cuisine through hands-on cooking classes, visits to mountain herb gardens, and traditional bread baking in village clay ovens, all while learning about the medicinal properties of local ingredients.",
    images: [
      "/images/tours/atlas-mountains/cooking-class.jpg",
      "/images/tours/atlas-mountains/herb-garden.jpg",
    ],
    duration: "2 days",
    price: "$195",
    rating: 4.7,
    tags: ["Cooking", "Herbs", "Traditional"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    availableDates: [
      "2024-03-20",
      "2024-03-28",
      "2024-04-05",
      "2024-04-15",
      "2024-04-25",
      "2024-05-05",
      "2024-05-15",
      "2024-05-25",
      "2024-09-05",
      "2024-09-15",
      "2024-09-25",
      "2024-10-05",
      "2024-10-15",
      "2024-10-25",
    ],
    highlights: [
      "Learn to cook traditional Berber dishes with local chefs",
      "Visit aromatic herb gardens and learn about medicinal plants",
      "Experience the art of baking bread in clay ovens",
      "Enjoy a market tour to select fresh, local ingredients",
      "Savor the dishes you prepare in a communal dining experience",
    ],
    inclusions: [
      "Hands-on cooking classes with expert local chefs",
      "All meals during the class (breakfast, lunch, dinner)",
      "Accommodation in a local guesthouse",
      "Transportation during the class",
      "Visit to a local market and herb garden",
      "Recipe book and cooking certificate",
    ],
    exclusions: [
      "International airfare",
      "Personal cooking equipment and ingredients",
      "Travel insurance (required)",
      "Gratuities for guides and support staff",
      "Personal expenses and souvenirs",
    ],
    itinerary: [
      "Day 1: Arrival in Marrakech, transfer to guesthouse in the Atlas Mountains",
      "Day 1: Afternoon visit to a local herb garden and market",
      "Day 1: Evening cooking class: Introduction to Moroccan spices and herbs",
      "Day 1: Dinner featuring dishes prepared during the class",
      "Day 2: Morning cooking class: Traditional Berber tagine and couscous",
      "Day 2: Lunch with the local family, learning about Berber culture",
      "Day 2: Afternoon baking class: Khobz (Berber bread) in a clay oven",
      "Day 2: Closing dinner and certificate ceremony",
      "Day 3: Departure from the Atlas Mountains to Marrakech",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 7 days in advance. 50% refund if canceled 3-7 days in advance. No refund for cancellations less than 3 days before the scheduled class.",
    meetingPoint: {
      address: "Café du Grand Balcon, Djemaa el-Fna Square, Marrakech, Morocco",
      coordinates: {
        latitude: 31.6257,
        longitude: -7.9892,
      },
      instructions:
        "Meet your culinary guide at Café du Grand Balcon on Djemaa el-Fna Square. The guide will be holding a small basket of Moroccan herbs and spices for identification. Please wear comfortable clothing suitable for cooking activities.",
      contactNumber: "+212 665-678901",
      contactEmail: "cooking@paragontrails.com",
    },
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll master authentic Berber mountain cuisine including traditional tagines using seasonal vegetables and herbs, handmade couscous prepared the ancestral way, khobz bread baked in clay ovens, and mountain herb tea blends with medicinal properties. Unlike tourist cooking classes, we teach family recipes passed down through generations, focusing on techniques rarely shared with outsiders. Our mountain hosts demonstrate regional variations not found in cookbooks, such as the distinctive slow-cooking methods used at high altitudes and special preservation techniques for winter months.",
      },
      {
        question: "Do I need cooking experience to participate?",
        answer:
          "No prior cooking experience is necessary. Our class is designed for all skill levels, with step-by-step instruction that beginners can follow easily while still offering insights that will interest experienced cooks. The teaching style is hands-on and demonstrative rather than technical, focusing on traditional methods that don't require advanced culinary skills. You'll learn through direct participation, with our chef and local cooks providing guidance throughout each preparation. The emphasis is on understanding flavors, techniques and cultural context rather than complex preparations.",
      },
      {
        question: "What will we learn about mountain herbs and their uses?",
        answer:
          "The workshop includes extensive knowledge about Atlas Mountain herbs, many of which are endemic to this region. You'll learn to identify, harvest, and use herbs such as wild thyme, sage, mint varieties, wild lavender, and rare medicinal plants. Beyond cooking applications, we explore traditional medicinal uses and the Berber approach to plant-based wellness. Many of these herbs have been used for centuries for their health properties, and our local expert explains how to create remedies for common ailments. You'll create your own personalized herb blend to take home.",
      },
      {
        question: "Where exactly is the cooking class held?",
        answer:
          "The cooking workshop takes place in an authentic Berber home in a small mountain village approximately 1.5 hours from Marrakech. The kitchen features traditional cooking facilities including clay ovens, charcoal braziers, and stone grinding tools that have been used for generations. The setting provides both stunning mountain views and an immersive cultural context that enhances the learning experience. Working in a traditional kitchen rather than a modern cooking school allows you to understand how geography and available resources shape cooking techniques.",
      },
      {
        question: "Will I receive recipes to take home?",
        answer:
          "Yes, you'll receive a beautifully illustrated recipe booklet containing all the dishes prepared during the workshop, with both metric and imperial measurements. The recipes include chef's notes on techniques, ingredient substitutions for items difficult to find outside Morocco, and background information on the cultural significance of each dish. We also provide a small pouch of key spice blends and dried herbs from the mountains to help you recreate authentic flavors at home, along with information on sourcing similar ingredients in your home country.",
      },
    ],
  },
];

export default atlasMountainsTours;
