import { useState } from "react";
import { featuresList } from "../../../features";
import styles from "./AddCard.module.scss";

const AddCard = ({ addFeature, id }) => {
  const [showModal, setShowModal] = useState(true);
  const [selectValue, setSelectValue] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const onSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const onSaveChanges = (e) => {
    e.preventDefault();

    addFeature({
      feature: selectValue,
      customFields: [
        {
          text: "This is example text for the Text feature",
          type: "text",
        },
      ],
    });

    closeModal();
  };

  return (
    <div className={`modal ${showModal ? "is-active" : ""}`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{selectValue}</p>
          <button
            className="delete"
            onClick={closeModal}
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <form>
            <div className="field">
              <label htmlFor="feature-select">Add Feature:</label>
              <div className="control">
                <select
                  className={styles["form-select"]}
                  name="features"
                  id="feature-select"
                  onChange={onSelectChange}
                >
                  <option value=""></option>
                  {featuresList.map((element, index) => {
                    return (
                      <option key={`option-${index + 1}`} value={element.name}>
                        {element.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button
                  className="button is-success mr-4"
                  onClick={onSaveChanges}
                >
                  Save changes
                </button>
                <button className="button" onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCard;
