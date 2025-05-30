import { Attraction } from "@/lib/interfaces/services/attractions";

export const denpasarBaliIndonesia: Attraction[] = [
  {
    title: "Bali Museum",
    description:
      "A museum showcasing the rich cultural heritage of Bali, featuring traditional artifacts and art.",
    imageUrl: "https://plus.unsplash.com/bali-museum.jpg",
    location: "Jl. Mayor Wisnu, Denpasar, Bali",
    openingHours: "9 AM - 5 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.5,
    tags: ["cultural", "historical"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
    isHistorical: true,
  },
  {
    title: "Bajra Sandhi Monument",
    description:
      "A monument dedicated to the struggles of the Balinese people, offering panoramic views of the city.",
    imageUrl: "https://plus.unsplash.com/bajra-sandhi.jpg",
    location: "Jl. Raya Puputan No.142, Denpasar, Bali",
    openingHours: "8 AM - 6 PM",
    priceRange: "$$",
    priceCategory: "moderate",
    timeOfDay: "daytime",
    rating: 4.6,
    tags: ["historical", "monument"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
  {
    title: "Puputan Badung Square",
    description:
      "A central square in Denpasar, perfect for relaxation and enjoying local events.",
    imageUrl: "https://plus.unsplash.com/puputan-square.jpg",
    location: "Jl. Raya Puputan, Denpasar, Bali",
    openingHours: "Open 24 hours",
    priceRange: "$",
    priceCategory: "free",
    timeOfDay: "all day",
    rating: 4.4,
    tags: ["adventure", "cultural"],
    accessibilityFeatures: ["wheelchair accessible"],
    isPopular: true,

    isFree: true,
    isPetFriendly: true,
    isWheelchairAccessible: true,
    isHistorical: false,
  },
  {
    title: "Bali Nusa Dua Theatre - Devdan Show",
    description:
      "A spectacular cultural performance combining traditional and contemporary dance, acrobatics, and special effects showcasing Indonesia's cultural diversity.",
    imageUrl: "https://plus.unsplash.com/bali-devdan-show.jpg",
    location: "ITDC Complex, Nusa Dua, Bali",
    openingHours: "Shows at 7:30 PM on Monday, Wednesday, Friday, and Saturday",
    entryFee: "IDR 500,000 - 1,200,000 (depending on seat category)",
    priceRange: "$$",
    priceCategory: "moderate",
    entryFeeCategory: "moderate",
    timeOfDay: "evening",
    rating: 4.7,
    tags: [ "cultural"],
    accessibilityFeatures: ["wheelchair accessible", "assistance available"],
    isPopular: true,

    isFree: false,
    isPetFriendly: false,
    isWheelchairAccessible: true,
  },
];
