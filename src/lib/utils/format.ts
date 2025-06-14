/**
 * Capitalizes the first letter of a string and converts the rest to lowercase.
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string | string[]): string {
  if (!str) return str;

  if (Array.isArray(str)) {
    return str.map((s) => capitalize(s)).join(" ");
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string from kebab-case or camelCase to Title Case.
 * @param str - The string to convert to title case
 * @returns The title case string
 */
export function toTitleCase(str: string): string {
  if (!str) return str;

  return str
    .replace(/[-_]/g, " ") // Replace hyphens and underscores with spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters in camelCase
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

/**
 * Formats a number as currency with proper formatting.
 * @param amount - The amount to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale for formatting (default: 'en-US')
 * @returns The formatted currency string
 */
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

/**
 * Formats a date string or Date object to a readable format.
 * @param date - The date to format
 * @param locale - The locale for formatting (default: 'en-US')
 * @returns The formatted date string
 */
export function formatDate(
  date: string | Date,
  locale: string = "en-US",
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed.
 * @param str - The string to truncate
 * @param maxLength - The maximum length before truncation
 * @returns The truncated string
 */
export function truncate(str: string, maxLength: number): string {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + "...";
}

/**
 * Converts a string to a URL-friendly slug format.
 * @param str - The string to convert to a slug
 * @returns The slug string
 */
export function formatToSlug(str: string): string {
  if (!str) return str;

  return str
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // Replace spaces and non-word characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}

export function kebabToTitle(str: string): string {
  if (!str) return str;

  return str
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}
