import CollectionCard from "./CollectionCard";
import { FoodContext } from "../Context/FoodContext";
import { useContext, useEffect, useState } from "react";

const Collections = () => {
  const collections = ["Lunch", "Dinner", "Snack"];
  const [imgs, setImgs] = useState([]);
  const { recipes } = useContext(FoodContext);

  useEffect(() => {
    const newImgs = collections.map((mealType) => {
      const recipe = recipes.find((r) => r.mealType[0] === mealType);
      return recipe ? recipe.image : null;
    });
    setImgs(newImgs);
  }, [recipes]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] flex flex-col m-auto gap-12 px-4">
        {/* Title */}
        <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[270px] px-3 py-2 font-semibold text-2xl md:text-3xl lg:text-[48px]">
          <h1>Collections</h1>
        </div>

        {/* Collections Grid */}
        <div className="cards grid grid-flow-row auto-rows-fr gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {collections.map((collection, index) => (
            <CollectionCard key={index} title={collection} img={imgs[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
