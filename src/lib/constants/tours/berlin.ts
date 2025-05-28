import { Tour } from "@/lib/interfaces/services/tours";

const berlinTours: Tour[] = [
  {
    title: "Berlin Cold War History & Underground Bunkers",
    description:
      "Explore Berlin's dramatic Cold War history with visits to the Berlin Wall, Checkpoint Charlie, and exclusive access to declassified underground bunkers and escape tunnels from the divided city era.",
    images: [
      "/images/tours/berlin/berlin-wall.jpg",
      "/images/tours/berlin/cold-war-bunker.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.9,
    tags: ["History", "Cold War", "Underground"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Hans Mueller",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are the underground bunkers accessible for everyone?",
        answer:
          "The bunker portion involves steep stairs and narrow passages with no elevator access. Those with mobility issues may find this challenging, but we can offer an alternative above-ground Cold War history route covering additional sites on request.",
      },
    ],
  },
  {
    title: "Berlin's Alternative Scene & Street Art",
    description:
      "Discover Berlin's world-famous counterculture with an insider tour of street art, urban gardens, artist squats, and underground clubs in the trendy neighborhoods of Kreuzberg and Friedrichshain.",
    images: [
      "/images/tours/berlin/street-art.jpg",
      "/images/tours/berlin/kreuzberg.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Alternative", "Art", "Urban"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nina Schneider",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour suitable for teenagers?",
        answer:
          "The tour is generally appropriate for older teenagers (16+) interested in contemporary culture and art. While we don't focus on controversial content, some street art may contain political themes or occasional mature imagery. Parents should use discretion based on their teen's maturity level.",
      },
    ],
  },
];

export default berlinTours;
