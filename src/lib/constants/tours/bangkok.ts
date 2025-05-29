import { Tour } from "@/lib/interfaces/services/tours";
export const bangkokTours: Tour[] = [
  {
    title: "Hidden Canals & Local Life Experience",
    description:
      "Escape the urban bustle on a private longtail boat journey through Bangkok's hidden canals (klongs), visiting floating markets, waterside communities, and ancient temples inaccessible by road.",
    images: [
      "/images/tours/bangkok/klong-boat.jpg",
      "/images/tours/bangkok/floating-market.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Canals", "Local Life", "Off-the-beaten-path"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Somchai Wongwian",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Which floating market will we visit?",
        answer:
          "Rather than the large tourist-oriented floating markets like Damnoen Saduak, we visit smaller, authentic community markets along the canals where locals still shop. The exact market depends on the day of the week, as different canal communities hold markets on different days, ensuring you experience genuine local life rather than a tourist attraction.",
      },
      {
        question: "What should I wear for the boat ride?",
        answer:
          "Wear comfortable, lightweight clothing suitable for warm weather. We recommend closed-toe shoes that can get wet, as you may need to step into shallow water at some stops. A hat and sunscreen are also advisable.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The boat is stable and safe, and children will enjoy the unique experience of exploring the canals.",
      },
    ],
  },
  {
    title: "Bangkok After Dark: Sky Bars & Street Food",
    description:
      "Experience Bangkok's dynamic nightlife with a curated evening visiting exclusive rooftop bars with spectacular city views, followed by an exploration of vibrant street food districts guided by a local culinary expert.",
    images: [
      "/images/tours/bangkok/skybar-view.jpg",
      "/images/tours/bangkok/night-street-food.jpg",
    ],
    duration: "5 hours",
    price: "$115",
    rating: 4.8,
    tags: ["Nightlife", "Street Food", "Rooftops"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nattaporn Srisawat",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is there a dress code?",
        answer:
          "Yes, for the sky bars portion of the tour, smart casual attire is required. This means no shorts, open-toed shoes, or sleeveless shirts for men. Women have more flexibility but should dress elegantly casual. For the street food portion, you can change into more comfortable attire if desired (we provide time and facilities for this).",
      },
      {
        question: "What types of street food will we try?",
        answer:
          "You'll sample a variety of local favorites, including grilled skewers, spicy salads, noodle dishes, and desserts. We cater to dietary restrictions, so please inform us in advance if you have any allergies or preferences.",
      },
      {
        question: "Can we stay longer at the sky bars?",
        answer:
          "Yes, after the guided portion ends, you are welcome to remain at the sky bars to enjoy the views and atmosphere at your leisure. Just let your guide know if you plan to do this.",
      },
    ],
  },
];

export default bangkokTours;
