import { Tour } from "@/lib/interfaces/services/tours";

export const patagoniaTours: Tour[] = [
  {
    title: "Torres del Paine W Trek",
    description:
      "Challenge yourself with the legendary W Trek through Torres del Paine National Park, experiencing breathtaking mountain scenery, glaciers, and lakes in one of the world's most spectacular trekking destinations.",
    city: "Puerto Natales",
    country: "Chile",
    region: "Magallanes",
    images: [
      "/images/tours/patagonia/w-trek.jpg",
      "/images/tours/patagonia/torres-del-paine.jpg",
    ],
    duration: "5 days",
    price: "$1,200",
    rating: 4.9,
    tags: ["Trekking", "Mountains", "National Park"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Yak Patagonia Office, Manuel Bulnes 83, Puerto Natales, Chile",
      coordinates: {
        latitude: -51.7317,
        longitude: -72.4839,
      },
      instructions:
        "Meet at our office in downtown Puerto Natales at 8:00 AM. Please arrive 15 minutes early for equipment check and briefing. Look for the building with the mountain logo.",
      contactNumber: "+56 61 241 2742",
      contactEmail: "wtrek@paragontrails.com",
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
      "Hike to the base of the iconic granite Torres (towers) with their turquoise glacial lake",
      "Trek through the French Valley with its hanging glacier and amphitheater of peaks",
      "Witness the massive calving face of Grey Glacier on Lake Grey",
      "Experience Patagonia's famous ever-changing weather and dramatic light conditions",
      "Stay in strategically located refugios (mountain lodges) along the classic W route",
    ],

    inclusions: [
      "Professional English-speaking mountain guide with Wilderness First Responder certification",
      "Assistant guide for groups of 8 or more",
      "All accommodation (4 nights in mountain refugios with shared rooms)",
      "All meals during the trek (breakfast, packed lunch, dinner)",
      "National Park entrance fees",
      "Catamaran crossing on Lake Pehoé",
      "Transportation to and from Puerto Natales",
      "Group safety equipment including first aid kit and satellite phone",
      "Pre-trip briefing in Puerto Natales",
      "Luggage storage for items not needed during the trek",
    ],

    exclusions: [
      "Flights to/from Punta Arenas or Puerto Natales",
      "Accommodations before or after the trek",
      "Personal trekking gear (backpack, clothing, etc.)",
      "Sleeping bag (can be rented for $40)",
      "Alcoholic beverages and snacks",
      "Travel insurance (mandatory)",
      "Gratuities for guides and staff",
    ],

    itinerary: [
      "Day 1: Puerto Natales to Torres Base – Transfer to park, hike to Las Torres base viewpoint (8 hours, 19km), overnight at Refugio Torre Central",
      "Day 2: Torres Central to Los Cuernos – Trek along Lake Nordenskjöld with Almirante Nieto Mountain views (6 hours, 11km), overnight at Refugio Los Cuernos",
      "Day 3: Los Cuernos to French Valley – Hike into spectacular French Valley with views of Paine Grande and hanging glacier (8 hours, 17km), overnight at Refugio Paine Grande",
      "Day 4: Paine Grande to Grey Glacier – Trek to Grey Glacier viewpoints with floating icebergs (7 hours, 11km), overnight at Refugio Grey",
      "Day 5: Grey Glacier to Puerto Natales – Optional morning ice hike or kayak (additional cost), afternoon catamaran across Lake Pehoé, return transfer to Puerto Natales, arriving approximately 7:00 PM",
    ],

    faqs: [
      {
        question: "How difficult is the W Trek?",
        answer:
          "The W Trek is moderately difficult, requiring good physical fitness but no technical climbing skills. Daily hikes range from 11-19km (7-12 miles) with elevation gains of up to 800m (2,600ft). Trails are well-marked but can be steep and rocky in sections. The Patagonian weather can add to the challenge with strong winds and sudden weather changes. Prior hiking experience is recommended but not mandatory if you have good fitness.",
      },
      {
        question: "What should I pack for the W Trek?",
        answer:
          "Essential items include: broken-in hiking boots, waterproof jacket and pants, insulating layers (fleece/down), moisture-wicking shirts, hiking pants, warm hat, gloves, sun protection (hat, sunscreen, sunglasses), 30-40L backpack, trekking poles, headlamp, refillable water bottle, personal medications, and camera. A detailed packing list will be provided upon booking. Remember: Patagonia's weather is notoriously changeable - the saying goes 'four seasons in one day'!",
      },
      {
        question: "What are the accommodations like?",
        answer:
          "Accommodations are in mountain refugios (lodges) along the trek. These are rustic but comfortable facilities with shared dormitory-style rooms (4-8 people per room), hot showers, and common dining areas. Beds include mattresses and pillows, but you'll need your own sleeping bag. The refugios provide all meals, with dinner typically being a hearty three-course meal. Some refugios have small shops selling snacks and basic supplies. Electricity is available but limited, and WiFi is generally not available.",
      },
    ],
  },
  {
    title: "Perito Moreno Glacier Adventure",
    description:
      "Get up close with the impressive Perito Moreno Glacier in Los Glaciares National Park, including glacier trekking with crampons and a boat safari to witness massive ice calving events.",
    city: "El Calafate",
    country: "Argentina",
    region: "Santa Cruz Province",
    images: [
      "/images/tours/patagonia/perito-moreno.jpg",
      "/images/tours/patagonia/glacier-trekking.jpg",
    ],
    duration: "1 day",
    price: "$240",
    rating: 4.8,
    tags: ["Glacier", "Ice Trekking", "UNESCO Site"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address:
        "Hielo & Aventura Office, Av. del Libertador 935, El Calafate, Argentina",
      coordinates: {
        latitude: -50.3407,
        longitude: -72.2648,
      },
      instructions:
        "Meet at the Hielo & Aventura office in downtown El Calafate at 7:15 AM. The office is located on the main avenue and has a large glacier photo in the window.",
      contactNumber: "+54 2902 491842",
      contactEmail: "peritomoreno@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-17",
      "2023-12-18",
      "2023-12-19",
      "2023-12-20",
      "2023-12-21",
      "2023-12-22",
      "2023-12-23",
      "2023-12-24",
      "2023-12-26",
      "2023-12-27",
      "2023-12-28",
      "2023-12-29",
      "2023-12-30",
      "2023-12-31",
      "2024-01-02",
      "2024-01-03",
      "2024-01-04",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-08",
      "2024-01-09",
      "2024-01-10",
      "2024-01-11",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-15",
      "2024-01-16",
      "2024-01-17",
      "2024-01-18",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-22",
      "2024-01-23",
      "2024-01-24",
      "2024-01-25",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-01-29",
      "2024-01-30",
      "2024-01-31",
      "2024-02-01",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-05",
      "2024-02-06",
      "2024-02-07",
      "2024-02-08",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
      "2024-02-12",
      "2024-02-13",
      "2024-02-14",
      "2024-02-15",
      "2024-02-16",
      "2024-02-17",
      "2024-02-18",
      "2024-02-19",
      "2024-02-20",
      "2024-02-21",
      "2024-02-22",
      "2024-02-23",
      "2024-02-24",
      "2024-02-25",
      "2024-02-26",
      "2024-02-27",
      "2024-02-28",
      "2024-02-29",
    ],

    highlights: [
      "Walk on the surface of the ancient Perito Moreno Glacier with professional guides",
      "Witness spectacular ice calving events from multiple viewpoints",
      "Navigate by boat to areas inaccessible by land for unique glacier perspectives",
      "Learn about glaciology and the impact of climate change on Patagonian ice fields",
      "Explore the extensive system of viewing platforms and walkways in Los Glaciares National Park",
    ],

    inclusions: [
      "Round-trip transportation from El Calafate hotels",
      "National Park entrance fees",
      "Professional bilingual guides (English/Spanish)",
      "Boat navigation on Lago Argentino",
      "Mini-trekking on glacier with crampons (1.5 hours)",
      "All technical equipment for glacier walking",
      "Box lunch",
      "Free time at the viewing platforms",
      "Insurance during activities",
    ],

    exclusions: [
      "Additional food and beverages",
      "Gratuities for guides",
      "Professional photography services",
      "Personal hiking equipment",
      "Extended 'Big Ice' trek (available as upgrade)",
    ],

    itinerary: [
      "07:15 - Meet at tour office in El Calafate",
      "07:30 - Departure from El Calafate by comfortable bus",
      "09:30 - Arrive at Los Glaciares National Park",
      "10:00 - Board boat for navigation on Lago Argentino with glacier views",
      "10:45 - Disembark at the southern shore for mini-trekking preparation",
      "11:00 - Safety briefing and crampon fitting",
      "11:30 - Begin guided glacier walk on Perito Moreno ice surface",
      "13:00 - Finish ice trekking and enjoy box lunch",
      "13:45 - Board boat for return navigation",
      "14:30 - Explore the system of walkways and viewing balconies",
      "15:30 - Free time to witness ice calving events and take photos",
      "16:30 - Board bus for return to El Calafate",
      "18:30 - Arrive back in El Calafate at tour office",
    ],

    faqs: [
      {
        question: "Do I need prior experience for the glacier trek?",
        answer:
          "No prior experience is necessary for the mini-trekking option. Guides provide complete instruction and the necessary equipment (crampons). The ice walk follows a safe, established route with moderate difficulty. However, participants should have basic fitness and mobility to walk on uneven and sometimes slippery surfaces. For those seeking more challenge, an extended 'Big Ice' option is available at additional cost which ventures deeper onto the glacier.",
      },
      {
        question: "What should I wear for glacier trekking?",
        answer:
          "We recommend layered clothing including waterproof/windproof outerwear, warm mid-layers, sunglasses, sunscreen (the ice reflection intensifies UV rays), hat, gloves, and sturdy hiking boots (must cover ankles for crampon attachment). Avoid jeans or cotton clothing which retains moisture. Trekking poles are provided but optional. The glacier surface can be wet, so waterproof pants are highly recommended. Camera protection is advisable as light rain or mist is common near the glacier.",
      },
      {
        question: "What makes Perito Moreno Glacier unique?",
        answer:
          "Perito Moreno is one of the few glaciers in the world that is still advancing rather than retreating. This creates the spectacular phenomenon of regular ice calving as the advancing face pushes against the opposite shore. The glacier spans 97 square miles (250 km²) and rises approximately 240 feet (74m) above the water surface. Its unusual accessibility allows visitors to witness its grandeur from multiple perspectives—by boat, from viewing platforms, and by walking directly on its surface, making it one of Patagonia's most impressive natural attractions.",
      },
    ],
  },
  {
    title: "Wildlife Safari: Pumas & Guanacos",
    description:
      "Embark on a wildlife safari to spot the elusive Patagonian puma in its natural habitat, along with guanacos, Andean condors, and other native species, guided by expert wildlife trackers and photographers.",
    city: "Torres del Paine",
    country: "Chile",
    region: "Magallanes",
    images: [
      "/images/tours/patagonia/puma-tracking.jpg",
      "/images/tours/patagonia/wildlife-guanacos.jpg",
    ],
    duration: "3 days",
    price: "$1,500",
    rating: 4.9,
    tags: ["Wildlife", "Photography", "Nature"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "nature-experience",

    meetingPoint: {
      address: "Hotel Las Torres, Torres del Paine National Park, Chile",
      coordinates: {
        latitude: -50.9419,
        longitude: -72.8498,
      },
      instructions:
        "Meet in the hotel lobby at 5:00 AM for morning safaris. Your guide will be wearing a green Paragon Trails vest and carrying professional binoculars.",
      contactNumber: "+56 61 236 5487",
      contactEmail: "wildlife@paragontrails.com",
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
      "Track and photograph the elusive puma (mountain lion) with expert wildlife guides",
      "Observe Patagonia's unique wildlife including guanacos, foxes, and flamingos",
      "Witness Andean condors soaring over dramatic mountain landscapes",
      "Improve your wildlife photography skills with professional guidance",
      "Experience Torres del Paine during golden hours when animals are most active",
    ],

    inclusions: [
      "Professional wildlife tracker and photographer guide",
      "All transportation in specialized 4x4 vehicles with roof hatches",
      "2 nights accommodation in premium eco-lodge",
      "All meals (breakfast, field lunch, dinner)",
      "Sunrise and sunset wildlife safaris each day",
      "Use of professional spotting scopes",
      "Photography guidance and instruction",
      "National Park entrance fees",
      "Pre-trip preparation materials on Patagonian wildlife",
    ],

    exclusions: [
      "Flights to/from Punta Arenas",
      "Transfer to/from Torres del Paine (available at additional cost)",
      "Professional camera equipment (bring your own)",
      "Alcoholic beverages",
      "Gratuities for guides and lodge staff",
      "Travel insurance",
      "Optional activities during midday hours",
    ],

    itinerary: [
      "Day 1: 5:00 AM - Early morning briefing and departure for sunrise puma tracking",
      "Day 1: 6:00 AM - Arrive at eastern sector of the park for optimal puma viewing",
      "Day 1: 10:00 AM - Return to lodge for late breakfast and photography review",
      "Day 1: 12:00 PM - Midday break with optional short hikes",
      "Day 1: 4:00 PM - Afternoon safari focusing on guanacos and condors",
      "Day 1: 7:00 PM - Return to lodge for dinner and evening presentation on Patagonian ecology",

      "Day 2: 5:00 AM - Dawn departure for different puma territory",
      "Day 2: 9:30 AM - Flamingo and waterfowl viewing at Laguna Amarga",
      "Day 2: 11:00 AM - Brunch at scenic location in the park",
      "Day 2: 12:30 PM - Wildlife photography workshop and review session",
      "Day 2: 4:30 PM - Evening safari to southern territory",
      "Day 2: 8:00 PM - Return for dinner and presentation on puma conservation",

      "Day 3: 5:30 AM - Final morning safari to prime wildlife areas",
      "Day 3: 10:00 AM - Late breakfast at lodge",
      "Day 3: 11:30 AM - Final photography review and wildlife observation techniques",
      "Day 3: 1:00 PM - Farewell lunch and departure",
    ],

    faqs: [
      {
        question: "What are my chances of seeing a puma?",
        answer:
          "Torres del Paine has one of the highest density puma populations in the world, with sighting success rates around 85% during our three-day safaris. Our specialized trackers are in daily contact with other guides and know the territories of resident pumas. While sightings are never guaranteed with wild animals, our early morning and evening expeditions significantly increase chances as these are prime hunting times. Even when pumas are elusive, guests consistently see abundant wildlife including guanacos (wild llamas), foxes, armadillos, and the majestic Andean condor.",
      },
      {
        question: "What camera equipment should I bring?",
        answer:
          "For optimal wildlife photography, we recommend a DSLR or mirrorless camera with a telephoto lens (minimum 200mm, ideally 400mm or longer). A second camera body or compact camera with wide-angle lens is useful for landscape opportunities. Bring extra batteries, memory cards, lens cleaning supplies, and a sturdy tripod or monopod. Our guides provide photography instruction suitable for all levels, from beginners to advanced photographers. Even without professional equipment, you'll have access to our spotting scopes which can be used with smartphones for digiscoping.",
      },
      {
        question: "How physically demanding is this safari?",
        answer:
          "This safari involves moderate activity levels. We conduct most wildlife viewing from or near our specialized vehicles, with optional short walks (usually less than 1km) when animals are spotted. Early mornings (pre-dawn starts) and potentially cold conditions require good stamina, though no technical hiking skills are needed. The focus is on patient wildlife observation rather than covering long distances. Participants should be able to enter and exit high-clearance vehicles and walk on uneven terrain. The itinerary includes midday breaks at our comfortable lodge.",
      },
    ],
  },
  {
    title: "Patagonian Estancia Experience",
    description:
      "Live like a Patagonian gaucho on a traditional working sheep estancia (ranch), experiencing authentic rural life with horseback riding across the pampas, sheep shearing demonstrations, and home-cooked meals featuring lamb asado.",
    city: "Puerto Natales",
    country: "Chile",
    region: "Magallanes",
    images: [
      "/images/tours/patagonia/estancia-gaucho.jpg",
      "/images/tours/patagonia/sheep-herding.jpg",
    ],
    duration: "2 days",
    price: "$450",
    rating: 4.7,
    tags: ["Cultural", "Rural", "Horseback Riding"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Plaza de Armas, Downtown Puerto Natales, Chile",
      coordinates: {
        latitude: -51.7291,
        longitude: -72.4871,
      },
      instructions:
        "Meet at the central plaza by the monument. Transportation to the estancia will depart at 9:00 AM sharp. Look for our guide with a Paragon Trails sign.",
      contactNumber: "+56 61 241 3596",
      contactEmail: "estancia@paragontrails.com",
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
      "Experience authentic Patagonian gaucho culture on a working sheep ranch",
      "Participate in traditional horseback riding across the vast pampas",
      "Observe sheep shearing demonstrations and herding with highly trained dogs",
      "Enjoy home-cooked Patagonian cuisine featuring traditional lamb asado (barbecue)",
      "Learn about wool production and sustainable ranching practices",
    ],

    inclusions: [
      "Round-trip transportation from Puerto Natales",
      "1 night accommodation in the historic estancia farmhouse",
      "All meals featuring traditional Patagonian cuisine",
      "Guided horseback riding (all experience levels)",
      "Sheep herding and shearing demonstrations",
      "Gaucho skills workshops (lasso techniques, horse care)",
      "Local wine and mate tea tasting",
      "Souvenir hand-crafted wool item",
    ],

    exclusions: [
      "Specialty alcoholic beverages beyond included wine",
      "Personal riding equipment (boots, gloves - bring your own if preferred)",
      "Gratuities for estancia staff",
      "Optional activities like fly fishing (seasonal, additional cost)",
    ],

    itinerary: [
      "Day 1: 9:00 AM - Departure from Puerto Natales",
      "Day 1: 10:30 AM - Arrive at Estancia La Península, welcome with traditional mate tea",
      "Day 1: 11:00 AM - Introduction to estancia life and facilities tour",
      "Day 1: 12:00 PM - Horseback riding instruction and safety briefing",
      "Day 1: 12:30 PM - Horseback ride to scenic viewpoint with riding lessons",
      "Day 1: 2:00 PM - Traditional lunch with local specialties",
      "Day 1: 3:30 PM - Learn about sheep herding with demonstrations by gauchos and dogs",
      "Day 1: 5:00 PM - Help prepare traditional asado (barbecue)",
      "Day 1: 7:30 PM - Dinner featuring lamb asado cooked Patagonian-style",
      "Day 1: 9:00 PM - Fireside stories about gaucho traditions and folk music",

      "Day 2: 7:30 AM - Optional early morning ranch activities and chores",
      "Day 2: 8:30 AM - Hearty traditional breakfast",
      "Day 2: 9:30 AM - Sheep shearing demonstration and wool processing",
      "Day 2: 11:00 AM - Gaucho skills workshop (lasso techniques, horse care)",
      "Day 2: 12:30 PM - Final horseback ride across the pampas",
      "Day 2: 2:00 PM - Farewell lunch",
      "Day 2: 3:30 PM - Departure for Puerto Natales",
      "Day 2: 5:00 PM - Arrive in Puerto Natales",
    ],

    faqs: [
      {
        question: "Do I need horseback riding experience?",
        answer:
          "No prior riding experience is necessary. Our gentle Criollo horses are selected for their calm temperament, and the gauchos provide instruction suitable for all levels, from first-timers to experienced riders. Rides can be adapted to your comfort level, from gentle walks to more spirited canters for those with experience. Safety is our priority, with appropriate horses matched to rider ability.",
      },
      {
        question: "What are the accommodations like at the estancia?",
        answer:
          "Accommodations are in the historic main farmhouse, which has been in the same family for generations. Rooms are comfortable but rustic, reflecting authentic Patagonian ranch life. Most rooms are shared with 2-4 guests per room in single beds, with shared bathrooms. The farmhouse features traditional wood heating, a cozy common area with fireplace, and simple amenities. This is not luxury accommodation but an authentic cultural immersion with basic comforts including hot water and electricity.",
      },
      {
        question: "What should I pack for this experience?",
        answer:
          "We recommend comfortable clothing suitable for outdoor activities, including long pants for riding (jeans or similar), closed sturdy shoes or boots, layers for changing weather (including waterproof jacket), sunscreen, hat, and gloves. Nights can be cool even in summer, so bring a warm layer. Riding helmets are provided but you're welcome to bring your own if preferred. A small day pack for personal items during activities is useful, as are personal water bottles and camera.",
      },
    ],
  },
  {
    title: "Ushuaia & Tierra del Fuego Explorer",
    description:
      "Journey to the 'End of the World' in Tierra del Fuego, exploring the southernmost city of Ushuaia, cruising the Beagle Channel past seals and seabird colonies, and hiking through subpolar forests in the remote national park.",
    city: "Ushuaia",
    country: "Argentina",
    region: "Tierra del Fuego",
    images: [
      "/images/tours/patagonia/beagle-channel.jpg",
      "/images/tours/patagonia/tierra-del-fuego-np.jpg",
    ],
    duration: "3 days",
    price: "$780",
    rating: 4.8,
    tags: ["End of the World", "National Park", "Boat Tour"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address: "Tourist Pier, Maipú Avenue, Ushuaia, Argentina",
      coordinates: {
        latitude: -54.8099,
        longitude: -68.3032,
      },
      instructions:
        "Meet at the main tourist pier information booth. Your guide will be holding a 'Tierra del Fuego Explorer' sign. Please arrive 15 minutes before departure.",
      contactNumber: "+54 2901 412876",
      contactEmail: "ushuaia@paragontrails.com",
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
      "Cruise the historic Beagle Channel to witness diverse marine wildlife",
      "Visit penguin colonies on remote islands (seasonal)",
      "Hike through southernmost subpolar forests in Tierra del Fuego National Park",
      "Ride the historic 'End of the World Train' along prisoner-built tracks",
      "Stand at the true end of the Pan-American Highway at Lapataia Bay",
    ],

    inclusions: [
      "All transportation during the program",
      "2 nights accommodation in downtown Ushuaia hotel",
      "Beagle Channel navigation with certified captain",
      "Guided hiking in Tierra del Fuego National Park",
      "End of the World Train ticket",
      "All national park entrance fees",
      "Daily breakfast and one welcome dinner",
      "Professional bilingual guide throughout",
    ],

    exclusions: [
      "Flights to/from Ushuaia",
      "Airport transfers",
      "Meals not specified in the itinerary",
      "Optional activities like penguin island landing fees",
      "Winter equipment rental (if needed)",
      "Travel insurance",
      "Gratuities",
    ],

    itinerary: [
      "Day 1: 10:00 AM - Meet at Ushuaia Tourist Pier for welcome briefing",
      "Day 1: 10:30 AM - Beagle Channel navigation aboard comfortable catamaran",
      "Day 1: 11:30 AM - Visit to Les Eclaireurs Lighthouse and sea lion colony",
      "Day 1: 12:30 PM - Navigate to Bird Island to observe cormorants and other seabirds",
      "Day 1: 1:30 PM - Optional landing at Martillo Island for penguin observation (seasonal, additional fee)",
      "Day 1: 3:30 PM - Return to Ushuaia harbor",
      "Day 1: 4:30 PM - Hotel check-in and free time",
      "Day 1: 7:30 PM - Welcome dinner featuring king crab and local specialties",

      "Day 2: 8:30 AM - Hotel breakfast",
      "Day 2: 9:30 AM - Pickup for Tierra del Fuego National Park excursion",
      "Day 2: 10:30 AM - Board the historic 'End of the World Train'",
      "Day 2: 11:30 AM - Arrive at National Park entrance",
      "Day 2: 12:00 PM - Guided hike along coastal trail (moderate, 5km)",
      "Day 2: 1:30 PM - Picnic lunch at scenic point (weather permitting)",
      "Day 2: 2:30 PM - Visit Lapataia Bay, the end of the Pan-American Highway",
      "Day 2: 4:00 PM - Return to Ushuaia with free evening",

      "Day 3: 8:30 AM - Hotel breakfast",
      "Day 3: 10:00 AM - Visit to Maritime & Prison Museum in former penitentiary",
      "Day 3: 12:00 PM - Walking tour of historic Ushuaia",
      "Day 3: 1:30 PM - Visit to End of the World Museum",
      "Day 3: 3:00 PM - Program conclusion with farewell at central Ushuaia",
    ],

    faqs: [
      {
        question: "When is the best time to visit Ushuaia?",
        answer:
          "The prime season is December through March (austral summer) when temperatures average 5-15°C (41-59°F) with longer daylight hours (up to 17 hours). This period offers the best hiking conditions and wildlife viewing, including penguin colonies. The shoulder seasons (October-November and April) offer fewer tourists but cooler temperatures and some seasonal attractions may be limited. Winter (May-September) brings snow activities but shorter days and many boat excursions don't operate.",
      },
      {
        question: "Will we see penguins during this tour?",
        answer:
          "Penguin viewing opportunities depend on the season. The Magellanic and Gentoo penguin colonies at Martillo Island are typically present from October through April, with the peak period being November to March when chicks are visible. Our Beagle Channel cruise passes near the colony, with an optional island landing available (additional fee) during permitted times. Other wildlife viewable year-round includes sea lions, imperial cormorants, albatross, and sometimes dolphins.",
      },
      {
        question:
          "How difficult are the hikes in Tierra del Fuego National Park?",
        answer:
          "The hikes are generally moderate, covering 5-7 km (3-4.5 miles) on established trails with minimal elevation gain. The coastal trail features gentle terrain with some rocky sections and roots, suitable for most fitness levels. The weather can be the most challenging aspect, as Tierra del Fuego is known for sudden wind and rain even in summer months. We adapt routes based on conditions and participant abilities, with alternative shorter options available if needed.",
      },
    ],
  },
];

export default patagoniaTours;
