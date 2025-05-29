import { Tour } from "@/lib/interfaces/services/tours";
export const yokohamaTours: Tour[] = [
  {
    title: "Yokohama Bay Skyline Night Photography",
    description:
      "Capture stunning night shots of Japan's most beautiful harbor skyline with a professional photographer guide, using both Minato Mirai's futuristic architecture and historic Red Brick Warehouse as backdrops.",
    images: [
      "/images/tours/yokohama/night-skyline.jpg",
      "/images/tours/yokohama/minatomirai.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Photography", "Night Views", "Urban"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Yuki Tanigawa",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "A camera with manual settings is ideal (DSLR or mirrorless), and a tripod is essential for night photography. If you don't have equipment, we can provide a professional camera and tripod rental for an additional fee.",
      },
    ],
  },
  {
    title: "Chinatown Culinary Adventure",
    description:
      "Explore Japan's largest Chinatown with a local food expert, sampling authentic Chinese-Japanese fusion cuisine from hidden family-run restaurants spanning multiple generations.",
    images: [
      "/images/tours/yokohama/chinatown.jpg",
      "/images/tours/yokohama/dim-sum.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Food", "Chinatown", "Cultural Fusion"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lin Chen",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How much food is included?",
        answer:
          "The tour includes 7-8 food tastings that together constitute a full meal. Come hungry! Portions range from small bites to more substantial dishes, showcasing the diversity of Yokohama Chinatown cuisine.",
      },
    ],
  },
  {
    title: "Yokohama's Hidden Temples & Gardens",
    description:
      "Discover the serene beauty of Yokohama's lesser-known temples and traditional gardens with a local historian, exploring peaceful spots away from the crowds while learning about their history and significance.",
    images: [
      "/images/tours/yokohama/hidden-temple.jpg",
      "/images/tours/yokohama/traditional-garden.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Historical", "Nature", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Haruto Sato",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are these temples open to the public?",
        answer:
          "Yes, all sites visited are open to the public, but they are often less frequented by tourists. We focus on locations that offer a more tranquil experience compared to larger, more popular temples.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring gardens and temple grounds. Modest clothing is appreciated in temple areas, so please dress respectfully.",
      },
    ],
  },
];

export default yokohamaTours;
