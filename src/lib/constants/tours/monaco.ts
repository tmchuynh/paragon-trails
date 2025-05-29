import { Tour } from "@/lib/interfaces/services/tours";

export const monacoTours: Tour[] = [
  {
    title: "Monaco Grand Prix VIP Experience",
    description:
      "Experience the legendary Monaco Grand Prix from exclusive VIP terraces overlooking the circuit's most exciting corners. Enjoy champagne reception, gourmet catering, and meet-and-greets with Formula 1 personalities while witnessing motorsport's most prestigious race.",
    images: [
      "/images/tours/monaco/grand-prix-vip.jpg",
      "/images/tours/monaco/f1-terrace-view.jpg",
    ],
    duration: "8 hours",
    price: "$3,995",
    rating: 5.0,
    tags: ["Formula 1", "VIP", "Exclusive"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Jean-Pierre Leclerc, Former F1 Team Manager",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What's included in the VIP package?",
        answer:
          "This premium experience includes exclusive access to a private terrace with prime views of the circuit, gourmet catering throughout the day, open bar with champagne and premium spirits, official race program, commemorative gift, noise-canceling radio headsets with expert commentary, and opportunities to meet racing personalities (varies by race weekend). Private helicopter transfers between Nice and Monaco can be arranged for an additional fee.",
      },
    ],
  },
  {
    title: "Monaco Royal Palace & Old Town Private Tour",
    description:
      "Explore the fascinating history of Europe's oldest monarchy with private access to areas of the Prince's Palace normally closed to the public, followed by a guided walk through Monaco-Ville's medieval lanes and exclusive lunch at a palace-view restaurant.",
    images: [
      "/images/tours/monaco/royal-palace.jpg",
      "/images/tours/monaco/monaco-ville.jpg",
    ],
    duration: "4 hours",
    price: "$275",
    rating: 4.9,
    tags: ["Royal History", "Palace", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Sophie Deveraux",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Do we get to see the inside of the Prince's Palace?",
        answer:
          "Yes, this special tour includes interior access to the State Apartments including the Throne Room, Blue Room, and Mazarin Room with their collections of Renaissance frescoes and royal portraits. During summer months (April-October), we also view the private royal collection of antique cars, and depending on the royal family's schedule, occasionally gain access to gardens not on the regular public tour route.",
      },
    ],
  },
  {
    title: "Monaco Yacht Charter & Coastal Elegance",
    description:
      "Cruise the French Riviera aboard a private luxury yacht with champagne and gourmet canapés. Explore hidden coves, enjoy swimming in crystal waters, and experience Monaco's coastline as the privileged do - from the stunning vantage point of the sea.",
    images: [
      "/images/tours/monaco/luxury-yacht.jpg",
      "/images/tours/monaco/coast-cruise.jpg",
    ],
    duration: "6 hours",
    price: "$3,500",
    rating: 5.0,
    tags: ["Yacht", "Luxury", "Coastal"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Alexandre",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How many guests can the yacht accommodate?",
        answer:
          "Our standard package includes a 24-meter (78-foot) luxury motor yacht that comfortably accommodates up to 8 guests with 3 crew members. Larger vessels accommodating up to 12 guests are available for an additional fee. Each yacht features spacious sundecks, interior lounges, multiple water toys (paddleboards, snorkeling gear, sea scooters), and premium sound systems for your enjoyment.",
      },
    ],
  },
  {
    title: "Monte Carlo Casino & Belle Époque Heritage Tour",
    description:
      "Step into the glamorous world of Monte Carlo's legendary casino with a behind-the-scenes tour of its opulent Belle Époque architecture, famous gaming rooms, and rich history. Learn about famous gamblers, royal patrons, and the casino's role in Monaco's prosperity.",
    images: [
      "/images/tours/monaco/monte-carlo-casino.jpg",
      "/images/tours/monaco/belle-epoque-architecture.jpg",
    ],
    duration: "3 hours",
    price: "$195",
    rating: 4.7,
    tags: ["Casino", "Architecture", "History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Madame Colette Beaumont",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is there a dress code for the casino tour?",
        answer:
          "Yes, even for morning tours, the Casino maintains a smart-casual dress code. Gentlemen are required to wear a jacket (we can provide one if needed), closed shoes, and collared shirts. No shorts, sports shoes, or flip-flops are permitted. Ladies should dress elegantly (no beachwear). For evening tours, more formal attire is expected. This tradition maintains the casino's historic sophistication and exclusivity.",
      },
    ],
  },
  {
    title: "Monaco Gastronomic Journey & Wine Tasting",
    description:
      "Indulge in Monaco's exceptional culinary scene with a progressive dining experience through Michelin-starred restaurants and private wine cellars, guided by a gourmet expert who shares insights into Mediterranean haute cuisine.",
    images: [
      "/images/tours/monaco/michelin-cuisine.jpg",
      "/images/tours/monaco/wine-cellar.jpg",
    ],
    duration: "5 hours",
    price: "$495",
    rating: 4.9,
    tags: ["Gourmet", "Wine", "Fine Dining"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Chef Laurent Mercier",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with sufficient advance notice (ideally 3+ days), we can accommodate most dietary preferences and restrictions including vegetarian, vegan, gluten-free, kosher, and food allergies. The Michelin-starred chefs pride themselves on creating customized tasting experiences that maintain the same level of excellence regardless of dietary limitations. Please specify all requirements when booking so each venue can prepare accordingly.",
      },
    ],
  },
  {
    title: "Monaco by Night: Glamour & Entertainment",
    description:
      "Experience Monaco's legendary nightlife with VIP access to exclusive clubs, lounges, and casino private rooms. Enjoy priority entry, premium services, and the vibrant atmosphere that attracts celebrities and jet-setters from around the world.",
    images: [
      "/images/tours/monaco/nightclub-vip.jpg",
      "/images/tours/monaco/casino-night.jpg",
    ],
    duration: "6 hours",
    price: "$375",
    rating: 4.8,
    tags: ["Nightlife", "VIP", "Entertainment"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maxime Durand, Nightlife Concierge",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is there a dress code for the nightlife tour?",
        answer:
          "Absolutely. Monaco's premier venues maintain strict dress codes. For gentlemen: collared shirts, dress shoes, and often jackets are required (no sneakers, jeans, or casual attire). For ladies: elegant evening wear is expected. Our detailed pre-tour information includes specific requirements for each venue on your itinerary. We can arrange emergency shopping assistance or clothing rental if needed upon arrival in Monaco.",
      },
    ],
  },
  {
    title: "Monaco Ocean Conservation & Oceanographic Museum",
    description:
      "Discover Prince Albert's environmental initiatives with a marine biologist guide at the historic Oceanographic Museum. Participate in a private marine conservation workshop and enjoy an exclusive behind-the-scenes tour of research facilities normally closed to visitors.",
    images: [
      "/images/tours/monaco/oceanographic-museum.jpg",
      "/images/tours/monaco/marine-conservation.jpg",
    ],
    duration: "4 hours",
    price: "$125",
    rating: 4.6,
    tags: ["Marine Science", "Conservation", "Educational"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dr. Marine Lambert",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, we welcome children and customize the experience based on age groups. For younger children (5-10), we focus on interactive marine life exhibits and touch pools. For older children and teens, we include more in-depth scientific concepts and conservation challenges. The museum's dramatic cliff-top location, aquariums, and marine skeletons captivate visitors of all ages, while our guides are skilled at making complex scientific concepts accessible and engaging.",
      },
    ],
  },
];

export default monacoTours;
