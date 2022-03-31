import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PageById = () => {
  const router = useRouter();
  const { id } = router.query;

  const [state, setState] = useState([]);

  useEffect(() => {
    const data = fetch(`http://localhost:3000/api/contentById/${id}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setState(data);
      });
  }, [id]);

  return (
    <>
      <div className="columns" style={{ height: "100vh" }}>
        <div className="column is-one-fifth has-background-light">
          COLUMN ONE
        </div>
        <div className="column is-four-fifths">
          {state && state.title && (
            <div>
              <h1>{state.title}</h1>
              {state.contentElements.map((element) => {
                return <p key={element._id}>{element.content}</p>;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageById;
