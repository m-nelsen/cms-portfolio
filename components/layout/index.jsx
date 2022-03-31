import React from "react";
import Default from "../layout/Default";

const Layout = ({ template }) => {
  const { layout } = template;

  switch (layout) {
    case "default":
      return <Default template={template} />;
    default:
      return <p>No layout found</p>;
  }
};

export default Layout;
