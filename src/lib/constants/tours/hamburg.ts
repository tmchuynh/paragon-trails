import { Tour } from "@/lib/interfaces/services/tours";

const hamburgTours: Tour[] = [
  {
    title: "Hamburg Harbor & Maritime Heritage",
    description:
      "Experience Hamburg's identity as Germany's Gateway to the World with a private harbor cruise, visits to historic warehouses in the UNESCO Speicherstadt district, and exclusive access to maritime museums with a naval historian.",
    images: [
      "/images/tours/hamburg/harbor-cruise.jpg",
      "/images/tours/hamburg/speicherstadt.jpg",
    ],
    duration: "5 hours",
    price: "$125",
    rating: 4.8,
    tags: ["Maritime", "Harbor", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Klaus Schmidt",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we see container ships being loaded?",
        answer:
          "Yes, our harbor cruise takes you through the working sections of Europe's third-largest port, where you'll witness the impressive loading operations of massive container ships up close. Our vessel has special access permissions to navigate closer to these operations than regular tourist boats, providing a fascinating glimpse into global maritime commerce.",
      },
    ],
  },
  {
    title: "Hamburg After Dark: Reeperbahn & Music Scene",
    description:
      "Discover the vibrant nightlife of St. Pauli and explore the district where the Beatles began their career, with VIP access to legendary music clubs, followed by craft cocktails in hidden speakeasy bars known only to locals.",
    images: [
      "/images/tours/hamburg/reeperbahn-night.jpg",
      "/images/tours/hamburg/music-club.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Nightlife", "Music", "Beatles History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Julia Wagner",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour only about the party scene?",
        answer:
          "No, while we do explore the entertainment district, this tour focuses on Hamburg's rich music history and cultural significance. We visit historic sites where the Beatles performed in their early days, explore venues that shaped Germany's music scene, and discover architectural and artistic aspects of the area. The cocktail experiences focus on craft mixology rather than excessive drinking.",
      },
    ],
  },
];

export default hamburgTours;
