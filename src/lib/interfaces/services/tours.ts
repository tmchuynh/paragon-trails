import { FAQs } from "@/lib/types/types";

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface Tour {
  title: string;
  description: string;
  images: string[];
  duration: string;
  price: string;
  rating: number;
  tags?: string[];
  isHistorical?: boolean;
  isRomantic?: boolean;
  isAdventure?: boolean;
  isCultural?: boolean;
  isCulinary?: boolean;
  isSpiritual?: boolean;
  isNightlife?: boolean;
  isWellness?: boolean;
  isLuxury?: boolean;
  isArtOrMusic?: boolean;
  isOffTheBeatenPath?: boolean;
  isLocalExperience?: boolean;
  tourCategoryId: TourCategory["id"];
  faqs?: FAQs[];
}
