import React, { useState } from "react";
import { Message } from "rsuite";
import RecipeCards from "../components/RecipeCards/RecipeCards";
import FoodFilters from "../components/FoodFilters/FoodFilters";
import GlutenFreeToggleButton from "../components/GlutenFreeToggleButton/GlutenFreeToggleButton";
import SearchBar from "../components/SearchBar/SearchBar";

const HomePage = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [foodFilters, setFoodFilters] = useState("All");
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  const isEmptytSearch = !searchRecipe && foodFilters === "All" && !isGlutenFree;

  return (
    <div className="flex flex-col w-screen justify-center items-center md:p-10 p-5">
      <div className="text-3xl flex md:mb-10 font-bold">Find the best recipe!</div>
      <div className="flex flex-col gap-10 justify-center md:flex-row">
        <div className="md:mt-16 mt-10">
          <FoodFilters onChange={setFoodFilters} />
          <GlutenFreeToggleButton onChange={setIsGlutenFree} />
        </div>
        <div className="space-y-5 lg:w-[62rem] md:w-[35rem] w-[22rem]">
          <SearchBar onChange={setSearchRecipe} />
          {isEmptytSearch ? (
            <Message
              showIcon
              header="Start typing any food you crave, or set some filters!, we will have a recipe for it!"
            />
          ) : (
            <RecipeCards
              filters={foodFilters}
              isGlutenFree={isGlutenFree}
              searchRecipe={searchRecipe}
            />
          )}
        </div>
      </div>
    </div>

  );
};

export default HomePage;
