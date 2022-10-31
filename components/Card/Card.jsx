import React from "react";
import { useRouter } from "next/router";
import { Panel, Tag } from "rsuite";
import { string } from "prop-types";
import UrlButton from "/UrlButton/UrlButton";
import PageLoader from "/PageLoader/PageLoader";

const Card = ({ description, img, title, id }) => {
  const router = useRouter();
  const pathname = router.asPath;
  const recipeId = id.split("#")[1];
  //  const [isLoading, setIsLoading] = useState(true);

  return (
    <Panel
      shaded
      bordered
      bodyFill
      className="w-max h-42"
    >
      <img src={img} className="w-56 h-42 object-cover" />
      <Panel className="bg-indigo-500 w-56 h-28 space-between text-white" header={title}>
        <Tag color="green">{description}</Tag>
        <UrlButton url={`${pathname}/${recipeId}`}>Details</UrlButton>
      </Panel>
    </Panel >
  )
};

Card.propTypes = {
  description: string.isRequired,
  img: string.isRequired,
  title: string.isRequired,
  id: string.isRequired
};

export default Card;
