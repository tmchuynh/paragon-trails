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
  {
    title: "Jozani Forest & Red Colobus Monkey Experience",
    description:
      "Venture into the lush Jozani Forest, home to the endemic red colobus monkeys, with a guided nature walk through mangroves and tropical flora, learning about Zanzibar's unique ecosystems and conservation efforts.",
    images: [
      "/images/tours/zanzibar/jozani-forest.jpg",
      "/images/tours/zanzibar/red-colobus.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Wildlife", "Nature", "Conservation"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Amani Mwinyi",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What should I wear for the forest walk?",
        answer:
          "We recommend lightweight, breathable clothing that covers your arms and legs to protect against insect bites. Sturdy walking shoes or hiking sandals are essential for navigating uneven terrain. A hat and sunscreen are also advisable as the forest can be sunny in open areas. Bring insect repellent to keep mosquitoes at bay.",
      },
      {
        question: "Will we see other wildlife besides monkeys?",
        answer:
          "Yes! Jozani Forest is home to diverse wildlife including bush babies, duikers, various bird species, and unique flora like mangroves and medicinal plants. Our guides are knowledgeable about the ecosystem and will point out interesting plants and animals along the way.",
      },
      {
        question: "How long is the walk through Jozani Forest?",
        answer:
          "The guided walk lasts approximately 2 hours, covering around 2-3 km (1.2-1.9 miles) of well-maintained trails. The pace is relaxed with plenty of stops for wildlife viewing and explanations of the ecosystem. We can adjust the route based on your group's interests and mobility levels.",
      },
      {
        question: "Is this tour suitable for young children?",
        answer:
          "Yes, this tour is family-friendly! Children enjoy spotting monkeys and other wildlife, and our guides engage them with fun facts about the animals and plants. However, please note that some trails may not be stroller-friendly due to roots and uneven terrain. We recommend bringing a child carrier or backpack for younger kids.",
      },
      {
        question: "Are there any conservation fees for visiting Jozani Forest?",
        answer:
          "Yes, there is a small conservation fee that contributes to the protection of Jozani Forest and its wildlife. This fee is included in the tour price. It helps support ongoing conservation efforts, including habitat preservation and community education programs about the importance of protecting Zanzibar's unique ecosystems.",
      },
      {
        question: "Can we take photos of the monkeys?",
        answer:
          "Yes, photography is allowed, but we ask that you respect the monkeys' space and avoid using flash. Our guides will help you find the best spots for photos while ensuring the monkeys are not disturbed. Please do not feed or attempt to touch the monkeys, as this can harm their natural behavior and health.",
      },
    ],
  },
  {
    title: "Kizimkazi Dolphin & Snorkeling Safari",
    description:
      "Experience the thrill of swimming with wild dolphins in Kizimkazi, followed by snorkeling in vibrant coral reefs teeming with marine life, guided by local experts who prioritize responsible wildlife interactions.",
    images: [
      "/images/tours/zanzibar/kizimkazi-dolphins.jpg",
      "/images/tours/zanzibar/snorkeling.jpg",
    ],
    duration: "5 hours",
    price: "$90",
    rating: 4.9,
    tags: ["Dolphins", "Snorkeling", "Marine Life"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Fatima Juma",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "How do you ensure responsible dolphin interactions?",
        answer:
          "We follow strict guidelines to minimize disturbance to the dolphins. Our guides are trained in responsible wildlife viewing practices, including maintaining safe distances and limiting time spent near the dolphins. We never chase or harass them, allowing them to approach us naturally. This ensures a respectful and sustainable experience for both the dolphins and our guests.",
      },
      {
        question: "Do I need to know how to swim for this tour?",
        answer:
          "Basic swimming ability is recommended to fully enjoy the snorkeling portions of the tour. However, we provide life jackets for everyone regardless of swimming ability, and our crew members can assist those who are less confident in the water. Non-swimmers can still enjoy the boat journey and dolphin watching from the boat.",
      },
      {
        question: "What should I bring for the boat trip?",
        answer:
          "We recommend bringing sunscreen (reef-safe preferred), a hat, sunglasses, towel, change of clothes, and a waterproof bag or case for electronics. Wear your swimwear under light clothing. Water shoes are helpful for the sandbank. Bring a light jacket or wrap as it can get breezy on the water, especially during the morning departure. We provide drinking water throughout the day, but you may want to bring additional beverages.",
      },
      {
        question: "Is lunch included in this tour?",
        answer:
          "Yes, a light lunch is included, typically featuring sandwiches, fresh fruit, and refreshments. We can accommodate vegetarian options with advance notice, but please inform us of any dietary restrictions when booking.",
      },
      {
        question: "Is snorkeling equipment provided?",
        answer:
          "Yes, we provide masks, snorkels, and fins in various sizes for all guests. Our equipment is cleaned and sanitized between tours. If you prefer to use your own equipment, you're welcome to bring it. We also provide basic instruction for beginners and identify the best spots based on current conditions and your snorkeling experience level.",
      },
      {
        question: "How many people will be on the boat?",
        answer:
          "Our boats accommodate a maximum of 10 passengers to ensure everyone has enough space and receives personalized attention from our crew. For families or groups seeking more privacy, we offer private charter options at an additional cost. Each boat has shaded areas for sun protection and comfortable seating.",
      },
    ],
  },
];

export default zanzibarTours;
