import { Tour } from "@/lib/interfaces/services/tours";

export const queenstownTours: Tour[] = [
  {
    title: "Milford Sound Day Trip",
    description:
      "Experience the breathtaking beauty of Milford Sound with a scenic cruise through fjords, waterfalls, and towering cliffs.",
    images: [
      "/images/tours/queenstown/milford-sound.jpg",
      "/images/tours/queenstown/fjord-cruise.jpg",
    ],
    duration: "12 hours",
    price: "$199",
    rating: 4.9,
    tags: ["Nature", "Adventure", "Scenic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "nature-experience",
    faqs: [
      {
        question: "What should I wear?",
        answer:
          "Dress in layers and bring waterproof clothing as weather can change rapidly in the fjords.",
      },
      {
        question: "Is lunch included?",
        answer:
          "Lunch is not included, but there are options to purchase food on board the cruise.",
      },
    ],
  },
  {
    title: "Skydiving Over Queenstown",
    description:
      "Experience the thrill of freefalling over Queenstown's stunning landscapes with a tandem skydive.",
    images: [
      "/images/tours/queenstown/skydiving.jpg",
      "/images/tours/queenstown/aerial-view.jpg",
    ],
    duration: "3 hours",
    price: "$299",
    rating: 4.8,
    tags: ["Adventure", "Thrill", "Aerial"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
  },
  {
    title: "Wine Tasting Tour in Gibbston Valley",
    description:
      "Explore the renowned wineries of Gibbston Valley with guided tastings and vineyard tours.",
    images: [
      "/images/tours/queenstown/wine-tasting.jpg",
      "/images/tours/queenstown/gibbston-valley.jpg",
    ],
    duration: "5 hours",
    price: "$150",
    rating: 4.7,
    tags: ["Culinary", "Wine", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are children allowed on the tour?",
        answer:
          "Yes, children are welcome, but they must be accompanied by an adult. Some wineries may have age restrictions for tastings.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot on the tour.",
      },
    ],
  },
  {
    title: "Queenstown Jet Boat Adventure",
    description:
      "Feel the adrenaline rush on a high-speed jet boat ride through the Shotover River canyons.",
    images: [
      "/images/tours/queenstown/jet-boat.jpg",
      "/images/tours/queenstown/shotover-river.jpg",
    ],
    duration: "1 hour",
    price: "$129",
    rating: 4.9,
    tags: ["Adventure", "Thrill", "Water Sports"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is prior boating experience required?",
        answer:
          "No prior experience is needed. Our experienced guides will provide all necessary instructions and safety gear.",
      },
      {
        question: "What should I wear?",
        answer:
          "Wear comfortable clothing that can get wet. We provide life jackets and waterproof gear, but you may want to bring a change of clothes.",
      },
    ],
  },
  {
    title: "Queenstown Scenic Gondola Ride",
    description:
      "Take a scenic gondola ride to Bob's Peak for panoramic views of Queenstown and Lake Wakatipu.",
    images: [
      "/images/tours/queenstown/gondola-ride.jpg",
      "/images/tours/queenstown/bobs-peak.jpg",
    ],
    duration: "2 hours",
    price: "$49",
    rating: 4.6,
    tags: ["Scenic", "Family Friendly", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "scenic",
    faqs: [
      {
        question: "Is the gondola wheelchair accessible?",
        answer:
          "Yes, the gondola is wheelchair accessible. Please inform us in advance if you require special assistance.",
      },
      {
        question: "Are there dining options at the top?",
        answer:
          "Yes, there is a restaurant and café at the top of Bob's Peak offering stunning views and a variety of food options.",
      },
    ],
  },
];
