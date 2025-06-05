/**
 * Utility functions for safely parsing TypeScript objects from files
 * Provides methods to extract arrays and objects without using eval() or Function constructor
 */
import * as fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

/**
 * Safely extracts array data from a TypeScript file
 * @param {string} filePath - Path to the TypeScript file
 * @param {string} variableType - Type of the array (e.g., "Driver", "Yacht", etc.)
 * @param {Function} objectParser - Function to parse each object in the array
 * @returns {Array} Parsed array of objects
 */
export async function extractObjectsFromFile(
  filePath,
  variableType,
  objectParser,
) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      new RegExp(
        `export const \\w+: ${variableType}\\[\\] = \\[(([\\s\\S])*?)\\];`,
      ),
    );

    if (!match || !match[1]) return [];

    const itemsText = match[1].trim();
    if (!itemsText) return [];

    const parsedObjects = extractObjectsFromString(itemsText, objectParser);

    // Filter out invalid or empty objects
    return parsedObjects.filter(
      (obj) => obj && Object.keys(obj).length > 0 && obj.id,
    );
  } catch (e) {
    console.error(`Error extracting ${variableType} objects:`, e);
    return [];
  }
}

/**
 * Extracts individual objects from a string containing array items
 * @param {string} itemsText - String containing array items
 * @param {Function} objectParser - Function to parse each object
 * @returns {Array} Array of parsed objects
 */
export function extractObjectsFromString(itemsText, objectParser) {
  const items = [];
  let bracketCount = 0;
  let currentItem = "";
  let inObject = false;

  for (let i = 0; i < itemsText.length; i++) {
    const char = itemsText[i];

    // Start of a new object
    if (char === "{" && bracketCount === 0) {
      inObject = true;
      bracketCount = 1;
      currentItem = "{";
      continue;
    }

    if (inObject) {
      if (char === "{") bracketCount++;
      if (char === "}") bracketCount--;

      currentItem += char;

      // End of the current object
      if (bracketCount === 0 && currentItem.trim()) {
        try {
          // Parse the object using the provided parser function
          const obj = objectParser(currentItem);
          if (obj && Object.keys(obj).length > 0) {
            items.push(obj);
          }
          currentItem = "";
          inObject = false;
        } catch (e) {
          console.warn(`Failed to parse object: ${e.message}`);
          currentItem = "";
          inObject = false;
        }
      }
    }
  }

  return items;
}

/**
 * Extracts string value from an object property using regex
 * @param {string} objString - Object string to search in
 * @param {string} property - Property name to extract
 * @returns {string|null} Extracted string value or null
 */
export function extractStringProperty(objString, property) {
  const regex = new RegExp(`${property}:\\s*"([^"]+)"`, "g");
  const match = regex.exec(objString);
  return match ? match[1] : null;
}

/**
 * Extracts number value from an object property using regex
 * @param {string} objString - Object string to search in
 * @param {string} property - Property name to extract
 * @returns {number|null} Extracted number value or null
 */
export function extractNumberProperty(objString, property) {
  const regex = new RegExp(`${property}:\\s*(\\d+(?:\\.\\d+)?)`, "g");
  const match = regex.exec(objString);
  return match ? parseFloat(match[1]) : null;
}

/**
 * Extracts boolean value from an object property using regex
 * @param {string} objString - Object string to search in
 * @param {string} property - Property name to extract
 * @returns {boolean|null} Extracted boolean value or null
 */
export function extractBooleanProperty(objString, property) {
  const regex = new RegExp(`${property}:\\s*(true|false)`, "g");
  const match = regex.exec(objString);
  return match ? match[1] === "true" : null;
}

/**
 * Extracts array of strings from an object property using regex
 * @param {string} objString - Object string to search in
 * @param {string} property - Property name to extract
 * @returns {string[]|null} Extracted array or null
 */
export function extractStringArrayProperty(objString, property) {
  // Match array patterns like: property: ["item1", "item2", "item3"]
  const regex = new RegExp(`${property}:\\s*\\[(.*?)\\]`, "g");
  const match = regex.exec(objString);

  if (!match) return null;

  const arrayContent = match[1].trim();
  if (!arrayContent) return [];

  // Extract individual string items
  const items = [];
  const itemRegex = /"([^"]*)"/g;
  let itemMatch;

  while ((itemMatch = itemRegex.exec(arrayContent)) !== null) {
    items.push(itemMatch[1]);
  }

  return items;
}

/**
 * Generic object parser that helps prevent "Cannot convert undefined or null to object" errors
 * @param {Object} template - Object with default values for the expected structure
 * @returns {Function} A parser function that safely extracts object properties
 */
export function createObjectParser(template) {
  return function (objString) {
    const result = JSON.parse(JSON.stringify(template)); // Deep clone the template

    try {
      // First, check if this is an empty/placeholder object
      if (!objString.includes(":") || objString.trim() === "{}") {
        return null;
      }

      // Extract important identifier
      const idMatch = extractStringProperty(objString, "id");
      if (!idMatch || idMatch.trim() === "") {
        return null; // Skip objects without valid IDs
      }
      result.id = idMatch;

      // Extract properties using type-specific extractors
      for (const key of Object.keys(template)) {
        if (key === "id") continue; // Already handled above

        if (typeof template[key] === "string") {
          const value = extractStringProperty(objString, key);
          if (value !== null) result[key] = value;
        } else if (typeof template[key] === "number") {
          const value = extractNumberProperty(objString, key);
          if (value !== null) result[key] = value;
        } else if (typeof template[key] === "boolean") {
          const value = extractBooleanProperty(objString, key);
          if (value !== null) result[key] = value;
        } else if (Array.isArray(template[key])) {
          const value = extractStringArrayProperty(objString, key);
          if (value !== null) result[key] = value;
        } else if (
          typeof template[key] === "object" &&
          template[key] !== null
        ) {
          // Handle basic nested objects - extract the entire object section
          const nestedObjRegex = new RegExp(`${key}:\\s*({[^{}]*})`, "g");
          const nestedObjMatch = nestedObjRegex.exec(objString);
          if (nestedObjMatch && nestedObjMatch[1]) {
            try {
              // Attempt to extract nested properties (simplified)
              const nestedText = nestedObjMatch[1];
              const nestedObj = {};

              // Process nested object properties
              for (const nestedKey in template[key]) {
                if (typeof template[key][nestedKey] === "string") {
                  const nestedRegex = new RegExp(
                    `${nestedKey}:\\s*"([^"]+)"`,
                    "g",
                  );
                  const nestedMatch = nestedRegex.exec(nestedText);
                  if (nestedMatch) nestedObj[nestedKey] = nestedMatch[1];
                } else if (typeof template[key][nestedKey] === "number") {
                  const nestedRegex = new RegExp(
                    `${nestedKey}:\\s*(\\d+(?:\\.\\d+)?)`,
                    "g",
                  );
                  const nestedMatch = nestedRegex.exec(nestedText);
                  if (nestedMatch)
                    nestedObj[nestedKey] = parseFloat(nestedMatch[1]);
                }
              }

              result[key] = nestedObj;
            } catch (e) {
              // If nested parsing fails, keep the template default
              console.warn(
                `Failed to parse nested object ${key}: ${e.message}`,
              );
            }
          }
        }
      }

      return result;
    } catch (error) {
      console.warn(`Error parsing object: ${error.message}`);
      return null;
    }
  };
}

/**
 * Checks if an object should be written to file (not empty)
 * @param {Object} obj - Object to check
 * @returns {boolean} True if object is valid and should be written
 */
export function isValidObject(obj) {
  // Check if object exists
  if (!obj) return false;

  // Check if object is empty
  if (Object.keys(obj).length === 0) return false;

  // Check if object has an ID
  if (!obj.id || obj.id === "") return false;

  // For most objects, check that name exists
  if ("name" in obj && (!obj.name || obj.name === "")) return false;

  return true;
}
