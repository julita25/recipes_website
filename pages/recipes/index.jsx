import React, { useState } from "react";
import Card from "../../components/Card/Card";
import FoodFilters from "../../components/FoodFilters/FoodFilters";

const HomePage = () => {
  const [foodFilters, setFoodFilters] = useState();

  return (
    <div className="flex w-full">
      <div className="p-5 space-y-5">
        <div className="flex space-x-5">
          <div className="w-2/5 flex justify-end mt-16">
            <FoodFilters onChange={setFoodFilters} />
          </div>
          <div className="w-[82rem] grid grid-cols-4 gap-5 space-y-4">
            <div className="text-3xl col-span-4">Find the most suitable italian recipe!</div>
            <Card filters={foodFilters} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
