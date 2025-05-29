import { Tour } from "@/lib/interfaces/services/tours";
export const londonTours: Tour[] = [
  {
    title: "Hidden London Underground & Wartime Secrets",
    description:
      "Explore abandoned tube stations, Churchill's secret bunkers, and hidden tunnels beneath London with exclusive access to sites normally closed to the public, guided by a historian specializing in London's wartime history.",
    images: [
      "/images/tours/london/abandoned-station.jpg",
      "/images/tours/london/churchill-war-rooms.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["History", "Underground", "WWII"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Emma Harrison",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for those with claustrophobia?",
        answer:
          "Some sections of the tour involve narrow passageways and enclosed underground spaces. While we never enter extremely confined areas, those with severe claustrophobia may find certain portions challenging. Please contact us to discuss specific concerns before booking.",
      },
      {
        question: "What should I wear for the underground tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as some areas can be damp and cool. A light jacket is advisable, and please bring a flashlight if you have one, though we will provide torches.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 10 and up. Younger children may find the underground spaces less engaging, but we can adapt the content for younger audiences upon request.",
      },
    ],
  },
  {
    title: "Royal London & Changing of the Guard Experience",
    description:
      "Witness royal ceremonies from insider positions, tour the ceremonial heart of London, and learn about royal traditions from an expert with connections to royal institutions.",
    images: [
      "/images/tours/london/changing-guard.jpg",
      "/images/tours/london/buckingham-palace.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Royal", "Ceremony", "Tradition"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "James Spencer",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the Changing of the Guard guaranteed?",
        answer:
          "The ceremony takes place on specific days (generally Monday, Wednesday, Friday, and Sunday) and can be canceled in poor weather or due to state events. We monitor the schedule carefully and adjust the tour if needed, focusing on other royal sites and ceremonies if the main changing isn't occurring.",
      },
      {
        question: "Can we enter Buckingham Palace during the tour?",
        answer:
          "Buckingham Palace is not open to the public during the Changing of the Guard ceremony. However, we will visit the exterior and discuss its history and architecture. If you wish to enter the State Rooms, we can arrange tickets for a separate visit when they are open to the public (typically in summer).",
      },
    ],
  },
];

export default londonTours;
