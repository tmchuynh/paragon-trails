import { Tour } from "@/lib/interfaces/services/tours";

export const chengduTours: Tour[] = [
  {
    title: "Giant Panda Experience",
    description:
      "Visit the world-famous Chengdu Research Base of Giant Panda Breeding to observe these beloved creatures up close in a natural habitat.",
    images: [
      "/images/tours/chengdu/giant-pandas.jpg",
      "/images/tours/chengdu/panda-cubs.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.9,
    tags: ["Nature", "Photography"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What's the best time to visit the pandas?",
        answer:
          "Early morning (8-10am) is when pandas are most active and feeding. We schedule our tours during this optimal time.",
      },
      {
        question: "Can I hold a panda?",
        answer:
          "Due to conservation policies, direct contact with pandas is not allowed. However, you can take photos from a safe distance.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The pandas are a hit with kids!",
      },
    ],
  },
  {
    title: "Sichuan Culinary Adventure",
    description:
      "Dive into the bold flavors of authentic Sichuan cuisine with market tours, cooking demonstrations, and tastings of the region's famous spicy dishes.",
    images: [
      "/images/tours/chengdu/sichuan-cuisine.jpg",
      "/images/tours/chengdu/hotpot.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Cooking", "Spicy"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can you accommodate people who don't eat spicy food?",
        answer:
          "Absolutely! Sichuan cuisine has many non-spicy options, and our chef can adjust spice levels for sensitive palates.",
      },
      {
        question: "Do I need any cooking experience for this tour?",
        answer:
          "No prior cooking experience is necessary. Our chef will guide you through each step, making it accessible for all skill levels.",
      },
      {
        question: "What should I wear for the cooking class?",
        answer:
          "Comfortable clothing and closed-toe shoes are recommended. An apron will be provided during the cooking session.",
      },
    ],
  },
  {
    title: "Chengdu Street Art & Culture Tour",
    description:
      "Explore Chengdu's vibrant street art scene and cultural hotspots with a local guide, visiting murals, galleries, and hidden gems that showcase the city's creative spirit.",
    images: [
      "/images/tours/chengdu/street-art.jpg",
      "/images/tours/chengdu/cultural-spot.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culture",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we will be exploring various neighborhoods on foot.",
      },
      {
        question: "Can we take photos during the tour?",
        answer:
          "Absolutely! We encourage you to take photos of the street art and cultural sites we visit.",
      },
    ],
  },
  {
    title: "Leshan Giant Buddha Day Trip",
    description:
      "Take a day trip to the UNESCO World Heritage Site of Leshan to see the world's largest stone Buddha statue, carved into a cliff face overlooking the confluence of three rivers.",
    images: [
      "/images/tours/chengdu/leshan-buddha.jpg",
      "/images/tours/chengdu/leshan-view.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Historical", "Nature", "Day Trip"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How long is the hike to the Leshan Giant Buddha?",
        answer:
          "The hike to the base of the Leshan Giant Buddha takes about 30-45 minutes, depending on your pace. The path is well-maintained and suitable for most fitness levels.",
      },
      {
        question: "Is there an entrance fee for the Leshan Giant Buddha?",
        answer:
          "Yes, there is an entrance fee to visit the Leshan Giant Buddha Scenic Area. The fee is included in the tour price.",
      },
      {
        question: "What should I bring for the day trip?",
        answer:
          "We recommend bringing comfortable walking shoes, a hat, sunscreen, and a water bottle. A light jacket may be useful depending on the season.",
      },
    ],
  },
];

export default chengduTours;
