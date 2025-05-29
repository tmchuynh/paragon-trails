import { Tour } from "@/lib/interfaces/services/tours";
export const fortKochiTours: Tour[] = [
  {
    title: "Historic Spice Route & Colonial Heritage",
    description:
      "Walk through centuries of trading history in Fort Kochi with a historian guide, exploring Portuguese churches, Dutch architecture, ancient synagogues, and the legendary Chinese fishing nets that reflect this port town's diverse cultural influences.",
    images: [
      "/images/tours/fort-kochi/chinese-fishing-nets.jpg",
      "/images/tours/fort-kochi/mattancherry-palace.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["History", "Colonial", "Architecture"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Joseph Thomas",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How old are the Chinese fishing nets?",
        answer:
          "These iconic fishing installations date back to the 14th century and were introduced by Chinese explorer Zheng He. They represent one of the oldest examples of Chinese influence in India and continue to be used by local fishermen today, using the same counterbalance technique that has remained unchanged for centuries.",
      },
      {
        question: "Will we visit the Jewish Synagogue?",
        answer:
          "Yes, the Paradesi Synagogue in Mattancherry is included in the tour. Built in 1568, it is the oldest active synagogue in the Commonwealth and features stunning hand-painted Chinese tiles and a beautiful gold pulpit. We will also explore the surrounding Jewish Quarter, which is rich in history and culture.",
      },
    ],
  },
  {
    title: "Kerala Backwaters & Village Life",
    description:
      "Escape the tourist routes on a private houseboat journey through Kerala's serene backwaters, visiting remote villages for authentic interactions with local families and artisans who maintain traditional ways of life.",
    images: [
      "/images/tours/fort-kochi/kerala-backwaters.jpg",
      "/images/tours/fort-kochi/village-crafts.jpg",
    ],
    duration: "8 hours",
    price: "$120",
    rating: 4.9,
    tags: ["Backwaters", "Village", "Nature"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Anil Kumar",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question:
          "What will we see on the backwaters that's different from standard tours?",
        answer:
          "Unlike commercial group houseboats that stick to main channels, our smaller vessels access narrow canals where we witness authentic daily life: children walking to school by boat, farmers tending to below-sea-level rice paddies, women washing clothes in the traditional manner, and artisans creating coir products by hand. We'll visit villages that rarely see tourists and share tea with local families.",
      },
      {
        question: "Is food included on the houseboat?",
        answer:
          "Yes, a traditional Kerala lunch featuring local specialties will be prepared on board by our crew. We can accommodate dietary restrictions with prior notice. Snacks and refreshments are also provided during the journey.",
      },
    ],
  },
  {
    title: "Fort Kochi Art & Culture Walk",
    description:
      "Explore the vibrant art scene of Fort Kochi with a local artist, visiting galleries, street art installations, and cultural spaces that showcase the town's creative spirit and contemporary artistic expressions.",
    images: [
      "/images/tours/fort-kochi/art-gallery.jpg",
      "/images/tours/fort-kochi/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.7,
    tags: ["Art", "Culture", "Street Art"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lakshmi Menon",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What types of art will we see?",
        answer:
          "The tour includes contemporary art galleries, street art murals, and installations by local artists. We'll explore how Fort Kochi's unique cultural blend influences its vibrant art scene, including works that reflect social issues, environmental themes, and traditional Kerala motifs.",
      },
    ],
  },
  {
    title: "Culinary Delights of Fort Kochi",
    description:
      "Savor the flavors of Kerala with a guided food tour through Fort Kochi's markets, street stalls, and local eateries, tasting traditional dishes like appam, stew, and seafood specialties while learning about the region's culinary heritage.",
    images: [
      "/images/tours/fort-kochi/kerala-cuisine.jpg",
      "/images/tours/fort-kochi/street-food.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Food", "Culinary", "Local Cuisine"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Riya Nair",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we try?",
        answer:
          "The tour includes a variety of Kerala specialties such as appam with stew, karimeen pollichathu (pearl spot fish), puttu with kadala curry, and traditional sweets like ada pradhaman. We also visit local spice markets to learn about the region's famous spices.",
      },
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian and vegan preferences with advance notice. Please inform us of any allergies or dietary needs when booking.",
      },
    ],
  },
];

export default fortKochiTours;
