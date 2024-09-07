import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PopularCard = ({ recipe }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
      {/* Image Section */}
      <div className="img w-full sm:w-52">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="rounded-[15px] w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-black flex items-center text-center sm:text-left">
        <Link to={`/Recipe-Finder/singlerecipe/${recipe.id}`}>
          <h2 className="text-[20px] sm:text-[25px] font-bold hover:scale-125 hover:translate-x-2 sm:hover:translate-x-10 transition-all duration-300 hover:underline">
            {recipe.name}
          </h2>
        </Link>
      </div>
    </div>
  );
};

PopularCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default PopularCard;
