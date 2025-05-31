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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuideSpecialty: "luxury", // Changed from tourGuide to tourGuideSpecialty
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Will we see celebrities during the tour?",
        answer:
          "While celebrity sightings are possible, they cannot be guaranteed. Our guides know the popular spots where celebrities often visit, increasing your chances.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for all ages. Children will enjoy the fun of spotting celebrity homes and learning about Hollywood history.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuideSpecialty: "adventure", // Changed from tourGuide to tourGuideSpecialty
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous surfing experience?",
        answer:
          "No experience necessary! Our instructors are skilled at teaching beginners. Basic swimming ability is required for safety.",
      },
      {
        question: "What should I wear for the surfing lesson?",
        answer:
          "Wear a swimsuit or board shorts, and we provide wetsuits if needed. Don't forget sunscreen and a towel!",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children aged 8 and up can participate in the surfing lesson with parental supervision.",
      },
    ],
  },
  {
    title: "Los Angeles Art Walk & Gallery Tour",
    description:
      "Explore LA's vibrant art scene with a guided tour of the Arts District, featuring street art, contemporary galleries, and local artist studios.",
    images: [
      "/images/tours/los-angeles/art-district.jpg",
      "/images/tours/los-angeles/street-art.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuideSpecialty: "cultural", // Changed from tourGuide to tourGuideSpecialty
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we visit any indoor galleries?",
        answer:
          "Yes, the tour includes visits to several contemporary art galleries and artist studios in the Arts District.",
      },
      {
        question: "What should I wear for the walk?",
        answer:
          "Wear comfortable walking shoes and dress for the weather. We recommend bringing a water bottle and sunscreen.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences.",
      },
    ],
  },
];

export default losAngelesTours;
