import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Panel, Tag } from "rsuite";
import { ArrowRightLine } from "@rsuite/icons"
import PageLoader from "/components/PageLoader/PageLoader";
import NutritionList from "/components/NutritionList/NutritionList";
import UrlButton from "/components/UrlButton/UrlButton";

const RecipeDetails = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  const [foodRecipe, setFoodRecipe] = useState()
  const [error, setError] = useState()

  const fetchRecipeById = async () => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=737ad155&app_key=fc1f67d30775e8e666e35dfeb0f07c0e`)
    if (res?.ok) {
      const response = await res.json();
      const { recipe } = response;
      setFoodRecipe(recipe);
    } else {
      const response = await res.json();
      setError(response?.message || new Error("Error getting data"));

    }
  }

  console.log(foodRecipe);

  useEffect(() => {
    fetchRecipeById();
  }, []);

  if (!foodRecipe) return <PageLoader />

  return (
    <>
      <div className="bg-yellow-700 h-42 p-5 space-y-10">
        <div className="text-white text-3xl">{foodRecipe.label}</div>
        <div className="flex space-x-10">
          <div className="text-xl text-white">
            Calories: {Math.round(foodRecipe.calories)}
          </div>
          <div className="flex text-xl text-white space-x-2">
            <div>Dish type</div>
            <Tag color="violet">{foodRecipe.dishType}</Tag>
          </div>
          <div className="flex text-xl text-white space-x-2">
            <div>Meal type</div>
            <Tag color="violet">{foodRecipe.mealType}</Tag>
          </div>
        </div>
      </div>
      <div className="flex p-4 space-x-5">
        <div className="w-1/3">
          <img className="w-full" src={foodRecipe.image} />
          <Panel
            header="Ingredients"
            className="bg-white"
          >
            {foodRecipe.ingredientLines.map((item) =>
              <div><ArrowRightLine />{item}</div>
            )}
          </Panel>
          <div className="mt-2">
            <Panel header="Recipe link" className="bg-white">
              <UrlButton url={foodRecipe.url} />
            </Panel>
          </div>
        </div>
        <div className="w-3/4">
          <NutritionList dailyValue={foodRecipe.digest} />
        </div>
      </div>
    </>
  )
}

export default RecipeDetails