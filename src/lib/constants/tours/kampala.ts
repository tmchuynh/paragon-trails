import { Tour } from "@/lib/interfaces/services/tours";

export const kampalaTours: Tour[] = [
  {
    title: "Kampala Cultural Mosaic Walking Tour",
    description:
      "Explore Kampala's rich multicultural heritage on foot, visiting diverse places of worship including the Gaddafi National Mosque, Baha'i Temple, and Namirembe Cathedral. Learn how different religions peacefully coexist while contributing to Uganda's cultural fabric.",
    images: [
      "/images/tours/kampala/gaddafi-mosque.jpg",
      "/images/tours/kampala/bahai-temple.jpg",
    ],
    duration: "6 hours",
    price: "$65",
    rating: 4.8,
    tags: ["Cultural", "Religious", "Walking Tour"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Edward Ssentongo",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear for visiting religious sites?",
        answer:
          "Modest dress is required when visiting places of worship. For both men and women, shoulders and knees should be covered. Women will need to cover their hair when visiting the mosque (scarves are provided). Comfortable walking shoes are recommended as the tour involves moderate walking, including some hills and stairs at various sites.",
      },
    ],
  },
  {
    title: "Flavors of Uganda: Street Food & Market Adventure",
    description:
      "Discover Uganda's diverse culinary traditions through its vibrant street food scene. Sample delicacies like rolex (egg roll), matooke, fresh tropical fruits, and local coffee while exploring colorful markets and meeting the passionate vendors behind the food.",
    images: [
      "/images/tours/kampala/street-food.jpg",
      "/images/tours/kampala/owino-market.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.7,
    tags: ["Food", "Markets", "Local Experience"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Sarah Nakimuli",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is the street food safe to eat?",
        answer:
          "We carefully select vendors based on their hygiene practices and local reputation. Our guides are experts at identifying the safest and most delicious street food options frequented by locals rather than tourists. All food is freshly prepared, often right before your eyes. We provide hand sanitizer throughout the tour and can accommodate dietary restrictions with advance notice.",
      },
    ],
  },
  {
    title: "Boda-Boda City Tour: Kampala by Motorcycle",
    description:
      "Experience Kampala like a local on the back of a boda-boda (motorcycle taxi), the city's most popular form of transportation. Zip through bustling streets, hidden neighborhoods, and scenic viewpoints with experienced drivers and knowledgeable guides.",
    images: [
      "/images/tours/kampala/boda-boda.jpg",
      "/images/tours/kampala/city-overlook.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.6,
    tags: ["Adventure", "City Tour", "Local Experience"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Patrick Muwonge & Boda Driver Team",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Is riding a boda-boda safe?",
        answer:
          "We prioritize safety with specially selected and trained drivers who have excellent safety records. Unlike typical boda-bodas, our drivers provide high-quality helmets, follow traffic rules, drive at moderate speeds, and have undergone defensive driving training. Our routes avoid the busiest roads when possible. This experience gives you the excitement of this quintessential Kampala transport method while minimizing risks.",
      },
    ],
  },
  {
    title: "Uganda Martyrs Trail & Religious Heritage",
    description:
      "Trace the powerful story of the Uganda Martyrs with visits to Namugongo Martyrs Shrine, Munyonyo Martyrs Shrine, and Rubaga Cathedral. Learn about these 19th-century Christian converts who died for their faith and their enduring impact on Ugandan society.",
    images: [
      "/images/tours/kampala/namugongo-shrine.jpg",
      "/images/tours/kampala/rubaga-cathedral.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Religious", "Historical", "Pilgrimage"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Sister Mary Nakayima",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Do I need to be religious to appreciate this tour?",
        answer:
          "While this tour visits sites of religious significance, it's designed to be accessible and meaningful for people of all faiths and backgrounds. The historical importance of these sites and their role in shaping Ugandan identity transcends religious boundaries. Our guide presents the information from both spiritual and historical-cultural perspectives, allowing each visitor to connect with the story in their own way.",
      },
    ],
  },
  {
    title: "Royal Kampala: Buganda Kingdom & Kasubi Tombs",
    description:
      "Delve into Uganda's most powerful traditional kingdom with visits to the Buganda Parliament (Lukiiko), Kabaka's Palace, and UNESCO-listed Kasubi Tombs. Learn about traditional governance systems that continue to shape modern Ugandan society.",
    images: [
      "/images/tours/kampala/kasubi-tombs.jpg",
      "/images/tours/kampala/buganda-parliament.jpg",
    ],
    duration: "5 hours",
    price: "$55",
    rating: 4.7,
    tags: ["Cultural", "UNESCO", "Historical"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Robert Ssemakula, Royal Historian",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What is the significance of the Kasubi Tombs?",
        answer:
          "The Kasubi Tombs, a UNESCO World Heritage Site, are the burial grounds of four Buganda kings (Kabakas) and represent the spiritual center of the Buganda Kingdom. The main tomb building, called Muzibu-Azaala-Mpanga, is a masterpiece of traditional architecture built entirely of organic materials. Beyond its role as a royal burial site, it's an active religious place where rituals are performed and a vital place for preserving Ganda traditions, craftsmanship, and spiritual practices.",
      },
    ],
  },
  {
    title: "Crafts & Artisans: Ugandan Art Experience",
    description:
      "Discover Uganda's vibrant arts scene through visits to community craft workshops, artist studios, and social enterprise initiatives. Meet skilled artisans creating batik textiles, handwoven baskets, recycled paper beads, and contemporary art with cultural significance.",
    images: [
      "/images/tours/kampala/craft-workshop.jpg",
      "/images/tours/kampala/basket-weaving.jpg",
    ],
    duration: "4 hours",
    price: "$50",
    rating: 4.9,
    tags: ["Crafts", "Art", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Grace Nakimera",
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "Will we have opportunities to purchase crafts directly from artisans?",
        answer:
          "Yes, you'll have the opportunity to purchase directly from the artisans you meet, ensuring they receive fair compensation for their work. This direct exchange also allows you to learn the story behind each piece and sometimes even customize items. Many of the workshops we visit are social enterprises that provide sustainable income and skills training for women, people with disabilities, or youth from disadvantaged backgrounds, so your purchases directly support community development initiatives.",
      },
    ],
  },
];

export default kampalaTours;
