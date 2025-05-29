import { Tour } from "@/lib/interfaces/services/tours";
export const glasgowTours: Tour[] = [
  {
    title: "Glasgow Music Heritage & Secret Venues",
    description:
      "Explore Glasgow's legendary music scene with a local musician, visiting iconic venues, hidden underground clubs, and famous recording studios that shaped genres from post-punk to contemporary indie.",
    images: [
      "/images/tours/glasgow/barrowland.jpg",
      "/images/tours/glasgow/king-tuts.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Music", "Nightlife", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Callum MacGregor",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we hear live music during the tour?",
        answer:
          "The daytime tour includes brief acoustic performances by your guide at select locations. Evening tours typically include a stop at a venue with live music, though specific performances vary by date.",
      },
      {
        question: "Are there age restrictions for this tour?",
        answer:
          "This tour is designed for adults and older teens. Some venues may have age restrictions, so please check with us if you plan to bring younger guests.",
      },
    ],
  },
  {
    title: "Charles Rennie Mackintosh Architectural Trail",
    description:
      "Discover the revolutionary designs of Glasgow's most celebrated architect with exclusive access to Mackintosh buildings, including private areas of the Glasgow School of Art and House for an Art Lover.",
    images: [
      "/images/tours/glasgow/mackintosh-school.jpg",
      "/images/tours/glasgow/house-for-art-lover.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Design", "Art Nouveau"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Fiona Campbell",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes Mackintosh's work so significant?",
        answer:
          "Charles Rennie Mackintosh was a pioneering designer whose work bridged Art Nouveau and Modernism. His distinctive style combining elegant simplicity with complex detail influenced architecture and design worldwide. Glasgow contains his most complete and best-preserved works.",
      },
      {
        question: "Can we take photos inside the buildings?",
        answer:
          "Photography is allowed in most areas, but some locations may have restrictions to protect artworks or privacy. Your guide will inform you of any limitations during the tour.",
      },
    ],
  },
  {
    title: "Glasgow Street Art & Urban Culture",
    description:
      "Explore Glasgow's vibrant street art scene with a local artist, visiting murals, graffiti hotspots, and community projects that reflect the city's creative spirit and social issues.",
    images: [
      "/images/tours/glasgow/street-art.jpg",
      "/images/tours/glasgow/mural-trail.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Art", "Culture", "Urban"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lorna McLeod",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage all ages with interactive storytelling about the artists and their work.",
      },
      {
        question: "Can we participate in any street art activities?",
        answer:
          "While this tour focuses on observation and appreciation, we can arrange workshops for groups interested in learning street art techniques. Please inquire when booking.",
      },
    ],
  },
  {
    title: "Glasgow Food & Drink Experience",
    description:
      "Savor Glasgow's culinary delights with a guided food tour through local markets, traditional pubs, and contemporary eateries, sampling everything from haggis to craft beers.",
    images: [
      "/images/tours/glasgow/food-market.jpg",
      "/images/tours/glasgow/craft-beer.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Food", "Culinary", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Jamie Sinclair",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are vegetarian or vegan options available?",
        answer:
          "Yes, we can accommodate dietary restrictions including vegetarian and vegan preferences. Please inform us at the time of booking so we can tailor the food stops accordingly.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 48 hours in advance to ensure availability and allow us to customize your experience based on dietary needs.",
      },
    ],
  },
];

export default glasgowTours;
