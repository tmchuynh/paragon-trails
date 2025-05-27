export interface TopAttraction {
  title: string;
  description: string;
}

export interface CityAttractions {
  city: string;
  state?: string;
  region: string;
  country: string;
  attractions: TopAttraction[];
}

export interface Attraction extends TopAttraction {
  imageUrl: string;
  location: string;
  openingHours?: string;
  priceRange?: string;
  rating: number;
  website?: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  tags?: string[];
  accessibilityFeatures?: string[];
  isPopular?: boolean;
  isFamilyFriendly?: boolean;
  isPetFriendly?: boolean;
  isWheelchairAccessible?: boolean;
  isCultural?: boolean;
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
