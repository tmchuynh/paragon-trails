import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";
import { RoomOption } from "@/lib/interfaces/services/rentals";
import { Hotel } from "@/lib/interfaces/services/rentals";

export async function getAllHotels(): Promise<Hotel[]> {
  const hotels: Hotel[] = [];
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);

      const hotelId = `${formattedCity}Hotels`;
      const cityModule = await import(
        `@/lib/constants/destinations/hotels/${cityFile}/hotels`
      );

      if (cityModule[hotelId]) {
        hotels.push(...(cityModule[hotelId] as Hotel[]));
      } else {
        console.error(`No hotels found for city: ${cityFile}`);
        // Do not return here; continue to next city
      }
    }
    return hotels;
  } catch (error) {
    console.error(`Error loading city hotels: ${error}`);
    return [];
  }
}

export async function getHotelRooms(city: string, hotel: string | Hotel) {
  try {
    let roomFile: string | undefined;
    if (typeof hotel === "object" && hotel.roomFile) {
      roomFile = hotel.roomFile;
    } else if (typeof hotel === "string") {
      // fallback: try to find hotel in city hotels and get roomFile
      const hotels = await getCityHotels(city);
      const found = hotels.find((h) => h.id === hotel);
      roomFile = found?.roomFile;
    }
    if (!roomFile) {
      throw new Error("No roomFile specified for hotel");
    }
    const cityModule = await import(
      `@/lib/constants/destinations/hotels/${city}/${roomFile}`
    );
    // Find the exported variable that ends with 'Rooms'
    const roomExport = Object.values(cityModule).find((v: any) =>
      Array.isArray(v)
    );
    if (roomExport) {
      return roomExport as RoomOption[];
    }
    console.error(`No rooms found for hotel in city: ${city}`);
    return [];
  } catch (error) {
    console.error(
      `Error loading rooms for hotel ${
        typeof hotel === "string" ? hotel : hotel.id
      } in city ${city}: ${error}`
    );
    return [];
  }
}
export async function getCityHotels(city: string): Promise<Hotel[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const hotelId = `${formattedCity}Hotels`;
    const cityModule = await import(
      `@/lib/constants/destinations/hotels/${city}/hotels`
    );
    if (cityModule[hotelId]) {
      return cityModule[hotelId] as Hotel[];
    } else {
      console.error(`No hotels found for city: ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading hotels for ${city}: ${error}`);
    return [];
  }
}
