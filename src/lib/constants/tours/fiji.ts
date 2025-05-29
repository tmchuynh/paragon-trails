import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const fijiTours: Tour[] = [
  {
    title: "Island Hopping Adventure: Yasawa Islands Exploration",
    description:
      "Discover the pristine Yasawa Islands on this island-hopping adventure, with white sand beaches, spectacular coral reefs, and authentic cultural experiences in traditional Fijian villages.",
    images: [
      "/images/tours/fiji/yasawa-islands.jpg",
      "/images/tours/fiji/blue-lagoon.jpg",
    ],
    duration: "5 days",
    price: "$1,250",
    rating: 4.9,
    tags: ["Islands", "Snorkeling", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("fiji", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What islands will we visit?",
        answer:
          "The tour includes stops at Waya, Naviti, and the Blue Lagoon region, with the exact islands determined by weather conditions. Each offers a distinct landscape from volcanic formations to pristine beaches.",
      },
      {
        question: "Is accommodation included?",
        answer:
          "Yes, the tour includes 4 nights in a mix of beachfront bures (traditional Fijian bungalows) and eco-resorts on different islands. All accommodations are carefully selected for comfort, authenticity, and stunning locations.",
      },
      {
        question: "What should I pack?",
        answer:
          "Pack light! Bring swimwear, sun protection, reef-safe sunscreen, lightweight clothing, a hat, sturdy sandals, and a refillable water bottle. Don't forget your camera and any necessary medications.",
      },
    ],
  },
  {
    title: "Traditional Fijian Village Stay & Cultural Immersion",
    description:
      "Experience authentic Fijian life with a homestay in a traditional village, participating in daily activities, ceremonies, and learning about indigenous customs, traditions, and sustainable practices.",
    images: [
      "/images/tours/fiji/kava-ceremony.jpg",
      "/images/tours/fiji/village-life.jpg",
    ],
    duration: "3 days",
    price: "$550",
    rating: 4.8,
    tags: ["Cultural", "Village", "Homestay"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("fiji", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is a typical day like during the village stay?",
        answer:
          "Days begin with breakfast with your host family, followed by participating in daily village activities such as farming, fishing, weaving, or cooking. Afternoons include cultural workshops and community gatherings. Evenings feature shared meals, storytelling, and often music or dance.",
      },
      {
        question: "What are the sleeping arrangements?",
        answer:
          "Accommodation is in a family home or traditional bure (thatched hut) within the village. Facilities are simple but clean, with basic bathrooms that may be shared. Sleeping arrangements are typically on comfortable mats with clean bedding.",
      },
      {
        question: "What cultural protocols should I be aware of?",
        answer:
          "Our guide will brief you thoroughly, but key protocols include presenting a sevusevu (kava offering) to the chief, dressing modestly (covering shoulders and knees), removing hats in the village, and not touching anyone's head as it's considered sacred. These signs of respect are greatly appreciated by your hosts.",
      },
    ],
  },
  {
    title: "Fiji Marine Conservation Experience",
    description:
      "Combine adventure with purpose by joining marine biologists in coral reef restoration efforts, endangered sea turtle monitoring, and sustainable fishing practices, all while enjoying pristine beaches and world-class snorkeling.",
    images: [
      "/images/tours/fiji/coral-planting.jpg",
      "/images/tours/fiji/turtle-monitoring.jpg",
    ],
    duration: "7 days",
    price: "$1,850",
    rating: 4.7,
    tags: ["Conservation", "Marine Life", "Educational"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("fiji", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need scientific knowledge to participate?",
        answer:
          "No prior scientific experience is necessary. Our marine biologists provide comprehensive training in all conservation techniques, data collection methods, and species identification at the beginning of your stay.",
      },
      {
        question: "What conservation activities will I participate in?",
        answer:
          "Activities vary based on seasonal needs but typically include coral fragmentation and planting, reef health surveys, beach cleanups, turtle nesting site monitoring, and community education projects. You'll typically spend 4-5 hours daily on these activities.",
      },
      {
        question: "Is this suitable for families?",
        answer:
          "The program is best suited for families with children aged 12+ due to the nature of the activities. Younger children may participate in modified activities with parental supervision.",
      },
    ],
  },
  {
    title: "Luxury Private Island Retreat",
    description:
      "Escape to your own private island paradise with this exclusive retreat featuring overwater bungalows, personal butler service, world-class diving, gourmet dining, and bespoke experiences tailored to your preferences.",
    images: [
      "/images/tours/fiji/overwater-bungalow.jpg",
      "/images/tours/fiji/private-island.jpg",
    ],
    duration: "5 days",
    price: "$5,950",
    rating: 5.0,
    tags: ["Luxury", "Private Island", "Exclusive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("fiji", "luxury").name,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How do we reach the private island?",
        answer:
          "Transportation is via private seaplane or luxury boat transfer, depending on your preference and weather conditions. The journey itself offers spectacular aerial views of the Fijian archipelago and is part of the luxury experience.",
      },
      {
        question: "What's included in the luxury package?",
        answer:
          "The package includes accommodation in a premium overwater bungalow, all meals and premium beverages, daily spa treatment, private snorkeling and diving excursions, sunset cruise, island picnics, and personalized activities based on your interests.",
      },
      {
        question: "Can special occasions be arranged?",
        answer:
          "Absolutely! We specialize in creating memorable celebrations for anniversaries, honeymoons, and special birthdays. Options include private beach dinners under the stars, champagne breakfast on a secluded sandbank, or traditional Fijian blessing ceremonies.",
      },
    ],
  },
  {
    title: "Fiji Adventure Sports & Watersports Package",
    description:
      "Experience the adrenaline rush of Fiji's best adventure activities with this action-packed package including white water rafting, zip-lining through rainforest canopies, surfing, jet skiing, and parasailing.",
    images: [
      "/images/tours/fiji/white-water-rafting.jpg",
      "/images/tours/fiji/zip-lining.jpg",
    ],
    duration: "6 days",
    price: "$1,450",
    rating: 4.7,
    tags: ["Adventure", "Watersports", "Action"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("fiji", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What skill level is required for the activities?",
        answer:
          "Most activities are suitable for beginners and intermediates. No prior experience is necessary as professional instructors provide comprehensive safety briefings and guidance for each activity.",
      },
      {
        question: "Are all equipment and gear included?",
        answer:
          "Yes, all necessary equipment, safety gear, and instruction are included in the package price. Just bring appropriate clothing, swimwear, and sunscreen.",
      },
      {
        question: "What is the minimum age requirement?",
        answer:
          "The minimum age for most activities is 12 years, though some activities like white water rafting have a minimum age of 15. Alternative activities can be arranged for younger children.",
      },
    ],
  },
];

export default fijiTours;
