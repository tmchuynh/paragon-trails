import { Tour } from "@/lib/interfaces/services/tours";

const sanSebastianTours: Tour[] = [
  {
    title: "Pintxos Crawl & Basque Gastronomy",
    description:
      "Discover why San Sebastián is considered one of the world's culinary capitals with a guided tour through traditional pintxos bars, sampling award-winning bites and learning about Basque gastronomy secrets.",
    images: [
      "/images/tours/san-sebastian/pintxos-bar.jpg",
      "/images/tours/san-sebastian/gourmet-pintxos.jpg",
    ],
    duration: "3.5 hours",
    price: "$95",
    rating: 5.0,
    tags: ["Gastronomy", "Pintxos", "Local Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mikel Agirre",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many pintxos bars will we visit?",
        answer:
          "The tour includes visits to 5-6 carefully selected pintxos bars, ranging from traditional establishments to innovative, modern venues. At each location, you'll try 1-2 signature pintxos paired with local Txakoli wine, Basque cider, or other regional beverages. By the end of the tour, you'll have enjoyed a complete meal's worth of the best pintxos in San Sebastián.",
      },
    ],
  },
  {
    title: "Basque Coastal Villages & Fishing Heritage",
    description:
      "Explore the charming fishing villages and dramatic coastline of the Basque Country, including Getaria, Zumaia's geological flysch formations, and hidden beaches, with insights into the region's maritime traditions.",
    images: [
      "/images/tours/san-sebastian/getaria-harbor.jpg",
      "/images/tours/san-sebastian/zumaia-flysch.jpg",
    ],
    duration: "6 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Coastal", "Fishing Villages", "Scenic"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Ane Etxeberria",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we have time for swimming at the beaches?",
        answer:
          "During summer months (June-September), we include time for swimming at one of the beautiful beaches along the Basque coast. Please bring swimwear and towels if you'd like to swim. Outside of summer, we focus more on coastal walks, harbor visits, and cultural experiences in the villages.",
      },
    ],
  },
];

export default sanSebastianTours;
