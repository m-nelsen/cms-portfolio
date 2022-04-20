import { useState } from "react";
import EditCard from "./_children/EditCard";
import styles from "./index.module.scss";

const Card = ({
  dataId,
  draggable,
  dragStart,
  dragOver,
  feature,
  onCardDelete,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const onOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const onEditClick = () => {
    setShowEditModal(!showEditModal);
  };

  return (
    <li
      className={`card my-3 ${styles["no-style-type"]}`}
      data-id={dataId}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <header className="card-header">
        <p className="card-header-title">{feature.feature}</p>
        <button
          className="card-header-icon"
          onClick={onOptionsClick}
          aria-label="more options"
        >
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      {showOptions && (
        <footer className="card-footer">
          <button className="card-footer-item" onClick={onEditClick}>
            Edit
          </button>
          <button
            className="card-footer-item"
            data-id={dataId}
            onClick={onCardDelete}
          >
            Delete
          </button>
        </footer>
      )}
      {showEditModal && <EditCard feature={feature} />}
    </li>
  );
};

export default Card;
