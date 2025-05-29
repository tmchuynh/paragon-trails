import { Tour } from "@/lib/interfaces/services/tours";

export const cartagenaTours: Tour[] = [
  {
    title: "Colonial City Walls & Hidden Fortresses",
    description:
      "Explore Cartagena's impressive UNESCO-listed fortifications with a military historian, discovering secret tunnels, hidden chambers, and strategic viewpoints while learning about the city's defense against pirates and rival empires.",
    images: [
      "/images/tours/cartagena/city-walls.jpg",
      "/images/tours/cartagena/san-felipe-fortress.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Historical", "Architecture", "UNESCO"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Diego Morales",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 3 kilometers along the city walls and includes climbing sections of the fortress with steep steps. While we maintain a leisurely pace with plenty of breaks, comfortable shoes and moderate fitness are recommended. Alternative routes with fewer stairs can be arranged for those with mobility concerns.",
      },
      {
        question: "Are there restroom facilities available?",
        answer:
          "Yes, there are restroom facilities at key points along the tour, including the San Felipe Fortress and Plaza de los Coches. We also make stops at local cafes where you can use restrooms and purchase refreshments.",
      },
    ],
  },
  {
    title: "Caribbean Culinary Journey & Cooking Class",
    description:
      "Discover the vibrant flavors of Colombian Caribbean cuisine through market visits, rum tastings, and a hands-on cooking class led by a local chef in a beautiful colonial mansion in the historic center.",
    images: [
      "/images/tours/cartagena/cooking-class.jpg",
      "/images/tours/cartagena/bazurto-market.jpg",
    ],
    duration: "6 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Food", "Cooking", "Market"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Catalina Vélez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll create an authentic Caribbean Colombian meal including ceviche with fresh local seafood, coconut rice, patacones (fried plantains), and a traditional dessert like coconut flan. Our chef adapts recipes based on seasonal ingredients from the morning's market visit. Vegetarian options are available with advance notice, and all participants receive recipe cards to recreate these dishes at home.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is required! Our class is designed for all skill levels, from beginners to experienced cooks. Chef Catalina provides step-by-step instructions and personalized guidance throughout the cooking process. The focus is on having fun while learning about Caribbean flavors and techniques.",
      },
    ],
  },
  {
    title: "Rosario Islands Private Yacht Experience",
    description:
      "Escape to the stunning Rosario Islands aboard a private yacht, enjoying crystal-clear waters perfect for snorkeling, a fresh seafood lunch on a secluded beach, and the exclusive experience of Caribbean paradise without the crowds.",
    images: [
      "/images/tours/cartagena/rosario-islands-yacht.jpg",
      "/images/tours/cartagena/snorkeling-coral.jpg",
    ],
    duration: "Full day",
    price: "$345",
    rating: 5.0,
    tags: ["Islands", "Yacht", "Snorkeling"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Carlos Restrepo",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What's included in this yacht experience?",
        answer:
          "Your private yacht charter includes an experienced captain and crew, all snorkeling equipment, towels, unlimited beverages (including local beer and rum), a gourmet lunch featuring fresh-caught seafood, and transportation to/from your hotel. The yacht accommodates up to 8 passengers and features comfortable seating areas, shade options, and a freshwater shower. We customize the itinerary based on sea conditions and your preferences.",
      },
    ],
  },
  {
    title: "Palenque Cultural Heritage Experience",
    description:
      "Visit San Basilio de Palenque, the first free African town in the Americas and UNESCO Cultural Heritage site, meeting descendants of escaped slaves who maintain unique cultural traditions, music, and language.",
    images: [
      "/images/tours/cartagena/palenque-drummers.jpg",
      "/images/tours/cartagena/palenque-village.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Cultural", "African Heritage", "UNESCO"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Rafael Cassiani",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes Palenque culturally significant?",
        answer:
          "San Basilio de Palenque was founded by escaped enslaved Africans in the 17th century and became the first free Black town in the Americas. Its residents developed their own language (Palenquero, a Spanish-Bantu creole), preserved unique African musical traditions, and maintained distinct cultural practices that survived into the modern era. UNESCO recognized Palenque's cultural space as a Masterpiece of the Oral and Intangible Heritage of Humanity due to its importance in preserving Afro-Colombian identity.",
      },
      {
        question: "What activities are included in the tour?",
        answer:
          "The tour includes a guided walk through the village, visits to local artisans, a traditional Palenque lunch, and live performances of Palenquero music and dance. You'll also have opportunities to interact with community members, learn about their history, and purchase handmade crafts directly from artisans. The experience is designed to be immersive and respectful, providing insight into the living culture of Palenque.",
      },
    ],
  },
  {
    title: "Sunset Photography: Colonial Gems & Caribbean Light",
    description:
      "Capture the magical golden hour light of Cartagena with a professional photographer guiding you through the most photogenic spots, from colorful colonial streets to panoramic views from the historic walls.",
    images: [
      "/images/tours/cartagena/sunset-photography.jpg",
      "/images/tours/cartagena/colonial-balconies.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Architecture"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Alejandro Gomez",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "Which locations will we visit for photography?",
        answer:
          "We time our tour to catch the best light, beginning with the narrow streets of Getsemaní neighborhood with its colorful houses and street art, followed by Plaza Santo Domingo as afternoon shadows create dramatic light. We then move to the city walls for golden hour, catching spectacular views of the Caribbean Sea and the colonial skyline. We conclude at Café del Mar for classic sunset shots over the water while enjoying a complimentary cocktail.",
      },
      {
        question: "Do I need to bring my own camera?",
        answer:
          "While you can bring your own camera, our guide provides professional-grade cameras and lenses for you to use during the tour. This allows you to experiment with different settings and techniques without needing prior photography experience. We also provide tips on composition, lighting, and capturing the essence of Cartagena's unique architecture and vibrant street life.",
      },
    ],
  },
  {
    title: "Gabriel García Márquez Literary Tour",
    description:
      "Follow in the footsteps of Nobel Prize-winning author Gabriel García Márquez, exploring the real Cartagena locations that inspired scenes from 'Love in the Time of Cholera' and other works of magical realism.",
    images: [
      "/images/tours/cartagena/garcia-marquez-sites.jpg",
      "/images/tours/cartagena/colonial-streets.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Literary", "Cultural", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Prof. Luisa Valenzuela",
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Do I need to have read García Márquez's books before taking this tour?",
        answer:
          "While prior familiarity with works like 'Love in the Time of Cholera' or '100 Years of Solitude' enhances the experience, it's not required. Our guide provides context about García Márquez's life, the literary movement of magical realism, and key passages that connect to Cartagena's locations. Many guests find themselves inspired to read his books after experiencing the real-world settings that influenced his fictional world of Macondo.",
      },
      {
        question: "What locations will we visit?",
        answer:
          "The tour includes stops at key sites such as the Plaza de los Coches, where García Márquez's family lived, the Hotel Santa Clara (inspiration for the hotel in his novels), and the colonial streets that feature prominently in his stories. We also discuss how Cartagena's history and culture influenced his writing, making this a unique blend of literature and local heritage.",
      },
    ],
  },
  {
    title: "Cartagena Street Art & Urban Culture Tour",
    description:
      "Discover the vibrant street art scene of Cartagena with a local artist, exploring colorful murals, graffiti, and urban installations that reflect the city's cultural identity and social issues.",
    images: [
      "/images/tours/cartagena/street-art.jpg",
      "/images/tours/cartagena/urban-murals.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Sofia Torres",
    tourCategoryId: "art",
    faqs: [
      {
        question: "What types of street art will we see?",
        answer:
          "The tour showcases a diverse range of street art styles, from large-scale murals by renowned Colombian artists to smaller, hidden pieces that tell stories about local life. You'll learn about the techniques used, the messages behind the art, and how it reflects Cartagena's social and political landscape. We also visit community art projects that engage local youth in creative expression.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! Our guide engages children with interactive activities like scavenger hunts to find specific artworks and encourages them to express their own creativity through drawing or photography during the tour.",
      },
    ],
  },
];

export default cartagenaTours;
