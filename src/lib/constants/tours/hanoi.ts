import { Tour } from "@/lib/interfaces/services/tours";

const hanoiTours: Tour[] = [
  {
    title: "Old Quarter & French Quarter Heritage Walk",
    description:
      "Explore Hanoi's atmospheric Old Quarter with its 36 guild streets and elegant French Quarter, discovering hidden temples, colonial architecture, and local artisan workshops with a historian guide.",
    images: [
      "/images/tours/hanoi/old-quarter.jpg",
      "/images/tours/hanoi/french-quarter.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Walking", "Historical", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Ms. Linh Nguyen",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 4km at a leisurely pace with frequent stops. The streets are relatively flat, but can be busy with motorbike traffic. We take regular breaks at cafes, temples, and shops throughout the walk.",
      },
    ],
  },
  {
    title: "Hanoi Street Food Adventure",
    description:
      "Dive into Hanoi's renowned street food culture with a local food blogger, sampling iconic dishes like pho, bun cha, and egg coffee while learning about Vietnamese culinary traditions.",
    images: [
      "/images/tours/hanoi/street-food.jpg",
      "/images/tours/hanoi/egg-coffee.jpg",
    ],
    duration: "3.5 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Food", "Local Cuisine", "Culinary"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Tuan Anh",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can dietary restrictions be accommodated?",
        answer:
          "Yes, with advance notice we can accommodate vegetarians and most food allergies. Please note that some dishes may contain fish sauce, which is a staple in Vietnamese cuisine, but alternative options will always be provided.",
      },
    ],
  },
];

export default hanoiTours;
