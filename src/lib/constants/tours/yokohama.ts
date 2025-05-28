import { Tour } from "@/lib/interfaces/services/tours";

const yokohamaTours: Tour[] = [
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
];

export default yokohamaTours;
