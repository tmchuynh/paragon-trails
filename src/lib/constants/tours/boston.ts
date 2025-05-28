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
    ],
  },
];

export default bostonTours;
