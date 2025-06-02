import { Tour } from "@/lib/interfaces/services/tours";

export const sevilleTours: Tour[] = [
  {
    title: "Seville Historical City Tour",
    description:
      "Discover the rich history and stunning architecture of Seville with a guided tour through its iconic landmarks.",
    city: "Seville",
    country: "Spain",
    region: "Andalusia",
    images: [
      "/images/tours/seville/historical-city.jpg",
      "/images/tours/seville/alcazar.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Cultural", "Historical", "City Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What are the must-see attractions in Seville?",
        answer:
          "Must-see attractions include the Alcázar, Seville Cathedral, and Plaza de España.",
      },
    ],
  },
  {
    title: "Flamenco Show and Dinner Experience",
    description:
      "Enjoy an authentic Flamenco show while savoring traditional Andalusian cuisine in a local restaurant.",
    city: "Seville",
    country: "Spain",
    region: "Andalusia",
    images: [
      "/images/tours/seville/flamenco-show.jpg",
      "/images/tours/seville/dinner-experience.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Cultural", "Culinary", "Entertainment"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
  },
  {
    title: "Seville Bike Tour",
    description:
      "Explore the beautiful city of Seville on a guided bike tour, visiting parks, plazas, and hidden gems.",
    city: "Seville",
    country: "Spain",
    region: "Andalusia",
    images: [
      "/images/tours/seville/bike-tour.jpg",
      "/images/tours/seville/parks.jpg",
    ],
    duration: "2 hours",
    price: "$25",
    rating: 4.7,
    tags: ["Adventure", "Nature", "City Tour"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
];

export default sevilleTours;
