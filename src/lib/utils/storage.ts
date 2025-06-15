/**
 * Safe localStorage operations that handle SSR and potential errors
 */

export const storage = {
  /**
   * Get an item from localStorage
   * @param key The key to retrieve
   * @returns The parsed value or null if not found/error
   */
  getItem: <T = any>(key: string): T | null => {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage (key: ${key}):`, error);
      return null;
    }
  },

  /**
   * Set an item in localStorage
   * @param key The key to set
   * @param value The value to store
   * @returns true if successful, false otherwise
   */
  setItem: (key: string, value: any): boolean => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to localStorage (key: ${key}):`, error);
      return false;
    }
  },

  /**
   * Remove an item from localStorage
   * @param key The key to remove
   * @returns true if successful, false otherwise
   */
  removeItem: (key: string): boolean => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing from localStorage (key: ${key}):`, error);
      return false;
    }
  },

  /**
   * Clear all localStorage data
   * @returns true if successful, false otherwise
   */
  clear: (): boolean => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("Error clearing localStorage:", error);
      return false;
    }
  },
};

export default storage;
