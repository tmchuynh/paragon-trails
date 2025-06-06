/**
 * Utility functions for generating consistent IDs across the application
 */

import { removeAccents } from "./format-utils.mjs";

/**
 * Generate a consistent attraction ID
 * @param {string} city - The city slug
 * @param {number} cityIndex - The city index
 * @param {number} attractionIndex - The attraction index within the city
 * @returns {string} Formatted attraction ID
 */
export function generateAttractionId(city, cityIndex, attractionIndex) {
  return `attraction-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${cityIndex + 1}-${attractionIndex + 1}`;
}

/**
 * Generate a consistent tour ID
 * @param {string} city - The city slug
 * @param {number} index - The tour index
 * @returns {string} Formatted tour ID
 */
export function generateTourId(city, index) {
  return `tour-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;
}

/**
 * Generate a consistent guide ID
 * @param {string} city - The city slug
 * @param {number} index - The guide index
 * @returns {string} Formatted guide ID
 */
export function generateGuideId(city, index) {
  return `guide-${removeAccents(city).toLowerCase().replace(/\s+/g, "-")}-${index + 1}`;
}
