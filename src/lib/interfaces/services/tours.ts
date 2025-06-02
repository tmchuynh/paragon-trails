import { Details, Flags, MeetingPoint } from "@/lib/types/types";
import { IconType } from "react-icons/lib";

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  icon: React.ComponentType;
}

export interface BaseTour {
  city?: string;
  country?: string;
  state?: string;
  region?: string;
  icon?: IconType;
  images: string[];
  duration: string;
  price: string;
  availableDates?: string[];
  highlights?: string[];
  inclusions?: string[];
  exclusions?: string[];
  itinerary?: string[];
  meetingPoint?: MeetingPoint;
  cancellationPolicy?: string;
  tourCategoryId: TourCategory["id"];
}

export type Tour = BaseTour & Flags & Details;
