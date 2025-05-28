import { Tour } from "@/lib/interfaces/services/tours";

const anchorageTours: Tour[] = [
  {
    title: "Wildlife & Glacier Flight Safari",
    description:
      "Soar over Alaska's breathtaking wilderness in a floatplane to spot bears, moose, and wolves in their natural habitat, landing on a remote glacial lake for a wilderness champagne picnic.",
    images: [
      "/images/tours/anchorage/floatplane.jpg",
      "/images/tours/anchorage/glacier-landing.jpg",
    ],
    duration: "6 hours",
    price: "$495",
    rating: 5.0,
    tags: ["Flightseeing", "Wildlife", "Glacier"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Captain Jack Stevens",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What are our chances of seeing wildlife?",
        answer:
          "While wildlife sightings can never be guaranteed, our success rate exceeds 90% for bear sightings and 95% for moose during summer months. Our skilled pilots know the best areas and flying routes to maximize wildlife viewing opportunities.",
      },
    ],
  },
  {
    title: "Alaskan Culinary Foraging & Feast",
    description:
      "Explore Chugach State Park with a local chef to gather wild Alaskan ingredients, then enjoy a gourmet wilderness cooking class featuring freshly caught salmon and foraged delicacies.",
    images: [
      "/images/tours/anchorage/foraging.jpg",
      "/images/tours/anchorage/wilderness-cooking.jpg",
    ],
    duration: "7 hours",
    price: "$235",
    rating: 4.9,
    tags: ["Foraging", "Cooking", "Wilderness"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Alyeska Jones",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of things might we forage?",
        answer:
          "Depending on the season, we may gather wild berries (blueberries, salmonberries, crowberries), spruce tips, fireweed, fiddlehead ferns, mushrooms, and various edible flowers and herbs. Your guide is an expert in identifying safe and delicious wild Alaskan foods.",
      },
    ],
  },
];

export default anchorageTours;
