export interface CityAttractions {
  subtitle?: string;
  isPopular?: boolean;
  quote?: string;
  city: string;
  state?: string;
  region: string;
  country: string;
}

export interface Attraction {
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  openingHours?: string;
  entryFee?: string;
  entryFeeCategory?: "free" | "budget" | "moderate" | "expensive" | "luxury";
  priceRange: "$" | "$$" | "$$$" | "$$$$" | "free";
  priceCategory: "free" | "budget" | "moderate" | "expensive" | "luxury";
  timeOfDay: "all day" | "daytime" | "evening" | "night";
  rating: number;
  tags?: string[];
  accessibilityFeatures?: string[];
  isPopular?: boolean;
  isFamilyFriendly?: boolean;
  isFree: boolean;
  isPetFriendly?: boolean;
  isWheelchairAccessible?: boolean;
  isHistorical?: boolean;
  isCultural?: boolean;
  isCulinary?: boolean;
  isSpiritual?: boolean;
  isWellness?: boolean;
  isArtOrMusic?: boolean;
  isAdventure?: boolean;
  isRomantic?: boolean;
  isLuxury?: boolean;
  isOffTheBeatenPath?: boolean;
  isLocalExperience?: boolean;
  isNightlife?: boolean;
  isOutdoor?: boolean;
  isIndoor?: boolean;
}
