import { Tour } from "@/lib/interfaces/services/tours";

export const lakeTiticacaTours: Tour[] = [
  {
    title: "Uros Floating Islands & Taquile Cultural Experience",
    description:
      "Journey across the world's highest navigable lake to visit the unique floating reed islands of Uros and the UNESCO-recognized textile community of Taquile Island. Learn ancient techniques for reed island construction and witness master weavers creating textiles designated as Masterpieces of Intangible Cultural Heritage.",
    images: [
      "/images/tours/lake-titicaca/uros-islands.jpg",
      "/images/tours/lake-titicaca/taquile-textiles.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 4.8,
    tags: ["Cultural", "Indigenous", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Eduardo Mamani",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How do people build and maintain floating islands?",
        answer:
          "The Uros people construct their islands entirely from totora reeds that grow in the shallows of Lake Titicaca. They stack multiple layers of cut reed blocks to create a floating foundation, then add loose reeds on top to form the island surface. As the bottom layers decompose (every 3 months), new layers are continuously added on top. A typical island lasts about 30 years with proper maintenance. During your visit, community members demonstrate the reed-cutting and island-building process, and you'll learn how these ingenious floating communities have sustained their unique way of life for centuries.",
      },
    ],
  },
  {
    title: "Amantaní Island Homestay Experience",
    description:
      "Immerse yourself in traditional Andean life with an overnight stay with a local family on Amantaní Island. Participate in daily activities, learn to prepare regional dishes, and join a community celebration with music and dance while experiencing life at 12,500 feet above sea level.",
    images: [
      "/images/tours/lake-titicaca/amantani-homestay.jpg",
      "/images/tours/lake-titicaca/pachamama-ceremony.jpg",
    ],
    duration: "2 days",
    price: "$125",
    rating: 4.9,
    tags: ["Homestay", "Cultural Immersion", "Island"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Rosa Calsina",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "What are the accommodations like?",
        answer:
          "Accommodations are simple but comfortable in family homes. You'll have a private room with basic amenities including thick blankets for the cold Andean nights. Homes use solar power for limited electricity and have traditional outhouses rather than flush toilets. Hot water is not available. While accommodations are rustic, the cultural experience and warmth of the host families create unforgettable memories. The income from homestays is shared throughout the community on a rotation basis to ensure tourism benefits are distributed equally.",
      },
    ],
  },
  {
    title: "Sacred Temples of the Sun & Moon",
    description:
      "Explore the ancient pre-Inca ceremonial sites on the Islands of the Sun and Moon, birthplace of Andean civilization according to mythology. Visit the Pilkokaina Temple, Sacred Rock, and Iñak Uyu temple with an expert in Andean spirituality and archaeology.",
    images: [
      "/images/tours/lake-titicaca/isla-del-sol.jpg",
      "/images/tours/lake-titicaca/inca-stairs.jpg",
    ],
    duration: "Full day",
    price: "$110",
    rating: 4.7,
    tags: ["Archaeological", "Spiritual", "Hiking"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Carlos Mamani",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How physically demanding is this tour?",
        answer:
          "This tour involves moderate hiking at high altitude (12,500+ feet), including ancient Inca stone stairs and uneven terrain. The main hike on Isla del Sol takes approximately 3-4 hours and includes significant elevation gain. Visitors should be in reasonably good physical condition and take time to acclimatize to the altitude before the tour. The spectacular views and archaeological significance make the effort worthwhile, and we maintain a comfortable pace with plenty of breaks.",
      },
    ],
  },
  {
    title: "Lake Titicaca Luxury Catamaran Cruise",
    description:
      "Cruise the sapphire waters of Lake Titicaca aboard a luxury catamaran with gourmet dining and premium service. Visit the major islands with private guides while enjoying the comfort of a high-end vessel equipped with panoramic viewing decks.",
    images: [
      "/images/tours/lake-titicaca/luxury-catamaran.jpg",
      "/images/tours/lake-titicaca/gourmet-dining.jpg",
    ],
    duration: "Full day",
    price: "$275",
    rating: 4.9,
    tags: ["Luxury", "Cruise", "Islands"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Luxury Catamaran Staff & Local Guides",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What amenities are available on the catamaran?",
        answer:
          "Our luxury catamaran features indoor and outdoor viewing areas, climate-controlled cabins, gourmet dining facilities, comfortable seating, premium bathrooms, and a fully-stocked bar. The vessel is equipped with state-of-the-art navigation and safety equipment. A four-course lunch featuring high-altitude Andean cuisine with international influences is served onboard, accompanied by fine South American wines and altitude-friendly cocktails. The catamaran provides a smooth, stable cruising experience even on windy days when traditional boats might experience rough conditions.",
      },
    ],
  },
  {
    title: "Totora Reed Boat Building Workshop",
    description:
      "Learn the ancient art of reed boat construction from master Uros craftsmen. Participate in harvesting, drying, and bundling totora reeds, then help construct a traditional vessel following techniques unchanged for thousands of years.",
    images: [
      "/images/tours/lake-titicaca/reed-boat-building.jpg",
      "/images/tours/lake-titicaca/reed-boat-sailing.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Crafts", "Cultural", "Hands-on"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Manuel Coila, Master Reed Craftsman",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we get to sail in the boat we help build?",
        answer:
          "Yes! The workshop culminates with launching and sailing in a traditional reed boat. While the full construction process typically takes weeks, you'll participate in key stages of construction of a small boat, and then complete your experience by sailing in a finished vessel. You'll also receive a miniature reed boat crafted by the Uros artisans as a memento of your experience. The workshop directly supports the preservation of this ancient craft, which is increasingly being lost as younger generations leave the islands.",
      },
    ],
  },
  {
    title: "Lake Titicaca Sunrise Photography Expedition",
    description:
      "Capture the magical light of sunrise over Lake Titicaca and the distant Bolivian Andes with guidance from a professional photographer. Visit prime locations for shooting the islands, traditional boats, and lake activities in optimal morning conditions.",
    images: [
      "/images/tours/lake-titicaca/sunrise-photography.jpg",
      "/images/tours/lake-titicaca/golden-hour-islands.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Photography", "Sunrise", "Landscapes"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Arturo Sanchez, Landscape Photographer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For best results, we recommend bringing a DSLR or mirrorless camera with wide-angle lens (16-35mm or similar) for landscapes and a medium zoom (24-70mm) for details and portraits. A tripod is essential for low-light sunrise shots. Filters (polarizing and graduated ND) are useful but not required. That said, photographers of all levels are welcome, including smartphone photographers—our guide provides tips specific to your equipment. The dramatic light and reflections of Lake Titicaca create spectacular photo opportunities regardless of your gear.",
      },
    ],
  },
];

export default lakeTiticacaTours;
