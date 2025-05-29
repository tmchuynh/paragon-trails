import { Tour } from "@/lib/interfaces/services/tours";

export const lehTours: Tour[] = [
  {
    title: "Monastery Circuit & Buddhist Heritage",
    description:
      "Explore Ladakh's magnificent 1000-year-old monasteries perched dramatically on hilltops. Witness morning prayers, interact with monks, and learn about Tibetan Buddhist traditions with a religious scholar guide who provides rare access to private temple rooms.",
    images: [
      "/images/tours/leh/thiksey-monastery.jpg",
      "/images/tours/leh/hemis-monastery.jpg",
    ],
    duration: "8 hours",
    price: "$95",
    rating: 4.9,
    tags: ["Buddhism", "Monasteries", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Geshe Tenzin Norgay",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I wear for monastery visits?",
        answer:
          "Modest dress is essential for monastery visits. Both men and women should cover shoulders and knees, and removing shoes is required before entering temple areas. Avoid wearing shorts, sleeveless tops, or revealing clothing out of respect for Buddhist traditions. We recommend bringing a light jacket or shawl as monasteries at high elevations can be cool even in summer.",
      },
    ],
  },
  {
    title: "Nubra Valley Expedition & Bactrian Camels",
    description:
      "Journey over the world's highest motorable pass (Khardung La) to discover Nubra Valley's surreal landscapes. Ride double-humped Bactrian camels across sand dunes surrounded by snow-capped mountains and stay in a luxury desert camp.",
    images: [
      "/images/tours/leh/nubra-valley.jpg",
      "/images/tours/leh/bactrian-camels.jpg",
    ],
    duration: "2 days",
    price: "$275",
    rating: 4.8,
    tags: ["Adventure", "Desert", "Wildlife"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Jigmet Dadul",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How do we handle the high altitude on this trip?",
        answer:
          "This expedition reaches elevations over 17,500 feet (5,300m) at Khardung La Pass, so proper acclimatization is essential. We recommend spending at least 2-3 days in Leh (11,500 ft/3,500m) before undertaking this journey. The tour includes oxygen supplements and our guides are trained in recognizing and managing altitude sickness. We travel at a moderate pace with frequent stops for adjustment and hydration.",
      },
    ],
  },
  {
    title: "Pangong Lake Photography Expedition",
    description:
      "Photograph one of the world's highest and most beautiful mountain lakes, famous for its ever-changing blue hues. Capture sunrise and sunset at prime locations with guidance from a professional landscape photographer.",
    images: [
      "/images/tours/leh/pangong-lake.jpg",
      "/images/tours/leh/pangong-sunrise.jpg",
    ],
    duration: "2 days",
    price: "$295",
    rating: 4.9,
    tags: ["Photography", "Lake", "Landscapes"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Rigzin Norbu, Landscape Photographer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For landscape photography in Ladakh's dramatic light conditions, we recommend a DSLR or mirrorless camera with wide-angle lens (16-35mm range), polarizing and neutral density filters, stable tripod for low-light shooting, and extra batteries (cold temperatures deplete them quickly). That said, even smartphone photographers will capture stunning images with our guide's assistance with composition and timing. We can arrange equipment rental with advance notice.",
      },
    ],
  },
  {
    title: "Ladakhi Cooking Class & Village Homestay",
    description:
      "Experience authentic Ladakhi culture by staying with a local family in a traditional village home. Learn to prepare regional specialties like thukpa, momos, and butter tea using centuries-old techniques and locally sourced ingredients.",
    images: [
      "/images/tours/leh/ladakhi-cooking.jpg",
      "/images/tours/leh/traditional-home.jpg",
    ],
    duration: "24 hours",
    price: "$85",
    rating: 4.8,
    tags: ["Cooking", "Homestay", "Cultural"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Diskit Angmo",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What are the accommodations like in a village homestay?",
        answer:
          "Homestay accommodations are simple but comfortable, offering an authentic glimpse into traditional Ladakhi life. You'll have a private room in a family home with traditional composting toilets (no flush toilets) and bucket baths with heated water (no showers). Bedding includes thick, warm blankets on traditional wooden beds. Electricity is available but may be intermittent. While basic by urban standards, the cultural richness and hospitality of your host family create an unforgettable experience.",
      },
    ],
  },
  {
    title: "River Rafting Adventure on the Zanskar",
    description:
      "Tackle exhilarating rapids on the turquoise waters of the Zanskar River, surrounded by towering gorges and pristine wilderness. This world-class rafting expedition is led by internationally certified river guides and includes riverside camping.",
    images: [
      "/images/tours/leh/zanskar-rafting.jpg",
      "/images/tours/leh/river-camping.jpg",
    ],
    duration: "2 days",
    price: "$225",
    rating: 4.7,
    tags: ["Rafting", "Adventure", "Camping"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Stanzin Tsephal, International Rafting Federation Guide",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous rafting experience?",
        answer:
          "No previous rafting experience is necessary, but participants should be reasonably fit, comfortable around water, and able to swim. The Zanskar River features Class III-IV rapids (moderate to difficult), making it exciting but manageable for beginners under expert guidance. All safety equipment is provided including helmets, life jackets, wetsuits, and professional rescue training for guides. A comprehensive safety briefing is conducted before launching.",
      },
    ],
  },
  {
    title: "Himalayan Meditation Retreat with Buddhist Masters",
    description:
      "Find inner peace through guided meditation practices in ancient monasteries and remote mountain settings. Learn mindfulness techniques directly from Tibetan Buddhist masters who share centuries-old wisdom adapted for modern practitioners.",
    images: [
      "/images/tours/leh/meditation-retreat.jpg",
      "/images/tours/leh/buddhist-teaching.jpg",
    ],
    duration: "3 days",
    price: "$195",
    rating: 4.9,
    tags: ["Meditation", "Spiritual", "Wellness"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Lama Thupten Wangchuk",
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Is this retreat suitable for meditation beginners?",
        answer:
          "Yes, this retreat is designed to accommodate all levels, from complete beginners to experienced practitioners. Our teachers provide clear instruction in basic meditation techniques before progressing to more advanced practices. The schedule includes short meditation sessions (20-30 minutes) gradually increasing in duration, with plenty of breaks, discussions, and time for questions. No specific religious beliefs are required - the focus is on mindfulness techniques beneficial to everyone regardless of background.",
      },
    ],
  },
  {
    title: "Royal Palaces of Ladakh & Noble Family Heritage",
    description:
      "Explore the fascinating royal history of Ladakh with exclusive access to historic palaces, including private quarters not open to the public. Meet descendants of noble families who share stories of the former Himalayan kingdom.",
    images: [
      "/images/tours/leh/stok-palace.jpg",
      "/images/tours/leh/royal-artifacts.jpg",
    ],
    duration: "7 hours",
    price: "$125",
    rating: 4.7,
    tags: ["Royal History", "Heritage", "Architecture"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Jigmet Namgyal (Royal Family Descendant)",
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What royal sites will we visit?",
        answer:
          "The tour includes visits to Stok Palace (still inhabited by the royal family), Shey Palace (the former summer residence), and Leh Palace (modeled after Tibet's Potala Palace). At Stok, we gain special access to the royal quarters and private collection of crown jewels, ceremonial artifacts, and ancient thangka paintings not shown to regular visitors. Our guide's direct connection to the royal lineage provides unique historical perspectives and personal anecdotes about court life in the former kingdom.",
      },
    ],
  },
];

export default lehTours;
