import React from "react";
import Text from "./Text";
import ImageTag from "./ImageTag";

const Body = ({ body }) => {
  return (
    <div id="body">
      {body.map((e, i) => {
        const { feature } = e;
        switch (feature) {
          case "Text":
            return <Text key={`body-feature-${i}`} props={e} />;
          case "Image":
            return <ImageTag key={`body-feature-${i}`} props={e} />;
          default:
            return <p key={`body-feature-${i}`}>No body feature found</p>;
        }
      })}
    </div>
  );
};

export default Body;
