import { Tour } from "@/lib/interfaces/services/tours";

const wellingtonTours: Tour[] = [
  {
    title: "Wellington Film Locations & Weta Workshop",
    description:
      "Discover the cinematic magic of Wellington with a tour of famous movie locations and an exclusive behind-the-scenes visit to Weta Workshop to see how blockbuster special effects are created.",
    images: [
      "/images/tours/wellington/weta-workshop.jpg",
      "/images/tours/wellington/film-locations.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Film", "Lord of the Rings", "Creative"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Emma Thompson",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we see actual props from The Lord of the Rings?",
        answer:
          "Yes, the tour includes viewing original props, costumes, and weapons from The Lord of the Rings trilogy, The Hobbit, and other productions. Photography is restricted in certain areas to protect intellectual property.",
      },
    ],
  },
  {
    title: "Wellington Foodie Experience",
    description:
      "Explore New Zealand's culinary capital with a walking tour of award-winning cafés, craft breweries, chocolate factories, and the vibrant harbor market with exclusive tastings and chef meetings.",
    images: [
      "/images/tours/wellington/coffee-tasting.jpg",
      "/images/tours/wellington/harbor-market.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Food", "Coffee", "Local Cuisine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "James Wilson",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is Wellington really the coffee capital of New Zealand?",
        answer:
          "Absolutely! Wellington pioneered New Zealand's renowned coffee culture. The tour includes visits to micro-roasteries where you'll learn about different brewing methods and taste single-origin coffees with expert baristas who explain what makes Wellington coffee unique.",
      },
    ],
  },
];

export default wellingtonTours;
