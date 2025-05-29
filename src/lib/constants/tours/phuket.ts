import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

export const phuketTours: Tour[] = [
  {
    title: "Phi Phi Islands & Maya Bay Sunrise Expedition",
    description:
      "Experience the iconic Phi Phi Islands before the crowds arrive with our sunrise tour. Swim in crystal-clear waters, visit the famous Maya Bay (The Beach filming location), and enjoy breakfast on a secluded beach as the morning light transforms the limestone cliffs.",
    images: [
      "/images/tours/phuket/phi-phi-sunrise.jpg",
      "/images/tours/phuket/maya-bay.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Islands", "Snorkeling", "Sunrise"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("phuket", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What time does the tour depart?",
        answer:
          "The tour departs very early, typically around 5:00 AM from your hotel, to reach the islands just as the sun rises. This early start allows us to experience these popular destinations before the larger tour boats arrive with crowds of day visitors.",
      },
      {
        question: "Is snorkeling equipment provided?",
        answer:
          "Yes, high-quality masks, snorkels, and fins are provided in various sizes. Our guides will help you adjust the equipment and provide basic instruction if needed. The waters around Phi Phi Islands offer some of Thailand's best snorkeling with vibrant coral and diverse marine life.",
      },
    ],
  },
  {
    title: "Old Phuket Town Heritage & Food Walk",
    description:
      "Explore the charming streets of Old Phuket Town with its well-preserved Sino-Portuguese architecture, hidden shrines, local markets, and authentic southern Thai cuisine that reflects the island's multicultural history.",
    images: [
      "/images/tours/phuket/sino-portuguese.jpg",
      "/images/tours/phuket/local-food.jpg",
    ],
    duration: "4 hours",
    price: "$55",
    rating: 4.8,
    tags: ["Heritage", "Food", "Architecture"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("phuket", "cultural").name,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What is Sino-Portuguese architecture?",
        answer:
          "Sino-Portuguese architecture combines Chinese and European design elements, reflecting Phuket's history as a tin mining center where Chinese workers and European traders created a unique cultural blend. Buildings feature colorful facades, arched doorways, interior courtyards, and distinctive louvered windows designed for tropical weather.",
      },
      {
        question: "What food specialties will we try?",
        answer:
          "Southern Thai cuisine has distinct flavors influenced by Malay, Chinese and indigenous Peranakan traditions. You'll sample local specialties like moo hong (braised pork belly), nam prik kung siap (shrimp paste relish), oh tao (oyster omelet), and local Muslim-influenced dishes like roti with curry and murtabak.",
      },
    ],
  },
  {
    title: "Ethical Elephant Sanctuary Experience",
    description:
      "Visit a genuine elephant sanctuary where rescued elephants live free from exploitation. Learn about conservation efforts, prepare elephant meals, and observe these magnificent animals in a natural environment without riding or unethical activities.",
    images: [
      "/images/tours/phuket/elephant-sanctuary.jpg",
      "/images/tours/phuket/elephant-feeding.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Conservation", "Ethical"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("phuket", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Is this a truly ethical elephant facility?",
        answer:
          "Yes, this sanctuary follows global best practices for elephant welfare. The elephants are never ridden, perform no shows or tricks, and are free to roam large natural areas. Many were rescued from logging or entertainment industries. The facility is accredited by international animal welfare organizations and limits visitor numbers and interaction time to prioritize elephant wellbeing.",
      },
      {
        question: "Will we be able to touch or bathe the elephants?",
        answer:
          "This sanctuary follows a observation-based model where close interaction is limited to preserve natural elephant behaviors. You will prepare food and observe feeding from a respectful distance. While traditional elephant bathing activities are no longer considered ethical by conservation experts, you'll observe the elephants' natural bathing behaviors in their habitat.",
      },
    ],
  },
];

export default phuketTours;
