import { Tour } from "@/lib/interfaces/services/tours";

export const ayutthayaTours: Tour[] = [
  {
    title: "Ayutthaya Ancient Capitals Private Tour",
    description:
      "Explore Thailand's ancient capital with an archaeology expert, visiting UNESCO World Heritage temples, royal palace ruins, and hidden shrines away from the tourist crowds, with insights into Siamese history and architecture.",
    images: [
      "/images/tours/ayutthaya/wat-mahathat.jpg",
      "/images/tours/ayutthaya/buddha-head.jpg",
    ],
    duration: "Full day",
    price: "$115",
    rating: 4.9,
    tags: ["UNESCO", "Temples", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Supachai Vongspootorn",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "The tour involves moderate walking through temple grounds and archaeological sites, approximately 4-5 kilometers throughout the day on mostly flat terrain. Some temples require removing shoes and climbing stairs. The pace is leisurely with plenty of breaks, and transportation is provided between major sites that are further apart.",
      },
    ],
  },
  {
    title: "Ayutthaya by Bicycle & Longtail Boat",
    description:
      "Experience the ancient city from unique perspectives, cycling through historical parks and local neighborhoods, then cruising the rivers that encircle the old capital by traditional longtail boat to view temples from the water.",
    images: [
      "/images/tours/ayutthaya/cycling-ruins.jpg",
      "/images/tours/ayutthaya/river-view.jpg",
    ],
    duration: "8 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cycling", "Boat Tour", "Active"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Noppadol 'Sam' Sirirat",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to be an experienced cyclist?",
        answer:
          "This tour is suitable for casual cyclists with basic riding skills. We use comfortable cruiser bikes and the terrain is mostly flat. The cycling portion covers approximately 10km at a relaxed pace with frequent stops at historical sites. For those less confident on bikes, we can arrange for a tuk-tuk to follow the group, allowing you to switch to motorized transport if desired.",
      },
    ],
  },
  {
    title: "Ayutthaya Sunset Photography Tour",
    description:
      "Capture the magical light of sunset over Ayutthaya's ancient temples with guidance from a professional photographer who knows the best angles and locations for spectacular shots as the stone ruins glow in the golden hour.",
    images: [
      "/images/tours/ayutthaya/temple-sunset.jpg",
      "/images/tours/ayutthaya/golden-buddha.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Temples"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sirinya Panthong",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What is the best camera equipment to bring?",
        answer:
          "This tour is suitable for photographers of all levels. For best results, we recommend bringing a DSLR or mirrorless camera with a wide-angle lens (16-35mm or similar) and a medium zoom (24-70mm). A tripod is highly recommended for low-light sunset shots. Smartphone photographers are also welcome, and our guide can provide specific tips for getting the most from your phone camera.",
      },
    ],
  },
  {
    title: "Ayutthaya Floating Markets & Local Cuisine",
    description:
      "Discover the flavors of central Thailand with visits to authentic floating markets, tasting sessions of regional specialties, and a hands-on cooking class featuring royal Thai cuisine recipes that originated in ancient Ayutthaya.",
    images: [
      "/images/tours/ayutthaya/floating-market.jpg",
      "/images/tours/ayutthaya/thai-cooking.jpg",
    ],
    duration: "7 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Food", "Markets", "Cooking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Kanchana",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to make?",
        answer:
          "Our cooking class focuses on central Thai and royal Thai cuisine that has historical connections to Ayutthaya. You'll learn to prepare 4-5 dishes which may include Massaman curry (with historical Persian influences), Thong Yip (egg-based royal desserts), traditional boat noodles, and herb-infused grilled fish in banana leaves. All recipes and techniques are designed to be reproducible in a standard home kitchen with ingredients that can be found in international markets.",
      },
    ],
  },
  {
    title: "Elephant Sanctuary & Ayutthaya Heritage",
    description:
      "Combine cultural heritage with ethical wildlife experiences by visiting Ayutthaya's historical park and a nearby ethical elephant sanctuary where retired working elephants live in natural conditions with expert care.",
    images: [
      "/images/tours/ayutthaya/elephant-sanctuary.jpg",
      "/images/tours/ayutthaya/elephant-feeding.jpg",
    ],
    duration: "Full day",
    price: "$145",
    rating: 4.8,
    tags: ["Elephants", "Wildlife", "Conservation"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Khun Chai & Elephant Conservation Team",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Is this an ethical elephant experience?",
        answer:
          "Yes, this sanctuary strictly prohibits riding and unnatural elephant performances. The elephants here have been rescued from logging or tourism industries and now live in natural conditions where they can roam freely, form herds, and express natural behaviors. Visitors observe and interact with them from a respectful distance, helping prepare food and watching the elephants enjoy mud baths and foraging. The sanctuary follows the highest standards of ethical elephant tourism.",
      },
    ],
  },
];

export default ayutthayaTours;
