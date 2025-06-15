import { API_ENDPOINTS, apiCache, fetchAPI } from "./services";

// JSONPlaceholder API Types
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

interface JSONPlaceholderUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Convert JSONPlaceholder posts to travel blog posts/reviews
export async function fetchTravelPosts(limit?: number): Promise<any[]> {
  const cacheKey = `travel_posts_${limit || "all"}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    let url = `${API_ENDPOINTS.JSON_PLACEHOLDER}/posts`;
    if (limit) {
      url += `?_limit=${limit}`;
    }

    const posts = await fetchAPI<JSONPlaceholderPost[]>(url);

    // Convert to travel-themed content
    const travelPosts = posts.map((post) => ({
      id: post.id,
      userId: post.userId,
      title: convertToTravelTitle(post.title),
      content: convertToTravelContent(post.body),
      excerpt: post.body.substring(0, 150) + "...",
      category: getTravelCategory(),
      tags: getTravelTags(),
      readTime: Math.floor(Math.random() * 10) + 3,
      publishedAt: new Date(
        Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
      ).toISOString(),
      featured: Math.random() > 0.8,
      image: `https://picsum.photos/800/400?random=${post.id}`,
      author: {
        id: post.userId,
        name: `Travel Writer ${post.userId}`,
        avatar: `https://i.pravatar.cc/100?img=${post.userId}`,
      },
    }));

    apiCache.set(cacheKey, travelPosts);
    return travelPosts;
  } catch (error) {
    console.error("Failed to fetch travel posts:", error);
    return [];
  }
}

// Convert JSONPlaceholder comments to reviews
export async function fetchReviews(
  postId?: number,
  limit?: number
): Promise<any[]> {
  const cacheKey = `reviews_${postId || "all"}_${limit || "all"}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    let url = `${API_ENDPOINTS.JSON_PLACEHOLDER}/comments`;
    if (postId) {
      url += `?postId=${postId}`;
    }
    if (limit && !postId) {
      url += `?_limit=${limit}`;
    } else if (limit && postId) {
      url += `&_limit=${limit}`;
    }

    const comments = await fetchAPI<JSONPlaceholderComment[]>(url);

    // Convert to travel reviews
    const reviews = comments.map((comment) => ({
      id: comment.id,
      reviewableId: comment.postId,
      reviewableType: getReviewableType(),
      rating: Math.floor(Math.random() * 5) + 1,
      title: comment.name,
      content: comment.body,
      helpful: Math.floor(Math.random() * 50),
      notHelpful: Math.floor(Math.random() * 10),
      verifiedPurchase: Math.random() > 0.3,
      reviewDate: new Date(
        Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
      ).toISOString(),
      reviewer: {
        name: comment.name.split(" ").slice(0, 2).join(" "),
        email: comment.email,
        avatar: `https://i.pravatar.cc/50?u=${comment.email}`,
        totalReviews: Math.floor(Math.random() * 50) + 1,
        memberSince: new Date(
          Date.now() - Math.random() * 1000 * 24 * 60 * 60 * 1000
        ).toISOString(),
      },
    }));

    apiCache.set(cacheKey, reviews);
    return reviews;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return [];
  }
}

// Fetch photo albums as destination galleries
export async function fetchDestinationGalleries(
  limit?: number
): Promise<any[]> {
  const cacheKey = `galleries_${limit || "all"}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    let url = `${API_ENDPOINTS.JSON_PLACEHOLDER}/albums`;
    if (limit) {
      url += `?_limit=${limit}`;
    }

    const albums = await fetchAPI<JSONPlaceholderAlbum[]>(url);

    // Get photos for each album
    const galleries = await Promise.all(
      albums.map(async (album) => {
        const photos = await fetchAPI<JSONPlaceholderPhoto[]>(
          `${API_ENDPOINTS.JSON_PLACEHOLDER}/albums/${album.id}/photos?_limit=12`
        );

        return {
          id: album.id,
          destinationId: `DEST-${album.userId}`,
          title: convertToDestinationGallery(album.title),
          description: `Beautiful collection of photos from this amazing destination.`,
          totalPhotos: photos.length,
          featured: Math.random() > 0.7,
          photos: photos.map((photo) => ({
            id: photo.id,
            title: photo.title,
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl,
            alt: photo.title,
            caption: photo.title,
            photographer: `Photographer ${Math.floor(Math.random() * 100)}`,
          })),
          createdAt: new Date(
            Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
          ).toISOString(),
        };
      })
    );

    apiCache.set(cacheKey, galleries);
    return galleries;
  } catch (error) {
    console.error("Failed to fetch destination galleries:", error);
    return [];
  }
}

// Fetch todos as user itineraries/checklists
export async function fetchUserItineraries(userId?: number): Promise<any[]> {
  const cacheKey = `itineraries_${userId || "all"}`;
  const cached = apiCache.get(cacheKey);

  if (cached) {
    return cached;
  }

  try {
    let url = `${API_ENDPOINTS.JSON_PLACEHOLDER}/todos`;
    if (userId) {
      url += `?userId=${userId}`;
    }

    const todos = await fetchAPI<JSONPlaceholderTodo[]>(url);

    // Convert to travel itineraries
    const itineraries = todos.map((todo) => ({
      id: todo.id,
      userId: todo.userId,
      title: convertToItineraryItem(todo.title),
      completed: todo.completed,
      category: getItineraryCategory(),
      priority: Math.random() > 0.5 ? "high" : "medium",
      estimatedDuration: `${Math.floor(Math.random() * 4) + 1} hours`,
      cost: Math.floor(Math.random() * 200) + 20,
      currency: "USD",
      location: getRandomLocation(),
      notes: `Important details about this activity.`,
      createdAt: new Date(
        Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
      ).toISOString(),
    }));

    apiCache.set(cacheKey, itineraries);
    return itineraries;
  } catch (error) {
    console.error("Failed to fetch user itineraries:", error);
    return [];
  }
}

// Helper functions for content conversion
function convertToTravelTitle(title: string): string {
  const travelPrefixes = [
    "Amazing Adventures in",
    "Hidden Gems of",
    "Ultimate Guide to",
    "Best Places to Visit in",
    "Travel Tips for",
    "Exploring the Beauty of",
    "Must-See Attractions in",
    "Cultural Experiences in",
  ];

  const prefix =
    travelPrefixes[Math.floor(Math.random() * travelPrefixes.length)];
  return `${prefix} ${title.charAt(0).toUpperCase() + title.slice(1)}`;
}

function convertToTravelContent(body: string): string {
  return body.replace(/\n/g, "\n\n").charAt(0).toUpperCase() + body.slice(1);
}

function getTravelCategory(): string {
  const categories = [
    "Adventure",
    "Culture",
    "Food",
    "Nature",
    "City",
    "Beach",
    "Mountain",
    "Historical",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

function getTravelTags(): string[] {
  const allTags = [
    "travel",
    "adventure",
    "culture",
    "food",
    "nature",
    "photography",
    "tips",
    "guide",
    "destination",
    "vacation",
  ];
  const count = Math.floor(Math.random() * 4) + 2;
  return allTags.slice(0, count);
}

function getReviewableType(): string {
  const types = [
    "hotel",
    "restaurant",
    "attraction",
    "tour",
    "activity",
    "destination",
  ];
  return types[Math.floor(Math.random() * types.length)];
}

function convertToDestinationGallery(title: string): string {
  return `${title.charAt(0).toUpperCase() + title.slice(1)} - Photo Gallery`;
}

function convertToItineraryItem(title: string): string {
  const activities = [
    "Visit local museum",
    "Try traditional cuisine",
    "Explore historic district",
    "Take scenic walk",
    "Book accommodation",
    "Purchase travel insurance",
    "Research local customs",
    "Plan transportation",
    "Check weather forecast",
    "Exchange currency",
  ];

  return activities[Math.floor(Math.random() * activities.length)] || title;
}

function getItineraryCategory(): string {
  const categories = [
    "Sightseeing",
    "Dining",
    "Transportation",
    "Accommodation",
    "Activities",
    "Preparation",
  ];
  return categories[Math.floor(Math.random() * categories.length)];
}

function getRandomLocation(): string {
  const locations = [
    "Downtown Area",
    "Historic District",
    "Waterfront",
    "City Center",
    "Museum Quarter",
    "Shopping District",
    "Beach Area",
    "Mountain View",
  ];
  return locations[Math.floor(Math.random() * locations.length)];
}
