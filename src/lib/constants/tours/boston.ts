import { Tour } from "@/lib/interfaces/services/tours";

export const bostonTours: Tour[] = [
  {
    title: "Freedom Trail Historic Walking Tour",
    description:
      "Follow the red-brick path through Boston's revolutionary history with an expert guide bringing the American Revolution to life at 16 historic sites.",
    images: [
      "/images/tours/boston/freedom-trail.jpg",
      "/images/tours/boston/paul-revere-house.jpg",
    ],
    duration: "2.5 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Revolutionary History", "Walking", "Historical Sites"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Thomas Sullivan",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How long is the walking route?",
        answer:
          "The complete Freedom Trail is 2.5 miles (4 km), but our tour makes strategic stops and doesn't cover every inch of the trail, making it manageable for most visitors.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages with interactive storytelling and fun facts about Boston's history.",
      },
      {
        question: "What should I wear for the tour?",
        answer:
          "Comfortable walking shoes are recommended, as the tour involves a fair amount of walking on city streets and sidewalks.",
      },
      {
        question: "Are there restroom breaks during the tour?",
        answer:
          "Yes, we make several stops along the route where restrooms are available, including at the Boston Common and Faneuil Hall.",
      },
    ],
  },
  {
    title: "Harvard & Cambridge Academic Tour",
    description:
      "Explore America's oldest university campus guided by current Harvard students who share insider knowledge, traditions, and Harvard's fascinating history.",
    images: [
      "/images/tours/boston/harvard-yard.jpg",
      "/images/tours/boston/widener-library.jpg",
    ],
    duration: "3 hours",
    price: "$39",
    rating: 4.7,
    tags: ["University", "Education", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Emily Robertson",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will this tour help with college admissions?",
        answer:
          "While the tour provides valuable insight into student life and campus culture, it is not affiliated with Harvard's admissions office and doesn't provide specific admissions guidance.",
      },
      {
        question: "Can we enter any buildings during the tour?",
        answer:
          "Access to certain buildings like libraries and lecture halls is limited, but we do visit iconic locations like Harvard Yard and Memorial Hall. Some buildings may be open for brief visits depending on the academic calendar.",
      },
      {
        question: "Is this tour suitable for prospective students?",
        answer:
          "Absolutely! The tour is designed to give prospective students a feel for campus life, academic culture, and the unique traditions of Harvard University.",
      },
    ],
  },
  {
    title: "Boston Harbor Sunset Cruise",
    description:
      "Experience the beauty of Boston's skyline at sunset with a relaxing cruise around the harbor, complete with live music and refreshments.",
    images: [
      "/images/tours/boston/harbor-cruise.jpg",
      "/images/tours/boston/sunset-view.jpg",
    ],
    duration: "2 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Scenic", "Relaxation", "Evening"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain James O'Connor",
    tourCategoryId: "scenic",
    faqs: [
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress in layers as it can get cooler on the water in the evening. Comfortable shoes are recommended.",
      },
      {
        question: "Is food and drink included?",
        answer:
          "Light snacks and non-alcoholic beverages are included. A full bar is available for purchase on board.",
      },
      {
        question: "Can we bring our own food or drinks?",
        answer:
          "Outside food and drinks are not allowed, but you can purchase items from our onboard menu.",
      },
    ],
  },
  {
    title: "Boston's North End Culinary Walk",
    description:
      "Discover Boston's Italian heritage with a guided food tour through the North End, sampling authentic pastries, pasta, and local wines.",
    images: [
      "/images/tours/boston/north-end-pasta.jpg",
      "/images/tours/boston/italian-pastries.jpg",
    ],
    duration: "3 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Culinary", "Italian", "Local"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Maria Rossi",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarians and vegans with advance notice. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What types of food will we try?",
        answer:
          "You'll sample a variety of dishes including fresh pasta, traditional pastries like cannoli, and local wines from family-owned establishments.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, the tour is family-friendly and designed to engage visitors of all ages with interactive food experiences.",
      },
    ],
  },
  {
    title: "Boston Tea Party Ships & Museum Experience",
    description:
      "Step back in time to the Boston Tea Party with an interactive experience that includes a reenactment, a tour of the ships, and a chance to throw tea overboard.",
    images: [
      "/images/tours/boston/tea-party-ship.jpg",
      "/images/tours/boston/reenactment.jpg",
    ],
    duration: "1.5 hours",
    price: "$30",
    rating: 4.6,
    tags: ["Historical", "Interactive", "Family"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sarah Thompson",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is this tour suitable for young children?",
        answer:
          "Yes, the tour is designed to be engaging for visitors of all ages, including children. Interactive elements make it fun and educational.",
      },
      {
        question: "Can we actually throw tea overboard?",
        answer:
          "Yes! Participants are encouraged to take part in the reenactment by throwing tea overboard, making it a memorable experience.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages. Children must be accompanied by an adult, and we provide life jackets for younger guests.",
      },
    ],
  },
];

export default bostonTours;
