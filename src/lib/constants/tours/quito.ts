import { Tour } from "@/lib/interfaces/services/tours";

export const quitoTours: Tour[] = [
  {
    title: "Historical Quito City Tour",
    description:
      "Explore the rich history and architecture of Quito, a UNESCO World Heritage site, with a guided tour of its colonial center.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha Province",
    images: [
      "/images/tours/quito/historical-quito.jpg",
      "/images/tours/quito/colonial-center.jpg",
    ],
    duration: "4 hours",
    price: "$30",
    rating: 4.8,
    tags: ["Cultural", "Historical", "City Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is the best time to visit Quito?",
        answer:
          "The best time to visit Quito is during the dry season from June to September, but the city has a pleasant climate year-round.",
      },
    ],
  },
  {
    title: "Cotopaxi Volcano Day Trip",
    description:
      "Experience the breathtaking views of Cotopaxi Volcano with a guided hike and visit to the national park.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha Province",
    images: [
      "/images/tours/quito/cotopaxi-volcano.jpg",
      "/images/tours/quito/national-park.jpg",
    ],
    duration: "8 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Adventure", "Nature", "Hiking"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
  {
    title: "Mitad del Mundo Tour",
    description:
      "Visit the famous Mitad del Mundo monument and learn about the equatorial line's significance in science and culture.",
    city: "Quito",
    country: "Ecuador",
    region: "Pichincha Province",
    images: [
      "/images/tours/quito/mitad-del-mundo.jpg",
      "/images/tours/quito/equator-line.jpg",
    ],
    duration: "3 hours",
    price: "$20",
    rating: 4.5,
    tags: ["Cultural", "Educational", "Family Friendly"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
  },
];

export default quitoTours;
