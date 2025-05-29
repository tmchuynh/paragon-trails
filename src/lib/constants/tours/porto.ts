import { Tour } from "@/lib/interfaces/services/tours";
export const portoTours: Tour[] = [
  {
    title: "Port Wine Cellars & Douro Valley",
    description:
      "Embark on a journey through Portugal's renowned wine region with private tastings in historic Port wine lodges, followed by a scenic Douro Valley tour with vineyard visits and a traditional Portuguese lunch overlooking terraced hillsides.",
    images: [
      "/images/tours/porto/port-wine-cellar.jpg",
      "/images/tours/porto/douro-valley.jpg",
    ],
    duration: "8 hours",
    price: "$175",
    rating: 4.9,
    tags: ["Wine", "Port", "Valley"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "João Pereira",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Port wine unique?",
        answer:
          "Port is a fortified wine exclusively produced in the Douro Valley region. During the tour, you'll learn about its unique production method involving adding grape brandy during fermentation, the various styles (Ruby, Tawny, White, etc.), aging requirements, and the fascinating history of British merchant families who established many of the famous Port houses you'll visit.",
      },
    ],
  },
  {
    title: "Porto's Hidden Treasures & Riverside Heritage",
    description:
      "Explore Porto's UNESCO-listed historic center with a local historian, discovering hidden corners, architectural gems, and authentic neighborhoods beyond the tourist trail, including the stunning riverside Ribeira district.",
    images: [
      "/images/tours/porto/ribeira-district.jpg",
      "/images/tours/porto/hidden-porto.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Historical", "UNESCO", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Maria Santos",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km with some steep hills and staircases, as Porto is built on different levels rising from the river. We take a relaxed pace with plenty of stops, but comfortable footwear is essential. For those with mobility concerns, we can arrange a modified version using public transportation for some portions.",
      },
    ],
  },
];

export default portoTours;
