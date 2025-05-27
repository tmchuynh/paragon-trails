export interface CityAttractions {
  subtitle?: string;
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
  priceRange?: string;
  rating: number;
  tags?: string[];
  accessibilityFeatures?: string[];
  isPopular?: boolean;
  isFamilyFriendly?: boolean;
  isFree?: boolean;
  isPetFriendly?: boolean;
  isWheelchairAccessible?: boolean;
  isHistorical?: boolean;
  isAdventure?: boolean;
  isRomantic?: boolean;
  isLuxury?: boolean;
  isOffTheBeatenPath?: boolean;
  isLocalExperience?: boolean;
  isNightlife?: boolean;
  isShopping?: boolean;
  isDining?: boolean;
  isOutdoor?: boolean;
  isIndoor?: boolean;
}
