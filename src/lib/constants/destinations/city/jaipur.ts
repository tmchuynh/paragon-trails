import { Attraction } from "@/lib/interfaces/services/attractions";

export const jaipurRajasthanIndia: Attraction[] = [
  {
    title: "Hawa Mahal",
    description:
      "An iconic palace known as the 'Palace of Winds', famous for its unique architecture and numerous windows.",
    imageUrl: "https://plus.unsplash.com/hawa-mahal.jpg",
    location: "Hawa Mahal Rd, Badi Choupad, Pink City, Jaipur, Rajasthan",
    openingHours: "9 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["historical", "cultural", "architecture"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Amber Fort",
    description:
      "A majestic fort with stunning architecture and panoramic views of the surrounding hills.",
    imageUrl: "https://plus.unsplash.com/amber-fort.jpg",
    location: "Devisinghpura, Amer, Jaipur, Rajasthan",
    openingHours: "8 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["historical", "cultural", "fort"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
  },
  {
    title: "City Palace",
    description:
      "A royal residence with museums showcasing artifacts from the royal family of Jaipur.",
    imageUrl: "https://plus.unsplash.com/city-palace.jpg",
    location: "Tripolia Bazar, Pink City, Jaipur, Rajasthan",
    openingHours: "9 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["historical", "cultural", "museum"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
];
