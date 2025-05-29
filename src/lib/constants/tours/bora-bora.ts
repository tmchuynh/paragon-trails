import { Tour } from "@/lib/interfaces/services/tours";

export const boraBoraTours: Tour[] = [
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
      {
        question: "What should I bring for the snorkeling tour?",
        answer:
          "Please bring swimwear, sunscreen, a hat, a towel, and any personal items you may need. Snorkeling gear is provided.",
      },
      {
        question: "Are meals included in the tour price?",
        answer:
          "Yes, a gourmet picnic lunch with local delicacies is included during the cruise.",
      },
      {
        question: "Is there an age limit for this tour?",
        answer:
          "This tour is suitable for all ages. Children must be accompanied by an adult, and we provide life jackets for younger guests.",
      },
      {
        question: "What is the cancellation policy for this tour?",
        answer:
          "Cancellations made at least 48 hours in advance will receive a full refund. Cancellations within 48 hours are non-refundable.",
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
      {
        question: "What is the best time for the sunset experience?",
        answer:
          "We recommend starting the tour about 1.5 hours before sunset to ensure you have plenty of time to enjoy the views and the picnic.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your hotel or resort in Bora Bora.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "We recommend light, comfortable clothing suitable for warm weather. A light jacket may be useful as it can get cooler after sunset.",
      },
    ],
  },
];
