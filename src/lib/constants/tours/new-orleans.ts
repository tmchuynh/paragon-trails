import { Tour } from "@/lib/interfaces/services/tours";

export const newOrleansTours: Tour[] = [
  {
    title: "French Quarter Mysteries & Voodoo History",
    description:
      "Discover the mysterious side of New Orleans with a guided walk through the historic French Quarter, exploring voodoo traditions, haunted locations, and the city's fascinating spiritual heritage.",
    city: "New Orleans",
    country: "United States",
    region: "Louisiana",
    images: [
      "/images/tours/new-orleans/french-quarter.jpg",
      "/images/tours/new-orleans/voodoo-shop.jpg",
    ],
    duration: "3 hours",
    price: "$45",
    rating: 4.8,
    tags: ["History", "Mystical", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will there be opportunities to hear live music?",
        answer:
          "Yes, the tour includes brief stops at 2-3 venues where you'll hear snippets of live performances, culminating with an optional longer stay at Preservation Hall.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly. We provide engaging stories and activities to keep children entertained while learning about the history of jazz.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Wear comfortable walking shoes and weather-appropriate clothing. The French Quarter can be hot and humid, so light fabrics are recommended.",
      },
    ],
  },
  {
    title: "Jazz History Tour & Evening Performance",
    description:
      "Explore the birthplace of jazz with visits to historic music venues and landmarks during the day, culminating with an evening of live music at an authentic New Orleans jazz club.",
    city: "New Orleans",
    country: "United States",
    region: "Louisiana",
    images: [
      "/images/tours/new-orleans/jazz-club.jpg",
      "/images/tours/new-orleans/preservation-hall.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Music", "Nightlife", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is the itinerary for the day tour?",
        answer:
          "The day tour includes visits to the New Orleans Jazz Museum, St. Louis Cathedral, and a ride on the historic streetcar, with live jazz performances at each location.",
      },
      {
        question: "Where does the evening performance take place?",
        answer:
          "The evening performance is at Preservation Hall, a historic venue dedicated to preserving New Orleans jazz. You'll enjoy an intimate concert by some of the city's best jazz musicians.",
      },
      {
        question: "Is transportation included in the tour?",
        answer:
          "Yes, transportation is provided between the tour locations and to the evening performance. You'll be transported in a comfortable, air-conditioned vehicle.",
      },
    ],
  },
  {
    title: "Bayou & Swamp Eco-Adventure",
    description:
      "Journey into Louisiana's mystical swamps and bayous to observe wildlife including alligators, egrets, and herons while learning about this unique ecosystem and Cajun culture.",
    city: "New Orleans",
    country: "United States",
    region: "Louisiana",
    images: [
      "/images/tours/new-orleans/swamp-tour.jpg",
      "/images/tours/new-orleans/alligator-sighting.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Nature", "Wildlife", "Eco-Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nature",
    faqs: [
      {
        question: "What kind of wildlife can we expect to see?",
        answer:
          "In addition to alligators and birds, you may also see turtles, snakes, and a variety of fish. Our guides will provide information about the local ecosystem and wildlife conservation efforts.",
      },
      {
        question: "Is the swamp tour safe?",
        answer:
          "Yes, the tour is safe. Our experienced guides ensure a secure and enjoyable experience. We provide life jackets and safety briefings before the tour begins.",
      },
      {
        question: "What should I wear for the eco-adventure?",
        answer:
          "Wear comfortable, weather-appropriate clothing that you don't mind getting a little wet. We recommend closed-toe shoes and bringing a hat and sunglasses for sun protection.",
      },
    ],
  },
];

export default newOrleansTours;
