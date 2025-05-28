import { Tour } from "@/lib/interfaces/services/tours";

const liverpoolTours: Tour[] = [
  {
    title: "Beatles Magical Mystery Tour",
    description:
      "Journey through Beatles history with a local music expert visiting significant sites including Penny Lane, Strawberry Field, childhood homes, and exclusive after-hours access to the famous Cavern Club.",
    images: [
      "/images/tours/liverpool/penny-lane.jpg",
      "/images/tours/liverpool/cavern-club.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Beatles", "Music History", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Pete Harrison",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we go inside the Beatles' childhood homes?",
        answer:
          "Our tour includes exterior visits to John Lennon and Paul McCartney's childhood homes. For an additional fee, we can arrange interior access to these National Trust properties, but this requires advanced booking as visitor numbers are strictly limited.",
      },
    ],
  },
  {
    title: "Liverpool Maritime Heritage & Waterfront",
    description:
      "Explore Liverpool's UNESCO World Heritage waterfront with a maritime historian, visiting historic docks, learning about the city's shipping legacy, and enjoying exclusive access to restored merchant vessels.",
    images: [
      "/images/tours/liverpool/albert-dock.jpg",
      "/images/tours/liverpool/maritime-museum.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Maritime", "UNESCO", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Henry Wilson",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour related to the Titanic?",
        answer:
          "Yes, we cover Liverpool's connections to the Titanic — the ship was registered here and the White Star Line had its headquarters in the city. While the ship itself departed from Southampton, many of the crew were Liverpudlians, and we visit memorials and discuss the city's relationship to this historic vessel.",
      },
    ],
  },
];

export default liverpoolTours;
