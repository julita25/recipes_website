import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Message, Panel, Tag } from "rsuite";
import { bool, string } from "prop-types";
import UrlButton from "../UrlButton/UrlButton";
import PageLoader from "../PageLoader/PageLoader";
import { APP_ID, APP_KEY } from "../../constants/apiConstants";

const RecipeCards = ({ filters, isGlutenFree, searchRecipe }) => {
  const router = useRouter();
  const { pathname } = router;
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const fetchRecipes = async (healthLabel, filter = "All") => {
    setLoading(true);
    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchRecipe}${filter !== "All" ? `&diet=${filters.toLowerCase()}` : ""}${healthLabel ? "&health=gluten-free" : ""}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    if (res?.ok) {
      const arr = [];
      const response = await res.json();
      const { hits } = response;
      hits.forEach((item) => {
        const obj = { ...item.recipe };
        arr.push(obj);
      });
      setRecipes(arr);
      setLoading(false);
      setError();
    } else {
      const response = await res.json();
      setLoading(false);
      setError(response?.message || new Error("Recipe not available"));
    }
  };

  useEffect(() => {
    if (isGlutenFree) {
      fetchRecipes(isGlutenFree, filters);
    } else {
      fetchRecipes(false, filters);
    }
  }, [searchRecipe, filters, isGlutenFree]);

  useEffect(() => {
    if (!recipes?.length) {
      setMessage("No recipes found");
    } else {
      setMessage();
    }
  }, [recipes]);

  if (loading) return <PageLoader />;

  return (
    <div className="flex flex-col space-y-5">
      {message && <Message type="error" showIcon header={message} />}
      {error && <Message type="error" showIcon header={error} />}
      <div className="grid lg:grid-cols-4 gap-8 sm:grid-cols-2 grid-cols-1">
        {recipes?.map(({
          label, image, mealType, uri
        }) => (
          <Panel
            shaded
            bordered
            bodyFill
            className="pb-2 border border-transparent bg-gray-100"
          >
            <div>
              <Tag className="absolute" color="green">{mealType}</Tag>
              <img src={image} className="w-full h-42 object-cover" alt={label} />
            </div>
            <Panel
              className="h-28 rounded-none pb-2 overflow-visible"
              header={(
                <div className="flex flex-col w-full gap-2 text-black">
                  <div className="flex">{label}</div>
                  <UrlButton
                    url={`${pathname}recipes/${uri?.split("#")[1]}`}
                    className="bg-yellow-600 border border-2 border-white"
                  >
                    Details
                  </UrlButton>
                </div>
              )}
            />

          </Panel>
        ))}
      </div>
    </div>
  );
};

RecipeCards.propTypes = {
  filters: string.isRequired,
  isGlutenFree: bool.isRequired,
  searchRecipe: string
};

RecipeCards.defaultProps = {
  searchRecipe: ""
};

export default RecipeCards;
