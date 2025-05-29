import { Tour } from "@/lib/interfaces/services/tours";
export const budapestTours: Tour[] = [
  {
    title: "Thermal Bath Experience & Spa Heritage",
    description:
      "Immerse yourself in Budapest's famous spa culture with an expert-guided tour of historic bath houses, culminating in a private thermal spa experience with treatments based on centuries-old Hungarian wellness traditions.",
    images: [
      "/images/tours/budapest/szechenyi-baths.jpg",
      "/images/tours/budapest/gellert-spa.jpg",
    ],
    duration: "4 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Thermal Baths", "Wellness", "History"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Katalin Nagy",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the thermal bath experience?",
        answer:
          "Please bring your swimwear, a towel (though towels can also be rented), flip-flops, and a water bottle. Shower facilities and lockers are provided. For the mixed-gender areas, swimwear is required, while in certain single-gender sections, it may be optional following European spa traditions.",
      },
      {
        question: "Are the thermal baths suitable for children?",
        answer:
          "Yes, many of Budapest's thermal baths are family-friendly, with designated areas for children. However, some treatments and certain pools may have age restrictions. Please check with us if you plan to bring children.",
      },
      {
        question: "Can I book spa treatments in advance?",
        answer:
          "Yes, we can arrange additional spa treatments such as massages or beauty therapies at the baths. Please let us know your preferences when booking.",
      },
    ],
  },
  {
    title: "Underground Budapest: Caves & Bunkers",
    description:
      "Discover Budapest's fascinating subterranean world with explorations of natural cave systems beneath Buda Castle, WWII bunkers, and the secret Hospital in the Rock, revealing hidden aspects of the city's geology and turbulent history.",
    images: [
      "/images/tours/budapest/hospital-rock.jpg",
      "/images/tours/budapest/cave-system.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Underground", "History", "Caves"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Viktor Horvath",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is this tour suitable for claustrophobic individuals?",
        answer:
          "Parts of this tour involve narrow passages and underground spaces that may be challenging for those with severe claustrophobia. The Hospital in the Rock and certain bunker sections have wider spaces and higher ceilings, while some cave passages are narrower with lower clearance. Please contact us to discuss specific concerns before booking.",
      },
      {
        question: "What should I wear for the underground tour?",
        answer:
          "We recommend wearing comfortable, sturdy shoes suitable for uneven terrain, as well as clothing that can get dirty. A light jacket is advisable, as underground temperatures can be cooler than above ground. Helmets are provided where necessary.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is generally suitable for all ages, but children must be accompanied by an adult. Some areas may not be stroller-friendly, so please consider this if bringing young children.",
      },
    ],
  },
];

export default budapestTours;
