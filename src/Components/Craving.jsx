import { useState, useContext, useEffect } from "react";
import CravingCard from "./CravingCard";
import { FoodContext } from "../Context/FoodContext";

const Craving = () => {
  const [craving, setCraving] = useState([]);
  const { recipes } = useContext(FoodContext);

  useEffect(() => {
    recipes.sort(() => Math.random() - 0.5);
    setCraving(recipes.slice(0, 5));
  }, [recipes]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] flex flex-col m-auto gap-12 px-4">
        {/* Title */}
        <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[550px] px-3 py-2 font-semibold text-2xl md:text-3xl lg:text-[48px]">
          <h1>WHAT {`WE’RE`} CRAVING</h1>
        </div>

        {/* Cards Grid */}
        <div className="cards grid grid-flow-row auto-rows-fr gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {craving.map((recipe) => (
            <CravingCard
              key={recipe.id}
              name={recipe.name}
              img={recipe.image}
              id={recipe.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Craving;
