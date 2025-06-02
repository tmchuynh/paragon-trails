import { Tour } from "@/lib/interfaces/services/tours";
export const copenhagenTours: Tour[] = [
  {
    title: "Copenhagen by Bike & Canal Cruise",
    description:
      "Experience Copenhagen like a local with a guided bicycle tour through the city's beautiful parks, historic districts, and along the harbor, followed by a relaxing canal cruise with Nordic refreshments.",
    city: "Copenhagen",
    country: "Denmark",
    region: "Capital Region",
    images: [
      "https://images.unsplash.com/photo-1561560392-39ff98f2d54c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29wZW5oYWdlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1577346895253-445f05a6670d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENvcGVuaGFnZW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1585815301834-f6d8783bb585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENvcGVuaGFnZW58ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1716236667158-9143521d423d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENvcGVuaGFnZW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1610357310685-105e8a575744?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fENvcGVuaGFnZW58ZW58MHx8MHx8fDA%3D",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Cycling", "Canals", "Local Experience"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: true,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "local",
    meetingPoint: {
      address: "Nyhavn 18, 1051 Copenhagen, Denmark",
      coordinates: {
        latitude: 55.6798,
        longitude: 12.5914,
      },
      instructions:
        "Meet at the bike rental shop in the colorful Nyhavn harbor district. Look for our guide with a blue 'Copenhagen By Bike' flag. Please arrive 15 minutes early to get fitted for your bike.",
      contactNumber: "+45 30 12 34 56",
      contactEmail: "biketour@paragontrails.com",
    },
    availableDates: [
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
      "2024-07-15",
      "2024-07-22",
    ],
    highlights: [
      "Cycle through Copenhagen's famous bike lanes like a local",
      "See iconic landmarks including Tivoli Gardens and The Little Mermaid",
      "Cruise through the picturesque canals of Copenhagen",
      "Learn about Danish design, architecture, and urban planning",
      "Enjoy Nordic refreshments during the canal cruise",
    ],
    inclusions: [
      "Comfortable city bike rental with helmet",
      "Expert local cycling guide",
      "1-hour canal cruise with refreshments",
      "Waterproof gear in case of rain",
      "City map with cycling routes",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Gratuities",
      "Additional food and beverages",
      "Personal expenses",
    ],
    itinerary: [
      "10:00 AM - Meet at Nyhavn for bike fitting and safety briefing",
      "10:15 AM - Begin cycling tour through central Copenhagen",
      "11:30 AM - Visit The Little Mermaid statue and Kastellet fortress",
      "12:15 PM - Cycle through Christianshavn neighborhood",
      "1:00 PM - Return bikes at Nyhavn harbor",
      "1:30 PM - Board canal cruise boat",
      "1:45 PM - Enjoy refreshments while cruising the canals",
      "3:00 PM - Disembark at Nyhavn and end of tour",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "How difficult is the cycling portion?",
        answer:
          "Copenhagen is wonderfully flat and has world-class cycling infrastructure, making it perfect for riders of all levels. We maintain a leisurely pace over approximately 8km with frequent stops at points of interest. Quality bikes are provided with adjustments for your comfort, and the entire route follows dedicated cycle paths away from car traffic.",
      },
      {
        question: "What should I wear for the bike tour?",
        answer:
          "We recommend comfortable clothing suitable for cycling, such as breathable fabrics and closed-toe shoes. A light jacket is advisable in cooler weather. Helmets are provided but optional, as cycling is very safe in Copenhagen.",
      },
      {
        question: "Are the canal cruise refreshments included?",
        answer:
          "Yes, the canal cruise includes a selection of Nordic refreshments such as open-faced sandwiches (smørrebrød), pastries, and soft drinks. Alcoholic beverages can be purchased on board.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "This tour is suitable for children who can ride a bicycle confidently. We provide appropriately-sized bikes and helmets for children aged 8 and above. For younger children, we can arrange child seats or trailer attachments. The canal cruise portion is suitable for all ages.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "Copenhagen's weather can be unpredictable. We provide waterproof ponchos if it rains lightly during the cycling portion. In case of heavy rain or storms, we may modify the cycling route or replace it with a walking tour. The canal cruise portion has covered areas, so it will proceed in most weather conditions unless deemed unsafe by the boat operator.",
      },
    ],
  },
  {
    title: "Danish Design & Architecture Masterpieces",
    description:
      "Discover Copenhagen's revolutionary design heritage with an architecture specialist guiding you through iconic modern buildings, design studios, and exclusive access to private homes showcasing Danish design principles.",
    city: "Copenhagen",
    country: "Denmark",
    region: "Capital Region",
    images: [
      "https://images.unsplash.com/photo-1668083945157-15744f6f7301?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1723036382091-6c8f61653b71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1704981104656-4b8514c340cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RGlzY292ZXIlMjBDb3BlbmhhZ2VuJ3MlMjByZXZvbHV0aW9uYXJ5JTIwZGVzaWduJTIwaGVyaXRhZ2UlMjB3aXRoJTIwYW4lMjBhcmNoaXRlY3R1cmUlMjBzcGVjaWFsaXN0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1656962731290-93b6f86d3d3c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1590587322567-0ef87603d54b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Design", "Architecture", "Modern"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Indre By, Rådhuspladsen 1, 1550 Copenhagen, Denmark",
      coordinates: {
        latitude: 55.6761,
        longitude: 12.5683,
      },
      instructions:
        "Meet in front of Copenhagen City Hall (Københavns Rådhus). Your guide will be waiting by the main entrance holding a sign that says 'Danish Design Tour'. Please arrive 10 minutes before the tour start time.",
      contactNumber: "+45 28 45 67 89",
      contactEmail: "design@paragontrails.com",
    },
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
    ],
    highlights: [
      "Visit iconic Danish design landmarks like the Arne Jacobsen's SAS Royal Hotel",
      "Get exclusive access to private residences showcasing Danish design principles",
      "Learn about the history and philosophy of Danish modernism",
      "Explore contemporary design studios and workshops",
      "Discover how Danish design influences global trends in furniture and architecture",
    ],
    inclusions: [
      "Expert architecture and design specialist as your guide",
      "Entry to all buildings and studios on the itinerary",
      "Private home visit with refreshments",
      "Design booklet featuring key Danish designers and their works",
      "Copenhagen design map",
    ],
    exclusions: [
      "Transportation during the tour (walking tour)",
      "Hotel pickup and drop-off",
      "Meals and additional refreshments",
      "Gratuities",
      "Personal purchases",
    ],
    itinerary: [
      "10:00 AM - Meet at Copenhagen City Hall",
      "10:15 AM - Introduction to Danish design principles",
      "10:45 AM - Visit to Designmuseum Danmark",
      "11:45 AM - Walking tour of significant architectural sites",
      "12:30 PM - Visit contemporary design studio",
      "1:30 PM - Private home visit with Danish design elements",
      "2:30 PM - Tour conclusion with design recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the scheduled tour. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before tour start time.",
    faqs: [
      {
        question: "Which designers' work will we see?",
        answer:
          "The tour features works by renowned Danish designers including Arne Jacobsen, Hans Wegner, Finn Juhl, and Poul Henningsen. We'll explore how their functional yet beautiful approach revolutionized global design in the 20th century. We visit both iconic public buildings and, uniquely, private homes that showcase Danish design principles in everyday living contexts.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "While the tour is family-friendly, it is more focused on design and architecture, which may be of greater interest to adults and older children. Younger children may find it less engaging, but we can tailor the experience to include interactive elements if needed.",
      },
      {
        question: "Are any buildings off-limits to the public?",
        answer:
          "Yes, we have exclusive access to private residences that are not normally open to the public. These homes provide a unique insight into how Danish design principles are applied in real life, showcasing both aesthetics and functionality.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This is primarily a walking tour covering approximately 2-3 kilometers (1.2-1.9 miles) at a leisurely pace with plenty of stops. Most of the walking is on flat terrain through the city center. Comfortable shoes are recommended as we will be on our feet for most of the 4-hour tour.",
      },
      {
        question: "What makes Danish design unique?",
        answer:
          "Danish design is characterized by its emphasis on functionality, simplicity, and craftsmanship. The tour explains how Danish modernism emerged in the mid-20th century with principles focused on clean lines, natural materials, and democratic design that should be beautiful as well as accessible. You'll learn how this approach created timeless pieces that remain relevant and sought-after decades after their creation, and how the Danish concept of 'hygge' (coziness) influences spatial design in both public and private spaces.",
      },
    ],
  },
  {
    title: "Copenhagen's Culinary Secrets: From Street Food to Fine Dining",
    description:
      "Embark on a gastronomic journey through Copenhagen's vibrant food scene, sampling everything from trendy street food markets to Michelin-starred restaurants, guided by a local culinary expert.",
    city: "Copenhagen",
    country: "Denmark",
    region: "Capital Region",
    images: [
      "https://media.istockphoto.com/id/1045422456/photo/close-up-of-a-seafood-salad.jpg?s=612x612&w=0&k=20&c=32uW2aIvAOsgyzJe42Qm7u5oB18TnE-PVuKwxRZRezU=",
      "https://media.istockphoto.com/id/534737185/photo/contemporary-cafe-culture-healthy-salad.jpg?s=612x612&w=0&k=20&c=-zKCs2aCwNmVVUAYpTthwZA7ssV1RAXoSpWrZ7FIt0A=",
      "https://media.istockphoto.com/id/1287466369/photo/vegetarian-salad-baguette-and-grapefruit-juice-on-a-wooden-table-ready-to-eat.jpg?s=612x612&w=0&k=20&c=cz6uBOortHA1Dcx3xwkH0ipzg2IHKLGqGBw43R415KQ=",
      "https://media.istockphoto.com/id/1213597619/photo/gourmet-healthy-sub-sandwich.jpg?s=612x612&w=0&k=20&c=o4zNrUCrDC6uft_nlsyUVyKsWtR_7GsM3cH1ORl7IlY=",
      "https://media.istockphoto.com/id/1480630635/photo/salad-bowl-and-food-on-table-at-dinner.jpg?s=612x612&w=0&k=20&c=vLTbqSq41meIWJKCxaWqnabp7MM8BX9KiAJ2DpmwVug=",
    ],
    duration: "6 hours",
    price: "$160",
    rating: 4.9,
    tags: ["Culinary", "Street Food", "Fine Dining"],
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
      address:
        "Reffen Street Food Market, Refshalevej 167A, 1432 Copenhagen, Denmark",
      coordinates: {
        latitude: 55.6941,
        longitude: 12.6113,
      },
      instructions:
        "Meet at the main entrance of Reffen Street Food Market. Look for your guide holding a sign that reads 'Copenhagen Food Tour'. Please arrive 15 minutes before the tour start time as we will begin promptly.",
      contactNumber: "+45 22 33 44 55",
      contactEmail: "food@paragontrails.com",
    },
    availableDates: [
      "2024-04-05",
      "2024-04-19",
      "2024-05-03",
      "2024-05-17",
      "2024-05-31",
      "2024-06-14",
      "2024-06-28",
      "2024-07-12",
      "2024-07-26",
      "2024-08-09",
      "2024-08-23",
    ],
    highlights: [
      "Taste New Nordic cuisine that put Copenhagen on the global culinary map",
      "Visit Reffen, Copenhagen's largest street food market",
      "Sample traditional Danish dishes with modern twists",
      "Experience a tasting menu at a Michelin-recommended restaurant",
      "Learn about sustainable and organic food practices in Denmark",
    ],
    inclusions: [
      "Food tastings at 5-7 different locations (equivalent to a full meal)",
      "One glass of wine or beer with the fine dining experience",
      "Expert culinary guide with insider knowledge",
      "Copenhagen food guide with recommendations",
      "Small group size for personalized experience",
    ],
    exclusions: [
      "Additional alcoholic beverages beyond the included glass",
      "Hotel pickup and drop-off",
      "Personal purchases and souvenirs",
      "Gratuities",
    ],
    itinerary: [
      "11:00 AM - Meet at Reffen Street Food Market for introduction",
      "11:15 AM - Explore market with tastings from selected vendors",
      "12:30 PM - Visit traditional Danish bakery for smørrebrød",
      "1:30 PM - Walk through meat packing district with specialty food stops",
      "2:30 PM - Visit chocolate and licorice artisans for sweet tastings",
      "3:30 PM - Fine dining experience with New Nordic cuisine",
      "5:00 PM - Tour conclusion with recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 72 hours before the scheduled tour. 50% refund if canceled 48-72 hours in advance. No refund for cancellations less than 48 hours before tour start time.",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes a diverse range of culinary experiences, from traditional Danish dishes like smørrebrød and frikadeller to innovative street food from the Reffen market and exquisite tasting menus at Michelin-starred restaurants. We also explore local specialties like pickled herring and Danish pastries.",
      },
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, we can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and nut allergies. Please inform us in advance so we can tailor the food selections accordingly.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages. We include kid-friendly options at each stop and can adjust the menu based on children's preferences.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3-4 kilometers (2-2.5 miles) of walking between food venues. We maintain a leisurely pace with plenty of stops for food tastings and rest. The terrain is mostly flat and easy to navigate, but comfortable walking shoes are recommended.",
      },
      {
        question: "What is New Nordic cuisine?",
        answer:
          "New Nordic cuisine is a culinary movement that began in Denmark, emphasizing local, seasonal, and sustainable ingredients prepared with innovative techniques. The tour explores how this philosophy revolutionized global gastronomy by focusing on purity, simplicity, and freshness. You'll learn how chefs like René Redzepi from Noma helped establish Copenhagen as a world culinary capital by reinventing traditional Nordic ingredients and preservation methods for modern palates.",
      },
    ],
  },
  {
    title: "Copenhagen's Royal Heritage & Gardens",
    description:
      "Explore the royal history of Copenhagen with a guided tour of Amalienborg Palace, Rosenborg Castle, and the stunning King's Garden, learning about Denmark's monarchy and its influence on the city.",
    city: "Copenhagen",
    country: "Denmark",
    region: "Capital Region",
    images: [
      "https://media.istockphoto.com/id/1098385658/photo/the-square-of-amalienborg-royal-palace-copenhagen-denmark-dawn.jpg?s=612x612&w=0&k=20&c=vzffZIR1eYXpmYO9_O7OmIS_jL_5pfkCwFJmu8KKKbU=",
      "https://media.istockphoto.com/id/155149091/photo/copenhagen-rosenborg-slot-castle-kongens-have-spring-tulips-denmark.jpg?s=612x612&w=0&k=20&c=cYBxyicC6f0Eym9PHgSJwL7zprZA9bjxJhy9RVvoD0o=",
      "https://media.istockphoto.com/id/1445778912/photo/green-lawns-green-lawns-in-the-form-of-fences.jpg?s=612x612&w=0&k=20&c=TbyAdKx0IglXUewiCcCXMKXF6iXdKVcDrBELJhZWI9Q=",
      "https://media.istockphoto.com/id/492440093/photo/copenhagen-amalienborg.jpg?s=612x612&w=0&k=20&c=JyrlVUcO5VYvXsBJv-yUFmOhHXMGB392d6dh6bMwFgU=",
      "https://media.istockphoto.com/id/157589933/photo/tulips-and-rosenborg-castle.jpg?s=612x612&w=0&k=20&c=XGIGQIMhlfqoFCbzmLNE86a45M2XJInCQTZ4Vs4IzSg=",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Royalty", "Gardens", "History"],
    isHistorical: true,
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
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address:
        "Amalienborg Palace, Amalienborg Slotsplads 5, 1257 Copenhagen, Denmark",
      coordinates: {
        latitude: 55.6841,
        longitude: 12.5932,
      },
      instructions:
        "Meet at the equestrian statue in the center of Amalienborg Palace Square. Your guide will be holding a Danish flag. Please arrive 15 minutes before the tour starts to witness the changing of the Royal Guard at noon.",
      contactNumber: "+45 23 45 67 89",
      contactEmail: "royal@paragontrails.com",
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
      "2024-05-29",
      "2024-06-05",
      "2024-06-12",
      "2024-06-19",
      "2024-06-26",
      "2024-07-03",
      "2024-07-10",
      "2024-07-17",
      "2024-07-24",
      "2024-07-31",
    ],
    highlights: [
      "Witness the Changing of the Royal Guard ceremony at Amalienborg Palace",
      "Explore the magnificent Crown Jewels at Rosenborg Castle",
      "Stroll through the King's Garden, Denmark's oldest royal garden",
      "Learn about the history of Europe's oldest monarchy",
      "See the royal reception rooms where the Queen receives guests",
    ],
    inclusions: [
      "Skip-the-line entrance tickets to Amalienborg Palace and Rosenborg Castle",
      "Expert guide specialized in Danish royal history",
      "Audio headsets to hear guide clearly",
      "Royal Copenhagen guidebook",
      "Small group size for intimate experience",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      "11:45 AM - Meet at Amalienborg Palace Square",
      "12:00 PM - Watch Changing of the Royal Guard ceremony",
      "12:30 PM - Tour Amalienborg Palace Museum",
      "01:45 PM - Walk through historic district to Rosenborg Castle",
      "02:30 PM - Guided tour of Rosenborg Castle and Crown Jewels",
      "03:30 PM - Explore the King's Garden",
      "04:45 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "Will we see the changing of the guard?",
        answer:
          "Yes, the tour includes witnessing the Changing of the Guard ceremony at Amalienborg Palace, which takes place daily at noon. This iconic event showcases the precision and tradition of the Danish royal guards.",
      },
      {
        question: "Are the gardens accessible for walking?",
        answer:
          "Absolutely! The King's Garden surrounding Rosenborg Castle is beautifully landscaped with wide paths, making it perfect for leisurely strolls. We will take time to enjoy the gardens' beauty and learn about their history.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy exploring the royal grounds and learning about Denmark's fascinating history in an engaging way. The gardens also provide plenty of space for kids to run around.",
      },
      {
        question: "Will we see the Queen or royal family?",
        answer:
          "While we cannot guarantee royal sightings, you can tell if the Queen or royal family members are in residence by the flying of the royal standard above their palace. Your guide will explain the significance of the different flags and what they indicate about royal activities. Occasionally, royal family members can be spotted arriving or departing the palace.",
      },
      {
        question: "What makes the Danish monarchy unique?",
        answer:
          "The Danish monarchy is the oldest continuing monarchy in Europe, dating back more than 1000 years. During the tour, you'll learn how it evolved from an absolute monarchy to a constitutional monarchy, and how the current royal family maintains traditions while embracing modern values. You'll discover fascinating stories about Queen Margrethe II, Europe's longest-serving current monarch, and the popular Crown Prince Frederik and Crown Princess Mary, who represent the future of this historic institution.",
      },
    ],
  },
  {
    title: "Copenhagen Sustainable City Innovations Tour",
    description:
      "Discover why Copenhagen is a world leader in sustainability with visits to innovative eco-projects, carbon-neutral neighborhoods, and cutting-edge urban solutions that showcase Danish ingenuity in creating a greener future.",
    city: "Copenhagen",
    country: "Denmark",
    region: "Capital Region",
    images: [
      "https://images.unsplash.com/photo-1559260834-e03c79a0738e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvcGVuaGFnZW4lMjBzdXN0YWluYWJsZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1558210472-c6f4b8672a51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29wZW5oYWdlbiUyMHN1c3RhaW5hYmxlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1594750853929-49d93681d6ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29wZW5oYWdlbiUyMHN1c3RhaW5hYmxlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1523246795392-02a25b87c285?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29wZW5oYWdlbiUyMHN1c3RhaW5hYmxlfGVufDB8fDB8fHww",
    ],
    duration: "4 hours",
    price: "$90",
    rating: 4.8,
    tags: ["Sustainability", "Innovation", "Urban Planning"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "off-the-beaten-path",
    meetingPoint: {
      address:
        "Green Light House, Marmormolen, Nordhavn, 2150 Copenhagen, Denmark",
      coordinates: {
        latitude: 55.7053,
        longitude: 12.5978,
      },
      instructions:
        "Meet at the Green Light House building in Nordhavn district. Your guide will be waiting in front of the main entrance with an electric cargo bike displaying the 'Sustainable Copenhagen' sign. Public transportation recommended: take the S-train to Nordhavn Station.",
      contactNumber: "+45 26 78 90 12",
      contactEmail: "sustainable@paragontrails.com",
    },
    availableDates: [
      "2024-04-12",
      "2024-04-26",
      "2024-05-10",
      "2024-05-24",
      "2024-06-07",
      "2024-06-21",
      "2024-07-05",
      "2024-07-19",
      "2024-08-02",
      "2024-08-16",
    ],
    highlights: [
      "Visit CopenHill, the waste-to-energy plant with a ski slope on its roof",
      "Tour Nordhavn, the sustainable city district built on reclaimed land",
      "Learn about Copenhagen's ambitious goal to be carbon neutral by 2025",
      "See innovative urban farming projects and green architecture",
      "Discover how cycling infrastructure transformed city transportation",
    ],
    inclusions: [
      "Expert guide specialized in sustainable urban development",
      "Electric bike or public transportation between sites",
      "Entry to CopenHill observation deck",
      "Tour of a sustainable building or community",
      "Sustainable city development guidebook",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Food and beverages",
      "CopenHill ski slope access (optional activity)",
      "Gratuities",
    ],
    itinerary: [
      "10:00 AM - Meet at Green Light House for introduction",
      "10:30 AM - Tour of Nordhavn sustainable district",
      "11:30 AM - Visit urban farming initiative",
      "12:30 PM - Travel to CopenHill waste-to-energy plant",
      "01:00 PM - Tour of CopenHill and observation deck",
      "02:00 PM - Cycling infrastructure demonstration",
      "02:30 PM - Tour conclusion with sustainable recommendations",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before the scheduled tour. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before tour start time.",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves moderate walking (approximately 3 kilometers/2 miles) plus some transportation by electric bike or public transit between sites. Most areas are accessible and on level ground, though CopenHill includes some inclines and stairs. We maintain a comfortable pace with regular stops, making it suitable for most reasonably fit participants.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is suitable for children interested in sustainability, engineering, and urban design. We provide age-appropriate explanations and interactive elements for younger participants. Children under 12 should be accompanied by an adult. The electric bikes include options for child seats or cargo bikes for families.",
      },
      {
        question: "What makes Copenhagen a leader in sustainability?",
        answer:
          "Copenhagen has implemented innovative solutions across multiple sectors including renewable energy, cycling infrastructure, waste management, water systems, and green architecture. During the tour, you'll learn how political leadership, civic engagement, and smart design have created systems that simultaneously improve quality of life while reducing environmental impact. We'll explore how these models can be applied to other cities worldwide.",
      },
      {
        question: "Will we go inside sustainable buildings?",
        answer:
          "Yes, the tour includes interior access to select sustainable buildings, which may include the Green Light House (Denmark's first carbon-neutral public building), residential developments in Nordhavn, or the CopenHill waste-to-energy plant. You'll see firsthand how innovative design, materials, and technology create more efficient, comfortable, and environmentally responsible urban spaces.",
      },
      {
        question: "How does Copenhagen's cycling infrastructure work?",
        answer:
          "Copenhagen's world-famous cycling network includes over 350km of separated bike lanes, bicycle highways, dedicated signals, and thoughtful design features like footrests and angled trash bins. During the tour, you'll learn how this comprehensive approach has led to over 62% of residents commuting by bicycle daily. We'll demonstrate how the 'Green Wave' traffic signal timing, intersection design, and snow clearing priorities create a system where cycling is the fastest, safest, and most convenient transportation option for many trips.",
      },
    ],
  },
];
export default copenhagenTours;
