import { TripDay, TripItem, DurationOption } from "@/lib/interfaces/trip-planner";
import { addDays, differenceInDays } from "date-fns";

export function generateTripDays(startDate: Date, endDate: Date): TripDay[] {
  const days: TripDay[] = [];
  const totalDays = differenceInDays(endDate, startDate) + 1;

  for (let i = 0; i < totalDays; i++) {
    const date = addDays(startDate, i);
    days.push({
      id: `day-${i}`,
      date,
      dayNumber: i + 1,
      items: [],
    });
  }

  return days;
}

export function parseDuration(duration: string): number {
  // Convert duration strings like "2 hours", "3-4 hours", "90 minutes" to minutes
  const normalized = duration.toLowerCase();
  
  if (normalized.includes("hour")) {
    const hourMatch = normalized.match(/(\d+(?:\.\d+)?)/);
    if (hourMatch) {
      return parseInt(hourMatch[1]) * 60;
    }
  }
  
  if (normalized.includes("minute")) {
    const minuteMatch = normalized.match(/(\d+)/);
    if (minuteMatch) {
      return parseInt(minuteMatch[1]);
    }
  }
  
  if (normalized.includes("day")) {
    const dayMatch = normalized.match(/(\d+)/);
    if (dayMatch) {
      return parseInt(dayMatch[1]) * 24 * 60; // full day
    }
  }
  
  // Default fallback for unknown formats
  return 120; // 2 hours
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} minutes`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return hours === 1 ? "1 hour" : `${hours} hours`;
  }
  
  return `${hours}h ${remainingMinutes}m`;
}

export const durationOptions: DurationOption[] = [
  { label: "30 minutes", value: 30 },
  { label: "1 hour", value: 60 },
  { label: "1.5 hours", value: 90 },
  { label: "2 hours", value: 120 },
  { label: "2.5 hours", value: 150 },
  { label: "3 hours", value: 180 },
  { label: "4 hours", value: 240 },
  { label: "Half day (5 hours)", value: 300 },
  { label: "Full day (8 hours)", value: 480 },
];

export function calculateTotalDayTime(items: TripItem[]): number {
  return items.reduce((total, item) => {
    const duration = item.customDuration || parseDuration(item.duration);
    return total + duration;
  }, 0);
}

export function getTimeSlotRecommendation(totalMinutes: number): string {
  const hours = totalMinutes / 60;
  
  if (hours <= 2) {
    return "This looks like a light day - consider adding more activities or leaving time for spontaneous exploration!";
  } else if (hours <= 6) {
    return "Perfect balance! Don't forget to schedule time for meals and rest.";
  } else if (hours <= 10) {
    return "This is a packed day! Make sure to include breaks and travel time between activities.";
  } else {
    return "This might be too ambitious for one day. Consider spreading some activities across multiple days.";
  }
}

export function convertToTripItem(
  originalItem: any,
  type: "activity" | "attraction" | "tour"
): TripItem {
  const baseItem = {
    id: originalItem.id,
    type,
    name: originalItem.name || originalItem.title,
    description: originalItem.description,
    image: originalItem.images?.[0] || "",
    location: `${originalItem.location?.city}, ${originalItem.location?.country}`,
    category: originalItem.category,
    originalData: originalItem,
  };

  switch (type) {
    case "activity":
      return {
        ...baseItem,
        duration: originalItem.duration,
        price: originalItem.pricing?.adult,
        currency: originalItem.pricing?.currency,
      };
    
    case "attraction":
      return {
        ...baseItem,
        duration: originalItem.duration?.recommended || "2-3 hours",
        price: originalItem.pricing?.adult,
        currency: originalItem.pricing?.currency,
      };
    
    case "tour":
      return {
        ...baseItem,
        duration: originalItem.duration,
        price: originalItem.pricing?.adult,
        currency: originalItem.pricing?.currency,
      };
    
    default:
      return {
        ...baseItem,
        duration: "2 hours",
      };
  }
}
