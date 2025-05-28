import { Tour } from "@/lib/interfaces/services/tours";

export const londonTours: Tour[] = [
  {
    title: "Royal London & Changing of the Guard",
    description:
      "Experience the pageantry of British royal tradition with prime viewing of the Changing of the Guard and tours of royal landmarks.",
    images: [
      "/images/tours/london/buckingham-palace.jpg",
      "/images/tours/london/changing-guard.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Royal", "Historical", "Ceremonial"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Elizabeth Howard",
    tourCategoryId: "royal-expert",
    faqs: [
      {
        question: "Does this tour go inside Buckingham Palace?",
        answer:
          "The tour includes exterior views year-round, but interior access is available only during the summer opening (typically August-September) for an additional fee.",
      },
    ],
  },
  {
    title: "Harry Potter's London: Film Locations & Magic",
    description:
      "Follow in the footsteps of The Boy Who Lived with this magical tour of London locations featured in the Harry Potter films.",
    images: [
      "/images/tours/london/platform-934.jpg",
      "/images/tours/london/diagon-alley.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Harry Potter", "Film", "Family"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Oliver Bennett",
    tourCategoryId: "film-expert",
    faqs: [
      {
        question:
          "Is this tour suitable for people who haven't read the books?",
        answer:
          "Absolutely! While fans will recognize many references, the tour is enjoyable for anyone interested in seeing iconic London locations and hearing behind-the-scenes filmmaking stories.",
      },
    ],
  },
];

export default londonTours;
