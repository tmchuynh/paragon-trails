import { Tour } from "@/lib/interfaces/services/tours";
export const edinburghTours: Tour[] = [
  {
    title: "Underground Edinburgh & Ghost Stories",
    description:
      "Descend beneath the Royal Mile to explore Edinburgh's forgotten underground city of Mary King's Close, hear tales of plague victims and ghostly residents, and visit haunted locations with a local historian and master storyteller.",
    images: [
      "/images/tours/edinburgh/mary-kings-close.jpg",
      "/images/tours/edinburgh/underground-vaults.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Ghost Stories", "Underground", "History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dr. Fiona MacGregor",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How scary is this tour?",
        answer:
          "This tour focuses on historical accuracy with atmospheric storytelling rather than jump scares. While some stories involve plague, death, and alleged hauntings, they're presented in a captivating educational manner rather than for shock value. That said, the underground locations are dimly lit and can feel eerie, which contributes to the experience.",
      },
    ],
  },
  {
    title: "Scottish Whisky Journey & Tasting Masterclass",
    description:
      "Embark on a guided exploration of Scotland's national drink with visits to historic pubs, exclusive tastings of rare single malts, and expert insights into whisky production regions, flavor profiles, and drinking traditions.",
    images: [
      "/images/tours/edinburgh/whisky-tasting.jpg",
      "/images/tours/edinburgh/historic-pub.jpg",
    ],
    duration: "4 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Whisky", "Tasting", "Scottish Culture"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Iain Campbell",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How many whiskies will we taste?",
        answer:
          "The tour includes guided tastings of 6 premium single malt whiskies selected to showcase Scotland's diverse whisky regions and styles. Each whisky is paired with information about its production, history, and tasting notes. Water and small food pairings are provided to complement the experience.",
      },
    ],
  },
];

export default edinburghTours;
