import React from "react";
import { Panel, Tag } from "rsuite";

const Card = ({ description, img, title }) => {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      className="w-max"
    >
      <img src={img} className="w-56 h-42 object-cover" />
      <Panel className="bg-blue-500 w-56 h-28" header={title}>
        <Tag color="green">{description}</Tag>
      </Panel>

    </Panel>
  )
}

export default Card
