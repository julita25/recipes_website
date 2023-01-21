import React from "react";
import { Button } from "rsuite";
import { string } from "prop-types";

const UrlButton = ({
  url, color, className, children
}) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    <Button appearance="primary" color={color} className={className}>
      {children}
    </Button>
  </a>
);

UrlButton.propTypes = {
  url: string.isRequired,
  color: string,
  className: string,
  children: string.isRequired
};

UrlButton.defaultProps = {
  color: "orange",
  className: "bg-yellow-700"
};

export default UrlButton;
