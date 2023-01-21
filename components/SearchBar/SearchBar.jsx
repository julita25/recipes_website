import React, { useState } from "react";
import { Input, InputGroup } from "rsuite";
import { Search } from "@rsuite/icons";
import { func } from "prop-types";

const SearchBar = ({ onChange }) => {
  const [val, setVal] = useState("");

  return (
    <InputGroup>
      <Input size="lg" value={val} onChange={setVal} placeholder="Search" />
      <InputGroup.Button onClick={() => onChange(val)} className="bg-yellow-600 hover:bg-yellow-700 text-white hover:text-white">
        <Search />
      </InputGroup.Button>
    </InputGroup>
  );
};

SearchBar.propTypes = {
  onChange: func.isRequired
};

export default SearchBar;
