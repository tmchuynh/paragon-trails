import { TourCategory } from "@/lib/interfaces/services/tours";

export const tourCategories: TourCategory[] = [
  {
    id: "adventure",
    name: "Adventure Tours",
    description:
      "Thrilling experiences for active travelers seeking excitement and challenges.",
  },
  {
    id: "art-and-music",
    name: "Art & Music Tours",
    description:
      "Cultural journeys exploring local artistic traditions, galleries, and performances.",
  },
  {
    id: "culinary",
    name: "Culinary Experiences",
    description:
      "Food-focused adventures featuring local cuisine, cooking classes, and market visits.",
  },
  {
    id: "cultural",
    name: "Cultural Heritage",
    description:
      "Immersive experiences highlighting local traditions, history, and authentic lifestyles.",
  },
  {
    id: "luxury",
    name: "Luxury Experiences",
    description:
      "Premium tours featuring exclusive access, high-end accommodations, and VIP services.",
  },
  {
    id: "nature",
    name: "Nature & Wildlife",
    description:
      "Outdoor excursions focused on natural beauty, biodiversity, and conservation.",
  },
  {
    id: "romantic",
    name: "Romantic Getaways",
    description:
      "Specially curated experiences for couples in picturesque settings.",
  },
  {
    id: "wellness",
    name: "Wellness Retreats",
    description:
      "Rejuvenating journeys centered on mindfulness, relaxation, and holistic health.",
  },
];

// Map for quick lookup
export const tourCategoryMap = tourCategories.reduce((map, category) => {
  map[category.id] = category;
  return map;
}, {} as Record<string, TourCategory>);
