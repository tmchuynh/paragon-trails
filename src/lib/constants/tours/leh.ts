import { Tour } from "@/lib/interfaces/services/tours";
import { findGuideBySpecialty } from "@/lib/utils/get";

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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("leh", "spiritual").name,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "What should I wear for monastery visits?",
        answer:
          "Modest dress is essential for monastery visits. Both men and women should cover shoulders and knees, and removing shoes is required before entering temple areas. Avoid wearing shorts, sleeveless tops, or revealing clothing out of respect for Buddhist traditions. We recommend bringing a light jacket or shawl as monasteries at high elevations can be cool even in summer.",
      },
      {
        question: "Can we participate in any rituals or prayers?",
        answer:
          "Yes, our guides can arrange for you to participate in morning prayers at select monasteries, providing a unique opportunity to experience the spiritual atmosphere. You may also have the chance to light butter lamps or make offerings under the guidance of the monks. However, participation is always optional and respectful silence is expected during rituals.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("leh", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How do we handle the high altitude on this trip?",
        answer:
          "This expedition reaches elevations over 17,500 feet (5,300m) at Khardung La Pass, so proper acclimatization is essential. We recommend spending at least 2-3 days in Leh (11,500 ft/3,500m) before undertaking this journey. The tour includes oxygen supplements and our guides are trained in recognizing and managing altitude sickness. We travel at a moderate pace with frequent stops for adjustment and hydration.",
      },
      {
        question: "What type of accommodation is provided in Nubra Valley?",
        answer:
          "We stay in luxury desert camps featuring spacious tents with comfortable beds, en-suite bathrooms, and hot showers. Each camp is equipped with modern amenities while maintaining an authentic desert experience. The camps are located near the sand dunes for easy camel rides and stargazing at night.",
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

    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("leh", "art").name,
    tourCategoryId: "art-and-music",
    faqs: [
      {
        question: "What camera equipment should I bring?",
        answer:
          "For landscape photography in Ladakh's dramatic light conditions, we recommend a DSLR or mirrorless camera with wide-angle lens (16-35mm range), polarizing and neutral density filters, stable tripod for low-light shooting, and extra batteries (cold temperatures deplete them quickly). That said, even smartphone photographers will capture stunning images with our guide's assistance with composition and timing. We can arrange equipment rental with advance notice.",
      },
      {
        question: "Are there any restrictions on photography at Pangong Lake?",
        answer:
          "Photography is allowed throughout the Pangong Lake area, but please respect local customs and avoid photographing people without permission. Some areas near the border may have restricted access, so we will ensure all locations visited are open to tourists. Our guide will also provide tips on capturing the lake's unique colors and reflections.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("leh", "culinary").name,
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What are the accommodations like in a village homestay?",
        answer:
          "Homestay accommodations are simple but comfortable, offering an authentic glimpse into traditional Ladakhi life. You'll have a private room in a family home with traditional composting toilets (no flush toilets) and bucket baths with heated water (no showers). Bedding includes thick, warm blankets on traditional wooden beds. Electricity is available but may be intermittent. While basic by urban standards, the cultural richness and hospitality of your host family create an unforgettable experience.",
      },
      {
        question:
          "Do I need to bring any special ingredients for the cooking class?",
        answer:
          "No special ingredients are required. All necessary ingredients will be provided by your host family, who sources fresh produce from local markets. The class focuses on traditional Ladakhi recipes using locally available ingredients like barley flour, vegetables, and dairy products. You will learn how to make dishes from scratch, including dough preparation and steaming techniques.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: findGuideBySpecialty("leh", "adventure").name,
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous rafting experience?",
        answer:
          "No previous rafting experience is necessary, but participants should be reasonably fit, comfortable around water, and able to swim. The Zanskar River features Class III-IV rapids (moderate to difficult), making it exciting but manageable for beginners under expert guidance. All safety equipment is provided including helmets, life jackets, wetsuits, and professional rescue training for guides. A comprehensive safety briefing is conducted before launching.",
      },
      {
        question: "What should I bring for the rafting trip?",
        answer:
          "We provide all necessary rafting gear, but you should bring personal items like quick-dry clothing, swimwear, sunscreen, a hat, sunglasses with straps, and a waterproof bag for valuables. Sturdy water shoes or sandals with straps are recommended. For overnight trips, pack light camping gear (we provide tents and sleeping bags) and a change of clothes for the evening.",
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

    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("leh", "spiritual").name,
    tourCategoryId: "spiritual",
    faqs: [
      {
        question: "Is this retreat suitable for meditation beginners?",
        answer:
          "Yes, this retreat is designed to accommodate all levels, from complete beginners to experienced practitioners. Our teachers provide clear instruction in basic meditation techniques before progressing to more advanced practices. The schedule includes short meditation sessions (20-30 minutes) gradually increasing in duration, with plenty of breaks, discussions, and time for questions. No specific religious beliefs are required - the focus is on mindfulness techniques beneficial to everyone regardless of background.",
      },
      {
        question: "What should I bring for the meditation retreat?",
        answer:
          "Comfortable, loose-fitting clothing suitable for meditation is recommended. Bring a meditation cushion or mat if you prefer your own, though we provide basic seating. A journal for notes and reflections can be helpful. Personal items like toiletries, a water bottle, and any medications should also be packed. We recommend avoiding electronic devices to fully immerse yourself in the experience.",
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

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("leh", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What royal sites will we visit?",
        answer:
          "The tour includes visits to Stok Palace (still inhabited by the royal family), Shey Palace (the former summer residence), and Leh Palace (modeled after Tibet's Potala Palace). At Stok, we gain special access to the royal quarters and private collection of crown jewels, ceremonial artifacts, and ancient thangka paintings not shown to regular visitors. Our guide's direct connection to the royal lineage provides unique historical perspectives and personal anecdotes about court life in the former kingdom.",
      },
    ],
  },
  {
    title: "Ladakh's Ancient Silk Road & Caravan Trails",
    description:
      "Trace the historic Silk Road routes through Ladakh, visiting ancient caravanserais, trading posts, and remote villages that once thrived on this legendary trade network connecting India, Tibet, and Central Asia.",
    images: [
      "/images/tours/leh/silk-road.jpg",
      "/images/tours/leh/caravanserai.jpg",
    ],
    duration: "6 hours",
    price: "$110",
    rating: 4.8,
    tags: ["Silk Road", "History", "Cultural"],

    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: findGuideBySpecialty("leh", "historical").name,
    tourCategoryId: "historical",
    faqs: [
      {
        question: "What historical sites will we see?",
        answer:
          "The tour includes visits to ancient caravanserais (rest stops for traders), ruined forts, and remote villages that were once bustling trade hubs. We explore the remains of the Leh-Lhasa trade route, including the famous Chang La Pass and Nubra Valley's caravan trails. Our guide shares fascinating stories about the caravans that crossed these harsh terrains carrying silk, spices, and precious goods for centuries.",
      },
      {
        question: "Is this tour suitable for children?",
        answer:
          "Yes, this tour is family-friendly with engaging storytelling and interactive elements to keep children interested in the rich history of Ladakh's Silk Road heritage. The pace is relaxed with plenty of opportunities for exploration and learning.",
      },
    ],
  },
];

export default lehTours;
