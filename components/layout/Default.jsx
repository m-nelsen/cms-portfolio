import React from "react";
import Body from "../features/body";

const DefaultLayout = ({ template }) => {
  const { components } = template;
  const { body } = components;

  return (
    <div className="container">
      <div className="notification is-primary">
        This container is <strong>centered</strong> on desktop and larger
        viewports.
      </div>
      <Body body={body} />
    </div>
  );
};

export default DefaultLayout;
