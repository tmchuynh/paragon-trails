import { Tour } from "@/lib/interfaces/services/tours";
export const glasgowTours: Tour[] = [
  {
    title: "Glasgow Music Heritage & Secret Venues",
    description:
      "Explore Glasgow's legendary music scene with a local musician, visiting iconic venues, hidden underground clubs, and famous recording studios that shaped genres from post-punk to contemporary indie.",
    images: [
      "/images/tours/glasgow/barrowland.jpg",
      "/images/tours/glasgow/king-tuts.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Music", "Nightlife", "Cultural"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Callum MacGregor",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we hear live music during the tour?",
        answer:
          "The daytime tour includes brief acoustic performances by your guide at select locations. Evening tours typically include a stop at a venue with live music, though specific performances vary by date.",
      },
    ],
  },
  {
    title: "Charles Rennie Mackintosh Architectural Trail",
    description:
      "Discover the revolutionary designs of Glasgow's most celebrated architect with exclusive access to Mackintosh buildings, including private areas of the Glasgow School of Art and House for an Art Lover.",
    images: [
      "/images/tours/glasgow/mackintosh-school.jpg",
      "/images/tours/glasgow/house-for-art-lover.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Architecture", "Design", "Art Nouveau"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Fiona Campbell",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What makes Mackintosh's work so significant?",
        answer:
          "Charles Rennie Mackintosh was a pioneering designer whose work bridged Art Nouveau and Modernism. His distinctive style combining elegant simplicity with complex detail influenced architecture and design worldwide. Glasgow contains his most complete and best-preserved works.",
      },
    ],
  },
];

export default glasgowTours;
