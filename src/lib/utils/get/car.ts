import { cityFiles } from "@/lib/constants/info/city";
import { LuxuryRentalCar } from "@/lib/interfaces/services/rentals";

export async function getToolResource(
  toolKit: string,
  tool: string,
  toolKitID: string
): Promise<any> {
  try {
    const toolModule = await import(
      `@/lib/resources/toolkits/tools/${toolKit}/${tool}`
    );
    // Return the specific named export that matches toolKitID
    if (toolModule[toolKitID]) {
      return toolModule[toolKitID];
    } else {
      console.error(`Export named ${toolKitID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}

export async function getLuxuryRentalCars(): Promise<LuxuryRentalCar[]> {
  let luxuryRentalCars: LuxuryRentalCar[] = [];
  try {
    for (const cityFile of cityFiles) {
      const rentalCarsModule = await import(
        `@/lib/constants/rentals/cars/${cityFile}`
      );
      // Get the first export from the module, which should be the array of cars
      const carArray = Object.values(rentalCarsModule)[0];
      if (carArray && Array.isArray(carArray)) {
        luxuryRentalCars = luxuryRentalCars.concat(carArray);
      } else {
        console.error(`No luxury rental cars found for city: ${cityFile}`);
      }
    }
  } catch (error) {
    console.error(`Error loading luxury rental cars: ${error}`);
  }
  return luxuryRentalCars;
}

export async function getLuxuryRentalCar(
  carId: string
): Promise<LuxuryRentalCar | null> {
  try {
    const rentalCars = await getLuxuryRentalCars();
    const car = rentalCars.find((c) => c.id === carId);
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
      (car) => car.pickUpCity.toLowerCase() === city.toLowerCase()
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
    const carsByType = rentalCars.filter((car) =>
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
    const carsByMake = rentalCars.filter((car) =>
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
    const carsByPickUpLocation = rentalCars.filter((car) =>
      car.pickUpLocation?.toLowerCase().includes(pickUpLocation.toLowerCase())
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
