import { Tour } from "@/lib/interfaces/services/tours";

const agraTours: Tour[] = [
  {
    title: "Taj Mahal at Sunrise: VIP Experience",
    description:
      "Witness the breathtaking Taj Mahal at sunrise with early access before the crowds arrive, guided by an architectural historian who reveals the monument's intricate details and romantic history.",
    images: [
      "/images/tours/agra/taj-sunrise.jpg",
      "/images/tours/agra/taj-details.jpg",
    ],
    duration: "5 hours",
    price: "$95",
    rating: 5.0,
    tags: ["UNESCO", "Architectural", "Sunrise"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Dr. Priya Sharma",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What's the advantage of a sunrise tour?",
        answer:
          "The early morning offers multiple advantages: cooler temperatures (especially important in summer months), magical lighting that makes the marble appear to change colors as the sun rises, and significantly smaller crowds compared to later hours. This creates ideal conditions for both experiencing the monument's serenity and capturing photographs.",
      },
    ],
  },
  {
    title: "Beyond the Taj: Agra's Hidden Treasures",
    description:
      "Explore Agra's lesser-known but equally magnificent monuments including Itimad-ud-Daulah (Baby Taj), Mehtab Bagh gardens, and local artisan workshops preserving Mughal craft traditions.",
    images: [
      "/images/tours/agra/baby-taj.jpg",
      "/images/tours/agra/marble-inlay.jpg",
    ],
    duration: "6 hours",
    price: "$75",
    rating: 4.7,
    tags: ["Off-the-beaten-path", "Crafts", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Arjun Patel",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "What kind of traditional crafts will we see?",
        answer:
          "You'll visit workshops where artisans practice pietra dura (the marble inlay work seen in the Taj Mahal), watching craftspeople cut and fit semi-precious stones following techniques passed down through generations. You'll also see traditional carpet weaving, sandstone carving, and Zardozi embroidery workshops.",
      },
    ],
  },
];

export default agraTours;
