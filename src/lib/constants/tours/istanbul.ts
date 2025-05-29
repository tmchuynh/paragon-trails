import { Tour } from "@/lib/interfaces/services/tours";
export const istanbulTours: Tour[] = [
  {
    title: "Two Continents & Bosphorus Experience",
    description:
      "Journey through Istanbul's unique position straddling Europe and Asia with a private Bosphorus cruise, visiting landmarks on both continents and enjoying a traditional Turkish meal with spectacular strait views.",
    images: [
      "/images/tours/istanbul/bosphorus-cruise.jpg",
      "/images/tours/istanbul/asian-side.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Bosphorus", "Two Continents", "Scenic"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mehmet Özturk",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we stop on the Asian side?",
        answer:
          "Yes, we dock at Üsküdar on the Asian side of Istanbul for approximately 2 hours to explore its historic mosques, authentic local market, and beautiful waterfront promenade. This provides a perfect contrast to the more tourist-oriented European side, showing a more authentic slice of daily Istanbul life.",
      },
      {
        question: "Is the boat private?",
        answer:
          "Yes, this is a private tour with your own dedicated boat and guide. You can customize the itinerary to include specific landmarks or activities along the Bosphorus.",
      },
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress comfortably for a day on the water. We recommend layers, as it can be cooler on the water than on land. Comfortable shoes are also advisable if you plan to explore the Asian side.",
      },
    ],
  },
  {
    title: "Grand Bazaar Secrets & Artisan Workshops",
    description:
      "Go beyond the tourist sections of Istanbul's legendary Grand Bazaar with access to hidden hans (merchant inns), traditional craftsmen's workshops, and private showrooms normally closed to visitors.",
    images: [
      "/images/tours/istanbul/grand-bazaar.jpg",
      "/images/tours/istanbul/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Shopping", "Artisans", "Culture"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ayşe Yılmaz",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will there be pressure to buy items?",
        answer:
          "Absolutely not. While you'll meet authentic artisans and have opportunities to purchase unique items directly from creators, this is primarily a cultural and educational experience. Our guide acts as a cultural interpreter, not a shopping assistant. The craftspeople understand this and provide demonstrations of their art rather than sales pitches.",
      },
      {
        question: "What types of artisans will we meet?",
        answer:
          "You'll meet a variety of traditional craftsmen including carpet weavers, calligraphers, ceramicists, and metalworkers. Each artisan will demonstrate their craft and share insights into the history and techniques involved.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy the vibrant atmosphere of the bazaar and the fascinating demonstrations by artisans. It's a great way to introduce them to Turkish culture and craftsmanship.",
      },
    ],
  },
];

export default istanbulTours;
