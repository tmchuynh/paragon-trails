// API Services for external data sources
export const API_ENDPOINTS = {
  DUMMY_JSON: 'https://dummyjson.com',
  JSON_PLACEHOLDER: 'https://jsonplaceholder.typicode.com',
  FAKER_API: 'https://fakerapi.it/api/v1',
} as const;

// Generic API fetch wrapper
export async function fetchAPI<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

// Rate limiting helper for API calls
export function createRateLimitedFetch(delay: number = 100) {
  let lastCallTime = 0;
  
  return async function rateLimitedFetch<T>(url: string, options?: RequestInit): Promise<T> {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;
    
    if (timeSinceLastCall < delay) {
      await new Promise(resolve => setTimeout(resolve, delay - timeSinceLastCall));
    }
    
    lastCallTime = Date.now();
    return fetchAPI<T>(url, options);
  };
}

// Cache wrapper for API responses
export class APICache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  
  set(key: string, data: any, ttl: number = 5 * 60 * 1000) { // 5 minutes default
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl,
    });
  }
  
  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }
  
  clear() {
    this.cache.clear();
  }
}

export const apiCache = new APICache();
