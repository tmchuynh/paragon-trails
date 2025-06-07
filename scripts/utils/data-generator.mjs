/**
 * Utility functions for generating random data
 */

import { attractionBasicInfo } from "./attraction-basic-utils.mjs";
import { randomInt } from "crypto";

/**
 * Generate a random price within a range
 * @param {number} min - Minimum price
 * @param {number} max - Maximum price
 * @param {number} decimal - Number of decimal places
 * @returns {number} Random price
 */
export const generateRandomPrice = (min, max, decimal = 2) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimal));
};

/**
 * Get random items from an array
 * @param {Array} array - Source array
 * @param {number} count - Number of items to select
 * @returns {Array} Selected items
 */
export const getRandomItems = (array, count = 1) => {
  if (!array || !Array.isArray(array) || array.length === 0) return [];
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Generates a cryptographically secure random integer between 0 (inclusive) and max (exclusive)
 * by utilizing the randomInt function.
 *
 * @param {number} max - The exclusive upper bound for the random integer
 * @returns {number} A random integer between 0 (inclusive) and max (exclusive)
 */
export function getSecureRandomInt(max) {
  return randomInt(0, max); // Returns an int from 0 (inclusive) to max (exclusive)
}

/**
 * Generate a random boolean with a given probability
 * @param {number} probability - Probability of true (0-1)
 * @returns {boolean} Random boolean
 */
export const getRandomBool = (probability = 0.5) => {
  return Math.random() < probability;
};

/**
 * Generate a random integer in a range (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generate a random rating in a specified range
 * @param {number} min - Minimum rating
 * @param {number} max - Maximum rating
 * @param {number} decimal - Number of decimal places
 * @returns {number} Random rating
 */
export const getRandomRating = (min = 3.5, max = 5.0, decimal = 1) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimal));
};

/**
 * Get a random element from an array
 * @param {Array} array - Source array
 * @returns {*} Random element
 */
export const getRandomElement = (array) => {
  if (!array || !Array.isArray(array) || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
};

export function generateCityTitle(cityKey) {
  const attractions = attractionBasicInfo[cityKey];
  if (attractions && attractions.length > 0) {
    // Use the top attraction for a more engaging title
    return `Explore the ${attractions[0]} and More in ${cityKey.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`;
  }
  // Fallback generic title
  return `Discover Top Attractions in ${cityKey.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`;
}

export function getRandomDate(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
}