import { Tour } from "@/lib/interfaces/services/tours";
export const rioDeJaneiroTours: Tour[] = [
  {
    title: "Christ the Redeemer Helicopter Experience",
    description:
      "Soar above Rio's stunning landscape in a private helicopter, circling the iconic Christ the Redeemer statue and enjoying breathtaking views of Sugarloaf Mountain, Copacabana, and the lush mountains surrounding the city.",
    city: "Rio de Janeiro",
    country: "Brazil",
    region: "Southeast",
    images: [
      "/images/tours/rio-de-janeiro/helicopter-cristo.jpg",
      "/images/tours/rio-de-janeiro/aerial-view.jpg",
    ],
    duration: "2 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Helicopter", "Views", "Christ the Redeemer"],
    meetingPoint: {
      address: "Lagoa Heliport, Av. Borges de Medeiros, Lagoa, Rio de Janeiro",
      coordinates: {
        latitude: -22.9724,
        longitude: -43.1958,
      },
      instructions:
        "Please arrive 30 minutes before your scheduled departure time for safety briefing. Look for the 'RJ Helicopter Tours' sign at the main entrance.",
      contactNumber: "+55 21 3322-4444",
      contactEmail: "bookings@rjhelicopters.com",
    },
    highlights: [
      "360-degree aerial views of Christ the Redeemer",
      "Fly over the stunning beaches of Copacabana and Ipanema",
      "See Sugarloaf Mountain and Guanabara Bay from the air",
      "Capture unique photos of Rio's dramatic landscape",
    ],
    inclusions: [
      "30-minute helicopter flight",
      "Professional pilot with English commentary",
      "Safety briefing and equipment",
      "Bottled water",
      "Noise-canceling headsets with two-way communication",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Professional photography (available for purchase)",
      "Gratuities",
      "Personal insurance",
    ],
    itinerary: [
      "1:00 PM - Arrival and check-in at Lagoa Heliport",
      "1:15 PM - Safety briefing and helicopter orientation",
      "1:30 PM - Board helicopter for takeoff",
      "1:35 PM - Fly over Rodrigo de Freitas Lagoon",
      "1:40 PM - Circle Christ the Redeemer statue on Corcovado Mountain",
      "1:50 PM - Fly over Sugarloaf Mountain and beaches",
      "2:00 PM - Return to heliport for landing",
      "2:15 PM - Tour conclusion with opportunity for photos",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours before experience. 50% refund 24-48 hours before experience. No refund if canceled less than 24 hours before scheduled departure. Full refund if canceled due to unsafe weather conditions.",
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How close do we get to the Christ the Redeemer statue?",
        answer:
          "We maintain a respectful and safe distance from the statue (approximately 300 meters) as regulated by Brazilian aviation authorities, which still provides spectacular photo opportunities. The flight path includes multiple angles so you'll see the monument from various perspectives.",
      },
      {
        question: "Is there a weight limit for passengers?",
        answer:
          "Yes, for safety reasons there is a weight limit of 130kg (286lbs) per passenger. The total weight of all passengers must also be balanced within the helicopter.",
      },
      {
        question: "What happens if there's bad weather?",
        answer:
          "Safety is our priority. If weather conditions are unsuitable for flying (heavy rain, strong winds, or poor visibility), we'll offer to reschedule your flight or provide a full refund.",
      },
    ],
  },
  {
    title: "Samba School Backstage Experience",
    description:
      "Get exclusive behind-the-scenes access to one of Rio's top samba schools, learn dance moves from professional performers, and witness costume creation and float construction for the world-famous Carnival parade.",
    city: "Rio de Janeiro",
    country: "Brazil",
    region: "Southeast",
    images: [
      "/images/tours/rio-de-janeiro/samba-school.jpg",
      "/images/tours/rio-de-janeiro/carnival-costumes.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Samba", "Dance", "Carnival"],
    meetingPoint: {
      address:
        "Cidade do Samba, Rua Rivadávia Corrêa 60, Gamboa, Rio de Janeiro",
      coordinates: {
        latitude: -22.8962,
        longitude: -43.1954,
      },
      instructions:
        "Meet at the main entrance of Cidade do Samba. Your guide will be holding a yellow sign with 'Samba Experience' written on it.",
      contactNumber: "+55 21 2544-6668",
      contactEmail: "info@sambatours.com",
    },
    highlights: [
      "Visit the workshop where elaborate carnival floats are constructed",
      "Learn basic samba steps from professional dancers",
      "Try on authentic carnival costumes",
      "Watch a private mini-performance by samba school members",
    ],
    inclusions: [
      "Expert local guide and translator",
      "Samba dance lesson (30 minutes)",
      "Behind-the-scenes tour of costume workshop",
      "Sampling of traditional Brazilian drinks",
      "Souvenir carnival mask",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals",
      "Professional photos (available for purchase)",
      "Gratuities",
    ],
    itinerary: [
      "2:00 PM - Meet at Cidade do Samba entrance",
      "2:15 PM - Welcome reception with introduction to samba schools",
      "2:45 PM - Tour of float workshop and costume atelier",
      "3:30 PM - Costume trying session and photo opportunity",
      "4:00 PM - Samba dance lesson with professional dancers",
      "4:30 PM - Watch exclusive mini-performance",
      "5:15 PM - Free time to explore and shop for souvenirs",
      "6:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours in advance. 50% refund if canceled 12-24 hours in advance. No refunds for cancellations less than 12 hours in advance or no-shows.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer:
          "Not at all! The dance instruction is suitable for complete beginners, and our professional dancers are skilled at teaching the basic steps to anyone. You can participate as much or as little as you're comfortable with.",
      },
      {
        question: "When is the best time to take this tour?",
        answer:
          "While this tour is available year-round, it's especially fascinating from November to February, when preparations for Carnival are in full swing and you can see the floats and costumes being completed.",
      },
      {
        question: "Is photography allowed?",
        answer:
          "Yes, photography for personal use is permitted in most areas. Some sections of the costume workshop may have restrictions to protect proprietary designs, which your guide will point out.",
      },
    ],
  },
  {
    title: "Favela Community Tour & Cultural Exchange",
    description:
      "Experience the vibrant culture of Rio's favelas with a local guide, visiting community projects, art installations, and learning about the history and daily life in these neighborhoods while supporting local businesses.",
    city: "Rio de Janeiro",
    country: "Brazil",
    region: "Southeast",
    images: [
      "/images/tours/rio-de-janeiro/favela-tour.jpg",
      "/images/tours/rio-de-janeiro/community-art.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Favela", "Cultural", "Local"],
    meetingPoint: {
      address:
        "Copacabana Palace Hotel, Av. Atlântica 1702, Copacabana, Rio de Janeiro",
      coordinates: {
        latitude: -22.9673,
        longitude: -43.1786,
      },
      instructions:
        "Meet at the side entrance of Copacabana Palace Hotel. Your guide will be wearing a green shirt with 'Favela Tours' logo.",
      contactNumber: "+55 21 9876-5432",
    },
    highlights: [
      "Visit Rocinha, the largest favela in Brazil, with a resident guide",
      "Meet local artists and view unique street art and graffiti",
      "Support community businesses by visiting local shops and cafés",
      "Learn about the history and day-to-day reality of favela communities",
    ],
    inclusions: [
      "Local resident guide",
      "Small group experience (maximum 8 people)",
      "Donation to community development project",
      "Visit to community art center",
      "Local snack tasting",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and additional drinks",
      "Souvenirs and personal purchases",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Copacabana Palace and travel to Rocinha",
      "9:30 AM - Introduction to favela history and community development",
      "10:00 AM - Walk through the community with explanations of daily life",
      "10:45 AM - Visit to local school or community project",
      "11:15 AM - Street art tour and meeting with local artists",
      "11:45 AM - Visit local businesses and opportunity for authentic souvenirs",
      "12:15 PM - Refreshment stop at local café",
      "12:45 PM - Return to meeting point",
    ],
    cancellationPolicy:
      "Full refund if canceled 24 hours before tour. No refund for cancellations less than 24 hours before departure or no-shows.",
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour safe?",
        answer:
          "Yes, our tours are conducted with local guides who know the area well. We prioritize safety and respect for the community, ensuring a positive experience for both visitors and residents.",
      },
      {
        question: "What should I wear for the favela tour?",
        answer:
          "We recommend comfortable clothing and sturdy shoes suitable for walking on uneven terrain. Please dress modestly to respect local customs.",
      },
      {
        question: "How does this tour benefit the community?",
        answer:
          "A portion of every ticket is donated directly to community development projects. Additionally, we stop at local businesses where you can purchase authentic crafts and refreshments, putting money directly into the local economy.",
      },
    ],
  },
];
export default rioDeJaneiroTours;
