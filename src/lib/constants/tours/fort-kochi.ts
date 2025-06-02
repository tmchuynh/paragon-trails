import { Tour } from "@/lib/interfaces/services/tours";

export const fortKochiTours: Tour[] = [
  {
    title: "Colonial Heritage & Chinese Fishing Nets",
    description:
      "Explore Fort Kochi's rich colonial past with visits to Dutch, Portuguese, and British heritage sites, culminating in sunset at the iconic Chinese fishing nets with opportunity to assist local fishermen.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/chinese-fishing-nets.jpg",
      "/images/tours/fort-kochi/colonial-buildings.jpg",
    ],
    duration: "4 hours",
    price: "$45",
    rating: 4.8,
    tags: ["Historical", "Cultural", "Photography"],

    isHistorical: true,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What makes the Chinese fishing nets unique?",
        answer:
          "These distinctive fishing nets are believed to have been introduced by Chinese explorer Zheng He in the 14th century and represent a rare cultural exchange between ancient China and Kerala. The cantilever systems use counterweights and require multiple operators, creating a spectacular silhouette at sunset that has become symbolic of Fort Kochi.",
      },
      {
        question: "Will we get to operate the fishing nets?",
        answer:
          "Yes, you'll have the opportunity to join local fishermen in operating these massive nets. They'll demonstrate the traditional techniques and invite you to participate in lowering and raising the nets. It's a cooperative effort that provides insight into this centuries-old fishing method.",
      },
      {
        question: "What should I wear for this tour?",
        answer:
          "Comfortable walking shoes are recommended as we'll cover several historical sites on foot. Light, breathable clothing is advisable for the tropical climate. For sunset at the fishing nets, a hat and sunglasses are useful, and you may want to bring a light covering for cooler evening breezes.",
      },
    ],
  },
  {
    title: "Kerala Cuisine Cooking Class & Spice Market",
    description:
      "Discover Kerala's aromatic cuisine with a guided tour of Fort Kochi's spice markets followed by a hands-on cooking class in a traditional home, learning to prepare authentic Syrian Christian and Malabari dishes.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/cooking-class.jpg",
      "/images/tours/fort-kochi/spice-market.jpg",
    ],
    duration: "5 hours",
    price: "$65",
    rating: 4.9,
    tags: ["Culinary", "Cooking", "Spices"],

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What dishes will we learn to prepare?",
        answer:
          "The class focuses on signature Kerala dishes such as fish molee (coconut curry), appam (rice pancakes), avial (mixed vegetable curry with coconut), and payasam (cardamom-infused dessert). Menus vary seasonally based on available ingredients, but always include a balanced selection of vegetarian and non-vegetarian options.",
      },
      {
        question: "Do I need cooking experience?",
        answer:
          "No prior experience is necessary! The class is designed for all skill levels, from beginners to experienced cooks. Our host will guide you through each step and explain techniques as you go.",
      },
      {
        question: "Can special dietary needs be accommodated?",
        answer:
          "Yes, we can accommodate vegetarian, vegan, and most other dietary restrictions with advance notice. Kerala cuisine naturally includes many vegetarian options, and we can easily adapt recipes to suit your needs.",
      },
    ],
  },
  {
    title: "Kathakali Classical Dance & Cultural Performance",
    description:
      "Experience the ancient art of Kathakali with a behind-the-scenes look at elaborate makeup preparation, followed by a mesmerizing performance of this classical Kerala dance-drama that combines literature, music, painting, acting, and dance.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/kathakali-makeup.jpg",
      "/images/tours/fort-kochi/kathakali-performance.jpg",
    ],
    duration: "3 hours",
    price: "$35",
    rating: 4.7,
    tags: ["Arts", "Cultural", "Performance"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question:
          "What makes Kathakali special among Indian classical dance forms?",
        answer:
          "Kathakali stands out for its elaborate makeup and costumes that transform performers into mythological characters, its complex facial expressions and precise eye movements used to convey emotions, and its synthesis of multiple art forms. Dating back to the 17th century, it's one of the oldest classical dance-dramas in India, telling stories primarily from Hindu epics.",
      },
      {
        question: "How long is the makeup preparation?",
        answer:
          "The makeup preparation takes approximately 1-1.5 hours. This fascinating process is an art form itself, as performers apply natural pigments to create colorful, three-dimensional facial designs that indicate character types. Green faces represent heroes, red faces depict evil characters, while yellow and white signify female characters and sages.",
      },
      {
        question:
          "Will I understand the performance if I don't know the language?",
        answer:
          "Yes, the performance includes English narration and program notes. Additionally, before the main performance, artists demonstrate the basic hand gestures (mudras) and facial expressions used to convey different emotions, helping you understand the symbolic language of Kathakali.",
      },
    ],
  },
  {
    title: "Jewish Heritage Walking Tour",
    description:
      "Explore Fort Kochi's fascinating Jewish history with visits to the 16th-century Paradesi Synagogue, Jewish Cemetery, and historic Jew Town, learning about this ancient community's rich cultural contributions and distinctive heritage.",
    city: "Fort Kochi",
    country: "India",
    region: "Kerala",
    images: [
      "/images/tours/fort-kochi/paradesi-synagogue.jpg",
      "/images/tours/fort-kochi/jew-town.jpg",
    ],
    duration: "3 hours",
    price: "$40",
    rating: 4.8,
    tags: ["History", "Jewish Heritage", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "How old is the Jewish community in Kochi?",
        answer:
          "The Jewish presence in Kerala dates back over 2,000 years, making it one of the oldest Jewish settlements outside Israel. Different waves of Jewish immigrants arrived, with the earliest possibly coming after the destruction of the Second Temple in 70 CE. The community flourished as merchants, with the Paradesi ('foreign') Jews arriving in the 16th century after fleeing the Spanish Inquisition.",
      },
      {
        question: "Is the synagogue still active?",
        answer:
          "The Paradesi Synagogue remains India's oldest active synagogue, though the community has dwindled to very few members. It contains remarkable features including hand-painted Chinese tiles, Belgian chandeliers, and a gold crown gifted by a local Hindu ruler. Services are still occasionally held, particularly during high holidays.",
      },
      {
        question: "What makes Jew Town unique?",
        answer:
          "Jew Town is the historic Jewish quarter centered around Synagogue Lane. Once a thriving center of the spice trade run by Jewish merchants, it now houses antique shops, spice stores, and boutiques in buildings that retain their colonial architecture. Many buildings feature Stars of David and other Jewish symbols, reflecting the area's heritage.",
      },
    ],
  },
];

export default fortKochiTours;
