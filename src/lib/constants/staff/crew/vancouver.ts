import { CrewMember } from "@/lib/interfaces/people/staff";

export const vancouvercanadaalaskaCrew: CrewMember[] = [
  {
    id: "crew-vancouver-1",
    name: "David Foster",
    role: "Deckhand",
    experienceYears: 16,
    certifications: ["Fire Safety"],
    languagesSpoken: ["Arabic", "Turkish"],
    isAvailable: true,
    contactEmail: "david.foster@paragontrails.com",
    contactPhone: "+1-915-728-3213",
  },
  {
    id: "crew-vancouver-2",
    name: "Joel Stewart",
    role: "Purser",
    experienceYears: 21,
    certifications: ["Hospitality Training"],
    languagesSpoken: ["Spanish", "Korean"],
    isAvailable: false,
    contactEmail: "joel.stewart@paragontrails.com",
    contactPhone: "+1-019-171-2272",
  },
  {
    id: "crew-vancouver-3",
    name: "Ellie Ellis",
    role: "Deckhand",
    experienceYears: 2,
    certifications: ["Engineering License", "Hospitality Training"],
    languagesSpoken: ["Swedish", "Polish", "Korean"],
    isAvailable: false,
    contactEmail: "ellie.ellis@paragontrails.com",
    contactPhone: "+1-529-273-1183",
  }
];
