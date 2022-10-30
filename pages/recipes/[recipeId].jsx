import React from "react";
import { useRouter } from "next/router";

const RecipeDetails = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  console.log(recipeId)
  return (
    <div>Hello</div>
  )
}

export default RecipeDetails