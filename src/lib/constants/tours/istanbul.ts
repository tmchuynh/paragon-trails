import { Tour } from "@/lib/interfaces/services/tours";
export const istanbulTours: Tour[] = [
  {
    title: "Two Continents & Bosphorus Experience",
    description:
      "Journey through Istanbul's unique position straddling Europe and Asia with a private Bosphorus cruise, visiting landmarks on both continents and enjoying a traditional Turkish meal with spectacular strait views.",
    city: "Istanbul",
    country: "Turkey",
    region: "Marmara Region",
    images: [
      "/images/tours/istanbul/bosphorus-cruise.jpg",
      "/images/tours/istanbul/asian-side.jpg",
    ],
    duration: "6 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Bosphorus", "Two Continents", "Scenic"],
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address: "Kabataş Ferry Terminal, Beyoğlu, Istanbul",
      coordinates: {
        latitude: 41.0327,
        longitude: 28.9963,
      },
      instructions:
        "Meet at the main entrance of Kabataş Ferry Terminal. Your guide will be holding a sign with 'Bosphorus Experience' written on it.",
      contactNumber: "+90 532 123 4567",
      contactEmail: "istanbul@paragontrails.com",
    },
    availableDates: [
      "2023-12-15",
      "2023-12-22",
      "2023-12-29",
      "2024-01-05",
      "2024-01-12",
      "2024-01-19",
      "2024-01-26",
      "2024-02-02",
      "2024-02-09",
      "2024-02-16",
      "2024-02-23",
    ],
    highlights: [
      "Cruise the Bosphorus Strait on a private boat between Europe and Asia",
      "Visit the Asian side of Istanbul at Üsküdar with its authentic local atmosphere",
      "See Ottoman palaces, fortresses, and wooden mansions (yalı) from the water",
      "Pass under the iconic Bosphorus bridges connecting two continents",
      "Enjoy traditional Turkish cuisine at a scenic waterfront restaurant",
    ],
    inclusions: [
      "Professional licensed guide",
      "Private boat cruise on the Bosphorus (2 hours)",
      "Traditional Turkish lunch with beverages (non-alcoholic)",
      "All transportation during the tour",
      "Entrance fees to included attractions",
      "Bottled water throughout the tour",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Alcoholic beverages (available for purchase)",
      "Personal expenses and shopping",
      "Tips and gratuities",
    ],
    itinerary: [
      "10:00 - Meet guide at Kabataş Ferry Terminal",
      "10:15 - Board private boat for Bosphorus cruise",
      "10:30 - Begin cruise along European shore with views of Dolmabahçe Palace and Çırağan Palace",
      "11:15 - Pass under the Bosphorus Bridge connecting Europe and Asia",
      "11:45 - View Rumeli Fortress and historic wooden mansions along the strait",
      "12:30 - Dock at Üsküdar on the Asian side",
      "12:45 - Walking tour of Üsküdar including Mihrimah Sultan Mosque and local market",
      "13:30 - Traditional lunch at waterfront restaurant",
      "14:45 - Continue exploring Asian side with visit to Maiden's Tower (Kız Kulesi) viewpoint",
      "15:30 - Return cruise with views of Bosphorus Strait at different angle",
      "16:00 - Tour concludes at Kabataş Terminal",
    ],
    faqs: [
      {
        question: "Will we stop on the Asian side?",
        answer:
          "Yes, we dock at Üsküdar on the Asian side of Istanbul for approximately 2 hours to explore its historic mosques, authentic local market, and beautiful waterfront promenade. This provides a perfect contrast to the more tourist-oriented European side, showing a more authentic slice of daily Istanbul life.",
      },
      {
        question: "Is the boat private?",
        answer:
          "Yes, this is a private tour with your own dedicated boat and guide. You can customize the itinerary to include specific landmarks or activities along the Bosphorus.",
      },
      {
        question: "What should I wear for the cruise?",
        answer:
          "Dress comfortably for a day on the water. We recommend layers, as it can be cooler on the water than on land. Comfortable shoes are also advisable if you plan to explore the Asian side.",
      },
    ],
  },
  {
    title: "Archaeological Wonders of Istanbul",
    description:
      "Explore Istanbul's rich archaeological heritage with a guided tour of the ancient Hippodrome, the Basilica Cistern, and the stunning mosaics of Chora Church, led by an expert in Byzantine history.",
    city: "Istanbul",
    country: "Turkey",
    region: "Marmara Region",
    images: [
      "/images/tours/istanbul/hippodrome.jpg",
      "/images/tours/istanbul/basilica-cistern.jpg",
    ],
    duration: "5 hours",
    price: "$120",
    rating: 4.8,
    tags: ["Archaeological", "Byzantine", "Historical"],
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "archaeology",
    meetingPoint: {
      address: "Sultanahmet Square, in front of the German Fountain, Istanbul",
      coordinates: {
        latitude: 41.0054,
        longitude: 28.9768,
      },
      instructions:
        "Meet at the German Fountain in Sultanahmet Square. Your guide will be holding a sign with 'Archaeological Wonders' written on it.",
      contactNumber: "+90 532 123 4568",
      contactEmail: "archaeology@paragontrails.com",
    },
    availableDates: [
      "2023-12-16",
      "2023-12-23",
      "2023-12-30",
      "2024-01-06",
      "2024-01-13",
      "2024-01-20",
      "2024-01-27",
      "2024-02-03",
      "2024-02-10",
      "2024-02-17",
      "2024-02-24",
    ],
    highlights: [
      "Explore the ancient Hippodrome with its Egyptian Obelisk and Serpent Column",
      "Discover the mysterious underground Basilica Cistern with its Medusa heads",
      "Marvel at the stunning Byzantine mosaics and frescoes at Chora Church",
      "Learn about Constantinople's rich archaeological heritage",
      "Visit the Great Palace Mosaic Museum showcasing Byzantine palace floors",
    ],
    inclusions: [
      "Byzantine history expert guide",
      "All entrance fees to archaeological sites",
      "Skip-the-line access at Basilica Cistern",
      "Transportation between sites",
      "Archaeological guidebook with historical timelines",
      "Bottled water throughout the tour",
    ],
    exclusions: [
      "Hotel pickup and drop-off",
      "Meals and beverages",
      "Personal expenses and shopping",
      "Tips and gratuities",
    ],
    itinerary: [
      "09:00 - Meet at Sultanahmet Square/German Fountain",
      "09:15 - Tour of the ancient Hippodrome monuments",
      "10:00 - Visit the Great Palace Mosaic Museum",
      "11:00 - Explore the Basilica Cistern with its mysterious columns",
      "12:00 - Break for Turkish coffee at historic café",
      "12:30 - Transportation to Chora Church (Kariye Museum)",
      "13:15 - Guided tour of the magnificent Byzantine mosaics and frescoes at Chora Church",
      "14:30 - Tour concludes with Byzantine era historical summary",
    ],
    faqs: [
      {
        question: "What archaeological sites will we visit?",
        answer:
          "The tour includes the Hippodrome of Constantinople, where you'll see the Obelisk of Theodosius, the Serpent Column, and the German Fountain. We'll also explore the Basilica Cistern, an ancient underground water reservoir with stunning columns and atmospheric lighting. Finally, we'll visit Chora Church, famous for its exquisite mosaics and frescoes depicting scenes from the life of Christ.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy the fascinating history and unique architecture of these ancient sites. However, parents should be aware that some areas may have uneven surfaces or stairs.",
      },
      {
        question: "Do we need to book tickets in advance?",
        answer:
          "Yes, we recommend booking tickets in advance for the Basilica Cistern and Chora Church to avoid long lines. Your guide will handle all ticketing to ensure a smooth experience.",
      },
      {
        question: "What should I wear for the archaeological tour?",
        answer:
          "Dress comfortably for walking, as we will be exploring several sites. Comfortable shoes are a must, and we recommend wearing layers as some areas can be cooler, especially the Basilica Cistern. Modest clothing is also appreciated in religious sites.",
      },
    ],
  },
];
export default istanbulTours;
