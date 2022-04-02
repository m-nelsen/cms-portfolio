import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import template from "../../../components/pagebuilder/template.json";
import { Grid } from "../../../components/pagebuilder/Draggable";

const PageById = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("id: ", id);

  const [state, setState] = useState([]);

  console.log("state: ", state);

  useEffect(() => {
    const data = fetch(`http://localhost:3000/api/templateById/${id}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setState(data);
      });
  }, [id]);

  return (
    <>
      <div className="columns" style={{ height: "100vh" }}>
        <div className="column is-one-fifth has-background-light">
          <h1>Column One</h1>
          <Grid />
        </div>
        <div className="column is-four-fifths">
          <Layout template={template} />
        </div>
      </div>
    </>
  );
};

export default PageById;
