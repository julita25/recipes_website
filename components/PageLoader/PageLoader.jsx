import React from "react";
import { string } from "prop-types";
import { Loader } from "rsuite";

const PageLoader = ({ size }) => (
  <Loader size={size} center></Loader>
)

PageLoader.propTypes = {
  size: string
}

PageLoader.defaultProps = {
  size: "md"
}

export default PageLoader