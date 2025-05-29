import { Tour } from "@/lib/interfaces/services/tours";
export const jaipurTours: Tour[] = [
  {
    title: "Royal Amber Fort & Palace Elegance",
    description:
      "Journey through Jaipur's royal heritage with a private tour of magnificent Amber Fort, followed by exclusive access to City Palace's royal apartments and a traditional Rajasthani dinner with folk performances.",
    images: [
      "/images/tours/jaipur/amber-fort.jpg",
      "/images/tours/jaipur/city-palace.jpg",
    ],
    duration: "Full day",
    price: "$165",
    rating: 4.9,
    tags: ["Royal", "Palaces", "Heritage"],
 
    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourGuide: "Maharaj Singh Shekhawat",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Is the elephant ride to Amber Fort ethical?",
        answer:
          "We've discontinued elephant rides in favor of jeep transportation to the fort entrance, supporting more humane animal tourism practices. For those interested in ethical elephant encounters, we can arrange a separate visit to a reputable elephant sanctuary where these magnificent animals are properly cared for.",
      },
      {
        question: "What should I wear for the palace tour?",
        answer:
          "We recommend comfortable, breathable clothing suitable for warm weather. Please dress modestly when visiting religious sites within the palace complex. A hat and sunscreen are advisable.",
      },
    ],
  },
  {
    title: "Artisan Workshops & Textile Heritage",
    description:
      "Discover the living crafts of Jaipur with exclusive access to master artisan workshops specializing in block printing, blue pottery, gemstone cutting, and traditional Rajasthani textile techniques passed down through generations.",
    images: [
      "/images/tours/jaipur/block-printing.jpg",
      "/images/tours/jaipur/blue-pottery.jpg",
    ],
    duration: "6 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Crafts", "Textiles", "Artisans"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Lakshmi Devi",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Can we try some of the crafts ourselves?",
        answer:
          "Yes, this hands-on tour includes opportunities to try block printing on a handkerchief, shaping a small piece of blue pottery, and learning the basics of traditional Rajasthani tie-dye techniques. These participatory experiences are designed for beginners and make wonderful memories along with the items you create.",
      },
      {
        question: "Are the workshops suitable for children?",
        answer:
          "Absolutely! The workshops are family-friendly and designed to be engaging for all ages. Children will enjoy the interactive nature of the crafts, and our artisans are experienced in working with young learners.",
      },
    ],
  },
  {
    title: "Jaipur's Hidden Gems & Local Markets",
    description:
      "Explore Jaipur's vibrant local life with a guided tour of lesser-known neighborhoods, bustling markets, and hidden temples, experiencing the city's authentic culture away from the tourist crowds.",
    images: [
      "/images/tours/jaipur/local-market.jpg",
      "/images/tours/jaipur/hideen-temple.jpg",
    ],
    duration: "4 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Local Culture", "Markets", "Hidden Gems"],
 
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Rajesh Kumar",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Will we visit any tourist attractions?",
        answer:
          "This tour focuses on local experiences and hidden gems, so we won't visit major tourist sites like Hawa Mahal or Jantar Mantar. Instead, you'll discover authentic neighborhoods, local markets, and community temples that showcase Jaipur's vibrant daily life.",
      },
      {
        question: "What should I wear for this walking tour?",
        answer:
          "Comfortable walking shoes are recommended as we'll explore various neighborhoods on foot. Light, breathable clothing is advisable due to the warm climate. A hat and sunscreen are also recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. The local markets and neighborhoods provide a fascinating glimpse into everyday life in Jaipur.",
      },
    ],
  },
  {
    title: "Culinary Delights of Jaipur: Food & Culture Tour",
    description:
      "Savor the flavors of Jaipur with a guided food tour through the city's vibrant markets, traditional eateries, and hidden gems, tasting local specialties like Dal Baati Churma, Gatte ki Sabzi, and Rajasthani sweets.",
    images: [
      "/images/tours/jaipur/food-market.jpg",
      "/images/tours/jaipur/dal-baati-churma.jpg",
    ],
    duration: "5 hours",
    price: "$75",
    rating: 4.9,
    tags: ["Food", "Culture", "Local Cuisine"],
 
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Anjali Sharma",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Will we try street food during the tour?",
        answer:
          "Yes! The tour includes stops at popular local eateries and street food stalls where you can sample authentic Rajasthani dishes. We ensure all food is prepared fresh and hygienically.",
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer:
          "Yes, we can accommodate vegetarian and vegan diets with advance notice. Please inform us of any allergies or dietary needs when booking.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Absolutely! The tour is family-friendly and designed to engage visitors of all ages. Children will enjoy tasting different foods and learning about local culinary traditions.",
      },
    ],
  },
];

export default jaipurTours;
