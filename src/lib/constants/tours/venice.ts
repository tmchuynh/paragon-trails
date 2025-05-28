import { Tour } from "@/lib/interfaces/services/tours";

const veniceTours: Tour[] = [
  {
    title: "Secret Venice & Exclusive Basilica Access",
    description:
      "Explore the hidden side of Venice with a private evening opening of St. Mark's Basilica, followed by a journey through secret passageways, lesser-known canals, and hidden campos where locals still live authentic Venetian lives.",
    images: [
      "/images/tours/venice/basilica-night.jpg",
      "/images/tours/venice/hidden-canals.jpg",
    ],
    duration: "4 hours",
    price: "$175",
    rating: 5.0,
    tags: ["After Hours", "Hidden Venice", "Exclusive"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Lucia Moretti",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What makes the Basilica access special?",
        answer:
          "Our after-hours access means you'll experience St. Mark's Basilica without the daytime crowds and with special lighting that illuminates the golden mosaics in a way day visitors never see. Only a handful of visitors are allowed this privilege each week. The basilica's famous gold mosaics, covering over 8,000 square meters, truly come alive in this intimate evening setting.",
      },
    ],
  },
  {
    title: "Murano Glass Masters & Private Workshop",
    description:
      "Discover the ancient art of Venetian glassmaking with an exclusive visit to master craftsmen workshops on Murano island, culminating in a hands-on private glass-blowing lesson where you'll create your own artistic souvenir.",
    images: [
      "/images/tours/venice/murano-glassblowing.jpg",
      "/images/tours/venice/glass-workshop.jpg",
    ],
    duration: "5 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Crafts", "Murano", "Hands-on"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Marco Zanetti",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the glassblowing workshop suitable for beginners?",
        answer:
          "Absolutely! Our workshop is designed for complete beginners and is supervised by master glassblowers who guide you through each step. Safety equipment is provided, and while you'll work with molten glass, the masters ensure everything is done safely. You'll create a simple but beautiful piece such as a small vase, paperweight, or ornament that will be cooled overnight and delivered to your hotel the next day.",
      },
    ],
  },
];

export default veniceTours;
