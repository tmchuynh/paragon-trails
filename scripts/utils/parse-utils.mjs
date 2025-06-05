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
export async function extractObjectsFromFile(filePath, variableType, objectParser) {
  try {
    const content = await readFile(filePath, "utf-8");
    const match = content.match(
      new RegExp(`export const \\w+: ${variableType}\\[\\] = \\[(([\\s\\S])*?)\\];`)
    );
    
    if (!match || !match[1]) return [];

    const itemsText = match[1].trim();
    if (!itemsText) return [];

    return extractObjectsFromString(itemsText, objectParser);
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

  for (let i = 0; i < itemsText.length; i++) {
    const char = itemsText[i];

    if (char === "{") bracketCount++;
    if (char === "}") bracketCount--;

    currentItem += char;

    if (bracketCount === 0 && currentItem.trim()) {
      try {
        // Parse the object using the provided parser function
        const obj = objectParser(currentItem);
        if (obj) {
          items.push(obj);
        }
        currentItem = "";
      } catch (e) {
        console.warn(`Failed to parse object: ${e.message}`);
        currentItem = "";
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
  const regex = new RegExp(`${property}:\\s*"([^"]+)"`, 'g');
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
  const regex = new RegExp(`${property}:\\s*(\\d+(?:\\.\\d+)?)`, 'g');
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
  const regex = new RegExp(`${property}:\\s*(true|false)`, 'g');
  const match = regex.exec(objString);
  return match ? match[1] === 'true' : null;
}

/**
 * Extracts array of strings from an object property using regex
 * @param {string} objString - Object string to search in
 * @param {string} property - Property name to extract
 * @returns {string[]|null} Extracted array or null
 */
export function extractStringArrayProperty(objString, property) {
  // Match array patterns like: property: ["item1", "item2", "item3"]
  const regex = new RegExp(`${property}:\\s*\\[(.*?)\\]`, 'g');
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
  return function(objString) {
    const result = JSON.parse(JSON.stringify(template)); // Deep clone the template
    
    try {
      // Extract properties using type-specific extractors
      for (const key of Object.keys(template)) {
        if (typeof template[key] === "string") {
          const value = extractStringProperty(objString, key);
          if (value !== null) result[key] = value;
        } 
        else if (typeof template[key] === "number") {
          const value = extractNumberProperty(objString, key);
          if (value !== null) result[key] = value;
        }
        else if (typeof template[key] === "boolean") {
          const value = extractBooleanProperty(objString, key);
          if (value !== null) result[key] = value;
        }
        else if (Array.isArray(template[key])) {
          const value = extractStringArrayProperty(objString, key);
          if (value !== null) result[key] = value;
        }
        else if (typeof template[key] === "object" && template[key] !== null) {
          // Handle nested objects recursively in a future enhancement
          // For now, basic structure is preserved from template
        }
      }
      
      // Return the object if we have at least one properly filled property besides defaults
      const hasNonDefaultValues = Object.keys(result).some(key => 
        result[key] !== template[key] && result[key] !== null && result[key] !== undefined
      );
      
      return hasNonDefaultValues ? result : null;
    } catch (error) {
      console.warn(`Error parsing object: ${error.message}`);
      return null;
    }
  };
}
