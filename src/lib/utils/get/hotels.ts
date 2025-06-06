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
      }
      console.error(`No hotels found for city: ${cityFile}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading city hotels: ${error}`);
    return [];
  } finally {
    return hotels;
  }
}

export async function getHotelRooms(city: string, hotel: string) {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const formattedHotel = formatKebabToCamelCase(hotel);
    const roomId = `${formattedHotel}Rooms`;

    const cityModule = await import(
      `@/lib/constants/destinations/hotels/${formattedCity}/${formattedHotel}`
    );
    if (cityModule[roomId]) {
      return cityModule[roomId] as RoomOption[];
    }
    console.error(`No rooms found for hotel: ${hotel} in city: ${city}`);
    return [];
  } catch (error) {
    console.error(
      `Error loading rooms for hotel ${hotel} in city ${city}: ${error}`,
    );
    return [];
  }
}
export async function getCityHotels(city: string): Promise<Hotel[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const hotelId = `${formattedCity}Hotels`;
    const cityModule = await import(
      `@/lib/constants/destinations/hotels/${formattedCity}/hotels`
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
