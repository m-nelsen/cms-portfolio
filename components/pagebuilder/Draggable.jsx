import React, { useState } from "react";

export const Grid = (props) => {
  const [dragList, setDragList] = useState(["Dog", "Cat", "Frog", "Bird"]);

  const dragStart = (e) => {
    const targetItem = e.target.getAttribute("data-id");
    e.dataTransfer.setData("text/plain", targetItem);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();

    let list = new Array(...dragList);

    const dragItem = e.dataTransfer.getData("text/plain");
    const dragItemIndex = list.indexOf(dragItem);
    const dropItemIndex = list.indexOf(e.target.getAttribute("data-id"));

    // Remove the dragged item
    list.splice(dragItemIndex, 1);

    // Add the dragged item into new spot
    list.splice(dropItemIndex, 0, dragItem);

    setDragList(list);
  };

  return (
    <ol onDrop={drop} onDragOver={dragOver}>
      {dragList.map((e, i) => {
        return (
          <li
            key={`li-${i}`}
            data-id={e}
            draggable="true"
            onDragStart={dragStart}
            onDragOver={dragOver}
            style={{
              margin: "15px",
              padding: "10px",
            }}
          >
            {e}
          </li>
        );
      })}
    </ol>
  );
};

export default Grid;
