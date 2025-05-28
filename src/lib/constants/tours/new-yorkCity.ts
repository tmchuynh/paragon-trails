import { Tour } from "@/lib/interfaces/services/tours";

export const newYorkCityTours: Tour[] = [
  {
    title: "NYC Highlights Walking Tour",
    description:
      "Explore the iconic landmarks of Manhattan including Times Square, Central Park, and Fifth Avenue with a knowledgeable local guide.",
    images: [
      "/images/tours/nyc/times-square.jpg",
      "/images/tours/nyc/central-park.jpg",
    ],
    duration: "4 hours",
    price: "$49",
    rating: 4.8,
    tags: ["Walking", "Urban", "Landmarks"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Michael Johnson",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer: "Yes, this tour is designed to be engaging for all ages.",
      },
    ],
  },
  {
    title: "Hidden Gems of Brooklyn",
    description:
      "Discover the artistic neighborhoods and culinary delights of Brooklyn that most tourists never see.",
    images: [
      "/images/tours/nyc/brooklyn-bridge.jpg",
      "/images/tours/nyc/williamsburg.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Food", "Art", "Local"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Sarah Miller",
    tourCategoryId: "local-experience",
    faqs: [
      {
        question: "Does this tour include food tastings?",
        answer:
          "Yes, we'll stop at 4-5 local eateries for samples of Brooklyn's best cuisine.",
      },
    ],
  },
];

export default newYorkCityTours;
