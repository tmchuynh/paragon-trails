import { Tour } from "@/lib/interfaces/services/tours";

export const cannesTours: Tour[] = [
  {
    title: "Cannes Film Festival Experience",
    description:
      "Experience the glamour of the world's most prestigious film festival with red carpet access, film screenings, and insider knowledge about the festival's history and impact on global cinema.",
    images: [
      "/images/tours/cannes/red-carpet.jpg",
      "/images/tours/cannes/film-festival.jpg",
    ],
    duration: "6 hours",
    price: "$295",
    rating: 4.9,
    tags: ["Film Festival", "Celebrity", "Exclusive"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Can we actually attend a film screening?",
        answer:
          "Yes, this experience includes tickets to one official selection screening. During the festival, availability depends on the festival schedule, but our connections allow us to secure access to screenings that aren't available to the general public. Outside festival dates, we arrange private screenings of past Palme d'Or winners.",
      },
      {
        question: "What should I wear for the red carpet?",
        answer:
          "Dress to impress! While formal attire is not mandatory, we recommend smart casual or cocktail attire. If you want to go all out, feel free to wear evening gowns or suits. We can also arrange professional hair and makeup services for an additional fee.",
      },
    ],
  },
  {
    title: "French Riviera Coastal Cruise",
    description:
      "Sail the crystal waters of the Côte d'Azur aboard a luxury yacht, visiting secluded bays, seaside villages, and glamorous ports between Cannes and Saint-Tropez with champagne lunch included.",
    images: [
      "/images/tours/cannes/yacht-cruise.jpg",
      "/images/tours/cannes/coastal-view.jpg",
    ],
    duration: "7 hours",
    price: "$450",
    rating: 4.8,
    tags: ["Yacht", "Coastal", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Is swimming possible during the cruise?",
        answer:
          "Absolutely! We make 2-3 swimming stops in beautiful secluded coves with crystal-clear water. The yacht is equipped with snorkeling gear, paddleboards, and a swimming platform for easy access to the water.",
      },
      {
        question: "What should I bring for the cruise?",
        answer:
          "We recommend swimwear, sunscreen, a hat, and a light jacket for the evening. Towels and snorkeling gear are provided onboard. Feel free to bring your own drinks or snacks, but we also have a full bar and catering service available.",
      },
    ],
  },
  {
    title: "Cannes Culinary Delights Tour",
    description:
      "Indulge in the flavors of the French Riviera with a guided food tour through Cannes, sampling local delicacies, visiting markets, and dining at renowned restaurants.",
    images: [
      "/images/tours/cannes/culinary-tour.jpg",
      "/images/tours/cannes/local-market.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Culinary", "Local", "Gourmet"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Are vegetarian options available?",
        answer:
          "Yes, we can accommodate vegetarians and vegans with advance notice. Please inform us of any dietary restrictions when booking.",
      },
      {
        question: "What types of food will we sample?",
        answer:
          "You'll taste a variety of local specialties including fresh seafood, Provençal vegetables, artisanal cheeses, and traditional pastries. We also visit local markets to experience the vibrant food culture of Cannes.",
      },
    ],
  },
  {
    title: "Cannes Art & Culture Walk",
    description:
      "Explore Cannes' rich artistic heritage with a guided walking tour of its galleries, museums, and historic sites, including the Palais des Festivals and the charming Le Suquet district.",
    images: [
      "/images/tours/cannes/art-walk.jpg",
      "/images/tours/cannes/le-suquet.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.6,
    tags: ["Art", "Culture", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What will we see during the art walk?",
        answer:
          "The tour includes visits to local art galleries, the Musée de la Castre, and the historic Le Suquet district with its stunning views of Cannes. We also discuss the influence of film and art on the city's culture.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and storytelling.",
      },
    ],
  },
  {
    title: "Cannes Nightlife Experience",
    description:
      "Experience the vibrant nightlife of Cannes with a guided tour of its best bars, clubs, and lounges, including VIP access to exclusive venues.",
    images: [
      "/images/tours/cannes/nightlife.jpg",
      "/images/tours/cannes/vip-club.jpg",
    ],
    duration: "5 hours",
    price: "$200",
    rating: 4.8,
    tags: ["Nightlife", "VIP", "Party"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "What types of venues will we visit?",
        answer:
          "The tour includes a mix of trendy bars, upscale lounges, and exclusive nightclubs. We ensure a diverse experience with something for everyone, from cocktail bars to dance clubs.",
      },
      {
        question: "Is transportation included?",
        answer:
          "Yes, we provide round-trip transportation from your hotel or accommodation in Cannes. Our guides will ensure you have a safe and enjoyable night out.",
      },
    ],
  },
  {
    title: "Cannes Luxury Shopping Tour",
    description:
      "Shop like a celebrity with a personal shopping experience in Cannes, visiting high-end boutiques, designer stores, and exclusive showrooms with a fashion expert.",
    images: [
      "/images/tours/cannes/luxury-shopping.jpg",
      "/images/tours/cannes/designer-boutique.jpg",
    ],
    duration: "4 hours",
    price: "$350",
    rating: 4.9,
    tags: ["Shopping", "Luxury", "Fashion"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "Can we customize the shopping experience?",
        answer:
          "Absolutely! We tailor the tour to your preferences, whether you're looking for haute couture, jewelry, or local artisan products. Just let us know your interests when booking.",
      },
      {
        question: "Do you offer personal styling services?",
        answer:
          "Yes, our fashion expert can provide personal styling advice and help you find pieces that suit your style and body type. We can also arrange private fittings at select boutiques.",
      },
    ],
  },
  {
    title: "Cannes Yacht Party",
    description:
      "Host an unforgettable yacht party in Cannes with a private luxury yacht, complete with catering, music, and stunning views of the French Riviera.",
    images: [
      "/images/tours/cannes/yacht-party.jpg",
      "/images/tours/cannes/party-on-deck.jpg",
    ],
    duration: "4 hours",
    price: "$600",
    rating: 4.9,
    tags: ["Yacht", "Party", "Luxury"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What amenities are included on the yacht?",
        answer:
          "The yacht is fully equipped with a sound system, sun deck, lounge area, and dining space. Catering options include gourmet meals, snacks, and beverages tailored to your preferences.",
      },
      {
        question: "Can we customize the party theme?",
        answer:
          "Yes! We can arrange themed decorations, music playlists, and special requests to make your yacht party unique. Just let us know your ideas when booking.",
      },
    ],
  },
];

export default cannesTours;
