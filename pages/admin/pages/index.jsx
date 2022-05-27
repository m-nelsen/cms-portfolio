import { useState, useEffect } from "react";

export const Admin = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/content")
      .then((res) => res.json())
      .then(({ data }) => {
        setState(data);
      });
  }, []);

  return (
    <>
      <nav className="navbar is-primary">
        <div className="navbar-item">
          <h1 className="is-size-1">Pages</h1>
        </div>
      </nav>
      <div>
        <div className="columns">
          {state &&
            state.map((page) => {
              return (
                <div key={page._id} className="column card m-5">
                  <div className="card-header">
                    <div className="card-header-title">{page.title}</div>
                  </div>
                  <div className="card-content">{page.description}</div>
                  <footer className="card-footer">
                    <a
                      href={`/admin/pages/${page._id}`}
                      className="card-footer-item"
                    >
                      Edit
                    </a>
                    <a
                      href=""
                      className="card-footer-item"
                      data-id={page._id}
                      onClick={(event) => {
                        event.preventDefault();
                        const dataId = event.target.getAttribute("data-id");

                        fetch(
                          `http://localhost:3000/api/contentById/${dataId}`,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((res) => console.log("DELETE SUCCESS: ", res))
                          .catch((error) => {
                            throw new Error(error);
                          });
                      }}
                    >
                      Delete
                    </a>
                  </footer>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Admin;
