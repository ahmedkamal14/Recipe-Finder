import { useParams } from "react-router-dom";
import { getSingleRecipe, getRecipeByMeal } from "../API/RecipeFinder";
import { useEffect, useState } from "react";
import Error from "../Pages/Error";
import RecipeCard from "../Components/RecipeCard";

const SingleRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [suggest, setSuggest] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true); // Set loading to true before fetching data
      const data = await getSingleRecipe(id);
      setRecipe(data);
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchRecipe();
  }, [id]);

  useEffect(() => {
    const fetchSuggest = async () => {
      if (recipe) {
        const data = await getRecipeByMeal(recipe.mealType[0]);
        setSuggest(data.recipes.filter((rec) => rec.id !== id));
      }
    };
    fetchSuggest();
  }, [recipe, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [recipe]);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader border-t-4 border-b-4 border-[#E4A951] border-solid rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  if (!recipe) return <Error message="Recipe not found" />;

  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="max-w-[1800px] mx-auto px-4 flex flex-col gap-8 sm:gap-12">
        <div className="info flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
          <div className="text flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {recipe.name}
            </h1>
            <div className="rating text-xl sm:text-2xl md:text-3xl mt-4">
              Rating:{" "}
              <span className="font-semibold text-[#E4A951]">
                {recipe.rating}
              </span>
            </div>
            <div className="mealType mt-4 flex flex-wrap gap-4">
              {recipe.mealType.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#E4A951] text-white px-3 py-1 rounded-md text-sm sm:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-8 border p-4 rounded-xl border-[#E4A951] justify-between max-w-[600px]">
              <div className="flex flex-col gap-1 justify-center items-center flex-1">
                <h1 className="font-semibold text-2xl sm:text-3xl">
                  {recipe.ingredients.length}
                </h1>
                <p className="text-sm sm:text-base">Ingredients</p>
              </div>
              <div className="h-6 sm:h-8 w-[2px] bg-black/80"></div>
              <div className="flex flex-col gap-1 justify-center items-center flex-1">
                <h1 className="font-semibold text-2xl sm:text-3xl">
                  {recipe.prepTimeMinutes}
                </h1>
                <p className="text-sm sm:text-base">Minutes</p>
              </div>
              <div className="h-6 sm:h-8 w-[2px] bg-black/80"></div>
              <div className="flex flex-col gap-1 justify-center items-center flex-1">
                <h1 className="font-semibold text-2xl sm:text-3xl">
                  {recipe.caloriesPerServing}
                </h1>
                <p className="text-sm sm:text-base">Calories</p>
              </div>
            </div>
          </div>
          <div className="image flex-shrink-0 w-full md:w-1/3 lg:w-1/4 border rounded-lg overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="prep flex flex-col gap-8 md:flex-row md:gap-16 mb-12">
          <div className="ingredients flex-1">
            {/* Title */}
            <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[280px] px-3 py-2 font-semibold text-lg md:text-xl lg:text-2xl">
              <h1>INGREDIENTS</h1>
            </div>

            {/* Ingredients */}
            <div className="ing mt-6">
              <ul className="list-disc list-inside text-lg sm:text-xl font-semibold">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="procedure flex-1">
            {/* Title */}
            <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[280px] px-3 py-2 font-semibold text-lg md:text-xl lg:text-2xl">
              <h1>PROCEDURE</h1>
            </div>

            {/* Instructions */}
            <div className="ing mt-6">
              <ol className="list-decimal list-inside text-lg sm:text-xl font-semibold">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="tags">
          {/* Title */}
          <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[280px] px-3 py-2 font-semibold text-lg md:text-xl lg:text-2xl">
            <h1>Recipe Tags</h1>
          </div>

          {/* Tags */}
          <div className="tags mt-6 flex flex-wrap gap-4 text-lg sm:text-xl font-semibold">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="border-black border-[2px] text-black px-4 py-2 rounded-xl text-sm sm:text-base"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="might-like">
          {/* Title */}
          <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[280px] px-3 py-2 font-semibold text-lg md:text-xl lg:text-2xl">
            <h1>YOU MAY ALSO LIKE</h1>
          </div>

          {suggest.length > 0 ? (
            <div className="recipes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-2 text-center mt-12">
              {suggest.slice(0, 5).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center mt-12">
              <h1 className="text-2xl">No Suggested Recipes found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
