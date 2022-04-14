import React, { useState, useEffect } from "react";
import Card from "./Card";

export const DraggableFeatureBoard = (props) => {
  const { component, id, onFeatureDrag } = props;

  const [featureList, setFeatureList] = useState(component);

  const dragStart = (e) => {
    const targetItem = e.target.getAttribute("data-id");
    e.dataTransfer.setData("text/plain", targetItem);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();

    let list = new Array(...featureList);

    const dragItemObject = list.find(
      (element) => element._id === e.dataTransfer.getData("text/plain")
    );

    const dragItemIndex = list.findIndex(
      (element) => element._id === dragItemObject._id
    );

    const dropItemIndex = list.findIndex(
      (element) => element._id === e.target.getAttribute("data-id")
    );

    // Remove the dragged item from old index
    list.splice(dragItemIndex, 1);

    // Add the dragged item into new index
    list.splice(dropItemIndex, 0, dragItemObject);

    const updatedFeatureList = [...list];

    setFeatureList(updatedFeatureList);
    onFeatureDrag({ [id]: updatedFeatureList });
  };

  return (
    <ol onDrop={drop} onDragOver={dragOver}>
      {featureList.map((e, i) => {
        return (
          <li
            key={`li-${i}`}
            data-id={e._id}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
            style={{
              margin: "15px",
              padding: "10px",
            }}
          >
            <Card feature={e} />
          </li>
        );
      })}
    </ol>
  );
};

export default DraggableFeatureBoard;
