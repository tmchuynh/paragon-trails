import { Attraction } from "@/lib/interfaces/services/attractions";

export const hoChiMinhSouthernVietnamVietnam: Attraction[] = [
  {
    title: "War Remnants Museum",
    description:
      "A museum dedicated to the history of the Vietnam War, featuring exhibits on the war's impact on Vietnam and its people.",
    imageUrl: "https://plus.unsplash.com/war-remnants-museum.jpg",
    location: "28 Vo Van Tan, District 3, Ho Chi Minh City",
    openingHours: "7:30 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["historical", ],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Ben Thanh Market",
    description:
      "A bustling market offering a wide range of goods, from local handicrafts to fresh produce.",
    imageUrl: "https://plus.unsplash.com/ben-thanh-market.jpg",
    location: "Le Loi, Ben Thanh Ward, District 1, Ho Chi Minh City",
    openingHours: "6 AM - 6 PM",
    priceRange: "$",
    priceCategory: "budget",
    timeOfDay: "daytime",
    rating: 4.4,
    tags: ["cultural", "local"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
  },
  {
    title: "Saigon Notre-Dame Basilica",
    description:
      "A stunning French colonial cathedral located in the heart of Ho Chi Minh City.",
    imageUrl: "https://plus.unsplash.com/saigon-notre-dame-basilica.jpg",
    location: "1 Cong Xa Paris, Ben Nghe Ward, District 1, Ho Chi Minh City",
    openingHours: "8 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["spiritual", "historical", "architectural"],
    accessibilityFeatures: ["limited accessibility"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isHistorical: true,
  },
  {
    title: "Social Club Rooftop Bar & Restaurant",
    description:
      "An exclusive fine dining venue atop the Reverie Saigon hotel offering panoramic city views, exquisite international cuisine, and a curated wine selection with personalized sommelier service.",
    imageUrl: "https://plus.unsplash.com/social-club-rooftop.jpg",
    location: "22-36 Nguyen Hue Boulevard, District 1, Ho Chi Minh City",
    openingHours: "5 PM - 2 AM",
    entryFee: "Dinner from $150 per person",
    priceRange: "$$$",
    priceCategory: "expensive",
    timeOfDay: "evening",
    rating: 4.8,
    tags: ["luxury", "culinary", "nightlife"],
    accessibilityFeatures: ["elevator access"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
