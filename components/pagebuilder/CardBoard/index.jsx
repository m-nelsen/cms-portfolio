import React, { useState, useContext } from "react";
import Card from "../Card/index.jsx";
import AddCard from "./_children/AddCard";
import { GlobalContext } from "../../../pages/admin/pages/[id].jsx";

export const CardBoard = (props) => {
  const { component, id, onFeatureDrag } = props;

  const [featureList, setFeatureList] = useState(component);
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  const globalContext = useContext(GlobalContext);

  console.log("globalContext: ", globalContext);

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

    setFeatureList(list);
    onFeatureDrag({ [id]: list });
  };

  const onCardDelete = (e) => {
    let list = new Array(...featureList);

    const cardId = e.target.getAttribute("data-id");

    const cardIndex = list.findIndex((element) => element._id === cardId);

    list.splice(cardIndex, 1);
    setFeatureList(list);
    onFeatureDrag({ [id]: list });
  };

  const onCardAdd = (e) => {
    setShowAddCardModal(!showAddCardModal);
  };

  const addFeature = (feature) => {
    let list = new Array(...featureList);

    list.push(feature);

    setFeatureList(list);
    onFeatureDrag({ [id]: list });
  };

  return (
    <>
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
      <button className="button is-light is-fullwidth" onClick={onCardAdd}>
        Add Feature
      </button>
      {showAddCardModal && <AddCard addFeature={addFeature} id={id} />}
    </>
  );
};

export default CardBoard;
