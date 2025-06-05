export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type Menu = {
  title: string;
  href: string;
  description: string;
  imageUrl?: string;
};

export type FAQs = {
  question: string;
  answer: string;
};

export type FAQSection = {
  title: string;
  faqs: FAQs[];
};

export type Metrics = {
  label: string;
  value: string;
  description: string;
};

export type Staff = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export type StaffTeams = {
  category: string;
  subtitle?: string;
  description?: string;
  members: Staff[];
};

export type MeetingPoint = {
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  instructions: string; // additional instructions for the meeting point
  contactNumber?: string; // optional contact number for the meeting point
  contactEmail?: string; // optional contact email for the meeting point
};

export type Flags = {
  isHistorical?: boolean;
  isRomantic?: boolean;
  isAdventure?: boolean;
  isCulinary?: boolean;
  isSpiritual?: boolean;
  isNightlife?: boolean;
  isLuxury?: boolean;
  isArtOrMusic?: boolean;
  isFree?: boolean;
  isPopular?: boolean;
  isPetFriendly?: boolean;
  isWheelchairAccessible?: boolean;
};

export type Details = {
  title: string;
  description: string;
  rating: number;
};

export type Location = {
  city: string;
  country: string;
  region?: string;
  state?: string;
  isPopular?: boolean;
  subtitle?: string;
  quote?: string;
  timezone?: string;
  timezoneAbbreviation?: string;
  description?: string;
  culturalHighlights?: string[];
};

export type AttractionTags =
  | "Landmark"
  | "Historical Site"
  | "Museum"
  | "Gallery"
  | "Park"
  | "Garden"
  | "Beach"
  | "Market"
  | "Local Market"
  | "Cultural Center"
  | "Religious Site"
  | "Monument"
  | "Scenic Spot"
  | "Observation Deck"
  | "City View"
  | "Nature Reserve"
  | "Wildlife"
  | "Hiking Trail"
  | "Walking Tour"
  | "Boat Tour"
  | "Food Tour"
  | "Wine Tasting"
  | "Brewery"
  | "Street Food"
  | "Shopping"
  | "Nightlife"
  | "Bar"
  | "Live Music"
  | "Festival"
  | "Performance"
  | "Adventure"
  | "Extreme Sports"
  | "Wellness"
  | "Spa"
  | "Luxury"
  | "Romantic"
  | "Family Friendly"
  | "Kid Friendly"
  | "Pet Friendly"
  | "Eco-Friendly"
  | "Accessible"
  | "Free Entry"
  | "UNESCO Site"
  | "Photography Spot"
  | "Instagrammable"
  | "Hidden Gem"
  | "Iconic"
  | "LGBTQ+ Friendly";
