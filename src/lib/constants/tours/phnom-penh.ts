import { Tour } from "@/lib/interfaces/services/tours";

export const phnomPenhTours: Tour[] = [
  {
    title: "Khmer Rouge History & Remembrance",
    description:
      "Gain a deeper understanding of Cambodia's troubled past with guided visits to the Tuol Sleng Genocide Museum (S21 Prison) and the Choeung Ek Killing Fields, with insights from expert guides and survivors' testimonies.",
    city: "Phnom Penh",
    country: "Cambodia",
    region: "Phnom Penh Capital Region",
    images: [
      "/images/tours/phnom-penh/tuol-sleng.jpg",
      "/images/tours/phnom-penh/killing-fields.jpg",
    ],
    duration: "5 hours",
    price: "$45",
    rating: 4.9,
    tags: ["Historical", "Educational", "Cultural"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
  },
  {
    title: "Royal Palace & Silver Pagoda Tour",
    description:
      "Explore the magnificent Royal Palace complex and Silver Pagoda in Phnom Penh, admiring the intricate architecture, beautiful gardens, and the famous Emerald Buddha and solid gold Buddha adorned with thousands of diamonds.",
    city: "Phnom Penh",
    country: "Cambodia",
    region: "Phnom Penh Capital Region",
    images: [
      "/images/tours/phnom-penh/royal-palace.jpg",
      "/images/tours/phnom-penh/silver-pagoda.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Royal", "Architecture", "Cultural"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
  },
  {
    title: "Mekong River Sunset Cruise & Dinner",
    description:
      "Experience the serene beauty of Cambodia's waterways with a sunset cruise at the confluence of the Mekong, Tonle Sap, and Tonle Bassac rivers, enjoying traditional Khmer cuisine while watching the sun set over Phnom Penh's skyline.",
    city: "Phnom Penh",
    country: "Cambodia",
    region: "Phnom Penh Capital Region",
    images: [
      "/images/tours/phnom-penh/mekong-cruise.jpg",
      "/images/tours/phnom-penh/river-sunset.jpg",
    ],
    duration: "2 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Cruise", "Sunset", "Dining"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "romantic",
  },
];

export default phnomPenhTours;
