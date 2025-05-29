import { Tour } from "@/lib/interfaces/services/tours";
export const fijiTours: Tour[] = [
  {
    title: "Traditional Village & Kava Ceremony",
    description:
      "Experience authentic Fijian culture with a guided visit to a traditional village, participating in a sacred kava ceremony, enjoying indigenous performances, and learning about daily village life.",
    images: [
      "/images/tours/fiji/kava-ceremony.jpg",
      "/images/tours/fiji/village-life.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Cultural", "Traditional", "Village"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Semisi Cikobia",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting the village?",
        answer:
          "Modest dress is respectful when visiting Fijian villages. Both men and women should cover shoulders and knees. We recommend wearing a sulu (sarong) which will be provided, and removing hats when in the village.",
      },
      {
        question: "Is the kava ceremony safe for everyone?",
        answer:
          "Yes, the kava ceremony is safe for most people. Kava is a traditional drink made from the root of the kava plant and is known for its relaxing properties. However, it is not recommended for pregnant or nursing women, or those with liver conditions. Please inform your guide of any health concerns.",
      },
      {
        question: "Can children participate in the kava ceremony?",
        answer:
          "Yes, children can participate in the kava ceremony, but they will be offered a non-alcoholic version made from coconut water. The ceremony is a cultural experience and children are welcome to observe and learn about Fijian traditions.",
      },
    ],
  },
  {
    title: "Coral Reef Conservation & Snorkeling",
    description:
      "Join marine biologists for a hands-on reef conservation experience, participating in coral planting and reef monitoring, followed by guided snorkeling in pristine protected waters.",
    images: [
      "/images/tours/fiji/coral-planting.jpg",
      "/images/tours/fiji/snorkeling.jpg",
    ],
    duration: "5 hours",
    price: "$135",
    rating: 4.8,
    tags: ["Marine Conservation", "Snorkeling", "Eco-friendly"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Ana Vuikadavu",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Do I need to be a strong swimmer to participate?",
        answer:
          "Basic swimming ability is recommended, but you don't need to be a strong swimmer. Our guides provide thorough safety instructions, and flotation devices are available. The coral planting portion can be done in shallow, waist-deep water if preferred.",
      },
      {
        question: "What should I bring for the snorkeling portion?",
        answer:
          "Please bring swimwear, a towel, sunscreen (reef-safe), and a hat. We provide all snorkeling gear including masks, fins, and wetsuits if needed. You can also bring an underwater camera to capture the beautiful marine life.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children aged 6 and up. Children must be accompanied by an adult, and we provide child-sized snorkeling gear.",
      },
    ],
  },
];

export default fijiTours;
