import { Tour } from "@/lib/interfaces/services/tours";
export const zanzibarTours: Tour[] = [
  {
    title: "Stone Town & Spice Plantation Journey",
    description:
      "Explore the UNESCO-listed Stone Town with its Arabic architecture and complex history, then visit aromatic spice plantations to discover why Zanzibar earned its name as the 'Spice Island'.",
    images: [
      "/images/tours/zanzibar/stone-town.jpg",
      "/images/tours/zanzibar/spice-plantation.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["UNESCO", "Cultural", "Spices"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Salim Abdullah",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What will we learn about at the spice plantations?",
        answer:
          "You'll discover how spices like cinnamon, cloves, nutmeg, vanilla, cardamom, and black pepper are grown and harvested. Our guide demonstrates traditional uses beyond cooking, including medicinal applications and beauty treatments. You'll have the opportunity to taste fresh spices, tropical fruits, and spiced tea during the tour.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and engaging for children. Kids especially enjoy the interactive elements at the spice plantation where they can smell, touch, and taste different spices and tropical fruits. Our guides adapt their explanations to be entertaining and educational for younger visitors, though parents should note there is moderate walking involved throughout Stone Town's narrow streets.",
      },
      {
        question: "How much walking is involved in this tour?",
        answer:
          "The tour involves approximately 2-3 miles (3-5 km) of walking in total, split between Stone Town's narrow streets and pathways through the spice plantation. In Stone Town, you'll navigate through winding alleyways with uneven surfaces, while the plantation portion involves gentle terrain with occasional steps. We maintain a comfortable pace with frequent stops for explanations and rest as needed.",
      },
      {
        question: "Will we have time for shopping in Stone Town?",
        answer:
          "Yes, we include dedicated time for shopping in Stone Town's markets and artisan shops. Your guide can direct you to reputable vendors for spices, Zanzibar doors, handcrafted jewelry, textiles, and other local specialties. We can help with price negotiations if needed, ensuring you get quality souvenirs at fair prices.",
      },
      {
        question: "What should I wear on this tour?",
        answer:
          "Zanzibar is predominantly Muslim, so modest dress is appreciated, especially in Stone Town. We recommend lightweight, breathable clothing that covers shoulders and knees (both men and women). Comfortable walking shoes are essential for the cobblestone streets. For the spice plantation portion, closed-toe shoes are recommended as the ground may be uneven or muddy during rainy season. Don't forget sun protection including a hat and sunscreen.",
      },
    ],
  },
  {
    title: "Blue Safari & Dolphin Spotting Adventure",
    description:
      "Sail traditional wooden dhows to pristine sandbanks and snorkeling spots teeming with marine life, with opportunities to spot wild dolphins in their natural habitat and feast on freshly caught seafood.",
    images: [
      "/images/tours/zanzibar/dhow-sailing.jpg",
      "/images/tours/zanzibar/dolphins.jpg",
    ],
    duration: "Full day",
    price: "$95",
    rating: 4.9,
    tags: ["Marine Life", "Snorkeling", "Dolphins"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Captain Juma",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Are dolphin sightings guaranteed?",
        answer:
          "While dolphin sightings are common (over 85% success rate), these are wild animals in their natural habitat, so sightings cannot be guaranteed. We follow responsible wildlife viewing practices, maintaining appropriate distances and limiting viewing time to minimize impact on the dolphins.",
      },
      {
        question: "Do I need to know how to swim for this tour?",
        answer:
          "Basic swimming ability is recommended to fully enjoy the snorkeling portions of the tour. However, we provide life jackets for everyone regardless of swimming ability, and our crew members can assist those who are less confident in the water. Non-swimmers can still enjoy the boat journey, sandbank visits, and dolphin watching from the boat.",
      },
      {
        question: "What should I bring for the boat trip?",
        answer:
          "We recommend bringing sunscreen (reef-safe preferred), a hat, sunglasses, towel, change of clothes, and a waterproof bag or case for electronics. Wear your swimwear under light clothing. Water shoes are helpful for the sandbank. Bring a light jacket or wrap as it can get breezy on the water, especially during the morning departure. We provide drinking water throughout the day, but you may want to bring additional beverages.",
      },
      {
        question: "Is lunch included in this tour?",
        answer:
          "Yes, a delicious seafood lunch is included, typically featuring grilled fish, lobster, calamari, and prawns (depending on the day's catch) accompanied by rice, tropical fruits, and vegetables. The lunch is prepared fresh on a portable grill set up on the sandbank. We can accommodate vegetarian options with advance notice, but please inform us of any dietary restrictions when booking.",
      },
      {
        question: "Is snorkeling equipment provided?",
        answer:
          "Yes, we provide masks, snorkels, and fins in various sizes for all guests. Our equipment is cleaned and sanitized between tours. If you prefer to use your own equipment, you're welcome to bring it. We also provide basic instruction for beginners and identify the best spots based on current conditions and your snorkeling experience level.",
      },
      {
        question: "How many people will be on the boat?",
        answer:
          "Our traditional dhow boats accommodate a maximum of 12 passengers to ensure everyone has enough space and receives personalized attention from our crew. For families or groups seeking more privacy, we offer private charter options at an additional cost. Each boat has shaded areas for sun protection and comfortable seating.",
      },
    ],
  },
];

export default zanzibarTours;
