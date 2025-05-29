import { Tour } from "@/lib/interfaces/services/tours";
export const copenhagenTours: Tour[] = [
  {
    title: "Copenhagen by Bike & Canal Cruise",
    description:
      "Experience Copenhagen like a local with a guided bicycle tour through the city's beautiful parks, historic districts, and along the harbor, followed by a relaxing canal cruise with Nordic refreshments.",
    images: [
      "/images/tours/copenhagen/bike-tour.jpg",
      "/images/tours/copenhagen/canal-cruise.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Cycling", "Canals", "Local Experience"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lars Nielsen",
    tourCategoryId: "local-experience",
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
      "/images/tours/copenhagen/design-museum.jpg",
      "/images/tours/copenhagen/modern-architecture.jpg",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Design", "Architecture", "Modern"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Sofia Bergmann",
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
      "/images/tours/copenhagen/street-food.jpg",
      "/images/tours/copenhagen/michelin-restaurant.jpg",
    ],
    duration: "6 hours",
    price: "$160",
    rating: 4.9,
    tags: ["Culinary", "Street Food", "Fine Dining"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mette Jensen",
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
      "/images/tours/copenhagen/amalienborg-palace.jpg",
      "/images/tours/copenhagen/rosenborg-castle.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Royalty", "Gardens", "History"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Kasper Andersen",
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
