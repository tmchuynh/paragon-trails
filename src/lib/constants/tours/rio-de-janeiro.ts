import { Tour } from "@/lib/interfaces/services/tours";
export const rioDeJaneiroTours: Tour[] = [
  {
    title: "Christ the Redeemer Helicopter Experience",
    description:
      "Soar above Rio's stunning landscape in a private helicopter, circling the iconic Christ the Redeemer statue and enjoying breathtaking views of Sugarloaf Mountain, Copacabana, and the lush mountains surrounding the city.",
    images: [
      "/images/tours/rio-de-janeiro/helicopter-cristo.jpg",
      "/images/tours/rio-de-janeiro/aerial-view.jpg",
    ],
    duration: "1.5 hours",
    price: "$395",
    rating: 5.0,
    tags: ["Helicopter", "Views", "Christ the Redeemer"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Captain Paulo Rodriguez",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "How close do we get to the Christ the Redeemer statue?",
        answer:
          "We maintain a respectful and safe distance from the statue (approximately 300 meters) as regulated by Brazilian aviation authorities, which still provides spectacular photo opportunities. The flight path includes multiple angles so you'll see the monument from various perspectives.",
      },
    ],
  },
  {
    title: "Samba School Backstage Experience",
    description:
      "Get exclusive behind-the-scenes access to one of Rio's top samba schools, learn dance moves from professional performers, and witness costume creation and float construction for the world-famous Carnival parade.",
    images: [
      "/images/tours/rio-de-janeiro/samba-school.jpg",
      "/images/tours/rio-de-janeiro/carnival-costumes.jpg",
    ],
    duration: "4 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Samba", "Dance", "Carnival"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Carolina Santos",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need dance experience to participate?",
        answer:
          "Not at all! The dance instruction is suitable for complete beginners, and our professional dancers are skilled at teaching the basic steps to anyone. You can participate as much or as little as you're comfortable with.",
      },
    ],
  },
  {
    title: "Favela Community Tour & Cultural Exchange",
    description:
      "Experience the vibrant culture of Rio's favelas with a local guide, visiting community projects, art installations, and learning about the history and daily life in these neighborhoods while supporting local businesses.",
    images: [
      "/images/tours/rio-de-janeiro/favela-tour.jpg",
      "/images/tours/rio-de-janeiro/community-art.jpg",
    ],
    duration: "3 hours",
    price: "$50",
    rating: 4.7,
    tags: ["Favela", "Cultural", "Local"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lucas Pereira",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this tour safe?",
        answer:
          "Yes, our tours are conducted with local guides who know the area well. We prioritize safety and respect for the community, ensuring a positive experience for both visitors and residents.",
      },
      {
        question: "What should I wear for the favela tour?",
        answer:
          "We recommend comfortable clothing and sturdy shoes suitable for walking on uneven terrain. Please dress modestly to respect local customs.",
      },
    ],
  },
];

export default rioDeJaneiroTours;
