import { Tour } from "@/lib/interfaces/services/tours";

export const savannahTours: Tour[] = [
  {
    title: "Historic Squares & Southern Architecture",
    description:
      "Stroll through Savannah's picture-perfect squares and tree-lined streets while learning about the city's fascinating history, architectural styles, and garden designs.",
    images: [
      "/images/tours/savannah/forsyth-park.jpg",
      "/images/tours/savannah/historic-homes.jpg",
    ],
    duration: "2.5 hours",
    price: "$45",
    rating: 4.8,
    tags: ["History", "Architecture", "Gardens"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Elizabeth Montgomery",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 1.5 miles at a leisurely pace with frequent stops. Most of the route is flat, but comfortable walking shoes are recommended.",
      },
    ],
  },
  {
    title: "Bonaventure Cemetery After Hours",
    description:
      "Experience the hauntingly beautiful Bonaventure Cemetery at dusk when most visitors have departed, with exclusive access to areas normally closed to the public.",
    images: [
      "/images/tours/savannah/bonaventure-cemetery.jpg",
      "/images/tours/savannah/cemetery-statues.jpg",
    ],
    duration: "2 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cemetery", "Photography", "Gothic"],
    isFamilyFriendly: false,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jonathan Mercer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "Is this a ghost tour?",
        answer:
          "While some ghostly legends may be mentioned, this is primarily a historical and artistic tour focusing on the cemetery's notable monuments, sculptures, and the stories of those interred there.",
      },
    ],
  },
  {
    title: "Savannah Riverboat Cruise & Dinner",
    description:
      "Enjoy a scenic dinner cruise along the Savannah River aboard a historic riverboat, with live music and stunning views of the waterfront and city skyline.",
    images: [
      "/images/tours/savannah/riverboat-cruise.jpg",
      "/images/tours/savannah/dinner-cruise.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cruise", "Dinner", "Views"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Captain James Rivers",
    tourCategoryId: "cruise",
    faqs: [
      {
        question: "What is included in the dinner?",
        answer:
          "The dinner includes a buffet-style meal featuring Southern cuisine staples like fried chicken, shrimp and grits, collard greens, and peach cobbler. Vegetarian options are available upon request.",
      },
      {
        question: "Is there a dress code for the cruise?",
        answer:
          "While there is no strict dress code, smart casual attire is recommended. Many guests opt for comfortable yet stylish clothing suitable for an evening on the water.",
      },
    ],
  },
];

export default savannahTours;
