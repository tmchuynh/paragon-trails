import { Tour } from "@/lib/interfaces/services/tours";
export const berlinTours: Tour[] = [
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
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and suitable for older children (10+). We provide age-appropriate historical context, but parents should be aware that some Cold War topics may be intense. Younger children may find the content less engaging.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "We recommend comfortable walking shoes and weather-appropriate clothing, as we will be outdoors for part of the tour. The bunker can be cool and damp, so a light jacket is advisable.",
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
      {
        question: "Will we visit any galleries or exhibitions?",
        answer:
          "Yes, we often include visits to local artist-run galleries or pop-up exhibitions showcasing emerging talent. However, the focus is primarily on outdoor street art and urban culture rather than formal gallery spaces.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will be exploring neighborhoods on foot. Dress casually and be prepared for variable weather, as we may spend time outdoors in urban settings.",
      },
    ],
  },
];

export default berlinTours;
