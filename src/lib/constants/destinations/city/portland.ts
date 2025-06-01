import { Attraction } from "@/lib/interfaces/services/attractions";

export const portlandOrUnitedStates: Attraction[] = [
  {
    title: "Washington Park",
    description:
      "A large urban park featuring the Oregon Zoo, Portland Japanese Garden, and miles of trails.",
    imageUrl: "https://plus.unsplash.com/washington-park.jpg",
    location: "Washington Park, Portland, OR, United States",
    openingHours: "6 AM - 10 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.8,
    tags: ["nature", "adventure"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,
    isFree: false,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Powell's City of Books",
    description:
      "The world's largest independent bookstore, offering a vast selection of new and used books.",
    imageUrl: "https://plus.unsplash.com/powells-books.jpg",
    location: "Powell's City of Books, Portland, OR, United States",
    openingHours: "9 AM - 11 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.9,
    tags: ["cultural", "local"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,
    isFree: false,
  },
  {
    title: "Portland Art Museum",
    description:
      "A renowned art museum featuring an extensive collection of Native American art and contemporary pieces.",
    imageUrl: "https://plus.unsplash.com/portland-art-museum.jpg",
    location: "Portland Art Museum, Portland, OR, United States",
    openingHours: "10 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.7,
    tags: ["cultural", "historical"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,
    isFree: false,
  },
];
