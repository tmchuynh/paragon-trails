import { Tour } from "@/lib/interfaces/services/tours";
export const udaipurTours: Tour[] = [
  {
    title: "Royal Lakeside Palace Experience",
    description:
      "Experience the grandeur of Udaipur's royal heritage with private access to palace quarters normally closed to visitors, followed by a sunset boat cruise on Lake Pichola with champagne and traditional music.",
    images: [
      "/images/tours/udaipur/city-palace.jpg",
      "/images/tours/udaipur/lake-pichola-sunset.jpg",
    ],
    duration: "5 hours",
    price: "$195",
    rating: 4.9,
    tags: ["Royal", "Palace", "Luxury"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maharaj Vikram Singh",
    tourCategoryId: "luxury",
    faqs: [
      {
        question:
          "What makes this palace tour special compared to regular visits?",
        answer:
          "Our tour includes exclusive access to the private royal quarters, vintage car collection, and royal costume gallery not open to general visitors. You'll also enjoy a private audience with a member of the royal family staff who shares personal stories of palace life through generations. The experience concludes with a sunset champagne cruise on a restored royal barge.",
      },
    ],
  },
  {
    title: "Rural Villages & Artisan Crafts",
    description:
      "Venture beyond the city to traditional villages where generations of artisans practice ancient crafts including miniature painting, pottery, and textile weaving using techniques unchanged for centuries.",
    images: [
      "/images/tours/udaipur/miniature-painting.jpg",
      "/images/tours/udaipur/village-craft.jpg",
    ],
    duration: "7 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Crafts", "Village", "Cultural"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lakshmi Sharma",
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Will we have the opportunity to purchase crafts directly from artisans?",
        answer:
          "Yes, you'll have the chance to purchase authentic handcrafted items directly from the artisans who create them. This provides meaningful income to the craftspeople and ensures you receive genuine, high-quality pieces at fair prices. Your guide can help with communication and explaining the cultural significance of different items.",
      },
    ],
  },
  {
    title: "Udaipur Culinary Heritage Tour",
    description:
      "Savor the flavors of Udaipur with a guided culinary journey through local markets, cooking classes in traditional havelis, and tastings of royal recipes passed down through generations.",
    images: [
      "/images/tours/udaipur/culinary-tour.jpg",
      "/images/tours/udaipur/cooking-class.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Culinary", "Food", "Local Experience"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Chef Anjali Rathore",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What types of dishes will we learn to cook?",
        answer:
          "You'll learn to prepare traditional Rajasthani dishes such as Dal Baati Churma, Gatte ki Sabzi, and Laal Maas, along with vegetarian options. The class is hands-on, allowing you to experience the techniques and flavors of local cuisine firsthand. We also include a visit to the spice market to select fresh ingredients.",
      },
      {
        question: "Do I need prior cooking experience?",
        answer:
          "No prior cooking experience is necessary! The class is designed for all skill levels, and our chef will guide you through each step of the process. You'll leave with new skills and recipes to recreate at home.",
      },
    ],
  },
];

export default udaipurTours;
