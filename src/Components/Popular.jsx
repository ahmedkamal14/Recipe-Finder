import { FoodContext } from "../Context/FoodContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopularCard from "./PopularCard";

const Popular = () => {
  const { recipes } = useContext(FoodContext);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    setPopular(recipes.slice(20, 23));
  }, [recipes]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] flex flex-col md:flex-row m-auto gap-12 px-4 items-center">
        {/* Text Section */}
        <div className="text flex flex-col gap-6 w-full md:w-1/2">
          <h1 className="text-black text-[30px] md:text-[45px] lg:text-[60px] font-semibold leading-tight">
            The Most Popular Recipes on CookBook Right Now
          </h1>
          {/* View All Recipes Link */}
          <Link
            to={"/Recipe-Finder/recipes"}
            className="text-[#C65C14] text-[16px] md:text-[20px] font-semibold hover:underline"
          >
            View All Recipes {`->`}
          </Link>
        </div>

        {/* Recipes Section */}
        <div className="recipes flex flex-col gap-6 w-full md:w-1/2">
          {popular.map((recipe) => (
            <PopularCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
