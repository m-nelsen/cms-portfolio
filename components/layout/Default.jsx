import React from "react";
import Body from "../features/body";
import Footer from "../features/footer";
import Header from "../features/header";

const DefaultLayout = ({ template }) => {
  const { components } = template;
  const { body, footer, header } = components;

  return (
    <div className="container">
      <div className="notification is-primary"></div>
      <Header header={header} />
      <Body body={body} />
      <Footer footer={footer} />
    </div>
  );
};

export default DefaultLayout;
