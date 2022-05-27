import { useContext } from "react";
import { GlobalContext } from "../../../pages/admin/pages/[id]";

export const SidePanel = ({ slateValue }) => {
  const { _id, title, description, pageUrl, publishedDate, updatedDate } =
    useContext(GlobalContext);

  const updatedContext = { ...useContext(GlobalContext), content: slateValue };

  return (
    <div
      style={{ backgroundColor: "antiquewhite", height: "100%" }}
      className="p-4"
    >
      <h3 className="is-size-2">{title}</h3>
      <p>
        <strong>Published Date:</strong>
      </p>
      <p>{publishedDate}</p>
      <p>
        <strong>Last Updated:</strong>
      </p>
      <p>{updatedDate}</p>
      <p>
        <strong>Description:</strong>
      </p>
      <p>{description}</p>

      <div className="control">
        <button className="button">Publish</button>
      </div>
      <div className="control">
        <button
          className="button"
          onClick={() => {
            fetch(`http://localhost:3000/api/contentById/${_id}`, {
              method: "PUT",
              header: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedContext),
            })
              .then((res) => console.log("UPDATE SUCCESS: ", res))
              .catch((error) => {
                throw new Error(error);
              });
          }}
        >
          Save
        </button>
      </div>

      <br />

      <p>
        <strong>Canonical URL:</strong>
      </p>
      <a href={pageUrl} className="has-background-light">
        {pageUrl}
      </a>

      <p>MetaData Editor</p>
      <textarea></textarea>
    </div>
  );
};

export default SidePanel;
