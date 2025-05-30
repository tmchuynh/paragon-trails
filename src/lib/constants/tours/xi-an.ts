import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const xianTours: Tour[] = [
  {
    title: "Terracotta Army & Emperor's Tomb VIP Access",
    description:
      "Experience the archaeological wonder of China's Terracotta Warriors with privileged access to areas closed to regular visitors, guided by an expert archaeologist who reveals the latest discoveries and historical context.",
    images: [
      "/images/tours/xi-an/terracotta-warriors.jpg",
      "/images/tours/xi-an/emperor-tomb.jpg",
    ],
    duration: "6 hours",
    price: "$175",
    rating: 5.0,
    tags: ["Archaeological", "Emperor", "Ancient China"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("xi-an", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this Terracotta Army tour special?",
        answer:
          "Our tour includes access to special excavation areas normally closed to the public, including the newest Pit #5 site where archeologists are actively working. You'll receive detailed explanations from a specialist with direct connections to the archaeological team, allowing for insights into the latest discoveries and research. We also visit at optimal times to avoid the largest crowds, ensuring a more intimate experience.",
      },
    ],
  },
  {
    title: "Xi'an Ancient City Wall & Muslim Quarter",
    description:
      "Cycle along China's best-preserved ancient city wall offering panoramic views, then explore the vibrant Muslim Quarter's narrow lanes and sample its famous street food with insights into the city's Silk Road heritage.",
    images: [
      "/images/tours/xi-an/city-wall-cycling.jpg",
      "/images/tours/xi-an/muslim-quarter.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Cycling", "Street Food", "Culture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("xi-an", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How long is the cycling portion?",
        answer:
          "The complete Xi'an city wall circuit is 14km (8.7 miles) and takes approximately 2 hours to cycle at a leisurely pace with stops for photos and historical commentary. For those who prefer not to cycle the entire route, we can arrange to cover just the most scenic section (about 4km) and then use our vehicle to transfer to the Muslim Quarter.",
      },
    ],
  },
  {
    title: "Silk Road Heritage & Local Crafts Tour",
    description:
      "Discover Xi'an's rich Silk Road history with visits to ancient trading posts, artisan workshops, and markets where you can see traditional crafts like paper cutting, calligraphy, and pottery being made.",
    images: [
      "/images/tours/xi-an/silk-road-market.jpg",
      "/images/tours/xi-an/calligraphy-workshop.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Cultural", "Crafts", "Silk Road"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("xi-an", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of crafts will we see?",
        answer:
          "The tour includes visits to workshops specializing in traditional crafts such as paper cutting, Chinese calligraphy, pottery, and silk weaving. You'll have the opportunity to watch artisans at work and even try your hand at some techniques under their guidance.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes! This tour is family-friendly and designed to engage visitors of all ages with hands-on activities and interactive demonstrations. Children will enjoy learning about the history of the Silk Road through crafts and stories.",
      },
    ],
  },
];
