"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLanguages = exports.formatDuration = exports.formatTime = exports.formatDate = exports.capitalize = void 0;
exports.formatNumberToCurrency = formatNumberToCurrency;
exports.formatKebabToCamelCase = formatKebabToCamelCase;
exports.formatToSlug = formatToSlug;
exports.formatKebebToTitleCase = formatKebebToTitleCase;
exports.formatTitleToCamelCase = formatTitleToCamelCase;
exports.formatCamelCaseToTitle = formatCamelCaseToTitle;
exports.hasAccentedCharacters = hasAccentedCharacters;
exports.removeAccents = removeAccents;
/**
 * Capitalizes a string following standard title case rules.
 *
 * This function converts a string to title case with the following rules:
 * - Converts hyphens and underscores to spaces
 * - Capitalizes the first letter of each word except for certain articles,
 *   conjunctions, and prepositions (like "a", "the", "in", etc.)
 * - Always capitalizes the first and last word of the string
 * - Removes any empty strings resulting from multiple spaces
 *
 * @param {string} str - The input string to be capitalized
 * @returns {string} The capitalized string, or an empty string if the input is falsy
 *
 * @example
 * capitalize("hello-world") // Returns "Hello World"
 * @example
 * capitalize("the_lord_of_the_rings") // Returns "The Lord of the Rings"
 */
const capitalize = (str) => {
    if (!str)
        return "";
    const normalizedStr = str.replace(/-/g, " ").replace(/_/g, " ");
    const wordsToIgnore = new Set([
        "a",
        "an",
        "and",
        "as",
        "at",
        "but",
        "by",
        "for",
        "in",
        "nor",
        "of",
        "on",
        "or",
        "the",
        "up",
    ]);
    const words = normalizedStr.split(" ");
    const capitalizedWords = words
        .filter((word) => word.length > 0) // Remove empty strings from multiple spaces
        .map((word, index, arr) => {
        const lowerWord = word.toLowerCase();
        if (index === 0 ||
            (index === arr.length - 1 && arr.length > 1) ||
            (!wordsToIgnore.has(lowerWord) && !lowerWord.startsWith("d'"))) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return lowerWord;
    });
    return capitalizedWords.join(" ");
};
exports.capitalize = capitalize;
const formatDate = (date) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
};
exports.formatDate = formatDate;
const formatTime = (time) => {
    const date = new Date(`1970-01-01T${time}`);
    return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
};
exports.formatTime = formatTime;
const formatDuration = (duration) => {
    const [weeks, days] = duration.split(" ");
    return `${weeks} weeks ${days} days`;
};
exports.formatDuration = formatDuration;
/**
 * Formats a number to a currency string.
 *
 * This function takes a number and formats it as a currency string in USD,
 * with optional minimum and maximum fraction digits.
 *
 * @param value - The number to format
 * @param min - Optional minimum number of fraction digits (default is 0)
 * @param max - Optional maximum number of fraction digits (default is 0)
 * @returns The formatted currency string
 *
 * @example
 * // Returns "$1,234.56"
 * formatNumberToCurrency(1234.56)
 *
 * @example
 * // Returns "$1,234.00"
 * formatNumberToCurrency(1234, 2, 2)
 */
function formatNumberToCurrency(value, min, max) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: min || 0,
        maximumFractionDigits: max || 0,
    }).format(value);
}
/**
 * Converts a kebab-case string to camelCase.
 *
 * This function takes a kebab-case formatted string (words separated by hyphens)
 * and converts it to camelCase (first word lowercase, subsequent words capitalized
 * with no separators). It also removes any non-alphanumeric characters.
 *
 * @param str - The kebab-case string to convert
 * @returns The converted camelCase string
 *
 * @example
 * // Returns "helloWorld"
 * formatKebabToCamelCase("hello-world")
 *
 * @example
 * // Returns "testCaseExample"
 * formatKebabToCamelCase("test-case-example")
 */
function formatKebabToCamelCase(str) {
    return str
        .split("-")
        .map((word, index) => {
        if (index === 0) {
            return word;
        }
        return (word
            .replaceAll(/[^a-z0-9]+/g, "")
            .charAt(0)
            .toUpperCase() + word.slice(1).replaceAll(/[^a-z0-9]+/g, ""));
    })
        .join("");
}
/**
 * Converts a string to a URL-friendly slug format.
 *
 * This function takes a string and converts it to a slug format suitable for URLs.
 * It removes special characters, replaces spaces with hyphens, and converts the string to lowercase.
 *
 * @param str - The string to convert to a slug
 * @returns The slugified version of the string
 *
 * @example
 * // Returns "hello-world"
 * formatToSlug("Hello World!")
 *
 * @example
 * // Returns "this-is-a-test"
 * formatToSlug("This is a test.")
 */
function formatToSlug(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9&+\/@$'\(\)]+/g, "-")
        .replace(/^-|-$/g, "");
}
/**
 * Converts a kebab-case string to title case.
 *
 * This function takes a kebab-case formatted string (words separated by hyphens)
 * and converts it to title case (each word capitalized, separated by spaces).
 *
 * @param str - The kebab-case string to convert
 * @returns The converted title case string
 *
 * @example
 * // Returns "Hello World"
 * formatKebebToTitleCase("hello-world")
 *
 * @example
 * // Returns "Test Case Example"
 * formatKebebToTitleCase("test-case-example")
 */
function formatKebebToTitleCase(str) {
    return str
        .split("-")
        .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join(" ");
}
/**
 * Formats an array of language strings into a grammatically correct string.
 *
 * @param languages - An array of language strings to be formatted
 * @returns A formatted string where languages are comma-separated and the last language is preceded by "and"
 * @example
 * // Returns "English"
 * formatLanguages(["English"])
 *
 * // Returns "English, and Spanish"
 * formatLanguages(["English", "Spanish"])
 *
 * // Returns "English, Spanish, and French"
 * formatLanguages(["English", "Spanish", "French"])
 *
 * // Returns empty string for empty array
 * formatLanguages([])
 */
const formatLanguages = (languages) => {
    if (languages.length === 0)
        return "";
    if (languages.length === 1)
        return languages[0];
    const lastLanguage = languages[languages.length - 1];
    const otherLanguages = languages.slice(0, -1).join(", ");
    return `${otherLanguages}, and ${lastLanguage}`;
};
exports.formatLanguages = formatLanguages;
/**
 * Converts a title string to camelCase format.
 *
 * @param title - The string to convert to camelCase
 * @returns The camelCase formatted string
 *
 * @example
 * // returns "helloWorld"
 * formatTitleToCamelCase("Hello World");
 *
 * @example
 * // returns "thisIsATest"
 * formatTitleToCamelCase("This Is A Test");
 */
function formatTitleToCamelCase(title) {
    return title
        .split(" ")
        .map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join("");
}
/**
 * Converts a camelCase string to a title case string.
 *
 * This function takes a camelCase formatted string and converts it to a title case string,
 * where each word is capitalized and separated by spaces.
 *
 * @param camelCase - The camelCase string to convert
 * @returns The converted title case string
 *
 * @example
 * // Returns "Hello World"
 * formatCamelCaseToTitle("helloWorld")
 *
 * @example
 * // Returns "Test Case Example"
 * formatCamelCaseToTitle("testCaseExample")
 */
function formatCamelCaseToTitle(camelCase) {
    // Add space before capital letters and convert to lowercase
    const withSpaces = camelCase.replace(/([A-Z])/g, " $1").toLowerCase();
    // Capitalize the first letter of each word
    return withSpaces
        .split(" ")
        .map((word) => word.trim())
        .filter((word) => word.length > 0)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
/**
 * Checks if a string contains letters with diacritical marks (accents) or special characters.
 *
 * This function detects strings that contain characters like é, ç, ü, ộ, etc.
 *
 * @param str - The string to check for accented characters
 * @returns True if the string contains accented characters, false otherwise
 *
 * @example
 * // Returns true
 * hasAccentedCharacters("Drâa-Tafilalet")
 *
 * @example
 * // Returns true
 * hasAccentedCharacters("Hội An")
 *
 * @example
 * // Returns false
 * hasAccentedCharacters("Hello World")
 */
function hasAccentedCharacters(str) {
    // Normalize to decomposed form, which separates base characters from diacritical marks
    const normalized = str.normalize('NFD');
    // Check if there are any combining diacritical marks (Unicode range U+0300 to U+036F)
    const hasDiacriticalMarks = /[\u0300-\u036F]/.test(normalized);
    return hasDiacriticalMarks;
}
/**
 * Removes diacritical marks (accents) from a string.
 *
 * This function converts accented characters to their base form.
 * For example, "é" becomes "e", "ç" becomes "c", "ü" becomes "u", etc.
 *
 * @param str - The string with accented characters
 * @returns The string with accents removed
 *
 * @example
 * // Returns "Draa-Tafilalet"
 * removeAccents("Drâa-Tafilalet")
 *
 * @example
 * // Returns "Hoi An"
 * removeAccents("Hội An")
 */
function removeAccents(str) {
    // Normalize to decomposed form, which separates base characters from diacritical marks
    return str
        .replaceAll("đ", "d")
        .replaceAll("Đ", "D") // Remove all combining diacritical marks
        .normalize("NFD")
        .replace(/[\u0300-\u036F]/g, "");
}
