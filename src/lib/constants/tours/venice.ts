import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const veniceTours: Tour[] = [
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

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("venice", "adventure").name,
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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("venice", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the glassblowing workshop suitable for beginners?",
        answer:
          "Absolutely! Our workshop is designed for complete beginners and is supervised by master glassblowers who guide you through each step. Safety equipment is provided, and while you'll work with molten glass, the masters ensure everything is done safely. You'll create a simple but beautiful piece such as a small vase, paperweight, or ornament that will be cooled overnight and delivered to your hotel the next day.",
      },
    ],
  },
  {
    title: "Venetian Culinary Secrets: Market & Cooking Class",
    description:
      "Immerse yourself in Venetian culinary traditions with a guided market tour through the Rialto Market, followed by a private cooking class in a historic palazzo where you'll learn to prepare classic Venetian dishes using fresh local ingredients.",
    images: [
      "/images/tours/venice/culinary-market.jpg",
      "/images/tours/venice/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Culinary", "Cooking Class", "Market Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("venice", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare traditional Venetian dishes such as risotto al nero di seppia (squid ink risotto), sarde in saor (sweet and sour sardines), and tiramisu. The class is hands-on, allowing you to experience the techniques and flavors of local cuisine firsthand. We also include a visit to the Rialto Market to select fresh ingredients, where you'll learn about seasonal produce and local seafood.",
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate dietary restrictions with advance notice. Vegetarian and gluten-free options are available, and our chef will work with you to ensure you can enjoy the culinary experience. Please inform us of any allergies or dietary needs when booking.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The tour is family-friendly and designed to engage visitors of all ages. Children will enjoy learning about local ingredients and cooking techniques, and we can adjust the pace and content to suit younger participants. We also include fun activities like making pasta shapes or decorating tiramisu.",
      },
    ],
  },
  {
    title: "Venice Artisans & Hidden Galleries Tour",
    description:
      "Explore Venice's vibrant art scene with a guided tour of hidden galleries, artisan workshops, and local studios, meeting contemporary artists and craftsmen who keep the city's artistic traditions alive while discovering their unique creations.",
    images: [
      "/images/tours/venice/artisans-workshop.jpg",
      "/images/tours/venice/contemporary-gallery.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Art", "Local Artists", "Hidden Gems"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("venice", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we meet the artists during the tour?",
        answer:
          "Yes, the tour includes visits to working studios and galleries where you'll have the opportunity to meet local artists and artisans. They will share their creative processes, inspirations, and stories behind their work, providing a unique insight into Venice's contemporary art scene. You'll also have the chance to purchase original artworks directly from the creators.",
      },
      {
        question: "What types of art will we see?",
        answer:
          "The tour showcases a diverse range of contemporary art, including painting, sculpture, photography, and mixed media. You'll visit both established galleries and hidden gems that feature emerging artists, providing a comprehensive view of Venice's vibrant art landscape. The focus is on local talent and innovative works that reflect the city's unique character.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages. Children will enjoy the interactive nature of the workshops and the opportunity to see artists at work. We can also include activities like a mini art project or scavenger hunt to keep younger participants engaged.",
      },
    ],
  },
];

export default veniceTours;
