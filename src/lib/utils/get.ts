import { driverQualificationMatrix } from "../constants/services/transportation/staff/drivers";

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

export const driverLanguages = Array.from(
  new Set(
    driverQualificationMatrix.flatMap((category) =>
      category.profiles.flatMap((driver) => driver.languages)
    )
  )
).sort();
