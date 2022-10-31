import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Panel, Tag } from "rsuite";
import { string } from "prop-types";
import UrlButton from "../UrlButton/UrlButton";
import PageLoader from "../PageLoader/PageLoader";
import { APP_ID, APP_KEY } from "../../constants/apiConstants";

const Card = ({ filters }) => {
  const router = useRouter();
  const pathname = router.asPath;
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (filter = "All") => {
    const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=pasta${filter !== "All" ? `&diet=${filters.toLowerCase()}` : ""}&app_id=${APP_ID}&app_key=${APP_KEY}`);
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
    }
  };

  useEffect(() => {
    fetchRecipes(filters);
  }, [filters]);

  if (loading) return <PageLoader />;

  return (
    recipes?.map(({
      label, image, mealType, uri
    }) => (
      <Panel
        shaded
        bordered
        bodyFill
        className="w-full h-42"
      >
        <div>
          <Tag className="absolute" color="green">{mealType}</Tag>
          <img src={image} className="w-full h-42 object-cover" alt={label} />
        </div>
        <Panel
          className="bg-yellow-700 h-28 rounded-none"
          header={(
            <div className="flex flex-col space-y-2">
              <div className="flex text-white">{label}</div>
              <UrlButton url={`${pathname}/${uri?.split("#")[1]}`} color="yellow" className="bg-yellow-500">Details</UrlButton>
            </div>
          )}
        />

      </Panel>
    ))
  );
};

Card.propTypes = {
  filters: string.isRequired
};

export default Card;
