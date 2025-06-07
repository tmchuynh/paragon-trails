import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";

// Options interface for the displayRatingStars function
interface RatingStarsOptions {
  /** Size variant of the stars */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Color of the stars as a CSS color value or Tailwind color class */
  color?: string;
  /** Whether to show the rating number */
  showRatingNumber?: boolean;
  /** Additional class names for the container */
  containerClassName?: string;
  /** Additional class names for the stars */
  starClassName?: string;
  /** Additional class names for the rating number */
  ratingClassName?: string;
  /** Alignment of the stars */
  align?: "left" | "center" | "right";
}

/**
 * Displays a star rating with configurable size, color, and styling
 *
 * @param rating The rating value (e.g., 4.5)
 * @param maxStars Maximum number of stars to display (default: 5)
 * @param options Customization options for the stars
 * @returns React element with the star rating
 */
export const displayRatingStars = (
  rating: number,
  maxStars: number = 5,
  options?: RatingStarsOptions
) => {
  const {
    size = "md",
    color = "yellow-400",
    showRatingNumber = true,
    containerClassName = "",
    starClassName = "",
    ratingClassName = "",
    align = "center",
  } = options || {};

  // Map size variants to Tailwind classes
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  // Prepare the color class - support both Tailwind classes and direct CSS colors
  const colorClass = color.includes("-") ? `text-${color}` : "";
  const colorStyle = !color.includes("-") ? { color } : undefined;

  // Determine alignment class
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar
        key={`full-${i}`}
        className={cn("inline", colorClass, sizeClasses[size], starClassName)}
        style={colorStyle}
      />
    );
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        key="half"
        className={cn("inline", colorClass, sizeClasses[size], starClassName)}
        style={colorStyle}
      />
    );
  }

  // Add empty stars
  const emptyStarsCount = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(
      <FaRegStar
        key={`empty-${i}`}
        className={cn("inline", colorClass, sizeClasses[size], starClassName)}
        style={colorStyle}
      />
    );
  }

  return (
    <div
      className={cn(
        `flex items-center gap-1 my-2 ${alignClass}`,
        containerClassName
      )}
    >
      {stars}
      {showRatingNumber && (
        <span
          className={cn(
            `ml-2 text-gray-400`,
            sizeClasses[size],
            ratingClassName
          )}
        >
          ({rating})
        </span>
      )}
    </div>
  );
};

/**
 * Creates a compact star rating display with smaller stars and no rating number
 */
export const displayCompactStars = (rating: number, maxStars: number = 5) => {
  return displayRatingStars(rating, maxStars, {
    size: "xs",
    showRatingNumber: false,
    align: "left",
    containerClassName: "my-0",
  });
};

/**
 * Creates a large, prominent star rating display
 */
export const displayLargeStars = (rating: number, maxStars: number = 5) => {
  return displayRatingStars(rating, maxStars, {
    size: "xl",
    color: "amber-400",
    containerClassName: "my-4",
  });
};

/**
 * Creates a colored star rating based on the rating value
 */
export const displayColoredStars = (rating: number, maxStars: number = 5) => {
  let color = "red-500";
  if (rating >= 3 && rating < 4) color = "orange-400";
  if (rating >= 4) color = "green-500";

  return displayRatingStars(rating, maxStars, { color });
};
