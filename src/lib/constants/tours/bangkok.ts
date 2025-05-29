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
    ],
  },
];

export default bangkokTours;
