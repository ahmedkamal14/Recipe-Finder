import { getRecipesByTag } from "../API/RecipeFinder";
import { useEffect, useState, useContext } from "react";
import TagCard from "./TagCard";
import { FoodContext } from "../Context/FoodContext";

const MoreRecipes = () => {
  const [displayTags, setDisplayTags] = useState([]);
  const [imgs, setImgs] = useState([]);

  const { tags } = useContext(FoodContext);

  useEffect(() => {
    const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 5);
    setDisplayTags(randomTags);
  }, [tags]);

  const fetchImgs = async () => {
    const data = await Promise.all(
      displayTags.map(async (tag) => {
        const res = await getRecipesByTag(tag);
        return res.recipes[0].image;
      })
    );
    setImgs(data);
  };

  useEffect(() => {
    if (displayTags.length) {
      fetchImgs();
    }
  }, [displayTags]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] flex flex-col m-auto gap-12 px-4">
        {/* Title */}
        <div className="title bg-[#EBC76B] flex justify-start items-center w-full max-w-[380px] px-3 py-2 font-semibold text-2xl md:text-3xl lg:text-[48px]">
          <h1>MORE RECIPES</h1>
        </div>

        {/* Tag Cards */}
        <div className="cards grid grid-flow-row auto-rows-fr gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {displayTags.map((tag, index) => (
            <TagCard key={Date.now} name={tag} img={imgs[index]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreRecipes;
