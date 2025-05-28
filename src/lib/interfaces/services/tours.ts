import { FAQs } from "@/lib/types/types";
import { TourGuide } from "../people/staff";

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
  isFamilyFriendly?: boolean;
  isHistorical?: boolean;
  isRomantic?: boolean;
  isOffTheBeatenPath?: boolean;
  isLocalExperience?: boolean;
  tourGuide: TourGuide["name"];
  tourCategoryId: TourCategory["id"];
  faqs?: FAQs[];
}
