import { Tour } from "@/lib/interfaces/services/tours";

const santiagoTours: Tour[] = [
  {
    title: "Chilean Wine Journey & Vineyard Experience",
    description:
      "Discover Chile's world-renowned wines with a sommelier guide leading private tastings at prestigious vineyards in the Maipo Valley, including barrel sampling, blending workshops, and a gourmet lunch amidst the vines.",
    images: [
      "/images/tours/santiago/vineyard-views.jpg",
      "/images/tours/santiago/wine-tasting.jpg",
    ],
    duration: "Full day",
    price: "$195",
    rating: 4.9,
    tags: ["Wine", "Vineyard", "Tasting"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Sofia Rodriguez",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Which wine varieties will we focus on?",
        answer:
          "Chile is famous for its outstanding Cabernet Sauvignon and Carmenere (a grape variety nearly extinct in its original French homeland but thriving in Chile). Our tour focuses on these signature varieties while also introducing you to excellent Syrah, Merlot, and some innovative white wines. The experience is designed to showcase how Chile's diverse microclimates produce distinctly different expressions of these varieties.",
      },
    ],
  },
  {
    title: "Andes Mountains & Hot Springs Adventure",
    description:
      "Journey into the majestic Andes Mountains for spectacular scenery, wildlife spotting, and relaxation in natural hot springs, with a traditional Chilean mountain lunch prepared by local communities.",
    images: [
      "/images/tours/santiago/andes-mountains.jpg",
      "/images/tours/santiago/hot-springs.jpg",
    ],
    duration: "Full day",
    price: "$165",
    rating: 4.8,
    tags: ["Mountains", "Hot Springs", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Mateo Gonzalez",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How high in altitude will we go?",
        answer:
          "The tour reaches approximately 2,500 meters (8,200 feet) above sea level. While this is high enough for spectacular mountain views and to see the dramatic landscape change, it's not high enough to cause altitude sickness for most people. We ascend gradually with stops along the way to help you acclimate comfortably.",
      },
    ],
  },
];

export default santiagoTours;
