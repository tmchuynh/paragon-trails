import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const sanDiegoTours: Tour[] = [
  {
    title: "Hidden Beaches & Coastal Treasures",
    description:
      "Discover San Diego's most scenic and secluded beaches with a local guide who knows exactly when and where to avoid crowds and find the perfect spots.",
    images: [
      "/images/tours/san-diego/secret-beach.jpg",
      "/images/tours/san-diego/tide-pools.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Beaches", "Nature", "Photography"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("san-diego", "art").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will there be opportunities for swimming?",
        answer:
          "Yes, we'll visit at least one beach suitable for swimming. Bring swimwear and towels if you'd like to take a dip, though swimming is optional.",
      },
    ],
  },
  {
    title: "San Diego Zoo VIP Experience",
    description:
      "Go behind the scenes at the world-famous San Diego Zoo with exclusive early access, private animal encounters, and insights from a zoology expert.",
    images: [
      "/images/tours/san-diego/zoo-pandas.jpg",
      "/images/tours/san-diego/animal-encounter.jpg",
    ],
    duration: "4 hours",
    price: "$199",
    rating: 4.9,
    tags: ["Family", "VIP"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("san-diego", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How close will we get to the animals?",
        answer:
          "This VIP experience includes at least two up-close animal encounters where you may have the opportunity to feed or touch select animals under staff supervision, subject to animal welfare considerations on the day.",
      },
    ],
  },
  {
    title: "Craft Beer & Brewery Tour",
    description:
      "Explore San Diego's vibrant craft beer scene with a guided tour of three local breweries, including tastings of unique brews and behind-the-scenes insights into the brewing process.",
    images: [
      "/images/tours/san-diego/craft-beer.jpg",
      "/images/tours/san-diego/brewery-tour.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Brewery", "Craft Beer", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("san-diego", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are non-alcoholic options available?",
        answer:
          "Yes, we can accommodate non-drinkers with craft sodas and water tastings at each brewery. Please let us know in advance if you prefer non-alcoholic options.",
      },
    ],
  },
];

export default sanDiegoTours;
