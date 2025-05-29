import { Tour } from "@/lib/interfaces/services/tours";

export const bhaktapurTours: Tour[] = [
  {
    title: "Ancient Temples & Living Heritage of Bhaktapur",
    description:
      "Explore the magnificent medieval architecture of Nepal's best-preserved Durbar Square with a cultural historian, gaining special access to normally restricted temple interiors and private family shrines in this UNESCO World Heritage city.",
    images: [
      "/images/tours/bhaktapur/nyatapola-temple.jpg",
      "/images/tours/bhaktapur/durbar-square.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.9,
    tags: ["UNESCO", "Temples", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Ramesh Pradhan",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How was Bhaktapur affected by the 2015 earthquake?",
        answer:
          "Bhaktapur suffered significant damage during the 2015 earthquake, with many historic structures partially collapsed. However, it has undergone remarkable restoration using traditional methods. Our tour includes discussions of earthquake-resistant features in Newari architecture and how traditional building techniques proved more resilient than modern structures. We'll see both fully restored temples and sites still undergoing careful reconstruction, offering unique insights into conservation challenges and traditional craftsmanship.",
      },
    ],
  },
  {
    title: "Newari Pottery Workshop & Cultural Experience",
    description:
      "Learn the ancient art of traditional pottery making with master craftsmen from Bhaktapur's Potter's Square, creating your own piece using techniques unchanged for centuries, followed by an authentic Newari feast in a historic courtyard home.",
    images: [
      "/images/tours/bhaktapur/pottery-workshop.jpg",
      "/images/tours/bhaktapur/potters-square.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Crafts", "Pottery", "Hands-on"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Master Potter Suraj Prajapati",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Can I take my pottery creation home with me?",
        answer:
          "Yes! Your finished pottery piece will be fired in a traditional kiln after your workshop. This process takes 3-4 days to complete. We can arrange to have your creation delivered to your hotel in Kathmandu before your departure, or we offer worldwide shipping for an additional fee. Many participants choose to create small items like traditional tea cups or oil lamps that are easier to transport. No prior pottery experience is necessary to create something beautiful under our master potter's guidance.",
      },
    ],
  },
  {
    title: "Bhaktapur Photography: Dawn to Dusk",
    description:
      "Capture the magical light and living heritage of Bhaktapur across a full day of photography, from misty morning rituals to golden hour illumination of ancient temples, with guidance from an award-winning photographer.",
    images: [
      "/images/tours/bhaktapur/morning-photography.jpg",
      "/images/tours/bhaktapur/evening-light.jpg",
    ],
    duration: "10 hours",
    price: "$120",
    rating: 4.7,
    tags: ["Photography", "Cultural", "Full Day"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Mohan Shrestha",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography skill level is this tour designed for?",
        answer:
          "This tour accommodates all skill levels from smartphone photographers to professional DSLR users. Our guide provides personalized instruction based on your equipment and experience. Beginners receive guidance on composition and capturing daily life, while advanced photographers can explore challenging lighting conditions and cultural documentary techniques. The small group size (maximum 6) ensures everyone receives individual attention. We visit locations at optimal times for photography and gain access to vantage points not available to regular tourists.",
      },
    ],
  },
  {
    title: "Traditional Newari Cooking Class & Market Tour",
    description:
      "Discover the rich flavors of Newari cuisine with a local family, shopping for ingredients in the ancient market square before preparing authentic dishes in a traditional kitchen using centuries-old techniques and recipes.",
    images: [
      "/images/tours/bhaktapur/cooking-class.jpg",
      "/images/tours/bhaktapur/local-market.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Cooking", "Market", "Local Food"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Binita Maharjan",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to cook?",
        answer:
          "You'll learn to prepare a complete traditional Newari meal including chatamari (rice flour pancake), kachila (spiced minced buffalo), aloo tama (bamboo shoot soup), and yomari (sweet stuffed dumplings) for dessert. Vegetarian options are available for all dishes. Newari cuisine features unique preparation methods and distinctive spice blends not found in standard Nepali food. You'll receive recipe cards to recreate these dishes at home, and our cooking instructor will suggest ingredient substitutions available in Western countries.",
      },
    ],
  },
  {
    title: "Spiritual Journey: Morning Rituals & Meditation",
    description:
      "Experience Bhaktapur's spiritual traditions with early morning temple rituals, a private blessing ceremony with a Hindu priest, and guided meditation session in an ancient monastery courtyard, connecting with Nepal's living religious practices.",
    images: [
      "/images/tours/bhaktapur/morning-rituals.jpg",
      "/images/tours/bhaktapur/monastery-meditation.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Spiritual", "Meditation", "Rituals"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Sadhu Ram Baba",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Do I need prior meditation experience?",
        answer:
          "No prior experience is necessary. Our guide provides clear instruction suitable for beginners while creating an authentic experience respectful of local spiritual traditions. The meditation session lasts approximately 30 minutes and takes place in a peaceful 15th-century monastery courtyard. We focus on simple mindfulness techniques accessible to everyone regardless of religious background. The experience offers a deeper understanding of how Hinduism and Buddhism have harmoniously blended in Nepalese daily life for centuries.",
      },
    ],
  },
];

export default bhaktapurTours;
