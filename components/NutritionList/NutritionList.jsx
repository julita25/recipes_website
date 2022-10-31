import React from "react";
import { Panel } from "rsuite";
import { instanceOf } from "prop-types";

const NutritionList = ({ dailyValue }) => {
  console.log(dailyValue)
  return (
    <Panel header="Nutritional Value" className="bg-white">
      {dailyValue.map(({ label, total, unit }) =>
        <div className='flex justify-between mb-2'>
          <div>{label}</div>
          <div>{Math.round(total)}{unit}</div>
        </div>
      )}
    </Panel>
  )
}

NutritionList.propTypes = {
  dailyValue: instanceOf(Array).isRequired
};

export default NutritionList