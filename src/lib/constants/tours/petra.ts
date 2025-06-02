import { Tour } from "@/lib/interfaces/services/tours";

export const petraTours: Tour[] = [
  {
    title: "Petra by Night: Candlelit Treasury Experience",
    description:
      "Experience the magic of Petra after dark as the ancient city is illuminated by thousands of candles, creating an unforgettable atmosphere as you walk through the Siq to the Treasury and listen to traditional Bedouin music.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/petra-by-night.jpg",
      "/images/tours/petra/treasury-candles.jpg",
    ],
    duration: "2 hours",
    price: "$35",
    rating: 4.9,
    tags: ["Night Tour", "Atmospheric", "Cultural"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
  },
  {
    title: "Petra Archaeological Tour with Expert Guide",
    description:
      "Delve deep into the history and archaeology of the ancient Nabataean city with an expert archaeologist guide, discovering hidden details and exploring lesser-visited monuments beyond the main trail.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/archaeological-tour.jpg",
      "/images/tours/petra/hidden-monuments.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Archaeological", "Educational", "Historical"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
  },
  {
    title: "Monastery Trail & High Places Hike",
    description:
      "Challenge yourself with a guided hike to Petra's Monastery (Ad-Deir) and the High Place of Sacrifice, venturing off the main tourist paths to discover spectacular viewpoints and hidden carvings with a Bedouin mountain guide.",
    city: "Petra",
    country: "Jordan",
    region: "Ma'an Governorate",
    images: [
      "/images/tours/petra/monastery.jpg",
      "/images/tours/petra/high-place.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Hiking", "Adventure", "Views"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
];

export default petraTours;
