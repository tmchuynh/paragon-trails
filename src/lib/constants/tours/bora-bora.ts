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
  {
    title: "Bora Bora Cultural Village Tour",
    description:
      "Immerse yourself in the rich culture of Bora Bora with a guided tour of a traditional Polynesian village, including dance performances, craft demonstrations, and a taste of local cuisine.",
    images: [
      "/images/tours/bora-bora/cultural-village.jpg",
      "/images/tours/bora-bora/polynesian-dance.jpg",
    ],
    duration: "4 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Culture", "History", "Local Experience"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Raimiti Tereva",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What can I expect to see during the tour?",
        answer:
          "You will experience traditional Polynesian dance, learn about local crafts such as weaving and carving, and enjoy a tasting of authentic Bora Bora cuisine.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and performances.",
      },
      {
        question: "Do I need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot.",
      },
      {
        question: "What should I wear for the cultural village tour?",
        answer:
          "Comfortable clothing suitable for warm weather is recommended. Closed-toe shoes are advisable as some areas may have uneven terrain.",
      },
    ],
  },
  {
    title: "Bora Bora Island Hopping & Beach BBQ",
    description:
      "Explore the stunning islands surrounding Bora Bora on a private boat tour, stopping at secluded beaches for swimming and a beach BBQ featuring fresh seafood and tropical fruits.",
    images: [
      "/images/tours/bora-bora/island-hopping.jpg",
      "/images/tours/bora-bora/beach-bbq.jpg",
    ],
    duration: "5 hours",
    price: "$180",
    rating: 4.9,
    tags: ["Island Hopping", "BBQ", "Adventure"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Hiro Tane",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What should I bring for the island hopping tour?",
        answer:
          "Please bring swimwear, sunscreen, a hat, a towel, and any personal items you may need. We provide snorkeling gear and beach towels.",
      },
      {
        question: "Is the BBQ suitable for vegetarians?",
        answer:
          "Yes, we can accommodate vegetarian options upon request. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "Are there any age restrictions for this tour?",
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
    title: "Bora Bora Starry Night Lagoon Cruise",
    description:
      "Experience the magic of Bora Bora's night sky with a romantic lagoon cruise, stargazing under the clear Polynesian skies while enjoying cocktails and light snacks.",
    images: [
      "/images/tours/bora-bora/starry-night.jpg",
      "/images/tours/bora-bora/lagoon-cruise-night.jpg",
    ],
    duration: "2.5 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Nightlife", "Romantic", "Scenic"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Tiare Nui",
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What should I wear for the night cruise?",
        answer:
          "Dress comfortably! Light layers are recommended as it can get cooler on the water in the evening. Comfortable shoes are also advisable.",
      },
      {
        question: "Is food and drink included?",
        answer:
          "Yes, light snacks and non-alcoholic beverages are included. A full bar is available for purchase on board.",
      },
      {
        question: "Can we bring our own food or drinks?",
        answer:
          "Outside food and drinks are not allowed, but you can purchase items from our onboard menu.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "In case of inclement weather, we will reschedule your tour or provide a full refund if rescheduling is not possible.",
      },
    ],
  },
];
