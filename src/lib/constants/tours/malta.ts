import { Tour } from "@/lib/interfaces/services/tours";
export const maltaTours: Tour[] = [
  {
    title: "Ancient Malta: Temples & Medieval Cities",
    description:
      "Explore Malta's remarkable history spanning 7,000 years, from prehistoric megalithic temples to the medieval walled city of Mdina, with an archaeologist guide bringing ancient stories to life.",
    images: [
      "/images/tours/malta/hagar-qim-temple.jpg",
      "/images/tours/malta/mdina.jpg",
    ],
    duration: "7 hours",
    price: "$120",
    rating: 4.9,
    tags: ["History", "Archaeology", "UNESCO"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Joseph Calleja",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How old are the temples we'll visit?",
        answer:
          "The megalithic temples on Malta date from 3600-2500 BCE, making them among the oldest free-standing stone structures in the world - older than Stonehenge or the Egyptian pyramids. They represent remarkable engineering achievements for their time.",
      },
    ],
  },
  {
    title: "Hidden Coves & Blue Lagoon Boat Tour",
    description:
      "Discover Malta's stunning coastline aboard a traditional luzzu fishing boat, visiting secluded swimming spots, sea caves, and the famous Blue Lagoon away from the tourist crowds.",
    images: [
      "/images/tours/malta/blue-lagoon.jpg",
      "/images/tours/malta/sea-caves.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Boat Tour", "Swimming", "Coastal"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Marco Bonnici",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we have time for swimming?",
        answer:
          "Yes, the tour includes several swimming and snorkeling stops of 30-45 minutes each at different locations. We provide snorkeling equipment, and our captain knows the best spots based on daily conditions and away from larger tour boats.",
      },
    ],
  },
];

export default maltaTours;
