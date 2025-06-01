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
  title: string; // displayed in the card and in the view details page
  icon?: IconType; // displayed in the card
  description: string; // displayed in the card and in the view details page
  images: string[]; // displayed in the card and in the view details page
  duration: string; // displayed in the card and in the view details page
  price: string; // displayed in the card and in the view details page
  rating: number; // displayed in the card and in the view details page
  tags?: string[]; // displayed in the view details page
  availableDates?: string[]; // displayed in the card and in the view details page
  highlights?: string[]; // displayed in the view details page
  inclusions?: string[]; // displayed in the card and in the view details page
  exclusions?: string[]; // displayed in the card and in the view details page
  itinerary?: string[]; // displayed in the view details page
  meetingPoint?: MeetingPoint; // displayed in the view details page
  cancellationPolicy?: string; // displayed in the view details page
  isPopular?: boolean; // to be displayed in the card as a badge and on booking page

  // displayed in view details page
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

  tourCategoryId: TourCategory["id"]; // displayed as a badge
  faqs?: FAQs[]; // displayed in view details page
}

type MeetingPoint = {
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  instructions?: string; // additional instructions for the meeting point
  contactNumber?: string; // optional contact number for the meeting point
  contactEmail?: string; // optional contact email for the meeting point
};