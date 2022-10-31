import React, { useState } from "react";
import { Button } from "rsuite";
import { func } from "prop-types";

const FoodFilters = ({ onChange }) => {
  const [filter, setFilter] = useState("All");
  const dietLabels = ["All", "Balanced", "Low-Sodium", "High-Fiber", "Low-Fat"]

  const onSelectFilter = (item) => {
    onChange(item);
    setFilter(item);
  };

  console.log("item filter", filter)

  return (
    dietLabels.map((item) => (
      <Button
        onClick={() => onSelectFilter(item)}
        className={`mx-3 ${item === filter ? "bg-indigo-600" : "bg-blue-400"}`}
        color="violet"
        appearance="primary"
      >{item}
      </Button>
    ))
  );
};

FoodFilters.propTypes = {
  onChange: func.isRequired
}

export default FoodFilters