import { Tour } from "@/lib/interfaces/services/tours";

const aswanTours: Tour[] = [
  {
    title: "Nubian Village Experience & Elephantine Island",
    description:
      "Immerse yourself in the vibrant culture of Egypt's Nubian people with a boat journey to colorful villages, home-hosted lunch, traditional music, and exploration of ancient ruins on Elephantine Island.",
    images: [
      "/images/tours/aswan/nubian-village.jpg",
      "/images/tours/aswan/elephantine-temple.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Cultural", "Nubian", "Island"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mahmoud Ibrahim",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we interact with local Nubian people?",
        answer:
          "Yes, this is the heart of the experience. You'll visit a family home where three generations often live together. Our host family will teach basic Nubian phrases, explain traditional customs, and demonstrate food preparation. Many guests describe this cultural exchange as the highlight of their Egypt journey.",
      },
    ],
  },
  {
    title: "Abu Simbel Dawn Convoy",
    description:
      "Join the early morning convoy to witness the magnificent temples of Ramses II and Nefertari at Abu Simbel, arriving just as the rising sun illuminates the inner sanctum in a phenomenon designed 3,200 years ago.",
    images: [
      "/images/tours/aswan/abu-simbel-facade.jpg",
      "/images/tours/aswan/temple-interior.jpg",
    ],
    duration: "8 hours",
    price: "$165",
    rating: 4.8,
    tags: ["Archaeological", "UNESCO", "Ancient Egypt"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Fatima Nour",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Why do we need to leave so early?",
        answer:
          "The convoy departs Aswan around 4:00 AM to reach Abu Simbel for sunrise when the temperature is cooler and the light is magical. This timing also allows us to explore the temples before the larger tour groups arrive from Luxor and Cairo. The early start is well worth it for the remarkable experience of seeing these temples in the best conditions.",
      },
    ],
  },
];

export default aswanTours;
