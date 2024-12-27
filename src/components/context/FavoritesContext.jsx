import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") || "{}");
  });

  function handleFavorite(itemName) {
    setFavorites((prev) => {
      return {
        ...prev,
        [itemName]: !prev[itemName],
      };
    });
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return <FavoritesContext.Provider value={{ favorites, handleFavorite }}>{children}</FavoritesContext.Provider>;
}

export const useFavorites = () => useContext(FavoritesContext);
