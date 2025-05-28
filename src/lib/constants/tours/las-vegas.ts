import { Tour } from "@/lib/interfaces/services/tours";

export const lasVegasTours: Tour[] = [
  {
    title: "VIP Nightclub & Entertainment Tour",
    description:
      "Skip the lines and experience Las Vegas' legendary nightlife with VIP access to exclusive clubs, lounges, and entertainment venues.",
    images: [
      "/images/tours/las-vegas/nightclub.jpg",
      "/images/tours/las-vegas/strip-night.jpg",
    ],
    duration: "5 hours",
    price: "$149",
    rating: 4.7,
    tags: ["Nightlife", "VIP", "Entertainment"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Jackson Miles",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is there a dress code?",
        answer:
          "Yes, upscale attire is required. Men should wear collared shirts and dress shoes. Athletic wear, sneakers, and sandals are not permitted in most venues.",
      },
    ],
  },
  {
    title: "Grand Canyon Helicopter & Landing",
    description:
      "Fly from Las Vegas over the Hoover Dam and Lake Mead to the Grand Canyon for a champagne picnic on the canyon floor.",
    images: [
      "/images/tours/las-vegas/helicopter.jpg",
      "/images/tours/las-vegas/grand-canyon-landing.jpg",
    ],
    duration: "4 hours",
    price: "$399",
    rating: 4.9,
    tags: ["Helicopter", "Grand Canyon", "Adventure"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Rebecca Torres",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Are there weight restrictions for the helicopter?",
        answer:
          "Yes, for safety reasons, passengers weighing over 300 pounds (136 kg) may need to purchase an additional seat. Exact weight information is required at booking.",
      },
    ],
  },
];

export default lasVegasTours;
