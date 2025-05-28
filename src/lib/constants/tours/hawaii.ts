import { Tour } from "@/lib/interfaces/services/tours";

const hawaiiTours: Tour[] = [
  {
    title: "Volcanoes National Park & Lava Adventure",
    description:
      "Experience the raw power of Hawaii's active volcanoes with a guided hike across stunning lava landscapes, ancient lava tubes, and steam vents in Hawaii Volcanoes National Park.",
    images: [
      "/images/tours/hawaii/kilauea.jpg",
      "/images/tours/hawaii/lava-fields.jpg",
    ],
    duration: "Full day",
    price: "$185",
    rating: 4.9,
    tags: ["Volcano", "National Park", "Hiking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Kekoa Kamealoha",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Will we see active lava flows?",
        answer:
          "Lava viewing depends entirely on current volcanic activity, which changes frequently. When flowing lava is accessible, we adjust our tour routes to include safe viewing opportunities. When no surface flows are active, we focus on recent lava fields, active steam vents, crater views, and the fascinating geology and ecology of the volcanic landscape.",
      },
    ],
  },
  {
    title: "Hawaiian Cultural Immersion & Luau",
    description:
      "Connect with authentic Hawaiian culture through traditional practices including lei-making, hula lessons, and a farm-to-table luau feast featuring local ingredients and ancient cooking methods.",
    images: [
      "/images/tours/hawaii/hula-lesson.jpg",
      "/images/tours/hawaii/traditional-luau.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.8,
    tags: ["Cultural", "Luau", "Traditional"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Leilani Kealoha",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How is this luau different from the large commercial ones?",
        answer:
          "Our cultural immersion experience limits participation to small groups (maximum 24 guests) for a more intimate and authentic experience. Instead of a buffet line, food is prepared using traditional imu (underground oven) methods. The cultural activities are hands-on and participatory rather than merely demonstrative, and our hosts share genuine family traditions passed down through generations.",
      },
    ],
  },
];

export default hawaiiTours;
