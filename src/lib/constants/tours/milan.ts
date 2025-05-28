import { Tour } from "@/lib/interfaces/services/tours";

const milanTours: Tour[] = [
  {
    title: "Last Supper & Milan Art Masterpieces",
    description:
      "Experience Leonardo da Vinci's iconic Last Supper with guaranteed tickets and expert art commentary, followed by exclusive access to Milan's artistic treasures including the Duomo's rooftop terraces and Brera Gallery.",
    images: [
      "/images/tours/milan/last-supper.jpg",
      "/images/tours/milan/duomo-rooftop.jpg",
    ],
    duration: "5 hours",
    price: "$155",
    rating: 4.9,
    tags: ["Art", "Leonardo da Vinci", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Alessandra Rossi",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How far in advance should I book to see The Last Supper?",
        answer:
          "We recommend booking at least 3 months in advance for The Last Supper, as tickets are extremely limited (only 30 people every 15 minutes). Our tour includes guaranteed access to this masterpiece, which is often sold out for individual visitors months ahead. For last-minute requests, we occasionally have reserved allocations, but early booking is strongly advised.",
      },
    ],
  },
  {
    title: "Milan Fashion Insider Experience",
    description:
      "Dive into the world's fashion capital with VIP access to designer showrooms, private shopping in the Quadrilatero della Moda, and behind-the-scenes visits to artisan workshops creating high-end fashion accessories.",
    images: [
      "/images/tours/milan/fashion-district.jpg",
      "/images/tours/milan/artisan-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$225",
    rating: 4.8,
    tags: ["Fashion", "Shopping", "Design"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Bianchi",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is this tour only about shopping?",
        answer:
          "No, this is primarily a cultural and educational experience about Milan's fashion industry and craftsmanship. While opportunities to purchase items exist in some locations, the focus is on learning about design processes, meeting artisans, and understanding what makes Italian fashion distinctive. Our guide provides historical context about Milan's evolution as a fashion capital and insights into current industry trends.",
      },
    ],
  },
];

export default milanTours;
