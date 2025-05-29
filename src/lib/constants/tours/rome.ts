import { Tour } from "@/lib/interfaces/services/tours";

export const romeTours: Tour[] = [
  {
    title: "VIP Colosseum Underground & Roman Forum",
    description:
      "Gain special access to the Colosseum's underground chambers and arena floor, then explore the heart of ancient Rome with an expert archaeologist.",
    images: [
      "/images/tours/rome/colosseum-underground.jpg",
      "/images/tours/rome/roman-forum.jpg",
    ],
    duration: "4 hours",
    price: "$109",
    rating: 4.9,
    tags: ["VIP Access", "Ancient", "Historical"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marco Rossi",
    tourCategoryId: "archaeology-expert",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 2-3 kilometers of walking on uneven surfaces. Comfortable shoes are strongly recommended.",
      },
    ],
  },
  {
    title: "Vatican Museums & Sistine Chapel: Early Access",
    description:
      "Enter the Vatican Museums before the general public for a peaceful experience of Michelangelo's masterpiece and the incredible papal collections.",
    images: [
      "/images/tours/rome/sistine-chapel.jpg",
      "/images/tours/rome/st-peters-basilica.jpg",
    ],
    duration: "3 hours",
    price: "$99",
    rating: 4.8,
    tags: ["Art", "Religious", "Skip-the-line"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marco Rossi",
    tourCategoryId: "art-history",
    faqs: [
      {
        question: "Is there a dress code?",
        answer:
          "Yes, the Vatican enforces a strict dress code. Shoulders and knees must be covered for both men and women. No shorts, sleeveless tops, or revealing clothing is permitted.",
      },
    ],
  },
  {
    title: "Trastevere Food & Wine Tour",
    description:
      "Explore the charming Trastevere neighborhood with a local foodie, tasting authentic Roman dishes and sampling fine wines at hidden gems.",
    images: [
      "/images/tours/rome/trastevere-food.jpg",
      "/images/tours/rome/roman-pizza.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Food", "Wine", "Local Culture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Sofia Conti",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample classic Roman dishes like pasta alla carbonara, supplì (fried rice balls), and artisanal pizza, paired with local wines. Vegetarian options are available upon request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! We can accommodate children's tastes and dietary restrictions with advance notice.",
      },
    ],
  },
];

export default romeTours;
