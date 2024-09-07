import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { getRecipeByMeal } from "../API/RecipeFinder";
import { FoodContext } from "../Context/FoodContext";
import { useContext } from "react";

const CollectionCard = ({ title, img }) => {
  const { setDisplayedRecipes, setSearchQuery } = useContext(FoodContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    const data = await getRecipeByMeal(title);
    setDisplayedRecipes(data.recipes);
    setSearchQuery(title);
    navigate("/Recipe-Finder/recipes");
  };
  return (
    <div className=" relative flex flex-col w-full min-w-[250px] text-center  border-white/19 rounded-[15px] justify-between transition transform hover:scale-105">
      <button onClick={handleClick}>
        <img
          src={img}
          alt={img}
          className="w-full h-[300px] object-cover rounded-[15px]"
        />
        <h1 className=" absolute text-white font-bold text-4xl bottom-3 left-4">
          {title}
        </h1>
      </button>
    </div>
  );
};

CollectionCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
};

export default CollectionCard;
