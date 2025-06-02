import { Tour } from "@/lib/interfaces/services/tours";

export const bolognaTours: Tour[] = [
  {
    title: "Traditional Pasta Making with Nonna",
    description:
      "Join a genuine Italian grandmother in her home kitchen to learn the time-honored techniques of handmade pasta, from tortellini to tagliatelle, followed by a family-style meal with local wines.",
    city: "Bologna",
    country: "Italy",
    region: "Emilia-Romagna",
    images: [
      "/images/tours/bologna/pasta-making.jpg",
      "/images/tours/bologna/tortellini-class.jpg",
    ],
    duration: "4 hours",
    price: "$110",
    rating: 5.0,
    tags: ["Cooking Class", "Pasta", "Homestyle"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Piazza Maggiore, 40124 Bologna, Italy",
      coordinates: {
        latitude: 44.4938,
        longitude: 11.3426,
      },
      instructions:
        "Meet your guide at the central fountain in Piazza Maggiore. Your guide will be holding a wooden rolling pin and a sign with 'Pasta Making Class' written on it. Please arrive 15 minutes before the scheduled class time. From there, we'll walk together to Nonna's home which is located about 10 minutes away in a historic neighborhood.",
      contactNumber: "+39 051 123 4567",
      contactEmail: "pastaclass@paragontrails.com",
    },
    faqs: [
      {
        question: "Is this class suitable for beginners?",
        answer:
          "Absolutely! Nonna Maria has been teaching pasta-making to her family for generations and has a special talent for guiding beginners. No experience is necessary, just a love of Italian food.",
      },
      {
        question: "What dietary restrictions can be accommodated?",
        answer:
          "We can accommodate vegetarian diets, but please inform us in advance of any allergies or specific dietary needs. Unfortunately, we cannot accommodate gluten-free diets as traditional pasta is made with wheat flour.",
      },
      {
        question: "Will we be able to take home any pasta?",
        answer:
          "Yes, you will make enough pasta to enjoy a generous portion during the meal, and you can take home any leftovers. Nonna Maria will also provide you with her family recipes so you can recreate the dishes at home.",
      },
      {
        question: "How many types of pasta will we learn to make?",
        answer:
          "During the class, you'll learn to prepare 2-3 different types of pasta, typically including tagliatelle, tortellini, and either garganelli or farfalle. Each type demonstrates different techniques, from rolling and cutting to shaping and filling. You'll also learn to prepare a traditional Bolognese ragù sauce from scratch using Nonna's secret recipe.",
      },
      {
        question: "Is wine included with the meal?",
        answer:
          "Yes, the meal includes carefully selected local wines from Emilia-Romagna that pair perfectly with the dishes you prepare. Typically, we serve a Pignoletto (a local white wine) and a Sangiovese di Romagna (red). Non-alcoholic options like sparkling water and homemade juices are also available.",
      },
    ],
  },
  {
    title: "Bologna's Secret Porticoes & Towers",
    description:
      "Discover Bologna's architectural marvels with a local art historian, exploring medieval towers with private access and the UNESCO-listed portico network, including hidden sections closed to the public.",
    city: "Bologna",
    country: "Italy",
    region: "Emilia-Romagna",
    images: [
      "/images/tours/bologna/asinelli-tower.jpg",
      "/images/tours/bologna/hidden-porticoes.jpg",
    ],
    duration: "3 hours",
    price: "$75",
    rating: 4.8,
    tags: ["Architecture", "Medieval", "UNESCO"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "historical",
    meetingPoint: {
      address:
        "Due Torri (Asinelli and Garisenda), Piazza di Porta Ravegnana, 40126 Bologna, Italy",
      coordinates: {
        latitude: 44.4941,
        longitude: 11.3471,
      },
      instructions:
        "Meet your art historian guide at the base of the Asinelli Tower in Piazza di Porta Ravegnana. Look for a guide holding a blue folder with architectural drawings. Please arrive 10 minutes before your scheduled tour time wearing comfortable shoes for tower climbing.",
      contactNumber: "+39 051 234 5678",
      contactEmail: "architecture@paragontrails.com",
    },
    faqs: [
      {
        question: "Does this tour involve a lot of climbing?",
        answer:
          "Yes, accessing the Asinelli Tower involves climbing approximately 498 steps, which requires moderate fitness. However, the climb is well worth it for the spectacular panoramic views of Bologna's red rooftops.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No, the tour price includes all entrance fees to the towers and porticoes. We recommend bringing some cash for optional refreshments at local cafes during the tour.",
      },
      {
        question: "Can children join this tour?",
        answer:
          "Yes, children are welcome, but please note that the tower climb may be challenging for very young children. We recommend this tour for ages 10 and up.",
      },
      {
        question: "What makes Bologna's porticoes unique?",
        answer:
          "Bologna has over 40 kilometers of porticoes (covered walkways), the largest collection in the world, which earned UNESCO World Heritage status in 2021. Dating from the Middle Ages, these architectural features were originally created to expand living space as the city grew. Our tour explores both famous porticoes and hidden sections that tell the story of Bologna's urban development across the centuries.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "This tour operates in most weather conditions as the porticoes provide excellent shelter from rain or intense sun. In case of severe weather (thunderstorms, extreme winds) that could make tower access unsafe, we would modify the tour to focus on interior sites and sheltered porticoes or offer rescheduling options.",
      },
    ],
  },
  {
    title: "Bologna Food & Wine Walking Tour",
    description:
      "Experience Bologna's culinary delights with a guided walking tour through the city's historic markets, sampling local cheeses, cured meats, and wines, ending with a traditional aperitivo at a hidden enoteca.",
    city: "Bologna",
    country: "Italy",
    region: "Emilia-Romagna",
    images: [
      "/images/tours/bologna/food-market.jpg",
      "/images/tours/bologna/wine-tasting.jpg",
    ],
    duration: "3 hours",
    price: "$85",
    rating: 4.9,
    tags: ["Food", "Wine", "Walking Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: true,
    isAdventure: false,
    isCultural: true,
    isCulinary: true,
    isSpiritual: false,
    isNightlife: false,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "culinary",
    meetingPoint: {
      address: "Mercato delle Erbe, Via Ugo Bassi 25, 40121 Bologna, Italy",
      coordinates: {
        latitude: 44.4956,
        longitude: 11.339,
      },
      instructions:
        "Meet your culinary guide at the main entrance of Mercato delle Erbe on Via Ugo Bassi. Your guide will be holding a shopping basket with the Paragon Trails logo. Please arrive hungry and 10 minutes before your scheduled tour time.",
      contactNumber: "+39 051 345 6789",
      contactEmail: "foodtour@paragontrails.com",
    },
    faqs: [
      {
        question: "What types of food will we sample?",
        answer:
          "You'll taste a variety of local specialties including Parmigiano Reggiano cheese, prosciutto di Parma, balsamic vinegar, and traditional Bolognese sauces. Vegetarian options are available upon request.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. We can provide child-friendly food options and activities to keep younger participants engaged.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any dietary restrictions.",
      },
      {
        question: "What should I wear?",
        answer:
          "Dress comfortably for walking! Bologna's streets are mostly cobblestone, so comfortable shoes are recommended. The weather can vary, so check the forecast before your tour.",
      },
      {
        question: "How many different establishments will we visit?",
        answer:
          "The tour includes stops at 5-6 different locations, including historic markets, traditional food shops, a pasta maker, and a hidden enoteca (wine bar). Each location specializes in different aspects of Bolognese cuisine, from fresh produce to artisanal cured meats, cheeses, and wines.",
      },
    ],
  },
  {
    title: "Bologna's Hidden Canals & Secret Gardens",
    description:
      "Explore Bologna's lesser-known waterways and tranquil gardens with a local guide, visiting hidden canals that date back to the Middle Ages and serene green spaces tucked away from the bustling city center.",
    city: "Bologna",
    country: "Italy",
    region: "Emilia-Romagna",
    images: [
      "/images/tours/bologna/canal.jpg",
      "/images/tours/bologna/garden.jpg",
    ],
    duration: "2.5 hours",
    price: "$60",
    rating: 4.7,
    tags: ["Nature", "Hidden Gems", "Walking Tour"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: false,
    isWellness: true,
    isLuxury: false,
    isArtOrMusic: false,
    tourCategoryId: "wellness",
    meetingPoint: {
      address: "Via Piella 5, 40126 Bologna, Italy",
      coordinates: {
        latitude: 44.4986,
        longitude: 11.3452,
      },
      instructions:
        "Meet your guide at the 'little window' on Via Piella that looks onto the hidden canal (Finestrella di Via Piella). Your guide will be wearing a green scarf and holding a small map of Bologna's canal system. Please arrive 10 minutes before the scheduled tour time.",
      contactNumber: "+39 051 456 7890",
      contactEmail: "canals@paragontrails.com",
    },
    faqs: [
      {
        question: "Are the canals accessible by foot?",
        answer:
          "Yes, the tour involves walking along the canals and through gardens, which are all accessible on foot. Some areas may have uneven surfaces, so comfortable shoes are recommended.",
      },
      {
        question: "Is this tour suitable for people with mobility issues?",
        answer:
          "While most of the tour is accessible, some sections may be challenging for those with severe mobility issues due to cobblestone paths and steps. Please contact us to discuss specific needs before booking.",
      },
      {
        question: "What should I bring?",
        answer:
          "We recommend bringing a water bottle, sunscreen, and a camera to capture the beautiful scenery. A light jacket may be useful depending on the season.",
      },
      {
        question: "Why are Bologna's canals hidden?",
        answer:
          "Unlike Venice, Bologna's extensive canal system was gradually covered during the 20th century urban development. Today, most canals run underground or are hidden between buildings, with only a few visible spots remaining. Our tour reveals these hidden waterways and explains their historical importance for trade, industry, and city life from medieval times through the industrial revolution.",
      },
      {
        question: "What makes these gardens 'secret'?",
        answer:
          "The gardens we visit are tucked away inside private courtyards, monastery grounds, or behind unassuming facades, making them invisible to casual visitors. Some are only accessible through special arrangement with owners or caretakers. These green oases have fascinating histories as private aristocratic gardens, medicinal herb gardens of ancient hospitals, or contemplative spaces for religious orders.",
      },
    ],
  },
  {
    title: "Bologna's Art & Culture Evening Tour",
    description:
      "Experience Bologna's vibrant art scene with an evening walking tour, visiting contemporary galleries, street art hotspots, and ending with a live performance at a local theater or music venue.",
    city: "Bologna",
    country: "Italy",
    region: "Emilia-Romagna",
    images: [
      "/images/tours/bologna/art-gallery.jpg",
      "/images/tours/bologna/street-art.jpg",
    ],
    duration: "3 hours",
    price: "$70",
    rating: 4.8,
    tags: ["Art", "Culture", "Evening Tour"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    isPopular: false,
    isAdventure: false,
    isCultural: true,
    isCulinary: false,
    isSpiritual: false,
    isNightlife: true,
    isWellness: false,
    isLuxury: false,
    isArtOrMusic: true,
    tourCategoryId: "cultural",
    meetingPoint: {
      address:
        "MAMbo - Museo d'Arte Moderna di Bologna, Via Don Giovanni Minzoni 14, 40121 Bologna, Italy",
      coordinates: {
        latitude: 44.5018,
        longitude: 11.3367,
      },
      instructions:
        "Meet your art guide at the entrance to MAMbo (Museum of Modern Art Bologna). Your guide will be holding an art catalog and wearing a colorful scarf. Please arrive 10 minutes before your scheduled tour time.",
      contactNumber: "+39 051 567 8901",
      contactEmail: "arttour@paragontrails.com",
    },
    faqs: [
      {
        question: "What types of art will we see?",
        answer:
          "The tour includes visits to contemporary art galleries, street art murals, and public installations. We also discuss the influence of Bologna's rich cultural history on its modern art scene.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and designed to engage visitors of all ages with interactive activities and storytelling about Bologna's art and culture.",
      },
      {
        question: "Do we need to book in advance?",
        answer:
          "Yes, we recommend booking at least 24 hours in advance to secure your spot and allow us to prepare for any special requests.",
      },
      {
        question: "What kind of performance will we see?",
        answer:
          "The performance varies depending on the evening's cultural calendar and can include jazz at a historic venue, experimental theater, contemporary dance, or classical music in an unexpected setting. We carefully select performances that showcase Bologna's vibrant cultural scene, prioritizing quality and authenticity over tourist-oriented shows.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The tour covers approximately 2-3 kilometers at a leisurely evening pace. We walk between several galleries and art sites in Bologna's university district and former industrial areas that have been transformed into creative hubs. The terrain is mostly flat, though some streets are cobblestoned or uneven.",
      },
    ],
  },
];

export default bolognaTours;
