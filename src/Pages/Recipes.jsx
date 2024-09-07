import { FoodContext } from "../Context/FoodContext";
import { useContext, useState } from "react";
import RecipeCard from "../Components/RecipeCard";

const Recipes = () => {
  const { displayedRecipes, searchQuery } = useContext(FoodContext);
  const [shown, setShown] = useState(15);

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] flex flex-col m-auto gap-12 px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
          Recipes / {searchQuery ? searchQuery : "All"}
        </h1>
        {displayedRecipes.length > 0 ? (
          <>
            <div className="recipes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-2 text-center">
              {displayedRecipes.slice(0, shown).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>  
            {shown < displayedRecipes.length && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShown(shown + 5)}
                  className="bg-[#EBC76B] font-semibold py-2 sm:py-3 px-4 sm:px-5 rounded-md text-lg sm:text-2xl"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center">
            <h1 className="text-2xl">No recipes found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
