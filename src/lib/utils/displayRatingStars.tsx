import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const displayRatingStars = (rating: number, maxStars: number = 5) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="inline text-yellow-400" />);
  }

  // Add half star if needed
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="inline text-yellow-400" />);
  }

  // Add empty stars
  const emptyStarsCount = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} className="inline text-yellow-400" />
    );
  }

  return (
    <div className="flex justify-center items-center gap-1 my-2">
      {stars}
      <span className="mt-1 ml-2 text-gray-400">({rating})</span>
    </div>
  );
};
