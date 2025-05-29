import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const florenceTours: Tour[] = [
  {
    title: "Renaissance Art & Architecture Masterpieces",
    description:
      "Explore Florence's artistic treasures with an art historian guide, enjoying priority access to the Uffizi Gallery and Accademia to view works by Michelangelo, Botticelli, and Leonardo da Vinci without the crowds.",
    images: [
      "/images/tours/florence/david-statue.jpg",
      "/images/tours/florence/uffizi-gallery.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Art", "Museums", "Renaissance"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("florence", "art").name,
    tourCategoryId: "art",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour involves approximately 3-4 hours of walking between and within museums. The pace is leisurely with plenty of stops, but comfortable footwear is recommended as museum floors can be hard on the feet.",
      },
      {
        question: "Is photography allowed in the museums?",
        answer:
          "Photography without flash is permitted in most areas of the Uffizi and Accademia, though some specific artworks may have restrictions. Your guide will advise on any limitations.",
      },
      {
        question: "Can we skip the long lines at the museums?",
        answer:
          "Yes, this tour includes priority access tickets that allow you to bypass the main entry lines, which can save hours of waiting during peak season.",
      },
    ],
  },
  {
    title: "Tuscan Countryside Wine Tour & Villa Lunch",
    description:
      "Journey through the picturesque Chianti region visiting family-owned vineyards to sample renowned Tuscan wines, followed by a traditional lunch at a historic villa overlooking rolling hills and cypress groves.",
    images: [
      "/images/tours/florence/chianti-vineyard.jpg",
      "/images/tours/florence/tuscan-villa.jpg",
    ],
    duration: "8 hours",
    price: "$185",
    rating: 4.8,
    tags: ["Wine", "Countryside", "Food"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many vineyards do we visit?",
        answer:
          "We visit three carefully selected vineyards that represent different winemaking styles and traditions. Each offers a distinct tasting experience, from boutique organic producers to historically significant estates.",
      },
      {
        question: "Is lunch included in the tour price?",
        answer:
          "Yes, a traditional Tuscan lunch featuring seasonal ingredients is included. The multi-course meal typically includes antipasti, pasta, main course, and dessert, paired with wines from the estate.",
      },
      {
        question: "Can non-drinkers enjoy this tour?",
        answer:
          "Absolutely. While wine is a focus, the tour also showcases the stunning Tuscan landscape, historic architecture, and excellent cuisine. Non-alcoholic beverages are available at all stops.",
      },
    ],
  },
  {
    title: "Florence Artisan Workshops & Craftsmanship",
    description:
      "Discover Florence's living artistic heritage by visiting private workshops where traditional crafts including leatherworking, goldsmithing, paper marbling, and mosaic creation continue using centuries-old techniques.",
    images: [
      "/images/tours/florence/leather-workshop.jpg",
      "/images/tours/florence/paper-marbling.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Artisans", "Crafts", "Local Traditions"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("florence", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we get to try any crafts ourselves?",
        answer:
          "Yes, most workshops include hands-on components where you can try basic techniques. In the paper marbling workshop, for example, you'll create your own marbled paper to take home as a unique souvenir.",
      },
      {
        question: "Can we purchase items directly from the artisans?",
        answer:
          "Absolutely. One benefit of visiting these workshops is the opportunity to purchase authentic, high-quality items directly from the creators at fair prices, often with the option for customization.",
      },
      {
        question: "How many workshops do we visit?",
        answer:
          "We visit four different artisan workshops, spending approximately 45 minutes at each location to allow time for demonstration, hands-on experience, and questions.",
      },
    ],
  },
  {
    title: "Medici Secrets: Power & Conspiracy Tour",
    description:
      "Uncover the intrigue behind Florence's most influential family on this walking tour of Medici palaces, hidden passages, and conspiracy sites, revealing the scandals and power plays that shaped Renaissance history.",
    images: [
      "/images/tours/florence/medici-palace.jpg",
      "/images/tours/florence/secret-passage.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.8,
    tags: ["History", "Mystery", "Walking Tour"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("florence", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour based on historical facts?",
        answer:
          "Yes, though the Medici history includes plenty of intrigue on its own, our tour is based on documented historical events and scholarly research rather than fictional accounts. We distinguish between verified facts and historical theories when appropriate.",
      },
      {
        question: "Will we enter the Palazzo Vecchio?",
        answer:
          "Yes, we include access to select areas of the Palazzo Vecchio, including some rooms not on the standard tourist route, where key events in Medici history occurred.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "The tour is most appropriate for older children and adults due to the complex historical content and some discussion of assassination and political intrigue. We recommend this tour for ages 12 and up.",
      },
    ],
  },
  {
    title: "Florence Cooking Class & Market Tour",
    description:
      "Begin at a local market selecting fresh seasonal ingredients, then prepare a traditional Florentine meal including handmade pasta, meat dishes, and desserts under the guidance of an experienced Italian chef.",
    images: [
      "/images/tours/florence/market-shopping.jpg",
      "/images/tours/florence/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Cooking", "Food", "Market"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("florence", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need cooking experience?",
        answer:
          "No experience necessary! Our chef will guide you through each step regardless of your cooking level. The class is designed to be approachable for beginners while still interesting for experienced home cooks.",
      },
      {
        question: "What dishes will we prepare?",
        answer:
          "You'll make a complete Tuscan meal typically including handmade pasta with traditional sauce, a main course such as arista (roast pork) or chicken cacciatore, side dishes featuring seasonal vegetables, and a classic dessert like tiramisu or panna cotta.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can adapt recipes for vegetarians, vegans, and those with allergies or religious restrictions. Please inform us when booking.",
      },
    ],
  },
];

export default florenceTours;
