import React, { useMemo, useCallback, useContext } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { Editor, Transforms, Text, createEditor } from "slate";
import Toolbar from "./_children/Toolbar";
import Box from "../../features/Box/Box";
import { GlobalContext } from "../../../pages/admin/pages/[id]";

const defaultValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export const SlateEditor = ({ setSlateValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const { content } = useContext(GlobalContext);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "box":
        return <Box {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Slate
      editor={editor}
      value={content || defaultValue}
      onChange={(value) => {
        setSlateValue(value);
      }}
    >
      <Toolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case "`": {
              event.preventDefault();
              const [match] = Editor.nodes(editor, {
                match: (n) => n.type === "code",
              });
              Transforms.setNodes(
                editor,
                { type: match ? null : "code" },
                { match: (n) => Editor.isBlock(editor, n) }
              );
              break;
            }

            case "b": {
              event.preventDefault();
              Transforms.setNodes(
                editor,
                { bold: true },
                { match: (n) => Text.isText(n), split: true }
              );
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
    >
      {props.children}
    </span>
  );
};

export default SlateEditor;
