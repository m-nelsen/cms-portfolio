import React, { useState, useEffect } from "react";
import Card from "./Card/Card";

export const CardBoard = (props) => {
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

  const onCardDelete = (e) => {
    let list = new Array(...featureList);

    const cardId = e.target.getAttribute("data-id");

    const cardIndex = list.findIndex((element) => element._id === cardId);

    list.splice(cardIndex, 1);
    setFeatureList(list);
  };

  return (
    <ol onDrop={drop} onDragOver={dragOver}>
      {featureList.map((e, i) => {
        return (
          <Card
            key={`li-${i}`}
            feature={e}
            dataId={e._id}
            draggable="true"
            dragStart={dragStart}
            dragOver={dragOver}
            onCardDelete={onCardDelete}
          />
        );
      })}
    </ol>
  );
};

export default CardBoard;
