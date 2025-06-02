import { Tour } from "@/lib/interfaces/services/tours";

export const phuketTours: Tour[] = [
  {
    title: "Phi Phi Islands Speedboat Adventure",
    description:
      "Experience the stunning beauty of the Phi Phi Islands with a full-day speedboat adventure, visiting Maya Bay (The Beach movie location), snorkeling in crystal-clear waters, and exploring hidden lagoons.",
    city: "Phuket",
    country: "Thailand",
    region: "Southern Thailand",
    images: [
      "/images/tours/phuket/phi-phi-islands.jpg",
      "/images/tours/phuket/maya-bay.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Islands", "Snorkeling", "Speedboat"],
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "adventure",
  },
  {
    title: "Traditional Thai Cooking Class",
    description:
      "Learn the secrets of authentic Thai cuisine with a hands-on cooking class, including a local market tour to select fresh ingredients and preparation of classic dishes like Pad Thai, Green Curry, and Mango Sticky Rice.",
    city: "Phuket",
    country: "Thailand",
    region: "Southern Thailand",
    images: [
      "/images/tours/phuket/thai-cooking.jpg",
      "/images/tours/phuket/local-market.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cooking", "Food", "Cultural"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
  },
  {
    title: "Ethical Elephant Sanctuary Visit",
    description:
      "Interact with rescued elephants in a natural environment at an ethical sanctuary, feeding and bathing these magnificent creatures while learning about conservation efforts to protect Thailand's elephants.",
    city: "Phuket",
    country: "Thailand",
    region: "Southern Thailand",
    images: [
      "/images/tours/phuket/elephant-sanctuary.jpg",
      "/images/tours/phuket/elephant-bathing.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Elephants", "Wildlife", "Ethical"],
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nature-experience",
  },
];

export default phuketTours;
