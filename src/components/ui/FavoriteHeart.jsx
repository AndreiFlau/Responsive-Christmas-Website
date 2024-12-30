import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

function FavoriteHeart({ itemName }) {
  const { favorites, handleFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);

  function handleClick() {
    handleFavorite(itemName);
    setIsAnimating(true);
  }

  function handleAnimationEnd() {
    setIsAnimating(false);
  }

  return (
    <button
      className={`heart ${isAnimating ? "heart-animate" : ""}`}
      onClick={() => handleClick(itemName)}
      onAnimationEnd={handleAnimationEnd}
      aria-label={favorites[itemName] ? "Remove from favorites" : "Add to favorites"}
    >
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.00002 1.82922C8.09203 0.994304 6.90353 0.530923 5.67002 0.530884C5.01714 0.531564 4.37084 0.66135 3.76831 0.912774C3.16577 1.1642 2.61891 1.5323 2.15919 1.99588C0.198358 3.96505 0.199191 7.04505 2.16086 9.00588L8.27086 15.1159C8.41252 15.3651 8.68586 15.5259 9.00002 15.5259C9.12902 15.5246 9.25593 15.4931 9.37055 15.4339C9.48518 15.3748 9.58432 15.2895 9.66002 15.1851L15.8392 9.00588C17.8009 7.04422 17.8009 3.96505 15.8375 1.99255C15.378 1.52981 14.8316 1.16246 14.2297 0.91162C13.6277 0.660775 12.9821 0.531383 12.33 0.530884C11.0965 0.531085 9.90811 0.994444 9.00002 1.82922Z"
          fill="#DC3845"
          style={{
            fill: favorites[itemName] ? "#DC3845" : "none",
            stroke: "#DC3845",
            strokeWidth: "1",
          }}
        />
      </svg>
    </button>
  );
}

export default FavoriteHeart;
