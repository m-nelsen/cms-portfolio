import { useState } from "react";

const EditCard = ({ feature }) => {
  const { customFields = [] } = feature;

  const [showModal, setShowModal] = useState(true);

  console.log("EditCard | feature: ", feature);

  const closeModal = () => {
    setShowModal(false);
  };

  const onSaveChanges = () => {};

  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{feature.feature}</p>
          <button
            className="delete"
            onClick={closeModal}
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <textarea
            className="textarea"
            defaultValue={customFields[0].text}
            placeholder="e.g. Hello world"
          ></textarea>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onSaveChanges}>
            Save changes
          </button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default EditCard;
