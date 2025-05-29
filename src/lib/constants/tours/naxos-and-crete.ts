import { Tour } from "@/lib/interfaces/services/tours";

export const naxosAndCreteTours: Tour[] = [
  {
    title: "Island Hopping Adventure: Naxos to Crete",
    description:
      "Experience the best of the Greek islands with a multi-day journey from the marble splendors of Naxos to the ancient Minoan wonders of Crete, with guided exploration of hidden beaches, traditional villages, and archaeological treasures.",
    images: [
      "/images/tours/naxos-and-crete/island-hopping.jpg",
      "/images/tours/naxos-and-crete/secluded-beach.jpg",
    ],
    duration: "7 days",
    price: "$1,750",
    rating: 4.9,
    tags: ["Island Hopping", "Multi-Island", "Comprehensive"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Stavros Papadopoulos",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How do we travel between islands?",
        answer:
          "We travel between Naxos and Crete via high-speed ferry (approximately 3 hours), offering spectacular views of the Aegean Sea and neighboring islands. Your luggage is handled for you throughout the journey. For transportation within each island, we use a comfortable private minivan with an experienced local driver. The tour is designed to minimize transit time and maximize exploration time on each island.",
      },
    ],
  },
  {
    title: "Ancient Knossos & Minoan Civilization",
    description:
      "Explore Europe's oldest civilization with an archaeologist guide at the palace of Knossos, legendary home of the Minotaur labyrinth, followed by the Heraklion Archaeological Museum housing the world's finest collection of Minoan artifacts.",
    images: [
      "/images/tours/naxos-and-crete/knossos-palace.jpg",
      "/images/tours/naxos-and-crete/minoan-artifacts.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Archaeology", "Minoan", "Museum"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Maria Economou",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, our guides are skilled at making archaeology engaging for all ages. For children, we focus on the mythological aspects like the Minotaur legend and use visual aids to bring the ancient civilization to life. The palace complex has many colorful frescoes and interesting structures that naturally capture children's imagination. For teenagers and adults, we delve deeper into the historical and archaeological significance of this 4,000-year-old civilization.",
      },
    ],
  },
  {
    title: "Naxos Marble Villages & Artisan Traditions",
    description:
      "Journey into the mountainous interior of Naxos to discover villages built from the island's famed marble, meet traditional craftspeople in their workshops, and participate in hands-on demonstrations of ancient techniques still practiced today.",
    images: [
      "/images/tours/naxos-and-crete/marble-village.jpg",
      "/images/tours/naxos-and-crete/artisan-workshop.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cultural", "Artisans", "Villages"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Yiannis Koutelieris",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What artisan crafts will we see?",
        answer:
          "Naxos has a rich tradition of craftsmanship we'll explore, including marble sculpting (the island's marble has been prized since ancient times), traditional weaving using looms and techniques unchanged for centuries, pottery making using local clays, and the production of local spirits and cheeses. You'll have opportunities to try your hand at some of these crafts and purchase authentic artisan products directly from the creators.",
      },
    ],
  },
  {
    title: "Cretan Culinary Journey & Cooking Workshop",
    description:
      "Discover why Cretan cuisine is considered the healthiest in the Mediterranean with visits to olive groves, cheese makers, and organic farms, culminating in a hands-on cooking class where you'll prepare traditional dishes using farm-fresh ingredients.",
    images: [
      "/images/tours/naxos-and-crete/cretan-cuisine.jpg",
      "/images/tours/naxos-and-crete/cooking-class.jpg",
    ],
    duration: "8 hours",
    price: "$130",
    rating: 4.9,
    tags: ["Cooking", "Food", "Agriculture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Katerina Papadakis",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "You'll learn to prepare 5-6 authentic Cretan dishes, typically including dakos (traditional barley rusk topped with tomato and cheese), dolmades (stuffed vine leaves), Greek salad with locally produced olive oil, kalitsounia (cheese or herb pastries), and either moussaka or pastitsio depending on seasonal ingredients. The class concludes with a traditional dessert such as loukoumades (honey puffs) or yogurt with thyme honey. All recipes use organic ingredients, many harvested that morning from our partner farm.",
      },
    ],
  },
  {
    title: "Samaria Gorge Hiking Adventure",
    description:
      "Traverse Europe's longest gorge on this spectacular guided hike through Samaria National Park, experiencing dramatic landscapes, ancient forests, and rare wildlife before emerging at a pristine beach accessible only by foot or boat.",
    images: [
      "/images/tours/naxos-and-crete/samaria-gorge.jpg",
      "/images/tours/naxos-and-crete/gorge-hiking.jpg",
    ],
    duration: "12 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Hiking", "Nature", "Adventure"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Michalis Venianakis",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How challenging is this hike?",
        answer:
          "This is a moderately challenging 16km (10-mile) hike with a 1,250m descent through varied terrain including rocky paths, forest trails, and stream crossings. Good physical condition and proper hiking footwear are required. The average completion time is 5-7 hours. While not technically difficult, the length and continuous descent make it unsuitable for those with knee problems or limited hiking experience. Children under 12 are not recommended for this tour.",
      },
    ],
  },
  {
    title: "Naxos Sailing & Hidden Beaches",
    description:
      "Sail the crystal-clear waters surrounding Naxos aboard a traditional wooden caique boat to discover secluded beaches, pristine swimming coves, and spectacular coastal formations inaccessible by land.",
    images: [
      "/images/tours/naxos-and-crete/sailing-tour.jpg",
      "/images/tours/naxos-and-crete/hidden-cove.jpg",
    ],
    duration: "7 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Sailing", "Beaches", "Swimming"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Dimitris",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "While swimming is a highlight of the tour, it's not mandatory. We provide high-quality life vests for all passengers, and you can enjoy the stunning scenery, sunbathing, and fresh seafood lunch aboard the boat if you prefer not to swim. The crystal-clear waters, sometimes with visibility up to 30 meters, can be appreciated from the boat as well as in the water.",
      },
    ],
  },
  {
    title: "Zeus Cave & Lassithi Plateau 4x4 Expedition",
    description:
      "Journey into Crete's mythical mountains by 4x4 vehicle to explore the legendary birthplace of Zeus, traditional plateau villages frozen in time, and panoramic vistas across the island's spectacular interior landscape.",
    images: [
      "/images/tours/naxos-and-crete/zeus-cave.jpg",
      "/images/tours/naxos-and-crete/lassithi-plateau.jpg",
    ],
    duration: "9 hours",
    price: "$140",
    rating: 4.7,
    tags: ["4x4", "Mountain", "Mythology"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Giorgos Papadakis",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is the cave exploration difficult?",
        answer:
          "The main chamber of Diktaion Andron (Zeus Cave) is accessible via a well-maintained path and staircase with handrails, suitable for most visitors with basic mobility. The cave interior is illuminated and has designated walking paths. For those interested in more adventurous cave exploration, we can arrange specialized spelunking tours of the deeper, undeveloped cave systems in the region with proper equipment and expert guides.",
      },
    ],
  },
  {
    title: "Portara Sunset Photography Workshop",
    description:
      "Capture the perfect sunset image of Naxos's iconic Portara (Temple of Apollo) during golden hour and blue hour, with expert guidance from a professional landscape photographer who knows the optimal angles, camera settings, and timing.",
    images: [
      "/images/tours/naxos-and-crete/portara-sunset.jpg",
      "/images/tours/naxos-and-crete/photography-workshop.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Photography", "Sunset", "Ancient Temple"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Elena Koutsomitis",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is required?",
        answer:
          "This workshop accommodates all skill levels from smartphone photographers to advanced DSLR users. Our guide provides personalized instruction based on your equipment and experience. Beginners will learn basic composition and the best viewpoints, while advanced photographers can explore specialized techniques like long exposures, filter use, and HDR photography. A tripod is recommended but not required (we have a limited number available to borrow).",
      },
    ],
  },
];

export default naxosAndCreteTours;
