import { Tour } from "@/lib/interfaces/services/tours";

export const viennaTours: Tour[] = [
  {
    title: "Classical Vienna & Private Concert",
    description:
      "Immerse yourself in the musical heritage of Vienna with a distinguished musicologist, visiting the homes of Mozart and Beethoven, followed by a private chamber concert in a historic palace with champagne reception.",
    city: "Vienna",
    country: "Austria",
    region: "Vienna State",
    images: [
      "/images/tours/vienna/mozart-house.jpg",
      "/images/tours/vienna/palace-concert.jpg",
    ],
    duration: "4 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Classical Music", "Cultural", "Exclusive"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need to know about classical music to enjoy this tour?",
        answer:
          "Not at all! Our musicologist guides are experts at making classical music accessible and engaging for everyone. The tour provides historical and cultural context that brings the music to life regardless of your prior knowledge. The private concert features well-known pieces with brief, engaging introductions that enhance your appreciation of each composition.",
      },
    ],
  },
  {
    title: "Imperial Vienna & Habsburg Treasures",
    description:
      "Experience the grandeur of the Habsburg Empire with private access to imperial apartments in Schönbrunn Palace, the Imperial Treasury's crown jewels, and the Spanish Riding School with a historian specializing in royal history.",
    city: "Vienna",
    country: "Austria",
    region: "Vienna State",
    images: [
      "/images/tours/vienna/schonbrunn-palace.jpg",
      "/images/tours/vienna/imperial-crown.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Royal History", "Palace", "Habsburg"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this palace tour different from standard visits?",
        answer:
          "Our tour includes exclusive access to the private imperial apartments not open to general visitors, including Franz Joseph and Empress Elisabeth's personal chambers with original furnishings. We also visit the palace during quieter hours and gain special access to the Lipizzaner stables at the Spanish Riding School where you can meet these majestic horses up close - something regular visitors cannot experience.",
      },
    ],
  },
  {
    title: "Vienna's Hidden Art Scene & Street Art Tour",
    description:
      "Explore Vienna's vibrant contemporary art scene with a local artist, visiting hidden galleries, street art hotspots, and artist studios in the creative districts of Neubau and Mariahilf.",
    city: "Vienna",
    country: "Austria",
    region: "Vienna State",
    images: [
      "/images/tours/vienna/street-art.jpg",
      "/images/tours/vienna/contemporary-gallery.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Art", "Street Art", "Contemporary"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive street art and hands-on activities. We can also provide kid-friendly art materials for younger participants.",
      },
      {
        question: "Do we need to walk a lot during the tour?",
        answer:
          "The tour covers approximately 2 km (1.2 miles) at a leisurely pace with plenty of stops to explore artworks and galleries. Comfortable walking shoes are recommended.",
      },
    ],
  },
];

export default viennaTours;
