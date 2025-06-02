import { Tour } from "@/lib/interfaces/services/tours";

export const viennaTours: Tour[] = [
  {
    title: "Classical Vienna & Private Concert",
    description:
      "Immerse yourself in the musical heritage of Vienna with a distinguished musicologist, visiting the homes of Mozart and Beethoven, followed by a private chamber concert in a historic palace with champagne reception.",
    city: "Vienna",
    country: "Austria",
    region: "Vienna State",
    images: [
      "/images/tours/vienna/mozart-house.jpg",
      "/images/tours/vienna/palace-concert.jpg",
    ],
    duration: "4 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Classical Music", "Cultural", "Exclusive"],
    meetingPoint: {
      address: "Mozarthaus Vienna, Domgasse 5, 1010 Wien",
      coordinates: {
        latitude: 48.2077,
        longitude: 16.3751,
      },
      instructions:
        "Meet in front of Mozarthaus Vienna. Your guide will be holding a music sheet with 'Classical Vienna Tour' written on it.",
      contactNumber: "+43 1 512 17 91",
      contactEmail: "concierge@viennaclassicaltours.com",
    },
    highlights: [
      "Private guided tour of Mozarthaus Vienna where he composed 'The Marriage of Figaro'",
      "Visit Beethoven's apartment at Pasqualatihaus with original manuscripts and instruments",
      "Exclusive after-hours chamber concert in the historic Palais Auersperg",
      "Champagne reception with the musicians following the performance",
    ],
    inclusions: [
      "Professional musicologist guide",
      "Entrance fees to Mozarthaus and Beethoven museums",
      "Private chamber concert (75 minutes)",
      "Champagne reception with canapés",
      "Program notes and commemorative recording",
      "Private transportation between venues",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Additional food and beverages",
      "Gratuities",
      "Personal expenses",
    ],
    itinerary: [
      "4:00 PM - Meet at Mozarthaus Vienna",
      "4:15 PM - Expert-guided tour of Mozart's apartment",
      "5:15 PM - Private transfer to Beethoven's Pasqualatihaus",
      "5:30 PM - Tour of Beethoven's Vienna residence",
      "6:15 PM - Transfer to Palais Auersperg",
      "6:30 PM - Private concert of Mozart and Beethoven compositions",
      "7:45 PM - Champagne reception with the musicians",
      "8:00 PM - Tour conclusion",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days before. No refund for cancellations less than 72 hours before the scheduled tour.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: false,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to know about classical music to enjoy this tour?",
        answer:
          "Not at all! Our musicologist guides are experts at making classical music accessible and engaging for everyone. The tour provides historical and cultural context that brings the music to life regardless of your prior knowledge. The private concert features well-known pieces with brief, engaging introductions that enhance your appreciation of each composition.",
      },
      {
        question: "What is the dress code for the concert?",
        answer:
          "Smart casual attire is appropriate for the concert. While formal evening wear is not required, we suggest something a bit more elegant than everyday tourist clothing to enhance the special atmosphere of the evening.",
      },
      {
        question: "What type of music will be performed?",
        answer:
          "The program typically features chamber music compositions by Mozart, Beethoven, and other Viennese composers, performed by a string quartet or small ensemble of 4-6 professional musicians. The exact program varies but always includes recognizable masterpieces associated with Vienna.",
      },
    ],
  },
  {
    title: "Imperial Vienna & Habsburg Treasures",
    description:
      "Experience the grandeur of the Habsburg Empire with private access to imperial apartments in Schönbrunn Palace, the Imperial Treasury's crown jewels, and the Spanish Riding School with a historian specializing in royal history.",
    city: "Vienna",
    country: "Austria",
    region: "Vienna State",
    images: [
      "/images/tours/vienna/schonbrunn-palace.jpg",
      "/images/tours/vienna/imperial-crown.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Royal History", "Palace", "Habsburg"],
    meetingPoint: {
      address: "Maria-Theresien-Platz, 1010 Wien",
      coordinates: {
        latitude: 48.2034,
        longitude: 16.3606,
      },
      instructions:
        "Meet by the Maria Theresa monument between the Art History and Natural History Museums. Your guide will be holding a Habsburg imperial flag emblem.",
      contactNumber: "+43 1 587 22 13",
      contactEmail: "tours@imperialvienna.at",
    },
    highlights: [
      "Private early access to the Imperial Apartments at Schönbrunn Palace",
      "Special permission to view the Habsburg Crown Jewels with fewer crowds",
      "Behind-the-scenes tour of the Spanish Riding School stables",
      "Access to the normally closed Imperial silver collection vaults",
    ],
    inclusions: [
      "Habsburg historian guide with royal expertise",
      "Skip-the-line VIP entrance to all venues",
      "Private transportation between sites",
      "Imperial refreshment break with traditional Viennese coffee and pastries",
      "Souvenir book on Habsburg history",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Lunch",
      "Spanish Riding School performance tickets (available as an add-on)",
      "Gratuities",
    ],
    itinerary: [
      "9:00 AM - Meet at Maria-Theresien-Platz",
      "9:15 AM - Drive to Schönbrunn Palace for early access",
      "9:30 AM - VIP tour of Imperial Apartments and private Habsburg chambers",
      "11:00 AM - Visit to the palace gardens and Gloriette",
      "11:45 AM - Coffee and pastry break at the palace cafe",
      "12:30 PM - Transfer to Hofburg Palace complex",
      "1:00 PM - Guided tour of Imperial Treasury and Crown Jewels",
      "2:00 PM - Special access visit to Spanish Riding School stables",
      "2:45 PM - Imperial Silver Collection vault tour",
      "3:00 PM - Tour conclusion at Hofburg Palace",
    ],
    cancellationPolicy:
      "Full refund if canceled 7 days in advance. 50% refund if canceled 3-7 days before. No refund for cancellations less than 3 days before scheduled tour.",
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: true,
    isFree: false,
    isPopular: true,
    isFamilyFriendly: true,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this palace tour different from standard visits?",
        answer:
          "Our tour includes exclusive access to the private imperial apartments not open to general visitors, including Franz Joseph and Empress Elisabeth's personal chambers with original furnishings. We also visit the palace during quieter hours and gain special access to the Lipizzaner stables at the Spanish Riding School where you can meet these majestic horses up close - something regular visitors cannot experience.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "This tour includes approximately 3-4 km (2-2.5 miles) of walking throughout the day, with many stairs in the palaces. Comfortable walking shoes are essential. While the pace is leisurely with many stops, participants should be comfortable standing for periods of 30-45 minutes.",
      },
      {
        question: "Is photography permitted inside the palaces?",
        answer:
          "Photography without flash is permitted in most areas of Schönbrunn Palace. Photography is not permitted in the Imperial Treasury or certain rooms of the Hofburg Palace. Your guide will clearly indicate where photography is allowed.",
      },
    ],
  },
  {
    title: "Vienna's Hidden Art Scene & Street Art Tour",
    description:
      "Explore Vienna's vibrant contemporary art scene with a local artist, visiting hidden galleries, street art hotspots, and artist studios in the creative districts of Neubau and Mariahilf.",
    city: "Vienna",
    country: "Austria",
    region: "Vienna State",
    images: [
      "/images/tours/vienna/street-art.jpg",
      "/images/tours/vienna/contemporary-gallery.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Art", "Street Art", "Contemporary"],
    meetingPoint: {
      address: "MuseumsQuartier Main Entrance, Museumsplatz 1, 1070 Wien",
      coordinates: {
        latitude: 48.2037,
        longitude: 16.3586,
      },
      instructions:
        "Meet at the main entrance of MuseumsQuartier next to the giant outdoor loungers. Your guide will be wearing a bright blue jacket with paint splatters.",
      contactNumber: "+43 660 123 4567",
      contactEmail: "tours@viennacontemporary.at",
    },
    highlights: [
      "Discover Vienna's underground street art hotspots in the 6th and 7th districts",
      "Visit independent galleries representing emerging Austrian artists",
      "Meet local artists in their studios and learn about their creative process",
      "Explore converted industrial spaces now hosting vibrant artistic communities",
    ],
    inclusions: [
      "Local artist guide with deep knowledge of Vienna's art scene",
      "Entry to 3-4 galleries and art spaces",
      "Artist studio visit with demonstration",
      "Street art map of Vienna",
      "One drink at an artist-run café",
    ],
    exclusions: [
      "Public transportation tickets (if needed)",
      "Additional food and beverages",
      "Artwork purchases",
      "Gratuities",
    ],
    itinerary: [
      "2:00 PM - Meet at MuseumsQuartier main entrance",
      "2:15 PM - Introduction to Vienna's contemporary art scene",
      "2:45 PM - Visit to first independent gallery space",
      "3:15 PM - Street art walking tour through Neubau district",
      "4:00 PM - Visit to local artist's studio with demonstration",
      "4:45 PM - Explore converted factory arts complex",
      "5:15 PM - Refreshment break at artist-run café",
      "5:45 PM - Tour conclusion with recommendations for evening art events",
    ],
    cancellationPolicy:
      "Full refund if canceled 48 hours in advance. 50% refund if canceled 24-48 hours in advance. No refund for cancellations less than 24 hours before the tour.",
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    isFree: false,
    isPopular: false,
    isFamilyFriendly: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isOutdoor: true,
    isIndoor: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive street art and hands-on activities. We can also provide kid-friendly art materials for younger participants.",
      },
      {
        question: "Do we need to walk a lot during the tour?",
        answer:
          "The tour covers approximately 2 km (1.2 miles) at a leisurely pace with plenty of stops to explore artworks and galleries. Comfortable walking shoes are recommended.",
      },
      {
        question: "Will we have opportunities to purchase artwork?",
        answer:
          "Yes, most of the galleries and studios we visit offer artworks for sale at various price points, from affordable prints and small pieces to larger original works. Your guide can provide advice on shipping and customs considerations for art purchases.",
      },
    ],
  },
];

export default viennaTours;
