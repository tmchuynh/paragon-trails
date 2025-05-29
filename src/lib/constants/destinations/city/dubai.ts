import { Attraction } from "@/lib/interfaces/services/attractions";

export const dubaiDubaiEmirateUnitedArabEmirates: Attraction[] = [
  {
    title: "Burj Khalifa",
    description:
      "The tallest building in the world, offering breathtaking views of Dubai from its observation decks.",
    imageUrl: "https://plus.unsplash.com/burj-khalifa.jpg",
    location: "1 Sheikh Mohammed bin Rashid Blvd, Dubai",
    openingHours: "8 AM - 11 PM",
    priceRange: "$$$$",
    priceCategory: "luxury",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["architectural", "viewpoint", "modern"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Dubai Mall",
    description:
      "One of the largest shopping malls in the world, featuring over 1,200 shops, an aquarium, and an ice rink.",
    imageUrl: "https://plus.unsplash.com/dubai-mall.jpg",
    location: "Financial Center Rd, Dubai",
    openingHours: "10 AM - 12 AM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.7,
    tags: ["shopping", "entertainment", "dining"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Dubai Marina",
    description:
      "A vibrant waterfront area with a marina, restaurants, and stunning skyscrapers.",
    imageUrl: "https://plus.unsplash.com/dubai-marina.jpg",
    location: "Dubai Marina, Dubai",
    openingHours: "Open 24 hours",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "all day",
    rating: 4.6,
    tags: ["outdoor", "recreation", "scenic"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
];
