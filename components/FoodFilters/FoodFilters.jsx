import React, { useState } from 'react'
import { Button, Tag } from 'rsuite';

const FoodFilters = ({ recipes, onChange }) => {
  const [filter, setFilter] = useState();
  const dietLabels = recipes.map((item) => item.dietLabels).flat()
  const cleanFilters = [...new Set(dietLabels)]

  const onSelectFilter = (item) => {
    onChange(item);
    setFilter(item);
  };

  console.log("item filter", filter)

  return (
    cleanFilters.map((item) => (
      <Button
        onClick={() => onSelectFilter(item)}
        className={`mx-3 ${item === filter ? "bg-blue-500" : "bg-indigo-500"}`}
        color="violet"
        appearance="primary"
      >{item}
      </Button>
    ))
  )
}

export default FoodFilters