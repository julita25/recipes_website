import { func } from "prop-types";
import React, { useState } from "react";
import { Toggle } from "rsuite";

const GlutenFreeToggleButton = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = ((checked) => {
    setIsChecked(checked);
    onChange(checked);
  });

  return (
    <div className="mt-5 flex flex-col">
      <div>Only gluten free foods</div>
      <Toggle
        data-testid="toggle-btn"
        checked={isChecked}
        onChange={handleToggle}
      />
    </div>
  );
};

GlutenFreeToggleButton.propTypes = {
  onChange: func.isRequired
};

export default GlutenFreeToggleButton;
