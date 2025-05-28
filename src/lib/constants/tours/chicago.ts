import { Tour } from "@/lib/interfaces/services/tours";

export const chicagoTours: Tour[] = [
  {
    title: "Chicago Architecture River Cruise",
    description:
      "Discover the stories behind Chicago's famous skyline from the unique perspective of the Chicago River with an expert architecture guide.",
    images: [
      "/images/tours/chicago/river-cruise.jpg",
      "/images/tours/chicago/skyline.jpg",
    ],
    duration: "75 minutes",
    price: "$55",
    rating: 4.9,
    tags: ["Architecture", "River", "Photography"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Robert Stern",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Does the cruise run in all weather?",
        answer:
          "Cruises operate rain or shine. In case of severe weather, we may reschedule or offer indoor viewing options.",
      },
    ],
  },
  {
    title: "Chicago Deep Dish Pizza & Blues Tour",
    description:
      "Experience two Chicago classics in one night: authentic deep dish pizza at historic pizzerias followed by live blues at legendary music venues.",
    images: [
      "/images/tours/chicago/deep-dish-pizza.jpg",
      "/images/tours/chicago/blues-club.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Food", "Music", "Nightlife"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marcus Washington",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is there a minimum age requirement for the blues clubs?",
        answer:
          "Most venues on this tour require guests to be 21+. We offer a family-friendly alternative daytime tour that includes pizza tasting and music history.",
      },
    ],
  },
];

export default chicagoTours;
