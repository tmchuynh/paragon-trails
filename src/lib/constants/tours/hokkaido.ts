import { Tour } from "@/lib/interfaces/services/tours";

export const hokkaidoTours: Tour[] = [
  {
    title: "Hokkaido Powder Skiing & Onsen Experience",
    description:
      "Experience Japan's legendary powder snow with guided skiing at premier resorts including Niseko and Rusutsu, followed by relaxing evenings in traditional hot spring onsen baths and authentic izakaya dining.",
    images: [
      "/images/tours/hokkaido/powder-skiing.jpg",
      "/images/tours/hokkaido/onsen-bath.jpg",
    ],
    duration: "7 days",
    price: "$2,950",
    rating: 4.9,
    tags: ["Skiing", "Winter", "Onsen"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Takeshi Yamamoto",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "What skill level of skiing is required?",
        answer:
          "This tour accommodates intermediate to advanced skiers who are comfortable on blue and black runs. Our guides will separate the group based on abilities to ensure everyone has an optimal experience. Beginners can be accommodated with private lessons (additional fee) but would not be able to participate in the off-piste powder skiing portions of the tour. Niseko's international ski school is excellent for improving skills before joining the main group activities.",
      },
    ],
  },
  {
    title: "Hokkaido Culinary Journey & Farm Experience",
    description:
      "Discover why Hokkaido is Japan's gourmet paradise with visits to dairy farms, wasabi fields, seafood markets, and whisky distilleries. Learn traditional cooking techniques and enjoy exclusive dining experiences featuring the island's renowned seafood and produce.",
    images: [
      "/images/tours/hokkaido/seafood-market.jpg",
      "/images/tours/hokkaido/farm-visit.jpg",
    ],
    duration: "5 days",
    price: "$1,895",
    rating: 4.8,
    tags: ["Food", "Agriculture", "Cooking"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Chef Yuki Tanaka",
    tourCategoryId: "culinary",
    faqs: [
      {
        question: "What makes Hokkaido cuisine unique in Japan?",
        answer:
          "Hokkaido's cuisine is distinctly different from the rest of Japan due to its northern climate, vast farmland, and surrounding seas. The region produces 70% of Japan's dairy (rare in traditional Japanese cuisine), exceptional seafood (especially crab, sea urchin, and salmon), and unique crops like corn and potatoes. You'll experience Genghis Khan (grilled lamb), soup curry, fresh dairy desserts, and the freshest sushi—all specialties rarely found with the same quality elsewhere in Japan. Hokkaido's brewing and distilling traditions also produce distinctive sake, beer, and internationally acclaimed whisky.",
      },
    ],
  },
  {
    title: "Wildlife & Nature Photography in Eastern Hokkaido",
    description:
      "Photograph Hokkaido's spectacular wildlife including red-crowned cranes, Steller's sea eagles, and Blakiston's fish owls with guidance from a professional wildlife photographer in pristine winter landscapes and volcanic national parks.",
    images: [
      "/images/tours/hokkaido/red-crowned-cranes.jpg",
      "/images/tours/hokkaido/sea-eagles.jpg",
    ],
    duration: "6 days",
    price: "$2,750",
    rating: 4.9,
    tags: ["Wildlife", "Photography", "Winter"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Hiroshi Tanaka, Wildlife Photographer",
    tourCategoryId: "photography",
    faqs: [
      {
        question: "What photography equipment should I bring?",
        answer:
          "For wildlife photography, we recommend a DSLR or mirrorless camera with telephoto lenses (minimum 300mm, ideally 500-600mm for birds). A sturdy tripod is essential, as is a backup camera body if possible. For landscape work, wide-angle lenses (16-35mm range) and neutral density filters are useful. Winter conditions require extra batteries (cold depletes them quickly), weather protection for gear, and appropriate gloves that allow camera operation. We provide detailed equipment lists upon booking and offer limited lens rental with advance reservation.",
      },
    ],
  },
  {
    title: "Volcano Hiking & Hot Springs Tour",
    description:
      "Explore Hokkaido's dramatic volcanic landscapes with guided hikes through Shikotsu-Toya National Park, ascending active volcanoes, walking through ancient calderas, and relaxing in therapeutic hot springs fed by geothermal activity.",
    images: [
      "/images/tours/hokkaido/volcano-hiking.jpg",
      "/images/tours/hokkaido/crater-lake.jpg",
    ],
    duration: "4 days",
    price: "$1,250",
    rating: 4.7,
    tags: ["Hiking", "Volcanoes", "Hot Springs"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Akira Watanabe",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "How difficult are the hikes?",
        answer:
          "The tour includes moderate hiking with daily treks ranging from 5-10km (3-6 miles) with elevation gains of 300-600m (980-1970ft). Trails are generally well-maintained but sometimes steep or rocky. A reasonable level of fitness is required, but we maintain a comfortable pace with frequent stops for photography and geological explanation. The most challenging hike is Mt. Tarumae (approximately 5 hours round-trip), but alternative activities can be arranged for those who prefer a less strenuous option.",
      },
    ],
  },
  {
    title: "Hokkaido Winter Festivals & Ice Sculpture Tour",
    description:
      "Experience Hokkaido's world-famous winter festivals including the Sapporo Snow Festival with its massive ice sculptures, the ethereal Otaru Snow Light Path Festival, and participate in a hands-on ice sculpting workshop with master artists.",
    images: [
      "/images/tours/hokkaido/sapporo-snow-festival.jpg",
      "/images/tours/hokkaido/ice-sculpture-workshop.jpg",
    ],
    duration: "5 days",
    price: "$1,950",
    rating: 4.8,
    tags: ["Winter Festivals", "Cultural", "Art"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Yumiko Sato",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "When exactly do these festivals take place?",
        answer:
          "The main festivals occur in early to mid-February each year, with the Sapporo Snow Festival typically running for one week in the first half of February. The exact dates vary slightly each year and are usually announced in autumn. Our tour is carefully timed to include the peak days of the major festivals while avoiding the most crowded weekends. This tour only operates during the festival period in February, and we recommend booking at least 6 months in advance due to high demand for accommodations during this popular season.",
      },
    ],
  },
  {
    title: "Ainu Indigenous Culture Immersion",
    description:
      "Learn about Hokkaido's indigenous Ainu people through intimate cultural experiences, museum visits, craft workshops with master artisans, traditional performances, and forest walks highlighting traditional ecological knowledge and spiritual beliefs.",
    images: [
      "/images/tours/hokkaido/ainu-village.jpg",
      "/images/tours/hokkaido/ainu-crafts.jpg",
    ],
    duration: "3 days",
    price: "$1,150",
    rating: 4.6,
    tags: ["Indigenous", "Cultural", "Crafts"],
    isFamilyFriendly: true,
    isHistorical: true,
    isRomantic: false,
    isOffTheBeatenPath: true,
    isLocalExperience: true,
    tourGuide: "Shizuka Kayano",
    tourCategoryId: "cultural",
    faqs: [
      {
        question: "Who are the Ainu people?",
        answer:
          "The Ainu are the indigenous people of Hokkaido, northern Japan, and parts of Russia with a distinct language, religion, and cultural traditions different from mainstream Japanese culture. They traditionally lived by hunting, fishing, and gathering, with deep spiritual connections to nature. After centuries of discrimination and forced assimilation policies, the Japanese government only officially recognized the Ainu as indigenous people in 2019. Today, there is a revitalization of Ainu language, arts, and cultural practices, though there are fewer than 20,000 people who identify as Ainu. This tour provides respectful insight into their heritage while supporting contemporary Ainu cultural practitioners.",
      },
    ],
  },
  {
    title: "Hokkaido Lavender Fields & Flower Farm Experience",
    description:
      "Visit Hokkaido during its spectacular summer bloom with exclusive access to Furano's lavender fields, flower farms, and renowned gardens. Join a photography workshop during 'magic hour' and create your own lavender products in a hands-on workshop.",
    images: [
      "/images/tours/hokkaido/lavender-fields.jpg",
      "/images/tours/hokkaido/flower-farms.jpg",
    ],
    duration: "4 days",
    price: "$1,450",
    rating: 4.9,
    tags: ["Flowers", "Photography", "Summer"],
    isFamilyFriendly: true,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: false,
    isLocalExperience: true,
    tourGuide: "Naomi Takahashi",
    tourCategoryId: "off-the-beaten-path",
    faqs: [
      {
        question: "When is the best time to see the lavender fields?",
        answer:
          "The lavender in Furano typically blooms from late June to early August, with peak bloom usually occurring in mid-July. This can vary slightly depending on weather conditions each year. Our tours are scheduled during the optimal viewing periods, and we monitor bloom conditions closely before your visit. The tour also includes visits to flower farms with different blooming schedules, ensuring spectacular floral displays throughout the summer season. Each month offers different flowers: lupins and tulips in June, lavender in July, and sunflowers and dahlias in August.",
      },
    ],
  },
  {
    title: "Hokkaido Coastal Wilderness Kayaking",
    description:
      "Paddle along Hokkaido's dramatic Shiretoko Peninsula, a UNESCO World Heritage site, observing brown bears, whales, and sea birds from stable sea kayaks with expert guides. Camp on secluded beaches and soak in natural hot springs accessible only by water.",
    images: [
      "/images/tours/hokkaido/sea-kayaking.jpg",
      "/images/tours/hokkaido/coastal-camping.jpg",
    ],
    duration: "5 days",
    price: "$1,850",
    rating: 4.7,
    tags: ["Kayaking", "Wildlife", "Camping"],
    isFamilyFriendly: false,
    isHistorical: false,
    isRomantic: true,
    isOffTheBeatenPath: true,
    isLocalExperience: false,
    tourGuide: "Kentaro Yoshida",
    tourCategoryId: "adventure",
    faqs: [
      {
        question: "Do I need previous kayaking experience?",
        answer:
          "No prior kayaking experience is necessary, though a moderate fitness level and comfort around water are required. We use stable, two-person sea kayaks and provide comprehensive instruction before departure. The paddling distances are manageable (typically 3-5 hours per day) with plenty of breaks. Our route stays relatively close to shore in protected waters, though sea conditions can change. For those with limited outdoor experience, we offer an optional pre-trip training day for additional comfort and skill building.",
      },
    ],
  },
];

export default hokkaidoTours;
