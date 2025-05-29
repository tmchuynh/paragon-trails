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
      {
        question: "Is food or drink available on the cruise?",
        answer:
          "Light snacks and beverages are available for purchase on board. You can also bring your own snacks.",
      },
      {
        question: "Are there restrooms on the boat?",
        answer: "Yes, all boats are equipped with restrooms.",
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
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions when booking. We can accommodate vegetarian and gluten-free options at the pizzerias.",
      },
      {
        question: "Do we visit multiple blues clubs?",
        answer:
          "Yes, we visit two different venues to experience a variety of live music styles and atmospheres.",
      },
    ],
  },
  {
    title: "Chicago Art & Culture Walk",
    description:
      "Explore Chicago's vibrant art scene with a guided walking tour through the city's best galleries, street art, and cultural landmarks.",
    images: [
      "/images/tours/chicago/art-walk.jpg",
      "/images/tours/chicago/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Martinez",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive art experiences.",
      },
      {
        question: "What should I wear for the walk?",
        answer:
          "Wear comfortable walking shoes and dress for the weather. We recommend bringing a water bottle and sunscreen.",
      },
      {
        question: "Do we visit any indoor galleries?",
        answer:
          "Yes, we include visits to several indoor galleries as well as outdoor street art installations.",
      },
    ],
  },
];

export default chicagoTours;
