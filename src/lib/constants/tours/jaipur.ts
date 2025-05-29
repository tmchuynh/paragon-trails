import { Tour } from "@/lib/interfaces/services/tours";
export const jaipurTours: Tour[] = [
  {
    title: "Royal Amber Fort & Palace Elegance",
    description:
      "Journey through Jaipur's royal heritage with a private tour of magnificent Amber Fort, followed by exclusive access to City Palace's royal apartments and a traditional Rajasthani dinner with folk performances.",
    images: [
      "/images/tours/jaipur/amber-fort.jpg",
      "/images/tours/jaipur/city-palace.jpg",
    ],
    duration: "Full day",
    price: "$165",
    rating: 4.9,
    tags: ["Royal", "Palaces", "Heritage"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maharaj Singh Shekhawat",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is the elephant ride to Amber Fort ethical?",
        answer:
          "We've discontinued elephant rides in favor of jeep transportation to the fort entrance, supporting more humane animal tourism practices. For those interested in ethical elephant encounters, we can arrange a separate visit to a reputable elephant sanctuary where these magnificent animals are properly cared for.",
      },
      {
        question: "What should I wear for the palace tour?",
        answer:
          "We recommend comfortable, breathable clothing suitable for warm weather. Please dress modestly when visiting religious sites within the palace complex. A hat and sunscreen are advisable.",
      },
    ],
  },
  {
    title: "Artisan Workshops & Textile Heritage",
    description:
      "Discover the living crafts of Jaipur with exclusive access to master artisan workshops specializing in block printing, blue pottery, gemstone cutting, and traditional Rajasthani textile techniques passed down through generations.",
    images: [
      "/images/tours/jaipur/block-printing.jpg",
      "/images/tours/jaipur/blue-pottery.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Crafts", "Textiles", "Artisans"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lakshmi Devi",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Can we try some of the crafts ourselves?",
        answer:
          "Yes, this hands-on tour includes opportunities to try block printing on a handkerchief, shaping a small piece of blue pottery, and learning the basics of traditional Rajasthani tie-dye techniques. These participatory experiences are designed for beginners and make wonderful memories along with the items you create.",
      },
      {
        question: "Are the workshops suitable for children?",
        answer:
          "Absolutely! The workshops are family-friendly and designed to be engaging for all ages. Children will enjoy the interactive nature of the crafts, and our artisans are experienced in working with young learners.",
      },
    ],
  },
];

export default jaipurTours;
