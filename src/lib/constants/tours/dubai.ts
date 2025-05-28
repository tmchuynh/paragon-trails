import { Tour } from "@/lib/interfaces/services/tours";

const dubaiTours: Tour[] = [
  {
    title: "Desert Safari & Luxury Bedouin Camp",
    description:
      "Experience the Arabian desert with exhilarating dune bashing, sunset camel riding, and an exclusive overnight stay at a luxury Bedouin-inspired camp with private dining under the stars.",
    images: [
      "/images/tours/dubai/desert-dunes.jpg",
      "/images/tours/dubai/luxury-camp.jpg",
    ],
    duration: "24 hours",
    price: "$395",
    rating: 4.9,
    tags: ["Desert", "Adventure", "Luxury"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Mohammed Al Farsi",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What amenities are available at the desert camp?",
        answer:
          "Our luxury camp features private climate-controlled tents with ensuite bathrooms, queen-sized beds with premium linens, private terrace seating, personal butler service, gourmet dining experiences, and traditional entertainment. All modern conveniences are discreetly integrated into the authentic Bedouin aesthetic.",
      },
    ],
  },
  {
    title: "Modern Architecture & Burj Khalifa Exclusive",
    description:
      "Discover Dubai's architectural marvels with an expert guide, culminating in VIP access to Burj Khalifa's exclusive 148th floor observation deck and private lounge with refreshments.",
    images: [
      "/images/tours/dubai/burj-khalifa.jpg",
      "/images/tours/dubai/modern-architecture.jpg",
    ],
    duration: "5 hours",
    price: "$250",
    rating: 4.8,
    tags: ["Architecture", "Skyscrapers", "VIP"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Amina Khalid",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What makes the 148th floor access special?",
        answer:
          "The At The Top SKY experience on the 148th floor is Burj Khalifa's premium observation deck, rising 555 meters above the city. Unlike the standard observation decks, this level offers a luxury lounge, dedicated hosts, refreshments, and significantly fewer visitors for a more exclusive experience with minimal waiting.",
      },
    ],
  },
];

export default dubaiTours;
