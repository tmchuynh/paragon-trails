# NotFoundContext Documentation

## Overview

The `NotFoundContext` would provide 404 error handling and navigation management for the Paragon Trails application. This context would manage not-found states, error pages, and redirect logic when users navigate to invalid routes or resources.

> **Note:** The `NotFoundContext.tsx` file was not provided in the attachments, so this documentation outlines the expected functionality and implementation patterns based on the file name and common use cases in React applications.

## Expected Features

- 404 error state management
- Custom not-found page rendering
- Breadcrumb navigation for lost users
- Suggested content or alternative routes
- Analytics tracking for 404 errors
- Redirect management after errors

## Typical Types

### NotFoundState Interface
```typescript
interface NotFoundState {
  isNotFound: boolean;
  requestedPath: string;
  errorType: '404' | 'network' | 'permission' | 'unknown';
  timestamp: number;
  suggestions: string[];
  previousPath?: string;
}
```

### NotFoundContextType Interface
```typescript
interface NotFoundContextType {
  state: NotFoundState;
  setNotFound: (path: string, errorType?: string) => void;
  clearNotFound: () => void;
  addSuggestion: (path: string) => void;
  trackError: (path: string, errorType: string) => void;
}
```

## Expected Components

### NotFoundProvider

The main context provider component that would manage not-found states.

**Expected Props:**
- `children: ReactNode` - Child components to wrap
- `fallbackComponent?: React.ComponentType` - Custom 404 component

## Expected Usage Patterns

### Setup
```tsx
import { NotFoundProvider } from '@/context/NotFoundContext';

function App() {
  return (
    <NotFoundProvider>
      <YourAppContent />
    </NotFoundProvider>
  );
}
```

### Using the Hook
```tsx
import { useNotFound } from '@/context/NotFoundContext';

function PageComponent() {
  const { state, setNotFound, clearNotFound } = useNotFound();

  useEffect(() => {
    // Check if resource exists
    const checkResource = async () => {
      try {
        const resource = await fetchResource(id);
        if (!resource) {
          setNotFound(window.location.pathname, '404');
        }
      } catch (error) {
        setNotFound(window.location.pathname, 'network');
      }
    };

    checkResource();
  }, [id]);

  if (state.isNotFound) {
    return <NotFoundPage />;
  }

  return <YourPageContent />;
}
```

## Common Implementation Patterns

### Route-Level 404 Handling
```tsx
function RouteGuard({ children, resourceId }) {
  const { setNotFound } = useNotFound();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResource(resourceId)
      .then(setResource)
      .catch(() => setNotFound(location.pathname))
      .finally(() => setLoading(false));
  }, [resourceId]);

  if (loading) return <Loading />;
  if (!resource) return <NotFoundPage />;
  
  return children;
}
```

### Dynamic Content 404
```tsx
function TourDetailsPage({ tourId }) {
  const { setNotFound, clearNotFound } = useNotFound();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetchTour(tourId)
      .then((data) => {
        if (data) {
          setTour(data);
          clearNotFound();
        } else {
          setNotFound(`/tours/${tourId}`, '404');
        }
      });
  }, [tourId]);

  // Component logic...
}
```

### Search Results 404
```tsx
function SearchResults({ query }) {
  const { setNotFound, addSuggestion } = useNotFound();
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchAPI(query).then((data) => {
      if (data.length === 0) {
        setNotFound(`/search?q=${query}`, '404');
        addSuggestion('/tours');
        addSuggestion('/hotels');
      } else {
        setResults(data);
      }
    });
  }, [query]);

  // Component logic...
}
```

## Expected Methods

### setNotFound(path: string, errorType?: string): void
Marks the current route as not found and sets error context.

### clearNotFound(): void
Clears the not-found state when navigation succeeds.

### addSuggestion(path: string): void
Adds suggested navigation paths for users.

### trackError(path: string, errorType: string): void
Tracks 404 errors for analytics and debugging.

## Integration with Navigation

### Next.js Router Integration
```tsx
import { useRouter } from 'next/router';
import { useNotFound } from '@/context/NotFoundContext';

function useRouteValidation() {
  const router = useRouter();
  const { setNotFound, clearNotFound } = useNotFound();

  const validateRoute = useCallback((path: string) => {
    // Route validation logic
    const isValidRoute = checkRouteExists(path);
    
    if (!isValidRoute) {
      setNotFound(path, '404');
    } else {
      clearNotFound();
    }
  }, [setNotFound, clearNotFound]);

  useEffect(() => {
    validateRoute(router.asPath);
  }, [router.asPath, validateRoute]);
}
```

### API Error Handling
```tsx
function useAPIErrorHandler() {
  const { setNotFound } = useNotFound();

  const handleAPIError = useCallback((error, requestPath) => {
    if (error.status === 404) {
      setNotFound(requestPath, '404');
    } else if (error.status >= 500) {
      setNotFound(requestPath, 'network');
    }
  }, [setNotFound]);

  return { handleAPIError };
}
```

## Expected Error Types

- **404**: Resource not found
- **network**: Network or server errors
- **permission**: Access denied
- **unknown**: Unexpected errors

## Analytics Integration

```typescript
// Expected analytics tracking
const trackError = (path: string, errorType: string) => {
  analytics.track('Page Not Found', {
    path,
    errorType,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    referrer: document.referrer
  });
};
```

## SEO Considerations

- Proper HTTP status codes (404)
- Meta tags for not-found pages
- Sitemap integration
- Canonical URL handling

## Recovery Patterns

### Automatic Suggestions
```tsx
function NotFoundPage() {
  const { state } = useNotFound();
  
  const suggestions = [
    '/tours',
    '/hotels', 
    '/flights',
    '/'
  ];

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>The page "{state.requestedPath}" could not be found.</p>
      
      <h2>Try these instead:</h2>
      <ul>
        {suggestions.map(path => (
          <li key={path}>
            <Link href={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Search Integration
```tsx
function NotFoundWithSearch() {
  const { state } = useNotFound();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Let's help you find what you're looking for:</p>
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tours, hotels, flights..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
```

## File Location

Expected location: `/home/tmchuynh/Documents/Projects/paragon-trails/src/context/NotFoundContext.tsx`

**Note:** This documentation is based on expected functionality. The actual implementation may vary depending on the specific requirements of the Paragon Trails application.
