import { formatKebabToCamelCase } from "../format";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { cityFiles } from "@/lib/constants/info/city";
import { Driver } from "@/lib/interfaces/people/staff";

export async function getDrivers(): Promise<any> {
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);
      const driverId = `${formattedCity}Drivers`;
      const driversModule = await import(
        `@/lib/constants/staff/drivers/${cityFile}`
      );
      if (driversModule[driverId]) {
        return driversModule[driverId];
      } else {
        console.error(`No drivers found for city: ${cityFile}`);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error loading drivers: ${error}`);
    return [];
  }
}

export async function getDriver(driverId: string): Promise<Driver | null> {
  try {
    const drivers = await getDrivers();
    const driver = drivers.find((d: { id: string }) => d.id === driverId);
    if (driver) {
      return driver;
    } else {
      console.error(`Driver with ID ${driverId} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading driver: ${error}`);
    return null;
  }
}

export async function getDriversByCity(city: string): Promise<Driver[]> {
  try {
    const drivers = await getDrivers();
    const formattedCity = formatKebabToCamelCase(city);
    const driversInCity = drivers.filter(
      (driver: { location: string }) =>
        formatKebabToCamelCase(driver.location) === city
    );
    if (driversInCity.length > 0) {
      return driversInCity;
    } else {
      console.error(`No drivers found in ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading drivers for ${city}: ${error}`);
    return [];
  }
}

export async function getDriversByCountry(country: string): Promise<Driver[]> {
  try {
    const drivers = await getDrivers();
    const formattedCountry = formatKebabToCamelCase(country);
    const driversInCountry = drivers.filter(
      (driver: { country: string }) =>
        formatKebabToCamelCase(driver.country) === formattedCountry,
    );
    if (driversInCountry.length > 0) {
      return driversInCountry;
    } else {
      console.error(`No drivers found in ${country}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading drivers for ${country}: ${error}`);
    return [];
  }
}

export async function getDriverByLicense(
  license: string,
): Promise<Driver | null> {
  try {
    const drivers = await getDrivers();
    const driver = drivers.find((d: { licenseNumber: string }) =>
      d.licenseNumber.toLowerCase().includes(license.toLowerCase()),
    );
    if (driver) {
      return driver;
    } else {
      console.error(`Driver with license ${license} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading driver by license: ${error}`);
    return null;
  }
}

export async function getDriverByName(name: string): Promise<Driver | null> {
  try {
    const drivers = await getDrivers();
    const driver = drivers.find(
      (d: { name: string }) => d.name.toLowerCase() === name.toLowerCase(),
    );
    if (driver) {
      return driver;
    } else {
      console.error(`Driver with name ${name} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading driver by name: ${error}`);
    return null;
  }
}

export async function getDriversAvailable(
  city: string,
  day: string,
): Promise<Driver[]> {
  try {
    const drivers = await getDriversByCity(city);
    const availableDrivers = drivers.filter((driver: Driver) => {
      return driver.available.some((availability) => {
        return availability.day.toLowerCase() === day.toLowerCase();
      });
    });
    if (availableDrivers.length > 0) {
      return availableDrivers;
    } else {
      console.error(`No available drivers found in ${city} for ${day}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading available drivers for ${city} on ${day}: ${error}`,
    );
    return [];
  }
}

export async function getDriverBySpecialty(
  city: string,
  specialty: string,
): Promise<Driver | null> {
  try {
    const drivers = await getDriversByCity(city);
    const driver = drivers.find((d: Driver) =>
      d.specialties?.some(
        (searchString: string) =>
          searchString.toLowerCase() === specialty.toLowerCase(),
      ),
    );
    if (driver) {
      return driver;
    } else {
      console.error(`Driver with specialty ${specialty} not found in ${city}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading driver by specialty: ${error}`);
    return null;
  }
}

export async function getDriverByVechicleTypesCertified(
  city: string,
  vehicleType: string,
): Promise<Driver | null> {
  try {
    const drivers = await getDriversByCity(city);
    const driver = drivers.find((d: Driver) =>
      d.vehicleTypesCertified?.some(
        (type: string) => type.toLowerCase() === vehicleType.toLowerCase(),
      ),
    );
    if (driver) {
      return driver;
    } else {
      console.error(
        `Driver with vehicle type ${vehicleType} not found in ${city}`,
      );
      return null;
    }
  } catch (error) {
    console.error(`Error loading driver by vehicle type: ${error}`);
    return null;
  }
}
