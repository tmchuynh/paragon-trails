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

export interface HomestayLocation {
  city: string;
  country: string;
  description: string;
  hosts: Host[];
}
