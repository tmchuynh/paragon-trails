import { Tour } from "@/lib/interfaces/services/tours";

export const copenhagenTours: Tour[] = [
  {
    title: "Copenhagen by Bike & Canal Cruise",
    description:
      "Experience Copenhagen like a local with a guided bicycle tour through the city's beautiful parks, historic districts, and along the harbor, followed by a relaxing canal cruise with Nordic refreshments.",
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
    tourCategoryId: "local",
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
    ],
  },
  {
    title: "Danish Design & Architecture Masterpieces",
    description:
      "Discover Copenhagen's revolutionary design heritage with an architecture specialist guiding you through iconic modern buildings, design studios, and exclusive access to private homes showcasing Danish design principles.",
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
    tourCategoryId: "cultural",
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
    ],
  },
  {
    title: "Copenhagen's Culinary Secrets: From Street Food to Fine Dining",
    description:
      "Embark on a gastronomic journey through Copenhagen's vibrant food scene, sampling everything from trendy street food markets to Michelin-starred restaurants, guided by a local culinary expert.",
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
    tourCategoryId: "culinary",
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
    ],
  },
  {
    title: "Copenhagen's Royal Heritage & Gardens",
    description:
      "Explore the royal history of Copenhagen with a guided tour of Amalienborg Palace, Rosenborg Castle, and the stunning King's Garden, learning about Denmark's monarchy and its influence on the city.",
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
    tourCategoryId: "historical",
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
    ],
  },
];

export default copenhagenTours;
