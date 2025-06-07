import { cityFiles } from "@/lib/constants/info/city";
import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";
import { cityCountryMap, cityToRegionMap } from "@/lib/utils/mapping";
import { formatKebabToCamelCase } from "../format";

export async function getLuxuryRentalCars(): Promise<LuxuryRentalCar[]> {
  const allCars: LuxuryRentalCar[] = [];
  console.log("Starting to load luxury rental cars");

  // Use all cities from cityFiles instead of just amalfi-coast
  const citiesToTry = cityFiles;
  console.log(`Will attempt to load cars from ${citiesToTry.length} cities`);

  try {
    for (const cityFile of citiesToTry) {
      try {
        console.log(`Attempting to load cars for city: ${cityFile}`);
        const formattedCity = formatKebabToCamelCase(cityFile);
        console.log(`Formatted city name: ${formattedCity}`);

        // Direct approach based on known file structure
        try {
          // Try importing the module directly with the known path
          const carModule = await import(
            `@/lib/constants/rentals/cars/${formattedCity}`
          );
          console.log(
            `Successfully imported from: @/lib/constants/rentals/cars/${formattedCity}`
          );
          console.log("Available exports:", Object.keys(carModule));

          // Try all possible export names
          const knownExportNames = [
            `${formattedCity}Cars`,
            `${formattedCity}${cityCountryMap[cityFile as keyof typeof cityCountryMap] || ""}${cityToRegionMap[cityFile as keyof typeof cityToRegionMap] || ""}Cars`,
            `${cityFile}Cars`,
            `${formattedCity}italymediterraneanCars`,
          ];

          console.log(`Looking for exports for ${cityFile}:`, knownExportNames);

          let foundCars = false;
          for (const exportName of knownExportNames) {
            if (carModule[exportName]) {
              console.log(
                `Found cars with export name: ${exportName}, count: ${carModule[exportName].length}`
              );
              allCars.push(...carModule[exportName]);
              foundCars = true;
              break;
            }
          }

          // If we still haven't found the data, look for any array in the exports
          if (!foundCars) {
            for (const key of Object.keys(carModule)) {
              if (
                Array.isArray(carModule[key]) &&
                carModule[key].length > 0 &&
                carModule[key][0].make &&
                carModule[key][0].model
              ) {
                // Check if it looks like car data
                console.log(
                  `Found array data with export name: ${key}, count: ${carModule[key].length}`
                );
                allCars.push(...carModule[key]);
                foundCars = true;
                break;
              }
            }
          }

          if (foundCars) {
            console.log(
              `Successfully loaded ${foundCars ? "some" : "no"} cars from ${cityFile}`
            );
          } else {
            console.log(
              `No car data found for ${cityFile} despite successful import`
            );
          }
        } catch (importError) {
          console.error(
            `Error importing car data for ${cityFile}:`,
            importError
          );
          // Continue to the next city if this one fails
        }
      } catch (cityError) {
        console.error(`Error processing city: ${cityFile}`, cityError);
        // Continue to the next city
      }
    }

    console.log(`Total cars loaded from all cities: ${allCars.length}`);

    // If no cars were found, we could still try the hardcoded fallback as a last resort
    if (allCars.length === 0) {
      console.log(
        "No cars found through normal loading. Using amalfiCoastitalymediterraneanCars directly as a fallback."
      );

      try {
        const amalfiModule = await import(
          "@/lib/constants/rentals/cars/amalfiCoast"
        );
        if (amalfiModule.amalfiCoastitalymediterraneanCars) {
          console.log(
            `Found amalfiCoastitalymediterraneanCars with ${amalfiModule.amalfiCoastitalymediterraneanCars.length} cars`
          );
          allCars.push(...amalfiModule.amalfiCoastitalymediterraneanCars);
        }
      } catch (e) {
        console.error("Failed to load hardcoded amalfi coast cars:", e);
      }
    }

    return allCars;
  } catch (error) {
    console.error(`Error in getLuxuryRentalCars:`, error);
    return allCars; // Return whatever cars we managed to load, even if the overall process had errors
  }
}

export async function getLuxuryRentalCar(
  carId: string
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
  city: string
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsInCity = rentalCars.filter(
      (car: { pickUpCity: string }) =>
        car.pickUpCity.toLowerCase() === city.toLowerCase()
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
  type: string
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsByType = rentalCars.filter((car: { type: string }) =>
      car.type.toLowerCase().includes(type.toLowerCase())
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
  make: string
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsByMake = rentalCars.filter((car: { make: string }) =>
      car.make.toLowerCase().includes(make.toLowerCase())
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
  pickUpLocation: string
): Promise<LuxuryRentalCar[]> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const carsByPickUpLocation = rentalCars.filter(
      (car: LuxuryRentalCar) =>
        car.pickUpLocation &&
        car.pickUpLocation.toLowerCase().includes(pickUpLocation.toLowerCase())
    );
    if (carsByPickUpLocation.length > 0) {
      return carsByPickUpLocation;
    } else {
      console.error(
        `No luxury rental cars found for pick-up location: ${pickUpLocation}`
      );
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars by pick-up location: ${error}`
    );
    return [];
  }
}
export async function getLuxuryRentalCarsByCityAndCountry(
  city: string,
  country: string
): Promise<LuxuryRentalCar[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const formattedCountry = formatKebabToCamelCase(country);
    const rentalCars = await getLuxuryRentalCars();
    const carsInCityAndCountry = rentalCars.filter(
      (car: { pickUpCity: string; pickUpCountry: string }) =>
        car.pickUpCity.toLowerCase() === formattedCity.toLowerCase() &&
        car.pickUpCountry.toLowerCase() === formattedCountry.toLowerCase()
    );
    if (carsInCityAndCountry.length > 0) {
      return carsInCityAndCountry;
    } else {
      console.error(`No luxury rental cars found in ${city}, ${country}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars for ${city}, ${country}: ${error}`
    );
    return [];
  }
}

export async function getLuxuryRentalCarsByCityAndRegion(
  city: string,
  region: string
): Promise<LuxuryRentalCar[]> {
  try {
    const formattedCity = formatKebabToCamelCase(city);
    const formattedRegion = formatKebabToCamelCase(region);
    const rentalCars = await getLuxuryRentalCars();
    const carsInCityAndRegion = rentalCars.filter(
      (car: LuxuryRentalCar) =>
        car.pickUpCity.toLowerCase() === formattedCity.toLowerCase() &&
        car.pickUpRegion?.toLowerCase() === formattedRegion.toLowerCase()
    );
    if (carsInCityAndRegion.length > 0) {
      return carsInCityAndRegion;
    } else {
      console.error(`No luxury rental cars found in ${city}, ${region}`);
      return [];
    }
  } catch (error) {
    console.error(
      `Error loading luxury rental cars for ${city}, ${region}: ${error}`
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
