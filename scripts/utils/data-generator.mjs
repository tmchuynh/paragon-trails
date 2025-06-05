/**
 * Utility functions for generating random data
 */

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
