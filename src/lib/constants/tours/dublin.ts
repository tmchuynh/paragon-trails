import { Tour } from "@/lib/interfaces/services/tours";

const dublinTours: Tour[] = [
  {
    title: "Literary Dublin: Pubs & Poetry",
    description:
      "Follow in the footsteps of Joyce, Yeats, and Wilde through Dublin's literary landmarks, enjoying private access to rare manuscripts and ending with storytelling in historic pubs frequented by famous authors.",
    images: [
      "/images/tours/dublin/trinity-library.jpg",
      "/images/tours/dublin/literary-pub.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Literary", "Pubs", "History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Seamus O'Brien",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to have read Irish literature to enjoy this tour?",
        answer:
          "Not at all! Our guide brings the stories and characters to life regardless of your familiarity with the works. The tour focuses on the colorful lives of the authors, the historical context, and the city's enduring literary tradition in an engaging way for all.",
      },
    ],
  },
  {
    title: "Whiskey Masterclass & Distillery Experience",
    description:
      "Delve into Ireland's whiskey heritage with expert-led tastings at historic and craft distilleries, learning production secrets, proper tasting techniques, and the story behind each distinctive Irish blend.",
    images: [
      "/images/tours/dublin/whiskey-tasting.jpg",
      "/images/tours/dublin/jameson-distillery.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Whiskey", "Tasting", "Craft"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Liam Murphy",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Irish whiskey different from Scotch?",
        answer:
          "This is exactly what you'll learn in detail during the tour! The key differences include triple distillation in Ireland versus typically double in Scotland, the use of unmalted barley in many Irish whiskeys, and the absence of peat smoke in most Irish varieties. You'll taste these differences across multiple samples.",
      },
    ],
  },
];

export default dublinTours;
