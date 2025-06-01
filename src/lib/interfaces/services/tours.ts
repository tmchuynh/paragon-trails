import { FAQs } from "@/lib/types/types";
import { IconType } from "react-icons/lib";

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  icon: React.ComponentType;
}

export interface Tour {
  title: string;
  icon?: IconType;
  description: string;
  images: string[];
  duration: string;
  price: string;
  rating: number;
  tags?: string[];
  availableDates?: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: string[];
  meetingPoint?: string;
  cancellationPolicy?: string;
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
