import { IoSearchOutline } from "react-icons/io5";
import { FoodContext } from "../Context/FoodContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchRecipes } from "../API/RecipeFinder";

const Landing = () => {
  const { setSearchQuery, setDisplayedRecipes } = useContext(FoodContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchQuery(value);  
    const data = await searchRecipes(value);
    setDisplayedRecipes(data.recipes);
    console.log(data);
    navigate("/Recipe-Finder/recipes");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="bg-[url('./landing.png')] min-h-[calc(100vh-72px)] bg-cover bg-no-repeat flex justify-center items-center">
      <div className="search flex justify-center items-center bg-white/20 rounded-[40px] w-full max-w-[950px] mx-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for recipes"
          className="bg-transparent placeholder:text-white px-6 py-2 focus:outline-none w-full text-white md:text-lg lg:text-xl"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="p-2" onClick={handleSearch}>
          <IoSearchOutline className="text-2xl md:text-3xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
