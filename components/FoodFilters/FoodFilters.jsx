import React, { useState } from 'react'
import { Button, Tag } from 'rsuite';

const FoodFilters = ({ recipes, onChange }) => {
  const [filter, setFilter] = useState();
  const filters = [];
  recipes.filter(({ dietLabels }) => dietLabels.length)
    .forEach((item) => {
      if (!filters.includes(item.dietLabels)) {
        filters.push(...item.dietLabels);
      }
    })

  return (
    filters.map((item) => (
      <Button
        className="bg-indigo-500 mx-3"
        color="violet"
        appearance="primary"
      >{item}
      </Button>
    ))
  )
}

export default FoodFilters