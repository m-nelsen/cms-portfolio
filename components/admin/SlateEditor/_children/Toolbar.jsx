import { useSlate } from "slate-react";
import { Transforms } from "slate";

const tooltipTextStyle = {
  backgroundColor: "black",
  color: "#fff",
  textAlign: "center",
  padding: "5px 0",
  borderRadius: "6px",
  position: "absolute",
  zIndex: 1,
  right: "100px",
  width: "6vw",
};

export const Toolbar = () => {
  const editor = useSlate();

  const { selection } = editor;

  const isNewLine = selection?.anchor?.offset > 0 ? true : false;

  return (
    <div
      style={{
        ...tooltipTextStyle,
        ...{ visibility: isNewLine ? "visible" : "hidden" },
      }}
    >
      <span style={{ margin: "0 5px" }}>Toolbar</span>
      <span
        style={{ margin: "0 5px" }}
        onClick={() => {
          Transforms.insertNodes(editor, {
            type: "box",
            children: [{ text: "" }],
            featureOptions: {
              setWidth: "100%",
              display: "true",
            },
          });
        }}
      >
        Feature
      </span>
    </div>
  );
};

export default Toolbar;
