import { Tour } from "@/lib/interfaces/services/tours";

export const palawanTours: Tour[] = [
  {
    title: "El Nido Island Hopping & Secret Lagoons",
    description:
      "Discover the breathtaking limestone islands of Bacuit Bay on a private boat tour to El Nido's most spectacular lagoons, hidden beaches, and snorkeling sites, with a gourmet lunch prepared by your personal chef on a secluded white sand beach.",
    images: [
      "/images/tours/palawan/el-nido-islands.jpg",
      "/images/tours/palawan/hidden-lagoon.jpg",
    ],
    duration: "8 hours",
    price: "$150",
    rating: 4.9,
    tags: ["Island Hopping", "Snorkeling", "Hidden Beaches"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Marco Alvarez",
    tourCategoryId: "adventure",
    faqs: [
      {
        question:
          "How is this tour different from the standard El Nido island hopping?",
        answer:
          "Our premium tour avoids the standard routes and timing of mass tourism boats. We depart earlier to reach the most popular sites before other tours arrive, then visit exclusive locations that require special access permits. We use a spacious, comfortable boat with a maximum of 8 guests (versus 20+ on standard tours), and include premium snorkeling equipment, kayaks for lagoon exploration, and a freshly prepared gourmet lunch beyond the typical basic buffet offered on regular tours.",
      },
    ],
  },
  {
    title: "Underground River Private Expedition",
    description:
      "Explore the UNESCO World Heritage Puerto Princesa Underground River with VIP access before public hours and extended exploration into restricted cave sections with specialized guides and equipment not available to standard tours.",
    images: [
      "/images/tours/palawan/underground-river.jpg",
      "/images/tours/palawan/cave-formations.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.8,
    tags: ["UNESCO", "Caves", "Natural Wonder"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Antonio Santos, Geologist",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will I get wet during the underground river tour?",
        answer:
          "You'll sit in a small paddle boat navigated by your guide, and while you won't get completely wet, some water dripping from the cave ceiling is common. We provide waterproof bags for cameras and electronics. For the extended expedition sections (not available to standard tours), we provide appropriate gear including helmets with headlamps and water-resistant footwear. The cave maintains a constant temperature around 70°F (22°C), so light, quick-dry clothing is recommended.",
      },
    ],
  },
  {
    title: "Batak Tribe Cultural Immersion",
    description:
      "Journey into the rainforest to visit one of the Philippines' oldest indigenous tribes, learn about their traditional way of life and conservation efforts, participate in daily activities, and enjoy a meal of forest-foraged ingredients prepared using ancient methods.",
    images: [
      "/images/tours/palawan/batak-tribe.jpg",
      "/images/tours/palawan/indigenous-culture.jpg",
    ],
    duration: "9 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Indigenous", "Cultural", "Rainforest"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Danilo Torres & Batak Community Members",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this an authentic experience or staged for tourists?",
        answer:
          "This is an authentic cultural exchange developed in partnership with Batak elders to help preserve their endangered culture and provide sustainable income. The community maintains its traditional practices and welcomes respectful visitors to learn about their heritage, spirituality, and conservation knowledge. Your participation supports the tribe's cultural preservation initiatives and sustainable livelihood projects. We follow responsible tourism guidelines that prioritize the community's dignity and agency.",
      },
    ],
  },
  {
    title: "Palawan Marine Conservation Experience",
    description:
      "Join marine biologists in hands-on conservation work including coral reef monitoring, sea turtle protection, and sustainable fisheries development. Combine purpose with paradise as you contribute to preserving Palawan's extraordinary marine ecosystems.",
    images: [
      "/images/tours/palawan/coral-restoration.jpg",
      "/images/tours/palawan/sea-turtle-release.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Conservation", "Marine Life", "Educational"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Marine Biologist Dr. Lisa Reyes",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "Do I need scientific or diving experience?",
        answer:
          "No prior experience is necessary. Our conservation activities are designed to be accessible to beginners while still being meaningful and impactful. For snorkeling portions, basic swimming ability is helpful but not required as we provide flotation devices and guidance. Those with diving certifications can participate in optional deeper reef monitoring activities, but plenty of conservation work happens in shallow water and on shore. Each participant receives training in scientific methodology and conservation principles relevant to their activities.",
      },
    ],
  },
  {
    title: "Birdwatching Safari: Endemic Species of Palawan",
    description:
      "Discover the unique birdlife of Palawan, including species found nowhere else on Earth. Explore diverse habitats from coastal mangroves to mountain forests with an expert ornithologist guiding you to wildlife viewing blinds and secret birding hotspots.",
    images: [
      "/images/tours/palawan/palawan-peacock.jpg",
      "/images/tours/palawan/birdwatching.jpg",
    ],
    duration: "6 hours",
    price: "$80",
    rating: 4.8,
    tags: ["Birdwatching", "Wildlife", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Rafael Cruz",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What birds might we see?",
        answer:
          "Palawan is home to numerous endemic species found nowhere else. Key species we frequently observe include the spectacular Palawan Peacock-Pheasant, Palawan Hornbill, Blue Paradise-Flycatcher, and Yellow-throated Leafbird. Our guides track recent sightings and know the territories of rare species like the Philippine Cockatoo and Palawan Scops-Owl. Even non-birders are typically amazed by the diversity and beauty of the species we encounter. We provide high-quality binoculars and spotting scopes for optimal viewing.",
      },
    ],
  },
  {
    title: "Filipino Cuisine Cooking Class & Market Tour",
    description:
      "Learn to prepare authentic Filipino and Palawan specialties with a local chef, beginning with a visit to a vibrant market to select fresh ingredients, followed by a hands-on cooking class in a beautiful open-air kitchen overlooking the sea.",
    images: [
      "/images/tours/palawan/filipino-cooking.jpg",
      "/images/tours/palawan/local-market.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cooking", "Food", "Market"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Maricel Reyes",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare 4-5 authentic Filipino dishes, typically including chicken adobo (the national dish), sinigang (tamarind soup), kinilaw (Filipino ceviche using the day's fresh catch), pancit (noodle dish), and a traditional Palawan specialty like tamilok (woodworm - optional for the adventurous!) or fresh seafood prepared in banana leaves. The class concludes with a traditional dessert such as halo-halo or cassava cake. Vegetarian options are available with advance notice.",
      },
    ],
  },
  {
    title: "Sunset Photography: Limestone Karsts & Beaches",
    description:
      "Capture the magical light of Palawan during the golden and blue hours with a professional landscape photographer guiding you to prime locations for spectacular sunset images of limestone karsts, pristine beaches, and traditional Filipino boats.",
    images: [
      "/images/tours/palawan/sunset-photography.jpg",
      "/images/tours/palawan/karst-silhouettes.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.7,
    tags: ["Photography", "Sunset", "Landscapes"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Jacob Martinez",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "While this tour is valuable for photographers of all levels (including smartphone users), to get the most out of the experience we recommend a DSLR or mirrorless camera with a wide-angle lens (16-35mm equivalent) for landscapes and a medium zoom (24-70mm equivalent) for details. A tripod is essential for low-light sunset and blue hour photography. ND filters are useful but optional. Our guide provides technical advice customized to your specific equipment.",
      },
    ],
  },
  {
    title: "Luxury Island Glamping & Stargazing",
    description:
      "Escape to a private island for an exclusive overnight experience combining luxury glamping in designer tents, a personal chef preparing beachside dining under the stars, and guided stargazing with professional telescopes in one of Asia's darkest sky locations.",
    images: [
      "/images/tours/palawan/luxury-glamping.jpg",
      "/images/tours/palawan/private-island-dinner.jpg",
    ],
    duration: "24 hours",
    price: "$450",
    rating: 5.0,
    tags: ["Glamping", "Private Island", "Luxury"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Elena Rodriguez & Astronomy Team",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What amenities are available in the glamping tents?",
        answer:
          "Our luxury safari-style tents feature queen-sized beds with premium linens, solar-powered lighting, fan, private ensuite bathroom with eco-friendly shower and toilet, outdoor lounging deck with ocean views, and personal butler service. While maintaining an authentic connection to nature, we ensure comfort with thoughtful amenities including organic toiletries, plush bathrobes, a gourmet minibar, Bluetooth speakers, and charging stations for electronic devices. The experience balances luxury with environmental sustainability through our solar power system and zero-waste practices.",
      },
    ],
  },
];

export default palawanTours;
