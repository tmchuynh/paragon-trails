import { Tour } from "@/lib/interfaces/services/tours";

export const newYorkTours: Tour[] = [
  {
    title: "Manhattan Highlights Walking Tour",
    description:
      "Experience the essential landmarks of Manhattan on this expertly guided walking tour covering iconic sites from Times Square to Grand Central Terminal, with insider stories and historical context.",
    city: "New York",
    country: "United States",
    state: "New York",
    region: "East Coast",
    images: [
      "/images/tours/new-york/times-square.jpg",
      "/images/tours/new-york/grand-central.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Walking Tour", "Landmarks", "History"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "Times Square, Broadway & 7th Avenue, New York, NY 10036",
      coordinates: {
        latitude: 40.758,
        longitude: -73.9855,
      },
      instructions:
        "Meet at the red steps in Times Square (TKTS booth). Your guide will be holding a sign with 'Manhattan Highlights Tour' written on it.",
      contactNumber: "+1 212-555-1234",
      contactEmail: "nyctours@paragontrails.com",
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
      "2023-12-26",
      "2023-12-27",
      "2023-12-28",
      "2023-12-29",
      "2023-12-30",
      "2024-01-02",
      "2024-01-03",
      "2024-01-04",
      "2024-01-05",
      "2024-01-06",
      "2024-01-07",
      "2024-01-09",
      "2024-01-10",
      "2024-01-11",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-16",
      "2024-01-17",
      "2024-01-18",
      "2024-01-19",
      "2024-01-20",
      "2024-01-21",
      "2024-01-23",
      "2024-01-24",
      "2024-01-25",
      "2024-01-26",
      "2024-01-27",
      "2024-01-28",
      "2024-01-30",
      "2024-01-31",
      "2024-02-01",
      "2024-02-02",
      "2024-02-03",
      "2024-02-04",
      "2024-02-06",
      "2024-02-07",
      "2024-02-08",
      "2024-02-09",
      "2024-02-10",
      "2024-02-11",
      "2024-02-13",
      "2024-02-14",
      "2024-02-15",
      "2024-02-16",
      "2024-02-17",
      "2024-02-18",
      "2024-02-20",
      "2024-02-21",
      "2024-02-22",
      "2024-02-23",
      "2024-02-24",
      "2024-02-25",
      "2024-02-27",
      "2024-02-28",
      "2024-02-29",
    ],

    highlights: [
      "Explore Times Square's vibrant energy and history as the theater district",
      "Visit the majestic Grand Central Terminal with its astronomical ceiling",
      "Walk down Fifth Avenue with its luxury shops and iconic architecture",
      "See the New York Public Library and its famous lion sculptures",
      "Experience Rockefeller Center and its significance in NYC culture",
    ],

    inclusions: [
      "Professional licensed NYC tour guide",
      "Insider stories and historical context about each landmark",
      "Small group size (maximum 12 participants)",
      "Visit to Grand Central Terminal's hidden whispering gallery",
      "Map of Manhattan with recommendations for further exploration",
      "Audio headsets for groups of 6 or more",
    ],

    exclusions: [
      "Food and beverages",
      "Entry fees to optional attractions",
      "Subway fare if needed during tour (bring MetroCard or contactless payment)",
      "Gratuities (recommended for good service)",
      "Hotel pickup and drop-off",
    ],

    itinerary: [
      "10:00 - Meet at Times Square red steps for introduction",
      "10:15 - Times Square history and theater district exploration",
      "10:45 - Walk down 6th Avenue toward Bryant Park",
      "11:15 - Visit New York Public Library and Bryant Park",
      "11:45 - Walk to Grand Central Terminal",
      "12:15 - Grand Central Terminal tour including hidden features",
      "12:45 - Walk along 5th Avenue with commentary on landmark buildings",
      "13:15 - Visit Rockefeller Center and learn about its art and history",
      "13:45 - Tour conclusion at Rockefeller Center with final recommendations",
    ],

    faqs: [
      {
        question: "How much walking is involved in this tour?",
        answer:
          "This tour covers approximately 2 miles (3.2 km) at a leisurely pace with frequent stops. The terrain is flat sidewalks throughout Manhattan, but comfortable walking shoes are still recommended. We maintain a moderate pace suitable for most fitness levels.",
      },
      {
        question: "Will we go inside all the buildings mentioned?",
        answer:
          "We enter Grand Central Terminal and the New York Public Library main branch. Other buildings like Rockefeller Center are viewed primarily from the outside with detailed explanations of their significance, though you're welcome to visit their interiors after the tour concludes.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! Our guides engage younger participants with interesting facts and stories. The 4-hour duration and 2-mile walking distance should be considered for very young children. We recommend this tour for ages 8 and up.",
      },
    ],
  },

  {
    title: "Brooklyn Bridge & DUMBO Exploration",
    description:
      "Walk across the iconic Brooklyn Bridge while learning its fascinating history, then explore DUMBO's cobblestone streets, creative energy, renovated warehouses, and spectacular Manhattan skyline views.",
    city: "New York",
    country: "United States",
    state: "New York",
    region: "East Coast",
    images: [
      "/images/tours/new-york/brooklyn-bridge.jpg",
      "/images/tours/new-york/dumbo-view.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Brooklyn", "Architecture", "Photography"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",

    meetingPoint: {
      address:
        "City Hall Park Fountain, Broadway & Park Row, New York, NY 10007",
      coordinates: {
        latitude: 40.7127,
        longitude: -74.0059,
      },
      instructions:
        "Meet by the fountain in City Hall Park, near the Brooklyn Bridge entrance. Your guide will be holding a blue umbrella with 'Brooklyn Tour' written on it.",
      contactNumber: "+1 212-555-2345",
      contactEmail: "brooklyntours@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-18",
      "2023-12-20",
      "2023-12-22",
      "2023-12-27",
      "2023-12-29",
      "2024-01-03",
      "2024-01-05",
      "2024-01-08",
      "2024-01-10",
      "2024-01-12",
      "2024-01-15",
      "2024-01-17",
      "2024-01-19",
      "2024-01-22",
      "2024-01-24",
      "2024-01-26",
      "2024-01-29",
      "2024-01-31",
      "2024-02-02",
      "2024-02-05",
      "2024-02-07",
      "2024-02-09",
      "2024-02-12",
      "2024-02-14",
      "2024-02-16",
      "2024-02-19",
      "2024-02-21",
      "2024-02-23",
      "2024-02-26",
      "2024-02-28",
    ],

    highlights: [
      "Walk across the historic Brooklyn Bridge while learning about its engineering marvels",
      "Discover the fascinating story of the Roebling family who built the bridge",
      "Explore DUMBO's transformed industrial buildings and thriving arts scene",
      "Visit Brooklyn Bridge Park for spectacular Manhattan skyline photography",
      "Learn how DUMBO evolved from manufacturing center to creative hub",
    ],

    inclusions: [
      "Expert guide with knowledge of Brooklyn history and architecture",
      "Brooklyn Bridge historical narration",
      "DUMBO neighborhood exploration",
      "Recommendations for local eateries and shops",
      "Photography tips at best viewpoints",
      "Small group size (maximum 12 participants)",
    ],

    exclusions: [
      "Food and beverages",
      "MetroCard for optional return trip (approximately $2.75)",
      "Gratuities (optional but appreciated)",
      "Hotel pickup and drop-off",
    ],

    itinerary: [
      "10:00 - Meet at City Hall Park Fountain for introduction",
      "10:15 - Begin Brooklyn Bridge crossing with historical commentary",
      "10:45 - Photo stops at key viewpoints on the bridge",
      "11:15 - Complete bridge crossing and enter DUMBO neighborhood",
      "11:30 - Explore DUMBO's historic buildings and transformation story",
      "11:45 - Visit iconic photography locations including the Manhattan Bridge view",
      "12:15 - Walk through Brooklyn Bridge Park with waterfront views",
      "12:45 - Learn about local dining options and artisanal shops",
      "13:00 - Tour concludes with recommendations for further exploration",
    ],

    faqs: [
      {
        question: "Is the Brooklyn Bridge walk difficult?",
        answer:
          "The Brooklyn Bridge walk is approximately 1 mile (1.6 km) long and is suitable for most fitness levels. The pedestrian walkway is elevated above traffic, with a gradual incline as you ascend the bridge. We walk at a comfortable pace with several stops for photos and historical explanations. The entire bridge crossing takes about 30-40 minutes.",
      },
      {
        question: "What is the best time for photographs on this tour?",
        answer:
          "This tour offers excellent photography opportunities throughout, but morning light generally provides the best conditions for capturing the Manhattan skyline from Brooklyn. The iconic 'street view' photo spot in DUMBO framing the Manhattan Bridge is included in our route. Your guide will point out the best angles and can assist with taking group photos.",
      },
      {
        question: "How do we return to Manhattan after the tour?",
        answer:
          "The tour ends in DUMBO, Brooklyn. You can easily return to Manhattan via subway (F, A, or C lines), NYC Ferry, or by walking back across the Brooklyn Bridge on your own. Your guide will provide clear directions to public transportation options. Many visitors choose to extend their Brooklyn exploration by visiting nearby neighborhoods like Brooklyn Heights.",
      },
    ],
  },

  {
    title: "Harlem Gospel & Soul Food Experience",
    description:
      "Immerse yourself in the cultural richness of Harlem with a Sunday morning gospel service, followed by a historical walking tour and authentic soul food brunch at a legendary local restaurant.",
    city: "New York",
    country: "United States",
    state: "New York",
    region: "East Coast",
    images: [
      "/images/tours/new-york/harlem-gospel.jpg",
      "/images/tours/new-york/harlem-brownstones.jpg",
    ],
    duration: "4.5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Cultural", "Music", "Food"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",

    meetingPoint: {
      address: "135th Street & Lenox Avenue (Malcolm X Blvd), Harlem, NY 10037",
      coordinates: {
        latitude: 40.8144,
        longitude: -73.9408,
      },
      instructions:
        "Meet at the southwest corner of 135th St & Lenox Ave by the Harlem subway station. Your guide will be holding a sign reading 'Harlem Gospel Tour'.",
      contactNumber: "+1 212-555-3456",
      contactEmail: "harlemtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-17",
      "2023-12-24",
      "2023-12-31",
      "2024-01-07",
      "2024-01-14",
      "2024-01-21",
      "2024-01-28",
      "2024-02-04",
      "2024-02-11",
      "2024-02-18",
      "2024-02-25",
    ],

    highlights: [
      "Experience the soul-stirring power of a live gospel choir in a historic Harlem church",
      "Learn about Harlem's pivotal role in African American history and culture",
      "See iconic landmarks including the Apollo Theater and historic brownstones",
      "Enjoy authentic soul food brunch at a beloved local restaurant",
      "Discover how Harlem shaped music, literature, and civil rights movements",
    ],

    inclusions: [
      "Reserved seating at Sunday gospel service",
      "Guided walking tour of historical and cultural landmarks",
      "Soul food brunch with classic dishes (vegetarian options available)",
      "Local historian guide with deep knowledge of Harlem",
      "Small group experience (maximum 12 participants)",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Alcoholic beverages (available for purchase at brunch)",
      "Donations to church (optional but appreciated, $10 suggested)",
      "Personal purchases and souvenirs",
      "Gratuities for guide and restaurant staff",
    ],

    itinerary: [
      "09:30 - Meet at 135th St & Lenox Avenue for introduction",
      "09:45 - Brief orientation walk to church with historical context",
      "10:00 - Attend gospel service with spirited music and community worship",
      "11:30 - Walking tour of Harlem's cultural landmarks begins",
      "12:15 - Visit Apollo Theater and learn about musical legends",
      "12:45 - Explore historic brownstone neighborhoods",
      "13:15 - Arrive at local restaurant for authentic soul food brunch",
      "14:00 - Tour concludes with Harlem Renaissance discussion during meal",
    ],

    faqs: [
      {
        question: "What is the dress code for the gospel service?",
        answer:
          "Modest, respectful attire is required for the church service. We recommend business casual clothing - no shorts, flip-flops, tank tops or revealing clothing. Men should remove hats while in the church. The congregation welcomes visitors but expects appropriate dress and behavior.",
      },
      {
        question: "Is photography allowed during the gospel service?",
        answer:
          "Photography, video recording, and cell phone use are not permitted during the church service out of respect for the congregation and worship experience. Your guide will advise when photos are appropriate during other portions of the tour.",
      },
      {
        question: "What soul food dishes will we try at brunch?",
        answer:
          "The soul food brunch typically includes classic dishes such as fried chicken, waffles, collard greens, mac and cheese, candied yams, cornbread, and black-eyed peas. Vegetarian options are available with advance notice. The meal is served family-style for sharing and sampling different specialties.",
      },
    ],
  },

  {
    title: "Taste of NYC Food Tour: Lower East Side",
    description:
      "Discover the Lower East Side's rich immigrant history through its diverse cuisines, sampling delicacies from family-run establishments representing Jewish, Italian, Chinese, and Puerto Rican communities.",
    city: "New York",
    country: "United States",
    state: "New York",
    region: "East Coast",
    images: [
      "/images/tours/new-york/lower-east-side-food.jpg",
      "/images/tours/new-york/katzs-deli.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Food", "Cultural", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",

    meetingPoint: {
      address: "Essex Market, 88 Essex Street, New York, NY 10002",
      coordinates: {
        latitude: 40.7181,
        longitude: -73.9869,
      },
      instructions:
        "Meet inside Essex Market at the central seating area. Your guide will be holding a sign with 'NYC Food Tour' and wearing a red apron.",
      contactNumber: "+1 212-555-4567",
      contactEmail: "foodtour@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-19",
      "2023-12-20",
      "2023-12-22",
      "2023-12-23",
      "2023-12-26",
      "2023-12-27",
      "2023-12-29",
      "2023-12-30",
      "2024-01-02",
      "2024-01-03",
      "2024-01-05",
      "2024-01-06",
      "2024-01-09",
      "2024-01-10",
      "2024-01-12",
      "2024-01-13",
      "2024-01-16",
      "2024-01-17",
      "2024-01-19",
      "2024-01-20",
      "2024-01-23",
      "2024-01-24",
      "2024-01-26",
      "2024-01-27",
      "2024-01-30",
      "2024-01-31",
      "2024-02-02",
      "2024-02-03",
      "2024-02-06",
      "2024-02-07",
      "2024-02-09",
      "2024-02-10",
      "2024-02-13",
      "2024-02-14",
      "2024-02-16",
      "2024-02-17",
      "2024-02-20",
      "2024-02-21",
      "2024-02-23",
      "2024-02-24",
      "2024-02-27",
      "2024-02-28",
    ],

    highlights: [
      "Taste iconic NYC foods from historic establishments including Katz's Deli",
      "Sample authentic specialties from various immigrant communities",
      "Learn how different cultures shaped New York's food landscape",
      "Visit both century-old establishments and modern culinary innovators",
      "Explore the vibrant Lower East Side neighborhood with an expert guide",
    ],

    inclusions: [
      "Food tastings at 6 different establishments (equivalent to a full meal)",
      "Expert food guide with knowledge of culinary history",
      "Skip-the-line access at select popular eateries",
      "Small group experience (maximum 12 participants)",
      "Neighborhood map with additional food recommendations",
      "Bottled water",
    ],

    exclusions: [
      "Additional food and beverages beyond included tastings",
      "Transportation to and from meeting point",
      "Alcoholic beverages (available for purchase at some locations)",
      "Gratuities for guide (recommended but optional)",
    ],

    itinerary: [
      "11:00 - Meet at Essex Market for introduction to Lower East Side food history",
      "11:15 - First tasting of Lower East Side specialties in Essex Market",
      "11:45 - Visit traditional Jewish appetizing store for smoked fish and bialys",
      "12:15 - Sample handmade dumplings in Chinatown",
      "12:45 - Taste authentic Italian specialties from century-old establishment",
      "13:15 - Visit iconic Katz's Delicatessen for world-famous pastrami",
      "13:45 - Finish with traditional Jewish or Puerto Rican sweets",
      "14:00 - Tour concludes with recommendations for further food exploration",
    ],

    faqs: [
      {
        question: "How much food is included on this tour?",
        answer:
          "The tour includes 6 generous tastings that amount to more than a full meal. Come hungry! Each stop features signature items from that establishment, from Jewish delicatessen specialties to Italian pastries, Chinese dumplings, and more. The portions are substantial enough to give you a real taste of each cuisine.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "With advance notice, we can accommodate most dietary restrictions including vegetarian, pescatarian, and gluten-free diets. Please let us know your requirements when booking. Due to the specialized nature of many historical establishments, strict vegan or kosher diets are more challenging but we'll do our best to provide alternatives.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 1.5 miles (2.4 km) of walking at a leisurely pace over 3 hours, with frequent stops for food tastings. The Lower East Side is flat, making it an easy walk for most participants. Comfortable shoes are recommended.",
      },
    ],
  },

  {
    title: "Central Park Bike & Photography Adventure",
    description:
      "Explore Central Park's 843 acres by bicycle, stopping at scenic landmarks, hidden gems, and iconic movie locations while receiving photography tips from an expert guide during this eco-friendly adventure.",
    city: "New York",
    country: "United States",
    state: "New York",
    region: "East Coast",
    images: [
      "/images/tours/new-york/central-park-bike.jpg",
      "/images/tours/new-york/bethesda-fountain.jpg",
    ],
    duration: "2.5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Outdoor", "Active", "Photography"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",

    meetingPoint: {
      address:
        "Central Park Bicycle Shop, 56 W 56th Street, New York, NY 10019",
      coordinates: {
        latitude: 40.7631,
        longitude: -73.9767,
      },
      instructions:
        "Meet at the Central Park Bicycle Shop on 56th Street between 5th and 6th Avenues. Check in at the front desk and ask for the Paragon Trails bike tour.",
      contactNumber: "+1 212-555-5678",
      contactEmail: "centralparkbike@paragontrails.com",
    },

    availableDates: [
      "2023-12-16",
      "2023-12-17",
      "2023-12-23",
      "2023-12-24",
      "2023-12-30",
      "2023-12-31",
      "2024-01-06",
      "2024-01-07",
      "2024-01-13",
      "2024-01-14",
      "2024-01-20",
      "2024-01-21",
      "2024-01-27",
      "2024-01-28",
      "2024-02-03",
      "2024-02-04",
      "2024-02-10",
      "2024-02-11",
      "2024-02-17",
      "2024-02-18",
      "2024-02-24",
      "2024-02-25",
    ],

    highlights: [
      "Cover more ground than walking tours while enjoying the park's car-free paths",
      "Visit iconic locations including Bethesda Fountain and Strawberry Fields",
      "Discover hidden gems and secret spots most tourists miss",
      "Learn photography techniques for capturing the perfect Central Park shots",
      "Hear fascinating stories about the park's history and design",
    ],

    inclusions: [
      "Comfortable hybrid bike rental with helmet",
      "Professional guide with local knowledge and photography expertise",
      "Guided route covering major park landmarks",
      "Photography tips and assistance",
      "Bottled water",
      "Small group size (maximum 10 participants)",
    ],

    exclusions: [
      "Transportation to and from meeting point",
      "Food and additional beverages",
      "Professional camera equipment (bring your own)",
      "Gratuities (recommended but optional)",
      "Rain ponchos (available for purchase if needed)",
    ],

    itinerary: [
      "10:00 - Meet at bike shop for orientation and equipment fitting",
      "10:15 - Brief cycling safety tutorial and camera tips",
      "10:30 - Begin ride into Central Park via Columbus Circle entrance",
      "10:45 - Visit Strawberry Fields and John Lennon Memorial",
      "11:00 - Photography stop at Bethesda Fountain and Terrace",
      "11:20 - Ride to Bow Bridge for classic Central Park photography",
      "11:40 - Visit the Jacqueline Kennedy Onassis Reservoir",
      "12:00 - Explore the North Woods wilderness area",
      "12:20 - Return ride with stops at Movie locations in the park",
      "12:45 - Tour conclusion at original starting point",
    ],

    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "This tour is designed for casual riders, not advanced cyclists. Central Park's paths are relatively flat and easy to navigate. We ride at a leisurely pace with frequent stops for photos and explanations. Basic cycling ability is required, but you don't need to be athletic – if you can ride a bike for 20 minutes at a relaxed pace, you'll enjoy this tour.",
      },
      {
        question: "What type of camera should I bring?",
        answer:
          "Any camera is welcome, from smartphones to DSLRs! Our guide provides composition tips and suggests the best angles that work for any device. If using a smartphone, make sure it's charged. For those with advanced cameras, a mid-range zoom lens (24-70mm equivalent) is ideal for the varying distances we'll be shooting from.",
      },
      {
        question: "What happens in case of rain?",
        answer:
          "The tour operates in light rain (ponchos available for purchase), but will be canceled in cases of heavy rain, thunderstorms, or extreme weather. If canceled, you'll receive a full refund or can reschedule for another date. The decision is made 2 hours before tour start time and all participants are notified via email or phone.",
      },
    ],
  },

  {
    title: "New York By Night: City Lights & Observation Deck",
    description:
      "Experience the magic of New York after dark with an evening tour showcasing the city's spectacular illuminated skyline, including an observation deck visit for breathtaking nighttime panoramas.",
    city: "New York",
    country: "United States",
    state: "New York",
    region: "East Coast",
    images: [
      "/images/tours/new-york/night-skyline.jpg",
      "/images/tours/new-york/observation-deck.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Evening", "Skyline", "Photography"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "nightlife",

    meetingPoint: {
      address: "Bryant Park, 42nd St & 6th Ave, New York, NY 10018",
      coordinates: {
        latitude: 40.7536,
        longitude: -73.9832,
      },
      instructions:
        "Meet by the Bryant Park fountain near the 6th Avenue side. Your guide will be holding an illuminated sign with 'NY Nights Tour' on it.",
      contactNumber: "+1 212-555-6789",
      contactEmail: "nynights@paragontrails.com",
    },

    availableDates: [
      "2023-12-15",
      "2023-12-16",
      "2023-12-22",
      "2023-12-23",
      "2023-12-29",
      "2023-12-30",
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
      "Experience Times Square's dazzling lights and energy after dark",
      "Enjoy priority access to a premium observation deck for night views",
      "See illuminated landmarks like the Empire State Building and Chrysler Building",
      "Learn night photography techniques for capturing city lights",
      "Discover the fascinating stories behind NYC's iconic skyline",
    ],

    inclusions: [
      "Professional guide with knowledge of NYC architecture and history",
      "Priority access observation deck ticket ($45 value)",
      "Small group experience (maximum 10 participants)",
      "Night photography tips and assistance",
      "Map highlighting best evening viewpoints in Manhattan",
    ],

    exclusions: [
      "Transportation between locations (we use subway - bring MetroCard)",
      "Food and beverages",
      "Gratuities (recommended but optional)",
      "Hotel pickup and drop-off",
      "Tripods for photography (not permitted at observation deck)",
    ],

    itinerary: [
      "19:30 - Meet at Bryant Park for introduction and night photography basics",
      "19:45 - Walk to nearby Grand Central Terminal for illuminated architecture",
      "20:15 - Subway to Times Square for the ultimate light display experience",
      "20:45 - Walk to observation deck building with city history commentary",
      "21:15 - Priority access to observation deck for panoramic night views",
      "22:00 - Photography assistance and city landmark identification",
      "22:30 - Tour concludes at observation deck (you may stay longer if desired)",
    ],

    faqs: [
      {
        question: "Which observation deck do we visit?",
        answer:
          "We typically visit either the Edge at Hudson Yards, Summit One Vanderbilt, or Top of the Rock, depending on availability and optimal viewing conditions. Each offers spectacular but different perspectives of the city. We select the best option on the day of the tour based on weather and visibility forecasts.",
      },
      {
        question: "What should I bring for night photography?",
        answer:
          "Any camera is suitable, including smartphones. If you have a dedicated camera, bringing a fast lens (f/2.8 or wider) will help in low light. Tripods are not permitted at the observation decks, but our guide will show you stabilization techniques for sharp handheld night photos. Fingerless gloves are recommended in colder months for comfortable shooting.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 1.5 miles (2.4 km) of walking, plus standing time at observation points. We walk at a leisurely pace suitable for most fitness levels, and use the subway for one longer distance. Comfortable shoes are recommended.",
      },
    ],
  },
];

export default newYorkTours;
