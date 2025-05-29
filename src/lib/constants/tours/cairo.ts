import { Tour } from "@/lib/interfaces/services/tours";
export const cairoTours: Tour[] = [
  {
    title: "Pyramids at Dawn & Private Archaeologist Tour",
    description:
      "Experience the majesty of the Pyramids of Giza without crowds during a special early access visit, accompanied by an Egyptologist who reveals the latest archaeological discoveries and ancient engineering secrets.",
    images: [
      "/images/tours/cairo/pyramids-sunrise.jpg",
      "/images/tours/cairo/sphinx-morning.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Pyramids", "Archaeology", "Exclusive Access"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Ahmed Mahmoud",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How early do we start this tour?",
        answer:
          "Hotel pickup begins approximately 1 hour before sunrise (time varies seasonally). While this is an early start, the experience of watching the sun rise over the pyramids with virtually no other visitors present is absolutely worth it. We provide coffee/tea and light breakfast refreshments to enjoy while watching the sunrise transform the monuments.",
      },
    ],
  },
  {
    title: "Islamic Cairo & Khan el-Khalili Artisans",
    description:
      "Explore medieval Cairo's magnificent mosques and madrasas with an architectural historian, then discover traditional craftsmanship with private visits to workshops hidden in the historic Khan el-Khalili bazaar.",
    images: [
      "/images/tours/cairo/al-azhar-mosque.jpg",
      "/images/tours/cairo/khan-bazaar.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Islamic Architecture", "Bazaar", "Crafts"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Dr. Laila Ibrahim",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting mosques?",
        answer:
          "For mosque visits, both men and women should wear clothing that covers shoulders and knees. Women should also bring a scarf to cover their hair when entering mosques. We provide traditional overgowns if needed. Shoes will be removed before entering prayer halls, so wear socks and easily removable footwear.",
      },
    ],
  },
];

export default cairoTours;
