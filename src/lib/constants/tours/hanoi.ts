import { Tour } from "@/lib/interfaces/services/tours";

export const hanoiTours: Tour[] = [
  {
    title: "Hanoi City Highlights Tour",
    description:
      "Explore the rich history and vibrant culture of Hanoi with a guided tour of its most iconic landmarks, including the Ho Chi Minh Mausoleum, the Old Quarter, and the Temple of Literature.",
    city: "Hanoi",
    country: "Vietnam",
    region: "Northern Vietnam",
    images: [
      "/images/tours/hanoi/ho-chi-minh-mausoleum.jpg",
      "/images/tours/hanoi/old-quarter.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Cultural", "Historical", "City Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear for the tour?",
        answer:
          "Comfortable walking shoes and light clothing are recommended. Dress modestly when visiting religious sites.",
      },
      {
        question: "Is lunch included in the tour?",
        answer:
          "Lunch is not included, but we can recommend local restaurants for you to try.",
      },
      {
        question: "Can I customize the tour itinerary?",
        answer:
          "Yes, we can tailor the tour to include specific sites or experiences based on your interests.",
      },
    ],
  },
  {
    title: "Hanoi Street Food Adventure",
    description:
      "Dive into Hanoi's culinary scene with a guided street food tour, sampling local delicacies like pho, banh mi, and egg coffee from hidden gems around the city.",
    city: "Hanoi",
    country: "Vietnam",
    region: "Northern Vietnam",
    images: [
      "/images/tours/hanoi/street-food.jpg",
      "/images/tours/hanoi/pho.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.8,
    tags: ["Culinary", "Food Tour", "Local Experience"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are dietary restrictions accommodated?",
        answer:
          "Yes, please inform us of any dietary restrictions in advance so we can adjust the food selections accordingly.",
      },
      {
        question: "Do I need to bring cash for food purchases ?",
        answer:
          "Most food vendors accept cash, so it's advisable to bring some local currency. However, some places may accept digital payments.",
      },
      {
        question: "Is this tour suitable for vegetarians?",
        answer:
          "Yes, we can customize the food selections to include vegetarian options. Just let us know in advance.",
      },
    ],
  },
];

export default hanoiTours;
