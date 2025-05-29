import { Tour } from "@/lib/interfaces/services/tours";

export const jamaicaTours: Tour[] = [
  {
    title: "Blue Mountain Coffee & Plantation Experience",
    description:
      "Journey to the misty peaks of Jamaica's Blue Mountains to discover one of the world's most coveted coffees. Visit working plantations, meet local farmers, learn traditional harvesting methods, and participate in an expert-led cupping session.",
    images: [
      "/images/tours/jamaica/blue-mountain-plantation.jpg",
      "/images/tours/jamaica/coffee-tasting.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Coffee", "Mountains", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Marcus Bennett",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is there a lot of walking on this tour?",
        answer:
          "The tour includes moderate walking through plantation grounds with some uphill sections on uneven terrain. We spend approximately 1-2 hours walking through the coffee farms, with plenty of rest stops. Comfortable walking shoes are recommended, but the pace is leisurely and suitable for most fitness levels.",
      },
    ],
  },
  {
    title: "Secret Waterfalls & Hidden Lagoons",
    description:
      "Escape the crowds and discover Jamaica's hidden waterfalls and natural swimming holes known only to locals. Trek through lush rainforest, slide down natural rock formations, and jump into pristine blue pools under the guidance of native Jamaican guides.",
    images: [
      "/images/tours/jamaica/hidden-falls.jpg",
      "/images/tours/jamaica/natural-pool.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Waterfalls", "Swimming", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Devon Richards",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "Basic swimming ability is recommended for fully enjoying the natural pools, but it's not required for the entire tour. Non-swimmers can still enjoy the beautiful hikes, smaller wading pools, and scenic viewpoints. Our guides are trained in water safety and can provide additional assistance to less confident swimmers.",
      },
    ],
  },
  {
    title: "Rastafarian Cultural Immersion",
    description:
      "Gain authentic insight into Jamaica's Rastafarian heritage with a respectful visit to a Rastafari village. Learn about Nyabinghi traditions, natural living principles, Ital cooking techniques, and the global impact of Rastafari culture and philosophy.",
    images: [
      "/images/tours/jamaica/rastafarian-village.jpg",
      "/images/tours/jamaica/ital-cooking.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cultural", "Spiritual", "Educational"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Brother Isaiah",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this an authentic experience or staged for tourists?",
        answer:
          "This is a genuine cultural exchange, not a performance. We've developed this tour in partnership with Rastafarian elders to create respectful cultural bridges. You'll visit actual Rastafarian communities and interact with people living the Rastafarian way of life. Questions are welcomed, but visitors are asked to approach with an open mind and respect for the community's customs and beliefs.",
      },
    ],
  },
  {
    title: "Reggae History & Music Studio Experience",
    description:
      "Trace the evolution of reggae music from its roots to global phenomenon with visits to iconic recording studios, museums, and the birthplace of Bob Marley. Meet working musicians and try your hand at creating reggae rhythms in a professional studio session.",
    images: [
      "/images/tours/jamaica/tuff-gong-studio.jpg",
      "/images/tours/jamaica/reggae-museum.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Music", "Reggae", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Leroy Brown, Studio Musician",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we meet famous reggae artists?",
        answer:
          "While we can't guarantee specific artist encounters as their schedules vary, our tour often coincides with working musicians in the studio. Our guide has long-standing relationships in the reggae community, and spontaneous meetings with notable artists do occur. Regardless, you'll interact with talented session musicians who have played on countless reggae recordings and can share insider stories about the industry.",
      },
    ],
  },
  {
    title: "Luminous Lagoon Night Bioluminescence Experience",
    description:
      "Witness the magical phenomenon of bioluminescence at Jamaica's Luminous Lagoon, one of the world's brightest bioluminescent bays. Cruise into the glowing waters after sunset and swim surrounded by millions of harmless dinoflagellates that illuminate with your movement.",
    images: [
      "/images/tours/jamaica/luminous-lagoon.jpg",
      "/images/tours/jamaica/bioluminescence-swimming.jpg",
    ],
    duration: "3 hours",
    price: "$89",
    rating: 4.8,
    tags: ["Natural Wonder", "Night Tour", "Swimming"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Marlon James",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to see the bioluminescence?",
        answer:
          "The bioluminescent organisms are visible year-round, but they appear brightest on darker nights with minimal moonlight. The phenomenon is also somewhat weather-dependent. Our tour operator monitors conditions daily and will advise if visibility might be compromised. Swimming in the lagoon is optional but highly recommended for the full experience of seeing the water glow around you.",
      },
    ],
  },
  {
    title: "Jamaican Culinary Adventure & Cooking Class",
    description:
      "Discover the vibrant flavors of Jamaican cuisine through market visits, rum tastings, and hands-on cooking classes. Learn to prepare authentic jerk chicken, ackee and saltfish, festival bread, and rum punch under the guidance of a local chef.",
    images: [
      "/images/tours/jamaica/jerk-cooking.jpg",
      "/images/tours/jamaica/market-spices.jpg",
    ],
    duration: "7 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Cooking", "Food", "Rum"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Suzanne Bailey",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can adapt recipes for vegetarian, vegan, gluten-free, and most other dietary needs with advance notice. Jamaican cuisine naturally includes many plant-based dishes influenced by Rastafarian Ital cooking traditions, so there are excellent options for non-meat eaters. Please inform us of any allergies or restrictions when booking so we can prepare appropriate alternatives.",
      },
    ],
  },
];

export default jamaicaTours;
