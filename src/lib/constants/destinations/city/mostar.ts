import { Attraction } from "@/lib/interfaces/services/attractions";

export const mostarFederationOfBosniaAndHerzegovinaBosniaAndHerzegovina: Attraction[] =
  [
    {
      title: "Stari Most (Old Bridge)",
      description:
        "A UNESCO World Heritage site, this iconic 16th-century Ottoman bridge is a symbol of Mostar and a masterpiece of Islamic architecture.",
      imageUrl: "https://plus.unsplash.com/stari-most.jpg",
      location: "Mostar, Bosnia and Herzegovina",
      openingHours: "Open 24 hours",
      entryFee: "Free",
      entryFeeCategory: "free",
      priceRange: "free",
      priceCategory: "free",
      timeOfDay: "all day",
      rating: 4.9,
      tags: ["historical", "cultural", "iconic"],
      accessibilityFeatures: ["limited accessibility"],
      isPopular: true,

      isFree: true,
      isPetFriendly: true,
      isWheelchairAccessible: false,
      isHistorical: true,
    },
    {
      title: "Koski Mehmed Pasha Mosque",
      description:
        "An Ottoman-era mosque known for its stunning minaret and panoramic views of the city from the top.",
      imageUrl: "https://plus.unsplash.com/koski-mehmed-pasha-mosque.jpg",
      location: "Koski Mehmed Pasha Mosque, Mostar",
      openingHours: "9 AM - 6 PM",
      entryFee: "5 BAM",
      priceRange: "$",
      priceCategory: "budget",
      timeOfDay: "daytime",
      rating: 4.7,
      tags: ["religious", "cultural", "views"],
      accessibilityFeatures: ["limited accessibility"],
      isPopular: true,

      isFree: false,
      isPetFriendly: false,
      isWheelchairAccessible: false,
      isHistorical: true,
    },
    {
      title: "Exclusive Heritage Villa Retreat",
      description:
        "A meticulously restored Ottoman-era villa offering private cultural experiences, including personal chef preparing traditional Herzegovinian cuisine, exclusive access to local artisans' workshops, and customized tours of hidden historical sites.",
      imageUrl: "https://plus.unsplash.com/mostar-luxury-villa.jpg",
      location: "Private Location, Historic Mostar",
      openingHours: "By reservation only",
      entryFee: "From €750 per night",
      priceRange: "$$$",
      priceCategory: "expensive",
      timeOfDay: "all day",
      rating: 4.9,
      tags: ["luxury", "heritage", "exclusive"],
      accessibilityFeatures: ["limited accessibility"],
      isPopular: false,

      isFree: false,
      isPetFriendly: false,
      isWheelchairAccessible: false,
      isHistorical: true,
    },
  ];
