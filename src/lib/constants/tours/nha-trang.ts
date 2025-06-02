import { Tour } from "@/lib/interfaces/services/tours";

export const nhaTrangTours: Tour[] = [
  {
    title: "Nha Trang Island Hopping Adventure",
    description:
      "Explore the stunning islands surrounding Nha Trang Bay with a full-day boat tour featuring snorkeling, swimming, and a fresh seafood lunch on a secluded beach.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "Khanh Hoa Province",
    images: [
      "/images/tours/nha-trang/island-hopping.jpg",
      "/images/tours/nha-trang/snorkeling-spot.jpg",
    ],
    duration: "8 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Islands", "Snorkeling", "Swimming"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
  {
    title: "Mud Bath Spa & Hot Spring Experience",
    description:
      "Rejuvenate your body and spirit with a traditional Vietnamese mud bath treatment followed by a soak in natural hot mineral springs at the renowned Thap Ba Hot Springs Center.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "Khanh Hoa Province",
    images: [
      "/images/tours/nha-trang/mud-bath.jpg",
      "/images/tours/nha-trang/hot-springs.jpg",
    ],
    duration: "4 hours",
    price: "$30",
    rating: 4.7,
    tags: ["Spa", "Wellness", "Relaxation"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "wellness",
  },
  {
    title: "Countryside & Local Village Tour",
    description:
      "Experience authentic rural Vietnamese life with a guided tour through scenic countryside landscapes, traditional villages, and local craft workshops, including stops at rice fields and a historic Cham tower.",
    city: "Nha Trang",
    country: "Vietnam",
    region: "Khanh Hoa Province",
    images: [
      "/images/tours/nha-trang/countryside.jpg",
      "/images/tours/nha-trang/village-life.jpg",
    ],
    duration: "6 hours",
    price: "$35",
    rating: 4.9,
    tags: ["Cultural", "Rural", "Local Life"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
  },
];

export default nhaTrangTours;
