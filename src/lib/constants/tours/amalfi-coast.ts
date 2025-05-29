import { Tour } from "@/lib/interfaces/services/tours";

export const amalfiCoastTours: Tour[] = [
  {
    title: "Positano & Path of the Gods Hike",
    description:
      "Experience the breathtaking beauty of the Amalfi Coast with a guided hike along the famous 'Path of the Gods' trail, offering spectacular panoramic views of the Mediterranean, followed by exploration of the picturesque cliffside village of Positano.",
    images: [
      "/images/tours/amalfi-coast/path-of-gods.jpg",
      "/images/tours/amalfi-coast/positano-view.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Hiking", "Scenery", "Village"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marco Esposito",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hiking trail?",
        answer:
          "The Path of the Gods is a moderate hike of about 7km with some elevation changes. While not technically difficult, it requires reasonable fitness and comfortable walking shoes. The path includes some steep sections and uneven terrain, but the spectacular views make every step worthwhile. We maintain a comfortable pace with plenty of stops for photos and rest.",
      },
    ],
  },
  {
    title: "Limoncello & Culinary Traditions",
    description:
      "Discover the secrets of Amalfi Coast cuisine with visits to family-run lemon groves, a hands-on cooking class featuring local specialties, and a limoncello making demonstration at a historic distillery in Ravello.",
    images: [
      "/images/tours/amalfi-coast/lemon-grove.jpg",
      "/images/tours/amalfi-coast/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 5.0,
    tags: ["Food", "Cooking", "Limoncello"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Russo",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What will we cook during the class?",
        answer:
          "The menu changes seasonally but typically includes traditional Amalfi Coast specialties such as scialatielli pasta with seafood, lemon-infused dishes, and local desserts like delizia al limone. Our chef adapts the class to accommodate dietary restrictions and preferences when notified in advance.",
      },
    ],
  },
  {
    title: "Private Amalfi Coast Yacht Experience",
    description:
      "Sail the stunning Amalfi coastline aboard a private luxury yacht, stopping to swim in hidden coves, visit sea caves including the famous Emerald Grotto, and enjoy a gourmet seafood lunch with local wine while anchored off a secluded beach.",
    images: [
      "/images/tours/amalfi-coast/yacht-cruise.jpg",
      "/images/tours/amalfi-coast/emerald-grotto.jpg",
    ],
    duration: "8 hours",
    price: "$795",
    rating: 4.9,
    tags: ["Yacht", "Swimming", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Alessandro",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How many people can join the yacht experience?",
        answer:
          "Our luxury yacht accommodates up to 8 guests comfortably, making it perfect for families or small groups. The experience is fully private, so you won't be sharing the vessel with other travelers. For larger groups, we can arrange for a bigger boat at an additional cost.",
      },
    ],
  },
  {
    title: "Ravello's Historic Villas & Gardens",
    description:
      "Explore the elegant hill town of Ravello with exclusive access to its historic villas, magnificent gardens, and hidden corners that inspired composers and writers throughout history, accompanied by classical music performances in breathtaking settings.",
    images: [
      "/images/tours/amalfi-coast/villa-rufolo.jpg",
      "/images/tours/amalfi-coast/ravello-gardens.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Villas", "Gardens", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Ferrante",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes Ravello's villas so special?",
        answer:
          "Ravello's villas represent the pinnacle of medieval Italian architecture blended with Moorish influences. Villa Rufolo (1270 AD) and Villa Cimbrone offer some of the Mediterranean's most spectacular panoramic views and gardens. These villas have inspired countless artists, including composer Richard Wagner, whose visit to Villa Rufolo inspired the setting for his opera Parsifal. Our tour provides historical context and special access to areas not always open to the general public.",
      },
    ],
  },
  {
    title: "Amalfi Paper Making & Historic Center",
    description:
      "Discover the ancient art of paper making in Amalfi, once a major medieval maritime power, with a visit to a 13th-century paper mill still producing handcrafted paper, followed by exploration of the town's impressive Duomo and historic center.",
    images: [
      "/images/tours/amalfi-coast/paper-making.jpg",
      "/images/tours/amalfi-coast/amalfi-duomo.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Crafts", "History", "Local Traditions"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Antonio Coppola",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we make our own paper?",
        answer:
          "Yes! This interactive experience includes a hands-on workshop where you'll create your own sheet of paper using traditional methods. You'll learn the entire process from pulp preparation to pressing and drying. Your handmade paper creation makes a unique souvenir, and you can have it custom-stamped with the historic mark of Amalfi.",
      },
    ],
  },
  {
    title: "Hidden Villages & Local Life",
    description:
      "Venture beyond the tourist trail to the Amalfi Coast's hidden villages perched high in the mountains, meeting local families, visiting small-scale producers of cheese and wine, and experiencing authentic Italian daily life away from the crowds.",
    images: [
      "/images/tours/amalfi-coast/hidden-village.jpg",
      "/images/tours/amalfi-coast/local-producer.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Off the Beaten Path", "Local Culture", "Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lucia Romano",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Which villages do we visit?",
        answer:
          "We typically visit combinations of Scala, Tramonti, and Furore - authentic mountain communities where tourism is minimal and traditions remain strong. Our exact route sometimes changes based on seasonal activities or local festivals that might be happening. These villages offer spectacular views of the coast from a completely different perspective than the typical tourist spots.",
      },
    ],
  },
  {
    title: "Sunset Photography Cruise",
    description:
      "Capture the magical light of the Amalfi Coast during the golden hour with a photography-focused sunset cruise, guided by a professional photographer who will help you master techniques for shooting coastal landscapes, architecture, and the famous Mediterranean light.",
    images: [
      "/images/tours/amalfi-coast/sunset-photography.jpg",
      "/images/tours/amalfi-coast/coast-golden-hour.jpg",
    ],
    duration: "3 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Photography", "Sunset", "Boat Tour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Matteo Sorrento",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "Is specialized camera equipment needed?",
        answer:
          "This workshop accommodates photographers of all levels using any type of camera, from smartphones to professional DSLRs. Our instructor provides tips specific to your equipment. For DSLR users, we recommend bringing a versatile zoom lens and a tripod if possible, though we do have a limited number of tripods available to borrow during the cruise.",
      },
    ],
  },
];

export default amalfiCoastTours;
