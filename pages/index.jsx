import React, { useEffect } from "react";
import Card from "../components/Card/Card";

const APP_KEY = "fc1f67d30775e8e666e35dfeb0f07c0e"
const APP_ID = "737ad155"

const HomePage = ({ recipes }) => {
  console.log(recipes)
  return (
    <div className="flex space-x-2">
      {recipes.map(({ label, image, mealType }) => (
        <Card title={label} img={image} description={mealType} />
      ))}
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
  console.log(recipes);

  console.log("API JSON", apiJson);

  return {
    props: {
      recipes
    }
  }
}

export default HomePage;