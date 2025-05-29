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
    tags: ["Wildlife", "Nature", "Photography"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Wang Chen",
    tourCategoryId: "wildlife",
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
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Liu Yun",
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
];

export default chengduTours;
