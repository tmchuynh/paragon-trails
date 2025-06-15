// NHTSA Vehicle API Service
// https://vpic.nhtsa.dot.gov/api/

export interface NHTSAMake {
  Make_ID: number;
  Make_Name: string;
}

export interface NHTSAMakeResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: NHTSAMake[];
}

export interface NHTSAVariable {
  ID: number;
  Name: string;
  Description: string;
  DataType: string;
}

export interface NHTSAVariableResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: NHTSAVariable[];
}

class NHTSAService {
  private baseUrl = 'https://vpic.nhtsa.dot.gov/api';

  /**
   * Get all vehicle makes
   */
  async getAllMakes(): Promise<NHTSAMake[]> {
    try {
      const response = await fetch(`${this.baseUrl}/vehicles/GetAllMakes?format=json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: NHTSAMakeResponse = await response.json();
      return data.Results || [];
    } catch (error) {
      console.error('Error fetching vehicle makes:', error);
      return [];
    }
  }

  /**
   * Get makes for specific vehicle type
   * @param vehicleType - e.g., 'car', 'truck', 'motorcycle'
   */
  async getMakesForVehicleType(vehicleType: string): Promise<NHTSAMake[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/vehicles/GetMakesForVehicleType/${vehicleType}?format=json`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: NHTSAMakeResponse = await response.json();
      return data.Results || [];
    } catch (error) {
      console.error(`Error fetching makes for vehicle type ${vehicleType}:`, error);
      return [];
    }
  }

  /**
   * Get vehicle variables list
   */
  async getVehicleVariableList(): Promise<NHTSAVariable[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/vehicles/GetVehicleVariableList?format=json`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: NHTSAVariableResponse = await response.json();
      return data.Results || [];
    } catch (error) {
      console.error('Error fetching vehicle variables:', error);
      return [];
    }
  }

  /**
   * Transform NHTSA makes into our vehicle format
   */
  transformMakesToVehicles(makes: NHTSAMake[], vehicleType: string = 'car'): any[] {
    return makes.slice(0, 50).map((make, index) => ({
      id: `${make.Make_ID}-${vehicleType}`,
      name: `${make.Make_Name} ${this.getModelName(vehicleType)}`,
      type: vehicleType as any,
      brand: make.Make_Name,
      model: this.getModelName(vehicleType),
      year: 2020 + (index % 5),
      images: [
        this.getVehicleImage(make.Make_Name, vehicleType),
        `https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop&q=60`,
        `https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&auto=format&fit=crop&q=60`,
      ],
      description: `Experience the luxury and performance of the ${make.Make_Name} ${this.getModelName(vehicleType)}. Perfect for your travel adventures with modern amenities and reliable performance.`,
      specifications: {
        engine: this.getRandomEngine(vehicleType),
        transmission: Math.random() > 0.3 ? "Automatic" : "Manual",
        fuelType: this.getRandomFuelType(),
        seatingCapacity: this.getSeatingCapacity(vehicleType),
        doors: vehicleType === 'motorcycle' ? 0 : Math.floor(Math.random() * 3) + 2,
        luggage: vehicleType === 'motorcycle' ? 1 : Math.floor(Math.random() * 5) + 1,
        topSpeed: `${120 + Math.floor(Math.random() * 80)} mph`,
        acceleration: `${3.5 + Math.random() * 4} seconds (0-60 mph)`,
        fuelEconomy: vehicleType === 'motorcycle' ? `${45 + Math.floor(Math.random() * 20)} mpg` : `${25 + Math.floor(Math.random() * 15)} mpg`,
      },
      features: this.getVehicleFeatures(vehicleType),
      pricing: {
        daily: this.getDailyPrice(vehicleType, make.Make_Name),
        weekly: this.getDailyPrice(vehicleType, make.Make_Name) * 6,
        monthly: this.getDailyPrice(vehicleType, make.Make_Name) * 25,
        currency: "USD",
        deposit: this.getDailyPrice(vehicleType, make.Make_Name) * 5,
        insurance: Math.floor(this.getDailyPrice(vehicleType, make.Make_Name) * 0.15),
      },
      availability: {
        locations: this.getRandomLocations(),
        isAvailable: Math.random() > 0.1,
        minimumAge: vehicleType === 'motorcycle' ? 21 : 18,
        licenseRequired: vehicleType === 'motorcycle' ? ["Motorcycle License"] : ["Driver's License"],
      },
      insurance: {
        included: ["Basic Coverage", "Theft Protection"],
        optional: ["Full Coverage", "Roadside Assistance", "Additional Driver"],
      },
      rating: 3.5 + Math.random() * 1.5,
      reviews: Math.floor(Math.random() * 200) + 10,
      category: this.getCategory(vehicleType),
      tags: this.getTags(vehicleType, make.Make_Name),
    }));
  }

  private getVehicleImage(make: string, type: string): string {
    // Return different images based on vehicle type and make
    const imageMap: { [key: string]: string } = {
      car: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=600&auto=format&fit=crop&q=60",
      truck: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&auto=format&fit=crop&q=60",
      motorcycle: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop&q=60",
      suv: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&auto=format&fit=crop&q=60",
    };
    return imageMap[type] || imageMap.car;
  }

  private getModelName(type: string): string {
    const models: { [key: string]: string[] } = {
      car: ["Sedan", "Coupe", "Hatchback", "Convertible", "Wagon"],
      truck: ["Pickup", "Heavy Duty", "Compact", "Mid-Size"],
      motorcycle: ["Sport", "Cruiser", "Touring", "Adventure", "Standard"],
      suv: ["Compact SUV", "Mid-Size SUV", "Full-Size SUV", "Crossover"],
    };
    const typeModels = models[type] || models.car;
    return typeModels[Math.floor(Math.random() * typeModels.length)];
  }

  private getRandomEngine(type: string): string {
    const engines: { [key: string]: string[] } = {
      car: ["1.8L I4", "2.0L I4 Turbo", "2.5L I4", "3.0L V6", "Electric"],
      truck: ["3.5L V6", "5.0L V8", "6.2L V8", "3.0L Diesel V6"],
      motorcycle: ["250cc", "500cc", "750cc", "1000cc", "1200cc"],
      suv: ["2.0L I4 Turbo", "2.5L I4", "3.5L V6", "5.7L V8", "Hybrid"],
    };
    const typeEngines = engines[type] || engines.car;
    return typeEngines[Math.floor(Math.random() * typeEngines.length)];
  }

  private getRandomFuelType(): string {
    const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid"];
    return fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
  }

  private getSeatingCapacity(type: string): number {
    const capacities: { [key: string]: number[] } = {
      car: [2, 4, 5],
      truck: [2, 3, 5, 6],
      motorcycle: [1, 2],
      suv: [5, 7, 8],
    };
    const typeCapacities = capacities[type] || capacities.car;
    return typeCapacities[Math.floor(Math.random() * typeCapacities.length)];
  }

  private getVehicleFeatures(type: string): string[] {
    const baseFeatures = ["Air Conditioning", "GPS Navigation", "Bluetooth", "USB Charging"];
    const typeFeatures: { [key: string]: string[] } = {
      car: ["Power Windows", "Central Locking", "Backup Camera", "Cruise Control"],
      truck: ["Towing Package", "Bed Liner", "4WD", "Heavy Duty Suspension"],
      motorcycle: ["Anti-lock Brakes", "Traction Control", "Quick Shifter", "Wind Protection"],
      suv: ["All-Wheel Drive", "Roof Rails", "Third Row Seating", "Power Liftgate"],
    };
    return [...baseFeatures, ...(typeFeatures[type] || [])];
  }

  private getDailyPrice(type: string, make: string): number {
    const basePrices: { [key: string]: number } = {
      car: 45,
      truck: 65,
      motorcycle: 35,
      suv: 75,
    };
    
    const luxuryMakes = ["BMW", "Mercedes-Benz", "Audi", "Lexus", "Porsche", "Ferrari", "Lamborghini"];
    const isLuxury = luxuryMakes.some(luxury => make.toLowerCase().includes(luxury.toLowerCase()));
    
    const basePrice = basePrices[type] || basePrices.car;
    const multiplier = isLuxury ? 2.5 : 1;
    
    return Math.floor(basePrice * multiplier + Math.random() * 20);
  }

  private getRandomLocations(): string[] {
    const locations = [
      "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ",
      "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA",
      "Austin, TX", "Jacksonville, FL", "Fort Worth, TX", "Columbus, OH", "Charlotte, NC"
    ];
    const count = Math.floor(Math.random() * 5) + 1;
    return locations.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  private getCategory(type: string): string {
    const categories: { [key: string]: string } = {
      car: "Economy",
      truck: "Commercial",
      motorcycle: "Recreation",
      suv: "Family",
    };
    return categories[type] || "Standard";
  }

  private getTags(type: string, make: string): string[] {
    const baseTags = ["rental", "travel"];
    const typeTags: { [key: string]: string[] } = {
      car: ["economy", "city", "fuel-efficient"],
      truck: ["commercial", "heavy-duty", "work"],
      motorcycle: ["adventure", "sport", "touring"],
      suv: ["family", "spacious", "all-terrain"],
    };
    
    const luxuryMakes = ["BMW", "Mercedes-Benz", "Audi", "Lexus", "Porsche"];
    const isLuxury = luxuryMakes.some(luxury => make.toLowerCase().includes(luxury.toLowerCase()));
    
    const tags = [...baseTags, ...(typeTags[type] || [])];
    if (isLuxury) tags.push("luxury", "premium");
    
    return tags;
  }
}

export const nHTSAService = new NHTSAService();
