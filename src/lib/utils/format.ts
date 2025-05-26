export const capitalize = (str: string) => {
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

export function formatCamelCaseToTitle(camelCase: string): string {
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
 * @param str - The kebab-case string to convert.
 * @returns The camelCase version of the string.
 *
 * @example
 * formatKebabToCamelCase("code-through-stories") // returns "codeThroughStories"
 * formatKebabToCamelCase("another-example-string") // returns "anotherExampleString"
 */
export function formatKebabToCamelCase(str: string): string {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

export function formatToSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Formats a grade range slug into a human-readable string.
 *
 * @param slug - The slug to format, e.g., "grades-k-2" or "grades-3-5"
 * @returns A formatted string, e.g., "Grades K to 2" or "Grades 3 to 5"
 *
 * @example
 * formatGradeRangeSlug("grades-k-2") // returns "Grades K to 2"
 * formatGradeRangeSlug("grades-3-5") // returns "Grades 3 to 5"
 * formatGradeRangeSlug("invalid-slug") // returns "invalid-slug"
 */
export function formatGradeRangeSlug(slug: string): string {
  // Match "grades-k-2" or "grades-3-5" etc.
  const match = slug.match(/^grades-([a-zA-Z0-9]+)-([a-zA-Z0-9]+)$/);
  if (!match) return slug;
  const [_, start, end] = match;
  // Capitalize K if present, otherwise just use as is
  const formatPart = (part: string) =>
    part.length === 1 ? part.toUpperCase() : part;
  return `Grades ${formatPart(start)}–${formatPart(end)}`;
}