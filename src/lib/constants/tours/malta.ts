import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("malta", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How old are the temples we'll visit?",
        answer:
          "The megalithic temples on Malta date from 3600-2500 BCE, making them among the oldest free-standing stone structures in the world - older than Stonehenge or the Egyptian pyramids. They represent remarkable engineering achievements for their time.",
      },
      {
        question: "Is the tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We provide engaging historical context and activities to keep children interested, and the sites are accessible for all ages.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("malta", "adventure").name,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we have time for swimming?",
        answer:
          "Yes, the tour includes several swimming and snorkeling stops of 30-45 minutes each at different locations. We provide snorkeling equipment, and our captain knows the best spots based on daily conditions and away from larger tour boats.",
      },
      {
        question: "What should I bring for the boat tour?",
        answer:
          "We recommend wearing a swimsuit, sunscreen, a hat, and bringing a towel. Water and light snacks are provided, but feel free to bring your own refreshments. A light jacket is advisable for the boat ride.",
      },
      {
        question: "Is the boat suitable for children?",
        answer:
          "Yes, our traditional luzzu is family-friendly with stable seating and safety features. Children will enjoy the swimming stops and exploring the coastal caves.",
      },
    ],
  },
  {
    title: "Valletta: History & Culture Walking Tour",
    description:
      "Experience the rich history of Malta's capital with a guided walking tour through Valletta's narrow streets, visiting St. John's Co-Cathedral, the Grand Master's Palace, and local artisan shops.",
    images: [
      "/images/tours/malta/valletta-st-johns.jpg",
      "/images/tours/malta/grand-masters-palace.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Walking Tour", "Culture", "UNESCO"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("malta", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What will we see in Valletta?",
        answer:
          "The tour includes visits to St. John's Co-Cathedral, the Upper Barracca Gardens, the Grand Master's Palace, and hidden gems like local artisan shops and traditional cafes.",
      },
      {
        question: "Is this tour suitable for those with mobility issues?",
        answer:
          "Valletta's streets are cobbled and can be steep in places. We recommend comfortable walking shoes, but the tour can be adjusted for those with limited mobility by focusing on accessible areas.",
      },
      {
        question: "Do we need to book tickets in advance?",
        answer:
          "Yes, we include skip-the-line tickets for St. John's Co-Cathedral in the tour price to ensure you spend more time exploring and less time waiting.",
      },
    ],
  },
];

export default maltaTours;
