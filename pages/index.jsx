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
    <div className="flex w-full justify-center pt-10">
      <div className="flex space-x-10">
        <div className="flex flex-col mt-16">
          <FoodFilters onChange={setFoodFilters} />
          <GlutenFreeToggleButton onChange={setIsGlutenFree} />
        </div>
        <div className="w-[65rem] space-y-5">
          <div className="text-3xl col-span-4">Find the best recipe for you!</div>
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
