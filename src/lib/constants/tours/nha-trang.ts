import { Tour } from "@/lib/interfaces/services/tours";

export const nhaTrangTours: Tour[] = [
  {
    title: "Island Hopping & Snorkeling Adventure",
    description:
      "Discover the pristine waters and hidden beaches of Nha Trang Bay with stops at four islands for swimming, snorkeling, and relaxing.",
    images: [
      "/images/tours/nha-trang/island-hopping.jpg",
      "/images/tours/nha-trang/snorkeling.jpg",
    ],
    duration: "Full day",
    price: "$45",
    rating: 4.7,
    tags: ["Beach", "Snorkeling", "Islands"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Tran Minh",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "Basic swimming skills are recommended, but life jackets are provided for all guests during snorkeling activities.",
      },
    ],
  },
  {
    title: "Mud Bath Spa & Hot Springs Experience",
    description:
      "Relax and rejuvenate with Nha Trang's famous mud baths, mineral hot springs, and spa treatments in a beautiful natural setting.",
    images: [
      "/images/tours/nha-trang/mud-bath.jpg",
      "/images/tours/nha-trang/hot-springs.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Spa", "Relaxation", "Wellness"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Linh Nguyen",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the mud bath experience?",
        answer:
          "Just bring your swimwear and a towel. Lockers, showers, and all necessary facilities are provided at the spa.",
      },
    ],
  },
];

export default nhaTrangTours;
