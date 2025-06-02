import { Tour } from "@/lib/interfaces/services/tours";

export const boraBoraTours: Tour[] = [
  {
    title: "Luxury Lagoon Cruise & Snorkeling Adventure",
    description:
      "Sail the turquoise waters of Bora Bora's famous lagoon on a private boat, snorkeling with tropical fish, rays, and reef sharks in pristine coral gardens.",
    city: "Bora Bora",
    country: "French Polynesia",
    region: "Society Islands",
    images: [
      "/images/tours/bora-bora/lagoon-cruise.jpg",
      "/images/tours/bora-bora/snorkeling.jpg",
    ],
    duration: "6 hours",
    price: "$195",
    rating: 5.0,
    tags: ["Snorkeling", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "luxury",
    meetingPoint: {
      address: "Vaitape Main Pier, Bora Bora, French Polynesia",
      coordinates: {
        latitude: -16.5004,
        longitude: -151.7415,
      },
      instructions:
        "Meet your guide at the main pier in Vaitape. Your captain will be waiting for you with a sign bearing your name and the Paragon Trails logo. Please arrive 15 minutes before your scheduled departure time. If you're staying at a resort, we can arrange pickup directly from your hotel's beach or dock.",
      contactNumber: "+689 40 60 70 80",
      contactEmail: "borabora@paragontrails.com",
    },
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
    city: "Bora Bora",
    country: "French Polynesia",
    region: "Society Islands",
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
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "romantic",
    meetingPoint: {
      address: "Matira Beach, Bora Bora, French Polynesia",
      coordinates: {
        latitude: -16.5408,
        longitude: -151.7467,
      },
      instructions:
        "Meet your host at the southern end of Matira Beach, near the small palm grove. Your guide will be setting up an elegant picnic area with a white canopy. Resort pickup can be arranged with advance notice for properties on the main island.",
      contactNumber: "+689 40 60 80 90",
      contactEmail: "sunset@paragontrails.com",
    },
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
      {
        question: "What happens if it rains during our sunset experience?",
        answer:
          "Bora Bora experiences brief tropical showers that often pass quickly, but if substantial rain is forecast, we will contact you to reschedule or offer a sheltered alternative at one of our partner restaurants with sunset views. If rescheduling isn't possible during your stay, we provide a full refund.",
      },
    ],
  },
  {
    title: "Bora Bora Cultural Village Tour",
    description:
      "Immerse yourself in the rich culture of Bora Bora with a guided tour of a traditional Polynesian village, including dance performances, craft demonstrations, and a taste of local cuisine.",
    city: "Bora Bora",
    country: "French Polynesia",
    region: "Society Islands",
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
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: true,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Fa'anui Village, Bora Bora, French Polynesia",
      coordinates: {
        latitude: -16.4917,
        longitude: -151.75,
      },
      instructions:
        "Meet at the community center in Fa'anui village on the main island. Your guide will greet you wearing traditional Polynesian attire with a flower lei. Complimentary shuttle service is available from major resorts and the Vaitape port area.",
      contactNumber: "+689 40 67 89 10",
      contactEmail: "culture@paragontrails.com",
    },
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
      {
        question: "Is photography allowed during the cultural performances?",
        answer:
          "Photography is welcomed during most parts of the tour, including the dance performances. However, there may be certain spiritual ceremonies or private family traditions where photography is temporarily restricted out of respect. Your guide will clearly indicate these moments.",
      },
    ],
  },
  {
    title: "Bora Bora Island Hopping & Beach BBQ",
    description:
      "Explore the stunning islands surrounding Bora Bora on a private boat tour, stopping at secluded beaches for swimming and a beach BBQ featuring fresh seafood and tropical fruits.",
    city: "Bora Bora",
    country: "French Polynesia",
    region: "Society Islands",
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
    isPopular: true,
    isAdventure: true,
    isCultural: false,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "adventure",
    meetingPoint: {
      address: "Vaitape Main Pier, Bora Bora, French Polynesia",
      coordinates: {
        latitude: -16.5004,
        longitude: -151.7415,
      },
      instructions:
        "Meet your captain at the main pier in Vaitape. Look for a crew member holding a sign with 'Island Hopping Tour' written on it. Please arrive 15 minutes before departure. We can also arrange pickup from most resort docks - please request this when booking.",
      contactNumber: "+689 40 87 65 43",
      contactEmail: "islands@paragontrails.com",
    },
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
      {
        question: "What islands will we visit on this tour?",
        answer:
          "The tour typically includes visits to 3-4 small motus (islets) around Bora Bora's lagoon, including Motu Tapu, known for its pristine beaches, Motu Taufarii with excellent snorkeling, and at least one secluded island where we set up the beach BBQ. The specific itinerary may adjust based on weather conditions and guest preferences.",
      },
    ],
  },
  {
    title: "Bora Bora Starry Night Lagoon Cruise",
    description:
      "Experience the magic of Bora Bora's night sky with a romantic lagoon cruise, stargazing under the clear Polynesian skies while enjoying cocktails and light snacks.",
    city: "Bora Bora",
    country: "French Polynesia",
    region: "Society Islands",
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
    isPopular: true,
    isAdventure: false,
    isCultural: false,
    isCulinary: false,
    isSpiritual: true,
    isNightlife: true,
    isWellness: true,
    isLuxury: true,
    isArtOrMusic: false,
    tourCategoryId: "nightlife",
    meetingPoint: {
      address:
        "St. Regis Bora Bora Resort Dock, Motu Ome'e BP 506, Bora Bora, French Polynesia",
      coordinates: {
        latitude: -16.4986,
        longitude: -151.689,
      },
      instructions:
        "The cruise departs from the main dock at the St. Regis Resort. If you're not staying at the St. Regis, we offer pickup service from other major resorts. Your captain will meet you at your resort's dock at the scheduled time. Please be ready 15 minutes before your scheduled departure time.",
      contactNumber: "+689 40 12 34 56",
      contactEmail: "stargazing@paragontrails.com",
    },
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
      {
        question:
          "Will there be a guide to explain the southern hemisphere stars?",
        answer:
          "Yes, your experience includes a knowledgeable guide who will point out spectacular southern hemisphere constellations not visible from northern latitudes, including the Southern Cross, Magellanic Clouds, and Alpha Centauri. We provide high-quality binoculars and use laser pointers to indicate celestial objects. On select dates, we partner with a professional astronomer who brings a portable telescope.",
      },
      {
        question:
          "How is this cruise different from daytime lagoon excursions?",
        answer:
          "The nighttime cruise offers a completely different perspective of Bora Bora. Without daylight, the clarity of the stars against the dark sky is breathtaking. The lagoon takes on a magical quality as bioluminescent plankton sometimes create trails of blue light in our wake. The experience is more intimate and focused on atmosphere and romance rather than activities like snorkeling or island visits.",
      },
    ],
  },
];

export default boraBoraTours;
