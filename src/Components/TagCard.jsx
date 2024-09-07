import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { getRecipesByTag } from "../API/RecipeFinder";
import { FoodContext } from "../Context/FoodContext";
import { useContext } from "react";

const TagCard = ({ name, img }) => {
  const { setDisplayedRecipes, setSearchQuery } = useContext(FoodContext);
  const navigate = useNavigate();

  const handleTagClick = async () => {
    const data = await getRecipesByTag(name);
    setDisplayedRecipes(data.recipes);
    setSearchQuery(name);
    navigate("/Recipe-Finder/recipes");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="flex flex-col justify-center items-center"
        onClick={handleTagClick}
      >
        <img
          src={img}
          alt={name}
          className="h-[200px] object-cover rounded-full hover:scale-110 transition-all duration-300"
        />
        <h2 className="text-[18px] lg:text-[22px] font-semibold mt-6">
          {name}
        </h2>
      </button>
    </div>
  );
};

TagCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default TagCard;
