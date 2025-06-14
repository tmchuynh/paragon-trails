import { Star } from "lucide-react";
import { cn } from "../utils";

interface DisplayRatingStarsOptions {
  size?: "sm" | "md" | "lg"; // Size of stars
  showRatingNumber?: boolean; // Whether to display the numeric rating
  containerClassName?: string; // Additional className for the container
  align?: "left" | "center" | "right"; // Alignment of stars
}

/**
 * Displays rating as stars
 *
 * @param rating - Rating value (1-5)
 * @param maxRating - Maximum rating value (default: 5)
 * @param options - Display options
 * @returns JSX element with rating stars
 */
export function displayRatingStars(
  rating: number,
  maxRating: number = 5,
  options?: DisplayRatingStarsOptions,
) {
  // Default options
  const {
    size = "md",
    showRatingNumber = false,
    containerClassName = "",
    align = "center",
  } = options || {};

  // Determine size classes
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  // Determine alignment classes
  const alignClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  // Generate stars
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <Star
        key={i}
        className={cn(
          sizeClasses[size],
          i <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300",
          "inline",
        )}
      />,
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        alignClasses[align],
        containerClassName,
      )}
    >
      {stars}
      {showRatingNumber && (
        <span className="ml-1 font-medium text-sm">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}
