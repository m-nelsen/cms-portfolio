export const Box = (props) => {
  return (
    <div
      {...props.attributes}
      style={{ backgroundColor: "lightblue", width: "100vw", height: "10vh" }}
      contentEditable={false}
    >
      <p>Box</p>
      <div>{props.children}</div>
    </div>
  );
};

Box.featureOptions = [
  {
    displayName: "Set Width",
    description: "",
    defaultValue: "100%",
    name: "setWidth",
    type: "string",
  },
  {
    displayName: "Display",
    description: "",
    defaultValue: "true",
    name: "display",
    type: "bool",
  },
];

export default Box;
