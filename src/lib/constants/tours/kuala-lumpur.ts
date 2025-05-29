import { Tour } from "@/lib/interfaces/services/tours";

export const kualaLumpurTours: Tour[] = [
  {
    title: "Cultural Mosaic: Temples, Mosques & Traditions",
    description:
      "Experience Kuala Lumpur's remarkable religious harmony with visits to Batu Caves Hindu Temple, Masjid Jamek Mosque, Sri Mahamariamman Temple, and Thean Hou Chinese Temple, learning how Malaysia's diverse faiths peacefully coexist.",
    images: [
      "/images/tours/kuala-lumpur/batu-caves.jpg",
      "/images/tours/kuala-lumpur/thean-hou-temple.jpg",
    ],
    duration: "7 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Cultural", "Religious", "History"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Dr. Ahmad Rizal",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "What should I wear when visiting religious sites?",
        answer:
          "Modest dress is required for all religious sites. For mosques, women should bring a headscarf and both men and women should wear clothing that covers shoulders and knees. For Batu Caves, comfortable clothing is recommended as you'll climb 272 steps to reach the main temple cave. We provide appropriate coverings if needed, and our guide will advise on specific requirements for each site.",
      },
      {
        question: "Are there any physical requirements for this tour?",
        answer:
          "This tour involves some walking and climbing, particularly at Batu Caves where there are 272 steps to ascend. While the steps are manageable for most people, those with mobility issues may find it challenging. We can adjust the itinerary to focus on sites that are more accessible if needed. Please inform us in advance of any specific requirements.",
      },
    ],
  },
  {
    title: "Hidden Street Food & Night Markets Tour",
    description:
      "Dive into KL's legendary street food scene with an evening exploration of bustling night markets, hidden food courts, and local hawker centers. Sample over 12 authentic dishes while learning about the cultural influences that shape Malaysian cuisine.",
    images: [
      "/images/tours/kuala-lumpur/jalan-alor.jpg",
      "/images/tours/kuala-lumpur/street-food-satay.jpg",
    ],
    duration: "4 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Food", "Night Markets", "Local Cuisine"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Lily Tan",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "How spicy is Malaysian food?",
        answer:
          "Malaysian cuisine offers a range of spice levels. We'll introduce you to both mild and spicy options, and our guide will help you navigate according to your preference. Many dishes can be prepared with adjustable spice levels. The tour includes Malay, Chinese, and Indian influenced dishes, providing a complete spectrum of flavors beyond just spicy foods. We can accommodate most dietary restrictions with advance notice.",
      },
      {
        question: "Do we need to bring cash for the food stalls?",
        answer:
          "While many stalls accept digital payments, we recommend bringing some cash (Malaysian Ringgit) for smaller vendors that may not have card facilities. Our guide will assist with currency exchange if needed and ensure you have enough cash for the evening's tastings.",
      },
    ],
  },
  {
    title: "KL Architecture: Colonial to Contemporary",
    description:
      "Trace Kuala Lumpur's evolution through its architecture, from British colonial buildings around Merdeka Square to the iconic Petronas Twin Towers. Access exclusive viewpoints and private buildings normally closed to the public.",
    images: [
      "/images/tours/kuala-lumpur/colonial-architecture.jpg",
      "/images/tours/kuala-lumpur/petronas-towers.jpg",
    ],
    duration: "6 hours",
    price: "$90",
    rating: 4.7,
    tags: ["Architecture", "History", "Photography"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Professor Tam Li Ying",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we go up the Petronas Twin Towers?",
        answer:
          "This tour includes priority access tickets to the Petronas Twin Towers Skybridge and Observation Deck, allowing you to experience both the architectural details up close and the spectacular city views. We time our visit to avoid peak crowds. The tour also includes special access to several heritage buildings not typically open to the public, including selected floors of the Sultan Abdul Samad Building and the historic Royal Selangor Club.",
      },
    ],
  },
  {
    title: "Batik Art Workshop & Cultural Heritage",
    description:
      "Learn the ancient art of batik from master craftspeople in a hands-on workshop where you'll create your own batik piece to take home. Tour the Islamic Arts Museum and National Textile Museum to understand batik's cultural significance.",
    images: [
      "/images/tours/kuala-lumpur/batik-workshop.jpg",
      "/images/tours/kuala-lumpur/batik-art.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Art", "Craft", "Culture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mdm. Faridah Ismail",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Do I need artistic experience for the batik workshop?",
        answer:
          "No prior artistic experience is necessary. Our master instructors guide you through each step of the process, from wax application to fabric dyeing. The workshop is designed to be accessible for beginners while still engaging for those with artistic backgrounds. Each participant works at their own pace and creates a unique piece reflecting their personal style, with options ranging from traditional patterns to contemporary designs.",
      },
    ],
  },
  {
    title: "Fireflies & Kuala Selangor Sunset Adventure",
    description:
      "Journey from Kuala Lumpur to witness one of Malaysia's magical natural phenomena—thousands of synchronizing fireflies illuminating mangrove trees along the Selangor River at dusk. Includes seaside dinner and visit to historic Kuala Selangor Fort.",
    images: [
      "/images/tours/kuala-lumpur/fireflies.jpg",
      "/images/tours/kuala-lumpur/kuala-selangor-fort.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.7,
    tags: ["Nature", "Wildlife", "Sunset"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Ravi Chandran",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to see the fireflies?",
        answer:
          "Fireflies can be seen year-round, but visibility is best during darker nights with minimal moonlight and clear weather conditions. The synchronizing effect is most pronounced between 7:30-9:00 PM. We time our boat rides accordingly and monitor weather conditions. The tour includes a twilight departure from Kuala Lumpur to reach Kuala Selangor for sunset, followed by dinner and then the firefly experience when darkness has fully descended.",
      },
    ],
  },
  {
    title: "Birdwatching & Rainforest Discovery at FRIM",
    description:
      "Explore the Forest Research Institute Malaysia (FRIM) with expert naturalists to spot tropical birds, butterflies, and plant species. Experience the canopy walkway for unique rainforest perspectives just 30 minutes from downtown KL.",
    images: [
      "/images/tours/kuala-lumpur/frim-canopy-walk.jpg",
      "/images/tours/kuala-lumpur/tropical-birds.jpg",
    ],
    duration: "6 hours",
    price: "$70",
    rating: 4.6,
    tags: ["Nature", "Birdwatching", "Rainforest"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Dr. Melissa Wong, Ornithologist",
    tourCategoryId: "wildlife",
    faqs: [
      {
        question: "What birds might we see?",
        answer:
          "FRIM is home to over 180 bird species, and while sightings vary seasonally, common species include colorful barbets, bulbuls, sunbirds, flowerpeckers, and occasionally hornbills. Our guide is skilled at spotting and identifying even elusive species. We provide binoculars and spotting scopes to enhance your viewing experience. The tour also focuses on rainforest ecology, medicinal plants, and sustainable forestry practices at this living laboratory for tropical forest research.",
      },
      {
        question: "Is the canopy walkway safe for everyone?",
        answer:
          "Yes, the canopy walkway is designed for safety and accessibility. It is 30 meters above ground and spans 200 meters, providing a stable platform with handrails. However, those with severe vertigo or mobility issues may find it challenging. We can adjust the tour to focus on ground-level trails if needed. The walkway offers stunning views of the rainforest canopy and is an unforgettable experience for nature lovers.",
      },
    ],
  },
  {
    title: "Luxury Shopping & High Tea Experience",
    description:
      "Indulge in Kuala Lumpur's sophisticated side with VIP shopping experiences at designer boutiques and local luxury brands, followed by the legendary high tea tradition at the historic Colonial Café in The Majestic Hotel.",
    images: [
      "/images/tours/kuala-lumpur/pavilion-mall.jpg",
      "/images/tours/kuala-lumpur/high-tea.jpg",
    ],
    duration: "5 hours",
    price: "$150",
    rating: 4.8,
    tags: ["Luxury", "Shopping", "High Tea"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Ms. Vanessa Yong",
    tourCategoryId: "luxury",
    faqs: [
      {
        question: "What's included in the high tea?",
        answer:
          "The Colonial Café high tea is a lavish affair featuring both traditional English and Malaysian delicacies. You'll enjoy finger sandwiches, scones with clotted cream, pastries, and local specialties like kuih-muih (traditional Malaysian sweets) served on fine bone china. Premium teas from Cameron Highlands and around the world are served in silver teapots. The setting in the restored Majestic Hotel, with its 1930s Art Deco elegance, completes this refined cultural experience that blends British colonial tradition with Malaysian hospitality.",
      },
      {
        question: "Can we customize the shopping experience?",
        answer:
          "Absolutely! We tailor the shopping itinerary based on your preferences, whether you're interested in high-end designer brands, local artisanal crafts, or a mix of both. Our guide can arrange private appointments at flagship stores, exclusive boutiques, or even bespoke tailoring experiences. We also provide insights into Malaysian fashion trends and craftsmanship. If you have specific brands or items in mind, please let us know in advance so we can ensure a personalized and enjoyable shopping journey.",
      },
    ],
  },
  {
    title: "Kuala Lumpur by Night: City Lights & Cultural Show",
    description:
      "Experience the vibrant nightlife of Kuala Lumpur with a guided evening tour that includes stunning city views from the KL Tower, a visit to the illuminated Petronas Towers, and a cultural performance showcasing traditional Malaysian music and dance.",
    images: [
      "/images/tours/kuala-lumpur/kl-tower-night.jpg",
      "/images/tours/kuala-lumpur/petronas-towers-night.jpg",
    ],
    duration: "4 hours",
    price: "$80",
    rating: 4.7,
    tags: ["Nightlife", "Cultural", "City Tour"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Mr. Amirul Hakim",
    tourCategoryId: "nightlife",
    faqs: [
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly! The KL Tower has an observation deck with panoramic views that children love, and the cultural show features colorful costumes and engaging performances that appeal to all ages. We ensure the pace is relaxed and enjoyable for families.",
      },
      {
        question: "What cultural performance can we expect?",
        answer:
          "The cultural show includes traditional Malaysian music and dance, such as the energetic Joget dance, graceful Zapin dance, and mesmerizing Silat martial arts performance. The show lasts about 45 minutes and provides insights into Malaysia's diverse cultural heritage through lively performances.",
      },
    ],
  },
];

export default kualaLumpurTours;
