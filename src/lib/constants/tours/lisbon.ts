import { Tour } from "@/lib/interfaces/services/tours";
export const lisbonTours: Tour[] = [
  {
    title: "Fado Music Night & Alfama Exploration",
    description:
      "Experience Portugal's soulful fado music in an authentic setting after exploring the atmospheric Alfama district's maze of narrow streets, hidden courtyards, and stunning viewpoints.",
    city: "Lisbon",
    country: "Portugal",
    region: "Lisbon Metropolitan Area",
    images: [
      "https://images.unsplash.com/photo-1587560699334-4b8b3f3f3f3f", // Alfama streets
      "https://media.istockphoto.com/photos/fado-performance-in-lisbon-picture-id1234567890", // Fado performance
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Music", "Cultural", "Evening"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    itinerary: [
      "18:00 - Meet at Praça do Comércio and begin walking tour of Alfama",
      "18:30 - Visit Miradouro de Santa Luzia for panoramic views",
      "19:00 - Explore Alfama's narrow streets and historic sites",
      "19:30 - Enjoy traditional Portuguese dinner at a local restaurant",
      "21:00 - Attend live Fado performance in an authentic Fado house",
      "22:00 - Tour concludes at the Fado venue",
    ],
    faqs: [
      {
        question: "Does the tour include dinner?",
        answer:
          "Yes, the tour includes a traditional Portuguese dinner with wine during the Fado performance.",
      },
      {
        question: "Is the Fado performance suitable for children?",
        answer:
          "While Fado music is deeply emotional and may not hold children's attention, the atmosphere is family-friendly. We recommend this tour for children aged 10 and up who can appreciate cultural experiences.",
      },
    ],
  },
  {
    title: "Sintra Fairytale Palaces & Mystical Gardens",
    description:
      "Discover the magical town of Sintra, exploring colorful Pena Palace, mysterious Quinta da Regaleira gardens, and enjoying pastries from a historic bakery using royal recipes.",
    city: "Sintra",
    country: "Portugal",
    region: "Lisbon Metropolitan Area",
    images: [
      "https://cdn.pixabay.com/photo/2017/08/30/07/52/pena-palace-2690179_1280.jpg", // Pena Palace
      "https://images.unsplash.com/photo-1590490357750-0c9f4f4f4f4f", // Quinta da Regaleira
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Palaces", "Gardens", "UNESCO"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    itinerary: [
      "08:00 - Depart from Lisbon towards Sintra",
      "09:00 - Visit Pena Palace and its gardens",
      "11:00 - Explore the historic center of Sintra",
      "12:00 - Enjoy lunch at a local restaurant (not included)",
      "13:30 - Tour Quinta da Regaleira and its mystical gardens",
      "15:30 - Free time to explore or shop for local crafts",
      "16:30 - Return to Lisbon",
    ],
    faqs: [
      {
        question: "How far is Sintra from Lisbon?",
        answer:
          "Sintra is located about 30km (18 miles) from Lisbon. Our comfortable private transportation takes approximately 40 minutes each way, depending on traffic conditions.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as we will be exploring both indoor and outdoor sites. Sintra's microclimate can be cooler than Lisbon, so a light jacket is advisable.",
      },
    ],
  },
  {
    title: "Lisbon Street Art & Culinary Tour",
    description:
      "Explore Lisbon's vibrant street art scene with a guided walking tour through the city's best murals, followed by a culinary experience sampling local delicacies at hidden food spots.",
    city: "Lisbon",
    country: "Portugal",
    region: "Lisbon Metropolitan Area",
    images: [
      "https://img.freepik.com/free-photo/colorful-street-art-lisbon_1234-5678.jpg", // Street art
      "https://lh3.googleusercontent.com/proxy/abcdefg1234567", // Local food market
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Art", "Food", "Walking Tour"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    itinerary: [
      "10:00 - Meet at Praça Martim Moniz and begin walking tour",
      "10:30 - Visit iconic street art murals in Bairro Alto",
      "11:30 - Explore hidden alleys with unique graffiti",
      "12:30 - Stop at a local eatery for traditional Portuguese snacks",
      "13:30 - Continue to Cais do Sodré for more street art",
      "14:30 - Conclude tour with dessert at a famous pastry shop",
    ],
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences and delicious food tastings.",
      },
      {
        question: "What should I wear for the walk?",
        answer:
          "Wear comfortable walking shoes and dress for the weather. We recommend bringing a water bottle and sunscreen.",
      },
      {
        question: "Do we visit any indoor galleries?",
        answer:
          "Yes, we will visit a few indoor galleries showcasing local artists' work, along with outdoor murals throughout the city.",
      },
    ],
  },
  {
    title: "Sunset Sailing Cruise on the Tagus River",
    description:
      "Set sail along the Tagus River for a magical evening aboard a luxury yacht. Watch the sunset behind Lisbon’s skyline while enjoying a glass of wine and local snacks, with live commentary about the monuments you pass.",
    city: "Lisbon",
    country: "Portugal",
    region: "Lisbon Metropolitan Area",
    images: [
      "https://images.unsplash.com/photo-1608315398886-9e2b1e7517fc", // Sunset sailboat
      "https://cdn.pixabay.com/photo/2017/01/20/00/30/lisbon-1992025_1280.jpg", // Tagus River from water
    ],
    duration: "2 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Sunset", "Luxury", "Cruise"],
    isRomantic: true,
    isLuxury: true,
    isOutdoor: true,
    isPopular: true,
    isLocalExperience: true,
    isFamilyFriendly: true,
    tourCategoryId: "luxury",
    itinerary: [
      "18:00 - Boarding at Doca do Bom Sucesso marina",
      "18:15 - Sail past Belém Tower and the Discoveries Monument",
      "18:45 - Watch the sunset from the 25 de Abril Bridge viewpoint",
      "19:15 - Enjoy drinks and Portuguese snacks on board",
      "20:00 - Return to the marina and disembark",
    ],
    faqs: [
      {
        question: "Are drinks and snacks included?",
        answer:
          "Yes, each guest receives a complimentary glass of wine and a selection of traditional snacks during the cruise.",
      },
      {
        question: "Is the yacht suitable for children?",
        answer:
          "Yes, families are welcome. The crew ensures a safe and enjoyable experience for all ages.",
      },
    ],
  },
  {
    title: "Belém Monuments & Pastéis de Nata Tour",
    description:
      "Discover the history-rich neighborhood of Belém. Visit Jerónimos Monastery, Belém Tower, and the Discoveries Monument. End the tour with a tasting of freshly baked Pastéis de Nata at the legendary Pastéis de Belém bakery.",
    city: "Lisbon",
    country: "Portugal",
    region: "Lisbon Metropolitan Area",
    images: [
      "https://media.istockphoto.com/photos/belem-tower-lisbon-picture-id1156927121", // Belém Tower
      "https://img.freepik.com/free-photo/traditional-portuguese-custard-tarts_53876-104225.jpg", // Pastéis de Nata
    ],
    duration: "3.5 hours",
    price: "$65",
    rating: 4.8,
    tags: ["History", "Food", "Monuments"],
    isHistorical: true,
    isCulinary: true,
    isOutdoor: true,
    isPopular: true,
    isFamilyFriendly: true,
    tourCategoryId: "historical",
    itinerary: [
      "09:00 - Meet at Praça do Império and begin with Jerónimos Monastery",
      "10:00 - Walk to the Discoveries Monument with guided commentary",
      "10:45 - Visit Belém Tower and surrounding gardens",
      "11:30 - Stop at Pastéis de Belém for a tasting session",
      "12:30 - Tour concludes at the bakery",
    ],
    faqs: [
      {
        question: "Are entrance tickets included?",
        answer:
          "Yes, entrance to Jerónimos Monastery and Belém Tower are included in the tour price.",
      },
      {
        question: "Can I buy extra Pastéis de Nata?",
        answer:
          "Absolutely. The bakery offers boxes for takeaway and has gluten-free and vegan options upon request.",
      },
    ],
  },
  {
    title: "Lisbon Tram 28 Experience with Historical Guide",
    description:
      "Ride the iconic Tram 28 through Lisbon’s most picturesque neighborhoods. Along the way, your expert guide will explain the history of Graça, Alfama, Baixa, and Estrela. Enjoy photo stops and local stories along this moving tour.",
    city: "Lisbon",
    country: "Portugal",
    region: "Lisbon Metropolitan Area",
    images: [
      "https://images.unsplash.com/photo-1565808225684-7982e9d82070", // Tram 28
      "https://lh3.googleusercontent.com/p/AF1QipMsdjQnBdDKPa3-AKVDmdHE3clbWwZxE5hYck5G=w1080-h608-p-no-v0", // Alfama view from tram
    ],
    duration: "2.5 hours",
    price: "$45",
    rating: 4.6,
    tags: ["Tram", "History", "Scenic"],
    isHistorical: true,
    isLocalExperience: true,
    isFamilyFriendly: true,
    isWheelchairAccessible: false,
    isPopular: true,
    tourCategoryId: "cultural",
    itinerary: [
      "10:00 - Board Tram 28 at Martim Moniz with private guide",
      "10:20 - Pass through Graça with commentary and photo stop",
      "10:45 - Ride through Alfama and learn about Moorish history",
      "11:15 - Stop near Baixa-Chiado for a short walking tour",
      "11:45 - Continue to Estrela Basilica with exterior visit",
      "12:30 - Tour ends near Campo de Ourique",
    ],
    faqs: [
      {
        question: "Is the tram ride private?",
        answer:
          "No, this tour uses public Tram 28. However, your group will be guided by a private licensed guide throughout.",
      },
      {
        question: "Is the tram wheelchair accessible?",
        answer:
          "Unfortunately, the historical Tram 28 is not wheelchair accessible due to narrow steps and limited space.",
      },
    ],
  },
];
export default lisbonTours;
