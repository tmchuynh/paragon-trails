import { Tour } from "@/lib/interfaces/services/tours";

const aucklandTours: Tour[] = [
  {
    title: "Auckland Volcanic Explorer",
    description:
      "Discover Auckland's unique volcanic landscape with guided hikes up extinct volcanic cones offering spectacular 360° city views, followed by a wine tasting on vineyard-covered Waiheke Island.",
    images: [
      "/images/tours/auckland/mount-eden.jpg",
      "/images/tours/auckland/rangitoto.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Geology", "Hiking", "Wine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Matt Johnson",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult are the volcano hikes?",
        answer:
          "The hikes are moderately easy, with well-formed paths to the summits of Mt. Eden and One Tree Hill. Each climb takes 20-30 minutes at a leisurely pace. Rangitoto Island is slightly more challenging with a 1-hour summit track on volcanic rock, but still suitable for most fitness levels.",
      },
    ],
  },
  {
    title: "Māori Heritage Experience",
    description:
      "Immerse yourself in New Zealand's indigenous culture with guidance from Māori elders, including traditional welcome ceremonies, ancient storytelling, carving demonstrations, and a hangi feast.",
    images: [
      "/images/tours/auckland/maori-performance.jpg",
      "/images/tours/auckland/hangi-feast.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Cultural", "Indigenous", "Performance"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Tane Rakena",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we learn about the haka?",
        answer:
          "Yes, the cultural performance includes an explanation and demonstration of the haka (traditional war dance). Guests are invited to learn basic movements and participate in a group haka under the guidance of experienced performers.",
      },
    ],
  },
];

export default aucklandTours;
