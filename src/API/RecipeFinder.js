import axios from "axios";

export const getAllRecipes = async (limit = 30) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/recipes?limit=${limit}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTags = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/recipes/tags", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipesByTag = async (tag) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/recipes/tag/${tag}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleRecipe = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecipeByMeal = async (meal) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/recipes/meal-type/${meal}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/recipes/search?q=${query}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
