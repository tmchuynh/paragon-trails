import { Tour } from "@/lib/interfaces/services/tours";

export const berlinTours: Tour[] = [
  {
    title: "Berlin Cold War History & Underground Bunkers",
    description:
      "Explore Berlin's dramatic Cold War history with visits to the Berlin Wall, Checkpoint Charlie, and exclusive access to declassified underground bunkers and escape tunnels from the divided city era.",
    images: [
      "/images/tours/berlin/berlin-wall.jpg",
      "/images/tours/berlin/cold-war-bunker.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["History", "Cold War", "Underground"],

    isHistorical: true,
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
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address: "Berlin Wall Memorial, Bernauer Str. 111, 13355 Berlin, Germany",
      coordinates: {
        latitude: 52.5352,
        longitude: 13.3889,
      },
      instructions:
        "Meet your guide at the main entrance to the Berlin Wall Memorial Visitor Center on Bernauer Strasse. The guide will be holding a blue umbrella with 'Cold War Berlin' written on it. Please arrive 15 minutes before your tour start time.",
      contactNumber: "+49 30 1234 5678",
      contactEmail: "coldwar@paragontrails.com",
    },
    faqs: [
      {
        question: "Are the underground bunkers accessible for everyone?",
        answer:
          "The bunker portion involves steep stairs and narrow passages with no elevator access. Those with mobility issues may find this challenging, but we can offer an alternative above-ground Cold War history route covering additional sites on request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and suitable for older children (10+). We provide age-appropriate historical context, but parents should be aware that some Cold War topics may be intense. Younger children may find the content less engaging.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as we will be outdoors for part of the tour. The bunker can be cool and damp, so a light jacket is advisable.",
      },
      {
        question: "What specific bunkers will we visit?",
        answer:
          "The tour includes access to the Gesundbrunnen civilian bunker complex, which was designed to shelter thousands of Berlin residents during air raids and potential nuclear attacks. We also visit a recently declassified command bunker that was operational during the Cold War. These facilities feature original equipment, communication systems, and living quarters preserved from the era, providing a visceral understanding of Cold War tensions and survival preparations.",
      },
      {
        question: "Will we see any sections of the Berlin Wall?",
        answer:
          "Yes, the tour includes multiple Wall experiences: the Berlin Wall Memorial with preserved sections of the complete border fortification system, including both inner and outer walls, guard towers, and the infamous 'death strip'; less-visited Wall remnants that show original graffiti; and underground escape tunnels that were dug beneath the Wall. These diverse perspectives provide a comprehensive understanding of how the barrier functioned and how it impacted daily life in the divided city.",
      },
    ],
  },
  {
    title: "Berlin's Alternative Scene & Street Art",
    description:
      "Discover Berlin's world-famous counterculture with an insider tour of street art, urban gardens, artist squats, and underground clubs in the trendy neighborhoods of Kreuzberg and Friedrichshain.",
    images: [
      "/images/tours/berlin/street-art.jpg",
      "/images/tours/berlin/kreuzberg.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Alternative", "Art", "Urban"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
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
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address: "Warschauer Straße U-Bahn Station, 10243 Berlin, Germany",
      coordinates: {
        latitude: 52.505,
        longitude: 13.4485,
      },
      instructions:
        "Meet your guide at the main exit of Warschauer Straße U-Bahn station, across from the East Side Gallery. Your guide will be wearing a black jacket with colorful street art pins and holding a 'Berlin Alternative Tours' sign. Please arrive 10 minutes before your scheduled tour time.",
      contactNumber: "+49 30 2345 6789",
      contactEmail: "streetart@paragontrails.com",
    },
    faqs: [
      {
        question: "Is this tour suitable for teenagers?",
        answer:
          "The tour is generally appropriate for older teenagers (16+) interested in contemporary culture and art. While we don't focus on controversial content, some street art may contain political themes or occasional mature imagery. Parents should use discretion based on their teen's maturity level.",
      },
      {
        question: "Will we visit any galleries or exhibitions?",
        answer:
          "Yes, we often include visits to local artist-run galleries or pop-up exhibitions showcasing emerging talent. However, the focus is primarily on outdoor street art and urban culture rather than formal gallery spaces.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will be exploring neighborhoods on foot. Dress casually and be prepared for variable weather, as we may spend time outdoors in urban settings.",
      },
      {
        question: "Which neighborhoods will we explore?",
        answer:
          "The tour focuses on Kreuzberg and Friedrichshain, Berlin's epicenters of counterculture and alternative lifestyles. We'll explore RAW-Gelände (a repurposed railway repair yard turned cultural complex), SO36 (the punk heart of Kreuzberg), artist squats like Køpi, street art hotspots including Urban Spree, and community projects such as Prinzessinnengärten urban garden. These areas showcase Berlin's grassroots creativity, political activism, and unique approach to urban development and community spaces.",
      },
      {
        question: "Will we meet any local artists or residents?",
        answer:
          "Yes, whenever possible, we arrange spontaneous interactions with local artists, musicians, and community organizers. Our guides have deep connections within Berlin's alternative scene and often know artists who are currently working on new pieces or projects in the areas we visit. These authentic encounters provide firsthand perspectives on Berlin's creative culture and the challenges facing artistic communities in a rapidly gentrifying city.",
      },
    ],
  },
  {
    title: "Berlin Food Tour: From Currywurst to Fine Dining",
    description:
      "Experience Berlin's diverse culinary scene with a guided food tour sampling iconic street foods like currywurst, local specialties, and fine dining at Michelin-starred restaurants.",
    images: [
      "/images/tours/berlin/currywurst.jpg",
      "/images/tours/berlin/fine-dining.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Food", "Culinary", "Local"],

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
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Hackescher Markt, 10178 Berlin, Germany",
      coordinates: {
        latitude: 52.5225,
        longitude: 13.4022,
      },
      instructions:
        "Meet your culinary guide at the fountain in the center of Hackescher Markt. Your guide will be holding a red tote bag with 'Berlin Food Tour' written on it and will be waiting near the fountain. Please arrive hungry and 10 minutes before your scheduled tour time.",
      contactNumber: "+49 30 3456 7890",
      contactEmail: "food@paragontrails.com",
    },
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarians and vegans with advance notice. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a variety of dishes from traditional currywurst and doner kebab to modern German cuisine and international influences. We also visit local markets and specialty shops.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any dietary needs.",
      },
      {
        question: "What should I wear for the food tour?",
        answer:
          "Dress comfortably! We will be walking between venues, so wear comfortable shoes. Berlin's food scene is casual, so feel free to dress down.",
      },
      {
        question: "What is the history behind Berlin's food scene?",
        answer:
          "Berlin's culinary landscape reflects its complex history, from Prussian traditions to immigrant influences, divided-city adaptations, and post-reunification innovation. We discuss how currywurst was invented by a resourceful vendor using ingredients available after WWII, how Turkish immigrants transformed German street food with döner kebab, how East German cuisine developed under socialism, and how contemporary Berlin has emerged as a world-class dining destination. Each tasting comes with historical context that connects food to the city's broader story.",
      },
      {
        question: "How much food is included? Should I eat before the tour?",
        answer:
          "The tour includes substantial tastings equivalent to a full meal spread throughout the experience. We recommend arriving hungry but not famished. You'll sample 8-10 different specialties ranging from street foods to fine dining bites, with careful pacing to ensure you can enjoy each offering. Portions are sized to provide a satisfying taste of each item while leaving room to try everything. Beverages including water, local craft beer, and wine pairings are also included.",
      },
    ],
  },
  {
    title: "Berlin's Historic Pubs & Beer Gardens",
    description:
      "Explore Berlin's vibrant beer culture with a guided tour of historic pubs, traditional beer gardens, and local breweries, sampling a variety of German beers and learning about the city's brewing history.",
    images: [
      "/images/tours/berlin/historic-pub.jpg",
      "/images/tours/berlin/beer-garden.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Culinary", "Local", "Nightlife"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "nightlife",
    meetingPoint: {
      address: "Nikolaiviertel, Poststraße, 10178 Berlin, Germany",
      coordinates: {
        latitude: 52.5169,
        longitude: 13.4073,
      },
      instructions:
        "Meet your beer culture guide next to the fountain in Nikolaiviertel, Berlin's reconstructed historic center. Your guide will be holding a vintage beer stein and wearing a dark blue cap with a beer logo. Please arrive 10 minutes before your tour starts, and bring ID as we'll be visiting establishments that serve alcohol.",
      contactNumber: "+49 30 4567 8901",
      contactEmail: "beertour@paragontrails.com",
    },
    faqs: [
      {
        question: "Is this tour suitable for non-drinkers?",
        answer:
          "Yes, we can accommodate non-drinkers with soft drink options or non-alcoholic beers. Please inform us when booking if you prefer not to consume alcohol.",
      },
      {
        question: "What types of beers will we sample?",
        answer:
          "The tour includes a variety of local beers, including lagers, wheat beers, and seasonal brews. We also visit a brewery where you can learn about the brewing process.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and ensure we can accommodate any special requests.",
      },
      {
        question: "What should I wear for the pub tour?",
        answer:
          "Dress casually! Berlin's pub scene is relaxed, so comfortable clothing and shoes are recommended as we will be walking between venues.",
      },
      {
        question: "Which historic pubs and beer gardens will we visit?",
        answer:
          "The tour typically includes Berlin institutions such as Zur Letzten Instanz (the city's oldest restaurant dating from 1621), Brauhaus Lemke (a pioneering microbrewery in a historic S-Bahn railway arch), Prater Biergarten (Berlin's oldest beer garden established in 1837), and hidden neighborhood Kneipen (traditional corner pubs) with histories stretching back generations. Each establishment has been carefully selected for its historical significance, authentic atmosphere, and quality offerings.",
      },
      {
        question: "What is the history of Berlin's beer culture?",
        answer:
          "Berlin has a rich brewing tradition dating back to the 13th century, once boasting hundreds of breweries. We explore how beer influenced the city's development, including the once-famous Berlin Weisse style (Napoleon's troops called it the 'Champagne of the North'). You'll learn how beer gardens emerged as democratic social spaces, how East and West German beer cultures diverged during division, and how craft brewing has revitalized Berlin's beer scene since reunification. The tour connects beer history with broader social and political developments.",
      },
    ],
  },
  {
    title: "Berlin's Hidden Gardens & Parks",
    description:
      "Discover Berlin's secret green spaces with a guided tour of hidden gardens, tranquil parks, and urban oases, including the historic Tiergarten and lesser-known botanical gems.",
    images: [
      "/images/tours/berlin/tiergarten.jpg",
      "/images/tours/berlin/hidden-garden.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Nature", "Hidden Gems", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "Tiergarten, Straße des 17. Juni, 10785 Berlin, Germany",
      coordinates: {
        latitude: 52.5163,
        longitude: 13.3777,
      },
      instructions:
        "Meet your guide at the eastern entrance to Tiergarten park, near the Soviet War Memorial. Your guide will be holding a green folder with botanical images and wearing a Paragon Trails cap. Please wear comfortable walking shoes and weather-appropriate clothing, as we'll spend most of our time outdoors.",
      contactNumber: "+49 30 5678 9012",
      contactEmail: "gardens@paragontrails.com",
    },
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and storytelling about Berlin's green spaces.",
      },
      {
        question: "What should I wear for the garden tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will be exploring parks on foot. Dress in layers as the weather can change quickly in Berlin.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any special requests.",
      },
      {
        question: "What makes Berlin's green spaces unique?",
        answer:
          "Berlin is one of Europe's greenest capitals with over 2,500 public parks and gardens covering nearly one-third of the city. These spaces reflect Berlin's layered history - from baroque royal gardens to community-created parks on former death strips, and post-industrial wasteland transformations. Berlin's approach to urban wilderness is distinct, with many areas deliberately left wild to support biodiversity. The tour explores how Berliners have reclaimed spaces for community gardens and how green planning has shaped the reunified city's development.",
      },
      {
        question: "What will we learn about the plants and wildlife?",
        answer:
          "Our guide provides insights into Berlin's urban ecology, identifying notable plant species and explaining how the city's unique conditions support surprising biodiversity. You'll learn about native and introduced species, seasonal highlights, and wildlife that has returned to the city over recent decades. The tour includes information on Berlin's innovative approaches to sustainable urban landscaping, climate adaptation through green planning, and community-led initiatives to increase urban biodiversity.",
      },
    ],
  },
];

export default berlinTours;
