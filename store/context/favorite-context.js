import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealsId, setFavoriteMealsId] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsId((currentFavsId) => [...currentFavsId, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsId((currentFavsId) =>
      currentFavsId.filter((mealID) => mealID !== id)
    );
  };

  const value = {
    ids: favoriteMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
