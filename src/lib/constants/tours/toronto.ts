import { Tour } from "@/lib/interfaces/services/tours";

const torontoTours: Tour[] = [
  {
    title: "Toronto Islands & Urban Kayaking Adventure",
    description:
      "Experience Toronto from a unique perspective with a guided kayaking tour around the harbor and Toronto Islands, offering spectacular city skyline views and peaceful nature reserves just minutes from downtown.",
    images: [
      "/images/tours/toronto/kayaking-skyline.jpg",
      "/images/tours/toronto/toronto-islands.jpg",
    ],
    duration: "4 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Kayaking", "Outdoor", "City Views"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Nathan Miller",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is previous kayaking experience necessary?",
        answer:
          "No prior experience is needed! We use stable, user-friendly tandem kayaks, and provide full instruction before setting out. Our route stays in protected waters with minimal boat traffic, and our guides are certified kayak instructors who ensure your safety and comfort throughout the experience.",
      },
    ],
  },
  {
    title: "Multicultural Food Markets & Neighborhood Tour",
    description:
      "Explore Toronto's incredible cultural diversity through its vibrant neighborhoods and food markets, sampling authentic cuisines from around the world while learning about the immigrant communities that shaped the city.",
    images: [
      "/images/tours/toronto/kensington-market.jpg",
      "/images/tours/toronto/chinatown-food.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Cultural", "Markets"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Priya Sharma",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Which neighborhoods and cuisines will we experience?",
        answer:
          "Our tour typically explores 4-5 distinct neighborhoods including Kensington Market, Chinatown, Little Italy, Koreatown, and Little Portugal. You'll sample approximately 8-10 different foods representing Portuguese egg tarts, Chinese dumplings, Italian cannoli, Korean street food, Caribbean patties, and Canadian classics - all from family-run establishments selected for their authenticity and quality.",
      },
    ],
  },
];

export default torontoTours;
