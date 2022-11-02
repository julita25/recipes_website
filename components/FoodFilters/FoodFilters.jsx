import React, { useState } from "react";
import { func } from "prop-types";

const FoodFilters = ({ onChange }) => {
  const [filter, setFilter] = useState("All");
  const dietLabels = ["All", "Balanced", "Low-Sodium", "High-Fiber", "Low-Fat"];

  const onSelectFilter = (item) => {
    onChange(item);
    setFilter(item);
  };

  return (
    <div className="flex flex-col space-y-8 w-max">
      <div className="flex flex-col space-y-4">
        <div>Filter by diet</div>
        {dietLabels.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelectFilter(item)}
            className={`${item === filter ? "bg-indigo-800 hover" : "hover:bg-blue-800 bg-blue-500"} rounded-lg p-1 py-2 text-white`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

FoodFilters.propTypes = {
  onChange: func.isRequired
};

export default FoodFilters;
