import { Tour } from "@/lib/interfaces/services/tours";

export const hoiAnTours: Tour[] = [
  {
    title: "Ancient Town Walking & Lantern Making",
    description:
      "Explore Hoi An's UNESCO-listed Old Town with its centuries-old architecture, then learn to craft your own traditional Vietnamese lantern.",
    images: [
      "/images/tours/hoi-an/ancient-town.jpg",
      "/images/tours/hoi-an/lantern-making.jpg",
    ],
    duration: "5 hours",
    price: "$40",
    rating: 4.9,
    tags: ["Cultural", "Craft", "UNESCO"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mai Thi Phuong",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will I be able to take my handmade lantern home?",
        answer:
          "Yes! Your lantern will be carefully wrapped for easy packing in your luggage, or we can arrange shipping for larger lanterns.",
      },
      {
        question: "What should I wear for the walking tour?",
        answer:
          "Comfortable walking shoes are recommended, as we will explore cobblestone streets and some uneven surfaces. Light, breathable clothing is also advisable due to the warm climate.",
      },
      {
        question: "Is the lantern-making suitable for children?",
        answer:
          "Yes, this activity is family-friendly and children will enjoy creating their own lanterns with guidance from our expert artisans.",
      },
    ],
  },
  {
    title: "Countryside Bicycle Tour & Cooking Class",
    description:
      "Cycle through picturesque rice paddies and vegetable villages, then learn to cook traditional Vietnamese dishes with fresh ingredients you helped harvest.",
    images: [
      "/images/tours/hoi-an/countryside-cycling.jpg",
      "/images/tours/hoi-an/cooking-class.jpg",
    ],
    duration: "6 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Cycling", "Cooking", "Rural"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nguyen Van Duc",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How difficult is the bike ride?",
        answer:
          "The terrain is flat and the pace is leisurely, making it suitable for all fitness levels. We cover approximately 8km on quiet country roads and paths.",
      },
      {
        question: "What if I'm not comfortable cooking?",
        answer:
          "No prior cooking experience is necessary! Our friendly chef will guide you through each step, and you can participate as much or as little as you like. The focus is on having fun and enjoying the process.",
      },
      {
        question: "Are vegetarian options available for the cooking class?",
        answer:
          "Yes, we can accommodate vegetarian preferences. Please let us know in advance so we can prepare suitable ingredients for you.",
      },
    ],
  },
  {
    title: "Hoi An Street Food & Market Tour",
    description:
      "Discover the vibrant flavors of Hoi An with a guided street food tour, sampling local specialties like cao lau, banh mi, and fresh seafood at bustling markets and hidden eateries.",
    images: [
      "/images/tours/hoi-an/street-food.jpg",
      "/images/tours/hoi-an/local-markets.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Food", "Markets", "Local Experience"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Tran Thi Lan",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of Hoi An's famous street foods including savory noodles, grilled meats, fresh seafood, and delicious desserts. The tour highlights seasonal ingredients and traditional recipes.",
      },
      {
        question: "Are there vegetarian or vegan options available?",
        answer:
          "Yes, the tour can accommodate dietary preferences. Please inform us in advance so we can ensure suitable options are included.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The guide engages children with fun stories about local food culture and allows them to try different flavors in a family-friendly environment.",
      },
    ],
  },
  {
    title: "Sunset River Cruise & Traditional Music",
    description:
      "Experience the magic of Hoi An's riverside at sunset with a relaxing boat cruise, accompanied by live traditional Vietnamese music and local snacks.",
    images: [
      "/images/tours/hoi-an/sunset-cruise.jpg",
      "/images/tours/hoi-an/traditional-music.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Romantic", "Cultural", "Scenic"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Le Quang Minh",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I bring on the cruise?",
        answer:
          "We recommend bringing a light jacket for cooler evening breezes, a camera for photos, and any personal items you may need. The boat provides comfortable seating and refreshments.",
      },
      {
        question: "Is the music performed by local artists?",
        answer:
          "Yes, the music is performed by talented local musicians who share their cultural heritage through traditional instruments and songs.",
      },
      {
        question: "Can we book a private cruise for special occasions?",
        answer:
          "Yes, private cruises can be arranged for special events such as anniversaries or birthdays. Please contact us for more details.",
      },
    ],
  },
];

export default hoiAnTours;
