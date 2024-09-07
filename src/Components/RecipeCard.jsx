import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/Recipe-Finder/singlerecipe/${recipe.id}`}>
      <div className="container flex flex-col gap-3 w-[250px] pb-3 border-[#EBC76B] border rounded-[15px] hover:scale-110 transition-all duration-300 m-auto">
        <div className="image">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="rounded-t-[15px]"
          />
        </div>
        <div className="text text-center px-3">
          <h1 className="text-[18px] font-bold">{recipe.name}</h1>
        </div>
      </div>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
