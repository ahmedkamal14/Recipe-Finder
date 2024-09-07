import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllRecipes, getAllTags } from "../API/RecipeFinder";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  const fetchRecipes = async () => {
    const data = await getAllRecipes();
    setRecipes(data.recipes);
    setDisplayedRecipes(data.recipes);
  };

  const fetchTags = async () => {
    const data = await getAllTags();
    setTags(data);
  };

  useEffect(() => {
    fetchRecipes();
    fetchTags();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        recipes,
        tags,
        searchQuery,
        setSearchQuery,
        displayedRecipes,
        setDisplayedRecipes,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

FoodProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
