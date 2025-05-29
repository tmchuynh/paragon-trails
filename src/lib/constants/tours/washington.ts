import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const washingtonTours: Tour[] = [
  {
    title: "Monuments & Memorials by Moonlight",
    description:
      "Experience the magic of Washington DC's iconic monuments and memorials illuminated against the night sky, with fewer crowds and dramatic lighting.",
    images: [
      "/images/tours/washington/lincoln-memorial-night.jpg",
      "/images/tours/washington/washington-monument-night.jpg",
    ],
    duration: "3 hours",
    price: "$55",
    rating: 4.9,
    tags: ["Monuments", "Night Tour", "Photography"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("washington", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "How much walking is involved?",
        answer:
          "This tour covers approximately 2 miles (3.2 km) of walking at a leisurely pace with many stops. Comfortable shoes are recommended.",
      },
    ],
  },
  {
    title: "Smithsonian & National Archives VIP Tour",
    description:
      "Get insider access to the treasures of Washington's premier museums with skip-the-line privileges and expert guidance through the most significant exhibits.",
    images: [
      "/images/tours/washington/smithsonian.jpg",
      "/images/tours/washington/national-archives.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Museums", "History", "Art"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("washington", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Which Smithsonian museums does this tour visit?",
        answer:
          "The tour typically includes the National Museum of American History, National Air and Space Museum, and National Archives. Specific museums can be customized based on your interests.",
      },
    ],
  },
  {
    title: "Georgetown's Historic Homes & Waterfront",
    description:
      "Explore the charming streets of Georgetown with a local historian, visiting historic homes, gardens, and the scenic waterfront while learning about the neighborhood's rich history.",
    images: [
      "/images/tours/washington/georgetown-homes.jpg",
      "/images/tours/washington/georgetown-waterfront.jpg",
    ],
    duration: "4 hours",
    price: "$75",
    rating: 4.7,
    tags: ["History", "Architecture", "Waterfront"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("washington", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Are the historic homes open for interior visits?",
        answer:
          "The tour includes exterior visits to several historic homes and gardens. Some homes may offer limited interior access depending on availability and scheduling.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive storytelling and exploration.",
      },
    ],
  },
];

export default washingtonTours;
