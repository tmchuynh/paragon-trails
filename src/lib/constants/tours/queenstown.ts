import { Tour } from "@/lib/interfaces/services/tours";

const queenstownTours: Tour[] = [
  {
    title: "Middle-earth Helicopter Adventure",
    description:
      "Soar over the breathtaking Lord of the Rings filming locations with a helicopter journey deep into New Zealand's majestic Southern Alps and remote alpine landing.",
    images: [
      "/images/tours/queenstown/mountain-helicopter.jpg",
      "/images/tours/queenstown/lotr-landscapes.jpg",
    ],
    duration: "3 hours",
    price: "$495",
    rating: 5.0,
    tags: ["Helicopter", "Lord of the Rings", "Mountains"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jack Sutherland",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Are there weight restrictions for the helicopter?",
        answer:
          "Yes, for safety reasons there's a maximum individual weight of 120kg (264lbs) and we need accurate weights for all passengers at booking for proper weight distribution.",
      },
    ],
  },
  {
    title: "Central Otago Wine Journey",
    description:
      "Discover New Zealand's southernmost wine region renowned for exceptional Pinot Noir with tastings at boutique vineyards and a gourmet lunch amid spectacular mountain scenery.",
    images: [
      "/images/tours/queenstown/vineyard-mountains.jpg",
      "/images/tours/queenstown/wine-tasting.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Wine", "Gourmet", "Scenery"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Emma Wilson",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is there a non-drinking option available?",
        answer:
          "Absolutely! We offer a reduced-price 'designated driver' option with premium non-alcoholic alternatives at each vineyard, including specialty juices and craft sodas.",
      },
    ],
  },
];

export default queenstownTours;
