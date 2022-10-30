import React, { useEffect, useState } from "react";
import { FlexboxGrid, Col, Loader } from "rsuite";
import Card from "/components/Card/Card";
import FoodFilters from "/components/FoodFilters/FoodFilters";

const APP_KEY = "fc1f67d30775e8e666e35dfeb0f07c0e"
const APP_ID = "737ad155"

const HomePage = () => {
  const [foodFilters, setFoodFilters] = useState();
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const fetchRecipes = async (filter = "All") => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pasta${filter !== "All" ? `&diet=${filter.toLowerCase()}` : ""}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    if (res?.ok) {
      const arr = []
      const response = await res.json();
      const { hits } = response;
      hits.forEach((item) => {
        const obj = { ...item.recipe }
        arr.push(obj)
      });
      setRecipes(arr);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchRecipes(foodFilters)
  }, [foodFilters])

  console.log(recipes)

  if (!recipes?.length || isLoading) return <Loader center size="md" />

  return (
    <div className="flex justify-center">
      <div className="p-5 space-y-5">
        <div className="text-3xl">Check the recipe that works better for you</div>
        <FoodFilters onChange={setFoodFilters} />
        <FlexboxGrid justify="space-around" className="w-[68rem]">
          {recipes.map(({ label, image, mealType, uri }) => (
            <FlexboxGrid.Item as={Col} colspan={24} md={6} className="mb-5">
              <Card title={label} img={image} description={mealType} id={uri} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
      </div>
    </div>

  )
}



export default HomePage;