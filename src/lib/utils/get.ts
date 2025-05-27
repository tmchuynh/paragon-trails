import { driverQualificationMatrix } from "../constants/services/transportation/staff/drivers";

export async function getTourData(
  tourCategory: string,
  tour: string,
  tourID: string
): Promise<any> {
  try {
    const tourModule = await import(
      `@/lib/constants/destinations/tours/${tourCategory}/${tour}`
    );
    // Return the specific named export that matches tourID
    if (tourModule[tourID]) {
      return tourModule[tourID];
    } else {
      console.error(`Export named ${tourID} not found in module`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading resource: ${error}`);
    return [];
  }
}

export const driverLanguages = Array.from(
  new Set(
    driverQualificationMatrix.flatMap((category) =>
      category.profiles.flatMap((driver) => driver.languages)
    )
  )
).sort();
