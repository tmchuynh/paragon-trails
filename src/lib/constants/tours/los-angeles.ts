import { Tour } from "@/lib/interfaces/services/tours";

export const losAngelesTours: Tour[] = [
  {
    title: "VIP Hollywood & Celebrity Homes Tour",
    description:
      "Get an insider's view of Hollywood, the Walk of Fame, and exclusive Beverly Hills neighborhoods where the stars live.",
    images: [
      "/images/tours/los-angeles/hollywood-sign.jpg",
      "/images/tours/los-angeles/beverly-hills.jpg",
    ],
    duration: "5 hours",
    price: "$89",
    rating: 4.7,
    tags: ["Celebrity", "Hollywood", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Jennifer Rodriguez",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Will we see celebrities during the tour?",
        answer:
          "While celebrity sightings are possible, they cannot be guaranteed. Our guides know the popular spots where celebrities often visit, increasing your chances.",
      },
    ],
  },
  {
    title: "California Beach Culture & Surfing Lesson",
    description:
      "Experience the iconic beach lifestyle of Southern California with a private surfing lesson and tour of Venice Beach, Santa Monica, and Malibu.",
    images: [
      "/images/tours/los-angeles/surfing-lesson.jpg",
      "/images/tours/los-angeles/venice-beach.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Beach", "Surfing", "Active"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Tyler Johnson",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous surfing experience?",
        answer:
          "No experience necessary! Our instructors are skilled at teaching beginners. Basic swimming ability is required for safety.",
      },
    ],
  },
];

export default losAngelesTours;
