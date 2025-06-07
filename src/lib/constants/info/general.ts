import { FiUsers, FiMap, FiHeart } from "react-icons/fi";
import {
  RiHotelLine,
  RiCommunityLine,
  RiRecycleLine,
  RiPlaneLine,
  RiEarthLine,
  RiKnifeLine,
} from "react-icons/ri";
import {
  GiElephant,
  GiNetworkBars,
  GiOpenBook,
  GiTribalGear,
} from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { MdOutlineEmojiNature } from "react-icons/md";

export const currencyRates = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.79,
  JPY: 150.5,
  AUD: 1.52,
  CAD: 1.36,
  CNY: 7.22,
  CHF: 0.9, // Swiss Franc
  SEK: 10.65, // Swedish Krona
  NOK: 10.5, // Norwegian Krone
  DKK: 6.95, // Danish Krone
  NZD: 1.61, // New Zealand Dollar
  INR: 83.2, // Indian Rupee
  MXN: 17.1, // Mexican Peso
  BRL: 5.25, // Brazilian Real
  ZAR: 18.6, // South African Rand
  KRW: 1380, // South Korean Won
  SGD: 1.35, // Singapore Dollar
  HKD: 7.82, // Hong Kong Dollar
  AED: 3.67, // UAE Dirham
  THB: 36.1, // Thai Baht
  TRY: 32.5, // Turkish Lira
  IDR: 15800, // Indonesian Rupiah
  PHP: 57.9, // Philippine Peso
  PLN: 3.96, // Polish Złoty
  HUF: 364, // Hungarian Forint
  ARS: 250.0, // Argentine Peso (approximate)
  ANG: 1.8, // Netherlands Antillean Guilder
  BMD: 1, // Bermudian Dollar (pegged to USD)
  BSD: 1, // Bahamian Dollar (pegged to USD)
  COP: 4700, // Colombian Peso
  CLP: 820, // Chilean Peso
  KYD: 0.83, // Cayman Islands Dollar
  HNL: 24.5, // Honduran Lempira
  PEN: 3.8, // Peruvian Sol
  UYU: 40.2, // Uruguayan Peso
  VND: 24000, // Vietnamese Dong
  RUB: 78.5, // Russian Ruble
  DKK: 6.95, // Danish Krone (already included, repeated for clarity)
  CHF: 0.9, // Swiss Franc (already included)
  NOK: 10.5, // Norwegian Krone (already included)
  SEK: 10.65, // Swedish Krona (already included)
};



export const teamMembers = [
  {
    name: "David Márquez",
    title: "Head of Global Operations",
    description:
      "David ensures that every detail—from private aviation logistics to borderless sustainability protocols—is executed with precision. Fluent in five languages and trained in international diplomacy, he oversees all regional partnerships and high-tier client integrations.",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Anika Luthra",
    title: "Director of Cultural Affairs & Ethics",
    description:
      "Anika curates all cultural experiences and community partnerships to ensure that every itinerary is respectful, responsible, and accurate. Her background in heritage preservation and global human rights law grounds our operations in fairness and authenticity.",
    imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Julien Tsai",
    title: "Creative Director & Brand Strategist",
    description:
      "Julien leads our visual identity and guest experience touchpoints—from pre-trip materials to on-site storytelling. With a background in design thinking and editorial travel, he ensures that every journey is visually stunning and emotionally resonant.",
    imageUrl: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Maya Obasi",
    title: "Director of Sustainability Initiatives",
    description:
      "Maya's work connects Paragon Trails with cutting-edge ecological partners, carbon offset strategists, and eco-lodging developers. Her dual expertise in climate policy and luxury hospitality enables our bold vision for travel with impact.",
    imageUrl: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Lars Henriksen",
    title: "Chief Technology Architect",
    description:
      "Lars engineers our digital systems to ensure seamless coordination between client interfaces, regional logistics, and real-time data analytics. A seasoned engineer with a passion for clean code and user privacy.",
    imageUrl: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Sofia Ribeiro",
    title: "Head of Culinary Curation",
    description:
      "Sofia works with local chefs and culinary historians to create unforgettable tasting experiences. Her focus is on farm-to-table integrity, local sourcing, and storytelling through food.",
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Eli Navarro",
    title: "Senior Logistics Coordinator",
    description:
      "Eli is the brain behind our itinerary logistics—from chartered boats to off-grid accommodations. He ensures operations flow without friction, no matter the terrain or timezone.",
    imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Katerina Malkova",
    title: "Regional Advisor, Eastern Europe",
    description:
      "Katerina brings deep geopolitical knowledge and cultural expertise to our Eastern Europe operations. She fosters respectful local connections and handles sensitive regional coordination.",
    imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    name: "Omar Farouk",
    title: "Security & Risk Strategist",
    description:
      "Omar oversees traveler safety across all destinations. With a background in international security consulting, he manages pre-travel intelligence and in-country emergency planning.",
    imageUrl: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Chiara Bellini",
    title: "Guest Experience Designer",
    description:
      "Chiara crafts pre-departure kits, sensory experiences, and on-site welcome moments that reflect the destination’s soul. She brings hospitality artistry to every touchpoint.",
    imageUrl: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Marcus Lee",
    title: "Finance & Partnerships Lead",
    description:
      "Marcus manages all high-level financial strategy and B2B travel partnerships. Known for striking a balance between sustainability and profitability, he anchors our scalable growth.",
    imageUrl: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Yuki Nakamura",
    title: "Cultural Liaison, East Asia",
    description:
      "Yuki bridges linguistic and cultural gaps for our operations across Japan, Korea, and Taiwan. She ensures every journey reflects local nuance, etiquette, and seasonal rhythms.",
    imageUrl: "https://randomuser.me/api/portraits/women/63.jpg",
  },
];

export const partnerHighlights = [
  {
    title: "Eco-Luxury Accommodations",
    description:
      "Exclusive access to award-winning ecolodges, heritage estates, and carbon-neutral properties around the world.",
    icon: RiHotelLine,
  },
  {
    title: "Local Cultural Ambassadors",
    description:
      "Ethnographers, tribal leaders, historians, and master artisans who lead on-the-ground experiences with dignity and depth.",
    icon: FiUsers,
  },
  {
    title: "Sustainability Innovators",
    description:
      "Verified partners for carbon offsetting, biodiversity investment, sustainable transport, and plastic-free hospitality operations.",
    icon: RiRecycleLine,
  },
  {
    title: "Aviation & Mobility Experts",
    description:
      "Private aviation, hybrid fleet providers, and concierge logistics teams ensure seamless and sustainable movement.",
    icon: RiPlaneLine,
  },
  {
    title: "Global Philanthropic NGOs",
    description:
      "Longstanding relationships with grassroots organizations that benefit directly from our community tourism and annual donation fund.",
    icon: FiHeart,
  },
  {
    title: "Heritage Conservation Specialists",
    description:
      "Partnerships with preservation architects and UNESCO heritage consultants to safeguard cultural landmarks during visits.",
    icon: BsBank,
  },
  {
    title: "Culinary Heritage Collaborators",
    description:
      "Chefs, food anthropologists, and local farmers who deliver authentic, farm-to-table dining grounded in regional identity.",
    icon: RiKnifeLine,
  },
  {
    title: "Wildlife & Marine Biologists",
    description:
      "Onboard scientists and naturalists guide immersive encounters in protected ecosystems with ecological sensitivity.",
    icon: GiElephant,
  },
  {
    title: "Regenerative Travel Designers",
    description:
      "Innovators creating travel models that restore ecosystems and support circular economies within destination communities.",
    icon: MdOutlineEmojiNature,
  },
  {
    title: "Decolonial Travel Educators",
    description:
      "Experts leading workshops and dialogues on ethical travel, representation, and historical context.",
    icon: GiOpenBook,
  },
  {
    title: "Indigenous Knowledge Keepers",
    description:
      "Wisdom carriers who share their traditions through ceremony, land stewardship teachings, and ancestral narratives.",
    icon: GiTribalGear,
  },
  {
    title: "Geo-Cultural Cartographers",
    description:
      "Professionals who design custom maps layered with cultural memory, folklore, and indigenous land acknowledgments.",
    icon: FiMap,
  },
  {
    title: "Social Impact Economists",
    description:
      "Advisors ensuring that tourism revenues are reinvested into local education, infrastructure, and equity programs.",
    icon: GiNetworkBars,
  },
  {
    title: "Remote Experience Architects",
    description:
      "Technologists enabling virtual access and hybrid engagements in partnership with rural or remote communities.",
    icon: RiCommunityLine,
  },
  {
    title: "Disaster Resilience Consultants",
    description:
      "Ensuring travel continuity and preparedness in collaboration with local emergency response and sustainability teams.",
    icon: RiEarthLine,
  },
];
