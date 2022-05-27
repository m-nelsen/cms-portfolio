import React from "react";

const Text = ({ props }) => {
  const { customFields = [] } = props;

  return (
    <>
      {customFields.map((element, index) => {
        return <p key={`text-${index}`}>{element.text}</p>;
      })}
    </>
  );
};

Text.fields = { hideContent: "bool", testBool: "bool" };

export default Text;
