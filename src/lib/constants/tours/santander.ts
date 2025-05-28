import { Tour } from "@/lib/interfaces/services/tours";

const santanderTours: Tour[] = [
  {
    title: "Cantabrian Coastal Treasures",
    description:
      "Explore northern Spain's stunning coastline with visits to pristine beaches, dramatic cliffs, and the charming fishing villages of Santillana del Mar and San Vicente de la Barquera.",
    images: [
      "/images/tours/santander/santillana-del-mar.jpg",
      "/images/tours/santander/coastal-views.jpg",
    ],
    duration: "7 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Coastal", "Villages", "Nature"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Elena Rodriguez",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we have time for swimming?",
        answer:
          "Yes, during summer months (June-September) we include time for swimming at one of the beautiful beaches along the route. In cooler months, we focus more on coastal walks, viewpoints, and cultural experiences in the villages.",
      },
    ],
  },
  {
    title: "Picos de Europa Mountain Adventure",
    description:
      "Journey into the spectacular Picos de Europa mountains to discover dramatic gorges, traditional mountain villages, and authentic Cantabrian cuisine featuring local cheeses and cider.",
    images: [
      "/images/tours/santander/picos-mountains.jpg",
      "/images/tours/santander/cantabrian-cuisine.jpg",
    ],
    duration: "9 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Mountains", "Nature", "Gastronomy"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Carlos Mendez",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the hiking portion?",
        answer:
          "The tour includes several short walks (20-30 minutes each) on well-maintained paths with mild elevation changes. No technical hiking skills are required, but comfortable walking shoes are essential. For those interested in more challenging hikes, we can arrange custom extensions.",
      },
    ],
  },
];

export default santanderTours;
