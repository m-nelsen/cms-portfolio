import React from "react";

const Text = ({ props, id }) => {
  const { customFields = [] } = props;

  return (
    <>
      {customFields.map((element, index) => {
        return <p key={`text-${index}`}>{element.text}</p>;
      })}
    </>
  );
};

Text.fields = {
  id: "number",
  password: "string",
  isTrue: "bool",
};

export default Text;
