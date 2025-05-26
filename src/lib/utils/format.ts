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
export const capitalize = (str: string): string => {
  if (!str) return "";

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
      if (
        index === 0 ||
        (index === arr.length - 1 && arr.length > 1) ||
        !wordsToIgnore.has(lowerWord)
      ) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return lowerWord;
    });

  return capitalizedWords.join(" ");
};

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

export const formatTime = (time: string): string => {
  const date = new Date(`1970-01-01T${time}`);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDuration = (duration: string): string => {
  const [weeks, days] = duration.split(" ");
  return `${weeks} weeks ${days} days`;
};

export function formatNumberToCurrency(
  value: number,
  min?: number,
  max?: number
): string {
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
export function formatKebabToCamelCase(str: string): string {
  return str
    .split("-")

    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return (
        word
          .replaceAll(/[^a-z0-9]+/g, "")
          .charAt(0)
          .toUpperCase() + word.slice(1).replaceAll(/[^a-z0-9]+/g, "")
      );
    })
    .join("");
}

export function formatToSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9&+\/@$\(\)]+/g, "-")
    .replace(/^-|-$/g, "");
}
