import { TourCategory } from "@/lib/interfaces/services/tours";
import {
  FaGem,
  FaHeart,
  FaLandmark,
  FaLeaf,
  FaMountain,
  FaPalette,
  FaPray,
  FaSpa,
  FaUtensils,
} from "react-icons/fa";

export const tourCategories: TourCategory[] = [
  {
    id: "adventure",
    title: "Adventure Tours",
    description:
      "Experience adrenaline-pumping activities like hiking, rafting, zip-lining, or safari drives in some of the world's most breathtaking and rugged terrains. Perfect for thrill-seekers and explorers looking to push their limits.",
    icon: FaMountain,
  },
  {
    id: "cultural",
    title: "Cultural Tours",
    description:
      "Immerse yourself in the heart of local cultures through visits to heritage sites, artisan villages, traditional performances, and everyday rituals that reveal the soul of a destination.",
    icon: FaLandmark,
  },
  {
    id: "culinary",
    title: "Culinary Tours",
    description:
      "Embark on a sensory journey through local markets, street food scenes, and high-end dining spots, guided by chefs and food experts who reveal the flavors and stories behind each dish.",
    icon: FaUtensils,
  },
  {
    id: "art-and-music",
    title: "Art & Music Tours",
    description:
      "Celebrate creativity by exploring art galleries, music festivals, street performances, and local crafts. Engage with artists and musicians to gain a deeper understanding of the region’s creative pulse.",
    icon: FaPalette,
  },
  {
    id: "luxury",
    title: "Luxury Experiences",
    description:
      "Enjoy refined elegance through curated itineraries featuring five-star accommodations, private tours, fine dining, and VIP access to exclusive events and experiences.",
    icon: FaGem,
  },
  {
    id: "romantic",
    title: "Romantic Getaways",
    description:
      "Perfect for couples, these experiences offer intimate settings, candlelit dinners, sunset cruises, and scenic escapes designed to foster connection and lifelong memories.",
    icon: FaHeart,
  },
  {
    id: "nature",
    title: "Nature & Wildlife",
    description:
      "Reconnect with nature through guided forest walks, wildlife safaris, eco-lodges, and national park excursions, all led by conservationists and wildlife experts.",
    icon: FaLeaf,
  },
  {
    id: "wellness",
    title: "Wellness Retreats",
    description:
      "Focus on self-care with immersive retreats that combine yoga, meditation, nutrition, and spa therapies in tranquil natural environments that promote healing and inner balance.",
    icon: FaSpa,
  },
  {
    id: "spiritual",
    title: "Spiritual Journeys",
    description:
      "Follow paths of reflection and enlightenment with visits to sacred temples, pilgrimage routes, monasteries, and guided mindfulness practices rooted in ancient wisdom.",
    icon: FaPray,
  },
  {
    id: "city-tours",
    title: "City Tours",
    description:
      "Explore the pulse of iconic cities through expertly led tours of landmarks, local neighborhoods, markets, and must-see attractions that showcase urban life and culture.",
    icon: FaLandmark,
  },
  {
    id: "historical",
    title: "Historical Tours",
    description:
      "Step back in time as you visit ancient ruins, battlefields, castles, and museums with expert historians bringing past civilizations, empires, and events to life.",
    icon: FaLandmark,
  },
  {
    id: "nightlife",
    title: "Nightlife Experiences",
    description:
      "Discover each destination after dark with curated nightlife adventures including rooftop bars, underground clubs, live performances, and local evening hotspots.",
    icon: FaHeart,
  },
];
