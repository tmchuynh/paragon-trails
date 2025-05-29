import { Tour } from "@/lib/interfaces/services/tours";

export const newOrleansTours: Tour[] = [
  {
    title: "French Quarter & Jazz History Tour",
    description:
      "Explore the historic French Quarter with a local musician who shares insider stories about New Orleans' rich jazz heritage, iconic landmarks, and unique architecture.",
    images: [
      "/images/tours/new-orleans/french-quarter.jpg",
      "/images/tours/new-orleans/preservation-hall.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Jazz", "History", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marcus Baptiste",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will there be opportunities to hear live music?",
        answer:
          "Yes, the tour includes brief stops at 2-3 venues where you'll hear snippets of live performances, culminating with an optional longer stay at Preservation Hall.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly. We provide engaging stories and activities to keep children entertained while learning about the history of jazz.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Wear comfortable walking shoes and weather-appropriate clothing. The French Quarter can be hot and humid, so light fabrics are recommended.",
      },
    ],
  },
  {
    title: "Haunted New Orleans Evening Ghost Tour",
    description:
      "Discover the darker side of New Orleans' history with chilling tales of ghosts, vampires, and voodoo as you explore haunted locations by lantern light.",
    images: [
      "/images/tours/new-orleans/cemetery.jpg",
      "/images/tours/new-orleans/haunted-mansion.jpg",
    ],
    duration: "2 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Paranormal", "Evening", "Storytelling"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Marie Laveau",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "How scary is this tour?",
        answer:
          "The tour focuses on historical storytelling rather than jump scares. However, some stories are macabre and not suitable for young children or those sensitive to such content.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring a flashlight or smartphone for better visibility in darker areas, and wear comfortable shoes as we will be walking on uneven surfaces.",
      },
      {
        question: "Is the tour wheelchair accessible?",
        answer:
          "Unfortunately, the tour includes some uneven terrain and steps, making it difficult for wheelchair users. We can recommend alternative accessible tours in the area.",
      },
    ],
  },
];

export default newOrleansTours;
