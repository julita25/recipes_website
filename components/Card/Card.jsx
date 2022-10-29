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
      <img src={img} height="240" />
      <Panel className="bg-blue-500" header={title} height="240">
        <Tag color="green">{description}</Tag>
      </Panel>

    </Panel>
  )
}

export default Card
