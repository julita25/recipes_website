import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Loader, Panel, Tag } from "rsuite";

const Card = ({ description, img, title, id }) => {
  const router = useRouter();
  const pathname = router.asPath;
  console.log("id", id);
  const recipeId = id.split("#")[1]

  return (
    <Panel
      shaded
      bordered
      bodyFill
      className="w-max h-42"
    >
      <img src={img} className="w-56 h-42 object-cover" />
      <Panel className="bg-blue-500 w-56 h-28" header={title}>
        <Tag color="green">{description}</Tag>
        <Button onClick={() => router.push(pathname + `/${recipeId}`)}>Details</Button>
      </Panel>

    </Panel>
  )
}

export default Card
