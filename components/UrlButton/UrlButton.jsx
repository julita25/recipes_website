import React from "react";
import { Button } from "rsuite";
import { string } from "prop-types";

const UrlButton = ({ url, color, className, children }) => (
  <a href={url}
    target="_blank"
    rel="noreferrer"
  >
    <Button appearance="primary" color={color} className={className}>
      {children}
    </Button>
  </a>
)

UrlButton.propTypes = {
  url: string.isRequired,
  color: string,
  className: string
};

UrlButton.defaultProps = {
  color: "blue",
  className: "bg-blue-500"
};

export default UrlButton;