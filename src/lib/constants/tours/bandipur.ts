import { Tour } from "@/lib/interfaces/services/tours";

export const bandipurTours: Tour[] = [
  {
    title: "Wildlife Safari: Tiger & Elephant Expedition",
    description:
      "Explore Bandipur National Park's diverse ecosystems on an exclusive safari led by wildlife experts, with prime opportunities to spot Bengal tigers, wild elephants, leopards, and over 200 bird species in their natural habitat.",
    city: "Bandipur",
    country: "India",
    state: "Karnataka",
    region: "Western Ghats",
    images: [
      "/images/tours/bandipur/tiger-safari.jpg",
      "/images/tours/bandipur/elephant-sighting.jpg",
    ],
    duration: "Full day",
    price: "$195",
    rating: 4.9,
    tags: ["Safari", "Tigers", "Wildlife Photography"],

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
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-03-15",
      "2024-03-20",
      "2024-04-05",
      "2024-04-15",
      "2024-04-25",
      "2024-05-05",
      "2024-05-15",
      "2024-05-25",
      "2024-06-05",
      "2024-06-15",
      "2024-10-15",
      "2024-10-25",
      "2024-11-05",
      "2024-11-15",
    ],
    highlights: [
      "Exclusive safari with expert naturalist guides in prime tiger habitat",
      "Morning and afternoon game drives for maximum wildlife viewing",
      "Opportunities to spot Bengal tigers, wild elephants, and leopards",
      "Bird watching with over 200 species in diverse habitats",
      "Off-road safari experience in specialized 4x4 vehicles",
    ],
    inclusions: [
      "Full-day safari with professional wildlife guide",
      "Park entry fees and permits",
      "Transportation in 4x4 safari vehicle",
      "Packed lunch and refreshments",
      "Binoculars and wildlife field guides",
    ],
    exclusions: [
      "Accommodation (can be arranged for additional fee)",
      "Camera fees inside the national park",
      "Alcoholic beverages",
      "Gratuities for guides and drivers",
      "Personal expenses and souvenirs",
    ],
    itinerary: [
      "5:30 AM: Pickup from your accommodation",
      "6:00 AM: Arrive at park entrance for permit processing",
      "6:30 AM: Morning safari drive through tiger territories",
      "10:30 AM: Break for packed breakfast at designated rest area",
      "11:30 AM: Continue safari through different zones of the park",
      "1:00 PM: Lunch break at a scenic location",
      "2:30 PM: Afternoon safari focusing on elephant habitats",
      "5:30 PM: Exit park and return to accommodation",
    ],
    meetingPoint: {
      address:
        "Bandipur National Park Main Entrance, Gundlupet, Karnataka, India",
      coordinates: {
        latitude: 11.6745,
        longitude: 76.6335,
      },
      instructions:
        "Meet your safari guide at the main entrance gate of Bandipur National Park. Look for a green jeep with 'Paragon Wildlife Expeditions' logo. Please arrive 30 minutes before the scheduled departure time for permit processing and safari briefing.",
      contactNumber: "+91 94321 56789",
      contactEmail: "safari@paragontrails.com",
    },
    cancellationPolicy:
      "Full refund if canceled 7 days before the safari. 50% refund if canceled 3-7 days before. No refund for cancellations less than 72 hours prior to the safari or in case of no-show.",
    faqs: [
      {
        question: "What are the chances of seeing tigers?",
        answer:
          "While wildlife sightings can never be guaranteed, Bandipur has one of India's highest tiger densities. Our experienced naturalists know the territories and behaviors of resident tigers, giving us a 60-70% chance of sightings during the dry season (March-June). Even without tigers, you'll encounter diverse wildlife including elephants, gaur (Indian bison), leopards, deer species, and numerous birds.",
      },
      {
        question: "What should I wear for the safari?",
        answer:
          "Dress in neutral, earth-toned clothing to blend into the environment. Lightweight, breathable fabrics are best for daytime safaris. Sturdy walking shoes or sandals are recommended. Bring a hat, sunglasses, and sunscreen for sun protection. Avoid bright colors and strong fragrances that can disturb wildlife.",
      },
      {
        question: "Are meals included during the safari?",
        answer:
          "Yes, we provide a packed lunch and refreshments during the full-day safari. Our meals are prepared with fresh, local ingredients and can accommodate dietary restrictions with advance notice. We also carry plenty of water to keep you hydrated throughout the day.",
      },
      {
        question: "What if it rains during the safari?",
        answer:
          "Safaris operate rain or shine, as wildlife is often more active during light rain. We provide ponchos for light showers, but please dress appropriately for wet conditions. Heavy rains may lead to temporary road closures, in which case we will adjust the itinerary accordingly to ensure your safety and comfort.",
      },
      {
        question: "Can children join the safari?",
        answer:
          "Yes, children are welcome on our safaris. We recommend ages 6 and up for full-day safaris due to the length and potential for bumpy rides. Children under 12 must be accompanied by an adult. We can provide child-friendly meals and activities to keep younger participants engaged.",
      },
      {
        question: "What safety measures are in place during the safari?",
        answer:
          "Your safety is our top priority. Our guides are trained in wildlife safety protocols and carry first aid kits. We maintain a safe distance from all wildlife and follow strict guidelines to minimize disturbance. All vehicles are equipped with seat belts, and we provide safety briefings before departure. In case of emergencies, we have communication devices to contact local authorities.",
      },
      {
        question: "Can I bring my own camera?",
        answer:
          "Absolutely! We encourage you to bring your camera to capture the incredible wildlife and landscapes. A telephoto lens (200mm or longer) is recommended for close-up shots. If you need assistance with photography tips, our guides are happy to help. Please ensure your camera equipment is securely stored during the safari to prevent damage.",
      },
    ],
  },
  {
    title: "Indigenous Soliga Tribe Cultural Experience",
    description:
      "Connect with the indigenous Soliga tribe who have called the Bandipur forests home for centuries. Learn their traditional knowledge of medicinal plants, participate in cultural rituals, and understand their sustainable forest conservation practices.",
    city: "Bandipur",
    country: "India",
    state: "Karnataka",
    region: "Western Ghats",
    images: [
      "/images/tours/bandipur/soliga-tribe.jpg",
      "/images/tours/bandipur/medicinal-plants.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Indigenous", "Cultural", "Conservation"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    availableDates: [
      "2024-04-10",
      "2024-04-20",
      "2024-05-10",
      "2024-05-20",
      "2024-06-10",
      "2024-06-20",
      "2024-07-10",
      "2024-07-20",
      "2024-08-10",
      "2024-08-20",
      "2024-10-10",
      "2024-10-20",
      "2024-11-10",
      "2024-11-20",
    ],
    highlights: [
      "Authentic cultural exchange with the indigenous Soliga tribe",
      "Guided forest walk to learn about medicinal plants and their uses",
      "Participate in traditional tribal rituals and ceremonies",
      "Learn sustainable forest conservation practices",
      "Share a traditional meal prepared with forest-gathered ingredients",
    ],
    inclusions: [
      "Professional guide and tribal elder as host",
      "Transportation to and from the Soliga settlement",
      "Traditional Soliga meal and refreshments",
      "Participation in cultural activities and demonstrations",
      "Contribution to community development fund",
    ],
    exclusions: [
      "Accommodation (can be arranged for additional fee)",
      "Personal expenses and souvenirs",
      "Gratuities (discouraged as per tribal customs)",
      "Professional photography services",
    ],
    itinerary: [
      "8:30 AM: Departure from meeting point to Soliga settlement",
      "9:30 AM: Welcome ceremony and introduction to tribal elders",
      "10:00 AM: Guided forest walk to learn about medicinal plants",
      "12:00 PM: Demonstration of traditional skills (bow making, fire starting)",
      "1:00 PM: Traditional lunch with the community",
      "2:30 PM: Cultural sharing session and storytelling",
      "3:30 PM: Optional participation in seasonal activities",
      "4:30 PM: Return to meeting point",
    ],
    meetingPoint: {
      address:
        "BR Hills Forest Department Office, Biligiriranga Hills, Karnataka, India",
      coordinates: {
        latitude: 11.9906,
        longitude: 77.1454,
      },
      instructions:
        "Meet your guide at the BR Hills Forest Department Office. Your guide will be wearing traditional Soliga attire and will hold a sign with 'Soliga Cultural Experience'. Please arrive 15 minutes before the scheduled departure time.",
      contactNumber: "+91 94322 67890",
      contactEmail: "cultural@paragontrails.com",
    },
    cancellationPolicy:
      "Full refund if canceled 5 days before the experience. 50% refund if canceled 2-5 days before. No refund for cancellations less than 48 hours prior or in case of no-show.",
    faqs: [
      {
        question: "How does this tour benefit the local community?",
        answer:
          "This program was developed in partnership with Soliga tribal elders and 80% of tour proceeds go directly to the community. Your participation helps fund education, healthcare, and forest conservation initiatives while providing sustainable income for tribal families. This economic alternative helps preserve their traditional knowledge and reduces dependence on forest resources.",
      },
      {
        question: "What should I wear for the cultural experience?",
        answer:
          "Wear comfortable, breathable clothing suitable for walking in the forest. Long sleeves and pants are recommended to protect against insects and thorns. Sturdy shoes or hiking boots are essential for uneven terrain. We also suggest bringing a hat, sunglasses, and sunscreen for sun protection.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. The Soliga community welcomes young visitors and provides engaging activities tailored to different age groups. Children will learn about traditional forest skills, participate in cultural games, and enjoy storytelling sessions. Parental supervision is required for younger participants.",
      },
      {
        question: "What can I expect to learn during the tour?",
        answer:
          "You will gain insights into the Soliga tribe's deep connection with the forest, including their sustainable practices, medicinal plant knowledge, and cultural traditions. The experience includes hands-on activities like preparing traditional meals, learning about forest conservation, and participating in rituals that honor nature. You'll leave with a greater appreciation for indigenous wisdom and its relevance to modern conservation efforts.",
      },
      {
        question: "Are meals provided during the tour?",
        answer:
          "Yes, a traditional Soliga meal is included, featuring locally sourced ingredients and recipes passed down through generations. Dietary restrictions can be accommodated with advance notice. The meal is prepared in a communal setting, allowing you to experience the tribe's culinary traditions firsthand.",
      },
      {
        question: "What is the best time to visit the Soliga community?",
        answer:
          "The Soliga community can be visited year-round, but the best time is from October to March when the weather is cooler and more comfortable for outdoor activities. During the monsoon season (June-September), access may be limited due to heavy rains, and some activities may be modified for safety. We recommend checking with us for seasonal highlights and any special events.",
      },
    ],
  },
  {
    title: "Bandipur Wilderness Photography Workshop",
    description:
      "Perfect your wildlife photography skills with expert guidance in one of India's premier tiger reserves. Learn specialized techniques for capturing elusive wildlife, dramatic landscapes, and macro shots of Bandipur's rich biodiversity.",
    city: "Bandipur",
    country: "India",
    state: "Karnataka",
    region: "Western Ghats",
    images: [
      "/images/tours/bandipur/photography-workshop.jpg",
      "/images/tours/bandipur/wildlife-camera.jpg",
    ],
    duration: "2 days",
    price: "$295",
    rating: 4.9,
    tags: ["Photography", "Workshop"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "art-and-music",
    availableDates: [
      "2024-03-10",
      "2024-03-17",
      "2024-03-24",
      "2024-03-31",
      "2024-04-07",
      "2024-04-14",
      "2024-04-21",
      "2024-04-28",
      "2024-05-05",
      "2024-05-12",
      "2024-05-19",
      "2024-05-26",
      "2024-06-02",
      "2024-06-09",
      "2024-06-16",
      "2024-06-23",
      "2024-06-30",
      "2024-10-10",
      "2024-10-17",
      "2024-10-24",
      "2024-10-31",
      "2024-11-07",
      "2024-11-14",
      "2024-11-21",
      "2024-11-28",
    ],
    highlights: [
      "Expert-led photography workshop in Bandipur Tiger Reserve",
      "Small group size for personalized instruction",
      "Focus on wildlife, landscape, and macro photography",
      "Post-processing tips for enhancing your images",
      "All skill levels welcome, from beginners to advanced",
    ],
    inclusions: [
      "2 days of guided photography sessions",
      "Transportation during the workshop",
      "Accommodation in comfortable lodges",
      "All meals and refreshments",
      "Use of professional camera equipment (if needed)",
    ],
    exclusions: [
      "International and domestic airfare",
      "Visa and travel insurance",
      "Personal expenses and souvenirs",
      "Gratuities for guides and drivers",
      "Optional activities not mentioned in inclusions",
    ],
    itinerary: [
      "Day 1: Arrival and afternoon safari with photography focus",
      "Evening session on wildlife photography techniques",
      "Dinner and discussion on photography tips and experiences",
      "Day 2: Early morning safari for best light conditions",
      "Mid-morning session on landscape and macro photography",
      "Lunch and feedback session on participant photos",
      "Afternoon at leisure or optional photo editing workshop",
      "Evening wildlife drive to apply new skills in the field",
    ],
    meetingPoint: {
      address:
        "Jungle Lodges and Resorts, Bandipur Safari Lodge, Karnataka, India",
      coordinates: {
        latitude: 11.6467,
        longitude: 76.6294,
      },
      instructions:
        "Meet at the reception area of Jungle Lodges and Resorts Bandipur Safari Lodge. Your photography instructor will greet you with professional camera equipment. Please bring your own camera gear and arrive 15 minutes before the scheduled workshop start time.",
      contactNumber: "+91 94323 78901",
      contactEmail: "photography@paragontrails.com",
    },
    cancellationPolicy:
      "Full refund if canceled 14 days before the workshop. 50% refund if canceled 7-14 days before. No refund for cancellations less than 7 days prior to the workshop or in case of no-show.",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "For wildlife photography, we recommend a DSLR or mirrorless camera with a telephoto lens (minimum 300mm, ideally 400-600mm). Bring a sturdy tripod, extra batteries, memory cards, and a laptop for our evening editing sessions. If you don't have suitable equipment, we offer telephoto lens rentals with advance notice. Smartphone photographers are welcome but will have limited opportunities for close-up wildlife shots.",
      },
      {
        question: "Do I need prior photography experience?",
        answer:
          "This workshop is designed for all skill levels, from beginners to advanced photographers. Our expert guides will provide personalized instruction based on your experience level, covering topics like composition, lighting, and wildlife behavior. We also offer post-processing tips for enhancing your images in software like Lightroom and Photoshop.",
      },
      {
        question: "What is the group size for the workshop?",
        answer:
          "To ensure personalized attention, we limit each workshop to a maximum of 8 participants. This allows for hands-on guidance and ample opportunities for individual feedback on your photography techniques.",
      },
      {
        question: "What if the weather conditions are not ideal?",
        answer:
          "Wildlife photography often involves unpredictable weather. We will adapt our schedule to make the most of available light and conditions. Overcast days can actually provide excellent diffused lighting for wildlife shots. If heavy rains occur, we have alternative indoor sessions focused on editing and theory.",
      },
      {
        question: "Will we get to see and photograph wildlife?",
        answer:
          "While wildlife sightings can never be guaranteed, Bandipur has excellent biodiversity. We've designed our photography routes and timing to maximize wildlife viewing opportunities. Our experienced naturalist guides know the habits and preferred locations of various species. Even without major predators like tigers, you'll have abundant opportunities to photograph elephants, deer, primates, and over 200 bird species.",
      },
    ],
  },
  {
    title: "Bird Watching Expedition: Nilgiri Specialties",
    description:
      "Discover Bandipur's incredible avian diversity with an expert ornithologist, focusing on endemic species of the Nilgiri Biosphere Reserve including the Malabar Trogon, Nilgiri Flycatcher, and Malabar Whistling Thrush.",
    city: "Bandipur",
    country: "India",
    state: "Karnataka",
    region: "Western Ghats",
    images: [
      "/images/tours/bandipur/birdwatching.jpg",
      "/images/tours/bandipur/malabar-trogon.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Birding", "Nature", "Endemic Species"],

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
      "2024-03-12",
      "2024-03-19",
      "2024-03-26",
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
      "2024-10-12",
      "2024-10-19",
      "2024-10-26",
      "2024-11-02",
      "2024-11-09",
      "2024-11-16",
      "2024-11-23",
      "2024-11-30",
    ],
    highlights: [
      "Guided bird watching tour in Bandipur with expert ornithologist",
      "Focus on endemic and migratory bird species of the Nilgiri Biosphere Reserve",
      "Use of high-quality binoculars and field guides",
      "Photography tips for capturing birds in their natural habitat",
      "Small group size for an intimate and engaging experience",
    ],
    inclusions: [
      "Professional ornithologist guide",
      "Transportation during the tour",
      "High-quality binoculars and field guides",
      "Packed breakfast and refreshments",
      "Photography tips and assistance",
    ],
    exclusions: [
      "Accommodation (can be arranged for additional fee)",
      "Camera fees inside the national park",
      "Alcoholic beverages",
      "Gratuities for guides and drivers",
      "Personal expenses and souvenirs",
    ],
    itinerary: [
      "6:00 AM: Pickup from your accommodation",
      "6:30 AM: Arrive at the birding site and begin the expedition",
      "9:00 AM: Break for packed breakfast and bird discussion",
      "10:00 AM: Continue bird watching and data collection",
      "12:00 PM: Return to starting point and end of tour",
    ],
    meetingPoint: {
      address:
        "Bandipur Bird Conservation Center, Moolehole Road, Bandipur, Karnataka, India",
      coordinates: {
        latitude: 11.6372,
        longitude: 76.6087,
      },
      instructions:
        "Meet at the entrance of Bandipur Bird Conservation Center on Moolehole Road. Your ornithologist guide will welcome you with high-quality binoculars and bird identification guides. Please wear earth-toned clothing and arrive 15 minutes before the scheduled start time.",
      contactNumber: "+91 94324 89012",
      contactEmail: "birding@paragontrails.com",
    },
    cancellationPolicy:
      "Full refund if canceled 7 days before the tour. 50% refund if canceled 3-7 days before. No refund for cancellations less than 72 hours prior to the tour or in case of no-show.",
    faqs: [
      {
        question: "When is the best time for bird watching in Bandipur?",
        answer:
          "While Bandipur offers good birding year-round, the optimal season is November to March when resident birds are joined by winter migrants. Early mornings (6-9am) typically provide the most active bird sightings and best light conditions. During the monsoon (June-September), lush vegetation makes spotting more challenging but brings spectacular breeding plumages and nesting behaviors.",
      },
      {
        question: "What should I bring for the bird watching tour?",
        answer:
          "Please bring binoculars (we can provide rentals if needed), a field guide or birding app, comfortable walking shoes, and weather-appropriate clothing. A notebook for field notes and a camera with a zoom lens are also recommended. We provide refreshments, but you may want to bring water and snacks.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 8 and up. We encourage young birders to participate and learn about local species. Our guides will tailor the experience to keep children engaged, including fun facts and interactive activities like bird calls.",
      },
      {
        question: "What if I can't identify a bird?",
        answer:
          "Don't worry! Our expert guides are here to help you learn and identify species in real-time. We encourage you to take notes and ask questions throughout the tour. If you're new to birding, we can provide a brief introduction to common identification techniques and tips for recognizing key features like size, color, and behavior.",
      },
      {
        question: "Can I bring my own birding equipment?",
        answer:
          "Absolutely! If you have your own binoculars, field guide, or birding app, please bring them along. We also recommend bringing a notebook for field notes and a camera with a zoom lens for capturing photos of the birds you see. If you need assistance with equipment recommendations, our guides are happy to help.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable. If weather conditions make the tour unsafe, we will reschedule or provide a full refund.",
      },
    ],
  },
  {
    title: "Bandipur Sunset Jeep Safari & Stargazing",
    description:
      "Experience the magic of Bandipur as day transitions to night with an evening safari capturing golden hour light, followed by dinner under the stars and guided astronomy with powerful telescopes far from light pollution.",
    city: "Bandipur",
    country: "India",
    state: "Karnataka",
    region: "Western Ghats",
    images: [
      "/images/tours/bandipur/sunset-safari.jpg",
      "/images/tours/bandipur/stargazing.jpg",
    ],
    duration: "5 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Sunset", "Safari", "Astronomy"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    availableDates: [
      "2024-03-18",
      "2024-03-25",
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
      "2024-10-18",
      "2024-10-25",
      "2024-11-01",
      "2024-11-08",
      "2024-11-15",
      "2024-11-22",
      "2024-11-29",
    ],
    highlights: [
      "Evening safari in Bandipur National Park",
      "Stunning sunset views over the forest",
      "Guided stargazing with powerful telescopes",
      "Dinner under the stars with local cuisine",
      "Opportunity to see nocturnal wildlife",
    ],
    inclusions: [
      "Evening jeep safari with professional guide",
      "Park entry fees and permits",
      "Transportation in open-top jeep",
      "Dinner at a scenic location",
      "Use of telescopes for stargazing",
    ],
    exclusions: [
      "Accommodation (can be arranged for additional fee)",
      "Alcoholic beverages",
      "Gratuities for guides and drivers",
      "Personal expenses and souvenirs",
    ],
    itinerary: [
      "4:30 PM: Pickup from your accommodation",
      "5:00 PM: Arrive at park entrance for permit processing",
      "5:30 PM: Evening safari drive with sunset viewing",
      "7:30 PM: Return from safari and drive to stargazing location",
      "8:00 PM: Dinner served under the stars",
      "9:00 PM: Guided stargazing session",
      "10:00 PM: Return to accommodation",
    ],
    meetingPoint: {
      address: "Bandipur Safari Lodge, Karnataka, India",
      coordinates: {
        latitude: 11.6467,
        longitude: 76.6294,
      },
      instructions:
        "Meet at the outdoor lounge area of Bandipur Safari Lodge. Your guide will be waiting with astronomy equipment and safari gear. Please wear warm clothing for the evening and bring a light jacket. Arrive 15 minutes before the scheduled departure time.",
      contactNumber: "+91 94325 90123",
      contactEmail: "stargazing@paragontrails.com",
    },
    cancellationPolicy:
      "Full refund if canceled 7 days before the safari. 50% refund if canceled 3-7 days before. No refund for cancellations less than 72 hours prior to the safari or in case of no-show.",
    faqs: [
      {
        question: "What might we see during an evening safari?",
        answer:
          "Evening hours offer excellent wildlife viewing as animals become active in the cooler temperatures. You're likely to encounter elephants, gaur (Indian bison), various deer species, and potentially predators like leopards beginning their nocturnal hunts. While tigers are sometimes spotted, they're less predictable in evenings. After sunset, we may encounter nocturnal species like civets, jungle cats, and nightjars during our return journey.",
      },
      {
        question: "What should I wear for the evening safari?",
        answer:
          "Dress in layers as temperatures can drop significantly after sunset. Long sleeves and pants are recommended to protect against insects. Comfortable walking shoes or sandals are ideal for the jeep ride. Bring a light jacket or sweater for warmth during stargazing. Avoid bright colors and strong fragrances that can disturb wildlife.",
      },
      {
        question: "Is dinner included in the tour?",
        answer:
          "Yes, a delicious dinner is included, featuring local specialties prepared with fresh ingredients. We can accommodate dietary restrictions with advance notice. Dinner will be served in a scenic location under the stars, enhancing your experience of the natural surroundings.",
      },
      {
        question: "What if it rains during the safari?",
        answer:
          "Safaris operate rain or shine, as wildlife is often more active during light rain. We provide ponchos for light showers, but please dress appropriately for wet conditions. Heavy rains may lead to temporary road closures, in which case we will adjust the itinerary accordingly to ensure your safety and comfort.",
      },
      {
        question: "Is stargazing guaranteed?",
        answer:
          "While we plan this tour around optimal stargazing conditions, visibility depends on weather patterns. If clouds obstruct viewing, we offer an extended cultural evening program with local storytelling and wildlife documentaries as an alternative. In case of heavy rain, we can reschedule the stargazing portion for another evening during your stay or provide a partial refund.",
      },
    ],
  },
];

export default bandipurTours;
