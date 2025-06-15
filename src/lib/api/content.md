# Content Service Documentation

This file documents the content management API service provided in `content.ts`.

## Overview

The Content Service handles travel-related content including blog posts, reviews, destination galleries, and user itineraries. It transforms data from JSONPlaceholder API into travel-themed content for the Paragon Trails application.

## Data Sources

- **Primary API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - Posts → Travel Blog Posts
  - Comments → Travel Reviews
  - Albums/Photos → Destination Galleries
  - Todos → User Itineraries
- **Caching**: 5-minute TTL for all operations

## External API Interfaces

### JSONPlaceholder Types

```typescript
interface JSONPlaceholderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface JSONPlaceholderComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface JSONPlaceholderAlbum {
  userId: number;
  id: number;
  title: string;
}

interface JSONPlaceholderPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface JSONPlaceholderTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

## API Functions

### fetchTravelPosts

```typescript
async function fetchTravelPosts(limit?: number): Promise<any[]>
```

**Purpose**: Retrieves travel blog posts and articles.

**Parameters**:
- `limit` (optional): Maximum number of posts to return

**Returns**: Array of enhanced travel blog posts

**Transformed Fields**:
```typescript
{
  id: number;
  userId: number;
  title: string; // Enhanced with travel prefixes
  content: string; // Formatted from original body
  excerpt: string; // First 150 characters + "..."
  category: string; // Random travel category
  tags: string[]; // Travel-related tags
  readTime: number; // Estimated reading time (3-12 minutes)
  publishedAt: string; // Random date within last year
  featured: boolean; // 20% chance of being featured
  image: string; // Random image from Picsum
  author: {
    id: number;
    name: string; // Generated author name
    avatar: string; // Generated avatar
  };
}
```

**Categories**: Adventure, Culture, Food, Nature, City, Beach, Mountain, Historical

**Example**:
```typescript
// Get latest 10 travel posts
const posts = await fetchTravelPosts(10);

// Display posts
posts.forEach(post => {
  console.log(`${post.title} - ${post.category}`);
  console.log(`Read time: ${post.readTime} minutes`);
  console.log(`Tags: ${post.tags.join(', ')}`);
});
```

### fetchReviews

```typescript
async function fetchReviews(postId?: number, limit?: number): Promise<any[]>
```

**Purpose**: Retrieves travel reviews and ratings for various services.

**Parameters**:
- `postId` (optional): Get reviews for specific post/item
- `limit` (optional): Maximum number of reviews to return

**Returns**: Array of travel reviews

**Transformed Fields**:
```typescript
{
  id: number;
  reviewableId: number; // ID of reviewed item
  reviewableType: string; // hotel, restaurant, attraction, tour, activity, destination
  rating: number; // 1-5 stars
  title: string; // Review title
  content: string; // Review content
  helpful: number; // Number of helpful votes (0-50)
  notHelpful: number; // Number of not helpful votes (0-10)
  verifiedPurchase: boolean; // 70% chance of verification
  reviewDate: string; // Random date within last year
  reviewer: {
    name: string; // Generated from original name
    email: string; // Original email
    avatar: string; // Generated avatar
    totalReviews: number; // Random 1-50
    memberSince: string; // Random date up to 3 years ago
  };
}
```

**Reviewable Types**: hotel, restaurant, attraction, tour, activity, destination

**Example**:
```typescript
// Get all reviews
const allReviews = await fetchReviews();

// Get reviews for specific item
const hotelReviews = await fetchReviews(1, 5);

// Display reviews
allReviews.forEach(review => {
  console.log(`${review.rating}★ - ${review.title}`);
  console.log(`Type: ${review.reviewableType}`);
  console.log(`Helpful: ${review.helpful}/${review.notHelpful}`);
});
```

### fetchDestinationGalleries

```typescript
async function fetchDestinationGalleries(limit?: number): Promise<any[]>
```

**Purpose**: Retrieves photo galleries for travel destinations.

**Parameters**:
- `limit` (optional): Maximum number of galleries to return

**Returns**: Array of destination galleries with photos

**Transformed Fields**:
```typescript
{
  id: number;
  destinationId: string; // Generated as "DEST-{userId}"
  title: string; // Enhanced gallery title
  description: string; // Generated description
  totalPhotos: number; // Number of photos in gallery
  featured: boolean; // 30% chance of being featured
  photos: Array<{
    id: number;
    title: string;
    url: string; // High-resolution image
    thumbnailUrl: string; // Thumbnail image
    alt: string; // Alt text for accessibility
    caption: string; // Photo caption
    photographer: string; // Generated photographer name
  }>;
  createdAt: string; // Random date within last year
}
```

**Example**:
```typescript
// Get destination galleries
const galleries = await fetchDestinationGalleries(5);

// Display gallery info
galleries.forEach(gallery => {
  console.log(`${gallery.title} - ${gallery.totalPhotos} photos`);
  console.log(`Destination: ${gallery.destinationId}`);
  
  // Display first few photos
  gallery.photos.slice(0, 3).forEach(photo => {
    console.log(`  - ${photo.title} by ${photo.photographer}`);
  });
});
```

### fetchUserItineraries

```typescript
async function fetchUserItineraries(userId?: number): Promise<any[]>
```

**Purpose**: Retrieves user travel itineraries and checklists.

**Parameters**:
- `userId` (optional): Get itineraries for specific user

**Returns**: Array of itinerary items

**Transformed Fields**:
```typescript
{
  id: number;
  userId: number;
  title: string; // Travel activity title
  completed: boolean; // From original todo
  category: string; // Sightseeing, Dining, Transportation, etc.
  priority: string; // "high" or "medium" priority
  estimatedDuration: string; // "1-4 hours"
  cost: number; // $20-220
  currency: string; // "USD"
  location: string; // Generated location
  notes: string; // Activity notes
  createdAt: string; // Random date within last 30 days
}
```

**Categories**: Sightseeing, Dining, Transportation, Accommodation, Activities, Preparation

**Locations**: Downtown Area, Historic District, Waterfront, City Center, Museum Quarter, Shopping District, Beach Area, Mountain View

**Example**:
```typescript
// Get user's itinerary
const itinerary = await fetchUserItineraries(1);

// Display itinerary
itinerary.forEach(item => {
  const status = item.completed ? '✅' : '⏰';
  console.log(`${status} ${item.title}`);
  console.log(`  Category: ${item.category}`);
  console.log(`  Duration: ${item.estimatedDuration}`);
  console.log(`  Cost: $${item.cost}`);
  console.log(`  Location: ${item.location}`);
});
```

## Content Transformation Helpers

### Travel Title Enhancement

```typescript
function convertToTravelTitle(title: string): string
```

**Prefixes Used**:
- "Amazing Adventures in"
- "Hidden Gems of"
- "Ultimate Guide to"
- "Best Places to Visit in"
- "Travel Tips for"
- "Exploring the Beauty of"
- "Must-See Attractions in"
- "Cultural Experiences in"

### Content Categories

```typescript
function getTravelCategory(): string
```

**Available Categories**: Adventure, Culture, Food, Nature, City, Beach, Mountain, Historical

### Tag Generation

```typescript
function getTravelTags(): string[]
```

**Available Tags**: travel, adventure, culture, food, nature, photography, tips, guide, destination, vacation

### Itinerary Activities

```typescript
function convertToItineraryItem(title: string): string
```

**Activity Types**:
- Visit local museum
- Try traditional cuisine
- Explore historic district
- Take scenic walk
- Book accommodation
- Purchase travel insurance
- Research local customs
- Plan transportation
- Check weather forecast
- Exchange currency

## Caching Strategy

### Cache Keys
- Travel posts: `travel_posts_{limit || "all"}`
- Reviews: `reviews_{postId || "all"}_{limit || "all"}`
- Galleries: `galleries_{limit || "all"}`
- Itineraries: `itineraries_{userId || "all"}`

### Cache TTL
- Default: 5 minutes for all operations
- Automatic cache invalidation on TTL expiry

## Usage Examples

### Blog/Content Display

```typescript
import { fetchTravelPosts, fetchReviews } from './content';

// Blog component
const TravelBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const travelPosts = await fetchTravelPosts(12);
      setPosts(travelPosts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;

  return (
    <div className="travel-blog">
      {posts.map(post => (
        <article key={post.id} className="blog-post">
          <img src={post.image} alt={post.title} />
          <div className="post-content">
            <span className="category">{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="post-meta">
              <span>By {post.author.name}</span>
              <span>{post.readTime} min read</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
```

### Review System

```typescript
import { fetchReviews } from './content';

// Reviews component
const ReviewsList = ({ itemId, itemType }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const reviewData = await fetchReviews(itemId, 10);
      // Filter by type if needed
      const filteredReviews = reviewData.filter(
        review => review.reviewableType === itemType
      );
      setReviews(filteredReviews);
    };
    loadReviews();
  }, [itemId, itemType]);

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="reviews-list">
      <h3>Reviews ({reviews.length})</h3>
      {reviews.map(review => (
        <div key={review.id} className="review">
          <div className="review-header">
            <img src={review.reviewer.avatar} alt={review.reviewer.name} />
            <div>
              <h4>{review.reviewer.name}</h4>
              <div className="rating">{renderStars(review.rating)}</div>
              <span className="review-date">{review.reviewDate}</span>
            </div>
          </div>
          <h5>{review.title}</h5>
          <p>{review.content}</p>
          <div className="review-footer">
            {review.verifiedPurchase && (
              <span className="verified">✓ Verified Purchase</span>
            )}
            <div className="helpful">
              Helpful: {review.helpful} | Not helpful: {review.notHelpful}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
```

### Photo Gallery

```typescript
import { fetchDestinationGalleries } from './content';

// Gallery component
const DestinationGallery = ({ destinationId }) => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const loadGalleries = async () => {
      const allGalleries = await fetchDestinationGalleries();
      const destGalleries = allGalleries.filter(
        gallery => gallery.destinationId === destinationId
      );
      setGalleries(destGalleries);
    };
    loadGalleries();
  }, [destinationId]);

  return (
    <div className="destination-galleries">
      {galleries.map(gallery => (
        <div key={gallery.id} className="gallery">
          <h3>{gallery.title}</h3>
          <p>{gallery.description}</p>
          <div className="photo-grid">
            {gallery.photos.map(photo => (
              <div key={photo.id} className="photo-item">
                <img 
                  src={photo.thumbnailUrl} 
                  alt={photo.alt}
                  onClick={() => openLightbox(photo.url)}
                />
                <div className="photo-caption">
                  <p>{photo.caption}</p>
                  <small>by {photo.photographer}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
```

### Itinerary Management

```typescript
import { fetchUserItineraries } from './content';

// Itinerary component
const UserItinerary = ({ userId }) => {
  const [itinerary, setItinerary] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const loadItinerary = async () => {
      const items = await fetchUserItineraries(userId);
      setItinerary(items);
    };
    loadItinerary();
  }, [userId]);

  const filteredItems = itinerary.filter(item => {
    if (filter === 'completed') return item.completed;
    if (filter === 'pending') return !item.completed;
    return true;
  });

  const totalCost = itinerary.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="user-itinerary">
      <div className="itinerary-header">
        <h2>Travel Itinerary</h2>
        <div className="summary">
          <span>Total items: {itinerary.length}</span>
          <span>Completed: {itinerary.filter(i => i.completed).length}</span>
          <span>Total cost: ${totalCost}</span>
        </div>
      </div>

      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'pending' ? 'active' : ''}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="itinerary-items">
        {filteredItems.map(item => (
          <div key={item.id} className={`itinerary-item ${item.completed ? 'completed' : ''}`}>
            <div className="item-header">
              <h4>{item.title}</h4>
              <span className={`priority ${item.priority}`}>
                {item.priority}
              </span>
            </div>
            <div className="item-details">
              <span className="category">{item.category}</span>
              <span className="duration">{item.estimatedDuration}</span>
              <span className="location">{item.location}</span>
              <span className="cost">${item.cost}</span>
            </div>
            <p className="notes">{item.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
```

## Performance Considerations

### Batch Loading
```typescript
// Load multiple content types efficiently
const loadAllContent = async () => {
  const [posts, reviews, galleries] = await Promise.all([
    fetchTravelPosts(10),
    fetchReviews(undefined, 20),
    fetchDestinationGalleries(5)
  ]);
  
  return { posts, reviews, galleries };
};
```

### Pagination Implementation
```typescript
// Implement pagination for large content lists
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 12;

// Calculate items to display
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentPosts = allPosts.slice(startIndex, endIndex);
```

### Image Optimization
```typescript
// Optimize image loading
const optimizeImageUrl = (url: string, width: number = 800) => {
  return url.replace(/\?.*/, `?w=${width}&auto=format&fit=crop&q=60`);
};
```

## Best Practices

1. **Use appropriate limits** for content fetching to avoid performance issues
2. **Implement lazy loading** for photo galleries
3. **Cache content** that doesn't change frequently
4. **Provide loading states** for all async operations
5. **Handle empty states** gracefully
6. **Implement search/filter functionality** for large content sets
7. **Use pagination** for large lists
8. **Optimize images** for different screen sizes
9. **Implement error boundaries** for content components
10. **Consider content accessibility** (alt texts, proper headings, etc.)

## Error Handling

All content functions return empty arrays on error, allowing components to handle empty states gracefully:

```typescript
try {
  const posts = await fetchTravelPosts(10);
  // Handle successful response
} catch (error) {
  console.error('Failed to load posts:', error);
  // Show error message or fallback content
}
```
