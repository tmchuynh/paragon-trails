import { Tour } from "@/lib/interfaces/services/tours";
export const mexicoCityTours: Tour[] = [
  {
    title: "Teotihuacan Pyramids at Sunrise & Archaeologist Tour",
    description:
      "Experience the majestic ancient city of Teotihuacan without crowds during the magical morning light, with expert interpretation from an archaeologist specializing in Mesoamerican civilizations.",
    images: [
      "/images/tours/mexico-city/teotihuacan-sunrise.jpg",
      "/images/tours/mexico-city/pyramid-sun.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Archaeological", "Ancient Civilization", "Pyramids"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Elena Vásquez",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How early do we need to start?",
        answer:
          "This is an early departure tour - we'll pick you up at your accommodation around 5:30am to reach the archaeological site before opening hours through special access arrangements. The early start is worth it to experience the pyramids in serene morning light without crowds.",
      },
      {
        question: "What should I wear?",
        answer:
          "We recommend comfortable walking shoes, a hat, and sunscreen. The pyramids involve some climbing, so sturdy footwear is essential. Dress in layers as mornings can be cool but it warms up quickly.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! Children aged 6+ will enjoy exploring the pyramids and learning about ancient Mesoamerican culture. We provide engaging stories and activities to keep younger visitors interested.",
      },
    ],
  },
  {
    title: "Mexico City Street Food & Market Adventure",
    description:
      "Taste your way through Mexico City's celebrated culinary scene, from bustling markets to street stands serving regional specialties, with insights into ingredients, techniques, and cultural significance.",
    images: [
      "/images/tours/mexico-city/street-tacos.jpg",
      "/images/tours/mexico-city/mercado.jpg",
    ],
    duration: "4 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Food", "Markets", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Carlos Mendoza",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the food safe to eat?",
        answer:
          "Safety is our priority - we visit carefully selected vendors with excellent hygiene practices and high local reputation. Your guide shares food safety tips and provides hand sanitizer throughout the tour. We've conducted this tour for years with an excellent safety record.",
      },
      {
        question: "What if I have dietary restrictions?",
        answer:
          "We can accommodate most dietary restrictions, including vegetarian, vegan, and gluten-free options. Please inform us of any allergies or preferences when booking so we can tailor the experience to your needs.",
      },
      {
        question: "Will we visit any markets?",
        answer:
          "Yes! We explore vibrant local markets where you can sample fresh produce, regional specialties, and traditional snacks. You'll get a true taste of Mexico City's culinary diversity.",
      },
    ],
  },
  {
    title: "Xochimilco Floating Gardens & Mariachi Experience",
    description:
      "Explore the UNESCO-listed Xochimilco canals on a traditional trajinera boat, enjoying a leisurely ride through the floating gardens while listening to live mariachi music and sampling local snacks.",
    images: [
      "/images/tours/mexico-city/xochimilco-boat.jpg",
      "/images/tours/mexico-city/mariachi.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.6,
    tags: ["Cultural", "Music", "Nature"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lucia Torres",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I bring?",
        answer:
          "Bring sunscreen, a hat, and comfortable clothing. We provide blankets for seating on the boat, but you may want to bring a light jacket if it gets chilly in the evening. Don't forget your camera!",
      },
      {
        question: "Can we swim in the canals?",
        answer:
          "Swimming is not allowed in the canals due to safety and environmental concerns. However, you can enjoy the scenery and take photos from the boat.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! Children will love the colorful boats, music, and snacks. The ride is gentle and safe for all ages.",
      },
    ],
  },
];

export default mexicoCityTours;
