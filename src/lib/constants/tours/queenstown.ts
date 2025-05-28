import { Tour } from "@/lib/interfaces/services/tours";

const queenstownTours: Tour[] = [
  {
    title: "Milford Sound Fly-Cruise-Fly Experience",
    description:
      "Experience New Zealand's most spectacular natural wonder with a scenic flight over the Southern Alps to Milford Sound, followed by a premium cruise beneath towering waterfalls, and a return flight via a different scenic route.",
    images: [
      "/images/tours/queenstown/milford-sound-aerial.jpg",
      "/images/tours/queenstown/milford-cruise.jpg",
    ],
    duration: "5 hours",
    price: "$495",
    rating: 5.0,
    tags: ["Scenic Flight", "Fiord", "Natural Wonder"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain James Wilson",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is the scenic flight weather-dependent?",
        answer:
          "Yes, this experience requires suitable weather conditions for safe flying. If the flight portion cannot proceed, we offer alternatives including a full refund, rescheduling, or a premium coach journey to Milford Sound with additional scenic stops. Weather in the mountains can change rapidly, and our pilots provide constant assessment to ensure both safety and the best possible experience.",
      },
    ],
  },
  {
    title: "Lord of the Rings Filming Locations Adventure",
    description:
      "Journey into Middle-earth with visits to spectacular Lord of the Rings filming locations accessible only by 4WD vehicles, with a filmmaker guide sharing behind-the-scenes stories and helping recreate iconic movie scenes.",
    images: [
      "/images/tours/queenstown/glenorchy-mountains.jpg",
      "/images/tours/queenstown/lotr-location.jpg",
    ],
    duration: "Full day",
    price: "$235",
    rating: 4.9,
    tags: ["Film Locations", "Lord of the Rings", "4WD"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Mike Johnson",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which filming locations will we visit?",
        answer:
          "The tour visits multiple filming locations including the Forest of Lothlorien, the Misty Mountains, Isengard, Ithilien Camp, and sites where major battle scenes were filmed. Our specialist guide worked on the films and provides replica props and costumes for photo opportunities that let you recreate famous scenes in the exact locations where they were filmed.",
      },
    ],
  },
];

export default queenstownTours;
