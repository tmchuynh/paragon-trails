import * as fs from "fs";
import * as path from "path"; // Add missing path import

export const getCityFiles = () => {
  try {
    // Read the city.ts file as text
    const cityFilePath = path.join(
      "src",
      "lib",
      "constants",
      "info",
      "city.ts"
    );

    const fileContent = fs.readFileSync(cityFilePath, "utf8");

    // Extract city names using regex
    const cityArrayMatch = fileContent.match(
      /export const cityFiles = \[([\s\S]*?)\];/
    );
    if (!cityArrayMatch || !cityArrayMatch[1]) {
      console.error("Could not parse city files from city.ts");
      return [];
    }

    // Extract city names from the array string
    return cityArrayMatch[1]
      .split(",")
      .map((city) => city.trim().replace(/"/g, "").replace(/'/g, ""))
      .filter((city) => city.length > 0);
  } catch (error) {
    console.error("Error reading city files:", error);
    return [];
  }
};

export function getRandomEmail(emailDomain) {
  const generalEmailStarters = [
    "info",
    "contact",
    "hello",
    "hi",
    "support",
    "help",
    "team",
    "office",
    "admin",
    "inquiries",
    "connect",
    "reachus",
    "services",
    "customerservice",
    "clientservices",
    "feedback",
    "general",
    "communications",
    "reception",
    "mail",
    "welcome",
    "ask",
    "care",
  ];

  const emailStarter =
    generalEmailStarters[
      Math.floor(Math.random() * generalEmailStarters.length)
    ];

  const domain = emailDomain.toLowerCase().replace(/\s+/g, "");
  return `${emailStarter}@${domain}.com`;
}