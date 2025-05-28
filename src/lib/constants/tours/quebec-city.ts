import { Tour } from "@/lib/interfaces/services/tours";

const quebecCityTours: Tour[] = [
  {
    title: "Old Quebec & French Heritage Experience",
    description:
      "Step back in time through North America's only walled city with a historian guide, exploring hidden courtyards, ancient fortifications, and charming European architecture, followed by authentic Quebecois cuisine.",
    images: [
      "/images/tours/quebec-city/old-quebec-walls.jpg",
      "/images/tours/quebec-city/petit-champlain.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Historical", "French Heritage", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marie-Claire Tremblay",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we need to climb many stairs?",
        answer:
          "Quebec City is built on different levels with some steep inclines and staircases, particularly between Upper and Lower Town. Our route includes the famous Breakneck Stairs but at a leisurely pace with alternatives available. We can customize the route for those with mobility concerns while still covering the main highlights of this beautiful city.",
      },
    ],
  },
  {
    title: "Winter Carnival & Ice Hotel Adventure",
    description:
      "Experience Quebec's magical winter with VIP access to Winter Carnival festivities, dog sledding through snow-covered forests, and an exclusive tour of the magnificent Ice Hotel with welcome cocktails served in ice glasses.",
    images: [
      "/images/tours/quebec-city/ice-hotel.jpg",
      "/images/tours/quebec-city/dog-sledding.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.8,
    tags: ["Winter", "Ice Hotel", "Dog Sledding"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Jean-Pierre Bouchard",
    tourCategoryId: "seasonal",
    faqs: [
      {
        question: "How cold is it inside the Ice Hotel?",
        answer:
          "The Ice Hotel maintains a temperature between -3°C and -5°C (23°F-27°F) regardless of outside temperatures. We provide warm, insulated capes during your visit, and hot beverages are available. The tour includes both public spaces and guest suites, with fascinating information about how this architectural marvel is constructed entirely of ice and snow each winter.",
      },
    ],
  },
];

export default quebecCityTours;
