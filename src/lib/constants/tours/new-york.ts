import { Tour } from "@/lib/interfaces/services/tours";

const newYorkTours: Tour[] = [
  {
    title: "Hidden New York: Secret Spaces & Underground Art",
    description:
      "Discover the city beneath the city with exclusive access to secret subway stations, abandoned tunnels, and underground art installations rarely seen by tourists or even locals.",
    images: [
      "/images/tours/new-york/city-hall-station.jpg",
      "/images/tours/new-york/underground-art.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Underground", "History", "Art"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Alex Winters",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour physically demanding?",
        answer:
          "The tour involves moderate walking (about 2 miles total) and climbing several flights of stairs. While we maintain a comfortable pace with breaks, participants should be able to handle standing for periods of time and navigating urban terrain including some narrow passages.",
      },
    ],
  },
  {
    title: "Manhattan Skyline Helicopter & VIP Observation Deck",
    description:
      "Experience New York from extraordinary perspectives with a private helicopter tour over Manhattan landmarks, followed by champagne at exclusive top-floor observation decks with zero waiting time.",
    images: [
      "/images/tours/new-york/helicopter-view.jpg",
      "/images/tours/new-york/edge-observation.jpg",
    ],
    duration: "3 hours",
    price: "$395",
    rating: 4.8,
    tags: ["Aerial", "Skyline", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Michael Rodriguez",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Can we request specific flight paths over landmarks?",
        answer:
          "Yes, while flight paths must adhere to FAA regulations, we can customize the route to focus on landmarks of particular interest to your group. Please note that weather conditions may occasionally require route adjustments for safety.",
      },
    ],
  },
];

export default newYorkTours;
