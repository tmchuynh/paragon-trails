import { Tour } from "@/lib/interfaces/services/tours";

export const pragueTours: Tour[] = [
  {
    title: "Prague Castle After Hours",
    description:
      "Experience Prague's magnificent castle complex after the crowds have departed, with private access to areas normally closed to the public and insights from a historian specializing in Czech royal history.",
    images: [
      "/images/tours/prague/castle-night.jpg",
      "/images/tours/prague/st-vitus-cathedral.jpg",
    ],
    duration: "3 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Castle", "Evening Tour", "Architecture"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes this tour different from regular castle visits?",
        answer:
          "Our evening access provides a dramatically different atmosphere with special lighting that highlights architectural details, near-empty halls that are usually crowded, and access to normally restricted areas including parts of the Old Royal Palace and Golden Lane houses.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages with fascinating stories and interactive elements. However, please note that some areas may have limited accessibility for strollers.",
      },
    ],
  },
  {
    title: "Prague Microbrewery Exploration",
    description:
      "Discover Prague's celebrated beer culture beyond the famous brands with visits to local microbreweries, learning traditional Czech brewing methods and tasting unique small-batch brews with a certified beer expert.",
    images: [
      "/images/tours/prague/microbrewery.jpg",
      "/images/tours/prague/beer-tasting.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Beer", "Culinary", "Local"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many beer samples are included?",
        answer:
          "The tour includes tastings of 10-12 different craft beers (approximately 0.2L each) from 3-4 different microbreweries, along with traditional Czech beer snacks to complement the flavors.",
      },
      {
        question: "Can I join if I don't drink alcohol?",
        answer:
          "Absolutely! We can provide non-alcoholic alternatives such as traditional Czech soft drinks or non-alcoholic beers. Just let us know in advance, and we'll ensure you have a great experience.",
      },
    ],
  },
  {
    title: "Hidden Gems of Prague: Art & Architecture Tour",
    description:
      "Explore Prague's lesser-known architectural marvels and vibrant street art scene with a local guide, visiting hidden courtyards, unique buildings, and contemporary art installations that showcase the city's creative spirit.",
    images: [
      "/images/tours/prague/street-art.jpg",
      "/images/tours/prague/hidden-courtyard.jpg",
    ],
    duration: "3 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Art", "Architecture", "Local Culture"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "art",
    faqs: [
      {
        question: "What types of art will we see?",
        answer:
          "The tour includes a mix of street art murals, contemporary sculptures, and unique architectural details from various styles including Art Nouveau, Cubism, and modern design. We also visit local galleries showcasing emerging artists.",
      },
      {
        question: "Is this tour suitable for families with young children?",
        answer:
          "Yes, this tour is family-friendly! We can adjust the pace and include engaging stories and activities for children. The outdoor nature of the tour allows for flexibility with strollers.",
      },
    ],
  },
  {
    title: "Prague's Historic Jewish Quarter Tour",
    description:
      "Delve into the rich history of Prague's Jewish community with a guided tour through the Jewish Quarter, visiting synagogues, the Old Jewish Cemetery, and learning about the cultural heritage that has shaped this vibrant area.",
    images: [
      "/images/tours/prague/jewish-quarter.jpg",
      "/images/tours/prague/old-jewish-cemetery.jpg",
    ],
    duration: "2.5 hours",
    price: "$50",
    rating: 4.9,
    tags: ["History", "Culture", "Jewish Heritage"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What sites will we visit in the Jewish Quarter?",
        answer:
          "The tour includes visits to the Old-New Synagogue, Pinkas Synagogue, Klausen Synagogue, and the Old Jewish Cemetery. You'll learn about the history of the Jewish community in Prague, including its traditions, struggles, and contributions to the city.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages. We share stories and historical context in an accessible way, making it suitable for children while respecting the solemnity of the sites.",
      },
    ],
  },
];

export default pragueTours;
