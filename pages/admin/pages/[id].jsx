import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import CardBoard from "../../../components/pagebuilder/CardBoard";

const PageById = () => {
  const router = useRouter();
  const { id } = router.query;

  const [state, setState] = useState(null);

  console.log("state: ", state);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/templateById/${id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          if (data) {
            setState(data);
          }
        });
    }
  }, [id]);

  const onFeatureDrag = (e) => {
    console.log("onFeatureDrag | e: ", e);
    setState((prevState) => {
      return {
        ...prevState,
        components: {
          ...prevState.components,
          ...e,
        },
      };
    });
  };

  const onButtonClick = () => {
    fetch(`http://localhost:3000/api/templateById/${id}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => console.log("UPDATE SUCCESS: ", res))
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <>
      {state && (
        <div className="columns" style={{ height: "100vh" }}>
          <div className="column is-one-fifth has-background-light mx-4 mt-5">
            <div className="box">
              <h3 className="title is-3">Header</h3>
              <CardBoard
                component={state.components.header}
                id={"header"}
                onFeatureDrag={onFeatureDrag}
              ></CardBoard>
            </div>
            <div className="box">
              <h3 className="title is-3">Body</h3>
              <CardBoard
                component={state.components.body}
                id={"body"}
                onFeatureDrag={onFeatureDrag}
              ></CardBoard>
            </div>
            <div className="box">
              <h3 className="title is-3">Footer</h3>
              <CardBoard
                component={state.components.footer}
                id={"footer"}
                onFeatureDrag={onFeatureDrag}
              ></CardBoard>
            </div>
            <button className="button is-dark" onClick={onButtonClick}>
              Save
            </button>
          </div>
          <div className="column is-four-fifths">
            <Layout template={state} />
          </div>
        </div>
      )}
    </>
  );
};

export default PageById;
