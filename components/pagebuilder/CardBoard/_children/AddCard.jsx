import { useState } from "react";
import { featuresList } from "../../../features";
import styles from "./AddCard.module.scss";

// const featureList = ["NavBar", "Text", "Image", "SiteLinks"];

const AddCard = ({ addFeature, id }) => {
  const [showModal, setShowModal] = useState(true);
  const [selectValue, setSelectValue] = useState(null);
  const [customField, setCustomField] = useState([]);

  const closeModal = () => {
    setShowModal(false);
  };

  const onSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const onSaveChanges = () => {
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

  console.log("featuresList: ", Object.entries(featuresList));

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
        <section className="modal-card-body" onChange={onSelectChange}>
          <form>
            <div className="field">
              <label htmlFor="feature-select">Add Feature:</label>
              <div className="control">
                <select
                  className={styles["form-select"]}
                  name="features"
                  id="feature-select"
                >
                  <option value=""></option>
                  {Object.entries(featuresList).map((element, index) => {
                    return (
                      <option key={`option-${index + 1}`} value={element[0]}>
                        {element[0]}
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
