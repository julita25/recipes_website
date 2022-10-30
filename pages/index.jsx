import React, { useState } from "react";
import { FlexboxGrid, Col } from "rsuite";
import Card from "../components/Card/Card";
import FoodFilters from "../components/FoodFilters/FoodFilters";

const APP_KEY = "fc1f67d30775e8e666e35dfeb0f07c0e"
const APP_ID = "737ad155"

const HomePage = ({ recipes, filters }) => {
  const [foodFilters, setFoodFilters] = useState()
  console.log(recipes)
  console.log(foodFilters)
  return (
    <div className="flex justify-center">
      <div className="p-5 space-y-5">
        <div className="text-3xl">Check the recipe that works better for you</div>
        <FoodFilters onChange={setFoodFilters} recipes={recipes} />
        <FlexboxGrid justify="space-around" className="w-[68rem]">
          {recipes.map(({ label, image, mealType }) => (
            <FlexboxGrid.Item as={Col} colspan={24} md={6} className="mb-5">
              <Card title={label} img={image} description={mealType} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
      </div>
    </div>

  )
}

export const getServerSideProps = async pageContext => {
  //console.log("context", pageContext);
  const res = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`);

  const apiJson = await res.json();
  const { hits } = apiJson;

  const recipes = []
  hits.forEach((item) => {
    const obj = { ...item.recipe }
    recipes.push(obj)
  });

  return {
    props: {
      recipes
    }
  }
}

export default HomePage;