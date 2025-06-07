import { Homestay } from "@/lib/interfaces/people/homestay";
import { Host } from "@/lib/interfaces/people/homestay";
import { formatKebabToCamelCase, formatTimeTo24HourClock } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";

export async function getHosts(): Promise<Host[]> {
  try {
    const allHomestays: Host[] = [];

    for (const cityFile of cityFiles) {
      try {
        const formattedCity = formatKebabToCamelCase(cityFile);
        const homestayId = `${formattedCity}Homestays`;
        const homestayModule = await import(
          `@/lib/constants/destinations/homestay/${cityFile}`
        );

        if (homestayModule[homestayId]) {
          allHomestays.push(...homestayModule[homestayId]);
        } else {
          console.error(`No homestays found for city: ${cityFile}`);
        }
      } catch (error) {
        console.error(`Error loading homestays for city ${cityFile}: ${error}`);
      }
    }

    return allHomestays;
  } catch (error) {
    console.error(`Error loading homestays: ${error}`);
    return [];
  }
}

export async function getHomestaysByCity(city: string): Promise<any> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const homestayId = `${formattedCity}Homestays`;
    const homestayModule = await import(
      `@/lib/constants/destinations/homestay/${city}`
    );
    if (homestayModule[homestayId]) {
      return homestayModule[homestayId];
    }
    console.error(`No homestays found for city: ${city}`);
    return [];
  } catch (error) {
    console.error(`Error loading homestays: ${error}`);
    return [];
  }
}

export async function getHostsByMaxGuests(maxGuests: number): Promise<Host[]> {
  try {
    const homestays = await getHosts();
    const hosts = homestays.flatMap((homestay: Host) => homestay);
    const filteredHosts = hosts.filter(
      (host: Host) => host.maxGuests >= maxGuests,
    );
    return filteredHosts;
  } catch (error) {
    console.error(`Error loading hosts by max guests: ${error}`);
    return [];
  }
}

export async function getHostsByGuestPolicy(
  guestPolicy: string,
): Promise<Host[]> {
  try {
    const homestays = await getHosts();
    const hosts = homestays.flatMap((homestay: Host) => homestay);
    const filteredHosts = hosts.filter((host: Host) =>
      host.guestPolicy.includes(guestPolicy),
    );
    return filteredHosts;
  } catch (error) {
    console.error(`Error loading hosts by guest policy: ${error}`);
    return [];
  }
}

export async function getHostsByLanguage(language: string): Promise<Host[]> {
  try {
    const homestays = await getHosts();
    const hosts = homestays.flatMap((homestay: Host) => homestay);
    const filteredHosts = hosts.filter((host: Host) =>
      host.languages.includes(language),
    );
    return filteredHosts;
  } catch (error) {
    console.error(`Error loading hosts by language: ${error}`);
    return [];
  }
}

export async function getHostsByCurfew(curfew: string): Promise<Host[]> {
  const formattedCurfew = formatTimeTo24HourClock(curfew);
  try {
    const homestays = await getHosts();
    const hosts = homestays.flatMap((homestay: Host) => homestay);
    const filteredHosts = hosts.filter(
      (host: Host) => host.curfew === formattedCurfew,
    );
    return filteredHosts;
  } catch (error) {
    console.error(`Error loading hosts by curfew: ${error}`);
    return [];
  }
}
