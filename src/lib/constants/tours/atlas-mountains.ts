import { Tour } from "@/lib/interfaces/services/tours";

export const atlasMountainsTours: Tour[] = [
  {
    title: "Berber Villages & High Atlas Trek",
    description:
      "Embark on an authentic trek through Morocco's High Atlas Mountains, staying in traditional Berber villages, sharing meals with local families, and exploring remote valleys and ancient paths known only to local guides.",
    images: [
      "/images/tours/atlas-mountains/berber-village.jpg",
      "/images/tours/atlas-mountains/mountain-trek.jpg",
    ],
    duration: "3 days",
    price: "$295",
    rating: 4.9,
    tags: ["Trekking", "Cultural", "Villages"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ibrahim Ouazzani",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How physically demanding is the trek?",
        answer:
          "This trek is moderately challenging, involving 4-6 hours of walking daily on mountain trails with some steep ascents and descents. Participants should have good overall fitness and some hiking experience. The maximum altitude reached is approximately 2,500 meters (8,200 feet), which is not high enough to cause altitude sickness for most people.",
      },
    ],
  },
  {
    title: "Mount Toubkal Summit Expedition",
    description:
      "Challenge yourself to summit North Africa's highest peak guided by experienced mountain guides. This adventure includes professional equipment, high mountain refuges, and breathtaking panoramic views across Morocco and the Sahara.",
    images: [
      "/images/tours/atlas-mountains/toubkal-summit.jpg",
      "/images/tours/atlas-mountains/high-atlas-view.jpg",
    ],
    duration: "2 days",
    price: "$225",
    rating: 4.8,
    tags: ["Mountaineering", "Summit", "Challenge"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Hassan Ait Brahim, Certified Mountain Guide",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What equipment do I need to bring?",
        answer:
          "We provide technical mountain equipment including crampons and ice axes when needed in winter. You should bring sturdy hiking boots, layered clothing, hat, gloves, sunglasses, sunscreen, headlamp, and a 30-40L backpack. A detailed packing list will be sent upon booking. Sleeping bags can be rented locally if you don't want to travel with one.",
      },
    ],
  },
  {
    title: "Atlas Mountains Photography Workshop",
    description:
      "Capture the dramatic landscapes, unique light, and authentic culture of the Atlas Mountains under the guidance of a National Geographic photographer. Visit photogenic locations at optimal times and learn advanced techniques.",
    images: [
      "/images/tours/atlas-mountains/photography-workshop.jpg",
      "/images/tours/atlas-mountains/mountain-light.jpg",
    ],
    duration: "4 days",
    price: "$895",
    rating: 4.9,
    tags: ["Photography", "Landscapes", "Workshop"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jean-Michel Laurent",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "This workshop is suitable for DSLR and mirrorless camera users. We recommend bringing your camera body, a variety of lenses (wide-angle, standard zoom, and telephoto if possible), tripod, filters (ND and polarizing), extra batteries, and memory cards. A laptop with editing software is useful for our evening review and editing sessions. Rental equipment can be arranged with advance notice.",
      },
    ],
  },
  {
    title: "Atlas Mountains Luxury Kasbahs & Spas",
    description:
      "Indulge in Morocco's finest mountain retreats with stays at luxurious kasbahs and resorts featuring infinity pools overlooking dramatic valleys, hammam spa treatments, and gourmet Moroccan cuisine with French influences.",
    images: [
      "/images/tours/atlas-mountains/luxury-kasbah.jpg",
      "/images/tours/atlas-mountains/mountain-spa.jpg",
    ],
    duration: "5 days",
    price: "$1,495",
    rating: 5.0,
    tags: ["Luxury", "Relaxation", "Gourmet"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sofia Belkacem",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What makes this experience luxurious?",
        answer:
          "This tour features accommodations in Morocco's most exclusive mountain properties, some formerly royal residences converted to luxury hotels. You'll enjoy private terraces with mountain views, heated pools, personalized spa treatments using local argan oil and rose products, and dining experiences created by internationally trained chefs using local ingredients. Private transfers are in luxury 4x4 vehicles, and each property offers unique cultural activities exclusively for guests.",
      },
    ],
  },
  {
    title: "Atlas Mountains Cooking & Culinary Herbs",
    description:
      "Discover the unique flavors of Berber cuisine through hands-on cooking classes, visits to mountain herb gardens, and traditional bread baking in village clay ovens, all while learning about the medicinal properties of local ingredients.",
    images: [
      "/images/tours/atlas-mountains/cooking-class.jpg",
      "/images/tours/atlas-mountains/herb-garden.jpg",
    ],
    duration: "2 days",
    price: "$195",
    rating: 4.7,
    tags: ["Cooking", "Herbs", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Fatima Ourika",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll learn to prepare traditional Berber mountain cuisine including tagines with preserved lemons and olives, couscous prepared the authentic way by hand, mountain herb tea blends, flatbreads baked in clay ovens, and preserves made from local fruits. All recipes use locally sourced, seasonal ingredients, and you'll receive recipe cards to recreate these dishes at home.",
      },
    ],
  },
];

export default atlasMountainsTours;
