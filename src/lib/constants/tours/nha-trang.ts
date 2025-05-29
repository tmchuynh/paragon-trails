import { Tour } from "@/lib/interfaces/services/tours";

export const nhaTrangTours: Tour[] = [
  {
    title: "Island Hopping & Snorkeling Adventure",
    description:
      "Discover the pristine waters and hidden beaches of Nha Trang Bay with stops at four islands for swimming, snorkeling, and relaxing.",
    images: [
      "/images/tours/nha-trang/island-hopping.jpg",
      "/images/tours/nha-trang/snorkeling.jpg",
    ],
    duration: "Full day",
    price: "$45",
    rating: 4.7,
    tags: ["Beach", "Snorkeling", "Islands"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Tran Minh",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "Basic swimming skills are recommended, but life jackets are provided for all guests during snorkeling activities.",
      },
      {
        question: "What should I bring for the island hopping tour?",
        answer:
          "Please bring swimwear, sunscreen, a hat, a towel, and any personal items you may need. Snorkeling gear is provided.",
      },
      {
        question: "Are meals included in the tour price?",
        answer:
          "Yes, a seafood lunch is included during the tour. Please inform us of any dietary restrictions in advance.",
      },
      {
        question: "Is there an age limit for this tour?",
        answer:
          "This tour is suitable for all ages. Children must be accompanied by an adult.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Mud Bath Spa & Hot Springs Experience",
    description:
      "Relax and rejuvenate with Nha Trang's famous mud baths, mineral hot springs, and spa treatments in a beautiful natural setting.",
    images: [
      "/images/tours/nha-trang/mud-bath.jpg",
      "/images/tours/nha-trang/hot-springs.jpg",
    ],
    duration: "4 hours",
    price: "$35",
    rating: 4.8,
    tags: ["Spa", "Relaxation", "Wellness"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Linh Nguyen",
    tourCategoryId: "wellness",
    faqs: [
      {
        question: "What should I bring for the mud bath experience?",
        answer:
          "Just bring your swimwear and a towel. Lockers, showers, and all necessary facilities are provided at the spa.",
      },
      {
        question: "Is the mud bath suitable for children?",
        answer:
          "Yes, the mud baths are family-friendly and safe for children. However, parental supervision is required.",
      },
      {
        question: "Are there any health restrictions for the hot springs?",
        answer:
          "Guests with certain medical conditions (e.g., heart issues, skin conditions) should consult their doctor before using the hot springs. Please inform your tour guide of any concerns.",
      },
      {
        question: "Can I book spa treatments in advance?",
        answer:
          "Yes, you can pre-book additional spa treatments like massages or facials when you book the tour. Please let us know your preferences.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Nha Trang City Highlights Tour",
    description:
      "Explore the best of Nha Trang with visits to the Po Nagar Cham Towers, Long Son Pagoda, and the vibrant local markets.",
    images: [
      "/images/tours/nha-trang/po-nagar.jpg",
      "/images/tours/nha-trang/long-son-pagoda.jpg",
    ],
    duration: "Half day",
    price: "$30",
    rating: 4.6,
    tags: ["Culture", "History", "Sightseeing"],
 
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Hoang Duy",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Are entrance fees included in the tour price?",
        answer:
          "Yes, all entrance fees to attractions are included in the tour price.",
      },
      {
        question: "What should I wear for the city tour?",
        answer:
          "Comfortable clothing and walking shoes are recommended. Please dress modestly when visiting religious sites.",
      },
      {
        question: "Is transportation provided during the tour?",
        answer:
          "Yes, transportation is included. We provide air-conditioned vehicles for your comfort.",
      },
      {
        question: "Can I customize the itinerary?",
        answer:
          "Yes, we can tailor the tour to your interests. Please let us know in advance if you have specific requests.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Nha Trang Night Market & Street Food Tour",
    description:
      "Experience the vibrant atmosphere of Nha Trang's night market with a guided food tour, sampling local delicacies and street food favorites.",
    images: [
      "/images/tours/nha-trang/night-market.jpg",
      "/images/tours/nha-trang/street-food.jpg",
    ],
    duration: "3 hours",
    price: "$25",
    rating: 4.9,
    tags: ["Food", "Nightlife", "Culture"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Nguyen Thi Mai",
    tourCategoryId: "food",
    faqs: [
      {
        question: "Is the food tour suitable for vegetarians?",
        answer:
          "Yes, we can accommodate vegetarian preferences. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What should I bring for the night market tour?",
        answer:
          "Just bring your appetite! Comfortable shoes are recommended as we will be walking through the market.",
      },
      {
        question: "Are drinks included in the tour price?",
        answer:
          "Beverages are not included, but we will recommend local drinks to try at your own expense.",
      },
      {
        question: "Can I take photos during the food tour?",
        answer:
          "Absolutely! We encourage you to capture the vibrant sights and delicious dishes throughout the tour.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Nha Trang Sunset Cruise",
    description:
      "Enjoy a romantic sunset cruise on Nha Trang Bay, complete with live music, cocktails, and stunning views of the coastline.",
    images: [
      "/images/tours/nha-trang/sunset-cruise.jpg",
      "/images/tours/nha-trang/cocktails.jpg",
    ],
    duration: "2 hours",
    price: "$50",
    rating: 4.8,
    tags: ["Romantic", "Cruise", "Sunset"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Pham Quang",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Is dinner included in the cruise?",
        answer:
          "Light snacks and drinks are included, but a full dinner is not provided. You can order additional food on board.",
      },
      {
        question: "What should I wear for the sunset cruise?",
        answer:
          "Smart casual attire is recommended. A light jacket may be needed as it can get cooler on the water in the evening.",
      },
      {
        question: "Can we book a private cruise for special occasions?",
        answer:
          "Yes, we offer private sunset cruises for special occasions like anniversaries or proposals. Please contact us for details.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
      {
        question: "Are there any age restrictions for this tour?",
        answer:
          "This tour is suitable for all ages, but children must be accompanied by an adult.",
      },
    ],
  },
];

export default nhaTrangTours;
