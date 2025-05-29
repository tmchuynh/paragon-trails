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
    isFamilyFriendly: true,
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
    isFamilyFriendly: true,
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
];

export default fortKochiTours;
