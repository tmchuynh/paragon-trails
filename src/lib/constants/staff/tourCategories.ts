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
      "Experience thrilling outdoor activities and explorations in stunning natural settings",
    icon: FaMountain,
  },
  {
    id: "cultural",
    title: "Cultural Tours",
    description:
      "Discover local traditions, heritage sites, and authentic cultural experiences",
    icon: FaLandmark,
  },
  {
    id: "culinary",
    title: "Culinary Tours",
    description:
      "Explore local cuisines, markets, and food traditions with expert gastronomic guides",
    icon: FaUtensils,
  },
  {
    id: "art-and-music",
    title: "Art & Music Tours",
    description:
      "Immerse yourself in local artistic expressions, galleries, and musical traditions",
    icon: FaPalette,
  },
  {
    id: "luxury",
    title: "Luxury Experiences",
    description:
      "Indulge in exclusive access, premium services, and extraordinary accommodations",
    icon: FaGem,
  },
  {
    id: "romantic",
    title: "Romantic Getaways",
    description:
      "Create unforgettable moments in beautiful settings perfect for couples",
    icon: FaHeart,
  },
  {
    id: "nature",
    title: "Nature & Wildlife",
    description:
      "Connect with natural environments and observe local wildlife with expert naturalists",
    icon: FaLeaf,
  },
  {
    id: "wellness",
    title: "Wellness Retreats",
    description:
      "Rejuvenate mind and body through spa treatments, yoga, meditation, and healthy cuisine",
    icon: FaSpa,
  },
  {
    id: "spiritual",
    title: "Spiritual Journeys",
    description:
      "Explore sacred sites, religious traditions, and mindful practices with knowledgeable guides",
    icon: FaPray,
  },
  {
    id: "city-tours",
    title: "City Tours",
    description:
      "Discover urban landscapes, architecture, and local life through guided city explorations",
    icon: FaLandmark,
  },
];

// Map for quick lookup
export const tourCategoryMap = tourCategories.reduce((map, category) => {
  map[category.id] = category;
  return map;
}, {} as Record<string, TourCategory>);
