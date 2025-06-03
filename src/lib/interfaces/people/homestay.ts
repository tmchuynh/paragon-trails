import { Location } from "@lib/types/types";

export interface Host {
  name: string;
  background: string;
  maxGuests: number;
  languages: string[];
  curfew: string;
  isPopular?: boolean;
  guestPolicy: string;
  houseRules: string[];
}

export interface HomestayHostLocations extends Location {
  hosts: Host[];
}

export interface homestayDestination extends Location {
  locations: homestayDestination[];
  stayType: string;
}

export interface HomestayLocation extends Location {
  stayType: string;
  culturalHighlights: string[];
}

export interface HomestayDestination {
  country: string;
  locations: HomestayLocation[];
}
