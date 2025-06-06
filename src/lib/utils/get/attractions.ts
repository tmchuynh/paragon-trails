export async function getToolResource(
  toolKit: string,
  tool: string,
  toolKitID: string
): Promise<any> {
  try {
    const toolModule = await import(`@/lib/constants/city/${toolKit}/${tool}`);
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
