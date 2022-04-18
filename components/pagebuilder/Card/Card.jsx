import { useState } from "react";
import "./Card.module.scss";

const Card = ({ dataId, draggable, dragStart, dragOver, feature }) => {
  const [showOptions, setShowOptions] = useState(false);

  const onOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <li
      className="card no-style-type"
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
          <a href="#" className="card-footer-item">
            Edit
          </a>
          <a href="#" className="card-footer-item">
            Delete
          </a>
        </footer>
      )}
    </li>
  );
};

export default Card;
