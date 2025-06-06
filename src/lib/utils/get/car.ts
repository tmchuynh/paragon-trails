import { cityFiles } from "@/lib/constants/info/city";
import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { formatKebabToCamelCase } from "../format";

export async function getLuxuryRentalCars(): Promise<any> {
  try {
    for (const cityFile of cityFiles) {
      const formattedCity = formatKebabToCamelCase(cityFile);

      const attractionId = `${formattedCity}Cars`;
      const rentalCarsModule = await import(
        `@/lib/constants/rentals/cars/${formattedCity}`
      );
      if (rentalCarsModule[attractionId]) {
        return rentalCarsModule[attractionId];
      } else {
        console.error(`No luxury rental cars found for city: ${cityFile}`);
        return [];
      }
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars: ${error}`);
  }
}

export async function getLuxuryRentalCar(
  carId: string,
): Promise<LuxuryRentalCar | null> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const car = rentalCars.find((c: { id: string }) => c.id === carId);
    if (car) {
      return car;
    } else {
      console.error(`Luxury rental car with ID ${carId} not found`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading luxury rental car: ${error}`);
    return null;
  }
}

export async function getLuxuryRentalCarsByCity(
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsInCity = rentalCars.filter(
      (car: { pickUpCity: string }) =>
        car.pickUpCity.toLowerCase() === city.toLowerCase(),
    );
    if (carsInCity.length > 0) {
      return carsInCity;
    } else {
      console.error(`No luxury rental cars found in ${city}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars for ${city}: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByType(
  type: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsByType = rentalCars.filter((car: { type: string }) =>
      car.type.toLowerCase().includes(type.toLowerCase()),
    );
    if (carsByType.length > 0) {
      return carsByType;
    } else {
      console.error(`No luxury rental cars found for type: ${type}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by type: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByMake(
  make: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsByMake = rentalCars.filter((car: { make: string }) =>
      car.make.toLowerCase().includes(make.toLowerCase()),
    );
    if (carsByMake.length > 0) {
      return carsByMake;
    } else {
      console.error(`No luxury rental cars found for make: ${make}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by make: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCardsByPickUpLocation(
  pickUpLocation: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsByPickUpLocation = rentalCars.filter(
      (car: { pickUpLocation: string }) =>
        car.pickUpLocation
          ?.toLowerCase()
          .includes(pickUpLocation.toLowerCase()),
    );
    if (carsByPickUpLocation.length > 0) {
      return carsByPickUpLocation;
    } else {
      console.error(
        `No luxury rental cars found for pick-up location: ${pickUpLocation}`,
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars by pick-up location: ${error}`,
    );
    return [];
  }
}
export async function getLuxuryRentalCarsByCityAndCountry(
  city: string,
  country: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const formattedCountry = formatKebabToCamelCase(country);
    const rentalCars = await getLuxuryRentalCars();
    const carsInCityAndCountry = rentalCars.filter(
      (car: { pickUpCity: string; pickUpCountry: string }) =>
        car.pickUpCity.toLowerCase() === formattedCity.toLowerCase() &&
        car.pickUpCountry.toLowerCase() === formattedCountry.toLowerCase(),
    );
    if (carsInCityAndCountry.length > 0) {
      return carsInCityAndCountry;
    } else {
      console.error(`No luxury rental cars found in ${city}, ${country}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars for ${city}, ${country}: ${error}`,
    );
    return [];
  }
}

export async function getLuxuryRentalCarsByCityAndRegion(
  city: string,
  region: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const formattedRegion = formatKebabToCamelCase(region);
    const rentalCars = await getLuxuryRentalCars();
    const carsInCityAndRegion = rentalCars.filter(
      (car: { pickUpCity: string; pickUpRegion: string }) =>
        car.pickUpCity.toLowerCase() === formattedCity.toLowerCase() &&
        car.pickUpRegion.toLowerCase() === formattedRegion.toLowerCase(),
    );
    if (carsInCityAndRegion.length > 0) {
      return carsInCityAndRegion;
    } else {
      console.error(`No luxury rental cars found in ${city}, ${region}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars for ${city}, ${region}: ${error}`,
    );
    return [];
  }
}

export async function getLuxuryRentalCarsBySeatNumber(
  seatNumber: number,
  city: string,
) {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsBySeatNumber = rentalCars.filter(
      (car: { seats: number }) => car.seats === seatNumber,
    );
    if (carsBySeatNumber.length > 0) {
      return carsBySeatNumber;
    } else {
      console.error(
        `No luxury rental cars found with ${seatNumber} seats in ${city}`,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by seat number: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByFuelType(
  fuelType: string,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByFuelType = rentalCars.filter(
      (car: { fuelType: string }) =>
        car.fuelType.toLowerCase() === fuelType.toLowerCase(),
    );
    if (carsByFuelType.length > 0) {
      return carsByFuelType;
    } else {
      console.error(`No luxury rental cars found for fuel type: ${fuelType}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by fuel type: ${error}`);
    return [];
  }
}
export async function getLuxuryRentalCarsByTransmission(
  transmission: string,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByTransmission = rentalCars.filter(
      (car: { transmission: string }) =>
        car.transmission.toLowerCase() === transmission.toLowerCase(),
    );
    if (carsByTransmission.length > 0) {
      return carsByTransmission;
    } else {
      console.error(
        `No luxury rental cars found for transmission type: ${transmission}`,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by transmission: ${error}`);
    return [];
  }
}
export async function getLuxuryRentalCarsByHorsepower(
  horsepower: number,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByHorsepower = rentalCars.filter(
      (car: { horsepower: number }) => car.horsepower >= horsepower,
    );
    if (carsByHorsepower.length > 0) {
      return carsByHorsepower;
    } else {
      console.error(
        `No luxury rental cars found with ${horsepower} horsepower in ${city}`,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by horsepower: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByColor(
  color: string,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByColor = rentalCars.filter((car: { colorOptions: string[] }) =>
      car.colorOptions.some(
        (c: string) => c.toLowerCase() === color.toLowerCase(),
      ),
    );
    if (carsByColor.length > 0) {
      return carsByColor;
    } else {
      console.error(`No luxury rental cars found for color: ${color}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by color: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByFeature(
  feature: string,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByFeature = rentalCars.filter((car: { features: string[] }) =>
      car.features.some(
        (f: string) => f.toLowerCase() === feature.toLowerCase(),
      ),
    );
    if (carsByFeature.length > 0) {
      return carsByFeature;
    } else {
      console.error(`No luxury rental cars found for feature: ${feature}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by feature: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByPriceRange(
  minPrice: number,
  maxPrice: number,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByPriceRange = rentalCars.filter(
      (car: { rentalPricePerDay: number }) =>
        car.rentalPricePerDay >= minPrice && car.rentalPricePerDay <= maxPrice,
    );
    if (carsByPriceRange.length > 0) {
      return carsByPriceRange;
    } else {
      console.error(
        `No luxury rental cars found in the price range ${minPrice} - ${maxPrice} in ${city}`,
      );
      return [];
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars by price range: ${error}`);
    return [];
  }
}

export async function getOnlyAvailableLuxuryRentalCars() {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const availableCars = rentalCars.filter(
      (car: { available: boolean }) => car.available,
    );
    if (availableCars.length > 0) {
      return availableCars;
    } else {
      console.error(`No available luxury rental cars found`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading available luxury rental cars: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCarsByDepositAmount(
  minDeposit: number,
  maxDeposit: number,
  city: string,
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCarsByCity(city);
    const carsByDepositAmount = rentalCars.filter(
      (car: { depositAmount: number }) =>
        car.depositAmount >= minDeposit && car.depositAmount <= maxDeposit,
    );
    if (carsByDepositAmount.length > 0) {
      return carsByDepositAmount;
    } else {
      console.error(
        `No luxury rental cars found in the deposit range ${minDeposit} - ${maxDeposit} in ${city}`,
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars by deposit amount: ${error}`,
    );
    return [];
  }
}
