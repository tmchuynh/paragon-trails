import { Tour } from "@/lib/interfaces/services/tours";

const hongKongTours: Tour[] = [
  {
    title: "Hong Kong Harbor Junk Boat & Skyline Experience",
    description:
      "Cruise Victoria Harbor aboard a traditional red-sail junk boat with champagne and dim sum, followed by a guided visit to a secret rooftop for the most spectacular skyline photography at sunset.",
    images: [
      "/images/tours/hong-kong/junk-boat.jpg",
      "/images/tours/hong-kong/skyline-night.jpg",
    ],
    duration: "4 hours",
    price: "$165",
    rating: 4.9,
    tags: ["Harbor", "Photography", "Skyline"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Michael Wong",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "When is the best time for the skyline photography?",
        answer:
          "Our tour is timed to capture the 'blue hour' just after sunset when the sky turns a deep blue before going completely dark, creating the perfect contrast with Hong Kong's illuminated buildings. We start on the water to see the sunset, then move to our exclusive rooftop location for the Symphony of Lights show that begins at 8:00pm.",
      },
    ],
  },
  {
    title: "Hong Kong Food Journey & Market Adventure",
    description:
      "Dive into Hong Kong's culinary soul with a local food expert guiding you through bustling markets, hidden street food stalls, and family-run eateries serving authentic Cantonese cuisine loved by locals.",
    images: [
      "/images/tours/hong-kong/wet-market.jpg",
      "/images/tours/hong-kong/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Food", "Markets", "Local Cuisine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Jenny Lau",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many food tastings are included?",
        answer:
          "The tour includes 7-8 carefully selected food tastings ranging from dim sum and roast meats to local street snacks and traditional desserts. Portions are sized so you can try everything without feeling overwhelmed. We visit establishments chosen for both their authenticity and food safety standards, many of which have been run by the same families for generations.",
      },
    ],
  },
];

export default hongKongTours;
