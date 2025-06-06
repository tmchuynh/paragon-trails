import { formatKebabToCamelCase } from "../format";
import { cityFiles } from "@/lib/constants/info/city";
import { CrewMember } from "@/lib/interfaces/people/staff";

export async function getCrewMembers(): Promise<any> {
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const crewId = `${formattedCity}Crew`;
      const crewModule = await import(
        `@/lib/constants/staff/crew/${formattedCity}`
      );
      if (crewModule[crewId]) {
        return crewModule[crewId];
      } else {
        console.error(`No crew members found for city: ${cityFile}`);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error loading crew members: ${error}`);
    return [];
  }
}

export async function getCrewMember(
  crewId: string,
): Promise<CrewMember | null> {
  try {
    const crewMembers = await getCrewMembers();
    const crewMember = crewMembers.find((c: { id: string }) => c.id === crewId);
    if (crewMember) {
      return crewMember;
    } else {
      console.error(`Crew member with ID ${crewId} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading crew member: ${error}`);
    return null;
  }
}

export async function getCrewMembersByCity(
  city: string,
): Promise<CrewMember[]> {
  try {
    const crewMembers = await getCrewMembers();
    const formattedCity = formatKebabToCamelCase(city);
    const crewInCity = crewMembers.filter(
      (crew: { location: string }) =>
        formatKebabToCamelCase(crew.location) === formattedCity,
    );
    if (crewInCity.length > 0) {
      return crewInCity;
    } else {
      console.error(`No crew members found in ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading crew members for ${city}: ${error}`);
    return [];
  }
}

export async function getCrewMembersByRole(
  role: string,
): Promise<CrewMember[]> {
  try {
    const crewMembers = await getCrewMembers();
    const crewByRole = crewMembers.filter(
      (crew: { role: string }) =>
        crew.role.toLowerCase() === role.toLowerCase(),
    );
    if (crewByRole.length > 0) {
      return crewByRole;
    } else {
      console.error(`No crew members found with role: ${role}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading crew members by role: ${error}`);
    return [];
  }
}

export async function getCrewMemberInformation(name: string, city: string) {
  try {
    const crewMembers = await getCrewMembersByCity(city);
    const crewMember = crewMembers.find(
      (c: CrewMember) => c.name.toLowerCase() === name.toLowerCase(),
    );
    if (crewMember) {
      return crewMember;
    } else {
      console.error(`Crew member with name ${name} not found in ${city}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading crew member information: ${error}`);
    return null;
  }
}
