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

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Port wine unique?",
        answer:
          "Port is a fortified wine exclusively produced in the Douro Valley region. During the tour, you'll learn about its unique production method involving adding grape brandy during fermentation, the various styles (Ruby, Tawny, White, etc.), aging requirements, and the fascinating history of British merchant families who established many of the famous Port houses you'll visit.",
      },
      {
        question: "Are children allowed on this tour?",
        answer:
          "This tour is primarily designed for adults due to the focus on wine tasting and vineyard visits. However, children are welcome if accompanied by an adult, and we can provide non-alcoholic beverages for them during the tastings.",
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
    tags: ["Historical", "Architecture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km with some steep hills and staircases, as Porto is built on different levels rising from the river. We take a relaxed pace with plenty of stops, but comfortable footwear is essential. For those with mobility concerns, we can arrange a modified version using public transportation for some portions.",
      },
      {
        question: "Will we visit any local markets or shops?",
        answer:
          "Yes! The tour includes a visit to the historic Mercado do Bolhão, where you can experience local food culture and shop for traditional Portuguese products. We also explore artisan shops in the Ribeira district, showcasing handmade crafts and local delicacies.",
      },
      {
        question: "Is this tour suitable for families with young children?",
        answer:
          "Yes, this tour is family-friendly! We can adjust the pace and include engaging stories and activities for children. The Ribeira district has plenty of open spaces and scenic views that kids will enjoy. However, please note that some areas may have cobblestone streets and steps, so a stroller may not be practical.",
      },
    ],
  },
  {
    title: "Culinary Delights of Porto: Food & Culture Tour",
    description:
      "Savor the flavors of Porto with a guided food tour through the city's vibrant markets, traditional eateries, and hidden gems, tasting local specialties like Francesinha, Bacalhau, and Pastel de Nata.",
    images: [
      "/images/tours/porto/food-market.jpg",
      "/images/tours/porto/francesinha.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Culture", "Local Cuisine"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "The tour includes tastings of iconic Porto dishes such as Francesinha (a hearty sandwich), Bacalhau à Brás (codfish dish), local cheeses, cured meats, and of course, the famous Pastel de Nata. We also visit local markets to sample fresh produce and regional specialties.",
      },
      {
        question: "Are there vegetarian or vegan options available?",
        answer:
          "Yes, we can accommodate dietary restrictions with advance notice. Vegetarian and vegan options will be provided at most stops, ensuring everyone can enjoy the culinary experience.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The tour is family-friendly and designed to engage visitors of all ages. Children will enjoy trying new foods and learning about Porto's culinary traditions.",
      },
    ],
  },
];

export default portoTours;
