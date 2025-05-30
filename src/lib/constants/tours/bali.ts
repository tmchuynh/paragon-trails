import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";
export const baliTours: Tour[] = [
  {
    title: "Sacred Temples & Water Purification Ceremony",
    description:
      "Experience Bali's spiritual heart with visits to ancient temples including Tirta Empul and Uluwatu, culminating in a traditional water purification ceremony guided by a local Hindu priest.",
    images: [
      "/images/tours/bali/tirta-empul.jpg",
      "/images/tours/bali/uluwatu-temple.jpg",
    ],
    duration: "Full day",
    price: "$120",
    rating: 4.9,
    tags: ["Spiritual", "Temples", "Cultural"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bali", "wellness").name,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question:
          "What should I wear for temple visits and the purification ceremony?",
        answer:
          "For temple visits, both men and women must wear a sarong and temple scarf (provided). For the water purification ritual, bring a change of clothes, as you'll get wet during the ceremony. Women should wear a t-shirt and knee-length shorts or leggings to wear in the sacred springs, rather than swimwear, out of respect for local customs.",
      },
      {
        question: "Is the water purification ceremony safe?",
        answer:
          "Yes, the water used in the purification ceremony is sourced from sacred springs and is considered holy. It is safe for participants, but those with open wounds or skin conditions should consult with our guide beforehand.",
      },
      {
        question:
          "Can children participate in the water purification ceremony?",
        answer:
          "Yes, children can participate in the ceremony. However, parents should ensure their children are comfortable with the experience, as it involves entering a sacred water spring.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "Please inform us of any dietary restrictions in advance. We can accommodate vegetarian, vegan, and gluten-free diets during the included lunch.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Ubud Art Villages & Jungle Swings",
    description:
      "Discover Bali's creative soul through visits to traditional craft villages specializing in woodcarving, batik, and silver, followed by an exhilarating jungle swing experience with rice terrace views.",
    images: [
      "/images/tours/bali/art-village.jpg",
      "/images/tours/bali/bali-swing.jpg",
    ],
    duration: "7 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Art", "Crafts", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bali", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is the jungle swing safe?",
        answer:
          "Yes, our selected swing facility uses professional equipment with multiple safety harnesses and trained staff. The swings are regularly inspected and maintained to international safety standards. For those who prefer a less adventurous experience, there are also 'nests' and stationary photo platforms offering similar spectacular views without the adrenaline rush.",
      },
      {
        question: "What should I wear for the jungle swing?",
        answer:
          "Wear comfortable clothing suitable for outdoor activities. Closed-toe shoes are recommended, and we suggest wearing a light jacket as it can get breezy in the jungle. Don't forget your camera for stunning photos!",
      },
      {
        question: "Can children participate in the jungle swing?",
        answer:
          "Yes, children can participate in the jungle swing, but they must be at least 5 years old and accompanied by an adult. Weight limits apply, so please check with our guide if you have concerns.",
      },
      {
        question: "Are there vegetarian options available for lunch?",
        answer:
          "Yes, we offer vegetarian options during the included lunch. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Bali Beaches & Sunset Dinner Cruise",
    description:
      "Relax on Bali's stunning beaches, followed by a luxurious sunset dinner cruise with live music and traditional Balinese dance performances.",
    images: [
      "/images/tours/bali/beach-relaxation.jpg",
      "/images/tours/bali/sunset-cruise.jpg",
    ],
    duration: "5 hours",
    price: "$110",
    rating: 4.7,
    tags: ["Beaches", "Cruise", "Sunset"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bali", "local").name,
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "What should I bring for the beach and cruise?",
        answer:
          "Bring sunscreen, a hat, sunglasses, swimwear, and a towel. We also recommend a light jacket for the evening cruise as it can get breezy on the water.",
      },
      {
        question: "Is the dinner included in the cruise?",
        answer:
          "Yes, the dinner is included in the cruise package. We offer a buffet with a variety of local and international dishes. Vegetarian options are available upon request.",
      },
      {
        question: "Can children participate in the cruise?",
        answer:
          "Yes, children are welcome on the cruise. There are activities and entertainment suitable for all ages.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Mount Batur Sunrise Trek & Hot Springs",
    description:
      "Embark on an early morning trek to the summit of Mount Batur for breathtaking sunrise views, followed by a relaxing soak in natural hot springs overlooking the volcano.",
    images: [
      "/images/tours/bali/mount-batur.jpg",
      "/images/tours/bali/hot-springs.jpg",
    ],
    duration: "Full day",
    price: "$130",
    rating: 4.9,
    tags: ["Adventure", "Hiking", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bali", "wellness").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult is the Mount Batur trek?",
        answer:
          "The trek is moderate in difficulty, suitable for most fitness levels. It involves a 2-hour hike to the summit, with some steep sections. Our guide will set a comfortable pace and provide support throughout the trek.",
      },
      {
        question: "What should I wear for the trek?",
        answer:
          "Wear comfortable hiking shoes, breathable clothing, and a light jacket as it can be chilly at the summit. We recommend bringing a small backpack for water and snacks.",
      },
      {
        question: "Are the hot springs included in the tour?",
        answer:
          "Yes, the entrance fee to the hot springs is included in the tour price. You can relax and enjoy the therapeutic benefits of the natural mineral waters after your trek.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
  {
    title: "Bali Cooking Class & Market Tour",
    description:
      "Immerse yourself in Balinese culture with a hands-on cooking class, starting with a guided tour of a local market to select fresh ingredients, followed by preparing traditional dishes.",
    images: [
      "/images/tours/bali/cooking-class.jpg",
      "/images/tours/bali/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Culinary", "Cooking Class", "Local Experience"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("bali", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Do I need prior cooking experience for the class?",
        answer:
          "No prior cooking experience is required. Our classes are designed for all skill levels, from beginners to experienced cooks. We provide step-by-step instructions and all necessary equipment.",
      },
      {
        question: "What types of dishes will we prepare?",
        answer:
          "You will learn to make classic Balinese dishes such as Nasi Goreng, Satay, and Lawar. Vegetarian options are available upon request.",
      },
      {
        question: "Is the market tour included in the price?",
        answer:
          "Yes, the market tour is included in the package. You will explore the market with your guide before heading to the cooking class location.",
      },
      {
        question: "What should I wear for the cooking class?",
        answer:
          "Wear comfortable clothing that you don't mind getting a little messy. An apron will be provided, but we recommend closed-toe shoes for safety.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 24 hours in advance will receive a full refund. Cancellations within 24 hours are non-refundable.",
      },
    ],
  },
];

export default baliTours;
