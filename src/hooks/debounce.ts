/**
 * Creates a debounced function that delays invoking the provided function until after the specified wait time has elapsed
 * since the last time the debounced function was invoked.
 *
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns A new debounced function.
 */
export const debounce = (
  func: (...args: any[]) => void,
  wait: number
): ((...args: any[]) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
