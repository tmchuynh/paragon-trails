import { Tour } from "@/lib/interfaces/services/tours";

const salzburgTours: Tour[] = [
  {
    title: "Mozart's Salzburg & Musical Heritage",
    description:
      "Follow in the footsteps of Wolfgang Amadeus Mozart with a music historian guide, exploring his birthplace, residences, and performance venues, culminating in a private chamber concert in a historic palace.",
    images: [
      "/images/tours/salzburg/mozart-birthplace.jpg",
      "/images/tours/salzburg/mirabell-palace.jpg",
    ],
    duration: "4 hours",
    price: "$135",
    rating: 4.9,
    tags: ["Mozart", "Music", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Katharina Weber",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to know about classical music to enjoy this tour?",
        answer:
          "Not at all! Our guides make Mozart's world accessible to everyone, from complete beginners to classical music aficionados. The tour focuses on fascinating stories about Mozart's life and times in Salzburg, with music demonstrations that engage all audiences regardless of prior musical knowledge.",
      },
    ],
  },
  {
    title: "Sound of Music Film Locations & Alpine Scenery",
    description:
      "Experience the real-life settings of the beloved musical with visits to iconic filming locations throughout Salzburg and the stunning Lake District, complemented by behind-the-scenes stories and movie trivia.",
    images: [
      "/images/tours/salzburg/sound-of-music-meadow.jpg",
      "/images/tours/salzburg/mondsee-church.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Film Locations", "Scenic", "Musical"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maria Gruber",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we hear the Sound of Music songs during the tour?",
        answer:
          "Yes! Our tour includes an audio system playing the film's songs as we travel between locations, and your guide will share fascinating facts about the differences between the real von Trapp family story and the Hollywood version. You're welcome (and encouraged) to sing along during the panoramic drive through the lake district!",
      },
    ],
  },
];

export default salzburgTours;
