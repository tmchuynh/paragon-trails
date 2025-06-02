import { Tour } from "@/lib/interfaces/services/tours";

export const austinTours: Tour[] = [
  {
    title: "Live Music Crawl & Backstage Access",
    description:
      "Experience Austin's legendary music scene with a local musician guide who provides VIP access to multiple venues, backstage introductions, and insider stories about the city's musical heritage.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/live-music-venue.jpg",
      "/images/tours/austin/backstage.jpg",
    ],
    duration: "4 hours",
    price: "$79",
    rating: 4.8,
    tags: ["Music", "Nightlife", "Cultural"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "600 Red River St, Austin, TX 78701",
      coordinates: {
        latitude: 30.2658,
        longitude: -97.7388,
      },
      instructions:
        "Meet your guide in front of Stubb's Bar-B-Q. Look for a guide wearing a 'Live Music Tour' t-shirt and holding a clipboard. Please arrive 15 minutes before the tour start time.",
      contactNumber: "+1 512-555-7890",
      contactEmail: "music@austintours.com",
    },
    faqs: [
      {
        question: "What music genres will we experience?",
        answer:
          "Austin's music scene is diverse! Our tours typically include a mix of rock, blues, country, and indie, but each night varies based on who's performing. Let us know your preferences and we'll try to accommodate.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "While the tour is family-friendly, most venues are bars or clubs that may not allow minors after a certain hour. We recommend checking with us in advance if you plan to bring children.",
      },
      {
        question: "Do we need to purchase tickets for the venues?",
        answer:
          "No, your tour ticket includes all venue cover charges. Drinks and food are not included but can be purchased at each location.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably! Austin's music scene is casual, but some venues may have dress codes. We recommend comfortable shoes for walking between venues.",
      },
      {
        question: "Will we be able to request specific songs?",
        answer:
          "While we can't guarantee specific songs will be played, your guide will happily make requests to the performers when appropriate. Many local musicians are accommodating to audience requests, especially during less formal sets.",
      },
    ],
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
      "2024-07-05",
      "2024-07-12",
    ],
    highlights: [
      "Experience 3-4 iconic Austin music venues in one evening",
      "Backstage access at select venues to meet musicians",
      "Skip the lines with VIP entrance at all locations",
      "Learn about Austin's rich musical heritage from a local musician guide",
      "Discover up-and-coming artists before they make it big",
    ],
    inclusions: [
      "Professional musician guide",
      "VIP entry to all venues (3-4 venues)",
      "Backstage access where available",
      "One drink ticket at the first venue",
      "Live music cover charges",
    ],
    exclusions: [
      "Additional food and drinks beyond the included drink ticket",
      "Transportation to and from the meeting point",
      "Gratuities (optional)",
      "Personal expenses",
    ],
    itinerary: [
      "07:00 PM: Meet your guide at the designated starting point",
      "07:15 PM: Brief introduction to Austin's music scene",
      "07:30 PM: First venue with welcome drink and initial performance",
      "08:30 PM: Second venue with different musical genre",
      "09:30 PM: Backstage access and meet-and-greet with performers",
      "10:30 PM: Final venue featuring headlining act",
      "11:00 PM: Tour conclusion (you're welcome to stay at the final venue)",
    ],

    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "BBQ & Brewery Experience",
    description:
      "Savor Austin's renowned BBQ scene with skip-the-line access at top smokehouses, followed by craft beer tastings at local breweries with an expert food and beverage guide.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/bbq-platter.jpg",
      "/images/tours/austin/craft-beer.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.9,
    tags: ["Food", "BBQ", "Beer"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "1701 E 6th St, Austin, TX 78702",
      coordinates: {
        latitude: 30.2644,
        longitude: -97.727,
      },
      instructions:
        "Meet at Franklin Barbecue's main entrance. Your guide will be wearing a 'BBQ & Brewery Tour' hat and holding a clipboard. Please arrive 15 minutes early for check-in.",
      contactNumber: "+1 512-555-4567",
      contactEmail: "bbq@austintours.com",
    },
    faqs: [
      {
        question: "How much BBQ will we actually eat?",
        answer:
          "Come hungry! We visit 3 legendary BBQ spots with substantial tastings at each, sampling brisket, ribs, sausage, and classic sides. The tour also includes 3-4 beer tastings at each brewery we visit.",
      },
      {
        question: "Are vegetarian options available?",
        answer:
          "While BBQ is the star of this tour, we can accommodate vegetarians with advance notice. We can also recommend vegetarian-friendly breweries in the area.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we highly recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any dietary restrictions.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably! We will be walking between venues, so wear comfortable shoes. Austin's BBQ scene is casual, so feel free to dress down.",
      },
      {
        question: "Is alcohol included in the tour price?",
        answer:
          "Yes, the beer tastings at all breweries are included in your tour price. Each brewery provides a flight of 3-4 beer samples (approximately 4-5 oz each). Additional full pours can be purchased at your own expense if you find a beer you particularly enjoy.",
      },
    ],
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
      "2024-06-29",
      "2024-07-06",
    ],
    highlights: [
      "Skip-the-line access at Austin's most renowned BBQ establishments",
      "Sample a variety of smoked meats including brisket, ribs, and sausage",
      "Visit 3 craft breweries with guided tastings of local beer",
      "Learn BBQ smoking techniques and the history of Texas BBQ",
      "Meet local brewmasters and tour brewing facilities",
    ],
    inclusions: [
      "BBQ tastings at 3 legendary establishments",
      "Beer flights at 3 craft breweries (12+ samples total)",
      "Transportation between venues",
      "Expert food and beverage guide",
      "Skip-the-line access at all locations",
      "Bottled water",
    ],
    exclusions: [
      "Additional food and drinks beyond included tastings",
      "Transportation to and from the meeting point",
      "Gratuities (optional)",
      "Personal expenses",
    ],
    itinerary: [
      "11:00 AM: Meet your guide at the designated starting point",
      "11:15 AM: First BBQ stop with brisket and ribs tasting",
      "12:30 PM: Visit first brewery with tour and tasting flight",
      "01:45 PM: Second BBQ location featuring unique regional style",
      "03:00 PM: Second brewery visit with behind-the-scenes access",
      "04:15 PM: Final BBQ stop for specialty items and sides",
      "05:30 PM: Final brewery with extended tasting and optional dinner",
      "07:00 PM: Tour conclusion",
    ],

    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Austin City Tour & History Walk",
    description:
      "Explore Austin's rich history and vibrant culture with a guided walking tour through downtown, visiting iconic landmarks, historic districts, and learning about the city's unique heritage.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/city-tour.jpg",
      "/images/tours/austin/history-walk.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.7,
    tags: ["History", "Culture", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
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
    tourCategoryId: "historical",
    meetingPoint: {
      address: "1100 Congress Ave, Austin, TX 78701",
      coordinates: {
        latitude: 30.2747,
        longitude: -97.7404,
      },
      instructions:
        "Meet on the south steps of the Texas State Capitol. Your guide will be holding a red umbrella with 'Austin History Tours' written on it. Please arrive 10 minutes before tour start time.",
      contactNumber: "+1 512-555-9876",
      contactEmail: "history@austintours.com",
    },
    faqs: [
      {
        question: "What historical sites will we visit?",
        answer:
          "The tour includes stops at the Texas State Capitol, the Driskill Hotel, historic Sixth Street, and more. You'll learn about Austin's founding, its role in Texas history, and its cultural evolution.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes! The tour is family-friendly and designed to engage visitors of all ages with interesting stories and interactive elements.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles (2.4 km) at a leisurely pace with plenty of stops for explanations and photos. Comfortable walking shoes are recommended.",
      },
      {
        question: "Can we customize the tour?",
        answer:
          "Absolutely! If you have specific interests or sites you'd like to include, just let us know when booking and we'll do our best to accommodate your requests.",
      },
      {
        question: "Will we go inside the Capitol building?",
        answer:
          "Yes, we'll visit the ground floor and rotunda of the Capitol building, which features fascinating historical exhibits and impressive architecture. The full interior tour of the Capitol is available separately through the official State Capitol tour program.",
      },
    ],
    availableDates: [
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
      "2024-07-07",
    ],
    highlights: [
      "Visit the Texas State Capitol and learn about its history",
      "Explore the Driskill Hotel, a Texas historical landmark",
      "Walk through the historic Sixth Street and hear its stories",
      "Discover the cultural evolution of Austin from founding to present",
      "Enjoy interactive elements and engaging stories for all ages",
    ],
    inclusions: [
      "Guided walking tour with a local historian",
      "Visit to 3-4 historical sites",
      "Snacks and water",
      "Public transportation fare (if applicable)",
      "Discount at a local restaurant or shop",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses",
      "Transportation to and from the meeting point",
    ],
    itinerary: [
      "10:00 AM: Meet your guide at the designated starting point",
      "10:15 AM: Visit the Texas State Capitol",
      "11:00 AM: Explore the Driskill Hotel",
      "11:45 AM: Walk through historic Sixth Street",
      "12:30 PM: Tour conclusion at a local restaurant or shop",
    ],

    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Lady Bird Lake Kayak & Nature Tour",
    description:
      "Paddle through the scenic waters of Lady Bird Lake with a guided kayak tour, exploring Austin's natural beauty, wildlife, and iconic skyline views while learning about the area's ecology and history.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/kayak-lady-bird.jpg",
      "/images/tours/austin/nature-tour.jpg",
    ],
    duration: "2.5 hours",
    price: "$55",
    rating: 4.6,
    tags: ["Nature", "Kayaking", "Outdoor"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "outdoor",
    meetingPoint: {
      address: "1800 S Lakeshore Blvd, Austin, TX 78741",
      coordinates: {
        latitude: 30.2452,
        longitude: -97.7315,
      },
      instructions:
        "Meet at the Rowing Dock on Lady Bird Lake. Look for a guide wearing a blue 'Austin Kayak Tours' shirt. Free parking is available in the lot next to the dock. Arrive 15 minutes early to complete waiver forms.",
      contactNumber: "+1 512-555-2345",
      contactEmail: "kayak@austintours.com",
    },
    faqs: [
      {
        question: "Do I need prior kayaking experience?",
        answer:
          "No prior experience is necessary! Our guides provide a brief kayaking lesson and all necessary equipment. The tour is designed for all skill levels, including beginners.",
      },
      {
        question: "What should I wear for the kayak tour?",
        answer:
          "Wear comfortable, moisture-wicking clothing that can get wet. We recommend closed-toe shoes that can get wet, a hat, and sunscreen. A swimsuit is also a good option if you prefer.",
      },
      {
        question: "Is the tour weather-dependent?",
        answer:
          "Yes, the tour is weather-dependent for safety reasons. If conditions are unsafe (e.g., thunderstorms, high winds), we will reschedule or offer a full refund. We recommend checking the weather forecast before your tour date.",
      },
      {
        question: "Can we bring our own snacks or drinks?",
        answer:
          "Yes, you can bring small snacks and non-alcoholic beverages in a waterproof bag. We provide a cooler for any items you want to keep cool during the tour. Please avoid glass containers.",
      },
      {
        question: "What wildlife might we see on the tour?",
        answer:
          "Lady Bird Lake is home to diverse wildlife including turtles, water birds (like herons and egrets), fish, and occasionally river otters or beavers. We often spot red-tailed hawks and, during certain seasons, bats emerging from under the Congress Avenue Bridge. Our guides are skilled at pointing out wildlife while ensuring we maintain a respectful distance.",
      },
    ],
    availableDates: [
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
      "2024-07-01",
      "2024-07-08",
    ],
    highlights: [
      "Guided kayak tour on Lady Bird Lake",
      "Explore Austin's natural beauty and wildlife",
      "Learn about the area's ecology and history",
      "Enjoy iconic skyline views from the water",
      "Small group size for a personalized experience",
    ],
    inclusions: [
      "Kayak and safety equipment",
      "Professional guide with kayaking expertise",
      "Transportation from the meeting point to the kayak launch site",
      "Water and snacks",
      "Group photo taken during the tour",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses",
      "Transportation to and from the meeting point",
    ],
    itinerary: [
      "09:00 AM: Meet your guide at the designated starting point",
      "09:15 AM: Shuttle to the kayak launch site",
      "09:30 AM: Kayak safety briefing and equipment check",
      "10:00 AM: Guided kayak tour begins",
      "11:30 AM: Return to the launch site and shuttle back",
      "11:45 AM: Tour conclusion at the meeting point",
    ],

    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Texas Hill Country Wine & Scenic Tour",
    description:
      "Discover the beauty of Texas Hill Country with a guided tour of local wineries, including tastings of award-winning wines and scenic views of rolling hills and vineyards.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/wine-tasting.jpg",
      "/images/tours/austin/hill-country.jpg",
    ],
    duration: "6 hours",
    price: "$99",
    rating: 4.8,
    tags: ["Wine", "Scenic", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "208 W 4th St, Austin, TX 78701",
      coordinates: {
        latitude: 30.2669,
        longitude: -97.7428,
      },
      instructions:
        "Meet in front of the Visitor Center in downtown Austin. Your guide will be waiting with a sign reading 'Hill Country Wine Tour'. Please bring photo ID for wine tastings and arrive 15 minutes before departure.",
      contactNumber: "+1 512-555-8765",
      contactEmail: "wine@austintours.com",
    },
    faqs: [
      {
        question: "How many wineries will we visit?",
        answer:
          "The tour typically includes visits to 3-4 wineries, each offering unique wines and experiences. You'll have the opportunity to taste a variety of wines and learn about the winemaking process.",
      },
      {
        question: "Is transportation provided?",
        answer:
          "Yes, round-trip transportation from downtown Austin is included in the tour price. We ensure a comfortable ride with scenic views along the way.",
      },
      {
        question: "Can I purchase wine during the tour?",
        answer:
          "Absolutely! Most wineries offer wine for purchase, and we can help arrange shipping if you want to send bottles home.",
      },
      {
        question: "What should I wear for the winery tour?",
        answer:
          "Dress comfortably for a day in the Texas sun. We recommend wearing layers as temperatures can vary throughout the day. Comfortable shoes are also advisable as some wineries have uneven terrain.",
      },
      {
        question: "Are non-drinkers or designated drivers welcome?",
        answer:
          "Absolutely! Non-drinkers are welcome to join the tour at a reduced price. We offer special non-alcoholic alternatives at each winery, and you'll still enjoy the beautiful scenery, winery tours, and company. Please let us know when booking if anyone in your party will not be participating in wine tastings.",
      },
    ],
    availableDates: [
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
      "2024-07-02",
      "2024-07-09",
    ],
    highlights: [
      "Visit 3-4 local wineries in the picturesque Texas Hill Country",
      "Taste a variety of award-winning wines",
      "Enjoy scenic views of rolling hills and vineyards",
      "Learn about the winemaking process from experts",
      "Transportation included for a hassle-free experience",
    ],
    inclusions: [
      "Wine tastings at 3-4 wineries",
      "Scenic drive through Texas Hill Country",
      "Knowledgeable guide with wine expertise",
      "Transportation to and from Austin",
      "Light snacks and water",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Personal expenses",
      "Lunch (available for purchase at a winery)",
    ],
    itinerary: [
      "09:30 AM: Depart from Austin",
      "10:30 AM: Arrive at first winery for tasting and tour",
      "11:30 AM: Depart for scenic drive through Hill Country",
      "12:00 PM: Arrive at second winery for tasting and tour",
      "01:00 PM: Lunch break at a local restaurant or winery (not included)",
      "02:00 PM: Depart for third winery",
      "02:30 PM: Arrive at third winery for tasting and tour",
      "03:30 PM: Depart for final winery",
      "04:00 PM: Arrive at final winery for tasting and tour",
      "05:00 PM: Depart for Austin",
      "06:00 PM: Arrive back in Austin",
      "06:15 PM: Tour conclusion at the meeting point",
    ],

    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Austin Street Art & Mural Tour",
    description:
      "Explore Austin's vibrant street art scene on this guided walking tour showcasing the city's most impressive murals, graffiti art, and public installations while learning about the artists and stories behind each piece.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/street-art-1.jpg",
      "/images/tours/austin/murals-2.jpg",
    ],
    duration: "2.5 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Art", "Walking Tour", "Photography"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: false,
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
      address: "1720 S Lamar Blvd, Austin, TX 78704",
      coordinates: {
        latitude: 30.2506,
        longitude: -97.7708,
      },
      instructions:
        "Meet at the 'Greetings from Austin' mural on South Lamar. Your guide will be holding a colorful art map of Austin. Street parking is available nearby. Please arrive 10 minutes early.",
      contactNumber: "+1 512-555-3421",
      contactEmail: "streetart@austintours.com",
    },
    faqs: [
      {
        question: "Will I have time to take photos during the tour?",
        answer:
          "Absolutely! We build in ample time at each stop for photos. Your guide will even suggest the best angles and creative shots at each location. This tour is perfect for photography enthusiasts and social media lovers.",
      },
      {
        question: "Does the tour cover a large area?",
        answer:
          "The tour covers approximately 1.5 miles through several Austin neighborhoods known for their street art. We'll visit 12-15 major art installations and numerous smaller pieces along the way. The pace is leisurely with frequent stops.",
      },
      {
        question: "Are restroom breaks available during the tour?",
        answer:
          "Yes, we make stops at public restrooms or art-friendly cafes about halfway through the tour. Your guide can also direct you to additional facilities if needed.",
      },
      {
        question: "Will we meet any of the artists?",
        answer:
          "While we can't guarantee artist meetings on every tour, we occasionally run into local artists working on new pieces. Our guides have personal connections with many Austin muralists and can share exclusive insights about their creative processes.",
      },
      {
        question: "How often do the murals change?",
        answer:
          "Austin's street art scene is dynamic, with new works appearing regularly. While some iconic murals have remained for years, others change seasonally. Our guides keep track of new installations, ensuring you see both classic Austin pieces and fresh art even if you've taken the tour before.",
      },
    ],
    availableDates: [
      "2024-04-10",
      "2024-04-17",
      "2024-04-24",
      "2024-05-01",
      "2024-05-08",
      "2024-05-15",
      "2024-05-22",
      "2024-05-29",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
      "2024-07-03",
      "2024-07-10",
    ],
    highlights: [
      "Discover Austin's most Instagram-worthy murals and hidden street art",
      "Learn about the stories and techniques behind each art piece",
      "Visit the ever-evolving graffiti park at Castle Hill",
      "Explore artsy neighborhoods off the typical tourist path",
      "Get tips on finding new street art throughout Austin",
    ],
    inclusions: [
      "Knowledgeable local art guide",
      "Street art map of Austin to keep",
      "Bottled water",
      "Exclusive discounts at local art shops",
      "Recommendations for arts events happening during your stay",
    ],
    exclusions: [
      "Transportation to and from the meeting point",
      "Gratuities (optional)",
      "Personal expenses",
      "Food and drinks beyond provided water",
    ],
    itinerary: [
      "10:00 AM: Meet at the 'Greetings from Austin' mural",
      "10:15 AM: South Austin murals exploration",
      "11:00 AM: Visit the evolving street art at Castle Hill",
      "11:45 AM: East Austin art district installations",
      "12:15 PM: Tour conclusion with recommendations for other art venues",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refund for cancellations less than 12 hours before the scheduled tour.",
  },
  {
    title: "Bat Watching Cruise & Sunset Tour",
    description:
      "Witness the spectacular natural phenomenon of 1.5 million Mexican free-tailed bats emerging from under the Congress Avenue Bridge at sunset aboard a comfortable boat with expert narration and perfect viewing position.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/bat-watching.jpg",
      "/images/tours/austin/lady-bird-sunset.jpg",
    ],
    duration: "2 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Wildlife", "Boat Tour", "Sunset"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "outdoor",
    meetingPoint: {
      address: "208 Barton Springs Rd, Austin, TX 78704",
      coordinates: {
        latitude: 30.2618,
        longitude: -97.7512,
      },
      instructions:
        "Meet at the Lone Star Riverboat dock located at the Hyatt Regency boat launch. Look for our boat with the 'Bat Watching Tour' banner. Please arrive 30 minutes before departure to ensure boarding.",
      contactNumber: "+1 512-555-6543",
      contactEmail: "bats@austintours.com",
    },
    faqs: [
      {
        question: "When is the best time to see the bats?",
        answer:
          "The bats are seasonal residents in Austin, typically present from March through early November, with peak viewing in July and August. Emergence time varies with sunset, usually occurring 15-30 minutes before sundown. We schedule our cruises based on seasonal bat activity to maximize your chances of witnessing this amazing natural phenomenon.",
      },
      {
        question: "Are the bats dangerous?",
        answer:
          "No, the Mexican free-tailed bats are beneficial and harmless to humans. They stay high above the water and focus on eating insects (up to 20,000 pounds of insects nightly!). Our boat provides a safe, comfortable viewing distance. The bats have no interest in people and are focused solely on their evening insect hunt.",
      },
      {
        question: "What if we don't see any bats?",
        answer:
          "While bat emergence is highly reliable during season, natural factors occasionally affect their behavior. If no bats emerge during your cruise (rare but possible), we offer a complimentary return ticket for another attempt during your stay in Austin.",
      },
      {
        question: "What else will we see on the cruise?",
        answer:
          "Beyond the bat emergence, the cruise offers stunning sunset views of the Austin skyline, wildlife spotting opportunities, and views of landmarks along Lady Bird Lake. Your knowledgeable guide will point out interesting features and share stories about Austin's development and natural history.",
      },
      {
        question: "Can I bring my own food or drinks?",
        answer:
          "Yes, you're welcome to bring snacks and non-alcoholic beverages. We also offer a selection of beverages for purchase on board, including local craft beers and wine for adults with valid ID. No glass containers are permitted for safety reasons.",
      },
    ],
    availableDates: [
      "2024-04-11",
      "2024-04-18",
      "2024-04-25",
      "2024-05-02",
      "2024-05-09",
      "2024-05-16",
      "2024-05-23",
      "2024-05-30",
      "2024-06-06",
      "2024-06-13",
      "2024-06-20",
      "2024-06-27",
      "2024-07-04",
      "2024-07-11",
    ],
    highlights: [
      "Witness 1.5 million bats emerge at sunset - the largest urban bat colony in North America",
      "Learn fascinating bat facts from a knowledgeable wildlife guide",
      "Perfect viewing position from the water, away from crowds",
      "Enjoy spectacular sunset views of the Austin skyline",
      "Comfortable boat ride with seating and shade",
    ],
    inclusions: [
      "2-hour guided boat cruise",
      "Expert narration about the bat colony and Austin history",
      "Prime viewing position of Congress Avenue Bridge",
      "Bottled water",
      "Wildlife spotting guide",
    ],
    exclusions: [
      "Gratuities (optional)",
      "Additional beverages beyond water (available for purchase)",
      "Transportation to and from the dock",
      "Food (snacks available for purchase)",
    ],
    itinerary: [
      "07:00 PM: Check-in at the boat dock (times vary by season)",
      "07:30 PM: Boarding begins",
      "07:45 PM: Departure and cruise begins with Austin history narration",
      "08:00 PM: Position near Congress Avenue Bridge for bat viewing",
      "08:15 PM: Witness bat emergence (timing varies by season)",
      "08:45 PM: Sunset cruise around Lady Bird Lake",
      "09:30 PM: Return to dock and disembarkation",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
  {
    title: "Austin Food Truck Crawl",
    description:
      "Sample the best of Austin's renowned food truck scene with this guided culinary tour visiting 5-6 top-rated food trucks serving everything from authentic Texas BBQ to innovative fusion cuisine, with plenty of local stories and insider tips along the way.",
    city: "Austin",
    country: "USA",
    state: "Texas",
    region: "Central Texas",
    images: [
      "/images/tours/austin/food-trucks.jpg",
      "/images/tours/austin/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Food", "Walking", "Local Cuisine"],
    isHistorical: false,
    isRomantic: false,
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
      address: "1720 Barton Springs Rd, Austin, TX 78704",
      coordinates: {
        latitude: 30.2638,
        longitude: -97.7672,
      },
      instructions:
        "Meet at Barton Springs Food Truck Park in front of the information board. Your guide will be holding a sign with 'Food Truck Tour' written on it. Street parking is available nearby, please arrive 10 minutes early.",
      contactNumber: "+1 512-555-7788",
      contactEmail: "foodtrucks@austintours.com",
    },
    faqs: [
      {
        question: "How much food is included in the tour?",
        answer:
          "The tour includes generous tastings from 5-6 food trucks, equivalent to a full meal plus dessert. Each stop features a signature item served in sample size so you can try many different cuisines without getting too full too quickly. Most guests feel completely satisfied by the end.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate most dietary needs including vegetarian, vegan, gluten-free, and most allergies with advance notice. Please inform us of any dietary restrictions when booking so we can plan appropriate alternatives at each stop. The diverse nature of Austin's food truck scene allows us to be very flexible.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles at a leisurely pace between different food truck parks and locations. We provide plenty of seating opportunities at each stop. The route is flat and accessible, making it suitable for most fitness levels.",
      },
      {
        question: "What happens in case of rain?",
        answer:
          "The tour runs rain or shine, as many food truck parks have covered seating areas. In case of severe weather, we may modify the route to include more covered locations or, in extreme cases, reschedule the tour. We provide umbrellas if needed.",
      },
      {
        question: "Do the food trucks change on different tours?",
        answer:
          "Yes, we rotate between 15-20 excellent food trucks based on their operating schedules, seasonal menu changes, and new openings in the Austin food scene. Even if you've taken the tour before, you're likely to experience some new culinary delights on a repeat visit.",
      },
    ],
    availableDates: [
      "2024-04-12",
      "2024-04-19",
      "2024-04-26",
      "2024-05-03",
      "2024-05-10",
      "2024-05-17",
      "2024-05-24",
      "2024-05-31",
      "2024-06-07",
      "2024-06-14",
      "2024-06-21",
      "2024-06-28",
      "2024-07-05",
      "2024-07-12",
    ],
    highlights: [
      "Sample signature dishes from 5-6 of Austin's best food trucks",
      "Experience diverse cuisines from Texas BBQ to international fusion",
      "Learn about Austin's food culture and trends from a local expert",
      "Discover hidden food truck gems off the tourist path",
      "Meet food truck owners and chefs when available",
    ],
    inclusions: [
      "Food tastings at 5-6 food trucks (equivalent to a full meal)",
      "Local culinary guide with food expertise",
      "Bottled water throughout the tour",
      "Food map highlighting Austin's best food trucks",
      "Exclusive discounts for return visits to featured vendors",
    ],
    exclusions: [
      "Additional food beyond included tastings",
      "Alcoholic beverages (available for purchase at some locations)",
      "Transportation to and from the meeting point",
      "Gratuities (optional)",
    ],
    itinerary: [
      "11:30 AM: Meet at Barton Springs Food Truck Park",
      "11:45 AM: First food truck stop featuring Texas BBQ",
      "12:15 PM: Second stop featuring international cuisine",
      "12:45 PM: Third stop featuring innovative fusion cuisine",
      "01:15 PM: Fourth stop featuring vegetarian/vegan options",
      "01:45 PM: Fifth stop featuring uniquely Austin cuisine",
      "02:15 PM: Final dessert stop",
      "02:30 PM: Tour conclusion with recommendations for other food destinations",
    ],
    cancellationPolicy:
      "Full refund if canceled at least 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the scheduled tour.",
  },
];

export default austinTours;
