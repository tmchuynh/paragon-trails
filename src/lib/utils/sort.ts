export function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export function featuredArray(array: any[]) {
  return array.filter((item) => item?.isPopular === true);
}

/**
 * Filters an array of objects based on a specified property and value.
 *
 * @template T - The type of objects in the array.
 * @template K - The type of property key.
 *
 * @param {T[]} array - The array to filter.
 * @param {K} property - The property key to filter by.
 * @param {T[K]} value - The value to match against.
 * @returns {T[]} A new array containing only the elements where the specified property equals the specified value.
 *
 * @example
 * // Filter courses by difficulty level
 * const beginnerCourses = filterArrayByProperty(courses, 'difficulty', 'beginner');
 */
export function filterArrayByProperty<T, K extends keyof T>(
  array: T[],
  property: K,
  value: T[K]
): T[] {
  return array.filter((item) => item[property] === value);
}

export function sortByLength(
  array: string[],
  ascending: boolean = true
): string[] {
  return [...array].sort((a, b) => {
    const lengthA = a.length;
    const lengthB = b.length;
    return ascending ? lengthA - lengthB : lengthB - lengthA;
  });
}

export function sortByProperty<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    if (a[property] < b[property]) {
      return ascending ? -1 : 1;
    }
    if (a[property] > b[property]) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

export function sortByPropertyByLength<T>(
  array: T[],
  property: keyof T,
  ascending: boolean = true
): T[] {
  return [...array].sort((a, b) => {
    const lengthA = (a[property] as unknown as string)?.length || 0;
    const lengthB = (b[property] as unknown as string)?.length || 0;
    return ascending ? lengthA - lengthB : lengthB - lengthA;
  });
}

/**
 * Groups and sorts an array of objects based on specified properties.
 *
 * @template T - The type of objects in the array.
 *
 * @param {T[]} array - The array to be grouped and sorted.
 * @param {keyof T} groupByProperty - The property key to group the array by.
 * @param {keyof T} [sortByPropertyKey] - Optional property key to sort each group by.
 * @param {boolean} [sortAscending=true] - Whether to sort in ascending order (true) or descending order (false).
 * @param {boolean} [sortByLength=false] - Whether to sort by the length of the property value instead of the value itself.
 * @param {boolean} [groupByLength=false] - Whether to group by the length of the property value instead of the value itself.
 * @param {boolean} [groupAscending=false] - Whether to sort groups in ascending order (true) or descending order (false).
 *
 * @returns {T[]} A new array with elements grouped and sorted according to the specified parameters.
 *
 * @example
 * // Group courses by difficulty and sort each group by date
 * const sortedCourses = groupAndSortByProperties(
 *   courses,
 *   'difficulty',  // Group by difficulty
 *   'publishDate', // Sort each group by publishDate
 *   false          // Sort dates in descending order (newest first)
 * );
 *
 * @example
 * // Group products by category name length and sort by price
 * const sortedProducts = groupAndSortByProperties(
 *   products,
 *   'category',    // Group by category
 *   'price',       // Sort each group by price
 *   true,          // Sort prices in ascending order
 *   false,         // Don't sort by length of price
 *   true,          // Group by length of category name
 *   true           // Sort groups in ascending order (shorter category names first)
 * );
 */
export function groupAndSortByProperties<T>(
  array: T[],
  groupByProperty: keyof T,
  sortByPropertyKey?: keyof T,
  sortAscending: boolean = true,
  sortByLength: boolean = false,
  groupByLength: boolean = false,
  groupAscending: boolean = false
): T[] {
  // Group the array by the specified property or by the length of the property
  const grouped = array.reduce((acc, item) => {
    const key = groupByLength
      ? (item[groupByProperty] as unknown as string)?.length || 0
      : (item[groupByProperty] as string | number);

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string | number, T[]>);

  // Sort the group keys to ensure the groups are processed in the correct order
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    if (groupByLength) {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      return groupAscending ? numA - numB : numB - numA;
    } else {
      // Try to compare as numbers if possible, else as strings
      const isNumA = !isNaN(Number(a));
      const isNumB = !isNaN(Number(b));
      if (isNumA && isNumB) {
        return groupAscending ? Number(a) - Number(b) : Number(b) - Number(a);
      }
      // Otherwise, compare as strings
      return groupAscending ? a.localeCompare(b) : b.localeCompare(a);
    }
  });

  // Sort each group by the specified property or by the length of the property
  const sortedGroups = sortedKeys.map((key) => {
    if (sortByLength) {
      return [...grouped[key]].sort((a, b) => {
        const lengthA =
          (a[sortByPropertyKey!] as unknown as string)?.length || 0;
        const lengthB =
          (b[sortByPropertyKey!] as unknown as string)?.length || 0;
        return sortAscending ? lengthA - lengthB : lengthB - lengthA;
      });
    } else if (sortByPropertyKey) {
      return [...grouped[key]].sort((a, b) => {
        const valueA = a[sortByPropertyKey];
        const valueB = b[sortByPropertyKey];

        // Check if the property is a date in the format YYYY-MM-DD
        if (
          typeof valueA === "string" &&
          typeof valueB === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueA) &&
          /^\d{4}-\d{2}-\d{2}$/.test(valueB)
        ) {
          const dateA = new Date(valueA);
          const dateB = new Date(valueB);
          return sortAscending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        // Default sorting for non-date properties
        if (valueA < valueB) {
          return sortAscending ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortAscending ? 1 : -1;
        }
        return 0;
      });
    } else {
      return grouped[key]; // If no sortByPropertyKey is provided, return the group as is
    }
  });

  // Flatten the sorted groups back into a single array
  return sortedGroups.flat();
}

export function uniqueArray(arr: string[]) {
  return Array.from(new Set(arr));
}

export function alphabeticalSort(
  array: string[],
  ascending: boolean = true
): string[] {
  return [...array].sort((a, b) => {
    return ascending ? a.localeCompare(b) : b.localeCompare(a);
  });
}

/**
 * Sorts an array of objects containing date strings based on their dates.
 * 
 * @param array - The array of objects containing date strings to sort.
 * @param ascending - Determines the sort order. If true (default), sorts in ascending order (oldest first).
 *                    If false, sorts in descending order (newest first).
 * @returns A new sorted array without modifying the original array.
 * 
 * @example
 * ```typescript
 * // Sort blog posts by date (oldest first)
 * const sortedPosts = sortByDate(posts);
 * 
 * // Sort blog posts by date (newest first)
 * const newestFirstPosts = sortByDate(posts, false);
 * ```
 */
export function sortByDate(
  array: { date: string }[],
  ascending: boolean = true
): { date: string }[] {
  return [...array].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });
}

/**
 * Sorts an array of objects containing price strings in ascending or descending order.
 * 
 * @param array - An array of objects, each containing a 'price' property with string value
 * @param ascending - A boolean flag indicating sort direction (true for ascending, false for descending)
 * @returns A new sorted array without modifying the original array
 * 
 * @example
 * // Sort prices in ascending order
 * sortByPrice([{ price: "$10.99" }, { price: "$5.99" }]);
 * // Returns [{ price: "$5.99" }, { price: "$10.99" }]
 * 
 * @example
 * // Sort prices in descending order
 * sortByPrice([{ price: "$10.99" }, { price: "$5.99" }], false);
 * // Returns [{ price: "$10.99" }, { price: "$5.99" }]
 */
export function sortByPrice(
  array: { price: string }[],
  ascending: boolean = true
): { price: string }[] {
  return [...array].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
    const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
    return ascending ? priceA - priceB : priceB - priceA;
  });
}

/**
 * Sorts an array of string durations in ascending order.
 * 
 * This function converts string representations of time durations into minutes
 * and then sorts them from shortest to longest.
 * 
 * Handles the following formats:
 * - Minutes (e.g., "30 minutes", "45 minute")
 * - Hours (e.g., "2 hours", "1 hour")
 * - Days (e.g., "2 days", "1 day")
 * - Special case "Full day" (interpreted as 8 hours)
 * 
 * @param arr - Array of string durations to be sorted
 * @returns A new array with the durations sorted in ascending order
 * 
 * @example
 * sortDurations(["2 hours", "30 minutes", "Full day"])
 * // Returns: ["30 minutes", "2 hours", "Full day"]
 */
export function sortDurations(arr: string[]): string[] {
  const toMinutes = (str: string): number => {
    const lower = str.toLowerCase().trim();

    if (lower === "full day") return 8 * 60; // assuming full day = 8 hours

    if (lower.includes("minute")) {
      const match = parseFloat(lower);
      return isNaN(match) ? 0 : match;
    }

    if (lower.includes("hour")) {
      const match = parseFloat(lower);
      return isNaN(match) ? 0 : match * 60;
    }

    if (lower.includes("day")) {
      const match = parseFloat(lower);
      return isNaN(match) ? 0 : match * 24 * 60;
    }

    return 0; // fallback
  };

  return arr.sort((a, b) => toMinutes(a) - toMinutes(b));
}
