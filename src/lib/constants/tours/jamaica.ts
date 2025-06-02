import { Tour } from "@/lib/interfaces/services/tours";

export const jamaicaTours: Tour[] = [
  {
    title: "Blue Mountain Coffee & Plantation Experience",
    description:
      "Journey to the misty peaks of Jamaica's Blue Mountains to discover one of the world's most coveted coffees. Visit working plantations, meet local farmers, learn traditional harvesting methods, and participate in an expert-led cupping session.",
    city: "Blue Mountains",
    country: "Jamaica",
    region: "Portland Parish",
    images: [
      "/images/tours/jamaica/blue-mountain-plantation.jpg",
      "/images/tours/jamaica/coffee-tasting.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.9,
    tags: ["Coffee", "Mountains", "Cultural"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Is there a lot of walking on this tour?",
        answer:
          "The tour includes moderate walking through plantation grounds with some uphill sections on uneven terrain. We spend approximately 1-2 hours walking through the coffee farms, with plenty of rest stops. Comfortable walking shoes are recommended, but the pace is leisurely and suitable for most fitness levels.",
      },
      {
        question: "Can I purchase Blue Mountain coffee on-site?",
        answer:
          "Yes, you can buy freshly roasted Blue Mountain coffee beans directly from the plantation. We also offer a selection of local artisanal products, including coffee-infused snacks and souvenirs.",
      },
      {
        question: "What should I wear for the plantation tour?",
        answer:
          "Dress comfortably for warm weather, with sturdy shoes suitable for walking on uneven terrain. A hat and sunscreen are recommended, as well as a light jacket for cooler mountain temperatures.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly. Children will enjoy learning about coffee production and tasting the delicious brews. However, please note that the plantation's terrain may not be stroller-friendly, so younger children may need to be carried.",
      },
    ],
  },
  {
    title: "Secret Waterfalls & Hidden Lagoons",
    description:
      "Escape the crowds and discover Jamaica's hidden waterfalls and natural swimming holes known only to locals. Trek through lush rainforest, slide down natural rock formations, and jump into pristine blue pools under the guidance of native Jamaican guides.",
    city: "Ocho Rios",
    country: "Jamaica",
    region: "St. Ann Parish",
    images: [
      "/images/tours/jamaica/hidden-falls.jpg",
      "/images/tours/jamaica/natural-pool.jpg",
    ],
    duration: "6 hours",
    price: "$95",
    rating: 4.8,
    tags: ["Waterfalls", "Swimming", "Nature"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "Do I need to know how to swim?",
        answer:
          "Basic swimming ability is recommended for fully enjoying the natural pools, but it's not required for the entire tour. Non-swimmers can still enjoy the beautiful hikes, smaller wading pools, and scenic viewpoints. Our guides are trained in water safety and can provide additional assistance to less confident swimmers.",
      },
      {
        question: "What should I bring for the waterfall tour?",
        answer:
          "Please wear comfortable, moisture-wicking clothing suitable for hiking. Bring a swimsuit, towel, water shoes or sandals with straps, sunscreen, and insect repellent. A waterproof bag for your belongings is also recommended.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children of all ages. However, parental supervision is required near deeper pools and waterfalls. We can adjust the itinerary to accommodate younger children or those who prefer less strenuous activities.",
      },
    ],
  },
  {
    title: "Rastafarian Cultural Immersion",
    description:
      "Gain authentic insight into Jamaica's Rastafarian heritage with a respectful visit to a Rastafari village. Learn about Nyabinghi traditions, natural living principles, Ital cooking techniques, and the global impact of Rastafari culture and philosophy.",
    city: "Nine Mile",
    country: "Jamaica",
    region: "St. Ann Parish",
    images: [
      "/images/tours/jamaica/rastafarian-village.jpg",
      "/images/tours/jamaica/ital-cooking.jpg",
    ],
    duration: "5 hours",
    price: "$85",
    rating: 4.7,
    tags: ["Cultural", "Spiritual", "Educational"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Is this an authentic experience or staged for tourists?",
        answer:
          "This is a genuine cultural exchange, not a performance. We've developed this tour in partnership with Rastafarian elders to create respectful cultural bridges. You'll visit actual Rastafarian communities and interact with people living the Rastafarian way of life. Questions are welcomed, but visitors are asked to approach with an open mind and respect for the community's customs and beliefs.",
      },
      {
        question: "What should I wear for the village visit?",
        answer:
          "Dress modestly and respectfully, covering shoulders and knees. Comfortable walking shoes are recommended as we will be touring the village on foot. Avoid wearing clothing with offensive graphics or slogans.",
      },
      {
        question: "Can I take photos during the tour?",
        answer:
          "Photography is allowed, but please ask permission before taking pictures of individuals, especially children. Some community members may prefer not to be photographed. We encourage you to focus on the experience and interactions rather than just capturing images.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children. The Rastafarian community welcomes visitors of all ages, and children will enjoy learning about different cultures and traditions. However, parents should supervise their children closely during the visit to ensure respect for the community's customs.",
      },
    ],
  },
  {
    title: "Reggae History & Music Studio Experience",
    description:
      "Trace the evolution of reggae music from its roots to global phenomenon with visits to iconic recording studios, museums, and the birthplace of Bob Marley. Meet working musicians and try your hand at creating reggae rhythms in a professional studio session.",
    city: "Kingston",
    country: "Jamaica",
    region: "Kingston Parish",
    images: [
      "/images/tours/jamaica/tuff-gong-studio.jpg",
      "/images/tours/jamaica/reggae-museum.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.9,
    tags: ["Music", "Reggae", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Will we meet famous reggae artists?",
        answer:
          "While we can't guarantee specific artist encounters as their schedules vary, our tour often coincides with working musicians in the studio. Our guide has long-standing relationships in the reggae community, and spontaneous meetings with notable artists do occur. Regardless, you'll interact with talented session musicians who have played on countless reggae recordings and can share insider stories about the industry.",
      },
      {
        question: "Can I record my own reggae track?",
        answer:
          "Yes, the tour includes a hands-on recording session where you can create your own reggae rhythm with professional musicians. No musical experience is required, and our studio engineers will guide you through the process. You'll leave with a digital copy of your recording as a unique souvenir.",
      },
      {
        question: "What should I wear for the music studio tour?",
        answer:
          "Dress comfortably for a creative environment. Casual clothing is fine, but avoid overly noisy accessories like jangly jewelry that might interfere with recording. Closed-toe shoes are recommended for safety in the studio.",
      },
    ],
  },
  {
    title: "Luminous Lagoon Night Bioluminescence Experience",
    description:
      "Witness the magical phenomenon of bioluminescence at Jamaica's Luminous Lagoon, one of the world's brightest bioluminescent bays. Cruise into the glowing waters after sunset and swim surrounded by millions of harmless dinoflagellates that illuminate with your movement.",
    city: "Falmouth",
    country: "Jamaica",
    region: "Trelawny Parish",
    images: [
      "/images/tours/jamaica/luminous-lagoon.jpg",
      "/images/tours/jamaica/bioluminescence-swimming.jpg",
    ],
    duration: "3 hours",
    price: "$89",
    rating: 4.8,
    tags: ["Natural Wonder", "Night Tour", "Swimming"],

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: false,
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to see the bioluminescence?",
        answer:
          "The bioluminescent organisms are visible year-round, but they appear brightest on darker nights with minimal moonlight. The phenomenon is also somewhat weather-dependent. Our tour operator monitors conditions daily and will advise if visibility might be compromised. Swimming in the lagoon is optional but highly recommended for the full experience of seeing the water glow around you.",
      },
      {
        question: "What should I bring for the lagoon tour?",
        answer:
          "Bring a swimsuit, towel, and a change of clothes. Water shoes are recommended for comfort while walking on the dock. We also suggest bringing a waterproof bag for your belongings. Insect repellent is advisable, as mosquitoes can be present in the area.",
      },
      {
        question: "Is swimming safe in the lagoon?",
        answer:
          "Yes, swimming in the lagoon is safe and part of the experience. The water is calm and shallow, with a sandy bottom. Our guides will provide safety instructions before swimming, and life jackets are available if needed.",
      },
    ],
  },
  {
    title: "Jamaican Culinary Adventure & Cooking Class",
    description:
      "Discover the vibrant flavors of Jamaican cuisine through market visits, rum tastings, and hands-on cooking classes. Learn to prepare authentic jerk chicken, ackee and saltfish, festival bread, and rum punch under the guidance of a local chef.",
    city: "Montego Bay",
    country: "Jamaica",
    region: "St. James Parish",
    images: [
      "/images/tours/jamaica/jerk-cooking.jpg",
      "/images/tours/jamaica/market-spices.jpg",
    ],
    duration: "7 hours",
    price: "$145",
    rating: 4.9,
    tags: ["Cooking", "Food", "Rum"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "Can you accommodate dietary restrictions?",
        answer:
          "Yes, we can adapt recipes for vegetarian, vegan, gluten-free, and most other dietary needs with advance notice. Jamaican cuisine naturally includes many plant-based dishes influenced by Rastafarian Ital cooking traditions, so there are excellent options for non-meat eaters. Please inform us of any allergies or restrictions when booking so we can prepare appropriate alternatives.",
      },
      {
        question: "What should I wear for the cooking class?",
        answer:
          "Wear comfortable clothing suitable for cooking, such as an apron and closed-toe shoes. Long hair should be tied back, and we recommend wearing clothes that can get a little messy. We provide all necessary cooking equipment and ingredients.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and children will enjoy participating in the cooking class. We can adjust recipes to be simpler for younger chefs, and our chef is experienced in working with kids in the kitchen. Parental supervision is required for children under 12.",
      },
    ],
  },
  {
    title: "Historical Kingston & Bob Marley Museum Tour",
    description:
      "Explore the vibrant capital city of Kingston with a local guide, visiting significant historical sites, the National Gallery, and the Bob Marley Museum. Learn about Jamaica's rich cultural heritage and the legacy of reggae music.",
    city: "Kingston",
    country: "Jamaica",
    region: "Kingston Parish",
    images: [
      "/images/tours/jamaica/kingston-national-gallery.jpg",
      "/images/tours/jamaica/bob-marley-museum.jpg",
    ],
    duration: "5 hours",
    price: "$99",
    rating: 4.8,
    tags: ["History", "Culture", "Reggae"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "Will we visit Bob Marley's childhood home?",
        answer:
          "Yes, the tour includes a visit to Bob Marley's childhood home in Trench Town, where you can see where he grew up and learn about his early influences. The museum features personal artifacts, photographs, and memorabilia that tell the story of his life and career.",
      },
      {
        question: "What should I wear for the Kingston tour?",
        answer:
          "Dress comfortably for a city tour, with sturdy walking shoes. Lightweight clothing is recommended due to the warm climate. A hat and sunscreen are also advisable.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly and suitable for children. The guide will share engaging stories about Jamaica's history and culture that are accessible to all ages.",
      },
    ],
  },
];

export default jamaicaTours;
