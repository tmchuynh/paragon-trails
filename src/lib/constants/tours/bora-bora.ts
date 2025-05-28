import { Tour } from "@/lib/interfaces/services/tours";

export const boraBoratours: Tour[] = [
  {
    title: "Luxury Lagoon Cruise & Snorkeling Adventure",
    description:
      "Sail the turquoise waters of Bora Bora's famous lagoon on a private boat, snorkeling with tropical fish, rays, and reef sharks in pristine coral gardens.",
    images: [
      "/images/tours/bora-bora/lagoon-cruise.jpg",
      "/images/tours/bora-bora/snorkeling.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Snorkeling", "Wildlife", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Tehani Marama",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "Basic swimming ability is recommended, but we provide high-quality flotation devices and our guides offer close supervision for less confident swimmers.",
      },
    ],
  },
  {
    title: "Mount Otemanu Sunset Champagne Experience",
    description:
      "Experience the magic of Bora Bora's iconic volcanic peak as the sun sets, with a private beach picnic featuring premium champagne and Polynesian delicacies.",
    images: [
      "/images/tours/bora-bora/otemanu-sunset.jpg",
      "/images/tours/bora-bora/beach-picnic.jpg",
    ],
    duration: "3 hours",
    price: "$250",
    rating: 4.9,
    tags: ["Sunset", "Romantic", "Gourmet"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Maeva Tehei",
    tourCategoryId: "romantic",
    faqs: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Absolutely! We can customize the menu for any dietary needs including vegetarian, vegan, gluten-free, and most allergies with advance notice.",
      },
    ],
  },
];

export default boraBoratours;
