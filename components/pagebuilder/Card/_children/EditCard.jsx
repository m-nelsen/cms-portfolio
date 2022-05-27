import { useState } from "react";
import { featuresList } from "../../../features/index";

const EditCard = ({ feature }) => {
  const { fields = [] } = feature;

  const [showModal, setShowModal] = useState(true);

  const selectedFeature =
    featuresList.find((element) => {
      return element.name === feature.feature;
    }) || {};

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = (e) => {
    console.log("onSubmit: ", e);
  };

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
          <form>
            {Object.entries(selectedFeature.fields).map((field, index) => {
              const [key, value] = field;

              const {
                displayName = "",
                value: fieldValue,
                featureId,
              } = fields.find((e) => {
                return e.featureId === key;
              }) || [];

              switch (value) {
                case "string":
                case "number":
                  return (
                    <div className="field" key={`field-${index}`}>
                      <label htmlFor={`field-${index}`}>
                        {displayName || key}
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          id={`field-${index}`}
                          name={featureId}
                        />
                      </div>
                    </div>
                  );
                case "bool":
                  return (
                    <div className="field" key={`field-${index}`}>
                      <input
                        className="mr-2"
                        type="checkbox"
                        id={`field-${index}`}
                        name={featureId}
                        {...(fieldValue ? checked : null)}
                      />
                      <label htmlFor={`field-${index}`}>
                        {displayName || key}
                      </label>
                    </div>
                  );
                case "oneOf":
                  return <p>OneOf field type</p>;
                case "color":
                  return <p>Color field type</p>;
                default:
                  return <p>Missing field type</p>;
              }
            })}
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditCard;
