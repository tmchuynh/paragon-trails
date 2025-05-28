import { Tour } from "@/lib/interfaces/services/tours";

const osloTours: Tour[] = [
  {
    title: "Oslo Fjord & Islands Cruise",
    description:
      "Glide through the stunning Oslo Fjord on a private sailing tour, exploring hidden islands, secluded beaches, and enjoying fresh Norwegian seafood prepared by an onboard chef.",
    images: [
      "/images/tours/oslo/oslo-fjord.jpg",
      "/images/tours/oslo/islands-cruise.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Sailing", "Nature", "Fjords"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Magnus Eriksen",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this tour weather-dependent?",
        answer:
          "Yes, for safety reasons, tours may be rescheduled in case of heavy rain or strong winds. We monitor forecasts closely and will contact you 24 hours in advance if weather conditions are unsuitable.",
      },
    ],
  },
  {
    title: "Viking History & Folk Museum Tour",
    description:
      "Step back in time to explore Norway's Viking heritage with an expert historian guiding you through the Viking Ship Museum and the open-air Norwegian Folk Museum.",
    images: [
      "/images/tours/oslo/viking-ship.jpg",
      "/images/tours/oslo/folk-museum.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Vikings", "History", "Museums"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Ingrid Johansen",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! Our guides are excellent at engaging children with fascinating Viking stories and hands-on activities at the Folk Museum. The Viking Ship Museum is particularly exciting for children of all ages.",
      },
    ],
  },
];

export default osloTours;
