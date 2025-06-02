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
  isCultural?: boolean;
  isCulinary?: boolean;
  isSpiritual?: boolean;
  isNightlife?: boolean;
  isWellness?: boolean;
  isLuxury?: boolean;
  isArtOrMusic?: boolean;
  isOffTheBeatenPath?: boolean;
  isLocalExperience?: boolean;
  isFree?: boolean;
  isPopular?: boolean;
  isFamilyFriendly?: boolean;
  isPetFriendly?: boolean;
  isWheelchairAccessible?: boolean;
  isOutdoor?: boolean;
  isIndoor?: boolean;
};

export type Details = {
  title: string;
  description: string;
  tags?: string[];
  rating: number;
  faqs?: FAQs[];
};
