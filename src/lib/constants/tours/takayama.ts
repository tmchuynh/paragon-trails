import { Tour } from "@/lib/interfaces/services/tours";
export const takayamaTours: Tour[] = [
  {
    title: "Traditional Carpentry & Old Town Heritage",
    description:
      "Explore Takayama's perfectly preserved Edo-period streets with a local historian, visiting master carpenter workshops that built Japan's most important temples, followed by exclusive access to historic merchants' homes not open to the public.",
    images: [
      "/images/tours/takayama/old-town.jpg",
      "/images/tours/takayama/carpenter-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Historical", "Architecture", "Crafts"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Tanaka Hiroshi",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Why is Takayama known for its carpentry?",
        answer:
          "Takayama's carpenters (called 'Hida no takumi') were so skilled that they were summoned by Imperial command to build temples and shrines in Kyoto and Nara, including many national treasures that still stand today. The region's high-quality timber and isolated mountain location helped preserve traditional techniques that have been passed down through generations for over 1,000 years.",
      },
    ],
  },
  {
    title: "Sake Brewery Tour & Tasting Experience",
    description:
      "Discover the art of premium sake production with exclusive access to centuries-old breweries, guided tastings of rare varieties not available elsewhere, and traditional izakaya dinner featuring Hida beef prepared in multiple ways.",
    images: [
      "/images/tours/takayama/sake-brewery.jpg",
      "/images/tours/takayama/sake-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Sake", "Brewery", "Culinary"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Yamamoto Kenji",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Takayama's sake special?",
        answer:
          "Takayama's sake is renowned for its exceptional quality due to three key factors: the pure mountain water filtered through the Japanese Alps, the high-quality local rice varieties, and the cold winter climate that creates ideal brewing conditions. Many of the breweries have been operated by the same families for over 15 generations, with techniques refined over centuries.",
      },
    ],
  },
  {
    title: "Hida Folk Village & Traditional Crafts",
    description:
      "Experience rural Japan at the Hida Folk Village, an open-air museum showcasing traditional thatched-roof farmhouses, followed by hands-on workshops in pottery and indigo dyeing with local artisans.",
    images: [
      "/images/tours/takayama/hida-folk-village.jpg",
      "/images/tours/takayama/indigo-dyeing.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Cultural", "Crafts", "Nature"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Sato Akiko",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of crafts will we learn?",
        answer:
          "Participants can choose between pottery making using traditional Hida clay or indigo dyeing techniques passed down through generations. Both workshops are designed for beginners and include all materials needed to create your own unique piece to take home.",
      },
    ],
  },
];

export default takayamaTours;
